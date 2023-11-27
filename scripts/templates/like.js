const likeButton = document.querySelectorAll(".mediaLikeLogo")

likeButton.forEach((event) => {
    event.addEventListener("click", addLike())
})

async function addLike() {
    likes = document.target.value
    console.log(likes)
    const likesValue = likes.target.value
    console.log(likesValue)
    const {photographerMedia} = await getPhotographer()
    console.log(photographerMedia)
    likes++

    displayMediaPage(photographerMedia)

    
}