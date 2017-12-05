# react-app-rewire-css-options
Set your own options to the CSS loader. Useful for using CSS modules easily.

**NOT YET TESTED FOR PRODUCTION BUILDS**

## Usage

```javascript
module.exports = require('react-app-rewire-css-options')({
	cssOptions: { // these are the css-loader options. See the documentation for options. https://www.npmjs.com/package/css-loader
		modules: true,
		camelCase: 'dashes',
		localIdentName: '[name]--[local]--[hash:base64:5]'
	}
});

// or

module.exports = function override(config, env) {

	const rewire = react_app_rewired.compose(
		//...
		require('react-app-rewire-css-options')({
			cssOptions: {
				modules: true,
				camelCase: 'dashes',
				localIdentName: '[name]--[local]--[hash:base64:5]'
			}
		})
		//...
	);

	config = rewire(config, env);

	return config;
};
```