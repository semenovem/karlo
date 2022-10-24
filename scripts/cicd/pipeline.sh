#!/bin/sh

BRANCH="gh-pages"
COMMIT_MSG="v.0.0.0"

cp -r /home/adman/.ssh ~/ || exit 1
cp -r /home/adman/.gitconfig ~/ || exit 1

git clone git@github.com:semenovem/karlo.git site || exit 1
cd site || exit 1
npm install || exit 1

git checkout -b "$BRANCH" || exit 1

npm run build || exit 1

mkdir ../deploy || exit 1
mv .git ../deploy || exit 1
mv build ../deploy/docs || exit 1
cd ../deploy || exit 1

echo 'glazkoff.ru' >docs/CNAME || exit 1

echo '*' >.gitignore || exit 1
echo '!.gitignore' >>.gitignore || exit 1
echo '!/docs' >>.gitignore || exit 1
echo '!/docs/**' >>.gitignore || exit 1

git add . || exit 1
git commit -m "$COMMIT_MSG" || exit 1

git push -u origin "$BRANCH" -f
