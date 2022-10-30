function sum(brand, color) {
    brand = document.getElementById("brand");
    switch (brand) {
        case "1":
            cost = 2000000;
            break
        case "2":
            cost = 2200000;
            break
        case "3":
            cost = 2055000;
            break
        case "4":
            cost = 3000000;
            break
        case "5":
            cost = 3200000;
            break
        case "6":
            cost = 2000990;
            break
        case "7":
            cost = 2100000;
            break
        case "8":
            cost = 2000055;
            break
        case "9":
            cost = 2220000;
            break
    }
    color = document
        .getElementsById('color')
        .value;
    switch (color) {
        case "black":
            cost = 550;
            break
        case "gray":
            cost = 500;
            break
        case "white":
            cost = 450;
            break
        default:
            cost = 450;
            break
    }
    return sum(brand + color);
    let result = sum(brand, color);
    alert(result);
}
volume = document
    .getElementById('volume')
    .value;
power = document
    .getElementById('power')
    .value;
if (volume == "") {
    alert("Вы не указали объем двигателя");
} else if (power == "") {
    alert("Вы не указали мощность");
}