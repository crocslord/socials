const socialLink = document.querySelector('#socialLink');
const profile = document.querySelector('#profile');
const title = document.querySelector('#title');

getJSON().then(data => {
    profile.src = data.user.profile;
    title.textContent = data.user.name;
    for (social in data.socials) {
        let items = Object.values(data.socials[social]);
        if (items[2] <= 0) { break }
        const a = document.createElement("a");
        const img = document.createElement("img");
        a.href = items[1];
        a.target = "_blank";
        img.src = items[2];
        img.alt = items[0];
        img.classList.add("socialLink");
        a.appendChild(img);
        socialLink.appendChild(a);
    }
})

async function getJSON() {
    const requestURL = './socials.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    return response.json();
}