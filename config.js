import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD_4k1yT24K-zLUaYTrhYCd3zaUqjYnuXc",
  authDomain: "team-voting-c6d3b.firebaseapp.com",
  databaseURL: "https://team-voting-c6d3b-default-rtdb.firebaseio.com",
  projectId: "team-voting-c6d3b",
  storageBucket: "team-voting-c6d3b.appspot.com",
  messagingSenderId: "1055384060494",
  appId: "1:1055384060494:web:f80a9f5c19410f5e4eb91f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();