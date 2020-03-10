$(document).ready(function(){
    var signUp = $("#signUp")
    var login = $("#login")
    var mainPage = $("#mainPage")
    var loginButton = $(".toSignUpButton")

    login.hide()
    signUp.hide()

    $(".toHome").click(function(e){
        e.preventDefault();
        mainPage.show(600)
        signUp.hide();
        login.hide()
        loginButton.show()
    })

    $(".toSignUp").click(function(e){
        
        e.preventDefault();
        mainPage.hide(400);
        signUp.fadeIn(500);
        login.hide(400)
        $("header").css("position", "relative")
        $(".toSignUpButton").hide()
        $("#registro").fadeIn(500)
    })

    $(".toSignUpButton").click(function(e){
        e.preventDefault();
        mainPage.hide(400);
        signUp.fadeIn(500);
        login.hide(400)
        $("#registro").fadeIn(500)
        $("header").css("position", "relative")
        loginButton.hide()
    })


    $("#toLogin").click(function(e){
        e.preventDefault();
        mainPage.hide(400);
        $("#registro").hide(500)
        login.fadeIn(500)
        $("header").css("position", "relative");
        $(".toSignUp").show(500)
        loginButton.show()
    })
    
})