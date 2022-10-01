# Configuration Management
##　ディレクトリ構造(Directory tree)
Untitled
  Ldocs
  Lflontend
    Lpublic
    Lsrc
        L components/
        L parts/
        L templates/
        L views/
        L pages/
  Lbackend
    Lpublic
    Lsrc
        L components/
        L parts/
        L templates/
        L views/
        L pages/
    
## ディレクトリ位置付け
### Flontend
- docs
    - 開発に関連する規約, ルールドキュメント管理用ディレクトリ

### public
- 原則、利用しない

### src
- フロントで実現するロジックを以下のフォルダで管理する
- Atomic Designを用いたコンポーネント管理を行う

### components
- parts
  - ロジック(計算)が無いUIコンポーネント
  - スタイルを伴う
- templates
  - partsレイヤーとtemplatesレイヤーに依存
  - 部分的に切り出した範囲内のレイアウトからコンポーネントごとに依存するロジックを処理する
- views
  - Templatesにデータを渡すことを目的とする
  - APIの通信/DBデータの取得をテンプレートに割り振る
- pages
  - ページの表示を目的とする
  - viewsレイヤーに全て依存
  - ページのタイトルやディスクリプションなどのメタ情報の設定をする


