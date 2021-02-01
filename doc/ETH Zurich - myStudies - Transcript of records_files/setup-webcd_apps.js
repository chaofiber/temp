/**********************************/
/* SETUP JAVASCRIPT               */
/* Author:Y. Serrano              */
/**********************************/
/*
$Id: setup-webcd_apps.js,v 1.1 2007-04-04 12:55:05 fehrr Exp $
$Rev$
$Release: 1.0.16 $
*/

function setup() {
    if (typeof document.body.style.maxHeight == "undefined") { //only for ie6
        input_elems = document.getElementsByTagName("input");
           for (var i = 0; i < input_elems.length; i++) {
                if ( input_elems[i].type == "submit" || input_elems[i].type == "reset" || input_elems[i].type == "button" ) {
                    input_elems[i].className = input_elems[i].className + " color5-back color-notfocus";
                    input_elems[i].onmouseover = function () {
                        if (this.className.indexOf("color5-back") >= 0) {
                            this.className = this.className.replace(/color5-back/,"color1-back");
                            this.className = this.className.replace(/color-notfocus/,"color-focus");
                        }                           
                    };
                    input_elems[i].onmouseout = function () { 
                        if (this.className.indexOf("color1-back") >= 0) {
                            this.className = this.className.replace(/color1-back/,"color5-back");
                            this.className = this.className.replace(/color-focus/,"color-notfocus");
                        }
                    };
                }
            }
    }
}