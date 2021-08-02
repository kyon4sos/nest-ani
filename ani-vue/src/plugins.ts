import { App } from 'vue';
import {
  Button,
  Layout,
  Menu,
  Breadcrumb,
  Alert,
  Avatar,
  Modal,
  Input,
  Drawer,
  Dropdown,
  Tabs,
  Spin,
  Row,
  Col,
  Table,
  Tag,
  Divider,
  Form,
} from 'ant-design-vue';
const components = [
  Button,
  Layout,
  Menu,
  Breadcrumb,
  Alert,
  Avatar,
  Modal,
  Input,
  Drawer,
  Dropdown,
  Tabs,
  Spin,
  Row,
  Col,
  Table,
  Tag,
  Divider,
  Form,
];

export const antd = {
  install: (app: App) => {
    components.forEach((c) => app.use(c));
  },
};
