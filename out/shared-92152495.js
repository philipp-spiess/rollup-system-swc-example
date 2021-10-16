System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      exports('s', shared);

      function shared() {
          console.log("I am a shared module!");
      }

    })
  };
}));
