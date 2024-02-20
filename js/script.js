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

//9

if ( passengerAge < 18 ) {
  console.log ( 'Ciao giovane per te il biglietto ha una riduzione e ti costa: ' + ( ticketYoung = priceTicket - youngDiscount ))
} else if ( passengerAge > 65 ) {
  console.log  ( 'Salve, per lei il biglietto ha una riduzione e le costa: ' + ( ticketOld = priceTicket - oldDiscount ))
} else {
  console.log ( 'Buongiorno, in base ai km che perocrrerà il biglietto ha un costo di: ' + priceTicket)
};

//10

document.getElementById
