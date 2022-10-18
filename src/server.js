import express from 'express'
import fileUpload from 'express-fileupload';
import path from 'path';
import cors from 'cors'
import categoriesRouter from './modules/categories/router.js';
import subCategoriesRouter from './modules/subCategories/router.js';
import authRouter from './modules/users/router.js';
import eventsRouter from './modules/events/router.js';
import { PORT } from './config.js';

const app = express()

// parse application/json
app.use(express.json())
app.use(fileUpload())
app.use(express.static(path.join(process.cwd(), 'src', 'uploads')))
app.use(cors("*"));
app.use(express.urlencoded({
    extended: false
}));

// routes
app.use(authRouter)
app.use(eventsRouter)
app.use(categoriesRouter)
app.use(subCategoriesRouter)


app.listen( PORT || 5000, () => console.log("server is running on port: " + PORT) )