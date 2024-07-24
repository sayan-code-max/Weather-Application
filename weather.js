function work(){

const city = search.value;

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ea9c5fbe08msh94731fc37347c18p1053c8jsn505fd1cfb9cf',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};


fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+ city,options)
    .then(response => response.json())
    .then(res => {
        console.log(res);
        temp.innerHTML = res.current.temp_c;
        ws.innerHTML = res.current.wind_kph;
        hmdty.innerHTML = res.current.humidity;
        
        conditionText.innerHTML = res.current.condition.text;
        conditionIcon.src = res.current.condition.icon;
    })
    .catch(err => console.error(err));

}





