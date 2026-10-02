const params = new URLSearchParams(window.location.search);
const user = params.get("s");
const language = params.get("6");
// yes, I know that params with 1 letter is a bad choice,
// but I'm doing this with the intention of having a
// short website link + it's just a link page, it isn't
// something "special".

// ANONYMOUS
if (user === "m") {
    document.getElementById("title").textContent = "SM64IsDaBest";
}

// ENGLISH 
if (language === "4") {
    document.getElementById("splash_text").textContent = "Welcome! Here are my links!";
}