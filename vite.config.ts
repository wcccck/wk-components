import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import {createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsxPlugin(),createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'public/icon')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',

    /**
     * 自定义插入位置
     * @default: body-last
     */
    // inject?: 'body-last' | 'body-first'

    /**
     * custom dom id
     * @default: __svg__icons__dom__
     */
    // customDomId: '__svg__icons__dom__',
  })],
  server:{
    proxy:{
      "/api":{
        // target:"http://124.221.191.225:7777",
        target:"http://localhost:7777/",
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/,"")
      }

    }

  }
})
