import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDhzrJr50qFiRCVPxGxMyjPLR5px75HeYA',
	authDomain: 'invoicer-ff1f7.firebaseapp.com',
	databaseURL: 'https://invoicer-ff1f7.firebaseio.com',
	storageBucket: 'invoicer-ff1f7.appspot.com',
	messagingSenderId: '150210881222',
};

export default firebase.initializeApp(firebaseConfig);
