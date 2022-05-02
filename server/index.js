import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "3omb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

//Connect database
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {console.log(`Server running on port: ${PORT}`)})
    })
    .catch(err => {
        console.log(err.message);
    });

// mongoose.set('useFindAndModify', false); Giving me an error messsage
 