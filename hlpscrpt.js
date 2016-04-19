/**$("<span> It's ok to help when..</span>").before(".answer");

$( $.parseHTML( "<span class="okwhen"> It's ok to help when </span>" ) ).prependTo( ".answer" );


$( $.parseHTML( "<span> It's ok to help when </span>" ) ).prependTo( ".answer" );*/

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$( $.parseHTML( "<span class=okwhen> It's ok to help when </span>" ) ).prependTo( ".answer" );
/**
$( $.parseHTML( "<b> It's ok to help when </b>" ) ).appendTo( ".answer" );*/
