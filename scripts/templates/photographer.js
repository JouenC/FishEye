function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const photographersCardLink = document.createElement("a")
        photographersCardLink.setAttribute("href", `photographer.html?id=${id}`)
        photographersCardLink.setAttribute("aria-label", `${name}`)
        photographersCardLink.className += "photographerLink"

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const location = document.createElement( 'p' )
        location.textContent = `${city}, ${country}`
        location.className += "cityCountry"

        const photographersTagline = document.createElement( 'p' )
        photographersTagline.textContent = tagline
        photographersTagline.className += "tagLine"

        const photographersPrice = document.createElement( 'p' )
        photographersPrice.textContent = `${price}€/jours`
        photographersPrice.className += "photographerPrice"

        photographersCardLink.appendChild(img)
        photographersCardLink.appendChild(h2)

        article.appendChild(photographersCardLink);
        article.appendChild(location);
        article.appendChild(photographersTagline);
        article.appendChild(photographersPrice);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}