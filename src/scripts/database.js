import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'm25365',
  database: 'tricycle_motorcycle_registration'
});

export async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}
