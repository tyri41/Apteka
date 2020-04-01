DROP TABLE IF EXISTS Medicine;

CREATE TABLE Medicine (
	Id INTEGER NOT NULL,
	Name TEXT NOT NULL,
	EAN INTEGER NOT NULL,
	Substance TEXT NOT NULL,
	Form TEXT NOT NULL,
	PRIMARY KEY (Id)
);

INSERT INTO Medicine(Name, EAN, Substance, Form) VALUES("ABC", 997, "gluten", "bagietka");
INSERT INTO Medicine(Name, EAN, Substance, Form) VALUES("ABC", 997, "gluten", "bułeczka");
INSERT INTO Medicine(Name, EAN, Substance, Form) VALUES("DEF", 997, "gluten", "bułeczka");