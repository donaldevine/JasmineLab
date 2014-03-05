window._skel_config = {
	    prefix: 'css/style',
		preloadStyleSheets: true,
		resetCSS: true,
		boxModel: 'border',
		grid: { gutters: 30 },
		breakpoints: {
		wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
		narrow: { range: '481-1199', containers: 960 },
		mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
	  }
  };

var calculateIt = function(){
	var metric = document.getElementById('metricValue');
	var imperal = document.getElementById('imperalValue');

	if (null != metric.value && !isNaN(metric.value)) {
		imperal.value = Converter.convertFromImperialToMetric(metric.value);
	}else{
		if (null != imperal.value && !isNaN(imperal.value)) {
			metric.value = Converter.convertFromImperialToMetric(imperal.value);	
		};
	}
};