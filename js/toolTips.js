function tollTips(id) {
    switch (id) {
        case "noTip":
            document.getElementById("Background_MM").innerHTML = ""
            break;
        case "generator":
            document.getElementById("Background_MM").innerHTML =
                "this is a test of the tool tip \n
                by clicking the generator it will speed up"
            break;
        default:

    }
}
