$( document ).ready(function() {

    var inputVal = $(".inputs input").val();
    var negVal;

    $(".inputs input").attr("onKeyPress", "if(this.value.length==2) return false;");
    $(".inputs input").attr("min", "0");
    $(".inputs input").attr("max", "99");

    $(".inputs input").focus(function(){
        inputVal = $(this).val();
        $(this).val("");
        $(this).attr("placeholder", inputVal);
    });


    $(".inputs input").focusout(function(){

        if($(this).val().includes('-')){
            negVal = Math.abs(parseInt($(this).val()));
            $(this).val(negVal);
        }

        if($(this).val() == ""){
            $(this).val(inputVal);
        }

        if(parseInt($(this).val()) < 10){
            $(this).val('0' + parseInt($(this).val()).toString());
        }
        
    });

    $('.inputs input').keypress(function(e){
        if(e.which == 13){
            $(this).next().next().focus();
        }
    });
});
