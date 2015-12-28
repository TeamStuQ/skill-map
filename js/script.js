/*
 - Author: Steve
 - Mail: steve@stuq.org
 - Date: Aug 31th, 2015
 */


// DOM methods
(function(window, document) {
  var elementPrototype = typeof HTMLElement !== 'undefined' ? HTMLElement.prototype : Element.prototype;

  var $id = window.$id = function(id) {
    return document.getElementById(id);
  };

  var $tag = window.$tag = function(tagName) {
    return document.getElementsByTagName(tagName);
  };

  elementPrototype.tagEles = function(tagName) {
    return this.getElementsByTagName(tagName);
  };

  elementPrototype.hasClass = function(className) {
    return !!this.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  };

  elementPrototype.addClass = function(className) {
    if (!this.hasClass(className)) {
      this.className += ' ' + className;
      this.className = this.className.trim();
    }
  };

  elementPrototype.removeClass = function(className) {
    if (this.hasClass(className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      this.className = this.className.replace(reg, ' ');
      this.className = this.className.trim();
    }
  };

  elementPrototype.isLeafNode = function() {
    return this.tagEles('li').length ? false : true;
  };

  elementPrototype.openNode = function() {
    this.lastElementChild.removeClass('hide');
    this.removeClass('closed');
    this.addClass('opened');
  };

  elementPrototype.normalizeNode = function() {
    this.lastElementChild.removeClass('hide');
    this.firstElementChild.removeClass('node');
    this.firstElementChild.style.cursor = 'initial';
    this.addClass('normal');
    this.removeClass('closed');
  };
})(window, document);

// skillmap class
(function(window, document) {
  var skillmap = window.skillmap = function() {
    // AJAX for IE and other browsers
    var newRequest = function() {
      var xhr;

      if (typeof XMLHttpRequest !== 'undefined') {
	xhr = new XMLHttpRequest();
      } else {
	var versions = ["MSXML2.XmlHttp.5.0", 
	  "MSXML2.XmlHttp.4.0",
	  "MSXML2.XmlHttp.3.0", 
	  "MSXML2.XmlHttp.2.0",
	  "Microsoft.XmlHttp"];
	
	for (var i = 0, len = versions.length; i < len; i++) {
	  try {
            xhr = new ActiveXObject(versions[i]);
            break;
	  } catch(e) {}
	}
      }
      return xhr;
    };

    // read md file from server
    var readTextFile = function(file) {
      var rawFile = new newRequest();
      rawFile.open("GET", file, false);
      rawFile.send(null);
      try {
	return rawFile.responseText;
      } catch(error) {
	console.log(error);
      }
    };

    // scroll element to destination
    var scrollTo = function(element, to, duration) {
      if (duration < 0) {
	$id('toTop').addClass('hide');
	return;
      }

      var difference = to - element.scrollTop;
      var perTick = difference / duration * 2;

      setTimeout(function() {
	element.scrollTop = element.scrollTop + perTick;
	scrollTo(element, to, duration - 2);
      }, 10);
    };

    var defaultOpen = [
      'index',
      'intro',
      'language',
//      'bottomQrcode',
      'end'
    ];

    var init = function() {
      window.onload = function() {
	var mdList = {
	  'devLang': 'data/dev-lang.md',
	  'bigData': 'data/big-data.md',
	  'cloudComputing': 'data/cloudComputing.md',
	  'frontEnd': 'data/frontEnd.md',
	  'IH': 'data/IH.md',
	  'IOAM': 'data/IOAM.md',
	  'security': 'data/security.md'
	}, liArray = $tag('li');
  
	for (var i in mdList) {
	  $id(i).innerHTML = marked(readTextFile(mdList[i]));
	}

	for (var i = 0; i < liArray.length; i++) {
	  if (!liArray[i].isLeafNode()) {
	    liArray[i].firstElementChild.style.cursor = 'pointer';
	    liArray[i].lastElementChild.addClass('hide');
	    liArray[i].addClass('closed');

	    if (liArray[i].id !== 'bottomQrcode') {
	      liArray[i].firstElementChild.onclick = function() {
		if (this.parentElement.lastElementChild.hasClass('hide')) {
		  this.parentElement.lastElementChild.removeClass('hide');
		  this.parentElement.removeClass('closed');
		  this.parentElement.addClass('opened');
		} else {
		  this.parentElement.lastElementChild.addClass('hide');
		  this.parentElement.removeClass('opened');
		  this.parentElement.addClass('closed');
		}
	      }
	    }
	  } else {
	    liArray[i].addClass('normal');
	  }
	}
  
	for (var i = 0; i < defaultOpen.length; i++) {
	    $id(defaultOpen[i]).openNode();
	}
	$id('bottomQrcode').normalizeNode();

	window.onscroll = function() {
	  if (window.scrollY > 0) {
	    $id('toTop').removeClass('hide');
	  }

	  $id('toTop').onclick = function() {
	    var body = document.body;
	    var dE = document.documentElement;   // dE for firefox

	    if (body.scrollTop || dE.scrollTop) {
	      scrollTo(body.scrollTop ? body : dE, 0, 50);
	    } else {
	      body.scrollIntoView();
	    }
	  }
	}

	$id('expand').onclick = function() {
	  for (var i = 0; i < liArray.length; i++) {
	    if (liArray[i].hasClass('closed')) {
	      liArray[i].removeClass('closed');
	      liArray[i].addClass('opened');
	      liArray[i].lastElementChild.removeClass('hide');
	    }
	  }
	}
  
	$id('collapse').onclick = function() {
	  for (var i = 0; i < liArray.length; i++) {
	    if (liArray[i].hasClass('opened')) {
	      liArray[i].removeClass('opened');
	      liArray[i].addClass('closed');
	      liArray[i].lastElementChild.addClass('hide');
	    }
	  }
	}
      }
    };

    return {
      init: init
    };
  };
})(window, document);

skillmap().init();
