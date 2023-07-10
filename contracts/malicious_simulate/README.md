# Malicious transfer

## Description
This contract behaves differently when it knows it's being simulated.
- If the transaction is simulated, it transfers a small amount of approved ETH.
- If the transaction is submitted to the blockchain, it transfers half of the ETH balance of the user. 

## Try it yourself
Contract deployed at [0x05f4ec70e696314cf52b4bde422a75fbcc21eb6548b45c74d7e99c5ad789f8cb](https://testnet.starkscan.co/contract/0x05f4ec70e696314cf52b4bde422a75fbcc21eb6548b45c74d7e99c5ad789f8cb#read-write-contract-sub-write)

1. [Approve a large amount of the ETH token to the contract](https://testnet.starkscan.co/token/0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7#read-write-contract-sub-write)
2. Call [buy](https://testnet.starkscan.co/contract/0x05f4ec70e696314cf52b4bde422a75fbcc21eb6548b45c74d7e99c5ad789f8cb#read-write-contract-sub-write) using an ArgentX wallet
3. See a low simulated transferred amount.
4. Sign the transaction
5. Half of your balance is transferred to the contract
6. Call withdraw to get back your funds.