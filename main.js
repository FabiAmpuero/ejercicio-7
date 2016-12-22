function calcular(){
    var monoA = document.getElementById("mono_a").value;
    var monoB = parseInt(document.getElementById("mono_b").value);
    
    var SmileMonoA = true;
    var SmileMonoB = false;
    
    var salida = document.getElementById("salida");
    
    if (monoA == "2") {
        SmileMonoA = false;
    }
    if (monoB == "1") {
        SmileMonoB = true;
    }
    if (SmileMonoA=true && SmileMonoB=true) {
        salida.innerHTML = "Si";
        }
    else {
        salida.innerHTML = "No";
    }
}