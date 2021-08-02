import { ConfigEnv, defineConfig, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import styleImport from 'vite-plugin-style-import';
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/scss/variable.scss";',
        },
      },
    },
    plugins: [
      vue(),
      //mock
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
      //antd 动态导入
      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/css`;
            },
          },
        ],
      }),
    ],
  };
};
