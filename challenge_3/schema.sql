CREATE DATABASE checkout;

USE checkout;

CREATE TABLE user (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(65),
  `email` VARCHAR(50),
  `password` VARCHAR(75),
  `address` VARCHAR(40),
  `suite` int NOT NULL,
  `city` VARCHAR(50),
  `state` VARCHAR(10),
  `zip` int NOT Null,
  `phone` VARCHAR(12),
  `card` Varchar(20) NOT NULL,
  `expiry` VARCHAR(10),
  `cvv` int NOT NULL,
  `billing_zip` int NOT NULL,
  PRIMARY KEY(id)
);