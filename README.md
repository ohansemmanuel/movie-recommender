<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"> <img src="https://image.ibb.co/evGJH7/Artboard_1_3x.png" alt="Recommender Service logo"></a></p>

<h2 align="center">Introduction</h2>
You see the 'P2EM' in the Logo above? Do you have any idea what that means?

Let me help you.

P2EM refers to _"Plan to Embarass Myself"_

To understand the background story, read my article, \*
<a href="https://medium.com/the-happiness-of-pursuit/marchs-quest-is-completed-25a855fb9d57" target="_blank" rel="noopener noreferrer">How I Plan to Embarass Myself ...</a>

Hey, read it :)

<br />

<h2 align="center">What does this do?</h2>
If you read the article above, you should get a sense of what this is about.

This web app, which I call the Oldies Recommender, will recommend movies you'll love - based on your rating of a few movies.

<br />

<h2 align="center">Where can I try this out? </h2>
There you go 👉 <a href="https://oldies-recommender.herokuapp.com" target="_blank" rel="noopener noreferrer">The Oldies Recommender</a>

<br />

<h2 align="center">How do I run the app locally?</h2>

Yeah, I've got your back.

1.  Clone the repo

```bash
git clone https://github.com/ohansemmanuel/oldies-recommender.git
```

2.  Create a .env file

```bash
cd recommender-service
touch .env
```

3.  The env file requires 1 important variable

```env
REACT_APP_API_URL="..."
```

Technically, you should replace this with an instance url of the ML <a href="https://github.com/ohansemmanuel/recommender-service" target="_blank" rel="noopener noreferrer">recommender service</a>. Please see the service's README to set it up - if you must :)

Something like this should do:

```env
REACT_APP_API_URL=http://localhost:5000
```

4.  Install the app dependencies

```bash
npm install
```

5.  Enjoy!

```bash
npm start
```

<br />

<h2 align="center">Does this explanation suck?</h2>
If you have issues setting this up, I'll be happy to help.

Catch you later! 👊
