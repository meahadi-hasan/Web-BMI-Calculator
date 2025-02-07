function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let unit = document.getElementById("unit").value;
    
    if (unit === "cm") {
        height = height / 100;
    }
    if (height > 0 && weight > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        document.getElementById("result").value = `BMI: ${bmi}`;
    } else {
        alert("Please enter valid height and weight");
    }
}


function clearFields() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").value = "";
}
