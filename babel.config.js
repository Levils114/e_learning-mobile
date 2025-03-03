module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['transform-inline-environment-variables', ["inline-dotenv", {
    	path: 'path/to/.env'
  	}]],
  };
};
