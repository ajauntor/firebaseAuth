import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);




function App() {

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName, photoURL, email} = result.user;
    console.log(displayName, photoURL, email);
  });
  }


  return (
    <div className="App">
      <h3>User Authentication</h3>

    <button onClick={handleSignIn}>Sign in</button>

    </div>
  );
}

export default App;

