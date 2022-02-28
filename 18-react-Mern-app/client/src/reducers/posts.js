/*NOTE: A reducer is a function so let's do it like that, that function accepts the state and the 
action.
based on the action type so if action.type is = to create , then we want to do some logic like, we
want to return either action or we want to return the state changed by the action.
Usually you are going to have multiple if statements for a lot of different things and for that reason 
people prefer to have the switch statement and this is how it works.
*/

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;

    case "CREATE":
      return posts;

    default:
      return posts;
  }
};
