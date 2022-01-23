import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

//Now we can use out alanBtn once our application opens and , how are we going to do that ??? well of course
//using  the useEffect .

const alanKey =
  "04f32d892ff5e002ad97f99e7f0774112e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  //UseEffect take two parameters the firstOne is a callback function and the second one is a dependecy array.
  //Based on the things we have in this array useEffect is going to be called multiple or maybe just one
  //time, if we leave this array empty that means that it's going to run only one time and that time ,
  //is going to be once our components mounts.
  //So inside useEffect() = inside alaBtn , we have the api key or the key that allows to use alan.
  useEffect(() => {
    alanBtn({
      key: alanKey,
    });
  }, []);
  return (
    <div>
      <h1>Alan AI News Applation</h1>
    </div>
  );
};

export default App;
