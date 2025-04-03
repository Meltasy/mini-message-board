#! /usr/bin/env node

require('dotenv').config()
const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  messagetext VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (username, messagetext, added)
VALUES
  ('Waly Dia', 'What''s up, guys?', NOW()),
  ('Guillaume Meurice', 'In the news this week ...', NOW()),
  ('Juliette Arnaud', 'Time for a story!', NOW()),
  ('Pierre-Emmanuel Barré', 'Come to Saint Roustan.', NOW())
`;

async function main() {
  console.log('seeding...')
  console.log('Connection String:', process.env.CONNECTION_STRING)
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
