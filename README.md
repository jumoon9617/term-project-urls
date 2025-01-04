# Welcome to Term Project!
↓Remix document
- 📖 [Remix docs](https://remix.run/docs)

## 開発環境

<img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=for-the-badge">
<img src="https://img.shields.io/badge/-react-ffffff.svg?logo=react&style=for-the-badge">
<img src="https://img.shields.io/badge/-Remix-000000.svg?logo=remix&style=for-the-badge">
<img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=for-the-badge">
<img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=for-the-badge">


## ルーティング

| ルーティング | 詳細 |
| -------------------- | ------------------ |
| /                    | ホーム画面          |
| /urls                | URLの一覧画面       |
| /urls/urlId          | URLの詳細画面       |

## dev環境プレビュー

devサーバーの起動(port=3000)

```shellscript
npm run dev
```

## docker操作方法

コンテナ立ち上げ

```sh
docker-compose up -d
```

コンテナ停止

```sh
docker stop term-postgres
```

コンテナ再起動

```sh
docker start term-postgres
```

## その他
- わからないことがあればJumaまで