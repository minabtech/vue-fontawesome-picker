<template>
  <vfa-picker v-model="v">
    <template v-slot:activator="{ on }">
      <input v-model="v" @click="on" placeholder="Icon Class" type="text" />
    </template>
  </vfa-picker>
</template>

<script>
export default {
    name: "BasicClassExample",
    data() {
      return {
        v: undefined
      }
    }
}
</script>