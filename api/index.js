const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'apiUser',
    password: 'test@123'
})

db.connect((err)=>{
    if(err) throw err;
    console.log("MySQL Server connected...");
});

app.get('/', (req, res) => {
    console.log('My SQL is running');
})

app.post('/api/test', (req,res)=>{
    console.log(req);
});

app.post('/api/login/createDB',(req,res)=>{
    let SQL=`CREATE DATABASE ${req.body.dbName}`;
    db.query(SQL, (err, result)=>{
       if(err) throw err;
       console.log(result);
       res.json('Database created...');
    });
});
app.post('/api/login',(req,res) => {
    console.log(req.body);
    let sql = `select * from cred.person where userName = '${req.body.user}' and userPass = md5('${req.body.pass}');`;
    db.query(sql,(err, result)=>{
        if(err) throw err;
        if(result.length == 1){
            console.log(result);
            res.json({'status': true});
        }
        else{
            res.json({'status': false});
        }
    });

    
});



app.listen('4000', console.log("Server Running on port 4000...")
    );
