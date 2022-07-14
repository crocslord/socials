const socialLink = document.querySelector('#socialLink')

getSocials().then(data => {
    for(social in data){
        let items = Object.values(data[social]);
        if(items[2] <= 0){ break }
        const a = document.createElement("a");
        const img = document.createElement("img");
        a.href=items[1];
        a.target="_blank";
        img.src=items[2];
        img.alt=items[0];
        img.classList.add("socialLink");
        a.appendChild(img);
        socialLink.appendChild(a);
    }
})

async function getSocials(){
    const requestURL = './socials.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    return response.json();
}