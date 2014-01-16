Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});

Router.map(function() {
    var getRouteName = function() {
        return Router.current().path;
    };

    this.route('about', {
        path: '/about',
        template: 'about',
        before: function() {
            console.log("before " + 'about');
        },
        after: function() {
            console.log("after " + 'about');
        },
        load: function() {
            console.log("loading " + 'about');
        },
        unload: function() {
            console.log("unloading " + 'about');
        }
    });

    this.route('home', {
        path: '/',
        template: 'home',
        layoutTemplate: 'layout',
        before: function() {
            console.log("before " + 'home');
        },
        after: function() {
            console.log("after " + 'home');
        },
        load: function() {
            console.log("loading " + 'home');
        },
        unload: function() {
            console.log("unloading " + 'home');
        }
    });

});
