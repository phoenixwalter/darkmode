let mode = "light";
const darkmodeElements = document.querySelectorAll(".darkmode");
const darkmodeColors = [
    //body
    {dark: '#1e1e1e', light: 'white'},

    //card
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},

    //accordion
    {dark: '#1e1e1e', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#1e1e1e', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#1e1e1e', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#1e1e1e', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#1e1e1e', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'},
    {dark: '#212529', light: '#FAFAFA'}
];
console.log(darkmodeElements)
toggleDarkmode();

function toggleDarkmode(){
    const darkModeButton = document.getElementById("dark-mode-button");
    if (mode == "dark"){
        darkModeButton.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
        mode = "light";
        toggleNav();
        toggleText();
        toggleBody();
    }
    else{
        darkModeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        mode = "dark";
        toggleNav();
        toggleText();
        toggleBody();
    }
}
function toggleNav(){
    const nav = document.getElementById("nav");
    const offCanvas = document.getElementById("navbar");
    const dropdown = document.getElementById("dropdown");
    const search = document.getElementById("search");
    if (mode == "light"){
        nav.classList.remove("navbar-dark"); nav.classList.add("navbar-light");
        nav.classList.remove("bg-dark"); nav.classList.add("bg-light");
        offCanvas.classList.remove("text-bg-dark"); offCanvas.classList.add("text-bg-light");
        dropdown.classList.remove("dropdown-menu-dark"); dropdown.classList.add("dropdown-menu-light");
        search.classList.remove("text-bg-dark"); search.classList.add("text-bg-light");
        
        const activeNav = document.querySelectorAll(".nav-active");
        activeNav.forEach((item) => {
            item.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        });
    }
    else{
        nav.classList.remove("nabar-light"); nav.classList.add("navbar-dark");
        nav.classList.remove("bg-light"); nav.classList.add("bg-dark");
        offCanvas.classList.remove("text-bg-light"); offCanvas.classList.add("text-bg-dark");
        dropdown.classList.remove("dropdown-menu-light"); dropdown.classList.add("dropdown-menu-dark");
        search.classList.remove("text-bg-light"); search.classList.add("text-bg-dark");

        const activeNav = document.querySelectorAll(".nav-active");
        activeNav.forEach((item) => {
            item.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        });
    }
}
function toggleText(){
    if (mode == "light"){
        const text = document.querySelectorAll(".text-darkmode");
        text.forEach((item) => {
            item.style.color = "black";
        });
    }
    else{
        const text = document.querySelectorAll(".text-darkmode");
        text.forEach((item) => {
            item.style.color = "white";
        });
    }
}
function toggleBody(){
    if (mode == "light"){
        for(let i = 0; i < darkmodeElements.length; i++){
            darkmodeElements[i].setAttribute('style', `background-color: ${darkmodeColors[i].light} !important`);
        }
    }
    else{
        for(let i = 0; i < darkmodeElements.length; i++){
            darkmodeElements[i].setAttribute('style', `background-color: ${darkmodeColors[i].dark} !important`);
        }
    }
}

function changeImage(){
    if (mode == "light"){
        document.getElementById("image").innerHTML = `<img src="Images/Light.jpg" class="card-img-top" alt="fileFailedToLoad"></img>`;
    }
    else{
        document.getElementById("image").innerHTML = `<img src="Images/Dark.jpg" class="card-img-top" alt="fileFailedToLoad"></img>`;
    }
}

function changeText(){
    if (mode == "light"){
        document.getElementById("cardTitle").innerHTML = `Light Mode`;
        document.getElementById("cardText").innerHTML = `Light mode has multiple benefits such as high contrast and clearity; suitaible for long paragraphs and a load of information.`;
    }
    else{
        document.getElementById("cardTitle").innerHTML = `Dark Mode`;
        document.getElementById("cardText").innerHTML = `Dark mode has multiple benefits such as eye strain reduction and battery saving while improving focus and enhancing readability.`;
    }
}