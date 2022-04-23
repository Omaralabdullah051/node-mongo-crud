/*
-----------------------------------------
TODO: 1.Create a node server with 5 steps
-----------------------------------------
1.1. create folder.
1.2. npm init
1.3. npm i express cors mongodb
1.4. script-dev: nodemon index.js
1.5. create index.js
1.6. use 5 steps to create a node server
-------------------------
TODO: Create Atlas Account
------------------------
1. sign up.google access.
2. create cluster.
3. create user dbUser and password
4. Network Acess --> ip address: allow all
5. database > Connect > code copy paste in index.js
---------------------------
TODO: CRUD operation
---------------------------
1. node mongodb CRUD > Fundamentals
2. create async run function
-----------------------------------
TODO: Integrate sending data from client to server
-------------------------------------
1. In client side: create form
2. on submit get form data and create user object
3. In server: Create user POST method to receive data on the backend
4. In Client side: set fetch with POST,header & body
5. Make sure you return a json from the POST API (res.send())
---------------------------------------
TODO: LOAD Data to the Client side
--------------------------------------
1. create get API on the server
2. create a query object
3. const cursor = collection.find(query)
4. cursor.toArray()
5. return the result (res.send())
6. In client useEffect and display like we done before (fetch process)
----------------------------------------
TODO: Delete Data from database
----------------------------------------
1. create delete API on the server
2. get the id by req.params.id
3. create a query object with the specific id.  (const query = {_id: ObjectId(id)})
4. apply deleteOne()/deleteMany() method.
5. return the result.
----------------------------------
TODO: Updating data in database
----------------------------------
1. create put API on the server.
2. get the id by req.params.id
3. create a filter object with the specific id.
4. create a update doc object and set the changes. (const updateDoc = {$set: {name:'azgor'}})
5. create a option object with the upsert key. (const option = {upsert: true})
6. apply updateOne()/updateMany() method.
7. return the result.
*/