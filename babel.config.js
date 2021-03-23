module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]  // configuracao para "importar" em todo o componente que usar a sintaxe de html dentro do JS
  ]
}