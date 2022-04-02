const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp_real_value')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.data_hide')

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a1e9903fccfc01bbede395c4cc91cad8`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData)
           
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            
            const tem= temp_real_value.innerText = arrData[0].main.temp;
            console.log(tem);
            
            const tem_status = temp_status.innerText = arrData[0].weather[0].main;
            console.log(tem_status)
            // // condition to check sunny or cloudy
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood)
            if(tempMood == "Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #a4b0be'></i>";
        
            }else if(tempMood == "Rain"){
                temp_status.innerHTML="<i class='fas fa-rain' style='color: #a4b0be'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#f1f2f6'></i>"
                    
            }

            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText=`Plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click',getInfo);

// ------------------------Date-----------------------------------------
const CurDate = document.getElementById("day");
        let weathercon = document.getElementById("today_data");
        // const tempStatus = "Clouds"
        const getCurrentDay = () =>{   //-----------> Weekday
            var weekday = new Array(7);
            weekday[0]="Sunday";
            weekday[1]="Monday";
            weekday[2]="Tueday";
            weekday[3]="Wednesday";
            weekday[4]="Thursday";
            weekday[5]="Friday";
            weekday[6]="Satarday";

            let currentTime = new Date();
            days=weekday[currentTime.getDay()]
            day.innerText=days
        };
        getCurrentDay()
        
        const getCurrentTime = () =>{
            var month = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
            var now = new Date();
            var month = month[now.getMonth()+1];
            var dates = now.getDate();
            today=(dates + "-"+ month);
            today_data.innerText= today

           
        };

        getCurrentTime();