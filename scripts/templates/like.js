const addLike = (e) => {
    console.log("click réussi", e)
    likes = e.target.parentNode.parentNode.innerText
    mediaLike = e.target.parentNode.parentNode.children[0]
    console.log(likes, mediaLike)
    let additionLike
    if (e.target.classList.contains("like")) {
        additionLike = Number(likes)-1
        console.log(additionLike)
        mediaLike.textContent = additionLike
        e.target.classList.remove("like")
    } else {
        additionLike = Number(likes)+1
        mediaLike.textContent = additionLike
        e.target.classList.add("like")
    }

    // const likesValue = likes.target.value
    // console.log(likesValue)
    // const {photographerMedia} = getPhotographer()
    // console.log(photographerMedia)
    // likes++

    // renderFooter(data)
}

const likeManager = ()  => {
    const likeButton = document.querySelectorAll(".mediaLikeLogo")
    console.log(likeButton)
    likeButton.forEach((event) => {
    event.addEventListener("click", addLike)
    })   
}

