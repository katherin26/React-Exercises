import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "../Post/style";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

/*The body2 is going to be about when the post was created, we can use that moment library installed 
at the beginning that's gonna be import moment from moment */

/*NOTE: Like implementation: 
first: we are first checking if a current person likes something or if it didn't like something 
if we are checking if the likes array contains the id of the current person and that can be either the 
google id if the person did the auth or it can be a custom id from the database if that is the case 
we want to say if you and a certain number of people like something or the post has one like or multiple 
likes you can see the s there and then if the person didn't like it we can just say the number of like or 
likes and so on and the in nothing happen if you are the first to like it it's just like, 
NOTE: The user is coming from the const user = localStorage
NOTE: DELETE AND EDIT LOGIC : We have to disable the btn or action from delete and edit because 
only the user who create the post is the only one who can delete or edit, for that we are going to use
a block of code : 

we have to check if the current post was crated from the current user only in that case do we want to show
the current delete button. 

{ if the currently logged in user via google has the same id as the creator of the post or there as second
possibility  if the google logged in user or if our manually logged in user is the creator of this post} only 
if that is the case , we want to shoe the delete button. and we used && and we put the delete button.

For the edit button is the same logic.


*/
function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" />
            &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Post;
