

// let display = document.getElementById('display');
// let keyboard = document.getElementById('keyboard');

// keyboard.addEventListener('click', (e) => {
//     const value = e.target.innerText; 
//     if (value === 'C') {
//                 display.innerText = ''; 
//             } else if (value === '=') {
                
//                     display.innerText = eval(display.innerText); 
                
//             } else {
//                 display.innerText += value; 
//             }
// });






let display = document.getElementById("display");
let keyboard = document.getElementById("keyboard");


keyboard.addEventListener('click',(e)=> {
    const value = e.target.innerText; 
    if(value === 'C'){
        display.innerText= '';
    } else if (value === '='){
        display.innerText = eval(display.innerText);
    }else{
        display.innerText += value
    }
})