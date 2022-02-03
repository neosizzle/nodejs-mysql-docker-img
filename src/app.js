//this is the web server initialization file
//import required libraries and instansiate express app
const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json());

//db connection
const { Sequelize } = require('sequelize');

const DB_USER = process.env.MYSQL_USER
const DB_NAME = process.env.MYSQL_DB
const DB_PW = process.env.MYSQL_PW

console.log(`dbcreds ${DB_NAME} ${DB_USER}, ${DB_PW} `)
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PW, {
	host: 'sql',
	dialect: "mysql"
  });

const testConn = async () =>
{
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

testConn();

//declare which port to use, normally a port will be provided by hosting service.
//if no hosting service provides port, use port 3000
const port = process.env.PORT



//index endpoint
app.get('' , (req,res)=>{
    res.send("big gay")
})


//start the web server and listen on port

app.listen(port , ()=>{
    console.log("Server up and running at port " + port)
    console.log("If you are developing on localhost, type localhost:" + 3000 + " in your browser to access the app")
})