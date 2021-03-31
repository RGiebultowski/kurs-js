const button = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Rafał', 'Karolina', 'Kamil', 'Wojtek', 'Ada', 'Agnieszka', 'Stefan', 'Mariola'];

const generateName = () => {
    const maxValue = Math.floor(names.length);
    const minValue = Math.ceil(0);
    const randomIndex = Math.random() * (maxValue - minValue) + minValue;
    div.textContent = `Wylosowane imie to ${names[parseInt(randomIndex)]}`;
}


button.addEventListener('click', generateName);