const apiUrl = 'https://superheroapi.com/api/access-token/'
import './styles.css'

const peticiones = new XMLHttpRequest();

function manejoDePeticiones() {
    if (this.readyState === 4 && this.status === 200) {

        const data = JSPN.parse(this.response)
        console.log(data);
    } else {
        console.log("data");
    }
}


// peticiones.addEventListener("load", manejoDePeticiones);
// peticiones.open("GET", `${apiUrl}character-id/image`);
// peticiones.send();