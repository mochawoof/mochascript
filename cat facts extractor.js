//For https://cvillecatcare.com/veterinary-topics/101-amazing-cat-facts-fun-trivia-about-your-feline-friend/
let a = document.querySelectorAll("li");
let out = [];
for (let i=0; i < a.length; i++) {
    let b = a[i];
    if (b.classList.length == 0 && b.id == "") {
        out.push(b.innerText);
    }
};
console.log(JSON.stringify(out));