Framexsとは
---
Framexsは、XHTMLをMVC（モデル・ビュー・コントローラ）の材料として、合成を行い、HTMLを生成するXSLTフレームワークです。

モデルとビューの両方ともXHTMLを使い、ウェブサイトではコントローラーもXHTMLに処理命令という形で埋めこんでいます。

[ナンダカフラリ](https://github.com/nandaka-furari)氏によって作られました。[原作](https://github.com/nandaka-furari/framexs)

このフレームワークは、フロントエンドXSLT技術であるxml-stylesheet処理命令を利用しています。

```
<?xml-stylesheet type="application/xml" href="framexs.xsl"?>
```

## サンプルコード

Framexsのサンプルコードを見てみましょう。

Node.jsがインストールされていれば`npm run server`でlocalhost:8080でアクセスできてサンプルコードが実行されます。

以下の図は、Framexsの代表的なディレクトリ構成です。今回は、この構成でのFramexsのはたらきについて取り上げていきます。

* /framexs.xsl
* /template.ftml
* /contents.xhtml


```tempalte.xhtml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:framexs="urn:framexs" xml:lang="ja" lang="ja">
<head>
<title> - テンプレートタイトル</title>
</head>
<body>
<h1>あいさつ</h1>
<article>
<framexs:id name="main"/>
</article>
</body>
</html>
```


```content.xhtml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="application/xml" href="framexs.xsl"?>
<?framexs.skeleton template.ftml?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>世界よこんにちは</title>
</head>
<body>
<div id="main">
<p>ハローワールド！</p>
</div>
</body>
</html>
```
template.ftmlはビュー、content.xhtmlはモデル・コントローラーとして機能します。

contents.xhtmlをブラウザで表示すると、以下のようになります。

```合成コード
<!DOCTYPE html SYSTEM "about:legacy-compat">
<html xml:lang="ja" lang="ja">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>世界よこんにちは - テンプレートタイトル</title>
</head>
<body>
<h1>あいさつ</h1>
<article>
<p>ハローワールド！</p>
</article>
</body>
</html>
```
このように、元々のcontents.xhtmlからソースコードが変化していることが分かります。tempalte.xhtmlによって定義したテンプレートに従い、Fremexsがコードを書き換えているのです。