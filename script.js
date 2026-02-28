function calcular() {
   
    const inputSalario = document.getElementById("salario");
    const inputQuantidade = document.getElementById("quantidade"); 
    const displayResultado = document.getElementById("resultado");

    
    let salario = parseFloat(inputSalario.value);
    let qtdHoras = parseFloat(inputQuantidade.value); 
   
    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, digite um valor válido para o salário!");
        return;
    }

    if (isNaN(qtdHoras) || qtdHoras <= 0) {
        qtdHoras = 1; 
    }

    
    let valorHoraComum = salario / 220;
    const taxas = [100, 75, 65, 50, 40];
    let conteudoHtml = "";

    taxas.forEach(taxa => {
        let valorHoraExtraUnitária = valorHoraComum * (1 + (taxa / 100));
        let valorTotalAcumulado = valorHoraExtraUnitária * qtdHoras;
        
        conteudoHtml += `
            <div class="item-he">
                <span class="porcentagem">${taxa}%</span>
                <div style="text-align: right;">
                    <span class="valor">R$ ${valorTotalAcumulado.toFixed(2)}</span>
                    <br>
                    <small style="color: #94a3b8; font-size: 0.7rem;">
                        (${qtdHoras}h x R$ ${valorHoraExtraUnitária.toFixed(2)})
                    </small>
                </div>
            </div>
        `;
    });

    
    displayResultado.innerHTML = conteudoHtml;
}

// --- FUNÇÃO PARA COMPARTILHAR NO WHATSAPP ---
function compartilharWhatsApp() {
    const salario = document.getElementById('salario').value;
    const qtdHoras = document.getElementById('quantidade').value;
    const resultados = document.getElementById('resultado').innerText;

    if (!resultados) {
        alert("Calcule os valores primeiro!");
        return;
    }

    const mensagem = `*Calculadora de Horas Extras DevClub* \n\n` +
                     `Salário Base: R$ ${salario}\n` +
                     `Horas Realizadas: ${qtdHoras}h\n\n` +
                     `*Resultados:*\n${resultados}\n` +
                     `Criado por: JemersonLM`;

    // Codifica a mensagem para link de URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/?text=${mensagemCodificada}`, '_blank');
}

// --- FUNÇÃO PARA IMPRIMIR ---
function imprimirHolerite() {
    const resultados = document.getElementById('resultado').innerText;
    
    if (!resultados) {
        alert("Calcule os valores primeiro!");
        return;
    }

    
    window.print();
}
