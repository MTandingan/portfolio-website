const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#btn-modal-close");

function openModal(){
    modalOverlay.style.display = "flex";
    modal.classList.add("modal-open");
}

function closeModal(){
    modalOverlay.style.display = "none";
    modal.classList.remove("modal-open");
}

closeModalBtn.addEventListener('click', closeModal());

modalOverlay.addEventListener('click', (e) => {
    if(e.target == modalOverlay){
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape' && modalOverlay.style.display == "flex"){
        closeModal();
    }
});

