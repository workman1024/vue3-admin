
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configSvgIconsPlugin } from './svgSprite';

export function createVitePlugins(isBuild: boolean) {
    const vitePlugins = [
        vue(),
        VueSetupExtend(),
        AutoImport({
            dts: './auto-imports.d.ts',
            imports: ['vue', 'vue-router', 'vuex']
        }),
        vueJsx(),
        configSvgIconsPlugin(isBuild)
    ];
    return vitePlugins;
}