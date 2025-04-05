-- database
CREATE DATABASE "Template-Database"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en-GB'
    LC_CTYPE = 'en-GB'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;



CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) NOT NULL,
    name VARCHAR(50)
);

-- COUNTRIES TABLE
CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    code VARCHAR(3) NOT NULL,
    name VARCHAR(100) NOT NULL
);

-- CITIES TABLE
CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) NOT NULL,
    name VARCHAR(50) NOT NULL,
    country_id INTEGER NOT NULL REFERENCES countries(id) ON DELETE CASCADE
);

-- ADDRESSES TABLE
CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    street VARCHAR(255),
    city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE,
    details TEXT
);

-- USERS TABLE
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(20) UNIQUE,
    age INTEGER,
    address_id INTEGER REFERENCES addresses(id) ON DELETE CASCADE,
    role_id INTEGER NOT NULL REFERENCES roles(id) ON DELETE CASCADE
);


-- inserts
-- roles
insert into roles(code, name)
values ('ADM', 'Admin');
insert into roles(code, name)
values ('USR', 'User');

-- countries
insert into countries(code, name) 
values ('US', 'USA');
insert into countries(code, name) 
values ('CA', 'Canada');
insert into countries(code, name) 
values ('MX', 'Mexico');
insert into countries(code, name) 
values ('RO', 'Romania');

-- USA
INSERT INTO cities(code, name, country_id) VALUES
('NYC', 'New York', 1),
('LAX', 'Los Angeles', 1),
('CHI', 'Chicago', 1),
('HOU', 'Houston', 1),
('PHX', 'Phoenix', 1);

-- Canada
INSERT INTO cities(code, name, country_id) VALUES
('TOR', 'Toronto', 2),
('VAN', 'Vancouver', 2),
('MON', 'Montreal', 2),
('CAL', 'Calgary', 2),
('OTT', 'Ottawa', 2);

-- Mexico
INSERT INTO cities(code, name, country_id) VALUES
('MEX', 'Mexico City', 3),
('GDL', 'Guadalajara', 3),
('MTY', 'Monterrey', 3),
('PUE', 'Puebla', 3),
('TJU', 'Tijuana', 3);

-- Romania
INSERT INTO cities(code, name, country_id) VALUES
('B', 'Bucharest', 4),
('CJ', 'Cluj-Napoca', 4),
('TM', 'Timișoara', 4),
('IS', 'Iași', 4),
('BR', 'Brașov', 4);

