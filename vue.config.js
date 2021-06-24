module.exports = {
    pwa: {
      name: 'SingaPore Tour',
      themeColor: '#A566FF',
      msTileColor: '#000000',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }