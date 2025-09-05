function tipCalculator()
{
    var bill=parseFloat(document.getElementById("bill").value);
    var tip=parseFloat(document.getElementById("tip").value);

    /*when you are fetching the value from document.ge..().value (then o/p will come in the form
    (string) so we need to convert into integer with the help of [parseFloat or parseInt] if we need to perform any calc */


    if(isNaN(bill) || bill<=0 || isNaN(tip) || tip<=0 )
    {
        alert("Please enter a valid Number");
    }
    else{
        var tipamount=(bill*tip)/100;
        var totalbill=bill+tipamount;
        document.getElementById("Tip").innerHTML=tipamount;
        document.getElementById("total").innerHTML=totalbill;
    }

}
