const IMC_CLASSIFICATION = {
    THINNESS: "Magreza",
    NORMAL: "Normal",
    OVERWEIGHT: "Sobrepeso",
    OBESITY: "Obesidade"
};

export const calculateImc = (weight, height) => weight / (height * height);

export const classifyIMC = (imc) => {
    if (imc < 18.5) {
        return IMC_CLASSIFICATION.THINNESS
    } else if (imc >= 18.5 && imc < 24.9) {
        return IMC_CLASSIFICATION.NORMAL
    } else if (imc >= 24.9 && imc < 30) {
        return IMC_CLASSIFICATION.OVERWEIGHT
    } else {
        return IMC_CLASSIFICATION.OBESITY
    }
}