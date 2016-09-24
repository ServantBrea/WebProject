var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
function BuildPyramid(n) {
    var i;
    var j;
    var k;
    var x = " ";
    var y = "*";
    for (i = 0; i < n; i++) {
        var a = "";
        for (j = 0; j < n - (i + 1); j++) {
            a = a + x;
        }
        for (k = 0; k < i + 1; k++) {
            a = a + y;
            if (k < i) {
                a = a + x;
            }
        }
        console.log(a);
    }
}
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    BuildPyramid(10);
};
