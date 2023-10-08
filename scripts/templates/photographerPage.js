function photographerTemplatePage(data) {
    const { name, id, city, country, tagline, portrait } = data

    const picture = `assets/photographers/${portrait}`

    function getUserCardDOMPage() {
        const article = document.createElement( 'article' )

        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", `${name}`)

        const photographersCardLink = document.createElement("div")
        photographersCardLink.className += "photographerDiv"

        const h2 = document.createElement( 'h2' )
        h2.textContent = name

        const location = document.createElement( 'p' )
        location.textContent = `${city}, ${country}`
        location.className += "cityCountryPage"

        const photographersTagline = document.createElement( 'p' )
        photographersTagline.textContent = tagline
        photographersTagline.className += "tagLinePage"

        photographersCardLink.appendChild(h2)
        photographersCardLink.appendChild(location)
        photographersCardLink.appendChild(photographersTagline)

        article.appendChild(photographersCardLink)
        article.appendChild(img)

        return (article)
    }
    return { name, picture, getUserCardDOMPage }
}