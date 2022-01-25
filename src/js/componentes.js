
import '../css/style.css'




export const saludar = ( ) => {

    const divContainer = document.querySelector('.container-row'); 
    const btnCambio = document.querySelector('#btnCambio');
    const img = document.createElement('img');
    

    img.src = '../assets/img/batman.png';
    divContainer.appendChild(img);

}

