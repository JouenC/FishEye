const sortButton = document.querySelectorAll(".dropdown-item")

async function sortMedia(event) {
    console.log(event)
    const sortValue = event.target.value
    console.log(sortValue)
    const {photographerMedia} = await getPhotographer()
    console.log(photographerMedia)

    if (sortValue === "Popularité") {
        photographerMedia.sort((a, b) => {
          return b.likes - a.likes
        })
        displayMediaPage(photographerMedia)
    }

    if (sortValue === "Date") {
        photographerMedia.sort((a, b) => {
            return new Date(a.date) - new Date(b.date)
        })
        displayMediaPage(photographerMedia)
    }

    if (sortValue === "Titre") {
        photographerMedia.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
              } else {
                return 1;
              }})
        displayMediaPage(photographerMedia)
    }
}

sortButton.forEach(item => {
    item.addEventListener("click", sortMedia)
})