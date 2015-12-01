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

 if (typeof jQuery == 'undefined') Qva.LoadScript(template_path + 'jquery-1.10.2.min.js');
 	Qva.LoadScript(template_path + 'jQuery.WCircleMenu.js',extension_Done);


};

function set_Option(IdOption){

  var mydoc = Qv.GetCurrentDocument();
  mydoc.SetVariable("vMenuOption",'SH0'+IdOption);

}; 

function extension_Done() {
     Qva.AddExtension('WCircleMenu', function () {
    
 	    var addThis = "";

 	    addThis += "<div id='menu_icon' class='' style='border-radius: 50%;position: relative; width: 50px; height: 50px; background-color: #999;margin:200px auto;'>";
   	    addThis += "<div class='wcircle-icon'>";
     	addThis += "<div style='padding: 10px;width: 60px;height: 60px;text-align: center;'>";
 	    addThis += "+";
     	addThis += "</div>";
   	    addThis += "</div>";
   	    addThis += "<div class='wcircle-menu' style='display:none;'>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:red;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "<a href='javascript:;' onclick='set_Option(1);'><span><font color='white'>Sheet 1</font></span></a>";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:green;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "<a href='javascript:;' onclick='set_Option(2);'><span><font color='white'>Sheet 2</font></span></a>";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:blue;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "<a href='javascript:;' onclick='set_Option(3);'><span><font color='white'>Sheet 3</font></span></a>";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:yellow;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "<a href='javascript:;' onclick='set_Option(4);'><span><font color='white'>Sheet 4</font></span></a>";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:cyan;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "<a href='javascript:;' onclick='set_Option(5);'><span><font color='white'>Sheet 5</font></span></a>";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:magenta;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "<a href='javascript:;' onclick='set_Option(6);'><span><font color='white'>Sheet 6</font></span></a>";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:khaki;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "<a href='javascript:;' onclick='set_Option(7);'><span><font color='white'>Sheet 7</font></span></a>";
     	addThis += "</div>";
     	addThis += "<div class='wcircle-menu-item' style='background-color:gold;border-radius:50%;padding:15px;width:60px;height:60px;'>";
       	addThis += "<a href='javascript:;' onclick='set_Option(8);'><span><font color='white'>Sheet 8</font></span></a>";
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

		//$('.icons').on('click',function(){		console.log($(this).text());		});

		$('#openWCM').on('click',function(){
		$('#menu_icon').WCircleMenu('open');
		});

		$('#closeWCM').on('click',function(){
		$('#menu_icon').WCircleMenu('close');
		});

    });
}
 
extension_Init(); //Initiate extension