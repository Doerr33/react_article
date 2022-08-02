/*
 * @Descripttion: 
 * @version: 请写项目版本
 * @Author: @zhuling
 * @Date: 2022-08-02 10:20:32
 * @LastEditors: @zhuling
 * @LastEditTime: 2022-08-02 10:21:02
 */
const path = require('path')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    }
  }
}