"use strict";

import "./sass/styles.sass";
import VueFontAwesomePickerComponent from "./vfa-picker-component.vue";

export default class VueFontAwesomePicker {
  constructor(options = {}) {
    const defaults = {};
    this.options = { ...defaults, ...options };
  }

  static install = Vue => {
    Vue.component("vfa-picker", VueFontAwesomePickerComponent);
  };
}
