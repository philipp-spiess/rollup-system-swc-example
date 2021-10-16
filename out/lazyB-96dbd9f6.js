System.register(['./shared-92152495.js'], (function (exports) {
  'use strict';
  var shared;
  return {
    setters: [function (module) {
      shared = module.s;
    }],
    execute: (function () {

      exports('default', lazyB);

      function lazyB() {
          console.log("I am lazy B!");
          shared();
      }

    })
  };
}));
