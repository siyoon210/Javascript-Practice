[트위터 클론코딩 - 노마드코더](https://nomadcoders.co/nwitter/lobby)
- Cloning Twitter with React and Firebase

# 0.2 What is Firebase

- 처음에는 리얼타임 데이터베이스 였지만, 구글이 인수한 이후로 여러가지 백엔드,devOps 기능을 제공하는 플랫폼으로 변화되었다.

- AWS Amplify는 Firebase의 AWS 버전

# 1.0 React + Firebase Setup

- Firebase 리액트앱에 사용하기
- 처음으로 안내되는 CDN 방식 말고 npm으로 하자

0. firebase 플랫폼에서 프로젝트 생성
1. `npm install --save firebase`
2. 설정 정보 저장 (firebase.js) - 프로젝트 생성하면 아래 정보를 준다.
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

# 1.1 Securing the Keys

- github에 api key값 같은걸 올리지 않기 위한 작업
    - 빌드 한후에는 이용하는 클라이언트 사용자들에게는 노출되게 된다. 이 작업은 오로지 github에만 올리지 않기 위한 작업

1. 루트 디렉토리에 `.env` 파일 생성
2. 키값으로 `REACT_APP_`이라는 접두사가 있어야하며 `REACT_APP_KEY_NAME=VALUE` 와 같은 형식으로 입력한다.
3. js 파일에서 `process.env.REACT_APP_KEY_NAME`으로 불러와서 사용한다.


# 1.2 Router Setup
- `npm i react-router-dom` 설치
- Router.js 컴포넌트 작성
```js
import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <Router>
      <Switch>
        { isLoggedIn ? (
          <>
            <Route exact path ="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        ) }
      </Switch>
    </Router>
  )
}

export default AppRouter;
```

# 2.0 Using Firebase Auth 
- jsconfig.json 파일로 컴파일 경로 지정하기
  ```json
  {
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": ["src"]
  }
  ```
  - 이렇게 하는 경우 src를 기준으로 절대경로 import 할 수 있다.

- firebase에서 auth 서비스 가져오기
  ```js
  import firebase from "firebase/app";
  import "firebase/auth";

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const authService = firebase.auth();
  ```

- 현재 유저 가져오기
  ```js
  import { authService } from "fbase";

  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    ...
    }
  ```