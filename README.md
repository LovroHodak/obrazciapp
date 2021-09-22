About:
FE login/register

Install:

1. npm i react-router-dom
2. npm install react-bootstrap bootstrap [import 'bootstrap/dist/css/bootstrap.min.css']
3.

Vprasanja:

1. (Login.css, in vse ostale) - position:absolute, App.css position:relative
   na Register.js mi zlomi stran zaradi div-a kjer map-am. Na home.js mi zlomi zaradi Navbara. Kako narest da bo height zmeri 100% (to velja za vse ki niso App, ker za app ze dela) in da mi ne lomi strani
2. (Login.js, Home.js) imam Button ki je obkrozen z Link. Ali obstaja kaka notranja funkcija v Buttnu da se obnasa kot Link?
3. AddPersonalInfo.js bi moral ustvariti en fixed state ki se ne bo vec spreminjal

4. connect mongo atlas - get old data

4. AddExams.js
   a) is loggeInUser being updated ok, or should i use setters?
5. AddExams.js & AddPersonalInfo.js -> should I move helper function 'updatedUsers' to file 'use-users'?
6. OnlyPersonalInfo.js -> Edit -> 
a) ali moram za vsako polje posebaj narediti state in ga potem updejtat? 
b) kako zadrzim staro vrednost v Inputu, ki jo potem sam zbrisem in spremenim?
7) FeedChangesDetail.js -> updejtam state actioIdNow in mi avtomatsko updejta tut loggedInUser in Users... Warum?

TODO:

NASTIMAJ SI MONGO

1. put buttons in Navbar from Home

4. Vsak link bi moral imeti shranjeno spremembo ki je bila storjena takrat, ne pa sedajsnjo updejtano verzijo (/personalInfo)

4. v Actions in Exams imam poduplirano dato (exam name, exam grade)

4. STYLE bootstrap ALLES

4. Home.js -> vsi linki na Detail.js kazejo isto, ne pokazejo kaj sem takrat spremenil

5. Home.js -> Edit data button does nothing

6. Change default data -> users -> feed (id:1 - Ana Novak, id:2 -Miha Muha)

7. add pdf converter

8. add backend + ISO


---TODO DETAILED---

GLOBAL 
a) css (full screen pages)
b) mobile view
c) 404 pages
d) ce reloadas stran da ne izgubis vsega
e) ko me pelje na drugo stran naj mi zmeraj prikazuje stran od vrha (npr ko se doda navbar mi ostane le ta skrit in moram poskrolat do vrha, jst pa hocem da gre iz vrha po defaultu)

1. REGISTER.js (self explanatory)
a) validation (name > 3, email regex, pass > 4)
b) view password button

2. LOGIN.js (self explanatory)
a) validation (email regex, pass > 4)

+ 3. FIRSTPAGE.js (vmesna stran ki ti pove da je potrebno pred zacetkom vpisat osebne podatke) sta kul

4. ADDPERSONALINFO.js (dodaj osebne podatke)
a) validation (post number must be number, birthDay -> calander, country -> 
list of countries, gender -> 3 options checkbox)


+ 5. PERSONALINFO.js (beri osebne podatke) - je kul

6. ONLYPERSONALINFO.js (view and edit personal info)
a) uredi actions property

7. FEEDCHANGESDETAIL.js 
a) ce ni prislo do spremembe propertyja ga ne renderaj
b) dej conditional renderinge v funkcijo in v state

7. HOME.js



Grade editing