<template>
  <a-menu
    theme="dark"
    mode="inline"
    v-model:selectedKeys="selectedKeys"
    @click="handleClick"
  >
    <template :menu="menu" v-for="menu in menus" :key="menu.path">
      <a-menu-item
        v-if="
          !menu.children &&
          (menu.meta.show == undefined || menu.meta.show == true)
        "
      >
        <template #icon>
          <HomeOutlined />
        </template>
        {{ menu.meta.title + menu.meta.show }}
      </a-menu-item>
      <SubMenu v-if="check(true, menu)" :menu="menu"></SubMenu>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { appStore } from "@/store/modules/app";
import HomeOutlined from "@ant-design/icons-vue/HomeOutlined";
import RobotOutlined from "@ant-design/icons-vue/RobotOutlined";
import { useRouter } from "vue-router";
import SubMenu from "./SubMenu.vue";
import { Menu } from "@/types/menu";
import { transformPath } from "@/utils";
export default defineComponent({
  components: {
    HomeOutlined,
    RobotOutlined,
    SubMenu,
  },
  setup() {
    const router = useRouter();
    const selectedKeys = ref<string[]>(["1"]);

    const menus = computed((): any => {
      return transformPath(appStore.getMenus);
    });
    const check = (hasChidlren: boolean, menu: Menu) => {
      if (!menu.meta.show) return false;
      return (
        hasChidlren && (menu.meta.show == undefined || menu.meta.show == true)
      );
    };

    const isShow = (hasChildren: boolean, menu: Menu) => {
      console.log("isshow");

      if (menu.meta.show === false) {
        return false;
      }
      return hasChildren && (menu.meta.show == undefined || menu.meta.show);
    };
    const handleClick = ({ item, key, keyPath }: any) => {
      router.push(key);
    };
    onMounted(async () => {});
    return { isShow, menus, check, selectedKeys, handleClick };
  },
});
</script>
