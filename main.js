$(document).ready(function () {
    const endpoint = "https://api.github.com/users/biali-dev"
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    $.ajax (endpoint).done(function (resposta) {
        nameElement.innerText = resposta.name
        usernameElement.innerText = `@${resposta.login}`
        reposElement.innerText = resposta.public_repos
        followersElement.innerText = resposta.followers
        followingElement.innerText = resposta.following
        linkElement.href = resposta.html_url
    })
})