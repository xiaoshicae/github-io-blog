#!/bin/bash -ilex

# 当发生错误时中止脚本
set -e

# 安装依赖
npm install

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# git 初始化
git init

# 指定用户
git config user.email "snk_zhuang@126.com"
git config user.name "zhuangshui"

git add -A
git commit -m 'deploy'



# 部署到 https://<USERNAME>.github.io
git push -f git@github.com:xiaoshicae/xiaoshicae.github.io.git master

cd -

echo "部署GithubPages完成"
