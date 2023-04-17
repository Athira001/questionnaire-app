## A Sample Questionnaire Web App Using React 

 **A small web application that enables a user to answer a questionnaire.**
- The questionnaire is based on a JSON (`src/data/questionnaire.js`) that the frontend uses to drive the questions. 
- Currently, we are supporting `input` (types as text, email, radio, etc) and `textarea` tag. 
- The user can go back to a previous question without losing the answers have given in a current question
- Followed Mobile-First Approach 
- Using animation 
- Support tests

Desktop view

<img width="1062" alt="image" src="https://user-images.githubusercontent.com/37729206/159499663-c49f3e42-afd5-4441-8665-08610e78e4f2.png">

Mobile view

<img width="313" alt="image" src="https://user-images.githubusercontent.com/37729206/159499938-f8348f10-2657-4be4-9808-eb84f8bc5325.png">

### Following Design System
 we use the idea of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) as a part of building a web page.

 Basic Terminology
* Atom - A single and the most basic entity in our system. This can be anything, be it a single image or a simple piece of text indicating a headline/subheadline.

* Molecules - Group of atoms forms a molecule. A combination of an image and a headline can form a card, which is indeed a molecu****le.
`Atom + Atom = Molecule`

* Row - Group of molecules forms a row. A couple of card groups arranged in some order can form a row. This can be the highest entity level in our system where multiple rows form a web page.
`Molecule + Molecule = Row`.

### Prerequisites
To set up the development environment you need to have `Node >= 14.0.0` and `npm >= 5.6` on your machine.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best perfo
