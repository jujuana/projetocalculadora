function somar(){
    var tn1 = document.getElementById('n1');
    var tn2 = document.getElementById('n2');
    var res = document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = n1+ n2;

    res.innerHTML = `A soma de ${n1} mais ${n2} é igual a ${s}`;
}
function subtrair(){
    var tn1 = document.getElementById('n1');
    var tn2 = document.getElementById('n2');
    var res = document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = n1 - n2;

    res.innerHTML = `A subtração de ${n1} mais ${n2} é igual a ${s}`;
}
function multiplicacao(){
    var tn1 = document.getElementById('n1');
    var tn2 = document.getElementById('n2');
    var res = document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = n1 * n2;

    res.innerHTML = `A multiplicação de ${n1} mais ${n2} é igual a ${s}`;
}
function dividir(){
    var tn1 = document.getElementById('n1');
    var tn2 = document.getElementById('n2');
    var res = document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = n1 / n2;

    res.innerHTML = `A divisão de ${n1} mais ${n2} é igual a ${s}`;
}
function média(){
    var tn1 = document.getElementById('n1');
    var tn2 = document.getElementById('n2');
    var res = document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var s = (n1 + n2) / 2;

    res.innerHTML = `A média de ${n1} mais ${n2} é igual a ${s}`;
}

