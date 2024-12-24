import { Network, NetworkId, Token } from '@epicchain/blockchain-service'
import mainnetTokens from '../assets/tokens/mainnet.json'

export type BSEpicChainNetworkId = NetworkId<'mainnet' | 'testnet'>

export class BSEpicChainConstants {
  static EXTRA_TOKENS_BY_NETWORK_ID: Partial<Record<BSEpicChainNetworkId, Token[]>> = {
    mainnet: mainnetTokens,
  }

  static RPC_LIST_BY_NETWORK_ID: Partial<Record<BSEpicChainNetworkId, string[]>> = {
    mainnet: [
      'http://mainnet1-seed.epic-chain.org:10111',
      'http://mainnet2-seed.epic-chain.org:10111',
      'http://mainnet3-seed.epic-chain.org:10111',
      'http://mainnet4-seed.epic-chain.org:10111',
      'http://mainnet5-seed.epic-chain.org:10111',
    ],
    testnet: [
      'http://testnet1-seed.epic-chain.org:20111',
      'http://testnet2-seed.epic-chain.org:20111',
      'http://testnet3-seed.epic-chain.org:20111',
      'http://testnet4-seed.epic-chain.org:20111',
      'http://testnet5-seed.epic-chain.org:20111',
    ],
  }

  static MAINNET_NETWORK_IDS: BSEpicChainNetworkId[] = ['mainnet']
  static TESTNET_NETWORK_IDS: BSEpicChainNetworkId[] = ['testnet']
  static ALL_NETWORK_IDS: BSEpicChainNetworkId[] = [...this.MAINNET_NETWORK_IDS, ...this.TESTNET_NETWORK_IDS]

  static MAINNET_NETWORKS: Network<BSEpicChainNetworkId>[] = [
    {
      id: 'mainnet',
      name: 'Mainnet',
      url: this.RPC_LIST_BY_NETWORK_ID['mainnet']![0],
    },
  ]
  static TESTNET_NETWORKS: Network<BSEpicChainNetworkId>[] = [
    {
      id: 'testnet',
      name: 'Testnet',
      url: this.RPC_LIST_BY_NETWORK_ID['testnet']![0],
    },
  ]
  static ALL_NETWORKS: Network<BSEpicChainNetworkId>[] = [...this.MAINNET_NETWORKS, ...this.TESTNET_NETWORKS]

  static DEFAULT_NETWORK = this.MAINNET_NETWORKS[0]

  static NEO_NS_HASH = '0x50ac1c37690cc2cfc594472833cf57505d5f46de'

  static DEFAULT_BIP44_DERIVATION_PATH = "m/44'/888'/0'/0/?"
}
