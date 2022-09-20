let error = true

let res = [
  db.alunos.drop(),
  db.alunos.createIndex({ RA: 1 }, { unique: true }),
  db.alunos.createIndex({ Nome: 1 }),
  db.alunos.createIndex({ Nome: 1 }),
  db.alunos.insert({ myfield: '265974164', thatfield: 'Gabriel' }),
  db.alunos.insert({ myfield: '165654646', thatfield: 'João' }),
  db.alunos.insert({ myfield: '165465644', thatfield: 'Luís' }),
  db.alunos.insert({ myfield: '564564654', thatfield: 'João' })
]

printjson(res)

if (error) {
  print('Error, exiting')
  quit(1)
}