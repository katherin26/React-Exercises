import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import wordsToNumbers from "words-to-numbers";

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";

//Now we can use out alanBtn once our application opens and , how are we going to do that ??? well of course
//using  the useEffect .
//UseEffect take two parameters the firstOne is a callback function and the second one is a dependecy array.
//Based on the things we have in this array useEffect is going to be called multiple or maybe just one
//time, if we leave this array empty that means that it's going to run only one time and that time ,
//is going to be once our components mounts.
//So inside useEffect() = inside alaBtn , we have the api key or the key that allows to use alan.
//Now we have the p.play({command: 'newHeadlines'}) whe used it inside the if statement.
//Now we need to show or set the articles or news into the screen , for that we are going to use
//use State, and the set the articles to the state.
//Now we have the newsArticles and we can now send to the components that are going to display.

const alanKey =
  "04f32d892ff5e002ad97f99e7f0774112e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setnewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setnewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "hightlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(articles[number].url, "_blank");
            alanBtn().playText("Opening....");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://i0.wp.com/synqqblog.wpcomstaging.com/wp-content/uploads/2020/09/Futuristic-image-1-Copy.png?fit=3184%2C1878&ssl=1"
          className={classes.alanLogo}
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
