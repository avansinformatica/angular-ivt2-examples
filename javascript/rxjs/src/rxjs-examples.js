const { Observable, Subject, ReplaySubject, from, of, range, interval } = require('rxjs');
const { 
	filter, 
	delay,
	distinct,
	take, 
	toArray,
	count,
	tap, 
	map, 
	reduce, 
	flatMap, 
	switchMap 
} = require('rxjs/operators');
const movies = require('./data').movies;

range(1, 20)
// interval(1000)
	.pipe(
		filter(x => x % 2 === 1), 
		map(x => x + x)
	)
	.subscribe(x => console.log(x));

// console.log()

// of(movies).pipe(
// 	flatMap(movies => movies.map(movie => movie.title))
// 	, filter(title => title.startsWith('El'))
// 	, take(5)
// ).subscribe(data => console.log(data));
console.log()

from(movies).pipe(
	map(movie => movie.title)
	, filter(movie => !!movie)
	, filter(title => title.startsWith('El'))
	// , delay(1000)
	, take(5)
	// , count()
// ).subscribe(data => console.log(data));
).subscribe(console.log);

console.log();

from(movies).pipe(
	filter(movie => !!movie),
	filter(movie => movie.cast.includes('Sophie Marceau')),
	flatMap(movie => movie.cast),
	distinct(),
	filter(name => name !== 'Sophie Marceau'),
	// map(movies => movies.json()),
	// filter(movie => movie.cast.length === 2),
	// , delay(1000)
	// take(5),
	// , count()
	toArray()
).subscribe(console.log);

console.log();
