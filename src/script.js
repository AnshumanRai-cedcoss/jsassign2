function calci(){
    var tc = document.getElementsByName('tyc');
    var v1=document.getElementById('time').value ;
    if(tc[0].checked){
    var cn = v1*60;
    document.getElementById('result').innerHTML = v1 + " hours = " + cn + " minutes";
    }
    else{
        var cn = v1*3600;
        document.getElementById('result').innerHTML = v1 + " hours = " + cn + " seconds";
    }
}