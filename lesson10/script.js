const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a12d75a861d9cada98d7c5f0a788010f';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const f = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(f);
        document.getElementById('description').textContent = jsObject.list[0].weather[0].description;
        document.getElementById('high').textContent = jsObject.list[0].main.temp_max + ' °F';

        document.getElementById('icon1').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
        document.getElementById('icon1').setAttribute('alt', jsObject.list[0].weather[0].description);
        document.getElementById('degree1').innerText = jsObject.list[0].main.temp_max + ' °F';

        document.getElementById('icon2').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png');
        document.getElementById('icon2').setAttribute('alt', jsObject.list[1].weather[0].description);
        document.getElementById('degree2').innerText = jsObject.list[1].main.temp_max + ' °F';

        document.getElementById('icon3').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[2].weather[0].icon + '.png');
        document.getElementById('icon3').setAttribute('alt', jsObject.list[2].weather[0].description);
        document.getElementById('degree3').innerText = jsObject.list[2].main.temp_max + ' °F';

        document.getElementById('icon4').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[3].weather[0].icon + '.png');
        document.getElementById('icon4').setAttribute('alt', jsObject.list[3].weather[0].description);
        document.getElementById('degree4').innerText = jsObject.list[3].main.temp_max + ' °F';

        document.getElementById('icon5').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[4].weather[0].icon + '.png');
        document.getElementById('icon5').setAttribute('alt', jsObject.list[4].weather[0].description);
        document.getElementById('degree5').innerText = jsObject.list[4].main.temp_max + ' °F';
    });
