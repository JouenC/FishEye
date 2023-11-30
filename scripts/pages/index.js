// Recover photographers' data
async function getPhotographers() {
    try {
        const response = await fetch("data/photographers.json")
        const data = await response.json()
        return data.photographers
    } catch (error) {
        console.error(error)
    }
}

// Display photographers' data
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section")

    // Build each photographers' summary
    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
    });
}

// Start page' display
async function init() {

    // Catch photographers' data
    const photographers = await getPhotographers()
    displayData(photographers)
}

init();