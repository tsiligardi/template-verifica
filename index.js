const express = require("express")
const sqlite3 = require("sqlite3").verbose()
const app = new express()
const fetch = require("node-fetch")
const bodyparser = require("body-parser")
app.use(bodyparser.json())
const db = new sqlite3.Database("./database.db")

/* db.get ->Restituisce il primo valore che trova nel db che rispecchi la query
  db.all -> Restituisce tutti i valori del db che soddisfano la query*/
/* db.get(query, parametri, (err,result)=>{
  if(err || !result){
    res.status(401).json({ok: "false"})
  }
  else{
    fai cose
  }
})*/

app.get("/accreditamento", (req, res) => {
  res.json({
    nome: "tommaso",
    cognome: "siligardi"
  })
})

app.listen(8080, () => console.log("server listening on port 8080"))