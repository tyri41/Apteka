DROP TABLE IF EXISTS MEDICINE;

CREATE TABLE MEDICINE (
Id INTEGER NOT NULL,
NAME TEXT NOT NULL,
SUBSTANCE TEXT NOT NULL,
FORM TEXT NOT NULL,
DOSE TEXT NOT NULL,
CONTENT TEXT NOT NULL,
EAN INTEGER NOT NULL,
REFUNDATION TEXT NOT NULL,
SCOPE TEXT NOT NULL,
PRICE FLOAT NOT NULL,
PRIMARY KEY (Id)
);

--INSERT INTO MEDICINE(Name, EAN, Substance, Form) VALUES("ABC", 997, "gluten", "bagietka");
--INSERT INTO Medicine(Name, EAN, Substance, Form) VALUES("ABC", 997, "gluten", "bułeczka");
--INSERT INTO Medicine(Name, EAN, Substance, Form) VALUES("DEF", 997, "gluten", "bułeczka");
INSERT INTO MEDICINE(NAME, SUBSTANCE, FORM, DOSE, CONTENT, EAN, REFUNDATION, SCOPE, PRICE)
values
    ("abc", "a", "a", "20", "uno", 997, "20%", "kluska", 200),
    ("abc", "a", "a", "20", "uno", 998, "20%", "kluska", 200),
    ("abd", "a", "a", "20", "uno", 997, "20%", "kluska", 200.2);