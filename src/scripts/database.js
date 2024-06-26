import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '25365',
  database: 'nactomoras_reg',
  port: 5432, // default PostgreSQL port
});

export async function query(sql, params) {
  const client = await pool.connect();
  try {
    const res = await client.query(sql, params);
    return res.rows;
  } finally {
    client.release();
  }
}