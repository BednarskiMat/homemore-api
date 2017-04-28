This is the read me file for the API


** Important Note **
  All non-backend code( front end ) will go in the public folder. This would be preferable because CORS is not enabled on this API
**               **



Api notes


There are three different routes for the api
they all have the basic operations
  - Get (Needs to have latitude and longitude passed in get req)
  - POST  (Needs to post specific parameters per object )
  - Put (Update)
  - Delete


foods




shelters



jobs


Specific data needed for each can be found in the models directory



to run on local machine:

npm install
npm start
server will be running on port 3000
