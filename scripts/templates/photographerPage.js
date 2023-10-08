function photographerTemplatePage(data) {
    const { name, id, city, country, tagline, portrait } = data

    const picture = `assets/photographers/${portrait}`

    function getUserCardDOMPage() {
        const article = document.createElement( 'article' )

        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", `${name}`)

        const photographersCardLink = document.createElement("a")
        photographersCardLink.setAttribute("href", `photographer.html?id=${id}`)
        photographersCardLink.className += "photographerLink"

        const h2 = document.createElement( 'h2' )
        h2.textContent = name

        const location = document.createElement( 'p' )
        location.textContent = `${city}, ${country}`
        location.className += "cityCountry"

        const photographersTagline = document.createElement( 'p' )
        photographersTagline.textContent = tagline
        photographersTagline.className += "tagLine"

        photographersCardLink.appendChild(img)
        photographersCardLink.appendChild(h2)

        article.appendChild(photographersCardLink)
        article.appendChild(location)
        article.appendChild(photographersTagline)

        return (article)
    }
    return { name, picture, getUserCardDOMPage }
}