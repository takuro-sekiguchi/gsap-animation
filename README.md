# gsapアニメーションを使ったテキストアニメーション

[デモサイトはこちら](https://taku-web3.com/project/gsap-animation/index.html)

## ■新しく学んだ内容
- マイナスmarginの使い方
- user-select: none;
- pointer-events: none;
- mix-blend-mode: screen;
- mousemoveについて
- gsapの使い方について


### 要素を左上に持っていく
```css
.circle-1 {
  position: absolute;
  width: 500px;
  height: 500px;
  margin: -250px 0 0 -250px;
  border-radius: 50%;
  z-index: 1;
  background-color: black;
}
```
幅と高さの半分をマイナスmarginの上と左に当てることで無理やり要素を動かす


### user-select: none;
テキストや画像などの要素を選択できないようにするプロパティ


### pointer-events: none;
ポインターの機能が働かなくなり、クリックすることができなくなる

### mix-blend-mode: screen;
Photoshopと同じように、重なる要素に対してプロパティを指定することができる。
ブレンドモードを選択できるので、乗算やスクリーンが使える。

### mousemoveについて

よく使うタイプ一覧
```
click：クリックしたとき
mousemove：カーソルが動いた時
mouseover：カーソルが侵入してきた時
mousedown：ボタンを押した時
mouseup：ボタンを離した時
mouseout：カーソルがターゲット外に出た時に発火

keypress：キーを押して離した時
keydown：キーを押した時
keyup：キーを離した時

select：テキストフィールドで文字が選択されたとき
change：コントロールの値が変化した時
sumbit：submitボタンが押された時
reset：resetボタンが押された時
focus：フォーカスを受け取った時
blur：フォーカスを失った時

load：読み込みが完了したとき
scroll：スクロールしたとき
resize：サイズが変更されたとき
```