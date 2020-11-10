var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

var optelP = document.getElementById("optellen");
var aftrekP = document.getElementById("aftrekken");
var vermenigvuldigP = document.getElementById("vermenigvuldigen");
var deelP = document.getElementById("delen");

function optellen(a, b){
    for(i=0;i<=9;i++){
        var number = Number(a[i])+Number(b[i]);
        optelP.innerHTML +=  a[i]+" + "+b[i]+" = "+number+"</br>";
    }
}
function aftrekken(a, b){
    for(i=0;i<=9;i++){
        var number = Number(a[i])-Number(b[i]);
        aftrekP.innerHTML +=  a[i]+" - "+b[i]+" = "+number+"</br>";
    }
}
function vermenigvuldigen(a, b){
    for(i=0;i<=9;i++){
        var number = Number(a[i])*Number(b[i]);
        vermenigvuldigP.innerHTML +=  a[i]+" * "+b[i]+" = "+number+"</br>";
    }
}
function delen(a, b){
    for(i=0;i<=9;i++){
        var number = Number(a[i])/Number(b[i]);
        deelP.innerHTML +=  a[i]+" / "+b[i]+" = "+number+"</br>";
    }
}

optellen(arrayEen, arrayTwee)
aftrekken(arrayEen, arrayTwee)
vermenigvuldigen(arrayEen, arrayTwee)
delen(arrayEen, arrayTwee)