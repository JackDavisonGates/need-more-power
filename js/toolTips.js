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
        case "RPM":
            document.getElementById("tool_tip").innerHTML =
                "This will set the top display to show you current RPM."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "persec"
            break;
        case "persec":
            document.getElementById("tool_tip").innerHTML =
                "This will set the top display to show you current per second power production."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "persec"
            break;
        case "permin":
            document.getElementById("tool_tip").innerHTML =
                "This will set the top display to show you current per minute power production."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "permin"
            break;
        case "perhour":
            document.getElementById("tool_tip").innerHTML =
                "This will set the top display to show you current per hour power production."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "perhour"
            break;
        case "perday":
            document.getElementById("tool_tip").innerHTML =
                "This will set the top display to show you current per day power production."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "perday"
            break;
        case "perweek":
            document.getElementById("tool_tip").innerHTML =
                "This will set the top display to show you current per week power production."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "perweek"
            break;
        case "peryear":
            document.getElementById("tool_tip").innerHTML =
                "This will set the top display to show you current per year power production."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "peryear"
            break;
        case "buy_workers":
            if (WorkerStatusData.buyNumber == 1) {
                document.getElementById("tool_tip").innerHTML =
                    "cost: " + formatNumber(workerTotalCost(WorkerStatusData.buyNumber)) + "W for " + WorkerStatusData.buyNumber + " worker each worker can be set to do one job at a time"
            } else {
                document.getElementById("tool_tip").innerHTML =
                    "cost: " + formatNumber(workerTotalCost(WorkerStatusData.buyNumber)) + "W for " + WorkerStatusData.buyNumber + " workers each worker can be set to do one job at a time"
            }
            document.getElementById("flavour_text").innerHTML =
                "Don't think of them as slaves, think of them as unpaid interns."
            MouseLocation = "buy_workers"
            break;
        case "stop_workers":
            document.getElementById("tool_tip").innerHTML =
                "This stops all active workers and any job progress will remain when all workers are removed."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "stop_workers"
            break;
        case "energy_workers":
            document.getElementById("tool_tip").innerHTML =
                "Each time the workers compleat a job the generator will spin, any job progress will remain if all workers are removed."
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "energy_workers"
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
            case "hard_reset":
            document.getElementById("tool_tip").innerHTML =
                "This clear all of your game data and you will have to start again for scratch."
            document.getElementById("flavour_text").innerHTML =
                "There is no coming back."
            MouseLocation = "hard_reset"
                break;
        default:

    }
}
