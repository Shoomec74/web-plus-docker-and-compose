import 'dotenv/config';

interface IConfig {
    readonly JWT_SECRET: string;
    readonly DATABASE_PORT: string | number;
    readonly DATABASE_TYPE: string;
readonly DATABASE_URL: string;
readonly DATABASE_NAME: string;
readonly DATABASE_USERNAME: string;
readonly DATABASE_PASSWORD: string;
readonly ALLOW_URL: string;
   
  }
  
  const {
    NODE_ENV,
JWT_SECRET,
DATABASE_TYPE,
DATABASE_URL,
DATABASE_PORT,
DATABASE_NAME,
DATABASE_USERNAME,
DATABASE_PASSWORD,
ALLOW_URL,
  } = process.env;
  
  // eslint-disable-next-line import/no-mutable-exports
  let config: IConfig;
  if (NODE_ENV === 'production') {
    if (!DATABASE_URL || !DATABASE_PORT || !JWT_SECRET || !DATABASE_NAME || !DATABASE_PASSWORD) {
      throw new Error('Отсутствует файл .env');
    }
    config = {
        JWT_SECRET,
        DATABASE_TYPE,
        DATABASE_URL,
        DATABASE_PORT,
        DATABASE_NAME,
        DATABASE_USERNAME,
        DATABASE_PASSWORD,
        ALLOW_URL,
    };
  } else {
    config = {
        JWT_SECRET:"supersecrets",
        DATABASE_TYPE:"postgres",
        DATABASE_URL:'database',
        DATABASE_PORT:5432,
        DATABASE_NAME:'kupipodariday',
        DATABASE_USERNAME:'student',
        DATABASE_PASSWORD:'student',
        ALLOW_URL:'http://kupipodariday.nomoreparties.co'
        //ALLOW_URL:'http://localhost:8081'
    };
  }
  
  export default config;