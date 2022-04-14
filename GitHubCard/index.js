import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

    
*/

const followers =['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']

for (let i = 0; i < followers.length; i++) {
  getGitCard(followers[i]);
}


function getGitCard(username) {
axios.get(`https://api.github.com/users/${username}`)
.then(resp => {
 document.querySelector('.cards').appendChild(githubCard(resp.data));
})
.catch(err => console.error(err))
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/


    function githubCard(gitInfo) {
const card = document.createElement('div');
const image = document.createElement('img');
const info = document.createElement('div');
const name = document.createElement('h3');
const login = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const proflink = document.createElement('a');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');


card.classList.add('card');
info.classList.add('card-info');
name.classList.add('name');
login.classList.add('username')

image.src= gitInfo.avatar_url;
image.alt="github user";
name.textContent = gitInfo.name;
login.textContent = gitInfo.login;
location.textContent = gitInfo.location;
profile.textContent = 'Profile: ';
proflink.textContent = 'link to profile';
proflink.href = gitInfo.html_url;
followers.textContent = `Followers:  ${gitInfo.followers}`;
following.textContent = `Following:  ${gitInfo.following}`;
bio.textContent = `Bio:  ${gitInfo.bio}`;



card.appendChild(image);
card.appendChild(info);
info.appendChild(name);
info.appendChild(login);
info.appendChild(location);
info.appendChild(profile);
profile.appendChild(proflink);
info.appendChild(followers);
info.appendChild(following);
info.appendChild(bio);


return card
}



  /*
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p> 
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
