const sortButton = document.querySelectorAll(".dropdown-item")

async function sortMedia(event) {
    const sortValue = event.target.value
    const {photographerMedia} = await getPhotographer()

    if (sortValue === "Popularité") {
        photographerMedia.sort((a, b) => b.likes - a.likes)
        displayMediaPage(photographerMedia)
    }

    if (sortValue === "Date") {
        photographerMedia.sort((a, b) => new Date(a.date) - new Date(b.date))
        displayMediaPage(photographerMedia)
    }

    if (sortValue === "Titre") {
        photographerMedia.sort((a, b) => a.title.localeCompare(b.title))
        displayMediaPage(photographerMedia)
    }
}

sortButton.forEach(item => {
    item.addEventListener("click", sortMedia)
})