// craco.config.js
module.exports = {
  devServer: (devServerConfig) => {
    // Disable fallback to index.html for unknown routes/files
    devServerConfig.historyApiFallback = false;
    return devServerConfig;
  },
};
