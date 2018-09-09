$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
$( document ).ready(function() {
    var form = $.urlParam('form');
    var status = $.urlParam('status');
    if(form === 'contact' && status === 'success'){
        swal({
            type: 'success',
            title: 'Thanks!',
            text: "I'll be in touch shortly... here are some links to keep you busy!",
            showCancelButton: true,
            confirmButtonText: 'Project Github',
            cancelButtonText: 'Browse Imgur',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
            } else if (result.dismiss === swal.DismissReason.cancel) {
                // replace below with desired redirect location
                openInNewTab('UPDATE_THIS');
                openInNewTab('https://imgur.com');
            }
        });
    }
});