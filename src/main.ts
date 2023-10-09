import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/index.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/factory",router)

async function run(): Promise<void> {
  try {
    const DB: string | undefined = process.env.DB_URL
    if (DB !== undefined) {
      console.log(DB)
      await mongoose.connect(DB)
    } else {
      console.error('Переменная DB не определена в переменных среды.')
    }
    app.listen(process.env.PORT, () => {
      console.log('🚀', `http://${process.env.HOST}:${process.env.PORT}`)
    })
  } catch (error: unknown | undefined) {
    console.log("Ошика соединения сервера",error)
  }
}

run()
