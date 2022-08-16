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

const postInstance = document.getElementById("post");


for (let i = 0; i < posts.length;i++) {
    let heartState = false;
    postInstance.innerHTML += `
        <div class="container">
            <div class="post-head">
                <img class="post-avatar avatar" src="${posts[i].avatar}" alt="Van Gogh Avatar">
                <div class="post-head-details">
                    <span class="artist-name">${posts[i].name}</span>
                    <span class="artist-location">${posts[i].location}</span>
                </div>
            </div>
            <div class="post-image">
                <img src="${posts[i].post}" alt="Portait of ${posts[i].name}">
            </div>
            <div class="post-foot">
                <div class="post-foot-details">
                    <span class="post-interaction">
                        <i class="fa-duotone fa-heart icon-heart" id="likePost" onclick="myLikeFunction(${i},${heartState})"></i>
                        <i class="fa-regular fa-message icon-comment"></i>
                        <i class="fa-regular fa-paper-plane-top icon-dm" id="dmPost" onclick="myDmFunction(${i})"></i>
                    </span>
                    <span class="post-likes" id="post-likes">${posts[i].likes} likes</span>
                    <span class="post-comments"><b>${posts[i].username}</b>&nbsp;${posts[i].comment}</span>
                </div>
            </div>
            <div class="post-divider">
            </div>
        </div>`
}

    function myLikeFunction(i, heartState) {
        const postLike = document.getElementById("post-likes");

        if (heartState === false) {
            console.log(`button clicked ${posts[i].likes}`);
            posts[i].likes = posts[i].likes + 1;
            console.log(posts[i].likes);
            console.log(postLike.innerText);
            postLike.innerText = `${posts[i].likes} likes`;
            heartState = true;
            console.log(heartState);
            // return heartState;
        } else {
            console.log('hello');
        } return heartState;
    }


function myDmFunction(){
    const postDM = document.getElementById("dmPost");
    postDM.style.color = "red";
    alert(`dm sent!`);
}