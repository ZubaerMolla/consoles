function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
    function displayPosts(posts){
        const postContainer = document.getElementById('posts')
        for(const post of posts){
            const div = document.createElement('div');
            div.classList.add('post')
            div.innerHTML = `
            <h3>${post.body}</h3>
            <p>New Description </p>`;
            postContainer.appendChild(div);
            console.log(post)
        }
}

function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            body: 'This is my new post',
        }),
        headers:{
            'content-type': 'application/json; charset=UTF-8'
        }
    })
}
