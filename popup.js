//============================================================Style============================================================


//============================================================Functions============================================================
$(function(){
    $('#name').keyup(function(){
        $('#source_url').text('Hello '+$('#name').val());
    })
})

$(document).ready(function(){
    chrome.tabs.getSelected(null,function(tab){
        var link = document.createElement('a');
        link.href=tab.url;
        $('#HostName').html(""+link.hostname);
        theURL=link;
        $('#post_Url').html(""+link);
        
    })
});

//============================================================google============================================================
