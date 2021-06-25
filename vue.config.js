module.exports = {
    pwa: {
      name: 'SingaPore Tour',
      themeColor: '#A566FF',
      msTileColor: '#000000',
      manifestOptions: {
        background_color: "#ffffff"
      },
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }