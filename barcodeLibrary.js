Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#interactive')    // OR '#yourElement' (optional)
    },
    decoder: {
        readers: ["code_128_reader"] // В зависимост от типа на баркода
    }
}, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
});

// Слушане на събития за сканирани баркодове
Quagga.onDetected(function (data) {
    console.log(data.codeResult.code);
    executeFunctionBasedOnBarcode(data.codeResult.code);
});

// Примерна функция, която се изпълнява на базата на сканирания баркод
function executeFunctionBasedOnBarcode(barcode) {
    if (barcode === "Colorevivo Bianco") {
        alert("OK!");
    } else {
        console.log("Barcode not recognized.");
    }
}