import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "./components";

/*IMPORTANT: For fetch data we use something known as get server side props.
  if you export a function called getServerSideProps(Server-Side Rendering).
  Next.js will pre-render this page on each request using the data returned by 
  `getServerSideProps`.

*/

/*NOTE: if you're fetching data from an api or from a cms we can use the get server side
   prop function, inside we need to form a sanity query,
            '*[_type == "product"]' == let's grab all of the products from pur sanity 
            dashboard
   
   */

function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best gaming products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
