# Radarr Alexa Skill

This is a simple skill you can add to your own account and use on your Echos to add movies to Radarr. Simply say "Alexa ask radar to add The Matrix". It will then return some results asking if you would like to add for example "The Matrix Resurrections from 2021". If you answer yes it will add the movie to Radarr. If you answer no it will go to the next movie on the list eg. "The Matrix from 1999". 

## Installation
### 1. Create an Alexa skill
* Go to the [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask) login to your account and click Start a Skill.
* Cick the create a skill button
* Enter the name of the sill eg. Radarr
* Choose a `custom` model and then scroll to the bottom and select `Alexa-Hosted Node`.
* On the template page select `Start From Scratch`

### 2. Add Interaction Model
* On the build page click on `Intents` and go to the `JSON Editor` section 
* Take the `interactionModels/custom/en-US.json` file and added it to this editor, either by dragging the file to the file drop section or copying the contents.
* Change the invocation name if wanted in the `invocation` section
  * It is set to `radarr` but if you would like to do something else feel free to change it to anything. You will be using the app like `alexa radarr to download {movie}`

### 3. Build the model
* Hit the Build Model button at the top.

### 4. Add the Code
* Go to `code` tab at the top
* Copy code in `index.js` to the code in the index.js in the repository
* Copy code from `utils.js`
* Copy `package.json`
* Create a new file `radarr.js` and copy the contents from the repository
* At the top of the radarr.js file you will need to change some variables
  * apiKey - From Radarr
  * url - Internet accessible url to Radarr server
  * port - If different than 7878
  * rootPath - The folder path to where the movie will be downloaded to
  * quality - This is the quality profile you use to download movies. To get this number you will need to go to your Radarr in a browser. Go to add a movie and search for any movie and select the first one. Then right click on the quality profile dropdown menu. Click on `inspect`. In the inspection console find the `options` and find the profile number that you would like to use.
![profile-1](https://user-images.githubusercontent.com/11184046/163519659-1ef7b3e3-b836-48ab-8bcb-66071ed2932a.jpg)
![profile-2](https://user-images.githubusercontent.com/11184046/163519671-1417ce71-2d07-4b29-abf8-84a8eeb5d7db.jpg)

### 5. Deploy
* Hit the `Deploy` button and let it build.

### 6. Test
* Go to the `test` section at the top
* Click the dropdown and select `Development`
* Type in the box `ask radar to download the matrix`
* If it worked properly you should get a response asking if you would like to add the movie
