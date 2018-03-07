DROP DATABASE IF EXISTS family;
CREATE DATABASE family;
USE family;

-- relationship = association in sequelize

CREATE TABLE volunteers
  (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    volunteer_last_name VARCHAR(50),
    volunteer_first_name VARCHAR(50),
    phone_number VARCHAR(20),
    email_address VARCHAR(50),
    physical_address VARCHAR(100),
    vehicle VARCHAR(50)
  );


CREATE TABLE donors
  (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    business_name VARCHAR(50),
    business_type VARCHAR(50),
    phone_number VARCHAR(20),
    email_address VARCHAR(50),
    physical_address VARCHAR(100),
    city VARCHAR(50),
    donor_state VARCHAR(50),
    zip_code VARCHAR(50),
    manager_name VARCHAR(50),
    manager_phone_number VARCHAR(14),
  );

  CREATE TABLE comments
    (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    review_type VARCHAR(50),
    reviewee VARCHAR(50),
    comment TEXT
    );

  CREATE TABLE donations
    (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    donor_business_name VARCHAR(50),
    food_item VARCHAR(50),
    quantity INT(5)
    );

  CREATE TABLE destinations
  (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    organization_name VARCHAR(50),
    organization_type VARCHAR(50),
    phone_number VARCHAR(20),
    email_address VARCHAR(50),
    physical_address VARCHAR(50),
    point_of_contact VARCHAR(50),
    poc_phone_number VARCHAR(20)
  );
