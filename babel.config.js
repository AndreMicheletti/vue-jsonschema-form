module.exports = {
  presets: [
    ['@babel-preset-env', {
      useBuiltIns: false
    }]
  ],
  plugins: ['@babel/plugin-proposal-optional-chaining']
}
