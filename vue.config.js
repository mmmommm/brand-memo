module.exports = {
  //CI上での並列実行をoffに
  parallel: false,
  //明示的にCI実行時にログを表示するように
  build: {
    quiet: false
  },
  //vuetifyに環境依存していることを明示
  "transpileDependencies": [
    "vuetify"
  ],
  //メモリの上限をいじった
  chainWebpack: (config) => {
    config.plugin("fork-ts-checker").tap((args) => {
      args[0].memoryLimit = 2048;
      return args;
    });
  }
}