const sortButton = document.querySelectorAll(".dropdown-item")

async function sortMedia(event) {
    console.log(event)
    const sortValue = event.target.value
    const {photographerMedia} = await getPhotographer()
    console.log(photographerMedia)
    // if (sortValue === "Popularité") {
    //     event.sort((a, b) => {
    //       return b.likes - a.likes
    //     })
    // }

    // if (sortValue === "Date") {
    //     event.sort((a, b) => {
    //         return new Date(a.date) - new Date(b.date);
    //     })
    // }

    // if (sortValue === "Titre") {
    //     const byBase = sortBySensitivity('base')
    //     const event = [...strings].sort(byBase)
    //     return event
    // }
    displayMediaPage(photographerMedia.slice(0,2))
}

sortButton.forEach(item => {
    item.addEventListener("click", sortMedia)
})