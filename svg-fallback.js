// ==============================================
// SVG Swap
// ==============================================


function supportsSvg() {
  return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
}


function svgSwap() {
  if(!supportsSvg()) {
    $('.svg-swap').each(function() {
      var el = $(this),
          src = el.attr('src'),
          fallbackFormat = el.data('format');
          newSrc = src.replace('svg',fallbackFormat),
          fallbackImg = el.data('fallback');

      if( typeof fallbackImg !== 'undefined' ) {
        var fallback = fallbackImg;
        el.attr('src', fallback);
      }
      else {
        el.attr('src', newSrc);
      }

    });
  }
  return;
}

$(svgSwap());
*/