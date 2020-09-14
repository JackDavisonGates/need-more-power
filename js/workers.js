var WorkerStatusData = {
    workers: 0,
    freeWorkers: 0,
    workerCost: 10,
    costRatio: 0.5,
    workerBaseCost: 10,
    buyNumber: 1,
    buyX: 1,
    workerDiscountCost: [50, 500, 5000, 50000],
    workerDiscountLevel: [0, 0, 0, 0],
    workerSpeedCost: 100,
}

var JobData = {
    energyWorker: 0,
    woodWorker: 0,
    sandWorker: 0,
    glassWorker: 0,
    ironWorker: 0,
    coalWorker: 0,
    steelWorker: 0,
    oilWorker: 0,
    plasticWorker: 0,
}

var JobEfficiencyData = {
    energyWorkerEfficiency: 0.1,
    woodWorkerEfficiency: 0.1,
    sandWorkerEfficiency: 0.05,
    glassWorkerEfficiency: 0.05,
    ironWorkerEfficiency: 0.025,
    coalWorkerEfficiency: 0.025,
    steelWorkerEfficiency: 0.01,
    oilWorkerEfficiency: 0.01,
    plasticWorkerEfficiency: 0.01,
}

var JobTimeData = {
    energyJobTime: 10,
    energyJobTimeCurrent: 10,
    woodJobTime: 10,
    woodJobTimeCurrent: 10,
    sandJobTime: 15,
    sandJobTimeCurrent: 15,
    glassJobTime: 20,
    glassJobTimeCurrent: 20,
    ironJobTime: 60,
    ironJobTimeCurrent: 60,
    coalJobTime: 60,
    coalJobTimeCurrent: 60,
    steelJobTime: 120,
    steelJobTimeCurrent: 120,
    oilJobTime: 300,
    oilJobTimeCurrent: 300,
    plasticJobTime: 600,
    plasticJobTimeCurrent: 600,
}

var JobProductionData = {
    energyJobProduction: 10,
    woodJobProduction: 5,
    sandJobProduction: 5,
    glassJobProduction: 5,
    ironJobProduction: 1,
    coalJobProduction: 1,
    steelJobProduction: 1,
    oilJobProduction: 0.1,
    plasticJobProduction: 0.1,
}

var JobProgressBarData = {
    greenBarTime: 0.5,
    energyBarWidth: 0,
}

function buyWorker() {
    if (PowerData.currentPower >= workerTotalCost(WorkerStatusData.buyNumber)) {
        WorkerStatusData.workers += WorkerStatusData.buyNumber
        WorkerStatusData.freeWorkers += WorkerStatusData.buyNumber
        PowerData.currentPower -= workerTotalCost(WorkerStatusData.buyNumber)
        WorkerStatusData.workerCost = WorkerStatusData.workerBaseCost * Math.pow(WorkerStatusData.costRatio + 1, WorkerStatusData.workers)
        updateText("Workers")
        document.getElementById("energy_worker_stats_button").src = "Assets/worker_stats_button_unpressed.png"
        if (WorkerStatusData.buyX == 4) {
            WorkerStatusData.buyNumber = -1
        }
        toolTips("buy_workers")
    }
}

function workerTotalCost(number) {
    var totalCost = WorkerStatusData.workerCost
    var currentCost = WorkerStatusData.workerCost
    var x = 1
    if (number == -1) {
        var powerUsed = WorkerStatusData.workerCost
        number = 0
        while (x == 1) {
            powerUsed += currentCost * (WorkerStatusData.costRatio + 1)
            currentCost *= WorkerStatusData.costRatio + 1
            if (powerUsed > PowerData.currentPower) {
                x = 0
                powerUsed -= currentCost
            }
            number += 1
        }
        if (number == 0) {
            number = 1
        }
        WorkerStatusData.buyNumber = number
        totalCost = powerUsed
    } else {
        for (i = 1; i < number; i++) {
            totalCost += currentCost * (WorkerStatusData.costRatio + 1)
            currentCost *= WorkerStatusData.costRatio + 1
        }
    }
    return totalCost
}

function buyNumber() {
    switch (WorkerStatusData.buyX) {
        case 1:
            WorkerStatusData.buyNumber = 10
            WorkerStatusData.buyX = 2
            document.getElementById("worker_number").src = "Assets/10_button_unpressed.png"
            break;
        case 2:
            WorkerStatusData.buyNumber = 100
            WorkerStatusData.buyX = 3
            document.getElementById("worker_number").src = "Assets/100_button_unpressed.png"
            break;
        case 3:
            WorkerStatusData.buyNumber = -1
            WorkerStatusData.buyX = 4
            document.getElementById("worker_number").src = "Assets/all_button_unpressed.png"
            break;
        case 4:
            WorkerStatusData.buyNumber = 1
            WorkerStatusData.buyX = 1
            document.getElementById("worker_number").src = "Assets/1_button_unpressed.png"
            break;
        default:

    }
    updateText("Workers")
}

function setWorkerJob(job, workers) {
    if (((JobData.energyWorker + workers) < 0 && job == "energy") ||
        ((JobData.woodWorker + workers) < 0 && job == "wood") ||
        ((JobData.sandWorker + workers) < 0 && job == "sand") ||
        ((JobData.glassWorker + workers) < 0 && job == "glass") ||
        ((JobData.ironWorker + workers) < 0 && job == "iron") ||
        ((JobData.coalWorker + workers) < 0 && job == "coal") ||
        ((JobData.steelWorker + workers) < 0 && job == "steel") ||
        ((JobData.oilWorker + workers) < 0 && job == "oil") ||
        ((JobData.plasticWorker + workers) < 0 && job == "plastic")) {
        if ((WorkerStatusData.freeWorkers - workers) > WorkerStatusData.workers) {
            workers = WorkerStatusData.freeWorkers - WorkerStatusData.workers
        }
    }
    if ((WorkerStatusData.freeWorkers - workers) < 0) {
        workers = WorkerStatusData.freeWorkers
    }
    switch (job) {
        case "energy":
            JobData.energyWorker += workers
            break;
        case "wood":
            JobData.woodWorker += workers
            break;
        case "sand":
            JobData.sandWorker += workers
            break;
        case "glass":
            JobData.glassWorker += workers
            break;
        case "iron":
            JobData.ironWorker += workers
            break;
        case "coal":
            JobData.coalWorker += workers
            break;
        case "steel":
            JobData.steelWorker += workers
            break;
        case "oil":
            JobData.oilWorker += workers
            break;
        case "plastic":
            JobData.plasticWorker += workers
            break;
        default:
    }
    WorkerStatusData.freeWorkers -= workers
    updateText("Workers")
}

function workers() {
    if (WorkerStatusData.workers > 0) {
        JobTimeData.energyJobTimeCurrent -= JobData.energyWorker * JobEfficiencyData.energyWorkerEfficiency
        JobTimeData.woodJobTimeCurrent -= JobData.woodWorker * JobEfficiencyData.woodWorkerEfficiency
        JobTimeData.sandJobTimeCurrent -= JobData.sandWorker * JobEfficiencyData.sandWorkerEfficiency
        JobTimeData.glassJobTimeCurrent -= JobData.glassWorker * JobEfficiencyData.glassWorkerEfficiency
        JobTimeData.ironJobTimeCurrent -= JobData.ironWorker * JobEfficiencyData.ironWorkerEfficiency
        JobTimeData.coalJobTimeCurrent -= JobData.coalWorker * JobEfficiencyData.coalWorkerEfficiency
        JobTimeData.steelJobTimeCurrent -= JobData.steelWorker * JobEfficiencyData.steelWorkerEfficiency
        JobTimeData.oilJobTimeCurrent -= JobData.oilWorker * JobEfficiencyData.oilWorkerEfficiency
        JobTimeData.plasticJobTimeCurrent -= JobData.plasticWorker * JobEfficiencyData.plasticWorkerEfficiency
        if (JobTimeData.energyJobTimeCurrent <= 0) {
            if (JobTimeData.energyJobTimeCurrent * -1 > JobTimeData.energyJobTime) {
                spinTurbine((((JobTimeData.energyJobTimeCurrent * -1) % JobTimeData.energyJobTime) + 1) * JobProductionData.energyJobProduction)
                JobTimeData.energyJobTimeCurrent = (JobTimeData.energyJobTime * (JobTimeData.energyJobTimeCurrent % JobTimeData.energyJobTime)) - JobTimeData.energyJobTimeCurrent
            } else {
                spinTurbine(JobProductionData.energyJobProduction)
                JobTimeData.energyJobTimeCurrent = JobTimeData.energyJobTime - JobTimeData.energyJobTimeCurrent
            }
            if ((JobTimeData.energyJobTime / (JobData.energyWorker * JobEfficiencyData.energyWorkerEfficiency)) < JobProgressBarData.greenBarTime / (MiscellaneousData.gameSpeed / 1000)) {
                document.getElementById("energy_worker_loading_bar_fill").src = "Assets/loading-bar-fill-green.png"
                document.getElementById("energy_worker_loading_bar_fill").style.left = 0 + "px"
                if (MouseLocation == "energy_workers_bar") {
                    toolTips("energy_workers_bar_green")
                }
            } else {
                JobProgressBarData.energyBarWidth = 100 - ((JobTimeData.energyJobTimeCurrent / JobTimeData.energyJobTime) * 100)
                document.getElementById("energy_worker_loading_bar_fill").style.left = (JobProgressBarData.energyBarWidth * 2.7) - 270 + "px"
                document.getElementById("energy_worker_loading_bar_fill").src = "Assets/loading-bar-fill.png"
                if (MouseLocation == "energy_workers_bar") {
                    toolTips("energy_workers_bar")
                }
            }
        } else {
            if ((JobTimeData.energyJobTime / (JobData.energyWorker * JobEfficiencyData.energyWorkerEfficiency)) < JobProgressBarData.greenBarTime / (MiscellaneousData.gameSpeed / 1000)) {
                document.getElementById("energy_worker_loading_bar_fill").src = "Assets/loading-bar-fill-green.png"
                document.getElementById("energy_worker_loading_bar_fill").style.left = 0 + "px"
                if (MouseLocation == "energy_workers_bar") {
                    toolTips("energy_workers_bar_green")
                }
            } else {
                JobProgressBarData.energyBarWidth = 100 - ((JobTimeData.energyJobTimeCurrent / JobTimeData.energyJobTime) * 100)
                document.getElementById("energy_worker_loading_bar_fill").style.left = (JobProgressBarData.energyBarWidth * 2.7) - 270 + "px"
                document.getElementById("energy_worker_loading_bar_fill").src = "Assets/loading-bar-fill.png"
                if (MouseLocation == "energy_workers_bar") {
                    toolTips("energy_workers_bar")
                }
            }
        }
        if (JobTimeData.woodJobTimeCurrent <= 0) {
            JobTimeData.woodJobTimeCurrent = JobTimeData.woodJobTime
            StockpillData.wood += JobProductionData.woodJobProduction
        }
        if (JobTimeData.sandJobTimeCurrent <= 0) {
            JobTimeData.sandJobTimeCurrent = JobTimeData.sandJobTime
            StockpillData.sand += JobProductionData.sandJobProduction
        }
        if (JobTimeData.glassJobTimeCurrent <= 0) {
            JobTimeData.glassJobTimeCurrent = JobTimeData.glassJobTime
            StockpillData.glass += JobProductionData.glassJobProduction
        }
        if (JobTimeData.ironJobTimeCurrent <= 0) {
            JobTimeData.ironJobTimeCurrent = JobTimeData.ironJobTime
            StockpillData.iron += JobProductionData.ironJobProduction
        }
        if (JobTimeData.coalJobTimeCurrent <= 0) {
            JobTimeData.coalJobTimeCurrent = JobTimeData.coalJobTime
            StockpillData.coal += JobProductionData.coalJobProduction
        }
        if (JobTimeData.steelJobTimeCurrent <= 0) {
            JobTimeData.steelJobTimeCurrent = JobTimeData.steelJobTime
            StockpillData.steel += JobProductionData.steelJobProduction
        }
        if (JobTimeData.oilJobTimeCurrent <= 0) {
            JobTimeData.oilJobTimeCurrent = JobTimeData.oilJobTime
            StockpillData.oil += JobProductionData.oilJobProduction
        }
        if (JobTimeData.plasticJobTimeCurrent <= 0) {
            JobTimeData.plasticJobTimeCurrent = JobTimeData.plasticJobTime
            StockpillData.plastic += JobProductionData.plasticJobProduction
        }
    }
}
