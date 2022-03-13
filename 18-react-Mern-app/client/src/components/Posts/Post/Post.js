import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "../Post/style";
import { useDispatch } from "react-redux";
import { getPost, deletePost, likePost } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [likes, setLikes] = useState(post?.likes);

  //NOTE: Like State, did the current user like the post or not

  const hasLikedPost = post.likes.find(
    (like) => like === (user?.result?.googleId || user?.result?._id)
  );

  const userId = user?.result.googleId || user?.result?._id;

  const handleClick = () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes?.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
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

  //NOTE: Open Post Logic

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(post._id);
              }}
              style={{ color: "white" }}
              size="small"
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message.split(" ").splice(0, 20).join(" ")}...
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={handleClick}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Post;
