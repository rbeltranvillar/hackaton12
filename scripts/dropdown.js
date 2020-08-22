
//alert('so funca');

//export default Dropdown;

function Dropdown(element){
    this.element = element;
    this.button = this.element.querySelector('button');
    //onmouseover
    this.button.onclick = ()=>{
        console.log(this);
        this.element.classList.toggle('is-active');

    }
}

const dropdrowns = document.querySelectorAll('.dropdown');
dropdrowns.forEach((dropdown) => {
    new Dropdown(dropdown)
    
});