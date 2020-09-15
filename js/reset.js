function saveGame() {
    try {
        MiscellaneousData.gameSavedTime = Date.now()
        localStorage.setItem("NMPGamePowerData", JSON.stringify(PowerData));
        localStorage.setItem("NMPGamePowerStorageData", JSON.stringify(PowerStorageData));
        localStorage.setItem("NMPGameTurbineData", JSON.stringify(TurbineData));
        localStorage.setItem("NMPGameRepeatSlots", JSON.stringify(RepeatSlots));
        localStorage.setItem("NMPGameOneTimeSlots", JSON.stringify(OneTimeSlots));
        localStorage.setItem("NMPGameOneTimeUpgradesCompleat", JSON.stringify(OneTimeUpgradesCompleat));
        localStorage.setItem("NMPGameOneTimeUpgradesNotCompleat", JSON.stringify(OneTimeUpgradesNotCompleat));
        localStorage.setItem("NMPGameSlotsDtat", JSON.stringify(SlotsDtat));
        localStorage.setItem("NMPGameWorkerStatusData", JSON.stringify(WorkerStatusData));
        localStorage.setItem("NMPGameJobData", JSON.stringify(JobData));
        localStorage.setItem("NMPGameJobEfficiencyData", JSON.stringify(JobEfficiencyData));
        localStorage.setItem("NMPGameJobTimeData", JSON.stringify(JobTimeData));
        localStorage.setItem("NMPGameJobProductionData", JSON.stringify(JobProductionData));
        localStorage.setItem("NMPGameJobProgressBarData", JSON.stringify(JobProgressBarData));
        localStorage.setItem("NMPGameDisplayData", JSON.stringify(DisplayData));
        localStorage.setItem("NMPGameTabData", JSON.stringify(TabData));
        localStorage.setItem("NMPGameNixieDictionary", JSON.stringify(NixieDictionary));
        localStorage.setItem("NMPGameMiscellaneousData", JSON.stringify(MiscellaneousData));
    } catch (err) {
        console.log("Cannot access localStorage - browser may be old or storage may be corrupt")
        MiscellaneousData.gameSavedTime = 0
    }
    logList("Game Saved.");
}

function loadGame() {
    var loadNumber = 0
    if (JSON.parse(localStorage.getItem("NMPGamePowerData")) != null) {
        PowerData = JSON.parse(localStorage.getItem("NMPGamePowerData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGamePowerStorageData")) != null) {
        PowerStorageData = JSON.parse(localStorage.getItem("NMPGamePowerStorageData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameTurbineData")) != null) {
        TurbineData = JSON.parse(localStorage.getItem("NMPGameTurbineData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameRepeatSlots")) != null) {
        RepeatSlots = JSON.parse(localStorage.getItem("NMPGameRepeatSlots"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameOneTimeSlots")) != null) {
        OneTimeSlots = JSON.parse(localStorage.getItem("NMPGameOneTimeSlots"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameOneTimeUpgradesCompleat")) != null) {
        OneTimeUpgradesCompleat = JSON.parse(localStorage.getItem("NMPGameOneTimeUpgradesCompleat"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameOneTimeUpgradesNotCompleat")) != null) {
        OneTimeUpgradesNotCompleat = JSON.parse(localStorage.getItem("NMPGameOneTimeUpgradesNotCompleat"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameSlotsDtat")) != null) {
        SlotsDtat = JSON.parse(localStorage.getItem("NMPGameSlotsDtat"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameWorkerStatusData")) != null) {
        WorkerStatusData = JSON.parse(localStorage.getItem("NMPGameWorkerStatusData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameJobData")) != null) {
        JobData = JSON.parse(localStorage.getItem("NMPGameJobData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameJobEfficiencyData")) != null) {
        JobEfficiencyData = JSON.parse(localStorage.getItem("NMPGameJobEfficiencyData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameJobTimeData")) != null) {
        JobTimeData = JSON.parse(localStorage.getItem("NMPGameJobTimeData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameJobProductionData")) != null) {
        JobProductionData = JSON.parse(localStorage.getItem("NMPGameJobProductionData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameJobProgressBarData")) != null) {
        JobProgressBarData = JSON.parse(localStorage.getItem("NMPGameJobProgressBarData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameDisplayData")) != null) {
        DisplayData = JSON.parse(localStorage.getItem("NMPGameDisplayData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameTabData")) != null) {
        TabData = JSON.parse(localStorage.getItem("NMPGameTabData"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameNixieDictionary")) != null) {
        NixieDictionary = JSON.parse(localStorage.getItem("NMPGameNixieDictionary"));
        loadNumber += 1
    }
    if (JSON.parse(localStorage.getItem("NMPGameMiscellaneousData")) != null) {
        MiscellaneousData = JSON.parse(localStorage.getItem("NMPGameMiscellaneousData"));
        loadNumber += 1
    }

    if (loadNumber > 15) {
        MiscellaneousData.logList = ["","","","","","","","","","","","","",""]
        logList("Game Loaded")
    }

    offLineTime(Date.now() - MiscellaneousData.gameSavedTime)

    if (TabData.energyTabAccess == 1) {
        document.getElementById("tab_button_1").src = "Assets/Button_Tabs_Center_generator.png"
    }
    if (TabData.upgradesTabAccess == 1) {
        document.getElementById("tab_button_2").src = "Assets/Button_Tabs_Center_upgrades.png"
    }
    if (TabData.workersTabAccess == 1) {
        document.getElementById("tab_button_3").src = "Assets/Button_Tabs_Center_workers.png"
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
        if (WorkerStatusData.workers > 0) {
            document.getElementById("energy_worker_stats_button").src = "Assets/worker_stats_button_unpressed.png"
        }
    }
    if (TabData.materialsTabAccess == 1) {
        document.getElementById("tab_button_4").src = "Assets/Button_Tabs_Center_materials.png"
    }
    if (TabData.spaceTabAccess == 1) {
        document.getElementById("tab_button_5").src = "Assets/Button_Tabs_Center_space.png"
    }
    if (TabData.buildingsTabAccess == 1) {
        document.getElementById("tab_button_6").src = "Assets/Button_Tabs_Center_buildings.png"
    }
    if (TabData.reaserchTabAccess == 1) {
        document.getElementById("tab_button_7").src = "Assets/Button_Tabs_Center_reaserch.png"
    }
    if (TabData.resetTabAccess == 1) {
        document.getElementById("tab_button_8").src = "Assets/Button_Tabs_Center_reset.png"
    }
    document.getElementById("tab_button_9").src = "Assets/Button_Tabs_Center_settings.png"

    for (var i = 0; i < SlotsDtat.OneTimeSlotsCompleat; i++) {
        switch (OneTimeUpgradesCompleat[i]) {
            case "Power Per Time":
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
                document.getElementById("energy_stats_button_1").src = "Assets/stats_button_no_hover_rpm.png"
                if (DisplayData.energyStatsButton[0] == 1) {
                    document.getElementById("energy_stats_button_1").src = "Assets/stats_button_pressed_rpm.png"
                }
                if (DisplayData.energyStatsButton[1] == 1) {
                    document.getElementById("energy_stats_button_2").src = "Assets/stats_button_pressed_persec.png"
                }
                if (DisplayData.energyStatsButton[2] == 1) {
                    document.getElementById("energy_stats_button_3").src = "Assets/stats_button_pressed_permin.png"
                }
                if (DisplayData.energyStatsButton[3] == 1) {
                    document.getElementById("energy_stats_button_4").src = "Assets/stats_button_pressed_perhour.png"
                }
                if (DisplayData.energyStatsButton[4] == 1) {
                    document.getElementById("energy_stats_button_5").src = "Assets/stats_button_pressed_perday.png"
                }
                if (DisplayData.energyStatsButton[5] == 1) {
                    document.getElementById("energy_stats_button_6").src = "Assets/stats_button_pressed_perweek.png"
                }
                if (DisplayData.energyStatsButton[6] == 1) {
                    document.getElementById("energy_stats_button_7").src = "Assets/stats_button_pressed_peryear.png"
                }
                break;
            case "Storage Bar":
                document.getElementById("power_bar_back").style.visibility = "visible"
                document.getElementById("power_bar_fill_red").style.visibility = "visible"
                document.getElementById("power_bar_fill_yellow").style.visibility = "visible"
                document.getElementById("cover_block").style.visibility = "visible"
                document.getElementById("power_bar_fram").style.visibility = "visible"
                break;
            default:

        }
    }

    updateText("Power")
    updateText("Upgrades")
    updateText("Workers")
    //updateText("Buildings")
    //updateText("Materials")
    //updateText("Space")
}

function hardReset() {
    var r = confirm("Doing this will clear all of your game progress are you sure?")
    if (r == true) {
        localStorage.clear()
        location.reload()
    }
}
