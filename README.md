# Connecting-NodeApplication-with-MongoAtlas
### Steps to use this project 
- STEP 1. Clone this repo on your local machine
- STEP 2. Navigate inside the folder mongoAtlasProject
```js
  cd mongoAtlasProject
```
- STEP 3. Run the followinf command being inside the mongoAtlasProject directory in terminal
```
  npm i
```
- STEP 4. Go to the mongoDB ATls at https://cloud.mongodb.com and setup a data base and obtain the user credential assign your connect Apllication credential to DB_URL
- STEP 5. To run the application, run following command in your terminal
```js
  npm run server
```
- STEP 6. Open you browser and goto the the following URL to insert the data
```js
  http://localhost:3000/insert
```
- STEP 7. To read the data form mongodb Atlas for to the following url
```js
  http://localhost:3000/read
```
- STEP 8. To update the user name got to following URL
```js
  http://localhost:3000/update?id=< put_user_ID here >&name= < Put_new_username Here >
```
- STEP 9. To perform deletion operation goto following url
```js
  http://localhost:3000/delete?id=< put_user_ID_to_be_deleted here >
```
