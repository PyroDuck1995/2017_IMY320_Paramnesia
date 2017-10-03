$(function(){
  'use strict';
  var $page = $('#container'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 1000, 
          render: function ($container) {

            $container.addClass('is-exiting');

            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {

            $container.removeClass('is-exiting');

            $container.html($newContent);
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});