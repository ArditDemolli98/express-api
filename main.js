'use strict'

const btn = document.querySelector("button");

btn.addEventListener("click", getApi);

async function getApi() {
    const input = document.querySelector("#footballer").value;
    try {
        const response = await fetch("/api/" + input);
        const data = await response.json();
        console.log(data);
        document.getElementById("footballer-name").innerText = data.fullName;
    } catch (error) {
        console.log(error);
    }
}