import express,{Request,Response} from 'express';
import { expressApp } from './express';

const app = express();
expressApp(app);
app.listen(process.env.PORT || 3001,() => {
    console.log(`Listening on PORT ${process.env.PORT || 3001}`)
})