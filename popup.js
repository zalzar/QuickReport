//============================================================Style============================================================


//============================================================Functions============================================================
// $(function(){
//     $('#name').keyup(function(){
//         $('#source_url').text('Hello '+$('#name').val());
//     })
// })

$("#getddl").click(function(e) {
    document.getElementById('lblmess').innerHTML= 
    (formid.ddlselect[formid.ddlselect.selectedIndex].text);
    e.preventDefault();
});
// function getddl()
// {
//     document.getElementById('lblmess').innerHTML= 
//     ("Issue type: "+formid.ddlselect[formid.ddlselect.selectedIndex].text);
// };


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
