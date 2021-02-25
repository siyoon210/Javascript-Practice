[트위터 클론코딩 - 노마드코더](https://nomadcoders.co/nwitter/lobby)
- Cloning Twitter with React and Firebase

# 0.2 What is Firebase

- 처음에는 리얼타임 데이터베이스 였지만, 구글이 인수한 이후로 여러가지 백엔드,devOps 기능을 제공하는 플랫폼으로 변화되었다.

- AWS Amplify는 Firebase의 AWS 버전

# 1.0 React + Firebase Setup

- Firebase 리액트앱에 사용하기
- 처음으로 안내되는 CDN 방식 말고 npm으로 하자

1. `npm install --save firebase`
2. 설정 정보 저장 (firebase.js)
```js
import firebase from "firebase/app";

const firebaseConfig = firebase.initializeApp({
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    projectId: '<your-cloud-firestore-project>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-sender-id>'
});

export default firebase.initializeApp(firebaseConfig);
```

- https://www.npmjs.com/package/firebase