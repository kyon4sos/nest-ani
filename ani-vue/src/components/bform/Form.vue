<template>
  <FormContainer> 
     <a-form :layout="formState.layout" :model="model" v-bind="formItemLayout">
  </FormContainer>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import FormContainer from "./FormContaniner";
export default defineComponent({
  components: { FormContainer },
  props: {
    modle,
  },
  setup() {
    const formState = reactive({
      layout: "horizontal",
      fieldA: "",
      fieldB: "",
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    });
    return {
      formItemLayout,
      formState,
    };
  },
});
</script>
