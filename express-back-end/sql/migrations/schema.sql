DROP TABLE IF EXISTS clinics CASCADE;
DROP TABLE IF EXISTS clinic_pet_types CASCADE;
DROP TABLE IF EXISTS pet_types CASCADE;
DROP TABLE IF EXISTS pets CASCADE;
DROP TABLE IF EXISTS owners CASCADE;

CREATE TABLE clinics (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  telephone VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  image VARCHAR(255)
);

CREATE TABLE pet_types (
  id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(255) NOT NULL
);

CREATE TABLE clinic_pet_types (
  id SERIAL PRIMARY KEY NOT NULL,
  clinic_id INTEGER REFERENCES clinics(id) ON DELETE CASCADE NOT NULL,
  pet_type_id INTEGER REFERENCES pet_types(id) NOT NULL
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY NOT NULL,
  type_id INTEGER REFERENCES pet_types(id) ON DELETE CASCADE,
  owner_id INTEGER REFERENCES owners(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  gender VARCHAR(255) NOT NULL,
  breed VARCHAR(255) NOT NULL,
  weight VARCHAR(255) NOT NULL,
  info  VARCHAR(255) NOT NULL,
  image VARCHAR(255)
);

CREATE TABLE owners (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  telephone VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY NULL NULL,
  clinic_id INTEGER REFERENCES clinics(id) ON DELETE CASCADE NOT NULL,
  pet_id INTEGER REFERENCES pets(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL
);