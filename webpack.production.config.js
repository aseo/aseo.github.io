module.exports = {
  entry: './app/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
   },
  module: {
    loaders: [{
      test: /\.jsx?$/,

      // There is not need to run the loader through
      // vendors
      exclude: /node_modules/,
      loader: 'babel',
      query:
        {
          presets:['react'],
          presets:['es2015', 'react']
        }
    }]
  }
}