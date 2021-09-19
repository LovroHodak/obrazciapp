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


