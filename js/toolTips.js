function toolTips(id) {
    switch (id) {
        case "noTip":
            document.getElementById("tool_tip").innerHTML = ""
            document.getElementById("flavour_text").innerHTML = ""
            break;
        case "generator":
            document.getElementById("tool_tip").innerHTML =
                "This is a test of the tool tip by clicking the generator it will speed up."
            document.getElementById("flavour_text").innerHTML =
                "Electricity is one of man's greatest inventions it is up there with fire, computers and twerking."
            break;
        default:

    }
}
