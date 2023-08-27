const createUsers = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200),
    email VARCHAR(200),
    password VARCHAR(200),
    avatar VARCHAR(200) NULL,	
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

module.exports = createUsers;
