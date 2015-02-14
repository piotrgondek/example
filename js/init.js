Backbone.App = {};

(function (Backbone) {
    'use strict';

    var links = {
        lider: '.welcome',
        oferta: '.offer',
        zespol: '.team'
    };

    Backbone.App.Router = Backbone.Router.extend({

        routes: {
            ':subpage': 'init'
        },

        init: function (subpage) {
            var className = links[subpage];

            if (!className) {
                return;
            }

            Backbone.$('html, body').animate({
                scrollTop: Backbone.$(className).offset().top - Backbone.$('header').outerHeight(true)
            }, 'slow');
        }
    });
})(Backbone);


$(function () {
    new Backbone.App.Router();

    Backbone.history.start({
        root: '/example/'
    });
});