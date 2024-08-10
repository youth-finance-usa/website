# Running Locally
Setting up Typescript with Express is a bit different than normal but not that hard. Here I’ll walk you through setting up a Typescript & Express environment.


## Dependencies
These are the current versions I am using, but feel free to use the latest versions. Install them with `npm install express ts-node typescript`

| Package | Version | 
| ---------| -------- |
| express | 4.19.2 | 
| ts-node | 10.9.2 |
| typescript | 5.5.4 |
| EJS | latest |

## Environment

Create a `src/index.ts` file. *(all Typescript files have the `.ts` file extension)*.
```js
// Inside index.ts

import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) =>{
    res.send('woah!');
});

app.listen(port, () =>{
    console.log(`Running on http://localhost:${port}`);
});
```

Create a `tsconfig.json` (here is the config we use).
```js
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Now edit the `package.json` file to add our scripts.
```js
"scripts": {
    "start": "ts-node src/index.ts",
    "build": "tsc",
    "serve": "node dist/index.js"
  }
```

* **Start**: Run the typescript server file.
* **Build**: Compile into `/dist`.
* **Serve**: Run the compiled server file in `/dist`.

### File Structure

* `package.json`
* `tsconfig.json`
* `/node_modules`
* `/src`
  * `index.ts`
* `/dist`
  * `index.js` 
