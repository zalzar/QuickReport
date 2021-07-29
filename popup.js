//============================================================Style============================================================


//============================================================Functions============================================================
// $(function(){
//     $('#name').keyup(function(){
//         $('#source_url').text('Hello '+$('#name').val());
//     })
// })

$(document).ready(function(){
    chrome.tabs.getSelected(null,function(tab){
        var link = document.createElement('a');
        link.href=tab.url;
        $('#Full_URL').html(""+link.hostname);
        theURL=link;
        $('#post_Url_Source').html(""+link);
        
    })
});

//============================================================google============================================================
