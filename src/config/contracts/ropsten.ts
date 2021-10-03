import { IContractDefinition, IToken, ChainId } from '../../types'
import { Token } from '../../entities/Token'

const weth = new Token(ChainId.Ropsten, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 'Wrapped ETH', 'WETH')

class Ropsten implements IContractDefinition {
  chainId: ChainId
  chain: string
  rpcProvider: string
  store: string
  tokens: {
    WETH: IToken
  }

  constructor () {
    this.chainId = ChainId.Ropsten
    this.chain = 'Ropsten Test Network'
    this.rpcProvider = 'https://ropsten.infura.io/v3/04f673a8619b4e3f89a49232d453f6f2'
    this.store = '0xf8C6607B38b08F62D27Aa0dCFdeC4a8cf02A2648'

    this.tokens = {
      WETH: weth
    }
  }
}

export {
  Ropsten
}