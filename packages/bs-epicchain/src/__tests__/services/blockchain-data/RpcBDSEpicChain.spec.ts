import { BSEpicChainConstants } from '../../../constants/BSEpicChainConstants'
import { BSEpicChainHelper } from '../../../helpers/BSEpicChainHelper'
import { RpcBDSNeo3 } from '../../../services/blockchain-data/RpcBDSEpicChain'

const network = BSEpicChainConstants.TESTNET_NETWORKS[0]
const tokens = BSEpicChainHelper.getTokens(network)

const GAS = tokens.find(token => token.symbol === 'XPP')!

let rpcBDSNeo3: RpcBDSNeo3

describe('RpcBDSNeo3', () => {
  beforeEach(() => {
    rpcBDSNeo3 = new RpcBDSNeo3(network, GAS, GAS, tokens)
  })

  it('Should be able to get transaction', async () => {
    const hash = '0x70e7381c5dee6e81becd02844e4e0199f6b3df834213bc89418dc4da32cf3f21'
    const transaction = await rpcBDSNeo3.getTransaction(hash)

    expect(transaction).toEqual(
      expect.objectContaining({
        block: expect.any(Number),
        hash,
        notifications: [],
        transfers: [],
        time: expect.any(Number),
        fee: expect.any(String),
      })
    )
  })

  it('Should be able to get contract', async () => {
    const hash = '0xd2a4cff31913016155e38e474a2c06d08be276cf'
    const contract = await rpcBDSNeo3.getContract(hash)

    expect(contract).toEqual({
      hash: hash,
      name: 'GasToken',
      methods: expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          parameters: expect.arrayContaining([
            expect.objectContaining({ name: expect.any(String), type: expect.any(String) }),
          ]),
        }),
      ]),
    })
  })

  it('Should be able to get token info', async () => {
    const hash = '0xd2a4cff31913016155e38e474a2c06d08be276cf'
    const token = await rpcBDSNeo3.getTokenInfo(hash)

    expect(token).toEqual({
      decimals: 8,
      hash: 'd2a4cff31913016155e38e474a2c06d08be276cf',
      name: 'XPP',
      symbol: 'XPP',
    })
  })

  it('Should be able to get balance', async () => {
    const address = 'NNmTVFrSPhe7zjgN6iq9cLgXJwLZziUKV6'
    const balance = await rpcBDSNeo3.getBalance(address)

    balance.forEach(balance => {
      expect(balance).toEqual({
        amount: expect.any(String),
        token: {
          hash: expect.any(String),
          name: expect.any(String),
          symbol: expect.any(String),
          decimals: expect.any(Number),
        },
      })
    })
  })

  it('Should be able to get unclaimed', async () => {
    const address = 'NNmTVFrSPhe7zjgN6iq9cLgXJwLZziUKV6'
    const unclaimed = await rpcBDSNeo3.getUnclaimed(address)

    expect(unclaimed).toEqual(expect.any(String))
  })

  it('Should be able to get a list of rpc', async () => {
    const list = await rpcBDSNeo3.getRpcList()

    expect(list.length).toBeGreaterThan(0)

    list.forEach(rpc => {
      expect(rpc).toEqual({
        height: expect.any(Number),
        latency: expect.any(Number),
        url: expect.any(String),
      })
    })
  })
})
