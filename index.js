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

	const cssLoader = loader && loader.use.filter(l => l.loader && l.loader.indexOf(`${path.sep}css-loader${path.sep}`) !== -1)[0];

	cssLoader.options = {
		...cssLoader.options,
		...options.cssOptions
	};

	return config;
}