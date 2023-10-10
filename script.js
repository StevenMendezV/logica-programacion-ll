function convertirTemp(){
    console.log("holalaa")
    const tempCelsius = document.getElementById("celsius");
    const tempFahrenheitDom =document.getElementById("fahrenheit");
    const tempKelvinDom = document.getElementById("kelvin");
    
    const tempCelsiusValueString = tempCelsius.value;
    const regexTem = /[\d]{1,}/;

    let validacionTemp = regexTem.test(tempCelsiusValueString);

    if(validacionTemp){
        const tempCelsiusInt = parseInt(tempCelsiusValueString);

        const tempCelsiudToFahrenheit = ((9*tempCelsiusInt)/5) + 32;
        const tempCelsiusToKelvin = tempCelsiusInt + 273.15;

        tempFahrenheitDom.textContent = tempCelsiudToFahrenheit;
        tempKelvinDom.textContent = tempCelsiusToKelvin;
    }
}