function toolTips(id) {
    switch (id) {
        case "noTip":
            document.getElementById("tool_tip").innerHTML = ""
            break;
        case "generator":
            document.getElementById("tool_tip").innerHTML =
                "this is a test of the tool tip \n
                by clicking the generator it will speed up"
            break;
        default:

    }
}
