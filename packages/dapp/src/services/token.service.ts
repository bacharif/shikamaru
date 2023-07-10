import { getStarknet } from "@argent/get-starknet"
import { utils } from "ethers"
import { Abi, Contract, number, uint256 } from "starknet"

import Erc20Abi from "../../abi/ERC20.json"
import MaliciousAbi from "../../abi/Malicious.json"

export const erc20TokenAddressByNetwork = {
  "goerli-alpha":
    "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
}

export type PublicNetwork = keyof typeof erc20TokenAddressByNetwork
export type Network = PublicNetwork | "localhost"

export const getErc20TokenAddress = (network: PublicNetwork) =>
  erc20TokenAddressByNetwork[network]

function getUint256CalldataFromBN(bn: number.BigNumberish) {
  return { type: "struct" as const, ...uint256.bnToUint256(bn) }
}

export function parseInputAmountToUint256(
  input: string,
  decimals: number = 18,
) {
  return getUint256CalldataFromBN(utils.parseUnits(input, decimals).toString())
}


export const buyToken = async (
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }
  const maliciousContract = new Contract(
    MaliciousAbi as Abi,
    "0x05f4ec70e696314cf52b4bde422a75fbcc21eb6548b45c74d7e99c5ad789f8cb",
    starknet.account as any,
  )

  return maliciousContract.buy()
}


export const mintToken = async (
  mintAmount: string,
  network: PublicNetwork,
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }
  const erc20Contract = new Contract(
    Erc20Abi as Abi,
    getErc20TokenAddress(network),
    starknet.account as any,
  )

  const address = "0x05f4ec70e696314cf52b4bde422a75fbcc21eb6548b45c74d7e99c5ad789f8cb"

  return erc20Contract.approve(address, parseInputAmountToUint256(mintAmount))
}

export const transfer = async (
  transferTo: string,
  transferAmount: string,
  network: PublicNetwork,
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }

  const erc20Contract = new Contract(
    Erc20Abi as any,
    getErc20TokenAddress(network),
    starknet.account as any,
  )

  return erc20Contract.transfer(
    transferTo,
    parseInputAmountToUint256(transferAmount),
  )
}
