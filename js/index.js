'use strict';
let middle__section = document.getElementById("middle__section");
let video__section = document.getElementById("video");
let isFirstTime = true;
function displayMiddleSection(){

    middle__section.style.display = "block";

    if (isFirstTime) {


        setTimeout(() => {
            introJs().start();
            isFirstTime = false;
        }, 1500);
    }

}

function f() {
    video__section.style.display = "flex";
}




(function() {

    var dialog = document.querySelector('#modal-example');
    var closeButton = dialog.querySelector('button');
    var showButton = document.querySelector('#vlad');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    var closeClickHandler = function(event) {
        dialog.close();
    };
    var showClickHandler = function(event) {
        dialog.showModal();
    };
    showButton.addEventListener('click', showClickHandler);
    closeButton.addEventListener('click', closeClickHandler);
}());




(function() {

    var dialog = document.querySelector('#modal-example1');
    var closeButton = dialog.querySelector('button');
    var showButton = document.querySelector('#roman');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    var closeClickHandler = function(event) {
        dialog.close();
    };
    var showClickHandler = function(event) {
        dialog.showModal();
    };
    showButton.addEventListener('click', showClickHandler);
    closeButton.addEventListener('click', closeClickHandler);
}());




(function() {

    var dialog = document.querySelector('#modal-example2');
    var closeButton = dialog.querySelector('button');
    var showButton = document.querySelector('#denys');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    var closeClickHandler = function(event) {
        dialog.close();
    };
    var showClickHandler = function(event) {
        dialog.showModal();
    };
    showButton.addEventListener('click', showClickHandler);
    closeButton.addEventListener('click', closeClickHandler);
}());




(function() {

    var dialog = document.querySelector('#modal-example3');
    var closeButton = dialog.querySelector('button');
    var showButton = document.querySelector('#nazar');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    var closeClickHandler = function(event) {
        dialog.close();
    };
    var showClickHandler = function(event) {
        dialog.showModal();
    };
    showButton.addEventListener('click', showClickHandler);
    closeButton.addEventListener('click', closeClickHandler);
}());



(function() {

    var dialog = document.querySelector('#modal-example4');
    var closeButton = dialog.querySelector('button');
    var showButton = document.querySelector('#denysD');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    var closeClickHandler = function(event) {
        dialog.close();
    };
    var showClickHandler = function(event) {
        dialog.showModal();
    };
    showButton.addEventListener('click', showClickHandler);
    closeButton.addEventListener('click', closeClickHandler);
}());