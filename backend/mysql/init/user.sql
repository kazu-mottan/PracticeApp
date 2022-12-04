SET AUTOCOMMIT=0;
DROP TABLE IF EXISTS deetube.userdb;
CREATE TABLE deetube.userdb(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(50),
    userpass  VARCHAR(50),
    country TEXT,
    lang TEXT,
    genre TEXT
);
INSERT INTO deetube.userdb(username,userpass,country,lang,genre) VALUES ('Kazuki','test','test','JP','JP','sports');
