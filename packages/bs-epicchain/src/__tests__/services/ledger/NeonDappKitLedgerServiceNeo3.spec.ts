import Transport from '@ledgerhq/hw-transport'
import { EpicVaultDappKitLedgerServiceEpicChain } from '../../../services/ledger/EpicVaultDappKitLedgerServiceEpicChain'
import { BSNeo3 } from '../../../BSEpicChain'
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid'
import { BSEpicChainConstants } from '../../../constants/BSEpicChainConstants'

let ledgerService: EpicVaultDappKitLedgerServiceEpicChain
let transport: Transport
let bsNeo3: BSNeo3

describe.skip('EpicVaultDappKitLedgerServiceEpicChain.spec', () => {
  beforeAll(async () => {
    const network = BSEpicChainConstants.TESTNET_NETWORKS[0]!
    bsNeo3 = new BSNeo3('neo3', network)

    transport = await TransportNodeHid.create()
    ledgerService = new EpicVaultDappKitLedgerServiceEpicChain(bsNeo3, async () => transport)
  }, 60000)

  it('Should be able to get all accounts', async () => {
    const accounts = await ledgerService.getAccounts(transport)
    expect(accounts.length).toBeGreaterThan(1)

    accounts.forEach((account, index) => {
      expect(account).toEqual(
        expect.objectContaining({
          address: expect.any(String),
          key: expect.any(String),
          type: 'publicKey',
          bip44Path: bsNeo3.bip44DerivationPath.replace('?', index.toString()),
        })
      )
    })
  }, 60000)

  it('Should be able to get account', async () => {
    const account = await ledgerService.getAccount(transport, 0)
    expect(account).toEqual(
      expect.objectContaining({
        address: expect.any(String),
        key: expect.any(String),
        type: 'publicKey',
        bip44Path: bsNeo3.bip44DerivationPath.replace('?', '0'),
      })
    )
  }, 60000)
})
