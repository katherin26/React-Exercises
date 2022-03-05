import jwt, { decode } from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustonAuth = token.length < 500;

    let decodedData;

    if (token && isCustonAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.indexOf;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

/*Our middleware has req, res and next, that means do something and then move to the next 
thing, 
In the try block we need to see if the user is really who he is claiming to be, and we can do 
that using jsonwebtoken, so after the user is sign up or signin , he gets this specific token.
(user.js/controllers)
From take the token from the frontend we asign that token to the variable = and = req.headers.authorization
we split it and we need the token in the first position in the array.

*/

/*Wants to like a post 
    click the like button => auth middleware (NEXT) => like controller..
*/
