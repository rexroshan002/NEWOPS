const container = document.querySelector(".container")
const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")
const btnGrp = document.querySelector(".btn-group")

if(yesBtn){
    yesBtn.addEventListener("click",() =>{
        question.innerHTML = "Yayy, see you in Dreams!"
        gif.src= "https://media.tenor.com/Y8WQ1xwb0LkAAAAi/sleepy-cat.gif"
        yesBtn.innerHTML = "Okay"
        noBtn.style.display ="none"
        
        yesBtn.addEventListener("click", () =>{
            question.innerHTML = "Wanna Talk more❤️??"
            gif.src = "https://media1.tenor.com/m/k9gTcVv488gAAAAC/bubu-dudu-good-girl.gif"
            noBtn.style.display ="none"
            yesBtn.innerHTML = "yes ji !!"
            yesBtn.addEventListener("click", () =>{
                window.open("https://www.instagram.com/___mr.xerxes___/", "_blank");
                location.reload();

            })
        })
    })

}
if(noBtn){

    noBtn.addEventListener("click",() =>{
        question.innerHTML = "Are you sure?😒"
        gif.src = "https://media.tenor.com/reN2trIq1dYAAAAi/peach-goma.gif"
        
        noBtn.addEventListener("click", ()=>{
            question.innerHTML = "Do you wanna date me"
        gif.src = "https://media.tenor.com/LZbS2gmnzyAAAAAi/quby-cute.gif"
        
        noBtn.disabled = true;
        noBtn.style.opacity = "0.2"
        yesBtn.addEventListener("click",() =>{
            question.innerHTML = "Yayy, see you in Dreams!"
            gif.src= "https://media.tenor.com/Y8WQ1xwb0LkAAAAi/sleepy-cat.gif"
            yesBtn.innerHTML = "Okay"
            
            yesBtn.addEventListener("click", () =>{
                question.innerHTML = "Wanna Talk more❤️??"
                gif.src = "https://media1.tenor.com/m/k9gTcVv488gAAAAC/bubu-dudu-good-girl.gif"
                noBtn.style.display ="none"
                yesBtn.innerHTML = "yes ji !!"
                yesBtn.addEventListener("click", () =>{
                    window.open("https://www.instagram.com/___mr.xerxes___/", "_blank");
                })
            })
        })
        
        yesBtn.addEventListener("click", () =>{
            question.innerHTML = "Are you really sure?🤨"
            gif.src ="https://media1.tenor.com/m/ueClToNn_ygAAAAC/panda-cute.gif"
            yesBtn.innerHTML = "Hanji"
            noBtn.style.display ="none"
            
            yesBtn.addEventListener("click", () =>{
                question.innerHTML = "Sochlo firse??😏"
                gif.src ="https://media.tenor.com/mcO6cx0zyqEAAAAi/smirk-smiling.gif"
                yesBtn.innerHTML = "Okay🤦‍♀️ LOVE YOU"
                noBtn.innerHTML = "bolo bolo"
                
                yesBtn.addEventListener("click",() =>{
                    question.innerHTML = "Yayy, see you in Dreams!"
                    gif.src= "https://media.tenor.com/Y8WQ1xwb0LkAAAAi/sleepy-cat.gif"
                    yesBtn.innerHTML = "Okay"
                    
                    yesBtn.addEventListener("click", () =>{
                    question.innerHTML = "Wanna Talk more❤️??"
                    gif.src = "https://media1.tenor.com/m/k9gTcVv488gAAAAC/bubu-dudu-good-girl.gif"
                    noBtn.style.display ="none"
                    yesBtn.innerHTML = "yes ji !!"
                    yesBtn.addEventListener("click", () =>{
                        window.open("https://www.instagram.com/___mr.xerxes___/", "_blank");
                    })
                })
            })
            
        }) 
    })
    })

})
}
// noBtn.addEventListener("mouseover", () =>{
//     const noBtnRect = noBtn.getBoundingClientRect();
//     const x = window.innerWidth - noBtnRect.width
//     const y = window.innerHeight - noBtnRect.height

//     const randomX = Math.floor(Math.random() * x);
//     const randomY = Math.floor(Math.random() * y);

//     noBtn.style.left = randomX + "px"
//     noBtn.style.top = randomY + "px"
// })