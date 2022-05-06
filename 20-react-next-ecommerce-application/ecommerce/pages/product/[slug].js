import React from "react";
import { client, urlFor } from "../components/lib/client";

/*NOTE: [slug] That means is going to be dynamic 
        example:

        /product/speaker
        /product/headphones

        It's going to be dynamically render it. 
*/

/*That is the beauty of the file page routing in next, we didn't have to implement any kind
of library like react router, we just created a new folder with a specific file and we can 
inmediately start creating the jsx and the logic for that component. */

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          <img src={urlFor(image && image[0])} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product && slug.current == '${slug}][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, products },
  };
};

export default ProductDetails;
