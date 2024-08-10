import express, { Request, Response } from 'express';
import ejs from 'ejs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use('/static/', express.static("./static"));
app.engine('html', ejs.renderFile);

app.get('/', (req: Request, res: Response) =>{
    res.send('woah!');
});

app.listen(port, () =>{
    console.log(`Running on http://localhost:${port}`);
});