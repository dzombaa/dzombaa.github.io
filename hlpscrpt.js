/**$("<span> It's ok to help when..</span>").before(".answer");
*/
$( $.parseHTML( "<span class=okwhen> It's ok to help when </span>" ) ).prependTo( ".answer" );
