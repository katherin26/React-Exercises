import React from "react";
import { client, urlFor } from "../components/lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

/*NOTE: [slug] That means is going to be dynamic 
        example:

        /product/speaker
        /product/headphones

        It's going to be dynamically render it. 
*/

/*That is the beauty of the file page routing in next, we didn't have to implement any kind
of library like react router, we just created a new folder with a specific file and we can 
inmediately start creating the jsx and the logic for that component. */

/*If a page has Dynamic Routes and uses `getStaticProps`, it needs to define a list of paths 
to be statically generated.
*/

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          <img
            src={urlFor(image && image[0])}
            className="product-detail-image"
          />
        </div>
        {/*  <div className="small-images-container">
          {image?.map((item, i) => (
            <img src={urlFor(item)} className="" onMouseEnter="" />
          ))}
          </div>*/}
      </div>

      <div className="product-details-desc">
        <h1>{name}</h1>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>(20)</p>
        </div>
        <h4>Details :</h4>
        <p>{details}</p>
        <p className="price">${price}</p>
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus" onClick="">
              <AiOutlineMinus />
            </span>
            <span className="num">0</span>
            <span className="plus" onClick="">
              <AiOutlinePlus />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

//NOTE: Give me all the products but don't return all of the data for all the products.
//Just return the current slug property.
export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug{
      current
    }
  }`;
  const products = await client.fetch(query);

  //NOTE: We are instantly returning an object from a function.
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

/*NOTE: How is going to know sanity or next when we click in a image 
Using getStaticProps : If you export a function called `getStaticProps` from a 
page, Next.js will pre-render this page at build time using the props returned by 
getStaticProps.
*/

/*NOTE: When shoul I use getStaticProps : 
  - The data required to render the page is available at build time ahead of a user's request.
  - The data comes from a headles CMS.
  - The data can be publicly cached (not user specific).
  - The page must be pre-rendered for SEO and be very fast -- `getStaticProps` generates
  HTML and JSON files, both of which can be cached by a CDN for performance.
*/
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  console.log(`impresion =)`);
  console.log(product);
  console.log(query);
  console.log(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
