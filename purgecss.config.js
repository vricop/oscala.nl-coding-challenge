module.exports = {
  content: ['**/*.html', '**/*.js'],
  css: ['assets/css/main.min.css'],
  extractors: [
    {
      extractor: (content) => content.match(/[\w-:/%+*>&\(\).]+(?<!:)/g) || [],
      extensions: ['html', 'js'],
    },
  ],
};