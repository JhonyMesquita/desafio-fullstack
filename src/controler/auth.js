import { openDb } from '../configDB.js';

export async function createTableAuth() {
     openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS auth ( id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password PASSWORD)');
    })
}

export async function selectAuth(req, res) {
    let authEmail = req.body.email;
    let authPass = req.body.password;
    openDb().then( db=>{
       db.get('SELECT * FROM auth WHERE email=? AND password=?', [authEmail, authPass]).then(authId=>res.json(authId))
   });
    
}


export async function insertAuth(req, res) {
    let auth = req.body;
    openDb().then(db=>{
       db.run('INSERT INTO auth (email, password) VALUES (?, ?)', [auth.email, auth.password]);
   });
   res.json({
    "statusCode": 200
    })
}