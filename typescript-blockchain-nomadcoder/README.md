[타입스크립트 블록체인 (타입스크립트 강좌 - nomad coder) ](https://nomadcoders.co/typescript-for-beginners/lobby)

# 0.2 Introduction and What are we building
0. yarn 설치 
    ```shell
    npm install --global yarn
    ```
   
1. yarn으로 package.json 초기화
    ```shell
    yarn init
    ```

# 0.3 Setting Typescript Up 
1. Typescript 설치
    ```shell
    yarn global add typescript
    ```
   
2. `tscofig.json` 파일 생성 및 설정
    ```json
    {
        "compilerOptions": {
        "module": "commonjs",
        "target": "ES2015",
        "sourceMap": true
        },
        "include": ["index.ts"],
        "exclude": ["node_modules"]
    }
    ```
   
3. `index.tx` 파일 생성

4. `package.json`에 script 설정
    ```json
   "scripts": {
     "start": "node index.js",
     "prestart": "tsc"
   }
    ```
   - `tsc`가 ts를 js로 컴파일 하는 명령어 
    
- `npm start` 명령어를 사용하면 컴파일 이후에 node로 컴파일된 파일(index.js)을 실행한다.