function closeModal() {
    const modal = document.getElementById("contact_modal")
    modal.style.display = "none"
    // modalContainer.innerHTML = ""
}

// Close modal with escape key
window.addEventListener("keydown", (e) =>{
  if (e.keyCode === 27) {
    return closeModal()
  }
})

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
			<form id="modalForm">
				<div>
					<label for="firstname">Prénom</label>
					<input type="text" name="firstname" id="firstName"/>
				</div>
        <div>
					<label for="lastname">Nom</label>
					<input type="text" name="lastname" id="lastName"/>
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

function validateModalForm(event) {

  // Prevent the default form submission
  event.preventDefault()

  // Get the elements of the modal form and its inputs
  const modalForm = document.getElementById("contact_modal")
  const modal = document.getElementById("modalForm")
  const firstName = document.getElementById("firstName")
  const lastName = document.getElementById("lastName")
  const email = document.getElementById("email")
  const message = document.getElementById("textarea")

  // for (let value of modal) {
  //   console.log(value.innerHTML)
  //   if (value.innerHTML === "") {
  //     console.log('error')
  //   } else { if (modal.checkValidity()) {
  //     console.log({
  //       firstName: firstName.value,
  //       lastName: lastName.value,
  //       email: email.value,
  //       message: message.value,
  //     })
  //     modalForm.style.display = "none"
  //   }}
  // }

  // Check if the form input data is valid and console.log
  if (modal.checkValidity()) {
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    })
    modalForm.style.display = "none"
  }
}

// Add an event listener to validate the contact modal form on submit
const modalForm = document.getElementById("contact_modal")
modalForm.addEventListener("submit", validateModalForm)

// const modal = document.getElementById("modalForm")
// const modalForm = document.getElementById("contact_modal")
// const validator = (e) => Boolean(e) === true
// console.log(modal)
// let formulaire = {}
// modalForm.addEventListener("submit", function(e) {
//   e.preventDefault()
//   console.log(modalForm)
//   const formData = new FormData(modalForm)
  
//   for (let [key, value] of formData) {
//     if(validator(value)) {
//       formulaire = {...formulaire, [key]:value}
//     } else {
//       formulaire = {...formulaire, [key]:"Error"}
//     }
//   }
//   console.log(formulaire)
// })

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

  // mediaCards.forEach(element => {
  //   element.addEventListener("keypress", (e) => {
  //     if (e.keyPress === "enter") {
  //     console.log("ok")
  //     }
  //   })
  // })

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