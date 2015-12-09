// Extension WCircleMenu
// Hector Vega 
// Solmar Resort's and Hotels 
// Date 2015-11-27
//
// Based on code shown in "Building a Circular Navigation with CSS Transforms" at http://danartinho.github.io/WCircleMenu/
// by https://github.com/danartinho
//
// Reference https://qlikcommunity.s3.amazonaws.com/misc/index.html QlikView Ajax Javascript Library
//
//
var template_path = Qva.Remote + "?public=only&name=Extensions/WCircleMenu/"; 
 
function extension_Init() {

// if (typeof jQuery == 'undefined') Qva.LoadScript(template_path + 'jquery-1.10.2.min.js');
 	Qva.LoadScript(template_path + 'jQuery.WCircleMenu-min.js',extension_Done);


};

function set_Option(IdOption){

  Qv.GetCurrentDocument().SetVariable("vMenuOption",'SH0'+IdOption);

}; 

function extension_Done() {
	
     Qva.AddExtension('WCircleMenu', function () {
 	    var addThis = "";

 	    addThis += "<div id='menu_icon' class='' style='border-radius: 50%;position: relative; width: 90px; height: 90px; background-color: #999;margin:240px auto;'>";
   	    addThis += "<div class='wcircle-icon'>";
     	addThis += "<div style='padding: 10px;width: 60px;height: 60px;text-align: center;'>";
 	    addThis += "+";
     	addThis += "</div>";
   	    addThis += "</div>";
   	    addThis += "<div class='wcircle-menu' style='display:none;'>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:red;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "Sheet 1";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:green;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "Sheet 2";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:blue;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "Sheet 3";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:yellow;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "Sheet 4";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:cyan;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "Sheet 5";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:magenta;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "Sheet 6";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:khaki;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "Sheet 7";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:gold;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "Sheet 8";
     	addThis += "</div>";
   	    addThis += "</div>";
 	    addThis += "</div>";
 
	    this.Element.innerHTML = addThis;
		
		$('#menu_icon').WCircleMenu({
		width: '60px',
		height: '60px',
		angle_start : 0,//-Math.PI/2,
		delay: 50,
		distance: 200,
		angle_interval: Math.PI/4,
		easingFuncShow:"easeOutBack",
		easingFuncHide:"easeInBack",
		step:35,
		itemRotation:360,
		});

		$('.wcircle-menu-item').on('click',function(){		
			//console.log($(this).text());
			set_Option($(this).index() +1);	
		});

		// $('#openWCM').on('click',function(){
		// $('#menu_icon').WCircleMenu('open');
		// });

		// $('#closeWCM').on('click',function(){
		// $('#menu_icon').WCircleMenu('close');
		// });

    });
}
 
extension_Init(); //Initiate extension