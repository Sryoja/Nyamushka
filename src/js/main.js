

const cards = document.querySelectorAll('.cards__item');

cards.forEach(function(card, idx){
    const cardContent = card.querySelector(".card__content");
    const buyBtn = card.querySelector(".buy");
    const footerSelectedText = card.querySelector(".card__footer").dataset.text;
    const cardFooter = card.querySelector(".card__footer-msg:first-child");
    console.log(footerSelectedText);

    if (card.classList.contains("_disabled")){
        card.querySelector(".card__footer-msg:not(:last-child)").classList.add("hidden");
        card.querySelector(".card__footer-msg:last-child").classList.remove("hidden");
    }


    cardContent.addEventListener("click", () => {

        if (card.classList.contains("_disabled")){
            return
        }
        
        if (!card.classList.contains("_selected-hover")){
            card.classList.toggle("_selected");
        }
        
        if(!card.classList.contains("_selected") || card.classList.contains("_selected-hover")){
            card.classList.remove("_selected-hover")
        }
        if(card.classList.contains("_def-hover")){
            card.classList.remove("_def-hover")
        }
        
        if (card.classList.contains("_selected") || card.classList.contains("_selected-hover")){
            cardFooter.innerHTML = `${footerSelectedText}`;
        } else {
            cardFooter.innerHTML = 'Чего сидишь? Порадуй котэ, <a href="#" class="buy">купи</a><span>.</span>';
        }
    })

    buyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (card.classList.contains("_disabled")){
            return
        }

        if (!card.classList.contains("_selected-hover")){
            card.classList.toggle("_selected");
        }

        if(!card.classList.contains("_selected") || card.classList.contains("_selected-hover")){
            card.classList.remove("_selected-hover")
        }
        
        if(card.classList.contains("_def-hover")){
            card.classList.remove("_def-hover")
        }
    })

    cardContent.addEventListener("mouseleave", () => {

        if (card.classList.contains("_disabled")){
            return
        }

        if(card.classList.contains("_selected") || card.classList.contains("_selected-hover")){
            card.classList.remove("_selected")
            card.classList.add("_selected-hover")
        } else {
            card.classList.remove("_selected-hover")
            card.classList.add("_def-hover")
        }
    })
});

