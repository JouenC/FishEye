// function displayModal() {
//     const modal = document.getElementById("contact_modal");
// 	modal.style.display = "block";
// }

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const modalContainer = document.getElementById("contact_modal")
console.log(modalContainer)
// const openModal = document.querySelectorAll(".photographerLink")
// console.log(openModal)
// const modalBtn = document.querySelector(".openModal")
// console.log(modalBtn)
// openModal.addEventListener("click", displayModal())

function displayModal(photographerName) {
  // const photographerName = document.getElementById("namePage")
  // console.log(photographerName)
  modalContainer.style.display = "block"
  modalContainer.innerHTML = `
    <div class="modal">
			<header>
        <h2>
          Contactez-moi </br>
          ${photographerName}
        </h2>
        <img src="assets/icons/close-white.svg" onclick="closeModal()" />
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
		</div>
  `
}

const generateMediaCardDivListener = () => {
  const mediaCards = document.querySelectorAll(".mediaCardDiv")
  console.log(mediaCards)

  // const paginator = changeImage(mediaCards)
  mediaCards.forEach(element => {
    element.addEventListener("click", e => {
      console.log([...element.children].at(0))
      const [imageChildren] = [...element.children]
        if (imageChildren.src.length === 0) {
          console.log("OKI")
          modalContainer.style.display = "block";
          modalContainer.innerHTML = `
            <img class= "close-arrow" src="assets/icons/close.svg" onclick="closeModal()" />
            <div class= "carrousel">
              <div class="lightbox-div">
                <video class="lightbox-video" title="${imageChildren.title}" controls>
                  <source src="${imageChildren.currentSrc}" type="video/mp4">
                </video>
                <figcaption class="lightbox-title">${imageChildren.title}</figcaption>
              </div>
            </div>
            <i class="fa-solid fa-chevron-left" onclick="prevImage()"></i>
            <i class="fa-solid fa-chevron-right" onclick="nextImage()"></i>
          `
        } else {
          modalContainer.style.display = "block";
          modalContainer.innerHTML = `
            <img class= "close-arrow" src="assets/icons/close.svg" onclick="closeModal()" />
            <div class= "carrousel">
              <div class="lightbox-div">
                <img class= "lightbox-image" alt="${imageChildren.alt}" src="${imageChildren.currentSrc}" />
                <h2 class="lightbox-title">${imageChildren.alt}</h2>
              </div>
            </div>
            <i class="fa-solid fa-chevron-left" onclick="prevImage()"></i>
            <i class="fa-solid fa-chevron-right" onclick="nextImage()"></i>   
          `
        }
    })
  })   
}

function changeImage(photographerMedia) {
  let imageArray = photographerMedia
  let currentImage = imageArray.findIndex(item => item === current)

  function prevImage() {

    if (currentImage > 0) {
      currentImage--
      return imageArray[currentImage]
    } if (currentImage === 0)
      currentImage === imageArray.length + 1
      return imageArray[currentImage]
  }

  function nextImage() {
    if (currentImage === imageArray.length +1) {
      currentImage === 0
      return imageArray[currentImage]
    } else
      currentImage ++
      return imageArray[currentImage]
  }

  return {prevImage, nextImage}
}