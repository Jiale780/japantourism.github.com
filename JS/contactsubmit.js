/*
   Filename: contactsubmit.js

   Purpose: The purpose of this program is to verify that the form
            passes an initial validation test.
*/

window.onload = initial;

function initial() {
   document.forms[0].onsubmit = function() 
   {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return true;
   }
}