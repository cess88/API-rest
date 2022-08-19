import express from 'express';
import userRouter from './routes/userRouter.js';
import cors from 'cors';
import mongoose from 'mongoose'




const db = "mongodb+srv://cess88:Famillecolo8@cluster0.xebtzeu.mongodb.net/?retryWrites=true&w=majority"
const app = express()
const router = express.Router()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
app.use(cors())
router.use(userRouter)

app.listen(3001, function(err){
    if (err) {
        console.log(err);
    }else{
        console.log("connected to localhost 3001");
    }
})

mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connected to database mongodb (db connecté)");
    }
})
export default router