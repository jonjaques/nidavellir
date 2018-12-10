import Path from 'path'
import Webpack from 'webpack'

const config: Webpack.Configuration = {
  context: Path.resolve('src/app'),
  entry: ['./browser'],
  devtool: 'source-map',
  output: {
    path: Path.resolve('dist'),
    filename: 'app.js'
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: ['.ts', '.tsx', '.mjs', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false
          }
        }
      }
    ]
  }
}

export = config