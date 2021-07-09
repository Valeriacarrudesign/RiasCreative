/* Define all variables */

// crea array di immagini per classe
const graphicGallery = document.querySelectorAll('.graphicImage');
const illustrationGallery = document.querySelectorAll('.illustrationImage');
const photoGallery = document.querySelectorAll('.photoImage');

// crea array di bottoni per classe (desktop e mobile)
const graphicBtn = document.querySelectorAll('.openGraphic');
const illustrationBtn = document.querySelectorAll('.openIllustration');
const photoBtn = document.querySelectorAll('.openPhoto');

//indice immagine in array da cui parte carosello
let myIndex = 0


/* Gestione della modale per tutte le gallerie*/
const overlay = document.getElementById('overlay')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modalCloseBtn')

/* Gestione evento click overlay*/

//apertura modale al click display da none a block
function displayModal(arg) {
    overlay.style.display = "block";
    modal.style.display = "block";
    document.body.classList.add('open-dialog')
    
    assignImages(arg);
}


//funzione per chiusura modale click overlay o closeButton
function closeModal() {
    overlay.style.display = "none";
    modal.style.display = "none";
    document.body.classList.remove('open-dialog')
    //variabili elementi all'interno della modale e loro rimozione
    let ourDiv = document.querySelector('.gianubaldo')
    let arrowR = document.querySelector('.arrowR')
    let arrowL = document.querySelector('.arrowL')
    if(ourDiv){
        modal.removeChild(ourDiv)
    }
    if(arrowR && arrowL){
        modal.removeChild(arrowL)
        modal.removeChild(arrowR)
    }
    myIndex = 0
}
//eventi per chiusura 
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

//funzione GRAPHICS 
function assignImages(arg){
    if( arg === 'GRAPHICS'){
        let ourImg;
        let ourTitle;
        let ourParag;
        // prendi le immagini da html con titolo e descrizione
            ourImg = graphicGallery[myIndex].style.backgroundImage
            ourTitle = graphicGallery[myIndex].dataset.title
            ourParag = graphicGallery[myIndex].dataset.value       
        
        // soluzione problema URL inline
        //"url(/Web/galleria/tabaccaio.png)"
        let ourImgString = ourImg.slice(5)
        ourImgString = ourImgString.slice(0, -2)

        // creazione DIV contenitore padre e classe
        let el = document.createElement('div')
        el.classList.add('gianubaldo')

        // creato DIV contentore immagine e testo e la sua classe (figlio gianubaldo)
        let elText = document.createElement('div')
        elText.classList.add('textContainer')
        elText.classList.add('my-auto')


        let imgNow = document.createElement('img')
        
        //Creazione div frecce (css after) più classe

        let arrowR = document.createElement('div')
        arrowR.classList.add('arrowR')

        let arrowL = document.createElement('div')
        arrowL.classList.add('arrowL')

        //scomparsa arrowL
        if(myIndex == 0){
            arrowL.style.display = 'none'
        }
        //scomparsa arrowR
        if(myIndex == graphicGallery.length -1 ){
            arrowR.style.display = 'none'
        }

        //click arrowL rimozione elementi precedenti e creazione successivi dalla funzione GRAPHICS
        arrowL.addEventListener("click", function(event) {
            let ourDiv = document.querySelector('.gianubaldo')
            let arrowR = document.querySelector('.arrowR')
            let arrowL = document.querySelector('.arrowL')
            if(ourDiv){
                modal.removeChild(ourDiv)
            }
            if(arrowR && arrowL){
                modal.removeChild(arrowL)
                modal.removeChild(arrowR)
        
            }
            myIndex = myIndex - 1
            assignImages('GRAPHICS')
        });

        //click arrowR rimozione elementi precedenti e creazione successivi dalla funzione GRAPHICS
        arrowR.addEventListener("click", (event) => {
            let ourDiv = document.querySelector('.gianubaldo')
            let arrowR = document.querySelector('.arrowR')
            let arrowL = document.querySelector('.arrowL')
            if(ourDiv){
                modal.removeChild(ourDiv)
            }
            if(arrowR && arrowL){
                modal.removeChild(arrowL)
                modal.removeChild(arrowR)
        
            }
            myIndex = myIndex + 1
            event.stopPropagation()
            assignImages('GRAPHICS')
        });
        //inserisce le frecce dentro la modale
        modal.appendChild(arrowR)
        modal.appendChild(arrowL)

        let titleNow = document.createElement('h1')
        let paragNow = document.createElement('p')
        imgNow.src = ourImgString
        titleNow.innerHTML = ourTitle
        paragNow.innerHTML = ourParag

        //inserisce gianubaldo in modale
        modal.appendChild(el)
        // inserisce immagine in gianubaldo
        el.appendChild(imgNow)
        //inserisce textcontainer in gianubaldo
        el.appendChild(elText)
        // inserisce testi in textcontainer più classi
        elText.appendChild(titleNow)
        elText.appendChild(paragNow)        
        titleNow.classList.add('peppino')
        paragNow.classList.add('mariateresa')
        

    }else if( arg === 'ILLUSTRATION'){

        let ourImg;
        let ourTitle;
        let ourParag;
        // dichiarazioni base
            ourImg = illustrationGallery[myIndex].style.backgroundImage
            ourTitle = illustrationGallery[myIndex].dataset.title
            ourParag = illustrationGallery[myIndex].dataset.value       
        
        // gestione per URL inline 
        let ourImgString = ourImg.slice(5)
        ourImgString = ourImgString.slice(0, -2)

        // creazione DIV contenitore padre e classe
        let el = document.createElement('div')
        el.classList.add('gianubaldo')

        // creato DIV contentore immagine e testo e la sua classe
        let elText = document.createElement('div')
        elText.classList.add('textContainer')
        elText.classList.add('my-auto')


        let imgNow = document.createElement('img')
        
        // manage arrow

        let arrowR = document.createElement('div')
        arrowR.classList.add('arrowR')

        let arrowL = document.createElement('div')
        arrowL.classList.add('arrowL')
        if(myIndex == 0){
            arrowL.style.display = 'none'
        }
        if(myIndex == illustrationGallery.length -1 ){
            arrowR.style.display = 'none'
        }
        arrowL.addEventListener("click", (event) => {
            event.stopPropagation()
            let ourDiv = document.querySelector('.gianubaldo')
            let arrowR = document.querySelector('.arrowR')
            let arrowL = document.querySelector('.arrowL')
            if(ourDiv){
                modal.removeChild(ourDiv)
            }
            if(arrowR && arrowL){
                modal.removeChild(arrowL)
                modal.removeChild(arrowR)
        
            }
            myIndex = myIndex - 1
            assignImages('ILLUSTRATION')
        });
        arrowR.addEventListener("click", (event) => {
            let ourDiv = document.querySelector('.gianubaldo')
            let arrowR = document.querySelector('.arrowR')
            let arrowL = document.querySelector('.arrowL')
            if(ourDiv){
                modal.removeChild(ourDiv)
            }
            if(arrowR && arrowL){
                modal.removeChild(arrowL)
                modal.removeChild(arrowR)
        
            }
            myIndex = myIndex + 1
            event.stopPropagation()
            assignImages('ILLUSTRATION')

        });

        modal.appendChild(arrowR)
        modal.appendChild(arrowL)

        let titleNow = document.createElement('h1')
        let paragNow = document.createElement('p')
        imgNow.src = ourImgString
        titleNow.innerHTML = ourTitle
        paragNow.innerHTML = ourParag

        // inserisco contenuto immagine
        el.appendChild(imgNow)
        //inserisco contenitore testi
        el.appendChild(elText)
        // inserisco contenuti del contenitore testo
        elText.appendChild(titleNow)
        elText.appendChild(paragNow)        
        titleNow.classList.add('peppino')
        paragNow.classList.add('mariateresa')
        modal.appendChild(el)    }else{

            let ourImg;
            let ourTitle;
            let ourParag;
            // dichiarazioni base
                ourImg = photoGallery[myIndex].style.backgroundImage
                ourTitle = photoGallery[myIndex].dataset.title
                ourParag = photoGallery[myIndex].dataset.value       
            
            // gestione per URL inline 
            let ourImgString = ourImg.slice(5)
            ourImgString = ourImgString.slice(0, -2)
    
            // creazione DIV contenitore padre e classe
            let el = document.createElement('div')
            el.classList.add('gianubaldo')
    
            // creato DIV contentore immagine e testo e la sua classe
            let elText = document.createElement('div')
            elText.classList.add('textContainer')
            elText.classList.add('my-auto')
    
    
            let imgNow = document.createElement('img')
            
            // manage arrow
    
            let arrowR = document.createElement('div')
            arrowR.classList.add('arrowR')
    
            let arrowL = document.createElement('div')
            arrowL.classList.add('arrowL')
            if(myIndex == 0){
                arrowL.style.display = 'none'
            }
            if(myIndex == photoGallery.length -1 ){
                arrowR.style.display = 'none'
            }
            arrowL.addEventListener("click", (event) => {
                event.stopPropagation()
                let ourDiv = document.querySelector('.gianubaldo')
                let arrowR = document.querySelector('.arrowR')
                let arrowL = document.querySelector('.arrowL')
                if(ourDiv){
                    modal.removeChild(ourDiv)
                }
                if(arrowR && arrowL){
                    modal.removeChild(arrowL)
                    modal.removeChild(arrowR)
            
                }
                myIndex = myIndex - 1
                assignImages('PHOTO')
            });
            arrowR.addEventListener("click", (event) => {
                let ourDiv = document.querySelector('.gianubaldo')
                let arrowR = document.querySelector('.arrowR')
                let arrowL = document.querySelector('.arrowL')
                if(ourDiv){
                    modal.removeChild(ourDiv)
                }
                if(arrowR && arrowL){
                    modal.removeChild(arrowL)
                    modal.removeChild(arrowR)
            
                }
                myIndex = myIndex + 1
                event.stopPropagation()
                assignImages('PHOTO')
    
            });
    
            modal.appendChild(arrowR)
            modal.appendChild(arrowL)
    
            let titleNow = document.createElement('h1')
            let paragNow = document.createElement('p')
            imgNow.src = ourImgString
            titleNow.innerHTML = ourTitle
            paragNow.innerHTML = ourParag
    
            // inserisco contenuto immagine
            el.appendChild(imgNow)
            //inserisco contenitore testi
            el.appendChild(elText)
            // inserisco contenuti del contenitore testo
            elText.appendChild(titleNow)
            elText.appendChild(paragNow)        
            titleNow.classList.add('peppino')
            paragNow.classList.add('mariateresa')
            modal.appendChild(el)
    }
}

// loop permette di utiizzare bottoni desktop e mobile

for(let i of graphicBtn){
    i.addEventListener("click", () => displayModal('GRAPHICS'));
}
for(let i of illustrationBtn){
    i.addEventListener("click", () => displayModal('ILLUSTRATION'));
}
for(let i of photoBtn){
    i.addEventListener("click", () => displayModal('PHOTOS'));
}

