import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;

    this.html = $('.feature-item__html-bar');
    this.css = $('.feature-item__css-bar');
    this.js = $('.feature-item__js-bar');
    this.wp = $('.feature-item__wp-bar');
    this.rails = $('.feature-item__rails-bar');
    this.laravel = $('.feature-item__laravel-bar');
    this.react = $('.feature-item__react-bar');
    this.node = $('.feature-item__node-bar');

    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");

          that.html.animate({width:'98%'}, 2000);
          that.css.animate({width:'90%'}, 2000);
          that.js.animate({width:'80%'}, 2000);
          that.wp.animate({width:'95%'}, 2000);
          that.rails.animate({width:'80%'}, 2000);
          that.laravel.animate({width:'50%'}, 2000);
          that.react.animate({width:'50%'}, 2000);
          that.node.animate({width:'40%'}, 2000);
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;