
var input=document.querySelector("#in");
var btn=document.querySelector(".btn");
var result=document.querySelector(".result");

btn.addEventListener("click",function()
{
    if(input.value=='' ||input.value=='null')
    {
        result.innerHTML="Please Enter Your Date Of Birth"
    }
    else{
    var date=String(input.value);
    var date=date.split("-")
    let yday=parseInt(date[2]);
    let ymonth=parseInt(date[1]);
    let yyear=parseInt(date[0]);
    
    var CurrnetDate=new Date();
    let cday=CurrnetDate.getDate();
    let cmonth=CurrnetDate.getMonth()+1;
    let cyear=CurrnetDate.getFullYear();



   result.innerHTML=`you have ${Math.abs(cyear-yyear)} year and ${Math.abs(cmonth-ymonth)} Month and ${Math.abs(cday-yday)} Day`;

    }




});


    

  

 

