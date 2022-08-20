import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyChMLpTJOtgPeigBlZezCmMe4WOxdJV2Aw',
  authDomain: 'auth-eacc0.firebaseapp.com',
  projectId: 'auth-eacc0',
  storageBucket: 'auth-eacc0.appspot.com',
  messagingSenderId: '987609352588',
  appId: '1:987609352588:web:272bb39a7b9121d640eea9'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);