import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { setCustomerRoutes } from './routes/customerRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Register customer routes
setCustomerRoutes(app);

app.get('/', (req, res) => {
  res.send('Tailor Measurement Management API');
});

// Generic error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
