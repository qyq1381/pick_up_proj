<template>
<div class="white elevation-2">
  <v-toolbar flat dense class="cyan" dark>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <slot name="action"></slot>
    <!--become a attr?-->
  </v-toolbar>

  <div class="pl-4 pr-4 pt-2 pb-2">
    <slot>
      No slot content defined.
    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: "Panel",
  props: ["title"]
};
</script>

<style scoped>
</style>