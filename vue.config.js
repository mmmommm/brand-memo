module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: (config) => {
    config.plugin("fork-ts-checker").tap((args) => {
      args[0].memoryLimit = 512;
      return args;
    });
  }
}