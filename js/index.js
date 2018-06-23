/*(function(){
  $('.menu-left').click(function(){
    
    $('.intro').toggleClass('active')
  /*   $('section').toggleClass('active')
    $('#menu-left').toggleClass('active')
   
  })
 
})()*/
$('.menu-left').on('click', function() {
	$('.intro').toggleClass('abrir');
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find(".content h5");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el
        .find(".content li")
        .not($next)
        .slideUp()
        .parent()
        .removeClass("open");
    }
  };

  var accordion = new Accordion($("#menu-left"), true);
});