const btn = document.querySelector(".btn-container");
const closebtn = document.querySelector(".close-btn");
const modal= document.querySelector(".modal-container");

btn.addEventListener("click", () => {
 modal.style.display = "block";
});
closebtn.addEventListener("click", () => {
    modal.style.display = "none";
   });
window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});