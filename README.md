# Framhaldsskólaleitin

## Höfundar
- Nafn: Bjarni Hrafnkelsson
- Nafn: Hreimur Logi Kristjánsson
- Nafn: Tumi Kristinsson
- Nafn: Viktor Frans Hjartarson

## Áfangi og Skóli
- Áfangi: Vefforitun 
- Áfanganúmer: VEFÞ3VÞ05DU-Hát
- Skóli: Tækniskólinn

## Verkefnalýsing og Myndir (Verkefni 1)

### Verkefnalýsing

Við vitum öll hversu erfitt það er þegar þú ert nýbúinn með grunnskóla og þarft að ákveða framhaldsskóla í fyrsta skipti. Þegar maður er á þessum aldri, vitum við ekki mikið um framhaldsskólana og hvað þeir hafa að bjóða. Markmið okkar er að gera þetta verk eins einfalt og hægt er. Við stefnum á að hafa eins mikið af gögnum um alla framhaldsskóla landsins á einni síðu. 

Síðan okkar mun vera yfirlit af öllum skólunum á forsíðunni. Síðan er hægt að kíkja á hvern einasta skóla og skoða brautir sem þau bjóða upp á, upplýsingar um t.d. hversu margir klára þetta nám, hversu margir komast í háskóla eftir námið o.s.frv. Einnig verður hægt að sía í gegnum skólana og brautina og fá yfirlit af ákveðnu námi sem þú ert að leita af, t.d. geturðu séð alla skólana sem bjóða upp á tölvubraut og síðan af þeim, hvaða brautir fylgja með stúdentspróf. 

### Dæmi um database

##### NoSQL DB (Það sem við notum)
{\
&nbsp;&nbsp;&nbsp;&nbsp;_id: ObjectId("657241f9916ac9518a4e7771"),\
&nbsp;&nbsp;&nbsp;&nbsp;nafn: 'Kvennaskólinn í Reykjavík',\
&nbsp;&nbsp;&nbsp;&nbsp;kynjahlutfoll: { karlar: 150, konur: 180, annad: 80 },\
&nbsp;&nbsp;&nbsp;&nbsp;val: {\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fyrstaval: { karlar: 70, konur: 80, annad: 40 },\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;annadval: { karlar: 50, konur: 60, annad: 30 },\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accepted: { karlar: 60, konur: 70, annad: 40 }\
&nbsp;&nbsp;&nbsp;&nbsp;},\
&nbsp;&nbsp;&nbsp;&nbsp;brautir: [\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nafn: 'Computer Science',\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;studentsprof: true,\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UtskriftartimiAnnir: 6\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nafn: 'Chemical Engineering',\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;studentsprof: false,\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UtskriftartimiAnnir: 6\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nafn: 'Psychology',\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;studentsprof: true,\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UtskriftartimiAnnir: 6\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},\
&nbsp;&nbsp;&nbsp;&nbsp;],\
&nbsp;&nbsp;&nbsp;&nbsp;img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9LwfNGzKJpXtAvHkoCYzC-0wTXW5YPIW0WvUTjOpPg&s', \
&nbsp;&nbsp;&nbsp;&nbsp;location: 'https://maps.app.goo.gl/zavQiCi5JJ3meHBj6', \
&nbsp;&nbsp;&nbsp;&nbsp;texti: 'Lorem ipsum dolor sit amet, ...,\
&nbsp;&nbsp;&nbsp;&nbsp;fjoldiNemendaIHR: 366\
}

[MongoDB gögn](https://github.com/Framhaldskolaleitinn/Verkefni/tree/main/skyrsluGogn/FramhaldsskolaleitinDB)

##### MySQL DB (Gamla database-ið)

<img src="/skyrsluGogn/MySQL_DB.png" alt="Your Image" width="500"/>

### Framework og Söfn

- Mern Stack
    - Framework: Express
    - Söfn: Node.js, React, MongoDB

## Visuals

### Figma

link https://www.figma.com/file/WLm8GyV04ZF8iJWADWerRM/frammhaldskolaleitin?type=design&t=hnyA8Lb94YnpwOa4-6

<img src="https://github.com/Framhaldskolaleitinn/Verkefni/assets/70201036/e0c6a840-9f03-47f4-9d88-e1b8bdf56cfc" alt="Your Image" width="500"/>

## wireFrame

<img src="https://github.com/Framhaldskolaleitinn/Verkefni/assets/70201036/ebc57845-5ba9-4452-90a9-0f12bd143a5e" alt="Your Image" width="250"/><img src="https://github.com/Framhaldskolaleitinn/Verkefni/assets/70201036/ebc57845-5ba9-4452-90a9-0f12bd143a5e" alt="Your Image" width="250"/><img src="https://github.com/Framhaldskolaleitinn/Verkefni/assets/70201036/ebc57845-5ba9-4452-90a9-0f12bd143a5e" alt="Your Image" width="250"/>

### Skjámyndir af Vefappi
<img width="500" alt="image" src="https://github.com/Framhaldskolaleitinn/Verkefni/assets/70168436/7ffe0614-4965-466d-b208-fc89744842c9">
<img width="500" alt="image" src="https://github.com/Framhaldskolaleitinn/Verkefni/assets/70168436/84067bd7-5264-4c3b-8f64-4566f0effec8">
<img width="500" alt="image" src="https://github.com/Framhaldskolaleitinn/Verkefni/assets/70168436/ff2c3643-70dd-41cf-a7e2-8edb5a4e356e">
<img width="500" alt="image" src="https://github.com/Framhaldskolaleitinn/Verkefni/assets/70168436/5487d350-dc93-4f1e-b9ab-c39f52847274">




### Tengill á Youtube
<a href="https://youtu.be/ou8WvZHzpKk" target="_blank">Skjámyndsupptaka</a>

## Samantekt

### Næstu Skref
- Bjarni: Hægt er að gera annað table og hafa fullt af upplýsingum um brautirnar og áfangana sem eru á brautinni. Ef Við myndum vilja sýna áfanga líka væri best að gera annað noSQL collection til þess að halda í kringum þær upplýsingar þar sem einn áfangi getur verið á fleirri en einni braut. NoSQL databasið sem við erum með núna er gott og hægt að stækka það mikið. Ég myndi bæta inn fleirri gögnum.
- Tumi: Bæta við útlit og virkni síðunar.
- Hremmi: Halda áfram að updata síðu ef ný gögn koma í database. Láta forsíðu sína random facts um skóla, laga css og gera síðunna fallegri :)
- Viktor: Næstu skref hjá mér væru í raun að vera milliliður og passa að gagnagrunnurinn (Bjarni) og appið (Hreimur) tengist og að data frá gagnagrunninum sé lesanlegt fyrir Hreim. Í raun er engin ókláruð virkni á mínum part, bara það að ef við myndum halda áfram þá myndi ég mögulega þurfa uppfæra eitthvað í rest-api en annars virkar allt þar eins og það á að gera.


## Skil á Innu (Verkefni 5)
[Github Repository](https://github.com/Framhaldskolaleitinn/Verkefni)
