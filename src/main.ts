class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

function BuildPyramid(n:number):void {
    var i:number;
    var j:number;
    var k:number;
    var x=" ";
    var y="*";
    
    for(i=0;i<n;i++) {
        var a="";
        for(j=0;j<n-(i+1);j++) {
            a=a+x;
        }
        for(k=0;k<i+1;k++) {
            a=a+y;
            if(k<i){
                a=a+x;
            }
        }
        console.log(a);
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    BuildPyramid(10);
};