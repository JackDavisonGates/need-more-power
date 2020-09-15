var PowerData = {
    currentPower: 0,
    totalPower: 0,
    powerPerClick: 1,
    powerPerTick: 1,
    powerPerTickCost: 10,
    barRed: 0,
    barYellow: 0,
    barCost: 50,
    perTimeCost: 50,
    powerItemsCost: 50,
}

var PowerStorageData = {
    capasitors: 1,
    capasitorsStorage: 100,
    capasitorCost: 20,
    batteries: 0,
    batteriesStorage: 3000,
    batteriesEfficency: 0.3,
    batteryCost: 500,
    batteryStorage: 3000,
    totalPowerStorage: 100,
}

var TurbineData = {
    turbineSpeed: 0,
    turbineMass: 3,
    turbineMaxSpeed: 500000,
    turbineFriction: 0.005,
    generatorFriction: 0.0005,
    generatorEfficency: 1,
    turbineSpinForce: 10,
}

function buttonStat(stat, button) {
    switch (button) {
        case "turbine":
            switch (stat) {
                case "down":
                    spinTurbine()
                    document.getElementById("Turbine-spin-button").src = "Assets/Turbine_button_pressed.png"
                    break;
                case "up":
                    document.getElementById("Turbine-spin-button").src = "Assets/Turbine_button_unpressed.png"
                    break;
                default:
                    break;
            }
            break;
        case "power_items_button":
            switch (stat) {
                case "down":
                    document.getElementById("power_items_button").src = "Assets/power_items_button_pressed.png"
                    break;
                case "up":
                    powerItemsDisplay(1)
                    document.getElementById("power_items_button").src = "Assets/power_items_button_hover.png"
                    break;
                case "hover":
                    document.getElementById("power_items_button").src = "Assets/power_items_button_hover.png"
                    break;
                case "out":
                    document.getElementById("power_items_button").src = "Assets/power_items_button.png"
                    break;
                default:
                    break;
            }
            break;
        case "energy_stats_button_1":
            if (DisplayData.energyStatsButton[0] == 0) {
                switch (stat) {
                    case "down":
                        energyStatsButtons('energy_stats_button_1')
                        document.getElementById("energy_stats_button_1").src = "Assets/stats_button_pressed_rpm.png"
                        DisplayData.energyStatsButton[0] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_1").src = "Assets/stats_button_hover_rpm.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_1").src = "Assets/stats_button_no_hover_rpm.png"
                        break;
                    default:
                        break;
                }
            }
            break;
        case "energy_stats_button_2":
            if (DisplayData.energyStatsButton[1] == 0) {
                switch (stat) {
                    case "down":
                        energyStatsButtons('energy_stats_button_2')
                        document.getElementById("energy_stats_button_2").src = "Assets/stats_button_pressed_persec.png"
                        DisplayData.energyStatsButton[1] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_2").src = "Assets/stats_button_hover_persec.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_2").src = "Assets/stats_button_no_hover_persec.png"
                        break;
                    default:
                        break;
                }
            }
            break;
        case "energy_stats_button_3":
            if (DisplayData.energyStatsButton[2] == 0) {
                switch (stat) {
                    case "down":
                        energyStatsButtons('energy_stats_button_3')
                        document.getElementById("energy_stats_button_3").src = "Assets/stats_button_pressed_permin.png"
                        DisplayData.energyStatsButton[2] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_3").src = "Assets/stats_button_hover_permin.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_3").src = "Assets/stats_button_no_hover_permin.png"
                        break;
                    default:
                        break;
                }
            }
            break;
        case "energy_stats_button_4":
            if (DisplayData.energyStatsButton[3] == 0) {
                switch (stat) {
                    case "down":
                        energyStatsButtons('energy_stats_button_4')
                        document.getElementById("energy_stats_button_4").src = "Assets/stats_button_pressed_perhour.png"
                        DisplayData.energyStatsButton[3] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_4").src = "Assets/stats_button_hover_perhour.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_4").src = "Assets/stats_button_no_hover_perhour.png"
                        break;
                    default:
                        break;
                }
            }
            break;
        case "energy_stats_button_5":
            if (DisplayData.energyStatsButton[4] == 0) {
                switch (stat) {
                    case "down":
                        energyStatsButtons('energy_stats_button_5')
                        document.getElementById("energy_stats_button_5").src = "Assets/stats_button_pressed_perday.png"
                        DisplayData.energyStatsButton[4] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_5").src = "Assets/stats_button_hover_perday.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_5").src = "Assets/stats_button_no_hover_perday.png"
                        break;
                    default:
                        break;
                }
            }
            break;
        case "energy_stats_button_6":
            if (DisplayData.energyStatsButton[5] == 0) {
                switch (stat) {
                    case "down":
                        energyStatsButtons('energy_stats_button_6')
                        document.getElementById("energy_stats_button_6").src = "Assets/stats_button_pressed_perweek.png"
                        DisplayData.energyStatsButton[5] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_6").src = "Assets/stats_button_hover_perweek.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_6").src = "Assets/stats_button_no_hover_perweek.png"
                        break;
                    default:
                        break;
                }
            }
            break;
        case "energy_stats_button_7":
            if (DisplayData.energyStatsButton[6] == 0) {
                switch (stat) {
                    case "down":
                        energyStatsButtons('energy_stats_button_7')
                        document.getElementById("energy_stats_button_7").src = "Assets/stats_button_pressed_peryear.png"
                        DisplayData.energyStatsButton[6] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_7").src = "Assets/stats_button_hover_peryear.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_7").src = "Assets/stats_button_no_hover_peryear.png"
                        break;
                    default:
                        break;
                }
            }
            break;
        case "repeat_slot_1":
            switch (stat) {
                case "down":
                    slotToFunction("repeat", RepeatSlots[1])
                    break;
                default:

            }
            break;
        case "repeat_slot_2":
            switch (stat) {
                case "down":
                    slotToFunction("repeat", RepeatSlots[2])
                    break;
                default:

            }
            break;
        case "repeat_slot_3":
            switch (stat) {
                case "down":
                    slotToFunction("repeat", RepeatSlots[3])
                    break;
                default:

            }
            break;
        case "repeat_slot_4":
            switch (stat) {
                case "down":
                    slotToFunction("repeat", RepeatSlots[4])
                    break;
                default:

            }
            break;
        case "repeat_slot_5":
            switch (stat) {
                case "down":
                    slotToFunction("repeat", RepeatSlots[5])
                    break;
                default:

            }
            break;
        case "repeat_slot_6":
            switch (stat) {
                case "down":
                    slotToFunction("repeat", RepeatSlots[6])
                    break;
                default:

            }
            break;
        case "one_time_slot_1":
            switch (stat) {
                case "down":
                    slotToFunction("one_time", OneTimeSlots[1])
                    break;
                default:

            }
            break;
        case "one_time_slot_2":
            switch (stat) {
                case "down":
                    slotToFunction("one_time", OneTimeSlots[2])
                    break;
                default:

            }
            break;
        case "one_time_slot_3":
            switch (stat) {
                case "down":
                    slotToFunction("one_time", OneTimeSlots[3])
                    break;
                default:

            }
            break;
        case "one_time_slot_4":
            switch (stat) {
                case "down":
                    slotToFunction("one_time", OneTimeSlots[4])
                    break;
                default:

            }
            break;
        case "one_time_slot_5":
            switch (stat) {
                case "down":
                    slotToFunction("one_time", OneTimeSlots[5])
                    break;
                default:

            }
            break;
        case "one_time_slot_6":
            switch (stat) {
                case "down":
                    slotToFunction("one_time", OneTimeSlots[6])
                    break;
                default:

            }
            break;
        case "worker_number_button":
            switch (stat) {
                case "down":
                    switch (WorkerStatusData.buyX) {
                        case 1:
                            document.getElementById("worker_number").src = "Assets/1_button_pressed.png"
                            break;
                        case 2:
                            document.getElementById("worker_number").src = "Assets/10_button_pressed.png"
                            break;
                        case 3:
                            document.getElementById("worker_number").src = "Assets/100_button_pressed.png"
                            break;
                        case 4:
                            document.getElementById("worker_number").src = "Assets/all_button_pressed.png"
                            break;
                        default:
                    }
                    break;
                case "up":
                    buyNumber()
                    break;
                case "out":
                    switch (WorkerStatusData.buyX) {
                        case 1:
                            document.getElementById("worker_number").src = "Assets/1_button_unpressed.png"
                            break;
                        case 2:
                            document.getElementById("worker_number").src = "Assets/10_button_unpressed.png"
                            break;
                        case 3:
                            document.getElementById("worker_number").src = "Assets/100_button_unpressed.png"
                            break;
                        case 4:
                            document.getElementById("worker_number").src = "Assets/all_button_unpressed.png"
                            break;
                        default:
                    }
                    break;
                default:
                    break;
            }
            break;
        case "energy_worker_stats_button":
            if (WorkerStatusData.workers > 0) {
                switch (stat) {
                    case "down":
                        WorkerStatusData.freeWorkers = WorkerStatusData.workers
                        JobData.energyWorker = 0
                        JobData.woodWorker = 0
                        JobData.oilWorker = 0
                        updateText("Workers")
                        document.getElementById("energy_worker_stats_button").src = "Assets/worker_stats_button_pressed.png"
                        break;
                    case "up":
                        document.getElementById("energy_worker_stats_button").src = "Assets/worker_stats_button_unpressed.png"
                        break;
                    case "hover":
                        document.getElementById("energy_worker_stats_button").src = "Assets/worker_stats_button_hover.png"
                        break;
                    case "out":
                        document.getElementById("energy_worker_stats_button").src = "Assets/worker_stats_button_unpressed.png"
                        break;
                    default:
                        break;
                }
            }
            break;
        case "energy_worker_+_button":
            switch (stat) {
                case "down":
                    setWorkerJob("energy", 1)
                    document.getElementById("energy_worker_+_button").src = "Assets/+_button_pressed.png"
                    break;
                case "up":
                    document.getElementById("energy_worker_+_button").src = "Assets/+_button_unpressed.png"
                    break;
                default:
                    break;
            }
            break;
        case "energy_worker_-_button":
            switch (stat) {
                case "down":
                    setWorkerJob("energy", -1)
                    document.getElementById("energy_worker_-_button").src = "Assets/-_button_pressed.png"
                    break;
                case "up":
                    document.getElementById("energy_worker_-_button").src = "Assets/-_button_unpressed.png"
                    break;
                default:
                    break;
            }
            break;
        case "wood_worker_+_button":
            switch (stat) {
                case "down":
                    setWorkerJob("wood", 1)
                    document.getElementById("wood_worker_+_button").src = "Assets/+_button_pressed.png"
                    break;
                case "up":
                    document.getElementById("wood_worker_+_button").src = "Assets/+_button_unpressed.png"
                    break;
                default:
                    break;
            }
            break;
        case "wood_worker_-_button":
            switch (stat) {
                case "down":
                    setWorkerJob("wood", -1)
                    document.getElementById("wood_worker_-_button").src = "Assets/-_button_pressed.png"
                    break;
                case "up":
                    document.getElementById("wood_worker_-_button").src = "Assets/-_button_unpressed.png"
                    break;
                default:
                    break;
            }
            break;
        case "oil_worker_+_button":
            switch (stat) {
                case "down":
                    setWorkerJob("oil", 1)
                    document.getElementById("oil_worker_+_button").src = "Assets/+_button_pressed.png"
                    break;
                case "up":
                    document.getElementById("oil_worker_+_button").src = "Assets/+_button_unpressed.png"
                    break;
                default:
                    break;
            }
            break;
        case "oil_worker_-_button":
            switch (stat) {
                case "down":
                    setWorkerJob("oil", -1)
                    document.getElementById("oil_worker_-_button").src = "Assets/-_button_pressed.png"
                    break;
                case "up":
                    document.getElementById("oil_worker_-_button").src = "Assets/-_button_unpressed.png"
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

function spinTurbine(amount = TurbineData.turbineSpinForce) {
    TurbineData.turbineSpeed += amount / TurbineData.turbineMass
    updateText("Power")
}

function slowTurbine() {
    TurbineData.turbineSpeed -= TurbineData.turbineSpeed * (TurbineData.turbineFriction + TurbineData.generatorFriction)
    updateText("Power")
}

function makePower(amount) {
    if (PowerData.currentPower < PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) {
        PowerData.currentPower += amount
        PowerData.totalPower += amount
        if (PowerData.currentPower > PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) {
            PowerData.totalPower -= PowerStorageData.currentPower - (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors)
            PowerData.currentPower = PowerStorageData.capasitorsStorage * PowerStorageData.capasitors
        }
    } else if (PowerData.currentPower < (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)) {
        PowerData.currentPower += amount * PowerStorageData.batteriesEfficency
        PowerData.totalPower += amount
        if (PowerData.currentPower > (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)) {
            PowerData.totalPower -= PowerData.currentPower - (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)
            PowerData.currentPower = PowerStorageData.capasitorsStorage * PowerStorageData.capasitors
        }
    }
    updateText("Power")
}

function powerBar() {
    var redmove = 0
    var yellowmove = 0

    redmove = PowerData.currentPower * 100 / (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors)
    yellowmove = (PowerData.currentPower - PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) * 100 / (PowerStorageData.batteriesStorage * PowerStorageData.batteries)

    if (redmove <= 100) {
        document.getElementById("power_bar_fill_red").style.left = redmove * 7.32 + -705 + "px"
    }
    if (yellowmove >= 0) {
        document.getElementById("power_bar_fill_yellow").style.left = yellowmove * 7.32 + -705 + "px"
    } else {
        document.getElementById("power_bar_fill_yellow").style.left = -705 + "px"
    }
}

function mainLoopFast() {
    workers()
    powerBar()
    updateDisplay(MiscellaneousData.displayID)
}

function mainLoopMediam() {
    slowTurbine()
    makePower(TurbineData.generatorEfficency * (TurbineData.turbineSpeed / 1000))
    revealTabs()
    cogSpeed()
    costCheck()
    //updateGraph()
}

function mainLoopSlow() {
    //gatherMaterials()
    //planetProduction()
    //useTelescope()
}

window.onload = function() {
    loadGame()
};

var startedAt = Date.now()
var gameSavePoint = Date.now()

var mainGameLoop = window.setInterval(function() {
    mainLoopFast()
    if (MiscellaneousData.gameTicks % MiscellaneousData.mediamLoopTime == 0) {
        mainLoopMediam()
    }
    if (MiscellaneousData.gameTicks % MiscellaneousData.slowLoopTime == 0) {
        mainLoopSlow()
        let elapsedTime = Date.now() - startedAt
        if (elapsedTime > MiscellaneousData.slowLoopTime * MiscellaneousData.gameSpeed + 10000) {
            offLineTime(elapsedTime)
        }
        startedAt = Date.now()
        if (MiscellaneousData.saveGameTime < Date.now() - gameSavePoint) {
            saveGame()
            gameSavePoint = Date.now()
        }
    }
    startMessage()
    MiscellaneousData.gameTicks += 1
}, MiscellaneousData.gameSpeed)
