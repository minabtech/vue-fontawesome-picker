<template>
  <div class="vfa">
    <transition name="fade">
      <div
        @click.self="closeOnContainerClick ? (visible = false) : undefined"
        class="vfa-container"
        v-show="visible"
      >
        <div
          :style="{ width: width, height: height }"
          class="vfa-content"
          ref="main"
        >
          <div class="vfa-header">
            <div class="vfa-search">
              <input
                placeholder="Search here..."
                type="text"
                v-if="searchable"
                v-model="keyword"
              />
            </div>
          </div>

          <div class="vfa-icons-container">
            <div class="vfa-icons">
              <template v-for="icon in currentIcons">
                <div
                  :key="icon.class"
                  :class="['vfa-icon', selected(icon) ? 'selected' : undefined]"
                >
                  <slot name="icon" v-bind:icon="icon" v-bind:picked="picked">
                    <icon :icon="icon" @click.native="picked(icon)" />
                  </slot>
                </div>
              </template>
            </div>
          </div>
          <div class="vfa-pagination">
            <h3>{{ icons.length }} Icons</h3>
            <slot
              name="pagination"
              v-bind:next="next"
              v-bind:previous="previous"
              v-bind:to="to"
            >
              <div>
                <span @click="previous" class="vfa-pagination-item"
                  >&lsaquo;</span
                >
                <span @click="next" class="vfa-pagination-item">&rsaquo;</span>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
    <slot name="activator" v-bind:on="on"></slot>
  </div>
</template>

<script>
import _icons from "./icons";
import Icon from "./icon.vue";

export default {
  name: "vfa-picker",
  props: {
    isUnicode: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    isBoth: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 36
    },
    closeOnContainerClick: {
      type: Boolean,
      required: false,
      default: true
    },
    width: {
      type: String,
      default: "80%"
    },
    height: {
      type: String,
      default: "70%"
    },
    value: {
      type: String
    },
    only: {
      type: Array,
      default() {
        return ["solid", "regular", "brands"];
      }
    },
    searchable: {
      type: [Boolean, String],
      default: true
    }
  },
  components: {
    Icon
  },
  data() {
    return {
      visible: false,
      page: 1,
      keyword: undefined
    };
  },
  computed: {
    currentIcons() {
      return this.icons.slice(
        (this.page - 1) * this.itemsPerPage,
        this.page * this.itemsPerPage
      );
    },
    icons() {
      let icons = _icons.filter(icon => {
        return icon.styles.some(v => this.only.indexOf(v) > -1);
      });

      if (this.keyword) {
        icons = icons.filter(icon => {
          return this.keyword
            ? icon.label.toLowerCase().includes(this.keyword.toLowerCase())
            : true;
        });
        // eslint-disable-next-line
        this.page = 1;
      }

      return icons;
    },
    totalItems() {
      return this.icons.length;
    },
    totalPages() {
      return Math.ceil(this.icons.length / this.itemsPerPage);
    }
  },
  methods: {
    on() {
      this.visible = true;
    },
    next() {
      this.page + 1 < this.totalPages ? this.page++ : undefined;
    },
    previous() {
      this.page > 1 ? this.page-- : undefined;
    },
    to(page) {
      this.page = page;
    },
    selected(icon) {
      return icon.class === this.value || icon.unicode === this.value;
    },
    picked(icon) {
      this.visible = false;

      if (this.isUnicode) return this.$emit("input", icon.unicode);

      if (this.isBoth) {
        this.$emit("update:class", icon.class);
        this.$emit("update:unicode", icon.unicode);
        this.$emit("input", {
          class: icon.class,
          unicode: icon.unicode
        });
        return;
      }

      return this.$emit("input", icon.class);
    }
  }
};
</script>

<style lang="sass" scoped>
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.5s

.fade-enter,
.fade-leave-to,
.fade-leave-active
  opacity: 0
</style>
