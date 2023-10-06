import 'dotenv/config'
import express, { Request, Response} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/index.js'
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';

const app = express()
app.use(express.json())
app.use(cors())


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//  сообщаем экспресс-модулю, что публичный каталог - это все для ресурсов нашего сайта
app.use(express.static(path.join(__dirname, 'public')));
// sendFile will go here
app.get('/', function(req:Request,res:Response) {
  res.sendFile(path.join(__dirname, '/public/pages/main.html'));
});
app.get('/table', function(req:Request,res:Response) {
  res.sendFile(path.join(__dirname, '/public/pages/table.html'));
});

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
