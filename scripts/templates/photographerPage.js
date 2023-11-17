function photographerTemplatePage(data) {
    const { name, city, country, tagline, portrait } = data

    const photographHeader = `
        <article class="cardPage">
            <p id="namePage" class="namePage">${name}</p>
            <p class="cityCountryPage">${city}, ${country}</p>
            <p class="tagLinePage">${tagline}</p>
        </article>
        <button class="contact_button" aria-label="Bouton d'ouverture de la modal de contact">Contactez-moi</button>
        <img class="photographerLink" src="assets/photographers/${portrait}" alt="${name}">
    `
    const photographElt = document.querySelector(".photograph-header")
    photographElt.innerHTML += photographHeader

    const contactBttn = document.querySelector(".contact_button")
    contactBttn.addEventListener("click", e => {
        console.log("name")
        displayModal(name)
    })
}