# 这是一个实训项目
## 第一次克隆下来的项目需要执行以下命令
- npm i
- npm uninstall commitizen
- npm install -g commitizen
## vsCode 安装插件 
- EditorConfig for VS Code

## 规范
**不知道具体规范，慢慢总结**（遇上了就把写在下面）

**现在知道的**
 - 在pages文件中添加页面（在H builder中右键添加,能自动配置pages.json）
 - 在components文件中添加组件
 - 页面、组件名要大于两个单词
 - 引入.js文件的时候路径.js不要 import $http from '../../common/api';

**建议写一点就用 npm run lint 检查一次**

## 提交方式
1. git add . （这里会触发eslint检查）
2. git cz
3. 先选择修改类型、填入描述
4. git push