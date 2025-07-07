
## In JavaScript, there are simpler ways to declare a 2D array. 

Here are a few concise methods:Using Array Constructor:

```js
let rows = mat.length;
let cols = mat[0].length;
let ansArr = new Array(rows).fill().map(() => new Array(cols));
```

### Using Array.from (More Concise):

```js
let ansArr = Array.from({ length: mat.length }, () => new Array(mat[0].length));
```
### Using Array.fill (Simplest):

```js
let ansArr = Array(mat.length).fill().map(() => Array(mat[0].length));
```
