import { BuildNftUrlParams, ExplorerService, Network } from '@epicchain/blockchain-service'
import { BSNeo3NetworkId } from '../../constants/BSNeo3Constants'
import { BSNeo3Helper } from '../../helpers/BSNeo3Helper'

export class DoraESNeo3 implements ExplorerService {
  readonly #network: Network<BSNeo3NetworkId>

  constructor(network: Network<BSNeo3NetworkId>) {
    this.#network = network
  }

  buildTransactionUrl(hash: string): string {
    if (BSNeo3Helper.isCustomNet(this.#network)) throw new Error('EpicScan is only available on mainnet and testnet')
    return `https://epicscan.org/transaction/epicchain/${this.#network.id}/${hash}`
  }

  buildContractUrl(contractHash: string): string {
    if (BSNeo3Helper.isCustomNet(this.#network)) throw new Error('EpicScan is only available on mainnet and testnet')
    return `https://epicscan.org/contract/epicchain/${this.#network.id}/${contractHash}`
  }

  buildNftUrl({ contractHash, tokenId }: BuildNftUrlParams): string {
    if (BSNeo3Helper.isCustomNet(this.#network)) throw new Error('EpicScan is only available on mainnet and testnet')
    return `https://epicscan.org/nft/epicchain/${this.#network.id}/${contractHash}/${tokenId}`
  }
}
