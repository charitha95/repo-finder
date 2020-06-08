# React Repo Finder.

## Demo

Live Sandbox: https://codesandbox.io/s/github/charitha95/repo-finder
<br/><br/>

## Description :newspaper:

Repo finder is a CRA application implemented to find available repos based on a given GIT user name. Application implements its own custom state management system to manage the state of the application. Uses standard React and `GIT public` endpoints to fetch data.
<br/>

## Installing :wrench:

- Copy the url https://github.com/charitha95/repo-finder.git
- Do a `git clone` with the url.
- Run `yarn` in terminal to install modules.
  <br/>

## Running the project :runner:

- Run `yarn start` in terminal to run the project. This will spin up the app and open in a browser.
  <br/>

## State management mechanism - Explanation:fire:

##### Folder structure

There is folder called `store` and everything related to state management is going under this folder. It has two sub folders and a `Provider` file.

##### Provider Component

`Provider` is a component which lately gonna wrapup the application. So in any component you can access the `state object` and `dispatch`. This component returns the `Context.Provider` with values as above mentioned.

##### Context

For this application it has a single context called `Context` and has exported within the same `Provider` component. With the help of `useReducer` hook we've passed reducer and the initial state to it. Then destruct the values as `[ contextState, dispatch ]`. `Provider` component and returns the `Context.Provider` with value of (`value={{ contextState, dispatch }}`). So by calling the correct context in any component you can get those two values.

##### Reducers folder

This folder contains three files and a single folder. `repository.reducer.js`, `readme.reducer.js` will be combined into a one reducer called `rootReducer`. To combine those two reducers it has used a utility function which is specified inside the `util` folder called `combineReducers`.

`.reducer.js` files has its own reducers. It contains its own initial state as well. These files will be triggered when you dispatch and action from action creators. Each reducer has three states respectively `fetching, success,` and `error`. These reducers are the places where it changes the state of the context depending on the action user dispatches.

##### Action folder

This folder contains three files. Two files are `action` files and one is a `action-type` file. It has moved commonly used string like key into `types` file so that those keys can refers from one place than writing it manually.

`.action.js` files gets the `dispatch` from the component you call. Once you get the reference to the dispatch in action you dispatch actions based on the scenarios. There are tree scenarios respectively `fetching, success,` and `error`. `fetching` will be dispatch soon after you hit to the action, `success` will call when it is are done with the `api request`. And finally `error` will be dispatch if any errors occurd. NOTE: `api requests` have moved to a separate folder to keep the separation of concerns (SoC) as a design principle.
