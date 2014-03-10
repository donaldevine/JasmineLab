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
	var imperial = document.getElementById('imperialValue');
	var result = document.getElementById('resultValue');

	if (metric.value && !isNaN(metric.value) && metric.value.length > 0) {
		result.innerHTML = Converter.convertFromMetricToImperial(metric.value) + ' lb';
	}else{
		if (imperial.value && !isNaN(imperial.value) && imperial.value.length > 0) {
			result.innerHTML = Converter.convertFromImperialToMetric(imperial.value) + ' kg';	
		};
	}
};

var clearIt = function(){
	var metric = document.getElementById('metricValue');
	var imperial = document.getElementById('imperialValue');
	var result = document.getElementById('resultValue');

	metric.value = '';
	imperial.value = '';
	result.innerHTML = '';

}