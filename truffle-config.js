require('dotenv').config();

module.exports = {

  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    }
  },

  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency : 'USD',
      coinmarketcap : process.env.COINMARKETCAPAPIKEY,
      token : 'BNB',
      gasPriceApi : 'https://api.bscscan.com/api?module=proxy&action=eth_gasPrice',
      onlyCalledMethods : false,
      showTimeSpent : true
    } // See options below
  },

  compilers: {
    solc: {
      version: "0.8.4",
    }
  },
};
