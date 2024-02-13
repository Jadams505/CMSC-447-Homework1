const F = document.getElementById("F");
const K = document.getElementById("K");
const C = document.getElementById("C");
const KELVIN_OFFSET = 273.15;

function UpdateFaren()
{
    if(F.value == "")
    {
        C.value = "";
        K.value = "";
        return; 
    }
    K.value = FarenToKelvin(F.value).toFixed(2);
    C.value = KelvinToCelcius(K.value).toFixed(2);
}

function UpdateCelcius()
{
    if(C.value == "")
    {
        K.value = "";
        F.value = "";
        return;
    }
    K.value = CelciusToKelvin(C.value);
    F.value = CelciusToFaren(C.value).toFixed(2);
}

function UpdateKevin()
{
    if(K.value == "")
    {
        C.value = "";
        F.value = "";
        return;
    }
    C.value = KelvinToCelcius(K.value).toFixed(2);
    F.value = CelciusToFaren(C.value).toFixed(2);
}

function CelciusToKelvin(celcius)
{
    let result = celcius - -KELVIN_OFFSET;
    return result;
}

function KelvinToCelcius(kelvin)
{
    let result = kelvin - KELVIN_OFFSET;
    return result;
}

function FarenToKelvin(faren)
{
    let result = (faren - 32) * 5/9 + KELVIN_OFFSET;
    return result;
}

function CelciusToFaren(celcius)
{
    let result = celcius * 9/5 + 32;
    return result;
}

F.addEventListener("input", () => 
{
    UpdateFaren();
});

K.addEventListener("input", () => 
{
    UpdateKevin();
});

C.addEventListener("input", () => 
{
    UpdateCelcius();
});