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

var DisplayData = {
    energyDisplayNixiePart: 0,
    nixieDisplayRunning: 0,
    energyStatsButton: [1, 0, 0, 0, 0, 0, 0],
    energyWorkerNumber: 0,
}

var TabData = {
    energyTabAccess: 0,
    workersTabAccess: 0,
    upgradesTabAccess: 0,
    materialsTabAccess: 0,
    spaceTabAccess: 0,
    buildingsTabAccess: 0,
    reaserchTabAccess: 0,
    resetTabAccess: 0,
    setingsTabAccess: 0,
}

var NixieDictionary = {
    "a": "Nixie_001",
    "A": "Nixie_001",
    "b": "Nixie_002",
    "B": "Nixie_002",
    "c": "Nixie_003",
    "C": "Nixie_003",
    "d": "Nixie_004",
    "D": "Nixie_004",
    "e": "Nixie_005",
    "E": "Nixie_005",
    "f": "Nixie_006",
    "F": "Nixie_006",
    "g": "Nixie_007",
    "G": "Nixie_007",
    "h": "Nixie_008",
    "H": "Nixie_008",
    "i": "Nixie_009",
    "I": "Nixie_009",
    "j": "Nixie_010",
    "J": "Nixie_010",
    "k": "Nixie_011",
    "K": "Nixie_011",
    "l": "Nixie_012",
    "L": "Nixie_012",
    "m": "Nixie_013",
    "M": "Nixie_013",
    "n": "Nixie_014",
    "N": "Nixie_014",
    "o": "Nixie_015",
    "O": "Nixie_015",
    "p": "Nixie_016",
    "P": "Nixie_016",
    "q": "Nixie_017",
    "Q": "Nixie_017",
    "r": "Nixie_018",
    "R": "Nixie_018",
    "s": "Nixie_019",
    "S": "Nixie_019",
    "t": "Nixie_020",
    "T": "Nixie_020",
    "u": "Nixie_021",
    "U": "Nixie_021",
    "v": "Nixie_022",
    "V": "Nixie_022",
    "w": "Nixie_023",
    "W": "Nixie_023",
    "x": "Nixie_024",
    "X": "Nixie_024",
    "y": "Nixie_025",
    "Y": "Nixie_025",
    "z": "Nixie_026",
    "Z": "Nixie_026",
    " ": "Nixie_027",
    "-": "Nixie_028",
    "+": "Nixie_029",
    "/": "Nixie_030",
    "*": "Nixie_031",
    ".": "Nixie_032",
    "(": "Nixie_033",
    ")": "Nixie_034",
    "[": "Nixie_035",
    "]": "Nixie_036",
    ":": "Nixie_037",
    "?": "Nixie_038",
    "|": "Nixie_039",
    "!": "Nixie_040",
    "0": "Nixie_041",
    "1": "Nixie_042",
    "2": "Nixie_043",
    "3": "Nixie_044",
    "4": "Nixie_045",
    "5": "Nixie_046",
    "6": "Nixie_047",
    "7": "Nixie_048",
    "8": "Nixie_049",
    "9": "Nixie_050",
    "%": "Nixie_051",
    "~": "Nixie_052",
    "μ": "Nixie_053",
    "Δ": "Nixie_054",
    "∇": "Nixie_055"
}

function workerNumber(move) {
    switch (move) {
        case "up":
            DisplayData.energyWorkerNumber += 1
            break;
        case "down":
            DisplayData.energyWorkerNumber -= 1
            break;
        default:
    }
    document.getElementById("energy_worker_number").innerHTML = formatNumber(DisplayData.energyWorkerNumber, 0)
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
            switch (stat) {
                case "down":
                    energyStatsButtons('energy_stats_button_1')
                    document.getElementById("energy_stats_button_1").src = "Assets/stats_button_pressed.png"
                    DisplayData.energyStatsButton[0] = 1
                    break;
                case "hover":
                    if (DisplayData.energyStatsButton[0] == 0) {
                        document.getElementById("energy_stats_button_1").src = "Assets/stats_button_hover.png"
                    }
                    break;
                case "out":
                    if (DisplayData.energyStatsButton[0] == 0) {
                        document.getElementById("energy_stats_button_1").src = "Assets/stats_button_no_hover.png"
                    }
                    break;
                default:
                    break;
            }
            break;
        case "energy_stats_button_2":
            switch (stat) {
                case "down":
                    energyStatsButtons('energy_stats_button_2')
                    document.getElementById("energy_stats_button_2").src = "Assets/stats_button_pressed.png"
                    DisplayData.energyStatsButton[1] = 1
                    break;
                case "hover":
                    if (DisplayData.energyStatsButton[1] == 0) {
                        document.getElementById("energy_stats_button_2").src = "Assets/stats_button_hover.png"
                    }
                    break;
                case "out":
                    if (DisplayData.energyStatsButton[1] == 0) {
                        document.getElementById("energy_stats_button_2").src = "Assets/stats_button_no_hover.png"
                    }
                    break;
                default:
                    break;
            }
            break;
        case "energy_stats_button_3":
            switch (stat) {
                case "down":
                    energyStatsButtons('energy_stats_button_3')
                    document.getElementById("energy_stats_button_3").src = "Assets/stats_button_pressed.png"
                    DisplayData.energyStatsButton[2] = 1
                    break;
                case "hover":
                    if (DisplayData.energyStatsButton[2] == 0) {
                        document.getElementById("energy_stats_button_3").src = "Assets/stats_button_hover.png"
                    }
                    break;
                case "out":
                    if (DisplayData.energyStatsButton[2] == 0) {
                        document.getElementById("energy_stats_button_3").src = "Assets/stats_button_no_hover.png"
                    }
                    break;
                default:
                    break;
            }
            break;
        case "energy_stats_button_4":
            switch (stat) {
                case "down":
                    energyStatsButtons('energy_stats_button_4')
                    document.getElementById("energy_stats_button_4").src = "Assets/stats_button_pressed.png"
                    DisplayData.energyStatsButton[3] = 1
                    break;
                case "hover":
                    if (DisplayData.energyStatsButton[3] == 0) {
                        document.getElementById("energy_stats_button_4").src = "Assets/stats_button_hover.png"
                    }
                    break;
                case "out":
                    if (DisplayData.energyStatsButton[3] == 0) {
                        document.getElementById("energy_stats_button_4").src = "Assets/stats_button_no_hover.png"
                    }
                    break;
                default:
                    break;
            }
            break;
        case "energy_stats_button_5":
            switch (stat) {
                case "down":
                    energyStatsButtons('energy_stats_button_5')
                    document.getElementById("energy_stats_button_5").src = "Assets/stats_button_pressed.png"
                    DisplayData.energyStatsButton[4] = 1
                    break;
                case "hover":
                    if (DisplayData.energyStatsButton[4] == 0) {
                        document.getElementById("energy_stats_button_5").src = "Assets/stats_button_hover.png"
                    }
                    break;
                case "out":
                    if (DisplayData.energyStatsButton[4] == 0) {
                        document.getElementById("energy_stats_button_5").src = "Assets/stats_button_no_hover.png"
                    }
                    break;
                default:
                    break;
            }
            break;
        case "energy_stats_button_6":
            switch (stat) {
                case "down":
                    energyStatsButtons('energy_stats_button_6')
                    document.getElementById("energy_stats_button_6").src = "Assets/stats_button_pressed.png"
                    DisplayData.energyStatsButton[5] = 1
                    break;
                case "hover":
                    if (DisplayData.energyStatsButton[5] == 0) {
                        document.getElementById("energy_stats_button_6").src = "Assets/stats_button_hover.png"
                    }
                    break;
                case "out":
                    if (DisplayData.energyStatsButton[5] == 0) {
                        document.getElementById("energy_stats_button_6").src = "Assets/stats_button_no_hover.png"
                    }
                    break;
                default:
                    break;
            }
            break;
        case "energy_stats_button_7":
            switch (stat) {
                case "down":
                    energyStatsButtons('energy_stats_button_7')
                    document.getElementById("energy_stats_button_7").src = "Assets/stats_button_pressed.png"
                    DisplayData.energyStatsButton[6] = 1
                    break;
                case "hover":
                    if (DisplayData.energyStatsButton[6] == 0) {
                        document.getElementById("energy_stats_button_7").src = "Assets/stats_button_hover.png"
                    }
                    break;
                case "out":
                    if (DisplayData.energyStatsButton[6] == 0) {
                        document.getElementById("energy_stats_button_7").src = "Assets/stats_button_no_hover.png"
                    }
                    break;
                default:
                    break;
            }
            break;
        case "energy_worker_+_button":
            switch (stat) {
                case "down":
                    workerNumber("up")
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
                    workerNumber("down")
                    document.getElementById("energy_worker_-_button").src = "Assets/-_button_pressed.png"
                    break;
                case "up":
                    document.getElementById("energy_worker_-_button").src = "Assets/-_button_unpressed.png"
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

function energyStatsButtons(button) {
    document.getElementById("energy_stats_button_1").src = "Assets/stats_button_no_hover.png"
    document.getElementById("energy_stats_button_2").src = "Assets/stats_button_no_hover.png"
    document.getElementById("energy_stats_button_3").src = "Assets/stats_button_no_hover.png"
    document.getElementById("energy_stats_button_4").src = "Assets/stats_button_no_hover.png"
    document.getElementById("energy_stats_button_5").src = "Assets/stats_button_no_hover.png"
    document.getElementById("energy_stats_button_6").src = "Assets/stats_button_no_hover.png"
    document.getElementById("energy_stats_button_7").src = "Assets/stats_button_no_hover.png"
    DisplayData.energyStatsButton[0] = 0
    DisplayData.energyStatsButton[1] = 0
    DisplayData.energyStatsButton[2] = 0
    DisplayData.energyStatsButton[3] = 0
    DisplayData.energyStatsButton[4] = 0
    DisplayData.energyStatsButton[5] = 0
    DisplayData.energyStatsButton[6] = 0
    switch (button) {
        default:
            break;
        case "energy_stats_button_1":
            DisplayData.energyDisplayNixiePart = 1
            break;
        case "energy_stats_button_2":
            DisplayData.energyDisplayNixiePart = 3
            break;
        case "energy_stats_button_3":
            DisplayData.energyDisplayNixiePart = 5
            break;
        case "energy_stats_button_4":
            DisplayData.energyDisplayNixiePart = 7
            break;
        case "energy_stats_button_5":
            DisplayData.energyDisplayNixiePart = 9
            break;
        case "energy_stats_button_6":
            DisplayData.energyDisplayNixiePart = 11
            break;
        case "energy_stats_button_7":
            DisplayData.energyDisplayNixiePart = 13
            break;
    }
}

function tabEvent(id, evt, tabName) {
    var access = 0

    switch (id) {
        case "tab_button_1":
            if (TabData.energyTabAccess == 1) {
                access = 1
            }
            break;
        case "tab_button_2":
            if (TabData.upgradesTabAccess == 1) {
                access = 1
            }
            break;
        case "tab_button_3":
            if (TabData.workersTabAccess == 1) {
                access = 1
            }
            break;
        case "tab_button_4":
            if (TabData.materialsTabAccess == 1) {
                access = 1
            }
            break;
        case "tab_button_5":
            if (TabData.spaceTabAccess == 1) {
                access = 1
            }
            break;
        case "tab_button_6":
            if (TabData.buildingsTabAccess == 1) {
                access = 1
            }
            break;
        case "tab_button_7":
            if (TabData.reaserchTabAccess == 1) {
                access = 1
            }
            break;
        case "tab_button_8":
            if (TabData.resetTabAccess == 1) {
                access = 1
            }
            break;
        case "tab_button_9":
            if (TabData.setingsTabAccess == 1) {
                access = 1
            }
            break;
        default:
            break;
    }

    if (TabData.energyTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_1").src = "Assets/Button_Tabs_Center.png";
    }
    if (TabData.upgradesTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_2").src = "Assets/Button_Tabs_Center.png";
    }
    if (TabData.workersTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_3").src = "Assets/Button_Tabs_Center.png";
    }
    if (TabData.materialsTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_4").src = "Assets/Button_Tabs_Center.png";
    }
    if (TabData.spaceTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_5").src = "Assets/Button_Tabs_Center.png";
    }
    if (TabData.buildingsTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_6").src = "Assets/Button_Tabs_Center.png";
    }
    if (TabData.reaserchTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_7").src = "Assets/Button_Tabs_Center.png";
    }
    if (TabData.resetTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_8").src = "Assets/Button_Tabs_Center.png";
    }
    if (TabData.setingsTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_9").src = "Assets/Button_Tabs_Center.png";
    }

    if (access == 1) {
        document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked.png";

        var tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
}


function nixieBanner(string) {
    for (i = string.length; i < 27; i++) {
        document.getElementById("Nixie_".concat(String(i))).src = "Assets/Nixie_027.png";
    }
    for (x in string) {
        document.getElementById("Nixie_".concat(String(x))).src = "Assets/".concat(NixieDictionary[string[x]], ".png");
    }
}

function updateDisplay(id = "") {
    if (MiscellaneousData.toBeDisplayed == "" && MiscellaneousData.display == "") {
        DisplayData.nixieDisplayRunning = 0
        return
    } else if (MiscellaneousData.display != "") {
        nixieBanner(MiscellaneousData.display)
        MiscellaneousData.display = ""
        DisplayData.nixieDisplayRunning = 0
        return
    }
    DisplayData.nixieDisplayRunning = 1
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
        if (MiscellaneousData.displayNumber + 2 > MiscellaneousData.toBeDisplayed.length) {
            var xnum = 1
            for (i = MiscellaneousData.displayNumber - MiscellaneousData.toBeDisplayed.length; i <= MiscellaneousData.randomDigitsLen; i++) {
                MiscellaneousData.display = MiscellaneousData.stringCHR[Math.floor(Math.random() * MiscellaneousData.stringCHR.length)] + MiscellaneousData.display
                xnum += 1
            }
            for (i = MiscellaneousData.toBeDisplayed.length - xnum; i >= 0; i--) {
                MiscellaneousData.display = MiscellaneousData.toBeDisplayed[i] + MiscellaneousData.display
            }
        } else {
            for (i = 0; i <= MiscellaneousData.randomDigitsLen; i++) {
                MiscellaneousData.display = MiscellaneousData.stringCHR[Math.floor(Math.random() * MiscellaneousData.stringCHR.length)] + MiscellaneousData.display
            }
            for (i = (MiscellaneousData.displayNumber - MiscellaneousData.randomDigitsLen); i >= 0; i--) {
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
            DisplayData.energyDisplayNixiePart = 1
            displayMaterial("energy", DisplayData.energyDisplayNixiePart)
            break;
        case 630:
            TabData.energyTabAccess = 1
            document.getElementById("tab_button_1").src = "Assets/Button_Tabs_Center.png"
            TabData.setingsTabAccess = 1
            document.getElementById("tab_button_9").src = "Assets/Button_Tabs_Center.png"
            break;
    }
}

function rpm() {
    return TurbineData.turbineSpeed + TurbineData.turbineMinSpeed
}

function PerSecond(material) {
    switch (material) {
        default:
            break;
        case "energy":
            return TurbineData.generatorEfficency * ((TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) / 1000) * MiscellaneousData.gameSpeed
        case "wood":
            Pass
            break;
    }
}

function displayMaterial(material, active) {
    switch (active) {
        default:
            break;
        case 1:
            switch (material) {
                default:
                    break;
                case "energy":
                    MiscellaneousData.toBeDisplayed =
                        formatNumber(rpm(), 1) + "RPM " +
                        formatNumber(PowerData.currentPower, 1) + "/" +
                        formatNumber(((PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteryStorage * PowerStorageData.batteries)), 1) + "W"
                    DisplayData.energyDisplayNixiePart = 2
                    break;
                case "wood":
                    Pass
                    break;
            }
            break;
        case 2:
            if (DisplayData.nixieDisplayRunning == 0) {
                switch (material) {
                    default:
                        break;
                    case "energy":
                        MiscellaneousData.display =
                            formatNumber(rpm(), 1) + "RPM " +
                            formatNumber(PowerData.currentPower, 1) + "/" +
                            formatNumber(((PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteryStorage * PowerStorageData.batteries)), 1) + "W"
                        break;
                    case "wood":
                        Pass
                        break;
                }
            }
            break;
        case 3:
            switch (material) {
                default:
                    break;
                case "energy":
                    MiscellaneousData.toBeDisplayed = formatNumber(PerSecond("energy")) + "W per sec"
                    DisplayData.energyDisplayNixiePart = 4
                    break;
                case "wood":
                    Pass
                    break;
            }
            break;
        case 4:
            if (DisplayData.nixieDisplayRunning == 0) {
                switch (material) {
                    default:
                        break;
                    case "energy":
                        MiscellaneousData.display = formatNumber(PerSecond("energy")) + "W per sec"
                        break;
                    case "wood":
                        Pass
                        break;
                }
            }
            break;
        case 5:
            switch (material) {
                default:
                    break;
                case "energy":
                    MiscellaneousData.toBeDisplayed = formatNumber(PerSecond("energy") * 60) + "W per min"
                    DisplayData.energyDisplayNixiePart = 6
                    break;
                case "wood":
                    Pass
                    break;
            }
            break;
        case 6:
            if (DisplayData.nixieDisplayRunning == 0) {
                switch (material) {
                    default:
                        break;
                    case "energy":
                        MiscellaneousData.display = formatNumber(PerSecond("energy") * 60) + "W per min"
                        break;
                    case "wood":
                        Pass
                        break;
                }
            }
            break;
        case 7:
            switch (material) {
                default:
                    break;
                case "energy":
                    MiscellaneousData.toBeDisplayed = formatNumber(PerSecond("energy") * 60 * 60) + "W per hour"
                    DisplayData.energyDisplayNixiePart = 8
                    break;
                case "wood":
                    Pass
                    break;
            }
            break;
        case 8:
            if (DisplayData.nixieDisplayRunning == 0) {
                switch (material) {
                    default:
                        break;
                    case "energy":
                        MiscellaneousData.display = formatNumber(PerSecond("energy") * 60 * 60) + "W per hour"
                        break;
                    case "wood":
                        Pass
                        break;
                }
            }
            break;
        case 9:
            switch (material) {
                default:
                    break;
                case "energy":
                    MiscellaneousData.toBeDisplayed = formatNumber(PerSecond("energy") * 60 * 60 * 24) + "W per day"
                    DisplayData.energyDisplayNixiePart = 10
                    break;
                case "wood":
                    Pass
                    break;
            }
            break;
        case 10:
            if (DisplayData.nixieDisplayRunning == 0) {
                switch (material) {
                    default:
                        break;
                    case "energy":
                        MiscellaneousData.display = formatNumber(PerSecond("energy") * 60 * 60 * 24) + "W per day"
                        break;
                    case "wood":
                        Pass
                        break;
                }
            }
            break;
        case 11:
            switch (material) {
                default:
                    break;
                case "energy":
                    MiscellaneousData.toBeDisplayed = formatNumber(PerSecond("energy") * 60 * 60 * 24 * 7) + "W per week"
                    DisplayData.energyDisplayNixiePart = 12
                    break;
                case "wood":
                    Pass
                    break;
            }
            break;
        case 12:
            if (DisplayData.nixieDisplayRunning == 0) {
                switch (material) {
                    default:
                        break;
                    case "energy":
                        MiscellaneousData.display = formatNumber(PerSecond("energy") * 60 * 60 * 24 * 7) + "W per week"
                        break;
                    case "wood":
                        Pass
                        break;
                }
            }
            break;
        case 13:
            switch (material) {
                default:
                    break;
                case "energy":
                    MiscellaneousData.toBeDisplayed = formatNumber(PerSecond("energy") * 60 * 60 * 24 * 7 * 52) + "W per year"
                    DisplayData.energyDisplayNixiePart = 14
                    break;
                case "wood":
                    Pass
                    break;
            }
            break;
        case 14:
            if (DisplayData.nixieDisplayRunning == 0) {
                switch (material) {
                    default:
                        break;
                    case "energy":
                        MiscellaneousData.display = formatNumber(PerSecond("energy") * 60 * 60 * 24 * 7 * 52) + "W per year"
                        break;
                    case "wood":
                        Pass
                        break;
                }
            }
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

function revealTabs() {
    if (PowerData.currentPower >= 50 && TabData.upgradesTabAccess == 0) {
        TabData.upgradesTabAccess = 1
        document.getElementById("tab_button_2").src = "Assets/Button_Tabs_Center.png"
    }
    if (PowerData.currentPower >= 100 && TabData.workersTabAccess == 0) {
        TabData.workersTabAccess = 1
        document.getElementById("tab_button_3").src = "Assets/Button_Tabs_Center.png"
    }
    // if (StockpillData.wood >= 5) {
    //     document.getElementById("BuildingsTab").style.display = "block"
    // }
    // if (PowerData.currentPower >= 500) {
    //     document.getElementById("spaceTab").style.display = "block"
    // }
    // if (PowerData.currentPower >= 10000) {
    //     document.getElementById("WorkersTab").style.display = "block"
    //
    // }
    // if (StockpillData.wood > 0) {
    //     document.getElementById("woodDisplay").style.display = "block"
    //     document.getElementById("woodDisplay").style.color = "Azure"
    //     document.getElementById("woodWorkers").style.display = "block"
    //     document.getElementById("woodWorkers").style.color = "Azure"
    //     document.getElementById("woodWorkers+").style.display = "block"
    //     document.getElementById("woodWorkers-").style.display = "block"
    // }
    // if (StockpillData.sand > 0) {
    //     document.getElementById("sandDisplay").style.display = "block"
    //     document.getElementById("sandDisplay").style.color = "Azure"
    //     document.getElementById("sandWorkers").style.display = "block"
    //     document.getElementById("sandWorkers").style.color = "Azure"
    //     document.getElementById("sandWorkers+").style.display = "block"
    //     document.getElementById("sandWorkers-").style.display = "block"
    // }
    // if (StockpillData.iron > 0) {
    //     document.getElementById("ironDisplay").style.display = "block"
    //     document.getElementById("ironDisplay").style.color = "Azure"
    //     document.getElementById("ironWorkers").style.display = "block"
    //     document.getElementById("ironWorkers").style.color = "Azure"
    //     document.getElementById("ironWorkers+").style.display = "block"
    //     document.getElementById("ironWorkers-").style.display = "block"
    // }
    // if (StockpillData.coal > 0) {
    //     document.getElementById("coalDisplay").style.display = "block"
    //     document.getElementById("coalDisplay").style.color = "Azure"
    //     document.getElementById("coalWorkers").style.display = "block"
    //     document.getElementById("coalWorkers").style.color = "Azure"
    //     document.getElementById("coalWorkers+").style.display = "block"
    //     document.getElementById("coalWorkers-").style.display = "block"
    // }
    // if (StockpillData.oil > 0) {
    //     document.getElementById("oilDisplay").style.display = "block"
    //     document.getElementById("oilDisplay").style.color = "Azure"
    //     document.getElementById("oilWorkers").style.display = "block"
    //     document.getElementById("oilWorkers").style.color = "Azure"
    //     document.getElementById("oilWorkers+").style.display = "block"
    //     document.getElementById("oilWorkers-").style.display = "block"
    // }
    // if (StockpillData.plastic > 0) {
    //     document.getElementById("plasticDisplay").style.display = "block"
    //     document.getElementById("plasticDisplay").style.color = "Azure"
    //     document.getElementById("plasticWorkers").style.display = "block"
    //     document.getElementById("plasticWorkers").style.color = "Azure"
    //     document.getElementById("plasticWorkers+").style.display = "block"
    //     document.getElementById("plasticWorkers-").style.display = "block"
    // }
    // if (StockpillData.glass > 0) {
    //     document.getElementById("glassDisplay").style.display = "block"
    //     document.getElementById("glassDisplay").style.color = "Azure"
    //     document.getElementById("glassWorkers").style.display = "block"
    //     document.getElementById("glassWorkers").style.color = "Azure"
    //     document.getElementById("glassWorkers+").style.display = "block"
    //     document.getElementById("glassWorkers-").style.display = "block"
    // }
    // if (StockpillData.steel > 0) {
    //     document.getElementById("steelDisplay").style.display = "block"
    //     document.getElementById("steelDisplay").style.color = "Azure"
    //     document.getElementById("steelWorkers").style.display = "block"
    //     document.getElementById("steelWorkers").style.color = "Azure"
    //     document.getElementById("steelWorkers+").style.display = "block"
    //     document.getElementById("steelWorkers-").style.display = "block"
    // }
}

function updateText(update) {
    switch (update) {
        case "Power":
            displayMaterial("energy", DisplayData.energyDisplayNixiePart)
            break;
        case "Buildings":
            document.getElementById("getPump").innerHTML = "Buy pump (Currently Ownd " + BuildingData.pumps + ") Cost: " + formatNumber(BuildingCostData.pumpCost) + " Steel"
            document.getElementById("getDril").innerHTML = "Buy dril (Currently Ownd " + BuildingData.drils + ") Cost: " + formatNumber(BuildingCostData.drilCost) + " Iron"
            document.getElementById("getMine").innerHTML = "Buy mine (Currently Ownd " + BuildingData.mines + ") Cost: " + formatNumber(BuildingCostData.mineCost) + " Wood"
            document.getElementById("getDigger").innerHTML = "Buy digger (Currently Ownd " + BuildingData.diggers + ") Cost: " + formatNumber(BuildingCostData.diggerCost) + " Wood"
            break;
        case "Upgrades":
            document.getElementById("perClickUpgrade").innerHTML = "Upgrade Turbine (Currently Level " + PowerData.powerPerTick + ") Cost: " + formatNumber(PowerData.powerPerTickCost) + "W"
            document.getElementById("buyBatteryButton").innerHTML = "Buy Battery (Currently Ownd " + PowerStorageData.batteries + ") Cost: " + formatNumber(PowerStorageData.batteryCost) + "W"
            document.getElementById("buyCapasitorButton").innerHTML = "Buy Capasitor (Currently Ownd " + PowerStorageData.capasitors + ") Cost: " + formatNumber(PowerStorageData.capasitorCost) + "W"
            break;
        case "Materials":
            document.getElementById("oilDisplay").innerHTML = "oil: " + formatNumber(StockpillData.oil)
            document.getElementById("coalDisplay").innerHTML = "coal: " + formatNumber(StockpillData.coal)
            document.getElementById("ironDisplay").innerHTML = "iron: " + formatNumber(StockpillData.iron)
            document.getElementById("sandDisplay").innerHTML = "sand: " + formatNumber(StockpillData.sand)
            document.getElementById("plasticDisplay").innerHTML = "plastic: " + formatNumber(StockpillData.plastic)
            document.getElementById("glassDisplay").innerHTML = "glass: " + formatNumber(StockpillData.glass)
            document.getElementById("steelDisplay").innerHTML = "steel: " + formatNumber(StockpillData.steel)
            document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(StockpillData.wood)
            break;
        case "Space":
            document.getElementById("buyTelescopeButton").innerHTML = "Upgrade telescope (Currently Level " + TelescopeData.telescopeLevel + ") Cost: " + formatNumber(TelescopeData.telescopeCost) + "W"
            document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope " + TelescopeData.telescopeStatus + " (energy cost " + TelescopeData.telescopeEnergyCost * 4 + "W/s)"
            switch (TelescopeData.area) {
                case 1:
                    document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea1 / 10) + "% compleat)"
                    break;
                case 2:
                    document.getElementById("changeSpaceArea").innerHTML = "Looking out at 1LY to 10LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea2 / 100) + "% compleat)"
                    break;
                case 3:
                    document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea3 / 1000) + "% compleat)"
                    break;
                default:
                    break;
            }
            break;
        case "Workers":
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
            break;
        default:
            break;
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

function mainLoopFast() {
    //workers()
    updateDisplay(MiscellaneousData.displayID)
}

function mainLoopMediam() {
    slowTurbine()
    makePower(TurbineData.generatorEfficency * ((TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) / 1000))
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
    if (MiscellaneousData.gameTicks % 10 == 0) {
        mainLoopMediam()
    }
    if (MiscellaneousData.gameTicks % 25 == 0) {
        //mainLoopSlow()
    }
    startMessage()
    MiscellaneousData.gameTicks += 1
}, MiscellaneousData.gameSpeed)
