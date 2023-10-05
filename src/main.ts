import 'dotenv/config'
import  mongoose from 'mongoose';
import express, {Request, Response} from "express";
import cors from "cors"

const app = express()

app.use(cors({
    credentials: true
}))
app.use(express.json())


app.get('/', (req: Request, res:Response)=>{
    console.log(req.query)
    res.status(200).send("hello")
})
app.post('/p', (req, res)=>{
    console.log(req.body)
    res.status(200).send("hello")
})

async function run(): Promise<void> {
    try {
        const DB: string | undefined = process.env.DB_URL
        if (DB !== undefined) {
            console.log(DB);
            await mongoose.connect(DB);
        } else {
            console.error('Переменная DB не определена в переменных среды.');
        }
        app.listen(4000, () => {
            console.log('🚀',`http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error: unknown | undefined) {
        console.log(error);
    }
}

run();
