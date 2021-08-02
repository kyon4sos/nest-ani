<template>
  <h1>test{{ t }}</h1>
  <a-button type="primary" @click="onPlus">+</a-button>
</template>

<script>
import { defineComponent, ref } from "vue";
import { appStore } from "@/store/modules/app";
export default defineComponent({
  name: "test",
  setup() {
    const t = ref(0);
    const onPlus = () => {
      t.value++;
      appStore.setMenus([
        {
          path: "/test",
          meta: { title: "参数", show: true },
        },
      ]);
    };
    return {
      onPlus,
      t,
    };
  },
});
</script>
