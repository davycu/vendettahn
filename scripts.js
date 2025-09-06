    //Contador de visitas
    let visitas = localStorage.getItem("visitasVendetta") || 0;
    visitas++;
    localStorage.setItem("visitasVendetta", visitas);
    document.getElementById("contador").innerText = visitas;