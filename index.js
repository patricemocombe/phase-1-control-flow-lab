function scuberGreetingForFeet(someValue){
  let result;
  if (someValue <= 400) {
    result = 'This one is on me!';
  }
  if (someValue >= 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
  if (someValue >= 2500) {
    result = 'No can do.';
  }
  return result
  // Write your code here!
};
scuberGreetingForFeet(199);

scuberGreetingForFeet(2001);

scuberGreetingForFeet(2501);



 function ternaryCheckCity(someCity){

  return someCity === 'NYC'? 'Ok, sounds good.' : `No go.`
  };

ternaryCheckCity('NYC');

ternaryCheckCity('Pittsburgh');


function switchOnCharmFromTip(someTip){
  switch (someTip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous' :
      return 'Thank you.';
    default:
      return "Bye.";
  };
}

switchOnCharmFromTip();
