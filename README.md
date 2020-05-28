# brandmemo  
  
## 簡単にいうと  
  
自分で調べた企業の情報について簡潔にメモしておける物があればいいと思い作成したサイトです（まだ途中ですが、、、）  
ログイン機能がついており、それぞれログインしていただいた方が自分でメモをつくれるようしてあります。  
  
### 現段階で完成しているページ  
※全てレスポンシブはできています。  
  
#### ホーム画面  
  
![](https://user-images.githubusercontent.com/51479834/83115503-6931c800-a105-11ea-89ec-1a2226e31fec.png)  
  
ホーム画面です。作ったメモの一覧が表示されています。  
viewmemoを押下するとメモの詳細を見ることができます。  
  
#### メモ詳細画面  
  
![](https://user-images.githubusercontent.com/51479834/80714420-e03c6680-8b2f-11ea-90a3-4bfbe1546df9.png)  
  
詳細画面です。まだ試作品ですが[日付、銘柄コード、銘柄名、時価総額、浮動株式数、テーマ、大体の株価、会社URL、理由]  
を現段階では表示しています、写っていませんが下の方にあるeditmemoを押下するとメモの編集画面に遷移します。  
  
#### メモ編集画面  
  
![](https://user-images.githubusercontent.com/51479834/83115468-5919e880-a105-11ea-83e1-004796ea5ca8.png)  
  
編集画面です。開いたメモを編集することができます。  
  
#### メモ検索画面  
  
![](https://user-images.githubusercontent.com/51479834/83115396-456e8200-a105-11ea-8e3b-f7547d598893.png)  
  
検索画面です銘柄コードで検索し一致した銘柄のメモが一覧で出るようになっています。  
  
#### メモ追加画面  
  
![](https://user-images.githubusercontent.com/51479834/80715134-e4b54f00-8b30-11ea-8031-7301a5ab5bbb.png)  
  
メモ追加画面です、メモを追加できます。  
  
#### ログイン画面  
  
![](https://user-images.githubusercontent.com/51479834/80714862-7ec8c780-8b30-11ea-8c8a-ab8bb9d2567e.png)  
  
ログイン画面です、登録画面もあるのですがほぼ同じなので割愛します。  
  
###残っている課題  
typescriptについてそれほど知見があるわけではないため、firebase、vuexの型定義にanyを用いてしまっている点  
作成者とメモの情報を紐づけられていないためログインさえすれば誰のメモでも変更できてしまう点  
