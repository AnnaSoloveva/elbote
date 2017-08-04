define
requirejs.config({
    paths: {
        'jquery':'jquery-3.2.1.min',
        'bootstrap': '../bootstrap/js/bootstrap.min',
        'swiper':'../swiper/js/swiper.min',
        'lightgallary': '../lightGallery/js/lightgallery',
        'stacktable' : '../stacktable/js/stacktable',
        'inputmask': 'jquery.maskedinput.min',
        'script': 'script'
    },
    shim: {
        'bootstrap': {deps: ['jquery']},
        'swiper':{deps:['jquery']},
        'lightgallary':{deps:['jquery']},
        'stacktable':{deps:['jquery']},
        'inputmask':{deps:['jquery']},
        'script':{deps:['jquery', 'bootstrap', 'swiper', 'lightgallary', 'stacktable', 'inputmask']}
    }
});

require(['jquery', 'bootstrap', 'swiper', 'lightgallary', 'stacktable','inputmask', 'script'], function(){
});


