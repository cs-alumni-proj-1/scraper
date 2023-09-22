CREATE TABLE bank (
    id serial PRIMARY KEY, 
    bank_name VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    url VARCHAR(2048) NOT NULL
);

CREATE TABLE circular (
    id serial PRIMARY KEY, 
    bank_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(2048) NOT NULL,
    CONSTRAINT circular_bank_id_fkey FOREIGN KEY(bank_id) REFERENCES bank(id) ON DELETE CASCADE
);

CREATE TABLE users (
    id serial PRIMARY KEY, 
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE user_bank (
    id serial PRIMARY KEY, 
    user_id INT NOT NULL,
    bank_id INT NOT NULL,
    CONSTRAINT user_bank_user_id_fkey FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT user_bank_bank_id_fkey FOREIGN KEY(bank_id) REFERENCES bank(id) ON DELETE CASCADE
);