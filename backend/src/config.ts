import 'dotenv/config';

export const { 
    DATABASE_TYPE = "postgres",
    DATABASE_URL='database',
    DATABASE_PORT = 5432,
    DATABASE_NAME = 'kupipodariday',
    DATABASE_USERNAME = 'student',
    DATABASE_PASSWORD = 'student',
    ALLOW_URL = 'kupipodariday.nomoreparties.co'
} = process.env;