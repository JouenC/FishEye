const sortButton = document.querySelectorAll(".dropdown-item")
const dropdown = document.querySelector(".dropdown")

// Listen change on the dropdown
dropdown.addEventListener("change", async (e) => {
    const {photographerMedia} = await getPhotographer()
    const sortValue = e.target.value
    
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
})