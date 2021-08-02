<template>
  <a-sub-menu>
    <template #title>
      <span>
        <component v-bind:is="menu.meta.icon ?? 'RobotOutlined'"></component>
        <span>{{ menu.meta.title }}</span>
      </span>
    </template>
    <template v-for="m in menu.children" :key="m.path">
      <a-menu-item v-if="!m.children && m.meta.show" :key="m.path">
        <component v-bind:is="m.meta.icon ?? 'RobotOutlined'"></component>
        <span class="nav-text">{{ m.meta.title }}</span>
      </a-menu-item>
      <SubMenu v-if="m.children && m.meta.show" :menu="m"></SubMenu>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RobotOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  name: "SubMenu",
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    RobotOutlined,
  },
  props: {
    menu: Object,
  },
  setup(props: any) {},
});
</script>

<style>
</style>