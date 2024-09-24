npm run build

npm version patch --no-git-tag-version

PKG_VERSION=$(npm pkg get version --workspaces=false | tr -d \")

git add .
git commit -m "version release-v${PKG_VERSION}"

git push

npm run generate

npm publish