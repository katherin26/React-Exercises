# **Modern Full Stack ECommerce React Application with Stripe**

//NOTE: This is going to make sure to install exactly the same versions of packages.

1. **npm intall :** --legacy-peer-deps
2. **npm run dev** //RUN THE APPLICATION

## **Sanity**

1. Sanity is the platform for structured content that lets you build better digital experiences. It comes with an open-source editor built in React, Sanity Studio, and real-time hosted data store, Content Lake.

```
  1. npm install -g @sanity/cli
  2. sanity init
  3. login with google (but first create an account in sanity)
  4. ecommerce
  5. press Y
  6. If we are ok with the project path we press enter.
  7. We can choose a template ===> In this case E-commerce.
  8. In this case we choose clean project with no predefined schemas : because we are going to do it from scratch.
```

**sanity commands**

```
    1. sanity docs
    2. sanity manage
```

**How to work with sanity??**

```
1. Move to the folder : sanity_ecommerce
2. sanity start
3. Login with Google

```

**Next step : Go to schemas**

```
1. Create a new file.
2. Product.jss
```

**What do we need to do to connect our application to sanity**

1. Create a folder called : lib (as in library).
2. Create a file called client.js (and this is going to be for our sanity client).

## **PAYMENT WITH STRIPE**

1. Stripe.com
2. Open an account
3. Copy and paste the public key and the secret key.

**Custom payment flow**

prebuilt Checkout page | Custom payment flow
