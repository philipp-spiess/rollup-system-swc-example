System.register(['./shared-92152495.js'], (function (exports) {
  'use strict';
  var shared;
  return {
    setters: [function (module) {
      shared = module.s;
    }],
    execute: (function () {

      exports('default', lazyA);

      function lazyA() {
          console.log("I am lazy A!");
          shared();
      }

    })
  };
}));
