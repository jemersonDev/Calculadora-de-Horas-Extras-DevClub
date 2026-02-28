function calcular() {
    // 1. Pegamos os elementos do HTML
    const inputSalario = document.getElementById("salario");
    const inputQuantidade = document.getElementById("quantidade"); // Pegando a quantidade
    const displayResultado = document.getElementById("resultado");

    // 2. Transformamos os textos em números
    let salario = parseFloat(inputSalario.value);
    let qtdHoras = parseFloat(inputQuantidade.value);

    // 3. Verificamos se os valores são válidos
    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, digite um valor válido para o salário!");
        return;
    }

    if (isNaN(qtdHoras) || qtdHoras <= 0) {
        qtdHoras = 1; // Se a pessoa não digitar horas, calculamos para 1h por padrão
    }

    // 4. Fazemos os cálculos (Tudo dentro da função calcular!)
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

    // 5. Colocamos o resultado na tela
    displayResultado.innerHTML = conteudoHtml;
} // <--- A CHAVE SÓ FECHA AQUI NO FINAL!
