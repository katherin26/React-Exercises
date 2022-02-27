# **CLIENT SIDE**

1. npx create-react-app ./

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
