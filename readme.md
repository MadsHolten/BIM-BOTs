# INSTALL

The backend requires Node in minimum version 7.6. Get it [here](https://nodejs.org/en/)

The dependencies (express and body-parser) are installed by executing the following command:
`npm install`


# USE

#### Start server
`npm start`

#### Test server
Open the following URL in the browser:
`localhost:3000`

Open the file `Dynamo-BIM-BOT.dyn` in Revit/Dynamo while the server is running to confirm that the connection is working.


# LEARN

For testing purposes, nodemon is a good tool as it takes care of restarting the server every time you make a change to the file. To install it, do the following:

1) Close server (ctrl+c)
2) Install nodemon by executing command `npm install -g nodemon`
3) Now start the server using this command instead: `nodemon app.js`

First step is to get a good understanding of how node/express works. Read through the program and try the following:

1) Change route `/data` to return `here is some other data` instead, and confirm that it works both in the browser and with Dynamo
2) Make a new post route `/hello` that reads the body element and simply returns `hello $var` (just do it in pure Javascript)
3) change route `/data` to use another program in your preferred language

Play around and have fun! You could try some more advanced stuff:

1) Get data from another public API using the [request](https://www.npmjs.com/package/request) package (`npm install request`) - even easier with [request-promise](https://www.npmjs.com/package/request-promise) as it returns promises and thereby supports async/awain
2) Copy the project and run another API locally (on another port than 3000) and make API1 request data from API2
3) Connect with a database [mongo](https://www.mongodb.com) for instance
4) Dig into the wonderful world of Linked Building Data