var MouseLocation = ""

function toolTips(id) {
    switch (id) {
        case "noTip":
            document.getElementById("tool_tip").innerHTML = ""
            document.getElementById("flavour_text").innerHTML = ""
            MouseLocation = ""
            break;
        case "generator":
            document.getElementById("tool_tip").innerHTML =
                "This is a test of the tool tip by clicking the generator it will speed up."
            document.getElementById("flavour_text").innerHTML =
                "Electricity is one of man's greatest inventions it is up there with fire, computers and twerking."
            MouseLocation = "generator"
            break;
        case "buy_workers":
            document.getElementById("tool_tip").innerHTML =
                "cost: " + formatNumber(workerTotalCost(WorkerStatusData.buyNumber)) + "W \neach worker can be set to do one job at a time"
            document.getElementById("flavour_text").innerHTML =
                "Don't think of them as slaves, think of them as unpaid interns."
            MouseLocation = "buy_workers"
            break;
        case "energy_workers_bar":
            if (JobProgressBarData.energyBarWidth < 0) {
                document.getElementById("tool_tip").innerHTML =
                    "This is the curent progres of the workers: 0%."
            } else {
                document.getElementById("tool_tip").innerHTML =
                    "This is the curent progres of the workers: " + formatNumber(JobProgressBarData.energyBarWidth, 0) + "%."
            }
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "energy_workers_bar"
            break;
        case "energy_workers_bar_green":
            document.getElementById("tool_tip").innerHTML =
                "This is the curent progres of the workers when the bar is green it is because the workers finish each job in less that o.5 seconds."
            document.getElementById("flavour_text").innerHTML =
                "There getting faster."
            MouseLocation = "energy_workers_bar"
            break;
        default:

    }
}
