$(document).ready(function() {
    $(".card").click(function() {
        $(this).toggleClass("expanded");
    });

});


var MyView = Backbone.View.extend({
    events: {
        "click .card": "toggle"  
    },
    initialize: function() {
        
    },
    template: function() {
        hogan.compile($("#template-card").html()).render({
            important: "important-car"
        });  
    },
    render: function() {
       
    },
    toggle: function(event) {
        $(event.currentTarget).toggleClass("expanded");   
    }
    
    
});