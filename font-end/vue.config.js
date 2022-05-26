module.exports = {
  lintOnSave: false,
  devServer: {
    host: process.env.HOST || 'localhost',
    open: true,
    port: process.env.PORT || 8082,
    proxy:process.env.VUE_APP_URL,
  },
};
