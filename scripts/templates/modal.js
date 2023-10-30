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

const form = `    <div class="modal">
				<header>
          <h2>Contactez-moi</h2>
          <img src="assets/icons/close.svg" onclick="closeModal()" />
        </header>
				<form>
					<div>
						<label for="firstname">Prénom</label>
						<input type="text" name="firstname" id="firstname"/>
					</div>
          <div>
						<label for="lastname">Nom</label>
						<input type="text" name="lastname" id="lastname"/>
					</div>
          <div>
						<label for="email">Email</label>
						<input type="email" name="email" id="email"/>
					</div>
          <div>
						<label for="textarea">Votre Message</label>
						<textarea type="text" name="textarea" id="textarea"></textarea>
					</div>
          <button class="contact_button">Envoyer</button>
				</form>
			</div>`
}

const generateMediaCardDivListener = () => {
    const mediaCards = document.querySelectorAll(".mediaCardDiv")
    console.log(mediaCards)
    mediaCards.forEach(element => {
        element.addEventListener("click", e => {
            console.log([...element.children].at(0))
            const [imageChildren] = [...element.children]
            console.log(imageChildren.src)
            console.log(imageChildren.currentSrc)
            if (imageChildren.src.length === 0) {
              console.log("OKI")
              modalContainer.style.display = "block";
              modalContainer.innerHTML = `
                <img class= "close-arrow" src="assets/icons/close.svg" onclick="closeModal()" />
                <video class="lightbox-video" title="${imageChildren.title}" controls>
                  <source src="${imageChildren.currentSrc}" type="video/mp4">
                </video>
                <figcaption class="lightbox-title">${imageChildren.title}</figcaption>
              `
            } else {
              modalContainer.style.display = "block";
              modalContainer.innerHTML = `
                <img class= "close-arrow" src="assets/icons/close.svg" onclick="closeModal()" />
                <img class= "lightbox-video" title="${imageChildren.title}" src="${imageChildren.currentSrc}" />
                <h2 class="lightbox-title">${imageChildren.title}</h2>
              `
            }
        })
    })
}