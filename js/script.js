const iconsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// definisco la variabile di collegamento all'html
const outputHtml = document.getElementById('output');

const selectType = document.getElementById('select-type');

// definisco la funzione per stampare le icone
function printIcon(object){
    const upperName = object.name.toUpperCase();
    outputHtml.innerHTML += `
    <div class="box col-5 col-sm-3 col-lg-1 m-2">
        <i class="${object.color} ${object.family} ${object.prefix}${object.name}"></i>
        <span class="icon-name">${upperName}</span>
    </div>`;
}

// imposto un ciclo forEach per stampare le icone
iconsList.forEach((icon) => {
	printIcon(icon);
})

// definisco gli eventi associati alle diverse opzioni
selectType.addEventListener('change', (event) => {
	outputHtml.innerHTML = '';
	if(event.target.value === 'all'){
		iconsList.forEach((icon) => {
			printIcon(icon);
		})
	}

	if(event.target.value === 'animal'){
		const animalIconsList = iconsList.filter((icon) => {
			return icon.type === 'animal';
		})
		console.log(animalIconsList); //debug
		animalIconsList.forEach((icon) => {
			printIcon(icon);
		})
	}

	if(event.target.value === 'vegetable'){
		const vegetableIconsList = iconsList.filter((icon) => {
			return icon.type === 'vegetable';
		})
		console.log(vegetableIconsList); //debug
		vegetableIconsList.forEach((icon) => {
			printIcon(icon);
		})
	}

	if(event.target.value === 'user'){
		const userIconsList = iconsList.filter((icon) => {
			return icon.type === 'user';
		})
		console.log(userIconsList); //debug
		userIconsList.forEach((icon) => {
			printIcon(icon);
		})
	}
})