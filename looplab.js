
var userName = prompt ("Whats your name ?");
alert("welcome to our websit " + userName );



 //img = '';
 var flowertype = prompt ("What yours Fav flowers type(tulip) ?");
 if (flowertype == "tulip"){
  document.write('<img src="https://www.ikea.com/jo/en/images/products/smycka-artificial-bouquet-in-outdoor-tulip__0797543_pe767312_s5.jpg?f=s"/>')
} ; 


var starRating;
var starRating = prompt ("What star rating would you give, 1-5?");
//if the starRating equal 1 loop again
while (starRating==1){
  //consol.log('inside the while loop');
  //break;
  starRating=prompt("please Give us star rating !");}
  //if the starRating equal 2 loop again
while (starRating==2){
  //consol.log('inside the while loop');
  //break;
  starRating=prompt("please Give us star rating !");
}
//if the starRating equal 0 loop again
while (starRating==0){
  //consol.log('inside the while loop');
  //break;
  starRating=prompt("please Give us star rating !"); }
 

//images loop
// var c;
c = prompt ("How many kids do you have?");
 
  if (c==1 ){document.write('<img src="https://img.freepik.com/free-photo/newborn-toddler-boy-laughing-bed_115594-1502.jpg?size=626&ext=jpg&ga=GA1.2.1983713001.1615680000" />');} ;  
  //break;
  
  if(c==2){for(c==0;c<=2;c--){document.write('<img src="https://img.freepik.com/free-photo/newborn-toddler-boy-laughing-bed_115594-1502.jpg?size=626&ext=jpg&ga=GA1.2.1983713001.1615680000" />'); } } ;
//break;
   if(c==3){for(c==0;c<=3;c--){document.write('<img src="https://img.freepik.com/free-photo/newborn-toddler-boy-laughing-bed_115594-1502.jpg?size=626&ext=jpg&ga=GA1.2.1983713001.1615680000" />'); };} 
//break;
  if(c==4){for(c==0;c<=4;c--){document.write('<img src="https://img.freepik.com/free-photo/newborn-toddler-boy-laughing-bed_115594-1502.jpg?size=626&ext=jpg&ga=GA1.2.1983713001.1615680000" />'); };}  ;

var userAge = prompt('please enter your Age ?')
//if(userName == 'Suzan' && userAge == 25) { 
   //console.log(true); 
 //}





var input = prompt ("did the bage was useful? ");
   if(input=="yes"){ input=prompt ("Do You Want To Sign In Our Club?");
   }
 else if (input=="no") { input=prompt ("Thank You For visiting^__^ ") } ;