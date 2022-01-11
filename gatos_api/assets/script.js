const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const pegaBotao = document.getElementById('botao');



const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;

    } catch (error) {
        console.log(error.message);
    }
};

const loading = async () => {
    const imagemGatos = document.getElementById('gatos');
    imagemGatos.src = await getCats();
};


pegaBotao.addEventListener('click', loading);

loading();