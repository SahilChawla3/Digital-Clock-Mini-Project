let incrementseconds = setInterval(()=>{
    let a = new Date();

    let seconds = document.getElementsByClassName("seconds")[0];
    seconds.innerHTML =  a.getSeconds();

    let minutes = document.getElementsByClassName("minutes")[0];
    minutes.innerHTML=a.getMinutes();

    let hour = document.getElementsByClassName("hour")[0];
    hour.innerHTML=a.getHours();

    let fulldate = document.getElementsByClassName("fulldate")[0];
    fulldate.innerHTML=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear();
},1000)    