import express,{Request,Response} from 'express';

const app = express();
app.use(express.json());

app.get("/api/tree", (req: Request,res: Response) => {
    res.send({message: "hello"})
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on PORT : ${process.env.PORT || 3001}`);
})