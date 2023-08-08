function calculatelove()
{
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    if(name1==="" ||name2==="")
    {
        alert("Enter the elements");
    }else
    {
        const lovepercentage = Math.floor(Math.random()*101);
        const result = document.getElementById("result");
        result.innerHTML =`${name1} and ${name2} 's love Percentage is ${lovepercentage}%`;

        if(lovepercentage<10){
            result.innerHTML +="<br> Poor Relationship"
        }else if(lovepercentage>10 &&lovepercentage<30)
        {
            result.innerHTML +="<br> Good Relationship"
        }else if(lovepercentage>30 && lovepercentage<60)
        {
            result.innerHTML += "<br> Average Relationship"
        }else if(lovepercentage>60 && lovepercentage<90)
        {
            result.innerHTML +="<br> Better Relationship"
        }else{
            result.innerHTML +="<br>Best Relationship"
        }
    }
}