import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  console.log(post);

  const classes = useStyles();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  /*NOTE:
  line 22: We need to loop through the comments of out specific post 
  TextField : if we need to keep track of the value of the textField we need to create another useState 
  That's going to be "comment and setComment" and we initialize with an empty string.
  useDisspatch inside "handleClick",: We need to dispatch a new action to our redux more specifically we 
  can dispatch a comment post action , our comment also needs to contain the information about who is 
  creating that specific comment, so let's grab our user from the local storage. For that we can use 
  const user = JSON.parse(localStorage.getItem('user)), this is going to populate our user from the localstorage.
  once we have our user's data let's form our comment to include the user's name and also the comment itself
  const finalComment  = `${user.result.name} : ${comment}`
  */

  const handleClick = async () => {
    const finalComment = `${user.result.name} : ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment("");
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              {c}
            </Typography>
          ))}
        </div>
        {user?.result?.name && (
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              variant="contained"
              onClick={handleClick}
              color="primary"
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
