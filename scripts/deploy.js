const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const raffleContractFactory = await hre.ethers.getContractFactory("Raffle");
  const raffleContract = await raffleContractFactory.deploy();
  await raffleContract.deployed();

  console.log("Raffle address: ", raffleContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();