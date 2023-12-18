const sortButton = document.querySelectorAll(".dropdown-item")

// Catch photographers' image
async function sortMedia(event) {
    const sortValue = event.target.value
    const {photographerMedia} = await getPhotographer()

    // Sort based like
    if (sortValue === "Popularité") {
        photographerMedia.sort((a, b) => b.likes - a.likes)
        displayMediaPage(photographerMedia)
    }

    // Sort based date
    if (sortValue === "Date") {
        photographerMedia.sort((a, b) => new Date(a.date) - new Date(b.date))
        displayMediaPage(photographerMedia)
    }

    // Sort alphabetically
    if (sortValue === "Titre") {
        photographerMedia.sort((a, b) => a.title.localeCompare(b.title))
        displayMediaPage(photographerMedia)
    }
}

sortButton.forEach(item => {
    item.addEventListener("click", sortMedia)
})

sortButton.forEach(item => {
    item.addEventListener("keyup", e => {
        if (e.key === 13) {
            item.click()
        }
    })
})

sortButton.onclick = function() {
    alert('Clicked!');
}