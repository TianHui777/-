import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import * as path from "path";

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        VueSetupExtend(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    optimizeDeps: {
        include: ['schart.js',
            `monaco-editor/esm/vs/language/json/json.worker`,
            `monaco-editor/esm/vs/language/css/css.worker`,
            `monaco-editor/esm/vs/language/html/html.worker`,
            `monaco-editor/esm/vs/language/typescript/ts.worker`,
            `monaco-editor/esm/vs/editor/editor.worker`],
    },
    server: {
        // 跨域的写法
        proxy: {
            "/api": {
                target: "http://localhost:7777", // 实际请求地址
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },

    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
                },
                javascriptEnabled: true,
            },
        },
    },
});
