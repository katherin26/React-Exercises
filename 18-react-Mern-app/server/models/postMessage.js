/*Here we are going to utilize the possibilities of mongoose.
first we have to create a mongoose schema : const postSchema
What is a schema : with mongodb you can create documents that look absolutely different. one can have the title
and the message what can only have the message and so on.
mongoose allows us to give some sort of uniformity to our documents we are going to specify that each post is going
to have  these things. 

*/

import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
