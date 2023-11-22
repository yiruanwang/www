#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
echo 'www.yiruan.wang' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='pages to gh-pages'
  githubUrl=git@github.com:yiruanwang/www.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://yiruanwang:${GITHUB_TOKEN}@github.com/yiruanwang/www.git
  git config --global user.name "supbose"
  git config --global user.email "yshxw@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支
