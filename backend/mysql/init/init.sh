#!/bin/bash

# テーブルを作成する
mysql -u root -proot deetube < "/docker-entrypoint-initdb.d/user.sql"