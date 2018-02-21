DROP DATABASE IF EXISTS family;
CREATE DATABASE family;
USE family;

-- relationship = association in sequelize

CREATE TABLE volunteers
  (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    volunteer_last_name VARCHAR(50),
    volunteer_first_name VARCHAR(50),
    phone_number VARCHAR(14),
    email_address VARCHAR(50),
    physical_address VARCHAR(50),
    vehicle VARCHAR(50)
  );
