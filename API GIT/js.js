const bearer = ""
const body = document.querySelector("body")
const form = document.querySelector(".form")
const divContent = document.createElement("div")
divContent.classList.add("content")
const divInfos = document.createElement("div")
divInfos.classList.add("divInfos")
const divNumbers = document.createElement("div")
divNumbers.classList.add("divNumbers")
const repos = document.createElement("div")
repos.classList.add("Repos")
const followers = document.createElement("div")
followers.classList.add("followers")
const following = document.createElement("div")
following.classList.add("following")
const divInfoDetails = document.createElement("div")
divInfoDetails.classList.add("divInfoDetails")
const petiteInfos = document.createElement("div")
petiteInfos.classList.add("petiteInfos")
const plusPetiteInfos = document.createElement("div")
plusPetiteInfos.classList.add("plusPetiteInfos")

const ppGit = document.createElement("img")
const nameGit = document.createElement("p")
nameGit.classList.add("nameGit")
const loginGit = document.createElement("p")
loginGit.classList.add("loginGit")
const bioGit = document.createElement("p")
bioGit.classList.add("bioGit")
const dateBio = document.createElement("p")
const textRepos = document.createElement("p")
const numberRepos = document.createElement("p")
const textFollowers = document.createElement("p")
const numberFollowers = document.createElement("p")
const textFollowing = document.createElement("p")
const numberFollowing = document.createElement("p")
const position = document.createElement("p")
const link = document.createElement("p")
const twitter = document.createElement("p")
const bat = document.createElement("p")

body.appendChild(divContent)
divContent.appendChild(divInfos)
divInfos.appendChild(petiteInfos)
petiteInfos.appendChild(plusPetiteInfos)
petiteInfos.appendChild(ppGit)
plusPetiteInfos.appendChild(nameGit)
plusPetiteInfos.appendChild(loginGit)
plusPetiteInfos.appendChild(dateBio)
divInfos.appendChild(bioGit)
divContent.appendChild(divNumbers)
divNumbers.appendChild(repos)
repos.appendChild(textRepos)
repos.appendChild(numberRepos)
divNumbers.appendChild(followers)
followers.appendChild(textFollowers)
followers.appendChild(numberFollowers)
divNumbers.appendChild(following)
following.appendChild(textFollowing)
following.appendChild(numberFollowing)
divContent.appendChild(divInfoDetails)
divInfoDetails.appendChild(position)
divInfoDetails.appendChild(link)
divInfoDetails.appendChild(twitter)
divInfoDetails.appendChild(bat)

const btnCherche = document.getElementById("cherche")
const inputCherche = document.getElementById("recherche-git")

form.addEventListener("click", (res) => {
    res.preventDefault();
    fetch("https://api.github.com/users/" + inputCherche.value, {
        headers: {
            "authorization": "Bearer" + bearer
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            ppGit.src = data.avatar_url
            nameGit.textContent = data.name
            loginGit.textContent = `@${data.login}`
            bioGit.textContent = data.bio
            dateBio.textContent = `Joined at ${data.created_at}`
            textRepos.textContent = "Repos"
            numberRepos.textContent = data.public_repos
            textFollowers.textContent = "Followers"
            numberFollowers.textContent = data.followers
            textFollowing.textContent = "Following"
            numberFollowing.textContent = data.following
            position.textContent = data.location
            link.textContent = data.blog
            twitter.textContent = data.twitter_username
            bat.textContent = data.company
        })
})


