const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServer = require('tie-webpack-start-server')

const cwd = process.cwd()
const app = path.join(cwd, 'generated', 'app.ts')
module.exports = {
  entry: ['webpack/hot/poll?100', app],
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StartServer({ name: 'server.js' }),
  ],
  output: {
    path: path.join(cwd, 'generated'),
    filename: 'server.js',
  },
}
