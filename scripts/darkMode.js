function toggle() {
    let themeButton = document.getElementById("unchecked");
    let svg5 = document.getElementsByClassName('st5');
    let svg3 = document.getElementsByClassName('st3');
    let svg4 = document.getElementsByClassName('st4');
    if (themeButton.value === "Enable Light Mode"){
        themeButton.value = "Enable Dark Mode";
        document.body.style.backgroundColor = "#f5f5f5";
        document.getElementById("header").style.backgroundColor = "#f5f5f5";
        document.getElementById("spn").style.color = "rgba(33,33,33,0.8)";
        for (let i = 0; i < svg5.length; i++) {
            svg5[i].style.fill = "rgba(0, 0, 0, 0.1)";
        }
        for (let i = 0; i < svg3.length; i++) {
            svg3[i].style.fill = "#f5f5f5";
        }
        for (let i = 0; i < svg4.length; i++) {
            svg4[i].style.fill = "#757575";
        }
    }
    else {
        themeButton.value = "Enable Light Mode";
        document.body.style.backgroundColor = "#202124";
        document.getElementById("header").style.backgroundColor = "#202124";
        document.getElementById("spn").style.color = "whitesmoke";
        for (let i = 0; i < svg5.length; i++) {
            svg5[i].style.fill = "rgba(255, 255, 255, 0.1)";
        }
        for (let i = 0; i < svg3.length; i++) {
            svg3[i].style.fill = "#212121";
        }
        for (let i = 0; i < svg4.length; i++) {
            svg4[i].style.fill = "#dfe0e4";
        }
    }
}
