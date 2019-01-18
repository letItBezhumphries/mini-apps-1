CREATE DATABASE checkout;

USE checkout;

CREATE TABLE user (
  `id` int NOT NULL AUTO_INCREMENT,
  `first` VARCHAR(10),
  `last` VARCHAR(20),
  `email` VARCHAR(50),
  `password` VARCHAR(75),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE shipping (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(40),
  `suite` int NOT NULL,
  `city` VARCHAR(50),
  `state` VARCHAR(10),
  `zip` int NOT Null,
  `phone` VARCHAR(12),
  PRIMARY KEY(id)
);

CREATE TABLE billing (
  `id` int NOT NULL AUTO_INCREMENT,
  `card` Varchar(20) NOT NULL,
  `expiry` VARCHAR(10),
  `cvv` int NOT NULL,
  `zip` int NOT NULL,
  PRIMARY KEY(id)
);