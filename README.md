## Obsolete - this library is no longer supported
### If you are using this and not [Moment.js](https://momentjs.com/), then you are on your own.
#### It's fun to write your own utility, but it's kind of silly to use it in production when there are better solutions out there.

___

formatDate-js
=============

JavaScript clone of MySQL's DATE_FORMAT() function

This function is aimed at providing the functionality of the MySQL DATE_FORMAT() function in
JavaScript (see http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date-format).


Usage:
======
	
	formatDate(Date date, String format[, Bool utc]);

	date:				JavaScript date object to be formatted
	format:				String containing formatting specifiers (see below)
	utc (optional):		If true, results are in UTC. If false (default), results are according to local time.


Formatting specifiers:
======================

	Specifier	Description
	---------	-----------
	%a			Abbreviated weekday name (Sun..Sat)
	%b			Abbreviated month name (Jan..Dec)
	%c			Month, numeric (0..12)
	%D			Day of the month with English suffix (0th, 1st, 2nd, 3rd, …)
	%d			Day of the month, numeric (00..31)
	%e			Day of the month, numeric (0..31)
	%f**		Milliseconds (000..999)
	%H			Hour (00..23)
	%h			Hour (01..12)
	%I			Hour (01..12)
	%i			Minutes, numeric (00..59)
	%j*			Day of year (001..366)
	%k			Hour (0..23)
	%l			Hour (1..12)
	%M			Month name (January..December)
	%m			Month, numeric (00..12)
	%p			AM or PM
	%r			Time, 12-hour (hh:mm:ss followed by AM or PM)
	%S			Seconds (00..59)
	%s			Seconds (00..59)
	%T			Time, 24-hour (hh:mm:ss)
	%U*			Week (00..53), where Sunday is the first day of the week
	%u*			Week (00..53), where Monday is the first day of the week
	%V*			Week (01..53), where Sunday is the first day of the week; used with %X
	%v*			Week (01..53), where Monday is the first day of the week; used with %x
	%W			Weekday name (Sunday..Saturday)
	%w			Day of the week (0=Sunday..6=Saturday)
	%X*			Year for the week where Sunday is the first day of the week, numeric, four digits; used with %V
	%x*			Year for the week, where Monday is the first day of the week, numeric, four digits; used with %v
	%Y			Year, numeric, four digits
	%y			Year, numeric (two digits)
	%%			A literal “%” character
	%?			?, for any “?” not listed above

	* Not yet supported
	** The MySQL DATE_FORMAT() %f specifier returns Microseconds (000000..999999)
