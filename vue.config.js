module.exports = {
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
  }
};
