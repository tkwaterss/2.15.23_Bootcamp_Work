const button = document.querySelector('button');
const main = document.querySelector('main');

const clicked = event => {
    main.innerHTML = '';
    axios.get('https://swapi.dev/api/planets/?search=alder')
    .then(response => {
        residentsArr = response.data.results[0].residents;
        for (let i = 0; i < residentsArr.length; i++) {
            axios.get(residentsArr[i])
            .then(response => {
                let newChar = document.createElement('h2');
                newChar.textContent = response.data.name;
                main.appendChild(newChar);
            })
        }
    })
}

button.addEventListener('click',clicked);