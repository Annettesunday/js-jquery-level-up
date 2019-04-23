/*

Date is a built-in object.

It stores the date, time and provides methods for date/time

For instance, we can use it to store creation/modification times, to measure time, or just to print out
the current date
*/


/*

Creation

To create a new Date object call new Date() with one of the following arguments:

*/



new Date()
// Without arguments - create a Date object for the current date and time

let now = new Date();

alert( now ); // shows current date/ time

new Date(milliseconds)
// Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after Jan 1st of 1970 UTC+0

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);

alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 )


/*
The number of milliseconds that has passed since the beginning of 1970 is called a timestamp

It's a lightweight numeric representation of a date. We can always create a date from a timestamp using

new Date(timestamp)

and convert the existing Date object to a timestamp using date.getTime() method as shown below

*/

new Date(datestring)

/*
If there is a single argument and it's a string, then it is passed with the Date.parse algorith

See below
*/

let date = new Date("2017-01-26");
alert(date);

/* The time portion of the date is assumed to be midnight GMT and is adjusted
according to the timezone the code is run in

So the result could be
Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
or
Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)
*/


new Date(year, month, date, hours, minutes, seconds, ms)

/*
Create the date with the given components in the local time zone. Only two first arguments are obligatory

Note:
- The year must have 4 digits: 2013 is okay, 98 is not okay
- The month count starts with 0(Jan), upto 11(Dec)
- The date parameter is actually the day of the month, if absent then 1 is assumed
- If hours/minutes/seconds/ms is absent, they are assumed to be equal to zero
e.g

*/

new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default


// The minimal precision is 1 ms (1/1000 sec)

let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567


/*
Access date components
There are many methods to access the year, month, and so on from the Date object.
But they can easily be remembered when categorized

getFullYear()
Get the year(4 digits)

getMonth()
Get month from 0 to 11

getDate()
Get the day of the month from 1 to 31, the name of the method does look a little bit strange

getHours(), getMinutes(), getSeconds(), getMilliseconds()
Get the corresponding time components



NOTE: Not getYear() but getFullYear()
The first method id deprecated. It returns 2-digit year sometimes


getDay()
Get the day of the week, from 0(Sunday) to 6(Saturday).
The first day is always Sunday, in some countries that's not so, but cant be changed

All the methods above return the components relative to the local time zone

There are also their UTC-counterparts, that return day, month, year and so on for the time zone
UTC+0

getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".

If your local time zone is shifted relative to UTC, then the code below shows different hours:
*/

// current date
let date = new Date();

// the hour in your current time zone
alert( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
alert( date.getUTCHours() );

/*
Besides the given methods, there are two special ones that do not have a UTC-variant

getTime()
Returns the timestamp for the date - a number of milliseconds passed from the January 1st of 1970 UTC+0

getTimezoneOffset()
Returns the difference between the local time zone and UTC in minutes
*/

// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
alert( new Date().getTimezoneOffset() );


/*
Settung date components

The following methods are used to set date/time components


setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

As we can see, some methods can set multiple components at once, for example setHours.
The components that are not mentioned are not modified.

For instance:
*/

let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.


/*

Autocorrection

The autocorrection is a very handy feature of Date objects.
We can set out-of-range values, and it will auto-adjust itself.

For instance:

*/

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!

/*
Out-of-range date components are distributed automatically.

Let’s say we need to increase the date “28 Feb 2016” by 2 days.
It may be “2 Mar” or “1 Mar” in case of a leap-year. We don’t need to think about it.
Just add 2 days. The Date object will do the rest:
*/

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016

/*
That feature is often used to get the date after the given period of time.
For instance, let’s get the date for “70 seconds after now”:
*/


let date = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date ); // shows the correct date


// We can also set zero or even negative values. For example:

let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
alert( date );

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015



/*

Date to number, date diff

When a Date object is converted to number, it becomes the timestamp same as date.getTime():
*/

let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()

// The important side effect: dates can be subtracted, the result is their difference in ms.


/*
Date.now()

If we want to measure the difference, we don't need the Date object

There is a special method Date.now() method that returns the current timestamp
It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object.
So it’s faster and doesn’t put pressure on garbage collection.
*/

let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates


/*

Date.parse from a string

The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

YYYY-MM-DD – is the date: year-month-day.
The character "T" is used as the delimiter.
HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z that would mean UTC+0.


Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0).
If the format is invalid, returns NaN.
*/
