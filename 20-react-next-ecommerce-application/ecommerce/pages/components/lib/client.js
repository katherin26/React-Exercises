import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/*NOTE: If we go back to the ecommerce folder and the into the sanaty manager we 
have access to the object.
we find the projectId, dataset, apiVersion is the day of development, useCdn and for token
we can go to (tokens) and create a newToken, we need to choose Editor = Read and 
write access to all datasets.

+AddToken 
*/

export const client = sanityClient({
  projectId: "pqkyt2ce",
  dataset: "production",
  apiVersion: "2022-05-03",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

/*NOTE: We can use the builder images and we need to pass the client we just created.
Just finally sanity is going to give us access to the urls where our images are
stored.
IMPORTANT: We set this at the beggining and then we can use it in the rest of all the 
project.

In pages/index.js ===> import the client.
*/

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
