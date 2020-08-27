function buyCapasitor() {
    if (PowerData.currentPower >= PowerStorageData.capasitorCost) {
        PowerStorageData.capasitors += 1
        PowerData.currentPower -= PowerStorageData.capasitorCost
        PowerStorageData.capasitorCost *= 1.5
        updatePowerStorage()
        updateText("Power")
        updateText("Upgrades")
    }
}

function buyBattery() {
    if (PowerData.currentPower >= PowerStorageData.batteryCost) {
        PowerStorageData.batteries += 1
        PowerData.currentPower -= PowerStorageData.batteryCost
        PowerStorageData.batteryCost *= 1.5
        updatePowerStorage()
        updateText("Power")
        updateText("Upgrades")
    }
}

function buyPowerPerTick() {
    if (PowerData.currentPower >= PowerData.powerPerTickCost) {
        PowerData.currentPower -= PowerData.powerPerTickCost
        TurbineData.turbineSpinForce += 10
        PowerData.powerPerTickCost *= 1.25
        PowerData.powerPerTick += 1
        updateText("Power")
        updateText("Upgrades")
    }
}

function updatePowerStorage() {
    PowerStorageData.totalPowerStorage = (PowerStorageData.capasitors * PowerStorageData.capasitorsStorage) + (PowerStorageData.batteries * PowerStorageData.batteriesStorage)
}
