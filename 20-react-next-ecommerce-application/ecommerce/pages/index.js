import React from "react";
import { client } from "./components/lib/client";
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

/*NOTE: When we console.log(bannerData) we see into the console [] , we should run 
sanity start and then add the data into the banner.
Add a new element , add the image, add the button text, add product, add Desc, add 
smallText, add MidText, add LargeText, addLargeText2, add discount and finally add 
SaleTime.
*/

/*When we go back to the console, you can see an array with an object with all the data
we just passed in. */

/*heroBanner: if bannerData.length exists then we want to pass  banner.data[0] 
  when we go back to the HeroBanner we pass the heroBanner prop. and know we can use it
  to display dinamic data.
*/

function Home({ products, bannerData }) {
  console.log(bannerData);
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best gaming products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner />
    </>
  );
}

//NOTE: Fetching the data.

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  console.log({ products, bannerData });
  return {
    props: { products, bannerData },
  };
};

export default Home;
