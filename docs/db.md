# AWSのマネジメントコンソールにログイン（Slack確認）
## IAMログイン
## MFA設定
## IAM再ログイン
## RDSのセキュリティグループに自分の環境のIP許可
# RDS疎通確認
## mysqlをローカルでダウンロード
## アクセス
 mysql -u admin -p -h database-hackathon.cw3zs4soypuy.ap-northeast-1.rds.amazonaws.com
##
show DATABASES;
use SAMPLE_DATABASE;
show tables;
select * from COMMENTS;

