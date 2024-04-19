

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

  import { getAuth ,GoogleAuthProvider, signInWithRedirect ,getRedirectResult} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  
  const firebaseConfig = {    
    apiKey: "AIzaSyA4pEHVfYfYJ6FFVEarfmmfL3xTAfh3g-s",
    authDomain: "encipher-it.firebaseapp.com",
    projectId: "encipher-it",
    storageBucket: "encipher-it.appspot.com",
    messagingSenderId: "89045931046",
    appId: "1:89045931046:web:bd115322ea50c7bbd142e7"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  
  let google=document.querySelector(".google");
  
  google.addEventListener("click",(e)=>{
    signInWithRedirect(auth, provider);

getRedirectResult(auth)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href="new.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  });