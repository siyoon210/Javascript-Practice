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
    
- `npm run start` 혹은 `yarn start` 명령어를 사용하면 컴파일 이후에 node로 컴파일된 파일(index.js)을 실행한다.

# 0.4 First steps with Typescript
- 메서드 매개변수에 nullable 설정은 `?`를 붙인다. 
   ```ts
   const sayHi = (name, age, gender?) => {
    console.log(`Hello! ${name}. ${gender} ${age}`)
   }
  
  sayHi("siyoon", 35); //gender를 명시하지 않아도 됨.
   ```
  
# 0.5 Types in Typescript
- 메서드 매개변수에 타입 지정하기, 
   ```ts
   // 반환값은 void로 설정함
   const sayHi = (name: string, age: number, gender: string) :void => {
    console.log(`Hello! ${name}. ${gender} ${age}`)
   }
   ```

## ts-watch 설치하기
- 소스코드 변경후 저장후에 컴파일이 성공하면 바로 실행하도록 도와준다.

1. tsc-watch 설치
    ```shell
    yarn add tsc-watch --dev
    ```
    - `--dev` 설정으로 `package.json`에 `devDependencies`로 tsc-watch가 설치되었다!
    
2. `package.json` `script` 수정
    ```json
    "start": "tsc-watch --onSuccess \"node dist/index.js\" "
    ```
    - `--onSuccess` 설정으로 컴파일 성공시에만 `node`로 `dist/index.js` 실행
    - 처음 실행시에만 `yarn start`로 하고 이후에는 저장시에 자동 감지됨
   
3. `Cannot find module 'typescript/bin/tsc'` 에러가 발생할때 아래 명령어 실행
   ```shell
   npm i -D @types/node typescript ts-node
   ```

## ts 컴파일 파일 수정하기
- `tsconfig.json` 수정
```json
{
    "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```
- `src/` 하위파일들로 컴파일하여 컴파일된 파일들은 `dist` 디렉토리에 드렁감
- `index.ts`도 `src`로 이동

# 0.9 Creating a Block part Two
- crypto-js 설치
   ```shell
   yarn add crypto-js
   ```
