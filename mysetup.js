let error = true

let res = [
  db.createCollection('alunos'),
  db.alunos.createIndex({ RA: 1 }, { unique: true }),
  db.alunos.createIndex({ Nome: 1 }),
  db.alunos.insert({ RA: '265974164', Nome: 'Gabriel' }),
  db.alunos.insert({ RA: '165654646', Nome: 'João' }),
  db.alunos.insert({ RA: '165465644', Nome: 'Luís' }),
  db.alunos.insert({ RA: '564564654', Nome: 'João' })
]

printjson(res)

if (error) {
  print('Error, exiting')
  quit(1)
}