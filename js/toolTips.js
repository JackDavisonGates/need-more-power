var MouseLocation = ""

function toolTips(id) {
    switch (id) {
        case "noTip":
            document.getElementById("tool_tip").innerHTML = ""
            document.getElementById("flavour_text").innerHTML = ""
            MouseLocation = ""
            break;
        case "power_bar":
            document.getElementById("tool_tip").innerHTML =
                "the red is your capasitors and the yellow is your batteries"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "power_bar"
            break;
        case "generator":
            document.getElementById("tool_tip").innerHTML =
                "by clicking the generator it will speed up."
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
        case "Capasitor":
            document.getElementById("tool_tip").innerHTML =
                "buys a capasitor cost: " + formatNumber(PowerStorageData.capasitorCost) + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Capasitor"
            break;
        case "Battery":
            document.getElementById("tool_tip").innerHTML =
                "buys a battery witch has a storage efficency of " + PowerStorageData.batteriesEfficency + " cost: " + formatNumber(PowerStorageData.batteryCost) + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Battery"
            break;
        case "Power Per Tick":
            document.getElementById("tool_tip").innerHTML =
                "upgrads the amount of RPM added per click cost: " + formatNumber(PowerData.powerPerTickCost) + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Power Per Tick"
            break;
        case "Worker Speed":
            document.getElementById("tool_tip").innerHTML =
                "upgrads the speed of your workers cost: " + formatNumber(WorkerStatusData.workerSpeedCost) + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Worker Speed"
            break;
        case "Buy Workers Tab":
            document.getElementById("tool_tip").innerHTML =
                "gives you access to the workers cost: " + WorkerStatusData.workerTabCost + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Buy Workers Tab"
            break;
        case "Worker Discount Level 1":
            document.getElementById("tool_tip").innerHTML =
                "Reduses the cost of the workers cost: " + WorkerStatusData.workerDiscountCost[0] + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Worker Discount Level 1"
            break;
        case "Worker Discount Level 2":
            document.getElementById("tool_tip").innerHTML =
                "Reduses the cost of the workers cost: " + WorkerStatusData.workerDiscountCost[1] + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Worker Discount Level 2"
            break;
        case "Worker Discount Level 3":
            document.getElementById("tool_tip").innerHTML =
                "Reduses the cost of the workers cost: " + WorkerStatusData.workerDiscountCost[2] + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Worker Discount Level 3"
            break;
        case "Worker Discount Level 4":
            document.getElementById("tool_tip").innerHTML =
                "Reduses the cost of the workers cost: " + WorkerStatusData.workerDiscountCost[3] + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Worker Discount Level 4"
            break;
        case "Power Per Time":
            document.getElementById("tool_tip").innerHTML =
                "Adds a display of the power per time cost: " + PowerData.perTimeCost + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Power Per Time"
            break;
        case "Storage Bar":
            document.getElementById("tool_tip").innerHTML =
                "Adds a display of the battery and capasitor power cost: " + PowerData.barCost + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Storage Bar"
            break;
        case "Item List":
            document.getElementById("tool_tip").innerHTML =
                "Adds a display of the items that efect the generator cost: " + PowerData.powerItemsCost + "W"
            document.getElementById("flavour_text").innerHTML =
                ""
            MouseLocation = "Item List"
            break;
        case "buy_workers":
            if (WorkerStatusData.buyNumber == 1 || WorkerStatusData.buyNumber == -1) {
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
        case "buy_workers_number":
            if (WorkerStatusData.buyNumber == 1 || WorkerStatusData.buyNumber == -1) {
                document.getElementById("tool_tip").innerHTML =
                    "this is how much workers you can buy at ones"
            } else {
                document.getElementById("tool_tip").innerHTML =
                    "you can get more than one worker at a time"
            }
            document.getElementById("flavour_text").innerHTML =
                "Don't think of them as slaves, think of them as unpaid interns."
            MouseLocation = "buy_workers_number"
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
        case "save_game":
            document.getElementById("tool_tip").innerHTML =
                "This will save all game progres."
            document.getElementById("flavour_text").innerHTML =
                "we can always pick up later."
            MouseLocation = "save_game"
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