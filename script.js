const textArea = document.querySelector(".programa");
const message = document.querySelector(".mensaje");
const picture = document.querySelector(".text-area-dos");





function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    message.value = textoEncriptado
    textArea.value = "";
    message.style.backgroundImage = "none"
    picture.style.backgroundImage = "none"





}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }

    return stringEncriptada

}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    message.value = textoEncriptado
    textArea.value = "";

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }

    return stringDesencriptada

}

function btnCopy() {


    if (message.value != "") {
        textArea.value = message.value;
        navigator.clipboard.writeText(message.value);
        estadoNormal();
        textArea.select();
    }
    textArea.focus();

}