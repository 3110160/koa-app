System.register([], function (_export, _context) {
  "use strict";

  var app5;
  return {
    setters: [],
    execute: function () {
      app5 = function app5() {
        new Vue({
          el: '#app-5',
          data: {
            message: 'Hello Vue.js!'
          },
          methods: {
            reverseMessage: function reverseMessage() {
              this.message = this.message.split('').reverse().join('');
            }
          }
        });
      };

      _export("default", app5);
    }
  };
});
