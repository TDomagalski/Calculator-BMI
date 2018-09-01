var weight = prompt("Podaj swoja wagę","");
var height = prompt("Podaj swój wzrost w cm","");
var bmi;
var heightM;

weight = parseFloat(weight, 10);
weight = parseInt(weight, 10);
height = parseFloat(height, 10);
height = parseInt(height, 10);

function change() {
    heightM = height * 0.01;
}
change();

function bmiCheck() {
    bmi = weight/(heightM*heightM)
}
bmiCheck();
bmi = bmi.toFixed(2);

if (bmi < 15) {
    document.write("Jesteś WYCHUDZONY!")
} else if (bmi > 15 && bmi < 18.5 ) {
    document.write("Masz NIEDOWAGE!")
} else if (bmi > 18.6 && bmi < 24.9) {
    document.write("Jesteś w NORMIE, BRAWO!")
} else if (bmi > 25 && bmi < 29.9) {
    document.write("Masz NADWAGE!")
} else {
    document.write("Jesteś OTYŁY, IDZ NA SIŁOWNIE !!!!!!")
}

document.write("<br>" + "Twoje BMI wynosi: " + bmi);