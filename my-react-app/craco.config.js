const CracoLessPlugin = require("craco-less");
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: { "@": resolve("src"), components: resolve("src/components") },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module = {
        ...webpackConfig.module,
        rules: [
          {
            oneOf: [
              {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve("url-loader"),
                options: {
                  esModule: false,
                },
              },
              ...webpackConfig.module.rules[1].oneOf,
            ],
          },
        ],
      };
      return webpackConfig;
    },
  },
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
};
