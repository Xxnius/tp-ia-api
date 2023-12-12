module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // Base indent for script
    "vue/script-indent": ["error", 4, {
      "baseIndent": 1,
    }],
    // Base html indent
    "vue/html-indent": [1, 4],
    // Disable the rule about avoiding tag on a single line
    "vue/singleline-html-element-content-newline": "off",
    // Disable rule about self closing tag
    "vue/html-self-closing": "off",
    // Disable base indent rule from eslint
    "indent": "off",
    // Avoid spaces before function (ex: data () {})
    "space-before-function-paren": "off",
    // Disable rule to remove semi colon at the end of the lines
    "semi": "off",
    // Unecessary quoting props
    "quote-props": "off"
  }
}
