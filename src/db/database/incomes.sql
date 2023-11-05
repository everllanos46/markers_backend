-- Creación de la tabla users
CREATE TABLE users (
  id INT PRIMARY KEY,
  user VARCHAR(255),
  email VARCHAR(255),
  pass VARCHAR(255)
);

-- Creación de la tabla user_code
CREATE TABLE user_code (
  id INT PRIMARY KEY,
  user_id INT,
  code INT,
  date_send DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Creación de la tabla income_types
CREATE TABLE income_types (
  id INT PRIMARY KEY,
  type VARCHAR(255)
);

-- Creación de la tabla user_income
CREATE TABLE user_income (
  id INT PRIMARY KEY,
  user_id INT,
  mount INT,
  income_reason VARCHAR(255),
  income_date DATE,
  income_type_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (income_type_id) REFERENCES income_types(id)
);

-- Creación de la tabla user_exit
CREATE TABLE user_exit (
  id INT PRIMARY KEY,
  user_id INT,
  mount INT,
  exit_reason VARCHAR(255),
  exit_date DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);



ALTER TABLE user_code
ADD valid INT;