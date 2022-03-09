const resultsContainer = document.querySelector(".details");
const url = "https://breakingbadapi.com/api/characters/6";
//const url = "https://zoo-animal-api.herokuapp.com/animals/rand/10"





async function FetchCharacter() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const character = results[0]

        createHtml(character);
    }
    catch(error) {
        console.log(error)
    }
    

    console.log(response);
    console.log(character);

       


}

FetchCharacter();

function createHtml(character) {
    resultsContainer.innerHTML = `
                                    <h1 class="name">${character.name}</h1>
                                    <div class="image" style="background-image: url('${character.img}')"></div>
                                    <div class="status">Status: <b>${character.status}</b></div>
                                `
}
