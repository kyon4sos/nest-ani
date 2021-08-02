
<template>
  <btable :colunms="columns" :data="data" form>
    <template #toolbar>
      <a-button type="primary" @click="drawerVisible = true">
        <template #icon> <PlusOutlined /> </template>新键角色
      </a-button>
    </template>
    <template #operation="{ record }">
      <a-button class="mr-1" type="primary" @click="handleEdit(record.key)">
        <template #icon>
          <EditOutlined />
        </template>
      </a-button>
      <a-button class="mr-1" type="danger" @click="handleDel(record.key)">
        <template #icon>
          <DeleteOutlined />
        </template>
      </a-button>
    </template>
  </btable>
  <BForm
    modal="drawer"
    v-model:visible="drawerVisible"
    title="新键角色"
    @close="onClose"
  >
  </BForm>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import {
  SmileOutlined,
  DownOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { Permission } from "@/types";
import btable from "@/components/btable";
import BForm from "@/components/bform/Form.vue";
const columns = [
  {
    title: "角色",
    dataIndex: "name",
    key: "name",
    sorter: (a: Permission, b: Permission) =>
      a.name.localeCompare(b.name, "zh-Hans-CN", { sensitivity: "accent" }),
  },
  {
    title: "url",
    key: "url",
    dataIndex: "url",
    // slots: { customRender: "url" },
    filters: [
      { text: "home", value: "/home" },
      { text: "index", value: "/index" },
    ],
    onFilter: (value: string, record: Permission) => {
      console.log(value);
      return record.url == value;
    },
  },
  {
    title: "方法",
    key: "action",
    dataIndex: "action",
    filters: [
      { text: "GET", value: "GET" },
      { text: "POST", value: "POST" },
    ],
    onFilter: (value: string, record: Permission) => {
      console.log(value);

      return record.action == value;
    },
  },
  {
    title: "操作",
    key: "op",
    slots: { customRender: "operation" },
  },
];
export default defineComponent({
  components: {
    btable,
    SmileOutlined,
    DownOutlined,
    DeleteOutlined,
    EditOutlined,
    PlusOutlined,
    BForm,
  },
  setup() {
    const data = reactive([
      {
        name: "admin2",
        key: "1",
        action: "GET",
        url: "/home",
      },
      {
        name: "bdmin1",
        key: "2",
        action: "POST",
        url: "/index",
      },
    ]);
    const handleEdit = () => {};
    const handleDel = () => {};
    const drawerVisible = ref(false);
    const onClose = (e: any) => {
      // drawerVisible.value = false;
      console.log("e", e);
    };
    return {
      handleEdit,
      handleDel,
      drawerVisible,
      onClose,
      data,
      columns,
    };
  },
});
</script>
