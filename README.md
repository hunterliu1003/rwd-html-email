# RWD - HTML - Email

## 目的
各家 Email (e.g. gmail, outlook, inbox, mobile)對於 HTML Email 的 CSS 解讀不盡相同，為了讓任何接收的Email不跑版，需要花很多時間維護。

### Zurb Foundation
[Zurb Foundation](http://foundation.zurb.com) 針對 Responsive HTML Email做了很多整合，只要按照官方的教學文件就可以達成各家 Email 不跑版，不僅相容了大部分的 Email，更可以把 Inline Style 的 HTML 拆分成好維護的 HTML 和 CSS。許多細節有興趣的話還是建議到官網細讀。

#### HTML Email 教學文件
- [Emails Docs](http://foundation.zurb.com/emails/docs/)
#### 官方的 Inliner
- [Responsive Email Inliner](http://foundation.zurb.com/emails/inliner-v2.html)

## 安裝
若要自動化的Inliner和分離的HTML和CSS則需要使用Gulp。

Zurb Foundation官方的安裝實際上遇到了許多困難，因為需要安裝許多東西。

另外對於已經很習慣使用gulp的人，仍然可嘗試這個簡單的範例，因為此範例不需要額外安裝ruby, gem, sass，更不會看到複雜的目錄結構，對於快速理解有很大的幫助。

### 本範例需安裝 Node
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)
### 全域安裝 Gulp
```
$ npm install -g gulp
```
### 下載此範例並進入該資料夾
```
$ git clone https://github.com/hunterliu1003/rwd-html-email.git
$ cd rwd-html-email
```
### 安裝所需的 node_modules
```
$ npm install
```
### 執行 gulp
```
$ gulp
```
### 網址
執行 gulp 後可到 [http://localhost:8080/](http://localhost:8080/) 查看範例。


## 測試
順利安裝並執行 gulp 之後，轉換以及壓縮過後的 html 會存在 build 資料夾中。

可利用 [Putsmail](https://putsmail.com/tests/new) 進行較有效率的測試。

Putsmail 可一次寄多個 Email 地址，並將壓縮過後的HTML程式碼貼上寄出。