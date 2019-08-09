//      sep 路径中的分割符 为了适配不同的操作系统
const { sep } = require('path')

module.exports = ({ file }) => {
  // 编译的时候处理不同的样式文件 可能是 css/less/sass/vue

  // 判断文件路径中是否包含 vant , 是否是vant提供的样式 | 如果是设置 rootValue = 37.5 如果是自己写的设置 rootValue = 75
  let rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5
    : 75

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}
