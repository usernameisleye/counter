let count = 0;

let value = document.querySelector('.value');
let btns = document.querySelectorAll('.btn');

btns.forEach(element =>{
    element.addEventListener('click', btn =>{
        const styles = btn.target.classList;
        if(styles.contains('decrease')){
            count --;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count < 0){
            value.style.color = 'red';
        }
        else if(count > 0){
            value.style.color = 'green';
        }
        else{
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})