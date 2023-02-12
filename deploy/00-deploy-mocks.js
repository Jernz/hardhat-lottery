const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const BASE_FEE = "250000000000000000"
    const GAS_PRICE_LINK = 1e9

    if (developmentChains.includes(network.name)) {
        log("Deploying mocks...")
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: [BASE_FEE, GAS_PRICE_LINK],
        })
        log("Mocks deployed")
        log("-----------------------")
    }
}

module.exports.tags = ["all", "mocks"]
