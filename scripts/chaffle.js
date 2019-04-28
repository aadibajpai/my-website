function shuffle() {
    var elements = document.querySelectorAll('[data-chaffle]');
    Array.prototype.forEach.call(elements, function (el) {
        var chaffle = new Chaffle(el, { /* options */ });
        chaffle.init();
    });
}
window.onload = shuffle;