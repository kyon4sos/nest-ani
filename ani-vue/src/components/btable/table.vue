<template>
  <div class="b-tabale">
    <div class="mb-2 toolbar">
      <slot name="toolbar"></slot>
    </div>
    <a-table :columns="columns" :data-source="data">
      <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
        <slot :name="item" v-bind="data"></slot>
      </template>
      <!-- <template #action="{ record }">
      <span>
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link">
          More actions
          <down-outlined />
        </a>
      </span>
    </template> -->
    </a-table>
  </div>
</template>
<script lang="ts">
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    colunms: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    console.log(props);

    const columns = props.colunms;
    const data = props.data;

    return {
      columns,
      data,
    };
  },
  components: {
    SmileOutlined,
    DownOutlined,
  },
});
</script>

<style lang="scss" >
.b-table {
  .toolbar {
  }
}
</style>