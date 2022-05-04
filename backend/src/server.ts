import express from 'express'

const app = express()

app.get("/user", (req, res) => {
    res.json({
        api: "OK"
    })
})

app.listen(3333, () => {
    console.log("HTTP server running!")
})