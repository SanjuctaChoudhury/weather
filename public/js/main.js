const cityname=document.getElementById('cityname')
const submitbtn = document.getElementById('submitbtn')
const city=document.getElementById('city')
const temp_status=document.getElementById('temp_status')
const hide=document.getElementById('hide')
const datahide=document.querySelector('.middle_layer')
hide.innerText=``
temp_status.innerText=``
const getinfo =async(event) =>{
event.preventDefault()
let cityval=cityname.value
if(cityval==="")
{
  city.innerText=`write city name before search`
  hide.innerText=``
  temp_status.innerText=``
  datahide.classList.add(data_hide)
}
else{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=289db6ea5fd9c2afe3889f24a72f4832`
    const response =await fetch(url)
    const data=await response.json()
    const arrdata=[data]
    hide.innerText=arrdata[0].main.temp
    temp_status.innerText=arrdata[0].weather[0].main
    /*const tempmood=arrdata[0].weather[0].main 
    if(tempmood=="Clear")
    {
        temp_status.innerText=<i class="fa fa-sun-o"></i>
    } 
    else if (tempmood=="Clouds")
    {
        temp_status.innerText=<i class="fa fa-cloud"></i>
    }
    else if(tempmood=="Rain")
    {
        temp_status.innerText=<i class="fa fa-cloud"></i>
    }
    else{
        temp_status.innerText=<i class="fa fa-cloud"></i>
    }*/
    datahide.classList.remove(data_hide)
 }catch{
        city.innerText=``
        datahide.classList.add(data_hide)
     }

}
}



submitbtn.addEventListener('click',getinfo)
let weekday =new Array(7)
          weekday[0]="sunday"
          weekday[1]="monday"
          weekday[2]="tuesday"
          weekday[3]="wednesday"
          weekday[4]="thursday"
          weekday[5]="friday"
          weekday[6]="saturday"
let months=new Array(12)
    months[0]='january'
    months[1]='february'
    months[2]='march'
    months[3]='april'
    months[4]='may'
    months[5]='june'
    months[6]='july'
    months[7]='august'
    months[8]='september'
    months[9]='october'
    months[10]='november'
    months[11]='december'
          
        let currenttime=new Date()
        console.log(currenttime)
        let days=weekday[currenttime.getDay()]
        console.log(days)
        let month=months[currenttime.getMonth()]
        let dates=currenttime.getDate()
        let day=document.getElementById('day')
        let date=document.getElementById('date')
        day.innerText=days
        date.innerText=month+dates


