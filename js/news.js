// News Portal Website 
const handleCategory =async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();

    const tabcontainer = document.getElementById('tab-container');
    data.data.news_category.slice(0,3).forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
            <a onclick="handleLoadNews('${category.category_id}')" class="tab text-2xl">${category.category_name}</a> 
        `
        tabcontainer.appendChild(div);
    });
    console.log(data.data.news_category[0].category_name); 
}

// Handle Load news 
const handleLoadNews =async (categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();

    const cardcontainer = document.getElementById('card-container');
    cardcontainer.textContent = '';
    data.data.forEach(news=>{
        console.log(news);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class=" card w-80 h-[550px] shadow-xl mt-10">
                    <figure>
                    <img class="w-72 h-48 rounded mt-3" src=${news.image_url}/>
                    </figure>

                    <div class="card-body flex mb-0 ">
                        <h2 class="card-title w-[180px] text-left " >
                            ${news.title.slice(0,30)}
                        </h2>
                        <div class="badge badge-secondary ml-48 -mt-10">${news.rating.badge}</div>
                    </div>
                    <div class="">
                        <p class="p-8 text-justify w-[300px]">${news.details.slice(0,100)}</p>
                    </div>
                    <div class="flex justify-between">
                        <div class="avatar online  ">
                            <div class="w-24 rounded-full mb-5">
                                <img src="/images/zyro-image.png" />
                            </div>
                        </div>
                        <p class="font-medium  mt-2">Jimmy Dane</p>
                        <p class="mt-8  -ml-24">30-08-2023</p>
                        <button class="btn btn-primary mr-4 mt-4 rounded">Details</button>
                    </div>
                </div>

        `
        cardcontainer.appendChild(div);

    })
}

handleCategory();