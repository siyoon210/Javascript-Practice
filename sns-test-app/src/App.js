import firebase from "firebase/app"
import "firebase/messaging";

function App() {
    const publicVapidKey = process.env.REACT_APPI_PUBLIC_VAPID_KEY;

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        // firebase.analytics();
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const getToken = () => {
        const messaging = firebase.messaging();
        // [START messaging_get_token]
        // Get registration token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        messaging.getToken({vapidKey: publicVapidKey}).then((currentToken) => {
            if (currentToken) {
                // Send the token to your server and update the UI if necessary
                // ...
                console.log(currentToken);
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
                // ...
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
        });
        // [END messaging_get_token]
    }

    return (
        <div className="App">
            <h1>Hello World</h1>
            <input onClick={getToken} type={"button"} value={"getToken"}/>
        </div>
    );
}

export default App;
