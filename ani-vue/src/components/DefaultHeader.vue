<template>
  <a-layout-header class="default-layout__header">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(b, idx) in breadCrumb" :key="idx">{{
        b.meta.title
      }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="right">
      <div class="px-3 hover:bg-gray-200">
        <SearchOutlined :style="iconStyle" @click="searchVisible = true" />
      </div>
      <div class="relative px-3 hover:bg-gray-200">
        <BellOutlined :style="iconStyle" @click="downVisible = true" />
      </div>
      <div class="px-3 hover:bg-gray-200">
        <SettingOutlined :style="iconStyle" @click="drawerVisible = true" />
      </div>
      <a-dropdown placement="bottomRight">
        <div class="px-3 hover:bg-gray-200">
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">注销</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
  <a-modal
    v-model:visible="searchVisible"
    :footer="null"
    title="搜索"
    @ok="handleOk"
  >
    <a-input-search
      v-model:value="searchContent"
      placeholder="请输入搜索内容"
      enter-button
      @search="handleSearch"
    />
  </a-modal>
  <a-drawer title="设置" placement="right" v-model:visible="drawerVisible">
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script lang=ts>
import { computed, defineComponent, onMounted, ref } from "vue";
import BellOutlined from "@ant-design/icons-vue/BellOutlined";
import SearchOutlined from "@ant-design/icons-vue/SearchOutlined";
import SettingOutlined from "@ant-design/icons-vue/SettingOutlined";
import { useStore } from "vuex";
import { appStore } from "@/store/modules/app";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  components: {
    BellOutlined,
    SearchOutlined,
    SettingOutlined,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    console.log(route.fullPath);
    console.log(router.getRoutes());
    const searchVisible = ref<boolean>(false);
    const drawerVisible = ref<boolean>(false);
    const searchContent = ref<string>("");
    const activeKey = ref(1);
    const iconStyle = { fontSize: "24px", color: "#666" };

    const breadCrumb = computed(() => {
      const { matched } = router.currentRoute.value;
      return matched;
    });

    const handleOk = () => {};
    const handleSearch = () => {};
    return {
      iconStyle,
      activeKey,
      searchVisible,
      searchContent,
      drawerVisible,
      breadCrumb,
      handleOk,
      handleSearch,
    };
  },
});
</script>
<style>
.default-layout__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
}
.default-layout__header .right {
  display: flex;
}
</style>