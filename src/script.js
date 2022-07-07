const content = [];
let conarray = [];
window.onload = function(){
    fetch("../res/content.json")
    .then(response => response.json()
        .then(module => {
            let main = document.getElementsByTagName("main");
            let section = document.createElement("section");
            for (const [key, value] of Object.entries(module)) {
                let div1 = document.createElement("div");
                let img = document.createElement("img");
                let div2 = document.createElement("div");
                let h3 = document.createElement("h3");
                let p = document.createElement("p");
                let btn = document.createElement("button");
                div1.classList.add("flex-item");
                section.classList.add("flex-container");
                img.src = value.img;
                p.classList.add("responseFont");
                img.classList.add("rund");
                btn.classList.add("desktopFeature");
                btn.innerHTML = "Groß/Klein";
                btn.onclick = function(){
                    toggleBigSec(value.id)
                }
                p.innerHTML = value.inhalt;
                div2.classList.add("textsec");
                h3.innerHTML= value.überschrift;
                div2.appendChild(h3);
                div2.appendChild(p);
                div2.appendChild(btn);
                div1.appendChild(img);
                div1.appendChild(div2);
                section.appendChild(div1);
                main[0].appendChild(section);
            }
        }));

}



function toggleBigSec(x){
    var sectionSmall = document.getElementsByClassName("flex-item");
        for(let i = 0; i < sectionSmall.length; i++){
            if(i == x){
              sectionSmall[i].classList.toggle("flex-itemBig");
            }
            if (sectionSmall[i].classList.contains('flex-itemBig') && i != x){
                sectionSmall[i].classList.toggle("flex-itemBig");
            }
            
        }
   }



