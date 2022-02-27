# **CLIENT SIDE**

1. npx create-react-app ./
2. Install dependencies: npm install
   **Axios**: For making api requests.
   **moment**: Is a library for working with time and date.
   **react-file-base64**: This is gonna to convert our images.
   **redux** and **redux-thunk**: redux thunk is used for asynchronous actions using redux.

# **SERVER SIDE**

1. npm init -y
2. Install dependencies: npm install
   **body-parser**: This one is going to enable us to send post requests.
   **Cors**: Is going to enable cross origin requests.
   **Express**: As a framework for creating the routing of our application.
   **Mongoose**: To create models for our post.
   **Nodemon**: We don't have to manually reset the server every time we make a change instead nodemon will be doing
   that for us.
3. Inside the index.js we import all the dependencies and we add in the package.json below main , "type":"module"
   and in scripts we add: "start": "nodemon index.js".
4. mongodb.com/cloud/atlas: open a free account and create a new cluster.
   go to Database Access and **add new database user**. create your username and password.
   with this credentials we'll be able to read and write to any database.
   Finally we need to go to **network access** and then in here you can click **add Ip address**.
   Then comeback to cluster and click in **connect**. and choose connect your application, because we want to connect it to our server side express and node application you can copy this string and then go back to visual
   studio.
   Create a new variable which is going to be called CONNECTION_URL: then copy and paste the string.
5. npm i dotenv
