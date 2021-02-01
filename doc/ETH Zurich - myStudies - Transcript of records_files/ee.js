function dae(formId){
	try {
		for (var i = 0; i < document.getElementById(formId).length; i++){
			try{
				var e = document.getElementById(formId).elements[i];
				if (e.type == "submit"){
					e.disabled = true;
				}
			}catch(e){}
		}
	} catch (ex){}
	return true;
}
	
function checkEnter(e, pFormName, pSubmitName){
	var characterCode;
	try{
		if(e && e.which){
			e = e;
			characterCode = e.which;
		} else {
			e = event;
			characterCode = e.keyCode;
		}
		if(characterCode == 13){
			var lInput = document.createElement("input");
			var lType = document.createAttribute("type");
			lType.nodeValue="hidden";
			var lName = document.createAttribute("name");
			lName.nodeValue=pSubmitName;
			var lValue = document.createAttribute("value");
			lValue.nodeValue = "on";
			try {
				lInput.setAttributeNode(lType);
		    }
		    catch(err) {
		        lInput.type='hidden';
		    }
			lInput.setAttributeNode(lName);
			lInput.setAttributeNode(lValue);
			var lDomain = document.getElementById( pFormName);
			lDomain.appendChild(lInput);
		}
	} catch (ex){
	}
	return true;
}

function showWait(pName) {
	try{
		document.getElementById(pName).style.display="inline";
	} catch (ex) {
	}
}

function autoSubmit(pFormName) {
  var lInput = document.createElement("input");
  var lType = document.createAttribute("type");
  lType.nodeValue="hidden";
  var lName = document.createAttribute("name");
  lName.nodeValue="refresh";
  var lValue = document.createAttribute("value");
  lValue.nodeValue = "on";
  try {
	  lInput.setAttributeNode(lType);
  }
  catch(err) {
      lInput.type='hidden';
  }
  lInput.setAttributeNode(lName);
  lInput.setAttributeNode(lValue);
  var lDomain = document.getElementById( pFormName);
  lDomain.appendChild(lInput);
  document.getElementById(pFormName).submit();
}

// Automatisches Submit bei Aenderungen in Auswahllisten fuer Faecherbelegung.
function autoSubmitFB(pFormName, name, value) {
	// Request-Parameter setzen.
	try {
	  var lInput = document.createElement("input");
	  var lType = document.createAttribute("type");
	  lType.nodeValue="hidden";
	  var lName = document.createAttribute("name");
	  lName.nodeValue=name;
	  var lValue = document.createAttribute("value");
	  lValue.nodeValue = value;
	  try {
		  lInput.setAttributeNode(lType);
      }
      catch(err) {
          lInput.type='hidden';
      }
	  
	  lInput.setAttributeNode(lName);
	  lInput.setAttributeNode(lValue);
	  var lDomain = document.getElementById( pFormName);
     lDomain.appendChild(lInput);
		
	} catch (ex) {
		alert("Form Parsing Exception: "+ex);
	}
	
	try {
		document.getElementById(pFormName).submit();
	} catch (ex) {
		alert("Form Submit Exception: "+ex);
	}
}

function popUp(url,windowname)
{
var config = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=700,height=500";
if(windowname == "Anfangszeit"){
	var config = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=650,height=160";
} else if(windowname == "Studienplanangaben"){
	var config = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=700,height=500";
} else if(windowname == "LegendeBeitraege"){
	var config = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=450,height=500";
} 
newwin = window.open(url,windowname,config);
newwin.focus(self);
}
