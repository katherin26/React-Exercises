import jwt, { decode } from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustonAuth = token.length < 500;

    let decodedData;

    if (token && isCustonAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

/*Our middleware has req, res and next, that means do something and then move to the next 
thing, 
In the try block we need to see if the user is really who he is claiming to be, and we can do 
that using jsonwebtoken, so after the user is sign up or signin , he gets this specific token.
(user.js/controllers)
From take the token from the frontend we asign that token to the variable = and = req.headers.authorization
we split it and we need the token in the first position in the array.
Then we are gonna have two kinds of tokens, we're gonna have the one from the google auth and 
we're gonna have our own.
If the token.length is less than 500. that means is our own, if token.length is greater than 500
that's going to be google auth.

let decodedData; //That's the data we want to get from the token itself.

if(token && isCustomAuth) in that case we want to set the decoded data to be = jwt.verify()
this is going to give us the data from each specific token, it's going to give us the username
of the person and its id inside of here we have to pass the token, and we need to have that 
secret what we were taling about. In this case is 'test' it has to be the same secret you used 
when you were creating that specific token , and know what we have the data .

We know what user is logged in and which user is for example liking the post or deliting the post.
so we're going to store his id in (req.userId) = decodedData?.id;

And for the google token , we are gonna do the same thing, decoded data is going to be equal to json web
token.decode(token) and we only pass the token , we don't need the secret.

sub = is simply google's name for a specific id that differentiates every single google user, basically
it's an id that we can differentiate the users with.

Finally we can call the next, so that we can pass the action into the second thing..

If a user Wants to like a post = he has to do this = 
    click the like button => auth middleware (NEXT) => like controller..
*/

/*Wants to like a post 
    click the like button => auth middleware (NEXT) => like controller..
*/
