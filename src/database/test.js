const Database = require('./db'); // importando bd
const createProffy = require('./createProffy');

Database.then(async db => {
  // Inserir dados

  // dados fictícios para teste
  proffyValue = {
    name: "Ezequiel Santos",
    avatar: "https://avatars.githubusercontent.com/u/77730400?v=4",
    whatsapp: "85997756527",
    bio: "Entusiasta das melhores tecnologias de química avançada. <br> <br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
  }

  classValue = {
    subject: 1,
    cost: "20",
    // proffy_id virá do banco de dados após cadastrarmos um proffy
  }

  classScheduleValues = [
    {
      // class_id virá pelo banco de dados, após cadastrarmos a class (aula)
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      // class_id virá pelo banco de dados, após cadastrarmos a class (aula)
      weekday: 0,
      time_from: 520,
      time_to: 1300
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // Consultar dados inseridos

  // consultar todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys");
  // console.log(selectedProffys)

  // consultar as classes (aulas) de um determinado proffy (professor)
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.* , proffys.* 
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `);
  // console.log(selectClassesAndProffys)

  // o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
  // o horario do time_from (8h) precisa ser menor ou igual ao horário solicitado
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.* 
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520";
  `);

  // console.log(selectClassesSchedules);

})