function calcular() {
    const inputsalario=document.getElementById("salario");
    const displayResultado=document.getElementById("resultado");

    let salario=parseFloat(inputsalario.value);

    if ( isNaN(salario) || salario <= 0) {
        alert("Por favor, digite um valor válido para o salário!");
        return;
    }
}

let valorHoraComum=salario/220;

const taxas=[100,75,65,50,40];


 let conteudoHtml="";

 taxas.forEach(taxa => {
        let valorHoraExtraUnitária = valorHoraComum * (1 + (taxa / 100));
        let valorTotalAcumulado = valorHoraExtraUnitária * qtdHoras;
        
        conteudoHtml += `
            <div class="item-he">
                <span class="porcentagem">${taxa}%</span>
                <div style="text-align: right;">
                    <span class="valor">R$ ${valorTotalAcumulado.toFixed(2)}</span>
                    <span class="total-acumulado">(${qtdHoras}h x R$ ${valorHoraExtraUnitária.toFixed(2)})</span>
                </div>
            </div>
        `;
    });

    displayResultado.innerHTML = conteudoHtml;
