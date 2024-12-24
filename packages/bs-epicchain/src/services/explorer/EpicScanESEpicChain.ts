import { BuildNftUrlParams, ExplorerService, Network } from '@epicchain/blockchain-service'
import { BSEpicChainNetworkId } from '../../constants/BSEpicChainConstants'
import { BSEpicChainHelper } from '../../helpers/BSEpicChainHelper'

export class DoraESNeo3 implements ExplorerService {
  readonly #network: Network<BSEpicChainNetworkId>

  constructor(network: Network<BSEpicChainNetworkId>) {
    this.#network = network
  }

  buildTransactionUrl(hash: string): string {
    if (BSEpicChainHelper.isCustomNet(this.#network)) throw new Error('EpicScan is only available on mainnet and testnet')
    return `https://epicscan.org/transaction/epicchain/${this.#network.id}/${hash}`
  }

  buildContractUrl(contractHash: string): string {
    if (BSEpicChainHelper.isCustomNet(this.#network)) throw new Error('EpicScan is only available on mainnet and testnet')
    return `https://epicscan.org/contract/epicchain/${this.#network.id}/${contractHash}`
  }

  buildNftUrl({ contractHash, tokenId }: BuildNftUrlParams): string {
    if (BSEpicChainHelper.isCustomNet(this.#network)) throw new Error('EpicScan is only available on mainnet and testnet')
    return `https://epicscan.org/nft/epicchain/${this.#network.id}/${contractHash}/${tokenId}`
  }
}
