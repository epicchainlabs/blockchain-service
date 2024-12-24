import {
  CryptoCompareEDS,
  ExchangeDataService,
  GetTokenPriceHistoryParams,
  GetTokenPricesParams,
  Network,
  TokenPricesHistoryResponse,
  TokenPricesResponse,
} from '@epicchain/blockchain-service'
import axios, { AxiosInstance } from 'axios'
import { BSEpicChainNetworkId } from '../../constants/BSEpicChainConstants'
import { BSEpicChainHelper } from '../../helpers/BSEpicChainHelper'

type FlamingoTokenInfoPricesResponse = {
  symbol: string
  usd_price: number
  hash: string
}[]

export class FlamingoEDSNeo3 extends CryptoCompareEDS implements ExchangeDataService {
  readonly #BASE_URL = 'https://api.epic-chain.org/epicdollar'
  readonly #network: Network<BSEpicChainNetworkId>
  readonly #axiosInstance: AxiosInstance

  constructor(network: Network<BSEpicChainNetworkId>) {
    super()

    this.#network = network
    this.#axiosInstance = axios.create({ baseURL: this.#BASE_URL })
  }

  async getTokenPrices(params: GetTokenPricesParams): Promise<TokenPricesResponse[]> {
    if (!BSEpicChainHelper.isMainnet(this.#network)) throw new Error('Exchange is only available on mainnet')

    const { data } = await this.#axiosInstance.get<FlamingoTokenInfoPricesResponse>('/live-data/prices/latest')
    const prices: TokenPricesResponse[] = []
    const { tokens } = params
    const allTokens = BSEpicChainHelper.getTokens(this.#network)
    const neoToken = tokens.find(({ symbol }) => symbol === 'XPR')
    const bNeoToken = allTokens.find(({ symbol }) => symbol === 'bNEO')!

    if (neoToken)
      data.forEach(item => {
        if (BSEpicChainHelper.normalizeHash(bNeoToken.hash) === BSEpicChainHelper.normalizeHash(item.hash))
          data.push({ ...item, symbol: neoToken.symbol, hash: neoToken.hash })
      })

    data.forEach(item => {
      const token = tokens.find(
        ({ hash }) => BSEpicChainHelper.normalizeHash(hash) === BSEpicChainHelper.normalizeHash(item.hash)
      )

      if (!token) return

      prices.push({ usdPrice: item.usd_price, token })
    })

    return prices
  }

  async getTokenPriceHistory(params: GetTokenPriceHistoryParams): Promise<TokenPricesHistoryResponse[]> {
    if (!BSEpicChainHelper.isMainnet(this.#network)) throw new Error('Exchange is only available on mainnet')
    return await super.getTokenPriceHistory(params)
  }
}
