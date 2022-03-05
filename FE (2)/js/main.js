$(function() {
    var items = [
        {
            'name': 'aptitude',
            'value': 0
        },
        {
            'name': 'aptitude',
            'value': 0
        },
        {
            'name': 'aptitude',
            'value': 0
        }
    ];

    var mvps = [
        {
            'name': 'Ahmed Okour',
            'year': 2017,
            'category':'Technology',
            'country': 'United States',
            'image': 'https://gravatar.com/avatar/b7b89620523b452157fd689a97f3c8bc?s=253&amp;d=https://mvp.sitecore.net/images/mvp-base-user-grey.png' 
        },
        {
            'name': 'Akshay Sura',
            'year': 2022,
            'category':'Technology',
            'country': 'United States',
            'image': 'https://gravatar.com/avatar/e0b04a874221e6d5b81b8d04b13547e1?s=253&d=https://mvp.sitecore.net/images/mvp-base-user-grey.png' 
        },
        {
            'name': 'Alessandro Faniuolo',
            'year': 2022,
            'category':'Technology',
            'country': 'United States',
            'image': 'https://gravatar.com/avatar/af57a5ed8dc1d24e4ddd9d613b066603?s=253&d=https://mvp.sitecore.net/images/mvp-base-user-grey.png' 
        },
        
    ];

    // GET SLIDERS
    async function getData() {
        try{
            //let response = await fetch("");
            //return await response.json();
            
            return await items;
            
        }catch(err){
            console.error(err);
        }
    }

    getData()
    .then(function(data){
        window.console.log(data);
        let content = '' ;
        $.each(data, function (key, val) {
            content += `
            <div class="row align-items-center">
                <div class="col">
                    <p>${val.name}</p>
                </div>
                <div class="col">
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="${val.value}" class="slider" id="range${key}">
                        <p>Value: <span class="value"></span></p>
                    </div>
                </div>
            </div>`;
        });

        $("#items").html(content);

    })
    .catch(function (error) {
        error.message; // 'An error has occurred: 404'
    });


    //GET MVPS
    async function getMVPS() {
        try{
            //let response = await fetch("");
            //return await response.json();
            
            return await mvps;
            
        }catch(err){
            console.error(err);
        }
    }

    getMVPS()
    .then(function(data){
        window.console.log(data);
        let content = '' ;
        $.each(data, function (key, val) {
            content += `
                <div class="row">
                    <div class="col-lg-4">
                        <img class="card-img-top"
                            src="${val.image}"
                            alt="${val.name}">
                    </div>

                    <div class="col-lg-8">
                        <div class="mvp-year">${val.year}</div>
                        <div class="card-body">
                            <div class="mvp-category">${val.category}</div>
                            <h5 class="card-title">${val.name}</h5>
                            <p class="card-text">
                            <i class="fas fa-globe"></i>
                                ${val.country}
                            </p>
                        </div>
                    </div>
                </div>`;
        });

        $("#cards").html(content);

    })
    .catch(function (error) {
        error.message; // 'An error has occurred: 404'
    });

    $(document).on('input','.slider', function(e){
        let sliderVal = parseInt($(this).val());
        $('#submit').prop('disabled', false);
        if(sliderVal === 100){
            $('.slider').not(this).prop('disabled', true);
        }else{
            $('.slider').prop( "disabled", false ); 
        }
        $(this).attr('value', sliderVal);
        $(this).siblings('p').find('span.value').text(sliderVal);

    });

    $("#submit").on('click', function(){
        var sum = 0;
        $.each($('.slider'), function(){
            console.log($(this).val());
            sum += parseInt($(this).val());
        });
        
        if(sum > 100){
            toastr.error('Review percentages, should not be greater than 100')
        }
    });

    
    
});