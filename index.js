import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cors from 'cors'
import renderApi from '@api/render-api';


const app = express();
const port = process.env.PORT||3001
dotenv.config()
app.use(bodyParser.json())
app.use(cors())
app.get('', (req, res) => {
  renderApi.auth(process.env.RENDER_API_KEY);
  renderApi.listServices({ includePreviews: 'true', limit: '20' })
    .then(({ data }) => {
      // console.log(data)
      return res.status(200).send({ data: data })
    }
    )
    .catch(err => console.error(err));


})
app.listen(port, () => {
  console.log(`my application is listening on http://localhost:${port}`);
})