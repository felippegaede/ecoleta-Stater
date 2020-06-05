const express = require("express")
const server = express()

const db = require("./database/db")

server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

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

server.post("/create-points", (req, res) => {

    const query = `insert into places (image, name, address, address_number, state, city, items) values (?,?,?,?,?,?,?);`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address_number,
        req.body.stateName,
        req.body.city,
        req.body.items,
 
    ]

        function afterInsertData(err){

        if (err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-points.html",{saved: true})

    }

    db.run(query, values, afterInsertData())
    
    

})

server.get("/search-results", (req, res) => {

    const search = req.query.search

    if(search == ""){

        return res.render("search-results.html", {totals: 0})
    }

    db.all(`Select * from places where city like '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const totals = rows.length

        return res.render("search-results.html", {places: rows, totals: totals})
    })
})

server.listen(3000)



