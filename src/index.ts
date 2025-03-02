import express from "express"
import { getEnv } from "./env"

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

const PORT = getEnv('PORT', '8080')
app.listen(PORT, () => {
  console.log(`Server listening at http://127.0.0.1:${PORT}`)
})