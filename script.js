const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", ()=>{

    hiddenElements.forEach((element)=>{

        let position = element.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            element.classList.add("show");

        } else {

            element.classList.remove("show");

        }

    });

});
// Ice Cream Falling Effect 🍦

function createIceCream(){

    const ice = document.createElement("div");

    ice.innerHTML = "🍦";

    ice.style.position = "fixed";
    ice.style.top = "-50px";
    ice.style.left = Math.random() * window.innerWidth + "px";
    ice.style.fontSize = Math.random() * 20 + 20 + "px";
    ice.style.zIndex = "9999";
    ice.style.pointerEvents = "none";

    document.body.appendChild(ice);


    let position = -50;

    let fall = setInterval(()=>{

        position += 3;

        ice.style.top = position + "px";
        ice.style.transform = 
        `rotate(${position}deg)`;


        if(position > window.innerHeight){

            clearInterval(fall);
            ice.remove();

        }

    },20);

}

for(let i = 0; i < 15; i++){

    setTimeout(()=>{
        createIceCream();
    }, i * 300);

}

const counterSound = new Audio("Audio/counter.mp3");
counterSound.loop = true;


const stats = document.querySelector(".stats");
const counters = document.querySelectorAll(".counter");

function startCounter(){

    counterSound.currentTime = 0;
    counterSound.play();

    counters.forEach(counter=>{

        counter.innerText = "0";

        let target = +counter.dataset.target;
        let count = 0;

        let update = setInterval(()=>{

            count += Math.ceil(target / 100);

            if(count >= target){

                count = target;
                clearInterval(update);

                // إيقاف الصوت عند انتهاء آخر عداد
                if(counter === counters[counters.length - 1]){
                    counterSound.pause();
                    counterSound.currentTime = 0;
                }

            }

            counter.innerText = count + "+";

        },20);

    });

}


let observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter();

        }

    });

});

observer.observe(stats);


const popup = document.getElementById("popup");


function chooseFlavor(flavor){

    alert("Great choice! You love " + flavor + " 😋");

    popup.style.display="none";

}

// Surprise Ice Cream Feature 🍦

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseBox = document.getElementById("surpriseBox");
const flavorResult = document.getElementById("flavorResult");


const flavors = [
    "Chocolate 🍫",
    "Strawberry 🍓",
    "Vanilla 🍦",
    "Mango 🥭",
    "Pistachio 💚",
    "Caramel 🍯"
];


if(surpriseBtn){

    surpriseBtn.addEventListener("click", ()=>{


        let randomFlavor = flavors[
            Math.floor(Math.random() * flavors.length)
        ];


        flavorResult.innerHTML =
        "Today you should try: <strong>" 
        + randomFlavor + 
        "</strong> 😋";


        surpriseBox.style.display = "block";


        setTimeout(()=>{

            surpriseBox.style.display = "none";

        },4000);


    });

}

function addFlavor(){

    let flavor = document.getElementById("newFlavor").value;


    if(flavor.trim() === ""){

        alert("Please write a flavor first 🍦");
        return;

    }


    alert(
        "Your request has been received successfully ✅\n\n" +
        "We look forward to adding " + flavor + " to our flavors in the future 🍨"
    );


    document.getElementById("newFlavor").value = "";

    popup.style.display="none";

}

window.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");

    music.volume = 0.3;

    const startMusic = () => {
        music.play().catch(err => console.log(err));
        document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);
});
