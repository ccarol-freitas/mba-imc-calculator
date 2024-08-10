import readline from 'readline';
import { calculateImc, classifyIMC } from "./main.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o seu peso em kg: ', (weight) => {
    rl.question('Digite a sua altura em metros: ', (height) => {
        const imc = calculateImc(parseFloat(weight), parseFloat(height));
        const classification = classifyIMC(imc);

        console.log(`Seu IMC é: ${imc.toFixed(2)} kg/m² (${classification})`);

        rl.close();
    });
});