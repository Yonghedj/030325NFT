const hre = require("hardhat");

async function main() {
    const RendangNFT = await hre.ethers.getContractFactory("RendangNFT");
    const rendangNFT = await RendangNFT.deploy("https://ipfs.io/ipfs/bafkreicy2rcnfjwzrctc5msovqpgbvzqcs2r4sjiqmmaafjnyiuf3yppxe/");

    await rendangNFT.waitForDeployment();

    console.log(`RendangNFT deployed to: ${await rendangNFT.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});