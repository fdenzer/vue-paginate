import buble from 'rollup-plugin-buble';
import cjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
const version = process.env.VERSION || require('../package.json').version

const replaceConfig = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  'process.env.VUE_ENV': JSON.stringify(process.env.VUE_ENV || 'development')
}

export const entry = 'src/index.js';
export const dest = 'dist/vue-paginate.js';
export const format = 'umd';
export const moduleName = 'VuePaginate';
export const plugins = [replace(replaceConfig), node(), cjs(), buble()];
export const banner = `/**
 * vue-paginate v${version}
 * (c) ${new Date().getFullYear()} Taha Shashtari
 * @license MIT
 */`;