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

    async function getData(id=$('#user').data('id')) {
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