<template>
  <!-- <a-row :gutter="32">
    <a-col :xs="{ span: 24 }" :lg="{ span: 6 }">
      <div class="button">1</div>
    </a-col>
    <a-col :xs="{ span: 24 }" :lg="{ span: 6 }">
      <div class="button">2</div></a-col
    >
    <a-col :xs="{ span: 24 }" :lg="{ span: 6 }">
      <div class="button">3</div></a-col
    >
  </a-row> -->
  <h1>isMobile:{{ isMobile }}</h1>
  <a-button type="primayr" @click="onClick">改变主题</a-button>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
import { useMobile, useTheme } from "@/hooks";
export default defineComponent({
  setup() {
    const onSubmit = () => {};
    const { isMobile } = useMobile();
    console.log("isMobile", isMobile);
    const r = ref({
      bgColor: "red",
      fontColor: "#fff",
      borderColor: "#fff",
    });
    let theme = useTheme(r.value);
    const onClick = () => {
      r.value = {
        bgColor: "red",
        fontColor: "#fff",
        borderColor: "#fff",
      };
    };
    onMounted(() => {
      console.log(document.documentElement);
    });
    return { onClick, onSubmit, isMobile };
  },
});
</script>
<style>
.login-page {
  width: 100%;
  height: 100%;
  background-image: url("public/img/bg1.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  display: flex;
  flex-direction: column;
}
.c {
  display: flex;
}
.button {
  width: 100%;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1rem;
  background-color: red;
}
.ant-col {
  text-align: center;
}
* {
  box-sizing: border-box;
}
</style>