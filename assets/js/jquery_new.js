

$(document).on('click','.project-filter li',function(){
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')

});

$(document).ready(function(){
    $('.list').click(function(){
        const value= $(this).attr('data-filter');
        if(value == 'all'){
        $('article').show('1000');
        }
        else{
        $('article').not('.'+value).hide('1000');
        $('article').filter('.'+value).show('1000');
        }
    })
})
