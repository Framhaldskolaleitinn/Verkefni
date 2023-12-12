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

### Framework og Söfn

- Mern Stack
    - Framework: Express
    - Söfn: Node.js, React, MongoDB, ReactRouterDom

## Visuals

### Figma

link https://www.figma.com/file/WLm8GyV04ZF8iJWADWerRM/frammhaldskolaleitin?type=design&t=hnyA8Lb94YnpwOa4-6

![Capture](https://github.com/Framhaldskolaleitinn/Verkefni/assets/70201036/e0c6a840-9f03-47f4-9d88-e1b8bdf56cfc)

## wireFrame
![IMG_6339](https://github.com/Framhaldskolaleitinn/Verkefni/assets/70201036/ebc57845-5ba9-4452-90a9-0f12bd143a5e)

### Skjámyndir af Vefappi
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
![Mynd 1](images/screenshot1.png)
![Mynd 2](images/screenshot2.png)

### Tengill á Youtube
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
[![Skjámyndsupptaka](https://img.youtube.com/vi/your-youtube-video-id/0.jpg)](https://www.youtube.com/watch?v=your-youtube-video-id)

## Samantekt

### Næstu Skref
- Hægt er að gera annað table og hafa fullt af upplýsingum um brautirnar og áfangana sem eru á brautinni. Ef Við myndum vilja sýna áfanga líka væri best að gera annað noSQL collection til þess að halda í kringum þær upplýsingar þar sem einn áfangi getur verið á fleirri en einni braut. NoSQL databasið sem við erum með núna er gott og hægt að stækka það mikið. Ég myndi bæta inn fleirri gögnum.
- Bæta við útlit og virkni síðunar.

### Hreimur Næstu Skref :
- Halda áfram að updata síðu ef ný gögn koma í database. Láta forsíðu sína random facts um skóla, laga css og gera síðunna fallegri :)
- [Skref 3]

## Skil á Innu (Verkefni 5)
[Github Repository](https://github.com/Framhaldskolaleitinn/Verkefni)