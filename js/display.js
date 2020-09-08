var DisplayData = {
    energyDisplayNixiePart: 0,
    nixieDisplayRunning: 0,
    energyStatsButton: [1, 0, 0, 0, 0, 0, 0],
    energyWorkerNumber: 0,
    woodWorkerNumber: 0,
    oilWorkerNumber: 0,
    errorsPerSec: 0.5,
    errorsPerSecCount: 0,
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
                        formatNumber(TurbineData.turbineSpeed, 1) + "RPM " +
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
                            formatNumber(TurbineData.turbineSpeed, 1) + "RPM " +
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
        document.getElementById("tab_button_1").src = "Assets/Button_Tabs_Center_generator.png";
    }
    if (TabData.upgradesTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_2").src = "Assets/Button_Tabs_Center_upgrades.png";
    }
    if (TabData.workersTabAccess == 1 && access == 1) {
        document.getElementById("tab_button_3").src = "Assets/Button_Tabs_Center_workers.png";
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
        document.getElementById("tab_button_9").src = "Assets/Button_Tabs_Center_settings.png";
    }

    if (access == 1) {
        switch (id) {
            case "tab_button_1":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked_generator.png";
                break;
            case "tab_button_2":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked_upgrades.png";
                break;
            case "tab_button_3":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked_workers.png";
                break;
            case "tab_button_4":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked.png";
                break;
            case "tab_button_5":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked.png";
                break;
            case "tab_button_6":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked.png";
                break;
            case "tab_button_7":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked.png";
                break;
            case "tab_button_8":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked.png";
                break;
            case "tab_button_9":
                document.getElementById(id).src = "Assets/Button_Tabs_Center_Clicked_settings.png";
                break;
            default:

        }

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

function revealTabs() {
    if (PowerData.currentPower >= 50 && TabData.upgradesTabAccess == 0) {
        TabData.upgradesTabAccess = 1
        document.getElementById("tab_button_2").src = "Assets/Button_Tabs_Center_upgrades.png"
        updateText("Upgrades")
    }
}

function updateText(update) {
    switch (update) {
        case "Power":
            displayMaterial("energy", DisplayData.energyDisplayNixiePart)
            break;
        case "Upgrades":
            for (i = 1; i <= 6; i++) {
                if (RepeatSlots[i] != "") {
                    document.getElementById("repeat_slot_".concat(String(i))).style.visibility = "visible"
                    document.getElementById("repeat_slot_".concat(String(i)) + "_text").innerHTML = RepeatSlots[i]
                } else {
                    document.getElementById("repeat_slot_".concat(String(i))).style.visibility = "hidden"
                    document.getElementById("repeat_slot_".concat(String(i)) + "_text").innerHTML = ""
                }
            }
            for (i = 1; i <= 6; i++) {
                if (OneTimeSlots[i] != "") {
                    document.getElementById("one_time_slot_".concat(String(i))).style.visibility = "visible"
                    document.getElementById("one_time_slot_".concat(String(i)) + "_text").innerHTML = OneTimeSlots[i]
                } else {
                    document.getElementById("one_time_slot_".concat(String(i))).style.visibility = "hidden"
                    document.getElementById("one_time_slot_".concat(String(i)) + "_text").innerHTML = ""
                }
            }
            if (SlotsDtat.OneTimeSlotsFilled >= SlotsDtat.RepeatSlotsFilled) {
                for (i = 1; i <= SlotsDtat.RepeatSlotsFilled; i++) {
                    document.getElementById("side_connector_".concat(String(i))).style.visibility = "visible"

                }
                for (i = 6; i > SlotsDtat.RepeatSlotsFilled; i--) {
                    document.getElementById("side_connector_".concat(String(i))).style.visibility = "hidden"
                }
            } else {
                for (i = 1; i <= SlotsDtat.OneTimeSlotsFilled; i++) {
                    document.getElementById("side_connector_".concat(String(i))).style.visibility = "visible"
                }
                for (i = 6; i > SlotsDtat.OneTimeSlotsFilled; i--) {
                    document.getElementById("side_connector_".concat(String(i))).style.visibility = "hidden"
                }
            }
            if (SlotsDtat.OneTimeSlotsFilled != 0) {
                for (i = 1; i < SlotsDtat.RepeatSlotsFilled; i++) {
                    document.getElementById("flat_connector_L".concat(String(i))).style.visibility = "visible"
                }
                for (i = 5; i >= SlotsDtat.RepeatSlotsFilled; i--) {
                    document.getElementById("flat_connector_L".concat(String(i))).style.visibility = "hidden"
                }
            }
            if (SlotsDtat.OneTimeSlotsFilled != 0) {
                for (i = 1; i < SlotsDtat.OneTimeSlotsFilled; i++) {
                    document.getElementById("flat_connector_R".concat(String(i))).style.visibility = "visible"
                }
                for (i = 5; i >= SlotsDtat.OneTimeSlotsFilled; i--) {
                    document.getElementById("flat_connector_R".concat(String(i))).style.visibility = "hidden"
                }
            }
            break;
        case "Workers":
            //document.getElementById("worker_cost").innerHTML = formatNumber(workerTotalCost(WorkerStatusData.buyNumber)) + "W"
            document.getElementById("free_workers").innerHTML = "FREE: " + WorkerStatusData.freeWorkers
            document.getElementById("active_workers").innerHTML = "ACTIVE: " + (WorkerStatusData.workers - WorkerStatusData.freeWorkers)
            document.getElementById("energy_worker_number").innerHTML = JobData.energyWorker
            // document.getElementById("wood_worker_number").innerHTML = JobData.woodWorker
            // document.getElementById("oil_worker_number").innerHTML = JobData.oilWorker
            break;
        case "Buildings":
            document.getElementById("getPump").innerHTML = "Buy pump (Currently Ownd " + BuildingData.pumps + ") Cost: " + formatNumber(BuildingCostData.pumpCost) + " Steel"
            document.getElementById("getDril").innerHTML = "Buy dril (Currently Ownd " + BuildingData.drils + ") Cost: " + formatNumber(BuildingCostData.drilCost) + " Iron"
            document.getElementById("getMine").innerHTML = "Buy mine (Currently Ownd " + BuildingData.mines + ") Cost: " + formatNumber(BuildingCostData.mineCost) + " Wood"
            document.getElementById("getDigger").innerHTML = "Buy digger (Currently Ownd " + BuildingData.diggers + ") Cost: " + formatNumber(BuildingCostData.diggerCost) + " Wood"
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
        default:
            break;
    }
}

function energyStatsButtons(button) {
    for (i = 0; i < 7; i++) {
        DisplayData.energyStatsButton[i] = 0
    }
    document.getElementById("energy_stats_button_1").src = "Assets/stats_button_no_hover_rpm.png"
    document.getElementById("energy_stats_button_2").src = "Assets/stats_button_no_hover_persec.png"
    document.getElementById("energy_stats_button_3").src = "Assets/stats_button_no_hover_permin.png"
    document.getElementById("energy_stats_button_4").src = "Assets/stats_button_no_hover_perhour.png"
    document.getElementById("energy_stats_button_5").src = "Assets/stats_button_no_hover_perday.png"
    document.getElementById("energy_stats_button_6").src = "Assets/stats_button_no_hover_perweek.png"
    document.getElementById("energy_stats_button_7").src = "Assets/stats_button_no_hover_peryear.png"
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
