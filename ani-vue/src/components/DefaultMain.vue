<template>
  <a-layout-content :style="{ margin: '24px 16px 0' }">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <a-spin :spinning="loading">
        <router-view #default="{ Component, route }">
          <component :is="Component" :key="route.fullPath"
        /></router-view>
      </a-spin>
    </div>
  </a-layout-content>
</template>

<script>
import { defineComponent, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { appStore } from "@/store/modules/app";
export default defineComponent({
  setup() {
    // const store = useStore();
    const loading = computed(() => {
      return appStore.getLoading;
    });
    return {
      loading,
    };
  },
});
</script>

<style>
</style>