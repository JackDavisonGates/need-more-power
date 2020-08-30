var PowerData = {
    currentPower: 0,
    totalPower: 0,
    powerPerClick: 1,
    powerPerTick: 1,
    powerPerTickCost: 10,
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
                    document.getElementById("Turbine-spin-button-pressed").style.visibility = "visible"
                    break;
                case "up":
                    document.getElementById("Turbine-spin-button-pressed").style.visibility = "hidden"
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
                        document.getElementById("energy_stats_button_1").src = "Assets/stats_button_pressed.png"
                        DisplayData.energyStatsButton[0] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_1").src = "Assets/stats_button_hover.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_1").src = "Assets/stats_button_no_hover.png"
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
                        document.getElementById("energy_stats_button_2").src = "Assets/stats_button_pressed.png"
                        DisplayData.energyStatsButton[1] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_2").src = "Assets/stats_button_hover.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_2").src = "Assets/stats_button_no_hover.png"
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
                        document.getElementById("energy_stats_button_3").src = "Assets/stats_button_pressed.png"
                        DisplayData.energyStatsButton[2] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_3").src = "Assets/stats_button_hover.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_3").src = "Assets/stats_button_no_hover.png"
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
                        document.getElementById("energy_stats_button_4").src = "Assets/stats_button_pressed.png"
                        DisplayData.energyStatsButton[3] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_4").src = "Assets/stats_button_hover.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_4").src = "Assets/stats_button_no_hover.png"
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
                        document.getElementById("energy_stats_button_5").src = "Assets/stats_button_pressed.png"
                        DisplayData.energyStatsButton[4] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_5").src = "Assets/stats_button_hover.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_5").src = "Assets/stats_button_no_hover.png"
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
                        document.getElementById("energy_stats_button_6").src = "Assets/stats_button_pressed.png"
                        DisplayData.energyStatsButton[5] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_6").src = "Assets/stats_button_hover.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_6").src = "Assets/stats_button_no_hover.png"
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
                        document.getElementById("energy_stats_button_7").src = "Assets/stats_button_pressed.png"
                        DisplayData.energyStatsButton[6] = 1
                        break;
                    case "hover":
                        document.getElementById("energy_stats_button_7").src = "Assets/stats_button_hover.png"
                        break;
                    case "out":
                        document.getElementById("energy_stats_button_7").src = "Assets/stats_button_no_hover.png"
                        break;
                    default:
                        break;
                }
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
    var speedAddition = amount / TurbineData.turbineMass
    if (TurbineData.turbineSpeed + speedAddition <= TurbineData.turbineMaxSpeed) {
        TurbineData.turbineSpeed += speedAddition
    } else if (TurbineData.turbineSpeed + speedAddition > TurbineData.turbineMaxSpeed) {
        TurbineData.turbineSpeed = TurbineData.turbineMaxSpeed
    }
    updateText("Power")
}

function slowTurbine() {
    var speedLoss = TurbineData.turbineSpeed * (TurbineData.turbineFriction + TurbineData.generatorFriction)
    TurbineData.turbineSpeed -= speedLoss
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

function mainLoopFast() {
    workers()
    updateDisplay(MiscellaneousData.displayID)
}

function mainLoopMediam() {
    slowTurbine()
    makePower(TurbineData.generatorEfficency * (TurbineData.turbineSpeed / 1000))
    revealTabs()
    //updateGraph()
}

function mainLoopSlow() {
    gatherMaterials()
    planetProduction()
    useTelescope()
}

var mainGameLoop = window.setInterval(function() {
    mainLoopFast()
    if (MiscellaneousData.gameTicks % MiscellaneousData.mediamLoopTime == 0) {
        mainLoopMediam()
    }
    if (MiscellaneousData.gameTicks % MiscellaneousData.slowLoopTime == 0) {
        //mainLoopSlow()
    }
    startMessage()
    MiscellaneousData.gameTicks += 1
}, MiscellaneousData.gameSpeed)
