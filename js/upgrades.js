function buyWorkersTab() {
    if (PowerData.currentPower >= 200) {
        PowerData.currentPower -= 200
        TabData.workersTabAccess = 1
        document.getElementById("tab_button_3").src = "Assets/Button_Tabs_Center.png"
        document.getElementById("tab_text_3").style.visibility = "visible"
    }
}

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

function buyWorkerSpeed() {
    if (PowerData.currentPower >= WorkerStatusData.workerSpeedCost) {
        PowerData.currentPower -= WorkerStatusData.workerSpeedCost
        JobEfficiencyData.energyWorkerEfficiency *= 2
        JobEfficiencyData.woodWorkerEfficiency *= 2
        JobEfficiencyData.sandWorkerEfficiency *= 2
        JobEfficiencyData.glassWorkerEfficiency *= 2
        JobEfficiencyData.ironWorkerEfficiency *= 2
        JobEfficiencyData.coalWorkerEfficiency *= 2
        JobEfficiencyData.steelWorkerEfficiency *= 2
        JobEfficiencyData.oilWorkerEfficiency *= 2
        JobEfficiencyData.plasticWorkerEfficiency *= 2
        WorkerStatusData.workerSpeedCost *= 5
        updateText("workers")
        updateText("Upgrades")
    }
}

function buyWorkerDiscount(level) {
    switch (level) {
        case 1:
            if (PowerData.currentPower >= WorkerStatusData.workerDiscountCost[0] && WorkerStatusData.workerDiscountLevel[0] == 0) {
                PowerData.currentPower -= WorkerStatusData.workerDiscountCost[0]
                costRecalculation("workers", -10)
            }
            break;
        case 2:
            if (PowerData.currentPower >= WorkerStatusData.workerDiscountCost[1] && WorkerStatusData.workerDiscountLevel[1] == 0) {
                PowerData.currentPower -= WorkerStatusData.workerDiscountCost[1]
                costRecalculation("workers", -10)
            }
            break;
        case 3:
            if (PowerData.currentPower >= WorkerStatusData.workerDiscountCost[2] && WorkerStatusData.workerDiscountLevel[2] == 0) {
                PowerData.currentPower -= WorkerStatusData.workerDiscountCost[2]
                costRecalculation("workers", -10)
            }
            break;
        case 4:
            if (PowerData.currentPower >= WorkerStatusData.workerDiscountCost[3] && WorkerStatusData.workerDiscountLevel[3] == 0) {
                PowerData.currentPower -= WorkerStatusData.workerDiscountCost[3]
                costRecalculation("workers", -10)
            }
            break;
        default:

    }
    updateText("Upgrades")
}



function updatePowerStorage() {
    PowerStorageData.totalPowerStorage = (PowerStorageData.capasitors * PowerStorageData.capasitorsStorage) + (PowerStorageData.batteries * PowerStorageData.batteriesStorage)
}

function costRecalculation(item, change) {
    switch (item) {
        case "workers":
            WorkerStatusData.costRatio -= WorkerStatusData.costRatio / (100 / -change)
            WorkerStatusData.workerCost = WorkerStatusData.workerBaseCost * Math.pow(WorkerStatusData.costRatio + 1, WorkerStatusData.workers)
            updateText("Workers")
            break;
        default:

    }
}