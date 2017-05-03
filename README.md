LeoJS
======
a JavaScript framework for HTML5 AOP based on jQuery.


### TODO

* single method to recursive parser: app.json -> main.json -> partial.json -> ...
* http://stackoverflow.com/questions/7083550/jquery-getscript


### Tree

```
.
|-- libs
|   |-- jquery
|   `-- leojs
|-- pages
|   `-- page
|       |-- page.json
|       |-- page.js
|       |-- page.css
|       `-- page.html
`-- index.html
```


### Example for page.json

* a page have element and partials.
* partial maybe have a named element :)
* default page element: router

```
{
  "element": "admin",
  "partials": [
    "top",
    "left",
    "sign"
  ]
}
```


### Usage

* browser
  ```
  <script src="libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="libs/leojs/0.1.0/leojs.js"></script>
  <script>app.run()</script>
  ```

* router link, `rel="route"` is required.
  ```
  <a rel="route" href="#/route">link name</a>
  ```

* default route: main


### API

* base
  * base url


* page
  * current page


* hash
  * load page with no cache


* onClickRoute()
  * on click route link


* load()
  * page loader


* run()
  * app run
