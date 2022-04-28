import express from 'express';
import { getHome } from './controllers/pages.js';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', getHome);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
