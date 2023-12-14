import express from 'express';
import AdminRoutes from './routes/director.js';
const app = express();
app.use('/api/v1', AdminRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

