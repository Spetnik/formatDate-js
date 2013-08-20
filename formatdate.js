var formatDate = function(date, format, utc){
	var pad = function(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	};
	if(utc == null)
		utc = false;

	var formats = {
		'%a': function(){return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][utc ? date.getUTCDay() : date.getDay()];},
		'%b': function(){
			return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][utc ? date.getUTCMonth() : date.getMonth()];
		},
		'%c': function(){return utc ? date.getUTCMonth() + 1 : date.getMonth() + 1;},
		'%D': function(){/*Day of the month with English suffix (0th, 1st, 2nd, 3rd, …)*/},
		'%d': function(){return pad(utc?date.getUTCDate():date.getDate(),2);},
		'%e': function(){return utc?date.getUTCDate():date.getDate();},
		'%f': function(){/*milliseconds, not microseconds*/return utc?date.getUTCMilliseconds():date.getMilliseconds();},
		'%H': function(){return pad(this["%k"](), 2);},
		'%h': function(){return pad(this["%l"](), 2);},
		'%I': function(){return this["%h"]();},
		'%i': function(){return pad(utc ? date.getUTCMinutes() : date.getMinutes(), 2)},
		'%j': function(){/*Day of year (001-266)*/},
		'%k': function(){return utc?date.getUTCHours():date.getHours()},
		'%l': function(){var x; return x = this["%k"](), x = x == 0 ? x = 12 : x, x > 12 ? x -12 : x},
		'%M': function(){return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][utc ? date.getUTCMonth() : date.getMonth()];},
		'%m': function(){return pad(this["%c"](), 2);},
		'%p': function(){return this["%H"]() > 11 ? "PM" : "AM";},
		'%r': function(){return this["%h"]() + ":" + this["%i"]() + ":" + this["%S"]() + " " + this["%p"]()},
		'%S': function(){return pad(utc?date.getUTCSeconds():date.getSeconds(),2);},
		'%s': function(){return this["%S"]();},
		'%T': function(){return this["%h"]()+":"+this["%i"]()+this["%S"]()+" "+this["%p"]();},
		'%U': function(){/*Week (00..53), where Sunday is the first day of the week*/},
		'%u': function(){/*Week (00..53), where Monday is the first day of the week*/},
		'%V': function(){/*Week (01..53), where Sunday is the first day of the week; used with %X*/},
		'%v': function(){/*Week (01..53), where Monday is the first day of the week; used with %x*/},
		'%W': function(){return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][utc ? date.getUTCDay() : date.getDay()];},
		'%w': function(){return utc?date.getUTCDay():date.getDay();},
		'%X': function(){/*Year for the week where Sunday is the first day of the week, numeric, four digits; used with %V*/},
		'%x': function(){/*Year for the week, where Monday is the first day of the week, numeric, four digits; used with %v*/},
		'%Y': function(){return utc?date.getUTCFullYear():date.getFullYear();},
		'%y': function(){return (utc?date.getUTCFullYear():date.getFullYear()).toString().substring(2);}
	};

	var output = format;

	for(var f in formats){
		output = output.replace(f, formats[f]());
	}
	return output;
};