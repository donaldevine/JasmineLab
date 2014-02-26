var Converter = (function () {
	
	var converterValue = 2.2;

	return{
		convertFromImperialToMetric: function(weight) {
	        var num = parseInt(weight);
	        if (isNaN(num) == true) {
	        	throw new Error("Not a number");
	        }
	        return Math.round(num / converterValue);
	    },
	    convertFromMetricToImperial: function(weight) {
	        var num = parseInt(weight);
	        if (isNaN(num) == true) {
	        	throw new Error("Not a number");
	        }
	        return num * converterValue;
	    }
	}
	
}());