<template>
  <a-layout class="defalut-layout">
    <a-layout-sider
      style="height: 100vh"
      breakpoint="lg"
      :collapsed-width="collapsedWidth"
      collapsible
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo">Neko</div>
      <Menu />
    </a-layout-sider>

    <a-layout>
      <Header />
      <Main />
      <a-layout-footer style="text-align: center">
        neko studio ©2021
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Header from "@/components/DefaultHeader.vue";
import Menu from "@/components/menu/Menu.vue";
import Main from "@/components/DefaultMain.vue";
import { appStore } from "@/store/modules/app";

export default defineComponent({
  components: {
    Header,
    Menu,
    Main,
  },
  setup() {
    const collapsedWidth = ref(80);
    const onCollapse = (collapsed: boolean, type: string) => {};

    const onBreakpoint = (broken: boolean) => {
      if (broken) {
        collapsedWidth.value = 0;
      } else {
        collapsedWidth.value = 80;
      }
    };
    onMounted(() => {
      appStore.reqMenus();
    });
    return {
      collapsedWidth,
      selectedKeys: ref<string[]>(["4"]),
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>
<style>
.defalut-layout .logo {
  line-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
  text-align: center;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>
