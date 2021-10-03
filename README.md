Install:

1. npm i react-router-dom
2. npm install react-bootstrap bootstrap [import 'bootstrap/dist/css/bootstrap.min.css']

Irelevant:

1. connect mongo atlas - get old data back - Klemen

What is missing: 

1. add pdf converter

Problems: 

1. GLOBAL - styles (naj bo vsak page minimalno 100% visok oziroma po pootrebi se vecji)
1. GLOBAL - Button-e imam obkrozene z Link-i, ali nima Button nek interni prop da se obnasa kot link?
1. GLOBAL - spucaj console.log-e in vse stvari ki jih ne uporabljam
1. GLOBAL -  404 pages
1. GLOBAL - ko me pelje na drugo stran naj mi zmeraj prikazuje stran od vrha (npr ko se doda navbar mi ostane le ta skrit in moram poskrolat do vrha, jst pa hocem da gre iz vrha po defaultu)

2. REGISTER.js - validation: email - must include @, password: must be at least 8 caracters long ect.
2. REGISTER.js - view password button

3. LOGIN.js - ce uporabnik ze obstaja naj ga poslje na HOME.js

4. ADDPERSONALINFO.js - country: ISO, birthday: calendar, gender: 3 options
4. ADDPERSONALINFO.js - ali lahko naredim dinamicne state in funkcije, glede na to da se vse ponavlja?

5. EDITEXAM.js - grda koda. Klemen si mi napisal naj se izogibam  nekim zapisom in naj save-am stvari v spremenljivke

6. ONLYPERSONALINFO.js - klemen ce greva lahko se 1x cez tisto resitev ki si mi jo predlagal zadnjic, za zdruzevanje editov, in validationov? Glej onlyPersonalInfoooo.js

7. PERSONALINFO.js - poglej si state personalInfoOnce in kje ga uporabljam, ker gre za neke vrste fixed state

8. SEEALLCHANGES.js - conditional rendering na conditional rendering, ali je to ok praksa?
8. SEEALLCHANGES.js - v renderingu conditional renderaj samo ce se spremenljivka spremeni drugace ne, ker jaz imam po defaultu da se je spremenil npr in email in pasword, ceprav se je mogoce spremenil samo password

9. HOME.js - conditional renderji!

10. ADDEXAMS.js, ALLEXAMS.js, FIRSTPAGE.js, INFOONTIME.js, NAVBAR.js, INDEX.js - to je vse kul

11. Link - PERSONALINFO.js (osebni podatki se ne spreminjajo za ta link)

12. Link - ONLYEXAMS.js (zmeraj mi naload original, tudi ce se exam kasneje edita)

13. Link - FEEDCHANGESDETAIL.js (miljon conditional renderjev!!!, glej 8.2 isti problemi)

14. HOOKS, APP.js - check it out
