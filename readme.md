静的サイトを作るので、Gatsbyを使ってみることにする。  
hello worldプロジェクトから改造していきます。  

[![Netlify Status](https://api.netlify.com/api/v1/badges/bbfed254-4ef7-4388-a41b-6d53b7b0dde7/deploy-status)](https://app.netlify.com/sites/tobei-nozawa-information/deploys)
  

# 開発方法
↓デバッグのローカルサーバー立ち上げ  
```sh
$ npm run develop
```
  

# 本番環境に置く方法
1. ビルド  
```sh
$ gatsby build
```
2. 生成後のpublicフォルダを本番環境にコピー  
