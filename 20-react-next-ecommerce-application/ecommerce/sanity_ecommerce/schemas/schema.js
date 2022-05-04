import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import product from "./product";
import banner from "./banner";

/*NOTE: Once we have import the product and the banner.js, we can use it inside the
 array and pass the value, inside our desk sanity we can see the product and the banner.*/

export default createSchema({
  name: "default",
  types: schemaTypes.concat([product, banner]),
});
