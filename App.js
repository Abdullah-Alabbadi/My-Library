alert("Welcome to your Dashboard")

var txt;
var firstName ='Abdullah ';
var lastName  ='Alabbadi';
//var fullName = firstName + lastName;




/* Add validation on one of the user inputs.
Keep asking until an acceptable value is entered.
Show an image related to your page’s topic, repeated within your page.
Prompt the user with a relevant question for a number (e.g.: “How many cats do you want?” or “What star rating would you give, 1-5?”)
Use a loop in your JavaScript code to show the image that many times.
*/


var fullName = prompt('What is your Full name');
while (fullName != firstName + lastName ){
    alert('your Name not registered');
     fullName = prompt('What is your Full name');
}


var asking = prompt('Enter your number of your regesterated book ');
var number = 3;




if (fullName == firstName + lastName ){

    if(asking != number){
        asking = prompt('please enter the correct regesterated book');
        
        }
        
    var fullName = confirm("do you want to go to your Dashboard?");
    alert("Welcome to your Dashboard");
}else if(fullName == true){txt = "You pressed OK!";}

else {

        alert("You must take permission to enter");
        
       }  
     
    
var favInstrument = prompt('Whats your favourite instrument!','Software Enginering , java3');
     
while(favInstrument !== 'Software Enginering' && favInstrument !== 'java3'){

    favInstrument = prompt('please enter on of the following java3 or Software Enginering');
}


var instrumentsNum = prompt('how many time to see the book');

var image = '';
for(var i = 1 ; i <=instrumentsNum; i++ ){
    if(favInstrument === 'java3'){
        image += '<img src="PhotoBooks/java3.jpg"/>';
    }else if(favInstrument === 'Software Enginering'){
        image += '<img src="PhotoBooks/Software Enginering.jpg"/>';
    }
}
     
document.write(image);