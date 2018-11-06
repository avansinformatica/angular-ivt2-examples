const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
const { map, tap, flatMap, filter, reduce, take, switchMap } = require('rxjs/operators');
const movies = require('./data').movies;

range(1, 20)
	.pipe(
		filter(x => x % 2 === 1), 
		map(x => x + x + 1)
	)
	.subscribe(x => console.log(x));



of(movies).pipe(
	flatMap(movies => movies.map(movie => movie.title))
	, filter(title => title.startsWith('El'))
	, take(5)
).subscribe(data => console.log(data));