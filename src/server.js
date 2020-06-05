const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {

    return res.render("index.html")

})

server.get("/create-points", (req, res) => {

    return res.render("create-points.html")

})

server.get("/search-results", (req, res) => {

    return res.render("search-results.html")

})

server.listen(3000)



