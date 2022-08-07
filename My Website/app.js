const animes = [
    {
        name: "Hunter X Hunter",
        img: "img/Hunter x Hunter.jpg" 
    },
    {
        name: "Mushoku Tensei",
        img: "img/mushoku tensei.jpg" 
    },
    {
        name: "5-toubun no Hanayome",
        img: "img/quintessential.jpg" 
    },
    {
        name: "Mob Psycho 100",
        img: "img/mob pyscho.jpg" 
    },
    {
        name: "Tensei shitara Slime Datta Ken",
        img: "img/slime.jpg" 
    },
    {
        name: "Kono Suba",
        img: "img/kono suba.jpg" 
    },
    {
        name: "Koe no Katachi",
        img: "img/koe no katachi.jpg" 
    },
    {
        name: "iseijuu: Sei no Kakuritsu",
        img: "img/parasyte.png" 
    },
    {
        name: "Death Note",
        img: "img/death note.jpg" 
    }

];

const addAnime = document.querySelector('.addAnime');
const search = document.querySelector(".search");
const userInput = document.querySelector('.userInput');
const animeContent = document.querySelector('.anime-content');
const navContent = document.querySelector(".navigation-content");
const toggle = document.querySelector('.toggle');
const hamburger = document.querySelector(".hamburger");


  toggle.addEventListener("click", ()=>{
     if(!navContent.classList.contains("open")){
        navContent.classList.add("open");
     }
     else{
        navContent.classList.remove("open");
     }

  });

    userInput.addEventListener("keyup", function(e){
        const animeContent = document.querySelector('.anime-content');
    const anime = animeContent.querySelectorAll('.anime');
    console.log(anime);
    anime.forEach(function(item){
        
        const div = item.children[2].firstElementChild;
        console.log(div);
            if(div.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1 ){
                    div.parentElement.parentElement.style.display = "none";
            }
            else{
                div.parentElement.parentElement.style.display = "flex";
            }
    });
    });

function AddAnime(){
    const userInput = document.querySelector('.userInput2');
    const animeContent = document.querySelector('.anime-content');
    const deleteBtn = document.querySelectorAll(".delete")
    for(let i = 0; i < animes.length; i++){
        if(animes[i].name.toLowerCase().indexOf(userInput.value.toLowerCase()) != -1 && userInput.value.length > 3){
            animeContent.innerHTML += `<div class="anime">
            <div class="delete">
                <div class="cross"></div>
                <div class="cross"></div>
            </div>
            <img src="${animes[i].img}" alt="">
            <div class="text-content">
                <h4>${animes[i].name}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto saepe assumenda nam minus blanditiis.</p>           
            </div>
            
        </div>`; 
        }
    }
    animeContent.addEventListener("click", removeAnime);
    

}
addAnime.addEventListener('click', AddAnime);


animeContent.addEventListener("click", removeAnime);

function removeAnime(e){
    if(e.target.classList.contains("cross")){
        e.target.parentElement.parentElement.remove();
    }
    else if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
};

const navigate = document.querySelectorAll(".list li a");

navigate.forEach((x)=>{
    x.addEventListener("click", (e)=>{
        e.preventDefault();
        const navHeight = document.getElementById("main-navbar").getBoundingClientRect().height;
        const id = e.target.getAttribute("href").slice(1);
        const destination = document.getElementById(id).offsetTop;
       
        let x = 0;
        console.log(navContent.getBoundingClientRect().height);
        if(window.innerWidth <= 800){
            toggle.checked = false;
            navContent.classList.remove("open");
            x = destination;
            console.log(navContent.getBoundingClientRect().height, window.innerHeight);
        }    
        else{
            x = destination - navHeight;
        }
        window.scrollTo(
           {
            left: 0, top: x
           } 
        );
    });
});