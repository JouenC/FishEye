// function photographerTemplatePage(data) {
//     const { name, city, country, tagline, portrait } = data

//     const picture = `assets/photographers/${portrait}`

//     function getUserCardDOMPage() {
//         const article = document.createElement( 'article' )

//         const img = document.createElement( 'img' )
//         img.setAttribute("src", picture)
//         img.setAttribute("alt", `${name}`)

//         const photographersCardLink = document.createElement("div")
//         photographersCardLink.className += "photographerDiv"

//         const h2 = document.createElement( 'h2' )
//         h2.textContent = name

//         const location = document.createElement( 'p' )
//         location.textContent = `${city}, ${country}`
//         location.className += "cityCountryPage"

//         const photographersTagline = document.createElement( 'p' )
//         photographersTagline.textContent = tagline
//         photographersTagline.className += "tagLinePage"

//         photographersCardLink.appendChild(h2)
//         photographersCardLink.appendChild(location)
//         photographersCardLink.appendChild(photographersTagline)

//         article.appendChild(photographersCardLink)
//         article.appendChild(img)

//         return (article)
//     }
//     return { name, picture, getUserCardDOMPage }
// }

function photographerTemplatePage(data) {
    const { name, city, country, tagline, portrait } = data

    const photographHeader = `
        <article class="cardPage">
            <p class="namePage">${name}</p>
            <p class="cityCountryPage">${city}, ${country}</p>
            <p class="tagLinePage">${tagline}</p>
        </article>
        <button class="contact_button" onclick="displayModal() aria-label="Bouton d'ouverture de la modal de contact">Contactez-moi</button>
        <img class="photographerLink" src="assets/photographers/${portrait}" alt="${name}">
    `
    const photographElt = document.querySelector(".photograph-header")
    photographElt.innerHTML += photographHeader
}