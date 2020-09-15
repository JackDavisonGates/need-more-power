var RepeatSlots = {
    1: "Capasitor",
    2: "Battery",
    3: "Power Per Tick",
    4: "",
    5: "",
    6: "",
    7: "",
}

var OneTimeSlots = {
    1: "Buy Workers Tab",
    2: "Worker Discount Level 1",
    3: "Power Per Time",
    4: "Storage Bar",
    5: "Item List",
    6: "",
    7: "",
}

var OneTimeUpgradesCompleat = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
}

var OneTimeUpgradesNotCompleat = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
}

var SlotsDtat = {
    OneTimeSlotsFilled: 5,
    RepeatSlotsFilled: 3,
    OneTimeSlotsCompleat: 0,
}

function addTooEnd(id, slots) {
    switch (slots) {
        case "RepeatSlots":
            RepeatSlots[SlotsDtat.RepeatSlotsFilled + 1] = id
            SlotsDtat.RepeatSlotsFilled += 1
            break;
        case "OneTimeSlots":
            OneTimeSlots[SlotsDtat.OneTimeSlotsFilled + 1] = id
            SlotsDtat.OneTimeSlotsFilled += 1
            break;
        default:

    }
}

function removeSlot(id, slots) {
    var foundID = 0
    switch (slots) {
        case "RepeatSlots":
            for (i = 1; i <= SlotsDtat.RepeatSlotsFilled; i++) {
                if (foundID == 1) {
                    RepeatSlots[i - 1] = RepeatSlots[i]
                    RepeatSlots[i] = ""
                }
                if (RepeatSlots[i] == id) {
                    RepeatSlots[i] = ""
                    foundID = 1
                }
            }
            SlotsDtat.RepeatSlotsFilled -= 1
            break;
        case "OneTimeSlots":
            for (i = 1; i <= SlotsDtat.OneTimeSlotsFilled; i++) {
                if (foundID == 1) {
                    OneTimeSlots[i - 1] = OneTimeSlots[i]
                    OneTimeSlots[i] = ""
                }
                if (OneTimeSlots[i] == id) {
                    OneTimeUpgradesCompleat[SlotsDtat.OneTimeSlotsCompleat] = id
                    SlotsDtat.OneTimeSlotsCompleat += 1
                    OneTimeSlots[i] = ""
                    foundID = 1
                }
            }
            SlotsDtat.OneTimeSlotsFilled -= 1
            break;
        default:

    }
}

function displayCompleatUpgrades() {

}

function slotToFunction(slot, name) {
    switch (slot) {
        case "repeat":
            switch (name) {
                case "Capasitor":
                    buyCapasitor()
                    break;
                case "Battery":
                    buyBattery()
                    break;
                case "Power Per Tick":
                    buyPowerPerTick()
                    break;
                case "Worker Speed":
                    buyWorkerSpeed()
                    break;
                default:

            }
            break;
        case "one_time":
            switch (name) {
                case "Buy Workers Tab":
                    buyWorkersTab()
                    break;
                case "Worker Discount Level 1":
                    buyWorkerDiscount(1)
                    break;
                case "Worker Discount Level 2":
                    buyWorkerDiscount(2)
                    break;
                case "Worker Discount Level 3":
                    buyWorkerDiscount(3)
                    break;
                case "Worker Discount Level 4":
                    buyWorkerDiscount(4)
                    break;
                case "Power Per Time":
                    getPowerPerTime()
                    break;
                case "Storage Bar":
                    getStorageBar()
                    break;
                case "Item List":
                    getItemList()
                    break;
                default:

            }
            break;
        default:

    }
}

function buyWorkersTab() {
    if (PowerData.currentPower >= 200) {
        PowerData.currentPower -= 200
        TabData.workersTabAccess = 1
        document.getElementById("tab_button_3").src = "Assets/Button_Tabs_Center_workers.png"
        removeSlot("Buy Workers Tab", "OneTimeSlots")
        addTooEnd("Worker Speed", "RepeatSlots")
        updateText("Upgrades")
        logList("Workers Tab Unlocked.", 2)
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
        logList("Capasitor " + PowerStorageData.capasitors + " Purchased.", 2)
        document.getElementById("power_items_text_line_1").innerHTML = "Capasitors: " + PowerStorageData.capasitors
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
        if (PowerStorageData.batteries > 9) {
            logList("Battery " + PowerStorageData.batteries + " Purchased.", 2)
        } else {
            logList("Battery " + PowerStorageData.batteries + " Purchased.")
        }
        document.getElementById("power_items_text_line_2").innerHTML = "Batteries: " + PowerStorageData.batteries
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
        logList("PowerPerTick " + PowerData.powerPerTick + " Purchased.", 2)
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
        logList("Worker Speed Purchased.", 2)
    }
}

function buyWorkerDiscount(level) {
    switch (level) {
        case 1:
            if (PowerData.currentPower >= WorkerStatusData.workerDiscountCost[0] && WorkerStatusData.workerDiscountLevel[0] == 0) {
                PowerData.currentPower -= WorkerStatusData.workerDiscountCost[0]
                costRecalculation("workers", -10)
                addTooEnd("Worker Discount Level 2", "OneTimeSlots")
                removeSlot("Worker Discount Level 1", "OneTimeSlots")
                logList("Worker Discount Level 1 Unlocked.", 2)
            }
            break;
        case 2:
            if (PowerData.currentPower >= WorkerStatusData.workerDiscountCost[1] && WorkerStatusData.workerDiscountLevel[1] == 0) {
                PowerData.currentPower -= WorkerStatusData.workerDiscountCost[1]
                costRecalculation("workers", -10)
                addTooEnd("Worker Discount Level 3", "OneTimeSlots")
                removeSlot("Worker Discount Level 2", "OneTimeSlots")
                logList("Worker Discount Level 2 Unlocked.", 2)
            }
            break;
        case 3:
            if (PowerData.currentPower >= WorkerStatusData.workerDiscountCost[2] && WorkerStatusData.workerDiscountLevel[2] == 0) {
                PowerData.currentPower -= WorkerStatusData.workerDiscountCost[2]
                costRecalculation("workers", -10)
                addTooEnd("Worker Discount Level 4", "OneTimeSlots")
                removeSlot("Worker Discount Level 3", "OneTimeSlots")
                logList("Worker Discount Level 3 Unlocked.", 2)
            }
            break;
        case 4:
            if (PowerData.currentPower >= WorkerStatusData.workerDiscountCost[3] && WorkerStatusData.workerDiscountLevel[3] == 0) {
                PowerData.currentPower -= WorkerStatusData.workerDiscountCost[3]
                costRecalculation("workers", -10)
                removeSlot("Worker Discount Level 4", "OneTimeSlots")
                logList("Worker Discount Level 4 Unlocked.", 2)
            }
            break;
        default:

    }
    updateText("Upgrades")
}

function getPowerPerTime() {
    if (PowerData.currentPower >= PowerData.perTimeCost) {
        PowerData.currentPower -= PowerData.perTimeCost
        document.getElementById("energy_stats_button_1").style.visibility = "visible"
        document.getElementById("energy_stats_button_2").style.visibility = "visible"
        document.getElementById("energy_stats_button_3").style.visibility = "visible"
        document.getElementById("energy_stats_button_4").style.visibility = "visible"
        document.getElementById("energy_stats_button_5").style.visibility = "visible"
        document.getElementById("energy_stats_button_6").style.visibility = "visible"
        document.getElementById("energy_stats_button_7").style.visibility = "visible"
        document.getElementById("energy_stats_connector_1").style.visibility = "visible"
        document.getElementById("energy_stats_connector_2").style.visibility = "visible"
        document.getElementById("energy_stats_connector_3").style.visibility = "visible"
        document.getElementById("energy_stats_connector_4").style.visibility = "visible"
        document.getElementById("energy_stats_connector_5").style.visibility = "visible"
        document.getElementById("energy_stats_connector_6").style.visibility = "visible"
        removeSlot("Power Per Time", "OneTimeSlots")
        updateText("Upgrades")
        logList("Power Per Time Display Unlocked.", 2)
    }
}

function getStorageBar() {
    if (PowerData.currentPower >= PowerData.barCost) {
        PowerData.currentPower -= PowerData.barCost
        document.getElementById("power_bar_back").style.visibility = "visible"
        document.getElementById("power_bar_fill_red").style.visibility = "visible"
        document.getElementById("power_bar_fill_yellow").style.visibility = "visible"
        document.getElementById("cover_block").style.visibility = "visible"
        document.getElementById("power_bar_fram").style.visibility = "visible"
        removeSlot("Storage Bar", "OneTimeSlots")
        updateText("Upgrades")
        logList("Power Storage Bar Display Unlocked.", 2)
    }
}

function getItemList() {
    if (PowerData.currentPower >= PowerData.powerItemsCost) {
        PowerData.currentPower -= PowerData.powerItemsCost
        document.getElementById("power_items_text").style.visibility = "visible"
        document.getElementById("power_items").style.visibility = "visible"
        removeSlot("Item List", "OneTimeSlots")
        updateText("Upgrades")
        logList("Power Item List Display Unlocked.", 2)
    }
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
