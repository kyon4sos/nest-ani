import { h, ref } from 'vue';
import { Drawer, Modal } from 'ant-design-vue';
const BForm = (props: any, ctx: any) => {
  const modal = props.modal;
  const slots = ctx.slots;
  console.log(props);
  console.log(ctx);
  const container = modal == 'drawer' ? Drawer : Modal;
  
  return h(container, props, slots);
};

export default BForm;
