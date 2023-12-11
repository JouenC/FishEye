// Add or remove like
const addLike = (e) => {
    likes = e.target.parentNode.parentNode.innerText
    mediaLike = e.target.parentNode.parentNode.children[0]
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
    TotalLikeManager ()
}

// Listen all like button
const likeManager = ()  => {
    const likeButton = document.querySelectorAll(".mediaLikeLogo")
    likeButton.forEach((event) => {
    event.addEventListener("click", addLike)
    })   
}

// Add or remove like in the footer
const TotalLikeManager = () => {
    const totalLike = document.querySelectorAll(".mediaLikeCount")
    const res = Array.from(totalLike).reduce((acc, node) => {
        return Number(node.innerHTML) + acc
    }, 0)
    let totalLikeCount = document.querySelector("#totalLikesCount")
    totalLikeCount.innerHTML = res
}

