// ==============================================
// SVG Swap
// ==============================================

// Check to see if browser supports SVG
function supportsSvg() {
  return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
}

// Swap out .svg for .png or .jpg depending on class
(function() {
  if(supportsSvg()) {

    var svgEls = document.getElementsByClassName('svg-fallback'), pngEls = [], jpgEls = [];

    for(var i = 0; i < svgEls.length; i++) {

      var classes = svgEls[i].className;

      if( classes.indexOf('png') !== -1 ) {
        pngEls.push(svgEls[i]);
      }

      if( classes.indexOf('jpg') !== -1 ) {
        jpgEls.push(svgEls[i]);
      }
    }

    if(pngEls.length) {
      for(var p = 0; p < pngEls.length; p++) {
        var pngEl = pngEls[p], pngSrc = pngEl.src; pngSrc = pngSrc.replace('.svg','.png');
        pngEl.src = pngSrc;
      }
    }

    if(jpgEls.length) {
      for(var j = 0; j < jpgEls.length; j++) {
        var jpgEl = jpgEls[j], jpgSrc = jpgEl.src; jpgSrc = jpgSrc.replace('.svg','.jpg');
        jpgEl.src = jpgSrc;
      }
    }

  }
})();
