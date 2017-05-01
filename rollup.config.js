var includePaths = require('rollup-plugin-includepaths');

module.exports = {
	entry: './dist/index.js',
	sourceMap: true,
	format: 'umd',
	moduleName: 'AwayjsView',
	external: [
		'@as3web/flash',
		'@awayjs/core',
		'@awayjs/graphics',
		'@awayjs/materials',
		'@awayjs/renderer',
		'@awayjs/scene',
		'@awayjs/stage',
		'@awayjs/parsers',
		'@awayjs/view'
	],
	globals: {
		'@as3web/flash': 'As3webFlash',
		'@awayjs/core': 'AwayjsCore',
		'@awayjs/graphics': 'AwayjsGraphics',
		'@awayjs/materials': 'AwayjsMaterials',
		'@awayjs/renderer': 'AwayjsRenderer',
		'@awayjs/scene': 'AwayjsScene',
		'@awayjs/stage': 'AwayjsStage',
		'@awayjs/view': 'AwayjsView',
		'@awayjs/parsers': 'AwayJSParsers'
	},
	targets: [
		{ dest: './bundle/as3web-away3d.umd.js'}
	],
	plugins: [
		includePaths({
			include : {
				"tslib": "./node_modules/tslib/tslib.es6.js"
			}
		}) ]
};