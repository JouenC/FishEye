// function displayModal() {
//     const modal = document.getElementById("contact_modal");
// 	modal.style.display = "block";
// }

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const modalContainer = document.getElementById("contact_modal")
// console.log(modalContainer)
// const modalBtn = document.querySelector(".openModal")
// console.log(modalBtn)
// modalBtn.addEventListener("click", displayModal())

function displayModal(){
    modalContainer.classList.toggle("active")
}

// function displayModal() {
//     // Get the modal element
//     const modal = document.getElementById("contactModal");
//     // Get the header, main and footer elements
//     const header = document.querySelector("header");
//     const main = document.querySelector("main");
//     const footer = document.querySelector("footer");
  
//     // Display the modal
//     modal.showModal();
//     modal.style.display = "flex";
//     // Set the aria-hidden attribute of the modal to false to indicate that it is visible
//     modal.setAttribute("aria-hidden", "false");
//     // Set the aria-hidden attribute of the header, main and footer elements to true to indicate that they are hidden
//     header.setAttribute("aria-hidden", "true");
//     main.setAttribute("aria-hidden", "true");
//     footer.setAttribute("aria-hidden", "true");
//   }