import { reactive } from 'vue';

declare interface theme {
  bgColor: string;
  fontColor: string;
  borderColor: string;
}

const useTheme = (t: theme) => {
  const theme = reactive(t);
  Object.keys(t).forEach((k) => {
    setProperty(k, t[k]);
  });
  return theme;
};

const setProperty = (name: string, value: string) => {
  name = '--' + name;
  const docEle = document.documentElement;
  docEle.style.setProperty(name, value);
};

export default useTheme;
