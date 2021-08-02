<template>
  <div>{{ menus }}</div>
  <a-button type="primary" @click="onClick">点击</a-button>
</template>

<script lang="ts">
import { appStore } from "@/store/modules/app";
import { computed, defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => {});
    const menus = computed((): any => {
      const r = appStore.menus;
      console.log(r);

      return r;
    });
    const onClick = () => {
      appStore.reqMenus();
      // router.push("/home");
    };
    return { onClick, menus };
  },
});
</script>
