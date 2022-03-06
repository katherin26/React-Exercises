import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

//const url = "http://localhost:5000/posts";
/*Now, creating the memory we are going to able to add a new post into our database connected to our 
server now we go to actions

create an axios instance and that's going to be = to axios.create().
THen replace all the axios for API , this is going to do the same thing.
replace url for '/posts'
*/

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`'/posts'/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`'/posts'/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`'/posts'/${id}`);

//Create the route for the sign in and sign out:

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
