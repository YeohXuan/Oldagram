const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainSection = document.getElementById("main")

for (let i = 0; i < posts.length; i++) {
    const display = `
            <section>
                <div class="user-info">
                    <img src="${posts[i].avatar}" alt="Avatar of Vincent van Gogh" class="user-avatar">
                    <div class="name-place">
                        <p class="username">${posts[i].name}</p>
                        <p class="place">${posts[i].location}</p>
                    </div>
                </div>
                <img src="${posts[i].post}" alt="A selfie by van Gogh but it's an art" class="selfie-art">
                <div class="post-info">
                    <div class="btns">
                        <img src="images/icon-heart.png" alt="Heart button" class="heart-btn btn">
                        <img src="images/icon-comment.png" alt="Comment button" class="cmt-btn btn">
                        <img src="images/icon-dm.png" alt="Share button" class="share-btn btn">                    
                    </div>
                    <p class="likes"><span class="like-count">${posts[i].likes}</span> likes</p>
                    <p class="comment"><span class="commenter">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </section>
    `

    mainSection.innerHTML += display
}

document.querySelectorAll('.heart-btn').forEach((heartIcon, index) => {
    let isLiked = false

    heartIcon.addEventListener('click', () => {
        const likeEl = document.querySelectorAll('.like-count')[index]
        const currentLikes = parseInt(likeEl.textContent, 10)

            if (isLiked) {
                heartIcon.src = "images/icon-heart.png"
                likeEl.textContent = `${currentLikes - 1}`
            } else {
                heartIcon.src = "images/red-heart.png"
                likeEl.textContent = `${currentLikes + 1}`
            }

        isLiked = !isLiked
    })
})