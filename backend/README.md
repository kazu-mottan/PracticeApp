# Backend
- node.js
- docker(mysql)

## 手順
docker compose up

## DBのログインとデータベースの確認方法
docker ps
docker exec -it {{docker-image}} bash
mysql -uroot -p
{{パスワードを入力する}}
use deetube;
show databases;

