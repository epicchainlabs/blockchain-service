import { Network } from '@epicchain/blockchain-service'
import commonTokens from '../assets/tokens/common.json'
import { BSEpicChainConstants, BSEpicChainNetworkId } from '../constants/BSEpicChainConstants'

export class BSEpicChainHelper {
  static getTokens(network: Network<BSEpicChainNetworkId>) {
    const extraTokens = BSEpicChainConstants.EXTRA_TOKENS_BY_NETWORK_ID[network.id] ?? []
    return [...extraTokens, ...commonTokens]
  }

  static getRpcList(network: Network<BSEpicChainNetworkId>) {
    return BSEpicChainConstants.RPC_LIST_BY_NETWORK_ID[network.id] ?? []
  }

  static isMainnet(network: Network<BSEpicChainNetworkId>) {
    return BSEpicChainConstants.MAINNET_NETWORK_IDS.includes(network.id)
  }

  static isCustomNet(network: Network<BSEpicChainNetworkId>) {
    return !BSEpicChainConstants.ALL_NETWORK_IDS.includes(network.id)
  }

  static normalizeHash(hash: string): string {
    return hash.startsWith('0x') ? hash.slice(2) : hash
  }
}
