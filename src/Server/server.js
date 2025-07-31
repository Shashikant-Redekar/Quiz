const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const questions = [
  {
    id: 1,
    question: "Which planet is the largest in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter"
  },
  {
    id: 2,
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury"
  },
  {
    id: 3,
    question: "Which planet has a prominent ring system?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    answer: "Saturn"
  },
  {
    id: 4,
    question: "Which planet is known as the Earth's twin due to its similar size?",
    options: ["Mars", "Venus", "Neptune", "Mercury"],
    answer: "Venus"
  },
  {
    id: 5,
    question: "What is the name of the fifth planet from the Sun?",
    options: ["Earth", "Saturn", "Jupiter", "Mars"],
    answer: "Jupiter"
  },
  {
    id: 6,
    question: "Which dwarf planet was once considered the ninth planet?",
    options: ["Pluto", "Ceres", "Haumea", "Eris"],
    answer: "Pluto"
  },
  {
    id: 7,
    question: "Which planet takes the longest time to orbit the Sun?",
    options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
    answer: "Neptune"
  },
  {
    id: 8,
    question: "Which is the only planet known to support life?",
    options: ["Mars", "Venus", "Earth", "Saturn"],
    answer: "Earth"
  },
  {
    id: 9,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn"
  },
  {
    id: 10,
    question: "What is the name of Earth's natural satellite?",
    options: ["Europa", "Phobos", "Moon", "Titan"],
    answer: "Moon"
  }
];

app.use(express.json());
app.use(cors());

app.get('/quiz',(req,res) => {
    const resp = res.json(questions);
    res.send(resp);
})

app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${port}`)
});
