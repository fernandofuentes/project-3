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
    physical_address VARCHAR(100),
    vehicle VARCHAR(50)
  );


CREATE TABLE donors
  (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    business_name VARCHAR(50),
    business_type VARCHAR(50),
    phone_number VARCHAR(14),
    email_address VARCHAR(50),
    physical_address VARCHAR(100),
    manager_name VARCHAR(50),
    manager_phone_number VARCHAR(14),
    comments TEXT

  );
