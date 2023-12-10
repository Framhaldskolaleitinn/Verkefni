# Verkefni 1 - Vefapp

## Höfundar
- Nafn: Bjarni Hrafnkelsson
- Nafn: Hreimur Logi Kristjánsson
- Nafn: Tumi Kristinsson
- Nafn: Viktor Frans Hjartarson

## Áfangi og Skóli
- Áfangi: Vefforitun 
- Áfanganúmer: VEFÞ3VÞ05DU-Hát
- Skóli: Tækniskólinn

## Tengill á Hýstan Vef
[https://your-web-app-url.com](https://your-web-app-url.com)

## Verkefnalýsing og Myndir (Verkefni 1)

### Verkefnalýsing (Gera meira ýtarlegri)

Við vitum öll hversu erfitt það er þegar þú ert nýbúinn með grunnskóla og þarft að ákveða framhaldsskóla í fyrsta skipti. Þegar maður er á þessum aldri, vitum við ekki mikið um framhaldsskólana og hvað þeir hafa að bjóða. Markmið okkar er að gera þetta verk eins einfalt og hægt er. Við stefnum á að hafa eins mikið af gögnum um alla framhaldsskóla landsins á einni síðu. 

Síðan okkar mun vera yfirlit af öllum skólunum á forsíðunni. Síðan er hægt að kíkja á hvern einasta skóla og skoða brautir sem þau bjóða upp á, upplýsingar um t.d. hversu margir klára þetta nám, hversu margir komast í háskóla eftir námið o.s.frv. Einnig verður hægt að sía í gegnum skólana og brautina og fá yfirlit af ákveðnu námi sem þú ert að leita af, t.d. geturðu séð alla skólana sem bjóða upp á tölvubraut og síðan af þeim, hvaða brautir fylgja með stúdentspróf. 

### Dæmi um database
{
    _id: ObjectId("657241f9916ac9518a4e7771"),
    nafn: 'Kvennaskólinn í Reykjavík',
    kynjahlutfoll: { karlar: 150, konur: 180, annad: 80 },
    val: {
        fyrstaval: { karlar: 70, konur: 80, annad: 40 },
        annadval: { karlar: 50, konur: 60, annad: 30 },
        accepted: { karlar: 60, konur: 70, annad: 40 }
    },
    brautir: [
        {
            nafn: 'Graphic Design',
            studentsprof: false,
            UtskriftartimiAnnir: 6
        },
        {
            nafn: 'Mathematics',
            studentsprof: true,
            UtskriftartimiAnnir: 6
        },
        {
            nafn: 'English Literature',
            studentsprof: false,
            UtskriftartimiAnnir: 6
        }
    ]
}

### Framework og Söfn

- Mern Stack
    - Framework: Express
    - Söfn: Node.js, React, MongoDB, 

## Visuals

### (ง •̀ _ •́)ง

### Figma

link https://www.figma.com/file/WLm8GyV04ZF8iJWADWerRM/frammhaldskolaleitin?type=design&t=hnyA8Lb94YnpwOa4-6

![Capture](https://github.com/Framhaldskolaleitinn/Verkefni/assets/70201036/e0c6a840-9f03-47f4-9d88-e1b8bdf56cfc)

## wireFrame
![IMG_6339](https://github.com/Framhaldskolaleitinn/Verkefni/assets/70201036/ebc57845-5ba9-4452-90a9-0f12bd143a5e)

### Skjámyndir af Vefappi
![Mynd 1](images/screenshot1.png)
![Mynd 2](images/screenshot2.png)

### Skjámynd af Vinnuflæði
- [Link á Network Graph á Github Insights](https://www.pagethingy.com)

### Tengill á Youtube
[![Skjámyndsupptaka](https://img.youtube.com/vi/your-youtube-video-id/0.jpg)](https://www.youtube.com/watch?v=your-youtube-video-id)

## Samantekt

### Næstu Skref
- Hægt er að gera annað table og hafa fullt af upplýsingum um brautirnar og áfangana sem eru á brautinni. Ef Við myndum vilja sýna áfanga líka væri best að gera annað noSQL collection til þess að halda í kringum þær upplýsingar þar sem einn áfangi getur verið á fleirri en einni braut. 
- [Skref 2]
- [Skref 3]

## Skil á Innu (Verkefni 5)
[GitHub Repository](https://github.com/your-username/your-repository)
