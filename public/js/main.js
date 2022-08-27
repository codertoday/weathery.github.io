const cityname = document.getElementById('cityname');
const submitbtn=document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const tempstatus = document.getElementById('tempstatus');

const getInfo= async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    let url= `http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=ef6c42ae7a49c22259e9f6aeefe4f145`
    
    if(cityval === ""){

        city_name.innerText= `Plz write the name before search`;

    }else{
        try{
            let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=ef6c42ae7a49c22259e9f6aeefe4f145`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            const tempMood=arrData[0].weather[0].main;
            city_name.innerText = arrData[0].name;
            console.log(arrData[0].name);
            temp.innerText = arrData[0].main.temp;
            console.log(arrData[0].main.temp);
            tempstatus.innerText = arrData[0].weather[0].main;

            if(tempMood=="Clear"){
                tempstatus.innerHTML=
                    "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }else if(tempMood=="Clouds"){
                tempstatus.innerHTML=
                    "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }else if(tempMood=="Rain"){
                tempstatus.innerHTML=
                    "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }else{
                tempstatus.innerHTML=
                    "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
        }catch{
            city_name.innerText= `Plz enter the city name properly`;
        
        }
        
    }



}
submitbtn.addEventListener('click',getInfo);