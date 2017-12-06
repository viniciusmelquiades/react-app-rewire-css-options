//@ts-check

const path = require('path');
const { getLoader } = require('react-app-rewired');

/**
 * @typedef CssModuleOptions
 * @prop {*} [cssOptions] The options to pass to the css-loader.
 */

/**
 * Returns a function that extends the css-loader options
 * @param {CssModuleOptions} [options]
 */
module.exports = (options = {}) => (config, env) => {

	/** @type {*} */
	const loader = getLoader(config.module.rules, rule => rule.test && rule.test.toString().indexOf('.css') !== -1);

	if(!loader) throw new Error('css loader not found');

	if(!(loader.use || loader.loader)) {
		throw new Error('Could find the css-loader');
	}

	const cssLoader = (loader.use || loader.loader).filter(l => l.loader && l.loader.indexOf(`${path.sep}css-loader${path.sep}`) !== -1)[0];

	if(!cssLoader) {
		throw new Error('Could find the css-loader');
	}

	cssLoader.options = {
		...cssLoader.options,
		...options.cssOptions
	};

	return config;
}