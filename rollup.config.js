import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';

export default {
  input: 'build/target/main.js',
  output: {
    dir: 'public/target',
    format: 'esm',
  },
  plugins: [terser(), minifyHTML()],
};
