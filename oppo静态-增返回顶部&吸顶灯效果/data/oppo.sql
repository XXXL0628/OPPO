SET NAMES UTF8;
DROP DATABASE IF EXISTS oppo;
CREATE DATABASE oppo CHARSET=UTF8;
USE oppo;
CREATE TABLE oppo_login(
  lid INT PRIMARY KEY,
  lname BIGINT,
  lpwd VARCHAR(32)
);
INSERT INTO oppo_login VALUES
(1,'18813148094','zhangji');

SELECT * FROM oppo_login;