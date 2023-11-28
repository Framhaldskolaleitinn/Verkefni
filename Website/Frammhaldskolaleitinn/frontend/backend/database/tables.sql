DROP SCHEMA IF EXISTS framhaldsskolaleit;

CREATE schema framhaldsskolaleit;
USE framhaldsskolaleit;

/* wipe everything */
DROP TABLE IF EXISTS afangar;
DROP TABLE IF EXISTS brautir;
DROP TABLE IF EXISTS skolar;


DROP TABLE IF EXISTS skolar;

CREATE TABLE skolar (
	ID int auto_increment,
    nafn varchar(25),
    heildarnemendur int,
    fjoldiUtskriftarnemenda integer,
    constraint skolar_PK primary key(ID)
);

DROP TABLE IF EXISTS brautir;

CREATE TABLE brautir (
	ID int auto_increment,
    skolaID integer,
    nafn varchar(25),
    heildarnemendur int,
    fjoldiUtskriftarnemenda int,
    utskriftartimiAnnir int,
    medalutskriftartimiAnnir int,
    studentsprof bool,
    fjoldiNemendaFaraIHaskola int,
	fjoldiNemendaSemKlaraNam int,
	fjoldiNemendaSemHaetta int,
    constraint brautir_PK primary key(ID),
    constraint brautir_skolar_FK foreign key(skolaID) references skolar(ID)

);

DROP TABLE IF EXISTS afangar;

CREATE TABLE afangar (
	ID int auto_increment,
	brautaID int,
	nafn varchar(25),
	skilduAfangi bool,
	AaetludOnn int,
    constraint afangar_PK primary key(ID),
    constraint afangar_brautir_FK foreign key(brautaID) references brautir(ID)
);

insert into skolar(nafn, heildarnemendur, fjoldiUtskriftarnemenda) 
	value('Tskoli', 2000, 200);
insert into skolar(nafn, heildarnemendur, fjoldiUtskriftarnemenda) 
	value('Viva Verzlo', 500, 69);
insert into skolar(nafn, heildarnemendur, fjoldiUtskriftarnemenda) 
	value('Kvenno', 300, 280);
    
select * from skolar;

/* Brautir fyrir taekniskolann */
insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(1, 'Tolvubraut', 200, 15, 6, 7, true, 10, 7, 8);
insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(1, 'Tolvubraut Honnun', 150, 10, 6, 7, true, 5, 3, 30);
insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(1, 'Listabraut', 2, 1, 6, 10, true, 0, 2, 1);
    
select * from brautir where skolaID = 1;

insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(2, 'Natturufraedi', 200, 15, 6, 7, true, 10, 7, 8);
insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(2, 'Vidskipta', 150, 10, 6, 7, true, 5, 3, 30);
insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(2, 'Felagsfraedi', 2, 1, 6, 10, true, 0, 2, 1);
    
select * from brautir where skolaID = 2;

insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(3, 'Vidskipta', 200, 15, 6, 7, true, 10, 7, 8);
insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(3, 'Felagsfraedi', 150, 10, 6, 7, true, 5, 3, 30);
insert into brautir(skolaID, nafn, heildarnemendur, fjoldiUtskriftarnemenda, utskriftartimiAnnir, medalutskriftartimiAnnir, studentsprof, fjoldiNemendaFaraIHaskola, fjoldiNemendaSemKlaraNam, fjoldiNemendaSemHaetta)
	values(3, 'Natturufraedi', 2, 1, 6, 10, true, 0, 2, 1);

select * from brautir where skolaID = 3;

select * from brautir;

insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(1, 'Bjarna tru', true, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(2, 'Bjarna tru', true, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(3, 'Bjarna tru', true, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(4, 'Bjarna tru', true, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(5, 'Bjarna tru', true, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(6, 'Bjarna tru', true, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(7, 'Bjarna tru', true, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(8, 'Bjarna tru', true, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(9, 'Bjarna tru', true, 1);
    
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(1, 'VEFÞ3VÞ05DU-Hát', false, 1);
insert into afangar(brautaID, nafn, skilduAfangi, AaetludOnn)
	values(1, 'VEFÞ3VÞ05DU-Hát', false, 1);
    
select * from afangar;