document.addEventListener('DOMContentLoaded',renderAll);
var container = document.getElementById('superhero');
function renderAll(){
    console.log("Event Fired");
    let html = '';
    let x = localStorage.getItem('favSuperheros');
     x = JSON.parse(x);
        if(x){ 
            console.log(x);
            for(let elements of x){
                console.log(elements);
                html+=`
                <div class="superhero-item">
                <div class ="superhero-img" >
                    <img src = "${elements.results[0].image.url}" alt = "superhero-img" >
                </div>
                <div class ="superhero-name">
                    <h3>${elements.results[0].name}</h3>
                    <i class="fa fa-heart" ></i>
                </div>
                </div>`;
            }
            // container.classList.remove('notFound');
        }else{
        console.log("NO fav till now !");
        html =`your favourite list is empty !`;
        container.classList.add('notFound');
        } 
     container.innerHTML = html;
}