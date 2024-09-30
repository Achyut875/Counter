let count = 0;


const value= document.querySelector("#value");
const btns= document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles= e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if(styles.contains("reset")) {
            count=0;
        } else if(styles.contains("increase")){
            count++;
        }
        value.textContent = count;

        if(count>0){
            value.style.color = '#2FBF71';
        } else if(count<0){
            value.style.color = '#EF2D56'
        } else{
            value.style.color = 'yellow'
        }
    })
});