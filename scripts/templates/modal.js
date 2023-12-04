function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const modalContainer = document.getElementById("contact_modal")

// Display contact modal
function displayModal(photographerName) {
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

const modalContent = document.querySelector(".photograph-media-content")

// Display video modal for carrousel
function generateVideoModale(image){
  modalContent.innerHTML = `
            <img class= "close-arrow" src="assets/icons/close.svg" onclick="closeModal()" />
            <div class= "carrousel">
              <div class="lightbox-div">
                <video class="lightbox-video" title="${image.title}" controls>
                  <source src="${image.currentSrc}" type="video/mp4">
                </video>
                <figcaption class="lightbox-title">${image.title}</figcaption>
              </div>
            </div>
          `
}

// Display image modal for carrousel
function generatephotoModale(image) {
  console.log(modalContent)
  // modalContainer.style.display = "block"
          modalContent.innerHTML = `
            <img class= "close-arrow" src="assets/icons/close.svg" onclick="closeModal()" />
            <div class= "carrousel">
              <div class="lightbox-div">
                <img class= "lightbox-image" alt="${image.alt}" src="${image.currentSrc}" />
                <h2 class="lightbox-title">${image.alt}</h2>
              </div>
            </div>   
          `
}

// Display carrousel
const generateMediaCardDivListener = () => {
  const mediaCards = document.querySelectorAll(".mediaCardDiv")

  const paginator = changeImage(mediaCards)
  mediaCards.forEach(element => {
    element.addEventListener("click", e => {
      modalContainer.style.display = "block"
      const [imageChildren] = [...element.children]

      // Active the chevrons next and previous
      paginator.setCurrent(imageChildren)

        // Display video and image
        if (imageChildren.src.length === 0) {
          generateVideoModale(imageChildren)
        } else {
          generatephotoModale (imageChildren)
        }
    })
  }) 

  const toNext = () => {
    let suivant = paginator.nextImage()

    if (suivant.src.length === 0) {
      generateVideoModale(suivant)
    } else {
      generatephotoModale(suivant)
    }
  }

  const toPrev = () => {
    let precedent = paginator.prevImage()

    if (precedent.src.length === 0) {
      generateVideoModale(precedent)
    } else {
      generatephotoModale(precedent)
    }
  }

  // Active next chevron
  let next = document.getElementById("next")
  next.addEventListener("click", toNext)
  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 39) {
      return toNext()
    }
    if (e.keyCode === 37) {
      return toPrev()
    }
  })

  // Active previous chevron
  let prev = document.getElementById("prev")
  prev.addEventListener("click", toPrev)
}

// prepare a table with images and videos and find the current media
function changeImage(photographerMedia) {
  let imageArray = [...photographerMedia]
  let currentImage = 0

  function setCurrent(current) {
    currentImage = imageArray.findIndex(item => {
      let itemImage = item.children[0]
      return itemImage.src === current.src
    })
  }

  function prevImage() {
    
    if (currentImage === 0) {
      currentImage = imageArray.length-1
      return imageArray[currentImage].children[0]
      
    } else {
      currentImage--
      return imageArray[currentImage].children[0]
    } 
  }

  function nextImage() {

    if (currentImage === imageArray.length-1) {
      currentImage = 0
      return imageArray[0].children[0]
    } else {
      currentImage ++
      return imageArray[currentImage].children[0]
    }
  }

  return {prevImage, nextImage, setCurrent}
}