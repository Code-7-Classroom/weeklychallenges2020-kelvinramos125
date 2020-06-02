DROP DATABASE IF EXISTS mediumChallenge;
CREATE DATABASE mediumChallenge;
USE mediumChallenge;
CREATE TABLE topMovies (title varchar(255), 
releaseDate varchar(255), 
rating varchar(255));

INSERT INTO topMovies (title , 
releaseDate , 
rating)
VALUES("Avengers: Ultron", "May 1, 2015", "PG-13"), 
("Transcendence", "April 10, 2014", "PG-13"),
("Godzilla: King of the Monsters", "May 31, 2019", "PG-13"),
("Godzilla", "May 16, 2014", "PG-13"),
("The Great Gatsby", "May 1, 2013", "PG-13"),
("Pirates of the Caribbean: The Curse of the Black Pearl", "June 28, 2003", "PG-13"),
("Lucy", "July 25, 2014", "R"),
("Jurassic Park 3", "July 16, 2001", "PG-13"),
("Interstellar", "October 26, 2014", "PG-13"),
("The Perks of Being a Wallflower", "September 21, 2012", "PG-13");