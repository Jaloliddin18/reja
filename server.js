console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err);
    }
    else {
        user = JSON.parse(data);
    }
});

//1: Kirish Code
app.use(express.static("public")); // css va kerakli image larni public folder ichiga joylashtiramiz
app.use(express.json());  // kirib kelayotgan json formatdagi datani objectga ogirib beradi
app.use(express.urlencoded({ extended: true }));


//2: Session


//3: Viewsga boqliq kodlar
app.set("views", "views");
app.set("view engine", "ejs"); // backend ichida ejs orqali frontend yasaymiz


//4: Routing code
app.post("/create-item", (req, res) => {
    //TODO: code with db here
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
})


app.get("/", function (req, res) {
    res.render("harid")
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`)
});


