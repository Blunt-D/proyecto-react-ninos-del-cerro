import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1HjfK20FW44U31hXHISKDVsYjR8AWDFs",
  authDomain: "ecommerce-ninos-del-cerro.firebaseapp.com",
  projectId: "ecommerce-ninos-del-cerro",
  storageBucket: "ecommerce-ninos-del-cerro.appspot.com",
  messagingSenderId: "36022645056",
  appId: "1:36022645056:web:d6476d6a1665d9642c8aa5"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
//Necesario inicializar el sdk de storage para guardar las imágenes proximamente