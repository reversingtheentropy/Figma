import { Book } from "../types/book";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "1984",
    author: "George Orwell",
    cover:
      "https://m.media-amazon.com/images/I/61t0bwt1s3L._SY385_.jpg",
    description:
      "Uma distopia clássica sobre um regime totalitário que controla todos os aspectos da vida através da vigilância constante e manipulação da verdade.",
    category: "Ficção",
    pages: 328,
    publishedYear: 1949,
    rating: 4.8,
    status: "read",
  },
  {
    id: "2",
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    cover:
      "https://static.skeelo.com/resize/1024/2048/80/1080/9786555114355.jpg",
    description:
      "Uma épica jornada de fantasia pela Terra-média, onde um hobbit deve destruir um anel mágico para salvar o mundo das forças do mal.",
    category: "Fantasia",
    pages: 1178,
    publishedYear: 1954,
    rating: 4.9,
    status: "reading",
  },
  {
    id: "3",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    cover:
      "https://m.media-amazon.com/images/I/71-ghLb8qML._SY385_.jpg",
    description:
      "Uma breve história da humanidade, explorando como o Homo sapiens chegou a dominar o mundo através de revoluções cognitivas, agrícolas e científicas.",
    category: "História",
    pages: 443,
    publishedYear: 2011,
    rating: 4.6,
    status: "want-to-read",
  },
  {
    id: "4",
    title: "O Código Da Vinci",
    author: "Dan Brown",
    cover:
      "https://m.media-amazon.com/images/I/51DaS6hNpPL._SY445_SX342_ControlCacheEqualizer_.jpg",
    description:
      "Um thriller místico que segue um simbologista em uma corrida contra o tempo para decifrar códigos antigos e descobrir segredos históricos.",
    category: "Mistério",
    pages: 454,
    publishedYear: 2003,
    rating: 4.3,
    status: "none",
  },
  {
    id: "5",
    title: "Hábitos Atômicos",
    author: "James Clear",
    cover:
      "https://m.media-amazon.com/images/I/51DOkmV31rL._SY445_SX342_ControlCacheEqualizer_.jpg",
    description:
      "Um guia prático sobre como pequenas mudanças podem levar a resultados extraordinários através da construção de bons hábitos.",
    category: "Autoajuda",
    pages: 320,
    publishedYear: 2018,
    rating: 4.7,
    status: "reading",
  },
  {
    id: "6",
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    cover:
      "https://m.media-amazon.com/images/I/81SQPrWU7SL._SY385_.jpg",
    description:
      "Uma obra-prima do realismo mágico que narra a saga da família Buendía em Macondo, misturando realidade e fantasia.",
    category: "Ficção",
    pages: 417,
    publishedYear: 1967,
    rating: 4.5,
    status: "want-to-read",
  },
  {
    id: "7",
    title: "A Arte da Guerra",
    author: "Sun Tzu",
    cover:
      "https://m.media-amazon.com/images/I/51Fe45NGwkL._SY425_.jpg",
    description:
      "Tratado militar chinês antigo que oferece estratégias e táticas aplicáveis não apenas à guerra, mas também aos negócios e à vida.",
    category: "Filosofia",
    pages: 273,
    publishedYear: -500,
    rating: 4.4,
    status: "read",
  },
  {
    id: "8",
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    cover:
      "https://m.media-amazon.com/images/I/61jgm6ooXzL._SY385_.jpg",
    description:
      "O primeiro livro da série que apresenta Harry Potter, um jovem bruxo que descobre seu destino mágico em Hogwarts.",
    category: "Fantasia",
    pages: 309,
    publishedYear: 1997,
    rating: 4.8,
    status: "read",
  },
];