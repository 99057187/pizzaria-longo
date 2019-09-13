//anthony inocencio Ramos
//pizza calculator
// begin hier je JavaScript commandos
var aantalSmall = prompt("hoeveel small pizza's do you want" );//aantal small pizzas die de klant wilt bestellen.
var aantalMidium= prompt("hoeveel midium pizza's do you want");//aantal midium pizzas die de klant wilt bestellen.
var aantalLarge = prompt("hoeveel large pizza's do you want" );//aantal large pizzas die de klant wilt bestellen.
const small  = 5//de prijs voor een small pizza.
const midium = 8//de prijs voor een midium pizza.
const large  = 10//de prijs voor een large pizza.
document.write ('price for one small pizza = ' + small  + 'euro <br>');//de prijs voor 1 small pizza staat in beeld.
document.write ('price for one midium pizza= ' + midium + 'euro <br>');//de prijs voor 1 midium pizza staat in beeld.
document.write ('price for one large pizza = ' + large  + 'euro <br><br>');//de prijs voor 1 large pizza staat in beeld.
var smallPay = parseInt (aantalSmall*small  );//aantal smallpizzas keer prijs pizzas.
var midiumPay= parseInt (aantalMidium*midium);//aantal midiumpizzas keer prijs pizzas.
var largePay = parseInt (aantalLarge*large  );//aantal largepizzas keer prijs pizzas.
document.write ('aantal small pizzas ' + aantalSmall  + ' * ' + small + ' = ' + smallPay +'<br>');//de aantal pizzas en prijs voor de small pizzas staan in beeld.
document.write ('aantal midium pizzas '+ aantalMidium + ' * ' + midium+ ' = ' + midiumPay+'<br>');//de aantal pizzas en prijs voor de midium pizzas staan in beeld.
document.write ('aantal large pizzas ' + aantalLarge  + ' * ' + large + ' = ' + largePay +'<br>');//de aantal pizzas en prijs voor de large pizzas staan in beeld.
var totaal = ( smallPay + midiumPay + largePay );//totaal prijs word hier uitgerekend.
document.write ('totaal aantal pizzas='+ totaal);//totaal prijs word op beeld getoond.
