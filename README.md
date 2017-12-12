## MDNotes
Simple application for note taking with real time sync and support for code editors.

This is the live version:
https://mdnotes-b0ddf.firebaseapp.com/

### Firebase configuration

This is firebase backend project so in order to use it locally you need to create a firebase web application and get your own credentials.

- Change the name of `keysTemplate.js` to just `keys.js`.
- In `Settings` you can click in `Add Firebase to your web app` an it will give you the fields that you need to fill the `keys.js` newly created file.
- You also need to create a Github application and registered in the Firebase Auth section.

### Installation

`npm install`

### Development

The project was made using create-react-app so we only have to do:

`npm run start`

### TODO:

- [] Once the web version is ready, we should start creating the code editor extensions

### License
MIT