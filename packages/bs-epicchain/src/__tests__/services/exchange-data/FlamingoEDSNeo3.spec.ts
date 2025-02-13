import { Network } from '@epicchain/blockchain-service'
import { BSEpicChainConstants, BSEpicChainNetworkId } from '../../../constants/BSEpicChainConstants'
import { BSEpicChainHelper } from '../../../helpers/BSEpicChainHelper'
import { FlamingoEDSNeo3 } from '../../../services/exchange-data/FlamingoEDSNeo3'

let flamingoEDSNeo3: FlamingoEDSNeo3
let network: Network<BSEpicChainNetworkId>

describe('FlamingoEDSNeo3', () => {
  beforeAll(() => {
    network = BSEpicChainConstants.DEFAULT_NETWORK
    flamingoEDSNeo3 = new FlamingoEDSNeo3(network)
  })

  it('Should return a list with prices of tokens using USD', async () => {
    const tokenPriceList = await flamingoEDSNeo3.getTokenPrices({ tokens: BSEpicChainHelper.getTokens(network) })

    tokenPriceList.forEach(tokenPrice => {
      expect(tokenPrice).toEqual({
        usdPrice: expect.any(Number),
        token: expect.objectContaining({
          decimals: expect.any(Number),
          hash: expect.any(String),
          name: expect.any(String),
          symbol: expect.any(String),
        }),
      })
    })
  }, 60000)

  it('Should return the BRL currency ratio', async () => {
    const ratio = await flamingoEDSNeo3.getCurrencyRatio('BRL')

    expect(ratio).toEqual(expect.any(Number))
  }, 20000)

  it('Should return EUR currency ratio', async () => {
    const ratio = await flamingoEDSNeo3.getCurrencyRatio('EUR')

    expect(ratio).toEqual(expect.any(Number))
  })

  it("Should return the token's price history", async () => {
    const token = BSEpicChainHelper.getTokens(network).find(token => token.symbol === 'XPP')!
    const tokenPriceHistory = await flamingoEDSNeo3.getTokenPriceHistory({
      token,
      limit: 24,
      type: 'hour',
    })

    tokenPriceHistory.forEach(tokenPrice => {
      expect(tokenPrice).toEqual({
        usdPrice: expect.any(Number),
        timestamp: expect.any(Number),
        token,
      })
    })
  }, 60000)
})
