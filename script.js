let count = 0;

// let value = document.getElementsByClassName('value');
// let btns = document.getElementsByClassName('btn');

// btns.forEach(btn =>{
//     btn.addEventListener('click', e =>{
//         if(e.target.classList.contains('increase')){
//             count ++;
//         }
//         value.textContent = count;
//     })
// })

let value = document.querySelector('.class');
let btns = document.querySelectorAll('.btn');

btns.forEach(btn =>{
    btn.addEventListener('click', e=>{
        if(e.target.classList.contains('increase')){
            count++;
        }
        value.innerHTML = count;
    })
})