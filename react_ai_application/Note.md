# **CREATING AN ARTIFICIAL INTELLIGENCE REACT APP, ALAN AI**

## **Install dependecies** :

1. npm i @alan-ai/alan-sdk-web : This is going to allow us to use all the voice capabilities.
2. @material-ui/core : That's the ui kit we are going to use for styling
3. classnames: because we are going to have multiple components that have multiple class names.
4. words-to-numbers: when we use the command open article number 15 we need to parse the words 15 to actual numbers .

## **ALAN I**

1. in (studio.alan.app) ===> or just look in google Alan AI
2. Create a new project
3. we can see an intent('hello world', p => { p.play('(hello|hi there))}) ===> **This is your voice command and the response.**
   4.How do we actually connect it and get the key, well you go to :
   ** </> Integrations** and then in here you get the **Alan SDK Key** you just copy it , go back to our
   application and simply paste it there.

4. Now we can make Alan listen for certain commands inside the useEffect.
5. Now if you wanna tested you write the following in an if statement:

```
onCommand: ({command}) => {
    if(command === 'testCommand'){
        alert('This code was executed');
    }
}
```

and back in the page you write the following =

```
intent('What does this app do ?' , 'What can I do here?',
    reply('This is a news Project.'));
)
```

back in the localhost you can see be alanBtn and iteract with the same queries or questions.

6. How do we trigger this test command right there , for that we need to make an intent but instead of replying something , we have to trigger a command on the response and in there we can also trigger a
   callback function on our command.
   In the callback function we get access to the p instance, that's basically playing anything you want and then we can call that p and we can p.play this is going to be the same as response.

```
ntent('Start a command', (p) => {
    p.play('Hello, I understood your command.')
})

```

7. For all the data in the application , we're going to use the news api . : **newsapi.org**
   and in there we can get the API key. and we paste downbelow of the intent.

   we need to create an endpoint for news by source . and we need to make it dynamic with $(source* (.*))

```
    intent('Give me the news from $(source* (.*))', (p) => {
       let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`

       if(p.source.value){
           NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
          }
       })
```

Note: we start with an intent 'Give me the news from' and we make it dynamic with this syntax.
$(nameofthevariable\*) then an astetisk and then you can specify what can a user say to put that data
inside the parenthesis , so that's going to be parentheses. (.\*)
