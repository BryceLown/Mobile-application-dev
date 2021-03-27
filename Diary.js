let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs tje function sendAPIrequest when it is clicked
searchButton.addEventListener("click", ()=>{ 
console.log("button pressed")
sendApiRequest ()
})

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    let APP_ID="9bd1ca2d"
    let API_KEY="42dbd04ddc6b71f03731d4c9139aa555"
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=Spaghetti Carbonara`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)

    function useApiData(Data) {
    document.querySelector("#content").innerHTML = `
    <ion-card color="tertiary">
    <ion-card-content>
    <img src="${data.hits[0].recipe.image}"></img>
    <ion-card-title>${data.hits[0].recipe.label}</ion-card-title>
    <h2>Calories:${data.hits[0].recipe.calories}</h2>
    <h2>Carbs (gs):${data.hits[0].recipe.totalNutrients.CHOCDF.quantity}</h2>
    <h2>Fat (gs):${data.hits[0].recipe.totalNutrients.FAT.quantity}</h2>
    <h2>Protein (gs):${data.hits[0].recipe.totalNutrients.PROCNT.quantity}</h2>
    </ion-card-content>
    </ion-card>
    `
    }
}
