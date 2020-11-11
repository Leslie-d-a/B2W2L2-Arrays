var tafels = [2,4,6,8];

for(i=0;i<tafels.length;i++){
    var h2Element = document.createElement("h2");
    var h2ElementText = document.createTextNode("tafel van "+tafels[i]+".");
    h2Element.appendChild(h2ElementText);
    document.body.appendChild(h2Element);
    for (var a = 1; a <= 10; a++) {
        var number = tafels[i] * a;
        var h2Element = document.createElement("p");
        var h2ElementText = document.createTextNode(tafels[i]+" * "+a+" = "+ number);
        h2Element.appendChild(h2ElementText);
        document.body.appendChild(h2Element);
    }
}