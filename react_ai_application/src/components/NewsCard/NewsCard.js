import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

//We are destructuring the article by using another pair of curly braces.
//{(new Date(publishedAt))} = We want to create a date javascript object from the published ad thing
//that we are getting. and then we add .toDateString() and this is going to give us the date.

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={
            urlToImage ||
            "https://www.kindpng.com/picc/m/390-3902798_news-newspaper-paper-newspaper-png-transparent-png.png"
          }
        />
        <div>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
