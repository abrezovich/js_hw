'use strict';
/*  1
const longItems = function (array) {
    for (let i = 0; i < array.length; i+=1) {
        let el = array[i];
        let j = i+1;
        console.log( j ,' - ', el );        
    }
    
};
longItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
longItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
////
//// 2
const calculateEngravingPrice = function(message, pricePerWord) {
   const messageArray = message.split(' ');
   console.log(messageArray);
   const coast = pricePerWord * messageArray.length;
   return coast;
  };
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  );
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); 
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  );
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); 
/////
/////3 
const findLongestWord = function(string) {
    let words = string.split(' ');
    let longWord = words[0];
    for (let i = 0; i < words.length; i+=1) {
        const el = words[i];
        if (el.length > longWord.length) {
            longWord = el;
        }
    }
    return longWord;
  };
  
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'
/////4 */
