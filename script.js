var app = new Vue({
  el: '#app',
  data: {
    number: '',
    message: '',
    whatsappurl:''
  },
  methods:{
    generateUrl: function(){
      if(this.message){
        this.whatsappurl = "https://api.whatsapp.com/send?phone="+this.number+"&text="+this.message
      }else{
        this.whatsappurl = "https://api.whatsapp.com/send?phone="+this.number
      }
      
      $('#qr-code').qrcode(this.whatsappurl);
    }
  }
  
})

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery