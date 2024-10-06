# Nodejs-BootCamp-by-Prince-Kumar
Details Explanation of Nodejs project



Methods to Share Data-->
-In World of Web Development Data is sent & received between Client(Like a web browser ) & Server (Built in Nodejs )
- So, there are lots of methods to send & receive data according to their need
  a)POST =
  
  b)GET = This method is used to request data from Server.  When you enter a website url in the Client( Web Browser ) ,the browser sends a GET equest to the Server to fetch the web page .

------------------------------------------------------------------------
** Basic API structure to call a GET method  **
//we required express
const express = require('express')

//we import express
const app = express()

//GET Method , req= request , res= response 

app.get('/', function (req, res) {

  res.send('Welcome to your favourite ECommerce Website. What to shopping today ?')
  
})

//server is running on Port no-3000
app.listen(3000)

-----------------------------------------------------------------------------------

## How to run a server file ? ##
a) run the command = node file_name.js (like - node server.js )

b) GET data in browser= write the url  ( http://localhost:3000/ ) & you can see it  & also you can change according to your changes

c) Stop server= Ctrl+ C , Automatic Start the Server= nodemon file.js 



  c)PUT

  d)DELETE

  e)PATCH
  


## MongoDB Tutorial | What is database & node js interview questions ##
-There are lots of Databases available in the Market. We can use according to our needs -
a) SQL
b)PostgreSQL
c)MongoDB
d)Oracle
e)MariaDB

![image](https://github.com/user-attachments/assets/edd0751c-03d7-48e7-8dc4-ed02d2ddd39a)

- Databases typically have their own server systems to manage and provide access to the data they store
-These Database server system is separated from Nodejs server  but work together to create Dynamic & Data Driven Web Applications
-
















