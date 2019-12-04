const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const publicPath = process.env.NODE_ENV === 'production' ? './' : '/';
module.exports = {
  publicPath:publicPath,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    open:true,
    host: '0.0.0.0',
    port:9966,
    proxy:{
      '/api':{
        // target: 'https://www.xluob.com/',
        target: 'https://qb.xluob.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
