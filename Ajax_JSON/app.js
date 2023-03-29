const univ = document.getElementById('uni');

fetch('http://universities.hipolabs.com/search?country=United+States')
    .then(res => res.json())
    .then(data => {
        const filterData = data.slice(0,50).map(user =>{
            return{
                uniName: user.name,
                country: user.country,
                webPage: user.web_pages[0]
            };
        });
        console.log(filterData);

        const allData = filterData.map(user =>{
            return `<div class="innerdata">
                        <p class="para1">${user.uniName}</p>
                        <p class="para2">Country: ${user.country}</p>
                        <p class="para3"><a href="${user.webPage}">Website Link</a></p>
                    </div>`
        }).join('');
        //  console.log(allData);
        univ.innerHTML = allData;
    })

