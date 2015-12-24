module.exports = {
   entry: './app/main.js',
   output: {
      path: './build',
      filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 3333
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
         },
{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      ]
   }
}