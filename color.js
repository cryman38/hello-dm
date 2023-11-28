var Body = {
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = 'color';
        $('body').css('backgroundColor', color);
    },
    setColor:function(color){
        // document.querySelector('body').style.color = 'color';
        $('body').css('color', color);
    }
}
var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // i = 0;
        // while( i < alist.length ){
        //     alist[i].style.color = color;
        //     i = 1 + i;
        // }
        $('a').css('color', color);
    }
}
function NightDayHandler(self){
    if(self.value === 'night'){
        self.value = 'day';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('yelloW');
    } else {
        self.value = 'night';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('red');
    }
}
function MM_swapImgRestore() { //v3.0
    var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
  }
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_findObj(n, d) { //v4.01
    var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
      d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
    if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
    for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
    if(!x && d.getElementById) x=d.getElementById(n); return x;
  }  