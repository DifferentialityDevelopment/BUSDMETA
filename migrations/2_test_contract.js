const DividendDistributor = artifacts.require("DividendDistributor");
const ERC20 = artifacts.require("ERC20");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(ERC20, "Binance USD", "BUSD");
  const instance = await ERC20.deployed();
  await deployer.deploy(DividendDistributor, accounts[0], instance.address, "0x000000000000000000000000000000000000dead");
};
