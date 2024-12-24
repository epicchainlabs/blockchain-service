import {
  GetNftParam,
  GetNftsByAddressParams,
  HasTokenParam,
  Network,
  NftDataService,
  NftResponse,
  NftsResponse,
} from '@epicchain/blockchain-service'
import { EpicVaultInvoker, NeonParser } from '@cityofzion/neon-dappkit'
import { BSEpicChainNetworkId } from '../../constants/BSEpicChainConstants'

export abstract class RpcNDSNeo3 implements NftDataService {
  readonly #network: Network<BSEpicChainNetworkId>

  protected constructor(network: Network<BSEpicChainNetworkId>) {
    this.#network = network
  }

  abstract getNftsByAddress(params: GetNftsByAddressParams): Promise<NftsResponse>

  abstract getNft(params: GetNftParam): Promise<NftResponse>

  async hasToken({ contractHash, address }: HasTokenParam): Promise<boolean> {
    const parser = NeonParser
    const invoker = await EpicVaultInvoker.init({ rpcAddress: this.#network.url })
    try {
      const result = await invoker.testInvoke({
        invocations: [
          {
            scriptHash: contractHash,
            operation: 'balanceOf',
            args: [
              {
                type: 'Hash160',
                value: address,
              },
            ],
          },
        ],
      })

      return parser.parseRpcResponse(result.stack[0], { type: 'Integer' }) > 0
    } catch {
      throw new Error(`Token not found: ${contractHash}`)
    }
  }
}
