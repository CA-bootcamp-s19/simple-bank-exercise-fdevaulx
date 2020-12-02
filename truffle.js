module.exports = {
  compilers: {
    solc: {
      version: "0.6.12",
    }
  },
  networks: {
    development: {
      host: "192.168.1.173",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
