async function newJoke() {
    url = "https://icanhazdadjoke.com";

    let response = await fetch(url, {method: "GET", headers: {Accept: "text/plain"}});

    let newJoke = await response.text();

    document.getElementById("dad-joke").innerText = newJoke;
}

