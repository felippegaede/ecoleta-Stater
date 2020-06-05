const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
//     db.run(`
//         create table if not exists places (
//             id integer primary key autoincrement,
//             name text,
//             image text,
//             address text,
//             address_number text,
//             state text,
//             city text,
//             items text
//         );
//     `)

//     const query = `insert into places (image, name, address, address_number, state, city, items) values (?,?,?,?,?,?,?);`
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err){

//         if (err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)

//     }

    // db.all(`delete from places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // })

//     db.run(query, values, afterInsertData())


// })

