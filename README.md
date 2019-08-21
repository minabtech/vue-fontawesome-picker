## Installation

**First add font awesome css to your project if you don't already have it**

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"
/>
```

### Yarn / NPM

```bash
yarn add vfa-picker

# or, using NPM

npm install vfa-picker
```

Then, import and register the component

```javascript
import Vue from "vue";
import VueFontAwesomePicker from "vfa-picker";

Vue.use(VueFontAwesomePicker);
```

### In the Browser

vfa-picker ships as an UMD module that is accessible in the browser. When loaded
in the browser, you can access the component through the `VueFontAwesomePicker`
global variable. You'll need to load Vue.js & vfa-picker JS.

```html
<!-- include VueJS first -->
<script src="https://unpkg.com/vue@latest"></script>

<!-- use the latest vfa-picker release -->
<script src="https://unpkg.com/vfa-picker@latest"></script>

<!-- or point to a specific  vfa-picker release -->
<script src="https://unpkg.com/vfa-picker@5.9.0"></script>
```

Then register the component in your javascript:

```js
Vue.use(VueFontAwesomePicker);
```
