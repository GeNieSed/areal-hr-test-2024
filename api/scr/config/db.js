require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '12345678',
    database: 'hr-frames',
});
// Функция для проверки подключения к базе данных
const bdConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('Успешное подключение к базе данных');
    } catch (error) {
        console.error('Ошибка подключения к базе данных:', error.message);
        process.exit(1); // Завершаем процесс в случае ошибки
    }
};

bdConnection();

module.exports = pool;