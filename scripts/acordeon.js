


function Acordeon(element){
    this.element = element;
    this.button = this.element.querySelector('button');
    //onmouseover
    this.button.onclick = ()=>{
        console.log(this);
        this.element.classList.toggle('is-active');

    }
}

const acordeons = document.querySelectorAll('.acordeon');
acordeons.forEach((acordeon) => {
    new Acordeon(acordeon)
    
});