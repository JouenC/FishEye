// Display photographers' information
function photographerTemplatePage(data) {
    const { name, city, country, tagline, portrait } = data

    const photographHeader = `
        <article class="cardPage">
            <h1 id="namePage" class="namePage">${name}</h1>
            <p class="cityCountryPage">${city}, ${country}</p>
            <p class="tagLinePage">${tagline}</p>
        </article>
        <button class="contact_button" aria-label="Bouton d'ouverture de la modal de contact">Contactez-moi</button>
        <img class="photographerLink" src="assets/photographers/${portrait}" alt="${name}">
    `
    const photographElt = document.querySelector(".photograph-header")
    photographElt.innerHTML += photographHeader

    // Contact button
    const contactBttn = document.querySelector(".contact_button")
    contactBttn.addEventListener("click", e => {
        displayModal(name)
    })
}