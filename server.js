const port = 3090
const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(express.static("static"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  /* Serve static/index.html by default */
})

// Init server
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
