document.addEventListener('DOMContentLoaded', function() {
    const criarCalculadora = () => {
        document.body.style.backgroundColor = '#282c34';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.margin = '0';
        document.body.style.fontFamily = 'Arial, sans-serif';

        const container = document.createElement('div');
        container.style.backgroundColor = '#61dafb';
        container.style.padding = '60px';
        container.style.borderRadius = '10px';
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        container.style.width = '500px';  
        container.style.textAlign = 'center';

        const titulo = document.createElement('h1');
        titulo.textContent = 'Calculadora de Média';
        titulo.style.marginBottom = '30px';
        titulo.style.color = '#282c34';
        container.appendChild(titulo);

        const inputNome = document.createElement('input');
        inputNome.type = 'text';
        inputNome.placeholder = 'Nome do aluno';
        inputNome.style.width = '100%';
        inputNome.style.padding = '15px';
        inputNome.style.marginBottom = '20px';
        inputNome.style.border = '2px solid #282c34';
        inputNome.style.borderRadius = '5px';
        inputNome.style.fontSize = '16px';
        container.appendChild(inputNome);

        for (let i = 0; i < 3; i++) {
            const inputNota = document.createElement('input');
            inputNota.type = 'text';
            inputNota.placeholder = `Nota ${i + 1}`;
            inputNota.id = `nota${i + 1}`;
            inputNota.style.width = '100%';
            inputNota.style.padding = '15px';
            inputNota.style.marginBottom = '20px';
            inputNota.style.border = '2px solid #282c34';
            inputNota.style.borderRadius = '5px';
            inputNota.style.fontSize = '16px';
            container.appendChild(inputNota);
        }

        const botaoCalcular = document.createElement('button');
        botaoCalcular.textContent = 'Calcular Média';
        botaoCalcular.style.width = '100%';
        botaoCalcular.style.padding = '15px';
        botaoCalcular.style.backgroundColor = '#282c34';
        botaoCalcular.style.color = '#61dafb';
        botaoCalcular.style.border = 'none';
        botaoCalcular.style.borderRadius = '5px';
        botaoCalcular.style.fontSize = '16px';
        botaoCalcular.style.cursor = 'pointer';
        botaoCalcular.style.marginTop = '10px';
        botaoCalcular.onclick = () => calcularMedia(inputNome.value);
        container.appendChild(botaoCalcular);

        const resultado = document.createElement('p');
        resultado.id = 'resultado';
        resultado.style.marginTop = '20px';
        resultado.style.fontSize = '18px';
        resultado.style.color = '#282c34';
        container.appendChild(resultado);

        document.body.appendChild(container);
    };

    const calcularMedia = (nomeAluno) => {
        let somaNotas = 0;
        let qtdNotas = 0;

        for (let i = 1; i <= 3; i++) {
            const nota = parseFloat(document.getElementById(`nota${i}`).value);
            if (!isNaN(nota)) {
                somaNotas += nota;
                qtdNotas++;
            }
        }

        if (qtdNotas === 0) {
            document.getElementById('resultado').innerText = 'Insira pelo menos uma nota válida.';
            return;
        }

        const media = somaNotas / qtdNotas;
        let resultado = '';

        if (media < 5) {
            resultado = 'Reprovado';
        } else if (media >= 5 && media < 7) {
            resultado = 'Recuperação';
        } else {
            resultado = 'Aprovado';
        }

        document.getElementById('resultado').innerText = `Aluno: ${nomeAluno}\nMédia: ${media.toFixed(2)} - Situação: ${resultado}`;
    };

    criarCalculadora();
});
