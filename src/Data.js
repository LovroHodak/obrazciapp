export const allUsers = [
  {
    id: 1,
    name: "Ana",
    surname: "Novak",
    address: {
      street: "Slovenska",
      number: "10b",
      postNr: 2000,
      city: "Maribor",
      country: "Slovenia",
    },
    birthDay: "03.10.1989",
    gender: "female",
    exams: [{ name: "Math", grade: 10 }],
    email: "ana@gmail.com",
    password: "love88",
    actions: [
      { what: "added personal info", when: "2.1.2008" },
      { what: "added new exam", when: "2.2.2010" },
    ],
  },
  {
    id: 2,
    name: "Miha",
    surname: "Muha",
    address: {
      street: "Cankarjeva",
      number: "24",
      postNr: 1000,
      city: "Ljubljana",
      country: "Slovenia",
    },
    birthDay: "14.02.1990",
    gender: "male",
    exams: [{ name: "Music", grade: 7 }],
    email: "miha@gmail.com",
    password: "morelove99",
    actions: [
      { what: "added personal info", when: "2.1.2008" },
      { what: "added new exam", when: "2.2.2010" },
    ],
  },
];
