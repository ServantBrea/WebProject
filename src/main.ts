function BuildPyramid(n:number):void{
    var i:number;
    var j:number;
    var k:number;
    var x=" ";
    var y="*";
    
    for(i=0;i<n;i++){
        var a="";
        for(j=0;j<n-(i+1);j++){
            a=a+x;
        }//画前空格
        for(k=0;k<i+1;k++){
            a=a+y;
            if(k<i){
                a=a+x;
            }
        }//画*串 
        console.log(a);
    }
}

window.onload = function() {
    BuildPyramid(4);
};