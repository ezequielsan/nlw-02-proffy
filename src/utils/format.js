const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Fisíca",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

// Funcionalidades
function getSubject(subjectNumber) {
  return subjects[+subjectNumber - 1];
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':');
  return (+hour * 60) + +minutes;
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}