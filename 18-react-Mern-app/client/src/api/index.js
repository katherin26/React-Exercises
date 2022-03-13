import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

//const url = "http://localhost:5000/posts";
/*Now, creating the memory we are going to able to add a new post into our database connected to our 
server now we go to actions

create an axios instance and that's going to be = to axios.create().
THen replace all the axios for API , this is going to do the same thing.
replace url for '/posts'
*/

/*This is going to help our odd middleware and that is adding something specific to each one of our 
requests., this is going to be a function that's going to happen on each of our requests so inside the 
parenthesis you provide a callback function.
That callback function provides a request as the first parameter , so again this is going to happen before 
all of these requests. 
So why do we need to have this , because we have to send our token back to our backend so that 
the backend middleware can verify that we are actually logged in for that we can say if(localstorage.getItem)
and we want to get the item of profile that's where we store the token, so if that exists then we want to add
something to our request and that something is going to be rec.headers.Authorization, if we go back to 
the backend and we took to the middleware we can see we are taking something from  (const token = req.headers.authorization.split(' ')[1])
That's why we need to put our token and the token is going to be a string and it needs to start with the word 
'bearer', this is going to be a bare token the first thing is the bearer just a string and then the second thing 
divided by a space. 
Is the actual token, and we added with the .token
return the req and that can make all these future requests.
with that our backend is going to get a specific header and then based on that header we can do what we've
donde here in (server/middleware/auth.js/auth).
decode the data and based on that the back end is going to know that our user is indeed logged .
know we continue in server / controllers and posts.js

*/
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
//NOTE: Now we are passing the data to the backend, just so we know on which page are we currently on
//Go to server/controllers/posts.js
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
//NOTE:The endpoint is going to be posts/search/ but inside of there we are gonna use query parameters.
//Query parameters start with the ? and then you specified a variable name. (search?searchQuery=)
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

//Create the route for the sign in and sign out:

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
