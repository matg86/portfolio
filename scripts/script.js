//Function Index: (When editing, hit ctrl+F and type in eg. "@2" to find specific function)
    //  @1   Fade in heading on page load
    //  @2   Slide information Slider back and forth over Portfolio Divs
    //  @3   Shake helper arrow to notify user that there is a slide function
    //  @4   Brings Portfolio Divs in to view on page scroll
    //  @5   Slides contact icons in from left and right when page scrolls to bottom





//   @1    Functions used to fade in .heading on page load
$(function(){
	$("#firstName").fadeIn(2500);
});


$(function(){

	$("#lastName").fadeIn(3500);
});


$(function(){
	$("#tag-line").delay(1500).fadeIn(1000);
})


//   @2   Function to call sliders over portfolio images with explanation 
 //And Shakes arrow to notify user of the slide over

// Slides the green cover over the portfolio div to reveal site explanation
var portfolioSlide = function(a, b, c, d, e){
$(a).click(function() {
	$(a).hide(1);
  $(b).animate({width: "100%"}, 1000 );
  $(c).delay(1001).show(1);
  $(d).show();
  
});

//Slides the green cover away back to starting position
$(c).click(function(){
	$(c).hide(1);
	$(b).animate({width: "20px"}, 1000);
	$(d).hide();
	$(a).delay(1001).show(1);

});

// @3  Shake arrow for 1 second to notify user
$(e).hover(function(){
	   $(a).effect( "shake", {times:1, distance:2}, 1000 );
	});
}

portfolioSlide("#nvf-right", "#nvf-slide", "#nvf-left", "#nvf-slide-info", "#portfolio3")
portfolioSlide("#pom-right", "#pom-slide", "#pom-left", "#pom-slide-info", "#portfolio2")
portfolioSlide("#qq-right", "#qq-slide", "#qq-left", "#qq-slide-info","#portfolio1")
portfolioSlide("#cc-right", "#cc-slide", "#cc-left", "#cc-slide-info", "#portfolio4")
portfolioSlide("#h2r-right", "#h2r-slide", "#h2r-left", "#h2r-slide-info", "#portfolio5")




//@4 Fades in the portfolio DIVs when page scrolls to bring them in view
  //Elements stay visible even if they go out of view again
$(function() {
    
    //Each time the windiw scrolls
    $(window).scroll( function(){
    
        //Checks the location of targetted elements
        $(".hideThis").each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //If targeted element is in view - Fades the element in
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({"opacity":"1"},800);
                    
            }
            
        }); 
    
    });
    
});



//@5 Slides contact icons in from left and right when page scrolls to bottom
// Slide Contact Icons in from the right
$(function() {
    
    //Each time the windiw scrolls
    $(window).scroll( function(){
    
        //Checks the location of targetted elements
        $(".moveThisRight").each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //If targeted element is in view - Fades the element in
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({"left":"50%"}, 1000);
                    
            }
            
        }); 
        
    });
    
});


// Slide Contact Icons in from the left
$(function() {
    
    //Each time the windiw scrolls
    $(window).scroll( function(){
    
        //Checks the location of targetted elements
        $(".moveThisLeft").each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //If targeted element is in view - Fades the element in
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({"right":"50%"}, 1000);
                    
            }
            
        }); 
        
    });
    
});


