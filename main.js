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
    turbineMinSpeed: 0,
    turbineMass: 3,
    turbineMaxSpeed: 500000,
    turbineFriction: 0.005,
    generatorFriction: 0.0005,
    generatorEfficency: 1,
    turbineSpinForce: 10,
}

var MiscellaneousData = {
    numberFormat: 2,
    gameTicks: 0,
    gameSpeed: 50,
    toBeDisplayed: "",
    displayNumber: 0,
    display: "",
    stringCHR: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    randomDigitsLen: 8,
    displayID: "",
}

function myFunction(id){
  document.getElementById("tab_button_1").src = "Assets/Button_Tabs_Center.png";
  document.getElementById("tab_button_2").src = "Assets/Button_Tabs_Center.png";
  document.getElementById("tab_button_3").src = "Assets/Button_Tabs_Center.png";
  document.getElementById("tab_button_4").src = "Assets/Button_Tabs_Center.png";
  document.getElementById("tab_button_5").src = "Assets/Button_Tabs_Center.png";
  document.getElementById("tab_button_6").src = "Assets/Button_Tabs_Center.png";
  document.getElementById("tab_button_7").src = "Assets/Button_Tabs_Center.png";
  document.getElementById("tab_button_8").src = "Assets/Button_Tabs_Center.png";
  document.getElementById("tab_button_9").src = "Assets/Button_Tabs_Center.png";

  document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked.png";
}


function nixieBanner(string) {
  for (i = string.length; i < 27; i++) {
    document.getElementById("Nixie_".concat(String(i))).src = "Assets/Nixie_ .png";
  }
  for (x in string.toUpperCase()) {
    document.getElementById("Nixie_".concat(String(x))).src = "Assets/Nixie_".concat(string[x].concat(".png"));
  }
}

function updateDisplay(id = "") {
    if (MiscellaneousData.toBeDisplayed == "") {
        return
    }
    if (MiscellaneousData.randomDigitsLen > MiscellaneousData.toBeDisplayed.length) {
        MiscellaneousData.randomDigitsLen = MiscellaneousData.toBeDisplayed.length - 2
        if (MiscellaneousData.randomDigitsLen < 0) {
            MiscellaneousData.randomDigitsLen = 0
        }
    }
    if (MiscellaneousData.displayNumber < MiscellaneousData.randomDigitsLen) {
        for (i = 0; i <= MiscellaneousData.displayNumber; i++) {
            MiscellaneousData.display = MiscellaneousData.stringCHR[Math.floor(Math.random() * MiscellaneousData.stringCHR.length)] + MiscellaneousData.display
        }
    } else {
        if (MiscellaneousData.displayNumber+2 > MiscellaneousData.toBeDisplayed.length) {
            var xnum = 1
            for (i = MiscellaneousData.displayNumber - MiscellaneousData.toBeDisplayed.length; i <= MiscellaneousData.randomDigitsLen; i++) {
                MiscellaneousData.display = MiscellaneousData.stringCHR[Math.floor(Math.random() * MiscellaneousData.stringCHR.length)] + MiscellaneousData.display
                xnum += 1
            }
            for (i = MiscellaneousData.toBeDisplayed.length-xnum; i >= 0; i--) {
                MiscellaneousData.display = MiscellaneousData.toBeDisplayed[i] + MiscellaneousData.display
            }
        } else {
            for (i = 0; i <= MiscellaneousData.randomDigitsLen; i++) {
                MiscellaneousData.display = MiscellaneousData.stringCHR[Math.floor(Math.random() * MiscellaneousData.stringCHR.length)] + MiscellaneousData.display
            }
            for (i = (MiscellaneousData.displayNumber-MiscellaneousData.randomDigitsLen); i >= 0; i--) {
                MiscellaneousData.display = MiscellaneousData.toBeDisplayed[i] + MiscellaneousData.display
            }
        }
    }
    if (id == "") {
        nixieBanner(MiscellaneousData.display)
    } else {
        document.getElementById(id).innerHTML = MiscellaneousData.display
    }
    MiscellaneousData.display = ""
    MiscellaneousData.displayNumber++
    if (MiscellaneousData.displayNumber == MiscellaneousData.toBeDisplayed.length + MiscellaneousData.randomDigitsLen + 2) {
        MiscellaneousData.displayNumber = 0
        MiscellaneousData.toBeDisplayed = ""
    }
}

function displayText(string) {
    MiscellaneousData.toBeDisplayed = string
}

function startMessage() {
    switch (MiscellaneousData.gameTicks) {
        default:
            break;
        case 0:
            MiscellaneousData.toBeDisplayed = "wellcom comander"
            break;
        case 100:
            MiscellaneousData.toBeDisplayed = "error power failing"
            break;
        case 200:
            MiscellaneousData.toBeDisplayed = "rebooting system"
            break;
        case 300:
            MiscellaneousData.toBeDisplayed = "rebooting failed"
            break;
        case 400:
            MiscellaneousData.toBeDisplayed = "manual restart needed"
            break;
        case 500:
            MiscellaneousData.toBeDisplayed = "spin turbine"
            break;
        case 600:
            displayMaterial("energy")
            break;
    }
}

function displayMaterial(material) {
    switch (material) {
        case "energy":
            MiscellaneousData.toBeDisplayed =
            formatNumber(TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) + "RPM " +
            formatNumber(PowerData.currentPower) + "/" +
            formatNumber(((PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteryStorage * PowerStorageData.batteries)))
            break;
        default:
        case "wood":
            Pass
            break;
    }
}

//var data = {
//  labels: ["0"],
//  datasets: [{
//    label: "Dataset #1",
//    backgroundColor: "rgba(255,99,132,0.2)",
//    borderColor: "rgba(255,99,132,1)",
//    borderWidth: 2,
//    hoverBackgroundColor: "rgba(255,99,132,0.4)",
//    hoverBorderColor: "rgba(255,99,132,1)",
//    data: [0],
//  }]
//};

//var option = {
//  responsive: false,
//  scales: {
//    yAxes: [{
//      stacked: true,
//      gridLines: {
//        display: true,
//        color: "rgba(255,99,132,0.2)"
//      }
//    }],
//    xAxes: [{
//      gridLines: {
//        display: false
//      }
//    }]
//  }
//};

//myLine = new Chart.Line('myChart', {
//  options: option,
//  data: data
//});

//function updateGraph() {
//  myLine.data.datasets[0].data.push(TurbineData.turbineSpeed)
//  myLine.data.labels.push(String(MiscellaneousData.gameTicks))
//  window.myLine.update();
//};

function formatNumber(number, numberLength = MiscellaneousData.numberFormat) {
    if (number > 5000000000000000000) {
        number /= 1000000000000000000
        number = number.toFixed(numberLength)
        number = number + "E"
    } else if (number > 5000000000000000) {
        number /= 1000000000000000
        number = number.toFixed(numberLength)
        number = number + "P"
    } else if (number > 5000000000000) {
        number /= 1000000000000
        number = number.toFixed(numberLength)
        number = number + "T"
    } else if (number > 5000000000) {
        number /= 1000000000
        number = number.toFixed(numberLength)
        number = number + "G"
    } else if (number > 5000000) {
        number /= 1000000
        number = number.toFixed(numberLength)
        number = number + "M"
    } else if (number > 5000) {
        number /= 1000
        number = number.toFixed(numberLength)
        number = number + "K"
    } else {
        number = number.toFixed(numberLength)
    }
    return number
}

function spinTurbine(amount = TurbineData.turbineSpinForce) {
    var speedAddition = amount / TurbineData.turbineMass
    if (TurbineData.turbineSpeed + speedAddition <= TurbineData.turbineMaxSpeed) {
        TurbineData.turbineSpeed += speedAddition
    } else if (TurbineData.turbineSpeed + speedAddition > TurbineData.turbineMaxSpeed) {
        TurbineData.turbineSpeed = TurbineData.turbineMaxSpeed
    }
    updateText("Power")
    //document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed) + "RPM"
}

function slowTurbine() {
    var speedLoss = TurbineData.turbineSpeed * (TurbineData.turbineFriction + TurbineData.generatorFriction)
    TurbineData.turbineSpeed -= speedLoss
    updateText("Power")
    //document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed + gameData.turbineMinSpeed) + "RPM"
}

function makePower(amount) {
    if (PowerData.currentPower < PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) {
        PowerData.currentPower += amount
        PowerData.totalPower += amount
        if (PowerData.currentPower > PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) {
            PowerData.totalPower -= PowerStorageData.currentPower - (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors)
            PowerData.currentPower = PowerStorageData.capasitorsStorage * PowerStorageData.capasitors
        }
        //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
        //document.getElementById("totalPower").innerHTML = formatNumber(gameData.totalPower) + "W  (Total Power)"
    } else if (PowerData.currentPower < (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)) {
        PowerData.currentPower += amount * PowerStorageData.batteriesEfficency
        PowerData.totalPower += amount
        if (PowerData.currentPower > (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)) {
            PowerData.totalPower -= PowerData.currentPower - (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)
            PowerData.currentPower = PowerStorageData.capasitorsStorage * PowerStorageData.capasitors
        }
        //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
        //document.getElementById("totalPower").innerHTML = formatNumber(gameData.totalPower) + "W  (Total Power)"
    }
    updateText("Power")
}

function revealTabs() {
    if (PowerData.currentPower >= 5) {
        document.getElementById("upgradesTab").style.display = "block"
    }
    if (PowerData.currentPower >= 100) {
        document.getElementById("materialsTab").style.display = "block"
    }
    if (StockpillData.wood >= 5) {
        document.getElementById("BuildingsTab").style.display = "block"
    }
    if (PowerData.currentPower >= 500) {
        document.getElementById("spaceTab").style.display = "block"
    }
    if (PowerData.currentPower >= 10000) {
        document.getElementById("WorkersTab").style.display = "block"

    }
    if (StockpillData.wood > 0) {
        document.getElementById("woodDisplay").style.display = "block"
        document.getElementById("woodDisplay").style.color = "Azure"
        document.getElementById("woodWorkers").style.display = "block"
        document.getElementById("woodWorkers").style.color = "Azure"
        document.getElementById("woodWorkers+").style.display = "block"
        document.getElementById("woodWorkers-").style.display = "block"
    }
    if (StockpillData.sand > 0) {
        document.getElementById("sandDisplay").style.display = "block"
        document.getElementById("sandDisplay").style.color = "Azure"
        document.getElementById("sandWorkers").style.display = "block"
        document.getElementById("sandWorkers").style.color = "Azure"
        document.getElementById("sandWorkers+").style.display = "block"
        document.getElementById("sandWorkers-").style.display = "block"
    }
    if (StockpillData.iron > 0) {
        document.getElementById("ironDisplay").style.display = "block"
        document.getElementById("ironDisplay").style.color = "Azure"
        document.getElementById("ironWorkers").style.display = "block"
        document.getElementById("ironWorkers").style.color = "Azure"
        document.getElementById("ironWorkers+").style.display = "block"
        document.getElementById("ironWorkers-").style.display = "block"
    }
    if (StockpillData.coal > 0) {
        document.getElementById("coalDisplay").style.display = "block"
        document.getElementById("coalDisplay").style.color = "Azure"
        document.getElementById("coalWorkers").style.display = "block"
        document.getElementById("coalWorkers").style.color = "Azure"
        document.getElementById("coalWorkers+").style.display = "block"
        document.getElementById("coalWorkers-").style.display = "block"
    }
    if (StockpillData.oil > 0) {
        document.getElementById("oilDisplay").style.display = "block"
        document.getElementById("oilDisplay").style.color = "Azure"
        document.getElementById("oilWorkers").style.display = "block"
        document.getElementById("oilWorkers").style.color = "Azure"
        document.getElementById("oilWorkers+").style.display = "block"
        document.getElementById("oilWorkers-").style.display = "block"
    }
    if (StockpillData.plastic > 0) {
        document.getElementById("plasticDisplay").style.display = "block"
        document.getElementById("plasticDisplay").style.color = "Azure"
        document.getElementById("plasticWorkers").style.display = "block"
        document.getElementById("plasticWorkers").style.color = "Azure"
        document.getElementById("plasticWorkers+").style.display = "block"
        document.getElementById("plasticWorkers-").style.display = "block"
    }
    if (StockpillData.glass > 0) {
        document.getElementById("glassDisplay").style.display = "block"
        document.getElementById("glassDisplay").style.color = "Azure"
        document.getElementById("glassWorkers").style.display = "block"
        document.getElementById("glassWorkers").style.color = "Azure"
        document.getElementById("glassWorkers+").style.display = "block"
        document.getElementById("glassWorkers-").style.display = "block"
    }
    if (StockpillData.steel > 0) {
        document.getElementById("steelDisplay").style.display = "block"
        document.getElementById("steelDisplay").style.color = "Azure"
        document.getElementById("steelWorkers").style.display = "block"
        document.getElementById("steelWorkers").style.color = "Azure"
        document.getElementById("steelWorkers+").style.display = "block"
        document.getElementById("steelWorkers-").style.display = "block"
    }
}

function updateText(update) {
    if (update == "Power") {
        document.getElementById("RPM").innerHTML = formatNumber(TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) + " RPM"
        document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(PowerData.currentPower) + "W/" + formatNumber(PowerStorageData.totalPowerStorage) + "W"
        document.getElementById("RPMTipText").innerHTML = formatNumber(TurbineData.generatorEfficency * ((TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) / 1000) * 4) + "W per sec"
    } else if (update == "Buildings") {
        document.getElementById("getPump").innerHTML = "Buy pump (Currently Ownd " + BuildingData.pumps + ") Cost: " + formatNumber(BuildingCostData.pumpCost) + " Steel"
        document.getElementById("getDril").innerHTML = "Buy dril (Currently Ownd " + BuildingData.drils + ") Cost: " + formatNumber(BuildingCostData.drilCost) + " Iron"
        document.getElementById("getMine").innerHTML = "Buy mine (Currently Ownd " + BuildingData.mines + ") Cost: " + formatNumber(BuildingCostData.mineCost) + " Wood"
        document.getElementById("getDigger").innerHTML = "Buy digger (Currently Ownd " + BuildingData.diggers + ") Cost: " + formatNumber(BuildingCostData.diggerCost) + " Wood"
    } else if (update == "Upgrades") {
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Turbine (Currently Level " + PowerData.powerPerTick + ") Cost: " + formatNumber(PowerData.powerPerTickCost) + "W"
        document.getElementById("buyBatteryButton").innerHTML = "Buy Battery (Currently Ownd " + PowerStorageData.batteries + ") Cost: " + formatNumber(PowerStorageData.batteryCost) + "W"
        document.getElementById("buyCapasitorButton").innerHTML = "Buy Capasitor (Currently Ownd " + PowerStorageData.capasitors + ") Cost: " + formatNumber(PowerStorageData.capasitorCost) + "W"
    } else if (update == "Materials") {
        document.getElementById("oilDisplay").innerHTML = "oil: " + formatNumber(StockpillData.oil)
        document.getElementById("coalDisplay").innerHTML = "coal: " + formatNumber(StockpillData.coal)
        document.getElementById("ironDisplay").innerHTML = "iron: " + formatNumber(StockpillData.iron)
        document.getElementById("sandDisplay").innerHTML = "sand: " + formatNumber(StockpillData.sand)
        document.getElementById("plasticDisplay").innerHTML = "plastic: " + formatNumber(StockpillData.plastic)
        document.getElementById("glassDisplay").innerHTML = "glass: " + formatNumber(StockpillData.glass)
        document.getElementById("steelDisplay").innerHTML = "steel: " + formatNumber(StockpillData.steel)
        document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(StockpillData.wood)
    } else if (update == "Space") {
        document.getElementById("buyTelescopeButton").innerHTML = "Upgrade telescope (Currently Level " + TelescopeData.telescopeLevel + ") Cost: " + formatNumber(TelescopeData.telescopeCost) + "W"
        document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope " + TelescopeData.telescopeStatus + " (energy cost " + TelescopeData.telescopeEnergyCost * 4 + "W/s)"
        if (TelescopeData.area == 1) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea1 / 10) + "% compleat)"
        } else if (TelescopeData.area == 2) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 1LY to 10LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea2 / 100) + "% compleat)"
        } else if (TelescopeData.area == 3) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea3 / 1000) + "% compleat)"
        }
    } else if (update == "Workers") {
        document.getElementById("buyWorker").innerHTML = "Buy worker (" + WorkerStatusData.workers + ") Cost: " + formatNumber(WorkerStatusData.workerCost) + "W"
        document.getElementById("freeWorkers").innerHTML = "Free workers " + WorkerStatusData.freeWorkers
        document.getElementById("energyWorkers").innerHTML = "Energy workers " + JobData.energyWorker
        document.getElementById("woodWorkers").innerHTML = "Wood workers " + JobData.woodWorker
        document.getElementById("sandWorkers").innerHTML = "Sand workers " + JobData.sandWorker
        document.getElementById("glassWorkers").innerHTML = "Glass workers " + JobData.glassWorker
        document.getElementById("ironWorkers").innerHTML = "Iron workers " + JobData.ironWorker
        document.getElementById("coalWorkers").innerHTML = "Coal workers " + JobData.coalWorker
        document.getElementById("steelWorkers").innerHTML = "Steel workers " + JobData.steelWorker
        document.getElementById("oilWorkers").innerHTML = "Oil workers " + JobData.oilWorker
        document.getElementById("plasticWorkers").innerHTML = "Plastic workers " + JobData.plasticWorker
    }
}

let setUpToolTip = function() {
    let toolTip = "",
        toolTipDiv = document.querySelector(".dev-tooltip"),
        toolTipElements = Array.from(document.querySelectorAll(".hover-reveal"))

    let displayToolTip = function(e, obj) {
        tooltip = obj.dataset.tooltip
        toolTipDiv.innerHTML = tooltip
        toolTipDiv.style.top = e.pageY + "px"
        toolTipDiv.style.left = e.pageX + "px"
        toolTipDiv.style.opacity = 1
    }

    toolTipElements.forEach(function(elem) {
        elem.addEventListener("mouseenter", function(e) {
            displayToolTip(e, this)
        })
    })
}

setUpToolTip()

function mainLoopFast () {
    workers()
}

function mainLoopMediam () {
    slowTurbine()
    makePower(TurbineData.generatorEfficency * ((TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) / 1000))
    revealTabs()
//    updateGraph()
}

function mainLoopSlow () {
    gatherMaterials()
    planetProduction()
    useTelescope()

}

var mainGameLoop = window.setInterval(function() {
    // mainLoopFast()
    // if (MiscellaneousData.gameTicks % 10 == 0) {
    //     mainLoopMediam()
    // }
    // if (MiscellaneousData.gameTicks % 25 == 0) {
    //     mainLoopSlow()
    // }
    startMessage()
    updateDisplay(MiscellaneousData.displayID)
    MiscellaneousData.gameTicks += 1
}, MiscellaneousData.gameSpeed)
