<template>
  <vfa-picker is-unicode="true" v-model="u">
    <template v-slot:activator="{ on }">
      <input @click="on" placeholder="Icon Unicode" type="text" v-model="u" />
    </template>
    <template v-slot:icon="{ icon, picked }">
      <div @click="picked(icon)" :title="icon.label">
        <span :class="[parent(icon), `fa-${icon.class}`, 'vfa-icon-preview']" />
        <div class="vfa-icon-info">
          <span class="class">{{ icon.unicode }}</span>
        </div>
      </div>
    </template>
  </vfa-picker>
</template>

<script>
export default {
  name: "IconSlotExample",
  data() {
    return {
      u: undefined
    };
  },
  methods: {
    parent(icon) {
      if (icon.styles.indexOf("regular") > -1) {
        return "fa";
      } else if (icon.styles.indexOf("solid") > -1) {
        return "fas";
      } else if (icon.styles.indexOf("brands") > -1) {
        return "fab";
      }
      return "";
    }
  }
};
</script>