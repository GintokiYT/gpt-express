import cors from 'cors';

const ACCEPTED_ORIGINS: string[] = [
  "http://localhost:5173/"
];

export const corsMiddleware = cors({
  origin: (origin, cb) => {
    if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error('No permitido por CORS'));
    }
  }
});

// export const corsMiddleware = cors({ origin: "*" })
