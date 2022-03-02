/*NOTE: A reducer is a function so let's do it like that, that function accepts the state and the 
action.
based on the action type so if action.type is = to create , then we want to do some logic like, we
want to return either action or we want to return the state changed by the action.
Usually you are going to have multiple if statements for a lot of different things and for that reason 
people prefer to have the switch statement and this is how it works.
*/

export default (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post.id !== action.payload);
    case "UPDATE":
    case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];

    default:
      return posts;
  }
};
