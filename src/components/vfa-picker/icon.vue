<template>
  <div :title="icon.label">
    <span :class="[parent, `fa-${icon.class}`, 'vfa-icon-preview']" />
    <div class="vfa-icon-info">
      <span class="class">{{ icon.class }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "vfa-icon",
  props: {
    icon: {
      type: Object,
      required: true
    }
  },
  computed: {
    parent() {
      if (this.icon.styles.indexOf("regular") > -1) {
        return "fa";
      } else if (this.icon.styles.indexOf("solid") > -1) {
        return "fas";
      } else if (this.icon.styles.indexOf("brands") > -1) {
        return "fab";
      }
      return "";
    }
  }
};
</script>
