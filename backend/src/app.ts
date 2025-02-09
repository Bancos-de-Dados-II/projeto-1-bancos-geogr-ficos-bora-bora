import express from 'express';
import cors from 'cors';
import routesUser from './routes/user.routes';
import routesLogin from './routes/auth.routes';
import routesEvent from './routes/event.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routesEvent);

// app.use(routesUser);
// app.use(routesLogin);

export default app;

