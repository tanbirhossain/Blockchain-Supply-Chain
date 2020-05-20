const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = "exotic dose tag outer brand nest february walk gap harbor crane local";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/fc4e6471ee48449896a2396a7253f21c'),
      // from: "0xB037c9CF7376bD61494684408C90C748A88BdE04",
      network_id: "4",
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
    },
  },
  mocha: {
    enableTimeouts: false,
  },
};
