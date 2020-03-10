$(document).ready(function() {
  console.log("jquery cargado");

  $(".texto-centrado").hide();

  $(".nov1").hover(
    function() {
      $(".nov1").css("transform", "scale(1.02)");
      $("#img1").css("transition", "all 1000ms");
      $("#img1").css("filter", "blur(3px)");
      $(".show1").fadeIn(200);
    },
    function() {
      $(".nov1").css("transform", "scale(1)");
      $("#img1").css("transition", "all 1000ms");
      $("#img1").css("filter", "blur(0px)");
      $(".show1").fadeOut(200);
    }
  );
  $(".nov2").hover(
    function() {
      $(".nov2").css("transform", "scale(1.02)");
      $("#img2").css("transition", "all 1000ms");
      $("#img2").css("filter", "blur(3px)");
      $(".show2").fadeIn(200);
    },
    function() {
      $(".nov2").css("transform", "scale(1)");
      $("#img2").css("transition", "all 1000ms");
      $("#img2").css("filter", "blur(0px)");
      $(".show2").fadeOut(200);
    }
  );
  $(".nov3").hover(
    function() {
      $(".nov3").css("transform", "scale(1.02)");
      $("#img3").css("transition", "all 1000ms");
      $("#img3").css("filter", "blur(3px)");
      $(".show3").fadeIn(200);
    },
    function() {
      $(".nov3").css("transform", "scale(1)");
      $("#img3").css("transition", "all 1000ms");
      $("#img3").css("filter", "blur(0px)");
      $(".show3").fadeOut(200);
    }
  );

  var btn = $("#button");
  $(window).scroll(function() {
    if ($(window).scrollTop() < 500) {
      //btn.addClass("scrollTop");
      btn.fadeOut(300)
    } else {
      btn.fadeIn(400)
    }
  });

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  var posts = [
    {
      title: "Puma",
      photo: "img/pum.jpeg",
      description: "Encontra las últimas novedades de la marca."
    },
    {
      title: "Nike Running",
      photo: "img/pexels-photo-2729899.jpeg",
      description: "Mira los nuevos modelos disponibles."
    },
    {
      title: "Air max",
      photo: "img/pexels-photo-2759779.jpeg",
      description: "Los mejores modelos de Airmax a un solo click."
    },
    {
      title: "Converse",
      photo: "img/converse.jpeg",
      description: "Encontra los mejores modelos de Converse aquí."
    },
    {
      title: "Nike Vapormax",
      photo: "img/vapormax.jpeg",
      description: "Los mejores modelos los tenés en Flamin' Shoes."
    },
    {
      title: "Adidas",
      photo: "img/adidas-card.jpeg",
      description: "Encontra las últimas novedades de la marca."
    }
  ];
  posts.forEach((item, index) => {
      var post =  `
      <div class="card col-4 p-0">
                    <img src="${item.photo}" class="card-img-top p-0">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <hr/>
                      <p class="card-text">${item.description}</p>
                      <a href="#" class="btn btn-dark">Más información</a>
                    </div>
        </div>
      `
      $("#cards").append(post)
});
//Get user info

$.get('https://reqres.in/api/users', {page: 2}, function(response){
  console.log(response)
  response.data.forEach((element, index)=>{
    
    var user = `
<div class="sliderElement">
    <div class="client">
      <img class="profilePic" src="${element.avatar}"/>
      <h4> ${element.first_name} ${element.last_name}</h4>
      <hr class="separacion"/>
    </div>
      <div class="opinion">
        <blockquote class="userOpinion ${index}">
          
        </blockquote>
      </div>
</div>
    `
    $(".slider").append(user)
    console.log(index)
    
    var foo = index
    switch (foo) {
      case foo = 0:
          $(".0").append("Entrega rápida y precio razonable")
      break;

      case foo = 1:
        $(".1").append("Excelente producto")
      break;

      case foo = 2:
          $(".2").append("Excelente precio y calidad")
      break;

      case foo = 3:
          $(".3").append("Muy buena variedad y muy buen servicio")
      break;

      case foo = 4:
          $(".4").append("Página muy confiable")
      break;

      case foo = 5:
          $(".5").append("Siempre tienen los últimos lanzamientos!")
      break;
    }

/*
$.get('https://reqres.in/api/users', {page: 2}, function(response){
response.data.forEach(function(element, i){
var user = '<div class="sliderElement">';
user += '<div class="client">';
user += '<img class="profilePic" src="'+element.avatar+'"/>';
user += '<h4>'+element.first_name+' '+element.last_name+'</h4>';
user += '<hr class="separacion"/>';
user += '</div>';
user += '<div class="opinion">';
user += '<blockquote class="opinionUser">';
user += 'Texto de ejemplo !';
user += '</blockquote>';
user += '</div>';
user += '</div>';
user += '';
$(".slider").append(user)
console.log(user)*/

})

$(".slider").sss({
  slideShow: true,
  startOn: 0
  })


})
})


