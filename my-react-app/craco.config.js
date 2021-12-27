const CracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
//__dirname是当前文件夹所在路径，parh.resolve对这个路径进行一个拼接
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      store: resolve("src/store"),
      pages: resolve("src/pages"),
      components: resolve("src/components"),
    },
  },
};
