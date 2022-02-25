module.exports = async function (db, { proffyValue, classValue, classScheduleValues }) {
  // inserir dados na tabela de proffys
  // e retorna para a variável insertedProffy 
  // alguns dados (ex. id do utlimo proffy)
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
    ) VALUES (
        "${proffyValue.name}",
        "${proffyValue.avatar}",
        "${proffyValue.whatsapp}",
        "${proffyValue.bio}"
    );
  `);

  // pegando id do proffy inserido por ultimo
  const proffy_id = insertedProffy.lastID;

  // inserir dados na tabela classes
  // e retornando para a variável insertedClass 
  // alguns dados (ex. id da utlimo classe)
  const insertedClass = await db.run(`
    INSERT INTO classes (
      subject, 
      cost,
      proffy_id
    ) VALUES (
      "${classValue.subject}",
      "${classValue.cost}",
      ${proffy_id}
    );
  `);

  // pegando id da classe inserida por ultimo
  const class_id = insertedClass.lastID;

  // inserir dados na tablema class_schedule
  // e retorna para a variavel insertedAllClassScheduleValues
  const insertedAllClassScheduleValues = classScheduleValues.map(classScheduleValue => {
    return db.run(`
      INSERT INTO class_schedule (
        class_id,
        weekday,
        time_from,
        time_to
      ) VALUES (
        ${class_id},
        ${classScheduleValue.weekday},
        ${classScheduleValue.time_from},
        ${classScheduleValue.time_to}
      );
    `);
  });

  // aqui vou executar todos os db.runs() (Promisses pendentes) que estão 
  // no array insertedAllClassScheduleValues das classe_schedules
  await Promise.all(insertedAllClassScheduleValues);
}