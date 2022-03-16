module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
        options: {
          sourceMap: true,
        },
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader", 
            options: vueLoaderConfig
          },
          {
              loader: "vue-svg-inline-loader",
          }
        ]
      }
    ]
  },
}
