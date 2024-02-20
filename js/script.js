//1

let ticketKm = prompt ('how many km will you do?');

//2

let passengerAge = prompt ('how old are you?');

//3

const kmPrice = 0.21;

//4

let priceTicket = ticketKm * kmPrice;

console.log ( 'prezzo totale chilometri ' + priceTicket);

//5

const youngDiscount = 20/100;

//6

const oldDiscount = 40/100;

//7

console.log ( ' sconto per minori sarà di ' + youngDiscount, ' sconto per over 65 sarà di ' +  oldDiscount);

//8

let ticketYoung= ' ';

let ticketOld= ' ';

let results= ' ';

let humanResults= ( math.round ( results * 100) / 100 );

let messageDef= ' ';

//9

if ( passengerAge < 18 ) {
  console.log ( results= ( 'Ciao giovane per te il biglietto ha una riduzione e ti costa: ' + ( ticketYoung = priceTicket - youngDiscount )))
} else if ( passengerAge > 65 ) {
  console.log  ( results = ( 'Salve, per lei il biglietto ha una riduzione e le costa: ' + ( ticketOld = priceTicket - oldDiscount )))
} else {
  console.log ( results= ( 'Buongiorno, in base ai km che percorrerà il biglietto ha un costo di: ' + priceTicket))
};

//10

if ( passengerAge < 18 ) {
  console.log ( messageDef = 'Ciao giovane per te il biglietto ha una riduzione e ti costa: ' + humanResults )
} else if ( passengerAge > 65 ) {
  console.log  ( messageDef = 'Salve, per lei il biglietto ha una riduzione e le costa: ' + humanResults)
} else {
  console.log ( messageDef = 'Buongiorno, in base ai km che percorrerà il biglietto ha un costo di: ' + humanResults)
};



document.getElementById ('output').innerHTML= `
<p>
  ${messageDef}
</p>
`;
