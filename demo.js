// /*let a=4>3?6>8?10:3>8?4>1?20:30:4>7?40:50:6>8?60:70;
//     console.log(a);

//  let n=15;
//  if(n%3==0)   
//     console.log("hai");
 
//  if (n%5==0) 
//     console.log("hello");*

//     let a=3;
//     for (console.log("a"); a>0; console.log("b"))
//     {
//         console.log("c");
//         a--;
//     } 

//     for(;;)
//     {
//         console.log("hello");
//     }*/

// /*function hello(){
//     document.getElementById("val").style.backgroundColor="red";
//     document.getElementById("sibi").style.backgroundColor="green";
//     document.getElementById("yog").style.backgroundColor="blue";
// }*/


//     function abc(a)
//     {
//       return"hello"+a;
//     }
//     console.log(abc("SAKTHI PRASAD")
// *?


let display = document.querySelector('.display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}