// Vou fazer uma função
// Essa função deve calcular a quantidade necessária de itens para um churrasco com uma quantidade x de pessoas e duracao h de horas
// Estimando:
// Carne - 400gr por pessoa ou + 6h : 650gr
// Cerveja - 1200ml por pessoa ou + 6h : 2000ml
// Refrigerante/Água - 1000ml por pessoa ou + 6h : 1500ml
// *Crianças valem por 0,5*

var i_adulto = document.getElementById("adultos")
var i_crianca = document.getElementById("criancas")
var i_duracao = document.getElementById("duracao")

var res = document.getElementById("resultado")

function calcular(){
    let num_a = i_adulto.value;
    let num_c = i_crianca.value;
    let num_d = i_duracao.value;
    
    if (num_d < 6){
        var q_carne =  (400 * num_a) + ((400*0.5) * num_c);
        var q_cerva = 1200 * num_a;
        var q_refri = (1000 * num_a) + ((1000 * 0.5) *num_c)

    } else {
        var q_carne =  (650 * num_a) + ((650*0.5) * num_c);
        var q_cerva = 2000 * num_a;
        var q_refri = (1500 * num_a) + ((1500 * 0.5) * num_c)
    }

    res.innerHTML = `<h2>Você vai precisar de:</h2>`
    res.innerHTML += `<p>${q_carne / 1000} Kg de Carne </p>`
    res.innerHTML += `<p> ${Math.ceil(q_cerva /355)} Latas de Cerveja</p>`
    res.innerHTML += `<p>${Math.ceil(q_refri/2000)} Garrafas Pet 2l de Refrigerante e Água</p>`
}