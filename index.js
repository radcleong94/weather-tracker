window.addEventListener('load',()=>{
    
    let timeZone = document.querySelector('.timezone');
    let temperature = document.querySelector('.degree');
    let description = document.querySelector('.description');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span')
    let icons = document.querySelector('.icon');
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            let long = position.coords.latitude;
            let lat = position.coords.longitude;
            let keys = '3b01e3d495aac1770062681a43e24432';
           
            const api = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${long}&lon=${lat}`;
            
            fetch(api)
            .then(res => {return res.json()})
            .then(data =>{
                
                    timeZone.textContent = `${data.name}/${data.sys.country}`;
                    temperature.textContent = data.main.temp;
                    description.textContent = data.weather[0].description;
                    icons.src = data.weather[0].icon;
                    let celsius = (data.main.temp - 32) * (5/9);

                    temperatureSection.addEventListener('click',()=>{
                        if(temperatureSpan.textContent === "F"){
                            temperatureSpan.textContent = 'C';
                            temperature.textContent = Math.floor(celsius);
                        }else{
                            temperatureSpan.textContent = "F";
                            temperature.textContent = data.main.temp;
                        }
                    })
                })
            });
        }
        
})