const express = require("express");
const app = express();
const PORT = 8000;

const footballers = {
    neymar: {
        fullName: "Neymar da Silva Santos Júnior",
        birthYear: "5 February 1992",
        age: 30,
        nationality: "Brazilian"
    },
    kaka: {
        fullname: "Ricardo Izecson dos Santos Leite",
        birthYear: "5 February 1985",
        age: 37,
        nationality: "Brazilian"
    },
    unknown: {
        fullname: "unknown",
        birthYear: "unknown",
        age: "unknown",
        nationality: "unknown"
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
})

app.get("/api/:name", (request, response) => {
    const footballerName = request.params.name;
    if (footballers[footballerName]) {
        response.json(footballers[footballerName.fullName]);
    } else {
        response.json(footballers["unknown"]);
    }
});


app.listen(PORT, () => {
    console.log("Server is running in port " + PORT);
})
