(function (doc, win) {
     var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function () {
                 var clientWidth = docEl.clientWidth;               
                 if (!clientWidth) return;
				 if (clientWidth>=1280) {
				 	docEl.style.fontSize = '100px';
				 }else if(clientWidth>=540){
					docEl.style.fontSize = 100 * (clientWidth / 540) + 'px';  //适配平板
				 }else{
					docEl.style.fontSize = 100 * (clientWidth / 414) + 'px';
				 }
          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);