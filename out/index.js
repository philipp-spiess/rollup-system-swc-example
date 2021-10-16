System.register([], (function (exports, module) {
	'use strict';
	return {
		execute: (function () {

			console.log("I am index!");
			module.import('./lazyA-40f42fd2.js').then((cb)=>cb.default()
			);
			module.import('./lazyB-96dbd9f6.js').then((cb)=>cb.default()
			);

		})
	};
}));
