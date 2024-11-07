# Deployment to GitHub Pages

Follow these steps to deploy your React app to GitHub Pages.

## Step 1: Install `gh-pages`

Run the following command to install the `gh-pages` package as a development dependency:

```bash
npm install gh-pages --save-dev
```
<hr>
add these in pachage.json

"homepage": "https://username.github.io/reponame" <br>
scripts:<br>
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
<hr>

```
npm run deploy
```