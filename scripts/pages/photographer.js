// Récupère les éléments de l'URL les transformant en un couple clé/valeur
const getUrlQuery = (param) => {
    const searchParams = new URLSearchParams(document.location.href.split("?")[1])

    // Iterating the search parameters
    for (const [key, value] of searchParams) {
        if (key === param) {
            return value
        }
    }
}

//Récupère les data en fonction de l'Id de l'URL
async function getPhotographer() {
    try {
        const response = await fetch("data/photographers.json")
        const data = await response.json()
        const id = getUrlQuery("id")
        
        // Recherche dans les data le photographe correspnodant à l'Id
        const photogarpherData = data.photographers.find((photographer) => photographer.id === Number(id))

        const {media} = data
        const photographerMedia = media.filter(item => item.photographerId === parseInt(id));
        return {photogarpherData, photographerMedia}
    } catch (error) {
        console.error(error)
    }
}

// Display photographers' media
async function displayMediaPage(photographerMedia) {
    const mediaSection = document.querySelector(".photograph-media")
    mediaSection.innerHTML = ""
    photographerMedia.forEach(media => {
        const {getMediaCardDOM} = mediaFactory(media)
        const article = getMediaCardDOM()
        mediaSection.appendChild(article)
    })
    generateMediaCardDivListener()
}

// Initialise l'affichage de la page
async function initPage() {
    // Récupère les datas des photographes
    const {photogarpherData, photographerMedia} = await getPhotographer()
    photographerTemplatePage(photogarpherData)
    displayMediaPage(photographerMedia)
    renderFooter(photogarpherData)
}

initPage()

