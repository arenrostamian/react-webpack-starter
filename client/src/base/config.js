import firebase from 'firebase'

export const baseConfig = {
  apiKey: 'AIzaSyCx_rr-2ngyM08IcoZftYxbncZHTPC8Yj0',
  authDomain: 'nom-app-7d441.firebaseapp.com',
  databaseURL: 'https://nom-app-7d441.firebaseio.com'
}

export const base = firebase.initializeApp(baseConfig)
