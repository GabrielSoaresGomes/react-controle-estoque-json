import Rotas from "./rotas";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8UwpklAj5UbNwI1Nr5o-LOi5bg-R8TRs",
  authDomain: "controle-estoque-react.firebaseapp.com",
  projectId: "controle-estoque-react",
  storageBucket: "controle-estoque-react.appspot.com",
  messagingSenderId: "374947272097",
  appId: "1:374947272097:web:3306fb91982eb52e0767e0",
  measurementId: "G-WRWHRK1C6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Rotas />
  );
}

export default App;
