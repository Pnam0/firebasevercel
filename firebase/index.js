//Build The APP instance of Firebase

import { initializeApp } from 'firebase/app';

import  firebaseConfig from "./firebaseConfig";

const firebase = initializeApp(firebaseConfig);

export default firebase