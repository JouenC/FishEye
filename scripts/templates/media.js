function mediaFactory(data) {
    // Destructuring the data object to extract its properties
    const { id, photographerId, title, image, video, likes } = data
  
    // Defining a function that will return a DOM element for the media card
    function getMediaCardDOM() {
      // Create an article element to contain the media card
      const article = document.createElement("article")
      article.className += "mediaCard"
      article.id = id
      
  
      // If the media is an image add the appropriate media card html to the article element
      if (image) {
        article.innerHTML = `
        <div class="mediaCardDiv" aria-label="Bouton d'ouverture de lightbox" tabindex="0">
          <img class="mediaCardImage" id="${id}" src="assets/images/${photographerId}/${image}" alt="${title}">
        </div>
        <section class="mediaCardInfo">
          <h2 class="mediaCardTitle">${title}</h2>
          <div class="mediaLikeContainer">
            <span class="mediaLikeCount" id="likeButton-${id}">${likes}</span>
            <div class="mediaLikeButton" aria-label="Cliquer pour liker">
              <i class="mediaLikeLogo fa-heart fa-solid" id="media-like-button-${id}"></i>
            </div>
          </div>
        </section>
      `
      }
  
      // If the media is a video add the appropriate media card html to the article element
      if (video) {
        article.innerHTML = `
        <div class="mediaCardDiv" aria-label="Bouton d'ouverture de lightbox">
          <video class="mediaCardVideo" id="${id}" title="${title}">
            <source src="assets/images/${photographerId}/${video}" type="video/mp4">
          </video>
        </div>
        <section class="mediaCardInfo">
          <h2 class="mediaCardTitle">${title}</h2>
          <div class="mediaLikeContainer">
            <span class="mediaLikeCount">${likes}</span>
            <div class="mediaLikeButton" aria-label="Cliquer pour liker">
              <i class="mediaLikeLogo fa-heart fa-solid"></i>
            </div>
          </div>
        </section>
      `
      }
  
      // Return the article element
      return article;
    }
  
    // Returning an object with the getMediaCardDOM function
    return { getMediaCardDOM };
  }

function renderFooter(data) {
  // Destructuring the photographer info object to extract the photographer price
  const { price } = data

  // Calculate total media likes count and store it in a variable
  const mediaLikeCount = document.querySelectorAll(".mediaLikeCount")
  let totalMediaLikeCount = 0

  mediaLikeCount.forEach((media) => {
    totalMediaLikeCount += Number(media.textContent)
  })

  // Create the HTML for the footer section
  const photographFooter = `
    <div class="footerDiv">
      <div class="footerInfo">
        <span class="footerLike" id="totalLikesCount">${totalMediaLikeCount}</span>
        <i class="footerHeart fa-solid fa-heart"></i>
      </div>
      <div class="footerPrice">
        ${price} € / jour
      </div>
    </div>
  `

  // Add the footer section HTML to the footer element
  const footer = document.querySelector(".footer")
  footer.innerHTML = photographFooter
}