const superheroName = document.getElementById('search_bar');
const searchButton = document.getElementById('search_btn');
const display = document.getElementById('superhero');
const allFav = document.getElementById('allFav');
var favSuperheros = [];

/* function receving input data */
const searchSuperHero = () =>{
    superheroData(superheroName.value);
}

/* function making api call, receiving api data */
async function superheroData(name){
    try{
        const resp = 
        await fetch(`https://www.superheroapi.com/api.php/1628132770683309/search/${name}`);
        ApiData = await resp.json();
        if(ApiData.response==='success'){
            console.log(ApiData.results);
            for(let elements of ApiData.results){
                renderSuperHero(elements);
            }
        }else{
            console.error("sorry bad command !")
        }
        
    } catch(error){
        console.error("sorry bad command !");
    }
    
}

/* function to render data */
const renderSuperHero =(data) => {
    console.log("renderSuperhero",data.name);
     var div = document.createElement('div');
        div.innerHTML = `
        <div class="superhero-item" data-id = "${data.name}">
            <div class ="superhero-img" >
                <img src = "${data.image.url}" alt ="${data.name}-img" >
            </div>
            <div class ="superhero-name" >
                <h3>${data.name}</h3>
                <a herf="#" class="superhero-name" id="superhero-name">Add to <i class = "fas fa-heart"></i></a>
            </div>
        </div> 
        `
        div.classList.add('superhero-item');
        superhero.appendChild(div);
        
        
}  
async function addToFav(event){
    event.preventDefault();
    if(event.target.classList.contains("superhero-name")){
        let id = event.target.parentElement.parentElement;
        console.log("eventfired",id.dataset.id);
        const response = await fetch(`https://www.superheroapi.com/api.php/1628132770683309/search/${id.dataset.id}`);
        const superhero = await response.json();
        favSuperheros.push(superhero); 
        localStorage.setItem("favSuperheros",JSON.stringify(favSuperheros));
        console.log(superhero);
    }
}

// event listners
searchButton.addEventListener('click',searchSuperHero);
display.addEventListener('click',addToFav);
allFav.addEventListener('click',()=>(window.location.href = "superheroHtml.html"));
