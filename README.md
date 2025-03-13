Please have these 3 repos open during the next React sections. If you ever get stuck, you can look at my code for these 3 versions:


Robofriends (React v18 & Create React App) - this is the one we will use at the beginning.
https://github.com/aneagoie/robofriends/blob/master/src/containers/App.js

Robofriends (React v19+ & Vite) - this is the one you will have at the end of the section.
https://github.com/aneagoie/robofriends-latest/blob/main/src/containers/App.jsx

Robofriends (React Hooks) - this is the one you will have at the end of React Hooks section.
https://github.com/aneagoie/robofriends-hooks/blob/master/src/containers/App.js



## LifeCycle methods:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Mounting:  these methods are called when an instance of a component is being created and inserted into the DOM:
1) constructor()
2) componentWillMount()
3) render()
4) ComponentDidMount()

Updating: An update can be caused by changes to props or state.  These methods are called when a component is being re-rendered.
1) componentWillReceiveProps()
2) shouldComponentUpdate()
3) componentWillUpdate()
4) render()
5) componentDidUpdate()

![alt text](readme-img/image.png)


### Keeping the project up to date
1) Clone the repo
2) run `npm install`
  - look for vulnerabilities
3) run `npm audit fix`
  - this will fix the vulnerabilities (up to a point of breaking changes)
  - breaking changes must be fixed manually
4) run `npm audit`
  - run an audit of remaining vulnerabilities or issues
5) Before doing a `npm audit fix --force`, run a `npm update`
  - run audit again `npm audit`
6) Always review the changes before running `npm audit fix --force` !


### Deploy to GH

1) Step 1: Initialize Git Repository
Run the following commands to initialize a git repository in your Vite app and push your existing code to a remote repository on GitHub.
``` sh
$ git init
$ git add .
$ git commit -m "initial-commit"
$ git branch -M main
$ git remote add origin http://github.com/{username}/{repo-name}.git
$ git push -u origin main
```

2) Step 2: Update vite.config.js
Add the base URL in this file by setting the base as “/{repo-name}/”. For example, if your repository’s name is book-landing-page then set the base like this:

``` javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/book-landing-page/"
})
```
3) Step 3: Install gh-pages
Install gh-pages package as a dev dependency.
``` sh
npm install gh-pages --save-dev
```

4) Step 4: Update package.json
Update package.json with the following predeploy and deploy scripts.

``` js
"scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d dist",
    ...
}
```

Add the complete website URL by setting homepage in package.json
`"homepage": "https://{username}.github.io/{repo-name}/"`

Thus, your updated package.json will look like this:
``` js
{
  "name": "book-product",
  "private": true,
  "version": "0.0.0",
  "homepage": "https://aishwaryaparab.github.io/book-landing-page/",
  "type": "module",
  "scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d dist",
    "dev": "vite",
    "build": "vite build",
    ...
}
```

5) Step 5: Run Deploy
If you’ve made it till here, you’re almost there. Run the final command:

`npm run deploy`


6) One last step though!

Navigate to your remote repository on GitHub -> Settings -> Pages (left sidebar). Select source as “Deploy from branch” and branch as “gh-pages”.

