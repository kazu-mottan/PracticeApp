SET AUTOCOMMIT=0;
CREATE TABLE deetube.userdb(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(50),
    country TEXT,
    lang TEXT,
    genre TEXT
);
INSERT INTO deetube.userdb(username,country,lang,genre) VALUES ('Kazuki','JP','JP','sports');
