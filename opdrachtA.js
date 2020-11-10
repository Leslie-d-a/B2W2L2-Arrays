var daysOfTheWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];


function createH2Element(text) {
    var h2Element = document.createElement("h2");
    var h2ElementText = document.createTextNode(text);
    h2Element.appendChild(h2ElementText);
    document.body.appendChild(h2Element);
}

function createPElement(text) {
    var pElement = document.createElement("p");
    var pElementText = document.createTextNode(text);
    pElement.appendChild(pElementText);
    document.body.appendChild(pElement);
}

createH2Element("Alle dagen van de week:");
createPElement(daysOfTheWeek);
createH2Element("Alle werkdagen zijn:");
createPElement(daysOfTheWeek[0]+", "+daysOfTheWeek[1]+", "+daysOfTheWeek[2]+", "+daysOfTheWeek[3]+", "+daysOfTheWeek[4]);
createH2Element("Alle weekenddagen zijn:");
createPElement(daysOfTheWeek[5]+", "+daysOfTheWeek[6]);
createH2Element("Alle dagen van de week in omgekeerde volgorde zijn:");
createPElement(daysOfTheWeek[6]+", "+daysOfTheWeek[5]+", "+daysOfTheWeek[4]+", "+daysOfTheWeek[3]+", "+daysOfTheWeek[2]+", "+daysOfTheWeek[1]+", "+daysOfTheWeek[0]);
createH2Element("De werkdagen in omgekeerde volgorde zijn:");
createPElement(daysOfTheWeek[4]+", "+daysOfTheWeek[3]+", "+daysOfTheWeek[2]+", "+daysOfTheWeek[1]+", "+daysOfTheWeek[0]);
createH2Element("De weekenddagen in omgekeerde volgorde zijn:");
createPElement(daysOfTheWeek[6]+", "+daysOfTheWeek[5]);