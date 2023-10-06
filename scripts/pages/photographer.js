//Récupère les data en fonction de l'Id de l'URL
async function getPhotographer() {
    try {
        const response = await fetch("data/photographers.json")
        const data = await response.json()
        const id = getUrlQuery("id")
        
        // Recherche dans les data le photographe correspnodant à l'Id
        const photogarpherPage = data.photographers.find((photographer) => photographer.id === Number(id))
        console.log(photogarpherPage)
        return photogarpherPage
    } catch (error) {
        console.error(error)
    }
}

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

async function displayDataPage(photographer) {
    const photographersSection = document.querySelector(".photograph-header")
    console.log(photographer)
    const photographerModel = photographerTemplatePage(photographer);
    console.log(photographerModel)
    const userCardDOM = photographerModel.getUserCardDOMPage();
    photographersSection.appendChild(userCardDOM);
    
}

async function initPage() {
    // Récupère les datas des photographes
    const photogarpherPage = await getPhotographer()
    console.log(">>>", photogarpherPage)
    displayDataPage(photogarpherPage)
}

initPage()

