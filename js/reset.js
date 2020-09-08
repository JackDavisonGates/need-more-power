function saveGame() {
    try {
        localStorage.setItem("PowerData", JSON.stringify(PowerData));
        localStorage.setItem("PowerStorageData", JSON.stringify(PowerStorageData));
        localStorage.setItem("TurbineData", JSON.stringify(TurbineData));
        localStorage.setItem("RepeatSlots", JSON.stringify(RepeatSlots));
        localStorage.setItem("OneTimeSlots", JSON.stringify(OneTimeSlots));
        localStorage.setItem("OneTimeUpgradesCompleat", JSON.stringify(OneTimeUpgradesCompleat));
        localStorage.setItem("OneTimeUpgradesNotCompleat", JSON.stringify(OneTimeUpgradesNotCompleat));
        localStorage.setItem("SlotsDtat", JSON.stringify(SlotsDtat));
        localStorage.setItem("WorkerStatusData", JSON.stringify(WorkerStatusData));
        localStorage.setItem("JobData", JSON.stringify(JobData));
        localStorage.setItem("JobEfficiencyData", JSON.stringify(JobEfficiencyData));
        localStorage.setItem("JobTimeData", JSON.stringify(JobTimeData));
        localStorage.setItem("JobProductionData", JSON.stringify(JobProductionData));
        localStorage.setItem("JobProgressBarData", JSON.stringify(JobProgressBarData));
        localStorage.setItem("DisplayData", JSON.stringify(DisplayData));
        localStorage.setItem("TabData", JSON.stringify(TabData));
        localStorage.setItem("NixieDictionary", JSON.stringify(NixieDictionary));
        localStorage.setItem("MiscellaneousData", JSON.stringify(MiscellaneousData));
    } catch (err) {
        console.log("Cannot access localStorage - browser may be old or storage may be corrupt")
    }
    console.log("All data was saved successfully");

}

function loadGame() {
    if (JSON.parse(localStorage.getItem("PowerData")) != null) {
        PowerData = JSON.parse(localStorage.getItem("PowerData"));
    }
    if (JSON.parse(localStorage.getItem("PowerStorageData")) != null) {
        PowerStorageData = JSON.parse(localStorage.getItem("PowerStorageData"));
    }
    if (JSON.parse(localStorage.getItem("TurbineData")) != null) {
        TurbineData = JSON.parse(localStorage.getItem("TurbineData"));
    }
    if (JSON.parse(localStorage.getItem("RepeatSlots")) != null) {
        RepeatSlots = JSON.parse(localStorage.getItem("RepeatSlots"));
    }
    if (JSON.parse(localStorage.getItem("OneTimeSlots")) != null) {
        OneTimeSlots = JSON.parse(localStorage.getItem("OneTimeSlots"));
    }
    if (JSON.parse(localStorage.getItem("OneTimeUpgradesCompleat")) != null) {
        OneTimeUpgradesCompleat = JSON.parse(localStorage.getItem("OneTimeUpgradesCompleat"));
    }
    if (JSON.parse(localStorage.getItem("OneTimeUpgradesNotCompleat")) != null) {
        OneTimeUpgradesNotCompleat = JSON.parse(localStorage.getItem("OneTimeUpgradesNotCompleat"));
    }
    if (JSON.parse(localStorage.getItem("SlotsDtat")) != null) {
        SlotsDtat = JSON.parse(localStorage.getItem("SlotsDtat"));
    }
    if (JSON.parse(localStorage.getItem("WorkerStatusData")) != null) {
        WorkerStatusData = JSON.parse(localStorage.getItem("WorkerStatusData"));
    }
    if (JSON.parse(localStorage.getItem("JobData")) != null) {
        JobData = JSON.parse(localStorage.getItem("JobData"));
    }
    if (JSON.parse(localStorage.getItem("JobEfficiencyData")) != null) {
        JobEfficiencyData = JSON.parse(localStorage.getItem("JobEfficiencyData"));
    }
    if (JSON.parse(localStorage.getItem("JobTimeData")) != null) {
        JobTimeData = JSON.parse(localStorage.getItem("JobTimeData"));
    }
    if (JSON.parse(localStorage.getItem("JobProductionData")) != null) {
        JobProductionData = JSON.parse(localStorage.getItem("JobProductionData"));
    }
    if (JSON.parse(localStorage.getItem("JobProgressBarData")) != null) {
        JobProgressBarData = JSON.parse(localStorage.getItem("JobProgressBarData"));
    }
    if (JSON.parse(localStorage.getItem("DisplayData")) != null) {
        DisplayData = JSON.parse(localStorage.getItem("DisplayData"));
    }
    if (JSON.parse(localStorage.getItem("TabData")) != null) {
        TabData = JSON.parse(localStorage.getItem("TabData"));
    }
    if (JSON.parse(localStorage.getItem("NixieDictionary")) != null) {
        NixieDictionary = JSON.parse(localStorage.getItem("NixieDictionary"));
    }
    if (JSON.parse(localStorage.getItem("MiscellaneousData")) != null) {
        MiscellaneousData = JSON.parse(localStorage.getItem("MiscellaneousData"));
    }

    if (TabData.energyTabAccess == 1) {
        document.getElementById("tab_button_1").src = "Assets/Button_Tabs_Center_generator.png"
    }
    if (TabData.upgradesTabAccess == 1) {
        document.getElementById("tab_button_2").src = "Assets/Button_Tabs_Center_upgrades.png"
    }
    if (TabData.workersTabAccess == 1) {
        document.getElementById("tab_button_3").src = "Assets/Button_Tabs_Center_workers.png"
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
