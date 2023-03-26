# Dragon Empire Canary
Welcome to dragon empire canary repo this is a beta build for the bot dragon empire this is where beta build's will be released and tested. Forking this repo is possible but the bot will not run properly you can fork this repo to modify code and make a pull request. Here is some code to copy this git repo to your Visual Studio Code area.

## Requierments
### Intents
   - Server Member Intent
   - Message Content Intent

To enable these intents go to your [Developer Portal] (https://discord.com/developers/applications)

### Config Files
  First rename config.env.example to .env and fill out the information given in the .env
```env
TOKEN=Bot_Token_Here
MONGO_URI=Mongo_Uri_Here
```
### Dependencies
   - Discord.js v14
   - [MongoDB](https://www.mongodb.com/)

## Setup
```sh
$ git clone https://github.com/sharaalt/dragon-empire-canary.git
$ cd dragon-empire-canary
$ npm i discord.js
$ node index.js
```

