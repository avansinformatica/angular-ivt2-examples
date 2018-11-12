const faker = require('faker');


function generate_user() {
	return {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		jobTitle: faker.name.jobTitle(),
		country: faker.address.country()
	};
}

// a function that generates an array of fake users
function generate_users(amount = 300000) {
	faker.seed(1234);

	let users = [];

	for(let i = 0; i<amount; i++) {
		users.push(generate_user())
	}

	return users;
}

// a function that generates users and calls the callback function for 
// each generated user
function generate_users_callback(cb_func, amount = 300000) {
	faker.seed(1234);

	for(let i = 0; i<amount; i++) {
		setTimeout(() => {
			cb_func(generate_user());
		}, 0);
	}
}


// a fixed movie dataset
const movies = [
	{ 
		title: "All Over Me",
		year: 1997,
		cast: ["Alison Folland", "Tara Subkoff"],
		genres: []
	},{ 
		title: "American Perfekt",
		year: 1997,
		cast: ["Fairuza Balk", "Robert Forster", "Amanda Plummer"],
		genres: ["Drama"]
	},{ 
		title: "An Alan Smithee Film: Burn Hollywood Burn",
		year: 1997,
		cast: ["Ryan O'Neal", "Eric Idle", "Coolio"],
		genres: ["Comedy"]
	},{ 
		title: "An American Werewolf in Paris",
		year: 1997,
		cast: ["Tom Everett Scott", "Julie Delpy", "Vince Vieluf", "Julie Bowen"],
		genres: ["Horror"]
	},{ 
		title: "Amistad",
		year: 1997,
		cast: ["Morgan Freeman", "Anthony Hopkins", "Djimon Hounsou", "Matthew McConaughey", "Stellan Skarsgård", "Anna Paquin"],
		genres: ["Drama"]
	},{ 
		title: "Anaconda",
		year: 1997,
		cast: ["Jennifer Lopez", "Jon Voight", "Ice Cube", "Eric Stoltz", "Owen Wilson", "Jonathan Hyde", "Kari Wührer"],
		genres: ["Horror"]
	},{ 
		title: "Anastasia",
		year: 1997,
		cast: ["Meg Ryan", "John Cusack", "Kelsey Grammer", "Hank Azaria", "Christopher Lloyd", "Angela Lansbury", "(voices)"],
		genres: ["Animated"]
	},{ 
		title: "Angels in the Endzone",
		year: 1997,
		cast: ["Christopher Lloyd", "Paul Dooley"],
		genres: ["Fantasy", "Sports"]
	},{ 
		title: "Anna Karenina",
		year: 1997,
		cast: ["Sophie Marceau", "Sean Bean"],
		genres: ["Drama"]
	},{ 
		title: "Anthem to Beauty",
		year: 1997,
		cast: ["Grateful Dead"],
		genres: ["Documentary"]
	},{ 
		title: "The Apostle",
		year: 1997,
		cast: ["Robert Duvall", "Miranda Richardson", "Farrah Fawcett"],
		genres: ["Drama"]
	},{ 
		title: "As Good as It Gets",
		year: 1997,
		cast: ["Jack Nicholson", "Helen Hunt", "Greg Kinnear", "Cuba Gooding, Jr.", "Shirley Knight"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Assignment",
		year: 1997,
		cast: ["Aidan Quinn", "Ben Kingsley"],
		genres: ["Drama"]
	},{ 
		title: "Asteroid",
		year: 1997,
		cast: ["Michael Biehn", "Annabella Sciorra", "Zachary Charles", "Don Franklin", "Carlos Gómez", "Michael Weatherly", "Anne-Marie Johnson"],
		genres: ["Science Fiction"]
	},{ 
		title: "Austin Powers: International Man of Mystery",
		year: 1997,
		cast: ["Mike Myers", "Elizabeth Hurley", "Michael York", "Robert Wagner", "Seth Green", "Mindy Sterling", "Mimi Rogers"],
		genres: ["Spy", "Comedy"]
	},{ 
		title: "B*A*P*S",
		year: 1997,
		cast: ["Halle Berry", "Martin Landau"],
		genres: ["Comedy"]
	},{ 
		title: "Back in Business",
		year: 1997,
		cast: ["Brian Bosworth", "Joe Torry"],
		genres: ["Action"]
	},{ 
		title: "Bang",
		year: 1997,
		cast: ["Darling Narita", "Peter Greene"],
		genres: ["Drama"]
	},{ 
		title: "Batman and Robin",
		year: 1997,
		cast: ["Arnold Schwarzenegger", "George Clooney", "Chris O'Donnell", "Uma Thurman", "Alicia Silverstone", "John Glover", "Elle Macpherson"],
		genres: ["Action", "Superhero"]
	},{ 
		title: "Bean",
		year: 1997,
		cast: ["Rowan Atkinson"],
		genres: ["Comedy"]
	},{ 
		title: "The Beautician and the Beast",
		year: 1997,
		cast: ["Fran Drescher", "Timothy Dalton"],
		genres: ["Comedy"]
	},{ 
		title: "Beauty and the Beast: The Enchanted Christmas",
		year: 1997,
		cast: [],
		genres: ["Animated"]
	},{ 
		title: "Below Utopia",
		year: 1997,
		cast: ["Alyssa Milano", "Ice-T"],
		genres: ["Thriller"]
	},{ 
		title: "The Best Bad Thing",
		year: 1997,
		cast: ["Lana McKissick", "Robert Ito"],
		genres: ["Drama"]
	},{ 
		title: "Best Men",
		year: 1997,
		cast: ["Fred Ward", "Drew Barrymore"],
		genres: ["Comedy"]
	},{ 
		title: "A Better Place",
		year: 1997,
		cast: ["Elon Bailey"],
		genres: ["Drama"]
	},{ 
		title: "Beverly Hills Ninja",
		year: 1997,
		cast: ["Chris Farley", "Nicollette Sheridan", "Robin Shou"],
		genres: ["Comedy"]
	},{ 
		title: "The Big One",
		year: 1997,
		cast: ["Michael Moore"],
		genres: ["Documentary"]
	},{ 
		title: "Black Scorpion II: Aftershock",
		year: 1997,
		cast: ["Joan Severance", "Whip Hubley"],
		genres: ["Superhero"]
	},{ 
		title: "The Blood Oranges",
		year: 1997,
		cast: ["Sheryl Lee"],
		genres: []
	},{ 
		title: "Bloodsport III",
		year: 1997,
		cast: ["Daniel Bernhardt", "John Rhys-Davies"],
		genres: ["Action"]
	},{ 
		title: "Bongwater",
		year: 1997,
		cast: ["Luke Wilson", "Jack Black", "Alicia Witt"],
		genres: ["Comedy"]
	},{ 
		title: "Boogie Boy",
		year: 1997,
		cast: ["Traci Lords", "Frederic Forrest", "Joan Jett"],
		genres: ["Drama"]
	},{ 
		title: "Boogie Nights",
		year: 1997,
		cast: ["Mark Wahlberg", "Burt Reynolds", "Julianne Moore", "John C. Reilly", "Don Cheadle", "Philip Seymour Hoffman", "Heather Graham", "Thomas Jane", "William H. Macy"],
		genres: ["Drama"]
	},{ 
		title: "Booty Call",
		year: 1997,
		cast: ["Jamie Foxx", "Tommy Davidson", "Vivica A. Fox", "Tamala Jones"],
		genres: ["Comedy"]
	},{ 
		title: "The Boxer",
		year: 1997,
		cast: ["Daniel Day-Lewis", "Emily Watson"],
		genres: ["Drama"]
	},{ 
		title: "Boys Life 2",
		year: 1997,
		cast: ["Vincent D'Onofrio", "Mary Beth Hurt"],
		genres: []
	},{ 
		title: "The Brave",
		year: 1997,
		cast: ["Johnny Depp", "Marlon Brando"],
		genres: []
	},{ 
		title: "Breakdown",
		year: 1997,
		cast: ["Kurt Russell", "Kathleen Quinlan", "J. T. Walsh"],
		genres: ["Thriller"]
	},{ 
		title: "Breast Men",
		year: 1997,
		cast: ["Chris Cooper", "David Schwimmer"],
		genres: ["Drama"]
	},{ 
		title: "Broadway Damage",
		year: 1997,
		cast: ["Mara Hobel"],
		genres: ["Comedy"]
	},{ 
		title: "A Brooklyn State of Mind",
		year: 1997,
		cast: ["Vincent Spano", "Maria Grazia Cucinotta", "Danny Aiello"],
		genres: ["Crime"]
	},{ 
		title: "Buddy",
		year: 1997,
		cast: ["Rene Russo", "Robbie Coltrane", "Alan Cumming"],
		genres: ["Drama"]
	},{ 
		title: "The Butcher Boy",
		year: 1997,
		cast: ["Stephen Rea"],
		genres: ["Drama"]
	},{ 
		title: "Campfire Tales",
		year: 1997,
		cast: ["Gunnar Hansen"],
		genres: ["Horror"]
	},{ 
		title: "Cannibal Rollerbabes",
		year: 1997,
		cast: [],
		genres: ["Horror"]
	},{ 
		title: "Casper: A Spirited Beginning",
		year: 1997,
		cast: ["Steve Guttenberg", "Lori Loughlin", "Rodney Dangerfield"],
		genres: ["Comedy"]
	},{ 
		title: "Cats Don't Dance",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Chasing Amy",
		year: 1997,
		cast: ["Ben Affleck", "Joey Lauren Adams", "Jason Lee", "Jason Mewes"],
		genres: ["Comedy"]
	},{ 
		title: "Chicago Cab",
		year: 1997,
		cast: ["Paul Dillon", "Gillian Anderson", "John Cusack", "Laurie Metcalf", "Julianne Moore"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Chinese Box",
		year: 1997,
		cast: ["Jeremy Irons", "Gong Li"],
		genres: ["Drama"]
	},{ 
		title: "A Christmas Carol",
		year: 1997,
		cast: ["Tim Curry", "Whoopi Goldberg", "voices"],
		genres: ["Animated"]
	},{ 
		title: "City of Industry",
		year: 1997,
		cast: ["Harvey Keitel", "Stephen Dorff", "Timothy Hutton", "Famke Janssen", "Lucy Liu"],
		genres: ["Drama"]
	},{ 
		title: "Clockwatchers",
		year: 1997,
		cast: ["Toni Collette", "Lisa Kudrow", "Parker Posey"],
		genres: ["Comedy"]
	},{ 
		title: "Commandments",
		year: 1997,
		cast: ["Aidan Quinn", "Courteney Cox", "Anthony LaPaglia"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Common Bonds",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Con Air",
		year: 1997,
		cast: ["Nicolas Cage", "John Cusack", "John Malkovich", "Steve Buscemi", "Ving Rhames", "Mykelti Williamson", "Rachel Ticotin"],
		genres: ["Action"]
	},{ 
		title: "Conspiracy Theory",
		year: 1997,
		cast: ["Mel Gibson", "Julia Roberts", "Patrick Stewart"],
		genres: ["Thriller"]
	},{ 
		title: "Contact",
		year: 1997,
		cast: ["Jodie Foster", "Matthew McConaughey", "James Woods", "Angela Bassett", "John Hurt", "Tom Skerritt", "David Morse"],
		genres: ["Science Fiction"]
	},{ 
		title: "Cop Land",
		year: 1997,
		cast: ["Sylvester Stallone", "Harvey Keitel", "Ray Liotta", "Robert De Niro", "Annabella Sciorra", "Peter Berg", "Michael Rapaport"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Coven",
		year: 1997,
		cast: [],
		genres: ["Horror"]
	},{ 
		title: "Crayola Kids Adventures",
		year: 1997,
		cast: [],
		genres: ["Family"]
	},{ 
		title: "The Cremaster Cycle",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Crossed Swords",
		year: 1997,
		cast: ["Oliver Reed", "Raquel Welch"],
		genres: ["Adventure"]
	},{ 
		title: "Crowned and Dangerous",
		year: 1997,
		cast: ["Yasmine Bleeth", "Jill Clayburgh"],
		genres: ["Thriller"]
	},{ 
		title: "Danger Zone",
		year: 1997,
		cast: ["Billy Zane", "Robert Downey, Jr.", "Cary-Hiroyuki Tagawa"],
		genres: ["Action"]
	},{ 
		title: "Dangerous Ground",
		year: 1997,
		cast: ["Ice Cube", "Elizabeth Hurley"],
		genres: ["Thriller"]
	},{ 
		title: "Dante's Peak",
		year: 1997,
		cast: ["Pierce Brosnan", "Linda Hamilton"],
		genres: ["Disaster"]
	},{ 
		title: "Deconstructing Harry",
		year: 1997,
		cast: ["Kirstie Alley", "Richard Benjamin", "Billy Crystal", "Judy Davis", "Julia Louis-Dreyfus", "Demi Moore"],
		genres: ["Comedy"]
	},{ 
		title: "Def Jam's How to Be a Player",
		year: 1997,
		cast: ["Bill Bellamy"],
		genres: ["Comedy"]
	},{ 
		title: "Defying Gravity",
		year: 1997,
		cast: [],
		genres: ["Drama"]
	},{ 
		title: "Demolition University",
		year: 1997,
		cast: ["Corey Haim", "Ami Dolenz", "Laraine Newman"],
		genres: ["Action"]
	},{ 
		title: "Detective Conan: The Time-Bombed Skyscraper",
		year: 1997,
		cast: [],
		genres: ["Crime"]
	},{ 
		title: "The Devil's Advocate",
		year: 1997,
		cast: ["Keanu Reeves", "Al Pacino", "Charlize Theron"],
		genres: ["Thriller"]
	},{ 
		title: "Different Strokes",
		year: 1997,
		cast: ["Dana Plato", "Bentley Mitchum"],
		genres: ["Drama"]
	},{ 
		title: "Dogtown",
		year: 1997,
		cast: ["Mary Stuart Masterson", "Jon Favreau"],
		genres: ["Drama"]
	},{ 
		title: "Donnie Brasco",
		year: 1997,
		cast: ["Al Pacino", "Johnny Depp", "Michael Madsen", "Anne Heche", "Bruno Kirby"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Double Team",
		year: 1997,
		cast: ["Jean-Claude Van Damme", "Dennis Rodman", "Mickey Rourke"],
		genres: ["Action"]
	},{ 
		title: "Dream with the Fishes",
		year: 1997,
		cast: ["David Arquette"],
		genres: ["Drama"]
	},{ 
		title: "The Edge",
		year: 1997,
		cast: ["Anthony Hopkins", "Alec Baldwin", "Harold Perrineau"],
		genres: ["Thriller"]
	},{ 
		title: "Eight Days a Week",
		year: 1997,
		cast: ["Keri Russell"],
		genres: ["Comedy"]
	},{ 
		title: "Elevated",
		year: 1997,
		cast: [],
		genres: ["Short"]
	},{ 
		title: "Elvis Meets Nixon",
		year: 1997,
		cast: ["Rick Peters", "Bob Gunton"],
		genres: ["Comedy"]
	},{ 
		title: "The End of Violence",
		year: 1997,
		cast: ["Bill Pullman", "Andie MacDowell", "Gabriel Byrne"],
		genres: ["Drama"]
	},{ 
		title: "Ernest Goes to Africa",
		year: 1997,
		cast: ["Jim Varney"],
		genres: ["Comedy"]
	},{ 
		title: "Eve's Bayou",
		year: 1997,
		cast: ["Samuel L. Jackson", "Lynn Whitfield"],
		genres: ["Drama"]
	},{ 
		title: "Event Horizon",
		year: 1997,
		cast: ["Laurence Fishburne", "Sam Neill", "Kathleen Quinlan", "Joely Richardson", "Richard T. Jones", "Jack Noseworthy", "Jason Isaacs", "Sean Pertwee"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Ex",
		year: 1997,
		cast: ["Yancy Butler", "Suzy Amis"],
		genres: ["Suspense"]
	},{ 
		title: "Excess Baggage",
		year: 1997,
		cast: ["Alicia Silverstone", "Benicio del Toro", "Christopher Walken", "Harry Connick, Jr."],
		genres: ["Comedy"]
	},{ 
		title: "Face/Off",
		year: 1997,
		cast: ["John Travolta", "Nicolas Cage", "Joan Allen", "Alessandro Nivola", "Gina Gershon", "Dominique Swain"],
		genres: ["Action"]
	},{ 
		title: "FairyTale: A True Story",
		year: 1997,
		cast: ["Peter O'Toole", "Harvey Keitel"],
		genres: ["Fantasy"]
	},{ 
		title: "Fakin' Da Funk",
		year: 1997,
		cast: ["Pam Grier", "Duane Martin"],
		genres: ["Comedy"]
	},{ 
		title: "Fast, Cheap and Out of Control",
		year: 1997,
		cast: ["profile of 4 unusual occupations"],
		genres: ["Documentary"]
	},{ 
		title: "Fathers' Day",
		year: 1997,
		cast: ["Robin Williams", "Billy Crystal", "Julia Louis-Dreyfus", "Nastassja Kinski"],
		genres: ["Comedy"]
	},{ 
		title: "Favorite Son",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Fierce Creatures",
		year: 1997,
		cast: ["John Cleese", "Jamie Lee Curtis", "Kevin Kline", "Michael Palin"],
		genres: ["Comedy"]
	},{ 
		title: "The Fifth Element",
		year: 1997,
		cast: ["Bruce Willis", "Gary Oldman", "Milla Jovovich", "Chris Tucker", "Ian Holm", "Luke Perry"],
		genres: ["Science Fiction"]
	},{ 
		title: "Fire Down Below",
		year: 1997,
		cast: ["Steven Seagal", "Marg Helgenberger", "Kris Kristofferson", "Harry Dean Stanton", "Stephen Lang"],
		genres: ["Action"]
	},{ 
		title: "Firehouse",
		year: 1997,
		cast: ["Richard Dean Anderson", "Edie Falco"],
		genres: ["Drama"]
	},{ 
		title: "Firelight",
		year: 1997,
		cast: ["Sophie Marceau"],
		genres: ["Drama"]
	},{ 
		title: "First Time Felon",
		year: 1997,
		cast: ["Omar Epps", "Delroy Lindo"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Flash",
		year: 1997,
		cast: ["Lucas Black", "Ellen Burstyn"],
		genres: ["Family"]
	},{ 
		title: "Flubber",
		year: 1997,
		cast: ["Robin Williams"],
		genres: ["Comedy", "Fantasy"]
	},{ 
		title: "Flying Saucer Rock'n'Roll",
		year: 1997,
		cast: [],
		genres: ["Short"]
	},{ 
		title: "Free Willy 3: The Rescue",
		year: 1997,
		cast: ["Jason James Richter"],
		genres: ["Family"]
	},{ 
		title: "Fools Rush In",
		year: 1997,
		cast: ["Matthew Perry", "Salma Hayek"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "For Richer or Poorer",
		year: 1997,
		cast: ["Tim Allen", "Kirstie Alley"],
		genres: ["Comedy"]
	},{ 
		title: "Full Tilt Boogie",
		year: 1997,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Future War",
		year: 1997,
		cast: ["Daniel Bernhardt"],
		genres: ["Science Fiction"]
	},{ 
		title: "G.I. Jane",
		year: 1997,
		cast: ["Demi Moore", "Viggo Mortensen", "Anne Bancroft"],
		genres: ["Action"]
	},{ 
		title: "The Game",
		year: 1997,
		cast: ["Michael Douglas", "Sean Penn", "James Rebhorn", "Deborah Kara Unger", "Carroll Baker"],
		genres: ["Thriller"]
	},{ 
		title: "Gang Related",
		year: 1997,
		cast: ["James Belushi", "Tupac Shakur", "Lela Rochon"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Gattaca",
		year: 1997,
		cast: ["Ethan Hawke", "Uma Thurman", "Jude Law"],
		genres: ["Science Fiction"]
	},{ 
		title: "George Wallace",
		year: 1997,
		cast: ["Gary Sinise", "Mare Winningham", "Angelina Jolie"],
		genres: ["Biography"]
	},{ 
		title: "George of the Jungle",
		year: 1997,
		cast: ["Brendan Fraser", "Leslie Mann", "Thomas Haden Church"],
		genres: ["Comedy"]
	},{ 
		title: "Geri's Game",
		year: 1997,
		cast: [],
		genres: ["Animated", "Short"]
	},{ 
		title: "Get a Clue",
		year: 1997,
		cast: ["Ray Walston", "Diane Ladd", "Sally Kirkland"],
		genres: ["Family"]
	},{ 
		title: "Ghosts",
		year: 1997,
		cast: ["Michael Jackson"],
		genres: []
	},{ 
		title: "Going All the Way",
		year: 1997,
		cast: ["Jeremy Davis", "Ben Affleck", "Amy Locane"],
		genres: ["Drama"]
	},{ 
		title: "Gone Fishin'",
		year: 1997,
		cast: ["Joe Pesci", "Danny Glover", "Rosanna Arquette", "Lynn Whitfield"],
		genres: ["Comedy"]
	},{ 
		title: "Good Burger",
		year: 1997,
		cast: ["Kenan Thompson", "Kel Mitchell"],
		genres: ["Comedy"]
	},{ 
		title: "Good Will Hunting",
		year: 1997,
		cast: ["Matt Damon", "Robin Williams", "Ben Affleck", "Minnie Driver", "Stellan Skarsgård"],
		genres: ["Drama"]
	},{ 
		title: "Goodbye America",
		year: 1997,
		cast: ["Wolfgang Bodison", "Corin Nemec"],
		genres: ["Action"]
	},{ 
		title: "Grateful Dead: Downhill from Here",
		year: 1997,
		cast: ["The Grateful Dead"],
		genres: ["Performance"]
	},{ 
		title: "Gridlock'd",
		year: 1997,
		cast: ["Tim Roth", "Tupac Shakur"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Grosse Pointe Blank",
		year: 1997,
		cast: ["John Cusack", "Minnie Driver", "Dan Aykroyd", "Alan Arkin"],
		genres: ["Comedy"]
	},{ 
		title: "Hacks",
		year: 1997,
		cast: ["Stephen Rea", "Illeana Douglas", "John Ritter"],
		genres: ["Comedy"]
	},{ 
		title: "Hands on a Hard Body: The Documentary",
		year: 1997,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Hard Eight",
		year: 1997,
		cast: ["Philip Baker Hall", "John C. Reilly", "Gwyneth Paltrow"],
		genres: ["Drama"]
	},{ 
		title: "Hav Plenty",
		year: 1997,
		cast: [],
		genres: ["Comedy"]
	},{ 
		title: "Henry Fool",
		year: 1997,
		cast: ["Thomas Jay Ryan", "Parker Posey"],
		genres: ["Drama"]
	},{ 
		title: "Hercules",
		year: 1997,
		cast: [],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Highball",
		year: 1997,
		cast: ["Justine Bateman", "Peter Bogdanovich"],
		genres: ["Comedy"]
	},{ 
		title: "Hitler",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Home Alone 3",
		year: 1997,
		cast: ["Alex D. Linz"],
		genres: ["Family"]
	},{ 
		title: "Honey, We Shrunk Ourselves",
		year: 1997,
		cast: ["Rick Moranis"],
		genres: ["Science Fiction"]
	},{ 
		title: "Hoodlum",
		year: 1997,
		cast: ["Laurence Fishburne", "Tim Roth", "Vanessa Williams", "Andy García"],
		genres: ["Crime"]
	},{ 
		title: "The House of Yes",
		year: 1997,
		cast: ["Parker Posey"],
		genres: ["Comedy"]
	},{ 
		title: "Hugo Pool",
		year: 1997,
		cast: ["Alyssa Milano", "Patrick Dempsey"],
		genres: ["Comedy"]
	},{ 
		title: "Hurricane Streets",
		year: 1997,
		cast: ["Heather Matarazzo"],
		genres: ["Drama"]
	},{ 
		title: "I Know What You Did Last Summer",
		year: 1997,
		cast: ["Jennifer Love Hewitt", "Sarah Michelle Gellar", "Ryan Phillippe", "Freddie Prinze, Jr.", "Johnny Galecki", "Bridgette Wilson", "Anne Heche"],
		genres: ["Horror"]
	},{ 
		title: "I Married a Strange Person!",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "I'm Bout It",
		year: 1997,
		cast: ["Master P"],
		genres: ["Drama"]
	},{ 
		title: "The Ice Storm",
		year: 1997,
		cast: ["Kevin Kline", "Joan Allen", "Sigourney Weaver", "Tobey Maguire", "Christina Ricci", "Elijah Wood"],
		genres: ["Drama"]
	},{ 
		title: "In & Out",
		year: 1997,
		cast: ["Kevin Kline", "Joan Cusack", "Tom Selleck", "Matt Dillon", "Bob Newhart", "Debbie Reynolds", "Wilford Brimley"],
		genres: ["Comedy"]
	},{ 
		title: "In the Company of Men",
		year: 1997,
		cast: ["Aaron Eckhart", "Matt Molloy"],
		genres: ["Comedy"]
	},{ 
		title: "In the Gloaming",
		year: 1997,
		cast: ["Glenn Close", "Bridget Fonda", "Whoopi Goldberg", "Robert Sean Leonard", "David Strathairn"],
		genres: ["Drama"]
	},{ 
		title: "Inferno",
		year: 1997,
		cast: ["Don Wilson"],
		genres: ["Action"]
	},{ 
		title: "The Informant",
		year: 1997,
		cast: ["Cary Elwes", "Timothy Dalton"],
		genres: ["Drama"]
	},{ 
		title: "Intensity",
		year: 1997,
		cast: ["Piper Laurie", "Molly Parker"],
		genres: ["Thriller"]
	},{ 
		title: "Inventing the Abbotts",
		year: 1997,
		cast: ["Liv Tyler", "Jennifer Connelly", "Joaquin Phoenix", "Billy Crudup", "Joanna Going"],
		genres: ["Comedy"]
	},{ 
		title: "It's In the Water",
		year: 1997,
		cast: [],
		genres: ["Drama"]
	},{ 
		title: "The Jackal",
		year: 1997,
		cast: ["Bruce Willis", "Richard Gere", "Sidney Poitier", "Diane Venora"],
		genres: ["Thriller"]
	},{ 
		title: "Jackie Brown",
		year: 1997,
		cast: ["Pam Grier", "Samuel L. Jackson", "Robert Forster", "Robert De Niro", "Michael Keaton", "Bridget Fonda", "Chris Tucker"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Jane Eyre",
		year: 1997,
		cast: ["Samantha Morton", "Ciarán Hinds"],
		genres: ["Drama"]
	},{ 
		title: "Jungle 2 Jungle",
		year: 1997,
		cast: ["Tim Allen", "Martin Short", "JoBeth Williams", "Lolita Davidovich", "Sam Huntington"],
		genres: ["Comedy"]
	},{ 
		title: "Jungle Emperor Leo",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Just in Time",
		year: 1997,
		cast: ["Mark Moses", "Brittany Alyse Smith"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Just Write",
		year: 1997,
		cast: ["Sherilyn Fenn", "Jeremy Piven"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Justice League of America",
		year: 1997,
		cast: [],
		genres: ["Animated"]
	},{ 
		title: "Keeping the Promise",
		year: 1997,
		cast: ["Keith Carradine", "Annette O'Toole"],
		genres: ["Family", "Drama"]
	},{ 
		title: "Keys to Tulsa",
		year: 1997,
		cast: ["James Spader", "Eric Stoltz", "Mary Tyler Moore"],
		genres: ["Drama"]
	},{ 
		title: "Kiss the Girls",
		year: 1997,
		cast: ["Morgan Freeman", "Ashley Judd"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Knockin' On Heaven's Door",
		year: 1997,
		cast: ["Rutger Hauer"],
		genres: []
	},{ 
		title: "Kull the Conqueror",
		year: 1997,
		cast: ["Kevin Sorbo", "Tia Carrere", "Thomas Ian Griffith", "Litefoot", "Harvey Fierstein"],
		genres: ["Fantasy"]
	},{ 
		title: "Kundun",
		year: 1997,
		cast: [],
		genres: ["Biography"]
	},{ 
		title: "L.A. Confidential",
		year: 1997,
		cast: ["Kevin Spacey", "Russell Crowe", "Guy Pearce", "Kim Basinger", "Danny DeVito", "James Cromwell", "David Strathairn", "Simon Baker"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Land Before Time V: The Mysterious Island",
		year: 1997,
		cast: [],
		genres: ["Animated"]
	},{ 
		title: "Last Stand at Saber River",
		year: 1997,
		cast: ["Tom Selleck", "Keith Carradine", "Haley Joel Osment"],
		genres: ["Western"]
	},{ 
		title: "The Last Time I Committed Suicide",
		year: 1997,
		cast: ["Thomas Jane", "Keanu Reeves"],
		genres: ["Drama"]
	},{ 
		title: "Latter-Day Saints",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Lawn Dogs",
		year: 1997,
		cast: ["Sam Rockwell", "Mischa Barton", "Kathleen Quinlan"],
		genres: ["Drama"]
	},{ 
		title: "Leave It to Beaver",
		year: 1997,
		cast: ["Christopher McDonald", "Janine Turner"],
		genres: ["Family"]
	},{ 
		title: "Leprechaun 4: In Space",
		year: 1997,
		cast: ["Warwick Davis"],
		genres: ["Horror"]
	},{ 
		title: "Lewis and Clark and George",
		year: 1997,
		cast: ["Rose McGowan", "Dan Gunther"],
		genres: ["Comedy"]
	},{ 
		title: "Liar Liar",
		year: 1997,
		cast: ["Jim Carrey", "Justin Cooper", "Maura Tierney", "Cary Elwes", "Jennifer Tilly", "Amanda Donohoe"],
		genres: ["Comedy"]
	},{ 
		title: "Liberty!",
		year: 1997,
		cast: ["Roger Rees", "Philip Seymour Hoffman", "Donna Murphy"],
		genres: ["Documentary"]
	},{ 
		title: "A Life Less Ordinary",
		year: 1997,
		cast: ["Ewan McGregor", "Cameron Diaz", "Holly Hunter", "Delroy Lindo", "Ian Holm"],
		genres: ["Comedy"]
	},{ 
		title: "Little City",
		year: 1997,
		cast: ["Josh Charles", "Jon Bon Jovi", "Penelope Ann Miller"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Little Red Riding Hood",
		year: 1997,
		cast: [],
		genres: ["Short"]
	},{ 
		title: "Lolita",
		year: 1997,
		cast: ["Dominique Swain", "Jeremy Irons", "Frank Langella", "Melanie Griffith"],
		genres: ["Drama"]
	},{ 
		title: "Lost Highway",
		year: 1997,
		cast: ["Bill Pullman", "Patricia Arquette", "Balthazar Getty", "Robert Loggia", "Robert Blake"],
		genres: ["Suspense"]
	},{ 
		title: "The Lost World: Jurassic Park",
		year: 1997,
		cast: ["Jeff Goldblum", "Julianne Moore", "Pete Postlethwaite", "Arliss Howard", "Richard Attenborough"],
		genres: ["Science Fiction"]
	},{ 
		title: "Love Jones",
		year: 1997,
		cast: ["Larenz Tate", "Nia Long"],
		genres: ["Drama"]
	},{ 
		title: "Love and Death on Long Island",
		year: 1997,
		cast: ["John Hurt", "Jason Priestley"],
		genres: ["Drama"]
	},{ 
		title: "Love! Valour! Compassion!",
		year: 1997,
		cast: ["Jason Alexander", "John Glover"],
		genres: ["Drama"]
	},{ 
		title: "Lovelife",
		year: 1997,
		cast: ["Carla Gugino", "Sherilyn Fenn"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Lucky Three",
		year: 1997,
		cast: [],
		genres: ["Short"]
	},{ 
		title: "MPG: Motion Picture Genocide",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Mad City",
		year: 1997,
		cast: ["Dustin Hoffman", "John Travolta", "Mia Kirshner", "Alan Alda"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Man Who Knew Too Little",
		year: 1997,
		cast: ["Bill Murray", "Joanne Whalley", "Peter Gallagher"],
		genres: ["Comedy"]
	},{ 
		title: "Masterminds",
		year: 1997,
		cast: ["Patrick Stewart", "Vincent Kartheiser"],
		genres: ["Comedy"]
	},{ 
		title: "The MatchMaker",
		year: 1997,
		cast: ["Janeane Garofalo", "David O'Hara", "Milo O'Shea", "Denis Leary"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "McHale's Navy",
		year: 1997,
		cast: ["Tom Arnold", "Tim Curry", "David Alan Grier", "Debra Messing"],
		genres: ["Comedy"]
	},{ 
		title: "Mean Guns",
		year: 1997,
		cast: ["Ice-T", "Christopher Lambert"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Meet Wally Sparks",
		year: 1997,
		cast: ["Rodney Dangerfield", "Burt Reynolds", "Cindy Williams"],
		genres: ["Comedy"]
	},{ 
		title: "The Member of the Wedding",
		year: 1997,
		cast: ["Anna Paquin", "Alfre Woodard"],
		genres: ["Drama"]
	},{ 
		title: "Men in Black",
		year: 1997,
		cast: ["Will Smith", "Tommy Lee Jones", "Vincent D'Onofrio", "Linda Fiorentino", "Rip Torn", "Tony Shalhoub"],
		genres: ["Science Fiction"]
	},{ 
		title: "Men with Guns",
		year: 1997,
		cast: ["Mandy Patinkin"],
		genres: ["Drama"]
	},{ 
		title: "Metro",
		year: 1997,
		cast: ["Eddie Murphy", "Michael Wincott", "Michael Rapaport"],
		genres: ["Action"]
	},{ 
		title: "The Midas Touch",
		year: 1997,
		cast: ["Trever O'Brien"],
		genres: ["Fantasy"]
	},{ 
		title: "Midnight in the Garden of Good and Evil",
		year: 1997,
		cast: ["Kevin Spacey", "John Cusack", "Jude Law"],
		genres: ["Drama"]
	},{ 
		title: "Mighty Ducks the Movie: The First Face-Off",
		year: 1997,
		cast: ["voices of", "Brad Garrett", "James Belushi", "Tim Curry"],
		genres: ["Animated"]
	},{ 
		title: "Mimic",
		year: 1997,
		cast: ["Mira Sorvino", "Jeremy Northam", "Josh Brolin", "Charles S. Dutton", "Giancarlo Giannini", "F. Murray Abraham"],
		genres: ["Horror"]
	},{ 
		title: "Miss Evers' Boys",
		year: 1997,
		cast: ["Alfre Woodard", "Laurence Fishburne"],
		genres: ["Drama"]
	},{ 
		title: "Money Talks",
		year: 1997,
		cast: ["Chris Tucker", "Charlie Sheen", "Heather Locklear"],
		genres: ["Comedy"]
	},{ 
		title: "Monty Roberts: A Real Horse Whisperer",
		year: 1997,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Mortal Kombat: Annihilation",
		year: 1997,
		cast: ["Robin Shou", "Talisa Soto", "Sandra Hess", "James Remar"],
		genres: ["Action"]
	},{ 
		title: "Most Wanted",
		year: 1997,
		cast: ["Keenen Ivory Wayans", "Jon Voight", "Jill Hennessy"],
		genres: ["Action"]
	},{ 
		title: "MouseHunt",
		year: 1997,
		cast: ["Nathan Lane", "Lee Evans", "Christopher Walken", "Maury Chaykin", "William Hickey"],
		genres: ["Comedy"]
	},{ 
		title: "Mr. Magoo",
		year: 1997,
		cast: ["Leslie Nielsen", "Miguel Ferrer", "Kelly Lynch", "Malcolm McDowell"],
		genres: ["Comedy"]
	},{ 
		title: "Mrs Dalloway",
		year: 1997,
		cast: ["Vanessa Redgrave", "Natascha McElhone"],
		genres: ["Drama"]
	},{ 
		title: "Murder at 1600",
		year: 1997,
		cast: ["Wesley Snipes", "Diane Lane"],
		genres: ["Thriller"]
	},{ 
		title: "My Best Friend's Wedding",
		year: 1997,
		cast: ["Julia Roberts", "Dermot Mulroney", "Cameron Diaz", "Rupert Everett"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "My Teacher Ate My Homework",
		year: 1997,
		cast: ["Shelley Duvall", "Sheila McCarthy"],
		genres: ["Comedy"]
	},{ 
		title: "The Myth of Fingerprints",
		year: 1997,
		cast: ["Blythe Danner", "James LeGros", "Julianne Moore", "Roy Scheider"],
		genres: ["Drama"]
	},{ 
		title: "Nevada",
		year: 1997,
		cast: ["Amy Brenneman", "Kirstie Alley", "Gabrielle Anwar"],
		genres: ["Drama"]
	},{ 
		title: "Niagara, Niagara",
		year: 1997,
		cast: ["Henry Thomas", "Robin Tunney", "Stephen Lang"],
		genres: ["Drama"]
	},{ 
		title: "Night Falls on Manhattan",
		year: 1997,
		cast: ["Andy García", "Richard Dreyfuss", "Lena Olin", "Ian Holm", "Ron Leibman", "James Gandolfini"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Night Flier",
		year: 1997,
		cast: ["Miguel Ferrer"],
		genres: ["Horror"]
	},{ 
		title: "Night of the Demons 3",
		year: 1997,
		cast: [],
		genres: ["Horror"]
	},{ 
		title: "Nightwatch",
		year: 1997,
		cast: ["Ewan McGregor", "Patricia Arquette", "Nick Nolte"],
		genres: ["Thriller"]
	},{ 
		title: "Northern Lights",
		year: 1997,
		cast: ["Diane Keaton"],
		genres: ["Family"]
	},{ 
		title: "Nothing to Lose",
		year: 1997,
		cast: ["Martin Lawrence", "Tim Robbins", "Kelly Preston"],
		genres: ["Comedy"]
	},{ 
		title: "Nowhere",
		year: 1997,
		cast: [],
		genres: ["Drama"]
	},{ 
		title: "The Odyssey",
		year: 1997,
		cast: ["Armand Assante", "Isabella Rossellini", "Greta Scacchi", "Eric Roberts", "Vanessa L. Williams"],
		genres: ["Adventure"]
	},{ 
		title: "Office Killer",
		year: 1997,
		cast: ["Carol Kane", "Molly Ringwald", "Jeanne Tripplehorn"],
		genres: ["Comedy"]
	},{ 
		title: "Oliver Twist",
		year: 1997,
		cast: ["Richard Dreyfuss", "Elijah Wood"],
		genres: ["Family"]
	},{ 
		title: "Omega Doom",
		year: 1997,
		cast: ["Rutger Hauer"],
		genres: ["Science Fiction"]
	},{ 
		title: "On the 2nd Day of Christmas",
		year: 1997,
		cast: ["Mary Stuart Masterson", "Mark Ruffalo"],
		genres: ["Drama"]
	},{ 
		title: "On the Edge of Innocence",
		year: 1997,
		cast: ["Kellie Martin", "Karen Young"],
		genres: []
	},{ 
		title: "One Eight Seven",
		year: 1997,
		cast: ["Samuel L. Jackson", "John Heard"],
		genres: ["Thriller"]
	},{ 
		title: "One Night Stand",
		year: 1997,
		cast: ["Wesley Snipes", "Nastassja Kinski", "Kyle MacLachlan", "Ming-Na Wen", "Robert Downey, Jr.", "Glenn Plummer"],
		genres: ["Drama"]
	},{ 
		title: "Orgazmo",
		year: 1997,
		cast: ["Trey Parker", "Dian Bachar", "Robyn Lynne Raab", "Michael Dean Jacobs", "Matt Stone"],
		genres: ["Comedy"]
	},{ 
		title: "Oscar and Lucinda",
		year: 1997,
		cast: ["Ralph Fiennes", "Cate Blanchett", "Tom Wilkinson"],
		genres: ["Drama"]
	},{ 
		title: "Out to Sea",
		year: 1997,
		cast: ["Jack Lemmon", "Walter Matthau", "Dyan Cannon"],
		genres: ["Comedy"]
	},{ 
		title: "Painted Angels",
		year: 1997,
		cast: ["Brenda Fricker", "Kelly McGillis"],
		genres: ["Western"]
	},{ 
		title: "Paradise Road",
		year: 1997,
		cast: ["Glenn Close", "Frances McDormand", "Julianna Margulies"],
		genres: ["War", "Drama"]
	},{ 
		title: "The Peacemaker",
		year: 1997,
		cast: ["George Clooney", "Nicole Kidman"],
		genres: ["Action"]
	},{ 
		title: "Perfect Body",
		year: 1997,
		cast: ["Amy Jo Johnson", "Cathy Rigby"],
		genres: ["Drama"]
	},{ 
		title: "The Pest",
		year: 1997,
		cast: ["John Leguizamo", "Freddy Rodriguez"],
		genres: ["Comedy"]
	},{ 
		title: "Picture Perfect",
		year: 1997,
		cast: ["Jennifer Aniston", "Jay Mohr", "Kevin Bacon"],
		genres: ["Romance"]
	},{ 
		title: "Playing God",
		year: 1997,
		cast: ["David Duchovny", "Timothy Hutton", "Angelina Jolie"],
		genres: ["Drama"]
	},{ 
		title: "Poison Ivy: The New Seduction",
		year: 1997,
		cast: ["Jaime Pressly"],
		genres: ["Suspense"]
	},{ 
		title: "Police 2020",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Pooh's Grand Adventure: The Search for Christopher Robin",
		year: 1997,
		cast: ["Jim Cummings", "John Fielder", "Ken Sansom", "Andre Stojka", "Peter Cullen", "David Warner", "Paul Winchell"],
		genres: ["Family", "Animated"]
	},{ 
		title: "The Postman",
		year: 1997,
		cast: ["Kevin Costner", "Olivia Williams", "Larenz Tate", "Will Patton"],
		genres: ["Science Fiction"]
	},{ 
		title: "Preaching to the Perverted",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Prefontaine",
		year: 1997,
		cast: ["Jared Leto", "R. Lee Ermey", "Ed O'Neill"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Pressurecooker",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Private Parts",
		year: 1997,
		cast: ["Howard Stern", "Robin Quivers", "Mary McCormack", "Paul Giamatti", "Allison Janney"],
		genres: ["Biography", "Comedy"]
	},{ 
		title: "Pullet Surprise",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Quicksilver Highway",
		year: 1997,
		cast: ["Christopher Lloyd"],
		genres: ["Drama"]
	},{ 
		title: "Quiet Days in Hollywood",
		year: 1997,
		cast: ["Hilary Swank", "Chad Lowe", "Natasha Gregson Wagner"],
		genres: ["Drama"]
	},{ 
		title: "The Rainmaker",
		year: 1997,
		cast: ["Matt Damon", "Claire Danes", "Danny DeVito", "Jon Voight", "Mary Kay Place", "Mickey Rourke", "Danny Glover", "Virginia Madsen", "Roy Scheider"],
		genres: ["Drama"]
	},{ 
		title: "Red Corner",
		year: 1997,
		cast: ["Richard Gere", "Bai Ling"],
		genres: ["Thriller"]
	},{ 
		title: "The Relic",
		year: 1997,
		cast: ["Penelope Ann Miller", "Tom Sizemore", "Linda Hunt", "James Whitmore"],
		genres: ["Horror"]
	},{ 
		title: "A River Made to Drown In",
		year: 1997,
		cast: ["Michael Imperioli", "Richard Chamberlain"],
		genres: ["Drama"]
	},{ 
		title: "Robinson Crusoe",
		year: 1997,
		cast: ["Pierce Brosnan"],
		genres: ["Adventure"]
	},{ 
		title: "RocketMan",
		year: 1997,
		cast: ["Harland Williams", "Jessica Lundy", "William Sadler"],
		genres: ["Comedy"]
	},{ 
		title: "Romy and Michele's High School Reunion",
		year: 1997,
		cast: ["Mira Sorvino", "Lisa Kudrow", "Janeane Garofalo"],
		genres: ["Comedy"]
	},{ 
		title: "Rosewood",
		year: 1997,
		cast: ["Jon Voight", "Ving Rhames", "Don Cheadle", "Bruce McGill", "Loren Dean", "Esther Rolle", "Elise Neal"],
		genres: ["Drama"]
	},{ 
		title: "Rough Riders",
		year: 1997,
		cast: ["Tom Berenger", "Chris Noth", "Gary Busey", "Sam Elliott"],
		genres: ["Drama"]
	},{ 
		title: "Running Time",
		year: 1997,
		cast: ["Bruce Campbell"],
		genres: []
	},{ 
		title: "Sick: The Life and Death of Bob Flanagan, Supermasochist",
		year: 1997,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "The Saint",
		year: 1997,
		cast: ["Val Kilmer", "Elisabeth Shue"],
		genres: ["Thriller"]
	},{ 
		title: "Saint-Ex",
		year: 1997,
		cast: ["Bruno Ganz", "Miranda Richardson"],
		genres: ["Biography"]
	},{ 
		title: "Scream 2",
		year: 1997,
		cast: ["David Arquette", "Neve Campbell", "Courteney Cox", "Omar Epps", "Sarah Michelle Gellar", "Laurie Metcalf", "Jerry O'Connell", "Timothy Olyphant", "Jada Pinkett"],
		genres: ["Horror"]
	},{ 
		title: "The Second Jungle Book: Mowgli & Baloo",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Selena",
		year: 1997,
		cast: ["Jennifer Lopez", "Edward James Olmos"],
		genres: ["Biography"]
	},{ 
		title: "Seven Years in Tibet",
		year: 1997,
		cast: ["Brad Pitt", "David Thewlis", "Victor Wong", "Lhakpa Tsamchoe"],
		genres: ["Drama"]
	},{ 
		title: "Shadow Conspiracy",
		year: 1997,
		cast: ["Charlie Sheen", "Donald Sutherland", "Linda Hamilton", "Sam Waterston", "Stephen Lang", "Ben Gazzara"],
		genres: ["Drama"]
	},{ 
		title: "She's So Lovely",
		year: 1997,
		cast: ["Sean Penn", "Robin Wright Penn", "John Travolta"],
		genres: ["Drama"]
	},{ 
		title: "Shrieker",
		year: 1997,
		cast: [],
		genres: ["Horror"]
	},{ 
		title: "A Simple Wish",
		year: 1997,
		cast: ["Martin Short", "Mara Wilson", "Kathleen Turner"],
		genres: ["Fantasy"]
	},{ 
		title: "Six Ways to Sunday",
		year: 1997,
		cast: ["Adrien Brody", "Deborah Harry"],
		genres: ["Drama"]
	},{ 
		title: "The 6th Man",
		year: 1997,
		cast: ["Marlon Wayans", "Kadeem Hardison"],
		genres: []
	},{ 
		title: "A Smile Like Yours",
		year: 1997,
		cast: ["Greg Kinnear", "Lauren Holly", "Joan Cusack"],
		genres: ["Comedy"]
	},{ 
		title: "Snow White: A Tale of Terror",
		year: 1997,
		cast: ["Sigourney Weaver", "Monica Keena", "Sam Neill"],
		genres: ["Horror"]
	},{ 
		title: "Soul Food",
		year: 1997,
		cast: ["Vanessa L. Williams", "Vivica A. Fox", "Nia Long", "Michael Beach"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Space Marines",
		year: 1997,
		cast: [],
		genres: ["Science Fiction"]
	},{ 
		title: "Spaceman",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "The Spanish Prisoner",
		year: 1997,
		cast: ["Campbell Scott", "Steve Martin", "Rebecca Pidgeon"],
		genres: ["Drama"]
	},{ 
		title: "Spawn",
		year: 1997,
		cast: ["Michael Jai White", "John Leguizamo", "Martin Sheen", "Theresa Randle", "Nicol Williamson", "D. B. Sweeney"],
		genres: ["Horror"]
	},{ 
		title: "Speed 2: Cruise Control",
		year: 1997,
		cast: ["Sandra Bullock", "Jason Patric", "Willem Dafoe"],
		genres: ["Action"]
	},{ 
		title: "Sprung",
		year: 1997,
		cast: ["Tisha Campbell", "Paula Jai Parker"],
		genres: ["Comedy"]
	},{ 
		title: "Star Kid",
		year: 1997,
		cast: ["Joseph Mazzello", "Richard Gilliland"],
		genres: ["Family"]
	},{ 
		title: "Starship Troopers",
		year: 1997,
		cast: ["Casper Van Dien", "Dina Meyer", "Denise Richards", "Jake Busey", "Neil Patrick Harris", "Patrick Muldoon"],
		genres: ["Science Fiction"]
	},{ 
		title: "Steel",
		year: 1997,
		cast: ["Shaquille O'Neal", "Annabeth Gish", "Judd Nelson", "Richard Roundtree", "Ray J"],
		genres: ["Action"]
	},{ 
		title: "Stranger in the House",
		year: 1997,
		cast: ["Michele Greene", "Steve Railsback"],
		genres: ["Suspense"]
	},{ 
		title: "Strategic Command",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Strawberry Fields",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Suicide Kings",
		year: 1997,
		cast: ["Christopher Walken", "Denis Leary", "Henry Thomas"],
		genres: ["Drama"]
	},{ 
		title: "Sunday",
		year: 1997,
		cast: ["David Suchet", "Lisa Harrow", "Jared Harris"],
		genres: ["Comedy"]
	},{ 
		title: "Super Speedway",
		year: 1997,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "The Swan Princess II: Escape from Castle Mountain",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Swept from the Sea",
		year: 1997,
		cast: ["Rachel Weisz", "Ian McKellen", "Kathy Bates"],
		genres: ["Drama"]
	},{ 
		title: "Switchback",
		year: 1997,
		cast: ["Dennis Quaid", "Danny Glover", "Jared Leto"],
		genres: ["Thriller"]
	},{ 
		title: "Telling Lies in America",
		year: 1997,
		cast: ["Kevin Bacon", "Brad Renfro"],
		genres: ["Drama"]
	},{ 
		title: "That Darn Cat",
		year: 1997,
		cast: ["Christina Ricci", "Doug E. Doug"],
		genres: ["Family"]
	},{ 
		title: "That Old Feeling",
		year: 1997,
		cast: ["Bette Midler", "Dennis Farina"],
		genres: ["Comedy"]
	},{ 
		title: "This World, Then the Fireworks",
		year: 1997,
		cast: ["Billy Zane", "Gina Gershon", "Sheryl Lee"],
		genres: ["Drama"]
	},{ 
		title: "A Thousand Acres",
		year: 1997,
		cast: ["Jessica Lange", "Michelle Pfeiffer", "Jennifer Jason Leigh", "Jason Robards", "Colin Firth"],
		genres: ["Drama"]
	},{ 
		title: "'Til There Was You",
		year: 1997,
		cast: ["Jeanne Tripplehorn", "Dylan McDermott", "Sarah Jessica Parker"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Titanic",
		year: 1997,
		cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Frances Fisher", "Victor Garber", "Kathy Bates", "Bill Paxton", "Gloria Stuart", "David Warner", "Suzy Amis"],
		genres: ["Historical", "Disaster"]
	},{ 
		title: "Top of the World",
		year: 1997,
		cast: ["Peter Weller", "Dennis Hopper"],
		genres: ["Drama"]
	},{ 
		title: "Touch",
		year: 1997,
		cast: ["Bridget Fonda", "Christopher Walken", "Skeet Ulrich", "Tom Arnold", "Gina Gershon", "Lolita Davidovich"],
		genres: ["Comedy"]
	},{ 
		title: "Toothless",
		year: 1997,
		cast: [],
		genres: ["Family"]
	},{ 
		title: "Touch Me",
		year: 1997,
		cast: ["Amanda Peet", "Michael Vartan", "Peter Facinelli"],
		genres: ["Romance"]
	},{ 
		title: "Tower of Terror",
		year: 1997,
		cast: ["Steve Guttenberg", "Kirsten Dunst"],
		genres: ["Horror"]
	},{ 
		title: "Traveller",
		year: 1997,
		cast: ["Bill Paxton", "Mark Wahlberg", "Julianna Margulies"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Trekkies",
		year: 1997,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Trial and Error",
		year: 1997,
		cast: ["Michael Richards", "Jeff Daniels", "Charlize Theron"],
		genres: ["Comedy"]
	},{ 
		title: "Trojan War",
		year: 1997,
		cast: ["Will Friedle", "Jennifer Love Hewitt"],
		genres: ["Comedy"]
	},{ 
		title: "Truth or Consequences, N.M.",
		year: 1997,
		cast: ["Kiefer Sutherland", "Kevin Pollak", "Kim Dickens", "Grace Phillips"],
		genres: ["Drama"]
	},{ 
		title: "Turbo: A Power Rangers Movie",
		year: 1997,
		cast: ["Johnny Yong Bosch", "Nakia Burrise", "Jason David Frank", "Catherine Sutherland"],
		genres: ["Fantasy"]
	},{ 
		title: "Turbulence",
		year: 1997,
		cast: ["Ray Liotta", "Lauren Holly", "Hector Elizondo", "Rachel Ticotin", "Catherine Hicks", "Brendan Gleeson"],
		genres: ["Action"]
	},{ 
		title: "The Twilight of the Golds",
		year: 1997,
		cast: ["Jennifer Beals", "Brendan Fraser"],
		genres: ["Drama"]
	},{ 
		title: "Twisted",
		year: 1997,
		cast: ["William Hickey", "Billy Porter"],
		genres: ["Drama"]
	},{ 
		title: "U Turn",
		year: 1997,
		cast: ["Sean Penn", "Jennifer Lopez", "Nick Nolte", "Powers Boothe", "Jon Voight", "Joaquin Phoenix", "Claire Danes", "Billy Bob Thornton"],
		genres: ["Thriller", "Comedy"]
	},{ 
		title: "Ulee's Gold",
		year: 1997,
		cast: ["Peter Fonda", "Patricia Richardson"],
		genres: ["Drama"]
	},{ 
		title: "Under Wraps",
		year: 1997,
		cast: ["Adam Wylie", "Ed Lauter"],
		genres: ["Family"]
	},{ 
		title: "Vampire Journals",
		year: 1997,
		cast: [],
		genres: ["Horror"]
	},{ 
		title: "Vanishing Point",
		year: 1997,
		cast: ["Viggo Mortensen", "Jason Priestley", "Keith David"],
		genres: ["Action"]
	},{ 
		title: "Vegas Vacation",
		year: 1997,
		cast: ["Chevy Chase", "Beverly D'Angelo", "Randy Quaid", "Ethan Embry", "Marisol Nichols"],
		genres: ["Comedy"]
	},{ 
		title: "Velocity Trap",
		year: 1997,
		cast: ["Olivier Gruner", "Craig Wasson"],
		genres: ["Action"]
	},{ 
		title: "Volcano",
		year: 1997,
		cast: ["Tommy Lee Jones", "Anne Heche", "Gaby Hoffmann", "Don Cheadle", "Keith David"],
		genres: ["Disaster"]
	},{ 
		title: "Waco: The Rules of Engagement",
		year: 1997,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Wag the Dog",
		year: 1997,
		cast: ["Dustin Hoffman", "Robert De Niro", "Woody Harrelson", "Anne Heche", "Denis Leary", "Willie Nelson"],
		genres: ["Comedy"]
	},{ 
		title: "Waiting for Guffman",
		year: 1997,
		cast: ["Eugene Levy", "Catherine O'Hara", "Christopher Guest", "Fred Willard", "Parker Posey"],
		genres: ["Satire"]
	},{ 
		title: "Warriors of Virtue",
		year: 1997,
		cast: [],
		genres: ["Fantasy"]
	},{ 
		title: "Washington Square",
		year: 1997,
		cast: ["Jennifer Jason Leigh", "Albert Finney", "Maggie Smith"],
		genres: ["Drama"]
	},{ 
		title: "Weapons of Mass Distraction",
		year: 1997,
		cast: ["Ben Kingsley", "Gabriel Byrne", "Mimi Rogers", "Jeffrey Tambor", "Chris Mulkey", "Illeana Douglas"],
		genres: ["Comedy"]
	},{ 
		title: "Welcome to Sarajevo",
		year: 1997,
		cast: ["Stephen Dillane", "Woody Harrelson", "Marisa Tomei"],
		genres: ["Drama"]
	},{ 
		title: "What the Deaf Man Heard",
		year: 1997,
		cast: ["Matthew Modine", "James Earl Jones"],
		genres: ["Drama"]
	},{ 
		title: "Wild America",
		year: 1997,
		cast: ["Jonathan Taylor Thomas", "Devon Sawa", "Scott Bairstow"],
		genres: ["Adventure"]
	},{ 
		title: "The Wings of the Dove",
		year: 1997,
		cast: ["Helena Bonham Carter", "Linus Roache", "Alison Elliott"],
		genres: ["Drama"]
	},{ 
		title: "The Winter Guest",
		year: 1997,
		cast: ["Emma Thompson"],
		genres: ["Drama"]
	},{ 
		title: "Wishmaster",
		year: 1997,
		cast: ["Tammy Lauren", "Chris Lemmon"],
		genres: ["Horror"]
	},{ 
		title: "The Woodlanders",
		year: 1997,
		cast: ["Rufus Sewell"],
		genres: ["Drama"]
	},{ 
		title: "The Wrong Guy",
		year: 1997,
		cast: ["Dave Foley", "Jennifer Tilly", "David Higgins", "Colm Feore"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Year of the Horse",
		year: 1997,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Young Thugs: Innocent Blood",
		year: 1997,
		cast: [],
		genres: []
	},{ 
		title: "Young and Dangerous 4",
		year: 1997,
		cast: ["Ekin Cheng", "Jordan Chan"],
		genres: []
	},{ 
		title: "Zeus and Roxanne",
		year: 1997,
		cast: ["Steve Guttenberg", "Kathleen Quinlan"],
		genres: ["Family"]
	},{ 
		title: "20 Dates",
		year: 1998,
		cast: ["Myles Berkowitz", "Elisabeth Wagner", "Tia Carrere"],
		genres: ["Satire"]
	},{ 
		title: "54",
		year: 1998,
		cast: ["Ryan Phillippe", "Salma Hayek", "Mike Myers", "Neve Campbell"],
		genres: ["Drama"]
	},{ 
		title: "Addams Family Reunion",
		year: 1998,
		cast: ["Tim Curry", "Daryl Hannah"],
		genres: ["Comedy"]
	},{ 
		title: "The Adventures of Sebastian Cole",
		year: 1998,
		cast: ["Adrian Grenier", "Margaret Colin", "Clark Gregg", "John Shea"],
		genres: ["Comedy"]
	},{ 
		title: "Almost Heroes",
		year: 1998,
		cast: ["Chris Farley", "Matthew Perry", "Bokeem Woodbine", "Eugene Levy"],
		genres: ["Comedy"]
	},{ 
		title: "Ambushed",
		year: 1998,
		cast: ["Courtney B. Vance", "Jeremy Lelliott", "Virginia Madsen"],
		genres: ["Thriller"]
	},{ 
		title: "American History X",
		year: 1998,
		cast: ["Edward Norton", "Edward Furlong", "Beverly D'Angelo", "Elliott Gould", "Stacy Keach", "Fairuza Balk", "Jennifer Lien", "Avery Brooks"],
		genres: ["Drama"]
	},{ 
		title: "An Alan Smithee Film: Burn Hollywood Burn",
		year: 1998,
		cast: ["Ryan O'Neal", "Coolio", "Eric Idle"],
		genres: ["Comedy"]
	},{ 
		title: "Another Day in Paradise",
		year: 1998,
		cast: ["James Woods", "Melanie Griffith", "Peter Sarsgaard"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Antz",
		year: 1998,
		cast: ["Voices of", "Woody Allen", "Gene Hackman", "Jennifer Lopez", "Danny Glover", "Dan Aykroyd", "Jane Curtin", "Sylvester Stallone", "Sharon Stone"],
		genres: ["Animated"]
	},{ 
		title: "Apt Pupil",
		year: 1998,
		cast: ["Ian McKellen", "Brad Renfro", "Joshua Jackson"],
		genres: ["Thriller"]
	},{ 
		title: "Armageddon",
		year: 1998,
		cast: ["Bruce Willis", "Ben Affleck", "Liv Tyler", "Billy Bob Thornton", "Will Patton", "Steve Buscemi", "Michael Clarke Duncan"],
		genres: ["Drama"]
	},{ 
		title: "The Avengers",
		year: 1998,
		cast: ["Ralph Fiennes", "Uma Thurman", "Sean Connery", "Jim Broadbent", "Fiona Shaw", "Eddie Izzard"],
		genres: ["Action"]
	},{ 
		title: "B. Monkey",
		year: 1998,
		cast: ["Jared Harris", "Asia Argento", "Rupert Everett"],
		genres: ["Drama"]
	},{ 
		title: "Babe: Pig in the City",
		year: 1998,
		cast: ["James Cromwell", "Magda Szubanski", "Mickey Rooney"],
		genres: ["Family"]
	},{ 
		title: "BASEketball",
		year: 1998,
		cast: ["Trey Parker", "Matt Stone", "Yasmine Bleeth", "Jenny McCarthy", "Robert Vaughn", "Ernest Borgnine", "Bob Costas", "Al Michaels"],
		genres: ["Comedy"]
	},{ 
		title: "Belly",
		year: 1998,
		cast: ["Nas", "Tionne \"T-Boz\" Watkins", "Method Man"],
		genres: ["Drama"]
	},{ 
		title: "Beloved",
		year: 1998,
		cast: ["Oprah Winfrey", "Danny Glover", "Thandie Newton"],
		genres: ["Drama"]
	},{ 
		title: "The Big Hit",
		year: 1998,
		cast: ["Mark Wahlberg", "Lou Diamond Phillips", "Bokeem Woodbine", "Antonio Sabàto, Jr."],
		genres: ["Action"]
	},{ 
		title: "The Big Lebowski",
		year: 1998,
		cast: ["Jeff Bridges", "John Goodman", "Julianne Moore", "Steve Buscemi", "John Turturro", "Tara Reid", "Ben Gazzara"],
		genres: ["Comedy"]
	},{ 
		title: "Billy's Hollywood Screen Kiss",
		year: 1998,
		cast: ["Sean Hayes", "Brad Rowe", "Paul Bartel"],
		genres: ["Comedy"]
	},{ 
		title: "Black Dog",
		year: 1998,
		cast: ["Patrick Swayze", "Charles S. Dutton", "Randy Travis", "Gabriel Casseus", "Meat Loaf"],
		genres: ["Action"]
	},{ 
		title: "Blade",
		year: 1998,
		cast: ["Wesley Snipes", "Stephen Dorff", "Kris Kristofferson"],
		genres: ["Horror"]
	},{ 
		title: "Blues Brothers 2000",
		year: 1998,
		cast: ["Dan Aykroyd", "John Goodman", "Joe Morton", "J. Evan Bonifant", "Nia Peeples"],
		genres: ["Comedy"]
	},{ 
		title: "Break Up",
		year: 1998,
		cast: ["Bridget Fonda", "Hart Bochner", "Kiefer Sutherland"],
		genres: ["Thriller"]
	},{ 
		title: "Bride of Chucky",
		year: 1998,
		cast: ["Jennifer Tilly", "Katherine Heigl", "Nick Stabile", "John Ritter"],
		genres: ["Horror"]
	},{ 
		title: "Broken Vessels",
		year: 1998,
		cast: ["Todd Field", "Jason London", "Roxana Zal"],
		genres: ["Drama"]
	},{ 
		title: "Brown's Requiem",
		year: 1998,
		cast: ["Michael Rooker", "Selma Blair", "Will Sasso"],
		genres: ["Crime"]
	},{ 
		title: "Buffalo '66",
		year: 1998,
		cast: ["Vincent Gallo", "Christina Ricci", "Ben Gazzara"],
		genres: ["Drama"]
	},{ 
		title: "A Bug's Life",
		year: 1998,
		cast: ["Voices of", "Dave Foley", "Kevin Spacey", "Julia Louis-Dreyfus"],
		genres: ["Comedy"]
	},{ 
		title: "Bulworth",
		year: 1998,
		cast: ["Warren Beatty", "Halle Berry", "Oliver Platt", "Don Cheadle", "Paul Sorvino", "Isaiah Washington"],
		genres: ["Comedy"]
	},{ 
		title: "Can't Hardly Wait",
		year: 1998,
		cast: ["Jennifer Love Hewitt", "Ethan Embry", "Charlie Korsmo", "Lauren Ambrose", "Peter Facinelli", "Seth Green"],
		genres: ["Comedy"]
	},{ 
		title: "Casper Meets Wendy",
		year: 1998,
		cast: ["Hilary Duff", "Cathy Moriarty-Gentile", "Shelley Duvall", "Teri Garr"],
		genres: ["Comedy"]
	},{ 
		title: "Caught Up",
		year: 1998,
		cast: ["Bokeem Woodbine", "Cynda Williams", "Snoop Dogg"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Celebrity",
		year: 1998,
		cast: ["Kenneth Branagh", "Judy Davis", "Bebe Neuwirth", "Charlize Theron", "Leonardo DiCaprio"],
		genres: ["Comedy"]
	},{ 
		title: "Chairman of the Board",
		year: 1998,
		cast: ["Carrot Top", "Courtney Thorne-Smith"],
		genres: ["Comedy"]
	},{ 
		title: "City of Angels",
		year: 1998,
		cast: ["Nicolas Cage", "Meg Ryan", "Andre Braugher", "Dennis Franz"],
		genres: ["Fantasy"]
	},{ 
		title: "A Civil Action",
		year: 1998,
		cast: ["John Travolta", "Robert Duvall", "William H. Macy", "Tony Shalhoub", "Kathleen Quinlan", "John Lithgow", "Dan Hedaya", "Sydney Pollack", "James Gandolfini"],
		genres: ["Drama"]
	},{ 
		title: "Clay Pigeons",
		year: 1998,
		cast: ["Joaquin Phoenix", "Janeane Garofalo", "Georgina Cates", "Vince Vaughn"],
		genres: ["Drama"]
	},{ 
		title: "Cousin Bette",
		year: 1998,
		cast: ["Jessica Lange", "Elisabeth Shue", "Hugh Laurie", "Bob Hoskins"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "Curse of the Puppet Master",
		year: 1998,
		cast: ["George Peck", "Emily Harrison", "Josh Green"],
		genres: ["Horror"]
	},{ 
		title: "The Curve",
		year: 1998,
		cast: ["Matthew Lillard", "Michael Vartan", "Randall Batinkoff", "Keri Russell"],
		genres: ["Thriller"]
	},{ 
		title: "Dance with Me",
		year: 1998,
		cast: ["Vanessa L. Williams", "Chayanne", "Kris Kristofferson", "Joan Plowright"],
		genres: ["Romance"]
	},{ 
		title: "Dancer, Texas Pop. 81",
		year: 1998,
		cast: ["Ethan Embry", "Patricia Wettig", "Ashley Johnson"],
		genres: ["Comedy"]
	},{ 
		title: "Dancing at Lughnasa",
		year: 1998,
		cast: ["Meryl Streep", "Catherine McCormack", "Kathy Burke"],
		genres: ["Comedy"]
	},{ 
		title: "Dangerous Beauty",
		year: 1998,
		cast: ["Catherine McCormack", "Oliver Platt", "Fred Ward"],
		genres: ["Drama"]
	},{ 
		title: "Dark City",
		year: 1998,
		cast: ["Jennifer Connelly", "William Hurt", "Rufus Sewell", "Kiefer Sutherland"],
		genres: ["Science Fiction"]
	},{ 
		title: "Dead Man on Campus",
		year: 1998,
		cast: ["Mark-Paul Gosselaar", "Tom Everett Scott"],
		genres: ["Comedy"]
	},{ 
		title: "Deep Impact",
		year: 1998,
		cast: ["Robert Duvall", "Téa Leoni", "Morgan Freeman", "Elijah Wood", "Vanessa Redgrave", "Maximilian Schell", "Leelee Sobieski"],
		genres: ["Disaster"]
	},{ 
		title: "Deep Rising",
		year: 1998,
		cast: ["Treat Williams", "Famke Janssen", "Wes Studi", "Kevin J. O'Connor", "Anthony Heald", "Jason Flemyng", "Djimon Hounsou", "Clifton Powell", "Derrick O'Connor"],
		genres: ["Horror"]
	},{ 
		title: "Dennis the Menace Strikes Again",
		year: 1998,
		cast: ["Justin Cooper", "Don Rickles", "Betty White", "George Kennedy", "Brian Doyle-Murray", "Scott 'Carrot Top' Thompson"],
		genres: ["Family"]
	},{ 
		title: "The Dentist 2",
		year: 1998,
		cast: ["Corbin Bernsen", "Jillian McWhirter"],
		genres: ["Horror"]
	},{ 
		title: "Desert Blue",
		year: 1998,
		cast: ["Brendan Sexton III", "Kate Hudson", "Casey Affleck", "Christina Ricci"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Desperate Measures",
		year: 1998,
		cast: ["Michael Keaton", "Andy García", "Marcia Gay Harden", "Brian Cox"],
		genres: ["Drama"]
	},{ 
		title: "Digging to China",
		year: 1998,
		cast: ["Evan Rachel Wood", "Kevin Bacon", "Mary Stuart Masterson"],
		genres: ["Drama"]
	},{ 
		title: "Dirty Work",
		year: 1998,
		cast: ["Norm Macdonald", "Jack Warden", "Don Rickles", "Chevy Chase", "Chris Farley"],
		genres: ["Comedy"]
	},{ 
		title: "Disturbing Behavior",
		year: 1998,
		cast: ["James Marsden", "Katie Holmes", "Nick Stahl", "William Sadler"],
		genres: ["Thriller"]
	},{ 
		title: "Dr. Dolittle",
		year: 1998,
		cast: ["Eddie Murphy", "Ossie Davis", "Richard Schiff"],
		genres: ["Comedy"]
	},{ 
		title: "Down in the Delta",
		year: 1998,
		cast: ["Alfre Woodard", "Loretta Devine", "Esther Rolle"],
		genres: ["Drama"]
	},{ 
		title: "Drive",
		year: 1998,
		cast: ["Mark Dacascos", "Tracey Walter", "Brittany Murphy"],
		genres: ["Action"]
	},{ 
		title: "Edge of Seventeen",
		year: 1998,
		cast: ["Chris Stafford", "Lea DeLaria", "Tina Holmes"],
		genres: ["Comedy"]
	},{ 
		title: "The Eighteenth Angel",
		year: 1998,
		cast: ["Rachael Leigh Cook", "Christopher McDonald", "Stanley Tucci"],
		genres: ["Thriller"]
	},{ 
		title: "Enemy of the State",
		year: 1998,
		cast: ["Will Smith", "Gene Hackman", "Jon Voight", "Barry Pepper", "Regina King", "Lisa Bonet"],
		genres: ["Action"]
	},{ 
		title: "Ever After",
		year: 1998,
		cast: ["Drew Barrymore", "Dougray Scott", "Anjelica Huston"],
		genres: ["Fantasy"]
	},{ 
		title: "The Faculty",
		year: 1998,
		cast: ["Elijah Wood", "Jordana Brewster", "Clea DuVall", "Laura Harris", "Josh Hartnett", "Shawn Hatosy", "Salma Hayek", "Usher Raymond", "Famke Janssen", "Piper Laurie"],
		genres: ["Horror"]
	},{ 
		title: "Fallen",
		year: 1998,
		cast: ["Denzel Washington", "John Goodman", "Embeth Davidtz", "James Gandolfini"],
		genres: ["Thriller"]
	},{ 
		title: "The Farm: Angola, USA",
		year: 1998,
		cast: ["Narrated by", "Bernard Addison"],
		genres: ["Documentary"]
	},{ 
		title: "Fear and Loathing in Las Vegas",
		year: 1998,
		cast: ["Johnny Depp", "Benicio del Toro"],
		genres: ["Comedy"]
	},{ 
		title: "Finding Graceland",
		year: 1998,
		cast: ["Harvey Keitel", "Johnathon Schaech", "Bridget Fonda", "Gretchen Mol"],
		genres: ["Drama"]
	},{ 
		title: "Firestorm",
		year: 1998,
		cast: ["Howie Long", "Scott Glenn", "William Forsythe", "Suzy Amis"],
		genres: ["Action"]
	},{ 
		title: "The Gingerbread Man",
		year: 1998,
		cast: ["Kenneth Branagh", "Robert Downey, Jr.", "Embeth Davidtz", "Robert Duvall", "Daryl Hannah", "Tom Berenger"],
		genres: ["Drama"]
	},{ 
		title: "God Said \"Ha!\"",
		year: 1998,
		cast: ["Julia Sweeney"],
		genres: ["Comedy"]
	},{ 
		title: "Gods and Monsters",
		year: 1998,
		cast: ["Ian McKellen", "Brendan Fraser", "Lynn Redgrave", "Lolita Davidovich"],
		genres: ["Biography"]
	},{ 
		title: "The Godson",
		year: 1998,
		cast: ["Rodney Dangerfield", "Kevin McDonald", "Dom DeLuise"],
		genres: ["Comedy"]
	},{ 
		title: "Godzilla",
		year: 1998,
		cast: ["Matthew Broderick", "Jean Reno", "Maria Pitillo", "Hank Azaria", "Vicki Lewis", "Kevin Dunn", "Harry Shearer"],
		genres: ["Science Fiction"]
	},{ 
		title: "Goodbye Lover",
		year: 1998,
		cast: ["Patricia Arquette", "Dermot Mulroney", "Mary-Louise Parker", "Ellen DeGeneres"],
		genres: ["Comedy"]
	},{ 
		title: "Great Expectations",
		year: 1998,
		cast: ["Ethan Hawke", "Gwyneth Paltrow", "Chris Cooper", "Hank Azaria"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "The Hairy Bird",
		year: 1998,
		cast: ["Kirsten Dunst", "Gaby Hoffmann", "Lynn Redgrave"],
		genres: ["Comedy"]
	},{ 
		title: "Half Baked",
		year: 1998,
		cast: ["Dave Chappelle", "Jim Breuer", "Guillermo Diaz", "Harland Williams", "Clarence Williams III"],
		genres: ["Comedy"]
	},{ 
		title: "Halloween H20: 20 Years Later",
		year: 1998,
		cast: ["Jamie Lee Curtis", "Adam Arkin", "Michelle Williams", "Josh Hartnett", "LL Cool J", "Joseph Gordon-Levitt", "Jodi Lyn O'Keefe"],
		genres: ["Horror"]
	},{ 
		title: "Happiness",
		year: 1998,
		cast: ["Philip Seymour Hoffman", "Dylan Baker", "Ben Gazzara", "Camryn Manheim", "Jane Adams"],
		genres: ["Drama"]
	},{ 
		title: "Hard Rain",
		year: 1998,
		cast: ["Morgan Freeman", "Christian Slater", "Randy Quaid", "Minnie Driver"],
		genres: ["Action"]
	},{ 
		title: "He Got Game",
		year: 1998,
		cast: ["Denzel Washington", "Ray Allen", "Milla Jovovich", "John Turturro"],
		genres: ["Sports", "Drama"]
	},{ 
		title: "Hell's Kitchen",
		year: 1998,
		cast: ["Angelina Jolie", "Mekhi Phifer", "Rosanna Arquette"],
		genres: ["Drama"]
	},{ 
		title: "The Hi-Lo Country",
		year: 1998,
		cast: ["Billy Crudup", "Woody Harrelson", "Patricia Arquette", "Penélope Cruz", "Sam Elliott"],
		genres: ["Western"]
	},{ 
		title: "High Art",
		year: 1998,
		cast: ["Radha Mitchell", "Ally Sheedy", "Patricia Clarkson"],
		genres: ["Drama"]
	},{ 
		title: "Holy Man",
		year: 1998,
		cast: ["Eddie Murphy", "Jeff Goldblum", "Kelly Preston", "Robert Loggia", "Morgan Fairchild"],
		genres: ["Comedy"]
	},{ 
		title: "Home Fries",
		year: 1998,
		cast: ["Drew Barrymore", "Luke Wilson", "Catherine O'Hara", "Jake Busey"],
		genres: ["Comedy"]
	},{ 
		title: "Homegrown",
		year: 1998,
		cast: ["John Lithgow", "Billy Bob Thornton", "Hank Azaria", "Kelly Lynch"],
		genres: ["Comedy"]
	},{ 
		title: "Hope Floats",
		year: 1998,
		cast: ["Sandra Bullock", "Harry Connick, Jr.", "Gena Rowlands"],
		genres: ["Drama"]
	},{ 
		title: "The Horse Whisperer",
		year: 1998,
		cast: ["Robert Redford", "Kristin Scott Thomas", "Sam Neill", "Chris Cooper", "Dianne Wiest", "Scarlett Johansson"],
		genres: ["Drama"]
	},{ 
		title: "How Stella Got Her Groove Back",
		year: 1998,
		cast: ["Angela Bassett", "Taye Diggs", "Whoopi Goldberg", "Regina King"],
		genres: ["Drama"]
	},{ 
		title: "How to Make the Cruelest Month",
		year: 1998,
		cast: ["Clea DuVall", "Gabriel Mann", "J. D. Souther"],
		genres: ["Comedy"]
	},{ 
		title: "Hurlyburly",
		year: 1998,
		cast: ["Sean Penn", "Kevin Spacey", "Chazz Palminteri", "Garry Shandling", "Meg Ryan"],
		genres: ["Drama"]
	},{ 
		title: "Hush",
		year: 1998,
		cast: ["Gwyneth Paltrow", "Jessica Lange", "Johnathon Schaech"],
		genres: ["Thriller"]
	},{ 
		title: "I Got the Hook Up",
		year: 1998,
		cast: ["Master P", "Anthony Johnson", "Tommy 'Tiny' Lister"],
		genres: ["Comedy"]
	},{ 
		title: "I Still Know What You Did Last Summer",
		year: 1998,
		cast: ["Jennifer Love Hewitt", "Brandy Norwood", "Freddie Prinze, Jr.", "Mekhi Phifer", "Matthew Settle"],
		genres: ["Horror"]
	},{ 
		title: "I'll Be Home For Christmas",
		year: 1998,
		cast: ["Jonathan Taylor Thomas", "Gary Cole", "Jessica Biel"],
		genres: ["Family"]
	},{ 
		title: "Illuminata",
		year: 1998,
		cast: ["John Turturro", "Katherine Borowitz", "Christopher Walken", "Susan Sarandon"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Impostors",
		year: 1998,
		cast: ["Oliver Platt", "Stanley Tucci", "Alfred Molina", "Billy Connolly", "Tony Shalhoub", "Hope Davis"],
		genres: ["Comedy"]
	},{ 
		title: "Jack Frost",
		year: 1998,
		cast: ["Michael Keaton", "Kelly Preston", "Joseph Cross", "Mark Addy", "Henry Rollins"],
		genres: ["Fantasy"]
	},{ 
		title: "Jane Austen's Mafia!",
		year: 1998,
		cast: ["Jay Mohr", "Christina Applegate", "Olympia Dukakis", "Lloyd Bridges"],
		genres: ["Satire"]
	},{ 
		title: "Judas Kiss",
		year: 1998,
		cast: ["Alan Rickman", "Emma Thompson", "Roscoe Lee Browne", "Carla Gugino"],
		genres: ["Crime"]
	},{ 
		title: "Killer Flick",
		year: 1998,
		cast: ["Tod Thawley", "Christian Leffler", "Emmett Grennan", "Creighton Howard", "Fred Dennis", "Kathleen Macdonald"],
		genres: ["Comedy"]
	},{ 
		title: "Kissing a Fool",
		year: 1998,
		cast: ["David Schwimmer", "Jason Lee", "Mili Avital"],
		genres: ["Comedy"]
	},{ 
		title: "Knock Off",
		year: 1998,
		cast: ["Jean-Claude Van Damme", "Rob Schneider", "Lela Rochon"],
		genres: ["Action"]
	},{ 
		title: "Krippendorf's Tribe",
		year: 1998,
		cast: ["Richard Dreyfuss", "Jenna Elfman", "Lily Tomlin", "Natasha Lyonne"],
		genres: ["Comedy"]
	},{ 
		title: "Kurt & Courtney",
		year: 1998,
		cast: ["Footage of", "Kurt Cobain", "Courtney Love"],
		genres: ["Documentary"]
	},{ 
		title: "The Last Days of Disco",
		year: 1998,
		cast: ["Chloë Sevigny", "Kate Beckinsale", "Chris Eigeman"],
		genres: ["Comedy"]
	},{ 
		title: "The Last Days",
		year: 1998,
		cast: ["Interviews with", "Holocaust", "survivors"],
		genres: ["Documentary"]
	},{ 
		title: "Lenny Bruce: Swear to Tell the Truth",
		year: 1998,
		cast: ["Archive footage of", "Lenny Bruce", "narrated by", "Robert De Niro"],
		genres: ["Documentary"]
	},{ 
		title: "Les Misérables",
		year: 1998,
		cast: ["Liam Neeson", "Geoffrey Rush", "Uma Thurman", "Claire Danes"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "Let's Talk About Sex",
		year: 1998,
		cast: ["Paget Brewster", "James Hyde", "Tina Nguyen"],
		genres: ["Drama"]
	},{ 
		title: "Lethal Weapon 4",
		year: 1998,
		cast: ["Mel Gibson", "Danny Glover", "Joe Pesci", "Rene Russo", "Chris Rock", "Jet Li"],
		genres: ["Action"]
	},{ 
		title: "The Life and Times of Hank Greenberg",
		year: 1998,
		cast: ["Walter Matthau", "Carl Levin"],
		genres: ["Documentary"]
	},{ 
		title: "The Lion King II: Simba's Pride",
		year: 1998,
		cast: ["Matthew Broderick", "Neve Campbell", "Jason Marsden", "Nathan Lane"],
		genres: ["Animated"]
	},{ 
		title: "Living Out Loud",
		year: 1998,
		cast: ["Holly Hunter", "Queen Latifah", "Danny DeVito"],
		genres: ["Drama"]
	},{ 
		title: "Lost In Space",
		year: 1998,
		cast: ["William Hurt", "Mimi Rogers", "Gary Oldman", "Heather Graham", "Matt LeBlanc", "Lacey Chabert"],
		genres: ["Science Fiction"]
	},{ 
		title: "Lulu on the Bridge",
		year: 1998,
		cast: ["Harvey Keitel", "Mira Sorvino", "Vanessa Redgrave"],
		genres: ["Drama"]
	},{ 
		title: "Madeline",
		year: 1998,
		cast: ["Frances McDormand", "Nigel Hawthorne", "Hatty Jones"],
		genres: ["Family"]
	},{ 
		title: "Major League: Back to the Minors",
		year: 1998,
		cast: ["Corbin Bernsen", "Dennis Haysbert", "Scott Bakula", "Bob Uecker"],
		genres: ["Comedy"]
	},{ 
		title: "The Man in the Iron Mask",
		year: 1998,
		cast: ["Leonardo DiCaprio", "John Malkovich", "Gabriel Byrne", "Gérard Depardieu", "Jeremy Irons"],
		genres: ["Drama"]
	},{ 
		title: "The Mask of Zorro",
		year: 1998,
		cast: ["Antonio Banderas", "Anthony Hopkins", "Catherine Zeta-Jones"],
		genres: ["Action"]
	},{ 
		title: "Meet Joe Black",
		year: 1998,
		cast: ["Brad Pitt", "Anthony Hopkins", "Claire Forlani", "Jake Weber", "Jeffrey Tambor", "Marcia Gay Harden"],
		genres: ["Fantasy"]
	},{ 
		title: "Meet the Deedles",
		year: 1998,
		cast: ["Steve Van Wormer", "Paul Walker", "A. J. Langer"],
		genres: ["Comedy"]
	},{ 
		title: "Melting Pot",
		year: 1998,
		cast: ["Paul Rodriguez", "CCH Pounder", "Cliff Robertson"],
		genres: ["Animated"]
	},{ 
		title: "Mercury Rising",
		year: 1998,
		cast: ["Bruce Willis", "Alec Baldwin", "Miko Hughes", "Chi McBride", "Kim Dickens"],
		genres: ["Drama"]
	},{ 
		title: "Mighty Joe Young",
		year: 1998,
		cast: ["Bill Paxton", "Charlize Theron", "David Paymer"],
		genres: ["Action"]
	},{ 
		title: "The Mighty",
		year: 1998,
		cast: ["Kieran Culkin", "Sharon Stone", "Elden Henson", "Harry Dean Stanton", "Gena Rowlands", "Gillian Anderson", "James Gandolfini"],
		genres: ["Drama"]
	},{ 
		title: "The Mighty Kong",
		year: 1998,
		cast: ["Dudley Moore", "Jodi Benson", "William Sage"],
		genres: ["Animated"]
	},{ 
		title: "Montana",
		year: 1998,
		cast: ["Kyra Sedgwick", "Stanley Tucci", "Robin Tunney", "Robbie Coltrane"],
		genres: ["Crime"]
	},{ 
		title: "Monument Ave.",
		year: 1998,
		cast: ["Denis Leary", "Colm Meaney", "Famke Janssen", "Martin Sheen"],
		genres: ["Crime"]
	},{ 
		title: "Mulan",
		year: 1998,
		cast: ["Voices of", "Ming-Na", "Eddie Murphy", "Lea Salonga", "Miguel Ferrer"],
		genres: ["Animated"]
	},{ 
		title: "Music from Another Room",
		year: 1998,
		cast: ["Jude Law", "Jennifer Tilly", "Gretchen Mol", "Martha Plimpton"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "My Giant",
		year: 1998,
		cast: ["Billy Crystal", "Gheorghe Mureșan", "Kathleen Quinlan"],
		genres: ["Comedy"]
	},{ 
		title: "The Naked Man",
		year: 1998,
		cast: ["Michael Rapaport", "Michael Jeter", "Rachael Leigh Cook", "Arija Bareikis"],
		genres: ["Comedy"]
	},{ 
		title: "The Negotiator",
		year: 1998,
		cast: ["Samuel L. Jackson", "Kevin Spacey", "John Spencer", "David Morse"],
		genres: ["Thriller"]
	},{ 
		title: "New Rose Hotel",
		year: 1998,
		cast: ["Christopher Walken", "Willem Dafoe", "Asia Argento", "Annabella Sciorra"],
		genres: ["Thriller"]
	},{ 
		title: "The Newton Boys",
		year: 1998,
		cast: ["Matthew McConaughey", "Vincent D'Onofrio", "Ethan Hawke", "Skeet Ulrich"],
		genres: ["Crime"]
	},{ 
		title: "Next Stop Wonderland",
		year: 1998,
		cast: ["Hope Davis", "Philip Seymour Hoffman", "Callie Thorne"],
		genres: ["Comedy"]
	},{ 
		title: "A Night at the Roxbury",
		year: 1998,
		cast: ["Will Ferrell", "Chris Kattan", "Dan Hedaya", "Loni Anderson"],
		genres: ["Comedy"]
	},{ 
		title: "No Looking Back",
		year: 1998,
		cast: ["Lauren Holly", "Jon Bon Jovi", "Edward Burns"],
		genres: ["Drama"]
	},{ 
		title: "The Object of My Affection",
		year: 1998,
		cast: ["Jennifer Aniston", "Paul Rudd", "Steve Zahn", "Allison Janney", "Alan Alda"],
		genres: ["Comedy"]
	},{ 
		title: "October 22",
		year: 1998,
		cast: ["Amanda Plummer", "Colm Meaney", "Paul Perri", "Michael Paré"],
		genres: ["Drama"]
	},{ 
		title: "The Odd Couple II",
		year: 1998,
		cast: ["Jack Lemmon", "Walter Matthau", "Christine Baranski", "Jean Smart", "Jonathan Silverman"],
		genres: ["Comedy"]
	},{ 
		title: "One Tough Cop",
		year: 1998,
		cast: ["Stephen Baldwin", "Chris Penn", "Gina Gershon"],
		genres: ["Action"]
	},{ 
		title: "One True Thing",
		year: 1998,
		cast: ["Meryl Streep", "Renée Zellweger", "William Hurt", "Tom Everett Scott"],
		genres: ["Drama"]
	},{ 
		title: "The Opposite of Sex",
		year: 1998,
		cast: ["Christina Ricci", "Martin Donovan", "Lisa Kudrow", "Lyle Lovett"],
		genres: ["Drama"]
	},{ 
		title: "Out of Sight",
		year: 1998,
		cast: ["George Clooney", "Jennifer Lopez", "Don Cheadle", "Ving Rhames", "Dennis Farina", "Albert Brooks", "Steve Zahn", "Isaiah Washington", "Catherine Keener"],
		genres: ["Crime"]
	},{ 
		title: "Outside Ozona",
		year: 1998,
		cast: ["Robert Forster", "Kevin Pollak", "Sherilyn Fenn", "Penelope Ann Miller"],
		genres: ["Comedy"]
	},{ 
		title: "Overnight Delivery",
		year: 1998,
		cast: ["Reese Witherspoon", "Sarah Silverman", "Paul Rudd"],
		genres: ["Comedy"]
	},{ 
		title: "Palmetto",
		year: 1998,
		cast: ["Woody Harrelson", "Elisabeth Shue", "Gina Gershon"],
		genres: ["Thriller"]
	},{ 
		title: "The Parent Trap",
		year: 1998,
		cast: ["Lindsay Lohan", "Dennis Quaid", "Natasha Richardson", "Elaine Hendrix"],
		genres: ["Family"]
	},{ 
		title: "Patch Adams",
		year: 1998,
		cast: ["Robin Williams", "Monica Potter", "Philip Seymour Hoffman"],
		genres: ["Biography"]
	},{ 
		title: "Pauli",
		year: 1998,
		cast: ["Jay Mohr", "Tony Shalhoub", "Gena Rowlands"],
		genres: ["Family"]
	},{ 
		title: "Pecker",
		year: 1998,
		cast: ["Edward Furlong", "Christina Ricci", "Bess Armstrong", "Mary Kay Place", "Lili Taylor", "Martha Plimpton"],
		genres: ["Comedy"]
	},{ 
		title: "The Pentagon Wars",
		year: 1998,
		cast: ["Kelsey Grammer", "Cary Elwes", "Richard Schiff", "Viola Davis"],
		genres: ["Biography"]
	},{ 
		title: "A Perfect Murder",
		year: 1998,
		cast: ["Michael Douglas", "Gwyneth Paltrow", "Viggo Mortensen", "David Suchet"],
		genres: ["Thriller"]
	},{ 
		title: "Permanent Midnight",
		year: 1998,
		cast: ["Ben Stiller", "Maria Bello", "Elizabeth Hurley"],
		genres: ["Biography"]
	},{ 
		title: "Phantasm IV: Oblivion",
		year: 1998,
		cast: ["A. Michael Baldwin", "Reggie Bannister", "Bill Thornbury"],
		genres: ["Horror"]
	},{ 
		title: "Phantoms",
		year: 1998,
		cast: ["Ben Affleck", "Peter O'Toole", "Liev Schreiber"],
		genres: ["Horror"]
	},{ 
		title: "Phoenix",
		year: 1998,
		cast: ["Ray Liotta", "Anjelica Huston", "Anthony LaPaglia", "Daniel Baldwin"],
		genres: ["Crime"]
	},{ 
		title: "Pi",
		year: 1998,
		cast: ["Mark Margolis", "Pamela Hart", "Sean Gullette"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Players Club",
		year: 1998,
		cast: ["Bernie Mac", "Ice Cube", "LisaRaye"],
		genres: ["Comedy"]
	},{ 
		title: "Playing by Heart",
		year: 1998,
		cast: ["Angelina Jolie", "Sean Connery", "Gena Rowlands", "Gillian Anderson", "Dennis Quaid", "Ryan Phillippe"],
		genres: ["Comedy"]
	},{ 
		title: "Pleasantville",
		year: 1998,
		cast: ["Tobey Maguire", "Reese Witherspoon", "Jeff Daniels", "Joan Allen", "William H. Macy", "J. T. Walsh", "Don Knotts"],
		genres: ["Fantasy"]
	},{ 
		title: "Polish Wedding",
		year: 1998,
		cast: ["Gabriel Byrne", "Claire Danes", "Mili Avital"],
		genres: ["Comedy"]
	},{ 
		title: "Poodle Springs",
		year: 1998,
		cast: ["James Caan", "David Keith", "Dina Meyer", "Joe Don Baker", "Brian Cox"],
		genres: ["Mystery"]
	},{ 
		title: "Practical Magic",
		year: 1998,
		cast: ["Nicole Kidman", "Sandra Bullock", "Stockard Channing", "Dianne Wiest", "Aidan Quinn"],
		genres: ["Comedy"]
	},{ 
		title: "A Price Above Rubies",
		year: 1998,
		cast: ["Renée Zellweger", "Christopher Eccleston", "Julianna Margulies"],
		genres: ["Drama"]
	},{ 
		title: "Primary Colors",
		year: 1998,
		cast: ["John Travolta", "Emma Thompson", "Kathy Bates", "Adrian Lester", "Billy Bob Thornton"],
		genres: ["Drama"]
	},{ 
		title: "The Prince of Egypt",
		year: 1998,
		cast: ["Voices of", "Michelle Pfeiffer", "Val Kilmer", "Ralph Fiennes", "Steve Martin", "Sandra Bullock"],
		genres: ["Animated"]
	},{ 
		title: "Psycho",
		year: 1998,
		cast: ["Vince Vaughn", "Anne Heche", "Viggo Mortensen", "William H. Macy", "Julianne Moore"],
		genres: ["Thriller"]
	},{ 
		title: "Quest for Camelot",
		year: 1998,
		cast: ["Voices of", "Gary Oldman", "Don Rickles", "Pierce Brosnan", "Eric Idle", "Jane Seymour", "Gabriel Byrne", "Cary Elwes", "Bronson Pinchot", "John Gielgud"],
		genres: ["Animated"]
	},{ 
		title: "The Rat Pack",
		year: 1998,
		cast: ["Ray Liotta", "Joe Mantegna", "Don Cheadle", "Angus Macfadyen", "Dan O'Herlihy", "William L. Petersen", "Željko Ivanek", "Deborah Kara Unger"],
		genres: ["Biography"]
	},{ 
		title: "Reach the Rock",
		year: 1998,
		cast: ["William Sadler", "Alessandro Nivola"],
		genres: ["Drama"]
	},{ 
		title: "Regret to Inform",
		year: 1998,
		cast: ["Barbara Sonneborn", "Xuan Ngoc Nguyen"],
		genres: ["Documentary"]
	},{ 
		title: "The Replacement Killers",
		year: 1998,
		cast: ["Chow Yun-fat", "Mira Sorvino", "Michael Rooker"],
		genres: ["Action"]
	},{ 
		title: "Restaurant",
		year: 1998,
		cast: ["Adrien Brody", "Elise Neal", "Lauryn Hill"],
		genres: ["Drama"]
	},{ 
		title: "Return to Paradise",
		year: 1998,
		cast: ["Vince Vaughn", "Joaquin Phoenix", "Vera Farmiga"],
		genres: ["Drama"]
	},{ 
		title: "Riddler's Moon",
		year: 1998,
		cast: ["Corbin Bernsen", "Kate Mulgrew", "Daniel Newman"],
		genres: ["Drama"]
	},{ 
		title: "Ride",
		year: 1998,
		cast: ["Malik Yoba", "Melissa De Sousa", "John Witherspoon"],
		genres: ["Comedy"]
	},{ 
		title: "Ringmaster",
		year: 1998,
		cast: ["Jerry Springer", "William McNamara", "Molly Hagan", "Jaime Pressly"],
		genres: ["Comedy"]
	},{ 
		title: "Ronin",
		year: 1998,
		cast: ["Robert De Niro", "Jean Reno", "Natascha McElhone", "Jonathan Pryce", "Stellan Skarsgård", "Sean Bean", "Katarina Witt"],
		genres: ["Action"]
	},{ 
		title: "Rounders",
		year: 1998,
		cast: ["Matt Damon", "Edward Norton", "Gretchen Mol", "John Turturro", "Martin Landau", "John Malkovich"],
		genres: ["Drama"]
	},{ 
		title: "Rudolph the Red-Nosed Reindeer: The Movie",
		year: 1998,
		cast: ["John Goodman", "Alan Arkin", "Eric Idle", "Whoopi Goldberg"],
		genres: ["Animated"]
	},{ 
		title: "The Rugrats Movie",
		year: 1998,
		cast: ["E. G. Daily", "Christine Cavanaugh", "Kath Soucie"],
		genres: ["Animated"]
	},{ 
		title: "Rush Hour",
		year: 1998,
		cast: ["Jackie Chan", "Chris Tucker", "Tom Wilkinson"],
		genres: ["Action"]
	},{ 
		title: "Rushmore",
		year: 1998,
		cast: ["Jason Schwartzman", "Bill Murray", "Olivia Williams", "Brian Cox"],
		genres: ["Comedy"]
	},{ 
		title: "Safe Men",
		year: 1998,
		cast: ["Sam Rockwell", "Steve Zahn", "Michael Lerner", "Paul Giamatti"],
		genres: ["Comedy"]
	},{ 
		title: "Saving Private Ryan",
		year: 1998,
		cast: ["Tom Hanks", "Edward Burns", "Matt Damon", "Tom Sizemore", "Dennis Farina", "Ted Danson", "Paul Giamatti", "Bryan Cranston", "Harve Presnell", "Vin Diesel"],
		genres: ["Drama", "War"]
	},{ 
		title: "Savior",
		year: 1998,
		cast: ["Dennis Quaid", "Nastassja Kinski", "Stellan Skarsgård"],
		genres: ["Drama"]
	},{ 
		title: "The Second Arrival",
		year: 1998,
		cast: ["Patrick Muldoon", "Jane Sibbett", "Michael Sarrazin"],
		genres: ["Science Fiction"]
	},{ 
		title: "Senseless",
		year: 1998,
		cast: ["Marlon Wayans", "David Spade", "Matthew Lillard", "Brad Dourif"],
		genres: ["Comedy"]
	},{ 
		title: "Shadrach",
		year: 1998,
		cast: ["Harvey Keitel", "Andie MacDowell", "John Franklin Sawyer"],
		genres: ["Drama"]
	},{ 
		title: "Shakespeare in Love",
		year: 1998,
		cast: ["Gwyneth Paltrow", "Joseph Fiennes", "Geoffrey Rush", "Colin Firth", "Ben Affleck", "Judi Dench"],
		genres: ["Drama"]
	},{ 
		title: "The Siege",
		year: 1998,
		cast: ["Denzel Washington", "Annette Bening", "Tony Shalhoub", "Bruce Willis"],
		genres: ["Drama"]
	},{ 
		title: "Simon Birch",
		year: 1998,
		cast: ["Ian Michael Smith", "Joseph Mazzello", "Ashley Judd", "Oliver Platt"],
		genres: ["Comedy"]
	},{ 
		title: "A Simple Plan",
		year: 1998,
		cast: ["Billy Bob Thornton", "Bridget Fonda", "Bill Paxton", "Gary Cole"],
		genres: ["Drama"]
	},{ 
		title: "Since You've Been Gone",
		year: 1998,
		cast: ["David Schwimmer", "Lara Flynn Boyle", "Teri Hatcher"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Six Days Seven Nights",
		year: 1998,
		cast: ["Harrison Ford", "Anne Heche", "Allison Janney", "David Schwimmer"],
		genres: ["Adventure"]
	},{ 
		title: "Six-String Samurai",
		year: 1998,
		cast: ["Jeffrey Falcon", "Clifford Hugo", "Lora Witty"],
		genres: ["Action"]
	},{ 
		title: "Slam",
		year: 1998,
		cast: ["Saul Williams", "Bönz Malone", "Sonja Sohn"],
		genres: ["Drama"]
	},{ 
		title: "Slappy and the Stinkers",
		year: 1998,
		cast: ["B. D. Wong", "Bronson Pinchot", "Jennifer Coolidge"],
		genres: ["Comedy"]
	},{ 
		title: "Slums of Beverly Hills",
		year: 1998,
		cast: ["Natasha Lyonne", "Alan Arkin", "Marisa Tomei"],
		genres: ["Comedy"]
	},{ 
		title: "Small Soldiers",
		year: 1998,
		cast: ["Gregory Smith", "Kirsten Dunst", "Frank Langella", "Tommy Lee Jones"],
		genres: ["Science Fiction", "Fantasy", "Action"]
	},{ 
		title: "Smoke Signals",
		year: 1998,
		cast: ["Adam Beach", "Irene Bedard", "Gary Farmer"],
		genres: ["Comedy"]
	},{ 
		title: "Snake Eyes",
		year: 1998,
		cast: ["Nicolas Cage", "Gary Sinise", "Carla Gugino", "John Heard", "Stan Shaw"],
		genres: ["Thriller"]
	},{ 
		title: "Soldier",
		year: 1998,
		cast: ["Kurt Russell", "Jason Scott Lee", "Connie Nielsen", "Gary Busey"],
		genres: ["Science Fiction"]
	},{ 
		title: "Somewhere in the City",
		year: 1998,
		cast: ["Sandra Bernhard", "Ornella Muti", "Robert John Burke", "Peter Stormare", "Bai Ling"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Sour Grapes",
		year: 1998,
		cast: ["Steven Weber", "Craig Bierko", "Jennifer Leigh Warren"],
		genres: ["Comedy"]
	},{ 
		title: "Species II",
		year: 1998,
		cast: ["Natasha Henstridge", "Michael Madsen", "Marg Helgenberger", "James Cromwell", "Mykelti Williamson", "George Dzundza"],
		genres: ["Science Fiction"]
	},{ 
		title: "Sphere",
		year: 1998,
		cast: ["Dustin Hoffman", "Sharon Stone", "Samuel L. Jackson", "Liev Schreiber"],
		genres: ["Science Fiction"]
	},{ 
		title: "Spice World",
		year: 1998,
		cast: ["Spice Girls", "Richard E. Grant", "Alan Cumming", "George Wendt", "Roger Moore"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "Star Trek: Insurrection",
		year: 1998,
		cast: ["Patrick Stewart", "F. Murray Abraham", "Donna Murphy"],
		genres: ["Science Fiction"]
	},{ 
		title: "Stepmom",
		year: 1998,
		cast: ["Julia Roberts", "Susan Sarandon", "Ed Harris"],
		genres: ["Drama"]
	},{ 
		title: "Strangeland",
		year: 1998,
		cast: ["Kevin Gage", "Robert Englund", "Amy Smart"],
		genres: ["Horror"]
	},{ 
		title: "Suicide Kings",
		year: 1998,
		cast: ["Christopher Walken", "Denis Leary", "Sean Patrick Flanery", "Johnny Galecki", "Jay Mohr", "Jeremy Sisto", "Henry Thomas", "Cliff DeYoung", "Laura San Giacomo"],
		genres: ["Crime"]
	},{ 
		title: "Target Zero II",
		year: 1998,
		cast: ["Walter Cherry", "Mark Lenard", "Wesley Shane Winter", "Walter Quiggins"],
		genres: ["Action"]
	},{ 
		title: "Tarzan and the Lost City",
		year: 1998,
		cast: ["Casper Van Dien", "Jane March", "Ian Roberts"],
		genres: ["Adventure"]
	},{ 
		title: "There's Something About Mary",
		year: 1998,
		cast: ["Ben Stiller", "Cameron Diaz", "Matt Dillon", "Keith David", "Markie Post"],
		genres: ["Comedy"]
	},{ 
		title: "Thick as Thieves",
		year: 1998,
		cast: ["Alec Baldwin", "Andre Braugher", "Rebecca De Mornay"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Thin Red Line",
		year: 1998,
		cast: ["Sean Penn", "Adrien Brody", "Jim Caviezel", "Ben Chaplin", "George Clooney", "John Cusack", "Woody Harrelson", "Elias Koteas", "Jared Leto", "Nick Nolte", "John C. Reilly", "John Travolta"],
		genres: ["Drama", "War"]
	},{ 
		title: "The Truman Show",
		year: 1998,
		cast: ["Jim Carrey", "Ed Harris", "Laura Linney", "Noah Emmerich", "Natascha McElhone"],
		genres: ["Fantasy"]
	},{ 
		title: "Twilight",
		year: 1998,
		cast: ["Paul Newman", "Gene Hackman", "Susan Sarandon", "James Garner", "Reese Witherspoon", "Stockard Channing", "Liev Schreiber"],
		genres: ["Noir"]
	},{ 
		title: "U.S. Marshals",
		year: 1998,
		cast: ["Tommy Lee Jones", "Wesley Snipes", "Robert Downey, Jr.", "Joe Pantoliano", "Irène Jacob"],
		genres: ["Action"]
	},{ 
		title: "Urban Legend",
		year: 1998,
		cast: ["Jared Leto", "Alicia Witt", "Rebecca Gayheart", "Joshua Jackson", "Loretta Devine", "Tara Reid", "Robert Englund"],
		genres: ["Horror"]
	},{ 
		title: "Vampires",
		year: 1998,
		cast: ["James Woods", "Daniel Baldwin", "Sheryl Lee"],
		genres: ["Horror"]
	},{ 
		title: "Very Bad Things",
		year: 1998,
		cast: ["Christian Slater", "Cameron Diaz", "Jon Favreau", "Daniel Stern", "Jeremy Piven", "Jeanne Tripplehorn"],
		genres: ["Comedy"]
	},{ 
		title: "The Waterboy",
		year: 1998,
		cast: ["Adam Sandler", "Henry Winkler", "Kathy Bates", "Fairuza Balk"],
		genres: ["Comedy"]
	},{ 
		title: "The Wedding Singer",
		year: 1998,
		cast: ["Adam Sandler", "Drew Barrymore", "Christine Taylor", "Steve Buscemi", "Alexis Arquette"],
		genres: ["Comedy"]
	},{ 
		title: "What Dreams May Come",
		year: 1998,
		cast: ["Robin Williams", "Cuba Gooding, Jr.", "Annabella Sciorra"],
		genres: ["Drama"]
	},{ 
		title: "Why Do Fools Fall in Love",
		year: 1998,
		cast: ["Halle Berry", "Vivica A. Fox", "Lela Rochon"],
		genres: ["Romance"]
	},{ 
		title: "Wide Awake",
		year: 1998,
		cast: ["Joseph Cross", "Timothy Reifsnyder", "Dana Delany", "Denis Leary"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Wild Things",
		year: 1998,
		cast: ["Kevin Bacon", "Matt Dillon", "Neve Campbell", "Denise Richards", "Bill Murray"],
		genres: ["Thriller"]
	},{ 
		title: "Without Limits",
		year: 1998,
		cast: ["Billy Crudup", "Donald Sutherland", "Monica Potter"],
		genres: ["Biography"]
	},{ 
		title: "Woo",
		year: 1998,
		cast: ["Jada Pinkett", "Tommy Davidson", "LL Cool J"],
		genres: ["Comedy"]
	},{ 
		title: "Wrongfully Accused",
		year: 1998,
		cast: ["Leslie Nielsen", "Richard Crenna", "Melinda McGraw", "Kelly Le Brock"],
		genres: ["Comedy"]
	},{ 
		title: "The X-Files",
		year: 1998,
		cast: ["Gillian Anderson", "David Duchovny", "Martin Landau"],
		genres: ["Science Fiction"]
	},{ 
		title: "Your Friends & Neighbors",
		year: 1998,
		cast: ["Amy Brenneman", "Aaron Eckhart", "Nastassja Kinski", "Jason Patric", "Catherine Keener", "Ben Stiller"],
		genres: ["Drama"]
	},{ 
		title: "You've Got Mail",
		year: 1998,
		cast: ["Tom Hanks", "Meg Ryan", "Parker Posey", "Jean Stapleton"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Zero Effect",
		year: 1998,
		cast: ["Bill Pullman", "Ryan O'Neal", "Ben Stiller"],
		genres: ["Drama"]
	},{ 
		title: "10 Things I Hate About You",
		year: 1999,
		cast: ["Julia Stiles", "Heath Ledger", "Larisa Oleynik", "Joseph Gordon-Levitt", "David Krumholtz", "Andrew Keegan", "Gabrielle Union"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The 13th Warrior",
		year: 1999,
		cast: ["Antonio Banderas", "Diane Venora", "Vladimir Kulich", "Dennis Storhøi", "Omar Sharif", "Clive Russell", "Richard Bremmer"],
		genres: ["Action"]
	},{ 
		title: "200 Cigarettes",
		year: 1999,
		cast: ["Ben Affleck", "Casey Affleck", "Dave Chappelle", "Guillermo Diaz", "Angela Featherstone", "Janeane Garofalo", "Gaby Hoffmann", "Kate Hudson", "Courtney Love", "Jay Mohr", "Martha Plimpton", "Christina Ricci", "Paul Rudd"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The 4th Floor",
		year: 1999,
		cast: ["Juliette Lewis", "William Hurt", "Shelley Duvall"],
		genres: ["Horror"]
	},{ 
		title: "8mm",
		year: 1999,
		cast: ["Nicolas Cage", "Joaquin Phoenix", "James Gandolfini", "Peter Stormare", "Catherine Keener", "Anthony Heald"],
		genres: ["Thriller"]
	},{ 
		title: "The Adventures of Elmo in Grouchland",
		year: 1999,
		cast: ["Kevin Clash", "Mandy Patinkin", "Vanessa L. Williams"],
		genres: ["Family"]
	},{ 
		title: "American Beauty",
		year: 1999,
		cast: ["Kevin Spacey", "Annette Bening", "Chris Cooper", "Wes Bentley", "Thora Birch", "Mena Suvari", "Allison Janney", "Peter Gallagher"],
		genres: ["Drama"]
	},{ 
		title: "American Movie",
		year: 1999,
		cast: ["Mark Borchardt", "Tom Schimmels"],
		genres: ["Documentary"]
	},{ 
		title: "American Pie",
		year: 1999,
		cast: ["Jason Biggs", "Seann William Scott", "Tara Reid", "Shannon Elizabeth", "Chris Klein", "Alyson Hannigan", "Thomas Ian Nicholas", "Mena Suvari", "Natasha Lyonne", "Eddie Kaye Thomas", "Eugene Levy"],
		genres: ["Comedy"]
	},{ 
		title: "Analyze This",
		year: 1999,
		cast: ["Robert De Niro", "Billy Crystal", "Lisa Kudrow"],
		genres: ["Comedy"]
	},{ 
		title: "Angel's Dance",
		year: 1999,
		cast: ["James Belushi", "Sheryl Lee", "Kyle Chandler"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Animal Farm",
		year: 1999,
		cast: ["(voices of)", "Kelsey Grammer", "Ian Holm", "Paul Scofield", "Patrick Stewart", "Julia Ormond", "Peter Ustinov"],
		genres: ["Family", "Animated"]
	},{ 
		title: "Anna and the King",
		year: 1999,
		cast: ["Jodie Foster", "Chow Yun-fat"],
		genres: ["Drama"]
	},{ 
		title: "Annie",
		year: 1999,
		cast: ["Alicia Morton", "Victor Garber", "Kathy Bates"],
		genres: ["Musical"]
	},{ 
		title: "Any Given Sunday",
		year: 1999,
		cast: ["Al Pacino", "Dennis Quaid", "Cameron Diaz", "Jamie Foxx", "James Woods", "LL Cool J", "John C. McGinley", "Ann-Margret"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Anywhere but Here",
		year: 1999,
		cast: ["Susan Sarandon", "Natalie Portman", "Shawn Hatosy", "Hart Bochner"],
		genres: ["Drama"]
	},{ 
		title: "Arlington Road",
		year: 1999,
		cast: ["Jeff Bridges", "Tim Robbins", "Joan Cusack", "Hope Davis"],
		genres: ["Thriller"]
	},{ 
		title: "The Astronaut's Wife",
		year: 1999,
		cast: ["Johnny Depp", "Charlize Theron", "Joe Morton"],
		genres: ["Science Fiction"]
	},{ 
		title: "At First Sight",
		year: 1999,
		cast: ["Val Kilmer", "Mira Sorvino", "Kelly McGillis", "Nathan Lane", "Steven Weber"],
		genres: ["Romance"]
	},{ 
		title: "Atomic Train",
		year: 1999,
		cast: ["Rob Lowe", "Kristin Davis", "Esai Morales", "John Finn"],
		genres: ["Action"]
	},{ 
		title: "Austin Powers: The Spy Who Shagged Me",
		year: 1999,
		cast: ["Mike Myers", "Heather Graham", "Robert Wagner", "Seth Green", "Michael York", "Verne Troyer", "Will Ferrell"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Baby Geniuses",
		year: 1999,
		cast: ["Kathleen Turner", "Christopher Lloyd", "Peter MacNicol", "Kim Cattrall", "Ruby Dee", "Dom DeLuise"],
		genres: ["Family"]
	},{ 
		title: "The Bachelor",
		year: 1999,
		cast: ["Chris O'Donnell", "Renée Zellweger", "Edward Asner"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Bats",
		year: 1999,
		cast: ["Lou Diamond Phillips", "Dina Meyer"],
		genres: ["Horror"]
	},{ 
		title: "Being John Malkovich",
		year: 1999,
		cast: ["John Cusack", "Cameron Diaz", "Catherine Keener", "John Malkovich"],
		genres: ["Comedy"]
	},{ 
		title: "Bellyfruit",
		year: 1999,
		cast: ["Michael Peña"],
		genres: ["Drama"]
	},{ 
		title: "Beowulf",
		year: 1999,
		cast: ["Christopher Lambert", "Rhona Mitra"],
		genres: ["Fantasy"]
	},{ 
		title: "Best Laid Plans",
		year: 1999,
		cast: ["Reese Witherspoon", "Alessandro Nivola", "Josh Brolin"],
		genres: ["Crime"]
	},{ 
		title: "The Best Man",
		year: 1999,
		cast: ["Taye Diggs", "Monica Calhoun", "Morris Chestnut", "Nia Long"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Beyond the Mat",
		year: 1999,
		cast: ["Mick Foley", "Terry Funk", "Jesse Ventura", "The Rock"],
		genres: ["Documentary"]
	},{ 
		title: "Bicentennial Man",
		year: 1999,
		cast: ["Robin Williams", "Sam Neill", "Embeth Davidtz", "Oliver Platt", "Wendy Crewson", "Hallie Kate Eisenberg"],
		genres: ["Science Fiction"]
	},{ 
		title: "Big Daddy",
		year: 1999,
		cast: ["Adam Sandler", "Cole and Dylan Sprouse", "Joey Lauren Adams", "Jon Stewart", "Rob Schneider"],
		genres: ["Comedy"]
	},{ 
		title: "The Big Kahuna",
		year: 1999,
		cast: ["Kevin Spacey", "Danny DeVito", "Peter Facinelli"],
		genres: ["Drama"]
	},{ 
		title: "Black and White",
		year: 1999,
		cast: ["Robert Downey Jr.", "Gaby Hoffmann", "Jared Leto"],
		genres: ["Crime"]
	},{ 
		title: "The Blair Witch Project",
		year: 1999,
		cast: ["Heather Donahue", "Joshua Leonard", "Michael C. Williams"],
		genres: ["Horror"]
	},{ 
		title: "Blast from the Past",
		year: 1999,
		cast: ["Brendan Fraser", "Alicia Silverstone", "Christopher Walken", "Sissy Spacek", "Dave Foley"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Blue Streak",
		year: 1999,
		cast: ["Martin Lawrence", "Luke Wilson", "Peter Greene", "Dave Chappelle"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "The Bone Collector",
		year: 1999,
		cast: ["Denzel Washington", "Angelina Jolie"],
		genres: ["Crime"]
	},{ 
		title: "The Boondock Saints",
		year: 1999,
		cast: ["Willem Dafoe", "Sean Patrick Flanery", "Norman Reedus"],
		genres: ["Action"]
	},{ 
		title: "Bowfinger",
		year: 1999,
		cast: ["Steve Martin", "Eddie Murphy", "Heather Graham"],
		genres: ["Comedy"]
	},{ 
		title: "Boys Don't Cry",
		year: 1999,
		cast: ["Hilary Swank", "Chloë Sevigny"],
		genres: ["Drama"]
	},{ 
		title: "Breakfast of Champions",
		year: 1999,
		cast: ["Bruce Willis", "Albert Finney", "Nick Nolte", "Barbara Hershey", "Lukas Haas", "Omar Epps", "Glenne Headly"],
		genres: ["Comedy"]
	},{ 
		title: "Bringing Out the Dead",
		year: 1999,
		cast: ["Nicolas Cage", "Patricia Arquette", "John Goodman"],
		genres: ["Thriller"]
	},{ 
		title: "Brokedown Palace",
		year: 1999,
		cast: ["Claire Danes", "Kate Beckinsale", "Bill Pullman", "Lou Diamond Phillips"],
		genres: ["Drama"]
	},{ 
		title: "But I'm a Cheerleader",
		year: 1999,
		cast: ["Natasha Lyonne", "Cathy Moriarty", "RuPaul", "Clea DuVall"],
		genres: ["Comedy"]
	},{ 
		title: "Chill Factor",
		year: 1999,
		cast: ["Cuba Gooding Jr.", "Skeet Ulrich"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Chutney Popcorn",
		year: 1999,
		cast: ["Nisha Ganatra", "Jill Hennessy", "Madhur Jaffrey"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Cider House Rules",
		year: 1999,
		cast: ["Tobey Maguire", "Michael Caine", "Charlize Theron", "Paul Rudd", "Delroy Lindo", "Jane Alexander", "Kathy Baker"],
		genres: ["Drama"]
	},{ 
		title: "Coming Soon",
		year: 1999,
		cast: ["Bonnie Root", "Gaby Hoffmann", "Mia Farrow"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Corruptor",
		year: 1999,
		cast: ["Chow Yun-fat", "Mark Wahlberg", "Ric Young"],
		genres: ["Action"]
	},{ 
		title: "Cradle Will Rock",
		year: 1999,
		cast: ["Hank Azaria", "Rubén Blades", "Joan Cusack", "John Cusack"],
		genres: ["Drama"]
	},{ 
		title: "Crazy in Alabama",
		year: 1999,
		cast: ["Melanie Griffith", "Lucas Black", "David Morse", "Meat Loaf Aday"],
		genres: ["Drama"]
	},{ 
		title: "The Crimson Code",
		year: 1999,
		cast: ["Patrick Muldoon", "Cathy Moriarty", "C. Thomas Howell", "Fred Ward"],
		genres: ["Thriller"]
	},{ 
		title: "Cruel Intentions",
		year: 1999,
		cast: ["Sarah Michelle Gellar", "Ryan Phillippe", "Reese Witherspoon", "Selma Blair", "Joshua Jackson", "Christine Baranski", "Swoosie Kurtz"],
		genres: ["Drama"]
	},{ 
		title: "Deep Blue Sea",
		year: 1999,
		cast: ["Saffron Burrows", "Thomas Jane", "LL Cool J", "Jacqueline McKenzie", "Michael Rapaport", "Stellan Skarsgård", "Aida Turturro", "Samuel L. Jackson"],
		genres: ["Horror"]
	},{ 
		title: "The Deep End of the Ocean",
		year: 1999,
		cast: ["Michelle Pfeiffer", "Treat Williams", "Whoopi Goldberg"],
		genres: ["Drama"]
	},{ 
		title: "Deterrence",
		year: 1999,
		cast: ["Kevin Pollak", "Timothy Hutton", "Sean Astin"],
		genres: ["Thriller"]
	},{ 
		title: "Detroit Rock City",
		year: 1999,
		cast: ["Giuseppe Andrews", "James DeBello", "Edward Furlong", "Sam Huntington", "Lin Shaye", "Melanie Lynskey"],
		genres: ["Comedy"]
	},{ 
		title: "Deuce Bigalow: Male Gigolo",
		year: 1999,
		cast: ["Rob Schneider"],
		genres: ["Comedy"]
	},{ 
		title: "Dick",
		year: 1999,
		cast: ["Kirsten Dunst", "Michelle Williams", "Dan Hedaya"],
		genres: ["Comedy"]
	},{ 
		title: "Dill Scallion",
		year: 1999,
		cast: ["Billy Burke", "Lauren Graham"],
		genres: ["Satire"]
	},{ 
		title: "A Dog of Flanders",
		year: 1999,
		cast: ["Jack Warden", "Jon Voight", "Cheryl Ladd"],
		genres: ["Family"]
	},{ 
		title: "Dogma",
		year: 1999,
		cast: ["Ben Affleck", "Matt Damon", "Linda Fiorentino", "Salma Hayek", "Jason Lee", "Alan Rickman", "Chris Rock", "Kevin Smith"],
		genres: ["Comedy"]
	},{ 
		title: "Double Jeopardy",
		year: 1999,
		cast: ["Tommy Lee Jones", "Ashley Judd", "Bruce Greenwood", "Annabeth Gish"],
		genres: ["Thriller"]
	},{ 
		title: "Drop Dead Gorgeous",
		year: 1999,
		cast: ["Kirstie Alley", "Ellen Barkin", "Kirsten Dunst", "Denise Richards"],
		genres: ["Satire"]
	},{ 
		title: "Dudley Do-Right",
		year: 1999,
		cast: ["Brendan Fraser", "Sarah Jessica Parker", "Alfred Molina"],
		genres: ["Comedy"]
	},{ 
		title: "EDtv",
		year: 1999,
		cast: ["Matthew McConaughey", "Jenna Elfman", "Woody Harrelson", "Elizabeth Hurley", "Ellen DeGeneres", "Sally Kirkland", "Rob Reiner", "Dennis Hopper", "Martin Landau"],
		genres: ["Comedy"]
	},{ 
		title: "Election",
		year: 1999,
		cast: ["Reese Witherspoon", "Matthew Broderick", "Chris Klein", "Molly Hagan"],
		genres: ["Comedy"]
	},{ 
		title: "End of Days",
		year: 1999,
		cast: ["Arnold Schwarzenegger", "Robin Tunney", "Gabriel Byrne", "Kevin Pollak", "Udo Kier", "C. C. H. Pounder", "Miriam Margolyes", "Rod Steiger"],
		genres: ["Horror"]
	},{ 
		title: "Entrapment",
		year: 1999,
		cast: ["Sean Connery", "Catherine Zeta-Jones", "Ving Rhames"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Entropy",
		year: 1999,
		cast: ["Stephen Dorff", "Judith Godrèche", "Kelly Macdonald"],
		genres: ["Biography"]
	},{ 
		title: "eXistenZ",
		year: 1999,
		cast: ["Jennifer Jason Leigh", "Jude Law", "Ian Holm"],
		genres: ["Thriller"]
	},{ 
		title: "Eye of the Beholder",
		year: 1999,
		cast: ["Ewan McGregor", "Ashley Judd"],
		genres: ["Thriller"]
	},{ 
		title: "Eyes Wide Shut",
		year: 1999,
		cast: ["Tom Cruise", "Nicole Kidman", "Sydney Pollack"],
		genres: ["Drama"]
	},{ 
		title: "Fantasia 2000",
		year: 1999,
		cast: ["James Levine", "Chicago Symphony Orchestra"],
		genres: ["Family", "Animated"]
	},{ 
		title: "Fight Club",
		year: 1999,
		cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
		genres: ["Thriller"]
	},{ 
		title: "Flawless",
		year: 1999,
		cast: ["Robert De Niro", "Philip Seymour Hoffman", "Chris Bauer"],
		genres: ["Drama"]
	},{ 
		title: "The Florentine",
		year: 1999,
		cast: ["Jeremy Davies", "Virginia Madsen", "Luke Perry"],
		genres: ["Drama"]
	},{ 
		title: "For Love of the Game",
		year: 1999,
		cast: ["Kevin Costner", "Kelly Preston", "John C. Reilly", "Jena Malone", "Brian Cox"],
		genres: ["Drama"]
	},{ 
		title: "Forces of Nature",
		year: 1999,
		cast: ["Ben Affleck", "Sandra Bullock", "Steve Zahn"],
		genres: ["Comedy"]
	},{ 
		title: "Friends & Lovers",
		year: 1999,
		cast: ["Stephen Baldwin", "Claudia Schiffer", "Robert Downey Jr."],
		genres: ["Romance"]
	},{ 
		title: "Galaxy Quest",
		year: 1999,
		cast: ["Tim Allen", "Alan Rickman", "Sigourney Weaver", "Tony Shalhoub", "Sam Rockwell", "Daryl Mitchell"],
		genres: ["Science Fiction", "Comedy"]
	},{ 
		title: "The General's Daughter",
		year: 1999,
		cast: ["John Travolta", "Madeleine Stowe", "James Woods", "Timothy Hutton", "James Cromwell", "Clarence Williams III"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Ghost Dog: The Way of the Samurai",
		year: 1999,
		cast: ["Forest Whitaker"],
		genres: ["Action"]
	},{ 
		title: "Girl, Interrupted",
		year: 1999,
		cast: ["Winona Ryder", "Angelina Jolie", "Clea DuVall", "Brittany Murphy", "Vanessa Redgrave", "Whoopi Goldberg"],
		genres: ["Drama"]
	},{ 
		title: "Gloria",
		year: 1999,
		cast: ["Sharon Stone", "Jeremy Northam", "Cathy Moriarty", "George C. Scott"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Go",
		year: 1999,
		cast: ["Sarah Polley", "Desmond Askew", "Scott Wolf", "Katie Holmes", "Jay Mohr", "Taye Diggs"],
		genres: ["Comedy"]
	},{ 
		title: "The Green Mile",
		year: 1999,
		cast: ["Tom Hanks", "David Morse", "Bonnie Hunt", "Michael Clarke Duncan"],
		genres: ["Drama"]
	},{ 
		title: "Guinevere",
		year: 1999,
		cast: ["Stephen Rea", "Sarah Polley", "Gina Gershon"],
		genres: ["Drama"]
	},{ 
		title: "Happy, Texas",
		year: 1999,
		cast: ["Steve Zahn", "Jeremy Northam", "Ally Walker", "Illeana Douglas", "William H. Macy"],
		genres: ["Comedy"]
	},{ 
		title: "The Haunting",
		year: 1999,
		cast: ["Liam Neeson", "Catherine Zeta-Jones", "Lili Taylor", "Owen Wilson"],
		genres: ["Horror"]
	},{ 
		title: "Heaven or Vegas",
		year: 1999,
		cast: ["Richard Grieco", "Yasmine Bleeth", "Andy Romano"],
		genres: ["Drama"]
	},{ 
		title: "Held Up",
		year: 1999,
		cast: ["Jamie Foxx", "Nia Long", "Barry Corbin"],
		genres: ["Comedy"]
	},{ 
		title: "The Hi-Line",
		year: 1999,
		cast: ["Rachael Leigh Cook", "Ryan Alosio"],
		genres: ["Drama"]
	},{ 
		title: "House on Haunted Hill",
		year: 1999,
		cast: ["Geoffrey Rush", "Famke Janssen", "Taye Diggs", "Peter Gallagher", "Chris Kattan", "Ali Larter", "Bridgette Wilson", "Max Perlich"],
		genres: ["Horror"]
	},{ 
		title: "The Hurricane",
		year: 1999,
		cast: ["Denzel Washington"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "An Ideal Husband",
		year: 1999,
		cast: ["Rupert Everett", "Cate Blanchett", "Minnie Driver", "Julianne Moore", "Jeremy Northam"],
		genres: ["Comedy"]
	},{ 
		title: "Idle Hands",
		year: 1999,
		cast: ["Devon Sawa", "Seth Green", "Jessica Alba", "Vivica A. Fox", "Elden Henson"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "In Dreams",
		year: 1999,
		cast: ["Annette Bening", "Katie Sagona", "Aidan Quinn", "Robert Downey Jr.", "Stephen Rea"],
		genres: ["Thriller"]
	},{ 
		title: "In Too Deep",
		year: 1999,
		cast: ["Omar Epps", "LL Cool J", "Stanley Tucci", "Pam Grier"],
		genres: ["Crime"]
	},{ 
		title: "The Insider",
		year: 1999,
		cast: ["Al Pacino", "Russell Crowe", "Christopher Plummer", "Philip Baker Hall", "Michael Gambon", "Wings Hauser", "Gina Gershon"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "Inspector Gadget",
		year: 1999,
		cast: ["Matthew Broderick", "Rupert Everett", "Joely Fisher", "Michelle Trachtenberg", "Andy Dick"],
		genres: ["Action", "Comedy", "Family"]
	},{ 
		title: "Instinct",
		year: 1999,
		cast: ["Anthony Hopkins", "Cuba Gooding Jr.", "Donald Sutherland", "Maura Tierney"],
		genres: ["Drama"]
	},{ 
		title: "The Iron Giant",
		year: 1999,
		cast: ["Jennifer Aniston", "Harry Connick Jr.", "Vin Diesel"],
		genres: ["Animated", "Science Fiction", "Drama", "Family"]
	},{ 
		title: "Jakob the Liar",
		year: 1999,
		cast: ["Robin Williams", "Alan Arkin", "Liev Schreiber"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Jawbreaker",
		year: 1999,
		cast: ["Rose McGowan", "Rebecca Gayheart", "Julie Benz"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "Jesus' Son",
		year: 1999,
		cast: ["Billy Crudup", "Samantha Morton", "Denis Leary", "Holly Hunter"],
		genres: ["Drama"]
	},{ 
		title: "Joe the King",
		year: 1999,
		cast: ["Noah Fleiss", "Val Kilmer", "Karen Young", "Ethan Hawke"],
		genres: ["Drama"]
	},{ 
		title: "Just a Little Harmless Sex",
		year: 1999,
		cast: ["Alison Eastwood", "Rachel Hunter", "Lauren Hutton"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Just the Ticket",
		year: 1999,
		cast: ["Andy García", "Andie MacDowell"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "K-911",
		year: 1999,
		cast: ["James Belushi", "Christine Tucci", "James Handy"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "The King and I",
		year: 1999,
		cast: ["Miranda Richardson", "Martin Vidnovic", "Ian Richardson"],
		genres: ["Animated"]
	},{ 
		title: "Kiss the Sky",
		year: 1999,
		cast: ["William Petersen", "Gary Cole", "Sheryl Lee", "Terence Stamp"],
		genres: ["Drama"]
	},{ 
		title: "Kiss Toledo Goodbye",
		year: 1999,
		cast: ["Michael Rapaport", "Christopher Walken", "Christine Taylor"],
		genres: ["Comedy"]
	},{ 
		title: "Lake Placid",
		year: 1999,
		cast: ["Bill Pullman", "Bridget Fonda", "Oliver Platt", "Brendan Gleeson", "Betty White"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Liberty Heights",
		year: 1999,
		cast: ["Adrien Brody", "Ben Foster", "Orlando Jones"],
		genres: ["Drama"]
	},{ 
		title: "Life",
		year: 1999,
		cast: ["Eddie Murphy", "Martin Lawrence", "Bernie Mac"],
		genres: ["Comedy"]
	},{ 
		title: "Light It Up",
		year: 1999,
		cast: ["Usher Raymond", "Forest Whitaker", "Judd Nelson"],
		genres: ["Drama"]
	},{ 
		title: "The Limey",
		year: 1999,
		cast: ["Terence Stamp", "Lesley Ann Warren", "Luis Guzmán", "Peter Fonda"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Lost & Found",
		year: 1999,
		cast: ["David Spade", "Sophie Marceau", "Martin Sheen"],
		genres: ["Comedy"]
	},{ 
		title: "Love Stinks",
		year: 1999,
		cast: ["French Stewart", "Bridgette Wilson", "Bill Bellamy"],
		genres: ["Comedy"]
	},{ 
		title: "Lovers Lane",
		year: 1999,
		cast: ["Erin J. Dean", "Riley Smith", "Sarah Lancaster"],
		genres: ["Horror"]
	},{ 
		title: "Lycanthrope",
		year: 1999,
		cast: ["Robert Carradine", "Michael Winslow", "Rebecca Holden"],
		genres: ["Horror"]
	},{ 
		title: "Magnolia",
		year: 1999,
		cast: ["Tom Cruise", "Julianne Moore", "Philip Seymour Hoffman", "Philip Baker Hall", "John C. Reilly", "William H. Macy", "Jason Robards", "Jeremy Blackman", "Melora Walters", "Melinda Dillon", "Henry Gibson"],
		genres: ["Drama"]
	},{ 
		title: "Man of the Century",
		year: 1999,
		cast: ["Gibson Frazier", "Cara Buono", "Susan Egan"],
		genres: ["Comedy"]
	},{ 
		title: "Man on the Moon",
		year: 1999,
		cast: ["Jim Carrey", "Danny DeVito", "Courtney Love", "Paul Giamatti"],
		genres: ["Biography"]
	},{ 
		title: "A Map of the World",
		year: 1999,
		cast: ["Sigourney Weaver", "Julianne Moore", "David Strathairn"],
		genres: ["Drama"]
	},{ 
		title: "The Mating Habits of the Earthbound Human",
		year: 1999,
		cast: ["Carmen Electra", "Mackenzie Astin", "Lucy Liu"],
		genres: ["Satire"]
	},{ 
		title: "The Matrix",
		year: 1999,
		cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"],
		genres: ["Science Fiction"]
	},{ 
		title: "Message in a Bottle",
		year: 1999,
		cast: ["Kevin Costner", "Robin Wright Penn", "Paul Newman"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "The Messenger: The Story of Joan of Arc",
		year: 1999,
		cast: ["Milla Jovovich", "John Malkovich", "Faye Dunaway", "Dustin Hoffman"],
		genres: ["Biography"]
	},{ 
		title: "Mickey Blue Eyes",
		year: 1999,
		cast: ["Hugh Grant", "James Caan", "Jeanne Tripplehorn"],
		genres: ["Comedy"]
	},{ 
		title: "A Midsummer Night's Dream",
		year: 1999,
		cast: ["Kevin Kline", "Michelle Pfeiffer", "Rupert Everett", "Stanley Tucci", "Calista Flockhart", "Anna Friel", "Christian Bale"],
		genres: []
	},{ 
		title: "Miss Julie",
		year: 1999,
		cast: ["Saffron Burrows", "Peter Mullan", "Maria Doyle Kennedy"],
		genres: ["Drama"]
	},{ 
		title: "The Mod Squad",
		year: 1999,
		cast: ["Claire Danes", "Omar Epps", "Giovanni Ribisi"],
		genres: ["Action"]
	},{ 
		title: "Mr. Death",
		year: 1999,
		cast: ["Fred A. Leuchter", "David Irving", "Ernst Zündel"],
		genres: ["Documentary"]
	},{ 
		title: "Mumford",
		year: 1999,
		cast: ["Loren Dean", "Jason Lee", "Hope Davis", "Alfre Woodard", "Mary McDonnell", "Ted Danson", "Martin Short", "Zooey Deschanel", "Pruitt Taylor Vince"],
		genres: ["Comedy"]
	},{ 
		title: "The Mummy",
		year: 1999,
		cast: ["Brendan Fraser", "Rachel Weisz", "John Hannah", "Oded Fehr", "Arnold Vosloo"],
		genres: ["Action"]
	},{ 
		title: "Muppets from Space",
		year: 1999,
		cast: ["Dave Goelz", "Steve Whitmire", "Bill Barretta", "Frank Oz"],
		genres: ["Comedy"]
	},{ 
		title: "The Muse",
		year: 1999,
		cast: ["Albert Brooks", "Sharon Stone", "Andie MacDowell", "Jeff Bridges"],
		genres: ["Comedy"]
	},{ 
		title: "Music of the Heart",
		year: 1999,
		cast: ["Meryl Streep", "Angela Bassett", "Aidan Quinn", "Gloria Estefan"],
		genres: ["Drama"]
	},{ 
		title: "My Favorite Martian",
		year: 1999,
		cast: ["Christopher Lloyd", "Jeff Daniels", "Elizabeth Hurley", "Daryl Hannah", "Wallace Shawn", "Ray Walston"],
		genres: ["Comedy"]
	},{ 
		title: "My Voyage to Italy",
		year: 1999,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Mystery, Alaska",
		year: 1999,
		cast: ["Russell Crowe", "Burt Reynolds", "Colm Meaney"],
		genres: ["Comedy", "Sports"]
	},{ 
		title: "Mystery Men",
		year: 1999,
		cast: ["Ben Stiller", "Hank Azaria", "William H. Macy", "Janeane Garofalo", "Wes Studi", "Paul Reubens", "Kel Mitchell", "Greg Kinnear", "Geoffrey Rush", "Lena Olin", "Claire Forlani", "Tom Waits"],
		genres: ["Superhero", "Comedy"]
	},{ 
		title: "Never Been Kissed",
		year: 1999,
		cast: ["Drew Barrymore", "David Arquette", "Molly Shannon", "James Franco"],
		genres: ["Comedy"]
	},{ 
		title: "The Ninth Gate",
		year: 1999,
		cast: ["Johnny Depp", "Lena Olin", "Frank Langella"],
		genres: ["Horror"]
	},{ 
		title: "Ninth Street",
		year: 1999,
		cast: ["Don Washington"],
		genres: ["Drama"]
	},{ 
		title: "Notting Hill",
		year: 1999,
		cast: ["Julia Roberts", "Hugh Grant", "Hugh Bonneville", "Emma Chambers", "James Dreyfus", "Rhys Ifans", "Tim McInnerny", "Gina McKee"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "October Sky",
		year: 1999,
		cast: ["Jake Gyllenhaal", "Chris Cooper", "Laura Dern"],
		genres: ["Drama"]
	},{ 
		title: "Office Space",
		year: 1999,
		cast: ["Ron Livingston", "Jennifer Aniston", "Stephen Root", "Gary Cole"],
		genres: ["Comedy"]
	},{ 
		title: "The Omega Code",
		year: 1999,
		cast: ["Casper Van Dien", "Michael York"],
		genres: ["Action"]
	},{ 
		title: "One Man's Hero",
		year: 1999,
		cast: ["Tom Berenger", "Joaquim de Almeida", "Daniela Romo"],
		genres: ["War"]
	},{ 
		title: "The Other Sister",
		year: 1999,
		cast: ["Juliette Lewis", "Diane Keaton", "Tom Skerritt", "Giovanni Ribisi"],
		genres: ["Drama"]
	},{ 
		title: "Our Friend, Martin",
		year: 1999,
		cast: [],
		genres: ["Animated"]
	},{ 
		title: "P.U.N.K.S.",
		year: 1999,
		cast: ["Tim Redwine", "Jessica Alba", "Brandon Baker"],
		genres: ["Teen", "Comedy"]
	},{ 
		title: "The Passion of Ayn Rand",
		year: 1999,
		cast: ["Helen Mirren", "Eric Stoltz", "Peter Fonda"],
		genres: ["Biography"]
	},{ 
		title: "Passport to Paris",
		year: 1999,
		cast: ["Mary-Kate Olsen", "Ashley Olsen"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Payback",
		year: 1999,
		cast: ["Mel Gibson", "Gregg Henry", "Maria Bello", "Lucy Liu"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Play It to the Bone",
		year: 1999,
		cast: ["Antonio Banderas", "Woody Harrelson", "Lolita Davidovich", "Lucy Liu"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Pushing Tin",
		year: 1999,
		cast: ["John Cusack", "Billy Bob Thornton", "Cate Blanchett", "Angelina Jolie"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Rage: Carrie 2",
		year: 1999,
		cast: ["Emily Bergl", "Mena Suvari", "Jason London", "Amy Irving"],
		genres: ["Horror"]
	},{ 
		title: "Random Hearts",
		year: 1999,
		cast: ["Harrison Ford", "Kristin Scott Thomas", "Charles S. Dutton"],
		genres: ["Drama"]
	},{ 
		title: "Ravenous",
		year: 1999,
		cast: ["Guy Pearce", "Robert Carlyle", "Jeremy Davies", "Jeffrey Jones", "John Spencer", "Stephen Spinella", "Neal McDonough", "David Arquette"],
		genres: ["Horror"]
	},{ 
		title: "Retro Puppet Master",
		year: 1999,
		cast: ["Greg Sestero", "Brigitta Dau", "Jack Donner"],
		genres: ["Horror"]
	},{ 
		title: "Revelation aka Apocalypse",
		year: 1999,
		cast: [],
		genres: ["Thriller"]
	},{ 
		title: "Rites of Passage",
		year: 1999,
		cast: ["Dean Stockwell", "James Remar", "Jason Behr"],
		genres: ["Drama"]
	},{ 
		title: "Runaway Bride",
		year: 1999,
		cast: ["Richard Gere", "Julia Roberts", "Joan Cusack"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Runner",
		year: 1999,
		cast: ["Ron Eldard", "Courteney Cox", "John Goodman"],
		genres: ["Thriller"]
	},{ 
		title: "She's All That",
		year: 1999,
		cast: ["Freddie Prinze Jr.", "Rachael Leigh Cook", "Matthew Lillard", "Paul Walker", "Jodi Lyn O'Keefe", "Kieran Culkin", "Anna Paquin"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Simon Sez",
		year: 1999,
		cast: ["Dennis Rodman", "Dane Cook"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Simply Irresistible",
		year: 1999,
		cast: ["Sarah Michelle Gellar", "Sean Patrick Flanery", "Patricia Clarkson"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Sixth Sense",
		year: 1999,
		cast: ["Bruce Willis", "Haley Joel Osment", "Toni Collette", "Donnie Wahlberg", "Olivia Williams"],
		genres: ["Suspense"]
	},{ 
		title: "Sleepy Hollow",
		year: 1999,
		cast: ["Johnny Depp", "Christina Ricci", "Miranda Richardson", "Casper Van Dien"],
		genres: ["Horror"]
	},{ 
		title: "A Slipping-Down Life",
		year: 1999,
		cast: ["Lili Taylor", "Guy Pearce"],
		genres: ["Romance"]
	},{ 
		title: "Snow Falling on Cedars",
		year: 1999,
		cast: ["Ethan Hawke", "Youki Kudoh", "Reeve Carney"],
		genres: ["Drama"]
	},{ 
		title: "South Park: Bigger, Longer & Uncut",
		year: 1999,
		cast: ["Trey Parker", "Matt Stone", "Mary Kay Bergman", "Isaac Hayes"],
		genres: ["Animated", "Musical", "Comedy"]
	},{ 
		title: "Speedway Junky",
		year: 1999,
		cast: ["Jesse Bradford", "Jordan Brower", "Daryl Hannah"],
		genres: ["Action"]
	},{ 
		title: "Star Wars: Episode I – The Phantom Menace",
		year: 1999,
		cast: ["Liam Neeson", "Ewan McGregor", "Natalie Portman", "Jake Lloyd"],
		genres: ["Science Fiction"]
	},{ 
		title: "Stigmata",
		year: 1999,
		cast: ["Patricia Arquette", "Gabriel Byrne", "Jonathan Pryce"],
		genres: ["Horror"]
	},{ 
		title: "Stir of Echoes",
		year: 1999,
		cast: ["Kevin Bacon", "Kathryn Erbe", "Illeana Douglas"],
		genres: ["Horror"]
	},{ 
		title: "Storm",
		year: 1999,
		cast: ["Christian McIntire", "Luke Perry", "Robert Knott", "Alexandra Powers"],
		genres: ["Thriller"]
	},{ 
		title: "The Story of Us",
		year: 1999,
		cast: ["Bruce Willis", "Michelle Pfeiffer"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "The Straight Story",
		year: 1999,
		cast: ["Richard Farnsworth", "Sissy Spacek", "Harry Dean Stanton"],
		genres: ["Drama"]
	},{ 
		title: "Stuart Little",
		year: 1999,
		cast: ["Geena Davis", "Hugh Laurie", "Jonathan Lipnicki"],
		genres: ["Family"]
	},{ 
		title: "Summer of Sam",
		year: 1999,
		cast: ["John Leguizamo", "Adrien Brody", "Mira Sorvino", "Jennifer Esposito"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Superstar",
		year: 1999,
		cast: ["Molly Shannon", "Will Ferrell", "Harland Williams"],
		genres: ["Comedy"]
	},{ 
		title: "Sweet and Lowdown",
		year: 1999,
		cast: ["Sean Penn", "Samantha Morton", "Anthony LaPaglia", "Uma Thurman"],
		genres: ["Comedy"]
	},{ 
		title: "The Talented Mr. Ripley",
		year: 1999,
		cast: ["Matt Damon", "Gwyneth Paltrow", "Jude Law", "Cate Blanchett", "Philip Seymour Hoffman", "Philip Baker Hall", "James Rebhorn"],
		genres: ["Thriller"]
	},{ 
		title: "Tarzan",
		year: 1999,
		cast: ["Tony Goldwyn", "Minnie Driver", "Glenn Close", "Rosie O'Donnell", "Brian Blessed", "Nigel Hawthorne", "Lance Henriksen", "Wayne Knight"],
		genres: ["Animated"]
	},{ 
		title: "Teaching Mrs. Tingle",
		year: 1999,
		cast: ["Helen Mirren", "Katie Holmes", "Barry Watson", "Marisa Coughlan"],
		genres: ["Drama"]
	},{ 
		title: "That Championship Season",
		year: 1999,
		cast: ["Gary Sinise", "Vincent D'Onofrio", "Tony Shalhoub", "Terry Kinney", "Paul Sorvino"],
		genres: ["Drama"]
	},{ 
		title: "Thicker than Water",
		year: 1999,
		cast: ["Mack 10", "Fat Joe", "Ice Cube"],
		genres: ["Drama"]
	},{ 
		title: "The Thirteenth Floor",
		year: 1999,
		cast: ["Craig Bierko", "Gretchen Mol", "Vincent D'Onofrio"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Thirteenth Year",
		year: 1999,
		cast: ["Chez Starbuck", "Courtnee Draper"],
		genres: ["Family"]
	},{ 
		title: "The Thomas Crown Affair",
		year: 1999,
		cast: ["Pierce Brosnan", "Rene Russo", "Denis Leary"],
		genres: ["Crime"]
	},{ 
		title: "Three Kings",
		year: 1999,
		cast: ["George Clooney", "Mark Wahlberg", "Ice Cube", "Spike Jonze"],
		genres: ["War", "Comedy"]
	},{ 
		title: "Three to Tango",
		year: 1999,
		cast: ["Matthew Perry", "Neve Campbell", "Dylan McDermott"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Titus",
		year: 1999,
		cast: ["Anthony Hopkins", "Jessica Lange", "Alan Cumming"],
		genres: []
	},{ 
		title: "Toy Story 2",
		year: 1999,
		cast: ["voices of", "Tom Hanks", "Tim Allen", "Annie Potts", "Don Rickles"],
		genres: ["Animated", "Comedy", "Family"]
	},{ 
		title: "Trippin'",
		year: 1999,
		cast: ["Deon Richmond", "Countess Vaughn", "Maia Campbell"],
		genres: ["Comedy"]
	},{ 
		title: "True Crime",
		year: 1999,
		cast: ["Clint Eastwood", "Isaiah Washington", "Denis Leary"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Tumbleweeds",
		year: 1999,
		cast: ["Janet McTeer", "Kimberly J. Brown", "Gavin O'Connor"],
		genres: ["Drama"]
	},{ 
		title: "Twin Falls Idaho",
		year: 1999,
		cast: ["Mark Polish", "Michael Polish", "Michele Hicks"],
		genres: ["Drama"]
	},{ 
		title: "Universal Soldier: The Return",
		year: 1999,
		cast: ["Jean-Claude Van Damme", "Michael Jai White"],
		genres: ["Action"]
	},{ 
		title: "Varsity Blues",
		year: 1999,
		cast: ["James Van Der Beek", "Jon Voight", "Paul Walker", "Amy Smart", "Scott Caan", "Ron Lester", "Ali Larter", "Eliel Swinton"],
		genres: ["Comedy", "Drama", "Sports"]
	},{ 
		title: "The Virgin Suicides",
		year: 1999,
		cast: ["James Woods", "Kathleen Turner", "Kirsten Dunst", "Josh Hartnett", "A. J. Cook"],
		genres: ["Drama"]
	},{ 
		title: "Virus",
		year: 1999,
		cast: ["Jamie Lee Curtis", "William Baldwin", "Donald Sutherland"],
		genres: ["Science Fiction", "Horror"]
	},{ 
		title: "The Waiting Game",
		year: 1999,
		cast: ["Will Arnett", "Dwight Ewell"],
		genres: ["Comedy"]
	},{ 
		title: "Wakko's Wish",
		year: 1999,
		cast: [],
		genres: ["Animated"]
	},{ 
		title: "A Walk on the Moon",
		year: 1999,
		cast: ["Diane Lane", "Viggo Mortensen", "Liev Schreiber", "Anna Paquin"],
		genres: ["Drama"]
	},{ 
		title: "Walking Across Egypt",
		year: 1999,
		cast: ["Ellen Burstyn", "Jonathan Taylor Thomas", "Mark Hamill"],
		genres: ["Comedy"]
	},{ 
		title: "When the Day Breaks",
		year: 1999,
		cast: [],
		genres: ["Animated"]
	},{ 
		title: "Whiteboyz",
		year: 1999,
		cast: [],
		genres: ["Independent"]
	},{ 
		title: "Wild Wild West",
		year: 1999,
		cast: ["Will Smith", "Kevin Kline", "Kenneth Branagh", "Salma Hayek"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Wing Commander",
		year: 1999,
		cast: ["Freddie Prinze Jr.", "Saffron Burrows", "Matthew Lillard", "Tchéky Karyo", "Jürgen Prochnow", "David Suchet"],
		genres: ["Science Fiction"]
	},{ 
		title: "Winnie the Pooh: Seasons of Giving",
		year: 1999,
		cast: ["Jim Cummings", "John Fiedler", "Brady Bluhm"],
		genres: ["Animated"]
	},{ 
		title: "Wisconsin Death Trip",
		year: 1999,
		cast: [],
		genres: []
	},{ 
		title: "The Woman Chaser",
		year: 1999,
		cast: ["Patrick Warburton"],
		genres: ["Comedy"]
	},{ 
		title: "A Woman Scorned",
		year: 1999,
		cast: ["Marcia Johnson"],
		genres: ["Thriller"]
	},{ 
		title: "The Wood",
		year: 1999,
		cast: ["Omar Epps", "Richard T. Jones", "Taye Diggs"],
		genres: ["Comedy"]
	},{ 
		title: "102 Dalmatians",
		year: 2000,
		cast: ["Glenn Close", "Gérard Depardieu", "Alice Evans"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "28 Days",
		year: 2000,
		cast: ["Sandra Bullock", "Viggo Mortensen"],
		genres: ["Drama"]
	},{ 
		title: "3 Strikes",
		year: 2000,
		cast: ["Brian Hooks", "N'Bushe Wright"],
		genres: ["Comedy"]
	},{ 
		title: "The 6th Day",
		year: 2000,
		cast: ["Arnold Schwarzenegger", "Robert Duvall"],
		genres: ["Science Fiction"]
	},{ 
		title: "Across the Line",
		year: 2000,
		cast: ["Brad Johnson", "Adrienne Barbeau", "Brian Bloom"],
		genres: ["Thriller"]
	},{ 
		title: "Adventures in Wild California",
		year: 2000,
		cast: ["Jimmy Smits", "(Narrator)"],
		genres: ["Documentary"]
	},{ 
		title: "The Adventures of Rocky and Bullwinkle",
		year: 2000,
		cast: ["Rene Russo", "Jason Alexander", "Robert De Niro", "Piper Perabo", "June Foray", "Keith Scott"],
		genres: ["Comedy"]
	},{ 
		title: "All the Pretty Horses",
		year: 2000,
		cast: ["Matt Damon", "Penélope Cruz", "Henry Thomas", "Lucas Black", "Rubén Blades", "Míriam Colón", "Bruce Dern"],
		genres: ["Western"]
	},{ 
		title: "Almost Famous",
		year: 2000,
		cast: ["Billy Crudup", "Frances McDormand", "Kate Hudson", "Jason Lee", "Patrick Fugit", "Anna Paquin", "Fairuza Balk"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "American Psycho",
		year: 2000,
		cast: ["Christian Bale", "Chloë Sevigny", "Willem Dafoe"],
		genres: ["Comedy", "Thriller"]
	},{ 
		title: "Animal Factory",
		year: 2000,
		cast: ["Willem Dafoe", "Edward Furlong", "Mickey Rourke"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Art of War",
		year: 2000,
		cast: ["Wesley Snipes", "Donald Sutherland"],
		genres: ["Action"]
	},{ 
		title: "Autumn in New York",
		year: 2000,
		cast: ["Richard Gere", "Winona Ryder"],
		genres: ["Romance"]
	},{ 
		title: "Bait",
		year: 2000,
		cast: ["Jamie Foxx", "David Morse", "Kimberly Elise"],
		genres: ["Action"]
	},{ 
		title: "The Ballad of Ramblin' Jack",
		year: 2000,
		cast: ["Ramblin' Jack Elliott"],
		genres: ["Documentary"]
	},{ 
		title: "Bamboozled",
		year: 2000,
		cast: ["Damon Wayans", "Jada Pinkett Smith", "Savion Glover", "Michael Rapaport", "Tommy Davidson"],
		genres: ["Satire"]
	},{ 
		title: "Battlefield Earth",
		year: 2000,
		cast: ["John Travolta", "Forest Whitaker", "Barry Pepper"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Beach",
		year: 2000,
		cast: ["Leonardo DiCaprio", "Virginie Ledoyen", "Tilda Swinton"],
		genres: ["Adventure"]
	},{ 
		title: "Beat",
		year: 2000,
		cast: ["Courtney Love", "Kiefer Sutherland"],
		genres: ["Drama"]
	},{ 
		title: "Beautiful",
		year: 2000,
		cast: ["Minnie Driver", "Hallie Kate Eisenberg", "Kathleen Turner"],
		genres: ["Comedy"]
	},{ 
		title: "Beautiful Joe",
		year: 2000,
		cast: ["Sharon Stone", "Billy Connolly"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Bedazzled",
		year: 2000,
		cast: ["Brendan Fraser", "Elizabeth Hurley"],
		genres: ["Comedy"]
	},{ 
		title: "Before Night Falls",
		year: 2000,
		cast: ["Javier Bardem", "Johnny Depp"],
		genres: ["Biography"]
	},{ 
		title: "Best in Show",
		year: 2000,
		cast: ["Parker Posey", "Michael McKean", "Catherine O'Hara", "Eugene Levy", "Michael Hitchcock", "Jennifer Coolidge"],
		genres: ["Satire"]
	},{ 
		title: "Big Momma's House",
		year: 2000,
		cast: ["Martin Lawrence", "Paul Giamatti"],
		genres: ["Comedy"]
	},{ 
		title: "The Big Tease",
		year: 2000,
		cast: ["Craig Ferguson", "Frances Fisher", "Mary McCormack"],
		genres: ["Comedy"]
	},{ 
		title: "Bless the Child",
		year: 2000,
		cast: ["Kim Basinger", "Jimmy Smits", "Christina Ricci"],
		genres: ["Thriller"]
	},{ 
		title: "Boiler Room",
		year: 2000,
		cast: ["Giovanni Ribisi", "Nia Long", "Vin Diesel", "Ben Affleck"],
		genres: ["Drama"]
	},{ 
		title: "Book of Shadows: Blair Witch 2",
		year: 2000,
		cast: ["Kim Director", "Jeffrey Donovan", "Erica Leerhsen"],
		genres: ["Horror"]
	},{ 
		title: "Bounce",
		year: 2000,
		cast: ["Ben Affleck", "Gwyneth Paltrow"],
		genres: ["Drama"]
	},{ 
		title: "A Boy Named Sue",
		year: 2000,
		cast: ["sex reassignment surgery"],
		genres: ["Documentary"]
	},{ 
		title: "Boys and Girls",
		year: 2000,
		cast: ["Claire Forlani", "Freddie Prinze, Jr.", "Jason Biggs"],
		genres: ["Comedy"]
	},{ 
		title: "Bring It On",
		year: 2000,
		cast: ["Kirsten Dunst", "Eliza Dushku", "Gabrielle Union", "Jesse Bradford"],
		genres: ["Comedy"]
	},{ 
		title: "The Broken Hearts Club: A Romantic Comedy",
		year: 2000,
		cast: ["Ben Weber", "Timothy Olyphant", "Zach Braff"],
		genres: ["Comedy"]
	},{ 
		title: "Brother",
		year: 2000,
		cast: ["Takeshi Kitano", "Omar Epps"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Cast Away",
		year: 2000,
		cast: ["Tom Hanks", "Helen Hunt"],
		genres: ["Adventure"]
	},{ 
		title: "Cecil B. Demented",
		year: 2000,
		cast: ["Melanie Griffith", "Stephen Dorff", "Alicia Witt", "Adrian Grenier", "Maggie Gyllenhaal"],
		genres: ["Comedy"]
	},{ 
		title: "The Cell",
		year: 2000,
		cast: ["Jennifer Lopez", "Vince Vaughn", "Vincent D'Onofrio"],
		genres: ["Science Fiction"]
	},{ 
		title: "Center Stage",
		year: 2000,
		cast: ["Amanda Schull", "Peter Gallagher", "Ethan Stiefel"],
		genres: ["Musical"]
	},{ 
		title: "Charlie's Angels",
		year: 2000,
		cast: ["Drew Barrymore", "Cameron Diaz", "Lucy Liu", "Bill Murray", "Sam Rockwell", "Tim Curry", "Crispin Glover"],
		genres: ["Action"]
	},{ 
		title: "Cherry Falls",
		year: 2000,
		cast: ["Brittany Murphy", "Michael Biehn", "Jesse Bradford"],
		genres: ["Thriller"]
	},{ 
		title: "Chinese Coffee",
		year: 2000,
		cast: ["Al Pacino", "Jerry Orbach"],
		genres: ["Drama"]
	},{ 
		title: "Chocolat",
		year: 2000,
		cast: ["Juliette Binoche", "Judi Dench", "Alfred Molina", "Lena Olin", "Johnny Depp"],
		genres: ["Romance"]
	},{ 
		title: "Chuck & Buck",
		year: 2000,
		cast: ["Chris Weitz", "Mike White", "Maya Rudolph"],
		genres: ["Comedy"]
	},{ 
		title: "The Contender",
		year: 2000,
		cast: ["Joan Allen", "Jeff Bridges", "Gary Oldman", "Christian Slater", "Sam Elliott", "Kathryn Morris", "Mike Binder"],
		genres: ["Drama"]
	},{ 
		title: "Coyote Ugly",
		year: 2000,
		cast: ["Piper Perabo", "Adam Garcia", "Tyra Banks", "John Goodman"],
		genres: ["Comedy"]
	},{ 
		title: "The Crew",
		year: 2000,
		cast: ["Richard Dreyfuss", "Burt Reynolds", "Dan Hedaya"],
		genres: ["Comedy"]
	},{ 
		title: "The Crossing",
		year: 2000,
		cast: ["Jeff Daniels", "Roger Rees", "Sebastian Roché", "Steven McCarthy"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "Digimon: The Movie",
		year: 2000,
		cast: ["Lara Jill Miller", "Joshua Seth", "Bob Glouberman"],
		genres: ["Animated", "Adventure"]
	},{ 
		title: "Dinosaur",
		year: 2000,
		cast: ["D. B. Sweeney", "Alfre Woodard", "Ossie Davis"],
		genres: ["Animated"]
	},{ 
		title: "Down to You",
		year: 2000,
		cast: ["Freddie Prinze, Jr.", "Julia Stiles"],
		genres: ["Comedy"]
	},{ 
		title: "Dr. T & the Women",
		year: 2000,
		cast: ["Richard Gere", "Helen Hunt", "Farrah Fawcett", "Laura Dern", "Shelley Long", "Tara Reid", "Kate Hudson"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Dracula 2000",
		year: 2000,
		cast: ["Gerard Butler", "Christopher Plummer", "Jonny Lee Miller"],
		genres: ["Horror"]
	},{ 
		title: "Drowning Mona",
		year: 2000,
		cast: ["Bette Midler", "Jamie Lee Curtis", "Danny DeVito", "Neve Campbell"],
		genres: ["Comedy"]
	},{ 
		title: "Dude, Where's My Car?",
		year: 2000,
		cast: ["Ashton Kutcher", "Seann William Scott"],
		genres: ["Comedy"]
	},{ 
		title: "Duets",
		year: 2000,
		cast: ["Maria Bello", "Andre Braugher", "Paul Giamatti", "Huey Lewis", "Gwyneth Paltrow", "Angie Dickinson"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Dungeons & Dragons",
		year: 2000,
		cast: ["Jeremy Irons", "Thora Birch", "Tom Baker", "Marlon Wayans"],
		genres: ["Fantasy"]
	},{ 
		title: "The Emperor's New Groove",
		year: 2000,
		cast: ["David Spade", "John Goodman", "Eartha Kitt", "Patrick Warburton"],
		genres: ["Animated"]
	},{ 
		title: "Erin Brockovich",
		year: 2000,
		cast: ["Julia Roberts", "Albert Finney", "Aaron Eckhart"],
		genres: ["Biography"]
	},{ 
		title: "An Everlasting Piece",
		year: 2000,
		cast: ["Barry McEvoy", "Brían F. O'Byrne", "Anna Friel", "Billy Connolly"],
		genres: ["Comedy"]
	},{ 
		title: "The Eyes of Tammy Faye",
		year: 2000,
		cast: ["Tammy Faye Bakker", "RuPaul"],
		genres: ["Documentary"]
	},{ 
		title: "The Family Man",
		year: 2000,
		cast: ["Nicolas Cage", "Téa Leoni", "Don Cheadle"],
		genres: ["Drama"]
	},{ 
		title: "Final Destination",
		year: 2000,
		cast: ["Devon Sawa", "Ali Larter", "Kerr Smith", "Seann William Scott"],
		genres: ["Horror"]
	},{ 
		title: "Finding Forrester",
		year: 2000,
		cast: ["Sean Connery", "Rob Brown", "Anna Paquin"],
		genres: ["Drama"]
	},{ 
		title: "The Flintstones in Viva Rock Vegas",
		year: 2000,
		cast: ["Mark Addy", "Stephen Baldwin", "Kristen Johnston", "Jane Krakowski", "Alan Cumming", "Joan Collins", "Harvey Korman"],
		genres: ["Comedy"]
	},{ 
		title: "For Love or Country: The Arturo Sandoval Story",
		year: 2000,
		cast: ["Andy García", "Mía Maestro", "Gloria Estefan"],
		genres: ["Biography"]
	},{ 
		title: "Frequency",
		year: 2000,
		cast: ["Dennis Quaid", "James Caviezel"],
		genres: ["Science Fiction"]
	},{ 
		title: "Get Carter",
		year: 2000,
		cast: ["Sylvester Stallone", "Rhona Mitra", "Michael Caine", "Rachael Leigh Cook", "Miranda Richardson", "Mickey Rourke"],
		genres: ["Action"]
	},{ 
		title: "The Gift",
		year: 2000,
		cast: ["Cate Blanchett", "Giovanni Ribisi", "Keanu Reeves", "Katie Holmes", "Greg Kinnear", "Hilary Swank"],
		genres: ["Thriller"]
	},{ 
		title: "The Girl",
		year: 2000,
		cast: ["Claire Keim", "Agathe De La Boulaye"],
		genres: ["Romance"]
	},{ 
		title: "Girlfight",
		year: 2000,
		cast: ["Michelle Rodriguez", "Paul Calderón"],
		genres: ["Drama"]
	},{ 
		title: "Gladiator",
		year: 2000,
		cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Richard Harris", "Djimon Hounsou", "Oliver Reed"],
		genres: ["Action", "Drama"]
	},{ 
		title: "The Golden Bowl",
		year: 2000,
		cast: ["Kate Beckinsale", "James Fox", "Anjelica Huston", "Nick Nolte"],
		genres: ["Drama"]
	},{ 
		title: "Gone in 60 Seconds",
		year: 2000,
		cast: ["Nicolas Cage", "Giovanni Ribisi", "Angelina Jolie", "Robert Duvall"],
		genres: ["Action"]
	},{ 
		title: "Gossip",
		year: 2000,
		cast: ["James Marsden", "Lena Headey", "Norman Reedus", "Kate Hudson", "Marisa Coughlan", "Joshua Jackson"],
		genres: ["Drama"]
	},{ 
		title: "Gun Shy",
		year: 2000,
		cast: ["Liam Neeson", "Oliver Platt", "Andrew Lauer"],
		genres: ["Action"]
	},{ 
		title: "Hamlet",
		year: 2000,
		cast: ["Ethan Hawke", "Diane Venora", "Julia Stiles"],
		genres: ["Drama"]
	},{ 
		title: "Hanging Up",
		year: 2000,
		cast: ["Meg Ryan", "Diane Keaton", "Lisa Kudrow", "Walter Matthau"],
		genres: ["Comedy"]
	},{ 
		title: "Held Up",
		year: 2000,
		cast: ["Jamie Foxx", "Nia Long"],
		genres: ["Comedy"]
	},{ 
		title: "Here on Earth",
		year: 2000,
		cast: ["Chris Klein", "Leelee Sobieski", "Josh Hartnett"],
		genres: ["Drama"]
	},{ 
		title: "High Fidelity",
		year: 2000,
		cast: ["John Cusack", "Jack Black", "Lisa Bonet", "Joan Cusack", "Iben Hjejle", "Lili Taylor"],
		genres: ["Comedy"]
	},{ 
		title: "Highlander: Endgame",
		year: 2000,
		cast: ["Adrian Paul", "Christopher Lambert"],
		genres: ["Science Fiction"]
	},{ 
		title: "Hollow Man",
		year: 2000,
		cast: ["Elisabeth Shue", "Kevin Bacon", "Josh Brolin"],
		genres: ["Science Fiction", "Horror"]
	},{ 
		title: "The House of Mirth",
		year: 2000,
		cast: ["Gillian Anderson", "Laura Linney", "Dan Aykroyd"],
		genres: ["Drama"]
	},{ 
		title: "How the Grinch Stole Christmas",
		year: 2000,
		cast: ["Jim Carrey", "Christine Baranski", "Jeffrey Tambor", "Molly Shannon", "Taylor Momsen"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "How to Kill Your Neighbor's Dog",
		year: 2000,
		cast: ["Kenneth Branagh", "Robin Wright Penn"],
		genres: ["Comedy"]
	},{ 
		title: "I Dreamed of Africa",
		year: 2000,
		cast: ["Kim Basinger", "Eva Marie Saint"],
		genres: ["Drama"]
	},{ 
		title: "Icebreaker",
		year: 2000,
		cast: ["Sean Astin", "Stacy Keach", "Bruce Campbell"],
		genres: ["Action"]
	},{ 
		title: "The In Crowd",
		year: 2000,
		cast: ["Susan Ward", "Lori Heuring", "Matthew Settle"],
		genres: ["Thriller"]
	},{ 
		title: "Into the Arms of Strangers: Stories of the Kindertransport",
		year: 2000,
		cast: ["the", "kindertransport"],
		genres: ["Documentary"]
	},{ 
		title: "Isn't She Great",
		year: 2000,
		cast: ["Bette Midler", "Nathan Lane", "John Cleese", "Stockard Channing", "David Hyde Pierce", "Amanda Peet"],
		genres: ["Biography", "Comedy"]
	},{ 
		title: "Ivans Xtc",
		year: 2000,
		cast: ["Danny Huston", "Peter Weller"],
		genres: ["Drama"]
	},{ 
		title: "Joe Gould's Secret",
		year: 2000,
		cast: ["Ian Holm", "Stanley Tucci", "Hope Davis"],
		genres: ["Drama"]
	},{ 
		title: "Just One Night",
		year: 2000,
		cast: ["Timothy Hutton", "Maria Grazia Cucinotta"],
		genres: ["Comedy"]
	},{ 
		title: "Keeping the Faith",
		year: 2000,
		cast: ["Ben Stiller", "Jenna Elfman", "Edward Norton"],
		genres: ["Comedy"]
	},{ 
		title: "The Kid",
		year: 2000,
		cast: ["Bruce Willis", "Lily Tomlin", "Jean Smart", "Spencer Breslin"],
		genres: ["Family"]
	},{ 
		title: "The Ladies Man",
		year: 2000,
		cast: ["Tim Meadows", "Billy Dee Williams", "Will Ferrell"],
		genres: ["Comedy"]
	},{ 
		title: "The Last Producer",
		year: 2000,
		cast: ["Burt Reynolds", "Rod Steiger", "Benjamin Bratt"],
		genres: ["Drama"]
	},{ 
		title: "Legacy",
		year: 2000,
		cast: ["life in", "Chicago", "ghettos"],
		genres: ["Documentary"]
	},{ 
		title: "The Legend of Bagger Vance",
		year: 2000,
		cast: ["Matt Damon", "Will Smith", "Charlize Theron", "Jack Lemmon"],
		genres: ["Drama"]
	},{ 
		title: "Little Nicky",
		year: 2000,
		cast: ["Adam Sandler", "Patricia Arquette", "Harvey Keitel"],
		genres: ["Comedy"]
	},{ 
		title: "The Little Vampire",
		year: 2000,
		cast: ["Jonathan Lipnicki", "Richard E. Grant", "Rollo Weeks"],
		genres: ["Comedy"]
	},{ 
		title: "Long Night's Journey into Day",
		year: 2000,
		cast: ["the", "Truth and Reconciliation Commission", "in post-", "Apartheid", "South Africa"],
		genres: ["Documentary"]
	},{ 
		title: "Loser",
		year: 2000,
		cast: ["Jason Biggs", "Mena Suvari", "Greg Kinnear"],
		genres: ["Comedy"]
	},{ 
		title: "Lost Souls",
		year: 2000,
		cast: ["Winona Ryder", "Ben Chaplin"],
		genres: ["Horror"]
	},{ 
		title: "Love & Basketball",
		year: 2000,
		cast: ["Omar Epps", "Sanaa Lathan", "Dennis Haysbert"],
		genres: ["Drama"]
	},{ 
		title: "Lucky Numbers",
		year: 2000,
		cast: ["John Travolta", "Lisa Kudrow", "Tim Roth", "Michael Moore"],
		genres: ["Crime"]
	},{ 
		title: "Maryam",
		year: 2000,
		cast: ["Mariam Parris", "Shaun Toub", "Shohreh Aghdashloo"],
		genres: ["Drama"]
	},{ 
		title: "Maze",
		year: 2000,
		cast: ["Rob Morrow", "Laura Linney", "Craig Sheffer"],
		genres: ["Drama"]
	},{ 
		title: "Me, Myself & Irene",
		year: 2000,
		cast: ["Jim Carrey", "Renée Zellweger", "Robert Forster", "Chris Cooper"],
		genres: ["Comedy"]
	},{ 
		title: "Meet the Parents",
		year: 2000,
		cast: ["Ben Stiller", "Robert De Niro", "Blythe Danner", "Teri Polo", "Owen Wilson"],
		genres: ["Comedy"]
	},{ 
		title: "Memento",
		year: 2000,
		cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
		genres: ["Thriller"]
	},{ 
		title: "Men of Honor",
		year: 2000,
		cast: ["Robert De Niro", "Cuba Gooding, Jr.", "Charlize Theron"],
		genres: ["Biography"]
	},{ 
		title: "Mercy Streets",
		year: 2000,
		cast: ["Eric Roberts", "Cynthia Watros", "Stacy Keach"],
		genres: ["Action"]
	},{ 
		title: "The Million Dollar Hotel",
		year: 2000,
		cast: ["Jeremy Davies", "Milla Jovovich", "Mel Gibson", "Jimmy Smits"],
		genres: ["Drama"]
	},{ 
		title: "Miss Congeniality",
		year: 2000,
		cast: ["Sandra Bullock", "Benjamin Bratt", "Michael Caine", "William Shatner", "Candice Bergen"],
		genres: ["Comedy"]
	},{ 
		title: "Mission to Mars",
		year: 2000,
		cast: ["Gary Sinise", "Tim Robbins", "Don Cheadle", "Connie Nielsen", "Jerry O'Connell", "Kim Delaney"],
		genres: ["Science Fiction"]
	},{ 
		title: "Mission: Impossible 2",
		year: 2000,
		cast: ["Tom Cruise", "Dougray Scott", "Thandie Newton", "Ving Rhames", "Richard Roxburgh", "Brendan Gleeson"],
		genres: ["Action"]
	},{ 
		title: "My Dog Skip",
		year: 2000,
		cast: ["Frankie Muniz", "Diane Lane", "Luke Wilson", "Kevin Bacon"],
		genres: ["Family"]
	},{ 
		title: "My 5 Wives",
		year: 2000,
		cast: ["Rodney Dangerfield", "Jerry Stiller", "Molly Shannon"],
		genres: ["Comedy"]
	},{ 
		title: "The Next Best Thing",
		year: 2000,
		cast: ["Rupert Everett", "Madonna", "Benjamin Bratt"],
		genres: ["Comedy"]
	},{ 
		title: "Next Friday",
		year: 2000,
		cast: ["Ice Cube", "Mike Epps", "Don Curry"],
		genres: ["Comedy"]
	},{ 
		title: "Nothin' 2 Lose",
		year: 2000,
		cast: ["Brian Hooks"],
		genres: ["Comedy"]
	},{ 
		title: "Nutty Professor II: The Klumps",
		year: 2000,
		cast: ["Eddie Murphy", "Janet Jackson", "Larry Miller", "Wanda Sykes"],
		genres: ["Comedy"]
	},{ 
		title: "Nurse Betty",
		year: 2000,
		cast: ["Morgan Freeman", "Renée Zellweger", "Chris Rock", "Greg Kinnear"],
		genres: ["Comedy"]
	},{ 
		title: "O Brother, Where Art Thou?",
		year: 2000,
		cast: ["George Clooney", "Tim Blake Nelson", "John Turturro", "Holly Hunter", "John Goodman", "Charles Durning"],
		genres: ["Comedy"]
	},{ 
		title: "The Opportunists",
		year: 2000,
		cast: ["Christopher Walken", "Vera Farmiga", "Cyndi Lauper"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Original Kings of Comedy",
		year: 2000,
		cast: ["stand-up comedy", "of", "Steve Harvey", "D. L. Hughley", "Cedric the Entertainer", "Bernie Mac"],
		genres: ["Documentary"]
	},{ 
		title: "Our Song",
		year: 2000,
		cast: ["Kerry Washington", "Melissa Martinez"],
		genres: ["Drama"]
	},{ 
		title: "Panic",
		year: 2000,
		cast: ["William H. Macy", "Neve Campbell", "Donald Sutherland"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Passion of Mind",
		year: 2000,
		cast: ["Demi Moore", "Stellan Skarsgård"],
		genres: ["Drama"]
	},{ 
		title: "The Patriot",
		year: 2000,
		cast: ["Mel Gibson", "Heath Ledger", "Joely Richardson", "Jason Isaacs", "Chris Cooper", "Tom Wilkinson"],
		genres: ["War"]
	},{ 
		title: "Pay It Forward",
		year: 2000,
		cast: ["Haley Joel Osment", "Helen Hunt", "Kevin Spacey", "James Caviezel", "Angie Dickinson", "Jon Bon Jovi"],
		genres: ["Drama"]
	},{ 
		title: "The Perfect Storm",
		year: 2000,
		cast: ["George Clooney", "Mark Wahlberg", "Diane Lane", "Mary Elizabeth Mastrantonio", "John C. Reilly", "Karen Allen"],
		genres: ["Adventure"]
	},{ 
		title: "Picking Up the Pieces",
		year: 2000,
		cast: ["Woody Allen", "Sharon Stone", "David Schwimmer"],
		genres: ["Comedy"]
	},{ 
		title: "Pitch Black",
		year: 2000,
		cast: ["Vin Diesel", "Keith David", "Cole Hauser"],
		genres: ["Science Fiction"]
	},{ 
		title: "Pollock",
		year: 2000,
		cast: ["Ed Harris", "Marcia Gay Harden", "Jennifer Connelly"],
		genres: ["Biography"]
	},{ 
		title: "Poor White Trash",
		year: 2000,
		cast: ["Sean Young", "William Devane"],
		genres: ["Comedy"]
	},{ 
		title: "Price of Glory",
		year: 2000,
		cast: ["Jimmy Smits"],
		genres: ["Drama"]
	},{ 
		title: "Prince of Central Park",
		year: 2000,
		cast: ["Kathleen Turner", "Danny Aiello", "Harvey Keitel"],
		genres: ["Family"]
	},{ 
		title: "Proof of Life",
		year: 2000,
		cast: ["Russell Crowe", "Meg Ryan", "David Morse"],
		genres: ["Drama"]
	},{ 
		title: "Psycho Beach Party",
		year: 2000,
		cast: ["Thomas Gibson", "Lauren Ambrose", "Charles Busch"],
		genres: ["Comedy"]
	},{ 
		title: "Quills",
		year: 2000,
		cast: ["Geoffrey Rush", "Kate Winslet", "Joaquin Phoenix", "Michael Caine"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "Ready to Rumble",
		year: 2000,
		cast: ["David Arquette", "Oliver Platt", "Scott Caan"],
		genres: ["Comedy"]
	},{ 
		title: "Reckless Indifference",
		year: 2000,
		cast: ["underage murder"],
		genres: ["Documentary"]
	},{ 
		title: "Red Planet",
		year: 2000,
		cast: ["Val Kilmer", "Carrie-Anne Moss", "Tom Sizemore"],
		genres: ["Science Fiction"]
	},{ 
		title: "Reindeer Games",
		year: 2000,
		cast: ["Ben Affleck", "Gary Sinise", "Charlize Theron"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Remember the Titans",
		year: 2000,
		cast: ["Denzel Washington", "Will Patton"],
		genres: ["Drama"]
	},{ 
		title: "The Replacements",
		year: 2000,
		cast: ["Keanu Reeves", "Gene Hackman", "Brooke Langton"],
		genres: ["Comedy"]
	},{ 
		title: "Requiem for a Dream",
		year: 2000,
		cast: ["Ellen Burstyn", "Jared Leto", "Jennifer Connelly", "Marlon Wayans"],
		genres: ["Drama"]
	},{ 
		title: "Return to Me",
		year: 2000,
		cast: ["Minnie Driver", "David Duchovny", "Carroll O'Connor"],
		genres: ["Romance"]
	},{ 
		title: "The Road to El Dorado",
		year: 2000,
		cast: ["Kevin Kline", "Kenneth Branagh", "Rosie Perez"],
		genres: ["Animated"]
	},{ 
		title: "Road Trip",
		year: 2000,
		cast: ["Breckin Meyer", "Seann William Scott", "Tom Green", "DJ Qualls", "Amy Smart"],
		genres: ["Comedy"]
	},{ 
		title: "Romeo Must Die",
		year: 2000,
		cast: ["Jet Li", "Aaliyah", "Delroy Lindo"],
		genres: ["Action"]
	},{ 
		title: "Rugrats in Paris: The Movie",
		year: 2000,
		cast: ["Elizabeth Daily", "Tara Strong", "Cheryl Chase"],
		genres: ["Animated"]
	},{ 
		title: "Rules of Engagement",
		year: 2000,
		cast: ["Tommy Lee Jones", "Samuel L. Jackson", "Guy Pearce"],
		genres: ["War"]
	},{ 
		title: "The Scarecrow",
		year: 2000,
		cast: ["Shawn Hoffman", "Belinda Montgomery", "Ray Porter", "Corey Feldman"],
		genres: ["Animated", "Fantasy"]
	},{ 
		title: "Scary Movie",
		year: 2000,
		cast: ["Marlon Wayans", "Anna Faris", "Carmen Electra"],
		genres: ["Comedy"]
	},{ 
		title: "Scottsboro: An American Tragedy",
		year: 2000,
		cast: ["the", "Scottsboro Boys", "case"],
		genres: ["Documentary"]
	},{ 
		title: "Scream 3",
		year: 2000,
		cast: ["David Arquette", "Neve Campbell", "Courteney Cox", "Patrick Dempsey", "Scott Foley", "Emily Mortimer"],
		genres: ["Horror"]
	},{ 
		title: "Screwed",
		year: 2000,
		cast: ["Norm Macdonald", "Dave Chappelle", "Danny DeVito"],
		genres: ["Comedy"]
	},{ 
		title: "Seventeen Again",
		year: 2000,
		cast: ["Tamera Mowry", "Tia Mowry", "Maia Campbell"],
		genres: ["Comedy"]
	},{ 
		title: "Sexy Beast",
		year: 2000,
		cast: ["Ray Winstone", "Ben Kingsley", "Ian McShane", "Amanda Redman", "James Fox"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Shadow of the Vampire",
		year: 2000,
		cast: ["John Malkovich", "Willem Dafoe"],
		genres: ["Drama"]
	},{ 
		title: "Shaft",
		year: 2000,
		cast: ["Samuel L. Jackson", "Vanessa Williams", "Jeffrey Wright", "Richard Roundtree", "Christian Bale"],
		genres: ["Action"]
	},{ 
		title: "Shanghai Noon",
		year: 2000,
		cast: ["Jackie Chan", "Owen Wilson", "Lucy Liu"],
		genres: ["Comedy"]
	},{ 
		title: "Shriek If You Know What I Did Last Friday the Thirteenth",
		year: 2000,
		cast: ["Tiffani-Amber Thiessen", "Tom Arnold", "Majandra Delfino"],
		genres: ["Comedy"]
	},{ 
		title: "The Skulls",
		year: 2000,
		cast: ["Joshua Jackson", "Paul Walker"],
		genres: ["Thriller"]
	},{ 
		title: "Small Time Crooks",
		year: 2000,
		cast: ["Woody Allen", "Hugh Grant", "Tracey Ullman"],
		genres: ["Comedy"]
	},{ 
		title: "The Smokers",
		year: 2000,
		cast: ["Dominique Swain", "Busy Philipps", "Keri Lynn Pratt", "Nicholas M. Loeb", "Oliver Hudson"],
		genres: ["Drama"]
	},{ 
		title: "Snatch",
		year: 2000,
		cast: ["Benicio del Toro", "Jason Statham", "Brad Pitt", "Stephen Graham", "Dennis Farina"],
		genres: ["Crime"]
	},{ 
		title: "Snow Day",
		year: 2000,
		cast: ["Chevy Chase", "Chris Elliott", "Mark Webber"],
		genres: ["Comedy"]
	},{ 
		title: "Songcatcher",
		year: 2000,
		cast: ["Janet McTeer", "Aidan Quinn"],
		genres: ["Drama"]
	},{ 
		title: "Sound and Fury",
		year: 2000,
		cast: ["conflict between", "cochlear implants", "deaf identity"],
		genres: ["Documentary"]
	},{ 
		title: "Space Cowboys",
		year: 2000,
		cast: ["Clint Eastwood", "Tommy Lee Jones", "Donald Sutherland", "James Garner", "Marcia Gay Harden", "James Cromwell", "Loren Dean", "Courtney B. Vance", "William Devane"],
		genres: ["Drama"]
	},{ 
		title: "The Specials",
		year: 2000,
		cast: ["Thomas Haden Church", "Rob Lowe", "Jamie Kennedy"],
		genres: ["Comedy"]
	},{ 
		title: "Steal This Movie!",
		year: 2000,
		cast: ["Vincent D'Onofrio", "Janeane Garofalo"],
		genres: ["Biography"]
	},{ 
		title: "Supernova",
		year: 2000,
		cast: ["James Spader", "Angela Bassett"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Tao of Steve",
		year: 2000,
		cast: ["Donal Logue"],
		genres: ["Comedy"]
	},{ 
		title: "Terror Tract",
		year: 2000,
		cast: ["John Ritter", "David DeLuise", "Allison Smith"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "Things You Can Tell Just by Looking at Her",
		year: 2000,
		cast: ["Glenn Close", "Cameron Diaz", "Calista Flockhart", "Kathy Baker", "Amy Brenneman"],
		genres: ["Romance"]
	},{ 
		title: "Thirteen Days",
		year: 2000,
		cast: ["Kevin Costner", "Bruce Greenwood", "Dylan Baker", "Steven Culp", "Len Cariou", "Kevin Conway"],
		genres: ["Drama"]
	},{ 
		title: "Thomas & the Magic Railroad",
		year: 2000,
		cast: ["Alec Baldwin", "Peter Fonda", "Mara Wilson"],
		genres: ["Family"]
	},{ 
		title: "Tigerland",
		year: 2000,
		cast: ["Colin Farrell", "Matthew Davis", "Clifton Collins, Jr."],
		genres: ["War"]
	},{ 
		title: "The Tigger Movie",
		year: 2000,
		cast: ["Jim Cummings", "Nikita Hopkins", "John Fiedler"],
		genres: ["Animated"]
	},{ 
		title: "Timecode",
		year: 2000,
		cast: ["Salma Hayek", "Stellan Skarsgård", "Holly Hunter"],
		genres: ["Drama"]
	},{ 
		title: "Titan A.E.",
		year: 2000,
		cast: ["Matt Damon", "Nathan Lane"],
		genres: ["Animated"]
	},{ 
		title: "Traffic",
		year: 2000,
		cast: ["Michael Douglas", "Don Cheadle", "Benicio del Toro", "Dennis Quaid", "Catherine Zeta-Jones"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Tripfall",
		year: 2000,
		cast: ["Eric Roberts", "John Ritter", "Rachel Hunter"],
		genres: ["Thriller"]
	},{ 
		title: "Turn It Up",
		year: 2000,
		cast: ["Pras", "Ja Rule"],
		genres: ["Musical"]
	},{ 
		title: "U-571",
		year: 2000,
		cast: ["Matthew McConaughey", "Harvey Keitel", "Jon Bon Jovi"],
		genres: ["Action"]
	},{ 
		title: "Unbreakable",
		year: 2000,
		cast: ["Bruce Willis", "Samuel L. Jackson", "Robin Wright Penn"],
		genres: ["Thriller"]
	},{ 
		title: "Under Suspicion",
		year: 2000,
		cast: ["Gene Hackman", "Morgan Freeman", "Monica Bellucci"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Up at the Villa",
		year: 2000,
		cast: ["Kristin Scott Thomas", "Sean Penn"],
		genres: ["Drama"]
	},{ 
		title: "Urban Legends: Final Cut",
		year: 2000,
		cast: ["Jennifer Morrison", "Matthew Davis", "Hart Bochner"],
		genres: ["Horror"]
	},{ 
		title: "Vertical Limit",
		year: 2000,
		cast: ["Chris O'Donnell", "Bill Paxton", "Robin Tunney"],
		genres: ["Thriller"]
	},{ 
		title: "The Visit",
		year: 2000,
		cast: ["Hill Harper", "Billy Dee Williams", "Rae Dawn Chong"],
		genres: ["Drama"]
	},{ 
		title: "Waking the Dead",
		year: 2000,
		cast: ["Jennifer Connelly", "Billy Crudup"],
		genres: ["Drama"]
	},{ 
		title: "The Watcher",
		year: 2000,
		cast: ["James Spader", "Keanu Reeves", "Marisa Tomei"],
		genres: ["Thriller"]
	},{ 
		title: "The Way of the Gun",
		year: 2000,
		cast: ["Benicio del Toro", "Ryan Phillippe"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "What Lies Beneath",
		year: 2000,
		cast: ["Harrison Ford", "Michelle Pfeiffer", "Joe Morton"],
		genres: ["Thriller"]
	},{ 
		title: "What Planet Are You From?",
		year: 2000,
		cast: ["Garry Shandling", "Annette Bening", "John Goodman", "Greg Kinnear", "Linda Fiorentino"],
		genres: ["Comedy", "Science Fiction"]
	},{ 
		title: "What Women Want",
		year: 2000,
		cast: ["Mel Gibson", "Helen Hunt", "Marisa Tomei", "Alan Alda"],
		genres: ["Comedy"]
	},{ 
		title: "Whatever It Takes",
		year: 2000,
		cast: ["Shane West", "Marla Sokoloff", "Jodi Lyn O'Keefe", "James Franco"],
		genres: ["Comedy"]
	},{ 
		title: "Where the Heart Is",
		year: 2000,
		cast: ["Natalie Portman", "Ashley Judd", "Stockard Channing", "Joan Cusack", "Keith David", "Sally Field"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Where the Money Is",
		year: 2000,
		cast: ["Paul Newman", "Linda Fiorentino", "Dermot Mulroney", "Susan Barnes"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Whipped",
		year: 2000,
		cast: ["Amanda Peet", "Callie Thorne", "Brian Van Holt"],
		genres: ["Comedy"]
	},{ 
		title: "The Whole Nine Yards",
		year: 2000,
		cast: ["Bruce Willis", "Matthew Perry", "Rosanna Arquette", "Natasha Henstridge", "Michael Clarke Duncan", "Amanda Peet", "Kevin Pollak"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Woman on Top",
		year: 2000,
		cast: ["Penélope Cruz"],
		genres: ["Comedy"]
	},{ 
		title: "Wonder Boys",
		year: 2000,
		cast: ["Michael Douglas", "Tobey Maguire", "Frances McDormand", "Katie Holmes", "Robert Downey, Jr."],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "X-Men",
		year: 2000,
		cast: ["Hugh Jackman", "Patrick Stewart", "Ian McKellen"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "The Yards",
		year: 2000,
		cast: ["Mark Wahlberg", "Charlize Theron", "Joaquin Phoenix", "James Caan", "Ellen Burstyn", "Faye Dunaway"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "You Can Count on Me",
		year: 2000,
		cast: ["Laura Linney", "Mark Ruffalo", "Matthew Broderick"],
		genres: ["Drama"]
	},{ 
		title: "15 Minutes",
		year: 2001,
		cast: ["Robert De Niro", "Edward Burns", "Kelsey Grammer"],
		genres: ["Action", "Crime"]
	},{ 
		title: "3 A.M.",
		year: 2001,
		cast: ["Danny Glover", "Pam Grier", "Sarita Choudhury"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "3000 Miles to Graceland",
		year: 2001,
		cast: ["Kurt Russell", "Kevin Costner", "Courteney Cox", "Christian Slater", "David Arquette", "Kevin Pollak", "Howie Long", "Ice-T"],
		genres: ["Action", "Crime"]
	},{ 
		title: "A.I. Artificial Intelligence",
		year: 2001,
		cast: ["Jude Law", "Haley Joel Osment", "William Hurt", "Frances O'Connor", "Sam Robards"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Affair of the Necklace",
		year: 2001,
		cast: ["Hilary Swank", "Jonathan Pryce", "Adrien Brody"],
		genres: ["Drama"]
	},{ 
		title: "Ali",
		year: 2001,
		cast: ["Will Smith", "Jamie Foxx", "Jon Voight", "Mario Van Peebles", "Jeffrey Wright", "Ron Silver"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "All Over the Guy",
		year: 2001,
		cast: ["Sasha Alexander", "Dan Bucatinsky", "Adam Goldberg"],
		genres: ["Comedy"]
	},{ 
		title: "Along Came a Spider",
		year: 2001,
		cast: ["Morgan Freeman", "Monica Potter", "Dylan Baker"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "The Amati Girls",
		year: 2001,
		cast: ["Cloris Leachman", "Mercedes Ruehl", "Sean Young"],
		genres: ["Drama"]
	},{ 
		title: "America's Sweethearts",
		year: 2001,
		cast: ["Julia Roberts", "Catherine Zeta-Jones", "John Cusack", "Billy Crystal"],
		genres: ["Comedy"]
	},{ 
		title: "The American Astronaut",
		year: 2001,
		cast: ["Cory McAbee", "Rocco Sisto"],
		genres: ["Musical"]
	},{ 
		title: "American Outlaws",
		year: 2001,
		cast: ["Colin Farrell", "Scott Caan", "Ali Larter"],
		genres: ["Western"]
	},{ 
		title: "American Pie 2",
		year: 2001,
		cast: ["Jason Biggs", "Shannon Elizabeth", "Chris Klein", "Alyson Hannigan", "Seann William Scott", "Tara Reid", "Eugene Levy"],
		genres: ["Comedy"]
	},{ 
		title: "An American Rhapsody",
		year: 2001,
		cast: ["Scarlett Johansson", "Nastassja Kinski", "Tony Goldwyn"],
		genres: ["Drama"]
	},{ 
		title: "Amy's Orgasm",
		year: 2001,
		cast: ["Julie Davis", "Nick Chinlund", "Jeff Cesario"],
		genres: ["Comedy"]
	},{ 
		title: "Angel Eyes",
		year: 2001,
		cast: ["Jennifer Lopez", "James Caviezel", "Jeremy Sisto"],
		genres: ["Romance"]
	},{ 
		title: "The Animal",
		year: 2001,
		cast: ["Rob Schneider", "Colleen Haskell", "John C. McGinley", "Edward Asner"],
		genres: ["Comedy"]
	},{ 
		title: "The Anniversary Party",
		year: 2001,
		cast: ["Alan Cumming", "Jennifer Jason Leigh", "Kevin Kline"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Antitrust",
		year: 2001,
		cast: ["Ryan Phillippe", "Rachael Leigh Cook", "Claire Forlani", "Tim Robbins"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Atlantis: The Lost Empire",
		year: 2001,
		cast: ["Michael J. Fox", "Cree Summer", "James Garner"],
		genres: ["Animated"]
	},{ 
		title: "Baby Boy",
		year: 2001,
		cast: ["Tyrese Gibson", "Snoop Dogg", "Ving Rhames"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Bandits",
		year: 2001,
		cast: ["Bruce Willis", "Cate Blanchett", "Billy Bob Thornton"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Bartleby",
		year: 2001,
		cast: ["David Paymer", "Crispin Glover", "Glenne Headly"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "A Beautiful Mind",
		year: 2001,
		cast: ["Russell Crowe", "Jennifer Connelly", "Ed Harris"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Behind Enemy Lines",
		year: 2001,
		cast: ["Gene Hackman", "Owen Wilson", "David Keith"],
		genres: ["War"]
	},{ 
		title: "The Believer",
		year: 2001,
		cast: ["Ryan Gosling", "Billy Zane", "Theresa Russell"],
		genres: ["Drama"]
	},{ 
		title: "Big Bad Love",
		year: 2001,
		cast: ["Arliss Howard", "Debra Winger", "Paul Le Mat"],
		genres: ["Drama"]
	},{ 
		title: "Black Hawk Down",
		year: 2001,
		cast: ["Josh Hartnett", "Ewan McGregor", "Tom Hardy"],
		genres: ["War"]
	},{ 
		title: "Black Knight",
		year: 2001,
		cast: ["Martin Lawrence"],
		genres: ["Comedy"]
	},{ 
		title: "Blow",
		year: 2001,
		cast: ["Johnny Depp", "Penélope Cruz"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Bones",
		year: 2001,
		cast: ["Snoop Dogg", "Pam Grier", "Michael T. Weiss"],
		genres: ["Horror"]
	},{ 
		title: "Boom: The Sound of Eviction",
		year: 2001,
		cast: ["Willie Brown"],
		genres: ["Documentary"]
	},{ 
		title: "A Boy Named Sue",
		year: 2001,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "The Brothers",
		year: 2001,
		cast: ["Morris Chestnut", "D. L. Hughley", "Bill Bellamy", "Shemar Moore"],
		genres: ["Comedy"]
	},{ 
		title: "Bubble Boy",
		year: 2001,
		cast: ["Jake Gyllenhaal"],
		genres: ["Comedy"]
	},{ 
		title: "Buffalo Soldiers",
		year: 2001,
		cast: ["Joaquin Phoenix", "Ed Harris", "Anna Paquin"],
		genres: ["War", "Comedy"]
	},{ 
		title: "Bully",
		year: 2001,
		cast: ["Brad Renfro", "Rachel Miner", "Bijou Phillips"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Business of Strangers",
		year: 2001,
		cast: ["Julia Stiles", "Stockard Channing", "Marcus Giamatti"],
		genres: ["Thriller"]
	},{ 
		title: "Captain Corelli's Mandolin",
		year: 2001,
		cast: ["Nicolas Cage", "Penélope Cruz"],
		genres: ["Romance"]
	},{ 
		title: "The Cat's Meow",
		year: 2001,
		cast: ["Kirsten Dunst", "Edward Herrmann", "Eddie Izzard", "Cary Elwes", "Joanna Lumley", "Jennifer Tilly"],
		genres: ["Drama"]
	},{ 
		title: "Cats & Dogs",
		year: 2001,
		cast: ["Jeff Goldblum", "Elizabeth Perkins", "Tobey Maguire", "Sean Hayes", "Alec Baldwin", "Alexander Pollock"],
		genres: ["Comedy"]
	},{ 
		title: "The Caveman's Valentine",
		year: 2001,
		cast: ["Samuel L. Jackson", "Colm Feore", "Ann Magnuson"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Center of the World",
		year: 2001,
		cast: ["Peter Sarsgaard", "Molly Parker"],
		genres: ["Drama"]
	},{ 
		title: "Corky Romano",
		year: 2001,
		cast: ["Chris Kattan", "Peter Falk", "Fred Ward"],
		genres: ["Comedy"]
	},{ 
		title: "CQ",
		year: 2001,
		cast: ["Jeremy Davies", "Angela Lindvall"],
		genres: ["Science Fiction"]
	},{ 
		title: "Crazy/Beautiful",
		year: 2001,
		cast: ["Kirsten Dunst", "Jay Hernandez", "Bruce Davison"],
		genres: ["Romance"]
	},{ 
		title: "Crocodile Dundee in Los Angeles",
		year: 2001,
		cast: ["Paul Hogan", "Linda Kozlowski", "Jere Burns", "Paul Rodriguez"],
		genres: ["Adventure"]
	},{ 
		title: "Cruel Intentions 2",
		year: 2001,
		cast: ["Robin Dunne", "Sarah Thompson", "Keri Lynn Pratt", "Amy Adams"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Curse of the Jade Scorpion",
		year: 2001,
		cast: ["Woody Allen", "Elizabeth Berkley", "Helen Hunt", "Dan Aykroyd"],
		genres: ["Comedy"]
	},{ 
		title: "The Deep End",
		year: 2001,
		cast: ["Tilda Swinton", "Goran Višnjić", "Jonathan Tucker"],
		genres: ["Drama"]
	},{ 
		title: "Delivering Milo",
		year: 2001,
		cast: ["Anton Yelchin", "Albert Finney", "Bridget Fonda"],
		genres: ["Comedy"]
	},{ 
		title: "Den",
		year: 2001,
		cast: ["Greg Arce", "Stephanie Rettig", "Lee Schall", "Dana J. Ryan"],
		genres: ["Thriller"]
	},{ 
		title: "Dogtown and Z-Boys",
		year: 2001,
		cast: ["the history of", "skateboarding"],
		genres: ["Documentary"]
	},{ 
		title: "Domestic Disturbance",
		year: 2001,
		cast: ["John Travolta", "Vince Vaughn", "Teri Polo"],
		genres: ["Thriller"]
	},{ 
		title: "Don't Say a Word",
		year: 2001,
		cast: ["Michael Douglas", "Sean Bean", "Brittany Murphy"],
		genres: ["Thriller"]
	},{ 
		title: "Donnie Darko",
		year: 2001,
		cast: ["Jake Gyllenhaal", "Jena Malone", "Drew Barrymore", "Mary McDonnell", "Katharine Ross", "Patrick Swayze", "Noah Wyle"],
		genres: ["Science Fiction"]
	},{ 
		title: "Double Take",
		year: 2001,
		cast: ["Eddie Griffin", "Orlando Jones"],
		genres: ["Comedy"]
	},{ 
		title: "Down to Earth",
		year: 2001,
		cast: ["Chris Rock"],
		genres: ["Comedy"]
	},{ 
		title: "Dr. Dolittle 2",
		year: 2001,
		cast: ["Eddie Murphy", "Raven-Symoné", "Kevin Pollak"],
		genres: ["Comedy"]
	},{ 
		title: "Driven",
		year: 2001,
		cast: ["Sylvester Stallone", "Burt Reynolds", "Kip Pardue", "Til Schweiger", "Gina Gershon", "Estella Warren"],
		genres: ["Action"]
	},{ 
		title: "Dumb Luck",
		year: 2001,
		cast: ["Scott Baio", "Tracy Nelson", "Hal Linden"],
		genres: ["Comedy"]
	},{ 
		title: "Earth vs. the Spider",
		year: 2001,
		cast: ["Dan Aykroyd", "Devon Gummersall", "Amelia Heinle"],
		genres: ["Horror"]
	},{ 
		title: "Elvira's Haunted Hills",
		year: 2001,
		cast: ["Cassandra Peterson", "Richard O'Brien", "Mary Scheer"],
		genres: ["Horror"]
	},{ 
		title: "Enemy at the Gates",
		year: 2001,
		cast: ["Jude Law", "Ed Harris", "Rachel Weisz", "Joseph Fiennes", "Bob Hoskins"],
		genres: ["War"]
	},{ 
		title: "Escape from Hell",
		year: 2001,
		cast: ["Daniel Kruse", "Emilie Jo Tisdale", "Terry Jernigan"],
		genres: ["Horror"]
	},{ 
		title: "Evolution",
		year: 2001,
		cast: ["David Duchovny", "Orlando Jones", "Seann William Scott", "Julianne Moore"],
		genres: ["Science Fiction"]
	},{ 
		title: "Exit Wounds",
		year: 2001,
		cast: ["Steven Seagal", "DMX", "Anthony Anderson"],
		genres: ["Action"]
	},{ 
		title: "The Fast and the Furious",
		year: 2001,
		cast: ["Paul Walker", "Vin Diesel", "Michelle Rodriguez", "Jordana Brewster"],
		genres: ["Action"]
	},{ 
		title: "Festival in Cannes",
		year: 2001,
		cast: ["Anouk Aimée", "Greta Scacchi", "Maximilian Schell", "Ron Silver"],
		genres: ["Comedy"]
	},{ 
		title: "Final Fantasy: The Spirits Within",
		year: 2001,
		cast: ["Ming-Na", "Alec Baldwin", "James Woods", "Donald Sutherland", "Ving Rhames", "Steve Buscemi", "Peri Gilpin"],
		genres: ["Fantasy"]
	},{ 
		title: "Finder's Fee",
		year: 2001,
		cast: ["Erik Palladino", "James Earl Jones", "Ryan Reynolds", "Dash Mihok"],
		genres: ["Thriller"]
	},{ 
		title: "The Fluffer",
		year: 2001,
		cast: ["Scott Gurney", "Taylor Negron", "Roxanne Day"],
		genres: ["Comedy"]
	},{ 
		title: "The Forsaken",
		year: 2001,
		cast: ["Kerr Smith", "Brendan Fehr", "Izabella Miko"],
		genres: ["Horror"]
	},{ 
		title: "Frailty",
		year: 2001,
		cast: ["Bill Paxton", "Powers Boothe", "Matthew McConaughey"],
		genres: ["Horror"]
	},{ 
		title: "Freddy Got Fingered",
		year: 2001,
		cast: ["Tom Green", "Rip Torn", "Harland Williams", "Marisa Coughlan", "Eddie Kaye Thomas", "Julie Hagerty"],
		genres: ["Comedy"]
	},{ 
		title: "From Hell",
		year: 2001,
		cast: ["Johnny Depp", "Heather Graham", "Ian Holm"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Full Frontal",
		year: 2001,
		cast: ["Kyle Schickner", "Christopher May", "Chi Chi LaRue"],
		genres: ["Comedy"]
	},{ 
		title: "Get Over It",
		year: 2001,
		cast: ["Kirsten Dunst", "Ben Foster", "Sisqó", "Shane West", "Colin Hanks", "Martin Short", "Carmen Electra"],
		genres: ["Musical"]
	},{ 
		title: "Ghost World",
		year: 2001,
		cast: ["Thora Birch", "Scarlett Johansson", "Brad Renfro", "Illeana Douglas", "Steve Buscemi"],
		genres: ["Drama"]
	},{ 
		title: "Ghosts of Mars",
		year: 2001,
		cast: ["Ice Cube", "Natasha Henstridge", "Joanna Cassidy"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Glass House",
		year: 2001,
		cast: ["Leelee Sobieski", "Diane Lane", "Stellan Skarsgård"],
		genres: ["Thriller"]
	},{ 
		title: "Glitter",
		year: 2001,
		cast: ["Mariah Carey", "Max Beesley", "Terrence Howard", "Ann Magnuson"],
		genres: ["Musical"]
	},{ 
		title: "God Didn't Give Me a Week's Notice",
		year: 2001,
		cast: ["Margaret Holloway"],
		genres: ["Documentary"]
	},{ 
		title: "Good Neighbor",
		year: 2001,
		cast: ["Billy Dee Williams", "Danica McKellar", "Tobin Bell"],
		genres: ["Thriller"]
	},{ 
		title: "Gosford Park",
		year: 2001,
		cast: ["Michael Gambon", "Kristin Scott Thomas", "Maggie Smith", "Helen Mirren", "Alan Bates", "Bob Balaban", "Clive Owen"],
		genres: ["Mystery", "Comedy"]
	},{ 
		title: "The Grey Zone",
		year: 2001,
		cast: ["Harvey Keitel", "Natasha Lyonne", "David Arquette"],
		genres: ["Drama"]
	},{ 
		title: "Hannibal",
		year: 2001,
		cast: ["Anthony Hopkins", "Julianne Moore", "Gary Oldman", "Giancarlo Giannini", "Ray Liotta"],
		genres: ["Thriller"]
	},{ 
		title: "Hardball",
		year: 2001,
		cast: ["Keanu Reeves", "Diane Lane", "John Hawkes"],
		genres: ["Drama"]
	},{ 
		title: "Harry Potter and the Sorcerer's Stone",
		year: 2001,
		cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Richard Harris", "Maggie Smith", "Robbie Coltrane"],
		genres: ["Fantasy"]
	},{ 
		title: "Harvard Man",
		year: 2001,
		cast: ["Adrian Grenier", "Sarah Michelle Gellar", "Joey Lauren Adams"],
		genres: ["Drama"]
	},{ 
		title: "Head Over Heels",
		year: 2001,
		cast: ["Monica Potter", "Freddie Prinze Jr."],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Heartbreakers",
		year: 2001,
		cast: ["Sigourney Weaver", "Jennifer Love Hewitt", "Gene Hackman", "Ray Liotta"],
		genres: ["Comedy"]
	},{ 
		title: "Hearts in Atlantis",
		year: 2001,
		cast: ["Anthony Hopkins", "Anton Yelchin", "Hope Davis", "David Morse"],
		genres: ["Drama"]
	},{ 
		title: "Hedwig and the Angry Inch",
		year: 2001,
		cast: ["John Cameron Mitchell", "Miriam Shor", "Stephen Trask", "Theodore Liscinski", "Rob Campbell"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "Heist",
		year: 2001,
		cast: ["Gene Hackman", "Danny DeVito", "Delroy Lindo", "Sam Rockwell", "Rebecca Pidgeon", "Ricky Jay"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Herman U.S.A.",
		year: 2001,
		cast: ["Michael O'Keefe", "Kevin Chamberlin"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "How High",
		year: 2001,
		cast: ["Method Man", "Redman"],
		genres: ["Comedy"]
	},{ 
		title: "How to Make a Monster",
		year: 2001,
		cast: ["Clea DuVall", "Steven Culp"],
		genres: ["Science Fiction"]
	},{ 
		title: "Human Nature",
		year: 2001,
		cast: ["Patricia Arquette", "Rhys Ifans", "Tim Robbins", "Miranda Otto"],
		genres: ["Comedy"]
	},{ 
		title: "I Am Sam",
		year: 2001,
		cast: ["Sean Penn", "Michelle Pfeiffer", "Dakota Fanning"],
		genres: ["Drama"]
	},{ 
		title: "In the Bedroom",
		year: 2001,
		cast: ["Tom Wilkinson", "Sissy Spacek", "Nick Stahl", "Marisa Tomei"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Jay and Silent Bob Strike Back",
		year: 2001,
		cast: ["Jason Mewes", "Kevin Smith"],
		genres: ["Comedy"]
	},{ 
		title: "Jeepers Creepers",
		year: 2001,
		cast: ["Gina Philips", "Justin Long", "Jonathan Breck"],
		genres: ["Horror"]
	},{ 
		title: "Jimmy Neutron: Boy Genius",
		year: 2001,
		cast: ["Megan Cavanagh", "Mark DeCarlo", "Debi Derryberry"],
		genres: ["Animated"]
	},{ 
		title: "The Jimmy Show",
		year: 2001,
		cast: ["Frank Whaley", "Carla Gugino", "Ethan Hawke"],
		genres: ["Comedy"]
	},{ 
		title: "Joe Dirt",
		year: 2001,
		cast: ["David Spade", "Brittany Daniel", "Adam Beach"],
		genres: ["Comedy"]
	},{ 
		title: "Joe Somebody",
		year: 2001,
		cast: ["Tim Allen", "James Belushi", "Julie Bowen"],
		genres: ["Comedy"]
	},{ 
		title: "Josie and the Pussycats",
		year: 2001,
		cast: ["Rachael Leigh Cook", "Tara Reid", "Rosario Dawson"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "Joy Ride",
		year: 2001,
		cast: ["Paul Walker", "Steve Zahn", "Leelee Sobieski"],
		genres: ["Horror"]
	},{ 
		title: "Jurassic Park III",
		year: 2001,
		cast: ["Sam Neill", "William H. Macy", "Téa Leoni", "Michael Jeter", "Alessandro Nivola", "Trevor Morgan"],
		genres: ["Science Fiction"]
	},{ 
		title: "Just Visiting",
		year: 2001,
		cast: ["Jean Reno", "Christina Applegate", "Christian Clavier"],
		genres: ["Fantasy"]
	},{ 
		title: "K-PAX",
		year: 2001,
		cast: ["Kevin Spacey", "Jeff Bridges", "Mary McCormack", "Alfre Woodard"],
		genres: ["Drama"]
	},{ 
		title: "Kate & Leopold",
		year: 2001,
		cast: ["Meg Ryan", "Hugh Jackman", "Liev Schreiber", "Breckin Meyer"],
		genres: ["Comedy"]
	},{ 
		title: "Kill Me Later",
		year: 2001,
		cast: ["Selma Blair", "Max Beesley", "Brendan Fehr"],
		genres: ["Thriller"]
	},{ 
		title: "Kingdom Come",
		year: 2001,
		cast: ["LL Cool J", "Jada Pinkett Smith", "Vivica A. Fox", "Toni Braxton"],
		genres: ["Comedy"]
	},{ 
		title: "Kiss of the Dragon",
		year: 2001,
		cast: ["Jet Li", "Bridget Fonda", "Tchéky Karyo"],
		genres: ["Action"]
	},{ 
		title: "Kissing Jessica Stein",
		year: 2001,
		cast: ["Jennifer Westfeldt", "Heather Juergensen", "Scott Cohen", "Jackie Hoffman"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "A Knight's Tale",
		year: 2001,
		cast: ["Heath Ledger", "Rufus Sewell", "Paul Bettany", "Shannyn Sossamon", "Mark Addy"],
		genres: ["Comedy"]
	},{ 
		title: "Knockaround Guys",
		year: 2001,
		cast: ["Barry Pepper", "Seth Green", "Vin Diesel", "John Malkovich", "Dennis Hopper"],
		genres: ["Comedy"]
	},{ 
		title: "L.I.E.",
		year: 2001,
		cast: ["Brian Cox", "Paul Dano", "Billy Kay"],
		genres: ["Drama"]
	},{ 
		title: "Lara Croft: Tomb Raider",
		year: 2001,
		cast: ["Angelina Jolie", "Jon Voight", "Iain Glen"],
		genres: ["Action"]
	},{ 
		title: "The Last Castle",
		year: 2001,
		cast: ["Robert Redford", "James Gandolfini", "Mark Ruffalo"],
		genres: ["Drama"]
	},{ 
		title: "Laughter on the 23rd Floor",
		year: 2001,
		cast: ["Nathan Lane", "Victor Garber", "Peri Gilpin"],
		genres: ["Comedy"]
	},{ 
		title: "Legally Blonde",
		year: 2001,
		cast: ["Reese Witherspoon", "Luke Wilson", "Selma Blair", "Matthew Davis"],
		genres: ["Comedy"]
	},{ 
		title: "Life as a House",
		year: 2001,
		cast: ["Kevin Kline", "Kristin Scott Thomas", "Hayden Christensen", "Jena Malone", "Mary Steenburgen"],
		genres: ["Drama"]
	},{ 
		title: "Lloyd",
		year: 2001,
		cast: ["Todd Bosley", "Brendon Ryan Barret", "Mary Mara"],
		genres: ["Comedy"]
	},{ 
		title: "The Lord of the Rings: The Fellowship of the Ring",
		year: 2001,
		cast: ["Elijah Wood", "Ian McKellen", "Liv Tyler", "Sean Astin", "Viggo Mortensen", "Orlando Bloom", "Sean Bean", "Hugo Weaving", "Ian Holm"],
		genres: ["Fantasy"]
	},{ 
		title: "The Lost Skeleton of Cadavra",
		year: 2001,
		cast: ["Fay Masterson", "Andrew Parks", "Susan McConnell"],
		genres: ["Science Fiction"]
	},{ 
		title: "Lovely & Amazing",
		year: 2001,
		cast: ["Brenda Blethyn", "Catherine Keener", "Emily Mortimer"],
		genres: ["Comedy"]
	},{ 
		title: "The Majestic",
		year: 2001,
		cast: ["Jim Carrey", "Martin Landau", "James Whitmore"],
		genres: ["Drama"]
	},{ 
		title: "The Man Who Wasn't There",
		year: 2001,
		cast: ["Billy Bob Thornton", "Frances McDormand", "James Gandolfini"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Max Keeble's Big Move",
		year: 2001,
		cast: ["Alex D. Linz", "Josh Peck", "Zena Grey"],
		genres: ["Comedy"]
	},{ 
		title: "Megiddo: The Omega Code 2",
		year: 2001,
		cast: ["Michael York", "Michael Biehn", "Diane Venora"],
		genres: ["Fantasy"]
	},{ 
		title: "The Mexican",
		year: 2001,
		cast: ["Brad Pitt", "Julia Roberts", "James Gandolfini"],
		genres: ["Comedy"]
	},{ 
		title: "Mockingbird Don't Sing",
		year: 2001,
		cast: ["Tarra Steele", "Melissa Errico", "Sean Young", "Kim Darby"],
		genres: ["Drama"]
	},{ 
		title: "Monkeybone",
		year: 2001,
		cast: ["Brendan Fraser", "Bridget Fonda", "Chris Kattan"],
		genres: ["Fantasy"]
	},{ 
		title: "Monsoon Wedding",
		year: 2001,
		cast: ["Naseeruddin Shah", "Lillete Dubey", "Shefali Shah"],
		genres: ["Comedy"]
	},{ 
		title: "Monster's Ball",
		year: 2001,
		cast: ["Billy Bob Thornton", "Halle Berry", "Heath Ledger", "Peter Boyle"],
		genres: ["Drama"]
	},{ 
		title: "Monsters, Inc.",
		year: 2001,
		cast: ["John Goodman", "Billy Crystal", "Steve Buscemi", "James Coburn"],
		genres: ["Animated"]
	},{ 
		title: "A Month of Sundays",
		year: 2001,
		cast: ["Corina Marie", "Rod Steiger", "Michael Paré"],
		genres: ["Drama"]
	},{ 
		title: "Moulin Rouge!",
		year: 2001,
		cast: ["Nicole Kidman", "Ewan McGregor"],
		genres: ["Musical"]
	},{ 
		title: "Mulholland Drive",
		year: 2001,
		cast: ["Naomi Watts", "Laura Elena Harring", "Justin Theroux"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Mummy Returns",
		year: 2001,
		cast: ["Brendan Fraser", "Rachel Weisz", "John Hannah", "Oded Fehr", "Dwayne Johnson"],
		genres: ["Adventure"]
	},{ 
		title: "Murder on a Sunday Morning",
		year: 2001,
		cast: ["the", "Brenton Butler case"],
		genres: ["Documentary"]
	},{ 
		title: "The Musketeer",
		year: 2001,
		cast: ["Tim Roth", "Catherine Deneuve", "Mena Suvari", "Stephen Rea", "Justin Chambers"],
		genres: ["Adventure"]
	},{ 
		title: "My Big Break",
		year: 2001,
		cast: ["careers of", "Wes Bentley", "Tony Zierra", "Brad Rowe", "Chad Lindberg", "Greg Fawcett"],
		genres: ["Documentary"]
	},{ 
		title: "My Big Fat Greek Wedding",
		year: 2001,
		cast: ["Nia Vardalos", "John Corbett", "Michael Constantine"],
		genres: ["Comedy"]
	},{ 
		title: "My First Mister",
		year: 2001,
		cast: ["Albert Brooks", "Leelee Sobieski", "John Goodman"],
		genres: ["Drama"]
	},{ 
		title: "Not Another Teen Movie",
		year: 2001,
		cast: ["Chris Evans", "Jaime Pressly", "Chyler Leigh"],
		genres: ["Satire"]
	},{ 
		title: "Novocaine",
		year: 2001,
		cast: ["Steve Martin", "Helena Bonham Carter", "Laura Dern"],
		genres: ["Comedy"]
	},{ 
		title: "O",
		year: 2001,
		cast: ["Mekhi Phifer", "Josh Hartnett", "Julia Stiles"],
		genres: ["Drama"]
	},{ 
		title: "Ocean's Eleven",
		year: 2001,
		cast: ["George Clooney", "Matt Damon", "Brad Pitt", "Andy García", "Julia Roberts", "Don Cheadle", "Casey Affleck", "Elliott Gould", "Bernie Mac", "Carl Reiner", "Casey Affleck", "Scott Caan"],
		genres: ["Crime"]
	},{ 
		title: "On the Line",
		year: 2001,
		cast: ["Lance Bass", "Joey Fatone"],
		genres: ["Comedy"]
	},{ 
		title: "The One",
		year: 2001,
		cast: ["Jet Li", "Delroy Lindo", "Carla Gugino"],
		genres: ["Action"]
	},{ 
		title: "One Night at McCool's",
		year: 2001,
		cast: ["Liv Tyler", "Matt Dillon", "Michael Douglas", "Paul Reiser"],
		genres: ["Comedy"]
	},{ 
		title: "Original Sin",
		year: 2001,
		cast: ["Antonio Banderas", "Angelina Jolie", "Thomas Jane"],
		genres: ["Thriller"]
	},{ 
		title: "Osmosis Jones",
		year: 2001,
		cast: ["Bill Murray", "Chris Rock", "Laurence Fishburne"],
		genres: ["Fantasy"]
	},{ 
		title: "The Others",
		year: 2001,
		cast: ["Nicole Kidman", "Alakina Mann", "Christopher Eccleston"],
		genres: ["Science Fiction"]
	},{ 
		title: "Out Cold",
		year: 2001,
		cast: ["Jason London", "Lee Majors", "Zach Galifianakis"],
		genres: ["Comedy"]
	},{ 
		title: "Out of the Black",
		year: 2001,
		cast: ["Tyler Christopher", "Sally Kirkland", "Jason Widener"],
		genres: ["Drama"]
	},{ 
		title: "The Pact",
		year: 2001,
		cast: ["Rider Strong", "Adam Frost", "Lisa Zane", "John Heard"],
		genres: ["Thriller"]
	},{ 
		title: "Pearl Harbor",
		year: 2001,
		cast: ["Ben Affleck", "Josh Hartnett", "Kate Beckinsale", "Tom Sizemore", "Cuba Gooding Jr.", "Alec Baldwin", "Jon Voight"],
		genres: ["War"]
	},{ 
		title: "Perfume",
		year: 2001,
		cast: ["Estella Warren", "Jeff Goldblum", "Mariel Hemingway"],
		genres: ["Drama"]
	},{ 
		title: "Piñero",
		year: 2001,
		cast: ["Benjamin Bratt", "Talisa Soto", "Giancarlo Esposito"],
		genres: ["Biography"]
	},{ 
		title: "Planet of the Apes",
		year: 2001,
		cast: ["Mark Wahlberg", "Tim Roth", "Helena Bonham Carter", "Michael Clarke Duncan", "Estella Warren", "Kris Kristofferson"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Pledge",
		year: 2001,
		cast: ["Jack Nicholson", "Patricia Clarkson", "Benicio del Toro"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Pootie Tang",
		year: 2001,
		cast: ["Lance Crouther", "Wanda Sykes", "Chris Rock"],
		genres: ["Comedy"]
	},{ 
		title: "The Princess Diaries",
		year: 2001,
		cast: ["Julie Andrews", "Anne Hathaway", "Heather Matarazzo", "Héctor Elizondo", "Caroline Goodall", "Mandy Moore", "Erik von Detten"],
		genres: ["Comedy"]
	},{ 
		title: "Rat Race",
		year: 2001,
		cast: ["John Cleese", "Rowan Atkinson", "Cuba Gooding Jr.", "Seth Green", "Breckin Meyer", "Whoopi Goldberg", "Amy Smart"],
		genres: ["Comedy"]
	},{ 
		title: "Recess: School's Out",
		year: 2001,
		cast: ["Rickey D'Shon Collins", "Jason Davis", "Paul Willson"],
		genres: ["Animated"]
	},{ 
		title: "Revolution OS",
		year: 2001,
		cast: ["history of", "GNU", "Linux", "open source", "free software movement"],
		genres: ["Documentary"]
	},{ 
		title: "Riding in Cars with Boys",
		year: 2001,
		cast: ["Drew Barrymore", "Steve Zahn", "Brittany Murphy", "James Woods"],
		genres: ["Comedy"]
	},{ 
		title: "Rock Star",
		year: 2001,
		cast: ["Mark Wahlberg", "Jennifer Aniston"],
		genres: ["Drama"]
	},{ 
		title: "The Royal Tenenbaums",
		year: 2001,
		cast: ["Gene Hackman", "Anjelica Huston", "Gwyneth Paltrow", "Ben Stiller", "Luke Wilson", "Owen Wilson", "Danny Glover", "Bill Murray"],
		genres: ["Comedy"]
	},{ 
		title: "Rush Hour 2",
		year: 2001,
		cast: ["Jackie Chan", "Chris Tucker"],
		genres: ["Comedy"]
	},{ 
		title: "The Safety of Objects",
		year: 2001,
		cast: ["Glenn Close", "Dermot Mulroney", "Patricia Clarkson"],
		genres: ["Drama"]
	},{ 
		title: "Save the Last Dance",
		year: 2001,
		cast: ["Julia Stiles", "Sean Patrick Thomas", "Kerry Washington"],
		genres: ["Romance"]
	},{ 
		title: "Saving Silverman",
		year: 2001,
		cast: ["Jason Biggs", "Steve Zahn", "Jack Black", "Amanda Peet"],
		genres: ["Comedy"]
	},{ 
		title: "Say It Isn't So",
		year: 2001,
		cast: ["Chris Klein", "Heather Graham", "Orlando Jones"],
		genres: ["Comedy"]
	},{ 
		title: "Scary Movie 2",
		year: 2001,
		cast: ["Anna Faris", "Christopher Masterson", "Regina Hall", "Marlon Wayans", "Shawn Wayans", "Tori Spelling"],
		genres: ["Satire"]
	},{ 
		title: "The Score",
		year: 2001,
		cast: ["Robert De Niro", "Edward Norton", "Marlon Brando", "Angela Bassett"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Scotland, Pennsylvania",
		year: 2001,
		cast: ["Maura Tierney", "James LeGros", "Christopher Walken"],
		genres: ["Comedy"]
	},{ 
		title: "Scratch",
		year: 2001,
		cast: ["Hip hop music", "and", "disc jockeys"],
		genres: ["Documentary"]
	},{ 
		title: "See Spot Run",
		year: 2001,
		cast: ["David Arquette", "Michael Clarke Duncan", "Leslie Bibb"],
		genres: ["Comedy"]
	},{ 
		title: "Serendipity",
		year: 2001,
		cast: ["John Cusack", "Kate Beckinsale"],
		genres: ["Romance"]
	},{ 
		title: "Session 9",
		year: 2001,
		cast: ["David Caruso", "Peter Mullan", "Brendan Sexton III", "Stephen Gevedon", "Josh Lucas"],
		genres: ["Thriller"]
	},{ 
		title: "Shallow Hal",
		year: 2001,
		cast: ["Jack Black", "Gwyneth Paltrow", "Jason Alexander", "Joe Viterelli"],
		genres: ["Comedy"]
	},{ 
		title: "She Creature",
		year: 2001,
		cast: ["Rufus Sewell", "Carla Gugino", "Rya Kihlstedt"],
		genres: ["Fantasy"]
	},{ 
		title: "The Shipping News",
		year: 2001,
		cast: ["Kevin Spacey", "Julianne Moore", "Judi Dench", "Cate Blanchett"],
		genres: ["Drama"]
	},{ 
		title: "Shrek",
		year: 2001,
		cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow"],
		genres: ["Animated"]
	},{ 
		title: "The Shrink Is In",
		year: 2001,
		cast: ["Courteney Cox", "David Arquette"],
		genres: ["Comedy"]
	},{ 
		title: "Sidewalks of New York",
		year: 2001,
		cast: ["Edward Burns", "Rosario Dawson", "Dennis Farina", "Heather Graham", "David Krumholtz", "Brittany Murphy", "Stanley Tucci"],
		genres: ["Comedy"]
	},{ 
		title: "Someone Like You",
		year: 2001,
		cast: ["Ashley Judd", "Greg Kinnear", "Hugh Jackman", "Marisa Tomei"],
		genres: ["Comedy"]
	},{ 
		title: "Soul Survivors",
		year: 2001,
		cast: ["Melissa Sagemiller", "Casey Affleck", "Eliza Dushku"],
		genres: ["Thriller"]
	},{ 
		title: "Southern Comfort",
		year: 2001,
		cast: ["Robert Eads"],
		genres: ["Documentary"]
	},{ 
		title: "Southlander",
		year: 2001,
		cast: ["Rory Cochrane", "Beck", "Beth Orton"],
		genres: ["Drama"]
	},{ 
		title: "Spy Game",
		year: 2001,
		cast: ["Robert Redford", "Brad Pitt"],
		genres: ["Drama"]
	},{ 
		title: "Spy Kids",
		year: 2001,
		cast: ["Alexa Vega", "Daryl Sabara", "Antonio Banderas", "Carla Gugino", "Alan Cumming", "Danny Trejo", "Cheech Marin"],
		genres: ["Family"]
	},{ 
		title: "Storytelling",
		year: 2001,
		cast: ["Paul Giamatti", "Selma Blair", "John Goodman"],
		genres: ["Drama"]
	},{ 
		title: "Sugar & Spice",
		year: 2001,
		cast: ["Marla Sokoloff", "Marley Shelton", "Mena Suvari"],
		genres: ["Comedy"]
	},{ 
		title: "Summer Catch",
		year: 2001,
		cast: ["Freddie Prinze Jr.", "Jessica Biel", "Matthew Lillard"],
		genres: ["Comedy"]
	},{ 
		title: "Super Troopers",
		year: 2001,
		cast: ["Brian Cox", "Marisa Coughlan", "Daniel von Bargen"],
		genres: ["Comedy"]
	},{ 
		title: "Sweet November",
		year: 2001,
		cast: ["Keanu Reeves", "Charlize Theron"],
		genres: ["Romance"]
	},{ 
		title: "Swordfish",
		year: 2001,
		cast: ["Hugh Jackman", "John Travolta", "Halle Berry", "Don Cheadle"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Tailor of Panama",
		year: 2001,
		cast: ["Pierce Brosnan", "Geoffrey Rush", "Jamie Lee Curtis", "Brendan Gleeson", "Catherine McCormack", "Daniel Radcliffe"],
		genres: ["Drama"]
	},{ 
		title: "Tape",
		year: 2001,
		cast: ["Ethan Hawke", "Robert Sean Leonard", "Uma Thurman"],
		genres: ["Drama"]
	},{ 
		title: "Thirteen Conversations About One Thing",
		year: 2001,
		cast: ["Matthew McConaughey", "Alan Arkin", "Clea DuVall"],
		genres: ["Drama"]
	},{ 
		title: "Thirteen Ghosts",
		year: 2001,
		cast: ["Tony Shalhoub", "Embeth Davidtz", "F. Murray Abraham", "Shannon Elizabeth", "Matthew Lillard"],
		genres: ["Horror"]
	},{ 
		title: "To End All Wars",
		year: 2001,
		cast: ["Robert Carlyle", "Kiefer Sutherland", "Ciarán McMenamin"],
		genres: ["War"]
	},{ 
		title: "Tomcats",
		year: 2001,
		cast: ["Jerry O'Connell", "Shannon Elizabeth", "Jake Busey"],
		genres: ["Comedy"]
	},{ 
		title: "Tortilla Soup",
		year: 2001,
		cast: ["Jacqueline Obrados", "Tamara Mello", "Héctor Elizondo"],
		genres: ["Comedy"]
	},{ 
		title: "Town & Country",
		year: 2001,
		cast: ["Warren Beatty", "Diane Keaton", "Goldie Hawn", "Andie MacDowell", "Nastassja Kinski", "Charlton Heston"],
		genres: ["Comedy"]
	},{ 
		title: "Training Day",
		year: 2001,
		cast: ["Denzel Washington", "Ethan Hawke"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Two Can Play That Game",
		year: 2001,
		cast: ["Vivica A. Fox", "Morris Chestnut"],
		genres: ["Comedy"]
	},{ 
		title: "Uprising",
		year: 2001,
		cast: ["Leelee Sobieski", "Hank Azaria", "David Schwimmer", "Jon Voight"],
		genres: ["War", "Drama"]
	},{ 
		title: "Valentine",
		year: 2001,
		cast: ["Denise Richards", "David Boreanaz", "Marley Shelton", "Katherine Heigl"],
		genres: ["Horror"]
	},{ 
		title: "Vanilla Sky",
		year: 2001,
		cast: ["Tom Cruise", "Penélope Cruz", "Cameron Diaz", "Jason Lee", "Kurt Russell", "Noah Taylor"],
		genres: ["Thriller"]
	},{ 
		title: "Waking Life",
		year: 2001,
		cast: ["Ethan Hawke", "Julie Delpy", "Wiley Wiggins"],
		genres: ["Animated"]
	},{ 
		title: "The Wash",
		year: 2001,
		cast: ["Dr. Dre", "Snoop Dogg"],
		genres: ["Comedy"]
	},{ 
		title: "The Wedding Planner",
		year: 2001,
		cast: ["Jennifer Lopez", "Matthew McConaughey", "Bridgette Wilson"],
		genres: ["Comedy"]
	},{ 
		title: "West 47th Street",
		year: 2001,
		cast: ["living with a", "mental disorder"],
		genres: ["Documentary"]
	},{ 
		title: "Wet Hot American Summer",
		year: 2001,
		cast: ["Janeane Garofalo", "Paul Rudd", "Molly Shannon"],
		genres: ["Comedy"]
	},{ 
		title: "What's the Worst That Could Happen?",
		year: 2001,
		cast: ["Martin Lawrence", "Danny DeVito", "Bernie Mac"],
		genres: ["Comedy"]
	},{ 
		title: "When Strangers Appear",
		year: 2001,
		cast: ["Radha Mitchell", "Barry Watson", "Josh Lucas"],
		genres: ["Drama"]
	},{ 
		title: "The Zeros",
		year: 2001,
		cast: ["Rachel Wilson", "Jennifer Morrison", "Kyle Gass"],
		genres: ["Science Fiction"]
	},{ 
		title: "Zoolander",
		year: 2001,
		cast: ["Ben Stiller", "Owen Wilson", "Christine Taylor"],
		genres: ["Comedy"]
	},{ 
		title: "13 Moons",
		year: 2002,
		cast: ["Jennifer Beals", "Elizabeth Bracco", "Steve Buscemi"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "25th Hour",
		year: 2002,
		cast: ["Edward Norton", "Philip Seymour Hoffman", "Barry Pepper", "Rosario Dawson", "Anna Paquin", "Brian Cox"],
		genres: ["Drama"]
	},{ 
		title: "40 Days and 40 Nights",
		year: 2002,
		cast: ["Josh Hartnett", "Shannyn Sossamon", "Paulo Costanzo"],
		genres: ["Comedy"]
	},{ 
		title: "8 Mile",
		year: 2002,
		cast: ["Eminem", "Kim Basinger", "Brittany Murphy", "Mekhi Phifer", "Eugene Byrd", "Omar Benson Miller"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Abandon",
		year: 2002,
		cast: ["Katie Holmes", "Benjamin Bratt", "Zooey Deschanel"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "About a Boy",
		year: 2002,
		cast: ["Hugh Grant", "Nicholas Hoult", "Toni Collette"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "About Schmidt",
		year: 2002,
		cast: ["Jack Nicholson", "Kathy Bates", "Hope Davis", "Len Cariou", "Dermot Mulroney", "June Squibb"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Adaptation.",
		year: 2002,
		cast: ["Nicolas Cage", "Meryl Streep", "Chris Cooper"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Adventures of Pluto Nash",
		year: 2002,
		cast: ["Eddie Murphy", "Randy Quaid", "Rosario Dawson", "Joe Pantoliano", "Peter Boyle", "Pam Grier", "James Rebhorn", "Jay Mohr", "Burt Young", "John Cleese"],
		genres: ["Comedy", "Science Fiction"]
	},{ 
		title: "All About the Benjamins",
		year: 2002,
		cast: ["Ice Cube", "Mike Epps", "Eva Mendes"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Analyze That",
		year: 2002,
		cast: ["Robert De Niro", "Billy Crystal", "Lisa Kudrow"],
		genres: ["Comedy"]
	},{ 
		title: "Antwone Fisher",
		year: 2002,
		cast: ["Derek Luke", "Joy Bryant", "Denzel Washington", "Malcolm David Kelley"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Austin Powers in Goldmember",
		year: 2002,
		cast: ["Mike Myers", "Beyoncé Knowles", "Michael Caine"],
		genres: ["Comedy"]
	},{ 
		title: "Auto Focus",
		year: 2002,
		cast: ["Greg Kinnear", "Willem Dafoe", "Maria Bello", "Rita Wilson"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Avenging Angelo",
		year: 2002,
		cast: ["Sylvester Stallone", "Madeleine Stowe", "Anthony Quinn"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Baby Beethoven",
		year: 2002,
		cast: [],
		genres: ["Short"]
	},{ 
		title: "Baby Newton",
		year: 2002,
		cast: [],
		genres: ["Short"]
	},{ 
		title: "Back by Midnight",
		year: 2002,
		cast: ["Rodney Dangerfield", "Phil LaMarr", "Randy Quaid"],
		genres: ["Comedy"]
	},{ 
		title: "Bad Company",
		year: 2002,
		cast: ["Anthony Hopkins", "Chris Rock"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Ballistic: Ecks vs. Sever",
		year: 2002,
		cast: ["Antonio Banderas", "Lucy Liu", "Gregg Henry", "Ray Park", "Talisa Soto"],
		genres: ["Action"]
	},{ 
		title: "The Banger Sisters",
		year: 2002,
		cast: ["Goldie Hawn", "Susan Sarandon", "Geoffrey Rush"],
		genres: ["Comedy"]
	},{ 
		title: "Barbershop",
		year: 2002,
		cast: ["Ice Cube", "Cedric the Entertainer"],
		genres: ["Comedy"]
	},{ 
		title: "Below",
		year: 2002,
		cast: ["Bruce Greenwood", "Olivia Williams", "Matthew Davis"],
		genres: ["War", "Horror"]
	},{ 
		title: "Better Luck Tomorrow",
		year: 2002,
		cast: ["Parry Shen", "Jason Tobin", "Sung Kang"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Big Fat Liar",
		year: 2002,
		cast: ["Frankie Muniz", "Paul Giamatti", "Amanda Bynes"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Big Trouble",
		year: 2002,
		cast: ["Tim Allen", "Rene Russo", "Stanley Tucci", "Dennis Farina", "Jason Lee", "Tom Sizemore", "Omar Epps", "Zooey Deschanel", "Ben Foster", "Sofía Vergara"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Biggie & Tupac",
		year: 2002,
		cast: ["deaths of", "Biggie Smalls", "and", "Tupac Shakur"],
		genres: ["Documentary"]
	},{ 
		title: "Birthday Girl",
		year: 2002,
		cast: ["Nicole Kidman", "Ben Chaplin", "Vincent Cassel"],
		genres: ["Crime"]
	},{ 
		title: "Blade II",
		year: 2002,
		cast: ["Wesley Snipes", "Kris Kristofferson", "Ron Perlman"],
		genres: ["Action", "Horror"]
	},{ 
		title: "Blood Work",
		year: 2002,
		cast: ["Clint Eastwood", "Jeff Daniels", "Anjelica Huston", "Wanda De Jesus"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Blue Crush",
		year: 2002,
		cast: ["Kate Bosworth", "Michelle Rodriguez", "Matthew Davis"],
		genres: ["Romance"]
	},{ 
		title: "Book of Love",
		year: 2002,
		cast: ["Eric K. George", "Treach", "Richard T. Jones"],
		genres: ["Romance"]
	},{ 
		title: "The Bourne Identity",
		year: 2002,
		cast: ["Matt Damon", "Franka Potente", "Chris Cooper", "Clive Owen", "Brian Cox", "Julia Stiles"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Bowling for Columbine",
		year: 2002,
		cast: ["the", "Columbine High School massacre"],
		genres: ["Documentary"]
	},{ 
		title: "Brown Sugar",
		year: 2002,
		cast: ["Taye Diggs", "Sanaa Lathan", "Mos Def"],
		genres: ["Romance"]
	},{ 
		title: "Bubba Ho-tep",
		year: 2002,
		cast: ["Bruce Campbell", "Ossie Davis", "Ella Joyce"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "The Burial Society",
		year: 2002,
		cast: ["Rob LaBelle", "Jan Rubeš", "Allan Rich"],
		genres: ["Thriller"]
	},{ 
		title: "Buying the Cow",
		year: 2002,
		cast: ["Jerry O'Connell", "Bridgette Wilson", "Alyssa Milano"],
		genres: ["Comedy"]
	},{ 
		title: "Cabin Fever",
		year: 2002,
		cast: ["Rider Strong", "Jordan Ladd", "James DeBello"],
		genres: ["Horror"]
	},{ 
		title: "Carrie",
		year: 2002,
		cast: ["Angela Bettis", "Patricia Clarkson", "Rena Sofer"],
		genres: ["Horror"]
	},{ 
		title: "Catch Me If You Can",
		year: 2002,
		cast: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken", "Amy Adams", "Martin Sheen", "Nathalie Baye", "James Brolin"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Chance",
		year: 2002,
		cast: ["Amber Benson", "James Marsters", "Christine Estabrook", "Andy Hallett"],
		genres: ["Comedy"]
	},{ 
		title: "Changing Lanes",
		year: 2002,
		cast: ["Ben Affleck", "Samuel L. Jackson", "Toni Collette"],
		genres: ["Thriller"]
	},{ 
		title: "Chat Room",
		year: 2002,
		cast: ["Brian Hooks", "Christopher Richards"],
		genres: ["Comedy"]
	},{ 
		title: "Chelsea Walls",
		year: 2002,
		cast: ["Kris Kristofferson", "Uma Thurman"],
		genres: ["Drama"]
	},{ 
		title: "Chicago",
		year: 2002,
		cast: ["Renée Zellweger", "Catherine Zeta-Jones", "Richard Gere", "Queen Latifah", "John C. Reilly", "Taye Diggs"],
		genres: ["Musical"]
	},{ 
		title: "Ciao America\nCinderella 2 Dreams Come True The Movie",
		year: 2002,
		cast: ["Eddie Malavarca", "Maurizio Nichetti", "Violante Placido", "Giancarlo Giannini", "Paul Sorvino"],
		genres: ["Comedy"]
	},{ 
		title: "City by the Sea",
		year: 2002,
		cast: ["Robert De Niro", "James Franco", "Eliza Dushku", "Frances McDormand"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "City of Ghosts",
		year: 2002,
		cast: ["Matt Dillon", "James Caan", "Natascha McElhone"],
		genres: ["Drama"]
	},{ 
		title: "Civil Brand",
		year: 2002,
		cast: ["LisaRaye McCoy", "Lark Voorhies", "Mos Def"],
		genres: ["Action"]
	},{ 
		title: "Clockstoppers",
		year: 2002,
		cast: ["Jesse Bradford", "Paula Garcés", "French Stewart", "Michael Biehn", "Robin Thomas"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Cockettes",
		year: 2002,
		cast: ["the career of", "The Cockettes"],
		genres: ["Documentary"]
	},{ 
		title: "Collateral Damage",
		year: 2002,
		cast: ["Arnold Schwarzenegger", "Elias Koteas", "Francesca Neri", "Cliff Curtis", "John Leguizamo", "John Turturro"],
		genres: ["Action"]
	},{ 
		title: "The Crocodile Hunter: Collision Course",
		year: 2002,
		cast: ["Steve Irwin", "Terri Irwin", "Neil Fanning"],
		genres: ["Adventure"]
	},{ 
		title: "Comedian",
		year: 2002,
		cast: ["the", "stand-up comedy", "of", "Jerry Seinfeld"],
		genres: ["Documentary"]
	},{ 
		title: "Confessions of a Dangerous Mind",
		year: 2002,
		cast: ["Sam Rockwell", "Drew Barrymore", "George Clooney", "Julia Roberts"],
		genres: ["Biography"]
	},{ 
		title: "The Count of Monte Cristo",
		year: 2002,
		cast: ["James Caviezel", "Guy Pearce", "Dagmara Domińczyk", "Richard Harris"],
		genres: ["Adventure"]
	},{ 
		title: "The Country Bears",
		year: 2002,
		cast: ["Don Henley", "Haley Joel Osment", "Diedrich Bader", "Christopher Walken"],
		genres: ["Family"]
	},{ 
		title: "Crazy as Hell",
		year: 2002,
		cast: ["Eriq La Salle", "Michael Beach", "Ronny Cox", "Tia Texada"],
		genres: ["Horror"]
	},{ 
		title: "Crossroads",
		year: 2002,
		cast: ["Britney Spears", "Anson Mount", "Zoe Saldana", "Taryn Manning", "Kim Cattrall", "Dan Aykroyd"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Cypher",
		year: 2002,
		cast: ["Jeremy Northam", "Lucy Liu", "Nigel Bennett"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Dancer Upstairs",
		year: 2002,
		cast: ["Javier Bardem", "Juan Diego Botto", "Laura Morante"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Dangerous Lives of Altar Boys",
		year: 2002,
		cast: ["Emile Hirsch", "Kieran Culkin", "Jena Malone"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Dark Blue",
		year: 2002,
		cast: ["Kurt Russell", "Scott Speedman", "Michael Michele"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Darkness",
		year: 2002,
		cast: ["Anna Paquin", "Lena Olin", "Iain Glen"],
		genres: ["Horror"]
	},{ 
		title: "Daughter from Da Nang",
		year: 2002,
		cast: ["the life of a child from", "Operation Babylift"],
		genres: ["Documentary"]
	},{ 
		title: "Death to Smoochy",
		year: 2002,
		cast: ["Robin Williams", "Edward Norton", "Danny DeVito", "Catherine Keener", "Jon Stewart"],
		genres: ["Comedy"]
	},{ 
		title: "Demon Island",
		year: 2002,
		cast: ["Nicholas Brendon", "Jaime Pressly", "Eugene Byrd"],
		genres: ["Horror"]
	},{ 
		title: "Deuces Wild",
		year: 2002,
		cast: ["Stephen Dorff", "Brad Renfro", "Fairuza Balk"],
		genres: ["Action"]
	},{ 
		title: "Divine Secrets of the Ya-Ya Sisterhood",
		year: 2002,
		cast: ["Ellen Burstyn", "Sandra Bullock", "James Garner", "Ashley Judd", "Maggie Smith"],
		genres: ["Comedy"]
	},{ 
		title: "Dragonfly",
		year: 2002,
		cast: ["Kevin Costner", "Joe Morton", "Ron Rifkin", "Linda Hunt", "Kathy Bates"],
		genres: ["Drama"]
	},{ 
		title: "Drumline",
		year: 2002,
		cast: ["Nick Cannon", "Zoe Saldana", "Orlando Jones"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Easy Listening",
		year: 2002,
		cast: ["David Ian", "Traci Crouch", "Timothy Crow"],
		genres: ["Comedy"]
	},{ 
		title: "Eight Crazy Nights",
		year: 2002,
		cast: ["Adam Sandler", "Allen Covert", "Jack Giarraputo"],
		genres: ["Animated"]
	},{ 
		title: "Eight Legged Freaks",
		year: 2002,
		cast: ["David Arquette", "Kari Wührer", "Scarlett Johansson"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "The Emperor's Club",
		year: 2002,
		cast: ["Kevin Kline", "Emile Hirsch", "Embeth Davidtz", "Rob Morrow", "Harris Yulin", "Jesse Eisenberg"],
		genres: ["Drama"]
	},{ 
		title: "Empire",
		year: 2002,
		cast: ["John Leguizamo", "Peter Sarsgaard", "Denise Richards", "Delilah Cotto"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Enough",
		year: 2002,
		cast: ["Jennifer Lopez", "Billy Campbell", "Juliette Lewis", "Noah Wyle"],
		genres: ["Thriller"]
	},{ 
		title: "Equilibrium",
		year: 2002,
		cast: ["Christian Bale", "Taye Diggs", "Emily Watson", "Angus Macfadyen", "Sean Bean", "William Fichtner"],
		genres: ["Science Fiction"]
	},{ 
		title: "Evelyn",
		year: 2002,
		cast: ["Sophie Vavasseur", "Pierce Brosnan", "Aidan Quinn"],
		genres: ["Drama"]
	},{ 
		title: "Far from Heaven",
		year: 2002,
		cast: ["Julianne Moore", "Dennis Quaid", "Dennis Haysbert"],
		genres: ["Drama"]
	},{ 
		title: "FeardotCom",
		year: 2002,
		cast: ["Stephen Dorff", "Natascha McElhone", "Stephen Rea"],
		genres: ["Crime", "Horror"]
	},{ 
		title: "The First $20 Million Is Always the Hardest",
		year: 2002,
		cast: ["Adam Garcia", "Rosario Dawson", "Jake Busey"],
		genres: ["Comedy"]
	},{ 
		title: "Frida",
		year: 2002,
		cast: ["Salma Hayek", "Alfred Molina", "Geoffrey Rush"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Friday After Next",
		year: 2002,
		cast: ["Ice Cube", "Mike Epps", "John Witherspoon"],
		genres: ["Comedy"]
	},{ 
		title: "The Four Feathers",
		year: 2002,
		cast: ["Heath Ledger", "Wes Bentley", "Kate Hudson"],
		genres: ["Drama", "War"]
	},{ 
		title: "Full Frontal",
		year: 2002,
		cast: ["David Duchovny", "Nicky Katt", "Catherine Keener", "Julia Roberts", "Blair Underwood"],
		genres: ["Comedy"]
	},{ 
		title: "Gangs of New York",
		year: 2002,
		cast: ["Leonardo DiCaprio", "Daniel Day-Lewis", "Cameron Diaz", "Liam Neeson", "Henry Thomas", "Jim Broadbent", "Brendan Gleeson"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Ghost Ship",
		year: 2002,
		cast: ["Gabriel Byrne", "Julianna Margulies", "Desmond Harrington", "Isaiah Washington", "Karl Urban", "Emily Browning"],
		genres: ["Horror"]
	},{ 
		title: "The Good Girl",
		year: 2002,
		cast: ["Jennifer Aniston", "Jake Gyllenhaal", "John C. Reilly"],
		genres: ["Romance"]
	},{ 
		title: "Groom Lake",
		year: 2002,
		cast: ["William Shatner", "Dan Gauthier", "Amy Acker"],
		genres: ["Horror"]
	},{ 
		title: "The Guru",
		year: 2002,
		cast: ["Jimi Mistry", "Heather Graham", "Marisa Tomei"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "The Guys",
		year: 2002,
		cast: ["Sigourney Weaver", "Anthony LaPaglia", "Jim Simpson"],
		genres: ["Drama"]
	},{ 
		title: "Half Past Dead",
		year: 2002,
		cast: ["Steven Seagal", "Morris Chestnut", "Ja Rule"],
		genres: ["Action"]
	},{ 
		title: "Halloween: Resurrection",
		year: 2002,
		cast: ["Busta Rhymes", "Bianca Kajlich", "Thomas Ian Nicholas", "Tyra Banks", "Sean Patrick Thomas"],
		genres: ["Horror"]
	},{ 
		title: "Harry Potter and the Chamber of Secrets",
		year: 2002,
		cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Robbie Coltrane", "Alan Rickman", "Maggie Smith", "Richard Harris", "Kenneth Branagh"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Hart's War",
		year: 2002,
		cast: ["Bruce Willis", "Colin Farrell", "Terrence Howard"],
		genres: ["War"]
	},{ 
		title: "Hey Arnold!: The Movie",
		year: 2002,
		cast: ["Spencer Klein", "Francesca Smith", "Jamil Walker Smith"],
		genres: ["Animated"]
	},{ 
		title: "High Crimes",
		year: 2002,
		cast: ["Ashley Judd", "Morgan Freeman", "James Caviezel"],
		genres: ["Thriller"]
	},{ 
		title: "Highway",
		year: 2002,
		cast: ["Jared Leto", "Jake Gyllenhaal", "Selma Blair"],
		genres: ["Drama"]
	},{ 
		title: "Hollywood Ending",
		year: 2002,
		cast: ["Woody Allen", "George Hamilton", "Téa Leoni", "Debra Messing"],
		genres: ["Comedy"]
	},{ 
		title: "Home Room",
		year: 2002,
		cast: ["Erika Christensen", "Busy Philipps", "Victor Garber"],
		genres: ["Drama"]
	},{ 
		title: "The Hot Chick",
		year: 2002,
		cast: ["Rob Schneider", "Rachel McAdams", "Anna Faris"],
		genres: ["Comedy"]
	},{ 
		title: "The Hours",
		year: 2002,
		cast: ["Nicole Kidman", "Julianne Moore", "Meryl Streep", "Ed Harris"],
		genres: ["Drama"]
	},{ 
		title: "Hysterical Blindness",
		year: 2002,
		cast: ["Uma Thurman", "Juliette Lewis", "Gena Rowlands", "Ben Gazzara"],
		genres: ["Drama"]
	},{ 
		title: "I Spy",
		year: 2002,
		cast: ["Owen Wilson", "Eddie Murphy", "Famke Janssen", "Malcolm McDowell"],
		genres: ["Action"]
	},{ 
		title: "Ice Age",
		year: 2002,
		cast: ["Ray Romano", "John Leguizamo", "Denis Leary"],
		genres: ["Animated"]
	},{ 
		title: "Igby Goes Down",
		year: 2002,
		cast: ["Kieran Culkin", "Claire Danes", "Jeff Goldblum", "Susan Sarandon"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Impostor",
		year: 2002,
		cast: ["Gary Sinise", "Madeleine Stowe", "Mekhi Phifer", "Vincent D'Onofrio"],
		genres: ["Science Fiction"]
	},{ 
		title: "Interstate 60",
		year: 2002,
		cast: ["James Marsden", "Gary Oldman", "Amy Smart"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Insomnia",
		year: 2002,
		cast: ["Al Pacino", "Robin Williams", "Hilary Swank"],
		genres: ["Thriller"]
	},{ 
		title: "Jackass: The Movie",
		year: 2002,
		cast: ["Johnny Knoxville", "Bam Margera", "Chris Pontius", "Steve-O"],
		genres: []
	},{ 
		title: "Jason X",
		year: 2002,
		cast: ["Kane Hodder", "Lexa Doig", "Lisa Ryder"],
		genres: ["Horror"]
	},{ 
		title: "John Q",
		year: 2002,
		cast: ["Denzel Washington", "Robert Duvall", "James Woods", "Anne Heche", "Ray Liotta"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Jonah: A VeggieTales Movie",
		year: 2002,
		cast: ["Phil Vischer", "Mike Nawrocki", "Tim Hodge", "Lisa Vischer"],
		genres: ["Animated"]
	},{ 
		title: "Juwanna Mann",
		year: 2002,
		cast: ["Miguel A. Núñez Jr.", "Vivica A. Fox", "Harrison Finkea"],
		genres: ["Comedy"]
	},{ 
		title: "K-19: The Widowmaker",
		year: 2002,
		cast: ["Harrison Ford", "Liam Neeson"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "K-9: P.I.",
		year: 2002,
		cast: ["James Belushi"],
		genres: ["Comedy"]
	},{ 
		title: "The Kid Stays in the Picture",
		year: 2002,
		cast: ["the life of film producer", "Robert Evans"],
		genres: []
	},{ 
		title: "Killing Me Softly",
		year: 2002,
		cast: [],
		genres: ["Drama", "Mystery", "Romance"]
	},{ 
		title: "Kiss the Bride",
		year: 2002,
		cast: ["Amanda Detmer", "Sean Patrick Flanery", "Brooke Langton"],
		genres: ["Romance"]
	},{ 
		title: "Kung Pow! Enter the Fist",
		year: 2002,
		cast: ["Steve Oedekerk", "Jennifer Tung", "Lung Fei"],
		genres: ["Comedy"]
	},{ 
		title: "The Laramie Project",
		year: 2002,
		cast: ["Nestor Carbonell", "Christina Ricci", "Dylan Baker"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Last Call",
		year: 2002,
		cast: ["Jeremy Irons", "Neve Campbell", "Sissy Spacek"],
		genres: ["Drama"]
	},{ 
		title: "Laurel Canyon",
		year: 2002,
		cast: ["Frances McDormand", "Christian Bale", "Kate Beckinsalee"],
		genres: ["Drama"]
	},{ 
		title: "Life or Something Like It",
		year: 2002,
		cast: ["Angelina Jolie", "Edward Burns", "Tony Shalhoub", "Stockard Channing"],
		genres: ["Comedy"]
	},{ 
		title: "Like Mike",
		year: 2002,
		cast: ["Bow Wow", "Morris Chestnut", "Jonathan Lipnicki"],
		genres: ["Comedy"]
	},{ 
		title: "Lilo & Stitch",
		year: 2002,
		cast: ["Daveigh Chase", "Chris Sanders", "Tia Carrere"],
		genres: ["Animated"]
	},{ 
		title: "The Lord of the Rings: The Two Towers",
		year: 2002,
		cast: ["Elijah Wood", "Ian McKellen", "Liv Tyler", "Viggo Mortensen", "Sean Astin", "Orlando Bloom", "Christopher Lee", "Cate Blanchett"],
		genres: ["Adventure", "Fantasy"]
	},{ 
		title: "Maid in Manhattan",
		year: 2002,
		cast: ["Jennifer Lopez", "Ralph Fiennes", "Natasha Richardson"],
		genres: ["Romance"]
	},{ 
		title: "The Man from Elysian Fields",
		year: 2002,
		cast: ["Andy García", "Mick Jagger", "Olivia Williams", "James Coburn"],
		genres: ["Drama"]
	},{ 
		title: "The Master of Disguise",
		year: 2002,
		cast: ["Dana Carvey", "Jennifer Esposito", "Harold Gould"],
		genres: ["Comedy"]
	},{ 
		title: "Men in Black II",
		year: 2002,
		cast: ["Tommy Lee Jones", "Will Smith", "Rip Torn", "Lara Flynn Boyle", "Johnny Knoxville", "Rosario Dawson"],
		genres: ["Comedy", "Science Fiction"]
	},{ 
		title: "Minority Report",
		year: 2002,
		cast: ["Tom Cruise", "Colin Farrell", "Samantha Morton", "Max von Sydow"],
		genres: ["Science Fiction"]
	},{ 
		title: "Moonlight Mile",
		year: 2002,
		cast: ["Jake Gyllenhaal", "Dustin Hoffman", "Susan Sarandon"],
		genres: ["Romance"]
	},{ 
		title: "The Mothman Prophecies",
		year: 2002,
		cast: ["Richard Gere", "Laura Linney", "Debra Messing"],
		genres: ["Drama"]
	},{ 
		title: "Mr. Deeds",
		year: 2002,
		cast: ["Adam Sandler", "Winona Ryder", "John Turturro", "Peter Gallagher"],
		genres: ["Comedy"]
	},{ 
		title: "Murder by Numbers",
		year: 2002,
		cast: ["Sandra Bullock", "Ben Chaplin", "Ryan Gosling", "Michael Pitt"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "My Big Fat Greek Wedding",
		year: 2002,
		cast: ["Nia Vardalos", "John Corbett", "Michael Constantine", "Lainie Kazan", "Joey Fatone"],
		genres: ["Comedy"]
	},{ 
		title: "Narc",
		year: 2002,
		cast: ["Jason Patric", "Ray Liotta", "Chi McBride"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "National Lampoon's Van Wilder",
		year: 2002,
		cast: ["Ryan Reynolds", "Tara Reid", "Kal Penn"],
		genres: ["Comedy"]
	},{ 
		title: "New Best Friend",
		year: 2002,
		cast: ["Mia Kirshner", "Meredith Monroe", "Dominique Swain"],
		genres: ["Thriller"]
	},{ 
		title: "The New Guy",
		year: 2002,
		cast: ["DJ Qualls", "Eliza Dushku", "Zooey Deschanel"],
		genres: ["Comedy"]
	},{ 
		title: "Nicholas Nickleby",
		year: 2002,
		cast: ["Charlie Hunnam", "Christopher Plummer", "Jamie Bell", "Anne Hathaway"],
		genres: ["Drama"]
	},{ 
		title: "Night at the Golden Eagle",
		year: 2002,
		cast: ["Donnie Mantemarano", "Vinny Argiro", "Natasha Lyonne"],
		genres: ["Drama"]
	},{ 
		title: "On Line",
		year: 2002,
		cast: ["Josh Hamilton", "Harold Perrineau", "Vanessa Ferlito"],
		genres: ["Drama"]
	},{ 
		title: "One Hour Photo",
		year: 2002,
		cast: ["Robin Williams", "Connie Nielsen", "Michael Vartan"],
		genres: ["Thriller"]
	},{ 
		title: "Orange County",
		year: 2002,
		cast: ["Colin Hanks", "Jack Black", "Schuyler Fisk"],
		genres: ["Comedy"]
	},{ 
		title: "Paid in Full",
		year: 2002,
		cast: ["Wood Harris", "Regina Hall", "Kevin Carroll"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Panic Room",
		year: 2002,
		cast: ["Jodie Foster", "Kristen Stewart", "Forest Whitaker", "Jared Leto", "Dwight Yoakam"],
		genres: ["Thriller"]
	},{ 
		title: "Path to War",
		year: 2002,
		cast: ["Michael Gambon", "Alec Baldwin", "Donald Sutherland", "Felicity Huffman", "Tom Skerritt", "Frederic Forrest", "Diana Scarwid"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "Personal Velocity: Three Portraits",
		year: 2002,
		cast: ["Kyra Sedgwick", "Parker Posey", "Fairuza Balk"],
		genres: ["Drama"]
	},{ 
		title: "Pinocchio",
		year: 2002,
		cast: ["Roberto Benigni", "Nicoletta Braschi", "Kim Rossi Stuart"],
		genres: ["Family"]
	},{ 
		title: "Poolhall Junkies",
		year: 2002,
		cast: ["Mars Callahan", "Alison Eastwood", "Chazz Palminteri"],
		genres: ["Thriller"]
	},{ 
		title: "Possession",
		year: 2002,
		cast: ["Aaron Eckhart", "Gwyneth Paltrow", "Jeremy Northam", "Jennifer Ehle"],
		genres: ["Drama"]
	},{ 
		title: "The Powerpuff Girls Movie",
		year: 2002,
		cast: ["Cathy Cavadini", "Tara Strong", "E.G. Daily"],
		genres: ["Animated"]
	},{ 
		title: "Prisoner of Paradise",
		year: 2002,
		cast: ["the life of", "Kurt Gerron"],
		genres: ["Documentary"]
	},{ 
		title: "Pumpkin",
		year: 2002,
		cast: ["Christina Ricci", "Hank Harris", "Brenda Blethyn"],
		genres: ["Comedy"]
	},{ 
		title: "Punch-Drunk Love",
		year: 2002,
		cast: ["Adam Sandler", "Emily Watson", "Philip Seymour Hoffman", "Luis Guzmán"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Queen of the Damned",
		year: 2002,
		cast: ["Aaliyah", "Stuart Townsend", "Marguerite Moreau"],
		genres: ["Horror"]
	},{ 
		title: "The Quiet American",
		year: 2002,
		cast: ["Michael Caine", "Brendan Fraser"],
		genres: ["Drama"]
	},{ 
		title: "R.S.V.P.",
		year: 2002,
		cast: ["Rick Otto", "Lucas Babin", "Glenn Quinn"],
		genres: ["Comedy"]
	},{ 
		title: "Real Women Have Curves",
		year: 2002,
		cast: ["America Ferrera", "Lupe Ontiveros"],
		genres: ["Comedy"]
	},{ 
		title: "Red Dragon",
		year: 2002,
		cast: ["Edward Norton", "Anthony Hopkins", "Ralph Fiennes", "Emily Watson", "Harvey Keitel", "Philip Seymour Hoffman", "Mary-Louise Parker"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Reign of Fire",
		year: 2002,
		cast: ["Christian Bale", "Matthew McConaughey", "Izabella Scorupco", "Gerard Butler"],
		genres: ["Adventure"]
	},{ 
		title: "Return to Never Land",
		year: 2002,
		cast: ["Harriet Owen", "Blayne Weaver", "Corey Burton", "Jeff Bennett"],
		genres: ["Animated"]
	},{ 
		title: "The Ring",
		year: 2002,
		cast: ["Naomi Watts", "Daveigh Chase", "Martin Henderson"],
		genres: ["Horror"]
	},{ 
		title: "Ripley's Game",
		year: 2002,
		cast: ["John Malkovich", "Dougray Scott", "Ray Winstone"],
		genres: ["Thriller"]
	},{ 
		title: "Road to Perdition",
		year: 2002,
		cast: ["Tom Hanks", "Paul Newman", "Jude Law", "Daniel Craig", "Jennifer Jason Leigh", "Tyler Hoechlin", "Dylan Baker", "Stanley Tucci"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Roger Dodger",
		year: 2002,
		cast: ["Campbell Scott", "Jesse Eisenberg", "Isabella Rossellini"],
		genres: ["Comedy"]
	},{ 
		title: "Rollerball",
		year: 2002,
		cast: ["Chris Klein", "Jean Reno", "LL Cool J", "Rebecca Romijn", "Naveen Andrews"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Rookie",
		year: 2002,
		cast: ["Dennis Quaid", "Rachel Griffiths", "Jay Hernandez", "Brian Cox"],
		genres: ["Biography"]
	},{ 
		title: "The Rules of Attraction",
		year: 2002,
		cast: ["James Van Der Beek", "Shannyn Sossamon", "Ian Somerhalder"],
		genres: ["Comedy"]
	},{ 
		title: "S1m0ne",
		year: 2002,
		cast: ["Al Pacino", "Catherine Keener", "Rachel Roberts"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Salton Sea",
		year: 2002,
		cast: ["Val Kilmer", "Vincent D'Onofrio", "Peter Sarsgaard"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Santa Clause 2",
		year: 2002,
		cast: ["Tim Allen", "Elizabeth Mitchell", "David Krumholtz"],
		genres: ["Comedy"]
	},{ 
		title: "Scooby-Doo",
		year: 2002,
		cast: ["Sarah Michelle Gellar", "Freddie Prinze Jr.", "Matthew Lillard", "Linda Cardellini"],
		genres: ["Family"]
	},{ 
		title: "The Scorpion King",
		year: 2002,
		cast: ["Dwayne Johnson", "Steven Brand", "Kelly Hu", "Michael Clarke Duncan", "Peter Facinelli"],
		genres: ["Action"]
	},{ 
		title: "The Secret Lives of Dentists",
		year: 2002,
		cast: ["Campbell Scott", "Hope Davis", "Denis Leary"],
		genres: ["Drama"]
	},{ 
		title: "Secretary",
		year: 2002,
		cast: ["James Spader", "Maggie Gyllenhaal"],
		genres: ["Drama"]
	},{ 
		title: "Serving Sara",
		year: 2002,
		cast: ["Matthew Perry", "Elizabeth Hurley", "Bruce Campbell"],
		genres: ["Romance"]
	},{ 
		title: "Showboy",
		year: 2002,
		cast: ["Christian Taylor", "Lindy Heymann", "Joe Daly"],
		genres: ["Satire"]
	},{ 
		title: "Showtime",
		year: 2002,
		cast: ["Robert De Niro", "Eddie Murphy", "Rene Russo", "William Shatner"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "The Singles Ward",
		year: 2002,
		cast: ["Will Swenson", "Connie Young", "Daryn Tufts"],
		genres: ["Comedy"]
	},{ 
		title: "Signs",
		year: 2002,
		cast: ["Mel Gibson", "Joaquin Phoenix", "Rory Culkin", "Abigail Breslin"],
		genres: ["Science Fiction"]
	},{ 
		title: "Slackers",
		year: 2002,
		cast: ["Jason Schwartzman", "Devon Sawa", "Jason Segel"],
		genres: ["Comedy"]
	},{ 
		title: "Snow Dogs",
		year: 2002,
		cast: ["Cuba Gooding Jr.", "James Coburn", "Nichelle Nichols"],
		genres: ["Family"]
	},{ 
		title: "Solaris",
		year: 2002,
		cast: ["George Clooney", "Natascha McElhone", "Viola Davis"],
		genres: ["Science Fiction"]
	},{ 
		title: "Sorority Boys",
		year: 2002,
		cast: ["Barry Watson", "Michael Rosenbaum", "Harland Williams"],
		genres: ["Comedy"]
	},{ 
		title: "Spellbound",
		year: 2002,
		cast: ["the 1999", "Scripps National Spelling Bee"],
		genres: ["Documentary"]
	},{ 
		title: "Spider-Man",
		year: 2002,
		cast: ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco", "Cliff Robertson", "Rosemary Harris", "J. K. Simmons"],
		genres: ["Superhero"]
	},{ 
		title: "Spirit: Stallion of the Cimarron",
		year: 2002,
		cast: ["Matt Damon", "James Cromwell", "Daniel Studi"],
		genres: ["Animated"]
	},{ 
		title: "Spun",
		year: 2002,
		cast: ["Jason Schwartzman", "Brittany Murphy", "Mickey Rourke"],
		genres: ["Comedy"]
	},{ 
		title: "Spy Kids 2: The Island of Lost Dreams",
		year: 2002,
		cast: ["Alexa Vega", "Emily Osment", "Daryl Sabara", "Antonio Banderas"],
		genres: ["Action"]
	},{ 
		title: "Star Wars: Episode II – Attack of the Clones",
		year: 2002,
		cast: ["Ewan McGregor", "Natalie Portman", "Hayden Christensen"],
		genres: ["Science Fiction"]
	},{ 
		title: "Star Trek Nemesis",
		year: 2002,
		cast: ["Patrick Stewart", "Jonathan Frakes", "Brent Spiner", "LeVar Burton", "Michael Dorn", "Gates McFadden", "Marina Sirtis", "Tom Hardy"],
		genres: ["Science Fiction"]
	},{ 
		title: "State Property",
		year: 2002,
		cast: ["Beanie Sigel", "Jay-Z", "Damon Dash"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Stealing Harvard",
		year: 2002,
		cast: ["Jason Lee", "Tom Green", "Leslie Mann", "Megan Mullally", "Tammy Blanchard"],
		genres: ["Comedy"]
	},{ 
		title: "Stevie",
		year: 2002,
		cast: ["the long-term relationships of", "Big Brothers Big Sisters of America"],
		genres: ["Documentary"]
	},{ 
		title: "Stolen Summer",
		year: 2002,
		cast: ["Adiel Stein", "Aidan Quinn", "Bonnie Hunt"],
		genres: ["Drama"]
	},{ 
		title: "Stuart Little 2",
		year: 2002,
		cast: ["Geena Davis", "Hugh Laurie", "Jonathan Lipnicki", "Michael J. Fox", "Melanie Griffith", "Nathan Lane", "James Woods", "Steve Zahn"],
		genres: ["Family"]
	},{ 
		title: "The Sum of All Fears",
		year: 2002,
		cast: ["Ben Affleck", "Morgan Freeman", "James Cromwell"],
		genres: ["Thriller"]
	},{ 
		title: "Sunshine State",
		year: 2002,
		cast: ["Angela Bassett", "Edie Falco"],
		genres: ["Drama"]
	},{ 
		title: "The Sweetest Thing",
		year: 2002,
		cast: ["Cameron Diaz", "Christina Applegate", "Selma Blair"],
		genres: ["Comedy"]
	},{ 
		title: "Sweet Home Alabama",
		year: 2002,
		cast: ["Reese Witherspoon", "Josh Lucas", "Patrick Dempsey", "Candice Bergen"],
		genres: ["Comedy"]
	},{ 
		title: "Swept Away",
		year: 2002,
		cast: ["Madonna", "Adriano Giannini", "Bruce Greenwood", "Jeanne Tripplehorn"],
		genres: ["Adventure"]
	},{ 
		title: "Swimfan",
		year: 2002,
		cast: ["Jesse Bradford", "Erika Christensen", "Shiri Appleby"],
		genres: ["Thriller"]
	},{ 
		title: "Tadpole",
		year: 2002,
		cast: ["Aaron Stanford", "Bebe Neuwirth", "Sigourney Weaver", "John Ritter"],
		genres: ["Comedy"]
	},{ 
		title: "They",
		year: 2002,
		cast: ["Laura Regan", "Marc Blucas", "Ethan Embry"],
		genres: ["Horror"]
	},{ 
		title: "Time Changer",
		year: 2002,
		cast: ["D. David Morin", "Gavin MacLeod"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Time Machine",
		year: 2002,
		cast: ["Guy Pearce", "Samantha Mumba", "Jeremy Irons", "Mark Addy"],
		genres: ["Science Fiction"]
	},{ 
		title: "Timequest",
		year: 2002,
		cast: ["Victor Slezak", "Caprice Benedetti", "Bruce Campbell"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Transporter",
		year: 2002,
		cast: ["Jason Statham", "Shu Qi", "Matt Schulze"],
		genres: ["Action"]
	},{ 
		title: "Trapped",
		year: 2002,
		cast: ["Charlize Theron", "Courtney Love", "Stuart Townsend", "Kevin Bacon", "Dakota Fanning"],
		genres: ["Crime"]
	},{ 
		title: "Treasure Planet",
		year: 2002,
		cast: ["Joseph Gordon-Levitt", "Brian Murray", "David Hyde Pierce"],
		genres: ["Animated"]
	},{ 
		title: "The Trials of Henry Kissinger",
		year: 2002,
		cast: ["the alleged war crimes of", "Henry Kissinger"],
		genres: ["Documentary"]
	},{ 
		title: "The Truth About Charlie",
		year: 2002,
		cast: ["Mark Wahlberg", "Thandie Newton", "Tim Robbins"],
		genres: ["Thriller"]
	},{ 
		title: "Tuck Everlasting",
		year: 2002,
		cast: ["Alexis Bledel", "Jonathan Jackson", "William Hurt", "Sissy Spacek"],
		genres: ["Drama"]
	},{ 
		title: "The Tuxedo",
		year: 2002,
		cast: ["Jackie Chan", "Jennifer Love Hewitt", "Jason Isaacs"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Two Weeks Notice",
		year: 2002,
		cast: ["Sandra Bullock", "Hugh Grant"],
		genres: ["Comedy"]
	},{ 
		title: "Undercover Brother",
		year: 2002,
		cast: ["Eddie Griffin", "Chris Kattan", "Dave Chappelle"],
		genres: ["Action"]
	},{ 
		title: "Undisputed",
		year: 2002,
		cast: ["Wesley Snipes", "Ving Rhames", "Peter Falk"],
		genres: ["Drama"]
	},{ 
		title: "Unfaithful",
		year: 2002,
		cast: ["Diane Lane", "Richard Gere", "Olivier Martinez"],
		genres: ["Thriller"]
	},{ 
		title: "Waking Up in Reno",
		year: 2002,
		cast: ["Natasha Richardson", "Billy Bob Thornton", "Charlize Theron", "Patrick Swayze"],
		genres: ["Comedy"]
	},{ 
		title: "A Walk to Remember",
		year: 2002,
		cast: ["Shane West", "Mandy Moore", "Peter Coyote", "Daryl Hannah"],
		genres: ["Romance"]
	},{ 
		title: "We Were Soldiers",
		year: 2002,
		cast: ["Mel Gibson", "Sam Elliott", "Madeleine Stowe"],
		genres: ["War"]
	},{ 
		title: "Welcome to Collinwood",
		year: 2002,
		cast: ["William H. Macy", "Isaiah Washington", "Michael Jeter"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "White Oleander",
		year: 2002,
		cast: ["Alison Lohman", "Michelle Pfeiffer", "Robin Wright", "Renée Zellweger"],
		genres: ["Drama"]
	},{ 
		title: "The Wild Thornberrys Movie",
		year: 2002,
		cast: ["Lacey Chabert", "Tom Kane", "Tim Curry", "Ice-T"],
		genres: ["Animated"]
	},{ 
		title: "Windtalkers",
		year: 2002,
		cast: ["Nicolas Cage", "Christian Slater", "Adam Beach"],
		genres: ["War"]
	},{ 
		title: "xXx",
		year: 2002,
		cast: ["Vin Diesel", "Asia Argento", "Marton Csokas"],
		genres: ["Action"]
	},{ 
		title: "Zig Zag",
		year: 2002,
		cast: ["John Leguizamo", "Wesley Snipes", "Oliver Platt"],
		genres: ["Drama"]
	},{ 
		title: "11:14",
		year: 2003,
		cast: ["Henry Thomas", "Blake Heron", "Barbara Hershey", "Clark Gregg"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "101 Dalmatians II: Patch's London Adventure",
		year: 2003,
		cast: ["Barry Bostwick", "Jason Alexander", "Martin Short"],
		genres: ["Animated"]
	},{ 
		title: "2 Fast 2 Furious",
		year: 2003,
		cast: ["Paul Walker", "Tyrese Gibson", "Eva Mendes", "Ludacris", "Cole Hauser", "James Remar", "Devon Aoki"],
		genres: ["Action", "Crime"]
	},{ 
		title: "21 Grams",
		year: 2003,
		cast: ["Sean Penn", "Naomi Watts", "Benicio del Toro"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "44 Minutes: The North Hollywood Shoot-Out",
		year: 2003,
		cast: ["Michael Madsen", "Ron Livingston"],
		genres: ["Action"]
	},{ 
		title: "Abby Singer",
		year: 2003,
		cast: ["Clint J. Palmer", "Ryan Williams", "Wendy Buss"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Afro-Punk",
		year: 2003,
		cast: ["race identity within", "punk subculture"],
		genres: ["Documentary"]
	},{ 
		title: "Agent Cody Banks",
		year: 2003,
		cast: ["Frankie Muniz", "Hilary Duff"],
		genres: ["Action", "Family"]
	},{ 
		title: "Aileen: Life and Death of a Serial Killer",
		year: 2003,
		cast: ["the life of", "Aileen Wuornos"],
		genres: ["Documentary"]
	},{ 
		title: "Alex & Emma",
		year: 2003,
		cast: ["Kate Hudson", "Luke Wilson", "Sophie Marceau"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Alien Hunter",
		year: 2003,
		cast: ["James Spader"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "All the Real Girls",
		year: 2003,
		cast: ["Paul Schneider", "Zooey Deschanel", "Shea Whigham"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Amandla!: A Revolution in Four-Part Harmony",
		year: 2003,
		cast: ["the use of music against", "South Africa under apartheid"],
		genres: ["Documentary"]
	},{ 
		title: "American Splendor",
		year: 2003,
		cast: ["Paul Giamatti", "Hope Davis"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "American Wedding",
		year: 2003,
		cast: ["Jason Biggs", "Seann William Scott", "Alyson Hannigan", "Eugene Levy", "Fred Willard", "January Jones"],
		genres: ["Comedy"]
	},{ 
		title: "Anger Management",
		year: 2003,
		cast: ["Adam Sandler", "Jack Nicholson", "Marisa Tomei", "Luis Guzmán", "Woody Harrelson", "John Turturro"],
		genres: ["Comedy"]
	},{ 
		title: "Anne B. Real",
		year: 2003,
		cast: ["David Zayas", "Carlos Leon"],
		genres: ["Drama"]
	},{ 
		title: "Anything Else",
		year: 2003,
		cast: ["Jason Biggs", "Christina Ricci", "Stockard Channing", "Danny DeVito", "Jimmy Fallon", "Woody Allen"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "BAADASSSSS!",
		year: 2003,
		cast: ["Mario Van Peebles", "Adam West"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Bad Boys II",
		year: 2003,
		cast: ["Martin Lawrence", "Will Smith"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Bad Santa",
		year: 2003,
		cast: ["Billy Bob Thornton", "Bernie Mac", "Lauren Graham"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Basic",
		year: 2003,
		cast: ["John Travolta", "Connie Nielsen", "Samuel L. Jackson"],
		genres: ["Thriller"]
	},{ 
		title: "The Battle of Shaker Heights",
		year: 2003,
		cast: ["Shia La Beouf", "Elden Henson", "Amy Smart"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Bells of Innocence",
		year: 2003,
		cast: ["Mike Norris", "Marshall R. Teague", "Chuck Norris"],
		genres: ["Horror"]
	},{ 
		title: "The Best Two Years",
		year: 2003,
		cast: ["K.C. Clyde", "Kirby Heyborne", "David Nibley"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Beyond Borders",
		year: 2003,
		cast: ["Angelina Jolie", "Clive Owen"],
		genres: ["Romance", "War"]
	},{ 
		title: "Big Fish",
		year: 2003,
		cast: ["Ewan McGregor", "Albert Finney", "Billy Crudup", "Danny DeVito", "Alison Lohman", "Jessica Lange"],
		genres: ["Comedy", "Drama", "Fantasy"]
	},{ 
		title: "Biker Boyz",
		year: 2003,
		cast: ["Laurence Fishburne", "Djimon Hounsou", "Derek Luke"],
		genres: ["Action"]
	},{ 
		title: "Black Cadillac",
		year: 2003,
		cast: ["Randy Quaid", "Shane Johnson", "Josh Hammond"],
		genres: ["Horror"]
	},{ 
		title: "Blind Horizon",
		year: 2003,
		cast: ["Val Kilmer", "Neve Campbell", "Sam Shepard"],
		genres: ["Drama"]
	},{ 
		title: "Blizzard",
		year: 2003,
		cast: ["Brenda Blethyn", "Christopher Plummer", "Kevin Pollak"],
		genres: ["Family"]
	},{ 
		title: "Boat Trip",
		year: 2003,
		cast: ["Cuba Gooding, Jr.", "Horatio Sanz", "Vivica A. Fox", "Roselyn Sánchez", "Victoria Silvstedt", "Roger Moore"],
		genres: ["Comedy"]
	},{ 
		title: "Bringing Down the House",
		year: 2003,
		cast: ["Steve Martin", "Queen Latifah", "Eugene Levy"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Bringing Rain",
		year: 2003,
		cast: ["Adrian Grenier", "Niesha Butler"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Brother Bear",
		year: 2003,
		cast: ["Joaquin Phoenix", "Jeremy Suarez", "Rick Moranis"],
		genres: ["Animated", "Family"]
	},{ 
		title: "The Brown Bunny",
		year: 2003,
		cast: ["Vincent Gallo", "Chloë Sevigny"],
		genres: ["Drama"]
	},{ 
		title: "Bruce Almighty",
		year: 2003,
		cast: ["Jim Carrey", "Morgan Freeman", "Jennifer Aniston", "Steve Carell"],
		genres: ["Comedy", "Fantasy"]
	},{ 
		title: "Bulletproof Monk",
		year: 2003,
		cast: ["Chow Yun-fat", "Seann William Scott", "Jaime King"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Camp",
		year: 2003,
		cast: ["Daniel Letterle", "Joanna Chilcoat", "Robin de Jesus"],
		genres: ["Comedy", "Musical"]
	},{ 
		title: "Carolina",
		year: 2003,
		cast: ["Julia Stiles", "Shirley MacLaine", "Alessandro Nivola"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Casa de los Babys",
		year: 2003,
		cast: ["Marcia Gay Harden", "Maggie Gyllenhaal", "Daryl Hannah"],
		genres: ["Drama"]
	},{ 
		title: "The Cat in the Hat",
		year: 2003,
		cast: ["Mike Myers", "Alec Baldwin", "Dakota Fanning", "Spencer Breslin", "Kelly Preston", "Sean Hayes"],
		genres: ["Family"]
	},{ 
		title: "Charlie's Angels: Full Throttle",
		year: 2003,
		cast: ["Cameron Diaz", "Drew Barrymore", "Lucy Liu", "Bernie Mac", "Demi Moore"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Chasing Papi",
		year: 2003,
		cast: ["Roselyn Sánchez", "Sofía Vergara", "Jaci Velasquez", "Eduardo Verástegui"],
		genres: ["Comedy"]
	},{ 
		title: "Cheaper by the Dozen",
		year: 2003,
		cast: ["Steve Martin", "Bonnie Hunt", "Hilary Duff", "Tom Welling", "Piper Perabo", "Ashton Kutcher"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Christmas Child",
		year: 2003,
		cast: ["William R. Moses", "Steven Curtis Chapman", "Megan Follows"],
		genres: ["Drama"]
	},{ 
		title: "Coffee and Cigarettes",
		year: 2003,
		cast: ["Roberto Benigni", "Steven Wright", "Joie Lee"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Cold Creek Manor",
		year: 2003,
		cast: ["Dennis Quaid", "Sharon Stone", "Stephen Dorff", "Juliette Lewis"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Cold Mountain",
		year: 2003,
		cast: ["Jude Law", "Nicole Kidman", "Renée Zellweger"],
		genres: ["Romance", "War"]
	},{ 
		title: "Comandante",
		year: 2003,
		cast: ["the politics of", "Fidel Castro"],
		genres: ["Documentary"]
	},{ 
		title: "The Company",
		year: 2003,
		cast: ["Neve Campbell", "Malcolm McDowell", "James Franco"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Confidence",
		year: 2003,
		cast: ["Edward Burns", "Rachel Weisz", "Dustin Hoffman", "Andy García", "Paul Giamatti", "Robert Forster"],
		genres: ["Crime"]
	},{ 
		title: "The Cooler",
		year: 2003,
		cast: ["William H. Macy", "Maria Bello", "Alec Baldwin"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "The Core",
		year: 2003,
		cast: ["Aaron Eckhart", "Hilary Swank", "Delroy Lindo", "Stanley Tucci", "Tchéky Karyo", "Bruce Greenwood", "DJ Qualls", "Richard Jenkins", "Alfre Woodard"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Cosmopolitan",
		year: 2003,
		cast: ["Roshan Seth", "Carol Kane", "Madhur Jaffrey", "Purva Bedi"],
		genres: ["Comedy", "Drama", "Romance"]
	},{ 
		title: "Cradle 2 the Grave",
		year: 2003,
		cast: ["Jet Li", "DMX", "Kelly Hu", "Anthony Anderson", "Tom Arnold", "Mark Dacascos", "Gabrielle Union"],
		genres: ["Action"]
	},{ 
		title: "Crime Spree",
		year: 2003,
		cast: ["Gérard Depardieu", "Harvey Keitel", "Johnny Hallyday"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Daddy Day Care",
		year: 2003,
		cast: ["Eddie Murphy", "Jeff Garlin", "Steve Zahn", "Regina King", "Anjelica Huston"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Daredevil",
		year: 2003,
		cast: ["Ben Affleck", "Jennifer Garner", "Michael Clarke Duncan", "Colin Farrell", "Jon Favreau", "Joe Pantoliano", "David Keith"],
		genres: ["Superhero"]
	},{ 
		title: "Dark Blue",
		year: 2003,
		cast: ["Kurt Russell", "Scott Speedman", "Michael Michele", "Brendan Gleeson", "Ving Rhames", "Kurupt"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Darkness Falls",
		year: 2003,
		cast: ["Chaney Kley", "Emma Caulfield", "Lee Cormie"],
		genres: ["Horror"]
	},{ 
		title: "Deliver Us from Eva",
		year: 2003,
		cast: ["LL Cool J", "Gabrielle Union"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Devil's Pond",
		year: 2003,
		cast: ["Tara Reid", "Kip Pardue"],
		genres: ["Drama"]
	},{ 
		title: "Dickie Roberts: Former Child Star",
		year: 2003,
		cast: ["David Spade", "Mary McCormack"],
		genres: ["Comedy"]
	},{ 
		title: "Le Divorce",
		year: 2003,
		cast: ["Kate Hudson", "Naomi Watts"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Down with Love",
		year: 2003,
		cast: ["Ewan McGregor", "Renée Zellweger", "David Hyde Pierce"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Dreamcatcher",
		year: 2003,
		cast: ["Morgan Freeman", "Thomas Jane", "Jason Lee", "Damian Lewis", "Timothy Olyphant", "Tom Sizemore", "Donnie Wahlberg"],
		genres: ["Horror", "Science Fiction"]
	},{ 
		title: "Dumb and Dumberer: When Harry Met Lloyd",
		year: 2003,
		cast: ["Derek Richardson", "Eric Christian Olsen", "Eugene Levy"],
		genres: ["Comedy"]
	},{ 
		title: "Duplex",
		year: 2003,
		cast: ["Ben Stiller", "Drew Barrymore", "Eileen Essell", "Harvey Fierstein"],
		genres: ["Comedy"]
	},{ 
		title: "Dysfunktional Family",
		year: 2003,
		cast: ["Eddie Griffin"],
		genres: ["Performance"]
	},{ 
		title: "Elephant",
		year: 2003,
		cast: ["Alex Frost", "Eric Deulen", "John Robinson"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Elf",
		year: 2003,
		cast: ["Will Ferrell", "James Caan", "Zooey Deschanel", "Mary Steenburgen", "Bob Newhart", "Ed Asner"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Evil Alien Conquerors",
		year: 2003,
		cast: ["Diedrich Bader", "Chris Parnell"],
		genres: ["Science Fiction", "Comedy"]
	},{ 
		title: "Faster",
		year: 2003,
		cast: ["the", "motorcycle racing", "world championship", "MotoGP"],
		genres: ["Documentary"]
	},{ 
		title: "Festival Express",
		year: 2003,
		cast: ["the Trans Continental Pop Festival"],
		genres: ["Musical", "Documentary"]
	},{ 
		title: "The Fighting Temptations",
		year: 2003,
		cast: ["Cuba Gooding, Jr.", "Beyoncé Knowles"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "Final Destination 2",
		year: 2003,
		cast: ["Ali Larter", "A. J. Cook", "Michael Landes", "Tony Todd"],
		genres: ["Horror"]
	},{ 
		title: "Finding Nemo",
		year: 2003,
		cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Flywheel",
		year: 2003,
		cast: ["Lisa Arnold", "Alex Kendrick", "Tracy Goode"],
		genres: ["Drama"]
	},{ 
		title: "The Fog of War",
		year: 2003,
		cast: ["life and times of", "Robert McNamara"],
		genres: ["Documentary"]
	},{ 
		title: "Freaky Friday",
		year: 2003,
		cast: ["Lindsay Lohan", "Jamie Lee Curtis", "Chad Michael Murray", "Mark Harmon"],
		genres: ["Family"]
	},{ 
		title: "Freddy vs. Jason",
		year: 2003,
		cast: ["Robert Englund", "Ken Kirzinger", "Monica Keena", "Jason Ritter"],
		genres: ["Horror"]
	},{ 
		title: "From Justin to Kelly",
		year: 2003,
		cast: ["Justin Guarini", "Kelly Clarkson"],
		genres: ["Comedy", "Musical"]
	},{ 
		title: "Gang of Roses",
		year: 2003,
		cast: ["Lil' Kim", "LisaRaye McCoy", "Marie Matiko"],
		genres: ["Drama", "Western"]
	},{ 
		title: "Gigli",
		year: 2003,
		cast: ["Ben Affleck", "Jennifer Lopez", "Al Pacino", "Justin Bartha", "Christopher Walken", "Lainie Kazan", "Lenny Venito", "Missy Crider"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Gods and Generals",
		year: 2003,
		cast: ["Jeff Daniels", "Stephen Lang", "Robert Duvall"],
		genres: ["Drama", "War"]
	},{ 
		title: "Good Boy!",
		year: 2003,
		cast: ["Liam Aiken", "Molly Shannon", "Kevin Nealon", "Matthew Broderick"],
		genres: ["Comedy"]
	},{ 
		title: "Gothika",
		year: 2003,
		cast: ["Halle Berry", "Robert Downey, Jr.", "Penélope Cruz", "Charles S. Dutton"],
		genres: ["Horror"]
	},{ 
		title: "Grand Theft Parsons",
		year: 2003,
		cast: ["Johnny Knoxville", "Michael Shannon", "Christina Applegate"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Grind",
		year: 2003,
		cast: ["Mike Vogel", "Adam Brody", "Vince Vieluf", "Joey Kern"],
		genres: ["Comedy", "Sports"]
	},{ 
		title: "A Guy Thing",
		year: 2003,
		cast: ["Jason Lee", "Julia Stiles", "Selma Blair"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Haunted Mansion",
		year: 2003,
		cast: ["Eddie Murphy"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Head of State",
		year: 2003,
		cast: ["Chris Rock", "Bernie Mac", "Tracy Morgan"],
		genres: ["Comedy"]
	},{ 
		title: "Hey DJ",
		year: 2003,
		cast: ["Charlotte Lewis", "Tina Wiseman", "Terry Camilleri", "Jon Jacobs"],
		genres: ["Comedy"]
	},{ 
		title: "Holes",
		year: 2003,
		cast: ["Shia LaBeouf", "Jon Voight", "Sigourney Weaver", "Tim Blake Nelson", "Patricia Arquette", "Henry Winkler"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Hollywood Homicide",
		year: 2003,
		cast: ["Harrison Ford", "Josh Hartnett", "Lena Olin", "Bruce Greenwood", "Lolita Davidovich", "Dwight Yoakam", "Master P", "Martin Landau"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Honey",
		year: 2003,
		cast: ["Jessica Alba", "Mekhi Phifer", "Lil' Romeo"],
		genres: ["Musical", "Romance"]
	},{ 
		title: "Hope Springs",
		year: 2003,
		cast: ["Colin Firth", "Heather Graham", "Minnie Driver"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "House of 1000 Corpses",
		year: 2003,
		cast: ["Sid Haig", "Bill Moseley", "Erin Daniels"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "House of Sand and Fog",
		year: 2003,
		cast: ["Jennifer Connelly", "Ben Kingsley", "Shohreh Agdashloo"],
		genres: ["Drama"]
	},{ 
		title: "House of the Dead",
		year: 2003,
		cast: ["Jonathan Cherry", "Ona Grauer", "Tyron Leitso", "Jürgen Prochnow", "Ellie Cornell", "Clint Howard", "Enuka Okuma", "Will Sanderson", "Kira Clavell", "Michael Eklund"],
		genres: ["Horror"]
	},{ 
		title: "How to Deal",
		year: 2003,
		cast: ["Mandy Moore", "Allison Janney", "Trent Ford"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "How to Lose a Guy in 10 Days",
		year: 2003,
		cast: ["Kate Hudson", "Matthew McConaughey"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Hulk",
		year: 2003,
		cast: ["Eric Bana", "Jennifer Connelly", "Nick Nolte", "Sam Elliott", "Josh Lucas"],
		genres: ["Superhero", "Action"]
	},{ 
		title: "The Human Stain",
		year: 2003,
		cast: ["Anthony Hopkins", "Nicole Kidman"],
		genres: ["Romance"]
	},{ 
		title: "The Hunted",
		year: 2003,
		cast: ["Tommy Lee Jones", "Benicio del Toro", "Connie Nielsen"],
		genres: ["Action", "Drama"]
	},{ 
		title: "I Am David",
		year: 2003,
		cast: ["Jim Caviezel", "Ben Tibber", "Joan Plowright"],
		genres: ["Drama"]
	},{ 
		title: "Identity",
		year: 2003,
		cast: ["John Cusack", "Ray Liotta", "Amanda Peet", "Clea DuVall", "Rebecca De Mornay"],
		genres: ["Horror"]
	},{ 
		title: "Imagining Argentina",
		year: 2003,
		cast: ["Antonio Banderas", "Emma Thompson"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "In the Cut",
		year: 2003,
		cast: ["Meg Ryan", "Mark Ruffalo", "Jennifer Jason Leigh"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The In-Laws",
		year: 2003,
		cast: ["Michael Douglas", "Albert Brooks", "David Suchet", "Candice Bergen", "Ryan Reynolds", "Robin Tunney"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Indigo",
		year: 2003,
		cast: ["Neale Donald Walsch", "Dane Bowman"],
		genres: ["Drama"]
	},{ 
		title: "Intolerable Cruelty",
		year: 2003,
		cast: ["George Clooney", "Catherine Zeta-Jones"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "It Runs in the Family",
		year: 2003,
		cast: ["Michael Douglas", "Kirk Douglas"],
		genres: ["Drama"]
	},{ 
		title: "The Italian Job",
		year: 2003,
		cast: ["Mark Wahlberg", "Charlize Theron", "Edward Norton", "Donald Sutherland", "Seth Green", "Jason Statham", "Mos Def", "Franky G"],
		genres: ["Action", "Crime"]
	},{ 
		title: "Jeepers Creepers II",
		year: 2003,
		cast: ["Ray Wise", "Jonathan Breck", "Nicki Lynn Aycox"],
		genres: ["Horror"]
	},{ 
		title: "The Jungle Book 2",
		year: 2003,
		cast: ["John Goodman", "Haley Joel Osment", "Mae Whitman"],
		genres: ["Animated"]
	},{ 
		title: "Just Married",
		year: 2003,
		cast: ["Ashton Kutcher", "Brittany Murphy"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Kangaroo Jack",
		year: 2003,
		cast: ["Jerry O'Connell", "Anthony Anderson", "Estella Warren", "Christopher Walken"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Kill Bill Volume 1",
		year: 2003,
		cast: ["Uma Thurman", "Lucy Liu", "Vivica A. Fox", "David Carradine", "Daryl Hannah", "Michael Madsen"],
		genres: ["Action"]
	},{ 
		title: "Lara Croft Tomb Raider: The Cradle of Life",
		year: 2003,
		cast: ["Angelina Jolie", "Gerard Butler"],
		genres: ["Action", "Fantasy"]
	},{ 
		title: "The Last Samurai",
		year: 2003,
		cast: ["Tom Cruise", "Ken Watanabe", "Timothy Spall", "Billy Connolly"],
		genres: ["Action", "Drama"]
	},{ 
		title: "The League of Extraordinary Gentlemen",
		year: 2003,
		cast: ["Sean Connery", "Naseeruddin Shah", "Peta Wilson", "Tony Curran", "Stuart Townsend", "Shane West", "Jason Flemyng", "Richard Roxburgh"],
		genres: ["Superhero"]
	},{ 
		title: "Legally Blonde 2: Red, White & Blonde",
		year: 2003,
		cast: ["Reese Witherspoon", "Sally Field", "Luke Wilson", "Bob Newhart"],
		genres: ["Comedy"]
	},{ 
		title: "The Life of David Gale",
		year: 2003,
		cast: ["Kevin Spacey", "Kate Winslet", "Laura Linney"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Lizzie McGuire Movie",
		year: 2003,
		cast: ["Hilary Duff"],
		genres: ["Comedy"]
	},{ 
		title: "Looney Tunes: Back in Action",
		year: 2003,
		cast: ["Brendan Fraser", "Jenna Elfman", "Steve Martin", "Heather Locklear"],
		genres: ["Live Action", "Animated"]
	},{ 
		title: "The Lord of the Rings: The Return of the King",
		year: 2003,
		cast: ["Elijah Wood", "Ian McKellen", "Liv Tyler", "Sean Astin", "Andy Serkis", "Hugo Weaving", "Viggo Mortensen", "Cate Blanchett", "Orlando Bloom", "Karl Urban", "Miranda Otto"],
		genres: ["Adventure", "Fantasy"]
	},{ 
		title: "Lost in Translation",
		year: 2003,
		cast: ["Bill Murray", "Scarlett Johansson"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Love Don't Cost a Thing",
		year: 2003,
		cast: ["Nick Cannon", "Christina Milian"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Malibu's Most Wanted",
		year: 2003,
		cast: ["Jamie Kennedy"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "A Man Apart",
		year: 2003,
		cast: ["Vin Diesel", "Larenz Tate", "Timothy Olyphant"],
		genres: ["Crime"]
	},{ 
		title: "Manhood",
		year: 2003,
		cast: ["Nestor Carbonell", "John Ritter", "Janeane Garofalo"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Marci X",
		year: 2003,
		cast: ["Lisa Kudrow", "Damon Wayans"],
		genres: ["Comedy"]
	},{ 
		title: "Masked and Anonymous",
		year: 2003,
		cast: ["Jeff Bridges", "John Goodman", "Bob Dylan"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Master and Commander: The Far Side of the World",
		year: 2003,
		cast: ["Russell Crowe", "Paul Bettany"],
		genres: ["Drama", "War"]
	},{ 
		title: "Matchstick Men",
		year: 2003,
		cast: ["Nicolas Cage", "Sam Rockwell", "Alison Lohman"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "The Matrix Reloaded",
		year: 2003,
		cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "The Matrix Revolutions",
		year: 2003,
		cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
		genres: ["Science Fiction"]
	},{ 
		title: "May",
		year: 2003,
		cast: ["Angela Bettis", "Jeremy Sisto", "Anna Faris"],
		genres: ["Horror"]
	},{ 
		title: "The Medallion",
		year: 2003,
		cast: ["Jackie Chan", "Lee Evans", "Claire Forlani"],
		genres: ["Fantasy"]
	},{ 
		title: "A Mighty Wind",
		year: 2003,
		cast: ["Catherine O'Hara", "Eugene Levy", "Michael McKean", "Harry Shearer", "Bob Balaban", "Parker Posey"],
		genres: ["Satire"]
	},{ 
		title: "Milwaukee, Minnesota",
		year: 2003,
		cast: ["Troy Garity"],
		genres: ["Drama"]
	},{ 
		title: "The Missing",
		year: 2003,
		cast: ["Tommy Lee Jones", "Cate Blanchett", "Evan Rachel Wood"],
		genres: ["Western", "Drama"]
	},{ 
		title: "Mona Lisa Smile",
		year: 2003,
		cast: ["Julia Roberts", "Kirsten Dunst", "Julia Stiles", "Maggie Gyllenhaal", "Ginnifer Goodwin"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Monster",
		year: 2003,
		cast: ["Charlize Theron", "Christina Ricci"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Monster Man",
		year: 2003,
		cast: ["Eric Jungmann", "Justin Urich", "Aimee Brooks", "Michael Bailey Smith"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "My Boss's Daughter",
		year: 2003,
		cast: ["Ashton Kutcher", "Tara Reid", "Terence Stamp"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "My Flesh and Blood",
		year: 2003,
		cast: ["Susam Tom and 11 children with disabilities"],
		genres: ["Documentary"]
	},{ 
		title: "Mystic River",
		year: 2003,
		cast: ["Sean Penn", "Tim Robbins", "Kevin Bacon", "Laura Linney", "Laurence Fishburne", "Marcia Gay Harden"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "National Lampoon Presents Dorm Daze",
		year: 2003,
		cast: ["Tatyana Ali", "Boti Bliss", "Marieh Delfino"],
		genres: ["Comedy"]
	},{ 
		title: "National Lampoon's Gold Diggers",
		year: 2003,
		cast: ["Will Friedle", "Chris Owen", "Louise Lasser", "Renée Taylor"],
		genres: ["Comedy"]
	},{ 
		title: "National Security",
		year: 2003,
		cast: ["Martin Lawrence", "Steve Zahn"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "The Night We Called it a Day",
		year: 2003,
		cast: ["Dennis Hopper", "Joel Edgerton", "Melanie Griffith"],
		genres: ["Biography"]
	},{ 
		title: "Old School",
		year: 2003,
		cast: ["Luke Wilson", "Will Ferrell", "Vince Vaughn"],
		genres: ["Comedy"]
	},{ 
		title: "Once Upon a Time in Mexico",
		year: 2003,
		cast: ["Antonio Banderas", "Salma Hayek", "Johnny Depp"],
		genres: ["Action"]
	},{ 
		title: "Open Range",
		year: 2003,
		cast: ["Robert Duvall", "Kevin Costner", "Annette Bening", "Michael Gambon", "Diego Luna", "James Russo"],
		genres: ["Western", "Drama"]
	},{ 
		title: "Open Water",
		year: 2003,
		cast: ["Blanchard Ryan", "Daniel Travis"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "The Order",
		year: 2003,
		cast: ["Heath Ledger", "Shannyn Sossamon", "Benno Fürmann"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Out of Time",
		year: 2003,
		cast: ["Denzel Washington", "Eva Mendes"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Party Monster",
		year: 2003,
		cast: ["Seth Green", "Macaulay Culkin", "Diana Scarwid"],
		genres: ["Biography", "Crime"]
	},{ 
		title: "Paper Soldiers",
		year: 2003,
		cast: ["Beanie Sigel", "Kevin Hart"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Pauly Shore Is Dead",
		year: 2003,
		cast: ["Pauly Shore"],
		genres: ["Satire"]
	},{ 
		title: "Paycheck",
		year: 2003,
		cast: ["Ben Affleck", "Aaron Eckhart", "Uma Thurman", "Paul Giamatti", "Joe Morton"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Peter Pan",
		year: 2003,
		cast: ["Jeremy Sumpter", "Rachel Hurd-Wood", "Jason Isaacs", "Ludivine Sagnier"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Phone Booth",
		year: 2003,
		cast: ["Colin Farrell", "Kiefer Sutherland", "Forest Whitaker", "Katie Holmes"],
		genres: ["Thriller"]
	},{ 
		title: "Pieces of April",
		year: 2003,
		cast: ["Katie Holmes", "Derek Luke", "Oliver Platt", "Patricia Clarkson"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Piglet's Big Movie",
		year: 2003,
		cast: ["Peter Cullen", "Jim Cummings", "John Fiedler"],
		genres: ["Animated"]
	},{ 
		title: "Pirates of the Caribbean: The Curse of the Black Pearl",
		year: 2003,
		cast: ["Orlando Bloom", "Johnny Depp", "Keira Knightley", "Geoffrey Rush"],
		genres: ["Fantasy"]
	},{ 
		title: "Poolhall Junkies",
		year: 2003,
		cast: ["Mars Callahan", "Chazz Palminteri", "Rod Steiger", "Michael Rosenbaum"],
		genres: ["Drama"]
	},{ 
		title: "Prey for Rock & Roll",
		year: 2003,
		cast: ["Gina Gershon", "Drea de Matteo", "Lori Petty", "Shelly Cole"],
		genres: ["Musical", "Drama"]
	},{ 
		title: "Puppet Master: The Legacy",
		year: 2003,
		cast: ["Jacob Witkin", "Kate Orsini"],
		genres: ["Horror"]
	},{ 
		title: "Quicksand",
		year: 2003,
		cast: ["Michael Keaton", "Michael Caine"],
		genres: ["Crime"]
	},{ 
		title: "Radio",
		year: 2003,
		cast: ["Ed Harris", "Cuba Gooding, Jr.", "Debra Winger"],
		genres: ["Biography"]
	},{ 
		title: "The Real Cancun",
		year: 2003,
		cast: ["Benjamin \"Fletch\" Fletcher", "Nicole Frilot", "Roxanne Frilot"],
		genres: []
	},{ 
		title: "The Recruit",
		year: 2003,
		cast: ["Al Pacino", "Colin Farrell", "Bridget Moynahan"],
		genres: ["Action"]
	},{ 
		title: "The Room",
		year: 2003,
		cast: ["Tommy Wiseau", "Juliette Danielle"],
		genres: ["Drama"]
	},{ 
		title: "Rugrats Go Wild",
		year: 2003,
		cast: ["Elizabeth Daily", "Nancy Cartwright", "Dionne Quan"],
		genres: ["Animated"]
	},{ 
		title: "Runaway Jury",
		year: 2003,
		cast: ["John Cusack", "Gene Hackman", "Dustin Hoffman", "Rachel Weisz"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Rundown",
		year: 2003,
		cast: ["The Rock", "Seann William Scott", "Christopher Walken", "Rosario Dawson"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "S.W.A.T.",
		year: 2003,
		cast: ["Samuel L. Jackson", "Colin Farrell", "Michelle Rodriguez", "LL Cool J"],
		genres: ["Action", "Crime"]
	},{ 
		title: "Scary Movie 3",
		year: 2003,
		cast: ["Anna Faris", "Charlie Sheen", "Anthony Anderson", "Leslie Nielsen", "Simon Rex"],
		genres: ["Comedy", "Satire"]
	},{ 
		title: "School of Rock",
		year: 2003,
		cast: ["Jack Black", "Joan Cusack", "Mike White", "Sarah Silverman"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Seabiscuit",
		year: 2003,
		cast: ["Tobey Maguire", "Jeff Bridges", "Chris Cooper", "Elizabeth Banks", "William H. Macy", "Gary Stevens"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "Secondhand Lions",
		year: 2003,
		cast: ["Michael Caine", "Robert Duvall", "Haley Joel Osment"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Shanghai Knights",
		year: 2003,
		cast: ["Jackie Chan", "Owen Wilson"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Shattered Glass",
		year: 2003,
		cast: ["Hayden Christensen", "Peter Sarsgaard", "Chloë Sevigny", "Hank Azaria", "Steve Zahn", "Rosario Dawson"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "Sinbad: Legend of the Seven Seas",
		year: 2003,
		cast: ["Brad Pitt", "Catherine Zeta-Jones", "Michelle Pfeiffer", "Joseph Fiennes"],
		genres: ["Animated"]
	},{ 
		title: "The Singing Detective",
		year: 2003,
		cast: ["Robert Downey, Jr.", "Robin Wright Penn", "Mel Gibson"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "Sky Blue",
		year: 2003,
		cast: ["Marc Worden", "Cathy Cavadini"],
		genres: ["Animated"]
	},{ 
		title: "Something's Gotta Give",
		year: 2003,
		cast: ["Jack Nicholson", "Diane Keaton", "Keanu Reeves", "Amanda Peet", "Frances McDormand", "Jon Favreau"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Spy Kids 3-D: Game Over",
		year: 2003,
		cast: ["Alexa Vega", "Daryl Sabara", "Antonio Banderas", "Carla Gugino", "Sylvester Stallone"],
		genres: ["Adventure", "Family"]
	},{ 
		title: "The Station Agent",
		year: 2003,
		cast: ["Peter Dinklage", "Patricia Clarkson", "Bobby Cannavale", "Michelle Williams"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Stuck on You",
		year: 2003,
		cast: ["Matt Damon", "Greg Kinnear", "Eva Mendes", "Cher"],
		genres: ["Comedy"]
	},{ 
		title: "Tarnationthe",
		year: 2003,
		cast: ["the life of Jonathan Caouette"],
		genres: ["Documentary"]
	},{ 
		title: "Tears of the Sun",
		year: 2003,
		cast: ["Bruce Willis", "Monica Bellucci", "Cole Hauser"],
		genres: ["War"]
	},{ 
		title: "Terminator 3: Rise of the Machines",
		year: 2003,
		cast: ["Arnold Schwarzenegger", "Nick Stahl", "Claire Danes", "Kristanna Loken"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Testosterone",
		year: 2003,
		cast: ["David Sutcliffe", "Antonio Sabàto, Jr."],
		genres: ["Action"]
	},{ 
		title: "The Texas Chainsaw Massacre",
		year: 2003,
		cast: ["Jessica Biel", "Jonathan Tucker", "Eric Balfour", "Mike Vogel", "Erica Leershen", "R. Lee Ermey"],
		genres: ["Horror"]
	},{ 
		title: "Thirteen",
		year: 2003,
		cast: ["Evan Rachel Wood", "Holly Hunter", "Nikki Reed"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "This Girl's Life",
		year: 2003,
		cast: ["Juliette Marquis", "James Woods", "Kip Pardue"],
		genres: ["Drama"]
	},{ 
		title: "This Thing of Ours",
		year: 2003,
		cast: ["Danny Provenzano", "Frank Vincent"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Timeline",
		year: 2003,
		cast: ["Paul Walker", "Frances O'Connor", "Gerard Butler"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Tupac: Resurrection",
		year: 2003,
		cast: ["the life and death of", "Tupac Shakur"],
		genres: ["Documentary"]
	},{ 
		title: "Two Days",
		year: 2003,
		cast: ["Paul Rudd", "Donal Logue", "Mackenzie Astin"],
		genres: ["Drama"]
	},{ 
		title: "Uncle Nino",
		year: 2003,
		cast: ["Joe Mantegna", "Pierrino Mascarino", "Anne Archer"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Under the Tuscan Sun",
		year: 2003,
		cast: ["Diane Lane", "Sandra Oh", "Lindsay Duncan"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Underworld",
		year: 2003,
		cast: ["Kate Beckinsale", "Scott Speedman", "Michael Sheen", "Shane Broller", "Erwin Leder", "Bill Nighy"],
		genres: ["Horror"]
	},{ 
		title: "Uptown Girls",
		year: 2003,
		cast: ["Brittany Murphy", "Dakota Fanning", "Heather Locklear"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "V-Day: Until the Violence Stops",
		year: 2003,
		cast: ["V-Day"],
		genres: ["Documentary"]
	},{ 
		title: "Veronica Guerin",
		year: 2003,
		cast: ["Cate Blanchett", "Gerard McSorley", "Ciarán Hinds"],
		genres: ["Biography", "Crime"]
	},{ 
		title: "View from the Top",
		year: 2003,
		cast: ["Gwyneth Paltrow", "Christina Applegate", "Mark Ruffalo", "Kelly Preston", "Rob Lowe", "Candice Bergen", "Mike Myers"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "What a Girl Wants",
		year: 2003,
		cast: ["Amanda Bynes"],
		genres: ["Comedy"]
	},{ 
		title: "When Eagles Strike",
		year: 2003,
		cast: ["Christian Boeving", "Stacy Keach"],
		genres: ["Action", "War"]
	},{ 
		title: "Willard",
		year: 2003,
		cast: ["Crispin Glover"],
		genres: ["Horror"]
	},{ 
		title: "Wonderland",
		year: 2003,
		cast: ["Val Kilmer", "Kate Bosworth", "Dylan McDermott"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Wrong Turn",
		year: 2003,
		cast: ["Desmond Harrington", "Eliza Dushku", "Jeremy Sisto", "Emmanuelle Chriqui"],
		genres: ["Horror"]
	},{ 
		title: "X2: X-Men United",
		year: 2003,
		cast: ["Hugh Jackman", "Patrick Stewart", "Ian McKellen", "Famke Janssen", "Halle Berry", "Anna Paquin"],
		genres: ["Superhero"]
	},{ 
		title: "The Yes Men",
		year: 2003,
		cast: ["the", "culture jamming", "exploits of", "The Yes Men"],
		genres: ["Documentary"]
	},{ 
		title: "The Young Black Stallion",
		year: 2003,
		cast: ["Biana Tamimi", "Patrick Elyas", "Eric Grucza"],
		genres: ["Drama", "Family"]
	},{ 
		title: "Zero Day",
		year: 2003,
		cast: ["Andre Keuck", "Cal Robertson"],
		genres: ["Drama"]
	},{ 
		title: "13 Going on 30",
		year: 2004,
		cast: ["Jennifer Garner", "Mark Ruffalo"],
		genres: ["Comedy"]
	},{ 
		title: "50 First Dates",
		year: 2004,
		cast: ["Adam Sandler", "Drew Barrymore"],
		genres: ["Comedy"]
	},{ 
		title: "After the Sunset",
		year: 2004,
		cast: ["Pierce Brosnan", "Salma Hayek", "Woody Harrelson", "Don Cheadle"],
		genres: ["Crime"]
	},{ 
		title: "Against the Ropes",
		year: 2004,
		cast: ["Meg Ryan", "Omar Epps"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Agent Cody Banks 2: Destination London",
		year: 2004,
		cast: ["Frankie Muniz", "Anthony Anderson"],
		genres: ["Family"]
	},{ 
		title: "The Alamo",
		year: 2004,
		cast: ["Dennis Quaid", "Billy Bob Thornton", "Jason Patric", "Patrick Wilson"],
		genres: ["Western"]
	},{ 
		title: "Alexander",
		year: 2004,
		cast: ["Colin Farrell", "Angelina Jolie", "Val Kilmer", "Rosario Dawson", "Jared Leto", "Raz Degan", "Christopher Plummer", "Anthony Hopkins"],
		genres: ["Action", "Historical"]
	},{ 
		title: "Alfie",
		year: 2004,
		cast: ["Jude Law", "Susan Sarandon", "Marisa Tomei", "Nia Long", "Sienna Miller", "Jane Krakowski", "Omar Epps"],
		genres: ["Comedy"]
	},{ 
		title: "Alien vs. Predator",
		year: 2004,
		cast: ["Sanaa Lathan", "Lance Henriksen", "Raoul Bova", "Ewen Bremner"],
		genres: ["Horror", "Science Fiction"]
	},{ 
		title: "Along Came Polly",
		year: 2004,
		cast: ["Ben Stiller", "Jennifer Aniston", "Debra Messing", "Philip Seymour Hoffman", "Alec Baldwin"],
		genres: ["Comedy"]
	},{ 
		title: "America's Heart and Soul",
		year: 2004,
		cast: ["George Woodard"],
		genres: ["Documentary"]
	},{ 
		title: "Anacondas: The Hunt for the Blood Orchid",
		year: 2004,
		cast: ["Johnny Messner", "Matthew Marsden", "Morris Chestnut", "Salli Richardson"],
		genres: ["Horror"]
	},{ 
		title: "Anchorman: The Legend of Ron Burgundy",
		year: 2004,
		cast: ["Will Ferrell", "Christina Applegate", "Paul Rudd", "Steve Carell"],
		genres: ["Comedy"]
	},{ 
		title: "Around the Bend",
		year: 2004,
		cast: ["Christopher Walken", "Josh Lucas", "Michael Caine"],
		genres: ["Drama"]
	},{ 
		title: "Around the World in 80 Days",
		year: 2004,
		cast: ["Jackie Chan", "Steve Coogan", "Cécile de France"],
		genres: ["Adventure"]
	},{ 
		title: "The Assassination of Richard Nixon",
		year: 2004,
		cast: ["Sean Penn"],
		genres: ["Biography", "Crime"]
	},{ 
		title: "The Aviator",
		year: 2004,
		cast: ["Leonardo DiCaprio", "Cate Blanchett", "Alec Baldwin", "John C. Reilly", "Alan Alda", "Jude Law", "Kate Beckinsale", "Danny Huston", "Ian Holm"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Barbershop 2: Back in Business",
		year: 2004,
		cast: ["Ice Cube", "Cedric the Entertainer", "Queen Latifah"],
		genres: ["Comedy"]
	},{ 
		title: "Before Sunset",
		year: 2004,
		cast: ["Ethan Hawke", "Julie Delpy"],
		genres: ["Drama"]
	},{ 
		title: "Being Julia",
		year: 2004,
		cast: ["Annette Bening", "Jeremy Irons"],
		genres: ["Drama"]
	},{ 
		title: "Benji: Off the Leash!",
		year: 2004,
		cast: ["Nick Whitaker"],
		genres: ["Family"]
	},{ 
		title: "The Best Thief in the World",
		year: 2004,
		cast: ["Mary-Louise Parker"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Beyond the Sea",
		year: 2004,
		cast: ["Kevin Spacey", "Kate Bosworth", "Bob Hoskins", "John Goodman"],
		genres: ["Biography"]
	},{ 
		title: "The Big Bounce",
		year: 2004,
		cast: ["Owen Wilson", "Morgan Freeman", "Gary Sinise", "Sara Foster", "Bebe Neuwirth", "Charlie Sheen"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Birth",
		year: 2004,
		cast: ["Nicole Kidman", "Cameron Bright", "Danny Huston", "Lauren Bacall"],
		genres: ["Drama"]
	},{ 
		title: "Blade: Trinity",
		year: 2004,
		cast: ["Wesley Snipes", "Jessica Biel", "Ryan Reynolds", "Kris Kristofferson", "Dominic Purcell", "Parker Posey", "Triple H"],
		genres: ["Horror"]
	},{ 
		title: "Black Cloud",
		year: 2004,
		cast: ["Rick Schroder", "Eddie Spears", "Russell Means", "Julia Jones", "Tim McGraw"],
		genres: ["Drama"]
	},{ 
		title: "The Blue Butterfly",
		year: 2004,
		cast: ["William Hurt", "Pascale Bussières", "Marc Donato"],
		genres: ["Adventure"]
	},{ 
		title: "Bobby Jones: Stroke of Genius",
		year: 2004,
		cast: ["James Caviezel", "Claire Forlani", "Jeremy Northam"],
		genres: ["Biography", "Sports"]
	},{ 
		title: "Book of Love",
		year: 2004,
		cast: ["Frances O'Connor", "Simon Baker", "Gregory Smith"],
		genres: ["Comedy"]
	},{ 
		title: "Born into Brothels",
		year: 2004,
		cast: ["the children of", "prostitutes in India"],
		genres: ["Documentary"]
	},{ 
		title: "The Bourne Supremacy",
		year: 2004,
		cast: ["Matt Damon", "Joan Allen", "Brian Cox", "Julia Stiles"],
		genres: ["Action"]
	},{ 
		title: "Breakin' All the Rules",
		year: 2004,
		cast: ["Jamie Foxx", "Morris Chestnut", "Gabrielle Union"],
		genres: ["Comedy"]
	},{ 
		title: "Bridget Jones: The Edge of Reason",
		year: 2004,
		cast: ["Renée Zellweger", "Colin Firth", "Hugh Grant"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Brother to Brother",
		year: 2004,
		cast: ["Anthony Mackie", "Roger Robinson"],
		genres: ["Drama"]
	},{ 
		title: "The Butterfly Effect",
		year: 2004,
		cast: ["Ashton Kutcher", "Amy Smart", "Elden Henson", "William Lee Scott", "Melora Walters", "Eric Stoltz", "Ethan Suplee", "Logan Lerman"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "Catch That Kid",
		year: 2004,
		cast: ["Kristen Stewart", "Corbin Bleu", "Max Thieriot"],
		genres: ["Crime", "Family"]
	},{ 
		title: "Catwoman",
		year: 2004,
		cast: ["Halle Berry", "Benjamin Bratt", "Sharon Stone", "Lambert Wilson", "Frances Conroy", "Alex Borstein"],
		genres: ["Superhero"]
	},{ 
		title: "Cellular",
		year: 2004,
		cast: ["Kim Basinger", "Chris Evans", "Jason Statham", "William H. Macy"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Celsius 41.11",
		year: 2004,
		cast: ["Rebuttal of", "Fahrenheit 9", "11"],
		genres: ["Documentary"]
	},{ 
		title: "Chasing Liberty",
		year: 2004,
		cast: ["Mandy Moore", "Matthew Goode", "Mark Harmon"],
		genres: ["Comedy"]
	},{ 
		title: "Christmas with the Kranks",
		year: 2004,
		cast: ["Tim Allen", "Jamie Lee Curtis"],
		genres: ["Comedy"]
	},{ 
		title: "The Chronicles of Riddick",
		year: 2004,
		cast: ["Vin Diesel", "Karl Urban", "Thandie Newton", "Colm Feore", "Judi Dench"],
		genres: ["Science Fiction"]
	},{ 
		title: "A Cinderella Story",
		year: 2004,
		cast: ["Hilary Duff", "Chad Michael Murray", "Jennifer Coolidge"],
		genres: ["Comedy"]
	},{ 
		title: "The Clearing",
		year: 2004,
		cast: ["Robert Redford", "Helen Mirren", "Willem Dafoe"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Clifford's Really Big Movie",
		year: 2004,
		cast: ["John Ritter"],
		genres: ["Animated"]
	},{ 
		title: "Closer",
		year: 2004,
		cast: ["Julia Roberts", "Jude Law", "Natalie Portman", "Clive Owen"],
		genres: ["Drama"]
	},{ 
		title: "Cloud Cuckoo Land",
		year: 2004,
		cast: ["Derek Jacobi"],
		genres: ["Drama"]
	},{ 
		title: "Club Dread",
		year: 2004,
		cast: ["Bill Paxton", "Kevin Heffernan", "Brittany Daniel", "Steve Lemme"],
		genres: ["Comedy"]
	},{ 
		title: "Collateral",
		year: 2004,
		cast: ["Tom Cruise", "Jamie Foxx", "Jada Pinkett Smith"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Communication Breakdown",
		year: 2004,
		cast: ["Dan Lashley", "William V. Repoley"],
		genres: ["Comedy"]
	},{ 
		title: "Confessions of a Teenage Drama Queen",
		year: 2004,
		cast: ["Lindsay Lohan"],
		genres: ["Comedy"]
	},{ 
		title: "Connie and Carla",
		year: 2004,
		cast: ["Nia Vardalos", "Toni Collette"],
		genres: ["Comedy"]
	},{ 
		title: "Control Room",
		year: 2004,
		cast: ["Al Jazeera", "and its relations with the", "United States Central Command"],
		genres: ["Documentary"]
	},{ 
		title: "The Cookout",
		year: 2004,
		cast: ["Tim Meadows", "Ja Rule", "Eve"],
		genres: ["Comedy"]
	},{ 
		title: "Crash",
		year: 2004,
		cast: ["Sandra Bullock", "Don Cheadle", "Matt Dillon", "Jennifer Esposito", "Brendan Fraser", "Terrence Howard", "Chris \"Ludacris\" Bridges", "Thandie Newton", "Ryan Phillippe"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Criminal",
		year: 2004,
		cast: ["John C. Reilly", "Diego Luna", "Maggie Gyllenhaal"],
		genres: ["Comedy"]
	},{ 
		title: "D.E.B.S.",
		year: 2004,
		cast: ["Sara Foster", "Jordana Brewster", "Meagan Good", "Devon Aoki"],
		genres: ["Comedy"]
	},{ 
		title: "Dawn of the Dead",
		year: 2004,
		cast: ["Sarah Polley", "Ving Rhames", "Jake Weber", "Michael Kelly"],
		genres: ["Horror"]
	},{ 
		title: "The Day After Tomorrow",
		year: 2004,
		cast: ["Dennis Quaid", "Jake Gyllenhaal", "Emmy Rossum", "Ian Holm", "Sela Ward"],
		genres: ["Disaster", "Science Fiction"]
	},{ 
		title: "A Day Without a Mexican",
		year: 2004,
		cast: ["Yareli Arizmendi", "John Getz", "Maureen Flannigan"],
		genres: ["Comedy"]
	},{ 
		title: "De-Lovely",
		year: 2004,
		cast: ["Kevin Kline", "Ashley Judd"],
		genres: ["Biography"]
	},{ 
		title: "Dead & Breakfast",
		year: 2004,
		cast: ["Ever Carradine", "Brent David Fraser", "Portia de Rossi"],
		genres: ["Comedy"]
	},{ 
		title: "Dead Birds",
		year: 2004,
		cast: ["Henry Thomas", "Nicki Aycox", "Isaiah Washington"],
		genres: ["Horror"]
	},{ 
		title: "Dig!",
		year: 2004,
		cast: ["The bands", "The Dandy Warhols", "and", "The Brian Jonestown Massacre", "."],
		genres: ["Documentary"]
	},{ 
		title: "Dirty Dancing: Havana Nights",
		year: 2004,
		cast: ["Diego Luna", "Romola Garai", "Sela Ward"],
		genres: ["Romance"]
	},{ 
		title: "A Dirty Shame",
		year: 2004,
		cast: ["Tracey Ullman", "Johnny Knoxville", "Selma Blair", "Chris Isaak"],
		genres: ["Comedy"]
	},{ 
		title: "DodgeBall: A True Underdog Story",
		year: 2004,
		cast: ["Vince Vaughn", "Ben Stiller", "Christine Taylor", "Rip Torn"],
		genres: ["Comedy"]
	},{ 
		title: "The Door in the Floor",
		year: 2004,
		cast: ["Jeff Bridges", "Kim Basinger", "Jon Foster"],
		genres: ["Drama"]
	},{ 
		title: "Drum",
		year: 2004,
		cast: ["Taye Diggs", "Gabriel Mann", "Jason Flemyng"],
		genres: ["Thriller"]
	},{ 
		title: "Ella Enchanted",
		year: 2004,
		cast: ["Anne Hathaway"],
		genres: ["Fantasy"]
	},{ 
		title: "Envy",
		year: 2004,
		cast: ["Ben Stiller", "Jack Black", "Rachel Weisz", "Amy Poehler", "Christopher Walken"],
		genres: ["Comedy"]
	},{ 
		title: "Eternal Sunshine of the Spotless Mind",
		year: 2004,
		cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst", "Mark Ruffalo", "Elijah Wood", "Tom Wilkinson"],
		genres: ["Drama", "Science Fiction"]
	},{ 
		title: "Exorcist: The Beginning",
		year: 2004,
		cast: ["Stellan Skarsgård", "Izabella Scorupco", "James D'Arcy", "Ralph Brown"],
		genres: ["Horror"]
	},{ 
		title: "EuroTrip",
		year: 2004,
		cast: ["Scott Mechlowicz", "Jacob Pitts", "Matt Damon", "Michelle Trachtenberg"],
		genres: ["Comedy"]
	},{ 
		title: "Fade to Black",
		year: 2004,
		cast: ["The career of", "Jay-Z"],
		genres: ["Documentary"]
	},{ 
		title: "Fahrenheit 9/11",
		year: 2004,
		cast: ["On", "George W. Bush", "War on Terrorism", "American media"],
		genres: ["Documentary"]
	},{ 
		title: "Fat Albert",
		year: 2004,
		cast: ["Kenan Thompson", "Kyla Pratt"],
		genres: ["Family"]
	},{ 
		title: "Finding Neverland",
		year: 2004,
		cast: ["Johnny Depp", "Kate Winslet", "Julie Christie", "Dustin Hoffman"],
		genres: ["Drama", "Family"]
	},{ 
		title: "The Final Cut",
		year: 2004,
		cast: ["Robin Williams", "Mira Sorvino", "Jim Caviezel"],
		genres: ["Science Fiction"]
	},{ 
		title: "First Daughter",
		year: 2004,
		cast: ["Katie Holmes"],
		genres: ["Comedy"]
	},{ 
		title: "Flight of the Phoenix",
		year: 2004,
		cast: ["Dennis Quaid", "Giovanni Ribisi", "Tyrese Gibson", "Hugh Laurie", "Miranda Otto"],
		genres: ["Adventure"]
	},{ 
		title: "The Forgotten",
		year: 2004,
		cast: ["Julianne Moore", "Dominic West", "Anthony Edwards", "Lee Tergesen", "Alfre Woodard", "Gary Sinise"],
		genres: ["Thriller"]
	},{ 
		title: "Forty Shades of Blue",
		year: 2004,
		cast: ["Rip Torn", "Dina Korzun"],
		genres: ["Drama"]
	},{ 
		title: "Friday Night Lights",
		year: 2004,
		cast: ["Billy Bob Thornton"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Gamebox 1.0",
		year: 2004,
		cast: ["Nate Richert", "Danielle Fishel"],
		genres: ["Science Fiction"]
	},{ 
		title: "Garden State",
		year: 2004,
		cast: ["Zach Braff", "Natalie Portman", "Peter Sarsgaard", "Ian Holm", "Method Man"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Garfield: The Movie",
		year: 2004,
		cast: ["Bill Murray", "Breckin Meyer", "Jennifer Love Hewitt"],
		genres: ["Comedy"]
	},{ 
		title: "The Girl Next Door",
		year: 2004,
		cast: ["Elisha Cuthbert", "Emile Hirsch", "Timothy Olyphant"],
		genres: ["Romance"]
	},{ 
		title: "Godsend",
		year: 2004,
		cast: ["Greg Kinnear", "Rebecca Romijn", "Robert De Niro", "Cameron Bright"],
		genres: ["Horror"]
	},{ 
		title: "Godzilla: Final Wars",
		year: 2004,
		cast: ["Tsutomu Kitagawa", "Masahiro Matsuoka", "Rei Kikukawa"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Grudge",
		year: 2004,
		cast: ["Sarah Michelle Gellar"],
		genres: ["Horror"]
	},{ 
		title: "Hair Show",
		year: 2004,
		cast: ["Kellita Smith", "Mo'Nique", "David Ramsey", "Gina Torres"],
		genres: ["Comedy"]
	},{ 
		title: "Harold & Kumar Go to White Castle",
		year: 2004,
		cast: ["John Cho", "Kal Penn", "Neil Patrick Harris"],
		genres: ["Comedy"]
	},{ 
		title: "Harry Potter and the Prisoner of Azkaban",
		year: 2004,
		cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Robbie Coltrane", "Michael Gambon", "Richard Griffiths", "Gary Oldman", "Alan Rickman", "Fiona Shaw", "Maggie Smith", "Timothy Spall", "David Thewlis", "Maggie Smith", "Julie Walters", "Dawn French"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Heights",
		year: 2004,
		cast: ["Glenn Close", "Elizabeth Banks", "James Marsden", "Jesse Bradford"],
		genres: ["Drama"]
	},{ 
		title: "Hellboy",
		year: 2004,
		cast: ["Ron Perlman", "Doug Jones", "Selma Blair", "John Hurt", "Rupert Evans"],
		genres: ["Superhero"]
	},{ 
		title: "Her Summer",
		year: 2004,
		cast: ["Justin Marxen"],
		genres: ["Drama"]
	},{ 
		title: "Hidalgo",
		year: 2004,
		cast: ["Viggo Mortensen", "Zuleikha Robinson", "Omar Sharif"],
		genres: ["Drama"]
	},{ 
		title: "Highwaymen",
		year: 2004,
		cast: ["Jim Caviezel", "Rhona Mitra", "Colm Feore"],
		genres: ["Action"]
	},{ 
		title: "A Home at the End of the World",
		year: 2004,
		cast: ["Colin Farrell", "Robin Wright Penn", "Dallas Roberts", "Sissy Spacek"],
		genres: ["Drama"]
	},{ 
		title: "Home on the Range",
		year: 2004,
		cast: ["Roseanne Barr", "Judi Dench", "Jennifer Tilly", "Cuba Gooding, Jr.", "Randy Quaid"],
		genres: ["Animated"]
	},{ 
		title: "Hotel Rwanda",
		year: 2004,
		cast: ["Don Cheadle", "Sophie Okonedo", "Nick Nolte", "Joaquin Phoenix"],
		genres: ["Drama", "War"]
	},{ 
		title: "The Hunting of the President",
		year: 2004,
		cast: ["The presidency of", "Bill Clinton"],
		genres: ["Documentary"]
	},{ 
		title: "I Heart Huckabees",
		year: 2004,
		cast: ["Mark Wahlberg", "Dustin Hoffman", "Isabelle Huppert", "Jude Law", "Jason Schwartzman", "Lily Tomlin"],
		genres: ["Comedy"]
	},{ 
		title: "I, Robot",
		year: 2004,
		cast: ["Will Smith", "Bridget Moynahan", "Bruce Greenwood", "James Cromwell", "Chi McBride", "Alan Tudyk", "Shia LaBeouf"],
		genres: ["Science Fiction"]
	},{ 
		title: "Imaginary Heroes",
		year: 2004,
		cast: ["Sigourney Weaver", "Emile Hirsch", "Jeff Daniels"],
		genres: ["Drama"]
	},{ 
		title: "The Incredibles",
		year: 2004,
		cast: ["voices of", "Craig T. Nelson", "Holly Hunter", "Jason Lee", "Samuel L. Jackson", "Sarah Vowell"],
		genres: ["Animated", "Family"]
	},{ 
		title: "In Good Company",
		year: 2004,
		cast: ["Dennis Quaid", "Scarlett Johansson", "Topher Grace"],
		genres: ["Drama"]
	},{ 
		title: "Jailbait",
		year: 2004,
		cast: ["Michael Pitt", "Stephen Adly Guirgis"],
		genres: ["Drama"]
	},{ 
		title: "Jandek on Corwood",
		year: 2004,
		cast: ["The music and career of", "Jandek"],
		genres: ["Documentary"]
	},{ 
		title: "Jersey Girl",
		year: 2004,
		cast: ["Ben Affleck", "Liv Tyler", "George Carlin", "Stephen Root", "Mike Starr", "Raquel Castro", "Jason Biggs", "Jennifer Lopez"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Johnson Family Vacation",
		year: 2004,
		cast: ["Cedric the Entertainer", "Vanessa L. Williams", "Bow Wow", "Solange Knowles", "Shannon Elizabeth", "Steve Harvey"],
		genres: ["Comedy"]
	},{ 
		title: "Keane",
		year: 2004,
		cast: ["Damian Lewis", "Abigail Breslin", "Amy Ryan"],
		genres: ["Thriller"]
	},{ 
		title: "Kill Bill Volume 2",
		year: 2004,
		cast: ["Uma Thurman", "David Carradine", "Daryl Hannah", "Michael Madsen", "Michael Parks"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "King Arthur",
		year: 2004,
		cast: ["Clive Owen", "Keira Knightley", "Stellan Skarsgård", "Stephen Dillane", "Ray Winstone", "Hugh Dancy", "Til Schweiger", "Ioan Gruffudd"],
		genres: ["Adventure"]
	},{ 
		title: "Kinsey",
		year: 2004,
		cast: ["Liam Neeson", "Laura Linney", "Peter Sarsgaard", "Timothy Hutton", "Chris O'Donnell", "Oliver Platt"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Knots",
		year: 2004,
		cast: ["Scott Cohen", "Annabeth Gish", "Paulina Porizkova"],
		genres: ["Comedy"]
	},{ 
		title: "Ladder 49",
		year: 2004,
		cast: ["Joaquin Phoenix", "John Travolta", "Jay Hernandez", "Morris Chestnut", "Robert Patrick"],
		genres: ["Drama"]
	},{ 
		title: "The Ladykillers",
		year: 2004,
		cast: ["Tom Hanks"],
		genres: ["Comedy"]
	},{ 
		title: "The Land Has Eyes",
		year: 2004,
		cast: ["Sapeta Taito", "Rena Owen"],
		genres: ["Drama"]
	},{ 
		title: "The Last Shot",
		year: 2004,
		cast: ["Matthew Broderick", "Alec Baldwin", "Toni Collette", "Calista Flockhart"],
		genres: ["Comedy"]
	},{ 
		title: "Lemony Snicket's A Series of Unfortunate Events",
		year: 2004,
		cast: ["Jim Carrey", "Jude Law", "Liam Aiken", "Emily Browning", "Meryl Streep"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "The Life and Death of Peter Sellers",
		year: 2004,
		cast: ["Geoffrey Rush", "Charlize Theron", "Emily Watson"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "The Life Aquatic with Steve Zissou",
		year: 2004,
		cast: ["Bill Murray", "Owen Wilson", "Cate Blanchett", "Anjelica Huston", "Jeff Goldblum", "Willem Dafoe", "Michael Gambon", "Bud Cort"],
		genres: ["Comedy"]
	},{ 
		title: "Little Black Book",
		year: 2004,
		cast: ["Brittany Murphy", "Holly Hunter", "Kathy Bates", "Ron Livingston"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "A Love Song for Bobby Long",
		year: 2004,
		cast: ["John Travolta", "Scarlett Johansson"],
		genres: ["Drama"]
	},{ 
		title: "Man on Fire",
		year: 2004,
		cast: ["Denzel Washington", "Dakota Fanning", "Christopher Walken", "Giancarlo Giannini", "Radha Mitchell", "Marc Anthony", "Rachel Ticotin", "Mickey Rourke"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Manchurian Candidate",
		year: 2004,
		cast: ["Denzel Washington", "Meryl Streep", "Liev Schreiber", "Jon Voight", "Kimberly Elise", "Vera Farmiga", "Jeffrey Wright"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Maria Full of Grace",
		year: 2004,
		cast: ["Catalina Sandino Moreno"],
		genres: ["Drama"]
	},{ 
		title: "Mean Creek",
		year: 2004,
		cast: ["Rory Culkin", "Trevor Morgan", "Scott Mechlowicz", "Carly Schroeder", "Josh Peck"],
		genres: ["Drama"]
	},{ 
		title: "Mean Girls",
		year: 2004,
		cast: ["Lindsay Lohan", "Rachel McAdams", "Lacey Chabert", "Amanda Seyfried", "Tina Fey"],
		genres: ["Comedy"]
	},{ 
		title: "Meet the Fockers",
		year: 2004,
		cast: ["Ben Stiller", "Robert De Niro", "Teri Polo", "Blythe Danner", "Dustin Hoffman", "Barbra Streisand"],
		genres: ["Comedy"]
	},{ 
		title: "The Merchant of Venice",
		year: 2004,
		cast: ["Al Pacino", "Jeremy Irons", "Joseph Fiennes", "Lynn Collins"],
		genres: ["Drama"]
	},{ 
		title: "Melinda and Melinda",
		year: 2004,
		cast: ["Chiwetel Ejiofor", "Will Ferrell", "Jonny Lee Miller", "Radha Mitchell", "Amanda Peet", "Chloë Sevigny", "Wallace Shawn"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Million Dollar Baby",
		year: 2004,
		cast: ["Clint Eastwood", "Hilary Swank", "Morgan Freeman", "Jay Baruchel", "Anthony Mackie"],
		genres: ["Drama"]
	},{ 
		title: "Mindbenders",
		year: 2004,
		cast: ["Tomiko Martinez", "Jennifer Goodrich", "Nicole Turner"],
		genres: ["Science Fiction"]
	},{ 
		title: "Mindhunters",
		year: 2004,
		cast: ["LL Cool J", "Jonny Lee Miller", "Kathryn Morris", "Patricia Velasquez", "Clifton Collins, Jr.", "Eion Bailey", "Will Kemp", "Val Kilmer", "Christian Slater"],
		genres: ["Thriller"]
	},{ 
		title: "Miracle",
		year: 2004,
		cast: ["Kurt Russell"],
		genres: ["Drama", "Family"]
	},{ 
		title: "The Misbehavers",
		year: 2004,
		cast: ["the meeting of", "guerrilla warfare", "filmmakers"],
		genres: ["Documentary"]
	},{ 
		title: "Modigliani",
		year: 2004,
		cast: ["Andy García"],
		genres: ["Biography"]
	},{ 
		title: "Mojados: Through the Night",
		year: 2004,
		cast: ["Illegal immigration to the United States"],
		genres: ["Documentary"]
	},{ 
		title: "Mondovino",
		year: 2004,
		cast: ["the impact of the", "globalization of wine"],
		genres: ["Documentary"]
	},{ 
		title: "The Motorcycle Diaries",
		year: 2004,
		cast: ["Gael García Bernal", "Rodrigo de la Serna"],
		genres: ["Biography"]
	},{ 
		title: "Mr. 3000",
		year: 2004,
		cast: ["Bernie Mac", "Angela Bassett", "Paul Sorvino", "Chris Noth"],
		genres: ["Comedy"]
	},{ 
		title: "My Baby's Daddy",
		year: 2004,
		cast: ["Eddie Griffin", "Anthony Anderson", "Michael Imperioli", "Method Man"],
		genres: ["Comedy"]
	},{ 
		title: "Mysterious Skin",
		year: 2004,
		cast: ["Joseph Gordon-Levitt", "Brady Corbet", "Michelle Trachtenberg"],
		genres: ["Drama"]
	},{ 
		title: "Napoleon Dynamite",
		year: 2004,
		cast: ["Jon Heder"],
		genres: ["Comedy"]
	},{ 
		title: "National Treasure",
		year: 2004,
		cast: ["Nicolas Cage", "Diane Kruger", "Justin Bartha", "Jon Voight", "Harvey Keitel", "Sean Bean", "Christopher Plummer"],
		genres: ["Adventure"]
	},{ 
		title: "Never Die Alone",
		year: 2004,
		cast: ["DMX", "David Arquette"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "New York Minute",
		year: 2004,
		cast: ["Mary-Kate and Ashley Olsen", "Eugene Levy"],
		genres: ["Comedy"]
	},{ 
		title: "Noel",
		year: 2004,
		cast: ["Susan Sarandon", "Alan Arkin", "Penélope Cruz"],
		genres: ["Drama"]
	},{ 
		title: "The Notebook",
		year: 2004,
		cast: ["Ryan Gosling", "Rachel McAdams", "James Marsden", "James Garner", "Gena Rowlands"],
		genres: ["Romance"]
	},{ 
		title: "November",
		year: 2004,
		cast: ["Courteney Cox"],
		genres: ["Thriller"]
	},{ 
		title: "Ocean's Twelve",
		year: 2004,
		cast: ["George Clooney", "Brad Pitt", "Matt Damon", "Catherine Zeta-Jones", "Andy García", "Don Cheadle", "Bernie Mac", "Julia Roberts"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Otaku Unite!",
		year: 2004,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "P.S.",
		year: 2004,
		cast: ["Laura Linney", "Topher Grace", "Gabriel Byrne"],
		genres: ["Romance"]
	},{ 
		title: "Palindromes",
		year: 2004,
		cast: ["Ellen Barkin", "Matthew Faber", "Rachel Corr"],
		genres: ["Drama"]
	},{ 
		title: "Paparazzi",
		year: 2004,
		cast: ["Cole Hauser", "Robin Tunney", "Tom Sizemore", "Daniel Baldwin"],
		genres: ["Action"]
	},{ 
		title: "The Passion of the Christ",
		year: 2004,
		cast: ["Jim Caviezel", "Monica Bellucci"],
		genres: ["Drama"]
	},{ 
		title: "The Perfect Score",
		year: 2004,
		cast: ["Scarlett Johansson", "Erika Christensen", "Chris Evans", "Darius Miles"],
		genres: ["Crime"]
	},{ 
		title: "The Phantom of the Opera",
		year: 2004,
		cast: ["Gerard Butler", "Emmy Rossum", "Patrick Wilson"],
		genres: ["Musical"]
	},{ 
		title: "The Polar Express",
		year: 2004,
		cast: ["Tom Hanks", "Daryl Sabara"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Primer",
		year: 2004,
		cast: ["Shane Carruth", "David Sullivan"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Prince and Me",
		year: 2004,
		cast: ["Julia Stiles", "Luke Mably", "Ben Miller"],
		genres: ["Comedy"]
	},{ 
		title: "The Princess Diaries 2: Royal Engagement",
		year: 2004,
		cast: ["Anne Hathaway", "Julie Andrews", "Héctor Elizondo", "Raven-Symoné", "Chris Pine", "Heather Matarazzo"],
		genres: ["Comedy"]
	},{ 
		title: "Proud",
		year: 2004,
		cast: ["Reggie Austin"],
		genres: ["Drama"]
	},{ 
		title: "The Punisher",
		year: 2004,
		cast: ["Thomas Jane", "John Travolta", "Rebecca Romijn"],
		genres: ["Superhero"]
	},{ 
		title: "Raise Your Voice",
		year: 2004,
		cast: ["Hilary Duff"],
		genres: ["Musical"]
	},{ 
		title: "Raising Helen",
		year: 2004,
		cast: ["Kate Hudson", "John Corbett", "Joan Cusack", "Hayden Panettiere", "Spencer Breslin", "Helen Mirren", "Abigail Breslin"],
		genres: ["Comedy"]
	},{ 
		title: "Ray",
		year: 2004,
		cast: ["Jamie Foxx"],
		genres: ["Biography"]
	},{ 
		title: "Riding Giants",
		year: 2004,
		cast: ["The art of", "big wave surfing"],
		genres: ["Documentary"]
	},{ 
		title: "Riding the Bullet",
		year: 2004,
		cast: ["Jonathan Jackson", "David Arquette", "Cliff Robertson"],
		genres: ["Horror"]
	},{ 
		title: "Ripley's Game",
		year: 2004,
		cast: ["John Malkovich", "Dougray Scott", "Ray Winstone", "Chiara Caselli", "Lena Headey"],
		genres: ["Thriller"]
	},{ 
		title: "Saved!",
		year: 2004,
		cast: ["Jena Malone", "Mandy Moore", "Macaulay Culkin", "Patrick Fugit", "Heather Matarazzo", "Eva Amurri", "Martin Donovan", "Mary-Louise Parker"],
		genres: ["Comedy", "Teen"]
	},{ 
		title: "Saw",
		year: 2004,
		cast: ["Cary Elwes", "Leigh Whannell", "Danny Glover", "Monica Potter"],
		genres: ["Horror"]
	},{ 
		title: "Scooby-Doo 2: Monsters Unleashed",
		year: 2004,
		cast: ["Freddie Prinze, Jr.", "Sarah Michelle Gellar", "Matthew Lillard", "Linda Cardellini"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Secret Window",
		year: 2004,
		cast: ["Johnny Depp", "John Turturro", "Timothy Hutton"],
		genres: ["Thriller"]
	},{ 
		title: "Seed of Chucky",
		year: 2004,
		cast: ["Jennifer Tilly", "Redman", "Hannah Spearritt", "John Waters"],
		genres: ["Horror"]
	},{ 
		title: "Shall We Dance?",
		year: 2004,
		cast: ["Richard Gere", "Jennifer Lopez", "Susan Sarandon"],
		genres: ["Romance"]
	},{ 
		title: "Shark Tale",
		year: 2004,
		cast: ["Will Smith", "Jack Black", "Renée Zellweger", "Angelina Jolie", "Robert De Niro", "Martin Scorsese"],
		genres: ["Animated", "Family"]
	},{ 
		title: "She Hate Me",
		year: 2004,
		cast: ["Anthony Mackie", "Kerry Washington", "Ellen Barkin", "Monica Bellucci", "Jim Brown", "Brian Dennehy", "Woody Harrelson", "Bai Ling", "Q-Tip", "Dania Ramirez", "John Turturro"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Shrek 2",
		year: 2004,
		cast: ["Mike Myers", "Cameron Diaz", "Eddie Murphy", "Antonio Banderas"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Sideways",
		year: 2004,
		cast: ["Paul Giamatti", "Thomas Haden Church", "Virginia Madsen", "Sandra Oh"],
		genres: ["Comedy"]
	},{ 
		title: "Six: The Mark Unleashed",
		year: 2004,
		cast: ["Stephen Baldwin", "Eric Roberts", "Kevin Downes"],
		genres: ["Action"]
	},{ 
		title: "Silver City",
		year: 2004,
		cast: ["Danny Huston", "Chris Cooper", "Richard Dreyfuss", "Maria Bello"],
		genres: ["Comedy"]
	},{ 
		title: "Sky Captain and the World of Tomorrow",
		year: 2004,
		cast: ["Jude Law", "Gwyneth Paltrow", "Angelina Jolie"],
		genres: ["Science Fiction"]
	},{ 
		title: "Sleepover",
		year: 2004,
		cast: ["Alexa Vega", "Sara Paxton", "Mika Boorem", "Sam Huntington"],
		genres: ["Comedy"]
	},{ 
		title: "Some Kind of Monster",
		year: 2004,
		cast: ["the band", "Metallica"],
		genres: ["Documentary"]
	},{ 
		title: "Soul Plane",
		year: 2004,
		cast: ["Snoop Dogg", "Tom Arnold", "Kevin Hart"],
		genres: ["Comedy"]
	},{ 
		title: "Spanglish",
		year: 2004,
		cast: ["Adam Sandler", "Téa Leoni", "Paz Vega", "Cloris Leachman"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Spartan",
		year: 2004,
		cast: ["Val Kilmer", "Derek Luke", "William H. Macy"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Speak",
		year: 2004,
		cast: ["Kristen Stewart", "Steve Zahn"],
		genres: ["Drama"]
	},{ 
		title: "Spider-Man 2",
		year: 2004,
		cast: ["Tobey Maguire", "Kirsten Dunst", "James Franco", "Alfred Molina", "Rosemary Harris"],
		genres: ["Superhero"]
	},{ 
		title: "The SpongeBob SquarePants Movie",
		year: 2004,
		cast: ["Tom Kenny", "Clancy Brown", "Rodger Bumpass", "Bill Fagerbakke"],
		genres: ["Animated"]
	},{ 
		title: "Stage Beauty",
		year: 2004,
		cast: ["Billy Crudup", "Claire Danes", "Rupert Everett"],
		genres: ["Drama"]
	},{ 
		title: "Starsky & Hutch",
		year: 2004,
		cast: ["Ben Stiller", "Owen Wilson", "Vince Vaughn", "Snoop Dogg", "Juliette Lewis", "Amy Smart", "Carmen Electra"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Stateside",
		year: 2004,
		cast: ["Rachael Leigh Cook", "Jonathan Tucker", "Agnes Bruckner"],
		genres: ["Drama"]
	},{ 
		title: "The Stepford Wives",
		year: 2004,
		cast: ["Nicole Kidman", "Matthew Broderick", "Glenn Close", "Bette Midler", "Christopher Walken", "Faith Hill"],
		genres: ["Comedy", "Science Fiction"]
	},{ 
		title: "Straight-Jacket",
		year: 2004,
		cast: ["Matt Letscher", "Carrie Preston"],
		genres: ["Comedy"]
	},{ 
		title: "Super Size Me",
		year: 2004,
		cast: ["30-day period of eating food only from", "McDonald's"],
		genres: ["Documentary"]
	},{ 
		title: "SuperBabies: Baby Geniuses 2",
		year: 2004,
		cast: ["Jon Voight", "Scott Baio", "Vanessa Angel"],
		genres: ["Comedy"]
	},{ 
		title: "Surviving Christmas",
		year: 2004,
		cast: ["Ben Affleck", "James Gandolfini", "Christina Applegate", "Catherine O'Hara"],
		genres: ["Comedy"]
	},{ 
		title: "Suspect Zero",
		year: 2004,
		cast: ["Aaron Eckhart", "Ben Kingsley", "Carrie-Anne Moss"],
		genres: ["Thriller"]
	},{ 
		title: "Taking Lives",
		year: 2004,
		cast: ["Angelina Jolie", "Ethan Hawke", "Kiefer Sutherland", "Olivier Martinez", "Gena Rowlands"],
		genres: ["Horror"]
	},{ 
		title: "Taxi",
		year: 2004,
		cast: ["Queen Latifah", "Jimmy Fallon"],
		genres: ["Comedy"]
	},{ 
		title: "Teacher's Pet",
		year: 2004,
		cast: ["Nathan Lane", "Kelsey Grammer", "Shaun Fleming"],
		genres: ["Animated"]
	},{ 
		title: "Team America: World Police",
		year: 2004,
		cast: ["Trey Parker", "Matt Stone", "Kristen Miller"],
		genres: ["Animated"]
	},{ 
		title: "The Terminal",
		year: 2004,
		cast: ["Tom Hanks", "Catherine Zeta-Jones"],
		genres: ["Comedy"]
	},{ 
		title: "Torque",
		year: 2004,
		cast: ["Martin Henderson", "Ice Cube", "Monet Mazur", "Jay Hernandez", "Jaime Pressly"],
		genres: ["Action"]
	},{ 
		title: "Troy",
		year: 2004,
		cast: ["Brad Pitt", "Eric Bana", "Orlando Bloom", "Brian Cox", "Brendan Gleeson", "Peter O'Toole", "Diane Kruger", "Rose Byrne", "Saffron Burrows", "Julie Christie"],
		genres: ["Adventure"]
	},{ 
		title: "Twisted",
		year: 2004,
		cast: ["Ashley Judd", "Samuel L. Jackson", "Andy García"],
		genres: ["Thriller"]
	},{ 
		title: "Tying the Knot",
		year: 2004,
		cast: ["same-sex marriage in the United States"],
		genres: ["Documentary"]
	},{ 
		title: "Undertow",
		year: 2004,
		cast: ["Jamie Bell", "Dermot Mulroney", "Josh Lucas", "Devon Alan"],
		genres: ["Thriller"]
	},{ 
		title: "University Heights",
		year: 2004,
		cast: ["Jim Siokos", "Shane Simmons", "Travis Shepherd"],
		genres: ["Drama"]
	},{ 
		title: "Van Helsing",
		year: 2004,
		cast: ["Hugh Jackman", "Kate Beckinsale", "Richard Roxburgh", "David Wenham", "Will Kemp", "Kevin J. O'Connor", "Shuler Hensley"],
		genres: ["Horror"]
	},{ 
		title: "Vanity Fair",
		year: 2004,
		cast: ["Reese Witherspoon", "Jonathan Rhys Meyers", "James Purefoy"],
		genres: ["Romance"]
	},{ 
		title: "A Very Long Engagement",
		year: 2004,
		cast: ["Audrey Tautou", "Gaspard Ulliel", "Jodie Foster"],
		genres: ["War"]
	},{ 
		title: "The Village",
		year: 2004,
		cast: ["Bryce Dallas Howard", "Joaquin Phoenix", "Adrien Brody", "William Hurt", "Sigourney Weaver"],
		genres: ["Suspense"]
	},{ 
		title: "Voces inocentes",
		year: 2004,
		cast: ["Carlos Padilla", "Leonor Varela", "Xuna Primus"],
		genres: ["War"]
	},{ 
		title: "Voices of Iraq",
		year: 2004,
		cast: ["Iraq"],
		genres: ["Documentary"]
	},{ 
		title: "Walking Tall",
		year: 2004,
		cast: ["Dwayne Johnson"],
		genres: ["Action"]
	},{ 
		title: "Wake of Death",
		year: 2004,
		cast: ["Jean-Claude Van Damme"],
		genres: ["Action"]
	},{ 
		title: "Watermarks",
		year: 2004,
		cast: ["women from", "Viennese Hakoah", "swim team"],
		genres: ["Documentary"]
	},{ 
		title: "We Don't Live Here Anymore",
		year: 2004,
		cast: ["Mark Ruffalo", "Laura Dern", "Naomi Watts", "Peter Krause"],
		genres: ["Drama"]
	},{ 
		title: "Welcome to Mooseport",
		year: 2004,
		cast: ["Ray Romano", "Gene Hackman", "Marcia Gay Harden"],
		genres: ["Comedy"]
	},{ 
		title: "When Will I Be Loved",
		year: 2004,
		cast: ["Neve Campbell", "Fred Weller", "Alex Feldman"],
		genres: ["Drama"]
	},{ 
		title: "White Chicks",
		year: 2004,
		cast: ["Shawn Wayans", "Marlon Wayans"],
		genres: ["Comedy"]
	},{ 
		title: "The Whole Ten Yards",
		year: 2004,
		cast: ["Matthew Perry", "Bruce Willis", "Amanda Peet", "Natasha Henstridge", "Kevin Pollak"],
		genres: ["Comedy"]
	},{ 
		title: "Wicker Park",
		year: 2004,
		cast: ["Josh Hartnett", "Rose Byrne", "Diane Kruger", "Matthew Lillard"],
		genres: ["Drama"]
	},{ 
		title: "Win a Date with Tad Hamilton!",
		year: 2004,
		cast: ["Kate Bosworth", "Topher Grace", "Josh Duhamel"],
		genres: ["Comedy"]
	},{ 
		title: "Winter Solstice",
		year: 2004,
		cast: ["Anthony LaPaglia", "Aaron Stanford"],
		genres: ["Drama"]
	},{ 
		title: "With All Deliberate Speed",
		year: 2004,
		cast: ["Brown v. Board of Education"],
		genres: ["Documentary"]
	},{ 
		title: "Without a Paddle",
		year: 2004,
		cast: ["Matthew Lillard", "Seth Green", "Dax Shepard"],
		genres: ["Comedy"]
	},{ 
		title: "Woman Thou Art Loosed",
		year: 2004,
		cast: ["Kimberly Elise", "Loretta Devine", "Debbi Morgan"],
		genres: ["Drama"]
	},{ 
		title: "The Woodsman",
		year: 2004,
		cast: ["Kevin Bacon", "Kyra Sedgwick", "Eve", "Mos Def"],
		genres: ["Drama"]
	},{ 
		title: "The Work and the Glory",
		year: 2004,
		cast: ["Sam Hennings", "Brenda Strong", "Eric Johnson"],
		genres: ["Drama"]
	},{ 
		title: "The Year of the Yao",
		year: 2004,
		cast: ["The first of year of", "Yao Ming", "'s American career"],
		genres: ["Documentary"]
	},{ 
		title: "You Got Served",
		year: 2004,
		cast: ["Marques Houston", "Omarion Grandberry", "Jennifer Freeman"],
		genres: ["Comedy"]
	},{ 
		title: "The 40-Year-Old Virgin",
		year: 2005,
		cast: ["Steve Carell", "Catherine Keener", "Paul Rudd"],
		genres: ["Comedy"]
	},{ 
		title: "51 Birch Street",
		year: 2005,
		cast: ["love", "marriage", "fidelity and a", "suburban", "family"],
		genres: ["Documentary"]
	},{ 
		title: "The Adventures of Sharkboy and Lavagirl in 3-D",
		year: 2005,
		cast: ["Taylor Lautner", "Taylor Dooley", "Cayden Boyd", "George Lopez"],
		genres: ["Family", "Superhero"]
	},{ 
		title: "Æon Flux",
		year: 2005,
		cast: ["Charlize Theron"],
		genres: ["Science Fiction"]
	},{ 
		title: "Aliens of the Deep",
		year: 2005,
		cast: ["the", "Mid-Ocean Ridge"],
		genres: ["Documentary"]
	},{ 
		title: "Alone in the Dark",
		year: 2005,
		cast: ["Christian Slater", "Tara Reid", "Stephen Dorff"],
		genres: ["Comedy"]
	},{ 
		title: "The Amityville Horror",
		year: 2005,
		cast: ["Ryan Reynolds", "Melissa George", "Jesse James", "Jimmy Bennett"],
		genres: ["Horror"]
	},{ 
		title: "Are We There Yet?",
		year: 2005,
		cast: ["Ice Cube"],
		genres: ["Comedy"]
	},{ 
		title: "The Aristocrats",
		year: 2005,
		cast: ["the obscure", "dirty joke", "\"", "The Aristocrats", "\""],
		genres: ["Documentary"]
	},{ 
		title: "Assault on Precinct 13",
		year: 2005,
		cast: ["Ethan Hawke", "Laurence Fishburne", "Gabriel Byrne"],
		genres: ["Action"]
	},{ 
		title: "Bad News Bears",
		year: 2005,
		cast: ["Billy Bob Thornton", "Greg Kinnear"],
		genres: ["Comedy"]
	},{ 
		title: "The Ballad of Jack and Rose",
		year: 2005,
		cast: ["Daniel Day-Lewis", "Camilla Belle"],
		genres: ["Drama"]
	},{ 
		title: "Batman Begins",
		year: 2005,
		cast: ["Christian Bale", "Michael Caine", "Liam Neeson", "Katie Holmes", "Gary Oldman", "Morgan Freeman"],
		genres: ["Superhero"]
	},{ 
		title: "The Baxter",
		year: 2005,
		cast: ["Michael Showalter", "Elizabeth Banks", "Michelle Williams"],
		genres: ["Comedy"]
	},{ 
		title: "Be Cool",
		year: 2005,
		cast: ["John Travolta", "Uma Thurman", "Cedric the Entertainer", "André Benjamin", "Steven Tyler", "Vince Vaughn"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Beauty Shop",
		year: 2005,
		cast: ["Queen Latifah"],
		genres: ["Comedy"]
	},{ 
		title: "Because of Winn-Dixie",
		year: 2005,
		cast: ["AnnaSophia Robb", "Jeff Daniels", "Cicely Tyson"],
		genres: ["Family"]
	},{ 
		title: "Bee Season",
		year: 2005,
		cast: ["Richard Gere", "Juliette Binoche", "Flora Cross", "Max Minghella"],
		genres: ["Drama"]
	},{ 
		title: "Bewitched",
		year: 2005,
		cast: ["Nicole Kidman", "Will Ferrell", "Michael Caine", "Jason Schwartzman", "Shirley MacLaine"],
		genres: ["Comedy"]
	},{ 
		title: "Bigger Than the Sky",
		year: 2005,
		cast: ["Marcus Thomas", "John Corbett", "Amy Smart"],
		genres: ["Comedy"]
	},{ 
		title: "Boogeyman",
		year: 2005,
		cast: ["Barry Watson", "Emily Deschanel", "Lucy Lawless"],
		genres: ["Horror"]
	},{ 
		title: "Brick",
		year: 2005,
		cast: ["Joseph Gordon-Levitt", "Emilie de Ravin", "Nora Zehetner"],
		genres: ["Noir"]
	},{ 
		title: "Brokeback Mountain",
		year: 2005,
		cast: ["Heath Ledger", "Jake Gyllenhaal", "Anne Hathaway", "Michelle Williams", "Randy Quaid"],
		genres: ["Western", "Romance", "Drama"]
	},{ 
		title: "Broken Flowers",
		year: 2005,
		cast: ["Bill Murray", "Jeffrey Wright", "Sharon Stone", "Frances Conroy", "Jessica Lange", "Tilda Swinton"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Brothers Grimm",
		year: 2005,
		cast: ["Matt Damon", "Heath Ledger", "Jonathan Pryce"],
		genres: ["Adventure", "Fantasy"]
	},{ 
		title: "Capote",
		year: 2005,
		cast: ["Philip Seymour Hoffman", "Catherine Keener", "Clifton Collins, Jr.", "Chris Cooper", "Amy Ryan"],
		genres: ["Biography", "Crime"]
	},{ 
		title: "Casanova",
		year: 2005,
		cast: ["Heath Ledger", "Jeremy Irons", "Sienna Miller"],
		genres: ["Comedy"]
	},{ 
		title: "The Cave",
		year: 2005,
		cast: ["Cole Hauser", "Eddie Cibrian", "Morris Chestnut", "Lena Headey"],
		genres: ["Horror"]
	},{ 
		title: "Charlie and the Chocolate Factory",
		year: 2005,
		cast: ["Johnny Depp", "Freddie Highmore", "David Kelly", "Helena Bonham Carter", "Christopher Lee", "Missi Pyle", "James Fox"],
		genres: ["Fantasy"]
	},{ 
		title: "Cheaper by the Dozen 2",
		year: 2005,
		cast: ["Steve Martin", "Bonnie Hunt", "Hilary Duff", "Tom Welling", "Piper Perabo", "Eugene Levy", "Carmen Electra"],
		genres: ["Comedy"]
	},{ 
		title: "Chicken Little",
		year: 2005,
		cast: ["Zach Braff", "Joan Cusack", "Steve Zahn"],
		genres: ["Animated"]
	},{ 
		title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
		year: 2005,
		cast: ["William Mosely", "Anna Popplewell", "Skandar Keynes", "Georgie Henley"],
		genres: ["Adventure", "Fantasy"]
	},{ 
		title: "The Chumscrubber",
		year: 2005,
		cast: ["Glenn Close", "Ralph Fiennes", "Caroline Goodall"],
		genres: ["Comedy"]
	},{ 
		title: "Cinderella Man",
		year: 2005,
		cast: ["Russell Crowe", "Renée Zellweger", "Paul Giamatti", "Bruce McGill", "Craig Bierko"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Coach Carter",
		year: 2005,
		cast: ["Samuel L. Jackson", "Rob Brown", "Ashanti", "Channing Tatum"],
		genres: ["Drama"]
	},{ 
		title: "Constantine",
		year: 2005,
		cast: ["Keanu Reeves", "Rachel Weisz", "Shia LaBeouf"],
		genres: ["Horror"]
	},{ 
		title: "Corpse Bride",
		year: 2005,
		cast: ["Johnny Depp", "Helena Bonham Carter"],
		genres: ["Animated"]
	},{ 
		title: "The Crow: Wicked Prayer",
		year: 2005,
		cast: ["Edward Furlong", "David Boreanaz", "Tara Reid", "Emmanuelle Chriqui"],
		genres: ["Action"]
	},{ 
		title: "Cruel World",
		year: 2005,
		cast: ["Edward Furlong", "Susan Ward", "Daniel Franzese", "Andrew Keegan"],
		genres: ["Horror"]
	},{ 
		title: "Cry_Wolf",
		year: 2005,
		cast: ["Julian Morris", "Lindy Booth", "Jon Bon Jovi", "Kristy Wu"],
		genres: ["Drama"]
	},{ 
		title: "Cursed",
		year: 2005,
		cast: ["Christina Ricci", "Jesse Eisenberg", "Joshua Jackson", "Judy Greer"],
		genres: ["Horror"]
	},{ 
		title: "Daltry Calhoun",
		year: 2005,
		cast: ["Johnny Knoxville"],
		genres: ["Comedy"]
	},{ 
		title: "Dark Water",
		year: 2005,
		cast: ["Jennifer Connelly"],
		genres: ["Horror"]
	},{ 
		title: "Deepwater",
		year: 2005,
		cast: ["Lucas Black", "Peter Coyote", "Mia Maestro"],
		genres: ["Thriller"]
	},{ 
		title: "Derailed",
		year: 2005,
		cast: ["Clive Owen", "Jennifer Aniston", "Vincent Cassel"],
		genres: ["Thriller"]
	},{ 
		title: "The Derby Stallion",
		year: 2005,
		cast: ["Zac Efron", "Bill Cobbs", "Crystal Hunt", "Rob Pinkston"],
		genres: ["Drama"]
	},{ 
		title: "Deuce Bigalow: European Gigolo",
		year: 2005,
		cast: ["Rob Schneider", "Eddie Griffin"],
		genres: ["Comedy"]
	},{ 
		title: "The Devil's Rejects",
		year: 2005,
		cast: ["Sid Haig", "Bill Moseley", "Sherri Moon", "William Forsythe"],
		genres: ["Horror"]
	},{ 
		title: "Diary of a Mad Black Woman",
		year: 2005,
		cast: ["Kimberly Elise", "Steve Harris", "Shemar Moore", "Cicely Tyson", "Tyler Perry"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Dirty Love",
		year: 2005,
		cast: ["Jenny McCarthy", "Eddie Kaye Thomas", "Carmen Electra", "Victor Webster", "Kam Heskin", "Kathy Griffin"],
		genres: ["Comedy"]
	},{ 
		title: "Dominion: Prequel to the Exorcist",
		year: 2005,
		cast: ["Stellan Skarsgård", "Gabriel Mann", "Billy Crawford", "Ralph Brown"],
		genres: ["Horror"]
	},{ 
		title: "Domino",
		year: 2005,
		cast: ["Keira Knightley", "Mickey Rourke", "Edgar Ramirez", "Lucy Liu", "Jacqueline Bisset", "Delroy Lindo"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Don't Come Knocking",
		year: 2005,
		cast: ["Sam Shepard", "Jessica Lange", "Tim Roth"],
		genres: ["Drama"]
	},{ 
		title: "Doom",
		year: 2005,
		cast: ["Karl Urban", "Dwayne Johnson", "Ben Daniels"],
		genres: ["Horror"]
	},{ 
		title: "Dreamer",
		year: 2005,
		cast: ["Dakota Fanning", "Kurt Russell"],
		genres: ["Drama"]
	},{ 
		title: "Duck",
		year: 2005,
		cast: ["Philip Baker Hall", "Bill Cobbs", "Bill Brochtrup", "Amy Hill"],
		genres: ["Drama"]
	},{ 
		title: "The Dukes of Hazzard",
		year: 2005,
		cast: ["Johnny Knoxville", "Seann William Scott", "Jessica Simpson", "Burt Reynolds", "Willie Nelson"],
		genres: ["Comedy"]
	},{ 
		title: "Duma",
		year: 2005,
		cast: ["Alexander Michaletos", "Eamonn Walker", "Campbell Scott", "Hope Davis"],
		genres: ["Adventure"]
	},{ 
		title: "The Dying Gaul",
		year: 2005,
		cast: ["Patricia Clarkson", "Peter Sarsgaard"],
		genres: ["Drama"]
	},{ 
		title: "Elektra",
		year: 2005,
		cast: ["Jennifer Garner", "Terence Stamp", "Kirsten Prout"],
		genres: ["Action"]
	},{ 
		title: "Elizabethtown",
		year: 2005,
		cast: ["Orlando Bloom", "Kirsten Dunst", "Susan Sarandon", "Alec Baldwin", "Jessica Biel"],
		genres: ["Comedy"]
	},{ 
		title: "Enron: The Smartest Guys in the Room",
		year: 2005,
		cast: ["the", "Enron scandal"],
		genres: ["Documentary"]
	},{ 
		title: "Everything Is Illuminated",
		year: 2005,
		cast: ["Elijah Wood"],
		genres: ["Drama"]
	},{ 
		title: "The Exorcism of Emily Rose",
		year: 2005,
		cast: ["Laura Linney", "Tom Wilkinson", "Jennifer Carpenter", "Campbell Scott"],
		genres: ["Horror"]
	},{ 
		title: "The Family Stone",
		year: 2005,
		cast: ["Claire Danes", "Diane Keaton", "Rachel McAdams", "Craig T. Nelson", "Sarah Jessica Parker"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Fantastic Four",
		year: 2005,
		cast: ["Ioan Gruffudd", "Jessica Alba", "Michael Chiklis", "Chris Evans", "Julian McMahon", "Kerry Washington"],
		genres: ["Superhero"]
	},{ 
		title: "Favela Rising",
		year: 2005,
		cast: ["the life in a", "favela"],
		genres: ["Documentary"]
	},{ 
		title: "Fever Pitch",
		year: 2005,
		cast: ["Drew Barrymore", "Jimmy Fallon"],
		genres: ["Comedy"]
	},{ 
		title: "First Descent",
		year: 2005,
		cast: ["snowboarding", "in the 1980s"],
		genres: ["Documentary"]
	},{ 
		title: "Flightplan",
		year: 2005,
		cast: ["Jodie Foster", "Peter Sarsgaard", "Sean Bean"],
		genres: ["Thriller"]
	},{ 
		title: "The Fog",
		year: 2005,
		cast: ["Tom Welling", "Maggie Grace", "Selma Blair"],
		genres: ["Horror"]
	},{ 
		title: "Forty Shades of Blue",
		year: 2005,
		cast: ["Rip Torn", "Dina Korzun", "Darren E. Burrows"],
		genres: ["Drama"]
	},{ 
		title: "Four Brothers",
		year: 2005,
		cast: ["Mark Wahlberg", "Tyrese Gibson", "Andre Benjamin", "Garrett Hedlund", "Terrence Howard"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Frankenstein vs. the Creature from Blood Cove",
		year: 2005,
		cast: ["G. Larry Butler", "William Winckler", "Dezzirae Ascalon"],
		genres: ["Horror"]
	},{ 
		title: "Fun with Dick and Jane",
		year: 2005,
		cast: ["Jim Carrey", "Téa Leoni", "Alec Baldwin"],
		genres: ["Comedy"]
	},{ 
		title: "The Game of Their Lives",
		year: 2005,
		cast: ["Gerard Butler", "Wes Bentley", "Zachery Ty Bryan"],
		genres: ["Drama"]
	},{ 
		title: "Get Rich or Die Tryin'",
		year: 2005,
		cast: ["50 Cent", "Terrence Howard"],
		genres: ["Biography"]
	},{ 
		title: "Getting Played",
		year: 2005,
		cast: ["Vivica A. Fox", "Bill Bellamy", "Carmen Electra", "Stacey Dash"],
		genres: ["Comedy"]
	},{ 
		title: "Goal!",
		year: 2005,
		cast: ["Kuno Becker", "Alessandro Nivola", "Marcel Iures", "Stephen Dillane"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "The Gospel",
		year: 2005,
		cast: ["Boris Kodjoe", "Idris Elba", "Clifton Powell"],
		genres: ["Musical"]
	},{ 
		title: "Good Night, and Good Luck",
		year: 2005,
		cast: ["David Strathairn", "Patricia Clarkson", "George Clooney", "Jeff Daniels", "Robert Downey, Jr."],
		genres: ["Biography"]
	},{ 
		title: "The Great Raid",
		year: 2005,
		cast: ["Benjamin Bratt", "Joseph Fiennes", "James Franco"],
		genres: ["War"]
	},{ 
		title: "The Greatest Game Ever Played",
		year: 2005,
		cast: ["Shia LaBeouf"],
		genres: ["Drama"]
	},{ 
		title: "Green Street",
		year: 2005,
		cast: ["Elijah Wood", "Charlie Hunnam", "Claire Forlani"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Grizzly Man",
		year: 2005,
		cast: ["the life and death of", "Timothy Treadwell"],
		genres: ["Documentary"]
	},{ 
		title: "Guess Who",
		year: 2005,
		cast: ["Bernie Mac", "Ashton Kutcher", "Zoe Saldana", "Hal Williams"],
		genres: ["Comedy"]
	},{ 
		title: "Happy Endings",
		year: 2005,
		cast: ["Lisa Kudrow", "Tom Arnold", "Steve Coogan", "Maggie Gyllenhaal"],
		genres: ["Comedy"]
	},{ 
		title: "Harry Potter and the Goblet of Fire",
		year: 2005,
		cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Michael Gambon", "Maggie Smith", "Alan Rickman", "Gary Oldman", "Robbie Coltrane", "Robert Pattinson", "Ralph Fiennes"],
		genres: ["Fantasy"]
	},{ 
		title: "Her Minor Thing",
		year: 2005,
		cast: ["Estella Warren", "Christian Kane", "Michael Weatherly"],
		genres: ["Comedy"]
	},{ 
		title: "Herbie: Fully Loaded",
		year: 2005,
		cast: ["Lindsay Lohan", "Michael Keaton", "Matt Dillon", "Cheryl Hines"],
		genres: ["Comedy"]
	},{ 
		title: "Hide and Seek",
		year: 2005,
		cast: ["Robert De Niro", "Dakota Fanning"],
		genres: ["Horror"]
	},{ 
		title: "A History of Violence",
		year: 2005,
		cast: ["Viggo Mortensen", "Maria Bello", "Ed Harris"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Hitch",
		year: 2005,
		cast: ["Will Smith", "Kevin James", "Eva Mendes"],
		genres: ["Comedy"]
	},{ 
		title: "The Hitchhiker's Guide to the Galaxy",
		year: 2005,
		cast: ["Martin Freeman", "Mos Def", "Zooey Deschanel", "Sam Rockwell", "Bill Nighy", "Anna Chancellor", "John Malkovich", "Warwick Davis"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Honeymooners",
		year: 2005,
		cast: ["Cedric the Entertainer", "Mike Epps", "Gabrielle Union", "Regina Hall"],
		genres: ["Comedy"]
	},{ 
		title: "Hoodwinked!",
		year: 2005,
		cast: ["Anne Hathaway", "Glenn Close", "James Belushi"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "Hostage",
		year: 2005,
		cast: ["Bruce Willis", "Kevin Pollak"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Hostel",
		year: 2005,
		cast: ["Jay Hernandez", "Derek Richardson", "Eythor Gudjonsson"],
		genres: ["Horror"]
	},{ 
		title: "House of D",
		year: 2005,
		cast: ["David Duchovny", "Anton Yelchin", "Robin Williams"],
		genres: ["Comedy"]
	},{ 
		title: "House of Wax",
		year: 2005,
		cast: ["Elisha Cuthbert", "Chad Michael Murray", "Paris Hilton", "Brian Van Holt", "Jared Padalecki", "Jon Abrahams", "Robert Ri'chard"],
		genres: ["Horror"]
	},{ 
		title: "Hustle & Flow",
		year: 2005,
		cast: ["Terrence Howard", "Anthony Anderson", "Taryn Manning"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Ice Harvest",
		year: 2005,
		cast: ["John Cusack", "Billy Bob Thornton", "Connie Nielsen", "Randy Quaid"],
		genres: ["Drama"]
	},{ 
		title: "Ice Princess",
		year: 2005,
		cast: ["Michelle Trachtenberg", "Hayden Panettiere", "Kim Cattrall", "Joan Cusack"],
		genres: ["Comedy"]
	},{ 
		title: "In Her Shoes",
		year: 2005,
		cast: ["Cameron Diaz", "Toni Collette", "Shirley MacLaine"],
		genres: ["Comedy"]
	},{ 
		title: "In the Mix",
		year: 2005,
		cast: ["Usher", "Emmanuelle Chriqui", "Chazz Palminteri"],
		genres: ["Comedy"]
	},{ 
		title: "Inside Deep Throat",
		year: 2005,
		cast: ["Deep Throat", "and its impact"],
		genres: ["Documentary"]
	},{ 
		title: "Intermedio",
		year: 2005,
		cast: ["Edward Furlong", "Cerina Vincent", "Amber Benson"],
		genres: ["Horror"]
	},{ 
		title: "The Interpreter",
		year: 2005,
		cast: ["Nicole Kidman", "Sean Penn"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Into the Blue",
		year: 2005,
		cast: ["Jessica Alba", "Paul Walker"],
		genres: ["Thriller"]
	},{ 
		title: "The Island",
		year: 2005,
		cast: ["Ewan McGregor", "Scarlett Johansson"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Jacket",
		year: 2005,
		cast: ["Adrien Brody", "Keira Knightley"],
		genres: ["Thriller"]
	},{ 
		title: "Jarhead",
		year: 2005,
		cast: ["Jake Gyllenhaal", "Jamie Foxx", "Peter Sarsgaard", "Lucas Black"],
		genres: ["War"]
	},{ 
		title: "Junebug",
		year: 2005,
		cast: ["Embeth Davidtz", "Alessandro Nivola", "Scott Wilson", "Celia Weston", "Amy Adams"],
		genres: ["Drama"]
	},{ 
		title: "Just Friends",
		year: 2005,
		cast: ["Ryan Reynolds", "Amy Smart", "Anna Faris", "Chris Klein"],
		genres: ["Romance"]
	},{ 
		title: "Just Like Heaven",
		year: 2005,
		cast: ["Reese Witherspoon", "Mark Ruffalo", "Donal Logue"],
		genres: ["Comedy"]
	},{ 
		title: "Kicking & Screaming",
		year: 2005,
		cast: ["Will Ferrell", "Robert Duvall"],
		genres: ["Comedy"]
	},{ 
		title: "Kids in America",
		year: 2005,
		cast: ["Gregory Smith", "Chris Morris"],
		genres: ["Comedy"]
	},{ 
		title: "King Kong",
		year: 2005,
		cast: ["Naomi Watts", "Jack Black", "Adrien Brody", "Kyle Chandler", "Thomas Kretschmann"],
		genres: ["Adventure"]
	},{ 
		title: "King's Ransom",
		year: 2005,
		cast: ["Anthony Anderson"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Kingdom of Heaven",
		year: 2005,
		cast: ["Orlando Bloom", "Eva Green", "Jeremy Irons"],
		genres: ["Action"]
	},{ 
		title: "Kiss Kiss Bang Bang",
		year: 2005,
		cast: ["Robert Downey, Jr.", "Val Kilmer"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "The L.A. Riot Spectacular",
		year: 2005,
		cast: ["Snoop Dogg", "Emilio Estevez", "T. K. Carter"],
		genres: ["Comedy"]
	},{ 
		title: "Land of the Dead",
		year: 2005,
		cast: ["Simon Baker", "John Leguizamo", "Dennis Hopper", "Asia Argento"],
		genres: ["Horror"]
	},{ 
		title: "Lassie",
		year: 2005,
		cast: ["Jonathan Mason", "Peter O'Toole", "Samantha Morton"],
		genres: ["Drama", "Family"]
	},{ 
		title: "Last Days",
		year: 2005,
		cast: ["Michael Pitt", "Lukas Haas", "Asia Argento", "Scott Patrick Green"],
		genres: ["Drama"]
	},{ 
		title: "The League of Gentlemen's Apocalypse",
		year: 2005,
		cast: ["Jeremy Dyson", "Mark Gatiss", "Steve Pemberton", "Reece Shearsmith"],
		genres: ["Comedy"]
	},{ 
		title: "The Legend of Zorro",
		year: 2005,
		cast: ["Antonio Banderas", "Catherine Zeta-Jones"],
		genres: ["Adventure"]
	},{ 
		title: "Lonesome Jim",
		year: 2005,
		cast: [],
		genres: []
	},{ 
		title: "Long Distance",
		year: 2005,
		cast: ["Monica Keena"],
		genres: ["Thriller"]
	},{ 
		title: "The Longest Yard",
		year: 2005,
		cast: ["Adam Sandler", "Burt Reynolds", "Chris Rock"],
		genres: ["Comedy"]
	},{ 
		title: "Lord of War",
		year: 2005,
		cast: ["Nicolas Cage", "Bridget Moynahan", "Ethan Hawke"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Lords of Dogtown",
		year: 2005,
		cast: ["Heath Ledger", "Emile Hirsch", "John Robinson"],
		genres: ["Drama"]
	},{ 
		title: "The Lost City",
		year: 2005,
		cast: ["Andy García", "Dustin Hoffman", "Bill Murray"],
		genres: ["Drama"]
	},{ 
		title: "A Lot Like Love",
		year: 2005,
		cast: ["Amanda Peet", "Ashton Kutcher"],
		genres: ["Comedy"]
	},{ 
		title: "Mad Hot Ballroom",
		year: 2005,
		cast: ["ballroom dance", "in New York school system"],
		genres: ["Documentary"]
	},{ 
		title: "Madagascar",
		year: 2005,
		cast: ["Ben Stiller", "Chris Rock", "David Schwimmer", "Jada Pinkett Smith"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "The Man",
		year: 2005,
		cast: ["Samuel L. Jackson", "Eugene Levy"],
		genres: ["Comedy"]
	},{ 
		title: "Man of the House",
		year: 2005,
		cast: ["Tommy Lee Jones"],
		genres: ["Comedy"]
	},{ 
		title: "Marilyn Hotchkiss' Ballroom Dancing and Charm School",
		year: 2005,
		cast: ["Robert Carlyle", "John Goodman", "Sean Astin", "Mary Steenburgen"],
		genres: ["Romance"]
	},{ 
		title: "The Matador",
		year: 2005,
		cast: ["Pierce Brosnan", "Greg Kinnear", "Hope Davis", "Philip Baker Hall"],
		genres: ["Comedy"]
	},{ 
		title: "Match Point",
		year: 2005,
		cast: ["Jonathan Rhys Meyers", "Scarlett Johansson", "Emily Mortimer"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Me and You and Everyone We Know",
		year: 2005,
		cast: ["Miranda July", "John Hawkes", "Miles Thompson"],
		genres: ["Drama"]
	},{ 
		title: "Memoirs of a Geisha",
		year: 2005,
		cast: ["Zhang Ziyi", "Ken Watanabe", "Gong Li", "Michelle Yeoh"],
		genres: ["Drama"]
	},{ 
		title: "MirrorMask",
		year: 2005,
		cast: ["Stephanie Leonidas", "Jason Barry", "Rob Brydon"],
		genres: ["Family"]
	},{ 
		title: "Miss Congeniality 2: Armed and Fabulous",
		year: 2005,
		cast: ["Sandra Bullock", "Regina King"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Monster-in-Law",
		year: 2005,
		cast: ["Jennifer Lopez", "Jane Fonda", "Michael Vartan", "Wanda Sykes"],
		genres: ["Comedy"]
	},{ 
		title: "The Mostly Unfabulous Social Life of Ethan Green",
		year: 2005,
		cast: ["Daniel Letterle", "Meredith Baxter", "David Monahan"],
		genres: ["Comedy"]
	},{ 
		title: "Mr. & Mrs. Smith",
		year: 2005,
		cast: ["Brad Pitt", "Angelina Jolie"],
		genres: ["Action"]
	},{ 
		title: "Mrs. Palfrey at the Claremont",
		year: 2005,
		cast: ["Joan Plowright", "Rupert Friend", "Anna Massey"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Munich",
		year: 2005,
		cast: ["Eric Bana", "Daniel Craig", "Ciarán Hinds", "Mathieu Kassovitz"],
		genres: ["Drama"]
	},{ 
		title: "Murderball",
		year: 2005,
		cast: ["wheelchair rugby"],
		genres: ["Documentary"]
	},{ 
		title: "Must Love Dogs",
		year: 2005,
		cast: ["Diane Lane", "John Cusack"],
		genres: ["Comedy"]
	},{ 
		title: "Nanny McPhee",
		year: 2005,
		cast: ["Emma Thompson", "Colin Firth"],
		genres: ["Fantasy"]
	},{ 
		title: "Never Been Thawed",
		year: 2005,
		cast: ["Sean Anders", "Allen Zwolle", "Shelly Frasier"],
		genres: ["Comedy"]
	},{ 
		title: "The New World",
		year: 2005,
		cast: ["Colin Farrell", "Q'Orianka Kilcher", "Christopher Plummer", "Christian Bale"],
		genres: ["Drama"]
	},{ 
		title: "Neverwas",
		year: 2005,
		cast: ["Aaron Eckhart", "Brittany Murphy", "Ian McKellen"],
		genres: ["Drama"]
	},{ 
		title: "New York Doll",
		year: 2005,
		cast: ["the life of", "Arthur Kane"],
		genres: ["Documentary"]
	},{ 
		title: "Nine Lives",
		year: 2005,
		cast: ["Holly Hunter", "Glenn Close", "Sissy Spacek"],
		genres: ["Drama"]
	},{ 
		title: "No Direction Home",
		year: 2005,
		cast: ["the life of", "Bob Dylan"],
		genres: ["Documentary"]
	},{ 
		title: "North Country",
		year: 2005,
		cast: ["Charlize Theron", "Frances McDormand", "Sissy Spacek", "Sean Bean"],
		genres: ["Drama"]
	},{ 
		title: "Our Very Own",
		year: 2005,
		cast: ["Allison Janney", "Cheryl Hines", "Jason Ritter", "Hilarie Burton", "Keith Carradine"],
		genres: ["Drama"]
	},{ 
		title: "The Pacifier",
		year: 2005,
		cast: ["Vin Diesel", "Lauren Graham", "Faith Ford"],
		genres: ["Comedy"]
	},{ 
		title: "The Perfect Man",
		year: 2005,
		cast: ["Hilary Duff", "Heather Locklear", "Chris Noth"],
		genres: ["Comedy"]
	},{ 
		title: "Pooh's Heffalump Movie",
		year: 2005,
		cast: ["Jim Cummings", "John Fiedler", "Kath Soucie"],
		genres: ["Animated"]
	},{ 
		title: "Popstar",
		year: 2005,
		cast: ["Aaron Carter"],
		genres: ["Comedy"]
	},{ 
		title: "Pretty Persuasion",
		year: 2005,
		cast: ["Evan Rachel Wood", "James Woods", "Ron Livingston", "Jane Krakowski"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Prime",
		year: 2005,
		cast: ["Uma Thurman", "Meryl Streep", "Bryan Greenberg"],
		genres: ["Comedy"]
	},{ 
		title: "The Prize Winner of Defiance, Ohio",
		year: 2005,
		cast: ["Julianne Moore", "Woody Harrelson", "Laura Dern"],
		genres: ["Biography"]
	},{ 
		title: "The Producers",
		year: 2005,
		cast: ["Nathan Lane", "Matthew Broderick", "Uma Thurman", "Will Ferrell"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "Proof",
		year: 2005,
		cast: ["Gwyneth Paltrow", "Anthony Hopkins", "Jake Gyllenhaal", "Hope Davis"],
		genres: ["Drama"]
	},{ 
		title: "Racing Stripes",
		year: 2005,
		cast: ["Frankie Muniz", "Hayden Panettiere"],
		genres: ["Comedy"]
	},{ 
		title: "Rebound",
		year: 2005,
		cast: ["Martin Lawrence"],
		genres: ["Comedy"]
	},{ 
		title: "Red Eye",
		year: 2005,
		cast: ["Rachel McAdams", "Cillian Murphy"],
		genres: ["Thriller"]
	},{ 
		title: "Rent",
		year: 2005,
		cast: ["Anthony Rapp", "Adam Pascal", "Rosario Dawson"],
		genres: ["Musical"]
	},{ 
		title: "The Ring Two",
		year: 2005,
		cast: ["Naomi Watts", "David Dorfman", "Simon Baker"],
		genres: ["Horror"]
	},{ 
		title: "The Ringer",
		year: 2005,
		cast: ["Johnny Knoxville"],
		genres: ["Comedy"]
	},{ 
		title: "Rize",
		year: 2005,
		cast: ["clowning and krumping"],
		genres: ["Documentary"]
	},{ 
		title: "Robots",
		year: 2005,
		cast: ["Ewan McGregor", "Robin Williams", "Greg Kinnear", "Halle Berry", "Amanda Bynes", "Mel Brooks"],
		genres: ["Animated"]
	},{ 
		title: "Roll Bounce",
		year: 2005,
		cast: ["Bow Wow", "Meagan Good", "Wesley Jonathan"],
		genres: ["Comedy"]
	},{ 
		title: "Rumor Has It...",
		year: 2005,
		cast: ["Jennifer Aniston", "Kevin Costner", "Shirley MacLaine", "Mark Ruffalo"],
		genres: ["Comedy"]
	},{ 
		title: "Sahara",
		year: 2005,
		cast: ["Matthew McConaughey", "Steve Zahn", "Penélope Cruz"],
		genres: ["Action"]
	},{ 
		title: "Sarah Silverman: Jesus Is Magic",
		year: 2005,
		cast: ["Sarah Silverman"],
		genres: ["Comedy"]
	},{ 
		title: "Saw II",
		year: 2005,
		cast: ["Tobin Bell", "Donnie Wahlberg", "Erik Knudsen", "Shawnee Smith"],
		genres: ["Horror"]
	},{ 
		title: "Serenity",
		year: 2005,
		cast: ["Nathan Fillion", "Gina Torres", "Alan Tudyk", "Morena Baccarin"],
		genres: ["Science Fiction"]
	},{ 
		title: "Shadowboxer",
		year: 2005,
		cast: ["Helen Mirren", "Cuba Gooding, Jr.", "Mo'Nique"],
		genres: ["Thriller"]
	},{ 
		title: "Shopgirl",
		year: 2005,
		cast: ["Steve Martin", "Claire Danes", "Jason Schwartzman"],
		genres: ["Drama"]
	},{ 
		title: "Sin City",
		year: 2005,
		cast: ["Jessica Alba", "Bruce Willis", "Benicio del Toro", "Brittany Murphy", "Clive Owen", "Mickey Rourke", "Rosario Dawson", "Josh Hartnett", "Carla Gugino", "Elijah Wood", "Nick Stahl"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "The Sisterhood of the Traveling Pants",
		year: 2005,
		cast: ["Amber Tamblyn", "America Ferrera", "Blake Lively", "Alexis Bledel"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Sisters",
		year: 2005,
		cast: ["Maria Bello", "Mary Stuart Masterson", "Erika Christensen"],
		genres: ["Drama"]
	},{ 
		title: "The Skeleton Key",
		year: 2005,
		cast: ["Kate Hudson"],
		genres: ["Horror"]
	},{ 
		title: "Sky High",
		year: 2005,
		cast: ["Michael Angarano", "Kurt Russell", "Kelly Preston", "Danielle Panabaker", "Mary Elizabeth Winstead"],
		genres: ["Fantasy"]
	},{ 
		title: "Smile",
		year: 2005,
		cast: ["Sean Astin", "Mika Boorem", "Yi Ding", "Beau Bridges"],
		genres: ["Adventure"]
	},{ 
		title: "Son of the Mask",
		year: 2005,
		cast: ["Jamie Kennedy", "Alan Cumming", "Traylor Howard", "Bob Hoskins"],
		genres: ["Comedy"]
	},{ 
		title: "A Sound of Thunder",
		year: 2005,
		cast: ["Edward Burns", "Ben Kingsley", "Catherine McCormack"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Squid and the Whale",
		year: 2005,
		cast: ["Laura Linney", "Jeff Daniels", "Jesse Eisenberg", "Owen Kline"],
		genres: ["Drama"]
	},{ 
		title: "Star Wars: Episode III – Revenge of the Sith",
		year: 2005,
		cast: ["Ewan McGregor", "Hayden Christensen", "Natalie Portman", "Ian McDiarmid", "Samuel L. Jackson", "Jimmy Smits"],
		genres: ["Science Fiction", "Action"]
	},{ 
		title: "Stay",
		year: 2005,
		cast: ["Ewan McGregor", "Naomi Watts", "Ryan Gosling", "Bob Hoskins"],
		genres: ["Drama"]
	},{ 
		title: "Stealth",
		year: 2005,
		cast: ["Josh Lucas", "Jessica Biel", "Jamie Foxx"],
		genres: ["Science Fiction"]
	},{ 
		title: "Street Fight",
		year: 2005,
		cast: ["the 2002", "Cory Booker", "campaign against", "Sharpe James", "for mayor of", "Newark", "New Jersey"],
		genres: ["Documentary"]
	},{ 
		title: "Supercross",
		year: 2005,
		cast: ["Steve Howey", "Mike Vogel", "Cameron Richardson", "Sophia Bush"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Syriana",
		year: 2005,
		cast: ["George Clooney", "Matt Damon", "Jeffrey Wright"],
		genres: ["Political", "Thriller"]
	},{ 
		title: "The Thing About My Folks",
		year: 2005,
		cast: ["Peter Falk", "Paul Reiser", "Olympia Dukakis"],
		genres: ["Comedy"]
	},{ 
		title: "The Three Burials of Melquiades Estrada",
		year: 2005,
		cast: ["Tommy Lee Jones", "Barry Pepper", "Julio Cedillo", "January Jones", "Melissa Leo"],
		genres: ["Drama"]
	},{ 
		title: "Thru the Moebius Strip",
		year: 2005,
		cast: ["Andrea Miller", "Michelle Ruff", "Mark Hamill"],
		genres: ["Animated"]
	},{ 
		title: "Thumbsucker",
		year: 2005,
		cast: ["Lou Taylor Pucci", "Keanu Reeves", "Tilda Swinton", "Vincent D'Onofrio"],
		genres: ["Comedy"]
	},{ 
		title: "Traci Townsend",
		year: 2005,
		cast: ["Jazsmin Lewis", "Mari Morrow"],
		genres: ["Comedy"]
	},{ 
		title: "Transamerica",
		year: 2005,
		cast: ["Felicity Huffman"],
		genres: ["Drama"]
	},{ 
		title: "Transporter 2",
		year: 2005,
		cast: ["Jason Statham"],
		genres: ["Action"]
	},{ 
		title: "Two for the Money",
		year: 2005,
		cast: ["Al Pacino", "Matthew McConaughey", "Rene Russo"],
		genres: ["Drama"]
	},{ 
		title: "Underclassman",
		year: 2005,
		cast: ["Nick Cannon"],
		genres: ["Comedy"]
	},{ 
		title: "Undiscovered",
		year: 2005,
		cast: ["Pell James", "Steven Strait", "Ashlee Simpson", "Kip Pardue"],
		genres: ["Musical"]
	},{ 
		title: "An Unfinished Life",
		year: 2005,
		cast: ["Robert Redford", "Jennifer Lopez", "Morgan Freeman", "Josh Lucas"],
		genres: ["Drama"]
	},{ 
		title: "The Upside of Anger",
		year: 2005,
		cast: ["Joan Allen", "Kevin Costner", "Erika Christensen", "Evan Rachel Wood", "Keri Russell", "Alicia Witt"],
		genres: ["Drama"]
	},{ 
		title: "Venom",
		year: 2005,
		cast: ["Agnes Bruckner", "Jonathan Jackson", "Laura Ramsey", "D.J. Cotrona"],
		genres: ["Horror"]
	},{ 
		title: "Waiting...",
		year: 2005,
		cast: ["Ryan Reynolds", "Anna Faris", "Justin Long"],
		genres: ["Comedy"]
	},{ 
		title: "Walk the Line",
		year: 2005,
		cast: ["Joaquin Phoenix", "Reese Witherspoon"],
		genres: ["Biography"]
	},{ 
		title: "War of the Worlds",
		year: 2005,
		cast: ["Tom Cruise", "Dakota Fanning", "Justin Chatwin"],
		genres: ["Science Fiction"]
	},{ 
		title: "The War Within",
		year: 2005,
		cast: ["Ayad Aktar", "Firdous Bamji", "Nandana Sen"],
		genres: ["Drama"]
	},{ 
		title: "The Weather Man",
		year: 2005,
		cast: ["Nicolas Cage", "Michael Caine"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Wedding Crashers",
		year: 2005,
		cast: ["Owen Wilson", "Vince Vaughn", "Christopher Walken", "Rachel McAdams", "Jane Seymour", "Bradley Cooper"],
		genres: ["Comedy"]
	},{ 
		title: "The Wedding Date",
		year: 2005,
		cast: ["Debra Messing", "Dermot Mulroney"],
		genres: ["Comedy"]
	},{ 
		title: "Where the Truth Lies",
		year: 2005,
		cast: ["Colin Firth", "Kevin Bacon", "Alison Lohman"],
		genres: ["Drama"]
	},{ 
		title: "White Noise",
		year: 2005,
		cast: ["Michael Keaton", "Deborah Kara Unger", "Chandra West"],
		genres: ["Drama"]
	},{ 
		title: "Why We Fight",
		year: 2005,
		cast: ["the", "military-industrial complex"],
		genres: ["Documentary"]
	},{ 
		title: "The World's Fastest Indian",
		year: 2005,
		cast: ["Anthony Hopkins", "Diane Ladd", "Jessica Cauffiel"],
		genres: ["Biography"]
	},{ 
		title: "xXx: State of the Union",
		year: 2005,
		cast: ["Ice Cube"],
		genres: ["Action"]
	},{ 
		title: "Yours, Mine and Ours",
		year: 2005,
		cast: ["Dennis Quaid", "Rene Russo"],
		genres: ["Comedy"]
	},{ 
		title: "Zathura",
		year: 2005,
		cast: ["Jonah Bobo", "Josh Hutcherson", "Dax Shepard", "Kristen Stewart", "Tim Robbins"],
		genres: ["Fantasy"]
	},{ 
		title: ".45",
		year: 2006,
		cast: ["Milla Jovovich", "Angus Macfadyen", "Aisha Tyler", "Stephen Dorff"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "10 Items or Less",
		year: 2006,
		cast: ["Morgan Freeman", "Paz Vega"],
		genres: ["Comedy"]
	},{ 
		title: "10th & Wolf",
		year: 2006,
		cast: ["James Marsden", "Giovanni Ribisi"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "16 Blocks",
		year: 2006,
		cast: ["Bruce Willis", "Mos Def"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "29 Reasons to Run",
		year: 2006,
		cast: ["Gary Weeks"],
		genres: ["Comedy"]
	},{ 
		title: "The 8th Plague",
		year: 2006,
		cast: ["DJ Perry"],
		genres: ["Horror"]
	},{ 
		title: "9/Tenths",
		year: 2006,
		cast: ["Gabrielle Anwar", "Henry Ian Cusick"],
		genres: ["Romance"]
	},{ 
		title: "a/k/a Tommy Chong",
		year: 2006,
		cast: ["jailing of", "Tommy Chong"],
		genres: ["Documentary"]
	},{ 
		title: "Abominable",
		year: 2006,
		cast: ["Matt McCoy", "Jeffrey Combs"],
		genres: ["Horror"]
	},{ 
		title: "Accepted",
		year: 2006,
		cast: ["Justin Long", "Jonah Hill"],
		genres: ["Comedy"]
	},{ 
		title: "After...",
		year: 2006,
		cast: ["Daniel Caltagirone"],
		genres: ["Thriller"]
	},{ 
		title: "Air Guitar Nation",
		year: 2006,
		cast: ["U.S.", "air guitar", "championships"],
		genres: ["Documentary"]
	},{ 
		title: "Akeelah and the Bee",
		year: 2006,
		cast: ["Keke Palmer", "Laurence Fishburne", "Angela Bassett"],
		genres: ["Family"]
	},{ 
		title: "Al Franken: God Spoke",
		year: 2006,
		cast: ["emergence of", "Al Franken", "as political commentator"],
		genres: ["Documentary"]
	},{ 
		title: "The Alibi",
		year: 2006,
		cast: ["Steve Coogan", "Rebecca Romijn", "James Marsden"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "All the King's Men",
		year: 2006,
		cast: ["Sean Penn", "Jude Law", "Kate Winslet", "Anthony Hopkins", "Mark Ruffalo", "James Gandolfini"],
		genres: ["Drama"]
	},{ 
		title: "Alone with Her",
		year: 2006,
		cast: ["Ana Claudia Talancón", "Colin Hanks", "Jordana Spiro"],
		genres: ["Horror"]
	},{ 
		title: "Amazing Grace",
		year: 2006,
		cast: ["Ioan Gruffudd"],
		genres: ["Biography"]
	},{ 
		title: "America: Freedom to Fascism",
		year: 2006,
		cast: ["the legality of income tax"],
		genres: ["Documentary"]
	},{ 
		title: "American Blackout",
		year: 2006,
		cast: ["2002 defeat", "2004 reelection of", "Cynthia McKinney"],
		genres: ["Documentary"]
	},{ 
		title: "American Dreamz",
		year: 2006,
		cast: ["Hugh Grant", "Dennis Quaid", "Mandy Moore", "Marcia Gay Harden"],
		genres: ["Comedy", "Satire"]
	},{ 
		title: "American Hardcore",
		year: 2006,
		cast: ["early pioneers of the", "hardcore punk", "music scene"],
		genres: ["Documentary"]
	},{ 
		title: "Analog Days",
		year: 2006,
		cast: ["Chad Cunningham"],
		genres: ["Drama"]
	},{ 
		title: "Andy Warhol: A Documentary Film",
		year: 2006,
		cast: ["life and art of", "Andy Warhol"],
		genres: ["Documentary"]
	},{ 
		title: "Annapolis",
		year: 2006,
		cast: ["James Franco", "Tyrese Gibson"],
		genres: ["Drama"]
	},{ 
		title: "Another Gay Movie",
		year: 2006,
		cast: ["Michael Carbonaro", "Jonah Blechman", "Jonathan Chase", "Mitch Morris"],
		genres: ["Comedy"]
	},{ 
		title: "The Ant Bully",
		year: 2006,
		cast: ["Julia Roberts", "Nicolas Cage", "Meryl Streep", "Paul Giamatti"],
		genres: ["Animated"]
	},{ 
		title: "Apocalypto",
		year: 2006,
		cast: ["Rudy Youngblood", "Raoul Trujillo", "Mayra Sérbulo", "Dalia Hernández"],
		genres: ["Action"]
	},{ 
		title: "Aquamarine",
		year: 2006,
		cast: ["Emma Roberts", "Sara Paxton", "JoJo"],
		genres: ["Fantasy", "Teen"]
	},{ 
		title: "The Architect",
		year: 2006,
		cast: ["Anthony LaPaglia", "Viola Davis", "Isabella Rossellini"],
		genres: ["Drama"]
	},{ 
		title: "Art School Confidential",
		year: 2006,
		cast: ["Max Minghella", "Sophia Myles", "John Malkovich"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Artie Lange's Beer League",
		year: 2006,
		cast: ["Artie Lange", "Ralph Macchio"],
		genres: ["Comedy"]
	},{ 
		title: "As You Like It",
		year: 2006,
		cast: ["Kevin Kline", "Bryce Dallas Howard", "Alfred Molina"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Asian Stories",
		year: 2006,
		cast: ["James Kyson Lee", "Kirt Kishita"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Ask the Dust",
		year: 2006,
		cast: ["Colin Farrell", "Salma Hayek"],
		genres: ["Drama"]
	},{ 
		title: "The Astronaut Farmer",
		year: 2006,
		cast: ["Billy Bob Thornton", "Virginia Madsen", "Bruce Dern", "Bruce Willis"],
		genres: ["Drama"]
	},{ 
		title: "ATL",
		year: 2006,
		cast: ["T.I.", "Lauren London", "Evan Ross", "Big Boi"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Automaton Transfusion",
		year: 2006,
		cast: ["Garrett Jones"],
		genres: ["Horror"]
	},{ 
		title: "Automatons",
		year: 2006,
		cast: ["Angus Scrimm"],
		genres: ["Science Fiction"]
	},{ 
		title: "Awesome; I Fuckin' Shot That!",
		year: 2006,
		cast: ["Beastie Boys"],
		genres: ["Performance"]
	},{ 
		title: "Babel",
		year: 2006,
		cast: ["Brad Pitt", "Cate Blanchett", "Gael García Bernal", "Kōji Yakusho"],
		genres: ["Drama"]
	},{ 
		title: "Bambi II",
		year: 2006,
		cast: ["Alexander Gould", "Patrick Stewart", "Brendon Baerg"],
		genres: ["Animated"]
	},{ 
		title: "Barnyard",
		year: 2006,
		cast: ["Kevin James", "Courteney Cox", "Sam Elliott", "Danny Glover"],
		genres: ["Animated"]
	},{ 
		title: "Basic Instinct 2",
		year: 2006,
		cast: ["Sharon Stone", "David Morrissey", "David Thewlis", "Charlotte Rampling"],
		genres: ["Thriller"]
	},{ 
		title: "The Beach Party at the Threshold of Hell",
		year: 2006,
		cast: ["Kevin Wheatley", "Bill English"],
		genres: ["Comedy"]
	},{ 
		title: "Beerfest",
		year: 2006,
		cast: ["Paul Soter", "Erik Stolhanske"],
		genres: ["Comedy"]
	},{ 
		title: "Behind the Mask: The Rise of Leslie Vernon",
		year: 2006,
		cast: ["Nathan Baesel", "Robert Englund", "Angela Goethals"],
		genres: ["Satire"]
	},{ 
		title: "Bella",
		year: 2006,
		cast: ["Eduardo Verástegui", "Tammy Blanchard", "Manny Pérez"],
		genres: ["Drama"]
	},{ 
		title: "The Benchwarmers",
		year: 2006,
		cast: ["Rob Schneider", "David Spade", "Jon Heder"],
		genres: ["Comedy"]
	},{ 
		title: "Beyond Conviction",
		year: 2006,
		cast: ["the healing and resolution of three crime victims"],
		genres: ["Documentary"]
	},{ 
		title: "Bickford Shmeckler's Cool Ideas",
		year: 2006,
		cast: ["Patrick Fugit", "Olivia Wilde", "Fran Kranz", "John Cho"],
		genres: ["Comedy"]
	},{ 
		title: "The Big Bad Swim",
		year: 2006,
		cast: ["Paget Brewster", "Jeff Branson", "Jess Weixler"],
		genres: ["Comedy"]
	},{ 
		title: "Big Bad Wolf",
		year: 2006,
		cast: ["Kimberly J. Brown", "Trevor Duke", "Sarah Christine Smith"],
		genres: ["Horror"]
	},{ 
		title: "Big Dreams Little Tokyo",
		year: 2006,
		cast: ["David Boyd"],
		genres: ["Comedy"]
	},{ 
		title: "Big Momma's House 2",
		year: 2006,
		cast: ["Martin Lawrence"],
		genres: ["Comedy"]
	},{ 
		title: "Black Christmas",
		year: 2006,
		cast: ["Katie Cassidy", "Michelle Trachtenberg", "Kristen Cloke", "Crystal Lowe"],
		genres: ["Horror"]
	},{ 
		title: "The Black Dahlia",
		year: 2006,
		cast: ["Josh Hartnett", "Scarlett Johansson", "Aaron Eckhart", "Hilary Swank"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Black Gold",
		year: 2006,
		cast: ["international", "coffee", "trade"],
		genres: ["Documentary"]
	},{ 
		title: "Blind Dating",
		year: 2006,
		cast: ["Chris Pine", "Eddie Kaye Thomas", "Anjali Jay"],
		genres: ["Comedy"]
	},{ 
		title: "Blood Diamond",
		year: 2006,
		cast: ["Leonardo DiCaprio", "Jennifer Connelly", "Djimon Hounsou"],
		genres: ["Drama"]
	},{ 
		title: "Blood Tea and Red String",
		year: 2006,
		cast: [],
		genres: ["Animated"]
	},{ 
		title: "Bloody Mary",
		year: 2006,
		cast: ["Jaason Simmons", "Kim Tyler", "Matt Borlenghi"],
		genres: ["Horror"]
	},{ 
		title: "Bobby",
		year: 2006,
		cast: ["Harry Belafonte", "Joy Bryant", "Nick Cannon", "Laurence Fishburne", "Anthony Hopkins", "Helen Hunt", "Ashton Kutcher", "Shia LaBeouf", "Lindsay Lohan", "Demi Moore", "Christian Slater", "Martin Sheen", "Sharon Stone"],
		genres: ["Drama"]
	},{ 
		title: "Borat! Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
		year: 2006,
		cast: ["Sacha Baron Cohen", "Ken Davitian", "Luenell"],
		genres: ["Satire"]
	},{ 
		title: "Bordertown",
		year: 2006,
		cast: ["Jennifer Lopez", "Antonio Banderas"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Brand Upon the Brain!",
		year: 2006,
		cast: ["Sullivan Brown", "Gretchen Krich", "Maya Lawson", "Erik Steffen Maahs"],
		genres: ["Drama", "Silent"]
	},{ 
		title: "Breaking and Entering",
		year: 2006,
		cast: ["Jude Law", "Juliette Binoche", "Robni Wright Penn"],
		genres: ["Romance"]
	},{ 
		title: "The Break-Up",
		year: 2006,
		cast: ["Vince Vaughn", "Jennifer Aniston"],
		genres: ["Romance"]
	},{ 
		title: "The Breed",
		year: 2006,
		cast: ["Michelle Rodriguez", "Eric Lively", "Oliver Hudson"],
		genres: ["Horror"]
	},{ 
		title: "The Bridge",
		year: 2006,
		cast: ["suicide", "at", "Golden Gate Bridge"],
		genres: ["Documentary"]
	},{ 
		title: "Broken Bridges",
		year: 2006,
		cast: ["Toby Keith", "Kelly Preston", "Willie Nelson", "Lindsey Haun"],
		genres: ["Musical"]
	},{ 
		title: "Busgirl",
		year: 2006,
		cast: ["Leah Miller"],
		genres: ["Drama"]
	},{ 
		title: "Caffeine",
		year: 2006,
		cast: ["Mena Suvari", "Marsha Thomason", "Katherine Heigl"],
		genres: ["Comedy"]
	},{ 
		title: "Cars",
		year: 2006,
		cast: ["Paul Newman", "Owen Wilson", "Larry the Cable Guy", "Tony Shalhoub", "Bonnie Hunt"],
		genres: ["Animated"]
	},{ 
		title: "Casino Royale",
		year: 2006,
		cast: ["Daniel Craig", "Eva Green", "Mads Mikkelsen", "Judi Dench", "Giancarlo Giannini", "Jeffrey Wright"],
		genres: ["Action"]
	},{ 
		title: "Catch a Fire",
		year: 2006,
		cast: ["Tim Robbins", "Derek Luke"],
		genres: ["Drama"]
	},{ 
		title: "The Cats of Mirikitani",
		year: 2006,
		cast: ["the life of", "Japanese American", "painter Jimmy Mirikitani"],
		genres: ["Documentary"]
	},{ 
		title: "Chalk",
		year: 2006,
		cast: ["Chris Mass"],
		genres: ["Satire"]
	},{ 
		title: "Charlotte's Web",
		year: 2006,
		cast: ["Dakota Fanning", "Dominic Scott Kay", "Julia Roberts", "Steve Buscemi"],
		genres: ["Family"]
	},{ 
		title: "Chasing the Horizon",
		year: 2006,
		cast: ["the", "Baja 1000", "off-road race"],
		genres: ["Documentary"]
	},{ 
		title: "Children of Men",
		year: 2006,
		cast: ["Clive Owen", "Julianne Moore"],
		genres: ["Science Fiction"]
	},{ 
		title: "Christmas at Maxwell's",
		year: 2006,
		cast: ["Andrew May", "Jack Hourigan"],
		genres: ["Drama"]
	},{ 
		title: "Church Ball",
		year: 2006,
		cast: ["Fred Willard", "Andrew Wilson", "Clint Howard"],
		genres: ["Comedy"]
	},{ 
		title: "Civic Duty",
		year: 2006,
		cast: ["Peter Krause", "Khaled Abol Naga", "Richard Schiff"],
		genres: ["Drama"]
	},{ 
		title: "Clear Cut: The Story of Philomath, Oregon",
		year: 2006,
		cast: ["timber industry", "in", "Philomath", "Oregon"],
		genres: ["Documentary"]
	},{ 
		title: "Clerks II",
		year: 2006,
		cast: ["Brian O'Halloran", "Jeff Anderson", "Rosario Dawson", "Jason Mewes", "Kevin Smith", "Trevor Fehrman"],
		genres: ["Comedy"]
	},{ 
		title: "Click",
		year: 2006,
		cast: ["Adam Sandler", "Kate Beckinsale", "Christopher Walken", "David Hasselhoff"],
		genres: ["Comedy"]
	},{ 
		title: "Cocaine Cowboys",
		year: 2006,
		cast: ["cocaine", "in Miami during 1970s and 1980s"],
		genres: ["Documentary"]
	},{ 
		title: "Coffee Date",
		year: 2006,
		cast: ["Jonathan Bray", "Wilson Cruz"],
		genres: ["Comedy"]
	},{ 
		title: "Color of the Cross",
		year: 2006,
		cast: ["Jean-Claude La Marre", "Debbi Morgan", "Elya Baskin"],
		genres: ["Biography"]
	},{ 
		title: "Come Early Morning",
		year: 2006,
		cast: ["Ashley Judd", "Jeffrey Donovan", "Ray McKinnon"],
		genres: ["Drama"]
	},{ 
		title: "The Contract",
		year: 2006,
		cast: ["Morgan Freeman", "John Cusack"],
		genres: ["Drama"]
	},{ 
		title: "Copying Beethoven",
		year: 2006,
		cast: ["Ed Harris", "Diane Kruger"],
		genres: ["Drama"]
	},{ 
		title: "The Covenant",
		year: 2006,
		cast: ["Steven Strait", "Sebastian Stan", "Laura Ramsey", "Taylor Kitsch"],
		genres: ["Horror"]
	},{ 
		title: "Crank",
		year: 2006,
		cast: ["Jason Statham", "Amy Smart"],
		genres: ["Action"]
	},{ 
		title: "Crossover",
		year: 2006,
		cast: ["Anthony Mackie", "Wesley Jonathan", "Wayne Brady", "Lil' JJ"],
		genres: ["Action"]
	},{ 
		title: "Crude Impact",
		year: 2006,
		cast: ["the effect of", "fossil fuels"],
		genres: ["Documentary"]
	},{ 
		title: "Curious George",
		year: 2006,
		cast: ["Will Ferrell", "Drew Barrymore", "David Cross", "Eugene Levy"],
		genres: ["Animated"]
	},{ 
		title: "The Curiosity of Chance",
		year: 2006,
		cast: ["Tad Hilgenbrink", "Brett Chukerman"],
		genres: ["Comedy"]
	},{ 
		title: "The Da Vinci Code",
		year: 2006,
		cast: ["Tom Hanks", "Audrey Tautou", "Ian McKellen", "Alfred Molina", "Paul Bettany", "Jean Reno", "Jürgen Prochnow"],
		genres: ["Thriller"]
	},{ 
		title: "Daft Punk's Electroma",
		year: 2006,
		cast: ["Peter Hurteau", "Michael Reich"],
		genres: ["Science Fiction"]
	},{ 
		title: "Dance Party USA",
		year: 2006,
		cast: ["Cole Pensinger", "Anna Kavan", "Ryan White"],
		genres: ["Drama"]
	},{ 
		title: "Danika",
		year: 2006,
		cast: ["Marisa Tomei", "Regina Hall", "Craig Bierko"],
		genres: ["Horror"]
	},{ 
		title: "Danny Roane: First Time Director",
		year: 2006,
		cast: ["Andy Dick", "Frankie Muniz", "Jack Black"],
		genres: ["Comedy"]
	},{ 
		title: "Dark Corners",
		year: 2006,
		cast: ["Thora Birch", "Toby Stephens", "Christien Anholt"],
		genres: ["Horror"]
	},{ 
		title: "Dark Ride",
		year: 2006,
		cast: ["Jamie-Lynn Sigler", "Patrick Renna", "Jennifer Tisdale"],
		genres: ["Horror"]
	},{ 
		title: "The Darwin Awards",
		year: 2006,
		cast: ["Joseph Fiennes", "Winona Ryder", "David Arquette"],
		genres: ["Comedy"]
	},{ 
		title: "Date Movie",
		year: 2006,
		cast: ["Alyson Hannigan", "Adam Campbell", "Jennifer Coolidge", "Tony Cox"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Dave Chappelle's Block Party",
		year: 2006,
		cast: ["a", "block party", "held in", "Clinton Hill", "Brooklyn", "by", "Dave Chappelle"],
		genres: ["Comedy"]
	},{ 
		title: "Day Night Day Night",
		year: 2006,
		cast: ["Luisa Williams"],
		genres: ["Drama"]
	},{ 
		title: "Day on Fire",
		year: 2006,
		cast: ["Olympia Dukakis", "Carmen Chaplin", "Martin Donovan"],
		genres: ["Drama"]
	},{ 
		title: "The Dead Girl",
		year: 2006,
		cast: ["Toni Collette", "Brittany Murphy"],
		genres: ["Drama"]
	},{ 
		title: "The Death of Poe",
		year: 2006,
		cast: ["Mark Redfield", "Kevin G. Shinnick"],
		genres: ["Horror"]
	},{ 
		title: "Déjà Vu",
		year: 2006,
		cast: ["Denzel Washington", "Val Kilmer"],
		genres: ["Science Fiction"]
	},{ 
		title: "Deck the Halls",
		year: 2006,
		cast: ["Danny DeVito", "Matthew Broderick", "Kristin Davis", "Kristin Chenoweth"],
		genres: ["Comedy"]
	},{ 
		title: "Deliver Us from Evil",
		year: 2006,
		cast: ["the life of", "Oliver O'Grady"],
		genres: ["Documentary"]
	},{ 
		title: "The Departed",
		year: 2006,
		cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg", "Alec Baldwin", "Martin Sheen", "Vera Farmiga", "Anthony Anderson", "Ray Winstone"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Devil and Daniel Johnston",
		year: 2006,
		cast: ["life and music of", "Daniel Johnston"],
		genres: ["Documentary"]
	},{ 
		title: "The Devil Wears Prada",
		year: 2006,
		cast: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci", "Adrian Grenier", "Simon Baker"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Diggers",
		year: 2006,
		cast: ["Paul Rudd", "Lauren Ambrose", "Ron Eldard"],
		genres: ["Comedy"]
	},{ 
		title: "Disappearances",
		year: 2006,
		cast: ["Kris Kristofferson"],
		genres: ["Drama"]
	},{ 
		title: "Dixie Chicks: Shut Up and Sing",
		year: 2006,
		cast: ["the career of the", "Dixie Chicks"],
		genres: ["Documentary"]
	},{ 
		title: "DOA: Dead or Alive",
		year: 2006,
		cast: ["Jaime Pressly", "Holly Valance", "Sarah Carter", "Natassia Malthe", "Devon Aoki", "Eric Roberts"],
		genres: ["Action"]
	},{ 
		title: "The Dog Problem",
		year: 2006,
		cast: ["Giovanni Ribisi", "Lynn Collins", "Kevin Corrigan"],
		genres: ["Comedy"]
	},{ 
		title: "Dreamgirls",
		year: 2006,
		cast: ["Jamie Foxx", "Beyoncé Knowles", "Eddie Murphy", "Jennifer Hudson", "Anika Noni Rose"],
		genres: ["Musical"]
	},{ 
		title: "Dreamland",
		year: 2006,
		cast: ["Agnes Bruckner", "Kelli Garner", "Justin Long"],
		genres: ["Drama"]
	},{ 
		title: "Driftwood",
		year: 2006,
		cast: ["Raviv Ullman", "Diamond Dallas Page", "Talan Torriero"],
		genres: ["Horror"]
	},{ 
		title: "Disaster Zone: Volcano in New York",
		year: 2006,
		cast: ["Costas Mandylor", "Alexandra Paul", "Michael Ironside"],
		genres: ["Disaster"]
	},{ 
		title: "East Side Story",
		year: 2006,
		cast: ["René Alvarado", "Steve Callahan"],
		genres: ["Comedy"]
	},{ 
		title: "Employee of the Month",
		year: 2006,
		cast: ["Dane Cook", "Jessica Simpson", "Dax Shepard"],
		genres: ["Comedy"]
	},{ 
		title: "Encounter Point",
		year: 2006,
		cast: ["violence in", "Israel", "between", "Israelis", "and", "Palestinians"],
		genres: ["Documentary"]
	},{ 
		title: "End Game",
		year: 2006,
		cast: ["Cuba Gooding, Jr.", "James Woods", "Angie Harmon"],
		genres: ["Action"]
	},{ 
		title: "End of the Spear",
		year: 2006,
		cast: ["Louie Leonardo", "Chad Allen", "Jack Guzman"],
		genres: ["Drama"]
	},{ 
		title: "Eight Below",
		year: 2006,
		cast: ["Paul Walker", "Bruce Greenwood"],
		genres: ["Adventure"]
	},{ 
		title: "Eragon",
		year: 2006,
		cast: ["Ed Speleers", "Jeremy Irons", "Sienna Guillory", "Robert Carlyle", "John Malkovich"],
		genres: ["Fantasy"]
	},{ 
		title: "Everyone's Hero",
		year: 2006,
		cast: ["Jake T. Austin", "Rob Reiner", "William H. Macy"],
		genres: ["Animated"]
	},{ 
		title: "Evil Bong",
		year: 2006,
		cast: ["David Weidoff"],
		genres: ["Comedy"]
	},{ 
		title: "Expiration Date",
		year: 2006,
		cast: ["Rober Guthrie"],
		genres: ["Comedy"]
	},{ 
		title: "Facing the Giants",
		year: 2006,
		cast: ["Alex Kendrick", "Shannen Fields", "Tracy Goode"],
		genres: ["Drama"]
	},{ 
		title: "Factory Girl",
		year: 2006,
		cast: ["Sienna Miller", "Hayden Christensen", "Jimmy Fallon"],
		genres: ["Biography"]
	},{ 
		title: "Failure to Launch",
		year: 2006,
		cast: ["Matthew McConaughey", "Sarah Jessica Parker", "Terry Bradshaw", "Kathy Bates"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Fall",
		year: 2006,
		cast: ["Lee Pace", "Catinca Untaru", "Justine Waddell"],
		genres: ["Fantasy", "Adventure"]
	},{ 
		title: "The Fast and the Furious: Tokyo Drift",
		year: 2006,
		cast: ["Lucas Black", "Bow Wow"],
		genres: ["Action"]
	},{ 
		title: "Fast Food Nation",
		year: 2006,
		cast: ["Greg Kinnear", "Wilmer Valderrama", "Avril Lavigne"],
		genres: ["Drama"]
	},{ 
		title: "Fatwa",
		year: 2006,
		cast: ["Lauren Holly", "Lacey Chabert", "John Doman"],
		genres: ["Drama"]
	},{ 
		title: "Fay Grim",
		year: 2006,
		cast: ["Parker Posey", "James Urbaniak", "Liam Aiken"],
		genres: ["Action"]
	},{ 
		title: "Fifty Pills",
		year: 2006,
		cast: ["Lou Taylor Pucci", "Kristen Bell", "John Hensley"],
		genres: ["Comedy"]
	},{ 
		title: "Final Destination 3",
		year: 2006,
		cast: ["Mary Elizabeth Winstead", "Ryan Merriman", "Kris Lemche", "Texas Battle"],
		genres: ["Horror"]
	},{ 
		title: "Find Me Guilty",
		year: 2006,
		cast: ["Vin Diesel", "Linus Roache", "Ron Silver", "Alex Rocco", "Peter Dinklage", "Annabella Sciorra"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Firewall",
		year: 2006,
		cast: ["Harrison Ford", "Paul Bettany", "Virginia Madsen", "Mary Lynn Rajskub"],
		genres: ["Thriller"]
	},{ 
		title: "First Snow",
		year: 2006,
		cast: ["Guy Pearce", "Piper Perabo", "J.K. Simmons"],
		genres: ["Thriller"]
	},{ 
		title: "Flags of Our Fathers",
		year: 2006,
		cast: ["Ryan Phillippe", "Jesse Bradford", "Adam Beach"],
		genres: ["War"]
	},{ 
		title: "Flicka",
		year: 2006,
		cast: ["Alison Lohman", "Tim McGraw", "Maria Bello"],
		genres: ["Family"]
	},{ 
		title: "Flock of Dodos",
		year: 2006,
		cast: ["the debate between", "intelligent design", "and", "evolution"],
		genres: ["Documentary"]
	},{ 
		title: "Flourish",
		year: 2006,
		cast: ["Jennifer Morrison", "Jesse Spencer", "Leighton Meester"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Flushed Away",
		year: 2006,
		cast: ["Kate Winslet", "Hugh Jackman", "Ian McKellen", "Andy Serkis"],
		genres: ["Animated"]
	},{ 
		title: "Flyboys",
		year: 2006,
		cast: ["James Franco", "Martin Henderson", "Jean Reno"],
		genres: ["War"]
	},{ 
		title: "For Your Consideration",
		year: 2006,
		cast: ["Catherine O'Hara", "Parker Posey", "Harry Shearer", "Eugene Levy", "Fred Willard", "Jane Lynch"],
		genres: ["Comedy"]
	},{ 
		title: "Forget About It",
		year: 2006,
		cast: ["Burt Reynolds", "Robert Loggia", "Charles Durning"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Fountain",
		year: 2006,
		cast: ["Hugh Jackman", "Rachel Weisz", "Ellen Burstyn"],
		genres: ["Science Fiction"]
	},{ 
		title: "Freedomland",
		year: 2006,
		cast: ["Samuel L. Jackson", "Julianne Moore"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Free Jimmy",
		year: 2006,
		cast: ["Jeremy Price", "Woody Harrelson", "Simon Pegg", "Phil Daniels"],
		genres: ["Animated"]
	},{ 
		title: "Friends with Money",
		year: 2006,
		cast: ["Jennifer Aniston", "Joan Cusack", "Catherine Keener", "Frances McDormand"],
		genres: ["Drama"]
	},{ 
		title: "Full Grown Men",
		year: 2006,
		cast: ["Matt McGrath", "Judah Friedlander", "Alan Cumming"],
		genres: ["Comedy"]
	},{ 
		title: "Fur",
		year: 2006,
		cast: ["Nicole Kidman", "Robert Downey, Jr."],
		genres: ["Drama"]
	},{ 
		title: "Game 6",
		year: 2006,
		cast: ["Michael Keaton", "Griffin Dunne", "Robert Downey, Jr."],
		genres: ["Comedy"]
	},{ 
		title: "Garfield: A Tail of Two Kitties",
		year: 2006,
		cast: ["Breckin Meyer", "Jennifer Love Hewitt", "Billy Connolly", "Bill Murray"],
		genres: ["Comedy"]
	},{ 
		title: "The Genius Club",
		year: 2006,
		cast: ["Stephen Baldwin", "Tom Sizemore", "Jack Scalia"],
		genres: ["Drama"]
	},{ 
		title: "GI Jesus",
		year: 2006,
		cast: ["Joe Arquette"],
		genres: ["Fantasy"]
	},{ 
		title: "Glastonbury",
		year: 2006,
		cast: ["history of", "Glastonbury Festival"],
		genres: ["Documentary"]
	},{ 
		title: "Glory Road",
		year: 2006,
		cast: ["Josh Lucas", "Derek Luke", "Jon Voight"],
		genres: ["Drama"]
	},{ 
		title: "God Grew Tired of Us",
		year: 2006,
		cast: ["the", "Lost Boys of Sudan"],
		genres: ["Documentary"]
	},{ 
		title: "The Good German",
		year: 2006,
		cast: ["George Clooney", "Cate Blanchett", "Tobey Maguire"],
		genres: ["Drama", "War"]
	},{ 
		title: "The Good Shepherd",
		year: 2006,
		cast: ["Matt Damon", "Angelina Jolie", "Robert De Niro", "Alec Baldwin", "William Hurt", "Michael Gambon", "Timothy Hutton"],
		genres: ["Drama"]
	},{ 
		title: "A Good Year",
		year: 2006,
		cast: ["Russell Crowe"],
		genres: ["Drama"]
	},{ 
		title: "Goya's Ghosts",
		year: 2006,
		cast: ["Natalie Portman", "Javier Bardem", "Stellan Skarsgård"],
		genres: ["Drama"]
	},{ 
		title: "Grandma's Boy",
		year: 2006,
		cast: ["Linda Cardellini", "Allen Covert", "Peter Dante", "Doris Roberts", "Shirley Jones"],
		genres: ["Comedy"]
	},{ 
		title: "The Great Warming",
		year: 2006,
		cast: ["climate change"],
		genres: ["Documentary"]
	},{ 
		title: "Gridiron Gang",
		year: 2006,
		cast: ["Dwayne Johnson"],
		genres: ["Drama"]
	},{ 
		title: "The Groomsmen",
		year: 2006,
		cast: ["Edward Burns", "John Leguizamo", "Matthew Lillard", "Donal Logue"],
		genres: ["Comedy"]
	},{ 
		title: "The Grudge 2",
		year: 2006,
		cast: ["Sarah Michelle Gellar", "Amber Tamblyn"],
		genres: ["Horror"]
	},{ 
		title: "The Guardian",
		year: 2006,
		cast: ["Kevin Costner", "Ashton Kutcher"],
		genres: ["Drama"]
	},{ 
		title: "The Guatemalan Handshake",
		year: 2006,
		cast: ["Katy Haywood"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "A Guide to Recognizing Your Saints",
		year: 2006,
		cast: ["Robert Downey, Jr.", "Shia LaBeouf", "Chazz Palminteri", "Dianne Wiest"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Half Nelson",
		year: 2006,
		cast: ["Ryan Gosling", "Shareeka Epps"],
		genres: ["Drama"]
	},{ 
		title: "The Hamiltons",
		year: 2006,
		cast: ["Cory Knauf", "Samuel Child", "Joseph McKelheer"],
		genres: ["Horror"]
	},{ 
		title: "Happy Feet",
		year: 2006,
		cast: ["Elijah Wood", "Robin Williams", "Brittany Murphy", "Hugh Jackman"],
		genres: ["Animated", "Musical"]
	},{ 
		title: "The Hard Corps",
		year: 2006,
		cast: ["Jean-Claude Van Damme", "Vivica A. Fox", "Razaaq Adoti"],
		genres: ["Action"]
	},{ 
		title: "Harsh Times",
		year: 2006,
		cast: ["Christian Bale", "Freddy Rodríguez", "Eva Longoria"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Hawk Is Dying",
		year: 2006,
		cast: ["Paul Giamatti", "Michelle Williams"],
		genres: ["Drama"]
	},{ 
		title: "Header",
		year: 2006,
		cast: ["Jake Suffian"],
		genres: ["Horror"]
	},{ 
		title: "The Heart of Steel",
		year: 2006,
		cast: ["aftermath of", "September 11 attacks"],
		genres: ["Documentary"]
	},{ 
		title: "The Heart of the Game",
		year: 2006,
		cast: ["the", "Roosevelt Roughriders", "girls basketball team"],
		genres: ["Documentary"]
	},{ 
		title: "The Hills Have Eyes",
		year: 2006,
		cast: ["Aaron Stanford", "Emilie de Ravin", "Ted Levine", "Dan Byrd"],
		genres: ["Horror"]
	},{ 
		title: "Hip-Hop: Beyond Beats and Rhymes",
		year: 2006,
		cast: ["violence", "homophobia", "and", "sexism", "in", "hip hop"],
		genres: ["Documentary"]
	},{ 
		title: "The Holiday",
		year: 2006,
		cast: ["Cameron Diaz", "Kate Winslet", "Jude Law", "Jack Black"],
		genres: ["Romance"]
	},{ 
		title: "Hollywoodland",
		year: 2006,
		cast: ["Adrien Brody", "Diane Lane", "Ben Affleck"],
		genres: ["Biography", "Crime"]
	},{ 
		title: "Hollow Man 2",
		year: 2006,
		cast: ["Christian Slater", "Peter Facinelli", "Laura Regan"],
		genres: ["Science Fiction"]
	},{ 
		title: "Home of the Brave",
		year: 2006,
		cast: ["Samuel L. Jackson", "Jessica Biel", "Brian Presley", "50 Cent"],
		genres: ["Drama"]
	},{ 
		title: "Hood of Horror",
		year: 2006,
		cast: ["Snoop Dogg", "Ernie Hudson", "Danny Trejo"],
		genres: ["Horror"]
	},{ 
		title: "Hoot",
		year: 2006,
		cast: ["Luke Wilson", "Brie Larson", "Logan Lerman", "Cody Linley"],
		genres: ["Family"]
	},{ 
		title: "The Hottest State",
		year: 2006,
		cast: ["Mark Webber", "Catalina Sandino Moreno", "Michelle Williams"],
		genres: ["Drama"]
	},{ 
		title: "How to Eat Fried Worms",
		year: 2006,
		cast: ["Luke Benward", "Adam Hicks"],
		genres: ["Comedy"]
	},{ 
		title: "Hurricane on the Bayou",
		year: 2006,
		cast: ["wetlands of Louisiana", "and", "Hurricane Katrina"],
		genres: ["Documentary"]
	},{ 
		title: "I Want Someone to Eat Cheese With",
		year: 2006,
		cast: ["Jeff Garlin", "Sarah Silverman", "Bonnie Hunt"],
		genres: ["Comedy"]
	},{ 
		title: "Ice Age: The Meltdown",
		year: 2006,
		cast: ["Ray Romano", "John Leguizamo", "Denis Leary", "Queen Latifah"],
		genres: ["Animated"]
	},{ 
		title: "Idiocracy",
		year: 2006,
		cast: ["Luke Wilson", "Maya Rudolph"],
		genres: ["Comedy", "Science Fiction"]
	},{ 
		title: "Idlewild",
		year: 2006,
		cast: ["André Benjamin", "Big Boi"],
		genres: ["Crime"]
	},{ 
		title: "The Illusionist",
		year: 2006,
		cast: ["Edward Norton", "Paul Giamatti", "Jessica Biel"],
		genres: ["Drama"]
	},{ 
		title: "An Inconvenient Truth",
		year: 2006,
		cast: ["global warming"],
		genres: ["Documentary"]
	},{ 
		title: "Infamous",
		year: 2006,
		cast: ["Toby Jones", "Sandra Bullock", "Daniel Craig", "Lee Pace", "Jeff Daniels", "Hope Davis", "Sigourney Weaver"],
		genres: ["Biography", "Crime"]
	},{ 
		title: "Inland Empire",
		year: 2006,
		cast: ["Laura Dern", "Jeremy Irons", "Justin Theroux", "Harry Dean Stanton"],
		genres: ["Drama"]
	},{ 
		title: "Inside Man",
		year: 2006,
		cast: ["Denzel Washington", "Clive Owen", "Jodie Foster"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Insurgents",
		year: 2006,
		cast: ["John Shea", "Mary Stuart Masterson", "Juliette Marquis"],
		genres: ["Drama"]
	},{ 
		title: "Invincible",
		year: 2006,
		cast: ["Mark Wahlberg", "Elizabeth Banks"],
		genres: ["Biography"]
	},{ 
		title: "Interkosmos",
		year: 2006,
		cast: ["Dean DeMatteis"],
		genres: ["Drama"]
	},{ 
		title: "Iraq for Sale: The War Profiteers",
		year: 2006,
		cast: ["Iraq War", "companies with", "no-bid contracts"],
		genres: ["Documentary"]
	},{ 
		title: "Iraq in Fragments",
		year: 2006,
		cast: ["the effects of the", "Iraq War", "on", "Iraq"],
		genres: ["Documentary"]
	},{ 
		title: "Irish Jam",
		year: 2006,
		cast: ["Eddie Griffin"],
		genres: ["Comedy"]
	},{ 
		title: "Jackass Number Two",
		year: 2006,
		cast: ["Johnny Knoxville", "Steve-O", "Bam Margera", "Chris Pontius"],
		genres: ["Comedy"]
	},{ 
		title: "Jack Smith and the Destruction of Atlantis",
		year: 2006,
		cast: ["Jack Smith"],
		genres: ["Documentary"]
	},{ 
		title: "Jesus Camp",
		year: 2006,
		cast: ["a", "Pentecostal", "–", "Charismatic Christian", "summer camp"],
		genres: ["Documentary"]
	},{ 
		title: "Jewish American Princess",
		year: 2006,
		cast: ["search for perfect Jewish man"],
		genres: ["Documentary"]
	},{ 
		title: "Jimmy and Judy",
		year: 2006,
		cast: ["Edward Furlong", "Rachael Bella"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "John Tucker Must Die",
		year: 2006,
		cast: ["Jesse Metcalfe", "Brittany Snow", "Ashanti", "Sophia Bush", "Arielle Kebbel", "Jenny McCarthy"],
		genres: ["Comedy"]
	},{ 
		title: "Jonestown: The Life and Death of Peoples Temple",
		year: 2006,
		cast: ["mass suicide", "of", "Peoples Temple", "and leader", "Jim Jones"],
		genres: ["Documentary"]
	},{ 
		title: "Just My Luck",
		year: 2006,
		cast: ["Lindsay Lohan", "Chris Pine"],
		genres: ["Comedy"]
	},{ 
		title: "Kalamazoo?",
		year: 2006,
		cast: ["Josie Davis", "Mayim Bialik"],
		genres: ["Comedy"]
	},{ 
		title: "Karla",
		year: 2006,
		cast: ["Laura Prepon", "Misha Collins"],
		genres: ["Drama"]
	},{ 
		title: "Keeping Up with the Steins",
		year: 2006,
		cast: ["Daryl Sabara", "Jami Gertz", "Jeremy Piven"],
		genres: ["Comedy"]
	},{ 
		title: "Kill Your Darlings",
		year: 2006,
		cast: ["Lolita Davidovich", "Andreas Wilson", "Fares Fares"],
		genres: ["Comedy"]
	},{ 
		title: "Kurt Cobain About a Son",
		year: 2006,
		cast: ["life and music of", "Kurt Cobain"],
		genres: ["Documentary"]
	},{ 
		title: "Lady in the Water",
		year: 2006,
		cast: ["Paul Giamatti", "Bryce Dallas Howard"],
		genres: ["Thriller"]
	},{ 
		title: "The Lake House",
		year: 2006,
		cast: ["Keanu Reeves", "Sandra Bullock"],
		genres: ["Romance"]
	},{ 
		title: "Land of the Blind",
		year: 2006,
		cast: ["Donald Sutherland", "Ralph Fiennes"],
		genres: ["Drama"]
	},{ 
		title: "Larry the Cable Guy: Health Inspector",
		year: 2006,
		cast: ["Larry the Cable Guy", "Iris Bahr", "Bruce Bruce"],
		genres: ["Comedy"]
	},{ 
		title: "The Last Kiss",
		year: 2006,
		cast: ["Zach Braff", "Jacinda Barrett", "Rachel Bilson"],
		genres: ["Drama"]
	},{ 
		title: "Last Holiday",
		year: 2006,
		cast: ["Queen Latifah", "LL Cool J", "Timothy Hutton", "Gérard Depardieu"],
		genres: ["Romance"]
	},{ 
		title: "The Last Winter",
		year: 2006,
		cast: ["Ron Perlman", "James LeGros", "Connie Britton"],
		genres: ["Horror"]
	},{ 
		title: "The Legend of Simon Conjurer",
		year: 2006,
		cast: ["Jon Voight"],
		genres: ["Action"]
	},{ 
		title: "Let's Go to Prison",
		year: 2006,
		cast: ["Will Arnett", "Dax Shepard", "Chi McBride"],
		genres: ["Comedy"]
	},{ 
		title: "Letters from Iwo Jima",
		year: 2006,
		cast: ["Ken Watanabe", "Kazunari Ninomiya", "Tsuyoshi Ihara", "Ryō Kase"],
		genres: ["War"]
	},{ 
		title: "Lime Salted Love",
		year: 2006,
		cast: ["Kristanna Loken"],
		genres: ["Drama"]
	},{ 
		title: "Little Chenier",
		year: 2006,
		cast: ["Johnathon Schaech", "Frederick Koehler", "Tamara Braun"],
		genres: ["Drama"]
	},{ 
		title: "Little Children",
		year: 2006,
		cast: ["Kate Winslet", "Patrick Wilson", "Jennifer Connelly", "Jackie Earle Haley"],
		genres: ["Drama"]
	},{ 
		title: "Little Man",
		year: 2006,
		cast: ["Marlon Wayans", "Shawn Wayans", "Kerry Washington"],
		genres: ["Comedy"]
	},{ 
		title: "Little Miss Sunshine",
		year: 2006,
		cast: ["Greg Kinnear", "Steve Carell", "Toni Collette", "Paul Dano", "Abigail Breslin", "Alan Arkin"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Live Freaky! Die Freaky!",
		year: 2006,
		cast: ["Jason Schmidt", "Tim Armstrong"],
		genres: ["Animated"]
	},{ 
		title: "Live Free or Die",
		year: 2006,
		cast: ["Aaron Stanford", "Paul Schneider", "Michael Rapaport"],
		genres: ["Comedy"]
	},{ 
		title: "Local Color",
		year: 2006,
		cast: ["Armin Mueller-Stahl", "Trevor Morgan", "Ray Liotta"],
		genres: ["Drama"]
	},{ 
		title: "LOL",
		year: 2006,
		cast: ["Kevin Bewersdorf", "Joe Swanberg"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Lonely Hearts",
		year: 2006,
		cast: ["John Travolta", "Salma Hayek", "Jared Leto", "James Gandolfini"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Long Weekend",
		year: 2006,
		cast: ["Chris Klein", "Brendan Fehr"],
		genres: ["Comedy"]
	},{ 
		title: "Loren Cass",
		year: 2006,
		cast: ["Kayla Tabish", "Travis Maynard", "Lewis Brogan"],
		genres: ["Drama"]
	},{ 
		title: "Loving Annabelle",
		year: 2006,
		cast: ["Diane Gaidry", "Erin Kelly"],
		genres: ["Drama"]
	},{ 
		title: "Lucky Number Slevin",
		year: 2006,
		cast: ["Josh Hartnett", "Morgan Freeman", "Ben Kingsley", "Lucy Liu", "Stanley Tucci", "Bruce Willis"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Mad Cowgirl",
		year: 2006,
		cast: ["Sarah Lassez", "James Duval", "Walter Koenig"],
		genres: ["Drama"]
	},{ 
		title: "Madea's Family Reunion",
		year: 2006,
		cast: ["Tyler Perry", "Blair Underwood", "Lynn Whitfield", "Boris Kodjoe"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Man About Town",
		year: 2006,
		cast: ["Ben Affleck", "Rebecca Romijn", "John Cleese", "Jerry O'Connell", "Gina Gershon", "Bai Ling"],
		genres: ["Comedy"]
	},{ 
		title: "Man of the Year",
		year: 2006,
		cast: ["Robin Williams", "Laura Linney"],
		genres: ["Comedy"]
	},{ 
		title: "Marie Antoinette",
		year: 2006,
		cast: ["Kirsten Dunst", "Jason Schwartzman", "Judy Davis"],
		genres: ["Biography"]
	},{ 
		title: "The Marine",
		year: 2006,
		cast: ["John Cena", "Kelly Carlson", "Robert Patrick"],
		genres: ["Action"]
	},{ 
		title: "Mark of the Damned",
		year: 2006,
		cast: [],
		genres: ["Horror"]
	},{ 
		title: "Material Girls",
		year: 2006,
		cast: ["Hilary Duff", "Haylie Duff", "Anjelica Huston"],
		genres: ["Comedy"]
	},{ 
		title: "Matthew Barney: No Restraint",
		year: 2006,
		cast: ["filmmaking process of", "Matthew Barney", "Björk"],
		genres: ["Documentary"]
	},{ 
		title: "Maxed Out",
		year: 2006,
		cast: ["the", "credit card", "industry"],
		genres: ["Documentary"]
	},{ 
		title: "Miami Vice",
		year: 2006,
		cast: ["Jamie Foxx", "Colin Farrell", "Gong Li"],
		genres: ["Action"]
	},{ 
		title: "Mini's First Time",
		year: 2006,
		cast: ["Alec Baldwin", "Nikki Reed", "Luke Wilson"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Minotaur",
		year: 2006,
		cast: ["Tom Hardy", "Tony Todd", "Rutger Hauer"],
		genres: ["Horror"]
	},{ 
		title: "Miss Potter",
		year: 2006,
		cast: ["Renée Zellweger", "Ewan McGregor", "Emily Watson"],
		genres: ["Biography"]
	},{ 
		title: "Modern Man",
		year: 2006,
		cast: ["Eric Becker"],
		genres: ["Drama"]
	},{ 
		title: "Monster House",
		year: 2006,
		cast: ["Mitchel Musso", "Sam Lerner", "Spencer Locke", "Steve Buscemi"],
		genres: ["Animated"]
	},{ 
		title: "The Monster of Phantom Lake",
		year: 2006,
		cast: ["Josh Craig"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Moonshine",
		year: 2006,
		cast: ["Brian Greer"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Mustang Sally",
		year: 2006,
		cast: ["Elizabeth Daily", "Mark Anthony Parrish"],
		genres: ["Horror"]
	},{ 
		title: "My Country, My Country",
		year: 2006,
		cast: ["the life of Iraqis under American occupation"],
		genres: ["Documentary"]
	},{ 
		title: "Mission: Impossible III",
		year: 2006,
		cast: ["Tom Cruise", "Jonathan Rhys Meyers", "Philip Seymour Hoffman", "Ving Rhames"],
		genres: ["Action", "Spy"]
	},{ 
		title: "My Super Ex-Girlfriend",
		year: 2006,
		cast: ["Uma Thurman", "Luke Wilson", "Anna Faris"],
		genres: ["Superhero"]
	},{ 
		title: "Nacho Libre",
		year: 2006,
		cast: ["Jack Black"],
		genres: ["Comedy"]
	},{ 
		title: "National Lampoon's Van Wilder: The Rise of Taj",
		year: 2006,
		cast: ["Kal Penn", "Glen Barry", "Lauren Cohan"],
		genres: ["Comedy"]
	},{ 
		title: "The Nativity Story",
		year: 2006,
		cast: ["Keisha Castle-Hughes", "Shohreh Aghdashloo"],
		genres: ["Family"]
	},{ 
		title: "Neil Young: Heart of Gold",
		year: 2006,
		cast: ["Neil Young"],
		genres: ["Performance"]
	},{ 
		title: "Night at the Museum",
		year: 2006,
		cast: ["Ben Stiller", "Robin Williams", "Owen Wilson", "Dick Van Dyke", "Mickey Rooney", "Carla Gugino", "Jake Cherry"],
		genres: ["Fantasy"]
	},{ 
		title: "The Night Listener",
		year: 2006,
		cast: ["Robin Williams", "Toni Collette", "Bobby Cannavale", "Sandra Oh"],
		genres: ["Thriller"]
	},{ 
		title: "Night of the Living Dead 3D",
		year: 2006,
		cast: ["Brianna Brown"],
		genres: ["Horror"]
	},{ 
		title: "The Night of the White Pants",
		year: 2006,
		cast: ["Tom Wilkinson", "Selma Blair", "Nick Stahl"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Nightmare Man",
		year: 2006,
		cast: ["Gwen Davis"],
		genres: ["Horror"]
	},{ 
		title: "No Limit",
		year: 2006,
		cast: ["the professional", "poker", "tournament circuit"],
		genres: ["Documentary"]
	},{ 
		title: "O Jerusalem",
		year: 2006,
		cast: ["JJ Feild", "Saïd Taghmaoui"],
		genres: ["Drama"]
	},{ 
		title: "Occupation 101",
		year: 2006,
		cast: ["the", "Israeli–Palestinian conflict"],
		genres: ["Documentary"]
	},{ 
		title: "The Oh in Ohio",
		year: 2006,
		cast: ["Parker Posey", "Paul Rudd", "Danny DeVito", "Mischa Barton"],
		genres: ["Comedy"]
	},{ 
		title: "Old Joy",
		year: 2006,
		cast: ["Will Oldham", "Daniel London"],
		genres: ["Drama"]
	},{ 
		title: "The Omen",
		year: 2006,
		cast: ["Liev Schreiber", "Julia Stiles", "Seamus Davey-Fitzpatrick", "David Thewlis", "Mia Farrow"],
		genres: ["Horror"]
	},{ 
		title: "Once in a Lifetime: The Extraordinary Story of the New York Cosmos",
		year: 2006,
		cast: ["Matt Dillon", "(narrator)", "Pelé", "Giorgio Chinaglia"],
		genres: ["Documentary"]
	},{ 
		title: "One Night with the King",
		year: 2006,
		cast: ["Tiffany Dupont"],
		genres: ["Drama"]
	},{ 
		title: "The One Percent",
		year: 2006,
		cast: ["America's growing wealth gap"],
		genres: ["Documentary"]
	},{ 
		title: "Open Season",
		year: 2006,
		cast: ["Martin Lawrence", "Ashton Kutcher", "Debra Messing", "Gary Sinise"],
		genres: ["Animated"]
	},{ 
		title: "Over the Hedge",
		year: 2006,
		cast: ["Bruce Willis", "Garry Shandling", "Steve Carell", "Wanda Sykes", "Nick Nolte"],
		genres: ["Animated"]
	},{ 
		title: "The Painted Veil",
		year: 2006,
		cast: ["Naomi Watts", "Edward Norton"],
		genres: ["Drama"]
	},{ 
		title: "Pan's Labyrinth",
		year: 2006,
		cast: ["Ivana Baquero", "Doug Jones", "Sergi López"],
		genres: ["Fantasy"]
	},{ 
		title: "Paper Dolls",
		year: 2006,
		cast: ["transgender", "migrant workers", "from", "Philippines"],
		genres: ["Documentary"]
	},{ 
		title: "Park",
		year: 2006,
		cast: ["William Baldwin", "Ricki Lake", "Cheri Oteri"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Peaceful Warrior",
		year: 2006,
		cast: ["Scott Mechlowicz", "Nick Nolte", "Amy Smart"],
		genres: ["Drama"]
	},{ 
		title: "Penelope",
		year: 2006,
		cast: ["Christina Ricci", "James McAvoy", "Catherine O'Hara", "Reese Witherspoon"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Perfume: The Story of a Murderer",
		year: 2006,
		cast: ["Ben Whishaw", "Dustin Hoffman", "Alan Rickman"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Phat Girlz",
		year: 2006,
		cast: ["Mo'Nique"],
		genres: ["Comedy"]
	},{ 
		title: "The Phobic",
		year: 2006,
		cast: ["Courtney Gains", "Juliette Marquis", "Eric Millegan"],
		genres: ["Thriller"]
	},{ 
		title: "The Pink Panther",
		year: 2006,
		cast: ["Steve Martin", "Beyoncé Knowles", "Kevin Kline", "Kristin Chenoweth"],
		genres: ["Comedy"]
	},{ 
		title: "Pirates of the Caribbean: Dead Man's Chest",
		year: 2006,
		cast: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Geoffrey Rush"],
		genres: ["Adventure"]
	},{ 
		title: "Poseidon",
		year: 2006,
		cast: ["Josh Lucas", "Kurt Russell", "Richard Dreyfuss", "Kevin Dillon", "Freddy Rodríguez", "Emmy Rossum", "Mike Vogel", "Jacinda Barrett", "Andre Braugher"],
		genres: ["Disaster"]
	},{ 
		title: "Poultrygeist: Night of the Chicken Dead",
		year: 2006,
		cast: ["Jason Yachanin"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "The Power of Community: How Cuba Survived Peak Oil",
		year: 2006,
		cast: ["the economic collapse and recovery of", "Cuba", "following the", "fall of the Soviet Union", "in 1991"],
		genres: ["Documentary"]
	},{ 
		title: "Premium",
		year: 2006,
		cast: ["Dorian Missick", "Zoe Saldana", "Hill Harper"],
		genres: ["Comedy"]
	},{ 
		title: "The Prisoner or: How I Planned to Kill Tony Blair",
		year: 2006,
		cast: ["the detainment and accusation of", "Yunis Khatayer Abbas"],
		genres: ["Documentary"]
	},{ 
		title: "A Prairie Home Companion",
		year: 2006,
		cast: ["Garrison Keillor", "Woody Harrelson", "Tommy Lee Jones", "Kevin Kline", "Lindsay Lohan", "Meryl Streep"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "The Prestige",
		year: 2006,
		cast: ["Hugh Jackman", "Christian Bale", "Scarlett Johansson", "Michael Caine", "Rebecca Hall", "David Bowie"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Puff, Puff, Pass",
		year: 2006,
		cast: ["Danny Masterson", "Ronnie Warner", "Mekhi Phifer"],
		genres: ["Comedy"]
	},{ 
		title: "Pulse",
		year: 2006,
		cast: ["Kristen Bell", "Ian Somerhalder", "Christina Milian", "Rick Gonzalez"],
		genres: ["Horror"]
	},{ 
		title: "The Pursuit of Happyness",
		year: 2006,
		cast: ["Will Smith", "Jaden Smith"],
		genres: ["Biography"]
	},{ 
		title: "The Quick and the Undead",
		year: 2006,
		cast: ["Clint Glenn"],
		genres: ["Horror", "Western"]
	},{ 
		title: "Quick Pick",
		year: 2006,
		cast: ["John Bryant"],
		genres: ["Comedy"]
	},{ 
		title: "Quinceañera",
		year: 2006,
		cast: ["Emily Rios", "Jesse Garcia", "David W. Ross"],
		genres: ["Drama"]
	},{ 
		title: "The Rape of the Sabine Women",
		year: 2006,
		cast: ["Nina Adamopoulou"],
		genres: ["Drama"]
	},{ 
		title: "Relative Strangers",
		year: 2006,
		cast: ["Ron Livingston", "Danny DeVito", "Neve Campbell"],
		genres: ["Comedy"]
	},{ 
		title: "The Return",
		year: 2006,
		cast: ["Sarah Michelle Gellar", "Peter O'Brien", "Adam Scott"],
		genres: ["Thriller"]
	},{ 
		title: "Right at Your Door",
		year: 2006,
		cast: ["Mary McCormack", "Rory Cochrane"],
		genres: ["Drama"]
	},{ 
		title: "Robotech: The Shadow Chronicles",
		year: 2006,
		cast: ["Richard Epcar", "Eddie Frierson", "Mark Hamill"],
		genres: ["Animated"]
	},{ 
		title: "Rocky Balboa",
		year: 2006,
		cast: ["Sylvester Stallone", "Burt Young", "Geraldine Hughes", "Milo Ventimiglia", "Antonio Tarver", "Tony Burton"],
		genres: ["Drama"]
	},{ 
		title: "Roman",
		year: 2006,
		cast: ["Lucky McKee", "Kristen Bell"],
		genres: ["Drama"]
	},{ 
		title: "Romeo & Juliet: Sealed with a Kiss",
		year: 2006,
		cast: ["Daniel Trippett", "Patricia Trippett"],
		genres: ["Animated"]
	},{ 
		title: "Room 6",
		year: 2006,
		cast: ["Christine Taylor", "Jerry O'Connell", "Shane Brolly"],
		genres: ["Horror"]
	},{ 
		title: "Rune",
		year: 2006,
		cast: ["Anna Bäumer", "Bill Wise"],
		genres: ["Drama"]
	},{ 
		title: "Running Scared",
		year: 2006,
		cast: ["Paul Walker"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Running with Scissors",
		year: 2006,
		cast: ["Annette Bening", "Brian Cox", "Joseph Fiennes"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "RV",
		year: 2006,
		cast: ["Robin Williams", "Jeff Daniels", "Cheryl Hines", "Kristin Chenoweth", "JoJo", "Josh Hutcherson"],
		genres: ["Adventure"]
	},{ 
		title: "...So Goes the Nation",
		year: 2006,
		cast: ["the", "2004 Presidential Election of the United States"],
		genres: ["Documentary"]
	},{ 
		title: "Sacco and Vanzetti",
		year: 2006,
		cast: ["trial of", "Nicola Sacco and Bartolomeo Vanzetti"],
		genres: ["Documentary"]
	},{ 
		title: "The Santa Clause 3: The Escape Clause",
		year: 2006,
		cast: ["Tim Allen", "Martin Short"],
		genres: ["Fantasy"]
	},{ 
		title: "The Sasquatch Gang",
		year: 2006,
		cast: ["Jeremy Sumpter", "Justin Long", "Joey Kern"],
		genres: ["Comedy"]
	},{ 
		title: "Saving Shiloh",
		year: 2006,
		cast: ["Scott Wilson", "Gerald McRaney"],
		genres: ["Family"]
	},{ 
		title: "Saw III",
		year: 2006,
		cast: ["Tobin Bell", "Shawnee Smith", "Angus Macfadyen", "Bahar Soomekh"],
		genres: ["Horror"]
	},{ 
		title: "A Scanner Darkly",
		year: 2006,
		cast: ["Keanu Reeves", "Robert Downey, Jr.", "Woody Harrelson", "Winona Ryder"],
		genres: ["Animated"]
	},{ 
		title: "Scary Movie 4",
		year: 2006,
		cast: ["Anna Faris", "Regina Hall", "Craig Bierko", "Bill Pullman"],
		genres: ["Comedy", "Satire"]
	},{ 
		title: "School for Scoundrels",
		year: 2006,
		cast: ["Billy Bob Thornton", "Jon Heder"],
		genres: ["Comedy"]
	},{ 
		title: "Scoop",
		year: 2006,
		cast: ["Scarlett Johansson", "Hugh Jackman", "Woody Allen", "Ian McShane"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Scott Walker: 30 Century Man",
		year: 2006,
		cast: ["the career of", "Scott Walker"],
		genres: ["Documentary"]
	},{ 
		title: "The Second Chance",
		year: 2006,
		cast: ["Michael W. Smith", "Jeff Obafemi Carr"],
		genres: ["Drama"]
	},{ 
		title: "Secret of the Cave",
		year: 2006,
		cast: ["Patrick Bergin", "Joseph Kelly"],
		genres: ["Adventure"]
	},{ 
		title: "See No Evil",
		year: 2006,
		cast: ["Glenn Jacobs", "Christina Vidal", "Samantha Noble"],
		genres: ["Horror"]
	},{ 
		title: "The Sentinel",
		year: 2006,
		cast: ["Michael Douglas", "Kiefer Sutherland", "Eva Longoria", "Kim Basinger"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Shaggy Dog",
		year: 2006,
		cast: ["Tim Allen", "Kristin Davis", "Spencer Breslin", "Danny Glover", "Robert Downey, Jr."],
		genres: ["Comedy"]
	},{ 
		title: "Shark Bait",
		year: 2006,
		cast: ["Freddie Prinze, Jr."],
		genres: ["Animated"]
	},{ 
		title: "She's the Man",
		year: 2006,
		cast: ["Amanda Bynes", "Channing Tatum"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Sherrybaby",
		year: 2006,
		cast: ["Maggie Gyllenhaal", "Brad William Henke", "Sam Bottoms"],
		genres: ["Drama"]
	},{ 
		title: "Shortbus",
		year: 2006,
		cast: ["Sook-Yin Lee"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Shottas",
		year: 2006,
		cast: ["Ky-Mani Marley", "Spragga Benz"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Silent Hill",
		year: 2006,
		cast: ["Radha Mitchell", "Sean Bean", "Laurie Holden", "Jodelle Ferland"],
		genres: ["Horror"]
	},{ 
		title: "Simon Says",
		year: 2006,
		cast: ["Crispin Glover", "Margo Harshman"],
		genres: ["Horror"]
	},{ 
		title: "Sleeping Dogs Lie",
		year: 2006,
		cast: ["Melinda Page Hamilton", "Bryce Johnson"],
		genres: ["Comedy"]
	},{ 
		title: "Slither",
		year: 2006,
		cast: ["Nathan Fillion", "Elizabeth Banks", "Michael Rooker"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Small Town Gay Bar",
		year: 2006,
		cast: ["gay bars in rural", "Southeast United States"],
		genres: ["Documentary"]
	},{ 
		title: "Snakes on a Plane",
		year: 2006,
		cast: ["Samuel L. Jackson", "Julianna Margulies", "Taylor Kitsch", "Kenan Thompson"],
		genres: ["Thriller"]
	},{ 
		title: "Snow Blind",
		year: 2006,
		cast: ["history", "lifestyle of", "snowboarding"],
		genres: ["Documentary"]
	},{ 
		title: "So Much So Fast",
		year: 2006,
		cast: ["the life of", "Stephen Heywood"],
		genres: ["Documentary"]
	},{ 
		title: "Something New",
		year: 2006,
		cast: ["Sanaa Lathan", "Simon Baker", "Mike Epps", "Donald Faison"],
		genres: ["Drama"]
	},{ 
		title: "Sonhos de Peixe",
		year: 2006,
		cast: ["José Maria Alves", "Phellipe Haagensen"],
		genres: ["Drama"]
	},{ 
		title: "Special",
		year: 2006,
		cast: ["Michael Rapaport"],
		genres: ["Drama"]
	},{ 
		title: "Stalking Santa",
		year: 2006,
		cast: ["Daryn Tufts", "William Shatner"],
		genres: ["Satire"]
	},{ 
		title: "Starter for 10",
		year: 2006,
		cast: ["James McAvoy", "Alice Eve", "Rebecca Hall"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Stay Alive",
		year: 2006,
		cast: ["Jon Foster", "Samaire Armstrong", "Frankie Muniz", "Sophia Bush", "Jimmie Simpson"],
		genres: ["Horror"]
	},{ 
		title: "Step Up",
		year: 2006,
		cast: ["Channing Tatum", "Jenna Dewan"],
		genres: ["Dance"]
	},{ 
		title: "Stephanie Daley",
		year: 2006,
		cast: ["Amber Tamblyn", "Tilda Swinton", "Timothy Hutton"],
		genres: ["Drama"]
	},{ 
		title: "Stick It",
		year: 2006,
		cast: ["Jeff Bridges", "Missy Peregrym"],
		genres: ["Drama"]
	},{ 
		title: "Stranger Than Fiction",
		year: 2006,
		cast: ["Will Ferrell", "Emma Thompson"],
		genres: ["Fantasy"]
	},{ 
		title: "Stormbreaker",
		year: 2006,
		cast: ["Alex Pettyfer", "Ewan McGregor"],
		genres: ["Spy"]
	},{ 
		title: "Strawberry Shortcake: The Sweet Dreams Movie",
		year: 2006,
		cast: ["Sarah Heinke"],
		genres: ["Animated"]
	},{ 
		title: "Subject Two",
		year: 2006,
		cast: ["Christian Oliver", "Dean Stapleton"],
		genres: ["Drama"]
	},{ 
		title: "Suicide Killers",
		year: 2006,
		cast: ["the motivations of a", "suicide bomber"],
		genres: ["Documentary"]
	},{ 
		title: "Superman Returns",
		year: 2006,
		cast: ["Brandon Routh", "Kate Bosworth", "Kevin Spacey", "Frank Langella", "James Marsden", "Eva Marie Saint"],
		genres: ["Superhero"]
	},{ 
		title: "Swarm of the Snakehead",
		year: 2006,
		cast: ["Gunnar Hansen", "Frank A. Lama", "Jamie O'Brien"],
		genres: ["Horror"]
	},{ 
		title: "Sweet Insanity",
		year: 2006,
		cast: ["Rebekah Isaacs", "Mackenzie Firgens"],
		genres: ["Horror"]
	},{ 
		title: "Take the Lead",
		year: 2006,
		cast: ["Antonio Banderas"],
		genres: ["Drama", "Dance"]
	},{ 
		title: "Talladega Nights: The Ballad of Ricky Bobby",
		year: 2006,
		cast: ["Will Ferrell", "John C. Reilly", "Sacha Baron Cohen"],
		genres: ["Comedy"]
	},{ 
		title: "The Teddy Bear Master",
		year: 2006,
		cast: ["Isaac Imel"],
		genres: ["Horror"]
	},{ 
		title: "Tenacious D in The Pick of Destiny",
		year: 2006,
		cast: ["Jack Black", "Kyle Gass"],
		genres: ["Comedy"]
	},{ 
		title: "The Texas Chainsaw Massacre: The Beginning",
		year: 2006,
		cast: ["Jordana Brewster", "Taylor Handley"],
		genres: ["Horror"]
	},{ 
		title: "Thank You for Smoking",
		year: 2006,
		cast: ["Aaron Eckhart", "Cameron Bright", "Maria Bello", "David Koechner"],
		genres: ["Comedy"]
	},{ 
		title: "This Film Is Not Yet Rated",
		year: 2006,
		cast: ["Motion Picture Association of America", "rating system"],
		genres: ["Documentary"]
	},{ 
		title: "Threat",
		year: 2006,
		cast: ["Carlos Puga", "Katie Nisa"],
		genres: ["Drama"]
	},{ 
		title: "Tomorrow Is Today",
		year: 2006,
		cast: ["Scout Taylor-Compton"],
		genres: ["Drama"]
	},{ 
		title: "Trantasia",
		year: 2006,
		cast: ["first \"World's Most Beautiful Transsexual Pageant\""],
		genres: ["Documentary"]
	},{ 
		title: "Tristan & Isolde",
		year: 2006,
		cast: ["James Franco", "Sophia Myles", "Rufus Sewell"],
		genres: ["Drama"]
	},{ 
		title: "Trust the Man",
		year: 2006,
		cast: ["Billy Crudup", "David Duchovny", "Maggie Gyllenhaal"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Turistas",
		year: 2006,
		cast: ["Josh Duhamel", "Melissa George", "Olivia Wilde"],
		genres: ["Horror"]
	},{ 
		title: "Two Weeks",
		year: 2006,
		cast: ["Sally Field", "Ben Chaplin"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The U.S. vs. John Lennon",
		year: 2006,
		cast: ["the transformation of", "John Lennon", "from a member of", "The Beatles", "to an", "anti-war", "activist"],
		genres: ["Documentary"]
	},{ 
		title: "Ultraviolet",
		year: 2006,
		cast: ["Milla Jovovich", "Cameron Bright", "Nick Chinlund", "William Fichtner"],
		genres: ["Science Fiction"]
	},{ 
		title: "Unaccompanied Minors",
		year: 2006,
		cast: ["Lewis Black", "Wilmer Valderrama", "Tyler James Williams"],
		genres: ["Comedy"]
	},{ 
		title: "Underworld: Evolution",
		year: 2006,
		cast: ["Kate Beckinsale", "Scott Speedman", "Tony Curran"],
		genres: ["Horror"]
	},{ 
		title: "Undoing",
		year: 2006,
		cast: ["Sung Kang", "Tom Bower", "Russell Wong"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Unidentified",
		year: 2006,
		cast: ["Jonathan Aube"],
		genres: ["Science Fiction"]
	},{ 
		title: "United 93",
		year: 2006,
		cast: ["see Cast"],
		genres: ["Drama"]
	},{ 
		title: "Unrest",
		year: 2006,
		cast: ["Corri English"],
		genres: ["Horror"]
	},{ 
		title: "V for Vendetta",
		year: 2006,
		cast: ["Natalie Portman", "Hugo Weaving", "Stephen Rea", "John Hurt"],
		genres: ["Thriller"]
	},{ 
		title: "Vacationland",
		year: 2006,
		cast: ["Brad Hallowell", "Gregory J. Lucas"],
		genres: ["Drama"]
	},{ 
		title: "Vanaja",
		year: 2006,
		cast: ["Mamatha Bhukya"],
		genres: ["Drama"]
	},{ 
		title: "Waist Deep",
		year: 2006,
		cast: ["Tyrese Gibson", "Meagan Good", "Larenz Tate", "The Game"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The War Tapes",
		year: 2006,
		cast: ["the", "2003 invasion of Iraq", "in the prospective of the soldiers"],
		genres: ["Documentary"]
	},{ 
		title: "We Are Marshall",
		year: 2006,
		cast: ["Matthew McConaughey", "Matthew Fox", "Anthony Mackie"],
		genres: ["Drama"]
	},{ 
		title: "When a Stranger Calls",
		year: 2006,
		cast: ["Camilla Belle"],
		genres: ["Horror"]
	},{ 
		title: "When I Came Home",
		year: 2006,
		cast: ["the", "homeless veterans in the United States"],
		genres: ["Documentary"]
	},{ 
		title: "Who Killed the Electric Car?",
		year: 2006,
		cast: ["the creation", "commercialization", "and destruction of the", "battery electric vehicle"],
		genres: ["Documentary"]
	},{ 
		title: "Wicked Little Things",
		year: 2006,
		cast: ["Lori Heuring", "Scout Taylor-Compton", "Chloë Grace Moretz"],
		genres: ["Horror"]
	},{ 
		title: "The Wicker Man",
		year: 2006,
		cast: ["Nicolas Cage", "Ellen Burstyn", "Kate Beahan", "Frances Conroy", "Leelee Sobieski", "Molly Parker", "Diane Delano"],
		genres: ["Horror"]
	},{ 
		title: "The Wild",
		year: 2006,
		cast: ["Kiefer Sutherland", "James Belushi"],
		genres: ["Animated"]
	},{ 
		title: "The Woods",
		year: 2006,
		cast: ["Agnes Bruckner", "Patricia Clarkson"],
		genres: ["Horror"]
	},{ 
		title: "Wordplay",
		year: 2006,
		cast: ["Will Shortz", "Bill Clinton", "Jon Stewart"],
		genres: ["Documentary"]
	},{ 
		title: "World Trade Center",
		year: 2006,
		cast: ["Nicolas Cage", "Michael Peña", "Maggie Gyllenhaal", "Maria Bello"],
		genres: ["Drama"]
	},{ 
		title: "Wristcutters: A Love Story",
		year: 2006,
		cast: ["Patrick Fugit", "Shannyn Sossamon", "Tom Waits"],
		genres: ["Drama"]
	},{ 
		title: "X-Men: The Last Stand",
		year: 2006,
		cast: ["Hugh Jackman", "Halle Berry", "Patrick Stewart", "Ian McKellen", "Famke Janssen", "James Marsden", "Anna Paquin", "Kelsey Grammer"],
		genres: ["Superhero"]
	},{ 
		title: "Yellow",
		year: 2006,
		cast: ["Roselyn Sánchez", "Bill Duke", "D. B. Sweeney"],
		genres: ["Drama"]
	},{ 
		title: "Yeti: A Love Story",
		year: 2006,
		cast: ["Adam Malamut", "Eric Gosselin", "Laura Glascott", "Loren Mash", "Dave Paige"],
		genres: ["Romance", "Horror"]
	},{ 
		title: "You, Me and Dupree",
		year: 2006,
		cast: ["Owen Wilson", "Kate Hudson", "Matt Dillon", "Michael Douglas"],
		genres: ["Comedy"]
	},{ 
		title: "Zoom",
		year: 2006,
		cast: ["Tim Allen", "Courteney Cox"],
		genres: ["Superhero"]
	},{ 
		title: "Zyzzyx Road",
		year: 2006,
		cast: ["Leo Grillo", "Katherine Heigl", "Tom Sizemore"],
		genres: ["Thriller"]
	},{ 
		title: "10 MPH",
		year: 2007,
		cast: ["Josh Caldwell's trip across the United States on his", "Segway HT"],
		genres: ["Documentary"]
	},{ 
		title: "The 11th Hour",
		year: 2007,
		cast: ["The state of the", "natural environment", ". Narrated by", "Leonardo DiCaprio", "."],
		genres: ["Documentary"]
	},{ 
		title: "1408",
		year: 2007,
		cast: ["John Cusack", "Samuel L. Jackson"],
		genres: ["Horror"]
	},{ 
		title: "3:10 to Yuma",
		year: 2007,
		cast: ["Russell Crowe", "Christian Bale"],
		genres: ["Western"]
	},{ 
		title: "30 Days of Night",
		year: 2007,
		cast: ["Josh Hartnett", "Ben Foster", "Melissa George"],
		genres: ["Horror"]
	},{ 
		title: "300",
		year: 2007,
		cast: ["Gerard Butler", "Lena Headey", "David Wenham"],
		genres: ["Action"]
	},{ 
		title: "Across the Universe",
		year: 2007,
		cast: ["Jim Sturgess", "Evan Rachel Wood", "Joe Anderson"],
		genres: ["Musical"]
	},{ 
		title: "Adrift in Manhattan",
		year: 2007,
		cast: ["Heather Graham", "Victor Rasuk", "Dominic Chianese", "William Baldwin"],
		genres: ["Drama"]
	},{ 
		title: "Adventures of Johnny Tao",
		year: 2007,
		cast: ["Matthew Twining", "Chris Yen", "Matt Mullins", "Kelly Perine", "James Hong", "Jason London"],
		genres: ["Martial Arts", "Horror", "Comedy"]
	},{ 
		title: "Afghan Knights",
		year: 2007,
		cast: ["Steve Bacic", "Michael Madsen", "Colin Lawrence", "Steven Cree Molison", "Chris Kramer", "Pete Antico"],
		genres: ["War", "Horror"]
	},{ 
		title: "After Sex",
		year: 2007,
		cast: ["Jane Seymour", "Natalie Marston", "Zoe Saldana", "Mila Kunis", "John Witherspoon"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Alibi",
		year: 2007,
		cast: ["Lisa Crosato", "Marie Zielcke", "Joe Estevez", "Tim Colceri", "Peter Franzén", "Gem Silver"],
		genres: ["Crime", "Drama", "Mystery", "Romance", "Thriller"]
	},{ 
		title: "Alice Upside Down",
		year: 2007,
		cast: ["Alyson Stoner", "Lucas Grabeel", "Luke Perry", "Penny Marshall", "Ashley Drane", "Parker McKenna Posey"],
		genres: ["Adventure", "Comedy", "Drama", "Family"]
	},{ 
		title: "Aliens vs. Predator: Requiem",
		year: 2007,
		cast: ["Steven Pasquale", "Reiko Aylesworth", "John Ortiz", "Johnny Lewis", "Ariel Gade"],
		genres: ["Action", "Horror"]
	},{ 
		title: "All the Days Before Tomorrow",
		year: 2007,
		cast: ["Joey Kern", "Alexandra Holden", "Richard Roundtree", "Yutaka Takeuchi", "Luis Chávez"],
		genres: ["Comedy", "Drama", "Romance"]
	},{ 
		title: "Alvin and the Chipmunks",
		year: 2007,
		cast: ["Jason Lee", "Ross Bagdasarian Jr.", "Janice Karman", "David Cross", "Justin Long", "Matthew Gray Gubler", "Jesse McCartney"],
		genres: ["Family", "Musical"]
	},{ 
		title: "An American Crime",
		year: 2007,
		cast: ["Ellen Page", "Catherine Keener"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "American Gangster",
		year: 2007,
		cast: ["Denzel Washington", "Russell Crowe"],
		genres: ["Crime"]
	},{ 
		title: "American Pastime",
		year: 2007,
		cast: ["Gary Cole", "Aaron Yoo"],
		genres: ["Drama"]
	},{ 
		title: "Americanizing Shelley",
		year: 2007,
		cast: ["Beau Bridges", "Namrata Singh Gujral"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Anamorph",
		year: 2007,
		cast: ["Willem Dafoe", "Scott Speedman"],
		genres: ["Thriller"]
	},{ 
		title: "Aqua Teen Hunger Force Colon Movie Film for Theaters",
		year: 2007,
		cast: ["Dana Snyder", "Carey Means"],
		genres: ["Animated"]
	},{ 
		title: "Arctic Tale",
		year: 2007,
		cast: ["The life cycle of a", "walrus", "and a", "polar bear", ". Narrated by", "Queen Latifah", "."],
		genres: ["Documentary"]
	},{ 
		title: "Are We Done Yet?",
		year: 2007,
		cast: ["Ice Cube", "Nia Long", "John C. McGinley", "Aleisha Allen"],
		genres: ["Comedy"]
	},{ 
		title: "The Assassination of Jesse James by the Coward Robert Ford",
		year: 2007,
		cast: ["Brad Pitt", "Casey Affleck", "Sam Rockwell", "Sam Shepard", "Mary-Louise Parker", "Zooey Deschanel", "Paul Schneider", "Jeremy Renner"],
		genres: ["Biography", "Western"]
	},{ 
		title: "August Rush",
		year: 2007,
		cast: ["Freddie Highmore", "Jonathan Rhys Meyers", "Keri Russell", "Terrence Howard", "Robin Williams"],
		genres: ["Family", "Musical"]
	},{ 
		title: "Autism: The Musical",
		year: 2007,
		cast: ["Six months in the lives of five children with", "autism", "in Los Angeles"],
		genres: ["Documentary"]
	},{ 
		title: "Awake",
		year: 2007,
		cast: ["Hayden Christensen", "Jessica Alba", "Lena Olin", "Arliss Howard", "Terrence Howard"],
		genres: ["Thriller"]
	},{ 
		title: "Balls of Fury",
		year: 2007,
		cast: ["Dan Fogler", "Christopher Walken", "George Lopez", "Maggie Q", "Thomas Lennon", "Robert Patrick", "Terry Crews"],
		genres: ["Comedy", "Sports"]
	},{ 
		title: "Because I Said So",
		year: 2007,
		cast: ["Diane Keaton", "Mandy Moore", "Lauren Graham", "Piper Perabo"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Bee Movie",
		year: 2007,
		cast: ["Jerry Seinfeld", "Renée Zellweger", "Matthew Broderick"],
		genres: ["Animated"]
	},{ 
		title: "Before the Devil Knows You're Dead",
		year: 2007,
		cast: ["Philip Seymour Hoffman", "Ethan Hawke", "Albert Finney", "Marisa Tomei"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Believe",
		year: 2007,
		cast: ["Larry Bagby"],
		genres: ["Satire"]
	},{ 
		title: "Beowulf",
		year: 2007,
		cast: ["Ray Winstone", "Anthony Hopkins", "John Malkovich", "Robin Wright Penn", "Angelina Jolie"],
		genres: ["Fantasy"]
	},{ 
		title: "Beyond Belief",
		year: 2007,
		cast: ["the humanitarian programs begun by", "Susan Retik", "and", "Patti Quigley"],
		genres: ["Documentary"]
	},{ 
		title: "Big Stan",
		year: 2007,
		cast: ["Rob Schneider", "David Carradine", "M. Emmet Walsh"],
		genres: ["Comedy"]
	},{ 
		title: "Blades of Glory",
		year: 2007,
		cast: ["Will Ferrell", "Jon Heder"],
		genres: ["Comedy", "Sports"]
	},{ 
		title: "Blonde Ambition",
		year: 2007,
		cast: ["Jessica Simpson", "Luke Wilson"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Blue Hour",
		year: 2007,
		cast: ["Alyssa Milano"],
		genres: ["Drama"]
	},{ 
		title: "Blue State",
		year: 2007,
		cast: ["Anna Paquin", "Breckin Meyer"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Bourne Ultimatum",
		year: 2007,
		cast: ["Matt Damon", "Julia Stiles", "David Strathairn", "Scott Glenn", "Joan Allen"],
		genres: ["Action"]
	},{ 
		title: "Bratz: The Movie",
		year: 2007,
		cast: ["Nathalia Ramos", "Skyler Shaye", "Logan Browning", "Janel Parrish", "Chelsea Staub", "Lainie Kazan", "Jon Voight"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "The Brave One",
		year: 2007,
		cast: ["Jodie Foster", "Naveen Andrews", "Terrence Howard", "Mary Steenburgen"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Breach",
		year: 2007,
		cast: ["Chris Cooper", "Ryan Phillippe", "Laura Linney"],
		genres: ["Political", "Thriller"]
	},{ 
		title: "Bridge to Terabithia",
		year: 2007,
		cast: ["Josh Hutcherson", "AnnaSophia Robb", "Zooey Deschanel", "Robert Patrick"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Broken English",
		year: 2007,
		cast: ["Parker Posey", "Melvil Poupaud", "Drea de Matteo"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Brooklyn Rules",
		year: 2007,
		cast: ["Alec Baldwin", "Scott Caan", "Freddie Prinze Jr."],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Brotherhood of Blood",
		year: 2007,
		cast: ["Victoria Pratt"],
		genres: ["Horror"]
	},{ 
		title: "The Brothers Solomon",
		year: 2007,
		cast: ["Will Arnett", "Will Forte", "Chi McBride", "Kristen Wiig", "Malin Åkerman"],
		genres: ["Comedy"]
	},{ 
		title: "The Bucket List",
		year: 2007,
		cast: ["Jack Nicholson", "Morgan Freeman"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Cake: A Wedding Story",
		year: 2007,
		cast: ["G. W. Bailey"],
		genres: ["Comedy"]
	},{ 
		title: "Captivity",
		year: 2007,
		cast: ["Elisha Cuthbert", "Daniel Gillies"],
		genres: ["Thriller"]
	},{ 
		title: "Care Bears: Oopsy Does It!",
		year: 2007,
		cast: ["Scott McNeil", "Ashleigh Ball", "Tabitha St. Germain"],
		genres: ["Animated"]
	},{ 
		title: "Cassandra's Dream",
		year: 2007,
		cast: ["Hayley Atwell", "Colin Farrell", "Sally Hawkins", "Ewan McGregor", "Tom Wilkinson"],
		genres: ["Drama"]
	},{ 
		title: "Catacombs",
		year: 2007,
		cast: ["Shannyn Sossamon", "Pink"],
		genres: ["Horror"]
	},{ 
		title: "Chapter 27",
		year: 2007,
		cast: ["Jared Leto"],
		genres: ["Documentary", "Drama"]
	},{ 
		title: "Charlie Wilson's War",
		year: 2007,
		cast: ["Tom Hanks", "Julia Roberts", "Philip Seymour Hoffman"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Chicago 10",
		year: 2007,
		cast: ["the", "Chicago Seven"],
		genres: ["Animated"]
	},{ 
		title: "Code Name: The Cleaner",
		year: 2007,
		cast: ["Cedric the Entertainer", "Lucy Liu", "Nicollette Sheridan"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "The Comebacks",
		year: 2007,
		cast: ["David Koechner"],
		genres: ["Satire", "Sports"]
	},{ 
		title: "The Condemned",
		year: 2007,
		cast: ["Stone Cold Steve Austin", "Vinnie Jones"],
		genres: ["Crime"]
	},{ 
		title: "Control",
		year: 2007,
		cast: ["Sam Riley", "Samantha Morton", "Alexandra Maria Lara"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Crazy Love",
		year: 2007,
		cast: ["Burt Pugach", "Linda Riss"],
		genres: ["Documentary"]
	},{ 
		title: "Cthulhu",
		year: 2007,
		cast: ["Tori Spelling", "Cara Buono"],
		genres: ["Horror"]
	},{ 
		title: "Daddy Day Camp",
		year: 2007,
		cast: ["Cuba Gooding Jr."],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Daddy's Little Girls",
		year: 2007,
		cast: ["Gabrielle Union", "Idris Elba"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Dalai Lama Renaissance",
		year: 2007,
		cast: ["the", "14th Dalai Lama", "'s meeting with the \"Synthesis\" group"],
		genres: ["Documentary"]
	},{ 
		title: "Dan in Real Life",
		year: 2007,
		cast: ["Steve Carell", "Juliette Binoche", "Dane Cook", "John Mahoney", "Emily Blunt", "Dianne Wiest"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Darfur Now",
		year: 2007,
		cast: ["The", "War in Darfur"],
		genres: ["Documentary"]
	},{ 
		title: "Dark Matter",
		year: 2007,
		cast: ["Liu Ye", "Aidan Quinn", "Meryl Streep"],
		genres: ["Drama"]
	},{ 
		title: "Day Zero",
		year: 2007,
		cast: ["Elijah Wood"],
		genres: ["Drama"]
	},{ 
		title: "Dead Silence",
		year: 2007,
		cast: ["Ryan Kwanten", "Donnie Wahlberg", "Judith Roberts"],
		genres: ["Horror"]
	},{ 
		title: "Death Sentence",
		year: 2007,
		cast: ["Kevin Bacon", "Garrett Hedlund", "Kelly Preston", "John Goodman"],
		genres: ["Action", "Crime"]
	},{ 
		title: "Delta Farce",
		year: 2007,
		cast: ["Bill Engvall", "Larry the Cable Guy"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Devil Girl",
		year: 2007,
		cast: ["Jessica Graham", "Joe Wanjai Ross"],
		genres: ["Thriller"]
	},{ 
		title: "Dirty Country",
		year: 2007,
		cast: ["Life of", "Larry Pierce"],
		genres: ["Documentary"]
	},{ 
		title: "Disturbia",
		year: 2007,
		cast: ["Shia LaBeouf", "Sarah Roemer", "David Morse", "Carrie-Anne Moss"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "The Diving Bell and the Butterfly",
		year: 2007,
		cast: ["Mathieu Amalric", "Emmanuelle Seigner", "Marie-Josée Croze", "Max von Sydow"],
		genres: ["Drama"]
	},{ 
		title: "Eastern Promises",
		year: 2007,
		cast: ["Viggo Mortensen", "Naomi Watts", "Vincent Cassel"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Ed Gein: The Butcher of Plainfield",
		year: 2007,
		cast: ["Adrienne Frantz", "Kane Hodder"],
		genres: ["Horror"]
	},{ 
		title: "Elvis and Anabelle",
		year: 2007,
		cast: ["Max Minghella", "Blake Lively"],
		genres: ["Drama"]
	},{ 
		title: "Enchanted",
		year: 2007,
		cast: ["Amy Adams", "Patrick Dempsey", "James Marsden", "Susan Sarandon"],
		genres: ["Fantasy"]
	},{ 
		title: "Epic Movie",
		year: 2007,
		cast: ["Kal Penn", "Adam Campbell", "Jennifer Coolidge", "Fred Willard"],
		genres: ["Satire"]
	},{ 
		title: "Evan Almighty",
		year: 2007,
		cast: ["Steve Carell", "Morgan Freeman", "Lauren Graham", "John Goodman", "Wanda Sykes"],
		genres: ["Comedy"]
	},{ 
		title: "Evening",
		year: 2007,
		cast: ["Claire Danes", "Toni Collette", "Vanessa Redgrave", "Patrick Wilson", "Hugh Dancy", "Natasha Richardson", "Mamie Gummer", "Eileen Atkins", "Meryl Streep", "Glenn Close"],
		genres: ["Drama"]
	},{ 
		title: "The Ex",
		year: 2007,
		cast: ["Zach Braff", "Amanda Peet", "Jason Bateman", "Charles Grodin", "Mia Farrow", "Donal Logue", "Amy Poehler", "Amy Adams", "Fred Armisen"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Extreme Movie",
		year: 2007,
		cast: ["Ryan Pinkston"],
		genres: ["Comedy"]
	},{ 
		title: "Fantastic Four: Rise of the Silver Surfer",
		year: 2007,
		cast: ["Ioan Gruffudd", "Jessica Alba", "Chris Evans", "Michael Chiklis"],
		genres: ["Superhero"]
	},{ 
		title: "Feel the Noise",
		year: 2007,
		cast: ["Omarion Grandberry", "Giancarlo Esposito", "Victor Rasuk", "Melonie Diaz"],
		genres: ["Dance", "Drama"]
	},{ 
		title: "Finishing the Game",
		year: 2007,
		cast: ["James Franco", "Roger Fan", "Sung Kang"],
		genres: ["Satire"]
	},{ 
		title: "Firehouse Dog",
		year: 2007,
		cast: ["Josh Hutcherson", "Bruce Greenwood", "Dash Mihok"],
		genres: ["Family"]
	},{ 
		title: "The Flock",
		year: 2007,
		cast: ["Richard Gere", "Claire Danes"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "For the Bible Tells Me So",
		year: 2007,
		cast: ["perceived conflict between", "religion", "and", "homosexuality"],
		genres: ["Documentary"]
	},{ 
		title: "Fracture",
		year: 2007,
		cast: ["Anthony Hopkins", "Ryan Gosling"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Freakshow",
		year: 2007,
		cast: ["Rebekah Kochan"],
		genres: ["Horror"]
	},{ 
		title: "Fred Claus",
		year: 2007,
		cast: ["Vince Vaughn", "Paul Giamatti"],
		genres: ["Comedy"]
	},{ 
		title: "Freedom Writers",
		year: 2007,
		cast: ["Hilary Swank", "Scott Glenn", "Imelda Staunton", "Patrick Dempsey", "Mario"],
		genres: ["Drama"]
	},{ 
		title: "Full of It",
		year: 2007,
		cast: ["Ryan Pinkston", "Teri Polo", "Kate Mara"],
		genres: ["Comedy"]
	},{ 
		title: "The Game Plan",
		year: 2007,
		cast: ["Dwayne Johnson", "Madison Pettis", "Kyra Sedgwick", "Morris Chestnut"],
		genres: ["Family", "Sports"]
	},{ 
		title: "The Gene Generation",
		year: 2007,
		cast: ["Bai Ling", "Parry Shen", "Alec Newman", "Robert David Hall"],
		genres: ["Science Fiction"]
	},{ 
		title: "Georgia Rule",
		year: 2007,
		cast: ["Lindsay Lohan", "Jane Fonda", "Felicity Huffman", "Dermot Mulroney", "Garrett Hedlund"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Ghost Rider",
		year: 2007,
		cast: ["Nicolas Cage", "Eva Mendes", "Wes Bentley", "Sam Elliott", "Peter Fonda"],
		genres: ["Superhero"]
	},{ 
		title: "Ghosts of Abu Ghraib",
		year: 2007,
		cast: ["The 2004", "Abu Ghraib torture and prisoner abuse", "scandal"],
		genres: ["Documentary"]
	},{ 
		title: "The Girl in the Park",
		year: 2007,
		cast: ["Sigourney Weaver", "Kate Bosworth", "Kurt Russell", "Keri Russell", "Spencer Grammer", "Elisabeth Waterson", "Kristen Ruhlin", "David Rasche"],
		genres: ["Drama"]
	},{ 
		title: "Glass Lips",
		year: 2007,
		cast: ["Patryk Czajka", "Joanna Litwin", "Grzegorz Przybyl"],
		genres: ["Drama"]
	},{ 
		title: "The Go-Getter",
		year: 2007,
		cast: ["Lou Taylor Pucci", "Zooey Deschanel", "Jena Malone"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "God's Ears",
		year: 2007,
		cast: ["Michael Worth"],
		genres: ["Drama"]
	},{ 
		title: "The Golden Compass",
		year: 2007,
		cast: ["Dakota Blue Richards", "Nicole Kidman", "Daniel Craig", "Eva Green", "Ian McKellen"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Gone Baby Gone",
		year: 2007,
		cast: ["Casey Affleck", "Michelle Monaghan", "Morgan Freeman", "Ed Harris", "Amy Ryan", "John Ashton", "Amy Madigan"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Good Luck Chuck",
		year: 2007,
		cast: ["Dane Cook", "Jessica Alba"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Good Night",
		year: 2007,
		cast: ["Penélope Cruz", "Gwyneth Paltrow", "Danny DeVito"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Grace Is Gone",
		year: 2007,
		cast: ["John Cusack"],
		genres: ["Drama"]
	},{ 
		title: "Gracie",
		year: 2007,
		cast: ["Elisabeth Shue", "Carly Schroeder", "Dermot Mulroney"],
		genres: ["Drama"]
	},{ 
		title: "The Great Debaters",
		year: 2007,
		cast: ["Denzel Washington", "Forest Whitaker", "Nate Parker", "Jurnee Smollet", "Denzel Whitaker", "John Heard", "Kimberly Elise"],
		genres: ["Drama"]
	},{ 
		title: "Grindhouse",
		year: 2007,
		cast: ["Freddy Rodríguez", "Kurt Russell", "Rose McGowan", "Rosario Dawson", "Tracie Thoms", "Zoë Bell", "Josh Brolin", "Bruce Willis"],
		genres: ["Action"]
	},{ 
		title: "Hairspray",
		year: 2007,
		cast: ["John Travolta", "Michelle Pfeiffer", "Christopher Walken", "Amanda Bynes", "James Marsden", "Queen Latifah", "Brittany Snow", "Zac Efron", "Elijah Kelley", "Allison Janney", "Nikki Blonsky"],
		genres: ["Musical"]
	},{ 
		title: "Halloween",
		year: 2007,
		cast: ["Malcolm McDowell", "Tyler Mane", "Sheri Moon Zombie", "Scout Taylor-Compton", "Brad Dourif", "Danielle Harris", "William Forsythe", "Danny Trejo"],
		genres: ["Horror"]
	},{ 
		title: "The Hammer",
		year: 2007,
		cast: ["Adam Carolla", "Heather Juergensen"],
		genres: ["Comedy"]
	},{ 
		title: "Happily N'Ever After",
		year: 2007,
		cast: ["Sarah Michelle Gellar", "Freddie Prinze Jr.", "Andy Dick", "Wallace Shawn"],
		genres: ["Animated"]
	},{ 
		title: "Harry Potter and the Order of the Phoenix",
		year: 2007,
		cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Michael Gambon", "Imelda Staunton", "Helena Bonham Carter", "Gary Oldman", "Ralph Fiennes"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Hear and Now",
		year: 2007,
		cast: ["On", "cochlear implant", "surgery"],
		genres: ["Documentary"]
	},{ 
		title: "The Heartbreak Kid",
		year: 2007,
		cast: ["Ben Stiller", "Michelle Monaghan", "Jerry Stiller", "Malin Åkerman"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Highlander: The Source",
		year: 2007,
		cast: ["Adrian Paul"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Hills Have Eyes 2",
		year: 2007,
		cast: ["Michael McMillian", "Jessica Stroup", "Daniella Alonso", "Jacob Vargas"],
		genres: ["Horror"]
	},{ 
		title: "The Hitcher",
		year: 2007,
		cast: ["Sophia Bush", "Sean Bean", "Zachary Knighton", "Neal McDonough"],
		genres: ["Horror"]
	},{ 
		title: "Hitman",
		year: 2007,
		cast: ["Timothy Olyphant", "Dougray Scott", "Olga Kurylenko", "Robert Knepper"],
		genres: ["Action"]
	},{ 
		title: "The Hoax",
		year: 2007,
		cast: ["Richard Gere", "Alfred Molina", "Marcia Gay Harden", "Stanley Tucci", "Hope Davis"],
		genres: ["Biography"]
	},{ 
		title: "Honeydripper",
		year: 2007,
		cast: ["Danny Glover", "Charles S. Dutton", "Lisa Gay Hamilton"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Hostel: Part II",
		year: 2007,
		cast: ["Lauren German", "Roger Bart", "Bijou Phillips", "Heather Matarazzo", "Richard Burgi", "Jay Hernandez"],
		genres: ["Horror"]
	},{ 
		title: "Hot Rod",
		year: 2007,
		cast: ["Andy Samberg", "Isla Fisher", "Jorma Taccone", "Bill Hader", "Danny McBride", "Sissy Spacek", "Ian McShane"],
		genres: ["Comedy"]
	},{ 
		title: "The Hunting Party",
		year: 2007,
		cast: ["Terrence Howard", "Richard Gere"],
		genres: ["Adventure"]
	},{ 
		title: "I Am an American Soldier",
		year: 2007,
		cast: ["The", "Iraq War"],
		genres: ["Documentary"]
	},{ 
		title: "I Am Legend",
		year: 2007,
		cast: ["Will Smith"],
		genres: ["Science Fiction"]
	},{ 
		title: "I Could Never Be Your Woman",
		year: 2007,
		cast: ["Michelle Pfeiffer", "Paul Rudd"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "I Know Who Killed Me",
		year: 2007,
		cast: ["Lindsay Lohan", "Julia Ormond", "Neal McDonough"],
		genres: ["Thriller"]
	},{ 
		title: "I Now Pronounce You Chuck and Larry",
		year: 2007,
		cast: ["Adam Sandler", "Kevin James", "Jessica Biel"],
		genres: ["Comedy"]
	},{ 
		title: "I Think I Love My Wife",
		year: 2007,
		cast: ["Chris Rock", "Kerry Washington", "Gina Torres"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "I'm Not There",
		year: 2007,
		cast: ["Christian Bale", "Cate Blanchett", "Marcus Carl Franklin", "Richard Gere", "Heath Ledger", "Ben Whishaw"],
		genres: ["Musical"]
	},{ 
		title: "In the Land of Women",
		year: 2007,
		cast: ["Adam Brody", "Kristen Stewart", "Meg Ryan", "Olympia Dukakis", "Makenzie Vega"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "In the Valley of Elah",
		year: 2007,
		cast: ["Tommy Lee Jones", "Charlize Theron", "Susan Sarandon"],
		genres: ["Drama"]
	},{ 
		title: "Interview",
		year: 2007,
		cast: ["Steve Buscemi", "Sienna Miller"],
		genres: ["Drama"]
	},{ 
		title: "Into the Wild",
		year: 2007,
		cast: ["Emile Hirsch", "Marcia Gay Harden", "William Hurt", "Jena Malone", "Brian Dieker", "Vince Vaughn", "Zach Galifianakis", "Kristen Stewart", "Hal Holbrook"],
		genres: ["Adventure", "Drama"]
	},{ 
		title: "The Invasion",
		year: 2007,
		cast: ["Nicole Kidman", "Daniel Craig"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Invisible",
		year: 2007,
		cast: ["Justin Chatwin", "Margarita Levieva", "Chris Marquette", "Marcia Gay Harden"],
		genres: ["Thriller"]
	},{ 
		title: "Itty Bitty Titty Committee",
		year: 2007,
		cast: ["Melonie Diaz"],
		genres: ["Comedy"]
	},{ 
		title: "Joshua",
		year: 2007,
		cast: ["Sam Rockwell", "Vera Farmiga"],
		genres: ["Thriller"]
	},{ 
		title: "Juno",
		year: 2007,
		cast: ["Ellen Page", "Michael Cera", "Jennifer Garner", "Jason Bateman", "Allison Janney", "J. K. Simmons", "Olivia Thirlby"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Kickin' It Old Skool",
		year: 2007,
		cast: ["Jamie Kennedy", "Miguel A. Núñez, Jr.", "Maria Menounos"],
		genres: ["Comedy"]
	},{ 
		title: "Killing Zelda Sparks",
		year: 2007,
		cast: ["Colm Feore"],
		genres: ["Drama"]
	},{ 
		title: "The King of Kong: A Fistful of Quarters",
		year: 2007,
		cast: ["Steve Wiebe", "'s attempts to break the world high score for", "Donkey Kong"],
		genres: ["Documentary"]
	},{ 
		title: "King of Punk",
		year: 2007,
		cast: ["The", "punk subculture", "between 1976 and 1982"],
		genres: ["Documentary"]
	},{ 
		title: "The Kingdom",
		year: 2007,
		cast: ["Jamie Foxx", "Chris Cooper", "Jennifer Garner", "Jason Bateman", "Jeremy Piven", "Danny Huston", "Richard Jenkins"],
		genres: ["Action"]
	},{ 
		title: "The Kite Runner",
		year: 2007,
		cast: ["Khalid Abdalla", "Homayoun Ershadi", "Shaun Toub"],
		genres: ["Drama"]
	},{ 
		title: "Knock Knock",
		year: 2007,
		cast: ["Nicole Abisinio"],
		genres: ["Horror"]
	},{ 
		title: "Knocked Up",
		year: 2007,
		cast: ["Seth Rogen", "Katherine Heigl", "Paul Rudd", "Leslie Mann"],
		genres: ["Comedy"]
	},{ 
		title: "Lady Magdalene's",
		year: 2007,
		cast: ["Nichelle Nichols", "Susan Smythe"],
		genres: ["Action"]
	},{ 
		title: "Lake of Fire",
		year: 2007,
		cast: ["abortion in the United States"],
		genres: ["Documentary"]
	},{ 
		title: "Lars and the Real Girl",
		year: 2007,
		cast: ["Ryan Gosling", "Emily Mortimer", "Paul Schneider"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Last Mimzy",
		year: 2007,
		cast: ["Rhiannon Leigh Wryn", "Chris O'Neil", "Rainn Wilson", "Joely Richardson"],
		genres: ["Family", "Science Fiction"]
	},{ 
		title: "The Last Sin Eater",
		year: 2007,
		cast: ["Liana Liberato", "Louise Fletcher", "Henry Thomas"],
		genres: ["Drama"]
	},{ 
		title: "License to Wed",
		year: 2007,
		cast: ["Robin Williams", "Mandy Moore", "John Krasinski"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Life Before Her Eyes",
		year: 2007,
		cast: ["Uma Thurman", "Evan Rachel Wood"],
		genres: ["Drama"]
	},{ 
		title: "Lions for Lambs",
		year: 2007,
		cast: ["Robert Redford", "Meryl Streep", "Tom Cruise"],
		genres: ["Drama"]
	},{ 
		title: "The List",
		year: 2007,
		cast: ["Malcolm McDowell", "Chuck Carrington", "Hilarie Burton"],
		genres: ["Thriller"]
	},{ 
		title: "Live Free or Die Hard",
		year: 2007,
		cast: ["Bruce Willis", "Justin Long"],
		genres: ["Action"]
	},{ 
		title: "The Lookout",
		year: 2007,
		cast: ["Joseph Gordon-Levitt", "Jeff Daniels", "Matthew Goode", "Isla Fisher"],
		genres: ["Crime"]
	},{ 
		title: "Love in the Time of Cholera",
		year: 2007,
		cast: ["Giovanna Mezzogiorno", "John Leguizamo"],
		genres: ["Drama"]
	},{ 
		title: "Lucky You",
		year: 2007,
		cast: ["Eric Bana", "Drew Barrymore", "Robert Duvall"],
		genres: ["Drama"]
	},{ 
		title: "Lust, Caution",
		year: 2007,
		cast: ["Tony Leung Chiu-Wai", "Tang Wei", "Joan Chen", "Leehom Wang"],
		genres: ["Thriller"]
	},{ 
		title: "Manda Bala (Send a Bullet)",
		year: 2007,
		cast: ["political corruption", "and", "kidnapping", "in Brazil"],
		genres: ["Documentary"]
	},{ 
		title: "Margot at the Wedding",
		year: 2007,
		cast: ["Nicole Kidman", "Jennifer Jason Leigh", "Jack Black", "John Turturro"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Marigold",
		year: 2007,
		cast: ["Salman Khan", "Ali Larter"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Married Life",
		year: 2007,
		cast: ["Chris Cooper", "Patricia Clarkson", "Pierce Brosnan", "Rachel McAdams"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Martian Child",
		year: 2007,
		cast: ["John Cusack", "Bobby Coleman", "Amanda Peet", "Joan Cusack"],
		genres: ["Comedy", "Drama", "Family"]
	},{ 
		title: "Meet the Robinsons",
		year: 2007,
		cast: ["Jordan Fry", "Harland Williams", "Tom Kenny"],
		genres: ["Animated"]
	},{ 
		title: "The Messengers",
		year: 2007,
		cast: ["Kristen Stewart", "Dylan McDermott", "Penelope Ann Miller"],
		genres: ["Horror"]
	},{ 
		title: "Michael Clayton",
		year: 2007,
		cast: ["George Clooney", "Tom Wilkinson", "Tilda Swinton", "Sydney Pollack", "Michael O'Keefe", "Merritt Weaver", "Ken Howard"],
		genres: ["Thriller"]
	},{ 
		title: "A Mighty Heart",
		year: 2007,
		cast: ["Angelina Jolie"],
		genres: ["Drama"]
	},{ 
		title: "The Mist",
		year: 2007,
		cast: ["Thomas Jane", "Marcia Gay Harden", "Andre Braugher", "Toby Jones"],
		genres: ["Horror"]
	},{ 
		title: "Mister Lonely",
		year: 2007,
		cast: ["Diego Luna", "Samantha Morton"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "A Modern Twain Story: The Prince and the Pauper",
		year: 2007,
		cast: ["Dylan and Cole Sprouse", "Kay Panabaker"],
		genres: []
	},{ 
		title: "Monster Camp",
		year: 2007,
		cast: ["live action role-playing game"],
		genres: ["Documentary"]
	},{ 
		title: "The Mother of Tears",
		year: 2007,
		cast: ["Asia Argento", "Daria Nicolodi", "Moran Atias"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Moving McAllister",
		year: 2007,
		cast: ["Ben Gourley", "Mila Kunis", "Jon Heder", "Rutger Hauer"],
		genres: ["Comedy"]
	},{ 
		title: "Mr. Brooks",
		year: 2007,
		cast: ["Kevin Costner", "Demi Moore", "Dane Cook", "William Hurt"],
		genres: ["Thriller"]
	},{ 
		title: "Mr. Magorium's Wonder Emporium",
		year: 2007,
		cast: ["Dustin Hoffman", "Natalie Portman", "Jason Bateman", "Zach Mills"],
		genres: ["Fantasy"]
	},{ 
		title: "Mr. Schneider Goes to Washington",
		year: 2007,
		cast: ["Campaign financing in Washington"],
		genres: ["Documentary"]
	},{ 
		title: "Mr. Woodcock",
		year: 2007,
		cast: ["Billy Bob Thornton", "Seann William Scott", "Susan Sarandon"],
		genres: ["Comedy"]
	},{ 
		title: "Mr. Untouchable",
		year: 2007,
		cast: ["the rise and fall of", "Leroy Barnes"],
		genres: ["Documentary"]
	},{ 
		title: "Music and Lyrics",
		year: 2007,
		cast: ["Hugh Grant", "Drew Barrymore"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "My Bollywood Bride",
		year: 2007,
		cast: ["Jason Lewis", "Kashmira Shah"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "My Sexiest Year",
		year: 2007,
		cast: ["Frankie Muniz", "Harvey Keitel", "Haylie Duff"],
		genres: ["Comedy"]
	},{ 
		title: "Nancy Drew",
		year: 2007,
		cast: ["Emma Roberts"],
		genres: ["Crime", "Family"]
	},{ 
		title: "Nanking",
		year: 2007,
		cast: ["the 1937", "Nanking Massacre"],
		genres: ["Documentary"]
	},{ 
		title: "The Nanny Diaries",
		year: 2007,
		cast: ["Scarlett Johansson", "Chris Evans"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "National Treasure: Book of Secrets",
		year: 2007,
		cast: ["Nicolas Cage", "Diane Kruger", "Jon Voight", "Justin Bartha", "Helen Mirren"],
		genres: ["Adventure"]
	},{ 
		title: "Netherbeast Incorporated",
		year: 2007,
		cast: ["Darrell Hammond", "Judd Nelson"],
		genres: ["Horror"]
	},{ 
		title: "Next",
		year: 2007,
		cast: ["Nicolas Cage", "Julianne Moore", "Jessica Biel"],
		genres: ["Science Fiction"]
	},{ 
		title: "No Country for Old Men",
		year: 2007,
		cast: ["Josh Brolin", "Tommy Lee Jones", "Javier Bardem", "Woody Harrelson", "Kelly Macdonald", "Tess Harper", "Barry Corbin"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "No End in Sight",
		year: 2007,
		cast: ["the", "American occupation of Iraq"],
		genres: ["Documentary"]
	},{ 
		title: "No Reservations",
		year: 2007,
		cast: ["Catherine Zeta-Jones", "Aaron Eckhart", "Abigail Breslin"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Nobel Son",
		year: 2007,
		cast: ["Alan Rickman", "Bryan Greenberg", "Eliza Dushku", "Danny DeVito"],
		genres: ["Drama"]
	},{ 
		title: "Norbit",
		year: 2007,
		cast: ["Eddie Murphy", "Thandie Newton", "Cuba Gooding, Jr."],
		genres: ["Comedy"]
	},{ 
		title: "Normal Adolescent Behavior",
		year: 2007,
		cast: ["Amber Tamblyn", "Ashton Holmes"],
		genres: ["Drama"]
	},{ 
		title: "Numb",
		year: 2007,
		cast: ["Matthew Perry"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Number 23",
		year: 2007,
		cast: ["Jim Carrey", "Virginia Madsen"],
		genres: ["Thriller"]
	},{ 
		title: "Ocean's Thirteen",
		year: 2007,
		cast: ["George Clooney", "Brad Pitt", "Matt Damon", "Andy García", "Don Cheadle", "Bernie Mac", "Ellen Barkin", "Al Pacino", "Blake Lively"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Oh, Saigon",
		year: 2007,
		cast: ["The", "Fall of Saigon"],
		genres: ["Documentary"]
	},{ 
		title: "Only for You",
		year: 2007,
		cast: ["Shea Curry"],
		genres: ["Romance"]
	},{ 
		title: "Operation Homecoming: Writing the Wartime Experience",
		year: 2007,
		cast: ["The lives and experiences of American combat soldiers in the", "Iraq War", "and", "War in Afghanistan"],
		genres: ["Documentary"]
	},{ 
		title: "P.S. I Love You",
		year: 2007,
		cast: ["Hilary Swank", "Gerard Butler"],
		genres: ["Romance"]
	},{ 
		title: "P2",
		year: 2007,
		cast: ["Rachek Nichols", "Wes Bentley"],
		genres: ["Horror"]
	},{ 
		title: "Padre Nuestro",
		year: 2007,
		cast: ["Jesús Ochoa"],
		genres: ["Drama"]
	},{ 
		title: "Paranoid Park",
		year: 2007,
		cast: ["Gabe Nevins", "Jake Miller", "Taylor Momsen"],
		genres: ["Drama"]
	},{ 
		title: "Passage to Zarahemla",
		year: 2007,
		cast: ["Summer Naomi Smart"],
		genres: ["Adventure"]
	},{ 
		title: "Pathfinder",
		year: 2007,
		cast: ["Karl Urban", "Moon Bloodgood", "Russell Means"],
		genres: ["Action"]
	},{ 
		title: "The Perfect Holiday",
		year: 2007,
		cast: ["Morris Chestnut", "Gabrielle Union", "Charlie Murphy", "Katt Williams", "Faizon Love", "Terrence Howard", "Queen Latifah"],
		genres: ["Family"]
	},{ 
		title: "Perfect Stranger",
		year: 2007,
		cast: ["Halle Berry", "Bruce Willis", "Giovanni Ribisi"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Persepolis",
		year: 2007,
		cast: ["Chiara Mastroianni", "Catherine Deneuve", "Danielle Darrieux"],
		genres: ["Animated"]
	},{ 
		title: "Pirates of the Caribbean: At World's End",
		year: 2007,
		cast: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Bill Nighy", "Geoffrey Rush", "Chow Yun-fat"],
		genres: ["Adventure"]
	},{ 
		title: "The Poughkeepsie Tapes",
		year: 2007,
		cast: ["Samantha Robson", "Ivar Brogger"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Premonition",
		year: 2007,
		cast: ["Sandra Bullock", "Julian McMahon", "Nia Long"],
		genres: ["Thriller"]
	},{ 
		title: "Press Start",
		year: 2007,
		cast: ["Joshua Stafford", "Daniel Pesina"],
		genres: ["Comedy"]
	},{ 
		title: "Pride",
		year: 2007,
		cast: ["Bernie Mac"],
		genres: ["Drama"]
	},{ 
		title: "Primeval",
		year: 2007,
		cast: ["Dominic Purcell", "Orlando Jones"],
		genres: ["Horror"]
	},{ 
		title: "Ratatouille",
		year: 2007,
		cast: ["Patton Oswalt", "Lou Romano", "Peter Sohn", "Brad Garrett"],
		genres: ["Animated"]
	},{ 
		title: "The Reaping",
		year: 2007,
		cast: ["Hilary Swank", "AnnaSophia Robb", "David Morrissey", "Stephen Rea"],
		genres: ["Horror"]
	},{ 
		title: "Redline",
		year: 2007,
		cast: ["Tim Matheson", "Nathan Phillips", "Nadia Bjorlin", "Eddie Griffin"],
		genres: ["Action"]
	},{ 
		title: "Redrum",
		year: 2007,
		cast: ["Kenny Young", "Jill Marie Jones"],
		genres: ["Comedy"]
	},{ 
		title: "Reign Over Me",
		year: 2007,
		cast: ["Adam Sandler", "Don Cheadle", "Liv Tyler"],
		genres: ["Drama"]
	},{ 
		title: "Remember the Daze",
		year: 2007,
		cast: ["Chris Marquette", "Sean Marquette", "Amber Heard", "Lyndsy Fonseca"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Rendition",
		year: 2007,
		cast: ["Jake Gyllenhaal", "Reese Witherspoon", "Peter Sarsgaard", "Alan Arkin", "Meryl Streep"],
		genres: ["Drama"]
	},{ 
		title: "Reno 911!: Miami",
		year: 2007,
		cast: ["Carlos Alazraqui", "Mary Birdsong", "Wendi McLendon-Covey"],
		genres: ["Comedy"]
	},{ 
		title: "Reservation Road",
		year: 2007,
		cast: ["Joaquin Phoenix", "Mark Ruffalo", "Jennifer Connelly", "Mira Sorvino"],
		genres: ["Drama"]
	},{ 
		title: "Resident Evil: Extinction",
		year: 2007,
		cast: ["Milla Jovovich", "Ali Larter"],
		genres: ["Action", "Horror"]
	},{ 
		title: "Resurrecting the Champ",
		year: 2007,
		cast: ["Samuel L. Jackson", "Josh Hartnett"],
		genres: ["Drama"]
	},{ 
		title: "Rocket Science",
		year: 2007,
		cast: ["Reece Thompson", "Anna Kendrick", "Nicholas D'Agosto"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Rolling",
		year: 2007,
		cast: ["Sanoe Lake"],
		genres: ["Drama"]
	},{ 
		title: "Rush Hour 3",
		year: 2007,
		cast: ["Jackie Chan", "Chris Tucker"],
		genres: ["Action"]
	},{ 
		title: "Savage Grace",
		year: 2007,
		cast: ["Julianne Moore", "Stephen Dillane", "Eddie Redmayne", "Hugh Dancy"],
		genres: ["Drama"]
	},{ 
		title: "The Savages",
		year: 2007,
		cast: ["Laura Linney", "Philip Seymour Hoffman"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Saw IV",
		year: 2007,
		cast: ["Tobin Bell", "Lyriq Bent", "Costas Mandylor", "Betsy Russell"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "The Seeker",
		year: 2007,
		cast: ["Ian McShane"],
		genres: ["Fantasy"]
	},{ 
		title: "Seraphim Falls",
		year: 2007,
		cast: ["Pierce Brosnan", "Liam Neeson"],
		genres: ["Western"]
	},{ 
		title: "Shadow Puppets",
		year: 2007,
		cast: ["Jolene Blalock", "Tony Todd", "James Marsters"],
		genres: ["Horror"]
	},{ 
		title: "Shoot 'Em Up",
		year: 2007,
		cast: ["Clive Owen", "Paul Giamatti", "Monica Bellucci"],
		genres: ["Action"]
	},{ 
		title: "Shooter",
		year: 2007,
		cast: ["Mark Wahlberg", "Danny Glover", "Michael Peña", "Ned Beatty"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "ShowBusiness: The Road to Broadway",
		year: 2007,
		cast: ["The 2003–04", "Broadway season", "of", "Wicked", "Taboo", "Caroline", "or Change", "and", "Avenue Q"],
		genres: ["Documentary"]
	},{ 
		title: "Shrek the Third",
		year: 2007,
		cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
		genres: ["Animated"]
	},{ 
		title: "Sicko",
		year: 2007,
		cast: ["American health care", "and", "pharmaceutical industry"],
		genres: ["Documentary"]
	},{ 
		title: "The Simpsons Movie",
		year: 2007,
		cast: ["Dan Castellaneta", "Julie Kavner", "Nancy Cartwright", "Yeardley Smith"],
		genres: ["Animated"]
	},{ 
		title: "Sinner",
		year: 2007,
		cast: ["Nick Chinlund", "Georgina Cates", "Michael E. Rodgers"],
		genres: ["Drama"]
	},{ 
		title: "Sinners",
		year: 2007,
		cast: ["Ben Kurland"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Sleuth",
		year: 2007,
		cast: ["Michael Caine", "Jude Law"],
		genres: ["Drama"]
	},{ 
		title: "Slipstream",
		year: 2007,
		cast: ["Anthony Hopkins"],
		genres: ["Science Fiction"]
	},{ 
		title: "Smiley Face",
		year: 2007,
		cast: ["Anna Faris", "John Krasinski"],
		genres: ["Comedy"]
	},{ 
		title: "Smokin' Aces",
		year: 2007,
		cast: ["Ryan Reynolds", "Ray Liotta", "Alicia Keys", "Jeremy Piven", "Ben Affleck"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Socket",
		year: 2007,
		cast: ["Derek Long", "Alexandra Billings"],
		genres: ["Science Fiction"]
	},{ 
		title: "Spider-Man 3",
		year: 2007,
		cast: ["Tobey Maguire", "Kirsten Dunst", "James Franco", "Thomas Haden Church", "Topher Grace"],
		genres: ["Superhero"]
	},{ 
		title: "Spiral",
		year: 2007,
		cast: ["Amber Tamblyn", "Joel David Moore", "Zachary Levi"],
		genres: ["Drama"]
	},{ 
		title: "Stardust",
		year: 2007,
		cast: ["Claire Danes", "Michelle Pfeiffer", "Robert De Niro"],
		genres: ["Fantasy"]
	},{ 
		title: "The Star of Bethlehem",
		year: 2007,
		cast: ["Frederick Larson's", "search for the Star of Bethlehem"],
		genres: ["Documentary"]
	},{ 
		title: "Starting Out in the Evening",
		year: 2007,
		cast: ["Frank Langella", "Lauren Ambrose", "Lili Taylor"],
		genres: ["Romance"]
	},{ 
		title: "A State of Vine",
		year: 2007,
		cast: ["Wine", "industry"],
		genres: ["Documentary"]
	},{ 
		title: "Still Green",
		year: 2007,
		cast: ["Sarah Jones", "Ryan Kelley", "Douglas Spain"],
		genres: ["Drama"]
	},{ 
		title: "Stomp the Yard",
		year: 2007,
		cast: ["Columbus Short", "Chris Brown", "Ne-Yo"],
		genres: ["Dance", "Drama"]
	},{ 
		title: "Strange Culture",
		year: 2007,
		cast: ["the case of", "Steve Kurtz"],
		genres: ["Documentary"]
	},{ 
		title: "Stuck",
		year: 2007,
		cast: ["Mena Suvari", "Stephen Rea"],
		genres: ["Crime"]
	},{ 
		title: "Suburban Girl",
		year: 2007,
		cast: ["Sarah Michelle Gellar", "Alec Baldwin", "Maggie Grace", "Chris Carmack"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Suffering Man's Charity",
		year: 2007,
		cast: ["Alan Cumming", "David Boreanaz"],
		genres: ["Comedy"]
	},{ 
		title: "Sunshine",
		year: 2007,
		cast: ["Cillian Murphy", "Rose Byrne", "Cliff Curtis"],
		genres: ["Science Fiction"]
	},{ 
		title: "Superbad",
		year: 2007,
		cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse", "Seth Rogen"],
		genres: ["Comedy"]
	},{ 
		title: "Surf's Up",
		year: 2007,
		cast: ["Shia LaBeouf", "Jeff Bridges", "Zooey Deschanel"],
		genres: ["Animated"]
	},{ 
		title: "Sweeney Todd: The Demon Barber of Fleet Street",
		year: 2007,
		cast: ["Johnny Depp", "Helena Bonham Carter", "Alan Rickman", "Laura Michelle Kelly"],
		genres: ["Musical", "Thriller"]
	},{ 
		title: "Talk to Me",
		year: 2007,
		cast: ["Don Cheadle", "Chiwetel Ejiofor", "Taraji P. Henson", "Cedric the Entertainer", "Mike Epps", "Martin Sheen"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Taxi to the Dark Side",
		year: 2007,
		cast: ["the murder of", "Dilawar"],
		genres: ["Documentary"]
	},{ 
		title: "The Ten",
		year: 2007,
		cast: ["Jessica Alba", "Winona Ryder", "Paul Rudd"],
		genres: ["Comedy"]
	},{ 
		title: "There Will Be Blood",
		year: 2007,
		cast: ["Daniel Day-Lewis", "Paul Dano", "Dillon Freasier", "Kevin J. O'Connor"],
		genres: ["Drama"]
	},{ 
		title: "Things We Lost in the Fire",
		year: 2007,
		cast: ["Halle Berry", "Benicio del Toro"],
		genres: ["Drama"]
	},{ 
		title: "TMNT",
		year: 2007,
		cast: ["James Arnold Taylor", "Mitchell Whitfield", "Mikey Kelley", "Nolan North"],
		genres: ["Animated"]
	},{ 
		title: "Transformers",
		year: 2007,
		cast: ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "Tyrese Gibson"],
		genres: ["Science Fiction"]
	},{ 
		title: "Underdog",
		year: 2007,
		cast: ["Alex Neuberger", "Amy Adams", "Jason Lee"],
		genres: ["Superhero"]
	},{ 
		title: "Vacancy",
		year: 2007,
		cast: ["Luke Wilson", "Kate Beckinsale"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Waitress",
		year: 2007,
		cast: ["Keri Russell", "Nathan Fillion", "Cheryl Hines", "Jeremy Sisto"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Walk Hard: The Dewey Cox Story",
		year: 2007,
		cast: ["John C. Reilly", "Jenna Fischer"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "War",
		year: 2007,
		cast: ["Jet Li", "Jason Statham"],
		genres: ["Action"]
	},{ 
		title: "War/Dance",
		year: 2007,
		cast: ["Acholi", "ethnic group in", "Uganda", "refugee camp"],
		genres: ["Documentary"]
	},{ 
		title: "The Water Horse: Legend of the Deep",
		year: 2007,
		cast: ["Emily Watson"],
		genres: ["Fantasy"]
	},{ 
		title: "We Are the Strange",
		year: 2007,
		cast: ["Chaylon Blancett"],
		genres: ["Animated"]
	},{ 
		title: "Welcome to Nollywood",
		year: 2007,
		cast: ["The", "cinema of Nigeria"],
		genres: ["Documentary"]
	},{ 
		title: "We Own the Night",
		year: 2007,
		cast: ["Mark Wahlberg", "Joaquin Phoenix", "Eva Mendes", "Robert Duvall"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "What Love Is",
		year: 2007,
		cast: ["Cuba Gooding Jr."],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "What We Do Is Secret",
		year: 2007,
		cast: ["Shane West", "Bijou Phillips", "Rick Gonzalez"],
		genres: ["Biography"]
	},{ 
		title: "Whisper",
		year: 2007,
		cast: ["Josh Holloway", "Blake Woodruff"],
		genres: ["Horror"]
	},{ 
		title: "White Noise: The Light",
		year: 2007,
		cast: ["Nathan Fillion", "Katee Sackhoff"],
		genres: ["Horror"]
	},{ 
		title: "Who's Your Caddy?",
		year: 2007,
		cast: ["Lil Wayne", "Andy Milonakis"],
		genres: ["Comedy"]
	},{ 
		title: "Why Did I Get Married?",
		year: 2007,
		cast: ["Denise Boutte", "Richard T. Jones", "Sharon Leal", "Lamman Rucker", "Jill Scott", "Tasha Smith", "Michael Jai White", "Malik Yoba", "Janet Jackson"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Wild Hogs",
		year: 2007,
		cast: ["John Travolta", "Tim Allen", "Martin Lawrence", "William H. Macy", "Marisa Tomei"],
		genres: ["Comedy"]
	},{ 
		title: "Wind Chill",
		year: 2007,
		cast: ["Emily Blunt", "Ashton Holmes"],
		genres: ["Horror"]
	},{ 
		title: "Year of the Dog",
		year: 2007,
		cast: ["Molly Shannon", "Laura Dern"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Year of the Fish",
		year: 2007,
		cast: ["Tsai Chin", "Ken Leung"],
		genres: ["Animated"]
	},{ 
		title: "You Kill Me",
		year: 2007,
		cast: ["Ben Kingsley", "Téa Leoni", "Luke Wilson", "Dennis Farina"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Youth Without Youth",
		year: 2007,
		cast: ["Tim Roth", "Bruno Ganz"],
		genres: ["Romance"]
	},{ 
		title: "Zodiac",
		year: 2007,
		cast: ["Jake Gyllenhaal", "Robert Downey Jr.", "Mark Ruffalo", "Anthony Edwards", "Chloë Sevigny", "John Carroll Lynch", "Brian Cox"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "10,000 BC",
		year: 2008,
		cast: ["Steven Strait", "Camilla Belle", "Cliff Curtis"],
		genres: ["Adventure"]
	},{ 
		title: "21",
		year: 2008,
		cast: ["Jim Sturgess", "Kevin Spacey", "Kate Bosworth", "Laurence Fishburne"],
		genres: ["Drama"]
	},{ 
		title: "27 Dresses",
		year: 2008,
		cast: ["Katherine Heigl", "James Marsden", "Malin Åkerman", "Edward Burns", "Judy Greer"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "88 Minutes",
		year: 2008,
		cast: ["Al Pacino", "Alicia Witt", "Leelee Sobieski", "Amy Brenneman", "Deborah Kara Unger", "Benjamin McKenzie", "William Forsythe", "Neal McDonough"],
		genres: ["Thriller"]
	},{ 
		title: "The Accidental Husband",
		year: 2008,
		cast: ["Uma Thurman", "Jeffrey Dean Morgan", "Colin Firth"],
		genres: ["Romance"]
	},{ 
		title: "An American Carol",
		year: 2008,
		cast: ["Kevin Farley", "Kelsey Grammer", "Jon Voight"],
		genres: ["Fantasy"]
	},{ 
		title: "American Teen",
		year: 2008,
		cast: ["The", "stereotypes", "of", "High school"],
		genres: ["Documentary"]
	},{ 
		title: "Appaloosa",
		year: 2008,
		cast: ["Ed Harris", "Viggo Mortensen", "Renée Zellweger", "Jeremy Irons"],
		genres: ["Western"]
	},{ 
		title: "August",
		year: 2008,
		cast: ["Naomie Harris", "Josh Hartnett", "Rip Torn", "Adam Scott"],
		genres: ["Drama"]
	},{ 
		title: "Baby Mama",
		year: 2008,
		cast: ["Tina Fey", "Amy Poehler", "Greg Kinnear", "Dax Shepard", "Romany Malco"],
		genres: ["Comedy"]
	},{ 
		title: "Babylon A.D.",
		year: 2008,
		cast: ["Vin Diesel", "Michelle Yeoh", "Melanie Thierry", "Lambert Wilson", "Mark Strong", "Charlotte Rampling", "Gérard Depardieu"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "Ballast",
		year: 2008,
		cast: ["Michael J. Smith", "Sr."],
		genres: ["Drama"]
	},{ 
		title: "Bangkok Dangerous",
		year: 2008,
		cast: ["Nicolas Cage"],
		genres: ["Thriller"]
	},{ 
		title: "Be Kind Rewind",
		year: 2008,
		cast: ["Jack Black", "Mos Def", "Danny Glover"],
		genres: ["Comedy"]
	},{ 
		title: "Bedtime Stories",
		year: 2008,
		cast: ["Adam Sandler", "Keri Russell", "Guy Pearce", "Teresa Palmer"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Beer for My Horses",
		year: 2008,
		cast: ["Toby Keith", "Rodney Carrington", "Willie Nelson"],
		genres: ["Comedy"]
	},{ 
		title: "The Betrayal - Nerakhoon",
		year: 2008,
		cast: ["an immigrant from", "Laos", "living in", "New York City"],
		genres: ["Documentary"]
	},{ 
		title: "Beverly Hills Chihuahua",
		year: 2008,
		cast: ["Jamie Lee Curtis", "George Lopez", "Drew Barrymore", "Andy García"],
		genres: ["Comedy"]
	},{ 
		title: "Body of Lies",
		year: 2008,
		cast: ["Leonardo DiCaprio", "Russell Crowe"],
		genres: ["Drama"]
	},{ 
		title: "Bolt",
		year: 2008,
		cast: ["John Travolta", "Miley Cyrus"],
		genres: ["Animated"]
	},{ 
		title: "The Boy in the Striped Pyjamas",
		year: 2008,
		cast: ["Vera Farmiga", "Jack Scanlon", "David Thewlis", "Asa Butterfield"],
		genres: ["Drama"]
	},{ 
		title: "The Brothers Bloom",
		year: 2008,
		cast: ["Rachel Weisz", "Adrien Brody", "Mark Ruffalo"],
		genres: ["Comedy"]
	},{ 
		title: "Burn After Reading",
		year: 2008,
		cast: ["George Clooney", "Frances McDormand", "John Malkovich", "Tilda Swinton", "Brad Pitt", "Richard Jenkins"],
		genres: ["Comedy"]
	},{ 
		title: "Cadillac Records",
		year: 2008,
		cast: ["Adrien Brody", "Jeffrey Wright", "Beyoncé Knowles"],
		genres: ["Biography", "Musical"]
	},{ 
		title: "Changeling",
		year: 2008,
		cast: ["Angelina Jolie"],
		genres: ["Drama"]
	},{ 
		title: "Che",
		year: 2008,
		cast: ["Benicio del Toro", "Franka Potente", "Catalina Sandino Moreno"],
		genres: ["Biography", "War"]
	},{ 
		title: "Choke",
		year: 2008,
		cast: ["Sam Rockwell", "Anjelica Huston", "Kelly Macdonald"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Chronicles of Narnia: Prince Caspian",
		year: 2008,
		cast: ["Ben Barnes", "William Moseley", "Anna Popplewell", "Skandar Keynes"],
		genres: ["Fantasy"]
	},{ 
		title: "City of Ember",
		year: 2008,
		cast: ["Bill Murray", "Tim Robbins", "Saoirse Ronan"],
		genres: ["Fantasy", "Science Fiction"]
	},{ 
		title: "Cloverfield",
		year: 2008,
		cast: ["Michael Stahl-David", "Mike Vogel", "Odette Yustman", "Lizzy Caplan"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "College",
		year: 2008,
		cast: ["Drake Bell", "Kevin Covais", "Andrew Caldwell", "Haley Bennett"],
		genres: ["Comedy", "Teen"]
	},{ 
		title: "College Road Trip",
		year: 2008,
		cast: ["Raven-Symoné", "Martin Lawrence"],
		genres: ["Family"]
	},{ 
		title: "The Curious Case of Benjamin Button",
		year: 2008,
		cast: ["Brad Pitt", "Cate Blanchett", "Tilda Swinton", "Taraji P. Henson"],
		genres: ["Drama"]
	},{ 
		title: "The Dark Knight",
		year: 2008,
		cast: ["Christian Bale", "Michael Caine", "Heath Ledger", "Gary Oldman", "Aaron Eckhart", "Maggie Gyllenhaal", "Morgan Freeman", "Anthony Michael Hall", "Eric Roberts"],
		genres: ["Superhero"]
	},{ 
		title: "The Day the Earth Stood Still",
		year: 2008,
		cast: ["Keanu Reeves", "Jennifer Connelly", "Jaden Smith", "Kathy Bates"],
		genres: ["Science Fiction"]
	},{ 
		title: "Deal",
		year: 2008,
		cast: ["Bret Harrison", "Burt Reynolds", "Shannon Elizabeth"],
		genres: ["Drama"]
	},{ 
		title: "The Deal",
		year: 2008,
		cast: ["Meg Ryan", "Jason Ritter", "LL Cool J"],
		genres: ["Comedy"]
	},{ 
		title: "Death Race",
		year: 2008,
		cast: ["Jason Statham", "Tyrese Gibson", "Joan Allen", "Ian McShane"],
		genres: ["Action"]
	},{ 
		title: "Deception",
		year: 2008,
		cast: ["Ewan McGregor", "Hugh Jackman", "Michelle Williams", "Maggie Q"],
		genres: ["Thriller"]
	},{ 
		title: "Defiance",
		year: 2008,
		cast: ["Daniel Craig", "Liev Schreiber", "Jamie Bell"],
		genres: ["Drama", "War"]
	},{ 
		title: "Definitely, Maybe",
		year: 2008,
		cast: ["Ryan Reynolds", "Isla Fisher", "Derek Luke", "Abigail Breslin", "Elizabeth Banks", "Rachel Weisz"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Delgo",
		year: 2008,
		cast: ["Freddie Prinze, Jr.", "Jennifer Love Hewitt", "Anne Bancroft"],
		genres: ["Animated"]
	},{ 
		title: "Disaster Movie",
		year: 2008,
		cast: ["Kim Kardashian", "Carmen Electra", "Vanessa Minnillo", "Matt Lanter"],
		genres: ["Comedy", "Satire"]
	},{ 
		title: "Doomsday",
		year: 2008,
		cast: ["Rhona Mitra", "Bob Hoskins", "Malcolm McDowell", "Alexander Siddig"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Doubt",
		year: 2008,
		cast: ["Meryl Streep", "Philip Seymour Hoffman", "Amy Adams", "Viola Davis"],
		genres: ["Drama"]
	},{ 
		title: "Drillbit Taylor",
		year: 2008,
		cast: ["Owen Wilson", "Troy Gentile", "Nate Hartley", "David Dorfman"],
		genres: ["Comedy"]
	},{ 
		title: "Eagle Eye",
		year: 2008,
		cast: ["Shia LaBeouf", "Michelle Monaghan", "Billy Bob Thornton", "Rosario Dawson"],
		genres: ["Action"]
	},{ 
		title: "Elegy",
		year: 2008,
		cast: ["Penélope Cruz", "Ben Kingsley", "Peter Sarsgaard"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Expelled: No Intelligence Allowed",
		year: 2008,
		cast: ["The conflicts between", "intelligent design", "and", "evolution"],
		genres: ["Documentary"]
	},{ 
		title: "The Express",
		year: 2008,
		cast: ["Dennis Quaid", "Rob Brown", "Omar Benson Miller"],
		genres: ["Biography", "Sports"]
	},{ 
		title: "The Eye",
		year: 2008,
		cast: ["Jessica Alba"],
		genres: ["Horror"]
	},{ 
		title: "The Family That Preys",
		year: 2008,
		cast: ["Tyler Perry", "Alfre Woodard", "Sanaa Lathan", "Rockmond Dunbar"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Felon",
		year: 2008,
		cast: ["Stephen Dorff", "Val Kilmer"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Fireflies in the Garden",
		year: 2008,
		cast: ["Julia Roberts", "Ryan Reynolds", "Willem Dafoe", "Emily Watson"],
		genres: ["Drama"]
	},{ 
		title: "Fireproof",
		year: 2008,
		cast: ["Kirk Cameron", "Erin Bethea"],
		genres: ["Drama"]
	},{ 
		title: "First Sunday",
		year: 2008,
		cast: ["Ice Cube", "Katt Williams", "Tracy Morgan"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Flash of Genius",
		year: 2008,
		cast: ["Greg Kinnear"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Fool's Gold",
		year: 2008,
		cast: ["Matthew McConaughey", "Kate Hudson"],
		genres: ["Adventure"]
	},{ 
		title: "The Forbidden Kingdom",
		year: 2008,
		cast: ["Jackie Chan", "Jet Li", "Michael Angarano", "Liu Yifei"],
		genres: ["Martial Arts"]
	},{ 
		title: "Forever Strong",
		year: 2008,
		cast: ["Sean Astin", "Penn Badgley", "Sean Faris"],
		genres: ["Drama"]
	},{ 
		title: "Forgetting Sarah Marshall",
		year: 2008,
		cast: ["Jason Segel", "Kristen Bell", "Mila Kunis", "Russell Brand"],
		genres: ["Comedy"]
	},{ 
		title: "Four Christmases",
		year: 2008,
		cast: ["Vince Vaughn", "Reese Witherspoon", "Robert Duvall", "Sissy Spacek", "Jon Voight", "Mary Steenburgen"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Frost/Nixon",
		year: 2008,
		cast: ["Frank Langella", "Michael Sheen", "Kevin Bacon", "Sam Rockwell", "Toby Jones", "Oliver Platt", "Rebecca Hall"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "Frozen River",
		year: 2008,
		cast: ["Melissa Leo", "Misty Upham", "Michael O'Keefe", "Mark Boone, Jr."],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Funny Games",
		year: 2008,
		cast: ["Naomi Watts", "Tim Roth", "Michael Pitt", "Brady Corbet"],
		genres: ["Thriller"]
	},{ 
		title: "The Garden",
		year: 2008,
		cast: ["history of the", "South Central Farm"],
		genres: ["Documentary"]
	},{ 
		title: "Garden Party",
		year: 2008,
		cast: ["Vinessa Shaw", "Willa Holland"],
		genres: ["Drama"]
	},{ 
		title: "Get Smart",
		year: 2008,
		cast: ["Steve Carell", "Anne Hathaway", "Dwayne Johnson", "Alan Arkin", "Terry Crews", "James Caan"],
		genres: ["Comedy"]
	},{ 
		title: "Ghost Town",
		year: 2008,
		cast: ["Ricky Gervais", "Téa Leoni", "Greg Kinnear"],
		genres: ["Comedy"]
	},{ 
		title: "Gran Torino",
		year: 2008,
		cast: ["Clint Eastwood"],
		genres: ["Drama"]
	},{ 
		title: "Hamlet 2",
		year: 2008,
		cast: ["Steve Coogan", "Catherine Keener", "David Arquette"],
		genres: ["Comedy"]
	},{ 
		title: "Hancock",
		year: 2008,
		cast: ["Will Smith", "Charlize Theron", "Jason Bateman"],
		genres: ["Superhero"]
	},{ 
		title: "Hannah Montana & Miley Cyrus: Best of Both Worlds Concert",
		year: 2008,
		cast: ["Miley Cyrus", "Jonas Brothers", "Kenny Ortega", "Billy Ray Cyrus"],
		genres: ["Performance"]
	},{ 
		title: "The Happening",
		year: 2008,
		cast: ["Mark Wahlberg", "Zooey Deschanel", "John Leguizamo", "Betty Buckley"],
		genres: ["Horror"]
	},{ 
		title: "Harold",
		year: 2008,
		cast: ["Spencer Breslin", "Cuba Gooding, Jr.", "Nikki Blonsky", "Ally Sheedy"],
		genres: ["Comedy"]
	},{ 
		title: "Harold & Kumar Escape from Guantanamo Bay",
		year: 2008,
		cast: ["John Cho", "Kal Penn"],
		genres: ["Comedy"]
	},{ 
		title: "The Haunting of Molly Hartley",
		year: 2008,
		cast: ["Haley Bennett", "Chace Crawford", "AnnaLynne McCord", "Shannon Marie Woodward"],
		genres: ["Horror"]
	},{ 
		title: "Hellboy II: The Golden Army",
		year: 2008,
		cast: ["Ron Perlman", "Selma Blair", "Doug Jones", "Luke Goss"],
		genres: ["Action", "Superhero"]
	},{ 
		title: "Henry Poole Is Here",
		year: 2008,
		cast: ["Luke Wilson", "Radha Mitchell", "George Lopez"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Hero Wanted",
		year: 2008,
		cast: ["Cuba Gooding, Jr.", "Ray Liotta"],
		genres: ["Action"]
	},{ 
		title: "High School Musical 3: Senior Year",
		year: 2008,
		cast: ["Zac Efron", "Vanessa Hudgens", "Ashley Tisdale", "Corbin Bleu"],
		genres: ["Musical", "Family"]
	},{ 
		title: "Horton Hears a Who!",
		year: 2008,
		cast: ["Jim Carrey", "Steve Carell", "Carol Burnett", "Dan Fogler"],
		genres: ["Animated"]
	},{ 
		title: "The Hottie and the Nottie",
		year: 2008,
		cast: ["Paris Hilton", "Joel David Moore", "Christine Lakin"],
		genres: ["Comedy"]
	},{ 
		title: "The House Bunny",
		year: 2008,
		cast: ["Anna Faris", "Emma Stone", "Colin Hanks", "Katharine McPhee"],
		genres: ["Comedy"]
	},{ 
		title: "Igor",
		year: 2008,
		cast: ["John Cusack", "Steve Buscemi", "John Cleese", "Jennifer Coolidge"],
		genres: ["Animated"]
	},{ 
		title: "In Bruges",
		year: 2008,
		cast: ["Colin Farrell", "Brendan Gleeson", "Ralph Fiennes"],
		genres: ["Action"]
	},{ 
		title: "The Incredible Hulk",
		year: 2008,
		cast: ["Edward Norton", "Liv Tyler", "Tim Roth", "William Hurt"],
		genres: ["Superhero"]
	},{ 
		title: "Indiana Jones and the Kingdom of the Crystal Skull",
		year: 2008,
		cast: ["Harrison Ford", "Karen Allen", "Shia LaBeouf", "Cate Blanchett", "Jim Broadbent", "Ray Winstone"],
		genres: ["Adventure"]
	},{ 
		title: "Inkheart",
		year: 2008,
		cast: ["Brendan Fraser", "Eliza Bennett", "Sienna Guillory", "Paul Bettany", "Helen Mirren", "Andy Serkis"],
		genres: ["Adventure"]
	},{ 
		title: "Iron Man",
		year: 2008,
		cast: ["Robert Downey, Jr.", "Terrence Howard", "Gwyneth Paltrow", "Jeff Bridges"],
		genres: ["Superhero"]
	},{ 
		title: "Journey to the Center of the Earth",
		year: 2008,
		cast: ["Brendan Fraser", "Josh Hutcherson", "Anita Briem"],
		genres: ["Science Fiction"]
	},{ 
		title: "Jumper",
		year: 2008,
		cast: ["Hayden Christensen", "Samuel L. Jackson", "Rachel Bilson", "Jamie Bell", "Diane Lane", "Michael Rooker"],
		genres: ["Science Fiction"]
	},{ 
		title: "Kit Kittredge: An American Girl",
		year: 2008,
		cast: ["Abigail Breslin", "Chris O'Donnell", "Julia Ormond", "Stanley Tucci"],
		genres: ["Family"]
	},{ 
		title: "Kung Fu Panda",
		year: 2008,
		cast: ["Jack Black", "Jackie Chan", "Dustin Hoffman", "Angelina Jolie", "Lucy Liu", "Seth Rogen"],
		genres: ["Animated"]
	},{ 
		title: "Lakeview Terrace",
		year: 2008,
		cast: ["Samuel L. Jackson", "Kerry Washington", "Patrick Wilson"],
		genres: ["Thriller"]
	},{ 
		title: "Last Chance Harvey",
		year: 2008,
		cast: ["Dustin Hoffman", "Emma Thompson", "Eileen Atkins", "Kathy Baker", "James Brolin"],
		genres: ["Romance"]
	},{ 
		title: "Leatherheads",
		year: 2008,
		cast: ["George Clooney", "Renée Zellweger", "John Krasinski"],
		genres: ["Comedy"]
	},{ 
		title: "The Love Guru",
		year: 2008,
		cast: ["Mike Myers", "Jessica Alba", "Romany Malco", "Justin Timberlake"],
		genres: ["Comedy"]
	},{ 
		title: "The Longshots",
		year: 2008,
		cast: ["Ice Cube", "Keke Palmer", "Dash Mihok", "Tasha Smith"],
		genres: ["Family"]
	},{ 
		title: "The Lucky Ones",
		year: 2008,
		cast: ["Rachel McAdams", "Tim Robbins", "Michael Peña"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Mad Money",
		year: 2008,
		cast: ["Diane Keaton", "Queen Latifah", "Katie Holmes"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Madagascar: Escape 2 Africa",
		year: 2008,
		cast: ["Ben Stiller", "Chris Rock", "Jada Pinkett Smith", "David Schwimmer"],
		genres: ["Animated"]
	},{ 
		title: "Made of Honor",
		year: 2008,
		cast: ["Patrick Dempsey", "Michelle Monaghan", "Kevin McKidd", "Kathleen Quinlan"],
		genres: ["Comedy"]
	},{ 
		title: "Mamma Mia!",
		year: 2008,
		cast: ["Meryl Streep", "Amanda Seyfried", "Pierce Brosnan", "Colin Firth", "Stellan Skarsgård", "Christine Baranski"],
		genres: ["Musical"]
	},{ 
		title: "Man on Wire",
		year: 2008,
		cast: ["Philippe Petit", "'s 1974 high-wire walk between", "the Twin Towers"],
		genres: ["Documentary"]
	},{ 
		title: "Marley & Me",
		year: 2008,
		cast: ["Owen Wilson", "Jennifer Aniston"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Max Payne",
		year: 2008,
		cast: ["Mark Wahlberg", "Mila Kunis", "Beau Bridges", "Ludacris", "Chris O'Donnell", "Donal Logue", "Olga Kurylenko"],
		genres: ["Action"]
	},{ 
		title: "Meet Dave",
		year: 2008,
		cast: ["Eddie Murphy", "Gabrielle Union", "Elizabeth Banks", "Ed Helms"],
		genres: ["Comedy"]
	},{ 
		title: "Meet the Browns",
		year: 2008,
		cast: ["Tyler Perry", "Angela Bassett", "Jenifer Lewis", "Rick Fox"],
		genres: ["Comedy"]
	},{ 
		title: "Meet the Spartans",
		year: 2008,
		cast: ["Sean Maguire", "Ken Davitian", "Carmen Electra", "Diedrich Bader", "Kevin Sorbo", "Travis Van Winkle"],
		genres: ["Comedy"]
	},{ 
		title: "The Midnight Meat Train",
		year: 2008,
		cast: ["Bradley Cooper", "Leslie Bibb", "Tony Curran"],
		genres: ["Horror"]
	},{ 
		title: "Milk",
		year: 2008,
		cast: ["Sean Penn", "Josh Brolin", "Emile Hirsch", "James Franco", "Diego Luna"],
		genres: ["Biography"]
	},{ 
		title: "Miracle at St. Anna",
		year: 2008,
		cast: ["Derek Luke", "Michael Ealy", "Laz Alonso", "Omar Benson Miller", "Pierfrancesco Favino", "Valentina Cervi"],
		genres: ["War"]
	},{ 
		title: "Mirrors",
		year: 2008,
		cast: ["Kiefer Sutherland", "Paula Patton", "Amy Smart"],
		genres: ["Horror"]
	},{ 
		title: "The Mummy: Tomb of the Dragon Emperor",
		year: 2008,
		cast: ["Brendan Fraser", "Jet Li", "Maria Bello", "John Hannah"],
		genres: ["Adventure"]
	},{ 
		title: "My Best Friend's Girl",
		year: 2008,
		cast: ["Dane Cook", "Kate Hudson", "Jason Biggs", "Alec Baldwin"],
		genres: ["Comedy"]
	},{ 
		title: "My Sassy Girl",
		year: 2008,
		cast: ["Elisha Cuthbert", "Jesse Bradford", "Chris Sarandon"],
		genres: ["Comedy"]
	},{ 
		title: "Never Back Down",
		year: 2008,
		cast: ["Djimon Hounsou", "Amber Heard", "Sean Faris", "Cam Gigandet"],
		genres: ["Action"]
	},{ 
		title: "Nick and Norah's Infinite Playlist",
		year: 2008,
		cast: ["Michael Cera", "Kat Dennings", "Alexis Dziena", "Ari Graynor", "Aaron Yoo", "Jay Baruchel"],
		genres: ["Comedy"]
	},{ 
		title: "Nights in Rodanthe",
		year: 2008,
		cast: ["Richard Gere", "Diane Lane"],
		genres: ["Romance"]
	},{ 
		title: "Nim's Island",
		year: 2008,
		cast: ["Abigail Breslin", "Jodie Foster", "Gerard Butler"],
		genres: ["Adventure"]
	},{ 
		title: "Nothing But the Truth",
		year: 2008,
		cast: ["Kate Beckinsale", "Matt Dillon", "Angela Bassett", "Alan Alda", "Vera Farmiga", "David Schwimmer", "Noah Wyle"],
		genres: ["Thriller"]
	},{ 
		title: "Nothing Like the Holidays",
		year: 2008,
		cast: ["Luis Guzmán", "John Leguizamo", "Debra Messing", "Alfred Molina"],
		genres: ["Drama"]
	},{ 
		title: "One Missed Call",
		year: 2008,
		cast: ["Edward Burns", "Shannyn Sossamon", "Ana Claudia Talancón", "Azura Skye"],
		genres: ["Horror"]
	},{ 
		title: "The Other Boleyn Girl",
		year: 2008,
		cast: ["Natalie Portman", "Scarlett Johansson", "Eric Bana"],
		genres: ["Drama"]
	},{ 
		title: "Over Her Dead Body",
		year: 2008,
		cast: ["Eva Longoria", "Paul Rudd", "Lake Bell", "Jason Biggs"],
		genres: ["Comedy"]
	},{ 
		title: "Passengers",
		year: 2008,
		cast: ["Anne Hathaway", "Patrick Wilson", "David Morse", "Andre Braugher"],
		genres: ["Drama"]
	},{ 
		title: "Pathology",
		year: 2008,
		cast: ["Milo Ventimiglia", "Michael Weston", "Alyssa Milano", "Lauren Lee Smith"],
		genres: ["Thriller"]
	},{ 
		title: "Patti Smith: Dream of Life",
		year: 2008,
		cast: ["the career of", "Patti Smith"],
		genres: ["Documentary"]
	},{ 
		title: "Pineapple Express",
		year: 2008,
		cast: ["Seth Rogen", "James Franco"],
		genres: ["Comedy"]
	},{ 
		title: "The Pirates Who Don't Do Anything: A VeggieTales Movie",
		year: 2008,
		cast: ["Mike Nawrocki", "Phil Vischer", "Tim Hodge"],
		genres: ["Animated"]
	},{ 
		title: "Pray the Devil Back to Hell",
		year: 2008,
		cast: ["women in", "Liberia"],
		genres: ["Documentary"]
	},{ 
		title: "Pride and Glory",
		year: 2008,
		cast: ["Edward Norton", "Colin Farrell"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Prom Night",
		year: 2008,
		cast: ["Brittany Snow", "Scott Porter", "Johnathon Schaech", "Idris Elba"],
		genres: ["Horror"]
	},{ 
		title: "The Promotion",
		year: 2008,
		cast: ["Seann William Scott", "John C. Reilly"],
		genres: ["Comedy"]
	},{ 
		title: "Proud American",
		year: 2008,
		cast: ["the American spirit"],
		genres: ["Documentary"]
	},{ 
		title: "Punisher: War Zone",
		year: 2008,
		cast: ["Ray Stevenson", "Dominic West", "Doug Hutchison", "Wayne Knight"],
		genres: ["Superhero"]
	},{ 
		title: "Quantum of Solace",
		year: 2008,
		cast: ["Daniel Craig", "Olga Kurylenko", "Mathieu Amalric"],
		genres: ["Action"]
	},{ 
		title: "Quarantine",
		year: 2008,
		cast: ["Jennifer Carpenter", "Steve Harris", "Jay Hernandez", "Columbus Short"],
		genres: ["Horror"]
	},{ 
		title: "Rachel Getting Married",
		year: 2008,
		cast: ["Anne Hathaway", "Debra Winger", "Rosemarie DeWitt"],
		genres: ["Drama"]
	},{ 
		title: "Rambo",
		year: 2008,
		cast: ["Sylvester Stallone", "Julie Benz"],
		genres: ["Action"]
	},{ 
		title: "The Reader",
		year: 2008,
		cast: ["Kate Winslet", "Ralph Fiennes", "David Kross", "Lena Olin"],
		genres: ["Drama"]
	},{ 
		title: "Redbelt",
		year: 2008,
		cast: ["Chiwetel Ejiofor", "Tim Allen", "Alice Braga", "Randy Couture", "Ricky Jay", "Joe Mantegna", "Emily Mortimer", "David Paymer", "Rebecca Pidgeon", "Rodrigo Santoro"],
		genres: ["Drama", "Martial Arts"]
	},{ 
		title: "Religulous",
		year: 2008,
		cast: ["organized religion and", "religious belief"],
		genres: ["Documentary"]
	},{ 
		title: "Rent: Filmed Live on Broadway",
		year: 2008,
		cast: ["Rent"],
		genres: ["Musical"]
	},{ 
		title: "Repo! The Genetic Opera",
		year: 2008,
		cast: ["Alexa Vega", "Anthony Stewart Head", "Sarah Brightman", "Paris Hilton"],
		genres: ["Horror", "Musical"]
	},{ 
		title: "Revolutionary Road",
		year: 2008,
		cast: ["Leonardo DiCaprio", "Kate Winslet", "Michael Shannon", "Kathryn Hahn", "Kathy Bates"],
		genres: ["Drama"]
	},{ 
		title: "Righteous Kill",
		year: 2008,
		cast: ["Robert De Niro", "Al Pacino", "Carla Gugino", "Curtis Jackson", "Donnie Wahlberg"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Rocker",
		year: 2008,
		cast: ["Rainn Wilson", "Christina Applegate", "Jeff Garlin", "Josh Gad", "Teddy Geiger", "Emma Stone"],
		genres: ["Comedy"]
	},{ 
		title: "Role Models",
		year: 2008,
		cast: ["Seann William Scott", "Paul Rudd", "Christopher Mintz-Plasse", "Bobb'e J. Thompson", "Jane Lynch", "Elizabeth Banks"],
		genres: ["Comedy"]
	},{ 
		title: "The Ruins",
		year: 2008,
		cast: ["Jonathan Tucker", "Jena Malone", "Shawn Ashmore", "Laura Ramsey", "Joe Anderson"],
		genres: ["Horror"]
	},{ 
		title: "Saw V",
		year: 2008,
		cast: ["Tobin Bell", "Julie Benz", "Meagan Good", "Costas Mandylor"],
		genres: ["Horror"]
	},{ 
		title: "The Secret Life of Bees",
		year: 2008,
		cast: ["Queen Latifah", "Dakota Fanning", "Jennifer Hudson", "Alicia Keys", "Sophie Okenedo", "Paul Bettany", "Tristan Wilds"],
		genres: ["Drama"]
	},{ 
		title: "Semi-Pro",
		year: 2008,
		cast: ["Will Ferrell", "Woody Harrelson", "André Benjamin"],
		genres: ["Comedy", "Sports"]
	},{ 
		title: "Seven Pounds",
		year: 2008,
		cast: ["Will Smith", "Rosario Dawson", "Woody Harrelson", "Barry Pepper"],
		genres: ["Drama"]
	},{ 
		title: "Sex and the City",
		year: 2008,
		cast: ["Sarah Jessica Parker", "Kim Cattrall", "Kristin Davis", "Cynthia Nixon", "Chris Noth"],
		genres: ["Comedy"]
	},{ 
		title: "Sex Drive",
		year: 2008,
		cast: ["Josh Zuckerman", "Amanda Crew", "Clark Duke", "Seth Green", "James Marsden"],
		genres: ["Comedy"]
	},{ 
		title: "Shutter",
		year: 2008,
		cast: ["Joshua Jackson", "Rachael Taylor", "James Kyson Lee", "David Denman"],
		genres: ["Horror"]
	},{ 
		title: "The Sisterhood of the Traveling Pants 2",
		year: 2008,
		cast: ["Amber Tamblyn", "America Ferrera", "Blake Lively", "Alexis Bledel"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Sleepwalking",
		year: 2008,
		cast: ["Nick Stahl", "AnnaSophia Robb", "Charlize Theron", "Woody Harrelson", "Dennis Hopper"],
		genres: ["Drama"]
	},{ 
		title: "Smart People",
		year: 2008,
		cast: ["Dennis Quaid", "Sarah Jessica Parker", "Ellen Page", "Thomas Haden Church", "Ashton Holmes"],
		genres: ["Comedy"]
	},{ 
		title: "Soul Men",
		year: 2008,
		cast: ["Samuel L. Jackson", "Bernie Mac"],
		genres: ["Comedy", "Musical"]
	},{ 
		title: "Space Chimps",
		year: 2008,
		cast: ["Cheryl Hines", "Stanley Tucci", "Kenan Thompson", "Andy Samberg"],
		genres: ["Animated"]
	},{ 
		title: "Speed Racer",
		year: 2008,
		cast: ["Emile Hirsch", "Christina Ricci", "John Goodman", "Susan Sarandon", "Matthew Fox"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Spiderwick Chronicles",
		year: 2008,
		cast: ["Freddie Highmore", "Sarah Bolger", "Mary-Louise Parker", "David Strathairn"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Spike",
		year: 2008,
		cast: ["Edward Gusts", "Sarah Livingston Evans", "Anna-Marie Wayne"],
		genres: ["Horror"]
	},{ 
		title: "The Spirit",
		year: 2008,
		cast: ["Gabriel Macht", "Samuel L. Jackson", "Scarlett Johansson", "Eva Mendes", "Paz Vega", "Dan Lauria"],
		genres: ["Science Fiction"]
	},{ 
		title: "Spy School",
		year: 2008,
		cast: ["Forrest Landis", "AnnaSophia Robb", "Rider Strong", "Roger Bart"],
		genres: ["Family", "Spy"]
	},{ 
		title: "Star Wars: The Clone Wars",
		year: 2008,
		cast: ["James Arnold Taylor", "Matt Lanter", "Ashley Eckstein", "Tom Kane"],
		genres: ["Animated"]
	},{ 
		title: "Step Brothers",
		year: 2008,
		cast: ["Will Ferrell", "John C. Reilly", "Richard Jenkins", "Mary Steenburgen", "Adam Scott", "Kathryn Hahn"],
		genres: ["Comedy"]
	},{ 
		title: "Step Up 2: The Streets",
		year: 2008,
		cast: ["Briana Evigan", "Robert Hoffman", "Will Kemp", "Adam G. Sevani"],
		genres: ["Dance"]
	},{ 
		title: "Stop-Loss",
		year: 2008,
		cast: ["Ryan Phillippe", "Abbie Cornish", "Channing Tatum", "Joseph Gordon-Levitt", "Rob Brown"],
		genres: ["War"]
	},{ 
		title: "Strange Wilderness",
		year: 2008,
		cast: ["Steve Zahn", "Allen Covert", "Jonah Hill"],
		genres: ["Comedy"]
	},{ 
		title: "The Strangers",
		year: 2008,
		cast: ["Liv Tyler", "Scott Speedman"],
		genres: ["Horror"]
	},{ 
		title: "Street Kings",
		year: 2008,
		cast: ["Keanu Reeves", "Forest Whitaker", "Hugh Laurie", "Chris Evans", "Common", "The Game"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Superhero Movie",
		year: 2008,
		cast: ["Drake Bell", "Sara Paxton", "Leslie Nielsen", "Christopher McDonald"],
		genres: ["Comedy", "Satire"]
	},{ 
		title: "Swing Vote",
		year: 2008,
		cast: ["Kevin Costner", "Paula Patton", "Kelsey Grammer", "Dennis Hopper"],
		genres: ["Comedy"]
	},{ 
		title: "Taken",
		year: 2008,
		cast: ["Liam Neeson", "Famke Janssen", "Maggie Grace"],
		genres: ["Thriller"]
	},{ 
		title: "The Tale of Despereaux",
		year: 2008,
		cast: ["Matthew Broderick", "Emma Watson", "Dustin Hoffman", "Robbie Coltrane"],
		genres: ["Animated"]
	},{ 
		title: "Traitor",
		year: 2008,
		cast: ["Don Cheadle", "Guy Pearce", "Jeff Daniels"],
		genres: ["Spy"]
	},{ 
		title: "Tropic Thunder",
		year: 2008,
		cast: ["Ben Stiller", "Jack Black", "Robert Downey, Jr.", "Steve Coogan", "Nick Nolte", "Tom Cruise"],
		genres: ["Comedy"]
	},{ 
		title: "Trouble the Water",
		year: 2008,
		cast: ["two survivors of", "Hurricane Katrina"],
		genres: ["Documentary"]
	},{ 
		title: "Twilight",
		year: 2008,
		cast: ["Kristen Stewart", "Robert Pattinson", "Ashley Greene", "Peter Facinelli", "Billy Burke", "Anna Kendrick"],
		genres: ["Fantasy", "Romance"]
	},{ 
		title: "U2 3D",
		year: 2008,
		cast: ["Bono", "The Edge", "Adam Clayton", "Larry Mullen, Jr."],
		genres: ["Performance"]
	},{ 
		title: "Untraceable",
		year: 2008,
		cast: ["Diane Lane", "Colin Hanks", "Billy Burke", "Joseph Michael Cross"],
		genres: ["Thriller"]
	},{ 
		title: "Valkyrie",
		year: 2008,
		cast: ["Tom Cruise", "Kenneth Branagh", "Eddie Izzard", "Bill Nighy"],
		genres: ["War"]
	},{ 
		title: "Vantage Point",
		year: 2008,
		cast: ["Dennis Quaid", "Matthew Fox", "Forest Whitaker", "Sigourney Weaver", "William Hurt"],
		genres: ["Thriller"]
	},{ 
		title: "Vicky Cristina Barcelona",
		year: 2008,
		cast: ["Javier Bardem", "Penélope Cruz", "Scarlett Johansson", "Rebecca Hall", "Patricia Clarkson"],
		genres: ["Romance"]
	},{ 
		title: "Visioneers",
		year: 2008,
		cast: ["Zach Galifianakis", "Judy Greer", "James LeGros"],
		genres: ["Satire"]
	},{ 
		title: "W.",
		year: 2008,
		cast: ["Josh Brolin", "James Cromwell", "Ellen Burstyn", "Elizabeth Banks", "Thandie Newton", "Richard Dreyfuss", "Toby Jones", "Jeffrey Wright", "Scott Glenn"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "The Wackness",
		year: 2008,
		cast: ["Ben Kingsley", "Josh Peck", "Famke Janssen", "Olivia Thirlby", "Mary-Kate Olsen", "Method Man"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "WALL-E",
		year: 2008,
		cast: ["Ben Burtt", "Elissa Knight", "Jeff Garlin", "Fred Willard"],
		genres: ["Animated"]
	},{ 
		title: "Waltz with Bashir",
		year: 2008,
		cast: ["Ari Folman"],
		genres: ["Animated"]
	},{ 
		title: "Wanted",
		year: 2008,
		cast: ["James McAvoy", "Morgan Freeman", "Terence Stamp", "Angelina Jolie"],
		genres: ["Action"]
	},{ 
		title: "War, Inc.",
		year: 2008,
		cast: ["John Cusack", "Hilary Duff", "Marisa Tomei", "Joan Cusack"],
		genres: ["Action"]
	},{ 
		title: "Welcome Home Roscoe Jenkins",
		year: 2008,
		cast: ["Martin Lawrence", "Margaret Avery", "Joy Bryant", "Louis C.K."],
		genres: ["Comedy"]
	},{ 
		title: "What Doesn't Kill You",
		year: 2008,
		cast: ["Mark Ruffalo", "Ethan Hawke", "Amanda Peet", "Donnie Wahlberg"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "What Happens in Vegas",
		year: 2008,
		cast: ["Cameron Diaz", "Ashton Kutcher", "Dennis Farina"],
		genres: ["Comedy"]
	},{ 
		title: "What Just Happened",
		year: 2008,
		cast: ["Robert De Niro", "Sean Penn", "Catherine Keener", "John Turturro", "Kristen Stewart", "Stanley Tucci", "Bruce Willis"],
		genres: ["Comedy"]
	},{ 
		title: "Witless Protection",
		year: 2008,
		cast: ["Larry the Cable Guy", "Jenny McCarthy"],
		genres: ["Comedy"]
	},{ 
		title: "The Women",
		year: 2008,
		cast: ["Meg Ryan", "Annette Bening", "Eva Mendes", "Debra Messing", "Jada Pinkett Smith"],
		genres: ["Comedy"]
	},{ 
		title: "The Wrestler",
		year: 2008,
		cast: ["Mickey Rourke", "Marisa Tomei", "Evan Rachel Wood"],
		genres: ["Drama"]
	},{ 
		title: "The X-Files: I Want to Believe",
		year: 2008,
		cast: ["David Duchovny", "Gillian Anderson", "Amanda Peet"],
		genres: ["Science Fiction"]
	},{ 
		title: "Yes Man",
		year: 2008,
		cast: ["Jim Carrey"],
		genres: ["Comedy"]
	},{ 
		title: "You Don't Mess with the Zohan",
		year: 2008,
		cast: ["Adam Sandler", "John Turturro", "Emmanuelle Chriqui", "Nick Swardson"],
		genres: ["Comedy"]
	},{ 
		title: "Zack and Miri Make a Porno",
		year: 2008,
		cast: ["Seth Rogen", "Elizabeth Banks"],
		genres: ["Comedy"]
	},{ 
		title: "(500) Days of Summer",
		year: 2009,
		cast: ["Joseph Gordon-Levitt", "Zooey Deschanel"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "12 Rounds",
		year: 2009,
		cast: ["John Cena", "Ashley Scott", "Steve Harris", "Aidan Gillen", "Brian J. White", "Taylor Cole"],
		genres: ["Action"]
	},{ 
		title: "17 Again",
		year: 2009,
		cast: ["Zac Efron", "Leslie Mann", "Thomas Lennon", "Matthew Perry", "Melora Hardin", "Michelle Trachtenberg", "Sterling Knight"],
		genres: ["Comedy", "Teen"]
	},{ 
		title: "2012",
		year: 2009,
		cast: ["John Cusack", "Amanda Peet", "Danny Glover", "Thandie Newton", "Oliver Platt", "Chiwetel Ejiofor", "Woody Harrelson"],
		genres: ["Disaster"]
	},{ 
		title: "9",
		year: 2009,
		cast: ["Elijah Wood", "John C. Reilly", "Jennifer Connelly", "Christopher Plummer", "Crispin Glover", "Martin Landau"],
		genres: ["Animated"]
	},{ 
		title: "Adam",
		year: 2009,
		cast: ["Hugh Dancy", "Rose Byrne", "Peter Gallagher", "Amy Irving", "Frankie Faison", "Mark Linn-Baker", "Karina Arroyave"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Adventureland",
		year: 2009,
		cast: ["Jesse Eisenberg", "Kristen Stewart", "Martin Starr", "Bill Hader", "Kristen Wiig", "Margarita Levieva", "Ryan Reynolds"],
		genres: ["Comedy"]
	},{ 
		title: "After.Life",
		year: 2009,
		cast: ["Christina Ricci", "Liam Neeson", "Justin Long", "Celia Weston"],
		genres: ["Horror"]
	},{ 
		title: "Alien Trespass",
		year: 2009,
		cast: ["Eric McCormack", "Jenni Baird", "Dan Lauria", "Robert Patrick"],
		genres: ["Comedy", "Science Fiction"]
	},{ 
		title: "Aliens in the Attic",
		year: 2009,
		cast: ["Robert Hoffman", "Ashley Tisdale", "Carter Jenkins", "Austin Butler", "Kevin Nealon", "Doris Roberts"],
		genres: ["Science Fiction"]
	},{ 
		title: "All About Steve",
		year: 2009,
		cast: ["Sandra Bullock", "Bradley Cooper", "Thomas Haden Church"],
		genres: ["Comedy"]
	},{ 
		title: "Alvin and the Chipmunks: The Squeakquel",
		year: 2009,
		cast: ["Jason Lee", "David Cross", "Zachary Levi", "Justin Long", "Matthew Gray Gubler", "Jesse McCartney", "Anna Faris", "Christina Applegate", "Amy Poehler"],
		genres: ["Family", "Musical"]
	},{ 
		title: "Amelia",
		year: 2009,
		cast: ["Hilary Swank", "Richard Gere", "Ewan McGregor"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "American Violet",
		year: 2009,
		cast: ["Nicole Beharie", "Tim Blake Nelson", "Will Patton", "Michael O'Keefe", "Xzibit", "Charles S. Dutton", "Alfre Woodard"],
		genres: ["Drama"]
	},{ 
		title: "Angels & Demons",
		year: 2009,
		cast: ["Tom Hanks", "Ayelet Zurer", "Ewan McGregor", "Stellan Skarsgård", "Armin Mueller-Stahl", "Pierfrancesco Favino", "Nikolaj Lie Kaas"],
		genres: ["Adventure", "Mystery"]
	},{ 
		title: "The Answer Man",
		year: 2009,
		cast: ["Jeff Daniels", "Lauren Graham", "Lou Taylor Pucci", "Kat Dennings", "Olivia Thirlby"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Arcadia Lost",
		year: 2009,
		cast: ["Nick Nolte", "Haley Bennett", "Carter Jenkins", "Dato Bakhtadze", "Lachlan Buchanan", "James Ivory"],
		genres: ["Drama"]
	},{ 
		title: "Armored",
		year: 2009,
		cast: ["Matt Dillon", "Jean Reno", "Laurence Fishburne", "Milo Ventimiglia", "Skeet Ulrich", "Columbus Short", "Amaury Nolasco", "Fred Ward"],
		genres: ["Action", "Crime", "Drama"]
	},{ 
		title: "Assassination of a High School President",
		year: 2009,
		cast: ["Bruce Willis", "Reece Thompson", "Mischa Barton"],
		genres: ["Comedy"]
	},{ 
		title: "Astro Boy",
		year: 2009,
		cast: ["Freddie Highmore", "Nicolas Cage", "Donald Sutherland", "Nathan Lane", "Bill Nighy", "Eugene Levy", "Kristen Bell"],
		genres: ["Animated"]
	},{ 
		title: "Avatar",
		year: 2009,
		cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Michelle Rodriguez", "Stephen Lang", "Laz Alonso", "Giovanni Ribisi", "Joel Moore", "Wes Studi"],
		genres: ["Science Fiction"]
	},{ 
		title: "Away We Go",
		year: 2009,
		cast: ["John Krasinski", "Maya Rudolph", "Jeff Daniels", "Maggie Gyllenhaal", "Allison Janney", "Chris Messina", "Catherine O'Hara", "Paul Schneider", "Jim Gaffigan", "Melanie Lynskey", "Josh Hamilton"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Bad Lieutenant: Port of Call New Orleans",
		year: 2009,
		cast: ["Nicolas Cage", "Eva Mendes", "Val Kilmer", "Xzibit"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Bandslam",
		year: 2009,
		cast: ["Aly Michalka", "Vanessa Hudgens", "Gaelan Connell", "Scott Porter", "Lisa Kudrow"],
		genres: ["Musical"]
	},{ 
		title: "Battle for Terra",
		year: 2009,
		cast: ["Evan Rachel Wood", "Brian Cox", "James Garner", "Chris Evans", "Danny Glover", "Amanda Peet", "David Cross", "Justin Long", "Dennis Quaid", "Luke Wilson"],
		genres: ["Science Fiction", "Animated"]
	},{ 
		title: "Berdella[2]",
		year: 2009,
		cast: ["Vito Spino", "Seth Correa", "Marc Saleme", "Steve Williams"],
		genres: ["Biography", "Horror"]
	},{ 
		title: "Beyond a Reasonable Doubt",
		year: 2009,
		cast: ["Michael Douglas", "Jesse Metcalfe", "Amber Tamblyn", "Orlando Jones"],
		genres: ["Drama"]
	},{ 
		title: "Big Fan",
		year: 2009,
		cast: ["Patton Oswalt", "Kevin Corrigan", "Michael Rapaport", "Marcia Jean Kurtz"],
		genres: ["Drama"]
	},{ 
		title: "The Blind Side",
		year: 2009,
		cast: ["Sandra Bullock", "Kathy Bates", "Tim McGraw", "Ray McKinnon", "Quinton Aaron"],
		genres: ["Drama"]
	},{ 
		title: "Boogie Town",
		year: 2009,
		cast: ["Marques Houston", "Brenda Song"],
		genres: ["Dance"]
	},{ 
		title: "The Boondock Saints II: All Saints Day",
		year: 2009,
		cast: ["Sean Patrick Flanery", "Norman Reedus", "Clifton Collins, Jr.", "Julie Benz", "Judd Nelson", "Bob Marley", "Brian Mahoney", "David Ferry", "David Della Rocco", "Peter Fonda", "Billy Connolly"],
		genres: ["Action"]
	},{ 
		title: "The Box",
		year: 2009,
		cast: ["Cameron Diaz", "James Marsden", "Frank Langella", "James Rebhorn", "Holmes Osborne", "Gillian Jacobs"],
		genres: ["Science Fiction"]
	},{ 
		title: "Bride Wars",
		year: 2009,
		cast: ["Kate Hudson", "Anne Hathaway", "Candice Bergen"],
		genres: ["Comedy"]
	},{ 
		title: "Brothers",
		year: 2009,
		cast: ["Tobey Maguire", "Jake Gyllenhaal", "Natalie Portman", "Sam Shepard"],
		genres: ["War"]
	},{ 
		title: "The Brothers Bloom",
		year: 2009,
		cast: ["Adrien Brody", "Mark Ruffalo", "Rachel Weisz", "Rinko Kikuchi", "Robbie Coltrane", "Maximilian Schell"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Brother's War",
		year: 2009,
		cast: ["Tino Struckmann", "Michael Berryman"],
		genres: ["War"]
	},{ 
		title: "Brothers at War",
		year: 2009,
		cast: ["Soldiers in the", "Iraq War"],
		genres: ["Documentary"]
	},{ 
		title: "Brüno",
		year: 2009,
		cast: ["Sacha Baron Cohen"],
		genres: ["Satire"]
	},{ 
		title: "C Me Dance",
		year: 2009,
		cast: ["Greg Robbins", "Christina DeMarco", "Laura Romeo", "Peter Kent"],
		genres: ["Thriller"]
	},{ 
		title: "Capitalism: A Love Story",
		year: 2009,
		cast: ["The", "financial crisis of 2007–2010"],
		genres: ["Documentary"]
	},{ 
		title: "Carriers",
		year: 2009,
		cast: ["Lou Taylor Pucci", "Chris Pine", "Piper Perabo", "Emily VanCamp", "Christopher Meloni"],
		genres: ["Horror"]
	},{ 
		title: "The Chaos Experiment",
		year: 2009,
		cast: ["Val Kilmer", "Armand Assante", "Eric Roberts"],
		genres: ["Drama"]
	},{ 
		title: "A Christmas Carol",
		year: 2009,
		cast: ["Jim Carrey", "Gary Oldman", "Cary Elwes", "Colin Firth"],
		genres: ["Animated"]
	},{ 
		title: "Cirque du Freak: The Vampire's Assistant",
		year: 2009,
		cast: ["John C. Reilly", "Ken Watanabe", "Josh Hutcherson", "Chris Massoglia", "Michael Cerveris", "Ray Stevenson", "Patrick Fugit", "Willem Dafoe", "Salma Hayek"],
		genres: ["Fantasy"]
	},{ 
		title: "Cloudy with a Chance of Meatballs",
		year: 2009,
		cast: ["Bill Hader", "Anna Faris", "James Caan", "Andy Samberg", "Bruce Campbell", "Mr. T", "Bobb'e J. Thompson", "Benjamin Bratt", "Neil Patrick Harris", "Al Roker", "Lauren Graham", "Will Forte"],
		genres: ["Animated"]
	},{ 
		title: "Cold Souls",
		year: 2009,
		cast: ["Paul Giamatti", "Emily Watson", "David Strathairn", "Dina Korzun"],
		genres: ["Comedy"]
	},{ 
		title: "The Collector",
		year: 2009,
		cast: ["Josh Stewart", "Michael Reilly Burke", "Andrea Roth", "Juan Fernández"],
		genres: ["Horror"]
	},{ 
		title: "Confessions of a Shopaholic",
		year: 2009,
		cast: ["Isla Fisher", "Hugh Dancy", "Joan Cusack", "John Goodman", "John Lithgow", "Kristin Scott Thomas", "Leslie Bibb"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Coraline",
		year: 2009,
		cast: ["Dakota Fanning", "Teri Hatcher", "Ian McShane", "Jennifer Saunders", "Dawn French"],
		genres: ["Animated"]
	},{ 
		title: "Couples Retreat",
		year: 2009,
		cast: ["Vince Vaughn", "Jon Favreau", "Jason Bateman", "Faizon Love", "Kristin Davis", "Malin Åkerman", "Kristen Bell", "Kali Hawk", "Jean Reno"],
		genres: ["Comedy"]
	},{ 
		title: "The Cove",
		year: 2009,
		cast: ["The annual killing of", "dolphins", "at", "Taiji", "Wakayama"],
		genres: ["Documentary"]
	},{ 
		title: "Crank: High Voltage",
		year: 2009,
		cast: ["Jason Statham", "Amy Smart", "Clifton Collins, Jr.", "Efren Ramirez", "Dwight Yoakam", "Reno Wilson", "Bai Ling", "David Carradine"],
		genres: ["Action"]
	},{ 
		title: "Crazy Heart",
		year: 2009,
		cast: ["Jeff Bridges", "Maggie Gyllenhaal", "Robert Duvall", "Colin Farrell"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "The Cross",
		year: 2009,
		cast: ["Arthur Blessitt"],
		genres: ["Documentary"]
	},{ 
		title: "Crossing Over",
		year: 2009,
		cast: ["Harrison Ford", "Sean Penn", "Jim Sturgess", "Ashley Judd", "Alice Eve", "Alice Braga", "Cliff Curtis", "Summer Bishil", "Ray Liotta"],
		genres: ["Drama"]
	},{ 
		title: "Dance Flick",
		year: 2009,
		cast: ["Shoshana Bush", "Damon Wayans, Jr."],
		genres: ["Dance", "Satire"]
	},{ 
		title: "Did You Hear About the Morgans?",
		year: 2009,
		cast: ["Hugh Grant", "Sarah Jessica Parker", "Sam Elliott", "Mary Steenburgen", "Elisabeth Moss", "Wilford Brimley", "Michael Kelly"],
		genres: ["Comedy"]
	},{ 
		title: "District 9",
		year: 2009,
		cast: ["Sharlto Copley", "Jason Cope", "David James"],
		genres: ["Science Fiction"]
	},{ 
		title: "Drag Me to Hell",
		year: 2009,
		cast: ["Alison Lohman", "Justin Long", "Lorna Raver", "Dileep Rao", "David Paymer", "Adriana Barraza"],
		genres: ["Horror"]
	},{ 
		title: "Dragonball Evolution",
		year: 2009,
		cast: ["Justin Chatwin", "Emmy Rossum", "Joon Park", "Chow Yun-fat", "James Marsters", "Eriko Tamura", "Jamie Chung", "Randall Duk Kim"],
		genres: ["Action", "Fantasy"]
	},{ 
		title: "Duplicity",
		year: 2009,
		cast: ["Julia Roberts", "Clive Owen", "Tom Wilkinson", "Paul Giamatti"],
		genres: ["Crime"]
	},{ 
		title: "Echelon Conspiracy",
		year: 2009,
		cast: ["Shane West", "Edward Burns", "Ving Rhames", "Jonathan Pryce", "Tamara Feldman"],
		genres: ["Action"]
	},{ 
		title: "Every Little Step",
		year: 2009,
		cast: ["The casting of the 2006", "Broadway", "revival", "of", "A Chorus Line"],
		genres: ["Documentary"]
	},{ 
		title: "Everybody's Fine",
		year: 2009,
		cast: ["Robert De Niro", "Drew Barrymore", "Kate Beckinsale", "Sam Rockwell"],
		genres: ["Drama"]
	},{ 
		title: "Extract",
		year: 2009,
		cast: ["Jason Bateman", "Mila Kunis", "Kristen Wiig", "J. K. Simmons", "Ben Affleck"],
		genres: ["Comedy"]
	},{ 
		title: "Fame",
		year: 2009,
		cast: ["Debbie Allen", "Charles S. Dutton", "Kelsey Grammer", "Megan Mullally", "Bebe Neuwirth", "Asher Book", "Kristy Flores", "Paul Iacono", "Paul McGill", "Naturi Naughton", "Kay Panabaker", "Kherington Payne", "Collins Pennie", "Walter Perez", "Anna Maria Perez de Taglé"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Fantastic Mr. Fox",
		year: 2009,
		cast: ["George Clooney", "Meryl Streep", "Cate Blanchett", "Anjelica Huston"],
		genres: ["Animated"]
	},{ 
		title: "Fast & Furious",
		year: 2009,
		cast: ["Vin Diesel", "Paul Walker", "Michelle Rodriguez", "Jordana Brewster"],
		genres: ["Action"]
	},{ 
		title: "Fighting",
		year: 2009,
		cast: ["Channing Tatum", "Terrence Howard"],
		genres: ["Action"]
	},{ 
		title: "The Final Destination",
		year: 2009,
		cast: ["Bobby Campo", "Shantel VanSanten", "Haley Webb", "Nick Zano", "Mykelti Williamson"],
		genres: ["Horror"]
	},{ 
		title: "Fired Up!",
		year: 2009,
		cast: ["Nick D'Agosto", "Eric Christian Olsen", "Sarah Roemer", "AnnaLynne McCord", "Molly Sims", "John Michael Higgins"],
		genres: ["Comedy", "Teen"]
	},{ 
		title: "Food, Inc.",
		year: 2009,
		cast: ["Agricultural food production in United States"],
		genres: ["Documentary"]
	},{ 
		title: "Fragments",
		year: 2009,
		cast: ["Kate Beckinsale", "Dakota Fanning", "Guy Pearce", "Josh Hutcherson", "Forest Whitaker", "Jennifer Hudson", "Jackie Earle Haley", "Jeanne Tripplehorn", "Embeth Davidtz"],
		genres: ["Drama"]
	},{ 
		title: "Friday the 13th",
		year: 2009,
		cast: ["Jared Padalecki", "Danielle Panabaker", "Aaron Yoo", "Amanda Righetti"],
		genres: ["Horror"]
	},{ 
		title: "Funny People",
		year: 2009,
		cast: ["Adam Sandler", "Seth Rogen", "Leslie Mann", "Eric Bana", "Jonah Hill", "RZA", "Jason Schwartzman"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "G-Force",
		year: 2009,
		cast: ["Bill Nighy", "Will Arnett", "Zach Galifianakis", "Nicolas Cage", "Sam Rockwell", "Jon Favreau", "Penélope Cruz", "Steve Buscemi", "Tracy Morgan"],
		genres: ["Family", "Live Action", "Animated"]
	},{ 
		title: "G.I. Joe: The Rise of Cobra",
		year: 2009,
		cast: ["Dennis Quaid", "Channing Tatum", "Marlon Wayans", "Saïd Taghmaoui", "Jonathan Pryce", "Rachel Nichols", "Sienna Miller", "Lee Byung-hun", "Joseph Gordon-Levitt", "Christopher Eccleston", "Adewale Akinnuoye-Agbaje"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Gallowwalker",
		year: 2009,
		cast: ["Wesley Snipes", "Riley Smith", "Patrick Bergin"],
		genres: ["Horror", "Western"]
	},{ 
		title: "Gamer",
		year: 2009,
		cast: ["Gerard Butler", "Michael C. Hall", "Chris \"Ludacris\" Bridges", "Kyra Sedgwick", "Amber Valletta", "Logan Lerman", "Terry Crews"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Gentlemen Broncos",
		year: 2009,
		cast: ["Michael Angarano", "Jemaine Clement", "Sam Rockwell", "Jennifer Coolidge"],
		genres: ["Comedy"]
	},{ 
		title: "Ghosts of Girlfriends Past",
		year: 2009,
		cast: ["Matthew McConaughey", "Jennifer Garner", "Michael Douglas", "Breckin Meyer", "Lacey Chabert", "Emma Stone", "Anne Archer", "Robert Forster", "Amanda Walsh", "Noureen DeWulf"],
		genres: ["Fantasy", "Romance", "Comedy"]
	},{ 
		title: "Gigantic",
		year: 2009,
		cast: ["Paul Dano", "Zooey Deschanel", "Ed Asner", "Jane Alexander", "John Goodman"],
		genres: ["Comedy"]
	},{ 
		title: "The Girlfriend Experience",
		year: 2009,
		cast: ["Sasha Grey"],
		genres: ["Drama"]
	},{ 
		title: "The Goods: Live Hard, Sell Hard",
		year: 2009,
		cast: ["Jeremy Piven", "Ving Rhames", "James Brolin", "David Koechner", "Kathryn Hahn", "Ed Helms", "Jordana Spiro", "Craig Robinson", "Ken Jeong", "Rob Riggle", "Noureen DeWulf", "Tony Hale", "Joey Kern", "Alan Thicke", "Will Ferrell"],
		genres: ["Comedy"]
	},{ 
		title: "The Great Buck Howard",
		year: 2009,
		cast: ["John Malkovich", "Colin Hanks", "Emily Blunt", "Steve Zahn", "Tom Hanks"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Grudge 3",
		year: 2009,
		cast: ["Johanna Braddy", "Gil McKinney", "Shawnee Smith", "Emi Ikehata", "Jadie Hobson", "Beau Mirchoff", "Marina Sirtis", "Matthew Knight"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Halloween II",
		year: 2009,
		cast: ["Malcolm McDowell", "Sheri Moon Zombie", "Scout Taylor-Compton", "Tyler Mane", "Brad Dourif", "Danielle Harris"],
		genres: ["Horror"]
	},{ 
		title: "The Hangover",
		year: 2009,
		cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis", "Heather Graham", "Justin Bartha"],
		genres: ["Comedy"]
	},{ 
		title: "Hannah Montana: The Movie",
		year: 2009,
		cast: ["Miley Cyrus", "Emily Osment", "Jason Earles", "Mitchel Musso", "Moisés Arias", "Melora Hardin", "Vanessa Williams", "Billy Ray Cyrus", "Lucas Till"],
		genres: ["Family", "Musical"]
	},{ 
		title: "Harry Potter and the Half-Blood Prince",
		year: 2009,
		cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Jim Broadbent", "Helena Bonham Carter", "Robbie Coltrane", "Warwick Davis", "Michael Gambon", "Alan Rickman", "Maggie Smith", "Timothy Spall", "David Thewlis", "Julie Walters"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "The Haunting in Connecticut",
		year: 2009,
		cast: ["Virginia Madsen", "Kyle Gallner", "Martin Donovan", "Elias Koteas", "Amanda Crew"],
		genres: ["Horror"]
	},{ 
		title: "He's Just Not That Into You",
		year: 2009,
		cast: ["Ben Affleck", "Jennifer Aniston", "Drew Barrymore", "Jennifer Connelly", "Kevin Connelly", "Bradley Cooper", "Ginnifer Goodwin", "Scarlett Johansson", "Justin Long"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Hole",
		year: 2009,
		cast: ["Teri Polo", "Chris Massoglia", "Haley Bennett"],
		genres: ["Fantasy", "Thriller"]
	},{ 
		title: "Homecoming",
		year: 2009,
		cast: ["Mischa Barton", "Matt Long", "Jessica Stroup"],
		genres: ["Horror"]
	},{ 
		title: "Horrorween",
		year: 2009,
		cast: ["Chuck Lamb", "Ed Meyer", "Tila Tequila"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "Horsemen",
		year: 2009,
		cast: ["Dennis Quaid", "Zhang Ziyi", "Clifton Collins, Jr.", "Patrick Fugit", "Peter Stormare"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Hotel for Dogs",
		year: 2009,
		cast: ["Emma Roberts", "Jake T. Austin", "Kyla Pratt", "Don Cheadle", "Lisa Kudrow", "Kevin Dillon"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Humpday",
		year: 2009,
		cast: ["Mark Duplass", "Joshua Leonard", "Alycia Delmore"],
		genres: ["Comedy"]
	},{ 
		title: "I Can Do Bad All By Myself",
		year: 2009,
		cast: ["Tyler Perry", "Taraji P. Henson", "Mary J. Blige", "Adam Rodríguez", "Brian White", "Gladys Knight", "Pastor Marvin Winans"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "I Hate Valentine's Day",
		year: 2009,
		cast: ["Nia Vardalos", "John Corbett"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "I Hope They Serve Beer in Hell",
		year: 2009,
		cast: ["Matt Czuchry", "Jesse Bradford", "Geoff Stults"],
		genres: ["Comedy"]
	},{ 
		title: "The Hurt Locker",
		year: 2009,
		cast: ["Jeremy Renner", "Anthony Mackie", "Brian Geraghty", "Evangeline Lilly", "Ralph Fiennes", "David Morse", "Guy Pearce"],
		genres: ["War"]
	},{ 
		title: "I Love You, Beth Cooper",
		year: 2009,
		cast: ["Hayden Panettiere", "Paul Rust", "Jack Carpenter", "Lauren London", "Lauren Storm", "Alan Ruck", "Cynthia Stevenson"],
		genres: ["Comedy", "Teen"]
	},{ 
		title: "I Love You, Man",
		year: 2009,
		cast: ["Paul Rudd", "Jason Segel"],
		genres: ["Comedy"]
	},{ 
		title: "Ice Age: Dawn of the Dinosaurs",
		year: 2009,
		cast: ["Ray Romano", "John Leguizamo", "Denis Leary", "Queen Latifah", "Josh Peck", "Simon Pegg"],
		genres: ["Family"]
	},{ 
		title: "Imagine That",
		year: 2009,
		cast: ["Eddie Murphy"],
		genres: ["Comedy"]
	},{ 
		title: "The Imaginarium of Doctor Parnassus",
		year: 2009,
		cast: ["Heath Ledger", "Christopher Plummer", "Lily Cole", "Verne Troyer", "Andrew Garfield", "Tom Waits", "Johnny Depp", "Jude Law", "Colin Farrell"],
		genres: ["Adventure", "Comedy"]
	},{ 
		title: "The Informant!",
		year: 2009,
		cast: ["Matt Damon", "Scott Bakula", "Joel McHale", "Melanie Lynskey"],
		genres: ["Comedy", "Biography"]
	},{ 
		title: "The Informers",
		year: 2009,
		cast: ["Billy Bob Thornton", "Kim Basinger", "Winona Ryder", "Mickey Rourke", "Jon Foster", "Amber Heard", "Rhys Ifans", "Chris Isaak", "Austin Nichols", "Lou Taylor Pucci", "Mel Raido", "Brad Renfro"],
		genres: ["Drama"]
	},{ 
		title: "Inglourious Basterds",
		year: 2009,
		cast: ["Brad Pitt", "Mélanie Laurent", "Christoph Waltz", "Daniel Brühl", "Diane Kruger", "Michael Fassbender", "Eli Roth", "Til Schweiger"],
		genres: ["War", "Science Fiction"]
	},{ 
		title: "Ink",
		year: 2009,
		cast: ["Christopher Soren Kelly", "Quinn Hunchar", "Jessica Duffy"],
		genres: ["Fantasy"]
	},{ 
		title: "The International",
		year: 2009,
		cast: ["Clive Owen", "Naomi Watts"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Invictus",
		year: 2009,
		cast: ["Morgan Freeman", "Matt Damon"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "An Invisible Sign",
		year: 2009,
		cast: ["Jessica Alba", "J. K. Simmons", "Chris Messina"],
		genres: ["Drama"]
	},{ 
		title: "The Invention of Lying",
		year: 2009,
		cast: ["Ricky Gervais", "Jennifer Garner", "Jonah Hill", "Louis C.K.", "Rob Lowe", "Tina Fey", "Christopher Guest"],
		genres: ["Comedy", "Science Fiction"]
	},{ 
		title: "It Might Get Loud",
		year: 2009,
		cast: ["The careers and styles of", "Jimmy Page", "The Edge", "and", "Jack White"],
		genres: ["Documentary"]
	},{ 
		title: "It's Complicated",
		year: 2009,
		cast: ["Robert Adamson", "Blanchard Ryan", "Meryl Streep", "Steve Martin", "Alec Baldwin"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Janky Promoters",
		year: 2009,
		cast: ["Ice Cube", "Mike Epps", "Young Jeezy"],
		genres: ["Comedy"]
	},{ 
		title: "Jennifer's Body",
		year: 2009,
		cast: ["Megan Fox", "Amanda Seyfried", "Johnny Simmons", "J. K. Simmons", "Amy Sedaris", "Adam Brody"],
		genres: ["Comedy", "Horror", "Teen"]
	},{ 
		title: "Jonas Brothers: The 3D Concert Experience",
		year: 2009,
		cast: ["Jonas Brothers", "Demi Lovato", "Taylor Swift", "Christa B. Allen"],
		genres: ["Performance"]
	},{ 
		title: "Julie & Julia",
		year: 2009,
		cast: ["Meryl Streep", "Amy Adams", "Stanley Tucci", "Chris Messina", "Linda Emond"],
		genres: ["Biography", "Romance", "Comedy"]
	},{ 
		title: "Knowing",
		year: 2009,
		cast: ["Nicolas Cage"],
		genres: ["Science Fiction"]
	},{ 
		title: "Labor Pains",
		year: 2009,
		cast: ["Lindsay Lohan", "Luke Kirby", "Cheryl Hines", "Chris Parnell", "Bridgit Mendler", "Kevin Covais"],
		genres: ["Romance", "Comedy", "Romance"]
	},{ 
		title: "Laid to Rest",
		year: 2009,
		cast: ["Bobbi Sue Luther", "Kevin Gage", "Sean Whalen", "Johnathon Schaech", "Thomas Dekker", "Nick Principe", "Richard Lynch", "Lena Headey"],
		genres: ["Horror"]
	},{ 
		title: "Land of the Lost",
		year: 2009,
		cast: ["Will Ferrell", "Danny McBride", "Anna Friel", "Jorma Taccone"],
		genres: ["Adventure"]
	},{ 
		title: "The Last House on the Left",
		year: 2009,
		cast: ["Garret Dillahunt", "Rhys Coiro", "Martha MacIsaac", "Riki Lindhome", "Tony Goldwyn", "Monica Potter", "Spencer Treat Clark", "Sara Paxton"],
		genres: ["Horror"]
	},{ 
		title: "Law Abiding Citizen",
		year: 2009,
		cast: ["Gerard Butler", "Jamie Foxx", "Colm Meaney", "Bruce McGill", "Regina Hall", "Viola Davis"],
		genres: ["Thriller"]
	},{ 
		title: "Life During Wartime",
		year: 2009,
		cast: ["Ally Sheedy", "Gaby Hoffmann"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Lightkeepers",
		year: 2009,
		cast: ["Richard Dreyfuss", "Blythe Danner", "Mamie Gummer"],
		genres: ["Comedy"]
	},{ 
		title: "The Limits of Control",
		year: 2009,
		cast: ["Isaach de Bankolé", "Bill Murray", "Tilda Swinton", "Gael García Bernal"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Love Happens",
		year: 2009,
		cast: ["Aaron Eckhart", "Jennifer Aniston"],
		genres: ["Romance"]
	},{ 
		title: "Love N' Dancing",
		year: 2009,
		cast: ["Amy Smart", "Tom Malloy", "Billy Zane"],
		genres: ["Dance", "Romance"]
	},{ 
		title: "The Lovely Bones",
		year: 2009,
		cast: ["Saoirse Ronan", "Rachel Weisz", "Mark Wahlberg", "Stanley Tucci"],
		genres: ["Drama"]
	},{ 
		title: "Lymelife",
		year: 2009,
		cast: ["Alec Baldwin", "Emma Roberts", "Rory Culkin", "Kieran Culkin", "Jill Hennessy", "Timothy Hutton", "Cynthia Nixon"],
		genres: ["Drama"]
	},{ 
		title: "Madea Goes to Jail",
		year: 2009,
		cast: ["Tyler Perry", "Sofía Vergara", "Vanessa Ferlito", "Derek Luke", "Keshia Knight Pulliam", "David Mann", "Ion Overman", "RonReaco Lee", "Viola Davis"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Maiden Heist",
		year: 2009,
		cast: ["Christopher Walken", "Morgan Freeman", "William H. Macy"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Management",
		year: 2009,
		cast: ["Steve Zahn", "Jennifer Aniston", "Woody Harrelson", "Fred Ward"],
		genres: ["Comedy"]
	},{ 
		title: "Me and Orson Welles",
		year: 2009,
		cast: ["Ben Chaplin", "Claire Danes", "Zac Efron", "Zoe Kazan", "Eddie Marsan", "Christian McKay", "Kelly Reilly", "James Tupper"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "The Men Who Stare at Goats",
		year: 2009,
		cast: ["Ewan McGregor", "George Clooney", "Kevin Spacey", "Jeff Bridges"],
		genres: ["Comedy"]
	},{ 
		title: "The Merry Gentleman",
		year: 2009,
		cast: ["Michael Keaton", "Kelly Macdonald"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "The Messenger",
		year: 2009,
		cast: ["Ben Foster", "Woody Harrelson", "Samantha Morton", "Jena Malone", "Steve Buscemi"],
		genres: ["Drama"]
	},{ 
		title: "Michael Jackson's This Is It",
		year: 2009,
		cast: ["Michael Jackson", "'s final concert", "canceled after his death"],
		genres: ["Documentary"]
	},{ 
		title: "Miss March",
		year: 2009,
		cast: ["Zach Cregger", "Trevor Moore", "Raquel Alessi", "Molly Stanton", "Craig Robinson"],
		genres: ["Comedy"]
	},{ 
		title: "Monsters vs. Aliens",
		year: 2009,
		cast: ["Reese Witherspoon", "Seth Rogen", "Hugh Laurie", "Rainn Wilson", "Kiefer Sutherland", "Will Arnett", "Stephen Colbert", "Paul Rudd"],
		genres: ["Animated"]
	},{ 
		title: "Motherhood",
		year: 2009,
		cast: ["Uma Thurman", "Minnie Driver", "Anthony Edwards"],
		genres: ["Comedy"]
	},{ 
		title: "My Bloody Valentine 3D",
		year: 2009,
		cast: ["Jensen Ackles", "Jaime King", "Kerr Smith"],
		genres: ["Horror"]
	},{ 
		title: "My Life in Ruins",
		year: 2009,
		cast: ["Nia Vardalos", "Richard Dreyfuss"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "My Sister's Keeper",
		year: 2009,
		cast: ["Cameron Diaz", "Alec Baldwin", "Abigail Breslin", "Sofia Vassilieva", "Joan Cusack", "Thomas Dekker", "Jason Patric"],
		genres: ["Drama"]
	},{ 
		title: "My One and Only",
		year: 2009,
		cast: ["Renée Zellweger", "Chris Noth", "Kevin Bacon"],
		genres: ["Comedy"]
	},{ 
		title: "New in Town",
		year: 2009,
		cast: ["Renée Zellweger", "Harry Connick, Jr."],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "New Moon",
		year: 2009,
		cast: ["Kristen Stewart", "Robert Pattinson", "Taylor Lautner"],
		genres: ["Fantasy", "Romance"]
	},{ 
		title: "New York, I Love You",
		year: 2009,
		cast: ["Bradley Cooper", "Chris Cooper", "Shia LaBeouf", "Orlando Bloom", "Andy García", "Natalie Portman", "Rachel Bilson", "Julie Christie", "James Caan"],
		genres: ["Romance"]
	},{ 
		title: "Next Day Air",
		year: 2009,
		cast: ["Donald Faison", "Mike Epps", "Wood Harris", "Omari Hardwick", "Darius McCrary", "Yasmin Deliz", "Mos Def"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Night at the Museum: Battle of the Smithsonian",
		year: 2009,
		cast: ["Ben Stiller", "Dick Van Dyke", "Robin Williams", "Amy Adams", "Hank Azaria", "Owen Wilson", "Steve Coogan", "Jonah Hill", "Ricky Gervais"],
		genres: ["Adventure", "Family"]
	},{ 
		title: "Nine",
		year: 2009,
		cast: ["Daniel Day-Lewis", "Marion Cotillard", "Nicole Kidman", "Penélope Cruz", "Kate Hudson", "Judi Dench", "Fergie", "Sophia Loren"],
		genres: ["Musical"]
	},{ 
		title: "Ninja Assassin",
		year: 2009,
		cast: ["Rain", "Naomie Harris", "Rick Yune", "Ben Miles", "Sho Kosugi", "Sung Kang"],
		genres: ["Action", "Martial Arts"]
	},{ 
		title: "Not Easily Broken",
		year: 2009,
		cast: ["Morris Chestnut", "Taraji P. Henson", "Kevin Hart", "Eddie Cibrian", "Jenifer Lewis"],
		genres: ["Drama"]
	},{ 
		title: "Not Forgotten",
		year: 2009,
		cast: ["Simon Baker", "Paz Vega"],
		genres: ["Thriller"]
	},{ 
		title: "Notorious",
		year: 2009,
		cast: ["Jamal Woolard", "Derek Luke", "Angela Bassett", "Anthony Mackie", "Naturi Naughton"],
		genres: ["Drama"]
	},{ 
		title: "Observe and Report",
		year: 2009,
		cast: ["Seth Rogen", "Anna Faris", "Michael Peña", "Ray Liotta"],
		genres: ["Comedy"]
	},{ 
		title: "Obsessed",
		year: 2009,
		cast: ["Idris Elba", "Beyoncé Knowles", "Ali Larter"],
		genres: ["Thriller"]
	},{ 
		title: "Old Dogs",
		year: 2009,
		cast: ["John Travolta", "Robin Williams", "Kelly Preston", "Seth Green", "Ella Bleu Travolta", "Conner Rayburn", "Matt Dillon", "Rita Wilson", "Dax Shepard", "Bernie Mac", "Luis Guzmán", "Justin Long"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Opie Gets Laid",
		year: 2009,
		cast: ["April Wade", "Ute Werner", "Jesselynn Desmond", "James Ricardo", "Gina DeVettori"],
		genres: ["Comedy"]
	},{ 
		title: "Orphan",
		year: 2009,
		cast: ["Vera Farmiga", "Peter Sarsgaard", "Isabelle Fuhrman", "CCH Pounder", "Jimmy Bennett"],
		genres: ["Horror"]
	},{ 
		title: "Pandorum",
		year: 2009,
		cast: ["Dennis Quaid", "Ben Foster"],
		genres: ["Horror", "Science Fiction"]
	},{ 
		title: "Paper Heart",
		year: 2009,
		cast: ["Charlyne Yi", "Michael Cera"],
		genres: ["Satire"]
	},{ 
		title: "Paul Blart: Mall Cop",
		year: 2009,
		cast: ["Kevin James", "Jayma Mays", "Keir O'Donnell", "Bobby Cannavale", "Stephen Rannazzisi", "Shirley Knight"],
		genres: ["Comedy"]
	},{ 
		title: "A Perfect Getaway",
		year: 2009,
		cast: ["Timothy Olyphant", "Milla Jovovich", "Kiele Sanchez", "Steve Zahn", "Marley Shelton", "Chris Hemsworth"],
		genres: ["Thriller"]
	},{ 
		title: "Phoebe in Wonderland",
		year: 2009,
		cast: ["Felicity Huffman", "Patricia Clarkson", "Elle Fanning", "Campbell Scott", "Bill Pullman"],
		genres: ["Fantasy"]
	},{ 
		title: "The Pink Panther 2",
		year: 2009,
		cast: ["Steve Martin", "Jean Reno", "Alfred Molina", "Emily Mortimer", "Aishwarya Rai"],
		genres: ["Comedy"]
	},{ 
		title: "Planet 51",
		year: 2009,
		cast: ["Dwayne Johnson", "Jessica Biel", "Justin Long", "Gary Oldman", "Seann William Scott", "John Cleese"],
		genres: ["Science Fiction"]
	},{ 
		title: "Post Grad",
		year: 2009,
		cast: ["Alexis Bledel", "Zach Gilford", "Rodrigo Santoro", "Jane Lynch", "Carol Burnett", "Michael Keaton"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Powder Blue",
		year: 2009,
		cast: ["Jessica Biel", "Ray Liotta", "Eddie Redmayne", "Forest Whitaker", "Kris Kristofferson", "Lisa Kudrow", "Patrick Swayze"],
		genres: ["Drama"]
	},{ 
		title: "Precious",
		year: 2009,
		cast: ["Mo'Nique", "Paula Patton", "Mariah Carey", "Lenny Kravitz", "Sherri Shepherd", "Gabourey Sidibe"],
		genres: ["Drama"]
	},{ 
		title: "The Princess and the Frog",
		year: 2009,
		cast: ["Anika Noni Rose", "Oprah Winfrey", "Bruno Campos", "Keith David", "Michael-Leon Wooley", "Jennifer Cody", "Jim Cummings", "John Goodman"],
		genres: ["Animated", "Family"]
	},{ 
		title: "The Private Lives of Pippa Lee",
		year: 2009,
		cast: ["Robin Wright Penn", "Alan Arkin", "Maria Bello", "Monica Bellucci", "Blake Lively", "Julianne Moore", "Keanu Reeves", "Winona Ryder"],
		genres: ["Drama"]
	},{ 
		title: "The Proposal",
		year: 2009,
		cast: ["Sandra Bullock", "Ryan Reynolds", "Mary Steenburgen", "Craig T. Nelson", "Betty White"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Public Enemies",
		year: 2009,
		cast: ["Johnny Depp", "Christian Bale", "Marion Cotillard", "Channing Tatum", "David Wenham", "Stephen Graham", "Giovanni Ribisi", "Stephen Dorff", "Billy Crudup"],
		genres: ["Crime", "Drama", "Biography"]
	},{ 
		title: "Push",
		year: 2009,
		cast: ["Chris Evans", "Dakota Fanning", "Camilla Belle", "Djimon Hounsou"],
		genres: ["Science Fiction"]
	},{ 
		title: "Quantum Quest: A Cassini Space Odyssey",
		year: 2009,
		cast: ["Chris Pine", "Amanda Peet", "Samuel L. Jackson"],
		genres: ["Animated"]
	},{ 
		title: "Race to Witch Mountain",
		year: 2009,
		cast: ["Dwayne Johnson", "AnnaSophia Robb", "Carla Gugino", "Garry Marshall", "Ciarán Hinds", "Alexander Ludwig", "Tom Everett Scott", "Christopher Marquette"],
		genres: ["Family", "Science Fiction"]
	},{ 
		title: "The Road",
		year: 2009,
		cast: ["Charlize Theron", "Viggo Mortensen", "Kodi Smit-McPhee", "Robert Duvall"],
		genres: ["Drama", "Science Fiction"]
	},{ 
		title: "Saw VI",
		year: 2009,
		cast: ["Tobin Bell", "Costas Mandylor", "Shawnee Smith", "Tanedra Howard", "Betsy Russell", "Mark Rolston", "Peter Outerbridge"],
		genres: ["Horror"]
	},{ 
		title: "A Serious Man",
		year: 2009,
		cast: ["Michael Stuhlbarg", "Richard Kind"],
		genres: ["Comedy"]
	},{ 
		title: "Sherlock Holmes",
		year: 2009,
		cast: ["Robert Downey, Jr.", "Jude Law", "Rachel McAdams", "Mark Strong"],
		genres: ["Adventure"]
	},{ 
		title: "Shrink",
		year: 2009,
		cast: ["Kevin Spacey"],
		genres: ["Drama"]
	},{ 
		title: "Shorts",
		year: 2009,
		cast: ["Jon Cryer", "William H. Macy", "Leslie Mann", "James Spader", "Jimmy Bennett", "Kat Dennings"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "A Single Man",
		year: 2009,
		cast: ["Colin Firth", "Julianne Moore", "Matthew Goode", "Nicholas Hoult"],
		genres: ["Drama"]
	},{ 
		title: "The Slammin' Salmon",
		year: 2009,
		cast: ["Michael Clarke Duncan", "Jay Chandrasekhar", "Kevin Heffernan", "Steve Lemme", "Paul Soter", "Erik Stolhanske", "April Bowlby", "Sendhil Ramamurthy", "Lance Henriksen", "Olivia Munn", "Vivica A. Fox", "Morgan Fairchild"],
		genres: ["Comedy"]
	},{ 
		title: "The Soloist",
		year: 2009,
		cast: ["Jamie Foxx", "Robert Downey, Jr."],
		genres: ["Drama"]
	},{ 
		title: "Sorority Row",
		year: 2009,
		cast: ["Briana Evigan", "Jamie Chung", "Rumer Willis", "Leah Pipes", "Audrina Patridge", "Matt O'Leary", "Julian Morris", "Margo Harshman", "Matt Lanter", "Carrie Fisher"],
		genres: ["Horror"]
	},{ 
		title: "Spread",
		year: 2009,
		cast: ["Ashton Kutcher", "Anne Heche", "Margarita Levieva", "Sebastian Stan", "Rachel Blanchard", "María Conchita Alonso"],
		genres: ["Comedy"]
	},{ 
		title: "The Star of Bethlehem",
		year: 2009,
		cast: ["Frederick Larson's", "search for the Star of Bethlehem"],
		genres: ["Documentary"]
	},{ 
		title: "Star Trek",
		year: 2009,
		cast: ["Chris Pine", "Zachary Quinto", "Karl Urban", "Simon Pegg", "Zoe Saldana", "John Cho", "Ben Cross", "Anton Yelchin", "Winona Ryder", "Eric Bana", "Leonard Nimoy"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "State of Play",
		year: 2009,
		cast: ["Russell Crowe", "Ben Affleck", "Rachel McAdams", "Helen Mirren"],
		genres: ["Political", "Thriller"]
	},{ 
		title: "The Stepfather",
		year: 2009,
		cast: ["Penn Badgley", "Dylan Walsh", "Amber Heard", "Sela Ward", "Jon Tenney"],
		genres: ["Horror"]
	},{ 
		title: "Street Fighter: The Legend of Chun-Li",
		year: 2009,
		cast: ["Kristin Kreuk", "Chris Klein", "Neal McDonough", "Robin Shou", "Moon Bloodgood", "Josie Ho", "Taboo", "Michael Clarke Duncan"],
		genres: ["Action", "Crime"]
	},{ 
		title: "Surrogates",
		year: 2009,
		cast: ["Bruce Willis", "Radha Mitchell", "Rosamund Pike", "Boris Kodjoe", "James Cromwell", "Ving Rhames"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "The Taking of Pelham 123",
		year: 2009,
		cast: ["Denzel Washington", "John Travolta", "John Turturro", "James Gandolfini"],
		genres: ["Action", "Crime"]
	},{ 
		title: "Taking Woodstock",
		year: 2009,
		cast: ["Demetri Martin", "Dan Fogler", "Henry Goodman", "Jonathan Groff", "Eugene Levy", "Jeffrey Dean Morgan", "Imelda Staunton", "Emile Hirsch", "Liev Schreiber"],
		genres: ["Comedy", "Musical"]
	},{ 
		title: "Tekken",
		year: 2009,
		cast: ["Jon Foo", "Kelly Overton", "Cary-Hiroyuki Tagawa"],
		genres: ["Fantasy"]
	},{ 
		title: "Tennessee",
		year: 2009,
		cast: ["Ethan Peck", "Adam Rothenberg", "Mariah Carey", "Lance Reddick", "Bill Sage"],
		genres: ["Drama"]
	},{ 
		title: "Terminator Salvation",
		year: 2009,
		cast: ["Christian Bale", "Sam Worthington", "Anton Yelchin", "Moon Bloodgood", "Bryce Dallas Howard", "Common", "Jadagrace Berry", "Helena Bonham Carter", "Jane Alexander"],
		genres: ["Science Fiction"]
	},{ 
		title: "Tetro",
		year: 2009,
		cast: ["Vincent Gallo"],
		genres: ["Drama"]
	},{ 
		title: "The Time Traveler's Wife",
		year: 2009,
		cast: ["Eric Bana", "Rachel McAdams"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Transformers: Revenge of the Fallen",
		year: 2009,
		cast: ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "Tyrese Gibson", "John Turturro", "Matthew Marsden"],
		genres: ["Science Fiction"]
	},{ 
		title: "Trick 'r Treat",
		year: 2009,
		cast: ["Rochelle Aytes", "Dylan Baker", "Leslie Bibb", "Jean-Luc Bilodeau", "Brian Cox", "Alberto Ghisi", "Brett Kelly", "Quinn Lord", "Britt McKillip", "Anna Paquin", "Tahmoh Penikett", "Lauren Lee Smith"],
		genres: ["Horror"]
	},{ 
		title: "True Adolescents",
		year: 2009,
		cast: ["Mark Duplass", "Bret Loehr", "Melissa Leo"],
		genres: ["Comedy"]
	},{ 
		title: "Tyson",
		year: 2009,
		cast: ["The life and career of", "Mike Tyson"],
		genres: ["Documentary"]
	},{ 
		title: "The Ugly Truth",
		year: 2009,
		cast: ["Katherine Heigl", "Gerard Butler"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Unborn",
		year: 2009,
		cast: ["Odette Yustman", "Gary Oldman", "Meagan Good", "Cam Gigandet", "James Remar", "Jane Alexander", "Idris Elba", "Carla Gugino"],
		genres: ["Horror"]
	},{ 
		title: "Underworld: Rise of the Lycans",
		year: 2009,
		cast: ["Rhona Mitra", "Michael Sheen", "Bill Nighy", "Kevin Grevioux", "Shane Brolly", "Steven Mackintosh"],
		genres: ["Horror"]
	},{ 
		title: "The Uninvited",
		year: 2009,
		cast: ["Emily Browning", "Elizabeth Banks", "Arielle Kebbel", "David Strathairn"],
		genres: ["Drama", "Horror"]
	},{ 
		title: "Up",
		year: 2009,
		cast: ["Edward Asner", "Jordan Nagai", "Paul Eiding", "Christopher Plummer", "Bob Peterson"],
		genres: ["Animated"]
	},{ 
		title: "Up in the Air",
		year: 2009,
		cast: ["George Clooney", "Vera Farmiga", "Anna Kendrick", "Danny McBride", "Jason Bateman"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Wah Do Dem",
		year: 2009,
		cast: ["Carl Bradshaw", "Sean Bones", "Kevin Bewersdorf", "Norah Jones"],
		genres: ["Comedy"]
	},{ 
		title: "Watchmen",
		year: 2009,
		cast: ["Jeffrey Dean Morgan", "Matthew Goode", "Patrick Wilson", "Malin Åkerman", "Billy Crudup", "Jackie Earl Haley", "Carla Gugino"],
		genres: ["Superhero"]
	},{ 
		title: "We Live in Public",
		year: 2009,
		cast: ["The career of", "Josh Harris"],
		genres: ["Documentary"]
	},{ 
		title: "What Goes Up",
		year: 2009,
		cast: ["Steve Coogan", "Hilary Duff", "Josh Peck", "Olivia Thirlby", "Molly Shannon"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Whatever Works",
		year: 2009,
		cast: ["Larry David", "Evan Rachel Wood", "Patricia Clarkson", "Ed Begley, Jr.", "Conleth Hill", "Michael McKean"],
		genres: ["Comedy", "Romance"]
	},{ 
		title: "Where the Wild Things Are",
		year: 2009,
		cast: ["Max Records", "Catherine Keener", "Mark Ruffalo", "Lauren Ambrose", "Chris Cooper", "James Gandolfini", "Catherine O'Hara", "Forest Whitaker", "Paul Dano"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Whiteout",
		year: 2009,
		cast: ["Kate Beckinsale", "Gabriel Macht", "Alex O'Loughlin", "Columbus Short", "Tom Skerritt"],
		genres: ["Thriller"]
	},{ 
		title: "Whip It",
		year: 2009,
		cast: ["Ellen Page", "Marcia Gay Harden", "Kristen Wiig", "Drew Barrymore", "Juliette Lewis", "Jimmy Fallon", "Daniel Stern"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "World's Greatest Dad",
		year: 2009,
		cast: ["Robin Williams", "Alexie Gilmore", "Daryl Sabara", "Henry Simmons"],
		genres: ["Comedy"]
	},{ 
		title: "X Games 3D: The Movie",
		year: 2009,
		cast: ["Bob Burnquist", "Ricky Carmichael", "Kyle Loza", "Travis Pastrana", "Danny Way", "Shaun White", "Emile Hirsch", "(narrator)"],
		genres: ["Documentary", "Sports"]
	},{ 
		title: "X-Men Origins: Wolverine",
		year: 2009,
		cast: ["Hugh Jackman", "Liev Schreiber", "Danny Huston", "will.i.am", "Lynn Collins", "Taylor Kitsch", "Ryan Reynolds", "Dominic Monaghan"],
		genres: ["Action", "Adventure", "Superhero"]
	},{ 
		title: "Year One",
		year: 2009,
		cast: ["Jack Black", "Michael Cera", "Oliver Platt", "Hank Azaria", "David Cross", "Olivia Wilde", "June Raphael", "Juno Temple", "Christopher Mintz-Plasse"],
		genres: ["Adventure", "Comedy"]
	},{ 
		title: "The Young Victoria",
		year: 2009,
		cast: ["Emily Blunt", "Miranda Richardson", "Jim Broadbent"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Zombieland",
		year: 2009,
		cast: ["Woody Harrelson", "Jesse Eisenberg", "Emma Stone", "Abigail Breslin"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "127 Hours",
		year: 2010,
		cast: ["James Franco", "Amber Tamblyn", "Kate Mara", "Clémence Poésy", "Lizzy Caplan"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "8: The Mormon Proposition",
		year: 2010,
		cast: ["The Church of Jesus Christ of Latter-day Saints", "' involvement in the 2008", "California Proposition 8", ". Narrated by", "Dustin Lance Black", "."],
		genres: ["Documentary"]
	},{ 
		title: "The A-Team",
		year: 2010,
		cast: ["Liam Neeson", "Bradley Cooper", "Quinton \"Rampage\" Jackson", "Sharlto Copley", "Jessica Biel", "Patrick Wilson", "Brian Bloom"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "A Little Help",
		year: 2010,
		cast: ["Jenna Fischer", "Chris O'Donnell", "Rob Benedict", "Arden Myrin", "Daniel Yelsky"],
		genres: ["Comedy"]
	},{ 
		title: "Adventures of Power",
		year: 2010,
		cast: ["Ari Gold", "Michael McKean", "Jane Lynch", "Shoshannah Stern", "Chiu Chi Ling", "Adrian Grenier"],
		genres: ["Comedy"]
	},{ 
		title: "Alice in Wonderland",
		year: 2010,
		cast: ["Johnny Depp", "Anne Hathaway", "Helena Bonham Carter", "Mia Wasikowska", "Alan Rickman", "Crispin Glover", "Stephen Fry", "Michael Sheen", "Christopher Lee"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "All Good Things",
		year: 2010,
		cast: ["Ryan Gosling", "Kirsten Dunst", "Frank Langella", "Kristen Wiig", "Philip Baker Hall"],
		genres: ["Mystery"]
	},{ 
		title: "All My Friends Are Funeral Singers",
		year: 2010,
		cast: ["Angela Bettis", "Emily Candini", "Reid Coker"],
		genres: ["Fantasy"]
	},{ 
		title: "Alpha and Omega",
		year: 2010,
		cast: ["Justin Long", "Hayden Panettiere", "Dennis Hopper", "Danny Glover", "Christina Ricci"],
		genres: ["Animated", "Comedy", "Drama", "Family"]
	},{ 
		title: "The American",
		year: 2010,
		cast: ["George Clooney", "Violante Placido", "Thekla Reuten", "Paolo Bonacelli"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "The Back-up Plan",
		year: 2010,
		cast: ["Jennifer Lopez", "Alex O'Loughlin", "Eric Christian Olsen", "Anthony Anderson", "Linda Lavin"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Barry Munday",
		year: 2010,
		cast: ["Patrick Wilson", "Judy Greer", "Chloë Sevigny", "Jean Smart", "Cybill Shepherd", "Shea Whigham", "Missi Pyle", "Christopher McDonald", "Billy Dee Williams", "Malcolm McDowell"],
		genres: ["Comedy"]
	},{ 
		title: "BearCity",
		year: 2010,
		cast: ["Gerald McCullouch", "Joe Conti", "Stephen Guarino", "Ashlie Atkinson"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Big Money Rustlas",
		year: 2010,
		cast: ["Insane Clown Posse", "(", "Violent J", "Shaggy 2 Dope", ")", "Twiztid", "(", "Jamie Madrox", "Monoxide", ")", "Jason Mewes", "Mark Jury"],
		genres: ["Comedy", "Western"]
	},{ 
		title: "Black Swan",
		year: 2010,
		cast: ["Natalie Portman", "Vincent Cassel", "Mila Kunis", "Barbara Hershey", "Winona Ryder"],
		genres: ["Thriller"]
	},{ 
		title: "Blue Valentine",
		year: 2010,
		cast: ["Ryan Gosling", "Michelle Williams"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "The Book of Eli",
		year: 2010,
		cast: ["Denzel Washington", "Gary Oldman", "Mila Kunis", "Ray Stevenson", "Jennifer Beals", "Frances de la Tour", "Michael Gambon"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Bouncing Cats",
		year: 2010,
		cast: ["Crazy Legs", "Abraham \"Abramz\" Tekya", "Common", "Mos Def", "will.i.am", "K'naan"],
		genres: ["Documentary"]
	},{ 
		title: "The Bounty Hunter",
		year: 2010,
		cast: ["Jennifer Aniston", "Gerard Butler"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Brooklyn's Finest",
		year: 2010,
		cast: ["Richard Gere", "Don Cheadle", "Ethan Hawke", "Wesley Snipes"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Brutal Beauty: Tales of the Rose City Rollers",
		year: 2010,
		cast: ["Grace Lightning", "Marollin’ Monroe", "Madame Bumpsalot"],
		genres: ["Documentary"]
	},{ 
		title: "Buried",
		year: 2010,
		cast: ["Ryan Reynolds"],
		genres: ["Thriller"]
	},{ 
		title: "Burlesque",
		year: 2010,
		cast: ["Cher", "Christina Aguilera", "Stanley Tucci", "Eric Dane", "Kristen Bell", "Cam Gigandet", "Alan Cumming", "Julianne Hough", "Peter Gallagher"],
		genres: ["Musical"]
	},{ 
		title: "Case 39",
		year: 2010,
		cast: ["Renée Zellweger", "Jodelle Ferland", "Ian McShane", "Bradley Cooper"],
		genres: ["Horror", "Mystery"]
	},{ 
		title: "Casino Jack",
		year: 2010,
		cast: ["Kevin Spacey", "Barry Pepper", "Kelly Preston", "Jon Lovitz", "Rachelle Lefevre", "Daniel Kash", "Graham Greene", "Maury Chaykin"],
		genres: ["Political", "Drama", "Thriller"]
	},{ 
		title: "Casino Jack and the United States of Money",
		year: 2010,
		cast: ["Washington D. C. lobbyist", "Jack Abramoff", "'s", "corruption scandal", "."],
		genres: ["Documentary"]
	},{ 
		title: "Cats & Dogs: The Revenge of Kitty Galore",
		year: 2010,
		cast: ["Christina Applegate", "Michael Clarke Duncan", "Neil Patrick Harris", "Sean Hayes", "James Marsden", "Bette Midler", "Nick Nolte", "Joe Pantoliano", "Katt Williams", "Chris O'Donnell", "Jack McBrayer", "Fred Armisen", "Paul Rodriguez", "Alec Baldwin", "Roger Moore"],
		genres: ["Family", "Live Action", "Animated"]
	},{ 
		title: "Charlie St. Cloud",
		year: 2010,
		cast: ["Zac Efron", "Amanda Crew", "Donal Logue", "Charlie Tahan", "Ray Liotta", "Kim Basinger", "Chris Massoglia"],
		genres: ["Romance", "Fantasy"]
	},{ 
		title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
		year: 2010,
		cast: ["Georgie Henley", "Skandar Keynes", "Ben Barnes", "Liam Neeson", "Will Poulter", "Simon Pegg"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "City Island",
		year: 2010,
		cast: ["Andy García", "Julianna Margulies", "Steven Strait", "Alan Arkin", "Emily Mortimer"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Clash of the Titans",
		year: 2010,
		cast: ["Sam Worthington", "Gemma Arterton", "Mads Mikkelsen", "Alexa Davalos", "Jason Flemyng", "Nicholas Hoult", "Danny Huston", "Izabella Miko", "Pete Postlethwaite", "Polly Walker", "Ralph Fiennes", "Liam Neeson"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "Client 9: The Rise and Fall of Eliot Spitzer",
		year: 2010,
		cast: ["The life and career of former New York Governor", "Eliot Spitzer"],
		genres: ["Documentary"]
	},{ 
		title: "The Company Men",
		year: 2010,
		cast: ["Ben Affleck", "Chris Cooper", "Kevin Costner", "Tommy Lee Jones", "Maria Bello", "Rosemarie DeWitt", "Craig T. Nelson"],
		genres: ["Drama"]
	},{ 
		title: "Conviction",
		year: 2010,
		cast: ["Hilary Swank", "Sam Rockwell", "Minnie Driver", "Melissa Leo", "Peter Gallagher", "Juliette Lewis"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Cop Out",
		year: 2010,
		cast: ["Bruce Willis", "Tracy Morgan", "Adam Brody", "Kevin Pollak", "Guillermo Diaz", "Seann William Scott"],
		genres: ["Comedy"]
	},{ 
		title: "Countdown to Zero",
		year: 2010,
		cast: ["The discussion on the escalating", "nuclear arms race", ". Narrated by", "Gary Oldman"],
		genres: ["Documentary"]
	},{ 
		title: "Country Strong",
		year: 2010,
		cast: ["Gwyneth Paltrow", "Tim McGraw", "Garrett Hedlund", "Leighton Meester"],
		genres: ["Drama", "Comedy", "Musical"]
	},{ 
		title: "The Crazies",
		year: 2010,
		cast: ["Timothy Olyphant", "Radha Mitchell", "Joe Anderson", "Danielle Panabaker"],
		genres: ["Horror"]
	},{ 
		title: "Crazy on the Outside",
		year: 2010,
		cast: ["Tim Allen", "Sigourney Weaver", "Jeanne Tripplehorn", "J. K. Simmons", "Julie Bowen", "Kelsey Grammer", "Ray Liotta"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Cyrus",
		year: 2010,
		cast: ["John C. Reilly", "Jonah Hill", "Marisa Tomei", "Catherine Keener"],
		genres: ["Comedy"]
	},{ 
		title: "Date Night",
		year: 2010,
		cast: ["Steve Carell", "Tina Fey"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Darkening Sky",
		year: 2010,
		cast: ["Rider Strong", "Danica Stewart"],
		genres: ["Thriller"]
	},{ 
		title: "Daybreakers",
		year: 2010,
		cast: ["Ethan Hawke", "Willem Dafoe", "Isabel Lucas", "Sam Neill"],
		genres: ["Horror"]
	},{ 
		title: "Dead Awake",
		year: 2010,
		cast: ["Nick Stahl", "Rose McGowan", "Amy Smart"],
		genres: ["Mystery"]
	},{ 
		title: "Dear John",
		year: 2010,
		cast: ["Channing Tatum", "Amanda Seyfried", "Henry Thomas", "Scott Porter", "Richard Jenkins"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Death at a Funeral",
		year: 2010,
		cast: ["Loretta Devine", "Peter Dinklage", "Danny Glover", "Regina Hall", "Martin Lawrence", "James Marsden", "Tracy Morgan", "Chris Rock", "Zoe Saldana", "Columbus Short", "Luke Wilson"],
		genres: ["Comedy"]
	},{ 
		title: "Despicable Me",
		year: 2010,
		cast: ["Steve Carell", "Miranda Cosgrove", "Jason Segel", "Russell Brand", "Kristen Wiig", "Will Arnett", "Ken Jeong", "Danny McBride", "Julie Andrews"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Devil",
		year: 2010,
		cast: ["Chris Messina", "Logan Marshall-Green", "Geoffrey Arend", "Caroline Dhavernas", "Jacob Vargas", "Jenny O'Hara", "Bojana Novakovic", "Joshua Peace", "Bokeem Woodbine"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Diary of a Wimpy Kid",
		year: 2010,
		cast: ["Zachary Gordon", "Robert Capron", "Rachel Harris", "Steve Zahn", "Devon Bostick", "Chloë Grace Moretz"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Dinner for Schmucks",
		year: 2010,
		cast: ["Steve Carell", "Paul Rudd", "Jemaine Clement", "Jeff Dunham", "Zach Galifianakis", "Bruce Greenwood", "Ron Livingston", "Rick Overton", "Lucy Punch", "Andrea Savage", "David Walliams"],
		genres: ["Comedy"]
	},{ 
		title: "Dirty Girl",
		year: 2010,
		cast: ["Juno Temple", "Milla Jovovich", "Mary Steenburgen", "Tim McGraw"],
		genres: ["Drama"]
	},{ 
		title: "Due Date",
		year: 2010,
		cast: ["Robert Downey Jr.", "Zach Galifianakis", "Michelle Monaghan", "Juliette Lewis", "Jamie Foxx", "RZA", "Alan Arkin", "Matt Walsh", "Danny McBride"],
		genres: ["Comedy"]
	},{ 
		title: "Easy A",
		year: 2010,
		cast: ["Emma Stone", "Penn Badgley", "Amanda Bynes", "Thomas Haden Church", "Patricia Clarkson", "Cam Gigandet", "Lisa Kudrow", "Malcolm McDowell", "Aly Michalka"],
		genres: ["Comedy", "Teen"]
	},{ 
		title: "Eat Pray Love",
		year: 2010,
		cast: ["Julia Roberts", "James Franco", "Richard Jenkins", "Viola Davis", "Billy Crudup", "Javier Bardem"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Twilight Saga: Eclipse",
		year: 2010,
		cast: ["Kristen Stewart", "Robert Pattinson", "Taylor Lautner", "Ashley Greene", "Peter Facinelli", "Elizabeth Reaser", "Kellan Lutz", "Nikki Reed", "Catalina Sandino Moreno", "Jackson Rathbone", "Bryce Dallas Howard", "Billy Burke", "Jodelle Ferland", "Dakota Fanning", "Xavier Samuel", "Julia Jones", "Jack Huston"],
		genres: ["Fantasy", "Romance"]
	},{ 
		title: "Edge of Darkness",
		year: 2010,
		cast: ["Mel Gibson", "Ray Winstone", "Danny Huston", "Bojana Novakovic", "Shawn Roberts", "Gbenga Akinnagbe"],
		genres: ["Action", "Drama"]
	},{ 
		title: "The Expendables",
		year: 2010,
		cast: ["Sylvester Stallone", "Jason Statham", "Jet Li", "Dolph Lundgren", "Eric Roberts", "Randy Couture", "Steve Austin", "David Zayas", "Giselle Itié", "Charisma Carpenter", "Gary Daniels", "Terry Crews", "Mickey Rourke", "Bruce Willis", "Arnold Schwarzenegger"],
		genres: ["Action"]
	},{ 
		title: "The Extra Man",
		year: 2010,
		cast: ["Kevin Kline", "Paul Dano", "Katie Holmes", "John C. Reilly"],
		genres: ["Comedy"]
	},{ 
		title: "Extraordinary Measures",
		year: 2010,
		cast: ["Brendan Fraser", "Harrison Ford", "Keri Russell"],
		genres: ["Drama"]
	},{ 
		title: "Fair Game",
		year: 2010,
		cast: ["Naomi Watts", "Sean Penn"],
		genres: ["Biography", "Spy", "Thriller"]
	},{ 
		title: "Faster",
		year: 2010,
		cast: ["Dwayne Johnson", "Billy Bob Thornton", "Carla Gugino", "Maggie Grace", "Oliver Jackson-Cohen", "Moon Bloodgood"],
		genres: ["Action", "Drama"]
	},{ 
		title: "The Fighter",
		year: 2010,
		cast: ["Mark Wahlberg", "Christian Bale", "Amy Adams", "Melissa Leo"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Flipped",
		year: 2010,
		cast: ["Madeline Carroll", "Rebecca De Mornay", "Anthony Edwards", "John Mahoney", "Callan McAuliffe", "Penelope Ann Miller", "Aidan Quinn", "Kevin Weisman"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "For Colored Girls",
		year: 2010,
		cast: ["Janet Jackson", "Thandie Newton", "Whoopi Goldberg", "Phylicia Rashad", "Anika Noni Rose", "Loretta Devine", "Kimberly Elise", "Kerry Washington"],
		genres: ["Drama"]
	},{ 
		title: "Freakonomics",
		year: 2010,
		cast: ["A group of rogue filmmakers explore the hidden side of everything."],
		genres: ["Documentary"]
	},{ 
		title: "From Paris with Love",
		year: 2010,
		cast: ["John Travolta", "Jonathan Rhys Meyers"],
		genres: ["Action"]
	},{ 
		title: "Frozen",
		year: 2010,
		cast: ["Kevin Zegers", "Shawn Ashmore", "Emma Bell"],
		genres: ["Horror"]
	},{ 
		title: "Furry Vengeance",
		year: 2010,
		cast: ["Brendan Fraser", "Brooke Shields", "Dick Van Dyke", "Ken Jeong", "Rob Riggle", "Angela Kinsey", "Matt Prokop"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Game of Death",
		year: 2010,
		cast: ["Wesley Snipes", "Zoë Bell", "Gary Daniels", "Robert Davi", "Ernie Hudson", "Jaime Moyer", "Frank Zieger"],
		genres: ["Action"]
	},{ 
		title: "Get Him to the Greek",
		year: 2010,
		cast: ["Jonah Hill", "Russell Brand", "Elisabeth Moss", "Rose Byrne", "Colm Meaney", "Sean Combs"],
		genres: ["Comedy"]
	},{ 
		title: "Get Low",
		year: 2010,
		cast: ["Robert Duvall", "Bill Murray", "Sissy Spacek", "Lucas Black"],
		genres: ["Drama"]
	},{ 
		title: "Going the Distance",
		year: 2010,
		cast: ["Drew Barrymore", "Charlie Day", "Jason Sudeikis", "Ron Livingston", "Rob Riggle", "Christina Applegate", "Kelli Garner", "Natalie Morales", "June Diane Raphael", "Kristen Schaal", "Jim Gaffigan", "Sarah Burns"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Good Guy",
		year: 2010,
		cast: ["Scott Porter", "Alexis Bledel", "Bryan Greenberg", "Aaron Yoo", "Anna Chlumsky", "Kate Nauta", "Andrew McCarthy"],
		genres: ["Drama", "Romance", "Comedy"]
	},{ 
		title: "The Greatest",
		year: 2010,
		cast: ["Pierce Brosnan", "Susan Sarandon", "Carey Mulligan", "Johnny Simmons", "Aaron Johnson", "Zoë Kravitz", "Michael Shannon"],
		genres: ["Drama"]
	},{ 
		title: "Green Zone",
		year: 2010,
		cast: ["Matt Damon", "Greg Kinnear", "Brendan Gleeson", "Amy Ryan", "Khalid Abdalla", "Jason Isaacs"],
		genres: ["Action", "Spy"]
	},{ 
		title: "Greenberg",
		year: 2010,
		cast: ["Ben Stiller", "Greta Gerwig", "Rhys Ifans", "Jennifer Jason Leigh", "Mark Duplass", "Chris Messina", "Brie Larson", "Juno Temple"],
		genres: ["Comedy"]
	},{ 
		title: "Grown Ups",
		year: 2010,
		cast: ["Adam Sandler", "Kevin James", "Chris Rock", "Rob Schneider", "David Spade"],
		genres: ["Comedy"]
	},{ 
		title: "Gulliver's Travels",
		year: 2010,
		cast: ["Jack Black", "Emily Blunt", "Jason Segel", "Catherine Tate", "James Corden", "Amanda Peet", "Chris O'Dowd", "Billy Connolly", "Hugh Jackman"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Happy Tears",
		year: 2010,
		cast: ["Parker Posey", "Demi Moore", "Rip Torn", "Ellen Barkin"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Hachiko: A Dog's Story",
		year: 2010,
		cast: ["Richard Gere"],
		genres: ["Drama"]
	},{ 
		title: "Harry Potter and the Deathly Hallows: Part 1",
		year: 2010,
		cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Helena Bonham Carter", "Robbie Coltrane", "Warwick Davis", "Ralph Fiennes", "Michael Gambon", "Brendan Gleeson", "Richard Griffiths", "John Hurt", "Jason Isaacs", "Alan Rickman", "Fiona Shaw", "Timothy Spall", "Imelda Staunton", "David Thewlis", "Julie Walters"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "Hereafter",
		year: 2010,
		cast: ["Matt Damon", "Cécile de France", "Bryce Dallas Howard", "Lyndsey Marshal", "Jay Mohr", "Thierry Neuvic", "Jenifer Lewis"],
		genres: ["Drama"]
	},{ 
		title: "Holy Rollers",
		year: 2010,
		cast: ["Jesse Eisenberg", "Justin Bartha", "Ari Graynor", "Danny A. Abeckaser", "Q-Tip", "Jason Fuchs"],
		genres: ["Drama"]
	},{ 
		title: "Hot Tub Time Machine",
		year: 2010,
		cast: ["John Cusack", "Rob Corddry", "Craig Robinson", "Clark Duke", "Crispin Glover", "Lizzy Caplan", "Chevy Chase"],
		genres: ["Comedy", "Science Fiction"]
	},{ 
		title: "How Do You Know",
		year: 2010,
		cast: ["Reese Witherspoon", "Owen Wilson", "Paul Rudd", "Jack Nicholson"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "How to Train Your Dragon",
		year: 2010,
		cast: ["Jay Baruchel", "Gerard Butler", "Craig Ferguson", "America Ferrera", "Jonah Hill", "Christopher Mintz-Plasse", "T. J. Miller", "Kristen Wiig"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Hubble 3D",
		year: 2010,
		cast: ["The", "Hubble Space Telescope", "repair mission", ". Narrated by", "Leonardo DiCaprio", "."],
		genres: ["Documentary"]
	},{ 
		title: "Hurricane Season",
		year: 2010,
		cast: ["Forest Whitaker", "Lil Wayne", "Bow Wow", "Isaiah Washington", "Taraji P. Henson", "Michael Gaston", "Jackie Long", "Khleo Thomas"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Hyenas",
		year: 2010,
		cast: ["Christa Campbell", "Costas Mandylor", "Joshua Alba", "Rudolf Martin"],
		genres: ["Horror"]
	},{ 
		title: "I Love You Phillip Morris",
		year: 2010,
		cast: ["Jim Carrey", "Ewan McGregor", "Leslie Mann", "Rodrigo Santoro"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "I'm Still Here",
		year: 2010,
		cast: ["Tumultuous year in the life of actor", "Joaquin Phoenix", "as he attempts to reinvent himself as a hip-hop artist."],
		genres: ["Satire"]
	},{ 
		title: "Inception",
		year: 2010,
		cast: ["Leonardo DiCaprio", "Ken Watanabe", "Joseph Gordon-Levitt", "Marion Cotillard", "Ellen Page", "Tom Hardy", "Cillian Murphy", "Tom Berenger", "Michael Caine"],
		genres: ["Science Fiction"]
	},{ 
		title: "Iron Man 2",
		year: 2010,
		cast: ["Robert Downey Jr.", "Don Cheadle", "Mickey Rourke", "Gwyneth Paltrow", "Sam Rockwell", "Scarlett Johansson", "Samuel L. Jackson"],
		genres: ["Superhero"]
	},{ 
		title: "It's Kind of a Funny Story",
		year: 2010,
		cast: ["Keir Gilchrist", "Zach Galifianakis", "Emma Roberts", "Viola Davis", "Zoë Kravitz", "Aasif Mandvi", "Lauren Graham", "Jim Gaffigan"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Jack Goes Boating",
		year: 2010,
		cast: ["Philip Seymour Hoffman", "Amy Ryan", "John Ortiz", "Daphne Rubin-Vega"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Jackass 3-D",
		year: 2010,
		cast: ["Johnny Knoxville", "Bam Margera", "Chris Pontius", "Steve-O", "Ryan Dunn", "Dave England", "Jason \"Wee Man\" Acuña", "Ehren McGhehey", "Preston Lacy", "The Dudesons"],
		genres: ["Comedy"]
	},{ 
		title: "Jonah Hex",
		year: 2010,
		cast: ["Josh Brolin", "John Malkovich", "Megan Fox", "Michael Fassbender", "Will Arnett", "Michael Shannon"],
		genres: ["Superhero", "Western"]
	},{ 
		title: "The Joneses",
		year: 2010,
		cast: ["David Duchovny", "Demi Moore", "Amber Heard", "Ben Hollingsworth", "Gary Cole", "Glenne Headly", "Lauren Hutton"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Just Wright",
		year: 2010,
		cast: ["Queen Latifah", "Common", "Paula Patton"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Kaboom",
		year: 2010,
		cast: ["Roxane Mesquida", "Thomas Dekker", "Juno Temple", "Haley Bennett", "James Duval"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Karate Kid",
		year: 2010,
		cast: ["Jaden Smith", "Jackie Chan", "Taraji P. Henson"],
		genres: ["Martial Arts"]
	},{ 
		title: "Kick-Ass",
		year: 2010,
		cast: ["Aaron Johnson", "Christopher Mintz-Plasse", "Chloë Grace Moretz", "Mark Strong", "Nicolas Cage"],
		genres: ["Superhero"]
	},{ 
		title: "The Kids Are All Right",
		year: 2010,
		cast: ["Annette Bening", "Julianne Moore", "Mark Ruffalo", "Mia Wasikowska", "Josh Hutcherson"],
		genres: ["Comedy"]
	},{ 
		title: "The Killer Inside Me",
		year: 2010,
		cast: ["Casey Affleck", "Kate Hudson", "Jessica Alba", "Ned Beatty", "Elias Koteas", "Tom Bower", "Simon Baker", "Bill Pullman"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Killers",
		year: 2010,
		cast: ["Katherine Heigl", "Ashton Kutcher"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Knight and Day",
		year: 2010,
		cast: ["Tom Cruise", "Cameron Diaz", "Maggie Grace", "Peter Sarsgaard", "Paul Dano", "Viola Davis"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Knucklehead",
		year: 2010,
		cast: ["Mark Feuerstein", "Melora Hardin", "Big Show", "Dennis Farina", "Wendie Malick", "Rebecca Creskoff", "Bobb'e J. Thompson", "Will Patton", "Saul Rubinek"],
		genres: ["Comedy"]
	},{ 
		title: "The Last Airbender",
		year: 2010,
		cast: ["Noah Ringer", "Nicola Peltz", "Jackson Rathbone", "Dev Patel", "Shaun Toub", "Aasif Mandvi", "Cliff Curtis", "Jessica Andres", "Katharine Houghton", "Seychelle Gabriel"],
		genres: ["Action", "Adventure", "Fantasy", "Family"]
	},{ 
		title: "The Last Exorcism",
		year: 2010,
		cast: ["Patrick Fabian", "Iris Bahr", "Louis Herthum", "Ashley Bell", "Jamie Alyson Caulde", "Tony Bentley", "Shanna Forrestall", "Allen Boudreaux", "Caleb Landry Jones"],
		genres: ["Horror"]
	},{ 
		title: "The Last Song",
		year: 2010,
		cast: ["Miley Cyrus", "Liam Hemsworth", "Bobby Coleman", "Kelly Preston", "Greg Kinnear"],
		genres: ["Drama", "Comedy", "Romance"]
	},{ 
		title: "Leap Year",
		year: 2010,
		cast: ["Amy Adams", "Matthew Goode", "Adam Scott", "John Lithgow"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Legend of the Guardians: The Owls of Ga'Hoole",
		year: 2010,
		cast: ["Jim Sturgess", "Geoffrey Rush", "Emily Barclay", "Anthony LaPaglia", "David Wenham", "Hugo Weaving", "Ryan Kwanten", "Helen Mirren", "Sam Neill", "Joel Edgerton", "Miriam Margolyes", "Richard Roxburgh", "Deborra-Lee Furness", "Abbie Cornish", "Leigh Whannell", "Angus Sampson", "Bill Hunter", "Sacha Horler", "Essie Davis", "Barry Otto"],
		genres: ["Fantasy"]
	},{ 
		title: "Legendary",
		year: 2010,
		cast: ["Patricia Clarkson", "John Cena", "Devon Graye", "Madeleine Martin", "Tyler Posey", "Danny Glover"],
		genres: ["Drama"]
	},{ 
		title: "Legion",
		year: 2010,
		cast: ["Paul Bettany", "Lucas Black", "Tyrese Gibson", "Charles S. Dutton", "Adrianne Palicki", "Kevin Durand", "Doug Jones", "Willa Holland", "Kate Walsh", "Dennis Quaid"],
		genres: ["Action", "Thriller", "Fantasy"]
	},{ 
		title: "Let Me In",
		year: 2010,
		cast: ["Kodi Smit-McPhee", "Chloë Grace Moretz", "Elias Koteas", "Richard Jenkins"],
		genres: ["Horror"]
	},{ 
		title: "Letters to God",
		year: 2010,
		cast: ["Robyn Lively", "Jeffrey Johnson", "Tanner Maguire", "Bailee Madison", "Ralph Waite"],
		genres: ["Drama"]
	},{ 
		title: "Letters to Juliet",
		year: 2010,
		cast: ["Amanda Seyfried", "Chris Egan", "Vanessa Redgrave", "Gael García Bernal", "Franco Nero"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Life as We Know It",
		year: 2010,
		cast: ["Katherine Heigl", "Josh Duhamel"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Like Dandelion Dust",
		year: 2010,
		cast: ["Mira Sorvino", "Barry Pepper", "Cole Hauser", "Kate Levering", "Maxwell Perry Cotton", "L. Scott Caldwell"],
		genres: ["Drama"]
	},{ 
		title: "Little Fockers",
		year: 2010,
		cast: ["Robert De Niro", "Ben Stiller", "Owen Wilson", "Blythe Danner", "Teri Polo", "Jessica Alba", "Laura Dern", "Harvey Keitel", "Dustin Hoffman", "Barbra Streisand"],
		genres: ["Comedy"]
	},{ 
		title: "The Losers",
		year: 2010,
		cast: ["Jeffrey Dean Morgan", "Zoe Saldana", "Chris Evans", "Idris Elba", "Columbus Short", "Oscar Janaeda", "Jason Patric"],
		genres: ["Action", "Comedy", "Superhero"]
	},{ 
		title: "Lottery Ticket",
		year: 2010,
		cast: ["Bow Wow", "Brandon T. Jackson", "Naturi Naughton", "Keith David", "Charlie Murphy", "Gbenga Akinnagbe", "Terry Crews", "Bill Bellamy", "Mike Epps", "T-Pain", "Loretta Devine", "Ice Cube"],
		genres: ["Comedy"]
	},{ 
		title: "Love Ranch",
		year: 2010,
		cast: ["Helen Mirren", "Joe Pesci", "Sergio Peris-Mencheta", "Gina Gershon", "Bryan Cranston"],
		genres: ["Drama"]
	},{ 
		title: "Love & Other Drugs",
		year: 2010,
		cast: ["Jake Gyllenhaal", "Anne Hathaway", "Oliver Platt", "Hank Azaria", "Josh Gad", "Gabriel Macht", "Judy Greer", "Jill Clayburgh"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "MacGruber",
		year: 2010,
		cast: ["Will Forte", "Kristen Wiig", "Ryan Phillippe", "Powers Boothe", "Maya Rudolph", "Derek Mears", "Val Kilmer", "Mark Henry", "Chris Jericho", "Glenn Jacobs", "Paul Wight", "Montel Vontavious Porter", "The Great Khali"],
		genres: ["Action", "Comedy", "Satire"]
	},{ 
		title: "Machete",
		year: 2010,
		cast: ["Danny Trejo", "Michelle Rodriguez", "Cheech Marin", "Jeff Fahey", "Lindsay Lohan", "Don Johnson", "Jessica Alba", "Steven Seagal", "Robert De Niro", "Daryl Sabara", "Tom Savini"],
		genres: ["Action"]
	},{ 
		title: "Marmaduke",
		year: 2010,
		cast: ["Owen Wilson", "George Lopez", "Lee Pace", "Judy Greer", "David Walliams", "William H. Macy", "Steve Coogan", "Sam Elliott", "Fergie", "Jeremy Piven", "Christopher Mintz-Plasse", "Emma Stone", "Kiefer Sutherland", "Damon Wayans Jr.", "Marlon Wayans"],
		genres: ["Family", "Live Action"]
	},{ 
		title: "Marwencol",
		year: 2010,
		cast: ["After a vicious attack leaves him brain-damaged and broke", "Mark Hogancamp", "seeks recovery in \"Marwencol\" a 1", "6th scale World War II-era town he creates in his backyard."],
		genres: ["Documentary"]
	},{ 
		title: "Megamind",
		year: 2010,
		cast: ["Will Ferrell", "Tina Fey", "Jonah Hill", "David Cross", "Brad Pitt"],
		genres: ["Comedy", "Superhero"]
	},{ 
		title: "Middle Men",
		year: 2010,
		cast: ["Luke Wilson", "Giovanni Ribisi", "Gabriel Macht", "James Caan", "Jacinda Barrett", "Laura Ramsey", "Terry Crews", "Rade Šerbedžija", "Kelsey Grammer", "Kevin Pollak", "Robert Forster"],
		genres: ["Comedy", "Drama", "Crime"]
	},{ 
		title: "Mirrors 2",
		year: 2010,
		cast: ["Nick Stahl", "Emmanuelle Vaugier", "Evan Jones", "Christy Carlson Romano", "William Katt", "Lawrence Turner", "Stephanie Honoré", "Jon Michael Davis", "Jennifer Sipes", "Ann Mckenzie"],
		genres: ["Horror"]
	},{ 
		title: "Morning Glory",
		year: 2010,
		cast: ["Rachel McAdams", "Harrison Ford", "Diane Keaton", "Patrick Wilson", "Jeff Goldblum"],
		genres: ["Comedy"]
	},{ 
		title: "Mother and Child",
		year: 2010,
		cast: ["Naomi Watts", "Annette Bening", "Kerry Washington", "Jimmy Smits", "Samuel L. Jackson", "S. Epatha Merkerson", "Cherry Jones", "Elpidia Carrillo", "Shareeka Epps"],
		genres: ["Drama"]
	},{ 
		title: "My Soul to Take",
		year: 2010,
		cast: ["Max Thieriot", "Denzel Whitaker", "Raúl Esparza", "Shareeka Epps", "Zena Grey", "Trevor St. John"],
		genres: ["Horror"]
	},{ 
		title: "Nanny McPhee Returns",
		year: 2010,
		cast: ["Emma Thompson", "Maggie Gyllenhaal", "Rhys Ifans", "Maggie Smith", "Ralph Fiennes", "Ewan McGregor"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Never Let Me Go",
		year: 2010,
		cast: ["Carey Mulligan", "Andrew Garfield", "Keira Knightley"],
		genres: ["Drama"]
	},{ 
		title: "The Next Three Days",
		year: 2010,
		cast: ["Russell Crowe", "Elizabeth Banks", "Brian Dennehy", "Olivia Wilde", "Liam Neeson"],
		genres: ["Thriller"]
	},{ 
		title: "Night Catches Us",
		year: 2010,
		cast: ["Anthony Mackie", "Kerry Washington"],
		genres: ["Drama"]
	},{ 
		title: "A Nightmare on Elm Street",
		year: 2010,
		cast: ["Jackie Earle Haley", "Rooney Mara", "Thomas Dekker", "Kellan Lutz", "Katie Cassidy", "Connie Britton", "Clancy Brown"],
		genres: ["Horror"]
	},{ 
		title: "The Other Guys",
		year: 2010,
		cast: ["Samuel L. Jackson", "Mark Wahlberg", "Will Ferrell", "Dwayne Johnson", "Eva Mendes", "Anne Heche", "Michael Keaton", "Steve Coogan", "Ray Stevenson"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Our Family Wedding",
		year: 2010,
		cast: ["Forest Whitaker", "America Ferrera", "Carlos Mencia", "Regina King", "Lance Gross"],
		genres: ["Comedy"]
	},{ 
		title: "Paper Man",
		year: 2010,
		cast: ["Jeff Daniels", "Emma Stone", "Ryan Reynolds", "Lisa Kudrow"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Paranormal Activity 2",
		year: 2010,
		cast: ["Katie Featherston", "Micah Sloat", "Sprague Grayden", "Molly Ephraim"],
		genres: ["Horror"]
	},{ 
		title: "Passion Play",
		year: 2010,
		cast: ["Mickey Rourke", "Megan Fox", "Bill Murray", "Kelly Lynch"],
		genres: ["Drama"]
	},{ 
		title: "Percy Jackson & the Olympians: The Lightning Thief",
		year: 2010,
		cast: ["Logan Lerman", "Brandon T. Jackson", "Alexandra Daddario", "Jake Abel", "Rosario Dawson", "Steve Coogan", "Uma Thurman", "Pierce Brosnan", "Sean Bean"],
		genres: ["Adventure", "Family"]
	},{ 
		title: "The Perfect Game",
		year: 2010,
		cast: ["Clifton Collins Jr.", "Cheech Marin", "Emilie de Ravin", "Moisés Arias", "Jake T. Austin", "Jansen Panettiere", "Lou Gossett Jr.", "Bruce McGill"],
		genres: ["Drama"]
	},{ 
		title: "Piranha 3-D",
		year: 2010,
		cast: ["Elisabeth Shue", "Adam Scott", "Jerry O'Connell", "Ving Rhames", "Jessica Szohr", "Steven R. McQueen", "Christopher Lloyd", "Richard Dreyfuss", "Kelly Brook", "Riley Steele", "Ricardo Chavira", "Paul Scheer"],
		genres: ["Horror"]
	},{ 
		title: "Please Give",
		year: 2010,
		cast: ["Catherine Keener", "Amanda Peet", "Oliver Platt", "Rebecca Hall", "Ann Guilbert", "Kevin Corrigan", "Sarah Steele"],
		genres: ["Comedy"]
	},{ 
		title: "Preacher's Kid",
		year: 2010,
		cast: ["LeToya Luckett", "Rae'Ven Larrymore Kelly", "Kierra Sheard", "Clifton Powell", "Gregory Alan Williams"],
		genres: ["Drama"]
	},{ 
		title: "Predators",
		year: 2010,
		cast: ["Adrien Brody", "Topher Grace", "Alice Braga", "Walton Goggins", "Oleg Taktarov", "Louis Ozawa Changchien", "Mahershalalhashbaz Ali", "Laurence Fishburne", "Danny Trejo"],
		genres: ["Horror"]
	},{ 
		title: "Prince of Persia: The Sands of Time",
		year: 2010,
		cast: ["Jake Gyllenhaal", "Ben Kingsley", "Gemma Arterton", "Alfred Molina"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "Rabbit Hole",
		year: 2010,
		cast: ["Nicole Kidman", "Aaron Eckhart", "Dianne Wiest", "Tammy Blanchard", "Miles Teller", "Giancarlo Esposito", "Jon Tenney", "Sandra Oh"],
		genres: ["Drama"]
	},{ 
		title: "Ramona and Beezus",
		year: 2010,
		cast: ["Joey King", "Selena Gomez", "John Corbett", "Bridget Moynahan", "Ginnifer Goodwin", "Josh Duhamel", "Sandra Oh"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "The Rebound",
		year: 2010,
		cast: ["Catherine Zeta-Jones", "Justin Bartha", "Jordan Carlos", "Kelly Gould", "Art Garfunkel"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Red",
		year: 2010,
		cast: ["Bruce Willis", "Morgan Freeman", "John Malkovich", "Helen Mirren", "Karl Urban", "Mary-Louise Parker", "Brian Cox", "Julian McMahon", "Richard Dreyfuss"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Remember Me",
		year: 2010,
		cast: ["Robert Pattinson", "Emilie de Ravin", "Chris Cooper", "Lena Olin", "Pierce Brosnan"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Repo Men",
		year: 2010,
		cast: ["Jude Law", "Forest Whitaker", "Liev Schreiber", "Alice Braga", "Carice van Houten", "Chandler Canterbury"],
		genres: ["Action", "Thriller", "Science Fiction"]
	},{ 
		title: "Resident Evil: Afterlife",
		year: 2010,
		cast: ["Milla Jovovich", "Ali Larter", "Kim Coates", "Shawn Roberts", "Sergio Peris-Mencheta", "Spencer Locke", "Boris Kodjoe", "Wentworth Miller"],
		genres: ["Action", "Horror", "Science Fiction"]
	},{ 
		title: "Robin Hood",
		year: 2010,
		cast: ["Russell Crowe", "Cate Blanchett", "William Hurt", "Mark Strong", "Mark Addy", "Oscar Isaac", "Danny Huston", "Eileen Atkins", "Max von Sydow"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "The Romantics",
		year: 2010,
		cast: ["Katie Holmes", "Josh Duhamel", "Anna Paquin", "Malin Åkerman", "Adam Brody", "Dianna Agron", "Jeremy Strong", "Rebecca Lawrence", "Candice Bergen", "Elijah Wood"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Runaways",
		year: 2010,
		cast: ["Kristen Stewart", "Dakota Fanning", "Michael Shannon", "Scout Taylor-Compton", "Alia Shawkat"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Saint John of Las Vegas",
		year: 2010,
		cast: ["Steve Buscemi", "Romany Malco", "Peter Dinklage", "Emmanuelle Chriqui", "Tim Blake Nelson", "Sarah Silverman"],
		genres: ["Comedy"]
	},{ 
		title: "Salt",
		year: 2010,
		cast: ["Angelina Jolie", "Liev Schreiber", "Chiwetel Ejiofor"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Saw VII",
		year: 2010,
		cast: ["Tobin Bell", "Costas Mandylor", "Cary Elwes", "Betsy Russell", "Sean Patrick Flanery"],
		genres: ["Horror"]
	},{ 
		title: "Scott Pilgrim vs. the World",
		year: 2010,
		cast: ["Michael Cera", "Mary Elizabeth Winstead", "Kieran Culkin", "Chris Evans", "Anna Kendrick", "Alison Pill", "Mark Webber", "Johnny Simmons", "Brandon Routh", "Jason Schwartzman", "Mae Whitman", "Brie Larson", "Aubrey Plaza", "Tennessee Thomas"],
		genres: ["Action", "Romance", "Comedy"]
	},{ 
		title: "Secretariat",
		year: 2010,
		cast: ["Diane Lane", "John Malkovich", "Dylan Walsh", "James Cromwell", "Kevin Connelly", "Scott Glenn"],
		genres: ["Drama"]
	},{ 
		title: "Sex and the City 2",
		year: 2010,
		cast: ["Sarah Jessica Parker", "Kim Cattrall", "Kristin Davis", "Cynthia Nixon", "John Corbett", "Chris Noth", "David Eigenberg", "Evan Handler", "Jason Lewis", "Lynn Cohen"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "She's Out of My League",
		year: 2010,
		cast: ["Jay Baruchel", "Alice Eve", "T. J. Miller", "Mike Vogel", "Nate Torrence", "Krysten Ritter", "Geoff Stults", "Lindsay Sloane"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Shrek Forever After",
		year: 2010,
		cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "Antonio Banderas", "Walt Dohrn", "Julie Andrews", "John Cleese"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "Shutter Island",
		year: 2010,
		cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley", "Michelle Williams", "Patricia Clarkson", "Emily Mortimer", "Ted Levine", "John Carroll Lynch", "Elias Koteas", "Jackie Earle Haley", "Max von Sydow"],
		genres: ["Crime", "Thriller", "Drama"]
	},{ 
		title: "Skyline",
		year: 2010,
		cast: ["Eric Balfour", "Scottie Thompson", "Donald Faison", "David Zayas", "Brittany Daniel", "Neil Hopkins"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "Small Town Saturday Night",
		year: 2010,
		cast: ["Chris Pine", "Shawn Christian", "John Hawkes", "Bre Blair", "Muse Watson", "Robert Pine", "Brent Briscoe", "Lin Shaye"],
		genres: ["Drama"]
	},{ 
		title: "The Social Network",
		year: 2010,
		cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake", "Armie Hammer", "Max Minghella", "Brenda Song", "Rooney Mara", "Dustin Fitzsimons", "Joseph Mazzello", "Rashida Jones"],
		genres: ["Drama"]
	},{ 
		title: "Solitary Man",
		year: 2010,
		cast: ["Michael Douglas", "Mary-Louise Parker", "Jenna Fischer", "Jesse Eisenberg", "Imogen Poots", "Susan Sarandon", "Danny DeVito"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Somewhere",
		year: 2010,
		cast: ["Stephen Dorff", "Elle Fanning", "Benicio del Toro", "Michelle Monaghan", "Chris Pontius", "Simona Ventura"],
		genres: ["Drama"]
	},{ 
		title: "The Sorcerer's Apprentice",
		year: 2010,
		cast: ["Nicolas Cage", "Jay Baruchel", "Alfred Molina", "Teresa Palmer", "Monica Bellucci"],
		genres: ["Adventure", "Comedy", "Fantasy"]
	},{ 
		title: "Splice",
		year: 2010,
		cast: ["Adrien Brody", "Sarah Polley"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Spy Next Door",
		year: 2010,
		cast: ["Jackie Chan", "Amber Valletta", "Madeline Carroll", "Will Shadley", "Magnús Scheving", "Billy Ray Cyrus", "George Lopez"],
		genres: ["Action", "Comedy", "Family"]
	},{ 
		title: "Step Up 3D",
		year: 2010,
		cast: ["Rick Malambri", "Adam G. Sevani", "Sharni Vinson", "Alyson Stoner"],
		genres: ["Dance", "Drama", "Romance"]
	},{ 
		title: "Stone",
		year: 2010,
		cast: ["Robert De Niro", "Edward Norton", "Milla Jovovich"],
		genres: ["Thriller"]
	},{ 
		title: "The Sundowner",
		year: 2010,
		cast: ["Jon Bendz", "Tim Tomchak"],
		genres: ["Documentary"]
	},{ 
		title: "The Switch",
		year: 2010,
		cast: ["Jennifer Aniston", "Jason Bateman", "Patrick Wilson", "Jeff Goldblum", "Juliette Lewis"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Takers",
		year: 2010,
		cast: ["Matt Dillon", "Paul Walker", "Idris Elba", "Jay Hernandez", "Michael Ealy", "Tip \"T.I.\" Harris", "Chris Brown", "Hayden Christensen", "Zoe Saldana"],
		genres: ["Action", "Crime", "Drama"]
	},{ 
		title: "Tangled",
		year: 2010,
		cast: ["Mandy Moore", "Zachary Levi", "Donna Murphy", "Brad Garrett", "Ron Perlman", "M. C. Gainey", "Jeffrey Tambor", "Peter Sallis", "Paul F. Tompkins"],
		genres: ["Animated", "Family"]
	},{ 
		title: "The Tempest",
		year: 2010,
		cast: ["Helen Mirren", "David Strathairn", "Djimon Hounsou", "Russell Brand", "Reeve Carney", "Tom Conti", "Chris Cooper", "Alan Cumming", "Felicity Jones", "Alfred Molina", "Ben Whishaw"],
		genres: ["Romance"]
	},{ 
		title: "Tooth Fairy",
		year: 2010,
		cast: ["Dwayne Johnson", "Ashley Judd", "Billy Crystal", "Julie Andrews", "Stephen Merchant", "Ryan Sheckler"],
		genres: ["Family", "Fantasy"]
	},{ 
		title: "The Town",
		year: 2010,
		cast: ["Ben Affleck", "Rebecca Hall", "Jon Hamm", "Blake Lively", "Jeremy Renner", "Titus Welliver", "Pete Postlethwaite", "Chris Cooper", "Slaine"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Tourist",
		year: 2010,
		cast: ["Johnny Depp", "Angelina Jolie", "Paul Bettany", "Rufus Sewell", "Timothy Dalton", "Steven Berkoff"],
		genres: ["Drama", "Comedy", "Thriller"]
	},{ 
		title: "Toy Story 3",
		year: 2010,
		cast: ["Tom Hanks", "Tim Allen", "Joan Cusack", "Ned Beatty", "Don Rickles", "Michael Keaton", "Wallace Shawn", "John Ratzenberger", "Estelle Harris", "John Morris", "Jodi Benson", "Laurie Metcalf", "Blake Clark", "Teddy Newton", "Bud Luckey", "Timothy Dalton", "Lori Alan", "Kristen Schaal", "Jeff Garlin", "Bonnie Hunt", "John Cygan", "Jeff Pidgeon", "Whoopi Goldberg", "Jack Angel", "R. Lee Ermey", "Jan Rabson", "Richard Kind"],
		genres: ["Family"]
	},{ 
		title: "Tron: Legacy",
		year: 2010,
		cast: ["Jeff Bridges", "Garrett Hedlund", "Bruce Boxleitner", "Michael Sheen", "Olivia Wilde", "Beau Garrett", "John Hurt"],
		genres: ["Science Fiction"]
	},{ 
		title: "True Grit",
		year: 2010,
		cast: ["Jeff Bridges", "Matt Damon", "Josh Brolin", "Barry Pepper", "Hailee Steinfeld"],
		genres: ["Western"]
	},{ 
		title: "Twelve",
		year: 2010,
		cast: ["Chace Crawford", "Rory Culkin", "Esti Ginzburg", "Curtis \"50 Cent\" Jackson", "Zoë Kravitz", "Emily Meade", "Ethan Peck", "Emma Roberts", "Charlie Saxton", "Kiefer Sutherland", "(narrator)", "Ellen Barkin", "Jermaine Crawford", "Billy Magnussen", "Nico Tortorella", "Isiah Whitlock Jr."],
		genres: ["Drama"]
	},{ 
		title: "Unstoppable",
		year: 2010,
		cast: ["Denzel Washington", "Chris Pine", "Rosario Dawson"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Valentine's Day",
		year: 2010,
		cast: ["Jessica Alba", "Kathy Bates", "Jessica Biel", "Bradley Cooper", "Eric Dane", "Patrick Dempsey", "Héctor Elizondo", "Jamie Foxx", "Jennifer Garner", "Topher Grace", "Anne Hathaway", "Ashton Kutcher", "Queen Latifah", "Taylor Lautner", "George Lopez", "Shirley MacLaine", "Emma Roberts", "Julia Roberts", "Taylor Swift"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Vampires Suck",
		year: 2010,
		cast: ["Matt Lanter", "Chris Riggi", "Jenn Proske", "Anneliese van der Pol", "Ken Jeong"],
		genres: ["Satire"]
	},{ 
		title: "Waiting for Superman",
		year: 2010,
		cast: ["The analyzation of the failing", "American public education system", "."],
		genres: ["Documentary"]
	},{ 
		title: "Wall Street: Money Never Sleeps",
		year: 2010,
		cast: ["Michael Douglas", "Shia LaBeouf", "Josh Brolin", "Carey Mulligan", "Eli Wallach", "Susan Sarandon", "Frank Langella", "Vanessa Ferlito", "Charlie Sheen"],
		genres: ["Drama"]
	},{ 
		title: "Welcome to the Rileys",
		year: 2010,
		cast: ["James Gandolfini", "Kristen Stewart", "Melissa Leo", "Ally Sheedy"],
		genres: ["Drama"]
	},{ 
		title: "What If...",
		year: 2010,
		cast: ["Kevin Sorbo", "Kristy Swanson", "Debby Ryan", "John Ratzenberger"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "What's Wrong with Virginia",
		year: 2010,
		cast: ["Jennifer Connelly", "Ed Harris", "Emma Roberts", "Carrie Preston", "Toby Jones"],
		genres: ["Drama"]
	},{ 
		title: "When in Rome",
		year: 2010,
		cast: ["Kristen Bell", "Josh Duhamel", "Will Arnett", "Jon Heder", "Dax Shepard", "Danny DeVito", "Anjelica Huston"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Why Did I Get Married Too?",
		year: 2010,
		cast: ["Tyler Perry", "Janet Jackson", "Jill Scott", "Malik Yoba", "Richard T. Jones", "Michael Jai White", "Lamman Rucker", "Sharon Leal", "Tasha Smith", "Denise Boutte", "Keyshia Cole", "Cicely Tyson", "Louis Gossett, Jr."],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Winnebago Man",
		year: 2010,
		cast: ["The Jack Rebney-", "Winnebago", "outtakes internet phenomenon and its impact on people and the person itself."],
		genres: ["Documentary"]
	},{ 
		title: "Winter's Bone",
		year: 2010,
		cast: ["Jennifer Lawrence", "John Hawkes", "Kevin Breznahan", "Dale Dickey", "Garret Dillahunt", "Sheryl Lee", "Shelley Waggener", "Laura Sweetser"],
		genres: ["Drama", "Suspense", "Thriller"]
	},{ 
		title: "The Wolfman",
		year: 2010,
		cast: ["Benicio del Toro", "Anthony Hopkins", "Emily Blunt", "Hugo Weaving"],
		genres: ["Horror"]
	},{ 
		title: "Wonderful World",
		year: 2010,
		cast: ["Matthew Broderick", "Sanaa Lathan", "Michael Kenneth Williams", "Jodelle Ferland", "Jesse Tyler Ferguson", "Ally Walker", "Philip Baker Hall"],
		genres: ["Comedy", "Drama", "Romance"]
	},{ 
		title: "Yogi Bear",
		year: 2010,
		cast: ["Dan Aykroyd", "Justin Timberlake", "Anna Faris", "Tom Cavanagh", "T. J. Miller"],
		genres: ["Family", "Live Action"]
	},{ 
		title: "You Again",
		year: 2010,
		cast: ["Kristen Bell", "Jamie Lee Curtis", "Sigourney Weaver", "Odette Yustman", "Kristin Chenoweth", "Victor Garber", "Betty White", "Kyle Bornheimer", "Christine Lakin", "Cloris Leachman"],
		genres: ["Comedy"]
	},{ 
		title: "You Will Meet a Tall Dark Stranger",
		year: 2010,
		cast: ["Antonio Banderas", "Josh Brolin", "Anthony Hopkins", "Gemma Jones", "Freida Pinto", "Lucy Punch", "Naomi Watts"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Youth in Revolt",
		year: 2010,
		cast: ["Michael Cera", "Portia Doubleday", "Jean Smart", "Mary Kay Place", "Justin Long", "Ray Liotta", "Steve Buscemi", "Zach Galifianakis", "Ari Graynor", "Fred Willard"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "11-11-11",
		year: 2011,
		cast: ["Timothy Gibbs", "Michael Landes", "Wendy Glenn", "Benjamin Cook", "Lolo Herrero", "Salome Jimenez", "Brendan Price", "Denis Rafter", "Angela Rosal", "Lluis Soler"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "30 Minutes or Less",
		year: 2011,
		cast: ["Jesse Eisenberg", "Danny McBride", "Aziz Ansari", "Nick Swardson", "Michael Peña", "Fred Ward"],
		genres: ["Adventure", "Comedy"]
	},{ 
		title: "35 and Ticking",
		year: 2011,
		cast: ["Tamala Jones", "Nicole Ari Parker", "Keith Robinson", "Darius McCrary", "Dondre Whitfield", "Jill Marie Jones", "Wendy Raquel Robinson", "Kevin Hart", "Meagan Good"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "50/50",
		year: 2011,
		cast: ["Joseph Gordon-Levitt", "Seth Rogen", "Anna Kendrick", "Bryce Dallas Howard", "Anjelica Huston"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Abduction",
		year: 2011,
		cast: ["Taylor Lautner", "Lily Collins", "Alfred Molina", "Jason Isaacs", "Maria Bello", "Sigourney Weaver"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "The Adjustment Bureau",
		year: 2011,
		cast: ["Matt Damon", "Emily Blunt", "Anthony Mackie", "Shoreh Aghdashloo", "John Slattery", "Michael Kelly", "Anthony Ruivivar", "Terence Stamp"],
		genres: ["Romance", "Science Fiction", "Thriller"]
	},{ 
		title: "The Adventures of Tintin: The Secret of the Unicorn",
		year: 2011,
		cast: ["Jamie Bell", "Andy Serkis", "Daniel Craig", "Simon Pegg", "Nick Frost", "Tony Curran", "Toby Jones", "Gad Elmaleh", "Mackenzie Crook", "Daniel Mays", "Kim Stengel", "Sebastian Roché", "Cary Elwes", "Phillip Rhys", "Ron Bottitta"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "African Cats",
		year: 2011,
		cast: ["Centers around two families of lions and cheetahs who teach their cubs the ways of the wild in surviving the African savannah. Narrated by", "Samuel L. Jackson"],
		genres: ["Documentary"]
	},{ 
		title: "Alvin and the Chipmunks: Chipwrecked",
		year: 2011,
		cast: ["Jason Lee", "David Cross", "Jenny Slate", "Justin Long", "(voice)", "Matthew Gray Gubler", "(voice)", "Jesse McCartney", "(voice)", "Christina Applegate", "(voice)", "Anna Faris", "(voice)", "Amy Poehler", "(voice)", "Alan Tudyk", "(voice)"],
		genres: ["Family", "Live Action"]
	},{ 
		title: "Another Earth",
		year: 2011,
		cast: ["William Mapother", "Brit Marling"],
		genres: ["Fantasy", "Drama"]
	},{ 
		title: "Apollo 18",
		year: 2011,
		cast: ["Lloyd Owen", "Warren Christie"],
		genres: ["Horror", "Science Fiction"]
	},{ 
		title: "The Art of Getting By",
		year: 2011,
		cast: ["Freddie Highmore", "Emma Roberts", "Michael Angarano", "Elizabeth Reaser", "Sam Robards", "Alicia Silverstone", "Rita Wilson", "Blair Underwood"],
		genres: ["Romance", "Comedy", "Teen"]
	},{ 
		title: "Arthur",
		year: 2011,
		cast: ["Russell Brand", "Helen Mirren", "Greta Gerwig", "Jennifer Garner", "Nick Nolte", "Luis Guzmán"],
		genres: ["Comedy"]
	},{ 
		title: "Arthur Christmas",
		year: 2011,
		cast: ["James McAvoy", "Hugh Laurie", "Bill Nighy", "Jim Broadbent", "Imelda Staunton", "Ashley Jensen", "Will Sasso", "Ramona Marquez", "Iain McKee", "Joan Cusack", "Robbie Coltrane", "Michael Palin", "Dominic West", "Andy Serkis"],
		genres: ["Animated", "Family", "Fantasy"]
	},{ 
		title: "Atlas Shrugged: Part I",
		year: 2011,
		cast: ["Taylor Schilling", "Grant Bowler", "Matthew Marsden", "Edi Gathegi", "Graham Beckel", "Jsu Garcia", "Jon Polito", "Michael Lerner"],
		genres: ["Drama", "Political", "Thriller"]
	},{ 
		title: "Bad Teacher",
		year: 2011,
		cast: ["Cameron Diaz", "Jason Segel", "Justin Timberlake", "Lucy Punch", "John Michael Higgins"],
		genres: ["Comedy"]
	},{ 
		title: "Battle: Los Angeles",
		year: 2011,
		cast: ["Aaron Eckhart", "Michelle Rodriguez", "Ramón Rodríguez", "Bridget Moynahan", "Ne-Yo", "and", "Michael Peña", "Lucas Till", "Joey King", "Will Rothhaar", "Nzinga Blake", "Jim Parrack", "Aisha Tyler", "Tisha Campbell-Martin", "Noel Fisher", "Taylor Handley", "Cory Hardrict"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Beastly",
		year: 2011,
		cast: ["Vanessa Hudgens", "Alex Pettyfer", "Mary-Kate Olsen", "Peter Krause", "Lisa Gay Hamilton", "Neil Patrick Harris"],
		genres: ["Fantasy", "Romance"]
	},{ 
		title: "Beats, Rhymes & Life: The Travels of a Tribe Called Quest",
		year: 2011,
		cast: ["The life and legacy of", "A Tribe Called Quest", "one of the most influential and groundbreaking musical groups in hip-hop history."],
		genres: ["Documentary"]
	},{ 
		title: "The Beaver",
		year: 2011,
		cast: ["Mel Gibson", "Jodie Foster", "Anton Yelchin", "Jennifer Lawrence"],
		genres: ["Comedy"]
	},{ 
		title: "Beginners",
		year: 2011,
		cast: ["Ewan McGregor", "Christopher Plummer", "Mélanie Laurent", "Goran Višnjić", "Kai Lennox", "Mary Page Keller", "Keegan Boos"],
		genres: ["Drama"]
	},{ 
		title: "A Better Life",
		year: 2011,
		cast: ["Demián Bichir", "José Julián"],
		genres: ["Drama"]
	},{ 
		title: "Big Mommas: Like Father, Like Son",
		year: 2011,
		cast: ["Martin Lawrence", "Brandon T. Jackson", "Jessica Lucas", "Tony Curran", "Faizon Love", "Sherri Shepherd", "Portia Doubleday"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "The Big Year",
		year: 2011,
		cast: ["Steve Martin", "Jack Black", "Owen Wilson", "Rashida Jones", "Anjelica Huston", "Jim Parsons", "Rosamund Pike", "JoBeth Williams", "Brian Dennehy", "Dianne Wiest", "Anthony Anderson", "Tim Blake Nelson", "Kevin Pollak", "Joel McHale"],
		genres: ["Comedy"]
	},{ 
		title: "Born to Be Wild 3D",
		year: 2011,
		cast: ["A team of animal activists raise and rescue endangered orangutans and elephants to bring them back into the wild. Narrated by", "Morgan Freeman"],
		genres: ["Documentary"]
	},{ 
		title: "The Twilight Saga: Breaking Dawn - Part 1",
		year: 2011,
		cast: ["Kristen Stewart", "Robert Pattinson", "Taylor Lautner", "Nikki Reed", "Peter Facinelli", "Elizabeth Reaser", "Ashley Greene", "Kellan Lutz", "Jackson Rathbone", "Julia Jones", "Booboo Stewart", "Billy Burke", "Sarah Clarke", "MyAnna Buring", "Maggie Grace", "Casey LaBow", "Michael Sheen", "Jamie Campbell Bower", "Christopher Heyerdahl", "Chaske Spencer", "Christian Camargo", "Mía Maestro"],
		genres: ["Fantasy", "Romance"]
	},{ 
		title: "Bridesmaids",
		year: 2011,
		cast: ["Kristen Wiig", "Maya Rudolph", "Rose Byrne", "Wendi McLendon-Covey", "Ellie Kemper", "Melissa McCarthy", "Chris O'Dowd", "Jon Hamm", "Matt Lucas"],
		genres: ["Comedy"]
	},{ 
		title: "Buck",
		year: 2011,
		cast: ["The life", "career", "and philosophy of the real-life \"horse whisperer\"", "Buck Brannaman", "."],
		genres: ["Documentary"]
	},{ 
		title: "Bucky Larson: Born to Be a Star",
		year: 2011,
		cast: ["Nick Swardson", "Christina Ricci", "Don Johnson", "Stephen Dorff"],
		genres: ["Comedy"]
	},{ 
		title: "Captain America: The First Avenger",
		year: 2011,
		cast: ["Chris Evans", "Tommy Lee Jones", "Hugo Weaving", "Dominic Cooper", "Neal McDonough", "Derek Luke", "Stanley Tucci", "Hayley Atwell", "Sebastian Stan", "Kenneth Choi", "Toby Jones", "Richard Armitage", "J. J. Feild", "Samuel L. Jackson"],
		genres: ["Superhero"]
	},{ 
		title: "Carnage",
		year: 2011,
		cast: ["Jodie Foster", "Kate Winslet", "Christoph Waltz", "John C. Reilly"],
		genres: ["Comedy"]
	},{ 
		title: "Cars 2",
		year: 2011,
		cast: ["Owen Wilson", "Larry the Cable Guy", "Michael Caine", "Emily Mortimer", "Eddie Izzard", "Jason Isaacs", "Thomas Kretschmann", "Joe Mantegna", "Peter Jacobson", "Tony Shalhoub", "Guido Quaroni", "Paul Dooley", "John Ratzenberger", "John Turturro", "Jeff Gordon", "Lewis Hamilton", "Darrell Waltrip", "Brent Musburger", "David Hobbs", "Bruce Campbell", "John Lasseter", "Franco Nero", "Vanessa Redgrave", "Michel Michelis", "Bonnie Hunt", "Cheech Marin", "Jenifer Lewis", "Michael Wallis", "Lloyd Sherr", "Sig Hansen", "Jeff Garlin", "Katherine Helmond"],
		genres: ["Animated", "Family", "Spy"]
	},{ 
		title: "Cedar Rapids",
		year: 2011,
		cast: ["Ed Helms", "John C. Reilly", "Anne Heche", "Isiah Whitlock, Jr.", "Kurtwood Smith", "Stephen Root", "Mike O'Malley", "and", "Sigourney Weaver", "Alia Shawkat", "Rob Corddry", "Thomas Lennon", "Welker White", "Steve Blackwood"],
		genres: ["Comedy"]
	},{ 
		title: "The Change-Up",
		year: 2011,
		cast: ["Ryan Reynolds", "Jason Bateman", "Leslie Mann", "Olivia Wilde", "Alan Arkin"],
		genres: ["Comedy"]
	},{ 
		title: "The Chaperone",
		year: 2011,
		cast: ["Paul \"Triple H\" Levesque", "Ariel Winter", "Kevin Corrigan", "José Zúñiga", "Yeardley Smith", "Kevin Rankin", "Enrico Colantoni"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Colombiana",
		year: 2011,
		cast: ["Zoe Saldana", "Jordi Mollà", "Lennie James", "Michael Vartan", "Cliff Curtis"],
		genres: ["Action"]
	},{ 
		title: "Conan the Barbarian",
		year: 2011,
		cast: ["Jason Momoa", "Rachel Nichols", "Stephen Lang", "Rose McGowan", "Saïd Taghmaoui", "Leo Howard", "Bob Sapp", "Ron Perlman", "Steven O'Donnell", "Nonso Anozie"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "The Conspirator",
		year: 2011,
		cast: ["James McAvoy", "Robin Wright", "Kevin Kline", "Evan Rachel Wood", "Danny Huston", "Justin Long", "Colm Meaney", "Tom Wilkinson"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "Contagion",
		year: 2011,
		cast: ["Marion Cotillard", "Matt Damon", "Laurence Fishburne", "Jude Law", "Gwyneth Paltrow", "Kate Winslet", "Bryan Cranston", "Jennifer Ehle", "Sanaa Lathan", "Amr Waked", "John Hawkes", "Demetri Martin"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Courageous",
		year: 2011,
		cast: ["Alex Kendrick", "Ken Bevel", "Kevin Downes", "Ben Davies", "Renee Jewell", "Elanor Brown", "Robert Amaya", "Angelita Nelson", "David Howze", "Tony \"T.C.\" Stallings"],
		genres: ["Drama"]
	},{ 
		title: "Cowboys & Aliens",
		year: 2011,
		cast: ["Daniel Craig", "Harrison Ford", "Olivia Wilde", "Ana de la Reguera", "Sam Rockwell", "Adam Beach", "Paul Dano", "Noah Ringer"],
		genres: ["Western"]
	},{ 
		title: "Crazy, Stupid, Love.",
		year: 2011,
		cast: ["Steve Carell", "Ryan Gosling", "Julianne Moore", "Emma Stone", "John Carroll Lynch", "Marisa Tomei", "Kevin Bacon", "Analeigh Tipton", "Liza Lapira", "Joey King", "Mekia Cox"],
		genres: ["Comedy"]
	},{ 
		title: "The Darkest Hour",
		year: 2011,
		cast: ["Emile Hirsch", "Olivia Thirlby", "Max Minghella", "Rachael Taylor", "Joel Kinnaman"],
		genres: ["Action", "Thriller", "Horror"]
	},{ 
		title: "Dead Stop",
		year: 2011,
		cast: ["Lauren Brady", "Mike Hardy", "Trevor Snarr"],
		genres: ["Horror"]
	},{ 
		title: "The Debt",
		year: 2011,
		cast: ["Helen Mirren", "Sam Worthington", "Jessica Chastain", "Jesper Christensen", "Marton Csokas", "Ciarán Hinds", "Tom Wilkinson"],
		genres: ["Drama", "Spy", "Thriller"]
	},{ 
		title: "The Descendants",
		year: 2011,
		cast: ["George Clooney", "Shailene Woodley", "Beau Bridges", "Judy Greer", "Matthew Lillard"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Devil's Double",
		year: 2011,
		cast: ["Dominic Cooper", "Philip Quast", "Ludivine Sagnier", "Mimoun Oaïssa", "Mehmet Ferda"],
		genres: ["Action", "Drama"]
	},{ 
		title: "Diary of a Wimpy Kid: Rodrick Rules",
		year: 2011,
		cast: ["Zachary Gordon", "Devon Bostick", "Rachael Harris", "Robert Capron", "Steve Zahn"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "The Dilemma",
		year: 2011,
		cast: ["Vince Vaughn", "Kevin James", "Jennifer Connelly", "Winona Ryder", "Channing Tatum", "Queen Latifah"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Dirty Girl",
		year: 2011,
		cast: ["Juno Temple", "Milla Jovovich", "William H. Macy", "Mary Steenburgen", "Dwight Yoakam", "and introducing Jeremy Dozier"],
		genres: ["Comedy"]
	},{ 
		title: "Dolphin Tale",
		year: 2011,
		cast: ["Harry Connick, Jr.", "Ashley Judd", "Nathan Gamble", "Kris Kristofferson", "Cozi Zuehldorff", "Morgan Freeman"],
		genres: ["Drama", "Family"]
	},{ 
		title: "Don't Be Afraid of the Dark",
		year: 2011,
		cast: ["Katie Holmes", "Guy Pearce", "Bailee Madison", "Jack Thompson"],
		genres: ["Horror"]
	},{ 
		title: "The Double",
		year: 2011,
		cast: ["Richard Gere", "Topher Grace", "Stephen Moyer", "Odette Yustman", "Stana Katic", "Chris Marquette", "Tamer Hassan", "and", "Michael Sheen"],
		genres: ["Spy"]
	},{ 
		title: "Dream House",
		year: 2011,
		cast: ["Daniel Craig", "Naomi Watts", "Rachel Weisz", "Marton Csokas", "Elias Koteas", "Jane Alexander", "Taylor Geare", "Rachel G. Fox", "Mark Wilson", "Jonathan Potts", "Lynne Griffin", "Gregory Smith", "Chris Owens", "Sarah Gadon"],
		genres: ["Horror"]
	},{ 
		title: "Drive",
		year: 2011,
		cast: ["Ryan Gosling", "Carey Mulligan", "Bryan Cranston", "Christina Hendricks", "Ron Perlman", "Oscar Isaac", "Albert Brooks"],
		genres: ["Action", "Drama"]
	},{ 
		title: "Drive Angry",
		year: 2011,
		cast: ["Nicolas Cage", "Amber Heard", "William Fichtner", "Billy Burke", "Charlotte Ross", "Christa Campbell", "Tom Atkins", "Katy Mixon", "Todd Farmer", "David Morse"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Dylan Dog: Dead of Night",
		year: 2011,
		cast: ["Brandon Routh", "Sam Huntington", "Anita Briem", "Peter Stormare", "Taye Diggs"],
		genres: ["Action", "Horror", "Comedy"]
	},{ 
		title: "The Eagle",
		year: 2011,
		cast: ["Channing Tatum", "Jamie Bell", "Donald Sutherland", "Mark Strong"],
		genres: ["Adventure", "Historical", "Drama"]
	},{ 
		title: "Everything Must Go",
		year: 2011,
		cast: ["Will Ferrell", "Rebecca Hall", "Michael Peña", "Christopher C. J. Wallace", "Glenn Howerton", "Stephen Root", "Laura Dern"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Extremely Loud and Incredibly Close",
		year: 2011,
		cast: ["Tom Hanks", "Sandra Bullock", "Thomas Horn", "Max von Sydow", "Viola Davis", "John Goodman", "Jeffrey Wright", "James Gandolfini"],
		genres: ["Drama"]
	},{ 
		title: "Fast Five",
		year: 2011,
		cast: ["Vin Diesel", "Paul Walker", "Jordana Brewster", "Tyrese Gibson", "Chris \"Ludacris\" Bridges", "Matt Schulze", "Sung Kang", "Dwayne Johnson"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Father of Invention",
		year: 2011,
		cast: ["Kevin Spacey", "Camilla Belle", "Heather Graham", "Johnny Knoxville", "with", "Craig Robinson", "and", "Virginia Madsen", "Michael Rosenbaum", "John Stamos", "Rhoda Griffis", "Jack McGee", "Danny Comden"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Fear of a Black Republican",
		year: 2011,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Final Destination 5",
		year: 2011,
		cast: ["Nicholas D'Agosto", "Emma Bell", "Miles Fisher", "Arlen Escarpeta", "with", "David Koechner", "and", "Tony Todd", "P. J. Byrne", "Courtney B. Vance", "Jacqueline MacInnes Wood"],
		genres: ["Supernatural", "Horror", "Thriller"]
	},{ 
		title: "Footloose",
		year: 2011,
		cast: ["Kenny Wormald", "Julianne Hough", "Andie MacDowell", "Dennis Quaid"],
		genres: ["Dance", "Drama", "Comedy", "Romance"]
	},{ 
		title: "Friends with Benefits",
		year: 2011,
		cast: ["Justin Timberlake", "Mila Kunis", "Patricia Clarkson", "Jenna Elfman", "Bryan Greenberg", "Richard Jenkins", "Woody Harrelson", "Emma Stone", "Nolan Gould", "Jason Segel", "Rashida Jones", "Andy Samberg", "Shaun White"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Fright Night",
		year: 2011,
		cast: ["Anton Yelchin", "Colin Farrell", "David Tennant", "Christopher Mintz-Plasse", "Toni Collette", "Imogen Poots", "Lisa Loeb", "Dave Franco", "Sandra Vergara"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "From Prada to Nada",
		year: 2011,
		cast: ["Camilla Belle", "Alexa Vega", "Wilmer Valderrama", "Nicholas D'Agosto", "April Bowlby", "Kuno Becker", "Adriana Barraza"],
		genres: ["Drama", "Romance", "Comedy"]
	},{ 
		title: "The Future",
		year: 2011,
		cast: ["Hamish Linklater", "Miranda July", "David Warshofsky", "Isabella Acres", "Joe Putterlik"],
		genres: ["Drama"]
	},{ 
		title: "The Girl with the Dragon Tattoo",
		year: 2011,
		cast: ["Daniel Craig", "Rooney Mara", "Christopher Plummer", "Stellan Skarsgård", "Steven Berkoff", "Robin Wright", "Yorick van Wageningen", "Joely Richardson"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Glee: The 3D Concert Movie",
		year: 2011,
		cast: ["Dianna Agron", "Chris Colfer", "Darren Criss", "Ashley Fink", "Kevin McHale", "Lea Michele", "Cory Monteith", "Heather Morris", "Chord Overstreet", "Amber Riley", "Naya Rivera", "Mark Salling", "Harry Shum, Jr.", "Jenna Ushkowitz", "Gwyneth Paltrow"],
		genres: ["Performance"]
	},{ 
		title: "Gnomeo and Juliet",
		year: 2011,
		cast: ["James McAvoy", "Emily Blunt", "Michael Caine", "Maggie Smith", "Jason Statham", "Patrick Stewart", "Ashley Jensen", "Stephen Merchant", "Matt Lucas", "Jim Cummings", "Julie Walters", "Richard Wilson", "Ozzy Osbourne", "Dolly Parton", "Hulk Hogan"],
		genres: ["Animated", "Family"]
	},{ 
		title: "A Good Old Fashioned Orgy",
		year: 2011,
		cast: ["Jason Sudeikis", "Leslie Bibb", "Lake Bell", "Michelle Borth", "Nick Kroll", "Tyler Labine", "Angela Sarafyan", "Lindsay Sloane", "Martin Starr", "Lucy Punch", "and", "Will Forte"],
		genres: ["Comedy"]
	},{ 
		title: "The Good Doctor",
		year: 2011,
		cast: ["Orlando Bloom", "Riley Keough", "Taraji P. Henson", "Rob Morrow", "Michael Peña"],
		genres: ["Thriller"]
	},{ 
		title: "The Greatest Movie Ever Sold",
		year: 2011,
		cast: ["A documentary about branding", "advertising and product placement that is financed and made possible by brands", "advertising and product placement."],
		genres: ["Documentary"]
	},{ 
		title: "The Green Hornet",
		year: 2011,
		cast: ["Seth Rogen", "Jay Chou", "Christoph Waltz", "Cameron Diaz", "Edward James Olmos", "David Harbour", "Tom Wilkinson", "Edward Furlong"],
		genres: ["Comedy", "Superhero"]
	},{ 
		title: "Green Lantern",
		year: 2011,
		cast: ["Ryan Reynolds", "Blake Lively", "Peter Sarsgaard", "Mark Strong", "Angela Bassett", "and", "Tim Robbins", "Temuera Morrison", "Taika Waititi", "Geoffrey Rush", "Michael Clarke Duncan"],
		genres: ["Superhero"]
	},{ 
		title: "Hall Pass",
		year: 2011,
		cast: ["Owen Wilson", "Jason Sudeikis"],
		genres: ["Comedy"]
	},{ 
		title: "The Hangover: Part II",
		year: 2011,
		cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis", "Ken Jeong", "Jeffrey Tambor", "with", "Justin Bartha", "and", "Paul Giamatti"],
		genres: ["Comedy"]
	},{ 
		title: "Hanna",
		year: 2011,
		cast: ["Saoirse Ronan", "Eric Bana", "Tom Hollander", "Olivia Williams", "Jason Flemyng", "and", "Cate Blanchett"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Happy Feet Two",
		year: 2011,
		cast: ["Elijah Wood", "Robin Williams", "Hank Azaria", "Alecia Moore (Pink)", "Brad Pitt", "Matt Damon", "Sofía Vergara", "Hugo Weaving", "Richard Carter", "Common", "Magda Szubanski", "Anthony LaPaglia"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Happythankyoumoreplease",
		year: 2011,
		cast: ["Josh Radnor", "Malin Åkerman", "Kate Mara", "Zoe Kazan", "Pablo Schreiber", "Tony Hale"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Harry Potter and the Deathly Hallows: Part 2",
		year: 2011,
		cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Helena Bonham Carter", "Robbie Coltrane", "Warwick Davis", "Ralph Fiennes", "Michael Gambon", "Brendan Gleeson", "Richard Griffiths", "John Hurt", "Jason Isaacs", "Alan Rickman", "Fiona Shaw", "Timothy Spall", "Imelda Staunton", "David Thewlis", "Julie Walters"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "The Heart Specialist",
		year: 2011,
		cast: ["Wood Harris", "Zoe Saldana", "Brian White", "Mýa", "Method Man", "Jasmine Guy", "Leon", "Ed Asner", "Jenifer Lewis", "Terrence J", "Marla Gibbs", "Nephew Tommy"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Help",
		year: 2011,
		cast: ["Jessica Chastain", "Viola Davis", "Bryce Dallas Howard", "Allison Janney", "Octavia Spencer", "Emma Stone", "Anna Camp", "Dana Ivey", "Leslie Jordan", "Brian Kerwin", "Chris Lowell", "David Oyelowo", "Sissy Spacek", "Cicely Tyson", "Mike Vogel"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Hesher",
		year: 2011,
		cast: ["Joseph Gordon-Levitt", "Devin Brochu", "Rainn Wilson", "and", "Natalie Portman", "Piper Laurie"],
		genres: ["Drama"]
	},{ 
		title: "Higher Ground",
		year: 2011,
		cast: ["Vera Farmiga", "Joshua Leonard", "Norbert Leo Butz", "Dagmara Dominczyk", "John Hawkes", "Bill Irwin", "Ebon Moss-Bachrach", "Donna Murphy"],
		genres: ["Drama"]
	},{ 
		title: "Hoodwinked Too! Hood vs. Evil",
		year: 2011,
		cast: ["Hayden Panettiere", "Glenn Close", "Patrick Warburton", "Joan Cusack", "Bill Hader", "Amy Poehler", "Andy Dick", "David Ogden Stiers", "Cory Edwards", "Martin Short", "Debra Wilson", "Brad Garrett", "Wayne Newton", "David Alan Grier", "Cheech Marin", "Tommy Chong", "Rob Paulsen", "Heidi Klum"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Hop",
		year: 2011,
		cast: ["James Marsden", "Russell Brand", "(voice)", "Kaley Cuoco", "Hank Azaria", "(voice)", "Gary Cole", "Elizabeth Perkins", "David Hasselhoff", "Chelsea Handler", "Hugh Laurie", "(voice)"],
		genres: ["Family", "Live Action"]
	},{ 
		title: "Horrible Bosses",
		year: 2011,
		cast: ["Jason Bateman", "Charlie Day", "Jason Sudeikis", "with", "Jennifer Aniston", "Colin Farrell", "Kevin Spacey", "Donald Sutherland", "and", "Jamie Foxx"],
		genres: ["Comedy"]
	},{ 
		title: "Hugo",
		year: 2011,
		cast: ["Ben Kingsley", "Sacha Baron Cohen", "Asa Butterfield", "Chloë Grace Moretz", "Ray Winstone", "Emily Mortimer", "and", "Jude Law", "Christopher Lee", "Helen McCrory", "Michael Stuhlbarg", "Marco Aponte", "Frances de la Tour", "Richard Griffiths", "Johnny Depp"],
		genres: ["Adventure", "Drama"]
	},{ 
		title: "I Am Number Four",
		year: 2011,
		cast: ["Alex Pettyfer", "Timothy Olyphant", "Teresa Palmer", "Dianna Agron", "Callan McAuliffe", "Kevin Durand"],
		genres: ["Science Fiction", "Teen"]
	},{ 
		title: "I Don't Know How She Does It",
		year: 2011,
		cast: ["Sarah Jessica Parker", "Pierce Brosnan", "Greg Kinnear", "Christina Hendricks", "Kelsey Grammer", "Seth Meyers", "Olivia Munn"],
		genres: ["Comedy"]
	},{ 
		title: "I Melt with You",
		year: 2011,
		cast: ["Thomas Jane", "Jeremy Piven", "Rob Lowe", "Christian McKay", "Carla Gugino", "Tom Bower", "Arielle Kebbel", "Sasha Grey"],
		genres: ["Thriller"]
	},{ 
		title: "The Ides of March",
		year: 2011,
		cast: ["Ryan Gosling", "George Clooney", "Philip Seymour Hoffman", "Paul Giamatti", "Marisa Tomei", "Jeffrey Wright", "and", "Evan Rachel Wood"],
		genres: ["Political", "Drama", "Political", "Thriller"]
	},{ 
		title: "Immortals",
		year: 2011,
		cast: ["Henry Cavill", "Stephen Dorff", "Luke Evans", "Isabel Lucas", "Kellan Lutz", "Freida Pinto", "Mickey Rourke"],
		genres: ["Action", "Drama", "Fantasy"]
	},{ 
		title: "In Time",
		year: 2011,
		cast: ["Amanda Seyfried", "Justin Timberlake", "Alex Pettyfer", "Cillian Murphy", "Olivia Wilde", "Matt Bomer", "Johnny Galecki", "Vincent Kartheiser", "Elena Satine"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "Inside Out",
		year: 2011,
		cast: ["Paul \"Triple H\" Levesque", "Michael Rapaport", "Parker Posey", "Julie White", "Michael Cudlitz", "and", "Bruce Dern"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Insidious",
		year: 2011,
		cast: ["Patrick Wilson", "Rose Byrne", "and", "Barbara Hershey"],
		genres: ["Horror"]
	},{ 
		title: "J. Edgar",
		year: 2011,
		cast: ["Leonardo DiCaprio", "Naomi Watts", "Armie Hammer", "Josh Lucas", "and", "Judi Dench", "Damon Herriman", "Ed Westwick", "Jeffrey Donovan", "Ken Howard", "Stephen Root", "Denis O'Hare", "Geoff Pierson", "Lea Thompson", "Gunner Wright"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Jack and Jill",
		year: 2011,
		cast: ["Adam Sandler", "Katie Holmes", "and", "Al Pacino"],
		genres: ["Comedy"]
	},{ 
		title: "Janie Jones",
		year: 2011,
		cast: ["Abigail Breslin", "Alessandro Nivola", "and", "Elisabeth Shue", "Brittany Snow", "Peter Stormare", "Joel Moore", "Frances Fisher", "Frank Whaley", "Rodney Eastman"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Judy Moody and the Not Bummer Summer",
		year: 2011,
		cast: ["Heather Graham", "Parris Mosteller", "Preston Bailey", "Garrett Ryan", "Taylar Hender", "Jaleel White", "Jordana Betty"],
		genres: ["Family"]
	},{ 
		title: "Jumping the Broom",
		year: 2011,
		cast: ["Angela Bassett", "Paula Patton", "Laz Alonso", "Loretta Devine", "Mike Epps", "Meagan Good", "Tasha Smith", "Julie Bowen", "Romeo Miller", "DeRay Davis", "Valarie Pettiford"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Just Go with It",
		year: 2011,
		cast: ["Adam Sandler", "Jennifer Aniston", "Brooklyn Decker", "Nick Swardson", "Nicole Kidman", "Dave Matthews", "Bailee Madison"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Justin Bieber: Never Say Never",
		year: 2011,
		cast: ["Chronicles the life of teen sensation", "Justin Bieber", "and his career. Shows concert footage of his 2010", "My World Tour", "."],
		genres: ["Performance", "Documentary"]
	},{ 
		title: "Kill the Irishman",
		year: 2011,
		cast: ["Ray Stevenson", "Vincent D'Onofrio", "Val Kilmer", "Christopher Walken", "Linda Cardellini", "Fionnula Flanagan", "Jason Butler Harner", "Vinnie Jones", "Paul Sorvino", "Marcus Thomas"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Killer Elite",
		year: 2011,
		cast: ["Jason Statham", "Clive Owen", "and", "Robert De Niro", "Dominic Purcell", "Aden Young", "Yvonne Strahovski", "Ben Mendelsohn", "Adewale Akinnuoye-Agbaje", "Grant Bowler", "Matthew Nable"],
		genres: ["Action"]
	},{ 
		title: "Kung Fu Panda 2",
		year: 2011,
		cast: ["Jack Black", "Dustin Hoffman", "Angelina Jolie", "Ian McShane", "Seth Rogen", "Lucy Liu", "David Cross", "James Hong", "Jackie Chan", "Victor Garber", "Michelle Yeoh", "Dennis Haysbert", "Gary Oldman", "Danny McBride", "James Woods", "Jean-Claude Van Damme"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Larry Crowne",
		year: 2011,
		cast: ["Tom Hanks", "Julia Roberts", "Bryan Cranston", "Cedric the Entertainer", "Taraji P. Henson", "Gugu Mbatha-Raw", "Wilmer Valderrama", "Pam Grier", "Rita Wilson", "George Takei", "Rob Riggle"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Life in a Day",
		year: 2011,
		cast: ["Shot by filmmakers all over the world through YouTube", "it serves as a time capsule to show future generations what it was like to be alive on the 24th of July 2010."],
		genres: ["Documentary"]
	},{ 
		title: "Like Crazy",
		year: 2011,
		cast: ["Anton Yelchin", "Felicity Jones", "Jennifer Lawrence", "Charlie Bewley", "Alex Kingston", "Oliver Muirhead", "Finola Hughes", "Chris Messina", "Ben York Jones", "Jamie Thomas King"],
		genres: ["Drama"]
	},{ 
		title: "Limitless",
		year: 2011,
		cast: ["Bradley Cooper", "Abbie Cornish", "Robert De Niro", "Andrew Howard", "Anna Friel"],
		genres: ["Thriller"]
	},{ 
		title: "The Lincoln Lawyer",
		year: 2011,
		cast: ["Matthew McConaughey", "Marisa Tomei", "Ryan Phillippe", "Josh Lucas", "John Leguizamo", "Michael Peña", "Frances Fisher", "Bob Gunton", "Bryan Cranston", "William H. Macy"],
		genres: ["Mystery", "Suspense", "Thriller"]
	},{ 
		title: "Lucky",
		year: 2011,
		cast: ["Colin Hanks", "Ari Graynor", "Ann-Margret", "Mimi Rogers", "Jeffrey Tambor"],
		genres: ["Comedy"]
	},{ 
		title: "Machine Gun Preacher",
		year: 2011,
		cast: ["Gerard Butler", "Michael Shannon", "Michelle Monaghan", "Souléymane Sy Savané", "Madeline Carroll", "Kathy Baker"],
		genres: ["Action", "Biography"]
	},{ 
		title: "Madea's Big Happy Family",
		year: 2011,
		cast: ["Loretta Devine", "Shad \"Bow Wow\" Moss", "David Mann", "Cassi Davis", "Tamela Mann", "Lauren London", "Isaiah Mustafa", "Rodney Perry", "Shannon Kane", "and Tyler Perry"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Margaret",
		year: 2011,
		cast: ["Anna Paquin", "J. Smith-Cameron", "Jean Reno", "Jeannie Berlin", "Allison Janney", "Matthew Broderick", "Mark Ruffalo", "Matt Damon", "Kieran Culkin", "Olivia Thirlby", "John Gallagher, Jr.", "Rosemarie DeWitt", "Matt Bush"],
		genres: ["Drama"]
	},{ 
		title: "Margin Call",
		year: 2011,
		cast: ["Kevin Spacey", "Paul Bettany", "Jeremy Irons", "Zachary Quinto", "Penn Badgley", "Simon Baker", "Mary McDonnell", "Demi Moore", "Stanley Tucci"],
		genres: ["Drama"]
	},{ 
		title: "Mars Needs Moms",
		year: 2011,
		cast: ["Seth Green", "(Seth Dusky (voice))", "Dan Fogler", "Elisabeth Harnois", "Mindy Sterling", "Joan Cusack"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "Martha Marcy May Marlene",
		year: 2011,
		cast: ["Elizabeth Olsen", "Brady Corbet", "Hugh Dancy", "John Hawkes", "Louisa Krause", "Sarah Paulson"],
		genres: ["Thriller"]
	},{ 
		title: "The Mechanic",
		year: 2011,
		cast: ["Jason Statham", "Ben Foster", "Donald Sutherland"],
		genres: ["Action"]
	},{ 
		title: "Midnight in Paris",
		year: 2011,
		cast: ["Kathy Bates", "Adrien Brody", "Carla Bruni", "Marion Cotillard", "Rachel McAdams", "Michael Sheen", "Owen Wilson"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Mission: Impossible – Ghost Protocol",
		year: 2011,
		cast: ["Tom Cruise", "Jeremy Renner", "Simon Pegg", "Paula Patton", "Michael Nyqvist", "Vladimir Mashkov", "Samuli Edelmann", "Anil Kapoor", "Josh Holloway", "Léa Seydoux", "Tom Wilkinson"],
		genres: ["Action", "Spy"]
	},{ 
		title: "Moneyball",
		year: 2011,
		cast: ["Brad Pitt", "Jonah Hill", "Philip Seymour Hoffman", "Robin Wright", "Chris Pratt", "Casey Bond", "Stephen Bishop", "Royce Clayton", "David Hutchinson", "Kathryn Morris"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Money Matters",
		year: 2011,
		cast: ["Aunjanue Ellis", "Terri Abney", "James Whalen", "Victoria Wallace", "Jaben Early", "London K. Powell", "Michael S. Wright", "Antonio Lamberti"],
		genres: ["Drama"]
	},{ 
		title: "Monte Carlo",
		year: 2011,
		cast: ["Selena Gomez", "Leighton Meester", "Katie Cassidy", "Cory Monteith", "Andie MacDowell", "Brett Cullen", "Catherine Tate", "Luke Bracey", "Pierre Boulanger"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Mr. Popper's Penguins",
		year: 2011,
		cast: ["Jim Carrey", "Carla Gugino", "Philip Baker Hall", "Angela Lansbury", "Clark Gregg", "Madeline Carroll", "Maxwell Perry Cotton", "Ophelia Lovibond", "Dominic Chianese"],
		genres: ["Family"]
	},{ 
		title: "The Muppets",
		year: 2011,
		cast: ["Jason Segel", "Amy Adams", "Chris Cooper", "Rashida Jones"],
		genres: ["Comedy", "Musical"]
	},{ 
		title: "The Music Never Stopped",
		year: 2011,
		cast: ["J. K. Simmons", "Lou Taylor Pucci", "Cara Seymour", "Julia Ormond", "Tammy Blanchard", "Mía Maestro", "Scott Adsit", "James Urbaniak"],
		genres: ["Drama"]
	},{ 
		title: "New Year's Eve",
		year: 2011,
		cast: ["Halle Berry", "Jessica Biel", "Jon Bon Jovi", "Abigail Breslin", "Chris \"Ludacris\" Bridges", "Robert De Niro", "Josh Duhamel", "Zac Efron", "Héctor Elizondo", "Katherine Heigl", "Ashton Kutcher", "Seth Meyers", "Lea Michele", "Sarah Jessica Parker", "Michelle Pfeiffer", "Til Schweiger", "Hilary Swank", "Sofía Vergara"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "No Strings Attached",
		year: 2011,
		cast: ["Natalie Portman", "Ashton Kutcher", "Cary Elwes", "Kevin Kline", "Greta Gerwig", "Lake Bell", "Chris \"Ludacris\" Bridges"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "One Day",
		year: 2011,
		cast: ["Anne Hathaway", "Jim Sturgess", "Romola Garai", "Rafe Spall", "Ken Stott", "Patricia Clarkson", "Jodie Whittaker", "Jamie Sives", "Georgia King"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Our Idiot Brother",
		year: 2011,
		cast: ["Paul Rudd", "Elizabeth Banks", "Zooey Deschanel", "Emily Mortimer", "Steve Coogan", "Hugh Dancy", "Kathryn Hahn", "Rashida Jones", "Shirley Knight", "T. J. Miller", "Adam Scott"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Page One: A Year Inside the New York Times",
		year: 2011,
		cast: ["Unprecedented access to the New York Times newsroom yields a complex view of the transformation of a media landscape fraught with both peril and opportunity."],
		genres: ["Documentary"]
	},{ 
		title: "Paranormal Activity 3",
		year: 2011,
		cast: ["Katie Featherston", "Sprague Grayden", "Brian Boland", "Lauren Bittner", "Christopher Nicholas Smith", "Mark Fredrichs", "Chloe Cserngey", "Jessica Tyler Brown"],
		genres: ["Supernatural", "Horror"]
	},{ 
		title: "Paul",
		year: 2011,
		cast: ["Simon Pegg", "Nick Frost", "Jason Bateman", "Kristen Wiig", "Sigourney Weaver", "Seth Rogen", "(voice)", "Bill Hader", "Jane Lynch", "Jeffrey Tambor"],
		genres: ["Comedy"]
	},{ 
		title: "Pearl Jam Twenty",
		year: 2011,
		cast: ["A rockumentary based on influential rock band Pearl Jam that marks their 20th anniversary in the year 2011."],
		genres: ["Musical", "Documentary"]
	},{ 
		title: "Peep World",
		year: 2011,
		cast: ["Judy Greer", "Michael C. Hall", "Taraji P. Henson", "Kate Mara", "Ron Rifkin", "Ben Schwartz", "Sarah Silverman", "Lesley Ann Warren", "Rainn Wilson"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Perfect Host",
		year: 2011,
		cast: ["David Hyde Pierce", "Clayne Crawford", "Nathaniel Parker", "Megahn Perry", "and", "Helen Reddy"],
		genres: ["Comedy", "Thriller"]
	},{ 
		title: "Pirates of the Caribbean: On Stranger Tides",
		year: 2011,
		cast: ["Johnny Depp", "Penélope Cruz", "Ian McShane", "Kevin McNally", "and", "Geoffrey Rush"],
		genres: ["Action", "Adventure", "Family"]
	},{ 
		title: "Priest",
		year: 2011,
		cast: ["Paul Bettany", "Karl Urban", "Cam Gigandet", "Maggie Q", "Lily Collins", "Stephen Moyer", "Christopher Plummer"],
		genres: ["Horror"]
	},{ 
		title: "Prom",
		year: 2011,
		cast: ["Aimee Teegarden", "Nicholas Braun", "Dean Norris", "Danielle Campbell", "Cameron Monaghan", "Christine Elise McCarthy", "Raini Rodriguez", "Jere Burns", "Aimee-Lynn Chadwick", "Yin Chang", "Allie Trimm", "Jared Kusnitz", "Thomas McDonell"],
		genres: ["Romance", "Comedy", "Teen"]
	},{ 
		title: "Puncture",
		year: 2011,
		cast: ["Chris Evans", "Mark Kassen", "Brett Cullen", "Marshall Bell", "Michael Biehn", "Jesse L. Martin", "Roxanna Hope", "Tess Parker", "Kate Burton", "Vinessa Shaw"],
		genres: ["Legal", "Drama"]
	},{ 
		title: "Puss in Boots",
		year: 2011,
		cast: ["Antonio Banderas", "Salma Hayek", "Zach Galifianakis", "Billy Bob Thornton", "Amy Sedaris", "Walt Dohrn", "(narrator)", "Zeus Mendoza", "Constance Marie"],
		genres: ["Adventure", "Animated"]
	},{ 
		title: "Rango",
		year: 2011,
		cast: ["Johnny Depp", "Isla Fisher", "Abigail Breslin", "Alfred Molina", "Bill Nighy", "Harry Dean Stanton", "Ray Winstone", "Timothy Olyphant"],
		genres: ["Animated", "Family", "Western"]
	},{ 
		title: "Real Steel",
		year: 2011,
		cast: ["Hugh Jackman", "Dakota Goyo", "Evangeline Lilly", "Kevin Durand", "Anthony Mackie", "James Rebhorn", "Rima Fakih", "Rick Yune"],
		genres: ["Action", "Drama"]
	},{ 
		title: "Red Riding Hood",
		year: 2011,
		cast: ["Amanda Seyfried", "Gary Oldman", "Billy Burke", "Shiloh Fernandez", "Max Irons", "Virginia Madsen", "Lukas Haas", "Julie Christie"],
		genres: ["Fantasy", "Romance", "Horror"]
	},{ 
		title: "Red State",
		year: 2011,
		cast: ["Michael Angarano", "Kerry Bishé", "Nicholas Braun", "Kyle Gallner", "Ralph Garman", "John Goodman", "Matt L. Jones", "Melissa Leo", "James Parks", "Michael Parks", "Kevin Pollak", "Haley Ramm", "Stephen Root"],
		genres: ["Horror"]
	},{ 
		title: "Restless",
		year: 2011,
		cast: ["Henry Hopper", "Mia Wasikowska", "Schuyler Fisk", "Jane Adams", "Chin Han", "Ryō Kase", "Lusia Strus"],
		genres: ["Drama"]
	},{ 
		title: "The Reunion",
		year: 2011,
		cast: ["John Cena", "Ethan Embry", "Michael Rispoli", "Boyd Holbrook", "Gregg Henry", "Lela Loren", "Jack Conley", "Amy Smart"],
		genres: ["Action"]
	},{ 
		title: "Rio",
		year: 2011,
		cast: ["Jesse Eisenberg", "Anne Hathaway", "George Lopez", "Jemaine Clement", "Jake T. Austin", "Leslie Mann", "Tracy Morgan", "will.i.am", "Jamie Foxx"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Rise of the Planet of the Apes",
		year: 2011,
		cast: ["James Franco", "Freida Pinto", "Andy Serkis", "Tom Felton", "David Hewlett", "Chelah Horsdal", "Brian Cox", "Jamie Harris", "Tyler Labine", "David Oyelowo", "John Lithgow"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Rite",
		year: 2011,
		cast: ["Anthony Hopkins", "Colin O'Donoghue", "Maria Grazia Cucinotta", "Alice Braga", "Ciarán Hinds", "Toby Jones", "Chris Marquette", "Rutger Hauer", "Franco Nero"],
		genres: ["Horror"]
	},{ 
		title: "The Roommate",
		year: 2011,
		cast: ["Leighton Meester", "Minka Kelly", "Cam Gigandet", "Aly Michalka", "Danneel Harris", "Frances Fisher", "Billy Zane"],
		genres: ["Thriller"]
	},{ 
		title: "The Rum Diary",
		year: 2011,
		cast: ["Johnny Depp", "Aaron Eckhart", "Michael Rispoli", "Amber Heard", "Richard Jenkins", "and", "Giovanni Ribisi", "Amaury Nolasco", "Marshall Bell", "Bill Smitrovich", "Julian Holloway", "Karen Austin", "Jason Smith"],
		genres: ["Drama", "Comedy", "Thriller"]
	},{ 
		title: "Sanctum",
		year: 2011,
		cast: ["Richard Roxburgh", "Rhys Wakefield", "Alice Parkinson", "Dan Wyllie", "Ioan Gruffudd"],
		genres: ["Adventure", "Disaster"]
	},{ 
		title: "Scream 4",
		year: 2011,
		cast: ["Neve Campbell", "Courteney Cox", "David Arquette", "Emma Roberts", "Hayden Panettiere", "Anthony Anderson", "Alison Brie", "Adam Brody", "Rory Culkin", "Marielle Jaffe", "Erik Knudsen", "Mary McDonnell", "Brittany Robertson", "Marley Shelton", "Aimee Teegarden", "Nico Tortorella", "Anna Paquin", "Kristen Bell", "Shenae Grimes", "Lucy Hale"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Seance: The Summoning",
		year: 2011,
		cast: ["Bobby Campo", "Chris Olivero", "Cortney Palm"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Season of the Witch",
		year: 2011,
		cast: ["Nicolas Cage", "Ron Perlman", "Stephen Campbell Moore", "Claire Foy", "Stephen Graham", "Ulrich Thomsen", "Robert Sheehan", "Christopher Lee"],
		genres: ["Action", "Fantasy"]
	},{ 
		title: "Seven Days in Utopia",
		year: 2011,
		cast: ["Robert Duvall", "Lucas Black", "Melissa Leo", "Deborah Ann Woll", "Brian Geraghty", "Joseph Lyle Taylor", "Jerry Ferrara", "K. J. Choi", "Kathy Baker"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Shark Night 3D",
		year: 2011,
		cast: ["Sara Paxton", "Dustin Milligan", "Katharine McPhee", "Alyssa Diaz", "Joel David Moore", "Joshua Leonard", "Chris Zylka", "Chris Carmack", "Donal Logue"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Sherlock Holmes: A Game of Shadows",
		year: 2011,
		cast: ["Robert Downey, Jr.", "Jude Law", "Noomi Rapace", "Jared Harris", "Eddie Marsan", "Rachel McAdams", "Stephen Fry", "Geraldine James", "Kelly Reilly"],
		genres: ["Action", "Mystery"]
	},{ 
		title: "The Sitter",
		year: 2011,
		cast: ["Jonah Hill", "Max Records", "Ari Graynor", "J. B. Smoove", "Sam Rockwell"],
		genres: ["Comedy"]
	},{ 
		title: "Skateland",
		year: 2011,
		cast: ["Shiloh Fernandez", "Ashley Greene", "Heath Freeman", "Brett Cullen", "James LeGros", "Melinda McGraw", "Taylor Handley", "Haley Ramm"],
		genres: ["Drama", "Teen"]
	},{ 
		title: "The Smurfs",
		year: 2011,
		cast: ["Neil Patrick Harris", "Jayma Mays", "George Lopez", "(voice)", "Katy Perry", "(voice)", "Hank Azaria", "Sofía Vergara", "Alan Cumming", "(voice)", "Jonathan Winters", "(voice)", "Anton Yelchin", "(voice)", "Paul Reubens", "(voice)", "John Oliver", "(voice)", "Kenan Thompson", "(voice)", "Fred Armisen", "(voice)", "B. J. Novak", "(voice)", "Jeff Foxworthy", "(voice)", "Tim Gunn", "Wolfgang Puck", "(voice)"],
		genres: ["Family", "Live Action"]
	},{ 
		title: "Snow Flower and the Secret Fan",
		year: 2011,
		cast: ["Gianna Jun", "Li Bingbing", "Vivian Wu", "Jiang Wu", "Russell Wong", "Coco Chiang", "Jingyu Hu", "Archie Kao", "Jennifer Lim (voice)", "Christina Y. Jun (voice)", "Hugh Jackman"],
		genres: ["Drama"]
	},{ 
		title: "Something Borrowed",
		year: 2011,
		cast: ["Kate Hudson", "Ginnifer Goodwin", "John Krasinski", "Colin Egglesfield", "Steve Howey"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Son of No One",
		year: 2011,
		cast: ["Channing Tatum", "Tracy Morgan", "Katie Holmes", "Ray Liotta", "Juliette Binoche", "Al Pacino"],
		genres: ["Action", "Crime", "Drama"]
	},{ 
		title: "Soul Surfer",
		year: 2011,
		cast: ["AnnaSophia Robb", "Helen Hunt", "Lorraine Nicholson", "Dennis Quaid", "Carrie Underwood"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Source Code",
		year: 2011,
		cast: ["Jake Gyllenhaal", "Michelle Monaghan", "Vera Farmiga", "Jeffrey Wright"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "Spy Kids: All the Time in the World",
		year: 2011,
		cast: ["Jessica Alba", "Joel McHale", "Alexa Vega", "Daryl Sabara", "Rowan Blanchard", "Mason Cook", "Ricky Gervais", "(voice)", "Jeremy Piven", "Danny Trejo"],
		genres: ["Family", "Spy"]
	},{ 
		title: "Straw Dogs",
		year: 2011,
		cast: ["James Marsden", "Kate Bosworth", "Alexander Skarsgård", "Dominic Purcell", "Laz Alonso", "Willa Holland", "and", "James Woods", "Anson Mount", "Walton Goggins", "Rhys Coiro", "Drew Powell"],
		genres: ["Thriller"]
	},{ 
		title: "Sucker Punch",
		year: 2011,
		cast: ["Emily Browning", "Abbie Cornish", "Jena Malone", "Vanessa Hudgens", "Jamie Chung", "Oscar Isaac", "Carla Gugino", "Jon Hamm", "Scott Glenn"],
		genres: ["Action", "Fantasy"]
	},{ 
		title: "Super",
		year: 2011,
		cast: ["Rainn Wilson", "Ellen Page", "Liv Tyler", "Kevin Bacon", "Nathan Fillion", "Gregg Henry", "Michael Rooker", "Andre Royo", "Sean Gunn", "Stephen Blackehart", "Linda Cardellini"],
		genres: ["Comedy", "Superhero"]
	},{ 
		title: "Super 8",
		year: 2011,
		cast: ["Joel Courtney", "Elle Fanning", "Kyle Chandler", "Ron Eldard", "Noah Emmerich", "Gabriel Basso", "Riley Griffiths", "Ryan Lee", "Zach Mills", "Amanda Michalka"],
		genres: ["Science Fiction"]
	},{ 
		title: "Take Me Home Tonight",
		year: 2011,
		cast: ["Topher Grace", "Anna Faris", "Teresa Palmer", "Dan Fogler", "Michelle Trachtenberg", "Chris Pratt", "Robert Hoffman", "Lucy Punch", "Michael Ian Black", "Lauren Conrad", "Audrina Patridge", "Heidi Montag", "Demetri Martin"],
		genres: ["Comedy"]
	},{ 
		title: "Take Shelter",
		year: 2011,
		cast: ["Michael Shannon", "Jessica Chastain", "Shea Whigham", "Katy Mixon", "Kathy Baker", "Ray McKinnon", "Lisa Gay Hamilton"],
		genres: ["Drama"]
	},{ 
		title: "Texas Killing Fields",
		year: 2011,
		cast: ["Sam Worthington", "Jeffrey Dean Morgan", "Jessica Chastain", "Chloë Grace Moretz", "Jason Clarke", "Annabeth Gish", "Sheryl Lee", "Stephen Graham"],
		genres: ["Crime"]
	},{ 
		title: "That's What I Am",
		year: 2011,
		cast: ["Ed Harris", "Chase Ellison", "Molly Parker", "Daniel Roebuck", "Randy Orton", "Daniel Yelsky", "Alexander Walters", "Mia Rose Frampton", "Amy Madigan"],
		genres: ["Drama", "Comedy", "Family"]
	},{ 
		title: "The Thing",
		year: 2011,
		cast: ["Mary Elizabeth Winstead", "Joel Edgerton", "Ulrich Thomsen", "Adewale Akinnuoye-Agbaje", "Eric Christian Olsen", "Kim Bubbs", "Jørgen Langhelle", "Jonathan Lloyd Walker", "Trond Espen Seim", "Stig Henrik Hoff", "Carsten Bjørnlund", "Jan Gunnar Røise", "Paul Braunstein"],
		genres: ["Horror"]
	},{ 
		title: "Thor",
		year: 2011,
		cast: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Stellan Skarsgård", "Colm Feore", "Ray Stevenson", "Idris Elba", "Kat Dennings", "Rene Russo", "Anthony Hopkins"],
		genres: ["Superhero"]
	},{ 
		title: "The Three Musketeers",
		year: 2011,
		cast: ["Logan Lerman", "Milla Jovovich", "Matthew Macfadyen", "Ray Stevenson", "Luke Evans", "Mads Mikkelsen", "Gabriella Wilde", "James Corden", "Juno Temple", "Freddie Fox", "Til Schweiger", "Orlando Bloom", "Christoph Waltz"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Tower Heist",
		year: 2011,
		cast: ["Ben Stiller", "Eddie Murphy", "Casey Affleck", "Alan Alda", "Matthew Broderick", "Téa Leoni", "Michael Peña", "Gabourey Sidibe", "Judd Hirsch"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Transformers: Dark of the Moon",
		year: 2011,
		cast: ["Shia LaBeouf", "Josh Duhamel", "John Turturro", "Tyrese Gibson", "Rosie Huntington-Whiteley", "Patrick Dempsey", "Kevin Dunn", "Julie White", "John Malkovich", "Frances McDormand"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Tree of Life",
		year: 2011,
		cast: ["Brad Pitt", "Sean Penn", "Jessica Chastain"],
		genres: ["Drama"]
	},{ 
		title: "Trespass",
		year: 2011,
		cast: ["Nicolas Cage", "Nicole Kidman", "Ben Mendelsohn", "Cam Gigandet", "Liana Liberato", "Jordana Spiro", "Dash Mihok", "Emily Meade", "Nico Tortorella"],
		genres: ["Thriller"]
	},{ 
		title: "Unknown",
		year: 2011,
		cast: ["Liam Neeson", "Diane Kruger", "January Jones", "Frank Langella", "Aidan Quinn", "Bruno Ganz"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "A Very Harold & Kumar 3D Christmas",
		year: 2011,
		cast: ["John Cho", "Kal Penn", "and", "Neil Patrick Harris"],
		genres: ["Comedy"]
	},{ 
		title: "Waiting for Forever",
		year: 2011,
		cast: ["Rachel Bilson", "Tom Sturridge", "Scott Mechlowicz", "Richard Jenkins", "Nikki Blonsky", "Matthew Davis", "Jaime King", "Blythe Danner"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Warrior",
		year: 2011,
		cast: ["Joel Edgerton", "Tom Hardy", "Jennifer Morrison", "Frank Grillo", "Nick Nolte", "Kurt Angle", "Noah Emmerich", "Kevin Dunn", "Denzel Whitaker", "Erik Apple", "Vanessa Martinez", "Nate Marquardt", "Anthony Johnson"],
		genres: ["Action", "Drama"]
	},{ 
		title: "Water for Elephants",
		year: 2011,
		cast: ["Robert Pattinson", "Reese Witherspoon", "Christoph Waltz", "Hal Holbrook"],
		genres: ["Drama"]
	},{ 
		title: "The Way",
		year: 2011,
		cast: ["Martin Sheen", "Deborah Kara Unger", "Yorick van Wageningen", "James Nesbitt", "Tchéky Karyo", "Emilio Estevez"],
		genres: ["Drama"]
	},{ 
		title: "We Bought a Zoo",
		year: 2011,
		cast: ["Matt Damon", "Scarlett Johansson", "Thomas Haden Church", "Patrick Fugit", "Elle Fanning", "John Michael Higgins", "Colin Ford", "Stephanie Szostak", "Angus Macfadyen", "Carla Gallo", "Peter Riegert", "J. B. Smoove"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "What's Your Number?",
		year: 2011,
		cast: ["Anna Faris", "Chris Evans", "Ari Graynor", "Blythe Danner", "Ed Begley, Jr.", "Joel McHale", "Oliver Jackson-Cohen", "Zachary Quinto", "Chris Pratt", "Andy Samberg", "Thomas Lennon", "Mike Vogel", "Martin Freeman", "Anthony Mackie", "Dave Annable"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Win Win",
		year: 2011,
		cast: ["Paul Giamatti", "Amy Ryan", "Bobby Cannavale", "Jeffrey Tambor", "Burt Young", "Melanie Lynskey"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Winnie the Pooh",
		year: 2011,
		cast: ["Jim Cummings", "Tom Kenny", "Craig Ferguson", "Travis Oates", "Bud Luckey", "Jack Boulter", "Kristen Anderson-Lopez", "Wyatt Dean Hall", "John Cleese", "(narrator)"],
		genres: ["Animated", "Family"]
	},{ 
		title: "X-Men: First Class",
		year: 2011,
		cast: ["James McAvoy", "Michael Fassbender", "Kevin Bacon", "January Jones", "Rose Byrne", "Nicholas Hoult", "Jennifer Lawrence", "Oliver Platt", "Ray Wise", "Zoë Kravitz", "Caleb Landry Jones", "Lucas Till", "Edi Gathegi", "Jason Flemyng"],
		genres: ["Superhero"]
	},{ 
		title: "Young Adult",
		year: 2011,
		cast: ["Charlize Theron", "Patton Oswalt", "Patrick Wilson", "Elizabeth Reaser", "J. K. Simmons", "Collette Wolfe", "Hettienne Park"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Your Highness",
		year: 2011,
		cast: ["Danny McBride", "James Franco", "Natalie Portman", "Zooey Deschanel", "Justin Theroux", "Toby Jones", "Damian Lewis", "Michael Clarke Duncan"],
		genres: ["Comedy", "Fantasy"]
	},{ 
		title: "Zookeeper",
		year: 2011,
		cast: ["Kevin James", "Rosario Dawson", "Leslie Bibb", "Ken Jeong", "Donnie Wahlberg", "Joe Rogan", "Thomas Gottschalk", "Adam Sandler", "(voice)", "Sylvester Stallone", "(voice)", "Nick Nolte", "(voice)", "Don Rickles", "(voice)", "Judd Apatow", "(voice)", "Jon Favreau", "(voice)", "Faizon Love", "(voice)", "Cher", "(voice)", "Maya Rudolph", "(voice)"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "12/12/12",
		year: 2012,
		cast: ["Sara Malakul Lane", "Jesus Guevara", "Steve Hanks", "Carl Donelson", "Laura Ramos"],
		genres: ["Horror"]
	},{ 
		title: "2-Headed Shark Attack",
		year: 2012,
		cast: ["Carmen Electra", "Charlie O'Connell", "Brooke Hogan", "Christina Bach", "David Gallegos"],
		genres: ["Horror"]
	},{ 
		title: "21 Jump Street",
		year: 2012,
		cast: ["Jonah Hill", "Channing Tatum", "Brie Larson", "Ice Cube", "Ellie Kemper", "Dave Franco", "Rob Riggle", "Johnny Depp"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "28 Hotel Rooms",
		year: 2012,
		cast: ["Marin Ireland", "Chris Messina", "Robert Deamer", "Brett Collier"],
		genres: ["Thriller"]
	},{ 
		title: "3,2,1... Frankie Go Boom",
		year: 2012,
		cast: ["Charlie Hunnam", "Chris O'Dowd", "Lizzy Caplan", "Nora Dunn", "Whitney Cummings", "Ron Perlman", "Chris Noth"],
		genres: ["Comedy"]
	},{ 
		title: "40 Days and Nights",
		year: 2012,
		cast: ["Monica Keena", "Christianna Carmine", "Emily Sandifer", "Alex Carter"],
		genres: ["Horror"]
	},{ 
		title: "40 Point Plan",
		year: 2012,
		cast: ["Dave Nemeth", "Tisha Rivera", "Joe Comino", "Nathan Kotzur", "Christianne Christiensen"],
		genres: ["Documentary"]
	},{ 
		title: "The ABCs of Death",
		year: 2012,
		cast: ["See Segments"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "About Cherry",
		year: 2012,
		cast: ["Ashley Hinshaw", "James Franco", "Dev Patel", "Heather Graham", "Lili Taylor", "Diane Farr"],
		genres: ["Drama"]
	},{ 
		title: "Abraham Lincoln vs. Zombies",
		year: 2012,
		cast: ["Bill Oberst Jr.", "Jason Hughley", "Jason Vail", "Don McGraw", "Christopher Marrone"],
		genres: ["Satire", "Horror"]
	},{ 
		title: "Abraham Lincoln: Vampire Hunter",
		year: 2012,
		cast: ["Benjamin Walker", "Dominic Cooper", "Anthony Mackie", "Mary Elizabeth Winstead", "Rufus Sewell", "Marton Csokas"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Act of Valor",
		year: 2012,
		cast: ["Active Duty U.S. Navy SEALs", "Roselyn Sánchez", "Jason Cottle", "Alex Veadov", "Nestor Serrano", "Emilio Rivera"],
		genres: ["Action"]
	},{ 
		title: "After",
		year: 2012,
		cast: ["Steven Strait", "Karolina Wydra", "Sandra Lafferty", "Madison Lintz"],
		genres: ["Thriller"]
	},{ 
		title: "The Aggression Scale",
		year: 2012,
		cast: ["Ray Wise", "Dana Ashbrook", "Derek Mears", "Fabianne Therese", "Ryan Hartwig"],
		genres: ["Action"]
	},{ 
		title: "Air Collision",
		year: 2012,
		cast: ["Reginald VelJohnson", "Jordan Ladd", "Gerald Webb"],
		genres: ["Action"]
	},{ 
		title: "Alex Cross",
		year: 2012,
		cast: ["Tyler Perry", "Matthew Fox", "Rachel Nichols", "Jean Reno", "Giancarlo Esposito", "Edward Burns", "John C. McGinley", "Cicely Tyson", "Chad Lindberg", "Carmen Ejogo", "Stephanie Jacobsen", "Yara Shahidi"],
		genres: ["Thriller"]
	},{ 
		title: "Alien Origin",
		year: 2012,
		cast: ["Chelsea Vincent", "Peter Pedrero", "Philip Coc", "Trey McCurley"],
		genres: ["Horror"]
	},{ 
		title: "Allegiance",
		year: 2012,
		cast: ["Bow Wow"],
		genres: ["War", "Drama"]
	},{ 
		title: "Alter Egos",
		year: 2012,
		cast: ["Sean Lennon", "Danny Masterson", "Geneva Carr", "Kris Lemche", "John Ventimiglia", "Christine Evangelista"],
		genres: ["Comedy"]
	},{ 
		title: "The Amazing Adventures of the Living Corpse",
		year: 2012,
		cast: ["Michael Villar", "Marshall Hilton", "Ryan McGivern"],
		genres: ["Horror"]
	},{ 
		title: "The Amazing Spider-Man",
		year: 2012,
		cast: ["Andrew Garfield", "Emma Stone", "Rhys Ifans", "Denis Leary", "Campbell Scott", "Irrfan Khan", "Martin Sheen", "Sally Field", "Chris Zylka"],
		genres: ["Superhero"]
	},{ 
		title: "American Reunion",
		year: 2012,
		cast: ["Jason Biggs", "Alyson Hannigan", "Thomas Ian Nicholas", "Chris Klein", "Seann William Scott", "Eddie Kaye Thomas", "Tara Reid", "Shannon Elizabeth", "Natasha Lyonne", "Mena Suvari", "Chris Owen", "Eugene Levy", "Jennifer Coolidge", "John Cho", "Katrina Bowden", "Jay Harrington"],
		genres: ["Comedy"]
	},{ 
		title: "Any Day Now",
		year: 2012,
		cast: ["Alan Cumming", "Garret Dillahunt", "Gregg Henry", "Jamie Anne Allman", "Chris Mulkey"],
		genres: ["Drama"]
	},{ 
		title: "Apostle Peter and the Last Supper",
		year: 2012,
		cast: ["Robert Loggia", "Bruce Marchiano", "Sarah Prikryl"],
		genres: ["Drama"]
	},{ 
		title: "The Apparition",
		year: 2012,
		cast: ["Ashley Greene", "Sebastian Stan", "Tom Felton", "Julianna Guill", "Luke Pasqualino", "Suzanne Ford"],
		genres: ["Supernatural", "Thriller"]
	},{ 
		title: "Arbitrage",
		year: 2012,
		cast: ["Richard Gere", "Susan Sarandon", "Tim Roth", "Brit Marling", "Laetitia Casta", "Nate Parker"],
		genres: ["Drama"]
	},{ 
		title: "Arcadia",
		year: 2012,
		cast: ["John Hawkes", "Ryan Simpkins", "Ty Simpkins", "Kendall Toole"],
		genres: ["Drama"]
	},{ 
		title: "Argo",
		year: 2012,
		cast: ["Ben Affleck", "Bryan Cranston", "Alan Arkin", "John Goodman", "Kyle Chandler", "Victor Garber", "Tate Donovan", "Clea DuVall", "Michael Parks", "Tom Lenk", "Christopher Stanley", "Taylor Schilling", "Ashley Wood", "Chris Messina", "Richard Kind", "Titus Welliver", "Rory Cochrane", "Devansh Mehta", "Omid Abtahi", "Scoot McNairy", "Kerry Bishé", "Christopher Denham", "Bob Gunton", "Philip Baker Hall", "Adrienne Barbeau", "Fouad Hajji"],
		genres: ["Thriller"]
	},{ 
		title: "Art Machine",
		year: 2012,
		cast: ["Joseph Cross", "Jessica Szohr", "Joey Lauren Adams", "Meredith Hagner", "Lynn Cohen"],
		genres: ["Drama"]
	},{ 
		title: "Atlas Shrugged: Part II",
		year: 2012,
		cast: ["Samantha Mathis", "Jason Beghe", "Esai Morales", "Patrick Fabian", "Kim Rhodes", "Richard T. Jones", "D. B. Sweeney", "Paul McCrane", "John Rubinstein", "Robert Picardo", "Ray Wise", "Diedrich Bader", "Bug Hall", "Arye Gross", "Rex Linn", "Larisa Oleynik", "Thomas F. Wilson", "Teller", "Sean Hannity", "Juan Williams", "Bob Beckel", "Tamara Holder"],
		genres: ["Drama", "Mystery"]
	},{ 
		title: "ATM",
		year: 2012,
		cast: ["Brian Geraghty", "Alice Eve", "Josh Peck", "Mike O'Brian"],
		genres: ["Thriller"]
	},{ 
		title: "Atom the Amazing Zombie Killer",
		year: 2012,
		cast: ["Mark Shonsey", "Lindy Starr", "Zachary Byron Helm", "Lloyd Kaufman"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "The Avengers",
		year: 2012,
		cast: ["Robert Downey, Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Tom Hiddleston", "Clark Gregg", "Cobie Smulders", "Stellan Skarsgård", "Samuel L. Jackson"],
		genres: ["Superhero"]
	},{ 
		title: "The Babymakers",
		year: 2012,
		cast: ["Paul Schneider", "Olivia Munn", "Kevin Heffernan", "Nat Faxon", "Constance Zimmer"],
		genres: ["Comedy"]
	},{ 
		title: "Bachelorette",
		year: 2012,
		cast: ["Kirsten Dunst", "Isla Fisher", "Lizzy Caplan", "James Marsden", "Kyle Bornheimer", "Rebel Wilson", "Adam Scott"],
		genres: ["Comedy"]
	},{ 
		title: "Bad Ass",
		year: 2012,
		cast: ["Danny Trejo", "Charles S. Dutton", "Ron Perlman", "Shalim Ortiz", "Jillian Murray", "Winter Ave Zoli", "Richard Riehle"],
		genres: ["Action"]
	},{ 
		title: "Bad Kids Go to Hell",
		year: 2012,
		cast: ["Cameron Deane Stewart", "Augie Duke", "Ali Faulkner", "Roger Edwards", "Amanda Alch", "Marc Donato"],
		genres: ["Comedy", "Thriller"]
	},{ 
		title: "Barbie in A Mermaid Tale 2",
		year: 2012,
		cast: ["Kelly Sheridan", "Nicole Oliver", "Kathleen Barr", "Tabitha St. Germain", "Nakia Burrise"],
		genres: ["Adventure"]
	},{ 
		title: "Barbie: The Princess and the Popstar",
		year: 2012,
		cast: ["Kelly Sheridan", "Ellie King", "Jonathan Holmes", "Allison Warnyca"],
		genres: ["Fantasy"]
	},{ 
		title: "The Barrens",
		year: 2012,
		cast: ["Stephen Moyer", "Mia Kirshner", "Allie MacDonald"],
		genres: ["Horror"]
	},{ 
		title: "Barricade",
		year: 2012,
		cast: ["Eric McCormack", "Jody Thompson", "Donnelly Rhodes", "Conner Dwelly", "Ryan Grantham"],
		genres: ["Thriller"]
	},{ 
		title: "Batman Revealed",
		year: 2012,
		cast: ["David Stewart III", "Chris Clark", "Derek Mindler", "Timothy Nugent", "Jeff Trently", "Jack Pinto", "Tom Scholl"],
		genres: ["Thriller"]
	},{ 
		title: "Batman: The Dark Knight Returns",
		year: 2012,
		cast: ["Peter Weller", "Ariel Winter", "David Selby", "Wade Williams"],
		genres: ["Superhero"]
	},{ 
		title: "The Battery",
		year: 2012,
		cast: ["Jeremy Gardner", "Adam Cronheim", "Niels Bolle", "Alana O'Brien"],
		genres: ["Drama", "Horror"]
	},{ 
		title: "Battlefield America",
		year: 2012,
		cast: ["Marques Houston", "Mekia Cox", "Lynn Whitfield", "Christopher Michael Jones", "JoJo Wright", "Tristen Carter", "Valarie Pettiford", "Gary Anthony Sturgis", "Kida Burns", "Zach Balandres", "Carmen Bicondova", "Edward Mandell", "Kyle Brooks"],
		genres: ["Dance", "Drama"]
	},{ 
		title: "Battleship",
		year: 2012,
		cast: ["Taylor Kitsch", "Liam Neeson", "Alexander Skarsgård", "Rihanna", "Brooklyn Decker", "Tadanobu Asano", "Hamish Linklater", "Jesse Plemons", "John Tui", "Gregory D. Gadson", "Adam Godley", "Peter MacNicol"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "The Bay",
		year: 2012,
		cast: ["Kether Donohue", "Kristen Connolly", "Anthony Reynolds", "Michael Beasley"],
		genres: ["Horror"]
	},{ 
		title: "BearCity 2: The Proposal",
		year: 2012,
		cast: ["Gerald McCullouch", "Joe Conti", "Stephen Guarino", "Kathy Najimy"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Beasts of the Southern Wild",
		year: 2012,
		cast: ["Quvenzhané Wallis", "Dwight Henry", "Jonshel Alexander", "Marilyn Barbarin", "Kaliana Brower", "Nicholas Clark", "Henry D. Coleman", "Levy Easterly", "Philip B. Lawrence"],
		genres: ["Drama", "Fantasy"]
	},{ 
		title: "Beauty and the Beast 3D",
		year: 2012,
		cast: ["Paige O'Hara", "Robby Benson", "Richard White", "Jerry Orbach", "David Ogden Stiers", "Angela Lansbury", "Bradley Pierce", "Rex Everhart", "Jesse Corti", "Hal Smith", "Jo Anne Worley"],
		genres: ["Family", "Animated", "Fantasy"]
	},{ 
		title: "The Beauty Inside",
		year: 2012,
		cast: ["Mary Elizabeth Winstead", "Topher Grace", "Matthew Gray Gubler", "Caitriona Balfe", "Oliver Muirhead"],
		genres: []
	},{ 
		title: "Being Flynn",
		year: 2012,
		cast: ["Robert De Niro", "Paul Dano", "Olivia Thirlby", "Lili Taylor", "Julianne Moore"],
		genres: ["Drama"]
	},{ 
		title: "Ben Banks",
		year: 2012,
		cast: ["Mischa Barton", "Melora Hardin", "Katharine Towne", "Kim Huffman"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Bending the Rules",
		year: 2012,
		cast: ["Adam \"Edge\" Copeland", "Jamie Kennedy", "Jennifer Esposito", "Alicia Witt", "Kevin Weisman", "Philip Baker Hall", "Jessica Walter"],
		genres: ["Comedy"]
	},{ 
		title: "Bernie",
		year: 2012,
		cast: ["Jack Black", "Shirley MacLaine", "Matthew McConaughey"],
		genres: ["Comedy"]
	},{ 
		title: "Best Man Down",
		year: 2012,
		cast: ["Justin Long", "Jess Weixler", "Tyler Labine", "Addison Timlin", "Shelley Long", "Frances O'Connor", "Evan Jones"],
		genres: ["Drama"]
	},{ 
		title: "Beverly Hills Chihuahua 3: Viva la Fiesta!",
		year: 2012,
		cast: ["Marcus Coloma", "Erin Cahill", "Cedric Yarbrough", "Frances Fisher", "Briana Lane", "Sebastian Roche", "Kyle Gass", "Jason Brooks", "Amanda Fuller"],
		genres: ["Family"]
	},{ 
		title: "Beyond",
		year: 2012,
		cast: ["Jon Voight", "Teri Polo", "Dermot Mulroney", "Ben Crowley", "Chloe Lesslie"],
		genres: ["Thriller"]
	},{ 
		title: "Big Miracle",
		year: 2012,
		cast: ["Drew Barrymore", "John Krasinski", "Kristen Bell", "Dermot Mulroney", "Tim Blake Nelson", "Vinessa Shaw", "Ted Danson", "Stephen Root", "Rob Riggle", "Michael Gaston", "Megan Angela Smith"],
		genres: ["Family", "Romance", "Drama"]
	},{ 
		title: "Big Top Scooby-Doo!",
		year: 2012,
		cast: ["Frank Welker", "Matthew Lillard", "Grey DeLisle", "Mindy Cohn", "Craig Ferguson"],
		genres: ["Family"]
	},{ 
		title: "Bill W",
		year: 2012,
		cast: ["About the founder of", "Alcoholics Anonymous"],
		genres: ["Documentary"]
	},{ 
		title: "Bindlestiffs",
		year: 2012,
		cast: ["Andrew Edison", "Luke Loftin", "John Karna", "Will Fordyce"],
		genres: ["Comedy"]
	},{ 
		title: "Black Rock",
		year: 2012,
		cast: ["Katie Aselton", "Lake Bell", "Kate Bosworth", "Will Bouvier", "Jay Paulson"],
		genres: ["Horror"]
	},{ 
		title: "Blood for Irina",
		year: 2012,
		cast: ["Shauna Henry", "Carrie Gemmell", "David Goodfellow", "Andre Becker", "Mark Goodfellow"],
		genres: ["Horror"]
	},{ 
		title: "Border Run",
		year: 2012,
		cast: ["Sharon Stone", "Billy Zane", "Manolo Cardona", "Rosemberg Salgado"],
		genres: ["Drama"]
	},{ 
		title: "The Bourne Legacy",
		year: 2012,
		cast: ["Jeremy Renner", "Rachel Weisz", "Edward Norton", "Joan Allen", "Albert Finney", "Scott Glenn", "Stacy Keach", "Oscar Isaac", "David Strathairn"],
		genres: ["Action", "Spy"]
	},{ 
		title: "Brake",
		year: 2012,
		cast: ["Stephen Dorff", "Chyler Leigh", "JR Bourne", "Tom Berenger", "Pruitt Taylor Vince"],
		genres: ["Thriller"]
	},{ 
		title: "Branded",
		year: 2012,
		cast: ["Ed Stoppard", "Leelee Sobieski", "Jeffrey Tambor", "Ingeborga Dapkūnaitė", "Max von Sydow"],
		genres: ["Science Fiction"]
	},{ 
		title: "Brave",
		year: 2012,
		cast: ["Kelly Macdonald", "Julie Walters", "Billy Connolly", "Emma Thompson", "Kevin McKidd", "Craig Ferguson", "Robbie Coltrane"],
		genres: ["Adventure", "Animated", "Fantasy"]
	},{ 
		title: "Breaking Wind",
		year: 2012,
		cast: ["Heather Ann Davis", "Eric Callero", "Frank Pacheco"],
		genres: ["Satire"]
	},{ 
		title: "Broken Roads",
		year: 2012,
		cast: ["Sally Kirkland", "Aidan Bristow", "Shoshana Bush", "Rolonda Watts"],
		genres: ["Drama"]
	},{ 
		title: "Bully",
		year: 2012,
		cast: ["Bullying in", "U.S. schools", "."],
		genres: ["Documentary"]
	},{ 
		title: "Butter",
		year: 2012,
		cast: ["Jennifer Garner", "Ty Burrell", "Olivia Wilde", "Rob Corddry", "Ashley Greene", "Alicia Silverstone", "Yara Shahidi", "Hugh Jackman"],
		genres: ["Comedy"]
	},{ 
		title: "The Cabin in the Woods",
		year: 2012,
		cast: ["Kristen Connolly", "Chris Hemsworth", "Anna Hutchison", "Fran Kranz", "Jesse Williams", "Richard Jenkins", "Bradley Whitford", "Brian J. White", "Amy Acker", "Tom Lenk"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Caesar and Otto's Deadly Christmas",
		year: 2012,
		cast: ["Dave Campfield", "Paul Chomicki", "Felissa Rose", "Linnea Quigley", "Lloyd Kaufman"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "California Solo",
		year: 2012,
		cast: ["Robert Carlyle", "Kathleen Wilhoite", "Michael Des Barres", "Danny Masterson"],
		genres: ["Drama"]
	},{ 
		title: "California Winter",
		year: 2012,
		cast: ["Michael Ironside", "Rutina Wesley", "Erick Avari", "Elizabeth Dominguez", "Laura Cerón", "Sean Patrick Murphy"],
		genres: ["Drama"]
	},{ 
		title: "Call Me Kuchu",
		year: 2012,
		cast: ["Exploring the struggles of the", "LGBT", "community in", "Uganda", "focusing in part on the 2011 murder of LGBT activist", "David Kato", "."],
		genres: ["Documentary"]
	},{ 
		title: "The Campaign",
		year: 2012,
		cast: ["Will Ferrell", "Zach Galifianakis", "Jason Sudeikis", "Katherine LaNasa", "Dylan McDermott", "John Lithgow", "Dan Aykroyd", "Brian Cox"],
		genres: ["Comedy"]
	},{ 
		title: "Caroline and Jackie",
		year: 2012,
		cast: ["Marguerite Moreau", "Bitsie Tulloch", "David Giuntoli", "Jason Gray-Stanford"],
		genres: ["Drama"]
	},{ 
		title: "Casa de Mi Padre",
		year: 2012,
		cast: ["Will Ferrell", "Gael García Bernal", "Diego Luna", "introducing", "Génesis Rodríguez", "with", "Pedro Armendáriz", "and", "Nick Offerman", "Efren Ramirez", "Adrian Martinez", "Héctor Jiménez"],
		genres: ["Comedy"]
	},{ 
		title: "Celeste and Jesse Forever",
		year: 2012,
		cast: ["Rashida Jones", "Andy Samberg", "Chris Messina", "Ari Graynor", "Eric Christian Olsen", "Will McCormack", "with", "Elijah Wood", "and", "Emma Roberts", "Rich Sommer", "Rafi Gavron", "Matthew Del Negro"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Central Park Five",
		year: 2012,
		cast: ["About the", "Central Park jogger case"],
		genres: ["Documentary"]
	},{ 
		title: "Changing the Game",
		year: 2012,
		cast: ["Tony Todd", "Sean Riggs", "Irma P. Hall", "Sticky Fingaz", "Brandon Ruckdashel", "Dennis L.A. White"],
		genres: ["Drama"]
	},{ 
		title: "Chasing Ice",
		year: 2012,
		cast: ["Publicizing the effects of climate change"],
		genres: ["Documentary"]
	},{ 
		title: "Chasing Mavericks",
		year: 2012,
		cast: ["Gerard Butler", "Jonny Weston", "Elisabeth Shue", "Abigail Spencer", "Leven Rambin", "Taylor Handley", "Scott Eastwood", "Greg Long", "Peter Mel", "Zach Wormhoudt"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Chernobyl Diaries",
		year: 2012,
		cast: ["Jesse McCartney", "Jonathan Sadowski", "Devin Kelley", "Olivia Taylor Dudley", "Nathan Phillips", "Ingrid Bolsø Berdal", "Dimitri Diatchenko"],
		genres: ["Horror"]
	},{ 
		title: "Chimpanzee",
		year: 2012,
		cast: ["A young", "chimpanzee", "named Oscar finds himself alone in the African forests until he is adopted by another chimpanzee. Narrated by", "Tim Allen", "."],
		genres: ["Documentary"]
	},{ 
		title: "A Christmas Story 2",
		year: 2012,
		cast: ["Braeden Lemasters", "Daniel Stern", "Stacey Travis", "Valin Shinyei", "David W. Thompson"],
		genres: ["Family"]
	},{ 
		title: "Christmas with the Dead",
		year: 2012,
		cast: ["Damian Maffei", "Brad Maule", "Kasey Lansdale"],
		genres: ["Horror"]
	},{ 
		title: "Chronicle",
		year: 2012,
		cast: ["Dane DeHaan", "Michael B. Jordan", "Alex Russell", "Michael Kelly", "Ashley Hinshaw", "Anna Wood", "Joe Vaz"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Citizen",
		year: 2012,
		cast: ["Khaled El Nabawy", "Agnes Bruckner", "Rizwan Manji"],
		genres: ["Drama"]
	},{ 
		title: "Clash of the Empires",
		year: 2012,
		cast: ["Christopher Judge", "Bai Ling", "Sun Korng", "Kyle Morris"],
		genres: ["Fantasy"]
	},{ 
		title: "Cloud Atlas",
		year: 2012,
		cast: ["Tom Hanks", "Halle Berry", "Jim Broadbent", "Hugo Weaving", "Jim Sturgess", "Bae Doona", "Ben Whishaw", "James D'Arcy", "Zhou Xun", "Keith David", "David Gyasi", "Susan Sarandon", "Hugh Grant"],
		genres: ["Adventure", "Drama"]
	},{ 
		title: "The Cold Light of Day",
		year: 2012,
		cast: ["Henry Cavill", "Sigourney Weaver", "and", "Bruce Willis", "Verónica Echegui", "Roschdy Zem", "Oscar Jaenada", "Joseph Mawle", "Caroline Goodall", "Rafi Gavron", "Emma Hamilton", "Michael Budd", "Jim Piddock", "Paloma Bloyd", "Colm Meaney"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "The Collection",
		year: 2012,
		cast: ["Josh Stewart", "Courtney Lauren Cumming", "Christopher McDonald", "Lee Tergesen", "Randall Archer", "Shannon Kane"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Come Morning",
		year: 2012,
		cast: ["Michael Ray Davis", "Thor Wahlestedt", "Elise Rovinsky", "Thomas Moore", "Blake Logan"],
		genres: ["Thriller"]
	},{ 
		title: "The Comedy",
		year: 2012,
		cast: ["Tim Heidecker", "Eric Wareheim", "Kate Lyn Sheil", "Alexia Rasmussen", "Gregg Turkington", "James Murphy"],
		genres: ["Comedy"]
	},{ 
		title: "Compliance",
		year: 2012,
		cast: ["Ann Dowd", "Dreama Walker", "Pat Healy", "Bill Camp", "Ashlie Atkinson", "Phillip Ettinger", "James McCaffrey"],
		genres: ["Drama"]
	},{ 
		title: "Contraband",
		year: 2012,
		cast: ["Mark Wahlberg", "Kate Beckinsale", "Ben Foster", "Giovanni Ribisi", "Caleb Landry Jones", "Lukas Haas", "Diego Luna", "J. K. Simmons"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Cowgirls 'n Angels",
		year: 2012,
		cast: ["Bailee Madison", "James Cromwell", "Jackson Rathbone", "Alicia Witt", "Kathleen Rose Perkins", "Frankie Faison"],
		genres: ["Family"]
	},{ 
		title: "Crave",
		year: 2012,
		cast: ["Josh Lawson", "Emma Lung", "Ron Perlman", "Edward Furlong", "Christopher Stapleton", "William Gines"],
		genres: ["Drama"]
	},{ 
		title: "Crazy Eyes",
		year: 2012,
		cast: ["Lukas Haas", "Madeline Zima", "Jake Busey", "Tania Raymonde", "Ray Wise"],
		genres: ["Drama"]
	},{ 
		title: "Crooked Arrows",
		year: 2012,
		cast: ["Brandon Routh", "Crystal Allen", "Chelsea Ricketts", "Dennis Ambriz", "Michael Hudson", "Gil Birmingham", "Tyler Hill"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Damsels in Distress",
		year: 2012,
		cast: ["Greta Gerwig", "Adam Brody", "Analeigh Tipton", "Megalyn Echikunwoke", "Carrie MacLemore", "Hugo Becker", "Billy Magnussen", "Ryan Metcalf", "Caitlin Fitzgerald", "Jermaine Crawford", "Aubrey Plaza", "Zach Woods", "Taylor Nichols", "Carolyn Farina"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "The Dark Knight Rises",
		year: 2012,
		cast: ["Christian Bale", "Michael Caine", "Gary Oldman", "Tom Hardy", "Anne Hathaway", "Marion Cotillard", "Joseph Gordon-Levitt", "Morgan Freeman"],
		genres: ["Crime", "Drama", "Superhero"]
	},{ 
		title: "Dark Shadows",
		year: 2012,
		cast: ["Johnny Depp", "Michelle Pfeiffer", "Helena Bonham Carter", "Eva Green", "Jackie Earle Haley", "Bella Heathcote", "Chloë Grace Moretz", "Jonny Lee Miller", "Gulliver McGrath"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Dark Tide",
		year: 2012,
		cast: ["Halle Berry", "Olivier Martinez", "Ralph Brown", "Luke Tyler", "Mark Elderkin"],
		genres: ["Action"]
	},{ 
		title: "A Dark Truth",
		year: 2012,
		cast: ["Andy Garcia", "Kim Coates", "Deborah Kara Unger", "Eva Longoria", "Forest Whitaker"],
		genres: ["Thriller"]
	},{ 
		title: "Darling Companion",
		year: 2012,
		cast: ["Mark Duplass", "Richard Jenkins", "Diane Keaton", "Kevin Kline", "Elisabeth Moss", "Sam Shepard", "Dianne Wiest", "Ayelet Zurer"],
		genres: ["Comedy"]
	},{ 
		title: "Day One",
		year: 2012,
		cast: ["Kat Dennings", "Chad Michael Murray", "Rupert Friend", "Corbin Bleu", "Juliana Harkavy", "Brian Patrick Clarke"],
		genres: ["Drama"]
	},{ 
		title: "Dead Before Dawn",
		year: 2012,
		cast: ["Devon Bostick", "Christopher Lloyd", "Martha MacIsaac", "Brandon Jay McLaren"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Dead Man's Burden",
		year: 2012,
		cast: ["Barlow Jacobs", "Clare Bowen", "David Call", "Richard Riehle", "Joseph Lyle Taylor"],
		genres: ["Western"]
	},{ 
		title: "Deadfall",
		year: 2012,
		cast: ["Eric Bana", "Olivia Wilde", "Jason Cavalier", "Charlie Hunnam", "Kris Kristofferson", "Alain Goulem"],
		genres: ["Drama"]
	},{ 
		title: "Deadline",
		year: 2012,
		cast: ["Eric Roberts", "Steve Talley", "J.D. Souther", "David Dwyer"],
		genres: ["Drama"]
	},{ 
		title: "Death Race 3: Inferno",
		year: 2012,
		cast: ["Luke Goss", "Danny Trejo", "Ving Rhames", "Robin Shou", "Eugene Khumbanyiwa"],
		genres: ["Action"]
	},{ 
		title: "Deep Dark Canyon",
		year: 2012,
		cast: ["Ted Levine", "Spencer Treat Clark", "Nick Eversman", "Martin Starr", "Matthew Lillard"],
		genres: ["Thriller"]
	},{ 
		title: "Detachment",
		year: 2012,
		cast: ["Adrien Brody", "Marcia Gay Harden", "Christina Hendricks", "William Petersen", "Bryan Cranston", "Tim Blake Nelson", "Betty Kaye", "Sami Gayle", "Lucy Liu", "Blythe Danner", "James Caan"],
		genres: ["Drama"]
	},{ 
		title: "Detention of the Dead",
		year: 2012,
		cast: ["Jacob Zachar", "Alexa Nikolas", "Christa B. Allen", "Jayson Blair"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "The Devil Inside",
		year: 2012,
		cast: ["Fernanda Andrade", "Simon Quarterman", "Evan Helmuth", "Ionut Grama", "Suzan Crowley", "Bonnie Morgan", "Brian Johnson", "Preston James Hillier", "D. T. Carney"],
		genres: ["Horror"]
	},{ 
		title: "Diary of a Wimpy Kid: Dog Days",
		year: 2012,
		cast: ["Zachary Gordon", "Steve Zahn", "Robert Capron", "Devon Bostick", "Rachael Harris", "Connor Fielding", "Owen Fielding", "Peyton List", "Karan Brar", "Melissa Roxburgh", "Grayson Russell", "Laine MacNeil", "Sachin Tyler Sadachcharan"],
		genres: ["Comedy"]
	},{ 
		title: "The Dictator",
		year: 2012,
		cast: ["Sacha Baron Cohen", "Anna Faris", "Ben Kingsley", "Jason Mantzoukas", "John C. Reilly", "Megan Fox", "B. J. Novak", "Bobby Lee", "Kevin Corrigan", "J. B. Smoove", "Adeel Akhtar", "Fred Melamed"],
		genres: ["Comedy"]
	},{ 
		title: "Divorce Invitation",
		year: 2012,
		cast: ["Jamie-Lynn Sigler", "Jonathan Bennett", "Paul Sorvino", "Lainie Kazan", "Elliott Gould"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Django Unchained",
		year: 2012,
		cast: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio", "Kerry Washington", "Samuel L. Jackson", "Walton Goggins", "Dennis Christopher", "James Remar", "Michael Parks", "Don Johnson", "Laura Cayouette", "James Russo", "Tom Wopat", "Misty Upham", "Rex Linn", "Cooper Huckabee", "Doc Duhame", "M. C. Gainey", "Bruce Dern", "Ned Bellamy", "Franco Nero", "Jonah Hill", "Robert Carradine", "James Parks", "Tom Savini", "Quentin Tarantino"],
		genres: ["Western"]
	},{ 
		title: "The Do-Deca-Pentathlon",
		year: 2012,
		cast: ["Mark Kelly", "Steve Zissis", "Jennifer Lafleur", "Julie Vorus"],
		genres: ["Comedy"]
	},{ 
		title: "Don't Change the Subject",
		year: 2012,
		cast: ["Focuses on suicide and using the concept of changing topic"],
		genres: ["Documentary"]
	},{ 
		title: "Dracula Reborn",
		year: 2012,
		cast: ["Corey Landis", "Victoria Summer", "Krash Miller", "Stuart Rigby", "Ian Pfister"],
		genres: ["Horror"]
	},{ 
		title: "Dragon Eyes",
		year: 2012,
		cast: ["Cung Le", "Peter Weller", "Jean-Claude Van Damme", "Crystal Mantecon", "Kristopher Van Varenberg"],
		genres: ["Action"]
	},{ 
		title: "Dysfunctional Friends",
		year: 2012,
		cast: ["Stacey Dash", "Reagan Gomez-Preston", "Wesley Jonathan", "Stacy Keibler", "Terrell Owens"],
		genres: ["Comedy"]
	},{ 
		title: "Eating Out 5: The Open Weekend",
		year: 2012,
		cast: ["Chris Salvatore", "Harmony Santana", "Aaron Milo", "Chris Puckett", "Daniel Skelton"],
		genres: ["Comedy"]
	},{ 
		title: "Eden",
		year: 2012,
		cast: ["Jamie Chung", "Matt O'Leary", "Beau Bridges", "Scott Mechlowicz"],
		genres: ["Thriller"]
	},{ 
		title: "Elevator",
		year: 2012,
		cast: ["Christopher Backus", "Anita Briem", "John Getz", "The Pace Twins", "Devin Ratray"],
		genres: ["Thriller"]
	},{ 
		title: "Elf-Man",
		year: 2012,
		cast: ["Wee Man", "Jeffrey Combs", "Mackenzie Astin", "Carly Robell"],
		genres: ["Comedy"]
	},{ 
		title: "The End of Love",
		year: 2012,
		cast: ["Mark Webber", "Shannyn Sossamon", "Amanda Seyfried", "Aubrey Plaza"],
		genres: ["Drama"]
	},{ 
		title: "End of Watch",
		year: 2012,
		cast: ["Jake Gyllenhaal", "Michael Peña", "Anna Kendrick", "Natalie Martinez", "America Ferrera", "Frank Grillo", "David Harbour"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Evidence",
		year: 2012,
		cast: ["Ryan McCoy", "Brett Rosenberg", "Abigail Richie", "Ashley Bracken", "Zack Fahey", "Blaine Gray"],
		genres: ["Horror"]
	},{ 
		title: "Evil Head",
		year: 2012,
		cast: ["Joanna Angel", "Tommy Pistol", "Veruca James", "Danny Wylde"],
		genres: ["Horror"]
	},{ 
		title: "Excision",
		year: 2012,
		cast: ["AnnaLynne McCord", "Traci Lords", "Ariel Winter", "Roger Bart", "Jeremy Sumpter", "Malcolm McDowell"],
		genres: ["Horror"]
	},{ 
		title: "Exit Strategy",
		year: 2012,
		cast: ["Jameel Saleem", "Noelle Balfour", "Kimelia Weathers", "Fuzzy Fantabulous", "Liz Hernandez"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Expendables 2",
		year: 2012,
		cast: ["Sylvester Stallone", "Jason Statham", "Jet Li", "Dolph Lundgren", "Chuck Norris", "Terry Crews", "Randy Couture", "Liam Hemsworth", "Jean-Claude Van Damme", "Bruce Willis", "Arnold Schwarzenegger", "Scott Adkins", "Yu Nan", "Amanda Ooms", "Novak Djokovic"],
		genres: ["Action"]
	},{ 
		title: "Extracted",
		year: 2012,
		cast: ["Sasha Roiz", "Rodney Eastman", "Dominic Bogart", "Jenny Molin", "Nick Jamison", "Brad Culver"],
		genres: ["Thriller"]
	},{ 
		title: "Filly Brown",
		year: 2012,
		cast: ["Jenni Rivera", "Lou Diamond Phillips", "Edward James Olmos", "Emilio Rivera"],
		genres: ["Drama"]
	},{ 
		title: "Finding Nemo 3D",
		year: 2012,
		cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould", "Willem Dafoe", "Barry Humphries", "Eric Bana", "Bruce Spence", "Allison Janney", "Elizabeth Perkins", "Geoffrey Rush", "Brad Garrett", "Austin Pendleton", "Stephen Root", "Vicki Lewis"],
		genres: ["Adventure", "Animated"]
	},{ 
		title: "Fire with Fire",
		year: 2012,
		cast: ["Josh Duhamel", "50 Cent", "Bruce Willis", "Vincent D'Onofrio", "Richard Schiff"],
		genres: ["Action"]
	},{ 
		title: "The First Time",
		year: 2012,
		cast: ["Dylan O'Brien", "Britt Robertson", "Craig Roberts", "Joshua Malina", "James Frecheville"],
		genres: ["Comedy"]
	},{ 
		title: "The Fitzgerald Family Christmas",
		year: 2012,
		cast: ["Edward Burns", "Connie Britton", "Heather Burns", "Kerry Bishé", "Marsha Dietlein"],
		genres: ["Comedy"]
	},{ 
		title: "The Five-Year Engagement",
		year: 2012,
		cast: ["Jason Segel", "Emily Blunt", "Alison Brie", "Rhys Ifans", "Chris Pratt", "Kevin Hart", "Mindy Kaling", "Chris Parnell", "Dakota Johnson", "David Paymer", "Mimi Kennedy", "Brian Posehn", "Jacki Weaver"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Flicka: Country Pride",
		year: 2012,
		cast: ["Clint Black", "Lisa Hartman-Black", "Kacey Rohl", "Siobhan Williams", "Lily Pearl Black"],
		genres: ["Family"]
	},{ 
		title: "Flight",
		year: 2012,
		cast: ["Denzel Washington", "Don Cheadle", "Kelly Reilly", "John Goodman", "Bruce Greenwood", "and", "Melissa Leo", "Tamara Tunie", "Nadine Velazquez"],
		genres: ["Drama"]
	},{ 
		title: "For a Good Time, Call...",
		year: 2012,
		cast: ["Ari Graynor", "Lauren Miller", "Mark Webber", "and", "Justin Long", "Seth Rogen", "Mimi Rogers", "Nia Vardalos", "James Wolk"],
		genres: ["Comedy"]
	},{ 
		title: "For Ellen",
		year: 2012,
		cast: ["Paul Dano", "Jon Heder", "Jena Malone", "Margarita Levieva", "Shaylena Mandigo"],
		genres: ["Drama"]
	},{ 
		title: "For the Love of Money",
		year: 2012,
		cast: ["Yehuda Levi", "Delphine Chanéac", "Cody Longo", "Jeffrey Tambor", "Jonathan Lipnicki"],
		genres: ["Action", "Drama"]
	},{ 
		title: "The Forger",
		year: 2012,
		cast: ["Josh Hutcherson", "Hayden Panettiere", "Lauren Bacall", "Alfred Molina", "Dina Eastwood"],
		genres: ["Drama"]
	},{ 
		title: "Forgetting the Girl",
		year: 2012,
		cast: ["Christopher Denham", "Anna Camp", "Elizabeth Rice", "Paul Sparks", "Joel de la Fuente"],
		genres: ["Drama"]
	},{ 
		title: "Fortress",
		year: 2012,
		cast: ["Bug Hall", "Donnie Jeffcoat", "Sean McGowan", "Manu Intiraymi", "Howard Gibson"],
		genres: ["Drama"]
	},{ 
		title: "Frankenweenie",
		year: 2012,
		cast: ["Catherine O'Hara", "Martin Short", "Martin Landau", "Charlie Tahan", "Atticus Shaffer", "Winona Ryder", "Robert Capron", "Conchata Ferrell"],
		genres: ["Animated", "Horror", "Comedy"]
	},{ 
		title: "Friends with Kids",
		year: 2012,
		cast: ["Adam Scott", "Jennifer Westfeldt", "Jon Hamm", "Kristen Wiig", "Maya Rudolph", "Chris O'Dowd", "Megan Fox", "Edward Burns"],
		genres: ["Comedy"]
	},{ 
		title: "Fun Size",
		year: 2012,
		cast: ["Victoria Justice", "Thomas Mann", "Jane Levy", "Chelsea Handler", "Thomas McDonell", "Osric Chau", "Jackson Nicoll", "Josh Pence", "Johnny Knoxville", "(uncredited)", "Thomas Middleditch", "Ana Gasteyer", "Holmes Osborne", "James Pumphrey", "Willam Belli", "Peter Navy Tuiasosopo"],
		genres: ["Comedy", "Teen"]
	},{ 
		title: "Gambit",
		year: 2012,
		cast: ["Colin Firth", "Cameron Diaz", "Alan Rickman", "Tom Courtenay", "Stanley Tucci"],
		genres: ["Comedy"]
	},{ 
		title: "Gayby",
		year: 2012,
		cast: ["Jenn Harris", "Matthew Wilkas"],
		genres: ["Comedy"]
	},{ 
		title: "Ghost Rider: Spirit of Vengeance",
		year: 2012,
		cast: ["Nicolas Cage", "Ciarán Hinds", "Violante Placido", "Johnny Whitworth", "Christopher Lambert", "Idris Elba"],
		genres: ["Superhero"]
	},{ 
		title: "Girl in Progress",
		year: 2012,
		cast: ["Eva Mendes", "Matthew Modine", "Cierra Ramirez", "Patricia Arquette", "Eugenio Derbez"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "God Bless America",
		year: 2012,
		cast: ["Joel Murray", "Tara Lynne Barr", "Mackenzie Brooke Smith", "Melinda Page Hamilton"],
		genres: ["Comedy"]
	},{ 
		title: "Gone",
		year: 2012,
		cast: ["Amanda Seyfried", "Daniel Sunjata", "Jennifer Carpenter", "Sebastian Stan", "Wes Bentley"],
		genres: ["Thriller"]
	},{ 
		title: "Good Deeds",
		year: 2012,
		cast: ["Tyler Perry", "Thandie Newton", "Brian J. White", "Eddie Cibrian", "Rebecca Romijn", "Jamie Kennedy", "Phylicia Rashād", "Gabrielle Union"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "The Grey",
		year: 2012,
		cast: ["Liam Neeson", "Frank Grillo", "Dermot Mulroney", "Dallas Roberts", "Joe Anderson", "Nonso Anozie", "James Badge Dale"],
		genres: ["Action", "Thriller", "Adventure", "Drama"]
	},{ 
		title: "The Guilt Trip",
		year: 2012,
		cast: ["Barbra Streisand", "Seth Rogen"],
		genres: ["Comedy"]
	},{ 
		title: "Haywire",
		year: 2012,
		cast: ["Gina Carano", "Michael Fassbender", "Ewan McGregor", "Bill Paxton", "Channing Tatum", "Mathieu Kassovitz", "Michael Angarano", "with", "Antonio Banderas", "and", "Michael Douglas"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Hello I Must Be Going",
		year: 2012,
		cast: ["Melanie Lynskey", "Blythe Danner", "Christopher Abbott", "John Rubinstein", "Dan Futterman", "Julie White"],
		genres: ["Drama", "Comedy", "Romance"]
	},{ 
		title: "Here Comes the Boom",
		year: 2012,
		cast: ["Kevin James", "Salma Hayek", "Henry Winkler", "Charice Pempengco", "Bas Rutten", "Reggie Lee", "Joe Rogan", "Mike Goldberg", "Greg Germann", "Jason Miller", "Melissa Peterman", "Bruce Buffer", "Krzysztof Soszynski"],
		genres: ["Comedy", "Sports"]
	},{ 
		title: "Hick",
		year: 2012,
		cast: ["Chloë Grace Moretz", "Eddie Redmayne", "Ray McKinnon", "Rory Culkin", "Juliette Lewis", "Blake Lively", "Alec Baldwin"],
		genres: ["Drama"]
	},{ 
		title: "High School",
		year: 2012,
		cast: ["Adrien Brody", "Sean Marquette", "Matt Bush", "Colin Hanks", "Adhir Kalyan", "and", "Michael Chiklis", "Robert Bailey, Jr.", "Mykelti Williamson", "Andrew Wilson"],
		genres: ["Comedy"]
	},{ 
		title: "Hit and Run",
		year: 2012,
		cast: ["Dax Shepard", "Kristen Bell", "Bradley Cooper", "Tom Arnold", "Kristin Chenoweth", "Michael Rosenbaum", "Joy Bryant", "Ryan Hansen", "Beau Bridges"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Hope Springs",
		year: 2012,
		cast: ["Meryl Streep", "Tommy Lee Jones", "Steve Carell"],
		genres: ["Comedy"]
	},{ 
		title: "Hotel Transylvania",
		year: 2012,
		cast: ["Adam Sandler", "Andy Samberg", "Selena Gomez", "Kevin James", "Fran Drescher", "Steve Buscemi", "Molly Shannon", "David Spade", "Cee Lo Green"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "House at the End of the Street",
		year: 2012,
		cast: ["Jennifer Lawrence", "Max Thieriot", "Gil Bellows", "and", "Elisabeth Shue", "Nolan Gerard Funk", "James Thomas", "Allie MacDonald", "Jonathan Malen", "Jon McLaren", "Eva Link"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "The Hunger Games",
		year: 2012,
		cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth", "Woody Harrelson", "Elizabeth Banks", "Lenny Kravitz", "with", "Stanley Tucci", "and", "Donald Sutherland", "Willow Shields", "Paula Malcomson", "Amandla Stenberg", "Alexander Ludwig", "Dayo Okeniyi", "Isabelle Fuhrman", "Jacqueline Emerson", "Leven Rambin", "Jack Quaid", "Toby Jones", "Wes Bentley", "Latarsha Rose"],
		genres: ["Action", "Drama", "Science Fiction"]
	},{ 
		title: "I Do",
		year: 2012,
		cast: ["David W. Ross", "Jamie-Lynn Sigler", "Grant Bowler", "Alicia Witt"],
		genres: ["Drama"]
	},{ 
		title: "Ice Age: Continental Drift",
		year: 2012,
		cast: ["Ray Romano", "John Leguizamo", "Denis Leary", "Queen Latifah", "Seann William Scott", "Josh Peck", "Chris Wedge", "Jennifer Lopez", "Keke Palmer", "Aziz Ansari", "Drake", "Jeremy Renner", "Wanda Sykes", "Matt Bennett", "Nicki Minaj", "Ester Dean", "Rebel Wilson", "Joy Behar", "Nick Frost", "J. B. Smoove", "Heather Morris", "Josh Gad", "Alan Tudyk", "Kunal Nayyar", "Alain Chabat"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Jack Reacher",
		year: 2012,
		cast: ["Tom Cruise", "Rosamund Pike", "Richard Jenkins", "Werner Herzog", "David Oyelowo", "Robert Duvall"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Jeff, Who Lives at Home",
		year: 2012,
		cast: ["Jason Segel", "Ed Helms", "Susan Sarandon", "Judy Greer", "Rae Dawn Chong"],
		genres: ["Comedy"]
	},{ 
		title: "John Carter",
		year: 2012,
		cast: ["Taylor Kitsch", "Lynn Collins", "Samantha Morton", "Mark Strong", "Ciarán Hinds", "Dominic West", "James Purefoy", "Willem Dafoe", "Bryan Cranston", "Polly Walker", "Daryl Sabara"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Journey 2: The Mysterious Island",
		year: 2012,
		cast: ["Dwayne Johnson", "Michael Caine", "Josh Hutcherson", "Vanessa Hudgens", "Luis Guzmán", "Kristin Davis"],
		genres: ["Action", "Adventure", "Family"]
	},{ 
		title: "Joyful Noise",
		year: 2012,
		cast: ["Queen Latifah", "Dolly Parton", "Keke Palmer", "Jeremy Jordan", "Courtney B. Vance", "Kris Kristofferson"],
		genres: ["Comedy", "Musical"]
	},{ 
		title: "Katy Perry: Part of Me 3D",
		year: 2012,
		cast: ["Chronicling the life and career of singer", "Katy Perry", ". Scenes are taken from the", "2011 California Dreams Tour", "at", "Staples Center", "Los Angeles"],
		genres: ["Performance", "Documentary"]
	},{ 
		title: "Keep the Lights On",
		year: 2012,
		cast: ["Thure Lindhardt", "Zachary Booth", "David Anzuelo", "Maria Dizzia", "Julianne Nicholson", "Souléymane Sy Savané", "Paprika Steen"],
		genres: ["Drama"]
	},{ 
		title: "Killer Joe",
		year: 2012,
		cast: ["Matthew McConaughey", "Emile Hirsch", "Juno Temple", "Gina Gershon", "Thomas Haden Church", "Marc Macaulay"],
		genres: ["Crime", "Thriller", "Comedy"]
	},{ 
		title: "A Late Quartet",
		year: 2012,
		cast: ["Philip Seymour Hoffman", "Mark Ivanir", "Catherine Keener", "Christopher Walken", "Imogen Poots", "Liraz Charhi", "Wallace Shawn"],
		genres: ["Drama"]
	},{ 
		title: "Lawless",
		year: 2012,
		cast: ["Shia LaBeouf", "Tom Hardy", "Gary Oldman", "Mia Wasikowska", "Jessica Chastain", "Dane DeHaan", "Jason Clarke", "Guy Pearce"],
		genres: ["Drama"]
	},{ 
		title: "Liberal Arts",
		year: 2012,
		cast: ["Josh Radnor", "Elizabeth Olsen", "Richard Jenkins", "Allison Janney", "John Magaro", "Elizabeth Reaser", "Zac Efron"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Life of Pi",
		year: 2012,
		cast: ["Suraj Sharma", "Irrfan Khan", "Tabu", "Rafe Spall", "Gérard Depardieu"],
		genres: ["Action", "Adventure", "Drama"]
	},{ 
		title: "Lincoln",
		year: 2012,
		cast: ["Daniel Day-Lewis", "Sally Field", "David Strathairn", "Joseph Gordon-Levitt", "James Spader", "Hal Holbrook", "Tommy Lee Jones"],
		genres: ["Biography", "Political", "Drama"]
	},{ 
		title: "A Little Bit of Heaven",
		year: 2012,
		cast: ["Kate Hudson", "Gael García Bernal", "Lucy Punch", "Romany Malco", "Treat Williams", "Whoopi Goldberg", "Kathy Bates"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Lockout",
		year: 2012,
		cast: ["Guy Pearce", "Maggie Grace", "Vincent Regan", "Joseph Gilgun", "Lennie James", "Peter Stormare"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Lola Versus",
		year: 2012,
		cast: ["Greta Gerwig", "Joel Kinnaman", "Zoe Lister-Jones", "Bill Pullman", "Debra Winger", "Hamish Linklater", "Cheyenne Jackson"],
		genres: ["Romance"]
	},{ 
		title: "The Loneliest Planet",
		year: 2012,
		cast: ["Gael García Bernal", "Hani Furstenberg", "Bidzina Gujabidze"],
		genres: ["Thriller"]
	},{ 
		title: "Looper",
		year: 2012,
		cast: ["Bruce Willis", "Joseph Gordon-Levitt", "Emily Blunt", "Paul Dano", "Qing Xu", "Noah Segan", "Jeff Daniels", "Piper Perabo", "Garret Dillahunt"],
		genres: ["Science Fiction"]
	},{ 
		title: "Dr. Seuss' The Lorax",
		year: 2012,
		cast: ["Danny DeVito", "Zac Efron", "Taylor Swift", "Ed Helms", "Rob Riggle", "Betty White", "Jenny Slate"],
		genres: ["Animated", "Family"]
	},{ 
		title: "The Lucky One",
		year: 2012,
		cast: ["Zac Efron", "Taylor Schilling", "Jay R. Ferguson", "Blythe Danner"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Madagascar 3: Europe's Most Wanted",
		year: 2012,
		cast: ["Ben Stiller", "Chris Rock", "David Schwimmer", "Jada Pinkett Smith", "Frances McDormand", "Sacha Baron Cohen", "Cedric the Entertainer", "Andy Richter", "Bryan Cranston", "Jessica Chastain", "Martin Short", "Paz Vega", "Tom McGrath", "Chris Miller", "Christopher Knights", "John DiMaggio", "Conrad Vernon"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Madea's Witness Protection",
		year: 2012,
		cast: ["Tyler Perry", "Eugene Levy", "Denise Richards", "Doris Roberts", "Romeo Miller", "Tom Arnold", "John Amos", "Marla Gibbs", "Danielle Campbell", "Devan Leos", "Jeff Joslin"],
		genres: ["Comedy"]
	},{ 
		title: "Magic Mike",
		year: 2012,
		cast: ["Channing Tatum", "Alex Pettyfer", "and", "Matthew McConaughey", "Cody Horn", "Olivia Munn", "Matt Bomer", "Riley Keough", "Joe Manganiello", "Kevin Nash", "Adam Rodríguez", "Gabriel Iglesias"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Magic of Belle Isle",
		year: 2012,
		cast: ["Morgan Freeman", "Virginia Madsen", "Kenan Thompson"],
		genres: ["Drama"]
	},{ 
		title: "Maladies (2012 film)",
		year: 2012,
		cast: ["James Franco", "Catherine Keener", "Fallon Goodson"],
		genres: ["Drama"]
	},{ 
		title: "Man on a Ledge",
		year: 2012,
		cast: ["Sam Worthington", "Elizabeth Banks", "Jamie Bell", "Anthony Mackie", "Ed Burns", "Titus Welliver", "Génesis Rodríguez", "Kyra Sedgwick", "Ed Harris"],
		genres: ["Thriller"]
	},{ 
		title: "The Man with the Iron Fists",
		year: 2012,
		cast: ["Russell Crowe", "Cung Le", "Lucy Liu", "Byron Mann", "RZA", "Rick Yune", "David Bautista", "Jamie Chung"],
		genres: ["Martial Arts"]
	},{ 
		title: "Marley",
		year: 2012,
		cast: ["The life of", "reggae", "singer", "Bob Marley", "."],
		genres: ["Biography", "Documentary"]
	},{ 
		title: "The Master",
		year: 2012,
		cast: ["Joaquin Phoenix", "Philip Seymour Hoffman", "Amy Adams", "Laura Dern"],
		genres: ["Drama"]
	},{ 
		title: "Men in Black 3",
		year: 2012,
		cast: ["Will Smith", "Tommy Lee Jones", "Josh Brolin", "Rip Torn", "Emma Thompson", "Alice Eve", "Nicole Scherzinger", "Jemaine Clement", "Bill Hader", "Keone Young", "Yuri Lowenthal", "(voice)"],
		genres: ["Comedy"]
	},{ 
		title: "Mirror Mirror",
		year: 2012,
		cast: ["Julia Roberts", "Lily Collins", "Armie Hammer", "Nathan Lane", "Sean Bean", "Mare Winningham", "Michael Lerner", "Robert Emms", "Mark Povinelli", "Danny Woodburn", "Jordan Prentice", "Ronald Lee Clark", "Sebastian Saraceno", "Martin Klebba", "Joe Gnoffo", "Bonnie Bentley", "Nadia Verrucci"],
		genres: ["Comedy", "Fantasy"]
	},{ 
		title: "Monsters, Inc. 3D",
		year: 2012,
		cast: ["John Goodman", "Billy Crystal", "Mary Gibbs", "Steve Buscemi", "James Coburn", "Jennifer Tilly", "Frank Oz"],
		genres: ["Family", "Animated"]
	},{ 
		title: "Moonrise Kingdom",
		year: 2012,
		cast: ["Bruce Willis", "Edward Norton", "Bill Murray", "Frances McDormand", "Tilda Swinton", "Jason Schwartzman", "Bob Balaban", "Harvey Keitel", "Marc Rizzo", "Jared Gilman", "Kara Hayward"],
		genres: ["Drama"]
	},{ 
		title: "Nobody Walks",
		year: 2012,
		cast: ["John Krasinski", "Olivia Thirlby", "Rosemarie DeWitt", "India Ennenga", "Justin Kirk"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Odd Life of Timothy Green",
		year: 2012,
		cast: ["Jennifer Garner", "Joel Edgerton", "CJ Adams", "Ron Livingston", "Dianne Wiest", "Odeya Rush", "Rosemarie DeWitt", "Lin-Manuel Miranda", "M. Emmet Walsh", "Michael Arden", "Lois Smith", "David Morse", "Common", "Rhoda Griffis", "Sharon Morris", "Jason Davis", "Cullen Moss"],
		genres: ["Drama", "Comedy", "Fantasy"]
	},{ 
		title: "One for the Money",
		year: 2012,
		cast: ["Katherine Heigl", "Jason O'Mara", "Daniel Sunjata", "John Leguizamo", "Sherri Shepherd", "Debbie Reynolds"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "The Oogieloves in the Big Balloon Adventure",
		year: 2012,
		cast: ["Toni Braxton", "Cloris Leachman", "Christopher Lloyd", "Chazz Palminteri", "Cary Elwes", "and", "Jaime Pressly", "Maya Stange"],
		genres: ["Family", "Musical"]
	},{ 
		title: "The Oranges",
		year: 2012,
		cast: ["Hugh Laurie", "Catherine Keener", "Oliver Platt", "Allison Janney", "Alia Shawkat", "Adam Brody", "Leighton Meester"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Paperboy",
		year: 2012,
		cast: ["Matthew McConaughey", "Zac Efron", "John Cusack", "Nicole Kidman", "David Oyelowo", "Macy Gray", "(narrator)", "Scott Glenn", "Nikolette Noel", "Ned Bellamy"],
		genres: ["Drama"]
	},{ 
		title: "Paranormal Activity 4",
		year: 2012,
		cast: ["Katie Featherston", "Kathryn Newton", "Matt Shively", "Brady Allen", "Aiden Lovekamp", "Stephen Dunham", "Alexondra Lee"],
		genres: ["Supernatural", "Horror"]
	},{ 
		title: "ParaNorman",
		year: 2012,
		cast: ["Kodi Smit-McPhee", "Casey Affleck", "Tempestt Bledsoe", "John Goodman", "Jeff Garlin", "Bernard Hill", "Anna Kendrick", "Leslie Mann", "Christopher Mintz-Plasse", "Elaine Stritch", "Tucker Albrizzi", "Alex Borstein", "Jodelle Ferland"],
		genres: ["Animated", "Horror", "Comedy", "Thriller"]
	},{ 
		title: "Parental Guidance",
		year: 2012,
		cast: ["Billy Crystal", "Bette Midler", "Marisa Tomei", "Tom Everett Scott", "Bailee Madison", "Joshua Rush"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Peace, Love, & Misunderstanding",
		year: 2012,
		cast: ["Jane Fonda", "Catherine Keener", "Jeffrey Dean Morgan", "Chace Crawford", "Elizabeth Olsen", "Nat Wolff", "Rosanna Arquette", "Kyle MacLachlan"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "People Like Us",
		year: 2012,
		cast: ["Chris Pine", "Elizabeth Banks", "Olivia Wilde", "Michael Hall D'Addario", "Mark Duplass", "Philip Baker Hall", "Jon Favreau", "Michelle Pfeiffer"],
		genres: ["Drama"]
	},{ 
		title: "The Perks of Being a Wallflower",
		year: 2012,
		cast: ["Logan Lerman", "Emma Watson", "Ezra Miller", "Mae Whitman", "Kate Walsh", "Dylan McDermott", "Joan Cusack", "Paul Rudd"],
		genres: ["Drama", "Comedy", "Teen"]
	},{ 
		title: "Piranha 3DD",
		year: 2012,
		cast: ["Danielle Panabaker", "Matt Bush", "David Koechner", "Chris Zylka", "Katrina Bowden", "Gary Busey", "Christopher Lloyd", "David Hasselhoff", "Ving Rhames", "Paul Scheer", "Meagan Tandy", "Jean-Luc Bilodeau", "Clu Gulager", "Paul James Jordan", "Adrian Martinez", "Shanica Knowles"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Pitch Perfect",
		year: 2012,
		cast: ["Anna Kendrick", "Brittany Snow", "Anna Camp", "Rebel Wilson", "Christopher Mintz-Plasse", "Skylar Astin", "Freddie Stroma", "Alexis Knapp", "Adam DeVine", "Ester Dean", "Brock Kelly", "Elizabeth Banks", "John Michael Higgins"],
		genres: ["Comedy", "Musical"]
	},{ 
		title: "The Possession",
		year: 2012,
		cast: ["Natasha Callis", "Jeffrey Dean Morgan", "Kyra Sedgwick", "Madison Davenport", "Grant Show", "Matisyahu"],
		genres: ["Supernatural", "Horror"]
	},{ 
		title: "Premium Rush",
		year: 2012,
		cast: ["Joseph Gordon-Levitt", "Michael Shannon", "Dania Ramirez", "Jamie Chung"],
		genres: ["Action"]
	},{ 
		title: "Price Check",
		year: 2012,
		cast: ["Parker Posey", "Eric Mabius", "Annie Parisse", "Josh Pais", "Edward Herrmann", "Remy Auberjonois", "Jayce Bartók", "Samrat Chakrabarti", "Cheyenne Jackson", "Stephen Kunken", "Amy Schumer", "Matt Servitto", "Mackenzie Smith", "Melinda Page Hamilton"],
		genres: ["Comedy"]
	},{ 
		title: "Project X",
		year: 2012,
		cast: ["Thomas Mann", "Oliver Cooper", "Jonathan Daniel Brown", "Alexis Knapp", "Nichole Bloom", "Dax Flame", "Miles Teller", "Kirby Bliss Blanton"],
		genres: ["Comedy"]
	},{ 
		title: "Prometheus",
		year: 2012,
		cast: ["Noomi Rapace", "Michael Fassbender", "Guy Pearce", "Idris Elba", "Logan Marshall-Green", "Charlize Theron"],
		genres: ["Action", "Horror", "Science Fiction"]
	},{ 
		title: "Puppet Master X: Axis Rising",
		year: 2012,
		cast: ["Kip Canyon", "Jean Louise O'Sullivan", "Oto Brezina", "Scott Anthony King", "Stephanie Sanditz", "Brad Potts", "Ian Roberts"],
		genres: ["Horror"]
	},{ 
		title: "The Queen of Versailles",
		year: 2012,
		cast: ["The \"riches to rags\" trajectory of high-living former model Jackie Siegel and her attempt to build a", "Florida", "version of France's", "Palace of Versailles", "."],
		genres: ["Documentary"]
	},{ 
		title: "Rampart",
		year: 2012,
		cast: ["Woody Harrelson", "Ned Beatty", "Ben Foster", "Anne Heche", "Ice Cube", "Cynthia Nixon", "Sigourney Weaver", "Robert Wisdom", "Robin Wright", "Steve Buscemi"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "The Raven",
		year: 2012,
		cast: ["John Cusack", "Alice Eve", "Oliver Jackson-Cohen", "Luke Evans", "Brendan Gleeson", "Kevin McNally", "Pam Ferris", "Sergej Trifunović", "Ian Virgo", "Sam Hazeldine", "Brendan Coyle", "M. Emmet Walsh"],
		genres: ["Thriller"]
	},{ 
		title: "Red Dawn",
		year: 2012,
		cast: ["Chris Hemsworth", "Josh Peck", "Josh Hutcherson", "Adrianne Palicki", "Isabel Lucas", "Connor Cruise", "Jeffrey Dean Morgan"],
		genres: ["Action", "War"]
	},{ 
		title: "Red Hook Summer",
		year: 2012,
		cast: ["Clarke Peters", "Nate Parker", "Thomas Jefferson Byrd", "introducing Toni Lysaith and Jules Brown", "Heather Simms", "James Ransone", "De'Adre Aziza", "Isiah Whitlock, Jr.", "Spike Lee"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Red Lights",
		year: 2012,
		cast: ["Cillian Murphy", "Sigourney Weaver", "Toby Jones", "Joely Richardson", "Elizabeth Olsen", "and", "Robert De Niro", "Leonardo Sbaraglia", "Burn Gorman", "Karen David", "Craig Roberts"],
		genres: ["Thriller"]
	},{ 
		title: "Red Tails",
		year: 2012,
		cast: ["Cuba Gooding, Jr.", "Terrence Howard", "Daniela Ruah", "Bryan Cranston", "Nate Parker", "David Oyelowo", "Ryan Early", "Method Man", "Elijah Kelley", "Ne-Yo", "Tristan Wilds", "Kevin Phillips", "Robert Kazinsky", "Lee Tergesen", "Andre Royo", "Marcus T. Paulk", "Michael B. Jordan"],
		genres: ["Action", "Drama", "War"]
	},{ 
		title: "The Reluctant Fundamentalist",
		year: 2012,
		cast: ["Riz Ahmed", "Kate Hudson", "Liev Schreiber", "Kiefer Sutherland", "Om Puri", "Shabana Azmi"],
		genres: ["Political", "Thriller"]
	},{ 
		title: "Resident Evil: Retribution",
		year: 2012,
		cast: ["Milla Jovovich", "Michelle Rodriguez", "Kevin Durand", "Sienna Guillory", "Shawn Roberts", "Aryana Engineer", "Colin Salmon", "Johann Urb", "Boris Kodjoe", "Li Bingbing", "Oded Fehr", "Mika Nakashima"],
		genres: ["Thriller"]
	},{ 
		title: "Rise of the Guardians",
		year: 2012,
		cast: ["Chris Pine", "Isla Fisher", "Hugh Jackman", "Alec Baldwin", "Jude Law", "Dakota Goyo"],
		genres: ["Action", "Adventure", "Animated", "Family"]
	},{ 
		title: "Robot & Frank",
		year: 2012,
		cast: ["Frank Langella", "James Marsden", "Liv Tyler", "Jeremy Strong", "Jeremy Sisto", "Peter Sarsgaard", "(voice)", "Susan Sarandon"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Rock of Ages",
		year: 2012,
		cast: ["Julianne Hough", "Diego Boneta", "Russell Brand", "Paul Giamatti", "Catherine Zeta-Jones", "Malin Åkerman", "Mary J. Blige", "Alec Baldwin", "Tom Cruise"],
		genres: ["Musical", "Romance", "Comedy"]
	},{ 
		title: "Ruby Sparks",
		year: 2012,
		cast: ["Paul Dano", "Zoe Kazan", "Antonio Banderas", "Annette Bening", "Steve Coogan", "Elliott Gould", "Chris Messina", "Alia Shawkat", "Deborah Ann Woll"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Safe",
		year: 2012,
		cast: ["Jason Statham", "Catherine Chan", "Chris Sarandon", "Anson Mount", "Robert John Burke", "James Hong", "Reggie Lee", "Danny Hoch", "Danni Lang", "Igor Jijikine", "David Kim"],
		genres: ["Action"]
	},{ 
		title: "Safe House",
		year: 2012,
		cast: ["Denzel Washington", "Ryan Reynolds", "Vera Farmiga", "Brendan Gleeson", "Sam Shepard", "Rubén Blades", "Nora Arnezeder", "Robert Patrick"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Safety Not Guaranteed",
		year: 2012,
		cast: ["Aubrey Plaza", "Mark Duplass", "Jake Johnson", "Karan Soni", "Jenica Bergere", "Kristen Bell", "Jeff Garlin", "Mary Lynn Rajskub"],
		genres: ["Comedy"]
	},{ 
		title: "Samsara",
		year: 2012,
		cast: ["Exploring the wonders of the world from the mundane to the miraculous."],
		genres: ["Documentary"]
	},{ 
		title: "Savages",
		year: 2012,
		cast: ["Taylor Kitsch", "Aaron Johnson", "Blake Lively", "Uma Thurman", "Salma Hayek", "Benicio del Toro", "Emile Hirsch", "John Travolta", "Joel David Moore", "Demián Bichir", "Mía Maestro", "Trevor Donovan", "Sandra Echeverría", "Gillian Zinser"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Seeking a Friend for the End of the World",
		year: 2012,
		cast: ["Steve Carell", "Keira Knightley", "Adam Brody", "Derek Luke", "William Petersen", "Connie Britton", "Patton Oswalt", "Melanie Lynskey", "Rob Corddry", "Melinda Dillon", "Rob Huebel", "Gillian Jacobs", "T. J. Miller", "Amy Schumer", "Jim O'Heir"],
		genres: ["Comedy"]
	},{ 
		title: "The Sessions",
		year: 2012,
		cast: ["John Hawkes", "Helen Hunt", "Moon Bloodgood", "Annika Marks", "Rhea Perlman", "Adam Arkin", "William H. Macy", "W. Earl Brown", "Blake Lindsley", "Robin Weigert", "Rusty Schwimmer", "Jenni Baird"],
		genres: ["Drama"]
	},{ 
		title: "Silent Hill: Revelation 3D",
		year: 2012,
		cast: ["Adelaide Clemens", "Kit Harington", "Deborah Kara Unger", "Martin Donovan", "Malcolm McDowell", "Carrie-Anne Moss", "Sean Bean", "Radha Mitchell", "Heather Marks"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Silent House",
		year: 2012,
		cast: ["Elizabeth Olsen", "Adam Trese", "Eric Sheffer Stevens", "Julia Taylor Ross", "Haley Murphy"],
		genres: ["Horror"]
	},{ 
		title: "Silver Linings Playbook",
		year: 2012,
		cast: ["Bradley Cooper", "Jennifer Lawrence", "Robert De Niro", "Jacki Weaver", "Anupam Kher", "Julia Stiles", "Chris Tucker"],
		genres: ["Comedy", "Drama", "Romance"]
	},{ 
		title: "Sinister",
		year: 2012,
		cast: ["Ethan Hawke", "Juliet Rylance", "Fred Thompson", "James Ransone", "Clare Foley", "Michael Hall D'Addario", "Vincent D'Onofrio"],
		genres: ["Supernatural", "Horror"]
	},{ 
		title: "Sleepwalk with Me",
		year: 2012,
		cast: ["Mike Birbiglia", "Lauren Ambrose", "Cristin Milioti", "James Rebhorn", "Carol Kane", "Marylouise Burke", "Loudon Wainwright III", "Aya Cash", "David Wain", "Marc Maron", "Sondra James", "Kristen Schaal", "Jessi Klein", "Wyatt Cenac"],
		genres: ["Comedy"]
	},{ 
		title: "Smashed",
		year: 2012,
		cast: ["Mary Elizabeth Winstead", "Aaron Paul", "Nick Offerman", "Megan Mullally", "Kyle Gallner", "Mary Kay Place", "Octavia Spencer", "Bree Turner", "Mackenzie Davis", "Patti Allison", "Richmond Arquette", "Natalie Dreyfuss"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Snow White & the Huntsman",
		year: 2012,
		cast: ["Kristen Stewart", "Charlize Theron", "Chris Hemsworth", "Sam Claflin", "Ian McShane", "Bob Hoskins", "Ray Winstone", "Nick Frost", "Toby Jones", "Johnny Harris", "Eddie Marsan", "Brian Gleeson", "Lily Cole", "Sam Spruell", "Vincent Regan", "Noah Huntley"],
		genres: ["Action", "Fantasy"]
	},{ 
		title: "Sound of My Voice",
		year: 2012,
		cast: ["Christopher Denham", "Nicole Vicius", "Brit Marling", "Avery Pohl"],
		genres: ["Thriller"]
	},{ 
		title: "Sparkle",
		year: 2012,
		cast: ["Jordin Sparks", "Whitney Houston", "Derek Luke", "Mike Epps", "Carmen Ejogo", "Tika Sumpter", "Omari Hardwick", "Cee Lo Green"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Star Wars: Episode I – The Phantom Menace 3D",
		year: 2012,
		cast: ["Liam Neeson", "Ewan McGregor", "Jake Lloyd", "Ahmed Best", "Pernilla August", "Ian McDiarmid", "Anthony Daniels", "Kenny Baker", "Frank Oz", "Ray Park", "Silas Carson", "Sofia Coppola", "Keira Knightley", "Samuel L. Jackson"],
		genres: ["Science Fiction"]
	},{ 
		title: "Step Up Revolution",
		year: 2012,
		cast: ["Ryan Guzman", "Kathryn McCormick", "Misha Gabriel", "Cleopatra Coleman", "Stephen \"tWitch\" Boss", "Adam G. Sevani", "Tommy Dewey and", "Peter Gallagher"],
		genres: ["Dance", "Drama", "Romance"]
	},{ 
		title: "Stolen",
		year: 2012,
		cast: ["Nicolas Cage", "Danny Huston", "Malin Åkerman", "Sami Gayle", "Mark Valley", "and", "Josh Lucas"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "The Swan Princess Christmas",
		year: 2012,
		cast: ["Yuri Lowenthal", "Elle Deets", "David Lodge", "G. K. Bowes", "Doug Stone", "Brian Nissen", "Clayton James Mackay", "James Arrington", "Joey Lotsko"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Taken 2",
		year: 2012,
		cast: ["Liam Neeson", "Maggie Grace", "Famke Janssen", "and", "Rade Šerbedžija", "Leland Orser", "Jon Gries", "D. B. Sweeney", "Luke Grimes", "Aclan Bates", "Kevork Malikyan"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "The Tall Man",
		year: 2012,
		cast: ["Jessica Biel", "Jodelle Ferland", "William B. Davis", "Samantha Ferris", "Colleen Wheeler", "Garwin Sanford", "Janet Wright", "Eve Harlow", "John Mann", "Teach Grant", "Ferne Downey", "introducing", "Jakob Davies", "and", "Stephen McHattie"],
		genres: ["Horror", "Mystery"]
	},{ 
		title: "Ted",
		year: 2012,
		cast: ["Mark Wahlberg", "Mila Kunis", "Seth MacFarlane", "Giovanni Ribisi", "Joel McHale", "Patrick Warburton", "Jessica Stroup", "Laura Vandervoort", "Ralph Garman"],
		genres: ["Comedy"]
	},{ 
		title: "That's My Boy",
		year: 2012,
		cast: ["Adam Sandler", "Andy Samberg", "Leighton Meester", "Eva Amurri", "Susan Sarandon", "James Caan", "Milo Ventimiglia", "Will Forte", "Colin Quinn", "Todd Bridges", "Vanilla Ice", "Ian Ziering", "Rex Ryan", "Luenell", "Ciara", "Peggy Stewart", "Tony Orlando", "Alan Thicke", "Dan Patrick", "Blake Clark", "Nick Swardson", "Ana Gasteyer", "Baron Davis"],
		genres: ["Comedy"]
	},{ 
		title: "Think Like a Man",
		year: 2012,
		cast: ["Michael Ealy", "Jerry Ferrara", "Meagan Good", "Regina Hall", "Kevin Hart", "Taraji P. Henson", "Terrence J", "Romany Malco", "Gabrielle Union", "Steve Harvey", "Gary Owen", "Chris Brown", "Wendy Williams", "Tony Rock", "La La Anthony", "Sherri Shepherd", "Tika Sumpter", "Keri Hilson", "Kelly Rowland", "Jenifer Lewis"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "This Is 40",
		year: 2012,
		cast: ["Leslie Mann", "Paul Rudd", "John Lithgow", "Megan Fox", "and", "Albert Brooks", "Iris Apatow", "Maude Apatow", "Melissa McCarthy", "Robert Smigel", "Charlyne Yi"],
		genres: ["Comedy"]
	},{ 
		title: "This Means War",
		year: 2012,
		cast: ["Tom Hardy", "Chris Pine", "Reese Witherspoon", "Chelsea Handler", "Abigail Spencer", "Til Schweiger", "Laura Vandervoort", "Leela Savasta", "Angela Bassett"],
		genres: ["Comedy", "Spy"]
	},{ 
		title: "A Thousand Words",
		year: 2012,
		cast: ["Eddie Murphy", "Kerry Washington", "Cliff Curtis", "Clark Duke", "Allison Janney", "Ariel Winter", "Steve Little", "John Witherspoon", "Jack McBrayer"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Three Stooges",
		year: 2012,
		cast: ["Chris Diamantopoulos", "Will Sasso", "Sean Hayes", "Jane Lynch", "Larry David", "Brian Doyle-Murray", "Sofía Vergara", "Jennifer Hudson", "Lin Shaye", "Stephen Collins", "Carly Craig", "Craig Bierko", "Kirby Heyborne", "Isaiah Mustafa", "Dwight Howard", "Kate Upton"],
		genres: ["Comedy"]
	},{ 
		title: "Thunderstruck",
		year: 2012,
		cast: ["Kevin Durant", "Taylor Gray", "Brandon T. Jackson", "Doc Shaw", "Jim Belushi"],
		genres: ["Family", "Sports", "Comedy"]
	},{ 
		title: "Titanic 3D",
		year: 2012,
		cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Francis Fisher", "Gloria Stuart", "Bill Paxton", "Bernard Hill", "David Warner", "Victor Garber", "Jonathan Hyde", "Eric Braeden", "Bernard Fox", "Suzy Amis", "Danny Nucci", "Lewis Abernathy", "Nicholas Cascone"],
		genres: ["Drama"]
	},{ 
		title: "Tomorrow You're Gone",
		year: 2012,
		cast: ["Michelle Monaghan", "Willem Dafoe", "Stephen Dorff"],
		genres: ["Thriller"]
	},{ 
		title: "Total Recall",
		year: 2012,
		cast: ["Colin Farrell", "Kate Beckinsale", "Jessica Biel", "Bryan Cranston", "John Cho", "and", "Bill Nighy", "Bokeem Woodbine"],
		genres: ["Action", "Thriller", "Science Fiction"]
	},{ 
		title: "Touchback",
		year: 2012,
		cast: ["Brian Presley", "Melanie Lynskey", "Marc Blucas", "with", "Kurt Russell", "and", "Christine Lahti", "Sarah Wright", "Sianoa Smit-McPhee", "Drew Powell", "Kevin Covais", "Steve Turner", "James Duval"],
		genres: ["Drama"]
	},{ 
		title: "Trouble with the Curve",
		year: 2012,
		cast: ["Clint Eastwood", "Amy Adams", "Justin Timberlake", "and", "John Goodman", "Matthew Lillard", "Scott Eastwood"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "The Twilight Saga: Breaking Dawn - Part 2",
		year: 2012,
		cast: ["Kristen Stewart", "Robert Pattinson", "Taylor Lautner", "Nikki Reed", "Peter Facinelli", "Elizabeth Reaser", "Ashley Greene", "Kellan Lutz", "Jackson Rathbone", "Julia Jones", "Booboo Stewart", "Billy Burke", "Sarah Clarke", "MyAnna Buring", "Maggie Grace", "Casey LaBow", "Michael Sheen", "Jamie Campbell Bower", "Christopher Heyerdahl", "Chaske Spencer", "Christian Camargo", "Mía Maestro", "Mackenzie Foy", "Dakota Fanning", "Cameron Bright", "Charlie Bewley", "Daniel Cudmore", "Noel Fisher", "Guri Weinberg", "Lee Pace", "Joe Anderson", "Judi Shekoni", "Tracey Huggins", "J. D. Pardo", "Rami Malek"],
		genres: ["Fantasy", "Romance"]
	},{ 
		title: "Underworld: Awakening",
		year: 2012,
		cast: ["Kate Beckinsale", "Stephen Rea", "Michael Ealy", "Theo James", "India Eisley", "and", "Charles Dance"],
		genres: ["Action", "Horror"]
	},{ 
		title: "The Unspeakable Act",
		year: 2012,
		cast: ["Tallie Medel", "Sky Hirschkron", "Aundrea Fares", "Kati Schwartz", "Caroline Luft", "Eleanore Pienta", "Collin Summers", "Caitlin Mehner", "Mike Faist", "Liz Toonkel", "Jessica Pinfield", "Sunita Mani", "Kate Lyn Sheil", "Gonzalo Cordova", "Zelda Knapp"],
		genres: ["Drama", "Teen"]
	},{ 
		title: "V/H/S",
		year: 2012,
		cast: ["A series of", "found-footage", "shorts."],
		genres: ["Horror"]
	},{ 
		title: "Virginia",
		year: 2012,
		cast: ["Jennifer Connelly", "Ed Harris", "Emma Roberts", "Harrison Gilbertson", "Amy Madigan", "Carrie Preston", "and", "Toby Jones"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "The Vow",
		year: 2012,
		cast: ["Channing Tatum", "Rachel McAdams", "Sam Neill", "Scott Speedman", "and", "Jessica Lange"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Wanderlust",
		year: 2012,
		cast: ["Paul Rudd", "Jennifer Aniston", "Justin Theroux", "Malin Åkerman", "Kathryn Hahn", "Lauren Ambrose", "and", "Alan Alda"],
		genres: ["Comedy"]
	},{ 
		title: "The Watch",
		year: 2012,
		cast: ["Ben Stiller", "Vince Vaughn", "Jonah Hill", "Richard Ayoade", "Rosemarie DeWitt", "Nicholas Braun", "Will Forte", "Erin Moriarty", "Billy Crudup", "Doug Jones"],
		genres: ["Comedy"]
	},{ 
		title: "What to Expect When You're Expecting",
		year: 2012,
		cast: ["Cameron Diaz", "Jennifer Lopez", "Elizabeth Banks", "Chace Crawford", "Brooklyn Decker", "Anna Kendrick", "Matthew Morrison", "Dennis Quaid", "Chris Rock", "Rodrigo Santoro"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Won't Back Down",
		year: 2012,
		cast: ["Maggie Gyllenhaal", "Viola Davis", "Oscar Isaac", "Rosie Perez", "Ving Rhames", "Marianne Jean-Baptiste", "and", "Holly Hunter"],
		genres: ["Drama"]
	},{ 
		title: "The Words",
		year: 2012,
		cast: ["Bradley Cooper", "Jeremy Irons", "Dennis Quaid", "Olivia Wilde", "and", "Zoe Saldana", "Ben Barnes", "Nora Arnezeder"],
		genres: ["Drama"]
	},{ 
		title: "Wrath of the Titans",
		year: 2012,
		cast: ["Sam Worthington", "Rosamund Pike", "Bill Nighy", "Édgar Ramírez", "Toby Kebbell", "Danny Huston", "with", "Ralph Fiennes", "and", "Liam Neeson"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "Wreck-It Ralph",
		year: 2012,
		cast: ["John C. Reilly", "Sarah Silverman", "Jack McBrayer", "Jane Lynch", "Alan Tudyk", "Mindy Kaling", "Joe Lo Truglio", "Ed O'Neill", "Dennis Haysbert", "Adam Carolla", "Horatio Sanz", "and", "Rich Moore"],
		genres: ["Animated", "Comedy", "Family"]
	},{ 
		title: "Goodbye Promise",
		year: 2012,
		cast: ["Gregor Collins", "Sarah Prikryl", "Brian Ronalds"],
		genres: ["Drama", "Independent"]
	},{ 
		title: "Zero Dark Thirty",
		year: 2012,
		cast: ["Jessica Chastain", "Jason Clarke", "Joel Edgerton", "Mark Strong", "Chris Pratt", "Kyle Chandler", "Taylor Kinney", "Mark Duplass", "Frank Grillo", "Stephen Dillane", "Édgar Ramírez", "Harold Perrineau", "Reda Kateb", "Jennifer Ehle", "James Gandolfini", "Scott Adkins", "Mark Valley", "Ricky Sekhon", "John Barrowman"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "2 Guns",
		year: 2013,
		cast: ["Denzel Washington", "Mark Wahlberg", "Paula Patton", "Bill Paxton", "Fred Ward", "James Marsden", "Edward James Olmos"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "12 Rounds 2: Reloaded",
		year: 2013,
		cast: ["Randy Orton", "Brian Markinson", "Venus Terzo"],
		genres: ["Action"]
	},{ 
		title: "12 Years a Slave",
		year: 2013,
		cast: ["Chiwetel Ejiofor", "Michael Fassbender", "Benedict Cumberbatch", "Paul Dano", "Paul Giamatti", "Lupita Nyong'o", "Sarah Paulson", "Brad Pitt", "Alfre Woodard"],
		genres: ["Drama"]
	},{ 
		title: "20 Feet from Stardom",
		year: 2013,
		cast: ["A look at the lives of background singers."],
		genres: ["Documentary"]
	},{ 
		title: "21 and Over",
		year: 2013,
		cast: ["Miles Teller", "Skylar Astin", "Justin Chon", "Sarah Wright"],
		genres: ["Comedy"]
	},{ 
		title: "3 Geezers!",
		year: 2013,
		cast: ["J. K. Simmons", "Basil Hoffman", "Tim Allen", "Scott Caan", "Breckin Meyer"],
		genres: ["Comedy"]
	},{ 
		title: "30 Nights of Paranormal Activity with the Devil Inside the Girl with the Dragon Tattoo",
		year: 2013,
		cast: ["Kathryn Fiore", "Ben Morrison", "French Stewart"],
		genres: ["Comedy", "Satire"]
	},{ 
		title: "42",
		year: 2013,
		cast: ["Chadwick Boseman", "Harrison Ford", "Christopher Meloni", "John C. McGinley", "Lucas Black", "Alan Tudyk", "Nicole Beharie", "C. J. Nitkowski", "Brett Cullen", "Kelley Jakle", "Ryan Merriman", "T. R. Knight", "Hamish Linklater"],
		genres: ["Sports"]
	},{ 
		title: "47 Ronin",
		year: 2013,
		cast: ["Keanu Reeves", "Tadanobu Asano", "Hiroyuki Sanada", "Rinko Kikuchi", "Kou Shibasaki", "Jin Akanishi", "Min Tanaka", "Cary-Hiroyuki Tagawa"],
		genres: ["Action", "Fantasy"]
	},{ 
		title: "9 Full Moons",
		year: 2013,
		cast: ["Amy Seimetz", "Bret Roberts", "Donal Logue"],
		genres: ["Drama"]
	},{ 
		title: "The ABCs of Death",
		year: 2013,
		cast: ["A collection of 26 individual chapters", "each aligned with a letter of the alphabet."],
		genres: ["Horror"]
	},{ 
		title: "Abandoned Mine",
		year: 2013,
		cast: ["Alex Vega", "Reiley McClendon", "Saige Thompson"],
		genres: ["Horror"]
	},{ 
		title: "A.C.O.D.",
		year: 2013,
		cast: ["Adam Scott", "Amy Poehler", "Jessica Alba", "Jane Lynch", "Richard Jenkins"],
		genres: ["Comedy"]
	},{ 
		title: "Admission",
		year: 2013,
		cast: ["Paul Rudd", "Tina Fey", "Michael Sheen", "Wallace Shawn", "Lily Tomlin"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "After Earth",
		year: 2013,
		cast: ["Jaden Smith", "Will Smith"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Aftershock",
		year: 2013,
		cast: ["Eli Roth", "Andrea Osvárt", "Ariel Levy", "Natasha Yarovenko", "Nicolás Martínez", "Lorenza Izzo"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Ain't Them Bodies Saints",
		year: 2013,
		cast: ["Casey Affleck", "Rooney Mara", "Ben Foster", "Rami Malek", "Keith Carradine", "Charles Baker", "Nate Parker"],
		genres: ["Western"]
	},{ 
		title: "All Is Lost",
		year: 2013,
		cast: ["Robert Redford"],
		genres: []
	},{ 
		title: "Alone yet Not Alone",
		year: 2013,
		cast: ["Kelly Greyson", "Natalie Racoosin", "Jenn Gotzon", "Clay Walker"],
		genres: ["Drama"]
	},{ 
		title: "American Hustle",
		year: 2013,
		cast: ["Christian Bale", "Bradley Cooper", "Amy Adams", "Jeremy Renner", "Jennifer Lawrence"],
		genres: ["Crime"]
	},{ 
		title: "Anchorman 2: The Legend Continues",
		year: 2013,
		cast: ["Will Ferrell", "Christina Applegate", "Paul Rudd", "David Koechner", "Steve Carell", "Kristen Wiig", "James Marsden", "Dylan Baker", "Meagan Good", "Harrison Ford", "Greg Kinnear", "Josh Lawson", "Vince Vaughn", "Luke Wilson", "Nicole Kidman", "Fred Willard", "Chris Parnell", "Fred Armisen", "Jim Carrey", "Sacha Baron Cohen", "Drake", "Kirsten Dunst", "Tina Fey", "Will Smith", "Liam Neeson", "Amy Poehler", "John C. Reilly", "Kanye West", "Billie Joe Armstrong", "Mike Dirnt", "Tré Cool", "Jason White", "Lewis Hamilton"],
		genres: ["Comedy"]
	},{ 
		title: "Angels Sing",
		year: 2013,
		cast: ["Harry Connick, Jr.", "Connie Britton", "Chandler Canterbury", "Fionnula Flanagan", "Lyle Lovett", "Willie Nelson", "Kris Kristofferson"],
		genres: ["Drama"]
	},{ 
		title: "Apartment 1303 3D",
		year: 2013,
		cast: ["Mischa Barton", "Rebecca De Mornay", "Julianne Michelle"],
		genres: ["Horror"]
	},{ 
		title: "Apocalypse Earth",
		year: 2013,
		cast: ["Adrian Paul", "Richard Grieco", "Bali Rodríguez"],
		genres: ["Science Fiction"]
	},{ 
		title: "At Any Price",
		year: 2013,
		cast: ["Dennis Quaid", "Zac Efron", "Kim Dickens", "Heather Graham", "Clancy Brown"],
		genres: ["Drama"]
	},{ 
		title: "Arthur Newman",
		year: 2013,
		cast: ["Colin Firth", "Emily Blunt", "Anne Heche", "Sterling Beaumon", "Nicole LaLiberte"],
		genres: ["Drama"]
	},{ 
		title: "Artifact",
		year: 2013,
		cast: ["The making of", "Thirty Seconds to Mars", "' album", "This Is War"],
		genres: ["Documentary"]
	},{ 
		title: "Ass Backwards",
		year: 2013,
		cast: ["June Diane Raphael", "Casey Wilson", "Alicia Silverstone", "Jon Cryer", "Vincent D'Onofrio", "Brian Geraghty", "Bob Odenkirk", "Paul Scheer"],
		genres: ["Comedy"]
	},{ 
		title: "Assault on Wall Street",
		year: 2013,
		cast: ["Dominic Purcell", "Erin Karpluk", "Edward Furlong", "John Heard", "Keith David", "Michael Paré"],
		genres: ["Thriller"]
	},{ 
		title: "August: Osage County",
		year: 2013,
		cast: ["Meryl Streep", "Julia Roberts", "Ewan McGregor", "Chris Cooper", "Abigail Breslin", "Benedict Cumberbatch", "Juliette Lewis", "Margo Martindale", "Dermot Mulroney", "Julianne Nicholson", "Sam Shepard", "Misty Upham"],
		genres: ["Comedy"]
	},{ 
		title: "Baggage Claim",
		year: 2013,
		cast: ["Paula Patton", "Derek Luke", "Taye Diggs", "Jill Scott", "Boris Kodjoe", "Trey Songz", "Adam Brody", "Tia Mowry", "La La Anthony", "Djimon Hounsou"],
		genres: ["Comedy"]
	},{ 
		title: "Battle of the Year",
		year: 2013,
		cast: ["Josh Holloway", "Laz Alonso", "Josh Peck", "Caity Lotz", "Chris Brown"],
		genres: ["Dance", "Drama"]
	},{ 
		title: "The Baytown Outlaws",
		year: 2013,
		cast: ["Andre Braugher", "Eva Longoria", "Clayne Crawford", "Daniel Cudmore", "Travis Fimmel", "Billy Bob Thornton"],
		genres: ["Action"]
	},{ 
		title: "Beautiful Creatures",
		year: 2013,
		cast: ["Alden Ehrenreich", "Alice Englert", "Jeremy Irons", "Viola Davis", "Emmy Rossum", "Thomas Mann", "Emma Thompson"],
		genres: ["Fantasy", "Romance"]
	},{ 
		title: "Before Midnight",
		year: 2013,
		cast: ["Ethan Hawke", "Julie Delpy"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Behind the Candelabra",
		year: 2013,
		cast: ["Michael Douglas", "Matt Damon", "Dan Aykroyd", "Scott Bakula", "Rob Lowe"],
		genres: ["Drama"]
	},{ 
		title: "Beneath",
		year: 2013,
		cast: ["Daniel Zovatto", "Bonnie Dennison", "Mackenzie Rosman"],
		genres: ["Horror"]
	},{ 
		title: "Beside Still Waters",
		year: 2013,
		cast: ["Ryan Eggold", "Britt Lower", "Brett Dalton"],
		genres: ["Comedy"]
	},{ 
		title: "Best Kept Secret",
		year: 2013,
		cast: ["A special education teacher finds a place in the real world for her students as they prepare to leave the public school system."],
		genres: ["Documentary"]
	},{ 
		title: "Best Man Down",
		year: 2013,
		cast: ["Justin Long", "Tyler Labine", "Jess Weixler", "Addison Timlin", "Frances O'Connor", "Shelley Long"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Best Man Holiday",
		year: 2013,
		cast: ["Morris Chestnut", "Taye Diggs", "Regina Hall", "Terrence Howard", "Sanaa Lathan", "Nia Long", "Harold Perrineau", "Monica Calhoun", "Melissa De Sousa"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Beyond the Farthest Star",
		year: 2013,
		cast: ["Renée O'Connor", "Todd Terry", "Cherami Leigh", "Andrew Prine"],
		genres: ["Drama"]
	},{ 
		title: "Big Ass Spider!",
		year: 2013,
		cast: ["Greg Grunberg", "Lin Shaye", "Patrick Bauchau"],
		genres: ["Science Fiction"]
	},{ 
		title: "Big Sur",
		year: 2013,
		cast: ["Josh Lucas", "Jean-Marc Barr", "Radha Mitchell"],
		genres: ["Drama"]
	},{ 
		title: "The Big Wedding",
		year: 2013,
		cast: ["Robert De Niro", "Katherine Heigl", "Diane Keaton", "Amanda Seyfried", "Topher Grace", "Ben Barnes", "Susan Sarandon", "Robin Williams"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Black Nativity",
		year: 2013,
		cast: ["Forest Whitaker", "Angela Bassett", "Tyrese Gibson", "Jacob Latimore", "Mary J. Blige", "Nasir Jones", "Jennifer Hudson"],
		genres: ["Musical", "Drama"]
	},{ 
		title: "Blackfish",
		year: 2013,
		cast: ["Focuses on an", "orca", "held at", "SeaWorld", "and the dangers of it being kept in captivity."],
		genres: ["Documentary"]
	},{ 
		title: "Black Rock",
		year: 2013,
		cast: ["Katie Aselton", "Lake Bell", "Kate Bosworth", "Will Bouvier", "Jay Paulson", "Anslem Richardson"],
		genres: ["Horror"]
	},{ 
		title: "Bless Me, Ultima",
		year: 2013,
		cast: ["Luke Ganalon", "Míriam Colón", "Benito Martinez", "Dolores Heredia"],
		genres: ["Drama"]
	},{ 
		title: "The Bling Ring",
		year: 2013,
		cast: ["Israel Broussard", "Katie Chang", "Taissa Farmiga", "Claire Julien", "Georgia Rock", "Emma Watson", "Leslie Mann"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Blue Caprice",
		year: 2013,
		cast: ["Isaiah Washington", "Tequan Richmond", "Joey Lauren Adams", "Tim Blake Nelson"],
		genres: ["Drama"]
	},{ 
		title: "Blue Jasmine",
		year: 2013,
		cast: ["Alec Baldwin", "Cate Blanchett", "Louis C.K.", "Bobby Cannavale", "Andrew Dice Clay", "Sally Hawkins", "Peter Sarsgaard", "Michael Stuhlbarg"],
		genres: ["Drama"]
	},{ 
		title: "Blue Ruin",
		year: 2013,
		cast: ["Macon Blair", "Devin Ratray", "Eve Plumb"],
		genres: ["Thriller"]
	},{ 
		title: "The Book of Esther",
		year: 2013,
		cast: ["Jen Lilley", "Joel Smallbone", "Thaao Penghlis", "Robert Miano"],
		genres: ["Drama"]
	},{ 
		title: "The Book Thief",
		year: 2013,
		cast: ["Sophie Nélisse", "Geoffrey Rush", "Emily Watson", "Ben Schnetzer"],
		genres: ["Drama"]
	},{ 
		title: "Bounty Killer",
		year: 2013,
		cast: ["Matthew Marsden", "Kristanna Loken", "Beverly D'Angelo"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "The Brass Teapot",
		year: 2013,
		cast: ["Juno Temple", "Michael Angarano", "Alexis Bledel", "Alia Shawkat", "Bobby Moynihan", "Ben Rappaport", "Billy Magnussen"],
		genres: ["Fantasy", "Comedy"]
	},{ 
		title: "Breathe In",
		year: 2013,
		cast: ["Guy Pearce", "Felicity Jones", "Amy Ryan", "Kyle MacLachlan"],
		genres: ["Drama"]
	},{ 
		title: "Bridegroom",
		year: 2013,
		cast: ["The relationship between two young gay men."],
		genres: ["Documentary"]
	},{ 
		title: "Broken City",
		year: 2013,
		cast: ["Mark Wahlberg", "Russell Crowe", "Catherine Zeta-Jones", "Barry Pepper", "Kyle Chandler", "Natalie Martinez", "Jeffrey Wright"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Bullet to the Head",
		year: 2013,
		cast: ["Sylvester Stallone", "Sung Kang", "Sarah Shahi", "Adewale Akinnuoye-Agbaje", "Christian Slater", "Jason Momoa"],
		genres: ["Action"]
	},{ 
		title: "The Butler",
		year: 2013,
		cast: ["Forest Whitaker", "Oprah Winfrey", "John Cusack", "Jane Fonda", "Cuba Gooding, Jr.", "Terrence Howard", "Lenny Kravitz", "James Marsden", "David Oyelowo", "Vanessa Redgrave", "Alan Rickman", "Liev Schreiber", "Robin Williams", "Clarence Williams III"],
		genres: ["Drama"]
	},{ 
		title: "C.O.G.",
		year: 2013,
		cast: ["Jonathan Groff", "Denis O'Hare", "Casey Wilson", "Dean Stockwell"],
		genres: ["Drama"]
	},{ 
		title: "The Call",
		year: 2013,
		cast: ["Halle Berry", "Abigail Breslin", "Morris Chestnut", "Michael Eklund", "Michael Imperioli"],
		genres: ["Thriller"]
	},{ 
		title: "Can a Song Save Your Life?",
		year: 2013,
		cast: ["Keira Knightley", "Mark Ruffalo", "Adam Levine", "Hailee Steinfeld", "CeeLo Green"],
		genres: ["Musical", "Drama"]
	},{ 
		title: "The Canyons",
		year: 2013,
		cast: ["Lindsay Lohan", "James Deen", "Nolan Gerard Funk", "Amanda Brooks", "Tenille Houston", "Gus Van Sant"],
		genres: ["Erotic", "Thriller"]
	},{ 
		title: "Captain Phillips",
		year: 2013,
		cast: ["Tom Hanks", "Barkhad Abdi", "Catherine Keener", "Max Martini", "Yul Vazquez", "Michael Chernus", "Chris Mulkey", "Corey Johnson", "David Warshofsky", "John Magaro", "Angus MacInnes"],
		genres: ["Action", "Drama", "Thriller"]
	},{ 
		title: "Carrie",
		year: 2013,
		cast: ["Chloë Grace Moretz", "Judy Greer", "Portia Doubleday", "Julianne Moore"],
		genres: ["Horror"]
	},{ 
		title: "CBGB",
		year: 2013,
		cast: ["Alan Rickman", "Malin Åkerman", "Freddy Rodriguez", "Stana Katic", "Howard Deklerk", "Rupert Grint", "Justin Bartha", "Joel David Moore", "Johnny Galecki", "Donal Logue", "Ashley Greene", "Taylor Hawkins", "Mickey Sumner"],
		genres: ["Historical", "Musical"]
	},{ 
		title: "Charlie Countryman",
		year: 2013,
		cast: ["Shia LaBeouf", "Evan Rachel Wood", "Mads Mikkelsen", "Rupert Grint", "Vincent D'Onofrio", "Melissa Leo"],
		genres: ["Action", "Romance", "Comedy"]
	},{ 
		title: "Cheech & Chong's Animated Movie",
		year: 2013,
		cast: ["Cheech Marin", "Tommy Chong"],
		genres: ["Comedy"]
	},{ 
		title: "Chilling Visions: 5 Senses of Fear",
		year: 2013,
		cast: ["Nicholas Tucci", "Caleb Barwick", "Hilary Greer", "Danae Nason", "Ace Marrero"],
		genres: ["Horror"]
	},{ 
		title: "Clark: A Gonzomentary",
		year: 2013,
		cast: ["William Clark", "James Curcio", "David Proch"],
		genres: ["Satire"]
	},{ 
		title: "The Cloth",
		year: 2013,
		cast: ["Danny Trejo", "Eric Roberts", "Rachele Brooke Smith", "Justin Price"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Cloudy with a Chance of Meatballs 2",
		year: 2013,
		cast: ["Anna Faris", "Bill Hader", "Andy Samberg", "Kristen Schaal", "James Caan", "Neil Patrick Harris", "Benjamin Bratt", "Terry Crews", "Will Forte"],
		genres: ["Animated", "Comedy", "Family"]
	},{ 
		title: "Coffin Baby",
		year: 2013,
		cast: ["Bruce Dern", "Brian Krause", "Clifton Powell", "Ethan Phillips"],
		genres: ["Horror"]
	},{ 
		title: "Company of Heroes",
		year: 2013,
		cast: ["Tom Sizemore", "Chad Michael Collins", "Vinnie Jones", "Dimitri Diatchenko", "Neal McDonough", "Jürgen Prochnow"],
		genres: ["Drama"]
	},{ 
		title: "The Company You Keep",
		year: 2013,
		cast: ["Robert Redford", "Shia LaBeouf", "Julie Christie", "Sam Elliott", "Jackie Evancho", "Brendan Gleeson", "Terrence Howard", "Richard Jenkins", "Anna Kendrick", "Brit Marling", "Stanley Tucci", "Nick Nolte", "Chris Cooper", "Susan Sarandon"],
		genres: ["Political", "Thriller"]
	},{ 
		title: "Computer Chess",
		year: 2013,
		cast: ["Patrick Riester", "Wiley Wiggins", "Myles Paige", "Robin Schwartz"],
		genres: ["Comedy"]
	},{ 
		title: "Concussion",
		year: 2013,
		cast: ["Robin Weigert", "Maggie Siff", "Ben Shenkman", "Janel Moloney"],
		genres: ["Drama"]
	},{ 
		title: "The Conjuring",
		year: 2013,
		cast: ["Vera Farmiga", "Patrick Wilson", "Ron Livingston", "and", "Lili Taylor", "Shannon Kook", "Mackenzie Foy", "Joey King", "Shanley Caswell", "Hayley McFarland", "Steve Coulter", "John Brotherton"],
		genres: ["Supernatural", "Horror"]
	},{ 
		title: "Contest",
		year: 2013,
		cast: ["Kenton Duty", "Daniel Flaherty", "Katherine McNamara", "Mary Beth Peil"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Continental",
		year: 2013,
		cast: ["Involves the history of a", "gay bathhouse", "in New York."],
		genres: ["Documentary"]
	},{ 
		title: "Contracted",
		year: 2013,
		cast: ["Najarra Townsend", "Alice Macdonald", "Katie Stegeman", "Caroline Williams"],
		genres: ["Horror"]
	},{ 
		title: "The Contractor",
		year: 2013,
		cast: ["Danny Trejo", "Brad Rowe", "Christina Cox"],
		genres: ["Action"]
	},{ 
		title: "The Counselor",
		year: 2013,
		cast: ["Michael Fassbender", "Penélope Cruz", "Cameron Diaz", "Javier Bardem", "Brad Pitt"],
		genres: ["Crime"]
	},{ 
		title: "The Croods",
		year: 2013,
		cast: ["Nicolas Cage", "Ryan Reynolds", "Emma Stone", "Catherine Keener", "Clark Duke", "Cloris Leachman"],
		genres: ["Adventure", "Animated", "Comedy"]
	},{ 
		title: "Cutie and the Boxer",
		year: 2013,
		cast: ["Noriko Shinohara", "Ushio Shinohara"],
		genres: ["Documentary"]
	},{ 
		title: "Dallas Buyers Club",
		year: 2013,
		cast: ["Matthew McConaughey", "Jennifer Garner", "Jared Leto"],
		genres: ["Drama"]
	},{ 
		title: "Dark Skies",
		year: 2013,
		cast: ["Keri Russell", "Josh Hamilton", "Dakota Goyo", "J. K. Simmons"],
		genres: ["Horror", "Science Fiction"]
	},{ 
		title: "A Dark Truth",
		year: 2013,
		cast: ["Andy García", "Kim Coates", "Deborah Kara Unger", "Kevin Durand", "Lara Daans", "Devon Bostick", "Steven Bauer", "Al Sapienza", "Julio Mechoso", "Eva Longoria", "Forest Whitaker"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Dead Man Down",
		year: 2013,
		cast: ["Colin Farrell", "Noomi Rapace", "Dominic Cooper", "Terrence Howard", "Isabelle Huppert"],
		genres: ["Crime", "Thriller", "Noir"]
	},{ 
		title: "Despicable Me 2",
		year: 2013,
		cast: ["Steve Carell", "Kristen Wiig", "Miranda Cosgrove", "Russell Brand", "Pierre Coffin", "Benjamin Bratt", "Steve Coogan", "Ken Jeong", "Kristen Schaal", "Moisés Arias", "Javier Bardem"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Disconnect",
		year: 2013,
		cast: ["Jason Bateman", "Hope Davis", "Frank Grillo", "Michael Nyqvist", "Paula Patton", "Andrea Riseborough", "Alexander Skarsgård", "Max Thieriot", "Colin Ford", "Jonah Bobo"],
		genres: ["Crime"]
	},{ 
		title: "Dirty Wars",
		year: 2013,
		cast: ["N", "A"],
		genres: ["Documentary"]
	},{ 
		title: "Don Jon",
		year: 2013,
		cast: ["Joseph Gordon-Levitt", "Scarlett Johansson", "Julianne Moore", "Rob Brown", "Glenne Headly", "Brie Larson", "Tony Danza"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Don't Stop Believin': Everyman's Journey",
		year: 2013,
		cast: ["A look at American rock band", "Journey", "and its new lead vocalist", "Arnel Pineda", ". Shows scenes from their", "Revelation Tour", "in the United States and Pineda's homecoming in the Philippines."],
		genres: ["Performance", "Documentary"]
	},{ 
		title: "Dracula: The Dark Prince",
		year: 2013,
		cast: ["Luke Roberts", "Jon Voight", "Kelly Wenham"],
		genres: ["Horror"]
	},{ 
		title: "Drinking Buddies",
		year: 2013,
		cast: ["Olivia Wilde", "Jake Johnson", "Anna Kendrick", "Ron Livingston", "Ti West", "Jason Sudeikis"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Elysium",
		year: 2013,
		cast: ["Matt Damon", "Jodie Foster", "Sharlto Copley", "Alice Braga", "Diego Luna", "Wagner Moura", "William Fichtner"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Emperor",
		year: 2013,
		cast: ["Matthew Fox", "Tommy Lee Jones", "Eriko Hatsune", "Masayoshi Haneda", "Toshiyuki Nishida"],
		genres: ["War"]
	},{ 
		title: "Empire State",
		year: 2013,
		cast: ["Liam Hemsworth", "Dwayne Johnson", "Emma Roberts"],
		genres: ["Crime"]
	},{ 
		title: "Ender's Game",
		year: 2013,
		cast: ["Asa Butterfield", "Hailee Steinfeld", "Ben Kingsley", "Viola Davis", "Abigail Breslin", "Harrison Ford"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "The English Teacher",
		year: 2013,
		cast: ["Julianne Moore", "Michael Angarano", "Greg Kinnear", "Lily Collins", "Nathan Lane"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Enough Said",
		year: 2013,
		cast: ["Julia Louis-Dreyfus", "James Gandolfini", "Catherine Keener", "Toni Collette", "Ben Falcone"],
		genres: ["Comedy"]
	},{ 
		title: "Epic",
		year: 2013,
		cast: ["Beyoncé Knowles", "Colin Farrell", "Josh Hutcherson", "Amanda Seyfried", "Christoph Waltz", "Aziz Ansari", "Pitbull", "Jason Sudeikis", "Chris O'Dowd", "Steven Tyler", "Blake Anderson", "Judah Friedlander"],
		genres: ["Adventure", "Animated", "Family", "Fantasy", "Comedy"]
	},{ 
		title: "Erased",
		year: 2013,
		cast: ["Aaron Eckhart", "Olga Kurylenko", "Liana Liberato", "Alexander Fehling", "Garrick Hagon"],
		genres: ["Thriller"]
	},{ 
		title: "Escape from Planet Earth",
		year: 2013,
		cast: ["Rob Corddry", "Brendan Fraser", "Sarah Jessica Parker", "William Shatner", "Jessica Alba", "Craig Robinson", "George Lopez", "James Corden", "Jane Lynch", "Sofía Vergara"],
		genres: ["Animated", "Science Fiction"]
	},{ 
		title: "Escape Plan",
		year: 2013,
		cast: ["Sylvester Stallone", "Arnold Schwarzenegger", "Jim Caviezel", "Curtis \"50 Cent\" Jackson", "Vinnie Jones", "Vincent D'Onofrio", "Amy Ryan"],
		genres: ["Action"]
	},{ 
		title: "Europa Report",
		year: 2013,
		cast: ["Christian Camargo", "Anamaria Marinca", "Michael Nyqvist", "Daniel Wu"],
		genres: ["Science Fiction"]
	},{ 
		title: "Evil Dead",
		year: 2013,
		cast: ["Jane Levy", "Shiloh Fernandez", "Lou Taylor Pucci", "Jessica Lucas", "Elizabeth Blackmore"],
		genres: ["Horror"]
	},{ 
		title: "The Face of Love",
		year: 2013,
		cast: ["Robin Williams", "Annette Bening", "Ed Harris", "Amy Brenneman", "Jess Weixler", "Linda Park"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Family Weekend",
		year: 2013,
		cast: ["Olesya Ruin", "Kristin Chenoweth", "Matthew Modine", "Joey King", "Shirley Jones"],
		genres: ["Drama"]
	},{ 
		title: "Far Marfa",
		year: 2013,
		cast: ["Johnny Sneed", "Jesse Bernstein", "Julie Mintz", "Ty Mitchell", "Jolyn Janis", "Will Nelson"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Fast & Furious 6",
		year: 2013,
		cast: ["Vin Diesel", "Paul Walker", "Dwayne Johnson", "Michelle Rodriguez", "Jordana Brewster", "Tyrese Gibson", "Chris Bridges", "Sung Kang", "Luke Evans", "Gina Carano", "John Ortiz", "Gal Gadot", "Joe Taslim", "Clara Paget", "Elsa Pataky", "Kim Kold", "Rita Ora", "Shea Whigham"],
		genres: ["Action"]
	},{ 
		title: "The Fifth Estate",
		year: 2013,
		cast: ["Benedict Cumberbatch", "Daniel Brühl", "Anthony Mackie", "David Thewlis", "Alicia Vikander", "Stanley Tucci", "Laura Linney"],
		genres: ["Thriller"]
	},{ 
		title: "Five Dances",
		year: 2013,
		cast: ["Ryan Steele", "Reed Luplau", "Catherine Miller", "Kimye Corwin"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Foodfight!",
		year: 2013,
		cast: ["Charlie Sheen", "Wayne Brady", "Hilary Duff", "Robert Costanzo", "Chris Kattan", "Eva Longoria", "Christopher Lloyd", "Ed Asner", "Jerry Stiller", "Christine Baranski"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Frances Ha",
		year: 2013,
		cast: ["Greta Gerwig", "Mickey Summer", "Adam Driver"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Frankenstein Theory",
		year: 2013,
		cast: ["Kris Lemche", "Joe Egender", "Timothy V. Murphy", "Heather Stephens"],
		genres: ["Horror"]
	},{ 
		title: "Free Birds",
		year: 2013,
		cast: ["Owen Wilson", "Woody Harrelson", "Amy Poehler", "Dan Fogler", "Lesley Nicol", "George Takei", "Colm Meaney", "Keith David", "Carlos Alazraqui", "Josh Lawson", "Danny Carey", "Dwight Howard"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "Fright Night 2: New Blood",
		year: 2013,
		cast: ["Will Payne", "Jaime Murray", "Sean Power", "Sacha Parkinson"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Frozen",
		year: 2013,
		cast: ["Kristen Bell", "Idina Menzel", "Jonathan Groff"],
		genres: ["Animated", "Fantasy", "Musical"]
	},{ 
		title: "The Frozen Ground",
		year: 2013,
		cast: ["Nicolas Cage", "John Cusack", "Vanessa Hudgens", "50 Cent", "Radha Mitchell"],
		genres: ["Thriller"]
	},{ 
		title: "Fruitvale Station",
		year: 2013,
		cast: ["Michael B. Jordan", "Melonie Diaz", "Kevin Durand", "Chad Michael Murray", "Ahna O'Reilly", "Octavia Spencer"],
		genres: ["Drama"]
	},{ 
		title: "G.B.F.",
		year: 2013,
		cast: ["Sasha Pieterse", "Andrea Bowen", "Xosha Roquemore", "JoJo", "Molly Tarlov"],
		genres: ["Comedy"]
	},{ 
		title: "G.I. Joe: Retaliation",
		year: 2013,
		cast: ["D. J. Cotrona", "Lee Byung-hun", "Adrianne Palicki", "Ray Park", "Jonathan Pryce", "Ray Stevenson", "Channing Tatum", "Bruce Willis", "Dwayne Johnson"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Gangster Squad",
		year: 2013,
		cast: ["Josh Brolin", "Ryan Gosling", "Nick Nolte", "Emma Stone", "Anthony Mackie", "Giovanni Ribisi", "Michael Peña", "Robert Patrick", "Sean Penn"],
		genres: ["Action", "Crime", "Drama"]
	},{ 
		title: "Generation Iron",
		year: 2013,
		cast: ["Follows bodybuilders as they train and compete for", "Mr. Olympia", "."],
		genres: ["Documentary"]
	},{ 
		title: "Geography Club",
		year: 2013,
		cast: ["Nikki Blonsky", "Cameron Deane Shute", "Justin Deeley", "Alex Newell", "Ana Gasteyer", "Meaghan Martin", "Scott Bakula", "Allie Gonino"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Getaway",
		year: 2013,
		cast: ["Ethan Hawke", "Selena Gomez", "Jon Voight", "Rebecca Budig", "Paul Freeman", "Bruce Payne"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "The Ghost Army",
		year: 2013,
		cast: ["A secret U.S. army unit set to misdirect Nazi Germany."],
		genres: ["Documentary"]
	},{ 
		title: "Girl Most Likely",
		year: 2013,
		cast: ["Kristen Wiig", "Annette Bening", "Matt Dillon", "Darren Criss"],
		genres: ["Comedy"]
	},{ 
		title: "A Glimpse Inside the Mind of Charles Swan III",
		year: 2013,
		cast: ["Charlie Sheen", "Jason Schwartzman", "Katheryn Winnick", "Aubrey Plaza", "Mary Elizabeth Winstead", "Patricia Arquette", "Bill Murray"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Go for Sisters",
		year: 2013,
		cast: ["Lisa Gay Hamilton", "Edward James Olmos", "Yolonda Ross", "Hilary Barraford"],
		genres: ["Thriller"]
	},{ 
		title: "A Good Day to Die Hard",
		year: 2013,
		cast: ["Bruce Willis", "Jai Courtney", "Sebastian Koch", "Mary Elizabeth Winstead", "Yuliya Snigir", "Radivoje Bukvić", "Cole Hauser", "Amaury Nolasco"],
		genres: ["Action"]
	},{ 
		title: "Grace Unplugged",
		year: 2013,
		cast: ["AJ Michalka", "James Denton", "Kevin Pollak", "Michael Welch", "Shawnee Smith", "Chris Tomlin"],
		genres: ["Drama"]
	},{ 
		title: "Gravity",
		year: 2013,
		cast: ["Sandra Bullock", "George Clooney"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "The Great Gatsby",
		year: 2013,
		cast: ["Leonardo DiCaprio", "Tobey Maguire", "Carey Mulligan", "Joel Edgerton", "Amitabh Bachchan", "Isla Fisher", "Jason Clarke", "Elizabeth Debicki"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "The Green Inferno",
		year: 2013,
		cast: ["Lorenza Izzo", "Ariel Levy", "Sky Ferreira", "Daryl Sabara", "Kirby Bliss Blanton"],
		genres: ["Horror"]
	},{ 
		title: "Greetings from Tim Buckley",
		year: 2013,
		cast: ["Penn Badgley", "Imogen Poots", "Norbert Leo Butz", "Ben Rosenfield", "Frank Wood", "Frank Bello", "William Sadler", "Kate Nash", "Jessica Stone"],
		genres: ["Drama", "Musical"]
	},{ 
		title: "Grow Up, Tony Phillips",
		year: 2013,
		cast: ["Tony Vespe", "Caleb Barwick", "Devin Bonnée", "AJ Bowen"],
		genres: ["Comedy"]
	},{ 
		title: "Grown Ups 2",
		year: 2013,
		cast: ["Adam Sandler", "Kevin James", "Chris Rock", "David Spade", "Salma Hayek", "Maya Rudolph", "Maria Bello", "Nick Swardson", "Taylor Lautner", "David Henrie", "Patrick Schwarzenegger", "Cheri Oteri", "Steve Buscemi", "Milo Ventimiglia", "Aly Michalka", "Alexander Ludwig", "Andy Samberg", "Steve Austin", "Will Forte", "Taran Killam", "Jon Lovitz", "Akiva Schaffer", "Jorma Taccone", "Tim Meadows", "Shaquille O'Neal", "Colin Quinn", "Bobby Moynihan", "Paul Brittain"],
		genres: ["Comedy"]
	},{ 
		title: "Grudge Match",
		year: 2013,
		cast: ["Robert De Niro", "Sylvester Stallone", "Kevin Hart", "Alan Arkin", "Kim Basinger", "Jon Bernthal"],
		genres: ["Comedy"]
	},{ 
		title: "The Hangover Part III",
		year: 2013,
		cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis", "Ken Jeong", "Heather Graham", "Jeffrey Tambor", "Justin Bartha", "John Goodman"],
		genres: ["Comedy"]
	},{ 
		title: "Hansel & Gretel",
		year: 2013,
		cast: ["Dee Wallace", "Brent Lydic", "Stephanie Greco", "Steve Hanks", "Clark Perry"],
		genres: ["Horror"]
	},{ 
		title: "Hansel & Gretel Get Baked",
		year: 2013,
		cast: ["Michael Welch", "Molly Quinn", "Lara Flynn Boyle", "Lochlyn Munro"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Hansel & Gretel: Witch Hunters",
		year: 2013,
		cast: ["Jeremy Renner", "Gemma Arterton", "Famke Janssen", "Peter Stormare", "Pihla Viitala", "Thomas Mann", "Derek Mears", "Robin Atkin Downes", "(voice)", "Rainer Bock", "Monique Ganderton", "Ingrid Bolsø Berdal", "Zoë Bell", "Joanna Kulig"],
		genres: ["Action", "Adventure", "Horror"]
	},{ 
		title: "Hansel & Gretel: Warriors of Witchcraft",
		year: 2013,
		cast: ["Booboo Stewart", "Fivel Stewart", "Eric Roberts", "Vanessa Angel", "Cherie Currie"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Hatchet III",
		year: 2013,
		cast: ["Danielle Harris", "Kane Hodder", "Zach Galligan", "Caroline Williams", "Derek Mears", "Cody Blue Snider"],
		genres: ["Slasher"]
	},{ 
		title: "Hateship, Loveship",
		year: 2013,
		cast: ["Kristen Wiig", "Hailee Steinfeld", "Guy Pearce", "Nick Nolte"],
		genres: ["Drama"]
	},{ 
		title: "A Haunted House",
		year: 2013,
		cast: ["Marlon Wayans", "Essence Atkins", "Cedric the Entertainer", "Nick Swardson", "David Koechner", "Dave Sheridan"],
		genres: ["Horror", "Comedy", "Satire"]
	},{ 
		title: "The Haunting in Connecticut 2: Ghosts of Georgia",
		year: 2013,
		cast: ["Abigail Spencer", "Chad Michael Murray", "Katee Sackhoff", "Emily Alyn Lind", "Cicely Tyson"],
		genres: ["Horror"]
	},{ 
		title: "He's Way More Famous Than You",
		year: 2013,
		cast: ["Jesse Eisenberg", "Ben Stiller", "Halley Feiffer", "Vanessa L. Williams"],
		genres: ["Comedy"]
	},{ 
		title: "The Heat",
		year: 2013,
		cast: ["Sandra Bullock", "Melissa McCarthy", "Demián Bichir", "Marlon Wayans", "Michael Rapaport"],
		genres: []
	},{ 
		title: "Hell Baby",
		year: 2013,
		cast: ["Rob Corddry", "Leslie Bibb", "Keegan-Michael Key", "Riki Lindhome", "Rob Huebel", "Paul Scheer", "Robert Ben Garant", "Thomas Lennon", "Michael Ian Black", "Kumail Nanjiani", "Dave Holmes"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Her",
		year: 2013,
		cast: ["Joaquin Phoenix", "Amy Adams", "Rooney Mara", "Scarlett Johansson", "(voice)"],
		genres: ["Romance"]
	},{ 
		title: "Hit & Stay",
		year: 2013,
		cast: ["The actions of the", "Catonsville Nine", "in the Vietnam War."],
		genres: ["Documentary"]
	},{ 
		title: "The Hobbit: The Desolation of Smaug",
		year: 2013,
		cast: ["Ian McKellen", "Martin Freeman", "Benedict Cumberbatch", "Lee Pace", "Evangeline Lilly", "Stephen Fry", "James Nesbitt"],
		genres: ["Adventure", "Fantasy"]
	},{ 
		title: "Home Run",
		year: 2013,
		cast: ["Scott Elrod", "Dorian Brown", "Charles Henry Wyson", "Vivica A. Fox"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Homefront",
		year: 2013,
		cast: ["Jason Statham", "James Franco", "Winona Ryder", "Kate Bosworth", "Rachelle Lefevre", "Frank Grillo", "Clancy Brown", "Izabela Vidovic"],
		genres: ["Action", "Drama"]
	},{ 
		title: "The Hospital",
		year: 2013,
		cast: ["Jim O'Rear", "Daniel Emery Taylor", "John Dugan", "Jason Crowe", "April Monique Burril"],
		genres: ["Horror"]
	},{ 
		title: "The Host",
		year: 2013,
		cast: ["Saoirse Ronan", "Jake Abel", "Max Irons", "Frances Fisher", "Chandler Canterbury", "Diane Kruger", "William Hurt"],
		genres: ["Romance", "Science Fiction"]
	},{ 
		title: "The Hot Flashes",
		year: 2013,
		cast: ["Brooke Shields", "Daryl Hannah", "Wanda Sykes", "Virginia Madsen", "Camryn Manheim"],
		genres: ["Drama"]
	},{ 
		title: "Hours",
		year: 2013,
		cast: ["Paul Walker", "Genesis Rodriguez"],
		genres: ["Drama"]
	},{ 
		title: "House of Dust",
		year: 2013,
		cast: ["Inbar Lavi", "Steven Grayhm", "Eddie Hassell", "Holland Roden", "John Lee Ames"],
		genres: ["Horror"]
	},{ 
		title: "How to Lose Your Virginity",
		year: 2013,
		cast: ["How the concept of virginity shapes the lives of men and women."],
		genres: ["Documentary"]
	},{ 
		title: "How to Be a Man",
		year: 2013,
		cast: ["Gavin McInnes", "Liam Aiken"],
		genres: ["Comedy"]
	},{ 
		title: "The Hunger Games: Catching Fire",
		year: 2013,
		cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth", "Woody Harrelson", "Elizabeth Banks", "Sam Claflin", "Jena Malone"],
		genres: ["Action", "Drama", "Science Fiction"]
	},{ 
		title: "I Am Divine",
		year: 2013,
		cast: ["Focuses on the drag queen", "Divine", "."],
		genres: ["Documentary"]
	},{ 
		title: "I'm in Love with a Church Girl",
		year: 2013,
		cast: ["Jeff \"Ja Rule\" Atkins", "Adrienne Bailon", "Stephen Baldwin", "Vincent Pastore", "TobyMac", "T-Bone", "Michael Madsen"],
		genres: ["Drama"]
	},{ 
		title: "I Know That Voice",
		year: 2013,
		cast: ["The tales about voice acting."],
		genres: ["Documentary"]
	},{ 
		title: "I Spit on Your Grave 2",
		year: 2013,
		cast: ["Jemma Dallender", "Yavor Baharoff", "Joe Absolom", "Aleksandar Aleksiev"],
		genres: ["Horror"]
	},{ 
		title: "I Used to Be Darker",
		year: 2013,
		cast: ["Deragh Campbell", "Hannah Gross", "Ned Oldham", "Kim Taylor"],
		genres: ["Drama"]
	},{ 
		title: "The Iceman",
		year: 2013,
		cast: ["Michael Shannon", "Winona Ryder", "Ray Liotta", "Chris Evans", "James Franco", "David Schwimmer", "Stephen Dorff", "Erin Cummings", "Robert Davi", "Jay Giannone", "Weronika Rosati"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Identity Thief",
		year: 2013,
		cast: ["Jason Bateman", "Melissa McCarthy", "Jon Favreau", "Amanda Peet", "T.I.", "Genesis Rodriguez", "Morris Chestnut", "John Cho", "Robert Patrick", "Eric Stonestreet", "Maggie Elizabeth Jones", "Clark Duke", "Ben Falcone"],
		genres: ["Comedy"]
	},{ 
		title: "In a World...",
		year: 2013,
		cast: ["Lake Bell", "Fred Melamed", "Demetri Martin", "Michaela Watkins"],
		genres: ["Comedy"]
	},{ 
		title: "InAPPropriate Comedy",
		year: 2013,
		cast: ["Ari Shaffir", "Rob Schneider", "Michelle Rodriguez", "Adrien Brody", "Lindsay Lohan"],
		genres: ["Comedy"]
	},{ 
		title: "The Incredible Burt Wonderstone",
		year: 2013,
		cast: ["Steve Carell", "Steve Buscemi", "Olivia Wilde", "Alan Arkin", "James Gandolfini", "Jim Carrey"],
		genres: ["Comedy"]
	},{ 
		title: "Indescribable",
		year: 2013,
		cast: ["Seth Pruski", "Rich Swingle", "Jason Cockerham", "Danielle Duncan"],
		genres: ["Drama"]
	},{ 
		title: "Inequality for All",
		year: 2013,
		cast: ["Shows income inequality in the", "United States", "."],
		genres: ["Documentary"]
	},{ 
		title: "The Inevitable Defeat of Mister & Pete",
		year: 2013,
		cast: ["Skylan Brooks", "Ethan Dizon", "Anthony Mackie", "Adewale Akinnuoye-Agbaje"],
		genres: ["Drama"]
	},{ 
		title: "Inside Llewyn Davis",
		year: 2013,
		cast: ["Oscar Isaac", "Carey Mulligan", "John Goodman", "Garrett Hedlund", "Justin Timberlake"],
		genres: ["Musical", "Drama"]
	},{ 
		title: "Insidious: Chapter 2",
		year: 2013,
		cast: ["Patrick Wilson", "Rose Byrne", "Lin Shaye", "Ty Simpkins", "Barbara Hershey"],
		genres: ["Horror"]
	},{ 
		title: "The Internship",
		year: 2013,
		cast: ["Vince Vaughn", "Owen Wilson", "Dylan O'Brien", "Rose Byrne", "Jessica Szohr", "Max Minghella", "Aasif Mandvi", "John Goodman", "Will Ferrell", "JoAnna Garcia", "Eric Andre", "Josh Brener", "Tiya Sircar", "Tobit Raphael", "Josh Gad"],
		genres: ["Comedy"]
	},{ 
		title: "Iron Man 3",
		year: 2013,
		cast: ["Robert Downey, Jr.", "Gwyneth Paltrow", "Don Cheadle", "Guy Pearce", "Rebecca Hall", "Stephanie Szostak", "James Badge Dale", "Jon Favreau", "Ben Kingsley"],
		genres: ["Superhero"]
	},{ 
		title: "ISteve",
		year: 2013,
		cast: ["Justin Long", "Art Evans", "Juzo Yoshida", "Brian Huskey", "Jorge Garcia"],
		genres: ["Satire"]
	},{ 
		title: "It's a Disaster",
		year: 2013,
		cast: ["Rachel Boston", "Kevin M. Brennan", "David Cross", "America Ferrera", "Jeff Grace", "Erinn Hayes", "Blaise Miller", "Julia Stiles", "Todd Berger"],
		genres: ["Comedy"]
	},{ 
		title: "Jack the Giant Killer",
		year: 2013,
		cast: ["Ben Cross", "Jane March", "Jamie Atkins", "Vicki Glover", "Harry Dyer"],
		genres: ["Fantasy"]
	},{ 
		title: "Jack the Giant Slayer",
		year: 2013,
		cast: ["Nicholas Hoult", "Eleanor Tomlinson", "Stanley Tucci", "Ian McShane", "Bill Nighy", "Ewan McGregor"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "Jackass Presents: Bad Grandpa",
		year: 2013,
		cast: ["Johnny Knoxville", "Jackson Nicoll"],
		genres: ["Comedy"]
	},{ 
		title: "Java Heat",
		year: 2013,
		cast: ["Kellan Lutz", "Mickey Rourke", "Ario Bayu", "Atiqah Hasiholan"],
		genres: ["Action"]
	},{ 
		title: "Jay & Silent Bob's Super Groovy Cartoon Movie",
		year: 2013,
		cast: ["Jason Mewes", "Kevin Smith", "Eliza Dushku", "Tara Strong", "Ralph Garman", "Neil Gaiman"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "Jayne Mansfield's Car",
		year: 2013,
		cast: ["Robert Duvall", "John Hurt", "Billy Bob Thornton", "Kevin Bacon", "Robert Patrick", "Ray Stevenson", "Katherine LaNasa", "Frances O'Connor", "Shawnee Smith", "Ron White"],
		genres: ["Drama"]
	},{ 
		title: "Jobs",
		year: 2013,
		cast: ["Ashton Kutcher", "Dermot Mulroney", "Josh Gad", "Lukas Haas", "J. K. Simmons", "Lesley Ann Warren", "Ron Eldard", "Ahna O'Reilly", "John Getz", "James Woods", "Matthew Modine"],
		genres: ["Drama"]
	},{ 
		title: "John Dies at the End",
		year: 2013,
		cast: ["Chase Williamson", "Rob Mayes", "Paul Giamatti", "Clancy Brown", "Glynn Turman", "Doug Jones", "Daniel Roebuck"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "Joe",
		year: 2013,
		cast: ["Nicolas Cage", "Tye Sheridan", "Heather Kafka", "Ronnie Gene Blevins", "Sue Rock"],
		genres: ["Drama"]
	},{ 
		title: "Jug Face",
		year: 2013,
		cast: ["Lauren Ashley Carter", "Sean Bridgers", "Sean Young"],
		genres: ["Horror"]
	},{ 
		title: "Justice League: The Flashpoint Paradox",
		year: 2013,
		cast: ["Justin Chambers", "Kevin McKidd", "C. Thomas Howell", "Michael B. Jordan"],
		genres: ["Animated", "Superhero"]
	},{ 
		title: "Justin Bieber's Believe",
		year: 2013,
		cast: ["Focuses on Justin Bieber's rise to fame."],
		genres: ["Biography", "Documentary"]
	},{ 
		title: "Kevin Hart: Let Me Explain",
		year: 2013,
		cast: ["Features", "Kevin Hart", "'s performance in 2012"],
		genres: ["Comedy", "Documentary"]
	},{ 
		title: "Kick-Ass 2",
		year: 2013,
		cast: ["Aaron Taylor-Johnson", "Christopher Mintz-Plasse", "Chloë Grace Moretz", "Jim Carrey"],
		genres: ["Action", "Comedy", "Superhero"]
	},{ 
		title: "Kill Your Darlings",
		year: 2013,
		cast: ["Daniel Radcliffe", "Dane DeHaan", "Ben Foster", "Michael C. Hall", "Jack Huston", "Jennifer Jason Leigh", "Elizabeth Olsen"],
		genres: ["Drama"]
	},{ 
		title: "Killing Season",
		year: 2013,
		cast: ["Robert De Niro", "John Travolta", "Milo Ventimiglia", "Elizabeth Olin"],
		genres: ["Action"]
	},{ 
		title: "The Kings of Summer",
		year: 2013,
		cast: ["Nick Robinson", "Gabriel Basso", "Moisés Arias", "Nick Offerman", "Alison Brie", "Megan Mullally", "Marc Evan Jackson", "Mary Lynn Rajskub"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Kink",
		year: 2013,
		cast: ["About the website", "Kink.com", "."],
		genres: ["Documentary"]
	},{ 
		title: "Kiss of the Damned",
		year: 2013,
		cast: ["Joséphine de La Baume", "Milo Ventimiglia", "Roxane Mesquida", "Michael Rapaport", "Riley Keough", "Ching Valdes-Aran", "Anna Mouglalis"],
		genres: ["Horror"]
	},{ 
		title: "Knife Fight",
		year: 2013,
		cast: ["Rob Lowe", "Julie Bowen", "Saffron Burrows", "Jamie Chung", "David Harbour", "Eric McCormack", "Jennifer Morrison", "Carrie-Anne Moss", "Richard Schiff", "Amanda Crew", "Shirley Manson", "Davey Havok"],
		genres: ["Political", "Thriller"]
	},{ 
		title: "Koch",
		year: 2013,
		cast: ["The life and career of former New York Mayor", "Ed Koch", "."],
		genres: ["Documentary"]
	},{ 
		title: "Lake Windfall",
		year: 2013,
		cast: ["Focuses on deaf people at a weekend camp expedition."],
		genres: ["Documentary"]
	},{ 
		title: "Last Call",
		year: 2013,
		cast: ["Travis Van Winkle", "Ryan Hansen", "Tara Reid"],
		genres: ["Comedy"]
	},{ 
		title: "The Last Exorcism Part II",
		year: 2013,
		cast: ["Ashley Bell", "Julia Garner", "Spencer Treat Clark", "Louis Herthum"],
		genres: ["Horror"]
	},{ 
		title: "The Last of Robin Hood",
		year: 2013,
		cast: ["Kevin Kline", "Dakota Fanning", "Susan Sarandon", "Patrick St. Esprit"],
		genres: ["Drama"]
	},{ 
		title: "The Last Stand",
		year: 2013,
		cast: ["Arnold Schwarzenegger", "Forest Whitaker", "Johnny Knoxville", "Rodrigo Santoro", "Jaimie Alexander", "Luis Guzmán", "Eduardo Noriega", "Peter Stormare", "Zach Gilford", "Genesis Rodriguez"],
		genres: ["Action"]
	},{ 
		title: "Last Vegas",
		year: 2013,
		cast: ["Michael Douglas", "Robert De Niro", "Morgan Freeman", "Kevin Kline", "Mary Steenburgen"],
		genres: ["Comedy"]
	},{ 
		title: "Last Weekend",
		year: 2013,
		cast: ["Patricia Clarkson", "Zachary Booth", "Joseph Cross", "Chris Mulkey"],
		genres: ["Drama"]
	},{ 
		title: "The Legend of Jimi Lazer",
		year: 2013,
		cast: ["Robbie Beniuk", "Patrick J. Mitchell", "Elijah Black", "Robert Tanos"],
		genres: ["Drama"]
	},{ 
		title: "Let the Fire Burn",
		year: 2013,
		cast: ["The stand-off between a black liberation group and police."],
		genres: ["Documentary"]
	},{ 
		title: "Liars All",
		year: 2013,
		cast: ["Matt Lanter", "Sara Paxton", "Randy Wayne", "Darin Brooks"],
		genres: ["Thriller"]
	},{ 
		title: "Life of Crime",
		year: 2013,
		cast: ["Jennifer Aniston", "Tim Robbins", "Isla Fisher", "John Hawkes", "Mos Def", "Will Forte"],
		genres: ["Comedy"]
	},{ 
		title: "The Lifeguard",
		year: 2013,
		cast: ["Kristen Bell", "Mamie Gummer", "Martin Starr", "Alex Shaffer", "Joshua Harto", "David Lambert", "Amy Madigan"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Lil Bub & Friendz",
		year: 2013,
		cast: ["Features cats based on Internet memes and viral videos."],
		genres: ["Documentary"]
	},{ 
		title: "Little Feet",
		year: 2013,
		cast: ["Rene Cuante-Bautista", "Lana Rockwell", "Nico Rockwell"],
		genres: ["Drama"]
	},{ 
		title: "The Lone Ranger",
		year: 2013,
		cast: ["Armie Hammer", "Johnny Depp", "William Fichtner", "Tom Wilkinson", "Barry Pepper", "Helena Bonham Carter", "Ruth Wilson", "James Badge Dale", "Mason Cook"],
		genres: ["Action", "Adventure", "Western"]
	},{ 
		title: "The Lords of Salem",
		year: 2013,
		cast: ["Sheri Moon Zombie", "Bruce Davison", "Jeff Daniel Phillips", "Ken Foree", "Patricia Quinn", "Dee Wallace", "María Conchita Alonso", "Judy Geeson", "Meg Foster"],
		genres: ["Horror"]
	},{ 
		title: "The Lost Medallion: The Adventures of Billy Stone",
		year: 2013,
		cast: ["Billy Unger", "Sammi Hanratty", "James Hong", "Jansen Panettiere"],
		genres: ["Adventure"]
	},{ 
		title: "Lovelace",
		year: 2013,
		cast: ["Amanda Seyfried", "Peter Sarsgaard", "Hank Azaria", "Adam Brody", "Bobby Cannavale", "James Franco", "Debi Mazar", "Chris Noth", "Chloë Sevigny", "Sharon Stone", "Juno Temple"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Lone Survivor",
		year: 2013,
		cast: ["Mark Wahlberg", "Taylor Kitsch", "Emile Hirsch", "Ben Foster", "Eric Bana"],
		genres: ["War"]
	},{ 
		title: "Lucky Them",
		year: 2013,
		cast: ["Toni Collette", "Ahna O'Reilly", "Thomas Haden Church", "Amy Seimetz"],
		genres: ["Comedy"]
	},{ 
		title: "LUV",
		year: 2013,
		cast: ["Common", "Michael Rainey Jr.", "Charles S. Dutton", "Meagan Good", "Marc John Jefferies", "Lonette McKee", "Michael K. Williams", "Tracey Heggins", "Clark Johnson", "Russell Hornsby", "Sammi Rotibi", "Dennis Haysbert", "Danny Glover"],
		genres: ["Drama"]
	},{ 
		title: "Machete Kills",
		year: 2013,
		cast: ["Danny Trejo", "Michelle Rodriguez", "Sofía Vergara", "Amber Heard", "Carlos Estevez", "Antonio Banderas", "Cuba Gooding Jr.", "Walt Goggins", "William Sadler", "Demián Bichir", "Mel Gibson"],
		genres: ["Action"]
	},{ 
		title: "A Madea Christmas",
		year: 2013,
		cast: ["Tyler Perry", "Kathy Najimy", "Chad Michael Murray", "Anna Maria Horsford", "Tika Sumpter", "Eric Lively", "JR Lemon", "Alicia Witt", "Lisa Whelchel", "Larry the Cable Guy"],
		genres: ["Comedy"]
	},{ 
		title: "Magic Magic",
		year: 2013,
		cast: ["Juno Temple", "Emily Browning", "Michael Cera"],
		genres: ["Thriller"]
	},{ 
		title: "Manhattan Romance",
		year: 2013,
		cast: ["Gaby Hoffmann", "Katharine Waterstone", "Zach Grenier"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Man of Steel",
		year: 2013,
		cast: ["Henry Cavill", "Amy Adams", "Michael Shannon", "Kevin Costner", "Diane Lane", "Laurence Fishburne", "Antje Traue", "Ayelet Zurer", "Russell Crowe"],
		genres: ["Superhero"]
	},{ 
		title: "Manhunt: The Search for Bin Laden",
		year: 2013,
		cast: ["Explores the investigation of Osama Bin Laden from 1995 to 2011."],
		genres: ["Documentary"]
	},{ 
		title: "The Marine 3: Homefront",
		year: 2013,
		cast: ["The Miz", "Neal McDonough", "Michael Eklund", "Ashley Bell", "Jared Keeso"],
		genres: ["Action"]
	},{ 
		title: "Masterminds",
		year: 2013,
		cast: ["Tila Tequila", "Nick Hogan", "Tray Chaney"],
		genres: ["Drama"]
	},{ 
		title: "McCanick",
		year: 2013,
		cast: ["David Morse", "Cory Monteith", "Mike Vogel", "Ciarán Hinds"],
		genres: ["Crime"]
	},{ 
		title: "Medora",
		year: 2013,
		cast: ["Features a basketball team."],
		genres: ["Documentary"]
	},{ 
		title: "The Men Who Lost China",
		year: 2013,
		cast: ["Explores the attitude between United States and China."],
		genres: ["Documentary"]
	},{ 
		title: "Metallica Through the Never",
		year: 2013,
		cast: ["Dane DeHaan", "James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"],
		genres: ["Documentary", "Musical"]
	},{ 
		title: "Monsters University",
		year: 2013,
		cast: ["Billy Crystal", "John Goodman", "Steve Buscemi", "Joel Murray", "Sean Hayes", "Dave Foley", "Peter Sohn", "Charlie Day", "Frank Oz", "Helen Mirren", "Alfred Molina", "Nathan Fillion", "Aubrey Plaza", "Tyler Labine", "John Krasinski", "Bonnie Hunt", "Bobby Moynihan", "Julia Sweeney", "Beth Behrs", "John Ratzenberger"],
		genres: ["Animated", "Comedy", "Family"]
	},{ 
		title: "The Mortal Instruments: City of Bones",
		year: 2013,
		cast: ["Lily Collins", "Jamie Campbell Bower", "Robert Sheehan", "Kevin Zegers", "Lena Headey", "Kevin Durand", "Aidan Turner", "Godfrey Gao", "C. C. H. Pounder", "Jared Harris", "Jonathan Rhys Meyers"],
		genres: ["Action", "Adventure", "Fantasy"]
	},{ 
		title: "Movie 43",
		year: 2013,
		cast: ["Elizabeth Banks", "Kristen Bell", "Halle Berry", "Leslie Bibb", "Kate Bosworth", "Gerard Butler", "Josh Duhamel", "Anna Faris", "Richard Gere", "Terrence Howard", "Hugh Jackman", "Johnny Knoxville", "Justin Long", "Christopher Mintz-Plasse", "Chloë Grace Moretz", "Liev Schreiber", "Seann William Scott", "Emma Stone", "Jason Sudeikis", "Uma Thurman", "Naomi Watts", "Kate Winslet"],
		genres: ["Comedy"]
	},{ 
		title: "Much Ado About Nothing",
		year: 2013,
		cast: ["Amy Acker", "Alexis Denisof", "Reed Diamond", "Nathan Fillion", "Clark Gregg", "Fran Kranz", "Sean Maher", "Jillian Morgese"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Mud",
		year: 2013,
		cast: ["Matthew McConaughey", "Tye Sheridan", "Sam Shepard", "Michael Shannon", "Joe Don Baker", "Ray McKinnon", "Sarah Paulson", "Paul Sparks", "Jacob Lofland", "Reese Witherspoon"],
		genres: ["Drama"]
	},{ 
		title: "Nebraska",
		year: 2013,
		cast: ["Bruce Dern", "Will Forte", "June Squibb", "Stacy Keach", "Bob Odenkirk"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "No One Lives",
		year: 2013,
		cast: ["Luke Evans", "Adelaide Clemens", "Lee Tergesen", "Laura Ramsey", "Derek Magyar", "Beau Knapp", "America Olivo", "Brodus Clay", "Lindsey Shaw"],
		genres: ["Horror"]
	},{ 
		title: "Now You See Me",
		year: 2013,
		cast: ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson", "Mélanie Laurent", "Isla Fisher", "Dave Franco", "Michael Caine", "Morgan Freeman"],
		genres: ["Thriller"]
	},{ 
		title: "Oblivion",
		year: 2013,
		cast: ["Tom Cruise", "Olga Kurylenko", "Andrea Riseborough", "Morgan Freeman", "Nikolaj Coster-Waldau", "Melissa Leo", "Zoë Bell"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "Officer Down",
		year: 2013,
		cast: ["Stephen Dorff", "Dominic Purcell", "AnnaLynne McCord", "David Boreanaz", "Soulja Boy", "Stephen Lang", "James Woods"],
		genres: ["Action", "Crime"]
	},{ 
		title: "Oldboy",
		year: 2013,
		cast: ["Josh Brolin", "Elizabeth Olsen", "Sharlto Copley"],
		genres: ["Thriller"]
	},{ 
		title: "Olympus Has Fallen",
		year: 2013,
		cast: ["Gerard Butler", "Aaron Eckhart", "and", "Morgan Freeman", "Angela Bassett", "Robert Forster", "Cole Hauser", "Finley Jacobsen", "Ashley Judd", "Melissa Leo", "Dylan McDermott", "Radha Mitchell", "Rick Yune"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "One Direction: This Is Us",
		year: 2013,
		cast: ["Chronicling the lives of British boy band", "One Direction", "while on tour."],
		genres: ["Performance", "Documentary"]
	},{ 
		title: "Out of the Furnace",
		year: 2013,
		cast: ["Christian Bale", "Woody Harrelson", "Casey Affleck", "Forest Whitaker", "Willem Dafoe", "Zoe Saldana", "Sam Shepard"],
		genres: ["Crime"]
	},{ 
		title: "Oz the Great and Powerful",
		year: 2013,
		cast: ["James Franco", "Mila Kunis", "Rachel Weisz", "Michelle Williams", "Zach Braff", "Bill Cobbs", "Joey King", "(voice)", "Tony Cox"],
		genres: ["Adventure", "Fantasy"]
	},{ 
		title: "Pacific Rim",
		year: 2013,
		cast: ["Charlie Hunnam", "Idris Elba", "Rinko Kikuchi", "Charlie Day", "Rob Kazinsky", "Max Martini", "Ron Perlman"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "The Package",
		year: 2013,
		cast: ["Steve Austin", "Dolph Lundgren", "Eric Keenleyside", "Mike Dopud", "John Novak"],
		genres: ["Action"]
	},{ 
		title: "Pain & Gain",
		year: 2013,
		cast: ["Mark Wahlberg", "Dwayne Johnson", "Anthony Mackie", "Tony Shalhoub", "Ed Harris"],
		genres: ["Crime", "Comedy"]
	},{ 
		title: "Palominas",
		year: 2013,
		cast: ["Buck Taylor", "Daryl Hannah", "Wes Studi", "Ryan Merriman", "Michael Parks"],
		genres: ["Drama"]
	},{ 
		title: "Half Life",
		year: 2013,
		cast: [],
		genres: ["Drama"]
	},{ 
		title: "Paradise",
		year: 2013,
		cast: ["Julianne Hough", "Russell Brand", "Octavia Spencer", "Nick Offerman", "Holly Hunter"],
		genres: ["Drama"]
	},{ 
		title: "Paranoia",
		year: 2013,
		cast: ["Liam Hemsworth", "Gary Oldman", "Amber Heard", "Harrison Ford", "Lucas Till", "Embeth Davidtz", "Julian McMahon", "Josh Holloway", "and", "Richard Dreyfuss"],
		genres: ["Thriller"]
	},{ 
		title: "The Pardon",
		year: 2013,
		cast: ["Jaime King", "Jason Lewis", "M. C. Gainey", "Leigh Whannell"],
		genres: ["Drama"]
	},{ 
		title: "Parker",
		year: 2013,
		cast: ["Jason Statham", "Jennifer Lopez", "Michael Chiklis", "Bobby Cannavale", "and", "Nick Nolte", "Clifton Collins, Jr.", "Wendell Pierce", "Patti LuPone", "Carlos Carrasco", "Micah A. Hauptman", "Emma Booth", "Daniel Bernhardt"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Parkland",
		year: 2013,
		cast: ["James Badge Dale", "Zac Efron", "Colin Hanks", "David Harbour", "Jackie Earle Haley", "Marcia Gay Harden", "Ron Livingston", "Jeremy Strong", "Billy Bob Thornton", "Jacki Weaver", "Tom Welling", "Paul Giamatti"],
		genres: ["Drama"]
	},{ 
		title: "Pawn",
		year: 2013,
		cast: ["Jessica Szohr", "Nikki Reed", "Sean Faris", "Forest Whitaker"],
		genres: ["Thriller"]
	},{ 
		title: "Pawn Shop Chronicles",
		year: 2013,
		cast: ["Paul Walker", "Matt Dillon", "Brendan Fraser", "Kevin Rankin", "Vincent D'Onofrio", "Norman Reedus"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Penthouse North",
		year: 2013,
		cast: ["Michael Keaton", "Michelle Monaghan", "Barry Sloane", "Kaniehtiio Horn"],
		genres: ["Thriller"]
	},{ 
		title: "Percy Jackson: Sea of Monsters",
		year: 2013,
		cast: ["Logan Lerman", "Brandon T. Jackson", "Alexandra Daddario", "Leven Rambin", "Jake Abel", "Douglas Smith", "Stanley Tucci", "Nathan Fillion"],
		genres: ["Adventure", "Fantasy"]
	},{ 
		title: "Phantom",
		year: 2013,
		cast: ["Ed Harris", "David Duchovny", "William Fichtner", "Lance Henriksen", "Johnathon Schaech", "Jason Beghe", "Sean Patrick Flanery", "Jason Gray-Stanford", "Julian Adams"],
		genres: ["Thriller"]
	},{ 
		title: "Philomena",
		year: 2013,
		cast: ["Judi Dench", "Steve Coogan"],
		genres: ["Drama"]
	},{ 
		title: "Pit Stop",
		year: 2013,
		cast: ["Bill Heck", "Marcus DeAnda", "Amy Seimetz", "Alfredo Maduro"],
		genres: ["Drama"]
	},{ 
		title: "The Place Beyond the Pines",
		year: 2013,
		cast: ["Ryan Gosling", "Bradley Cooper", "Eva Mendes", "Ray Liotta", "Ben Mendelsohn", "Rose Byrne", "Mahershala Ali", "Bruce Greenwood", "Harris Yulin"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Planes",
		year: 2013,
		cast: ["Dane Cook", "Stacy Keach", "Priyanka Chopra", "Brad Garrett", "Teri Hatcher", "Cedric the Entertainer", "Julia Louis-Dreyfus", "John Cleese", "Carlos Alazraqui", "Roger Craig Smith", "and", "Gabriel Iglesias"],
		genres: ["Animated", "Comedy", "Family"]
	},{ 
		title: "Plush",
		year: 2013,
		cast: ["Emily Browning", "Xavier Samuel", "Cam Gigandet", "Dawn Olivieri", "Thomas Dekker", "Frances Fisher"],
		genres: ["Thriller"]
	},{ 
		title: "Plus One",
		year: 2013,
		cast: ["Ashley Hinshaw", "Rhys Wakefield", "Natalie Hall"],
		genres: ["Thriller"]
	},{ 
		title: "The Power Inside",
		year: 2013,
		cast: ["Harvey Keitel", "Analeigh Tipton", "Craig Roberts", "Reid Ewing", "Zack Pearlman"],
		genres: ["Thriller"]
	},{ 
		title: "The Pretty One",
		year: 2013,
		cast: ["Zoe Kazan", "Jake Johnson", "Ron Livingston", "Sterling Beaumon"],
		genres: ["Drama"]
	},{ 
		title: "Prince Avalanche",
		year: 2013,
		cast: ["Paul Rudd", "Emile Hirsch", "Lance LeGault"],
		genres: ["Drama"]
	},{ 
		title: "Prisoners",
		year: 2013,
		cast: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis", "Maria Bello", "Terrence Howard", "Melissa Leo", "Paul Dano"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Project 2x1",
		year: 2013,
		cast: ["Covers the lives of Judaism and West Indian residents in", "Brooklyn", "."],
		genres: ["Documentary"]
	},{ 
		title: "Proxy",
		year: 2013,
		cast: ["Alexia Rasmussen", "Joe Swanberg", "Alexa Havins", "Kristina Klebe", "Jim Dougherty"],
		genres: ["Horror"]
	},{ 
		title: "The Punk Singer",
		year: 2013,
		cast: ["Follows a girl band's rise into stardom."],
		genres: ["Documentary"]
	},{ 
		title: "The Purge",
		year: 2013,
		cast: ["Ethan Hawke", "Lena Headey", "Max Burkholder", "Tony Oller", "Edwin Hodge", "Rhys Wakefield", "Adelaide Kane", "Arija Bareikis", "Chris Mulkey", "Karen Strassman"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "Rapture-Palooza",
		year: 2013,
		cast: ["Craig Robinson", "Anna Kendrick", "John Francis Daley", "Ken Jeong"],
		genres: ["Fantasy", "Comedy"]
	},{ 
		title: "The Red Robin",
		year: 2013,
		cast: ["Judd Hirsch", "C. S. Lee", "Ryan O'Nan", "Joseph Lyle Taylor"],
		genres: ["Thriller"]
	},{ 
		title: "RED 2",
		year: 2013,
		cast: ["Bruce Willis", "John Malkovich", "Mary-Louise Parker", "Catherine Zeta-Jones", "Anthony Hopkins", "Helen Mirren"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "A Resurrection",
		year: 2013,
		cast: ["Devon Sawa", "Mischa Barton", "Michael Clarke Duncan", "Stuart Stone"],
		genres: ["Horror"]
	},{ 
		title: "Riddick",
		year: 2013,
		cast: ["Vin Diesel", "Jordi Mollà", "Matt Nable", "Katee Sackhoff", "Dave Bautista", "Bokeem Woodbine", "Raoul Trujillo", "Karl Urban"],
		genres: ["Action", "Science Fiction"]
	},{ 
		title: "R.I.P.D.",
		year: 2013,
		cast: ["Jeff Bridges", "Ryan Reynolds", "Kevin Bacon", "Mary-Louise Parker", "Stephanie Szostak"],
		genres: ["Supernatural"]
	},{ 
		title: "Roadside",
		year: 2013,
		cast: ["Ace Marrero", "Erin Stegeman", "Katie Stegeman"],
		genres: ["Mystery", "Drama"]
	},{ 
		title: "Robosapien: Rebooted",
		year: 2013,
		cast: ["Bobby Coleman", "Holliston Coleman", "Penelope Ann Miller", "Joaquim de Almeida"],
		genres: ["Animated"]
	},{ 
		title: "Robotech: Love Live Alive",
		year: 2013,
		cast: ["Frank Catalano", "Cam Clarke", "Richard Epcar", "Barbara Goodson", "Alexandra Kenworthy"],
		genres: ["Animated"]
	},{ 
		title: "Runner Runner",
		year: 2013,
		cast: ["Justin Timberlake", "Gemma Arterton", "Anthony Mackie", "Ben Affleck", "David Costabile", "Sam Palladio", "Oliver Cooper"],
		genres: ["Thriller"]
	},{ 
		title: "Safe Haven",
		year: 2013,
		cast: ["Josh Duhamel", "Julianne Hough", "Cobie Smulders", "David Lyons"],
		genres: ["Romance", "Thriller"]
	},{ 
		title: "Salinger",
		year: 2013,
		cast: ["About the reclusive writer", "J. D. Salinger", "."],
		genres: ["Documentary"]
	},{ 
		title: "The Saratov Approach",
		year: 2013,
		cast: ["The Kidnapping of", "Mormon Missionaries", "in Russia in 1998."],
		genres: ["Thriller"]
	},{ 
		title: "Savannah",
		year: 2013,
		cast: ["Jim Caviezel", "Jaimie Alexander", "Chiwetel Ejiofor", "Jack McBrayer", "Sam Shepard"],
		genres: ["Drama"]
	},{ 
		title: "Saving Lincoln",
		year: 2013,
		cast: ["Tom Amandes", "Lea Coco", "Penelope Ann Miller", "Bruce Davison", "Creed Bratton"],
		genres: ["Biography"]
	},{ 
		title: "Saving Mr. Banks",
		year: 2013,
		cast: ["Emma Thompson", "Tom Hanks", "Paul Giamatti", "Jason Schwartzman", "Colin Farrell"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Saving Santa",
		year: 2013,
		cast: ["Martin Freeman", "Tim Curry", "Noel Clarke", "Tim Conway", "Pam Ferris"],
		genres: ["Animated"]
	},{ 
		title: "Scary Movie 5",
		year: 2013,
		cast: ["Ashley Tisdale", "Simon Rex", "Erica Ash", "Katrina Bowden", "Heather Locklear", "Terry Crews", "J. P. Manoux", "Mac Miller", "Jerry O'Connell", "Molly Shannon", "Snoop Dogg", "Kate Walsh", "Katt Williams", "Sarah Hyland", "Bow Wow", "Jasmine Guy", "Lil Duval", "Chris Elliott", "Kendra Wilkinson", "Audrina Patridge", "Tyler Posey", "Mike Tyson", "Charlie Sheen", "Lindsay Lohan"],
		genres: ["Horror", "Comedy", "Satire"]
	},{ 
		title: "Scenic Route",
		year: 2013,
		cast: ["Josh Duhamel", "Dan Fogler"],
		genres: ["Thriller"]
	},{ 
		title: "Scrapper",
		year: 2013,
		cast: ["Michael Beach", "Anna Giles", "Aidan Gillen"],
		genres: ["Drama"]
	},{ 
		title: "Season of Miracles",
		year: 2013,
		cast: ["John Schneider", "Grayson Russell", "Andrew Wilson Williams", "Nancy Stafford"],
		genres: ["Drama"]
	},{ 
		title: "Sex Boss",
		year: 2013,
		cast: ["Curtiss Frisle", "Graham Skipper", "Chase Williamson"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "The Secret Life of Walter Mitty",
		year: 2013,
		cast: ["Ben Stiller", "Kristen Wiig", "Shirley MacLaine", "Adam Scott", "Kathryn Hahn", "Sean Penn"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Sexy Evil Genius",
		year: 2013,
		cast: ["Katee Sackhoff", "Michelle Trachtenberg", "Anthony Michael Hall", "Seth Green"],
		genres: ["Comedy"]
	},{ 
		title: "Shadow People",
		year: 2013,
		cast: ["Dallas Roberts", "Alison Eastwood", "Anne Dudek", "Mariah Bonner", "Mattie Liptak"],
		genres: ["Horror"]
	},{ 
		title: "She Wants Me",
		year: 2013,
		cast: ["Josh Gad", "Kristen Ruhlin", "Charlie Sheen", "Hilary Duff"],
		genres: ["Comedy"]
	},{ 
		title: "Short Term 12",
		year: 2013,
		cast: ["Brie Larson", "John Gallagher, Jr.", "Kaitlyn Dever", "Rami Malek"],
		genres: ["Drama"]
	},{ 
		title: "Shotgun Wedding",
		year: 2013,
		cast: ["Mike Damus", "Kim Shaw", "Joel McKinnon Miller"],
		genres: ["Comedy"]
	},{ 
		title: "Side Effects",
		year: 2013,
		cast: ["Jude Law", "Rooney Mara", "Catherine Zeta-Jones", "Channing Tatum"],
		genres: ["Thriller"]
	},{ 
		title: "A Single Shot",
		year: 2013,
		cast: ["Sam Rockwell", "Jeffrey Wright", "Kelly Reilly", "Jason Isaacs", "Joe Anderson", "Ophelia Lovibond"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Skinwalker Ranch",
		year: 2013,
		cast: ["Taylor Bateman", "Steve Berg", "Michael Black", "Erin Cahill", "Carol Call", "Kyle Davis"],
		genres: ["Horror"]
	},{ 
		title: "The Smurfs 2",
		year: 2013,
		cast: ["Neil Patrick Harris", "Jayma Mays", "Hank Azaria", "Tim Gunn", "Brendan Gleeson", "Katy Perry", "Jonathan Winters", "Alan Cumming", "Fred Armisen", "George Lopez", "Anton Yelchin", "John Oliver", "Christina Ricci", "J. B. Smoove", "Frank Welker"],
		genres: ["Adventure", "Family"]
	},{ 
		title: "The Smurfs: The Legend of Smurfy Hollow",
		year: 2013,
		cast: ["Fred Armisen", "Melissa Sturm", "Jack Angel", "Alan Cumming", "Anton Yelchin", "Hank Azaria", "Tom Kane"],
		genres: ["Animated", "Family"]
	},{ 
		title: "Snitch",
		year: 2013,
		cast: ["Dwayne Johnson", "Barry Pepper", "Jon Bernthal", "Michael K. Williams", "Melina Kanakaredes", "Nadine Velazquez", "Rafi Gavron", "David Harbour", "Benjamin Bratt", "Susan Sarandon"],
		genres: ["Action", "Drama"]
	},{ 
		title: "Some Velvet Morning",
		year: 2013,
		cast: ["Alice Eve", "Stanley Tucci"],
		genres: ["Drama"]
	},{ 
		title: "Sound City",
		year: 2013,
		cast: ["The history of Los Angeles recording studio", "Sound City Studios", "."],
		genres: ["Documentary"]
	},{ 
		title: "The Spectacular Now",
		year: 2013,
		cast: ["Miles Teller", "Shailene Woodley", "Brie Larson", "Jennifer Jason Leigh", "Kyle Chandler"],
		genres: ["Drama"]
	},{ 
		title: "Spiders 3D",
		year: 2013,
		cast: ["Patrick Muldoon", "Christa Campbell", "William Hope"],
		genres: ["Thriller"]
	},{ 
		title: "Spirit of the Marathon II",
		year: 2013,
		cast: ["Follows seven marathon runners competing at the 2012 Rome Marathon."],
		genres: ["Documentary"]
	},{ 
		title: "Spring Breakers",
		year: 2013,
		cast: ["James Franco", "Vanessa Hudgens", "Selena Gomez", "Ashley Benson", "Rachel Korine", "Gucci Mane"],
		genres: ["Comedy", "Drama", "Crime", "Thriller"]
	},{ 
		title: "Standing Up",
		year: 2013,
		cast: ["Annalise Basso", "Radha Mitchell", "Chandler Canterbury"],
		genres: ["Drama"]
	},{ 
		title: "Stand Up Guys",
		year: 2013,
		cast: ["Al Pacino", "Christopher Walken", "Alan Arkin", "Julianna Margulies"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Star Trek Into Darkness",
		year: 2013,
		cast: ["John Cho", "Benedict Cumberbatch", "Alice Eve", "Bruce Greenwood", "Simon Pegg", "Chris Pine", "Zachary Quinto", "Zoe Saldana", "Karl Urban", "Peter Weller", "Anton Yelchin"],
		genres: ["Action", "Adventure", "Science Fiction"]
	},{ 
		title: "The Starving Games",
		year: 2013,
		cast: ["Maiara Walsh", "Brant Daugherty", "Cody Christian"],
		genres: ["Satire"]
	},{ 
		title: "Stoker",
		year: 2013,
		cast: ["Mia Wasikowska", "Matthew Goode", "Nicole Kidman", "Dermot Mulroney", "Jacki Weaver", "Lucas Till", "Alden Ehrenreich", "Phyllis Somerville", "Judith Godrèche"],
		genres: ["Thriller"]
	},{ 
		title: "Straight A's",
		year: 2013,
		cast: ["Anna Paquin", "Ryan Phillippe", "Luke Wilson", "Powers Boothe", "Tess Harper"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Struck by Lightning",
		year: 2013,
		cast: ["Chris Colfer", "Allison Janney", "Christina Hendricks", "Sarah Hyland", "Carter Jenkins", "Brad William Henke", "Rebel Wilson", "Angela Kinsey", "Polly Bergen", "Dermot Mulroney"],
		genres: ["Comedy", "Drama", "Teen"]
	},{ 
		title: "Submit the Documentary",
		year: 2013,
		cast: ["Goes into the world of cyberbullying."],
		genres: ["Documentary"]
	},{ 
		title: "Sunlight Jr.",
		year: 2013,
		cast: ["Norman Reedus", "Naomi Watts", "Matt Dillon", "William Haze"],
		genres: ["Drama"]
	},{ 
		title: "Super Buddies",
		year: 2013,
		cast: ["John Ratzenberger", "Trey Loney", "Veronca Diaz-Carranza", "Jay Brazeau"],
		genres: ["Family"]
	},{ 
		title: "Superman: Unbound",
		year: 2013,
		cast: ["Matt Bomer", "Stana Katic", "John Noble", "Molly Quinn", "Diedrich Bader", "Alexander Gould", "Frances Conroy"],
		genres: ["Animated", "Superhero"]
	},{ 
		title: "Sweetwater",
		year: 2013,
		cast: ["Ed Harris", "January Jones", "Jason Isaacs", "Stephen Root"],
		genres: ["Thriller", "Western"]
	},{ 
		title: "A Teacher",
		year: 2013,
		cast: ["Lindsay Burdge", "Will Brittain", "Jennifer Prediger", "Jonny Mars"],
		genres: ["Drama"]
	},{ 
		title: "Temptation: Confessions of a Marriage Counselor",
		year: 2013,
		cast: ["Jurnee Smollett-Bell", "Lance Gross", "Vanessa Williams", "Kim Kardashian", "Robbie Jones", "and", "Brandy Norwood"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Test",
		year: 2013,
		cast: ["Kevin Clarke", "Kristoffer Cusick", "Scott Marlowe", "Matthew Risch", "Damon K. Sperber"],
		genres: ["Drama"]
	},{ 
		title: "Texas Chainsaw 3D",
		year: 2013,
		cast: ["Alexandra Daddario", "Dan Yeager", "Tremaine 'Trey Songz' Neverson", "Tania Raymonde", "Keram Malicki-Sánchez", "Thom Barry", "Paul Rae", "and", "Bill Moseley"],
		genres: ["Slasher"]
	},{ 
		title: "The Square",
		year: 2013,
		cast: ["Khalid Abdalla", "Ahmed Hassan", "Dina Abdullah", "Magdy Ashour", "Sherif Boray", "Aida Elkashef"],
		genres: ["Documentary"]
	},{ 
		title: "This Is the End",
		year: 2013,
		cast: ["James Franco", "Jonah Hill", "Seth Rogen", "Jay Baruchel", "Danny McBride", "Craig Robinson", "Michael Cera", "Emma Watson"],
		genres: ["Comedy"]
	},{ 
		title: "Thor: The Dark World",
		year: 2013,
		cast: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Stellan Skarsgård", "Idris Elba", "Christopher Eccleston", "Adewale Akinnuoye-Agbaje", "Kat Dennings", "Ray Stevenson", "Zachary Levi", "Tadanobu Asano", "Jaimie Alexander", "Rene Russo", "and", "Anthony Hopkins"],
		genres: ["Superhero"]
	},{ 
		title: "Turbo",
		year: 2013,
		cast: ["Ryan Reynolds", "Paul Giamatti", "Michael Peña", "Luis Guzmán", "Bill Hader", "Richard Jenkins", "Ken Jeong", "Michelle Rodriguez", "Maya Rudolph", "Ben Schwartz", "Kurtwood Smith", "Snoop Dogg", "Samuel L. Jackson"],
		genres: ["Animated", "Comedy", "Family"]
	},{ 
		title: "Tyler Perry Presents Peeples",
		year: 2013,
		cast: ["Craig Robinson", "Kerry Washington", "David Alan Grier", "S. Epatha Merkerson", "Tyler James Williams", "Melvin Van Peebles", "Diahann Carroll"],
		genres: ["Comedy"]
	},{ 
		title: "UnHung Hero",
		year: 2013,
		cast: ["A man travels the world in search to enlarge his penis."],
		genres: ["Documentary"]
	},{ 
		title: "The Unknown Known",
		year: 2013,
		cast: ["Features the life of", "Donald Rumsfeld", "."],
		genres: ["Documentary"]
	},{ 
		title: "The Unspeakable Act",
		year: 2013,
		cast: ["Tallie Medel", "Sky Hirschkron", "Aundrea Fares", "Kati Schwartz", "Caroline Luft", "Eleanore Pienta", "Collin Summers", "Caitlin Mehner", "Mike Faist", "Liz Toonkel", "Jessica Pinfield", "Sunita Mani", "Kate Lyn Sheil", "Gonzalo Cordova", "Zelda Knapp"],
		genres: ["Drama", "Teen"]
	},{ 
		title: "Unsupersize Me",
		year: 2013,
		cast: ["Centers around healthy eating and exercise."],
		genres: ["Documentary"]
	},{ 
		title: "The Upper Footage",
		year: 2013,
		cast: ["Found footage of the death of a female teen."],
		genres: ["Found Footage"]
	},{ 
		title: "Upstream Color",
		year: 2013,
		cast: ["Amy Seimetz", "Shane Carruth", "Andrew Sensenig", "Thiago Martins"],
		genres: ["Drama"]
	},{ 
		title: "V/H/S/2",
		year: 2013,
		cast: ["A series of", "found-footage", "shorts."],
		genres: ["Horror"]
	},{ 
		title: "Vehicle 19",
		year: 2013,
		cast: ["Paul Walker", "Naima McLean", "Gys de Villiers", "Leyla Haidarian"],
		genres: ["Thriller"]
	},{ 
		title: "Violet & Daisy",
		year: 2013,
		cast: ["Saoirse Ronan", "Alexis Bledel", "Marianne Jean-Baptiste", "Danny Trejo", "James Gandolfini"],
		genres: ["Action", "Comedy", "Drama"]
	},{ 
		title: "The Wait",
		year: 2013,
		cast: ["Jena Malone", "Chloë Sevigny", "Luke Grimes", "Devon Gearhart"],
		genres: ["Drama"]
	},{ 
		title: "Walking with Dinosaurs",
		year: 2013,
		cast: ["Dinosaurs from the Late Cretaceous period."],
		genres: ["Documentary", "Family"]
	},{ 
		title: "Warm Bodies",
		year: 2013,
		cast: ["Nicholas Hoult", "Teresa Palmer", "Rob Corddry", "Dave Franco", "Analeigh Tipton", "Cory Hardrict", "and", "John Malkovich"],
		genres: ["Horror", "Romance", "Comedy"]
	},{ 
		title: "The Way, Way Back",
		year: 2013,
		cast: ["Steve Carell", "Toni Collette", "Allison Janney", "AnnaSophia Robb", "Sam Rockwell", "Maya Rudolph", "Rob Corddry", "Amanda Peet", "Liam James"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "We Are What We Are",
		year: 2013,
		cast: ["Bill Sage", "Julia Garner", "Ambyr Childers", "Odeya Rush"],
		genres: ["Horror"]
	},{ 
		title: "We Steal Secrets: The Story of WikiLeaks",
		year: 2013,
		cast: ["Features the organization", "WikiLeaks", "started by", "Julian Assange"],
		genres: ["Documentary"]
	},{ 
		title: "We're the Millers",
		year: 2013,
		cast: ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts", "Will Poulter", "Ed Helms", "Nick Offerman"],
		genres: ["Comedy"]
	},{ 
		title: "Welcome to the Jungle",
		year: 2013,
		cast: ["Jean-Claude Van Damme", "Adam Brody", "Rob Huebel", "Kristopher Van Varenberg"],
		genres: ["Comedy"]
	},{ 
		title: "White House Down",
		year: 2013,
		cast: ["Channing Tatum", "Jamie Foxx", "Maggie Gyllenhaal", "Jason Clarke", "Richard Jenkins", "James Woods"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "White Reindeer",
		year: 2013,
		cast: ["Anna Margaret Hollyman", "Laura Lemar-Goldsborough", "Lydia Hyslop"],
		genres: ["Comedy"]
	},{ 
		title: "The Wicked",
		year: 2013,
		cast: ["Jess Adams", "Diana Hooper", "Devon Werkheiser", "Justin Deeley", "Jamie Kaler"],
		genres: ["Horror"]
	},{ 
		title: "The Wolf of Wall Street",
		year: 2013,
		cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew McConaughey", "Kyle Chandler", "Rob Reiner", "Jon Favreau", "Jean Dujardin"],
		genres: ["Comedy"]
	},{ 
		title: "The Wolverine",
		year: 2013,
		cast: ["Hugh Jackman", "Tao Okamoto", "Hiroyuki Sanada", "Rila Fukushima", "Famke Janssen", "Will Yun Lee", "Svetlana Khodchenkova", "Haruhiko Yamanouchi", "Brian Tee"],
		genres: ["Superhero"]
	},{ 
		title: "World War Z",
		year: 2013,
		cast: ["Brad Pitt", "Mireille Enos", "James Badge Dale", "Matthew Fox"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Wrong",
		year: 2013,
		cast: ["Jack Plotnick", "Éric Judor", "Alexis Dziena", "Steve Little", "and", "William Fichtner"],
		genres: ["Comedy"]
	},{ 
		title: "Wrong Cops",
		year: 2013,
		cast: ["Mark Burnham", "Éric Judor", "Marilyn Manson", "Steve Little", "Grace Zabriskie"],
		genres: ["Comedy"]
	},{ 
		title: "You're Next",
		year: 2013,
		cast: ["Sharni Vinson", "Nicholas Tucci", "Wendy Glenn", "A. J. Bowen", "Joe Swanberg", "Barbara Crampton", "Rob Moran"],
		genres: ["Horror"]
	},{ 
		title: "You Are Here",
		year: 2013,
		cast: ["Owen Wilson", "Zach Galifianakis", "Amy Poehler", "Jenna Fischer", "Laura Ramsey", "Lauren Lapkus"],
		genres: ["Drama"]
	},{ 
		title: "Zero Charisma",
		year: 2013,
		cast: ["Sam Eidson", "Anne Gee Byrd", "Brock England", "Garrett Graham", "Cyndi Williams"],
		genres: ["Comedy"]
	},{ 
		title: "Zombie Hunter",
		year: 2013,
		cast: ["Danny Trejo", "Martin Copping", "Clare Niederpruem"],
		genres: ["Thriller"]
	},{ 
		title: "Paranormal Activity: The Marked Ones",
		year: 2014,
		cast: ["Jorge Diaz", "Andrew Jacobs", "Gabrielle Walsh", "Richard Cabral"],
		genres: ["Horror"]
	},{ 
		title: "Open Grave",
		year: 2014,
		cast: ["Sharlto Copley", "Joseph Morgan", "Josie Ho", "Thomas Kretschmann"],
		genres: ["Thriller"]
	},{ 
		title: "Cold Comes the Night",
		year: 2014,
		cast: ["Alice Eve", "Bryan Cranston", "Logan Marshall-Green", "Ursula Parker"],
		genres: ["Thriller"]
	},{ 
		title: "Dumbbells",
		year: 2014,
		cast: ["Brian Drolet", "Hoyt Richards", "Jaleel White"],
		genres: ["Comedy"]
	},{ 
		title: "The Legend of Hercules",
		year: 2014,
		cast: ["Kellan Lutz", "Gaia Weiss", "Scott Adkins"],
		genres: ["Fantasy"]
	},{ 
		title: "Raze",
		year: 2014,
		cast: ["Zoë Bell", "Rachel Nichols", "Tracie Thoms"],
		genres: ["Thriller"]
	},{ 
		title: "Back in the Day",
		year: 2014,
		cast: ["Michael Rosenbaum", "Morena Baccarin", "Kristoffer Polaha", "Isaiah Mustafa"],
		genres: ["Comedy"]
	},{ 
		title: "Devil's Due",
		year: 2014,
		cast: ["Zach Gilford", "Allison Miller", "Sam Anderson", "Aimee Carrero"],
		genres: ["Horror"]
	},{ 
		title: "Jack Ryan: Shadow Recruit",
		year: 2014,
		cast: ["Chris Pine", "Keira Knightley", "Kevin Costner", "Kenneth Branagh"],
		genres: ["Thriller"]
	},{ 
		title: "Jamesy Boy",
		year: 2014,
		cast: ["Spencer Lofranco", "Mary-Louise Parker", "Taissa Farmiga", "James Woods"],
		genres: ["Drama"]
	},{ 
		title: "The Nut Job",
		year: 2014,
		cast: ["Will Arnett", "Brendan Fraser", "Gabriel Iglesias", "Liam Neeson"],
		genres: ["Comedy"]
	},{ 
		title: "Ride Along",
		year: 2014,
		cast: ["Ice Cube", "Kevin Hart", "John Leguizamo", "Bruce McGill"],
		genres: ["Comedy"]
	},{ 
		title: "Black Water Vampire",
		year: 2014,
		cast: ["Danielle Lozeau", "Andrea Monier", "Anthony Fanelli", "Robin Steffen"],
		genres: ["Horror"]
	},{ 
		title: "I, Frankenstein",
		year: 2014,
		cast: ["Aaron Eckhart", "Bill Nighy", "Yvonne Strahovski", "Miranda Otto"],
		genres: ["Action"]
	},{ 
		title: "Mega Shark Versus Mecha Shark",
		year: 2014,
		cast: ["Christopher Judge", "Elisabeth Röhm", "Debbie Gibson"],
		genres: ["Disaster"]
	},{ 
		title: "Labor Day",
		year: 2014,
		cast: ["Kate Winslet", "Josh Brolin", "Gattlin Griffith", "Tobey Maguire"],
		genres: ["Drama"]
	},{ 
		title: "That Awkward Moment",
		year: 2014,
		cast: ["Zac Efron", "Miles Teller", "Michael B. Jordan", "Imogen Poots"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Somewhere Slow",
		year: 2014,
		cast: ["Jessalyn Gilsig", "David Costabile", "Graham Patrick Martin", "Wallace Langham"],
		genres: ["Drama"]
	},{ 
		title: "Android Cop",
		year: 2014,
		cast: ["Michael Jai White", "Kadeem Hardison", "Randy Wayne", "Charles S. Dutton"],
		genres: ["Action"]
	},{ 
		title: "The Monuments Men",
		year: 2014,
		cast: ["George Clooney", "Matt Damon", "Bill Murray", "John Goodman"],
		genres: ["War"]
	},{ 
		title: "The Outsider",
		year: 2014,
		cast: ["Craig Fairbrass", "James Caan", "Shannon Elizabeth"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Scorned",
		year: 2014,
		cast: ["AnnaLynne McCord", "Billy Zane", "Viva Bianca"],
		genres: ["Thriller"]
	},{ 
		title: "After the Dark",
		year: 2014,
		cast: ["Sophie Lowe", "Rhys Wakefield", "James D'Arcy"],
		genres: ["Thriller"]
	},{ 
		title: "Nurse 3D",
		year: 2014,
		cast: ["Paz de la Huerta", "Katrina Bowden", "Corbin Bleu"],
		genres: ["Horror"]
	},{ 
		title: "The Pretty One",
		year: 2014,
		cast: ["Zoe Kazan", "Jake Johnson", "Ron Livingston", "Sterling Beaumon"],
		genres: ["Comedy"]
	},{ 
		title: "Vampire Academy",
		year: 2014,
		cast: ["Zoey Deutch", "Lucy Fry", "Danila Kozlovsky"],
		genres: ["Fantasy"]
	},{ 
		title: "About Last Night",
		year: 2014,
		cast: ["Kevin Hart", "Michael Ealy", "Regina Hall", "Joy Bryant"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Adult World",
		year: 2014,
		cast: ["Emma Roberts", "John Cusack", "Evan Peters"],
		genres: ["Comedy"]
	},{ 
		title: "Camp Takota",
		year: 2014,
		cast: ["Grace Helbig", "Hannah Hart", "Mamrie Hart"],
		genres: ["Comedy"]
	},{ 
		title: "Date and Switch",
		year: 2014,
		cast: ["Nicholas Braun", "Gary Cole", "Dakota Johnson", "Hunter Cope"],
		genres: ["Comedy"]
	},{ 
		title: "Endless Love",
		year: 2014,
		cast: ["Alex Pettyfer", "Gabriella Wilde", "Bruce Greenwood", "Robert Patrick"],
		genres: ["Romance"]
	},{ 
		title: "RoboCop",
		year: 2014,
		cast: ["Joel Kinnaman", "Gary Oldman", "Michael Keaton", "Samuel L. Jackson"],
		genres: ["Action"]
	},{ 
		title: "Someone Marry Barry",
		year: 2014,
		cast: ["Tyler Labine", "Damon Wayans, Jr.", "Lucy Punch", "Hayes MacArthur"],
		genres: ["Comedy"]
	},{ 
		title: "Apocalypse Pompeii",
		year: 2014,
		cast: ["Adrian Paul", "John Rhys-Davies", "Dylan Vox"],
		genres: ["Action"]
	},{ 
		title: "3 Days to Kill",
		year: 2014,
		cast: ["Kevin Costner", "Amber Heard", "Hailee Steinfeld", "Connie Nielsen"],
		genres: ["Thriller"]
	},{ 
		title: "Angels in Stardust",
		year: 2014,
		cast: ["Alicia Silverstone", "Billy Burke", "AJ Michalka"],
		genres: ["Comedy"]
	},{ 
		title: "Barefoot",
		year: 2014,
		cast: ["Evan Rachel Wood", "Scott Speedman", "Treat Williams", "J. K. Simmons"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Holy Ghost People",
		year: 2014,
		cast: ["Emma Greenwell", "Joe Egender", "Cameron Richardson"],
		genres: ["Thriller"]
	},{ 
		title: "The Bag Man",
		year: 2014,
		cast: ["John Cusack", "Rebecca Da Costa", "Robert De Niro", "Crispin Glover"],
		genres: ["Action"]
	},{ 
		title: "Non-Stop",
		year: 2014,
		cast: ["Liam Neeson", "Julianne Moore", "Scoot McNairy", "Michelle Dockery"],
		genres: ["Action"]
	},{ 
		title: "Repentance",
		year: 2014,
		cast: ["Forest Whitaker", "Anthony Mackie", "Nicole Ari Parker"],
		genres: ["Thriller"]
	},{ 
		title: "Son of God",
		year: 2014,
		cast: ["Diogo Morgado", "Roma Downey", "Darwin Shaw"],
		genres: []
	},{ 
		title: "300: Rise of an Empire",
		year: 2014,
		cast: ["Sullivan Stapleton", "Eva Green", "Lena Headey", "Rodrigo Santoro"],
		genres: ["Fantasy"]
	},{ 
		title: "Mr. Peabody & Sherman",
		year: 2014,
		cast: ["Ty Burrell", "Max Charles", "Ariel Winter", "Leslie Mann"],
		genres: ["Adventure"]
	},{ 
		title: "Better Living Through Chemistry",
		year: 2014,
		cast: ["Sam Rockwell", "Olivia Wilde", "Michelle Monaghan", "Ray Liotta"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Need for Speed",
		year: 2014,
		cast: ["Aaron Paul", "Dominic Cooper", "Imogen Poots", "Kid Cudi"],
		genres: ["Action"]
	},{ 
		title: "The Single Moms Club",
		year: 2014,
		cast: ["Nia Long", "Amy Smart", "Cocoa Brown", "Wendi McLendon-Covey"],
		genres: ["Drama"]
	},{ 
		title: "Veronica Mars",
		year: 2014,
		cast: ["Kristen Bell", "Jason Dohring", "Krysten Ritter", "Ryan Hansen"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Cheap Thrills (film)",
		year: 2014,
		cast: ["Pat Healy", "Ethan Embry", "David Koechner", "Sara Paxton"],
		genres: ["Comedy"]
	},{ 
		title: "Divergent",
		year: 2014,
		cast: ["Shailene Woodley", "Theo James", "Ashley Judd", "Jai Courtney", "Zoë Kravitz"],
		genres: ["Science Fiction"]
	},{ 
		title: "God's Not Dead",
		year: 2014,
		cast: ["Kevin Sorbo", "Shane Harper", "David A. R. White", "Dean Cain"],
		genres: []
	},{ 
		title: "Muppets Most Wanted",
		year: 2014,
		cast: ["Ricky Gervais", "Ty Burrell", "Steve Whitmire", "Tina Fey"],
		genres: ["Comedy"]
	},{ 
		title: "50 to 1",
		year: 2014,
		cast: ["Christian Kane", "William Devane", "Skeet Ulrich"],
		genres: ["Drama"]
	},{ 
		title: "Noah",
		year: 2014,
		cast: ["Russell Crowe", "Emma Watson", "Logan Lerman", "Anthony Hopkins"],
		genres: []
	},{ 
		title: "Sabotage",
		year: 2014,
		cast: ["Arnold Schwarzenegger", "Terrence Howard", "Sam Worthington", "Olivia Williams"],
		genres: ["Action"]
	},{ 
		title: "The Ladies of the House",
		year: 2014,
		cast: ["Michelle Sinclair", "Melodie Sisk", "Samrat Chakrabarti"],
		genres: ["Horror"]
	},{ 
		title: "Alien Abduction",
		year: 2014,
		cast: ["Katherine Sigismund", "Corey Eid", "Riley Polanski", "Jeff Bowser"],
		genres: ["Horror"]
	},{ 
		title: "Captain America: The Winter Soldier",
		year: 2014,
		cast: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan", "Anthony Mackie"],
		genres: ["Superhero"]
	},{ 
		title: "In the Blood",
		year: 2014,
		cast: ["Gina Carano", "Cam Gigandet", "Danny Trejo"],
		genres: ["Action"]
	},{ 
		title: "Jinn",
		year: 2014,
		cast: ["Dominic Rains", "Serinda Swan", "Ray Park", "William Atherton"],
		genres: ["Thriller"]
	},{ 
		title: "Draft Day",
		year: 2014,
		cast: ["Kevin Costner", "Jennifer Garner", "Denis Leary", "Frank Langella"],
		genres: ["Drama"]
	},{ 
		title: "Oculus",
		year: 2014,
		cast: ["Karen Gillan", "Brenton Thwaites", "Rory Cochrane"],
		genres: ["Horror"]
	},{ 
		title: "Rio 2",
		year: 2014,
		cast: ["Jesse Eisenberg", "Anne Hathaway", "Jamie Foxx", "Leslie Mann"],
		genres: ["Animated"]
	},{ 
		title: "Asian School Girls",
		year: 2014,
		cast: ["Sam Aotaki", "Catherine Hyein Kim", "Minnie Scarlet", "Belle Hengsathorn"],
		genres: ["Action"]
	},{ 
		title: "Heaven Is for Real",
		year: 2014,
		cast: ["Connor Corum", "Greg Kinnear", "Kelly Reilly", "Lance Styles"],
		genres: []
	},{ 
		title: "Authors Anonymous",
		year: 2014,
		cast: ["Kaley Cuoco", "Chris Klein", "Jonathan Banks", "Tricia Helfer"],
		genres: ["Comedy"]
	},{ 
		title: "A Haunted House 2",
		year: 2014,
		cast: ["Marlon Wayans", "Jaime Pressly", "Essence Atkins"],
		genres: ["Comedy"]
	},{ 
		title: "Kid Cannabis",
		year: 2014,
		cast: ["Jonathan Daniel Brown", "Kenny Wormald", "Amanda Tapping", "Aaron Yoo"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Transcendence",
		year: 2014,
		cast: ["Johnny Depp", "Morgan Freeman", "Rebecca Hall"],
		genres: ["Science Fiction"]
	},{ 
		title: "13 Sins",
		year: 2014,
		cast: ["Devon Graye", "Mark Webber", "Ron Perlman"],
		genres: ["Horror"]
	},{ 
		title: "Brick Mansions",
		year: 2014,
		cast: ["Paul Walker", "David Belle", "RZA", "Catalina Denis"],
		genres: ["Action"]
	},{ 
		title: "The Other Woman",
		year: 2014,
		cast: ["Cameron Diaz", "Leslie Mann", "Kate Upton", "Nicki Minaj"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Walking with the Enemy",
		year: 2014,
		cast: ["Jonas Armstrong", "Ben Kingsley", "Hannah Tointon", "Simon Kunz"],
		genres: ["Drama"]
	},{ 
		title: "The Amazing Spider-Man 2",
		year: 2014,
		cast: ["Andrew Garfield", "Emma Stone", "Jamie Foxx", "Dane DeHaan"],
		genres: ["Action"]
	},{ 
		title: "Bad Johnson",
		year: 2014,
		cast: ["Cam Gigandet", "Nick Thune", "Jamie Chung", "Katherine Cunningham"],
		genres: ["Comedy"]
	},{ 
		title: "Decoding Annie Parker",
		year: 2014,
		cast: ["Samantha Morton", "Helen Hunt", "Aaron Paul"],
		genres: ["Drama"]
	},{ 
		title: "Walk of Shame",
		year: 2014,
		cast: ["Elizabeth Banks", "James Marsden", "Gillian Jacobs", "Oliver Hudson"],
		genres: ["Comedy"]
	},{ 
		title: "Devil's Knot",
		year: 2014,
		cast: ["Colin Firth", "Reese Witherspoon", "Kevin Durand", "Dane DeHaan"],
		genres: ["Thriller"]
	},{ 
		title: "God's Pocket",
		year: 2014,
		cast: ["Philip Seymour Hoffman", "Richard Jenkins", "Christina Hendricks", "Caleb Landry Jones"],
		genres: ["Drama"]
	},{ 
		title: "'Moms' Night Out",
		year: 2014,
		cast: ["Sarah Drew", "Sean Astin", "Patricia Heaton"],
		genres: ["Comedy"]
	},{ 
		title: "Neighbors",
		year: 2014,
		cast: ["Seth Rogen", "Zac Efron", "Rose Byrne", "Dave Franco"],
		genres: ["Comedy"]
	},{ 
		title: "Stage Fright",
		year: 2014,
		cast: ["Allie MacDonald", "Minnie Driver", "Meat Loaf", "Brandon Uranowitz"],
		genres: ["Horror"]
	},{ 
		title: "Godzilla",
		year: 2014,
		cast: ["Aaron Taylor-Johnson", "Ken Watanabe", "Elizabeth Olsen", "Sally Hawkins"],
		genres: ["Science Fiction"]
	},{ 
		title: "Million Dollar Arm",
		year: 2014,
		cast: ["Jon Hamm", "Aasif Mandvi", "Madhur Mittal", "Lake Bell"],
		genres: ["Drama"]
	},{ 
		title: "The Angriest Man in Brooklyn",
		year: 2014,
		cast: ["Peter Dinklage", "Robin Williams", "Mila Kunis", "James Earl Jones"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Blended",
		year: 2014,
		cast: ["Adam Sandler", "Drew Barrymore", "Bella Thorne", "Emma Fuhrmann"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Cold in July",
		year: 2014,
		cast: ["Michael C. Hall", "Sam Shepard", "Don Johnson", "Vinessa Shaw"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "X-Men: Days of Future Past",
		year: 2014,
		cast: ["Hugh Jackman", "James McAvoy", "Michael Fassbender", "Halle Berry"],
		genres: ["Superhero"]
	},{ 
		title: "Maleficent",
		year: 2014,
		cast: ["Angelina Jolie", "Elle Fanning", "Sharlto Copley", "Sam Riley"],
		genres: ["Fantasy"]
	},{ 
		title: "A Million Ways to Die in the West",
		year: 2014,
		cast: ["Seth MacFarlane", "Charlize Theron", "Amanda Seyfried", "Neil Patrick Harris"],
		genres: ["Comedy"]
	},{ 
		title: "Edge of Tomorrow",
		year: 2014,
		cast: ["Tom Cruise", "Emily Blunt", "Bill Paxton"],
		genres: ["Action"]
	},{ 
		title: "The Fault in Our Stars",
		year: 2014,
		cast: ["Shailene Woodley", "Ansel Elgort", "Nat Wolff", "Laura Dern"],
		genres: ["Drama"]
	},{ 
		title: "Ping Pong Summer",
		year: 2014,
		cast: ["Susan Sarandon", "John Hannah", "Lea Thompson", "Amy Sedaris"],
		genres: ["Comedy"]
	},{ 
		title: "22 Jump Street",
		year: 2014,
		cast: ["Channing Tatum", "Jonah Hill", "Ice Cube", "Peter Stormare", "Dave Franco"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Hellion",
		year: 2014,
		cast: ["Aaron Paul", "Juliette Lewis", "Josh Wiggins", "Deke Garner"],
		genres: ["Drama"]
	},{ 
		title: "How to Train Your Dragon 2",
		year: 2014,
		cast: ["Jay Baruchel", "Cate Blanchett", "Gerard Butler", "Jonah Hill"],
		genres: ["Fantasy"]
	},{ 
		title: "Lullaby",
		year: 2014,
		cast: ["Amy Adams", "Garrett Hedlund", "Terrence Howard"],
		genres: ["Drama"]
	},{ 
		title: "Murder 101",
		year: 2014,
		cast: ["Tom Sizemore", "Paige LaPierre", "Randy Irwin", "Jamison Haase"],
		genres: ["Horror"]
	},{ 
		title: "Obvious Child",
		year: 2014,
		cast: ["Jenny Slate", "Jake Lacy", "Gaby Hoffmann", "David Cross"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Signal",
		year: 2014,
		cast: ["Brenton Thwaites", "Laurence Fishburne", "Olivia Cooke", "Beau Knapp"],
		genres: ["Thriller"]
	},{ 
		title: "Jersey Boys",
		year: 2014,
		cast: ["John Lloyd Young", "Erich Bergen", "Vincent Piazza", "Christopher Walken"],
		genres: ["Musical"]
	},{ 
		title: "Think Like a Man Too",
		year: 2014,
		cast: ["Michael Ealy", "Jerry Ferrara", "Meagan Good", "Regina Hall"],
		genres: ["Comedy"]
	},{ 
		title: "Rebound",
		year: 2014,
		cast: ["Kevin Bulla", "Ashley James", "Dan Sutter"],
		genres: ["Horror"]
	},{ 
		title: "America: Imagine the World Without Her",
		year: 2014,
		cast: ["Don Taylor", "Michelle Swink", "Dinesh D'Souza", "Josh Bonzie"],
		genres: ["Political", "Documentary"]
	},{ 
		title: "They Came Together",
		year: 2014,
		cast: ["Paul Rudd", "Amy Poehler", "Cobie Smulders", "Christopher Meloni"],
		genres: ["Comedy"]
	},{ 
		title: "Transformers: Age of Extinction",
		year: 2014,
		cast: ["Mark Wahlberg", "Stanley Tucci", "Kelsey Grammer", "Nicola Peltz"],
		genres: ["Science Fiction"]
	},{ 
		title: "Deliver Us from Evil",
		year: 2014,
		cast: ["Eric Bana", "Édgar Ramírez", "Olivia Munn", "Sean Harris"],
		genres: ["Horror"]
	},{ 
		title: "Earth to Echo",
		year: 2014,
		cast: ["Teo Halm", "Reese Hartwig", "Jason Gray-Stanford"],
		genres: ["Science Fiction"]
	},{ 
		title: "School Dance",
		year: 2014,
		cast: ["Bobb'e J. Thompson", "Mike Epps", "Luenell", "Wilmer Valderrama"],
		genres: ["Musical"]
	},{ 
		title: "Tammy",
		year: 2014,
		cast: ["Melissa McCarthy", "Susan Sarandon", "Gary Cole", "Mark Duplass"],
		genres: ["Comedy"]
	},{ 
		title: "Boyhood",
		year: 2014,
		cast: ["Patricia Arquette", "Ellar Coltrane", "Lorelei Linklater", "Ethan Hawke"],
		genres: ["Drama"]
	},{ 
		title: "Dawn of the Planet of the Apes",
		year: 2014,
		cast: ["Andy Serkis", "Jason Clarke", "Toby Kebbell", "Gary Oldman", "Kodi Smit-McPhee"],
		genres: ["Science Fiction"]
	},{ 
		title: "Rage",
		year: 2014,
		cast: ["Nicolas Cage", "Peter Stormare", "Danny Glover", "Max Ryan"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Road to Paloma",
		year: 2014,
		cast: ["Jason Momoa", "Lisa Bonet", "Michael Raymond-James", "Wes Studi"],
		genres: ["Thriller"]
	},{ 
		title: "I Origins",
		year: 2014,
		cast: ["Michael Pitt", "Brit Marling", "Astrid Berges-Frisbey", "Steven Yeun"],
		genres: ["Drama"]
	},{ 
		title: "Persecuted",
		year: 2014,
		cast: ["James Remar", "Bruce Davison", "Dean Stockwell", "Raoul Trujillo"],
		genres: ["Drama"]
	},{ 
		title: "Planes: Fire & Rescue",
		year: 2014,
		cast: ["Dane Cook", "Stacy Keach", "Brad Garrett", "Danny Mann"],
		genres: ["Adventure"]
	},{ 
		title: "The Purge: Anarchy",
		year: 2014,
		cast: ["Frank Grillo", "Carmen Ejogo", "Zach Gilford", "Kiele Sanchez"],
		genres: ["Horror"]
	},{ 
		title: "Sex Tape",
		year: 2014,
		cast: ["Cameron Diaz", "Jason Segel", "Rob Corddry", "Rob Lowe"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Tiger Orange",
		year: 2014,
		cast: ["Mark Strano", "Frankie Valenti", "Gregory Marcel"],
		genres: ["Drama"]
	},{ 
		title: "Wish I Was Here",
		year: 2014,
		cast: ["Zach Braff", "Kate Hudson", "Joey King", "Josh Gad"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "And So It Goes",
		year: 2014,
		cast: ["Michael Douglas", "Diane Keaton", "Sterling Jernis", "Annie Parisse"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Happy Christmas",
		year: 2014,
		cast: ["Anna Kendrick", "Lena Dunham", "Melanie Lynskey"],
		genres: ["Drama"]
	},{ 
		title: "Hercules",
		year: 2014,
		cast: ["Dwayne Johnson", "Ian McShane", "Rufus Sewell", "Joseph Fiennes"],
		genres: ["Action"]
	},{ 
		title: "Magic in the Moonlight",
		year: 2014,
		cast: ["Colin Firth", "Emma Stone", "Hamish Linklater", "Jacki Weaver"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "My Man Is a Loser",
		year: 2014,
		cast: ["John Stamos", "Michael Rapaport", "Tika Sumpter"],
		genres: ["Comedy"]
	},{ 
		title: "Get on Up",
		year: 2014,
		cast: ["Chadwick Boseman", "Nelsan Ellis", "Dan Aykroyd", "Octavia Spencer"],
		genres: ["Drama"]
	},{ 
		title: "Guardians of the Galaxy",
		year: 2014,
		cast: ["Vin Diesel", "Dave Bautista", "Zoe Saldana", "Chris Pratt", "Bradley Cooper"],
		genres: ["Superhero"]
	},{ 
		title: "Mercenaries",
		year: 2014,
		cast: ["Brigitte Nielsen", "Tim Abell", "Cynthia Rothrock", "Kristanna Loken"],
		genres: ["Action"]
	},{ 
		title: "4 Minute Mile",
		year: 2014,
		cast: ["Analeigh Tipton", "Cam Gigandet", "Kim Basinger", "Kelly Blatz"],
		genres: ["Drama"]
	},{ 
		title: "The Hundred-Foot Journey",
		year: 2014,
		cast: ["Helen Mirren", "Om Puri", "Manish Dayal", "Charlotte Le Bon"],
		genres: ["Comedy"]
	},{ 
		title: "Into the Storm",
		year: 2014,
		cast: ["Richard Armitage", "Sarah Wayne Callies", "Nathan Kress", "Alycia Debnam-Carey"],
		genres: ["Disaster"]
	},{ 
		title: "Step Up: All In",
		year: 2014,
		cast: ["Ryan Guzman", "Briana Evigan", "Misha Gabriel", "Alyson Stoner"],
		genres: ["Dance"]
	},{ 
		title: "Teenage Mutant Nina Turtles",
		year: 2014,
		cast: ["Megan Fox", "Alan Ritchson", "Will Arnett", "Noel Fisher"],
		genres: ["Science Fiction"]
	},{ 
		title: "Let's Be Cops",
		year: 2014,
		cast: ["Damon Wayans, Jr.", "Jake Johnson", "Nina Dobrev", "Rob Riggle"],
		genres: ["Comedy"]
	},{ 
		title: "The Expendables 3",
		year: 2014,
		cast: ["Sylvester Stallone", "Jason Statham", "Antonio Banderas", "Arnold Schwarzenegger"],
		genres: ["Action"]
	},{ 
		title: "The Giver",
		year: 2014,
		cast: ["Jeff Bridges", "Meryl Streep", "Brenton Thwaites", "Katie Holmes"],
		genres: ["Science Fiction"]
	},{ 
		title: "Life After Beth",
		year: 2014,
		cast: ["Aubrey Plaza", "Dane DeHaan", "Anna Kendrick", "Molly Shannon"],
		genres: ["Comedy"]
	},{ 
		title: "The One I Love",
		year: 2014,
		cast: ["Mark Duplass", "Ted Danson", "Elisabeth Moss"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "If I Stay",
		year: 2014,
		cast: ["Chloë Grace Moretz", "Mireille Enos", "Jamie Blackley", "Joshua Leonard"],
		genres: ["Romance"]
	},{ 
		title: "Leprechaun: Origins",
		year: 2014,
		cast: ["Dylan Postl", "Stephanie Bennett", "Bruce Blain", "Adam Boys"],
		genres: ["Horror"]
	},{ 
		title: "Love Is Strange",
		year: 2014,
		cast: ["John Lithgow", "Alfred Molina", "Marisa Tomei", "Charlie Tahan"],
		genres: ["Drama"]
	},{ 
		title: "The Prince",
		year: 2014,
		cast: ["Bruce Willis", "John Cusack", "50 Cent", "Jason Patric"],
		genres: ["Thriller"]
	},{ 
		title: "Sin City: A Dame to Kill For",
		year: 2014,
		cast: ["Mickey Rourke", "Jessica Alba", "Josh Brolin", "Bruce Willis"],
		genres: ["Thriller"]
	},{ 
		title: "As Above, So Below",
		year: 2014,
		cast: ["Perdita Weeks", "Ben Feldman", "Edwin Hodge", "François Civil"],
		genres: ["Horror"]
	},{ 
		title: "Cake",
		year: 2014,
		cast: ["Jennifer Aniston", "Adriana Barraza", "Sam Worthington", "Anna Kendrick"],
		genres: ["Drama"]
	},{ 
		title: "Atlas Shrugged: Part III",
		year: 2014,
		cast: ["Laura Regan", "Kristoffer Polaha", "Joaquim de Almeida", "Eric Allan Kramer", "Rob Morrow"],
		genres: ["Science Fiction"]
	},{ 
		title: "Dolphin Tale 2",
		year: 2014,
		cast: ["Harry Connick, Jr.", "Ashley Judd", "Nathan Gamble", "Kris Kristofferson", "Morgan Freeman"],
		genres: ["Drama"]
	},{ 
		title: "Honeymoon",
		year: 2014,
		cast: ["Rose Leslie", "Harry Tread", "Ben Huber", "Hanna Brown"],
		genres: ["Horror"]
	},{ 
		title: "No Good Deed",
		year: 2014,
		cast: ["Idris Elba", "Taraji P. Henson", "Henry Simmons", "Wilbur Fitzgerald"],
		genres: ["Thriller"]
	},{ 
		title: "The Guest",
		year: 2014,
		cast: ["Dan Stevens", "Maika Monroe", "Brendan Meyer", "Chase Williamson"],
		genres: ["Thriller"]
	},{ 
		title: "A Walk Among the Tombstones",
		year: 2014,
		cast: ["Liam Neeson", "Dan Stevens", "Boyd Holbrook"],
		genres: ["Thriller"]
	},{ 
		title: "The Maze Runner",
		year: 2014,
		cast: ["Dylan O'Brien", "Kaya Scodelario", "Thomas Brodie-Sangster"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Scribbler",
		year: 2014,
		cast: ["Katie Cassidy", "Garret Dillahunt", "Michelle Trachtenberg"],
		genres: ["Thriller"]
	},{ 
		title: "The Skeleton Twins",
		year: 2014,
		cast: ["Kristen Wiig", "Bill Hader", "Luke Wilson", "Ty Burrell"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "This Is Where I Leave You",
		year: 2014,
		cast: ["Jason Bateman", "Tina Fey", "Adam Driver", "Rose Byrne"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Tusk",
		year: 2014,
		cast: ["Michael Parks", "Justin Long", "Haley Joel Osment", "Johnny Depp"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "The Boxtrolls",
		year: 2014,
		cast: ["Elle Fanning", "Toni Collette", "Isaac Hempstead-Wright", "Simon Pegg", "Nick Frost"],
		genres: ["Fantasy"]
	},{ 
		title: "The Equalizer",
		year: 2014,
		cast: ["Denzel Washington", "Marton Csokas", "Chloë Grace Moretz", "Bill Pullman"],
		genres: ["Action"]
	},{ 
		title: "The Song",
		year: 2014,
		cast: ["Alan Powell", "Ali Faulkner", "Danny Vinson"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "The Two Faces of January",
		year: 2014,
		cast: ["Viggo Mortensen", "Kirsten Dunst", "Oscar Isaac"],
		genres: ["Thriller"]
	},{ 
		title: "Annabelle",
		year: 2014,
		cast: ["Annabelle Wallis", "Tony Amendola", "Ward Horton", "Alfre Woodard"],
		genres: ["Horror"]
	},{ 
		title: "Gone Girl",
		year: 2014,
		cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris", "Tyler Perry"],
		genres: ["Thriller"]
	},{ 
		title: "The Good Lie",
		year: 2014,
		cast: ["Emmanuel Jal", "Ger Duany", "Reese Witherspoon", "Corey Stoll"],
		genres: ["Drama"]
	},{ 
		title: "Left Behind",
		year: 2014,
		cast: ["Nicolas Cage", "Cassi Thomson", "Chad Michael Murray"],
		genres: ["Thriller"]
	},{ 
		title: "Last Shift",
		year: 2014,
		cast: ["Juliana Harkavy", "Joshua Mikel", "Hank Stone"],
		genres: ["Horror"]
	},{ 
		title: "Addicted",
		year: 2014,
		cast: ["Sharon Leal", "Boris Kodjoe", "William Levy", "Tasha Smith"],
		genres: ["Thriller"]
	},{ 
		title: "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
		year: 2014,
		cast: ["Steve Carell", "Jennifer Garner", "Ed Oxenbould", "Dylan Minnette"],
		genres: ["Comedy"]
	},{ 
		title: "Dracula Untold",
		year: 2014,
		cast: ["Luke Evans", "Sarah Gadon", "Dominic Cooper", "Zach McGowan"],
		genres: ["Fantasy"]
	},{ 
		title: "The Judge",
		year: 2014,
		cast: ["Robert Downey, Jr.", "Robert Duvall", "Vera Farmiga", "Billy Bob Thornton"],
		genres: ["Drama"]
	},{ 
		title: "Whiplash",
		year: 2014,
		cast: ["Miles Teller", "Melissa Benoist", "Austin Stowell"],
		genres: ["Drama"]
	},{ 
		title: "You're Not You",
		year: 2014,
		cast: ["Hilary Swank", "Emmy Rossum", "Josh Duhamel", "Frances Fisher"],
		genres: ["Drama"]
	},{ 
		title: "Birdman or (The Unexpected Virtue of Ignorance)",
		year: 2014,
		cast: ["Michael Keaton", "Edward Norton", "Naomi Watts", "Emma Stone"],
		genres: ["Comedy"]
	},{ 
		title: "The Book of Life",
		year: 2014,
		cast: ["Channing Tatum", "Zoe Saldana", "Diego Luna", "Ice Cube"],
		genres: ["Animated", "Adventure"]
	},{ 
		title: "Camp X-Ray",
		year: 2014,
		cast: ["Kristen Stewart", "Peyman Moaadi", "Julia Duffy", "Lane Garrison"],
		genres: ["Drama"]
	},{ 
		title: "The Czar of Black Hollywood",
		year: 2014,
		cast: ["Oscar Micheaux"],
		genres: ["Biography", "Documentary"]
	},{ 
		title: "Dear White People",
		year: 2014,
		cast: ["Tyler James Williams", "Dennis Haysbert", "Tessa Thompson", "Kyle Gallner"],
		genres: ["Drama"]
	},{ 
		title: "Fury",
		year: 2014,
		cast: ["Brad Pitt", "Shia LaBeouf", "Logan Lerman", "Michael Peña"],
		genres: ["War"]
	},{ 
		title: "Listen Up Philip",
		year: 2014,
		cast: ["Jason Schwartzman", "Elisabeth Moss", "Jonathan Pryce"],
		genres: ["Drama"]
	},{ 
		title: "Nightcrawler",
		year: 2014,
		cast: ["Jake Gyllenhaal", "Rene Russo", "Riz Ahmed", "Bill Paxton"],
		genres: ["Thriller"]
	},{ 
		title: "Pernicious",
		year: 2014,
		cast: ["Ciara Hanna", "Emily O'Brien", "Jackie Moore", "Russell Geoffrey"],
		genres: ["Horror"]
	},{ 
		title: "Young Ones",
		year: 2014,
		cast: ["Kodi Smit-McPhee", "Elle Fanning", "Michael Shannon", "Nicholas Hoult"],
		genres: ["Science Fiction"]
	},{ 
		title: "Laggies",
		year: 2014,
		cast: ["Keira Knightley", "Chloë Grace Moretz", "Sam Rockwell", "Mark Webber"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Ouija",
		year: 2014,
		cast: ["Ana Coto", "Olivia Cooke", "Daren Kagasoff", "Bianca A. Santos"],
		genres: ["Horror"]
	},{ 
		title: "Interstellar",
		year: 2014,
		cast: ["Anne Hathaway", "Matthew McConaughey", "Jessica Chastain", "Michael Caine"],
		genres: ["Science Fiction"]
	},{ 
		title: "A Merry Friggin' Christmas",
		year: 2014,
		cast: ["Robin Williams", "Joel McHale", "Clark Duke", "Oliver Platt"],
		genres: ["Comedy"]
	},{ 
		title: "The Better Angels",
		year: 2014,
		cast: ["Diane Kruger", "Brit Marling", "Wes Bentley"],
		genres: ["Biography"]
	},{ 
		title: "Big Hero 6",
		year: 2014,
		cast: ["Ryan Potter", "Scott Adsit", "Jamie Chung", "Damon Wayans, Jr."],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "Elsa & Fred",
		year: 2014,
		cast: ["Shirley MacLaine", "Christopher Plummer", "Marcia Gay Harden"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Jessabelle",
		year: 2014,
		cast: ["Sarah Snook", "Mark Webber", "Joelle Carter", "Amber Stevens"],
		genres: ["Horror"]
	},{ 
		title: "The Peripheral",
		year: 2014,
		cast: ["Randy Frank", "Lynn Lowry"],
		genres: ["Horror"]
	},{ 
		title: "Beside Still Waters",
		year: 2014,
		cast: ["Ryan Eggold", "Brett Dalton", "Beck Bennett"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Beyond the Lights",
		year: 2014,
		cast: ["Gugu Mbatha-Raw", "Minnie Driver", "Nate Parker", "Danny Glover"],
		genres: ["Romance"]
	},{ 
		title: "Dumb and Dumber To",
		year: 2014,
		cast: ["Jim Carrey", "Jeff Daniels", "Laurie Holden", "Jennifer Lawrence"],
		genres: ["Comedy"]
	},{ 
		title: "Foxcatcher",
		year: 2014,
		cast: ["Steve Carell", "Channing Tatum", "Mark Ruffalo", "Vanessa Redgrave"],
		genres: ["Drama"]
	},{ 
		title: "The Homesman",
		year: 2014,
		cast: ["Tommy Lee Jones", "Hilary Swank", "Grace Gummer", "Miranda Otto"],
		genres: ["Drama"]
	},{ 
		title: "Saving Christmas",
		year: 2014,
		cast: ["Kirk Cameron", "Darren Doane", "David Shannon", "Bridgette Ridenour"],
		genres: []
	},{ 
		title: "Witching Hour",
		year: 2014,
		cast: ["Reanna Roanne", "Emily Johnson-Erday", "Patrick Ferrara"],
		genres: ["Horror"]
	},{ 
		title: "The Hunger Games: Mockingjay – Part 1",
		year: 2014,
		cast: ["Josh Hutcherson", "Jennifer Lawrence", "Liam Hemsworth", "Donald Sutherland"],
		genres: ["Adventure"]
	},{ 
		title: "Horrible Bosses 2",
		year: 2014,
		cast: ["Jason Bateman", "Charlie Day", "Jennifer Aniston", "Jason Sudeikis", "Jamie Foxx"],
		genres: ["Comedy"]
	},{ 
		title: "Penguins of Madagascar",
		year: 2014,
		cast: ["Tom McGrath", "John DiMaggio", "Christopher Knights"],
		genres: ["Animated"]
	},{ 
		title: "Comet",
		year: 2014,
		cast: ["Emmy Rossum", "Justin Long", "Eric Winter", "Kayla Servi"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Wild",
		year: 2014,
		cast: ["Reese Witherspoon", "Laura Dern", "Thomas Sadoski", "Michiel Huisman"],
		genres: ["Biography"]
	},{ 
		title: "Exodus: Gods and Kings",
		year: 2014,
		cast: ["Christian Bale", "Joel Edgerton", "Aaron Paul", "John Turturro"],
		genres: ["Drama"]
	},{ 
		title: "Inherent Vice",
		year: 2014,
		cast: ["Joaquin Phoenix", "Owen Wilson", "Reese Witherspoon", "Benicio del Toro"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Color of Time",
		year: 2014,
		cast: ["James Franco", "Henry Hopper", "Mila Kunis", "Zach Braff"],
		genres: ["Drama"]
	},{ 
		title: "Top Five",
		year: 2014,
		cast: ["Chris Rock", "Rosario Dawson", "Kevin Hart", "Gabrielle Union"],
		genres: ["Comedy"]
	},{ 
		title: "Goodbye To All That",
		year: 2014,
		cast: ["Paul Schneider", "Melanie Lynskey", "Anna Camp"],
		genres: ["Comedy"]
	},{ 
		title: "Annie",
		year: 2014,
		cast: ["Jamie Foxx", "Quvenzhané Wallis", "Rose Byrne", "Bobby Cannavale"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Night at the Museum: Secret of the Tomb",
		year: 2014,
		cast: ["Ben Stiller", "Robin Williams", "Owen Wilson", "Ben Kingsley"],
		genres: ["Comedy"]
	},{ 
		title: "Big Eyes",
		year: 2014,
		cast: ["Amy Adams", "Christoph Waltz", "Danny Huston", "Terence Stamp"],
		genres: ["Drama"]
	},{ 
		title: "The Interview",
		year: 2014,
		cast: ["James Franco", "Seth Rogen", "Lizzy Caplan", "Randall Park"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Into the Woods",
		year: 2014,
		cast: ["Meryl Streep", "Emily Blunt", "James Corden", "Anna Kendrick"],
		genres: ["Fantasy"]
	},{ 
		title: "Unbroken",
		year: 2014,
		cast: ["Miyavi", "Garrett Hedlund", "Jai Courtney", "Luke Treadaway"],
		genres: ["Drama"]
	},{ 
		title: "The Woman in Black 2: Angel of Death",
		year: 2015,
		cast: ["Phoebe Fox", "Jeremy Irvine", "Helen McCrory", "Adrian Rawlins", "Ned Dennehy"],
		genres: ["Horror"]
	},{ 
		title: "Taken 3",
		year: 2015,
		cast: ["Liam Neeson", "Forest Whitaker", "Famke Janssen", "Maggie Grace"],
		genres: ["Action"]
	},{ 
		title: "Let's Kill Ward's Wife",
		year: 2015,
		cast: ["Scott Foley", "Patrick Wilson", "Donald Faison", "James Carpinello"],
		genres: ["Comedy"]
	},{ 
		title: "Match",
		year: 2015,
		cast: ["Patrick Stewart", "Carla Gugino", "Matthew Lillard", "Rob Yang"],
		genres: ["Drama"]
	},{ 
		title: "Blackhat",
		year: 2015,
		cast: ["Chris Hemsworth", "Viola Davis", "Manny Montana", "Tang Wei"],
		genres: ["Action"]
	},{ 
		title: "Little Accidents",
		year: 2015,
		cast: ["Elizabeth Banks", "Boyd Holbrook", "Chloë Sevigny", "Josh Lucas"],
		genres: ["Drama"]
	},{ 
		title: "Paddington",
		year: 2015,
		cast: ["Ben Whishaw", "Hugh Bonneville", "Sally Hawkins", "Madeleine Harris", "Samuel Joslin", "Julie Walters", "Nicole Kidman"],
		genres: ["Family"]
	},{ 
		title: "Spare Parts",
		year: 2015,
		cast: ["George Lopez", "Jamie Lee Curtis", "Carlos PenaVega", "Esai Morales"],
		genres: ["Drama"]
	},{ 
		title: "The Wedding Ringer",
		year: 2015,
		cast: ["Kevin Hart", "Josh Gad", "Olivia Thirlby", "Kaley Cuoco", "Alan Ritchson"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Vice",
		year: 2015,
		cast: ["Thomas Jane", "Bruce Willis", "Ambyr Childers", "Johnathon Schaech"],
		genres: ["Science Fiction"]
	},{ 
		title: "Veronika Decides to Die",
		year: 2015,
		cast: ["Sarah Michelle Gellar", "Jonathan Tucker", "Erika Christensen", "Melissa Leo"],
		genres: ["Drama"]
	},{ 
		title: "The Boy Next Door",
		year: 2015,
		cast: ["Jennifer Lopez", "Ryan Guzman", "Kristin Chenoweth", "Hill Harper"],
		genres: ["Thriller"]
	},{ 
		title: "Cake",
		year: 2015,
		cast: ["Jennifer Aniston", "Sam Worthington", "Anna Kendrick", "Adriana Barraza"],
		genres: ["Drama"]
	},{ 
		title: "The Humbling",
		year: 2015,
		cast: ["Al Pacino", "Greta Gerwig", "Kyra Sedgwick", "Dan Hedaya"],
		genres: ["Drama"]
	},{ 
		title: "Mortdecai",
		year: 2015,
		cast: ["Johnny Depp", "Gwyneth Paltrow", "Ewan McGregor", "Olivia Munn"],
		genres: ["Comedy"]
	},{ 
		title: "Song One",
		year: 2015,
		cast: ["Anne Hathaway", "Mary Steenburgen", "Crystal Lonneberg", "Stefano Villabona"],
		genres: ["Drama"]
	},{ 
		title: "Strange Magic",
		year: 2015,
		cast: ["Alan Cumming", "Evan Rachel Wood", "Kristin Chenoweth", "Maya Rudolph"],
		genres: ["Animated", "Fantasy"]
	},{ 
		title: "We'll Never Have Paris",
		year: 2015,
		cast: ["Simon Helberg", "Melanie Lynskey", "Maggie Grace", "Zachary Quinto"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Black or White",
		year: 2015,
		cast: ["Kevin Costner", "Octavia Spencer", "Bill Burr", "Mpho Koaho"],
		genres: ["Drama"]
	},{ 
		title: "The Loft",
		year: 2015,
		cast: ["Karl Urban", "Wentworth Miller", "James Marsden"],
		genres: ["Mystery"]
	},{ 
		title: "Project Almanac",
		year: 2015,
		cast: ["Sofia Black D'Elia", "Jonny Weston", "Allen Evangelista", "Virginia Gardner"],
		genres: ["Thriller"]
	},{ 
		title: "Wild Card",
		year: 2015,
		cast: ["Jason Statham", "Michael Angarano", "Stanley Tucci", "Sofia Vergara"],
		genres: ["Drama"]
	},{ 
		title: "3 Nights in the Desert",
		year: 2015,
		cast: ["Wes Bentley", "Vincent Piazza", "Amber Tamblyn"],
		genres: ["Drama"]
	},{ 
		title: "Enter the Dangerous Mind",
		year: 2015,
		cast: ["Jake Hoffman", "Nikki Reed", "Scott Bakula", "Gina Rodriguez"],
		genres: ["Thriller"]
	},{ 
		title: "Jupiter Ascending",
		year: 2015,
		cast: ["Channing Tatum", "Mila Kunis", "Sean Bean", "Eddie Redmayne"],
		genres: ["Science Fiction"]
	},{ 
		title: "Love, Rosie",
		year: 2015,
		cast: ["Lily Collins", "Sam Claflin"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Seventh Son",
		year: 2015,
		cast: ["Jeff Bridges", "Alicia Vikander", "Ben Barnes", "Kit Harington"],
		genres: ["Fantasy"]
	},{ 
		title: "The SpongeBob Movie: Sponge Out of Water",
		year: 2015,
		cast: ["Antonio Banderas", "Tom Kenny", "Clancy Brown", "Rodger Bumpass"],
		genres: ["Animated", "Adventure"]
	},{ 
		title: "The Voices",
		year: 2015,
		cast: ["Ryan Reynolds", "Anna Kendrick", "Gemma Arterton", "Jacki Weaver"],
		genres: ["Comedy"]
	},{ 
		title: "Accidental Love",
		year: 2015,
		cast: ["Jessica Biel", "Catherine Keener", "James Marsden", "Tracy Morgan"],
		genres: ["Comedy"]
	},{ 
		title: "Da Sweet Blood of Jesus",
		year: 2015,
		cast: ["Felicia Pearson", "Zaraah Abrahams", "Elvis Nolasco", "Steven Hauck"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Fifty Shades of Grey",
		year: 2015,
		cast: ["Jamie Dornan", "Dakota Johnson", "Rita Ora", "Luke Grimes", "Marcia Gay Harden"],
		genres: ["Romance", "Thriller"]
	},{ 
		title: "Kingsman: The Secret Service",
		year: 2015,
		cast: ["Samuel L. Jackson", "Colin Firth", "Taron Egerton", "Mark Strong"],
		genres: ["Action"]
	},{ 
		title: "The Last 5 Years",
		year: 2015,
		cast: ["Anna Kendrick", "Jeremy Jordan", "Natalie Knepp", "Betsy Wolfe"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Duff",
		year: 2015,
		cast: ["Mae Whitman", "Robbie Amell", "Bella Thorne", "Bianca A. Santos"],
		genres: ["Comedy"]
	},{ 
		title: "Hot Tub Time Machine 2",
		year: 2015,
		cast: ["Craig Robinson", "Rob Corddry", "Clark Duke", "Chevy Chase"],
		genres: ["Comedy"]
	},{ 
		title: "McFarland, USA",
		year: 2015,
		cast: ["Kevin Costner", "Maria Bello", "Morgan Saylor", "Carlos Pratts"],
		genres: ["Drama"]
	},{ 
		title: "Everly",
		year: 2015,
		cast: ["Salma Hayek", "Akie Kotabe", "Laura Cepeda", "Togo Igawa"],
		genres: ["Thriller"]
	},{ 
		title: "Focus",
		year: 2015,
		cast: ["Will Smith", "Margot Robbie", "Rodrigo Santoro"],
		genres: ["Romance", "Comedy", "Drama"]
	},{ 
		title: "The Lazarus Effect",
		year: 2015,
		cast: ["Mark Duplass", "Evan Peters", "Oliva Wilde"],
		genres: ["Thriller"]
	},{ 
		title: "Maps to the Stars",
		year: 2015,
		cast: ["Julianne Moore", "Mia Wasikowska", "John Cusack", "Robert Pattinson"],
		genres: ["Drama"]
	},{ 
		title: "Out of the Dark",
		year: 2015,
		cast: ["Scott Speedman", "Stephen Rea", "Julia Stiles", "Pixie Davies"],
		genres: ["Thriller"]
	},{ 
		title: "Bad Asses on the Bayou",
		year: 2015,
		cast: ["Danny Trejo", "Danny Glover", "John Amos", "Loni Love"],
		genres: ["Action"]
	},{ 
		title: "Chappie",
		year: 2015,
		cast: ["Sharlto Copley", "Dev Patel", "Watkin Tudor Jones", "Yolandi Visser"],
		genres: ["Science Fiction"]
	},{ 
		title: "Road Hard",
		year: 2015,
		cast: ["Adam Carolla", "David Koechner", "Diane Farr", "Jay Mohr", "David Alan Grier"],
		genres: ["Comedy"]
	},{ 
		title: "The Second Best Exotic Marigold Hotel",
		year: 2015,
		cast: ["Judi Dench", "Maggie Smith", "Bill Nighy"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Unfinished Business",
		year: 2015,
		cast: ["Vince Vaughn", "Dave Franco", "Sienna Miller", "Nick Frost"],
		genres: ["Comedy"]
	},{ 
		title: "Cinderella",
		year: 2015,
		cast: ["Lily James", "Richard Madden", "Cate Blanchett", "Helena Bonham Carter", "Holliday Grainger"],
		genres: ["Romance"]
	},{ 
		title: "The Cobbler",
		year: 2015,
		cast: ["Adam Sandler", "Dustin Hoffman", "Dan Stevens", "Steve Buscemi"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Cymbeline",
		year: 2015,
		cast: ["Ed Harris", "Milla Jovovich", "Ethan Hawke", "John Leguizamo"],
		genres: ["Crime"]
	},{ 
		title: "Home Sweet Hell",
		year: 2015,
		cast: ["Patrick Wilson", "Katherine Heigl", "Jordana Brewster", "Jim Belushi"],
		genres: ["Comedy"]
	},{ 
		title: "It Follows",
		year: 2015,
		cast: ["Maika Monroe", "Keir Gilchrist", "Jake Weary", "Daniel Zovatto"],
		genres: ["Horror"]
	},{ 
		title: "Muck",
		year: 2015,
		cast: ["Kane Hodder", "Jaclyn Swedberg", "Lachlan Buchanan", "Bryce Draper"],
		genres: ["Horror"]
	},{ 
		title: "Run All Night",
		year: 2015,
		cast: ["Liam Neeson", "Ed Harris", "Joel Kinnaman", "Boyd Holbrook"],
		genres: ["Action"]
	},{ 
		title: "Danny Collins",
		year: 2015,
		cast: ["Al Pacino", "Jennifer Garner", "Annette Bening", "Bobby Cannavale"],
		genres: ["Drama"]
	},{ 
		title: "The Divergent Series: Insurgent",
		year: 2015,
		cast: ["Shailene Woodley", "Theo James", "Octavia Spencer", "Naomi Watts"],
		genres: ["Action"]
	},{ 
		title: "Do You Believe",
		year: 2015,
		cast: ["Ted McGinley", "Mira Sorvino", "Lee Majors", "Sean Astin", "Brian Bosworth"],
		genres: ["Drama"]
	},{ 
		title: "The Gunman",
		year: 2015,
		cast: ["Sean Penn", "Idris Elba", "Peter Franzén", "Mark Schardan"],
		genres: ["Action"]
	},{ 
		title: "Tracers",
		year: 2015,
		cast: ["Taylor Lautner", "Marie Avgeropoulos", "Adam Rayner", "Rafi Gavron"],
		genres: ["Action"]
	},{ 
		title: "The Walking Deceased",
		year: 2015,
		cast: ["Dave Sheridan", "Tim Ogletree", "Joey Oglesby", "Sophie Taylor"],
		genres: ["Comedy"]
	},{ 
		title: "Get Hard",
		year: 2015,
		cast: ["Will Ferrell", "Kevin Hart", "Alison Brie", "Edwina Findley"],
		genres: ["Comedy"]
	},{ 
		title: "Home",
		year: 2015,
		cast: ["Rihanna", "Jim Parsons", "Jennifer Lopez", "Steve Martin"],
		genres: ["Comedy"]
	},{ 
		title: "Serena",
		year: 2015,
		cast: ["Bradley Cooper", "Jennifer Lawrence", "Rhys Ifans", "Sean Harris"],
		genres: ["Drama"]
	},{ 
		title: "While We're Young",
		year: 2015,
		cast: ["Ben Stiller", "Naomi Watts", "Amanda Seyfried", "Adam Driver"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Furious 7",
		year: 2015,
		cast: ["Vin Diesel", "Paul Walker", "Dwayne Johnson", "Michelle Rodriguez", "Tyrese Gibson"],
		genres: ["Action"]
	},{ 
		title: "Woman in Gold",
		year: 2015,
		cast: ["Helen Mirren", "Ryan Reynolds", "Daniel Brühl", "Katie Holmes", "Max Irons"],
		genres: ["Drama"]
	},{ 
		title: "Ex Machina",
		year: 2015,
		cast: ["Domhnall Gleeson", "Alicia Vikander", "Oscar Isaac"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "The Longest Ride",
		year: 2015,
		cast: ["Scott Eastwood", "Britt Robertson", "Alan Alda", "Oona Chaplin"],
		genres: ["Drama"]
	},{ 
		title: "Lost River",
		year: 2015,
		cast: ["Christina Hendricks", "Eva Mendes", "Saoirse Ronan"],
		genres: ["Fantasy", "Thriller"]
	},{ 
		title: "1915",
		year: 2015,
		cast: ["Simon Abkarian", "Angela Sarafyan", "Samuel Page", "Nikolai Kinski"],
		genres: ["Thriller"]
	},{ 
		title: "Alex of Venice",
		year: 2015,
		cast: ["Mary Elizabeth Winstead", "Don Johnson", "Chris Messina", "Derek Luke"],
		genres: ["Drama"]
	},{ 
		title: "Beyond the Reach",
		year: 2015,
		cast: ["Michael Douglas", "Jeremy Irvine", "Ronny Cox"],
		genres: ["Thriller"]
	},{ 
		title: "Child 44",
		year: 2015,
		cast: ["Tom Hardy", "Noomi Rapace", "Joel Kinnaman", "Gary Oldman"],
		genres: ["Thriller"]
	},{ 
		title: "Monkey Kingdom",
		year: 2015,
		cast: ["Tina Fey"],
		genres: ["Documentary"]
	},{ 
		title: "Paul Blart: Mall Cop 2",
		year: 2015,
		cast: ["Kevin James", "Neal McDonough", "Daniella Alonso", "David Henrie"],
		genres: ["Comedy"]
	},{ 
		title: "The Road Within",
		year: 2015,
		cast: ["Robert Sheehan", "Dev Patel", "Zoë Kravitz"],
		genres: ["Drama"]
	},{ 
		title: "True Story",
		year: 2015,
		cast: ["Jonah Hill", "James Franco", "Felicity Jones", "Gretchen Mol"],
		genres: ["Drama"]
	},{ 
		title: "Unfriended",
		year: 2015,
		cast: ["Shelley Hennig", "Moses Jacob", "Renee Olstead", "Will Peltz"],
		genres: ["Horror"]
	},{ 
		title: "Adult Beginners",
		year: 2015,
		cast: ["Nick Kroll", "Rose Byrne", "Bobby Cannavale", "Joel McHale"],
		genres: ["Comedy"]
	},{ 
		title: "Blackbird",
		year: 2015,
		cast: ["Julian Walker", "Mo'Nique", "Isaiah Washington", "Kevin Alessee"],
		genres: ["Drama"]
	},{ 
		title: "Brotherly Love",
		year: 2015,
		cast: ["Keke Palmer", "Cory Hardrict", "Quincy", "Romeo Miller"],
		genres: ["Drama"]
	},{ 
		title: "Just Before I Go",
		year: 2015,
		cast: ["Seann William Scott", "Olivia Thirlby", "Garret Dillahunt", "Kyle Gallner"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Little Boy",
		year: 2015,
		cast: ["David Henrie", "Kevin James", "Emily Watson", "Ted Levine"],
		genres: ["War"]
	},{ 
		title: "The Age of Adaline",
		year: 2015,
		cast: ["Blake Lively", "Harrison Ford", "Michiel Huisman"],
		genres: ["Romance"]
	},{ 
		title: "Avengers: Age of Ultron",
		year: 2015,
		cast: ["Robert Downey, Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
		genres: ["Action"]
	},{ 
		title: "Far from the Madding Crowd",
		year: 2015,
		cast: ["Carey Mulligan", "Matthias Schoenaerts", "Michael Sheen", "Tom Sturridge"],
		genres: ["Drama"]
	},{ 
		title: "The D Train",
		year: 2015,
		cast: ["Jack Black", "James Marsden", "Kathryn Hahn"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Hot Pursuit",
		year: 2015,
		cast: ["Reese Witherspoon", "Sofía Vergara"],
		genres: ["Comedy"]
	},{ 
		title: "Maggie",
		year: 2015,
		cast: ["Abigail Breslin", "Arnold Schwarzenegger", "Denise Williamson"],
		genres: ["Drama", "Horror", "Thriller"]
	},{ 
		title: "Mad Max: Fury Road",
		year: 2015,
		cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Hugh Keays-Byrne", "Josh Helman", "Nathan Jones", "Zoë Kravitz", "Rosie Huntington-Whiteley", "Riley Keough"],
		genres: ["Action"]
	},{ 
		title: "Pitch Perfect 2",
		year: 2015,
		cast: ["Anna Kendrick", "Skylar Astin", "Rebel Wilson", "Brittany Snow", "Ester Dean"],
		genres: ["Comedy"]
	},{ 
		title: "Poltergeist",
		year: 2015,
		cast: ["Sam Rockwell", "Jared Harris", "Rosemarie DeWitt", "Saxon Sharbino"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Tomorrowland",
		year: 2015,
		cast: ["George Clooney", "Hugh Laurie", "Britt Robertson", "Raffey Cassidy", "Thomas Robinson"],
		genres: ["Science Fiction", "Mystery"]
	},{ 
		title: "When Marnie Was There",
		year: 2015,
		cast: ["Hailee Steinfeld", "Kiernan Shipka"],
		genres: []
	},{ 
		title: "Aloha",
		year: 2015,
		cast: ["Bradley Cooper", "Emma Stone", "Rachel McAdams", "John Krasinski"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "San Andreas",
		year: 2015,
		cast: ["Dwayne Johnson", "Carla Gugino", "Alexandra Daddario"],
		genres: ["Disaster"]
	},{ 
		title: "Spy",
		year: 2015,
		cast: ["Melissa McCarthy", "Jason Statham", "Rose Byrne", "Jude Law"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Entourage",
		year: 2015,
		cast: ["Kevin Connolly", "Adrian Grenier", "Kevin Dillon", "Jerry Ferrara", "Jeremy Piven"],
		genres: ["Comedy"]
	},{ 
		title: "Insidious: Chapter 3",
		year: 2015,
		cast: ["Lin Shaye", "Dermot Mulroney", "Stefanie Scott"],
		genres: ["Horror"]
	},{ 
		title: "Love & Mercy",
		year: 2015,
		cast: ["John Cusack", "Paul Dano", "Elizabeth Banks"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Jurassic World",
		year: 2015,
		cast: ["Vincent D'Onofrio", "Judy Greer", "Chris Pratt"],
		genres: ["Adventure", "Science Fiction"]
	},{ 
		title: "Me and Earl and the Dying Girl",
		year: 2015,
		cast: ["Thomas Mann", "Olivia Cooke", "RJ Cyler"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Dope",
		year: 2015,
		cast: ["Shameik Moore", "Tony Revolori", "Kiersey Clemons"],
		genres: ["Crime", "Comedy", "Drama"]
	},{ 
		title: "Inside Out",
		year: 2015,
		cast: ["Amy Poehler", "Lewis Black", "Mindy Kaling", "Bill Hader", "Phyllis Smith"],
		genres: ["Comedy"]
	},{ 
		title: "Max",
		year: 2015,
		cast: ["Josh Wiggins", "Dejon LaQuake", "Thomas Haden Church"],
		genres: ["Adventure"]
	},{ 
		title: "Ted 2",
		year: 2015,
		cast: ["Mark Wahlberg", "Seth MacFarlane", "Amanda Seyfried", "Morgan Freeman"],
		genres: ["Comedy"]
	},{ 
		title: "Terminator Genisys",
		year: 2015,
		cast: ["Arnold Schwarzenegger", "Emilia Clarke", "Jai Courtney"],
		genres: ["Action", "Adventure", "Science Fiction"]
	},{ 
		title: "Minions",
		year: 2015,
		cast: ["Sandra Bullock", "Jon Hamm", "Michael Keaton"],
		genres: ["Comedy"]
	},{ 
		title: "Ant-Man",
		year: 2015,
		cast: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly", "Corey Stoll"],
		genres: ["Action"]
	},{ 
		title: "Trainwreck",
		year: 2015,
		cast: ["Amy Schumer", "Tilda Swinton", "Bill Hader", "Daniel Radcliffe", "Colin Quinn"],
		genres: ["Comedy"]
	},{ 
		title: "Pixels",
		year: 2015,
		cast: ["Adam Sandler", "Kevin James", "Peter Dinklage", "Josh Gad"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "The Vatican Tapes",
		year: 2015,
		cast: ["Kathleen Robertson", "Michael Peña", "Djimon Hounsou", "Dougray Scott"],
		genres: ["Horror"]
	},{ 
		title: "She's Funny That Way",
		year: 2015,
		cast: ["Owen Wilson", "Imogen Poots", "Kathryn Hahn", "Jennifer Aniston"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "No Escape",
		year: 2015,
		cast: ["Lake Bell", "Pierce Brosnan", "Owen Wilson", "Sterling Jerins"],
		genres: ["Thriller"]
	},{ 
		title: "Agent 47",
		year: 2015,
		cast: ["Rupert Friend", "Zachary Quinto", "Hannah Ware", "Thomas Kretschmann"],
		genres: ["Action"]
	},{ 
		title: "Black Mass",
		year: 2015,
		cast: ["Johnny Depp", "Benedict Cumberbatch", "Joel Edgerton", "Sienna Miller"],
		genres: ["Action"]
	},{ 
		title: "Everest",
		year: 2015,
		cast: ["Jake Gyllenhaal", "Jason Clarke", "Sam Worthington", "Josh Brolin", "John Hawkes"],
		genres: ["Adventure", "Thriller"]
	},{ 
		title: "War Pigs",
		year: 2015,
		cast: ["Luke Goss", "Dolph Lundgren", "Mickey Rourke"],
		genres: ["Action", "War"]
	},{ 
		title: "The Martian",
		year: 2015,
		cast: ["Matt Damon"],
		genres: ["Science Fiction"]
	},{ 
		title: "Room (2015 film)",
		year: 2015,
		cast: ["Jacob Tremblay", "Joan Allen", "William H. Macy", "Sean Bridgers"],
		genres: ["Drama"]
	},{ 
		title: "Crimson Peak",
		year: 2015,
		cast: ["Charlie Hunnam", "Tom Hiddleston", "Jessica Chastain", "Burn Gorman"],
		genres: ["Thriller"]
	},{ 
		title: "The Peanuts Movie",
		year: 2015,
		cast: ["Bill Melendez", "Noah Schnapp", "Hadley Belle Miller", "Mariel Sheets"],
		genres: ["Adventure", "Comedy"]
	},{ 
		title: "The Good Dinosaur",
		year: 2015,
		cast: ["Lucas Neff", "John Lithgow", "Neil Patrick Harris", "Judy Greer"],
		genres: ["Animated"]
	},{ 
		title: "Victor Frankenstein",
		year: 2015,
		cast: ["James McAvoy", "Daniel Radcliffe", "Jessica Brown Findlay", "Mark Gatiss"],
		genres: ["Horror"]
	},{ 
		title: "In the Heart of the Sea",
		year: 2015,
		cast: ["Chris Hemsworth", "Benjamin Walker", "Cillian Murphy", "Ben Whishaw"],
		genres: ["Thriller"]
	},{ 
		title: "Concussion",
		year: 2015,
		cast: ["Will Smith", "Albert Brooks", "Alec Baldwin", "Gugu Mbatha-Raw"],
		genres: ["Drama"]
	},{ 
		title: "Daddy's Home",
		year: 2015,
		cast: ["Mark Wahlberg", "Will Ferrell", "Linda Cardellini"],
		genres: ["Comedy"]
	},{ 
		title: "Joy",
		year: 2015,
		cast: ["Jennifer Lawrence", "Robert De Niro", "Édgar Ramírez"],
		genres: ["Biography", "Comedy", "Drama"]
	},{ 
		title: "Point Break",
		year: 2015,
		cast: ["Edgar Ramirez", "Luke Bracey", "Ray Winstone"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "The Revenant",
		year: 2015,
		cast: ["Leonardo DiCaprio", "Tom Hardy"],
		genres: ["Western", "Thriller"]
	},{ 
		title: "The Forest",
		year: 2016,
		cast: ["Natalie Dormer", "Taylor Kitsch"],
		genres: ["Thriller"]
	},{ 
		title: "Anesthesia",
		year: 2016,
		cast: ["Sam Waterston", "Tim Blake Nelson", "Kristen Stewart"],
		genres: ["Drama"]
	},{ 
		title: "Lamb",
		year: 2016,
		cast: ["Ross Partridge", "Oona Laurence", "Jess Weixler"],
		genres: ["Drama"]
	},{ 
		title: "Ride Along 2",
		year: 2016,
		cast: ["Ice Cube", "Kevin Hart"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "13 Hours: The Secret Soldiers of Benghazi",
		year: 2016,
		cast: ["James Badge Dale", "John Krasinski", "Max Martini"],
		genres: ["Action"]
	},{ 
		title: "Norm of the North",
		year: 2016,
		cast: ["Rob Schneider", "Heather Graham", "Ken Jeong"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "The Benefactor",
		year: 2016,
		cast: ["Richard Gere", "Dakota Fanning", "Theo James"],
		genres: ["Drama"]
	},{ 
		title: "Dirty Grandpa",
		year: 2016,
		cast: ["Zac Efron", "Robert De Niro"],
		genres: ["Comedy"]
	},{ 
		title: "The 5th Wave",
		year: 2016,
		cast: ["Chloë Grace Moretz", "Liev Schreiber"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Boy",
		year: 2016,
		cast: ["Lauren Cohan", "Rupert Evans"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Ip Man 3",
		year: 2016,
		cast: ["Donnie Yen"],
		genres: ["Martial Arts"]
	},{ 
		title: "Synchronicity",
		year: 2016,
		cast: ["Brianne Davis", "Chad McKnight", "Scott Poythress"],
		genres: ["Action"]
	},{ 
		title: "Kung Fu Panda 3",
		year: 2016,
		cast: ["Jack Black", "Angelina Jolie", "Dustin Hoffman", "Seth Rogen"],
		genres: ["Animated", "Martial Arts", "Action", "Comedy"]
	},{ 
		title: "The Finest Hours",
		year: 2016,
		cast: ["Chris Pine", "Casey Affleck"],
		genres: ["Drama"]
	},{ 
		title: "Fifty Shades of Black",
		year: 2016,
		cast: ["Marlon Wayans", "Kali Hawk", "Mike Epps"],
		genres: ["Comedy"]
	},{ 
		title: "Jane Got a Gun",
		year: 2016,
		cast: ["Natalie Portman", "Joel Edgerton"],
		genres: ["Action", "Western"]
	},{ 
		title: "Hail, Caesar!",
		year: 2016,
		cast: ["Josh Brolin", "George Clooney"],
		genres: ["Comedy"]
	},{ 
		title: "Pride + Prejudice + Zombies",
		year: 2016,
		cast: ["Lily James", "Sam Riley", "Jack Huston", "Matt Smith"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "The Choice",
		year: 2016,
		cast: ["Benjamin Walker", "Teresa Palmer"],
		genres: ["Romance"]
	},{ 
		title: "Deadpool",
		year: 2016,
		cast: ["Ryan Reynolds", "T.J. Miller", "Morena Baccarin"],
		genres: ["Thriller"]
	},{ 
		title: "Zoolander 2",
		year: 2016,
		cast: ["Ben Stiller", "Owen Wilson", "Penélope Cruz", "Kristen Wiig"],
		genres: ["Comedy"]
	},{ 
		title: "How to Be Single",
		year: 2016,
		cast: ["Dakota Johnson", "Rebel Wilson"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Risen",
		year: 2016,
		cast: ["Joseph Fiennes", "Tom Felton"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "The Witch",
		year: 2016,
		cast: ["Anya Taylor-Joy", "Ralph Ineson", "Kate Dickie"],
		genres: ["Horror"]
	},{ 
		title: "Race",
		year: 2016,
		cast: ["Stephan James", "Jason Sudeikis", "Jeremy Irons"],
		genres: ["Sports", "Drama"]
	},{ 
		title: "Gods of Egypt",
		year: 2016,
		cast: ["Nicolaj Coster-Waldau", "Gerard Butler", "Brenton Thwaites"],
		genres: ["Fantasy", "Action"]
	},{ 
		title: "Triple 9",
		year: 2016,
		cast: ["Casey Affleck", "Aaron Paul"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Eddie the Eagle",
		year: 2016,
		cast: ["Taron Egerton", "Hugh Jackman", "Christopher Walken"],
		genres: ["Sports", "Drama", "Comedy"]
	},{ 
		title: "Zootopia",
		year: 2016,
		cast: ["Ginnifer Goodwin", "Jason Bateman", "Idris Elba"],
		genres: ["Animated", "Adventure"]
	},{ 
		title: "London Has Fallen",
		year: 2016,
		cast: ["Gerard Butler", "Aaron Eckhart"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Whiskey Tango Foxtrot",
		year: 2016,
		cast: ["Tina Fey", "Martin Freeman"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "The Other Side of the Door",
		year: 2016,
		cast: ["Sarah Wayne Callies", "Jeremy Sisto"],
		genres: ["Horror"]
	},{ 
		title: "10 Cloverfield Lane",
		year: 2016,
		cast: ["John Goodman", "Mary Elizabeth Winstead"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "The Young Messiah",
		year: 2016,
		cast: ["Adam Greaves-Neal", "Sean Bean", "David Bradley"],
		genres: ["Drama"]
	},{ 
		title: "The Perfect Match",
		year: 2016,
		cast: ["Terrence J", "Cassie Ventura"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Hello, My Name Is Doris",
		year: 2016,
		cast: ["Sally Field", "Max Greenfield"],
		genres: ["Romance", "Drama", "Comedy"]
	},{ 
		title: "Miracles from Heaven",
		year: 2016,
		cast: ["Jennifer Garner", "Martin Henderson"],
		genres: ["Drama"]
	},{ 
		title: "The Divergent Series: Allegiant",
		year: 2016,
		cast: ["Shailene Woodley", "Theo James", "Miles Teller", "Ansel Elgort"],
		genres: ["Science Fiction", "Adventure"]
	},{ 
		title: "The Bronze",
		year: 2016,
		cast: ["Melissa Rauch", "Thomas Middleditch"],
		genres: ["Comedy"]
	},{ 
		title: "Midnight Special",
		year: 2016,
		cast: ["Michael Shannon", "Kirsten Dunst"],
		genres: ["Science Fiction", "Drama", "Supernatural"]
	},{ 
		title: "Batman v Superman: Dawn of Justice",
		year: 2016,
		cast: ["Henry Cavill", "Ben Affleck", "Amy Adams"],
		genres: ["Action"]
	},{ 
		title: "My Big Fat Greek Wedding 2",
		year: 2016,
		cast: ["Nia Vardalos", "John Corbett"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "I Saw the Light",
		year: 2016,
		cast: ["Tom Hiddleston", "Elizabeth Olsen", "Cherry Jones", "Bradley Whitford"],
		genres: ["Drama"]
	},{ 
		title: "Everybody Wants Some!!",
		year: 2016,
		cast: ["Will Brittain", "Blake Jenner", "Zoey Deutch", "Tyler Hoechlin"],
		genres: ["Sports", "Comedy"]
	},{ 
		title: "God's Not Dead 2",
		year: 2016,
		cast: ["Melissa Joan Hart", "Jesse Metcalfe"],
		genres: ["Drama"]
	},{ 
		title: "Meet the Blacks",
		year: 2016,
		cast: ["Mike Epps", "Gary Owen"],
		genres: ["Comedy"]
	},{ 
		title: "Miles Ahead",
		year: 2016,
		cast: ["Don Cheadle", "Ewan McGregor"],
		genres: ["Musical", "Drama"]
	},{ 
		title: "The Boss",
		year: 2016,
		cast: ["Melissa McCarthy", "Kristen Bell"],
		genres: ["Comedy"]
	},{ 
		title: "Hardcore Henry",
		year: 2016,
		cast: ["Sharlto Copley", "Danila Kozlovsky", "Haley Bennett"],
		genres: ["Science Fiction", "Action"]
	},{ 
		title: "Demolition",
		year: 2016,
		cast: ["Jake Gyllenhaal", "Naomi Watts"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "The Invitation",
		year: 2016,
		cast: ["Logan Marshall-Green", "Tammy Blanchard", "Michiel Huisman"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "The Jungle Book",
		year: 2016,
		cast: ["Bill Murray", "Ben Kingsley", "Idris Elba"],
		genres: ["Animated"]
	},{ 
		title: "Barbershop: The Next Cut",
		year: 2016,
		cast: ["Ice Cube", "Cedric the Entertainer", "Regina Hall"],
		genres: ["Comedy"]
	},{ 
		title: "Criminal",
		year: 2016,
		cast: ["Kevin Costner", "Gary Oldman"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Green Room",
		year: 2016,
		cast: ["Anton Yelchin", "Imogen Poots"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "The Huntsman: Winter's War",
		year: 2016,
		cast: ["Chris Hemsworth", "Charlize Theron", "Emily Blunt"],
		genres: ["Fantasy", "Action", "Adventure"]
	},{ 
		title: "A Hologram for the King",
		year: 2016,
		cast: ["Tom Hanks", "Ben Whishaw"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Elvis & Nixon",
		year: 2016,
		cast: ["Kevin Spacey", "Michael Shannon"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Keanu",
		year: 2016,
		cast: ["Jordan Peele", "Keegan-Michael Key"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Mother's Day",
		year: 2016,
		cast: ["Jennifer Aniston", "Julia Roberts"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Ratchet & Clank",
		year: 2016,
		cast: ["Paul Giamatti", "John Goodman", "Bella Thorne"],
		genres: ["Animated"]
	},{ 
		title: "Captain America: Civil War",
		year: 2016,
		cast: ["Chris Evans", "Robert Downey Jr.", "Sebastian Stan"],
		genres: ["Superhero", "Action", "Adventure"]
	},{ 
		title: "Money Monster",
		year: 2016,
		cast: ["George Clooney", "Julia Roberts", "Jack O'Connell"],
		genres: ["Thriller"]
	},{ 
		title: "The Darkness",
		year: 2016,
		cast: ["Kevin Bacon", "Radha Mitchell"],
		genres: ["Thriller"]
	},{ 
		title: "Love & Friendship",
		year: 2016,
		cast: ["Kate Beckinsale", "Xavier Samuel", "Emma Greenwell"],
		genres: ["Comedy"]
	},{ 
		title: "The Angry Birds Movie",
		year: 2016,
		cast: ["Jason Sudeikis", "Josh Gad", "Bill Hader"],
		genres: ["Animated"]
	},{ 
		title: "Neighbors 2: Sorority Rising",
		year: 2016,
		cast: ["Seth Rogen", "Zac Efron"],
		genres: ["Comedy"]
	},{ 
		title: "The Nice Guys",
		year: 2016,
		cast: ["Russell Crowe", "Ryan Gosling"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "X-Men: Apocalypse",
		year: 2016,
		cast: ["James McAvoy", "Michael Fassbender", "Oscar Isaac"],
		genres: ["Superhero", "Action", "Adventure"]
	},{ 
		title: "Alice Through the Looking Glass",
		year: 2016,
		cast: ["Mia Wasikowska", "Johnny Depp", "Helena Bonham Carter", "Anne Hathaway"],
		genres: ["Fantasy"]
	},{ 
		title: "TMNT 2: Out of the Shadows",
		year: 2016,
		cast: ["Megan Fox", "Will Arnett", "Stephen Amell"],
		genres: ["Science Fiction", "Action", "Comedy"]
	},{ 
		title: "Me Before You",
		year: 2016,
		cast: ["Emilia Clarke", "Sam Claflin"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Popstar: Never Stop Never Stopping",
		year: 2016,
		cast: ["Andy Samberg"],
		genres: ["Satire", "Comedy"]
	},{ 
		title: "The Conjuring 2",
		year: 2016,
		cast: ["Vera Farmiga", "Patrick Wilson"],
		genres: ["Supernatural", "Horror"]
	},{ 
		title: "Warcraft",
		year: 2016,
		cast: ["Travis Fimmel", "Ben Foster"],
		genres: ["Fantasy"]
	},{ 
		title: "Now You See Me 2",
		year: 2016,
		cast: ["Jesse Eisenberg", "Mark Ruffalo"],
		genres: ["Thriller"]
	},{ 
		title: "Finding Dory",
		year: 2016,
		cast: ["Ellen DeGeneres", "Albert Brooks"],
		genres: ["Animated", "Adventure"]
	},{ 
		title: "Central Intelligence",
		year: 2016,
		cast: ["Dwayne Johnson", "Kevin Hart"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Independence Day: Resurgence",
		year: 2016,
		cast: ["Liam Hemsworth", "Maika Monroe", "Jeff Goldblum"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Shallows",
		year: 2016,
		cast: ["Blake Lively"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Free State of Jones",
		year: 2016,
		cast: ["Matthew McConaughey", "Gugu Mbatha-Raw"],
		genres: ["Thriller"]
	},{ 
		title: "The Neon Demon",
		year: 2016,
		cast: ["Elle Fanning", "Karl Glusman", "Jena Malone"],
		genres: ["Thriller"]
	},{ 
		title: "The Legend of Tarzan",
		year: 2016,
		cast: ["Alexander Skarsgård", "Margot Robbie"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "The BFG",
		year: 2016,
		cast: ["Mark Rylance", "Ruby Barnhill"],
		genres: ["Fantasy", "Adventure"]
	},{ 
		title: "The Purge: Election Year",
		year: 2016,
		cast: ["Frank Grillo", "Elizabeth Mitchell"],
		genres: ["Action"]
	},{ 
		title: "The Secret Life of Pets",
		year: 2016,
		cast: ["Louis C.K.", "Kevin Hart"],
		genres: ["Animated"]
	},{ 
		title: "Mike and Dave Need Wedding Dates",
		year: 2016,
		cast: ["Adam DeVine", "Zac Efron"],
		genres: ["Comedy"]
	},{ 
		title: "Characterz",
		year: 2016,
		cast: ["Mitchel Musso"],
		genres: ["Comedy"]
	},{ 
		title: "The Infiltrator",
		year: 2016,
		cast: ["Bryan Cranston", "Diane Kruger", "John Leguizamo"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Ghostbusters",
		year: 2016,
		cast: ["Melissa McCarthy", "Kristen Wiig"],
		genres: ["Supernatural", "Comedy"]
	},{ 
		title: "Star Trek Beyond",
		year: 2016,
		cast: ["Chris Pine", "Zachary Quinto", "Idris Elba"],
		genres: ["Science Fiction", "Action", "Adventure"]
	},{ 
		title: "Ice Age: Collision Course",
		year: 2016,
		cast: ["Ray Romano", "John Leguizamo"],
		genres: ["Animated"]
	},{ 
		title: "Lights Out",
		year: 2016,
		cast: ["Teresa Palmer"],
		genres: ["Horror"]
	},{ 
		title: "Jason Bourne",
		year: 2016,
		cast: ["Matt Damon", "Alicia Vikander"],
		genres: ["Action", "Adventure", "Thriller", "Spy"]
	},{ 
		title: "Bad Moms",
		year: 2016,
		cast: ["Kristen Bell", "Mila Kunis"],
		genres: ["Comedy"]
	},{ 
		title: "Nerve",
		year: 2016,
		cast: ["Emma Roberts", "Dave Franco"],
		genres: ["Thriller"]
	},{ 
		title: "Suicide Squad",
		year: 2016,
		cast: ["Will Smith", "Jared Leto", "Margot Robbie"],
		genres: ["Superhero", "Action", "Adventure"]
	},{ 
		title: "Nine Lives",
		year: 2016,
		cast: ["Kevin Spacey"],
		genres: []
	},{ 
		title: "Pete's Dragon",
		year: 2016,
		cast: ["Bryce Dallas Howard"],
		genres: []
	},{ 
		title: "Sausage Party",
		year: 2016,
		cast: ["Seth Rogen", "Kristen Wiig"],
		genres: []
	},{ 
		title: "Florence Foster Jenkins",
		year: 2016,
		cast: ["Meryl Streep"],
		genres: []
	},{ 
		title: "Ben-Hur",
		year: 2016,
		cast: ["Jack Huston", "Toby Kebbell"],
		genres: ["Thriller"]
	},{ 
		title: "Kubo and the Two Strings",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "War Dogs",
		year: 2016,
		cast: ["Jonah Hill", "Miles Teller"],
		genres: ["Crime", "Drama", "Comedy"]
	},{ 
		title: "Mechanic: Resurrection",
		year: 2016,
		cast: ["Jason Statham"],
		genres: []
	},{ 
		title: "Don't Breathe",
		year: 2016,
		cast: ["Jane Levy"],
		genres: []
	},{ 
		title: "Hands of Stone",
		year: 2016,
		cast: ["Édgar Ramírez", "Robert De Niro"],
		genres: ["Sports"]
	},{ 
		title: "The Light Between Oceans",
		year: 2016,
		cast: ["Michael Fassbender", "Alicia Vikander"],
		genres: []
	},{ 
		title: "Morgan",
		year: 2016,
		cast: ["Kate Mara"],
		genres: []
	},{ 
		title: "Sully",
		year: 2016,
		cast: ["Tom Hanks"],
		genres: []
	},{ 
		title: "When the Bough Breaks",
		year: 2016,
		cast: ["Morris Chestnut", "Regina Hall"],
		genres: []
	},{ 
		title: "The Wild Life",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "The Disappointments Room",
		year: 2016,
		cast: ["Kate Beckinsale", "Lucas Till"],
		genres: []
	},{ 
		title: "Bridget Jones's Baby",
		year: 2016,
		cast: ["Renée Zellweger", "Colin Firth", "Patrick Dempsey"],
		genres: []
	},{ 
		title: "Snowden",
		year: 2016,
		cast: ["Joseph Gordon-Levitt", "Shailene Woodley", "Zachary Quinto"],
		genres: []
	},{ 
		title: "Blair Witch",
		year: 2016,
		cast: ["Valorie Curry"],
		genres: []
	},{ 
		title: "Hillsong: Let Hope Rise",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "The Magnificent Seven",
		year: 2016,
		cast: ["Denzel Washington", "Chris Pratt"],
		genres: []
	},{ 
		title: "Storks",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "South of 8",
		year: 2016,
		cast: ["Brian Patrick Butler", "George Jac"],
		genres: ["Crime"]
	},{ 
		title: "Miss Peregrine's Home for Peculiar Children",
		year: 2016,
		cast: ["Eva Green", "Asa Butterfield"],
		genres: []
	},{ 
		title: "Deepwater Horizon",
		year: 2016,
		cast: ["Mark Wahlberg", "Kurt Russell"],
		genres: []
	},{ 
		title: "Masterminds",
		year: 2016,
		cast: ["Zach Galifianakis", "Kristen Wiig"],
		genres: []
	},{ 
		title: "The Girl on the Train",
		year: 2016,
		cast: ["Emily Blunt"],
		genres: ["Thriller"]
	},{ 
		title: "The Birth of a Nation",
		year: 2016,
		cast: ["Nate Parker", "Armie Hammer"],
		genres: []
	},{ 
		title: "Middle School: The Worst Years of My Life",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "The Accountant",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "Kevin Hart: What Now?",
		year: 2016,
		cast: ["Kevin Hart"],
		genres: []
	},{ 
		title: "Max Steel",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "Jack Reacher: Never Go Back",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "Keeping Up with the Joneses",
		year: 2016,
		cast: ["Isla Fisher", "Jon Hamm"],
		genres: ["Comedy"]
	},{ 
		title: "Ouija: Origin of Evil",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "Boo! A Madea Halloween",
		year: 2016,
		cast: ["Tyler Perry"],
		genres: []
	},{ 
		title: "I'm Not Ashamed",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "American Pastoral",
		year: 2016,
		cast: ["Ewan McGregor", "Jennifer Connelly"],
		genres: []
	},{ 
		title: "Inferno",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "Friend Request",
		year: 2016,
		cast: ["Alycia Debnam-Carey"],
		genres: ["Horror"]
	},{ 
		title: "Moana",
		year: 2016,
		cast: ["Auli'i Cravalho", "Dwayne Johnson"],
		genres: ["Family", "Animated"]
	},{ 
		title: "Rogue One: A Star Wars Story (film)",
		year: 2016,
		cast: ["Diego Luna"],
		genres: ["Science Fiction"]
	},{ 
		title: "The Founder",
		year: 2016,
		cast: ["Michael Keaton"],
		genres: []
	},{ 
		title: "Sing",
		year: 2016,
		cast: ["Reese Witherspoon", "Scarlett Johansson"],
		genres: []
	},{ 
		title: "A Monster Calls",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "Rings",
		year: 2016,
		cast: [],
		genres: []
	},{ 
		title: "Underworld: Blood Wars",
		year: 2017,
		cast: ["Kate Beckinsale", "Theo James", "Tobias Menzies", "Lara Pulver", "James Faulkner", "Charles Dance"],
		genres: ["Action", "Horror"]
	},{ 
		title: "Arsenal",
		year: 2017,
		cast: ["Adrian Grenier", "Johnathon Schaech", "Nicolas Cage", "Lydia Hull", "Christopher Coppola", "Megan Leonard", "Christopher Rob Bowen", "Tyler Jon Olson", "Shea Buckner", "John Cusack"],
		genres: ["Action", "Crime", "Thriller"]
	},{ 
		title: "Between Us",
		year: 2017,
		cast: ["Olivia Thirlby", "Ben Feldman", "Adam Goldberg", "Analeigh Tipton", "Scott Haze", "Peter Bogdanovich", "Lesley Ann Warren"],
		genres: ["Comedy", "Romance", "Drama"]
	},{ 
		title: "Monster Trucks",
		year: 2017,
		cast: ["Lucas Till", "Jane Levy", "Amy Ryan", "Holt McCallany", "Rob Lowe", "Danny Glover", "Frank Whaley", "Chad Willett", "Barry Pepper", "Thomas Lennon", "Tucker Albrizzi"],
		genres: ["Animated", "Adventure", "Science Fiction"]
	},{ 
		title: "The Bye Bye Man",
		year: 2017,
		cast: ["Douglas Smith", "Doug Jones", "Michael Trucco", "Cressida Bonas", "Lucien Laviscount", "Carrie-Anne Moss", "Faye Dunaway"],
		genres: ["Horror"]
	},{ 
		title: "Sleepless",
		year: 2017,
		cast: ["Jamie Foxx", "T.I.", "Drew Sidora", "Lloyd Banks", "Gabrielle Union", "David Harbour", "Young Jeezy", "Michelle Monaghan", "Scoot McNairy", "Sala Baker"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "100 Streets",
		year: 2017,
		cast: ["Idris Elba", "Gemma Arterton", "Charlie Creed-Miles", "Franz Drameh", "Kierston Wareing", "Tom Cullen", "Ken Stott"],
		genres: ["Drama"]
	},{ 
		title: "The Book of Love",
		year: 2017,
		cast: ["Jason Sudeikis", "Jessica Biel", "Maisie Williams", "Mary Steenburgen", "Orlando Jones", "Paul Reiser"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Split",
		year: 2017,
		cast: ["James McAvoy", "Anya Taylor-Joy", "Betty Buckley", "Jessica Sula", "Haley Lu Richardson", "Kim Director", "Lyne Renée", "Brad William Henke", "Neal Huff", "Sebastian Arcelus"],
		genres: ["Horror", "Thriller", "Drama"]
	},{ 
		title: "xXx: Return of Xander Cage",
		year: 2017,
		cast: ["Vin Diesel", "Samuel L. Jackson", "Donnie Yen", "Deepika Padukone", "Kris Wu", "Nina Dobrev", "Tony Jaa", "Ruby Rose", "Toni Collette", "Nicky Jam", "Rory McCann", "Al Sapienza", "Michael Bisping", "Ariadna Gutiérrez", "Hermione Corfield"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "The Resurrection of Gavin Stone",
		year: 2017,
		cast: ["Brett Dalton", "Anjelah Johnson", "Neil Flynn", "Shawn Michaels", "D. B. Sweeney"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Trespass Against Us",
		year: 2017,
		cast: ["Michael Fassbender", "Brendan Gleeson", "Lyndsey Marshal", "Killian Scott"],
		genres: ["Crime", "Drama", "Thriller"]
	},{ 
		title: "Sophie and the Rising Sun",
		year: 2017,
		cast: ["Julianne Nicholson", "Margo Martindale", "Lorraine Toussaint", "Takashi Yamaguchi", "Diane Ladd"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "A Dog's Purpose",
		year: 2017,
		cast: ["Britt Robertson", "Dennis Quaid", "Josh Gad", "Peggy Lipton", "Juliet Rylance"],
		genres: ["Family"]
	},{ 
		title: "Resident Evil: The Final Chapter",
		year: 2017,
		cast: ["Milla Jovovich", "Shawn Roberts", "Ruby Rose", "William Levy", "Iain Glen", "Eoin Macken", "Lee Joon-gi", "Ali Larter"],
		genres: ["Action", "Adventure", "Horror", "Science Fiction"]
	},{ 
		title: "Lost in Florence",
		year: 2017,
		cast: ["Brett Dalton", "Stana Katic", "Alessandra Mastronardi", "Alessandro Preziosi", "Emily Atack", "Rob Aramayo", "Marco Bonini"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "I Am Michael",
		year: 2017,
		cast: ["James Franco", "Zachary Quinto", "Emma Roberts", "Charlie Carver"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "iBoy",
		year: 2017,
		cast: ["Bill Milner", "Maisie Williams", "Miranda Richardson", "Rory Kinnear"],
		genres: ["Action", "Crime"]
	},{ 
		title: "Rings",
		year: 2017,
		cast: ["Matilda Lutz", "Alex Roe", "Johnny Galecki", "Aimee Teegarden", "Laura Wiggins", "Zach Roerig", "Vincent D'Onofrio", "Andrea Laing", "Patrick R. Walker"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "The Space Between Us",
		year: 2017,
		cast: ["Asa Butterfield", "Britt Robertson", "Gary Oldman", "Carla Gugino", "B. D. Wong"],
		genres: ["Science Fiction", "Adventure", "Romance"]
	},{ 
		title: "Youth in Oregon",
		year: 2017,
		cast: ["Frank Langella", "Billy Crudup", "Christina Applegate", "Nicola Peltz", "Josh Lucas", "Mary Kay Place", "Alex Shaffer"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "I Am Not Your Negro",
		year: 2017,
		cast: ["Samuel L. Jackson"],
		genres: ["Documentary"]
	},{ 
		title: "Growing Up Smith",
		year: 2017,
		cast: ["Jason Lee", "Anjul Nigam", "Brighton Sharbino", "Hilarie Burton", "Roni Akurati"],
		genres: ["Comedy"]
	},{ 
		title: "The Lego Batman Movie",
		year: 2017,
		cast: ["Will Arnett", "Ralph Fiennes", "Rosario Dawson", "Michael Cera", "Zach Galifianakis", "Mariah Carey", "Jenny Slate", "Billy Dee Williams"],
		genres: ["Animated", "Comedy", "Action"]
	},{ 
		title: "Fifty Shades Darker",
		year: 2017,
		cast: ["Dakota Johnson", "Jamie Dornan", "Kim Basinger", "Luke Grimes", "Eloise Mumford", "Max Martini", "Eric Johnson", "Bella Heathcote", "Marcia Gay Harden", "Rita Ora"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "John Wick: Chapter 2",
		year: 2017,
		cast: ["Keanu Reeves", "Common", "Bridget Moynahan", "Ian McShane", "John Leguizamo", "Ruby Rose", "Laurence Fishburne"],
		genres: ["Noir", "Action", "Thriller"]
	},{ 
		title: "Bornless Ones",
		year: 2017,
		cast: ["Michael Johnston", "Margaret Judson", "Bobby T", "Lana Titova", "Victoria Clare", "Devin Goodsell", "Gwen Holloway", "Mark Furze", "Greg Travis", "Nick Saso", "Rob Tepper", "David Banks"],
		genres: ["Horror"]
	},{ 
		title: "The Great Wall",
		year: 2017,
		cast: ["Andy Lau", "Matt Damon", "Willem Dafoe", "Jing Tian", "Pedro Pascal", "Zhang Hanyu", "Eddie Peng", "Lu Han", "Lin Gengxin", "Chen Xuedong", "Huang Xuan", "Wang Junkai", "Ryan Zheng", "Yu Xintian", "Liu Qiong"],
		genres: ["Action", "Fantasy"]
	},{ 
		title: "A Cure for Wellness",
		year: 2017,
		cast: ["Dane DeHaan", "Mia Goth", "Jason Isaacs"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Fist Fight",
		year: 2017,
		cast: ["Ice Cube", "Charlie Day", "Christina Hendricks", "Dennis Haysbert", "Tracy Morgan", "Jillian Bell", "Dean Norris"],
		genres: ["Comedy"]
	},{ 
		title: "American Fable",
		year: 2017,
		cast: ["Peyton Kennedy", "Richard Schiff", "Kip Pardue", "Marci Miller", "Gavin MacIntosh", "Zuleikha Robinson"],
		genres: ["Thriller", "Fantasy"]
	},{ 
		title: "XX",
		year: 2017,
		cast: ["Natalie Brown", "Melanie Lynskey", "Breeda Wool", "Christina Kirk"],
		genres: ["Horror", "Suspense"]
	},{ 
		title: "Lovesong",
		year: 2017,
		cast: ["Jena Malone", "Riley Keough", "Brooklyn Decker", "Amy Seimetz", "Marshall Chapman", "Ryan Eggold", "Rosanna Arquette"],
		genres: ["Drama"]
	},{ 
		title: "Get Out",
		year: 2017,
		cast: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener", "Bradley Whitford", "Caleb Landry Jones"],
		genres: ["Horror"]
	},{ 
		title: "Rock Dog",
		year: 2017,
		cast: ["Luke Wilson", "Eddie Izzard", "J. K. Simmons", "Lewis Black", "Kenan Thompson", "Mae Whitman", "Jorge Garcia", "Matt Dillon", "Sam Elliott"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "Collide",
		year: 2017,
		cast: ["Nicholas Hoult", "Felicity Jones", "Anthony Hopkins", "Ben Kingsley"],
		genres: ["Action", "Crime", "Drama"]
	},{ 
		title: "The Girl with All the Gifts",
		year: 2017,
		cast: ["Gemma Arterton", "Glenn Close", "Paddy Considine", "Sennia Nanua"],
		genres: ["Horror"]
	},{ 
		title: "I Don't Feel at Home in This World Anymore",
		year: 2017,
		cast: ["Melanie Lynskey", "Elijah Wood", "David Yow", "Jane Levy", "Devon Graye"],
		genres: ["Comedy", "Thriller"]
	},{ 
		title: "Contemporary Color",
		year: 2017,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Logan",
		year: 2017,
		cast: ["Hugh Jackman", "Patrick Stewart", "Boyd Holbrook", "Stephen Merchant", "Richard E. Grant", "Eriq La Salle", "Elise Neal", "Elizabeth Rodriguez", "Dafne Keen"],
		genres: ["Action", "Adventure", "Superhero", "Drama"]
	},{ 
		title: "The Shack",
		year: 2017,
		cast: ["Sam Worthington", "Radha Mitchell", "Octavia Spencer", "Graham Greene"],
		genres: ["Drama"]
	},{ 
		title: "Before I Fall",
		year: 2017,
		cast: ["Zoey Deutch", "Halston Sage", "Logan Miller", "Kian Lawley", "Elena Kampouris", "Cynthy Wu", "Medalion Rahimi", "Diego Boneta", "Jennifer Beals"],
		genres: ["Drama"]
	},{ 
		title: "Table 19",
		year: 2017,
		cast: ["Anna Kendrick", "Amanda Crew", "Stephen Merchant", "Lisa Kudrow", "Wyatt Russell", "Craig Robinson", "Tony Revolori", "June Squibb"],
		genres: ["Comedy"]
	},{ 
		title: "The Last Word",
		year: 2017,
		cast: ["Shirley MacLaine", "Amanda Seyfried"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Catfight",
		year: 2017,
		cast: ["Alicia Silverstone", "Anne Heche", "Sandra Oh", "Dylan Baker", "Amy Hall", "Craig Bierko"],
		genres: ["Comedy", "Action"]
	},{ 
		title: "Donald Cried",
		year: 2017,
		cast: ["Kristopher Avedisian", "Jesse Wakeman", "Louisa Krause", "Ted Arcidi"],
		genres: ["Comedy"]
	},{ 
		title: "Kong: Skull Island",
		year: 2017,
		cast: ["Tom Hiddleston", "Brie Larson", "Samuel L. Jackson", "John Goodman", "John C. Reilly", "Toby Kebbell", "Jing Tian", "Jason Mitchell", "Corey Hawkins", "Thomas Mann", "John Ortiz", "Shea Whigham", "Terry Notary"],
		genres: ["Action", "Adventure", "Fantasy", "Science Fiction"]
	},{ 
		title: "Burning Sands",
		year: 2017,
		cast: ["Trevor Jackson", "Alfre Woodard", "Steve Harris", "Trevante Rhodes", "Serayah"],
		genres: ["Drama"]
	},{ 
		title: "Beauty and the Beast",
		year: 2017,
		cast: ["Emma Watson", "Dan Stevens", "Luke Evans", "Ewan McGregor", "Ian McKellen", "Emma Thompson", "Kevin Kline", "Stanley Tucci", "Josh Gad", "Audra McDonald", "Gugu Mbatha-Raw"],
		genres: ["Fantasy", "Adventure", "Musical", "Drama", "Romance"]
	},{ 
		title: "The Belko Experiment",
		year: 2017,
		cast: ["John Gallagher Jr.", "Tony Goldwyn", "David Del Rio"],
		genres: ["Action", "Horror", "Thriller"]
	},{ 
		title: "Song to Song",
		year: 2017,
		cast: ["Ryan Gosling", "Michael Fassbender", "Rooney Mara", "Natalie Portman", "Christian Bale", "Cate Blanchett", "Benicio del Toro", "Val Kilmer"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Atomica",
		year: 2017,
		cast: ["Dominic Monaghan", "Tom Sizemore", "Sarah Habel"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "All Nighter",
		year: 2017,
		cast: ["J. K. Simmons", "Emile Hirsch", "Analeigh Tipton", "Taran Killam", "Kristen Schaal"],
		genres: ["Comedy"]
	},{ 
		title: "The Devil's Candy",
		year: 2017,
		cast: ["Ethan Embry", "Shiri Appleby", "Kiara Glasco", "Pruitt Taylor Vince", "Craig Nigh", "Marco Perella"],
		genres: ["Horror"]
	},{ 
		title: "Power Rangers",
		year: 2017,
		cast: ["Dacre Montgomery", "Naomi Scott", "RJ Cyler", "Becky G", "Ludi Lin", "Bill Hader", "Bryan Cranston", "Elizabeth Banks"],
		genres: ["Action", "Adventure", "Drama", "Superhero"]
	},{ 
		title: "Life",
		year: 2017,
		cast: ["Rebecca Ferguson", "Jake Gyllenhaal", "Ryan Reynolds", "Hiroyuki Sanada"],
		genres: ["Horror", "Science Fiction"]
	},{ 
		title: "CHiPs",
		year: 2017,
		cast: ["Dax Shepard", "Michael Peña", "Vincent D'Onofrio", "Adam Brody", "Rosa Salazar", "Vida Guerra", "Kristen Bell"],
		genres: ["Comedy", "Action"]
	},{ 
		title: "Wilson",
		year: 2017,
		cast: ["Woody Harrelson", "Laura Dern", "Isabella Amara", "Judy Greer", "Cheryl Hines", "Margo Martindale", "David Warshofsky"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Victor",
		year: 2017,
		cast: ["Patrick Davis", "Nick Eversman", "Cortney Palm", "Rick Gonzalez", "Matt Marquez", "Lisa Vidal", "Josh Pence"],
		genres: ["Drama"]
	},{ 
		title: "Car Dogs",
		year: 2017,
		cast: ["Patrick J. Adams", "George Lopez", "Nia Vardalos", "Octavia Spencer", "Josh Hopkins", "Dash Mihok", "Chris Mulkey", "Alessandra Torresani", "Cory Hardrict", "Stefanie Butler", "Joe Massingill"],
		genres: ["Comedy"]
	},{ 
		title: "Walk of Fame",
		year: 2017,
		cast: ["Scott Eastwood", "Malcolm McDowell", "Chris Kattan", "Laura Ashley Samuels", "Jamie Kennedy", "Cory Hardrict"],
		genres: ["Comedy", "Romance"]
	},{ 
		title: "Ghost in the Shell",
		year: 2017,
		cast: ["Scarlett Johansson", "Takeshi Kitano", "Michael Pitt", "Pilou Asbæk", "Chin Han", "Juliette Binoche", "Rila Fukushima", "Anamaria Marinca", "Kaori Momoi"],
		genres: ["Action", "Adventure", "Crime", "Science Fiction"]
	},{ 
		title: "The Boss Baby",
		year: 2017,
		cast: ["Alec Baldwin", "Steve Buscemi", "Tobey Maguire", "Jimmy Kimmel", "Lisa Kudrow"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "The Zookeeper's Wife",
		year: 2017,
		cast: ["Jessica Chastain", "Johan Heldenbergh", "Daniel Brühl", "Michael McElhatton"],
		genres: ["War", "Drama"]
	},{ 
		title: "The Blackcoat's Daughter",
		year: 2017,
		cast: ["Emma Roberts", "Kiernan Shipka", "Lucy Boynton", "Lauren Holly", "James Remar"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "The Discovery",
		year: 2017,
		cast: ["Jason Segel", "Rooney Mara", "Robert Redford", "Jesse Plemons", "Riley Keough"],
		genres: ["Romance", "Drama", "Science Fiction"]
	},{ 
		title: "Carrie Pilby",
		year: 2017,
		cast: ["Bel Powley", "Vanessa Bayer", "Colin O'Donoghue", "William Moseley", "Jason Ritter", "Gabriel Byrne", "Nathan Lane"],
		genres: ["Comedy", "Romance"]
	},{ 
		title: "The Case for Christ",
		year: 2017,
		cast: ["Mike Vogel", "Erika Christensen", "Robert Forster", "Faye Dunaway", "Grant Goodeve"],
		genres: ["Drama"]
	},{ 
		title: "Smurfs: The Lost Village",
		year: 2017,
		cast: ["Demi Lovato", "Mandy Patinkin", "Jack McBrayer", "Danny Pudi", "Joe Manganiello", "Rainn Wilson", "Ariel Winter"],
		genres: ["Animated", "Comedy", "Fantasy", "Family"]
	},{ 
		title: "Going in Style",
		year: 2017,
		cast: ["Morgan Freeman", "Michael Caine", "Alan Arkin", "Joey King", "Matt Dillon", "Ann-Margret", "Christopher Lloyd", "Siobhan Fallon Hogan", "John Ortiz", "Peter Serafinowicz"],
		genres: ["Comedy", "Crime"]
	},{ 
		title: "Colossal",
		year: 2017,
		cast: ["Anne Hathaway", "Jason Sudeikis", "Dan Stevens", "Austin Stowell", "Tim Blake Nelson"],
		genres: ["Science Fiction", "Comedy"]
	},{ 
		title: "Gifted",
		year: 2017,
		cast: ["Chris Evans", "Mckenna Grace", "Jenny Slate", "Lindsay Duncan", "Octavia Spencer"],
		genres: ["Drama"]
	},{ 
		title: "Aftermath",
		year: 2017,
		cast: ["Arnold Schwarzenegger", "Scoot McNairy", "Maggie Grace", "Martin Donovan"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "The Fate of the Furious",
		year: 2017,
		cast: ["Vin Diesel", "Dwayne Johnson", "Michelle Rodriguez", "Kurt Russell", "Charlize Theron", "Jason Statham", "Helen Mirren", "Tyrese Gibson", "Chris Bridges", "Elsa Pataky", "Nathalie Emmanuel", "Scott Eastwood", "Kristofer Hivju"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Spark",
		year: 2017,
		cast: ["Jace Norman", "Jessica Biel", "Susan Sarandon", "Patrick Stewart", "Hilary Swank"],
		genres: ["Science Fiction", "Animated", "Comedy"]
	},{ 
		title: "The Lost City of Z",
		year: 2017,
		cast: ["Charlie Hunnam", "Robert Pattinson", "Tom Holland", "Sienna Miller"],
		genres: ["Adventure", "Drama"]
	},{ 
		title: "My Entire High School Sinking Into the Sea",
		year: 2017,
		cast: ["Jason Schwartzman", "Reggie Watts", "Lena Dunham", "Maya Rudolph", "Susan Sarandon", "Thomas Jay Ryan", "Alex Karpovsky", "John Cameron Mitchell"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "The Outcasts",
		year: 2017,
		cast: ["Victoria Justice", "Eden Sher", "Ashley Rickards", "Claudia Lee", "Katie Chang", "Peyton List", "Avan Jogia", "Will Peltz", "Harry Katzman"],
		genres: ["Comedy"]
	},{ 
		title: "Born in China",
		year: 2017,
		cast: ["John Krasinski", "Zhou Xun", "(narrator)"],
		genres: ["Documentary"]
	},{ 
		title: "Unforgettable",
		year: 2017,
		cast: ["Katherine Heigl", "Rosario Dawson", "Geoff Stults", "Isabella Rice", "Cheryl Ladd", "Simon Kassianides", "Whitney Cummings", "Robert Wisdom"],
		genres: ["Thriller"]
	},{ 
		title: "The Promise",
		year: 2017,
		cast: ["Oscar Isaac", "Charlotte Le Bon", "Christian Bale", "Daniel Giménez Cacho", "Shohreh Aghdashloo", "Rade Šerbedžija"],
		genres: ["Drama"]
	},{ 
		title: "The Circle",
		year: 2017,
		cast: ["Tom Hanks", "Emma Watson", "John Boyega", "Karen Gillan", "Patton Oswalt", "Bill Paxton"],
		genres: ["Science Fiction", "Drama", "Thriller"]
	},{ 
		title: "How to Be a Latin Lover",
		year: 2017,
		cast: ["Eugenio Derbez", "Salma Hayek", "Raphael Alejandro", "Rob Lowe", "Kristen Bell", "Raquel Welch", "Rob Riggle", "Renée Taylor", "Rob Huebel", "Michaela Watkins", "Linda Lavin"],
		genres: ["Comedy"]
	},{ 
		title: "Sleight",
		year: 2017,
		cast: ["Jacob Latimore", "Seychelle Gabriel", "Dulé Hill", "Storm Reid", "Sasheer Zamata", "Michael Villar"],
		genres: ["Science Fiction", "Drama"]
	},{ 
		title: "Guardians of the Galaxy Vol. 2",
		year: 2017,
		cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Michael Rooker", "Karen Gillan", "Sean Gunn", "Pom Klementieff", "Elizabeth Debicki", "Chris Sullivan", "Sylvester Stallone", "Kurt Russell"],
		genres: ["Superhero", "Comedy", "Adventure", "Science Fiction"]
	},{ 
		title: "The Lovers",
		year: 2017,
		cast: ["Debra Winger", "Tracy Letts", "Aidan Gillen", "Melora Walters", "Tyler Ross", "Jessica Sula"],
		genres: ["Comedy", "Romance"]
	},{ 
		title: "3 Generations",
		year: 2017,
		cast: ["Naomi Watts", "Elle Fanning", "Susan Sarandon", "Tate Donovan", "Linda Emond", "Sam Trammell"],
		genres: ["Drama"]
	},{ 
		title: "King Arthur: Legend of the Sword",
		year: 2017,
		cast: ["Charlie Hunnam", "Aidan Gillen", "Àstrid Bergès-Frisbey", "Eric Bana", "Jude Law", "Djimon Hounsou", "Kingsley Ben-Adir", "Neil Maskell", "Millie Brady", "David Beckham", "Katie McGrath", "Michael McElhatton"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Snatched",
		year: 2017,
		cast: ["Amy Schumer", "Goldie Hawn", "Christopher Meloni", "Ike Barinholtz", "Óscar Jaenada", "Wanda Sykes"],
		genres: ["Comedy"]
	},{ 
		title: "Lowriders",
		year: 2017,
		cast: ["Demián Bichir", "Gabriel Chavarria", "Theo Rossi", "Melissa Benoist", "Tony Revolori", "Eva Longoria", "Cress Williams", "Yvette Monreal"],
		genres: ["Drama"]
	},{ 
		title: "The Wall",
		year: 2017,
		cast: ["Aaron Taylor-Johnson", "John Cena"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Paris Can Wait",
		year: 2017,
		cast: ["Diane Lane", "Alec Baldwin", "Arnaud Viard"],
		genres: ["Comedy", "Romance"]
	},{ 
		title: "Alien: Covenant",
		year: 2017,
		cast: ["Michael Fassbender", "Katherine Waterston", "Demián Bichir", "Billy Crudup", "Danny McBride", "Jussie Smollett", "Amy Seimetz", "Carmen Ejogo", "Callie Hernandez", "Alex England", "James Franco"],
		genres: ["Science Fiction", "Horror"]
	},{ 
		title: "Diary of a Wimpy Kid: The Long Haul",
		year: 2017,
		cast: ["Jason Ian Drucker", "Owen Asztalo", "Charlie Wright", "Alicia Silverstone", "Tom Everett Scott"],
		genres: ["Comedy", "Family"]
	},{ 
		title: "Everything, Everything",
		year: 2017,
		cast: ["Amandla Stenberg", "Nick Robinson", "Anika Noni Rose", "Ana de la Reguera", "Danube Hermosillo"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Wakefield",
		year: 2017,
		cast: ["Bryan Cranston", "Jennifer Garner", "Victoria Bruno", "Pippa Bennett-Warner"],
		genres: ["Drama"]
	},{ 
		title: "Baywatch",
		year: 2017,
		cast: ["Dwayne Johnson", "Zac Efron", "Priyanka Chopra", "Alexandra Daddario", "Kelly Rohrbach", "Yahya Abdul-Mateen II", "Ilfenesh Hadera", "Jon Bass"],
		genres: ["Comedy"]
	},{ 
		title: "Pirates of the Caribbean: Dead Men Tell No Tales",
		year: 2017,
		cast: ["Johnny Depp", "Javier Bardem", "Orlando Bloom", "Brenton Thwaites", "Kaya Scodelario", "Geoffrey Rush", "Kevin McNally", "Stephen Graham", "Martin Klebba", "Paul McCartney"],
		genres: ["Action", "Adventure", "Fantasy", "Comedy"]
	},{ 
		title: "Buena Vista Social Club: Adios",
		year: 2017,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "War Machine",
		year: 2017,
		cast: ["Michael Hastings", "(book)", "Brad Pitt", "Anthony Michael Hall", "Topher Grace", "Anthony Hayes", "John Magaro", "Emory Cohen", "Daniel Betts", "Lakeith Stanfield", "RJ Cyler", "Aymen Hamdouchi", "Alan Ruck", "Meg Tilly", "Will Poulter", "Ben Kingsley", "Tilda Swinton"],
		genres: ["Comedy", "Drama", "War"]
	},{ 
		title: "Wonder Woman",
		year: 2017,
		cast: ["Gal Gadot", "Chris Pine", "Connie Nielsen", "Robin Wright", "Lucy Davis", "Lisa Loven Kongsli", "Danny Huston", "David Thewlis", "Ewen Bremner", "Saïd Taghmaoui", "Elena Anaya"],
		genres: ["Superhero", "Action", "Adventure", "Fantasy", "Drama", "War"]
	},{ 
		title: "Captain Underpants: The First Epic Movie",
		year: 2017,
		cast: ["Ed Helms", "Kevin Hart", "Thomas Middleditch", "Nick Kroll", "Anna Kendrick", "Jordan Peele", "Kristen Schaal"],
		genres: ["Animated", "Action", "Comedy", "Family"]
	},{ 
		title: "Dean",
		year: 2017,
		cast: ["Demetri Martin", "Kevin Kline", "Gillian Jacobs", "Mary Steenburgen", "Reid Scott", "Rory Scovel", "Christine Woods", "Ginger Gonzaga", "Peter Scolari", "Briga Heelan"],
		genres: ["Comedy", "Drama", "Romance"]
	},{ 
		title: "The Mummy",
		year: 2017,
		cast: ["Tom Cruise", "Russell Crowe", "Sofia Boutella", "Annabelle Wallis", "Jake Johnson", "Marwan Kenzari", "Courtney B. Vance"],
		genres: ["Action", "Adventure", "Fantasy", "Horror"]
	},{ 
		title: "It Comes at Night",
		year: 2017,
		cast: ["Joel Edgerton", "Riley Keough", "Christopher Abbott", "Kelvin Harrison Jr.", "Carmen Ejogo"],
		genres: ["Horror", "Mystery"]
	},{ 
		title: "My Cousin Rachel",
		year: 2017,
		cast: ["Rachel Weisz", "Sam Claflin", "Iain Glen", "Holliday Grainger"],
		genres: ["Drama"]
	},{ 
		title: "Megan Leavey",
		year: 2017,
		cast: ["Kate Mara", "Edie Falco", "Common", "Ramón Rodríguez", "Tom Felton"],
		genres: ["Biography", "War"]
	},{ 
		title: "Beatriz at Dinner",
		year: 2017,
		cast: ["Salma Hayek", "Chloë Sevigny", "Connie Britton", "John Lithgow", "Jay Duplass", "David Warshofsky", "Amy Landecker", "John Early"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Cars 3",
		year: 2017,
		cast: ["Owen Wilson", "Larry the Cable Guy", "Bonnie Hunt", "Cheech Marin", "Michael Wallis", "Cristela Alonzo", "Armie Hammer", "Paul Dooley"],
		genres: ["Animated", "Sports", "Comedy", "Drama"]
	},{ 
		title: "Rough Night",
		year: 2017,
		cast: ["Scarlett Johansson", "Zoë Kravitz", "Kate McKinnon", "Jillian Bell", "Ilana Glazer", "Paul W. Downs", "Demi Moore", "Ty Burrell", "Colton Haynes"],
		genres: ["Comedy"]
	},{ 
		title: "All Eyez on Me",
		year: 2017,
		cast: ["Demetrius Shipp Jr.", "Kat Graham", "Lauren Cohan", "Hill Harper", "Danai Gurira"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "47 Meters Down",
		year: 2017,
		cast: ["Mandy Moore", "Claire Holt", "Matthew Modine"],
		genres: ["Horror"]
	},{ 
		title: "The Book of Henry",
		year: 2017,
		cast: ["Naomi Watts", "Jacob Tremblay", "Jaeden Lieberher", "Dean Norris", "Maddie Ziegler", "Sarah Silverman", "Lee Pace", "Bobby Moynihan", "Tonya Pinkins"],
		genres: ["Drama"]
	},{ 
		title: "Transformers: The Last Knight",
		year: 2017,
		cast: ["Mark Wahlberg", "Anthony Hopkins", "Isabela Moner", "Josh Duhamel", "John Turturro", "Stanley Tucci", "Mitch Pileggi", "Jerrod Carmichael", "Laura Haddock", "Santiago Cabrera", "Peter Cullen", "John Goodman", "John DiMaggio"],
		genres: ["Action", "Adventure", "Science Fiction"]
	},{ 
		title: "The Beguiled",
		year: 2017,
		cast: ["Colin Farrell", "Nicole Kidman", "Kirsten Dunst", "Elle Fanning", "Angourie Rice", "Oona Laurence"],
		genres: ["Drama", "Western"]
	},{ 
		title: "The Big Sick",
		year: 2017,
		cast: ["Kumail Nanjiani", "Zoe Kazan", "Holly Hunter", "Ray Romano"],
		genres: ["Romance", "Comedy", "Drama"]
	},{ 
		title: "The Bad Batch",
		year: 2017,
		cast: ["Suki Waterhouse", "Jason Momoa", "Giovanni Ribisi", "Yolonda Ross", "Diego Luna", "Keanu Reeves", "Jim Carrey"],
		genres: ["Romance", "Horror", "Thriller"]
	},{ 
		title: "Baby Driver",
		year: 2017,
		cast: ["Ansel Elgort", "Lily James", "Jamie Foxx", "Jon Hamm", "Kevin Spacey", "Jon Bernthal", "Eiza González"],
		genres: ["Comedy", "Action", "Crime"]
	},{ 
		title: "Okja",
		year: 2017,
		cast: ["Tilda Swinton", "Paul Dano", "Ahn Seo-hyun", "Byun Hee-bong", "Steven Yeun", "Lily Collins", "Yoon Je-moon", "Shirley Henderson", "Daniel Henshall", "Devon Bostick", "Choi Woo-shik", "Giancarlo Esposito", "Jake Gyllenhaal"],
		genres: ["Action", "Adventure", "Drama", "Fantasy"]
	},{ 
		title: "Despicable Me 3",
		year: 2017,
		cast: ["Steve Carell", "Kristen Wiig", "Trey Parker", "Miranda Cosgrove", "Dana Gaier", "Nev Scharrel", "Steve Coogan", "Jenny Slate", "Julie Andrews"],
		genres: ["Animated", "Comedy", "Adventure", "Action"]
	},{ 
		title: "The House",
		year: 2017,
		cast: ["Will Ferrell", "Amy Poehler", "Ryan Simpkins", "Jason Mantzoukas", "Nick Kroll", "Cedric Yarbrough", "Jeremy Renner"],
		genres: ["Comedy"]
	},{ 
		title: "The Little Hours",
		year: 2017,
		cast: ["Alison Brie", "Dave Franco", "Kate Micucci", "Aubrey Plaza", "John C. Reilly", "Molly Shannon", "Fred Armisen", "Jemima Kirke", "Lauren Weedman", "Nick Offerman", "Paul Reiser", "Adam Pally", "Paul Weitz", "Jon Gabrus"],
		genres: ["Comedy"]
	},{ 
		title: "Inconceivable",
		year: 2017,
		cast: ["Nicolas Cage", "Faye Dunaway", "Gina Gershon", "Natalie Eva Marie"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "2:22",
		year: 2017,
		cast: ["Michiel Huisman", "Teresa Palmer", "Sam Reid", "Simone Kessell", "Maeve Dermody", "Kerry Armstrong", "John Waters"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "A Ghost Story",
		year: 2017,
		cast: ["Casey Affleck", "Rooney Mara"],
		genres: ["Drama", "Fantasy", "Horror", "Romance"]
	},{ 
		title: "Spider-Man: Homecoming",
		year: 2017,
		cast: ["Tom Holland", "Michael Keaton", "Zendaya", "Donald Glover", "Jacob Batalon", "Laura Harrier", "Tony Revolori", "Tyne Daly", "Bokeem Woodbine", "Marisa Tomei", "Robert Downey Jr."],
		genres: ["Action", "Adventure", "Superhero", "Comedy", "Science Fiction"]
	},{ 
		title: "War for the Planet of the Apes",
		year: 2017,
		cast: ["Andy Serkis", "Gabriel Chavarria", "Woody Harrelson", "Judy Greer", "Steve Zahn"],
		genres: ["Science Fiction", "Adventure", "Drama", "Action"]
	},{ 
		title: "Wish Upon",
		year: 2017,
		cast: ["Joey King", "Ryan Phillippe", "Ki Hong Lee", "Mitchell Slaggert", "Shannon Purser", "Sydney Park", "Kevin Hanchard", "Sherilyn Fenn"],
		genres: ["Thriller", "Horror"]
	},{ 
		title: "Dunkirk",
		year: 2017,
		cast: ["Fionn Whitehead", "Tom Hardy", "Cillian Murphy", "Mark Rylance", "Kenneth Branagh", "Harry Styles", "James D'Arcy", "Jack Lowden", "Kevin Guthrie"],
		genres: ["Action", "War", "Drama", "Historical", "Adventure", "Thriller"]
	},{ 
		title: "Valerian and the City of a Thousand Planets",
		year: 2017,
		cast: ["Dane DeHaan", "Cara Delevingne", "Clive Owen", "Rihanna", "Ethan Hawke", "Herbie Hancock", "Kris Wu", "Rutger Hauer"],
		genres: ["Science Fiction", "Action", "Adventure"]
	},{ 
		title: "Girls Trip",
		year: 2017,
		cast: ["Regina Hall", "Queen Latifah", "Jada Pinkett Smith", "Tiffany Haddish", "Larenz Tate", "Mike Colter", "Kofi Siriboe"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "First Kill",
		year: 2017,
		cast: ["Hayden Christensen", "Bruce Willis", "Gethin Anthony", "Megan Leonard", "Tyler Jon Olson", "Shea Buckner", "Ty Shelton"],
		genres: ["Thriller", "Action"]
	},{ 
		title: "Atomic Blonde",
		year: 2017,
		cast: ["Charlize Theron", "James McAvoy", "John Goodman", "Sofia Boutella", "Toby Jones", "Eddie Marsan"],
		genres: ["Spy", "Action", "Thriller"]
	},{ 
		title: "The Emoji Movie",
		year: 2017,
		cast: ["T. J. Miller", "Anna Faris", "James Corden", "Jennifer Coolidge", "Rob Riggle", "Steven Wright", "Patrick Stewart"],
		genres: ["Animated", "Comedy", "Adventure"]
	},{ 
		title: "An Inconvenient Sequel: Truth to Power",
		year: 2017,
		cast: ["Al Gore"],
		genres: ["Documentary"]
	},{ 
		title: "Detroit",
		year: 2017,
		cast: ["John Boyega", "Will Poulter", "Algee Smith", "Jacob Latimore", "Jason Mitchell", "Hannah Murray", "Kaitlyn Dever", "Jack Reynor", "Ben O'Toole", "John Krasinski", "Anthony Mackie"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Brigsby Bear",
		year: 2017,
		cast: ["Kyle Mooney", "Mark Hamill", "Claire Danes", "Greg Kinnear", "Andy Samberg", "Matt Walsh", "Michaela Watkins", "Beck Bennett"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Menashe",
		year: 2017,
		cast: ["Menashe Lustig", "Ruben Nidorski", "Yoel Weisshaus", "Meyer Schwartz"],
		genres: ["Drama"]
	},{ 
		title: "The Dark Tower",
		year: 2017,
		cast: ["Idris Elba", "Matthew McConaughey", "Tom Taylor", "Abbey Lee Kershaw", "Katheryn Winnick", "Jackie Earle Haley", "Claudia Kim"],
		genres: ["Action", "Fantasy", "Adventure", "Horror", "Science Fiction", "Western"]
	},{ 
		title: "Kidnap",
		year: 2017,
		cast: ["Halle Berry", "Sage Correa", "Lew Temple", "Chris McGinn"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Step",
		year: 2017,
		cast: ["Blessin Giraldo", "Cori Grainger", "Tayla Solomon", "Gari McIntyre", "Paula Dofat"],
		genres: ["Documentary"]
	},{ 
		title: "Wind River",
		year: 2017,
		cast: ["Jeremy Renner", "Elizabeth Olsen", "Jon Bernthal", "Kelsey Chow"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Armed Response",
		year: 2017,
		cast: ["Wesley Snipes", "Anne Heche", "Dave Annable", "Seth Rollins", "Gene Simmons", "Mo Gallini"],
		genres: ["Thriller", "Science Fiction", "Action"]
	},{ 
		title: "Annabelle: Creation",
		year: 2017,
		cast: ["Miranda Otto", "Anthony LaPaglia", "Stephanie Sigman", "Talitha Bateman", "Lulu Wilson", "Tayler Buck", "Alicia Vela-Bailey"],
		genres: ["Horror"]
	},{ 
		title: "The Glass Castle",
		year: 2017,
		cast: ["Brie Larson", "Naomi Watts", "Woody Harrelson", "Sarah Snook"],
		genres: ["Drama"]
	},{ 
		title: "The Nut Job 2: Nutty by Nature",
		year: 2017,
		cast: ["Will Arnett", "Katherine Heigl", "Maya Rudolph", "Sebastian Maniscalco", "Kari Wahlgren", "Bobby Moynihan", "Isabela Moner", "Bobby Cannavale", "Gabriel Iglesias", "Jeff Dunham", "Peter Stormare"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "Good Time",
		year: 2017,
		cast: ["Robert Pattinson", "Jennifer Jason Leigh", "Ben Safdie", "Barkhad Abdi", "Buddy Duress", "Taliah Webster"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Ingrid Goes West",
		year: 2017,
		cast: ["Aubrey Plaza", "Elizabeth Olsen", "O'Shea Jackson Jr.", "Wyatt Russell", "Billy Magnussen"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Only Living Boy in New York",
		year: 2017,
		cast: ["Callum Turner", "Kate Beckinsale", "Pierce Brosnan", "Cynthia Nixon", "Jeff Bridges", "Kiersey Clemons", "Debi Mazar", "Bill Camp", "Tate Donovan"],
		genres: ["Drama"]
	},{ 
		title: "The Hitman's Bodyguard",
		year: 2017,
		cast: ["Ryan Reynolds", "Samuel L. Jackson", "Gary Oldman", "Élodie Yung", "Salma Hayek"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Logan Lucky",
		year: 2017,
		cast: ["Channing Tatum", "Adam Driver", "Riley Keough", "Daniel Craig", "Hilary Swank", "Seth MacFarlane", "Katie Holmes", "Katherine Waterston", "Sebastian Stan"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Patti Cake$",
		year: 2017,
		cast: ["Danielle Macdonald", "McCaul Lombardi"],
		genres: ["Drama"]
	},{ 
		title: "All Saints",
		year: 2017,
		cast: ["John Corbett", "Cara Buono"],
		genres: ["Drama"]
	},{ 
		title: "Served Like A Girl",
		year: 2017,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Beach Rats",
		year: 2017,
		cast: ["Harris Dickinson", "Madeline Weinstein", "Kate Hodge"],
		genres: ["Drama"]
	},{ 
		title: "Tulip Fever",
		year: 2017,
		cast: ["Alicia Vikander", "Dane DeHaan", "Christoph Waltz", "Holliday Grainger", "Jack O'Connell", "Zach Galifianakis", "Judi Dench", "Matthew Morrison", "Tom Hollander", "Cara Delevingne"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Unlocked",
		year: 2017,
		cast: ["Noomi Rapace", "Orlando Bloom", "Toni Collette", "John Malkovich", "Michael Douglas", "Jessica Boone"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "It",
		year: 2017,
		cast: ["Bill Skarsgård", "Jaeden Lieberher", "Finn Wolfhard", "Jack Dylan Grazer", "Sophia Lillis", "Wyatt Oleff", "Chosen Jacobs", "Jeremy Ray Taylor"],
		genres: ["Horror", "Fantasy", "Drama"]
	},{ 
		title: "Home Again",
		year: 2017,
		cast: ["Reese Witherspoon", "Candice Bergen", "Michael Sheen", "Lake Bell", "Nat Wolff", "Reid Scott", "Pico Alexander"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "9/11",
		year: 2017,
		cast: ["Charlie Sheen", "Whoopi Goldberg"],
		genres: ["Drama"]
	},{ 
		title: "The Good Catholic",
		year: 2017,
		cast: ["Zachary Spicer", "Wrenn Schmidt", "John C. McGinley", "Danny Glover"],
		genres: ["Comedy"]
	},{ 
		title: "Gun Shy",
		year: 2017,
		cast: ["Antonio Banderas", "Olga Kurylenko"],
		genres: ["Action"]
	},{ 
		title: "American Assassin",
		year: 2017,
		cast: ["Dylan O'Brien", "Michael Keaton", "Sanaa Lathan", "Shiva Negar", "Taylor Kitsch"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Mother!",
		year: 2017,
		cast: ["Jennifer Lawrence", "Javier Bardem", "Michelle Pfeiffer", "Domhnall Gleeson", "Ed Harris", "Kristen Wiig"],
		genres: ["Drama", "Horror"]
	},{ 
		title: "Brad's Status",
		year: 2017,
		cast: ["Ben Stiller", "Michael Sheen", "Luke Wilson", "Jemaine Clement", "Jenna Fischer"],
		genres: ["Comedy"]
	},{ 
		title: "Kingsman: The Golden Circle",
		year: 2017,
		cast: ["Colin Firth", "Julianne Moore", "Taron Egerton", "Mark Strong", "Halle Berry", "Elton John", "Channing Tatum", "Jeff Bridges"],
		genres: ["Action", "Adventure", "Comedy"]
	},{ 
		title: "The Lego Ninjago Movie",
		year: 2017,
		cast: ["Jackie Chan", "Justin Theroux", "Dave Franco", "Olivia Munn", "Michael Peña", "Abbi Jacobson", "Kumail Nanjiani", "Zach Woods", "Fred Armisen"],
		genres: ["Animated", "Action", "Comedy", "Martial Arts"]
	},{ 
		title: "Stronger",
		year: 2017,
		cast: ["Jake Gyllenhaal", "Tatiana Maslany", "Miranda Richardson", "Clancy Brown"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Battle of the Sexes",
		year: 2017,
		cast: ["Emma Stone", "Steve Carell", "Andrea Riseborough", "Elisabeth Shue", "Austin Stowell", "Sarah Silverman", "Alan Cumming"],
		genres: ["Biography", "Sports", "Comedy", "Drama"]
	},{ 
		title: "Woodshock",
		year: 2017,
		cast: ["Kirsten Dunst", "Joe Cole", "Pilou Asbæk", "Lorelei Linklater", "Jack Kilmer"],
		genres: ["Drama"]
	},{ 
		title: "Victoria & Abdul",
		year: 2017,
		cast: ["Judi Dench", "Ali Fazal", "Eddie Izzard", "Tim Pigott-Smith", "Adeel Akhtar"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Jeepers Creepers 3",
		year: 2017,
		cast: ["Jonathan Breck", "Meg Foster", "Brandon James", "Gabrielle Haugh", "Jordan Salloum", "Ryan Moore", "Brandon Smith", "Gina Philips", "Christine Ko", "Stan Shaw"],
		genres: ["Horror"]
	},{ 
		title: "American Made",
		year: 2017,
		cast: ["Tom Cruise", "Domhnall Gleeson", "Sarah Wright", "Jayma Mays", "Jesse Plemons"],
		genres: ["Biography", "Action", "Comedy", "Crime", "Drama", "Historical", "Thriller"]
	},{ 
		title: "Flatliners",
		year: 2017,
		cast: ["Ellen Page", "Diego Luna", "Nina Dobrev", "James Norton", "Kiersey Clemons", "Kiefer Sutherland"],
		genres: ["Horror", "Science Fiction", "Drama"]
	},{ 
		title: "Mark Felt: The Man Who Brought Down the White House",
		year: 2017,
		cast: ["Liam Neeson", "Diane Lane", "Marton Csokas", "Ike Barinholtz", "Tony Goldwyn", "Bruce Greenwood", "Michael C. Hall", "Brian d'Arcy James", "Josh Lucas", "Eddie Marsan", "Wendi McLendon-Covey", "Maika Monroe"],
		genres: ["Biography", "Drama", "Thriller"]
	},{ 
		title: "Blade Runner 2049",
		year: 2017,
		cast: ["Harrison Ford", "Ryan Gosling", "Ana de Armas", "Mackenzie Davis", "Sylvia Hoeks", "Lennie James", "Carla Juri", "Robin Wright", "Dave Bautista", "Jared Leto"],
		genres: ["Noir", "Science Fiction", "Thriller", "Mystery"]
	},{ 
		title: "The Mountain Between Us",
		year: 2017,
		cast: ["Idris Elba", "Kate Winslet", "Dermot Mulroney", "Waleed Zuaiter"],
		genres: ["Romance", "Disaster"]
	},{ 
		title: "My Little Pony: The Movie",
		year: 2017,
		cast: ["Tara Strong", "Ashleigh Ball", "Andrea Libman", "Tabitha St. Germain", "Cathy Weseluck", "Kristin Chenoweth", "Emily Blunt", "Michael Peña", "Uzo Aduba", "Liev Schreiber", "Taye Diggs", "Sia", "Zoe Saldana"],
		genres: ["Animated", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
	},{ 
		title: "The Florida Project",
		year: 2017,
		cast: ["Willem Dafoe", "Bria Vinaite", "Brooklynn Prince", "Valeria Cotto", "Caleb Landry Jones"],
		genres: ["Drama"]
	},{ 
		title: "Brawl in Cell Block 99",
		year: 2017,
		cast: ["Vince Vaughn", "Jennifer Carpenter", "Don Johnson", "Udo Kier"],
		genres: ["Drama", "Action", "Thriller"]
	},{ 
		title: "Happy Death Day",
		year: 2017,
		cast: ["Jessica Rothe", "Israel Broussard", "Ruby Modine"],
		genres: ["Horror", "Mystery", "Thriller"]
	},{ 
		title: "Marshall",
		year: 2017,
		cast: ["Chadwick Boseman", "Josh Gad", "Kate Hudson", "Dan Stevens", "James Cromwell", "Sterling K. Brown"],
		genres: ["Biography", "Drama", "Thriller"]
	},{ 
		title: "Breathe",
		year: 2017,
		cast: ["Andrew Garfield", "Claire Foy", "Tom Hollander", "Hugh Bonneville", "Dean-Charles Chapman", "Miranda Raison", "Stephen Mangan"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Goodbye Christopher Robin",
		year: 2017,
		cast: ["Domhnall Gleeson", "Margot Robbie", "Kelly Macdonald"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Professor Marston and the Wonder Women",
		year: 2017,
		cast: ["Luke Evans", "Rebecca Hall", "Bella Heathcote", "Connie Britton", "Oliver Platt"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Blood Money",
		year: 2017,
		cast: ["John Cusack", "Ellar Coltrane", "Willa Fitzgerald", "Jacob Artist"],
		genres: ["Drama", "Crime"]
	},{ 
		title: "Geostorm",
		year: 2017,
		cast: ["Gerard Butler", "Abbie Cornish", "Alexandra Lara", "Jim Sturgess", "Amr Waked", "Ed Harris", "Andy García"],
		genres: ["Action", "Science Fiction", "Thriller"]
	},{ 
		title: "Only the Brave",
		year: 2017,
		cast: ["Ben Hardy", "Jennifer Connelly", "Taylor Kitsch", "Miles Teller", "James Badge Dale", "Josh Brolin", "Jeff Bridges"],
		genres: ["Action", "Biography", "Drama"]
	},{ 
		title: "Boo 2! A Madea Halloween",
		year: 2017,
		cast: ["Tyler Perry", "Cassi Davis", "Patrice Lovely", "Yousef Erakat", "Diamond White", "Lexy Panterra", "Andre Hall", "Brock O'Hurn", "Tito Ortiz"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "Same Kind of Different as Me",
		year: 2017,
		cast: ["Renée Zellweger", "Jon Voight", "Djimon Hounsou", "Olivia Holt", "Greg Kinnear", "Stephanie Leigh Schlund"],
		genres: ["Drama"]
	},{ 
		title: "Leatherface",
		year: 2017,
		cast: ["Stephen Dorff", "Vanessa Grasse", "Sam Strike", "Lili Taylor", "James Bloor", "Jessica Madsen", "Sam Coleman", "Finn Jones"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Wonderstruck",
		year: 2017,
		cast: ["Oakes Fegley", "Julianne Moore", "Millicent Simmonds", "Michelle Williams", "Jaden Michael", "Tom Noonan", "James Urbaniak", "Amy Hargreaves"],
		genres: ["Drama"]
	},{ 
		title: "The Killing of a Sacred Deer",
		year: 2017,
		cast: ["Colin Farrell", "Nicole Kidman", "Barry Keoghan", "Raffey Cassidy", "Sunny Suljic", "Alicia Silverstone", "Bill Camp"],
		genres: ["Comedy", "Drama", "Horror", "Mystery", "Thriller"]
	},{ 
		title: "Thank You for Your Service",
		year: 2017,
		cast: ["Miles Teller", "Haley Bennett", "Beulah Koale", "Amy Schumer", "Scott Haze"],
		genres: ["Biography", "War", "Drama"]
	},{ 
		title: "Suburbicon",
		year: 2017,
		cast: ["Matt Damon", "Julianne Moore", "Oscar Isaac"],
		genres: ["Crime", "Comedy", "Drama", "Mystery", "Thriller"]
	},{ 
		title: "Jigsaw",
		year: 2017,
		cast: ["Tobin Bell", "Mandela Van Peebles", "Laura Vandervoort", "Brittany Allen", "Callum Keith Rennie", "Matt Passmore"],
		genres: ["Crime", "Horror", "Mystery", "Thriller"]
	},{ 
		title: "Novitiate",
		year: 2017,
		cast: ["Margaret Qualley", "Melissa Leo", "Morgan Saylor", "Dianna Agron", "Julianne Nicholson", "Liana Liberato", "Denis O'Hare", "Maddie Hasson"],
		genres: ["Drama"]
	},{ 
		title: "All I See Is You",
		year: 2017,
		cast: ["Blake Lively", "Jason Clarke", "Yvonne Strahovski", "Danny Huston", "Wes Chatham"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Amityville: The Awakening",
		year: 2017,
		cast: ["Bella Thorne", "Jennifer Jason Leigh", "Cameron Monaghan", "Mckenna Grace", "Jennifer Morrison", "Kurtwood Smith"],
		genres: ["Thriller", "Horror"]
	},{ 
		title: "Thor: Ragnarok",
		year: 2017,
		cast: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett", "Idris Elba", "Jeff Goldblum", "Tessa Thompson", "Karl Urban", "Mark Ruffalo", "Anthony Hopkins"],
		genres: ["Superhero", "Action", "Adventure", "Fantasy", "Science Fiction", "Comedy"]
	},{ 
		title: "A Bad Moms Christmas",
		year: 2017,
		cast: ["Mila Kunis", "Kristen Bell", "Kathryn Hahn", "Jay Hernandez", "Susan Sarandon", "Christine Baranski"],
		genres: ["Comedy"]
	},{ 
		title: "Last Flag Flying",
		year: 2017,
		cast: ["Steve Carell", "Bryan Cranston", "Laurence Fishburne", "Yul Vazquez"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Lady Bird",
		year: 2017,
		cast: ["Saoirse Ronan", "Laurie Metcalf", "Tracy Letts", "Lucas Hedges", "Timothée Chalamet", "Beanie Feldstein", "Stephen McKinley Henderson", "Lois Smith"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Murder on the Orient Express",
		year: 2017,
		cast: ["Kenneth Branagh", "Penélope Cruz", "Willem Dafoe", "Judi Dench", "Johnny Depp", "Josh Gad", "Derek Jacobi", "Leslie Odom Jr.", "Michelle Pfeiffer", "Daisy Ridley", "Lucy Boynton", "Sergei Polunin"],
		genres: ["Mystery", "Crime", "Drama"]
	},{ 
		title: "Daddy's Home 2",
		year: 2017,
		cast: ["Will Ferrell", "Mark Wahlberg", "Linda Cardellini", "John Cena", "Mel Gibson", "John Lithgow"],
		genres: ["Comedy"]
	},{ 
		title: "LBJ",
		year: 2017,
		cast: ["Woody Harrelson", "Richard Jenkins", "Bill Pullman", "Kim Allen", "Michael Stahl-David", "Jennifer Jason Leigh", "Jeffrey Donovan", "Doug McKeon", "Michael Mosley"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Three Billboards Outside Ebbing, Missouri",
		year: 2017,
		cast: ["Frances McDormand", "Woody Harrelson", "Sam Rockwell", "John Hawkes", "Peter Dinklage"],
		genres: ["Comedy", "Crime", "Drama", "Thriller"]
	},{ 
		title: "Mayhem",
		year: 2017,
		cast: ["Steven Yeun", "Samara Weaving", "Steven Brand", "Caroline Chikezie", "Kerry Fox", "Dallas Roberts"],
		genres: ["Action", "Horror", "Comedy"]
	},{ 
		title: "Justice League",
		year: 2017,
		cast: ["Ben Affleck", "Henry Cavill", "Gal Gadot", "Jason Momoa", "Ezra Miller", "Ray Fisher", "Amy Adams", "Jesse Eisenberg", "Amber Heard", "Jeremy Irons", "J. K. Simmons", "Willem Dafoe", "Julian Lewis Jones", "Ciarán Hinds"],
		genres: ["Superhero", "Action", "Adventure", "Fantasy", "Science Fiction"]
	},{ 
		title: "The Star",
		year: 2017,
		cast: ["Steven Yeun", "Gina Rodriguez", "Zachary Levi", "Keegan-Michael Key", "Kelly Clarkson", "Patricia Heaton", "Kristin Chenoweth", "Tracy Morgan", "Tyler Perry", "Oprah Winfrey"],
		genres: ["Animated", "Adventure", "Comedy"]
	},{ 
		title: "Wonder",
		year: 2017,
		cast: ["Julia Roberts", "Jacob Tremblay", "Owen Wilson", "Mandy Patinkin"],
		genres: ["Drama"]
	},{ 
		title: "Cook Off!",
		year: 2017,
		cast: ["Cathryn Michon", "Melissa McCarthy", "Wendi McLendon-Covey", "Diedrich Bader", "Gary Anthony Williams", "Ben Falcone", "Niecy Nash", "Louie Anderson", "Stephen Root"],
		genres: ["Satire", "Comedy"]
	},{ 
		title: "Mr. Roosevelt",
		year: 2017,
		cast: ["Noël Wells", "Nick Thune", "Britt Lower", "Danielle Pineda", "Andre Hyland", "Doug Benson", "Armen Weitzman", "Sergio Cilli"],
		genres: ["Comedy"]
	},{ 
		title: "Roman J. Israel, Esq.",
		year: 2017,
		cast: ["Denzel Washington", "Colin Farrell", "Carmen Ejogo", "Shelley Hennig"],
		genres: ["Drama"]
	},{ 
		title: "Coco",
		year: 2017,
		cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt", "Renée Victor", "Ana Ofelia Murguia", "Edward James Olmos"],
		genres: ["Animated", "Musical", "Fantasy", "Mystery"]
	},{ 
		title: "Darkest Hour",
		year: 2017,
		cast: ["Gary Oldman", "Ben Mendelsohn", "Kristin Scott Thomas", "Lily James", "Stephen Dillane", "Ronald Pickup"],
		genres: ["Biography", "War", "Drama"]
	},{ 
		title: "The Man Who Invented Christmas",
		year: 2017,
		cast: ["Dan Stevens", "Christopher Plummer", "Jonathan Pryce"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Call Me by Your Name",
		year: 2017,
		cast: ["Timothée Chalamet", "Armie Hammer", "Michael Stuhlbarg", "Amira Casar", "Esther Garrel", "Victoire Du Bois"],
		genres: ["Drama"]
	},{ 
		title: "The Disaster Artist",
		year: 2017,
		cast: ["James Franco", "Dave Franco", "Seth Rogen", "Alison Brie", "Ari Graynor", "Josh Hutcherson", "Jacki Weaver"],
		genres: ["Biography", "Comedy", "Drama"]
	},{ 
		title: "The Shape of Water",
		year: 2017,
		cast: ["Sally Hawkins", "Michael Shannon", "Richard Jenkins", "Doug Jones", "Lauren Lee Smith", "Michael Stuhlbarg", "Octavia Spencer"],
		genres: ["Fantasy", "Horror", "Romance", "Science Fiction", "Thriller"]
	},{ 
		title: "Wonder Wheel",
		year: 2017,
		cast: ["Kate Winslet", "Justin Timberlake", "Juno Temple", "Jim Belushi", "Tony Sirico"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "I, Tonya",
		year: 2017,
		cast: ["Margot Robbie", "Sebastian Stan", "Allison Janney", "Julianne Nicholson", "Mckenna Grace"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Just Getting Started",
		year: 2017,
		cast: ["Morgan Freeman", "Tommy Lee Jones", "Rene Russo"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Star Wars: The Last Jedi",
		year: 2017,
		cast: ["Mark Hamill", "Carrie Fisher", "Adam Driver", "Daisy Ridley", "John Boyega", "Oscar Isaac", "Lupita Nyong'o", "Domhnall Gleeson", "Benicio del Toro", "Laura Dern", "Anthony Daniels", "Gwendoline Christie", "Andy Serkis"],
		genres: ["Action", "Adventure", "Fantasy", "Science Fiction"]
	},{ 
		title: "Ferdinand",
		year: 2017,
		cast: ["John Cena", "David Tennant", "Anthony Anderson", "Gabriel Iglesias", "Kate McKinnon", "Boris Kodjoe", "Miguel Ángel Silvestre", "Raúl Esparza", "Jerrod Carmichael", "Gina Rodriguez", "Daveed Diggs", "Bobby Cannavale", "Sally Phillips", "Flula Borg", "Karla Martínez"],
		genres: ["Animated", "Adventure", "Comedy", "Family"]
	},{ 
		title: "Beyond Skyline",
		year: 2017,
		cast: ["Frank Grillo", "Bojana Novakovic", "Callan Mulvey", "Iko Uwais", "Yayan Ruhian", "Betty Gabriel", "Antonio Fargas"],
		genres: ["Science Fiction", "Action", "Thriller"]
	},{ 
		title: "Jumanji: Welcome to the Jungle",
		year: 2017,
		cast: ["Dwayne Johnson", "Kevin Hart", "Jack Black", "Nick Jonas", "Karen Gillan"],
		genres: ["Action", "Fantasy", "Adventure", "Comedy"]
	},{ 
		title: "The Greatest Showman",
		year: 2017,
		cast: ["Hugh Jackman", "Zac Efron", "Rebecca Ferguson", "Michelle Williams", "Yahya Abdul-Mateen II", "Zendaya"],
		genres: ["Biography", "Musical", "Drama"]
	},{ 
		title: "Pitch Perfect 3",
		year: 2017,
		cast: ["Anna Kendrick", "Anna Camp", "Rebel Wilson", "Brittany Snow", "Hailee Steinfeld", "Alexis Knapp", "Ester Dean", "Hana Mae Lee", "Chrissie Fit", "Kelley Jakle", "Shelley Regner"],
		genres: ["Musical", "Comedy"]
	},{ 
		title: "Downsizing",
		year: 2017,
		cast: ["Matt Damon", "Christoph Waltz", "Hong Chau", "Kristen Wiig"],
		genres: ["Science Fiction", "Comedy", "Drama"]
	},{ 
		title: "Father Figures",
		year: 2017,
		cast: ["Owen Wilson", "Ed Helms", "J. K. Simmons", "Terry Bradshaw", "Ving Rhames", "Katt Williams", "Retta", "June Squibb", "Glenn Close"],
		genres: ["Comedy"]
	},{ 
		title: "The Post",
		year: 2017,
		cast: ["Tom Hanks", "Meryl Streep", "Bruce Greenwood", "Jesse Plemons", "Bob Odenkirk", "Sarah Paulson", "Alison Brie", "David Cross", "Carrie Coon"],
		genres: ["Biography", "Drama", "Historical", "Thriller"]
	},{ 
		title: "Bright",
		year: 2017,
		cast: ["Will Smith", "Joel Edgerton", "Noomi Rapace", "Lucy Fry", "Edgar Ramirez"],
		genres: ["Action", "Fantasy", "Science Fiction"]
	},{ 
		title: "Crooked House",
		year: 2017,
		cast: ["Max Irons", "Glenn Close", "Gillian Anderson", "Christina Hendricks", "Terence Stamp"],
		genres: ["Crime", "Drama", "Mystery"]
	},{ 
		title: "Hostiles",
		year: 2017,
		cast: ["Christian Bale", "Rosamund Pike", "Wes Studi", "Q'orianka Kilcher", "Ben Foster", "Adam Beach", "Rory Cochrane", "Jesse Plemons", "Timothée Chalamet"],
		genres: ["Western"]
	},{ 
		title: "All the Money in the World",
		year: 2017,
		cast: ["Michelle Williams", "Mark Wahlberg", "Christopher Plummer", "Timothy Hutton", "Charlie Plummer"],
		genres: ["Biography", "Crime", "Drama"]
	},{ 
		title: "Molly's Game",
		year: 2017,
		cast: ["Jessica Chastain", "Idris Elba", "Kevin Costner", "Brian d'Arcy James", "Michael Cera", "Chris O'Dowd", "Bill Camp", "Jeremy Strong"],
		genres: ["Biography", "Crime", "Drama"]
	},{ 
		title: "Phantom Thread",
		year: 2017,
		cast: ["Daniel Day-Lewis", "Lesley Manville", "Richard Graham", "Vicky Krieps"],
		genres: ["Drama"]
	},{ 
		title: "Insidious: The Last Key",
		year: 2018,
		cast: ["Lin Shaye", "Angus Sampson", "Leigh Whannell", "Spencer Locke", "Caitlin Gerard", "Kirk Acevedo", "Bruce Davison"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "The Strange Ones",
		year: 2018,
		cast: ["Alex Pettyfer", "James Freedson-Jackson", "Emily Althaus", "Gene Jones", "Owen Campbell", "Tobias Campbell"],
		genres: ["Drama"]
	},{ 
		title: "Sweet Country",
		year: 2018,
		cast: ["Bryan Brown", "Sam Neill"],
		genres: ["Drama"]
	},{ 
		title: "The Commuter",
		year: 2018,
		cast: ["Liam Neeson", "Vera Farmiga", "Patrick Wilson", "Jonathan Banks", "Elizabeth McGovern", "Sam Neill"],
		genres: ["Action", "Crime", "Drama", "Mystery", "Thriller"]
	},{ 
		title: "Proud Mary",
		year: 2018,
		cast: ["Taraji P. Henson", "Billy Brown", "Danny Glover", "Neal McDonough", "Xander Berkeley", "Margaret Avery"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Acts of Violence",
		year: 2018,
		cast: ["Bruce Willis", "Cole Hauser", "Shawn Ashmore", "Melissa Bolona", "Mike Epps"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Freak Show",
		year: 2018,
		cast: ["Alex Lawther", "Abigail Breslin", "Bette Midler", "AnnaSophia Robb", "Ian Nelson", "Lorraine Toussaint", "Laverne Cox"],
		genres: ["Drama"]
	},{ 
		title: "Humor Me",
		year: 2018,
		cast: ["Jemaine Clement", "Elliott Gould", "Ingrid Michaelson", "Annie Potts", "Priscilla Lopez", "Bebe Neuwirth", "Maria Dizzia"],
		genres: ["Comedy"]
	},{ 
		title: "12 Strong",
		year: 2018,
		cast: ["Chris Hemsworth", "Michael Shannon", "Michael Peña", "Navid Negahban", "Trevante Rhodes", "Geoff Stults", "Thad Luckinbill", "Elsa Pataky", "Rob Riggle", "William Fichtner"],
		genres: ["War", "Drama"]
	},{ 
		title: "Den of Thieves",
		year: 2018,
		cast: ["Gerard Butler", "50 Cent", "Pablo Schreiber", "O'Shea Jackson Jr.", "Evan Jones", "Dawn Olivieri", "Mo McRae", "Max Holloway"],
		genres: ["Action", "Action", "Thriller"]
	},{ 
		title: "Forever My Girl",
		year: 2018,
		cast: ["Alex Roe", "Jessica Rothe", "John Benjamin Hickey"],
		genres: ["Romance", "Musical", "Drama"]
	},{ 
		title: "Maze Runner: The Death Cure",
		year: 2018,
		cast: ["Dylan O'Brien", "Kaya Scodelario", "Thomas Brodie-Sangster", "Ki Hong Lee", "Giancarlo Esposito", "Aidan Gillen", "Walton Goggins", "Barry Pepper", "Will Poulter", "Patricia Clarkson"],
		genres: ["Action", "Science Fiction", "Thriller"]
	},{ 
		title: "The Insult",
		year: 2018,
		cast: ["Adel Karam", "Camille Salameh", "Kamel El Basha"],
		genres: ["Drama"]
	},{ 
		title: "Please Stand By",
		year: 2018,
		cast: ["Dakota Fanning", "Toni Collette", "Alice Eve"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Winchester",
		year: 2018,
		cast: ["Helen Mirren", "Jason Clarke", "Sarah Snook", "Angus Sampson"],
		genres: ["Horror"]
	},{ 
		title: "A Fantastic Woman",
		year: 2018,
		cast: ["Daniela Vega", "Francisco Reyes"],
		genres: ["Drama"]
	},{ 
		title: "Armed",
		year: 2018,
		cast: ["Mario Van Peebles", "William Fichtner", "Ryan Guzman", "Columbus Short", "Laz Alonso"],
		genres: ["Action"]
	},{ 
		title: "The Cloverfield Paradox",
		year: 2018,
		cast: ["Daniel Brühl", "Elizabeth Debicki", "Aksel Hennie", "Gugu Mbatha-Raw", "Chris O'Dowd", "John Ortiz", "David Oyelowo", "Zhang Ziyi"],
		genres: ["Science Fiction", "Horror", "Thriller"]
	},{ 
		title: "The 15:17 to Paris",
		year: 2018,
		cast: ["Anthony Sadler", "Alek Skarlatos", "Spencer Stone", "Judy Greer", "Jenna Fischer", "Ray Corasani"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Fifty Shades Freed",
		year: 2018,
		cast: ["Dakota Johnson", "Jamie Dornan", "Kim Basinger", "Eric Johnson", "Max Martini", "Brant Daugherty", "Fay Masterson", "Luke Grimes", "Rita Ora", "Arielle Kebbel"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Peter Rabbit",
		year: 2018,
		cast: ["James Corden", "Domhnall Gleeson", "Rose Byrne", "Margot Robbie", "Daisy Ridley", "Elizabeth Debicki", "Sam Neill"],
		genres: ["Animated", "Family", "Comedy"]
	},{ 
		title: "La Boda de Valentina",
		year: 2018,
		cast: ["Omar Chaparro", "Marimar Vega", "Ryan Carnes"],
		genres: ["Comedy", "Romance"]
	},{ 
		title: "Permission",
		year: 2018,
		cast: ["Rebecca Hall", "Dan Stevens", "Morgan Spector", "David Joseph Craig", "Gina Gershon", "Jason Sudeikis"],
		genres: ["Drama", "Romance", "Comedy"]
	},{ 
		title: "Monster Family",
		year: 2018,
		cast: ["Emily Watson", "Jason Isaacs", "Nick Frost", "Jessica Brown Findlay", "Celia Imrie", "Catherine Tate"],
		genres: ["Animated", "Comedy", "Family", "Horror"]
	},{ 
		title: "Golden Exits",
		year: 2018,
		cast: ["Emily Browning", "Adam Horowitz", "Mary-Louise Parker", "Jason Schwartzman", "Chloë Sevigny", "Analeigh Tipton"],
		genres: ["Drama"]
	},{ 
		title: "Black Panther",
		year: 2018,
		cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira", "Martin Freeman", "Daniel Kaluuya", "Letitia Wright", "Winston Duke", "Angela Bassett", "Forest Whitaker", "Andy Serkis"],
		genres: ["Superhero", "Action", "Adventure"]
	},{ 
		title: "Nostalgia",
		year: 2018,
		cast: ["Jon Hamm", "Nick Offerman", "Amber Tamblyn", "Patton Oswalt", "Catherine Keener", "Ellen Burstyn", "Bruce Dern", "John Ortiz", "James LeGros"],
		genres: ["Drama"]
	},{ 
		title: "Samson",
		year: 2018,
		cast: ["Taylor James", "Jackson Rathbone", "Billy Zane", "Caitlin Leahy", "Rutger Hauer", "Lindsay Wagner"],
		genres: ["Action", "Drama"]
	},{ 
		title: "Game Night",
		year: 2018,
		cast: ["Jason Bateman", "Rachel McAdams", "Kyle Chandler", "Billy Magnussen", "Sharon Horgan", "Lamorne Morris", "Kylie Bunbury", "Jesse Plemons", "Michael C. Hall"],
		genres: ["Action", "Comedy", "Crime", "Mystery", "Thriller"]
	},{ 
		title: "Annihilation",
		year: 2018,
		cast: ["Natalie Portman", "Jennifer Jason Leigh", "Gina Rodriguez", "Tessa Thompson", "Tuva Novotny", "Oscar Isaac"],
		genres: ["Science Fiction", "Fantasy", "Action", "Horror"]
	},{ 
		title: "Every Day",
		year: 2018,
		cast: ["Angourie Rice", "Maria Bello", "Debby Ryan", "Jacob Batalon", "Justice Smith", "Lucas Jade Zumann"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "The Lodgers",
		year: 2018,
		cast: ["Charlotte Vega", "Bill Milner", "Eugene Simon", "David Bradley", "Deirdre O'Kane", "Moe Dunford"],
		genres: ["Horror"]
	},{ 
		title: "The Cured",
		year: 2018,
		cast: ["Ellen Page", "Sam Keeley", "Tom Vaughan-Lawlor"],
		genres: ["Horror"]
	},{ 
		title: "Red Sparrow",
		year: 2018,
		cast: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts", "Charlotte Rampling", "Mary-Louise Parker", "Jeremy Irons"],
		genres: ["Action", "Drama", "Mystery", "Thriller"]
	},{ 
		title: "Pickings",
		year: 2018,
		cast: ["Elyse Price", "Joel Bernard", "Katie Vincent", "Joe Trombino"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Death Wish",
		year: 2018,
		cast: ["Bruce Willis", "Vincent D'Onofrio", "Dean Norris", "Kimberly Elise", "Mike Epps", "Elisabeth Shue", "Camila Morrone"],
		genres: ["Action"]
	},{ 
		title: "The Vanishing of Sidney Hall",
		year: 2018,
		cast: ["Logan Lerman", "Elle Fanning", "Michelle Monaghan", "Nathan Lane", "Kyle Chandler"],
		genres: ["Drama", "Mystery"]
	},{ 
		title: "A Wrinkle in Time",
		year: 2018,
		cast: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon", "Mindy Kaling", "Levi Miller", "Deric McCabe", "Chris Pine", "Gugu Mbatha-Raw", "Michael Peña", "Zach Galifianakis"],
		genres: ["Fantasy", "Family", "Adventure"]
	},{ 
		title: "Gringo",
		year: 2018,
		cast: ["David Oyelowo", "Charlize Theron", "Joel Edgerton", "Amanda Seyfried", "Thandie Newton", "Sharlto Copley"],
		genres: ["Action", "Comedy", "Drama"]
	},{ 
		title: "Thoroughbreds",
		year: 2018,
		cast: ["Olivia Cooke", "Anya Taylor-Joy", "Anton Yelchin", "Paul Sparks", "Francie Swift"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "The Hurricane Heist",
		year: 2018,
		cast: ["Toby Kebbell", "Maggie Grace", "Ryan Kwanten", "Melissa Bolona", "Ralph Ineson"],
		genres: ["Disaster", "Thriller"]
	},{ 
		title: "The Strangers: Prey at Night",
		year: 2018,
		cast: ["Christina Hendricks", "Martin Henderson", "Bailee Madison", "Lewis Pullman"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Tomb Raider",
		year: 2018,
		cast: ["Alicia Vikander", "Dominic West", "Walton Goggins", "Daniel Wu", "Kristin Scott Thomas", "Derek Jacobi", "Nick Frost", "Hannah John-Kamen"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Love, Simon",
		year: 2018,
		cast: ["Nick Robinson", "Katherine Langford", "Alexandra Shipp", "Jorge Lendeborg Jr.", "Miles Heizer", "Keiynan Lonsdale", "Logan Miller", "Jennifer Garner", "Josh Duhamel", "Tony Hale"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "I Can Only Imagine",
		year: 2018,
		cast: ["Cloris Leachman", "Dennis Quaid", "Priscilla Shirer", "Madeline Carroll", "J. Michael Finley", "Trace Adkins"],
		genres: ["Drama"]
	},{ 
		title: "7 Days in Entebbe",
		year: 2018,
		cast: ["Rosamund Pike", "Daniel Bruhl", "Vincent Cassel", "Eddie Marsan", "Ben Schnetzer"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Furlough",
		year: 2018,
		cast: ["Melissa Leo", "Tessa Thompson", "La La Anthony", "Whoopi Goldberg", "Anna Paquin"],
		genres: ["Drama", "Comedy"]
	},{ 
		title: "Josie",
		year: 2018,
		cast: ["Sophie Turner", "Dylan McDermott", "Jack Kilmer"],
		genres: ["Drama", "Suspense"]
	},{ 
		title: "Flower",
		year: 2018,
		cast: ["Zoey Deutch", "Kathryn Hahn", "Tim Heidecker", "Joey Morgan", "Adam Scott"],
		genres: ["Comedy"]
	},{ 
		title: "Pacific Rim Uprising",
		year: 2018,
		cast: ["John Boyega", "Scott Eastwood", "Cailee Spaeny", "Charlie Day", "Burn Gorman", "Rinko Kikuchi", "Jing Tian", "Adria Arjona", "Zhang Jin"],
		genres: ["Action", "Adventure", "Science Fiction"]
	},{ 
		title: "Isle of Dogs",
		year: 2018,
		cast: ["Bryan Cranston", "Edward Norton", "Bill Murray", "Jeff Goldblum", "Bob Balaban", "Greta Gerwig", "Frances McDormand", "Courtney B. Vance", "Fisher Stevens", "Harvey Keitel", "Liev Schreiber", "Scarlett Johansson", "Tilda Swinton", "F. Murray Abraham", "Frank Wood"],
		genres: ["Animated", "Comedy"]
	},{ 
		title: "Sherlock Gnomes",
		year: 2018,
		cast: ["James McAvoy", "Emily Blunt", "Johnny Depp", "Chiwetel Ejiofor", "Mary J. Blige", "Michael Caine", "Maggie Smith", "Ashley Jensen", "Matt Lucas", "Stephen Merchant", "Julie Walters", "Richard Wilson"],
		genres: ["Animated", "Romance", "Comedy", "Mystery", "Family"]
	},{ 
		title: "Unsane",
		year: 2018,
		cast: ["Claire Foy", "Joshua Leonard", "Jay Pharoah", "Juno Temple", "Aimee Mullins", "Amy Irving"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Paul, Apostle of Christ",
		year: 2018,
		cast: ["James Faulkner", "Jim Caviezel", "Olivier Martinez", "Joanne Whalley", "John Lynch"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "Final Portrait",
		year: 2018,
		cast: ["Geoffrey Rush", "Armie Hammer", "Clémence Poésy", "Tony Shalhoub", "James Faulkner", "Sylvie Testud"],
		genres: ["Drama"]
	},{ 
		title: "Midnight Sun",
		year: 2018,
		cast: ["Bella Thorne", "Patrick Schwarzenegger", "Rob Riggle", "Quinn Shephard"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Followers",
		year: 2018,
		cast: ["Amanda Delaney", "Justin Maina", "Sean Michael Gloria", "Nishant Gogna", "David E. McMahon"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Ready Player One",
		year: 2018,
		cast: ["Tye Sheridan", "Olivia Cooke", "Ben Mendelsohn", "Mark Rylance", "Simon Pegg", "T.J. Miller", "Lena Waithe", "Win Morisaki", "Philip Zhao", "Hannah John-Kamen", "Susan Lynch"],
		genres: ["Adventure", "Science Fiction"]
	},{ 
		title: "Tyler Perry's Acrimony",
		year: 2018,
		cast: ["Taraji P. Henson", "Lyriq Bent", "Tika Sumpter"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "God's Not Dead: A Light in Darkness",
		year: 2018,
		cast: ["David A. R. White", "John Corbett", "Shane Harper", "Benjamin Onyango", "Ted McGinley", "Jennifer Taylor", "Tatum O'Neal", "Shwayze", "Cissy Houston"],
		genres: ["Drama"]
	},{ 
		title: "Gemini",
		year: 2018,
		cast: ["Lola Kirke", "Zoë Kravitz", "Greta Lee", "Michelle Forbes", "Nelson Franklin", "Reeve Carney", "Jessica Parker Kennedy", "James Ransone", "Ricki Lake", "John Cho"],
		genres: ["Mystery", "Thriller"]
	},{ 
		title: "The Last Movie Star",
		year: 2018,
		cast: ["Burt Reynolds", "Ariel Winter", "Clark Duke", "Ellar Coltrane", "Chevy Chase"],
		genres: ["Drama"]
	},{ 
		title: "A Quiet Place",
		year: 2018,
		cast: ["John Krasinski", "Emily Blunt", "Millicent Simmonds", "Noah Jupe"],
		genres: ["Drama", "Horror", "Thriller"]
	},{ 
		title: "Blockers",
		year: 2018,
		cast: ["Leslie Mann", "Ike Barinholtz", "John Cena", "Kathryn Newton", "Graham Phillips", "June Diane Raphael", "Hannibal Buress", "Sarayu Blue"],
		genres: ["Comedy"]
	},{ 
		title: "You Were Never Really Here",
		year: 2018,
		cast: ["Joaquin Phoenix", "Ekaterina Samsonov", "Alex Manette", "John Doman", "Judith Roberts"],
		genres: ["Thriller"]
	},{ 
		title: "Chappaquiddick",
		year: 2018,
		cast: ["Jason Clarke", "Kate Mara", "Ed Helms", "Bruce Dern", "Jim Gaffigan", "Taylor Nichols"],
		genres: ["Drama"]
	},{ 
		title: "Pandas",
		year: 2018,
		cast: ["Kristen Bell"],
		genres: ["Documentary"]
	},{ 
		title: "The Miracle Season",
		year: 2018,
		cast: ["Helen Hunt", "William Hurt", "Erin Moriarty", "Danika Yarosh"],
		genres: ["Drama", "Sports"]
	},{ 
		title: "Beirut",
		year: 2018,
		cast: ["Jon Hamm", "Rosamund Pike", "Dean Norris", "Shea Whigham", "Larry Pine", "Mark Pellegrino"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Rampage",
		year: 2018,
		cast: ["Dwayne Johnson", "Naomie Harris", "Malin Åkerman", "Jake Lacy", "Marley Shelton", "Joe Manganiello", "Jeffrey Dean Morgan"],
		genres: ["Action", "Adventure", "Science Fiction"]
	},{ 
		title: "Truth or Dare",
		year: 2018,
		cast: ["Lucy Hale", "Tyler Posey", "Violett Beane", "Nolan Gerard Funk", "Hayden Szeto", "Sophia Taylor Ali"],
		genres: ["Horror"]
	},{ 
		title: "The Rider",
		year: 2018,
		cast: ["Brady Jandreau"],
		genres: ["Drama", "Biography"]
	},{ 
		title: "Sgt. Stubby: An American Hero",
		year: 2018,
		cast: ["Logan Lerman", "Helena Bonham Carter", "Gérard Depardieu"],
		genres: ["Animated", "Family"]
	},{ 
		title: "I Feel Pretty",
		year: 2018,
		cast: ["Amy Schumer", "Michelle Williams", "Emily Ratajkowski", "Rory Scovel"],
		genres: ["Comedy"]
	},{ 
		title: "Super Troopers 2",
		year: 2018,
		cast: ["Jay Chandrasekhar", "Paul Soter", "Steve Lemme", "Erik Stolhanske", "Kevin Heffernan"],
		genres: ["Crime", "Comedy", "Mystery"]
	},{ 
		title: "Traffik",
		year: 2018,
		cast: ["Paula Patton", "Omar Epps", "Missi Pyle", "William Fichtner", "Roselyn Sanchez", "Dawn Olivieri", "Laz Alonso"],
		genres: ["Thriller"]
	},{ 
		title: "The House of Tomorrow",
		year: 2018,
		cast: ["Asa Butterfield", "Nick Offerman", "Ellen Burstyn", "Alex Wolff", "Maude Apatow"],
		genres: ["Drama"]
	},{ 
		title: "Avengers: Infinity War",
		year: 2018,
		cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Benedict Cumberbatch", "Don Cheadle", "Tom Holland", "Chadwick Boseman", "Paul Bettany", "Elizabeth Olsen", "Anthony Mackie", "Sebastian Stan", "Danai Gurira", "Letitia Wright", "Dave Bautista", "Zoe Saldana", "Pom Klementieff", "Karen Gillan", "Benedict Wong", "Idris Elba", "Peter Dinklage", "Tom Hiddleston", "Vin Diesel", "Bradley Cooper", "Gwyneth Paltrow", "Benicio del Toro", "Josh Brolin", "Chris Pratt"],
		genres: ["Superhero", "Action", "Adventure"]
	},{ 
		title: "Disobedience",
		year: 2018,
		cast: ["Rachel Weisz", "Rachel McAdams", "Alessandro Nivola"],
		genres: ["Drama"]
	},{ 
		title: "Backstabbing for Beginners",
		year: 2018,
		cast: ["Ben Kingsley", "Theo James", "Jacqueline Bisset"],
		genres: ["Thriller"]
	},{ 
		title: "Kings",
		year: 2018,
		cast: ["Halle Berry", "Daniel Craig"],
		genres: ["Romance"]
	},{ 
		title: "Overboard",
		year: 2018,
		cast: ["Anna Faris", "Eugenio Derbez", "Eva Longoria", "John Hannah", "Josh Segarra", "Mel Rodriguez"],
		genres: ["Comedy", "Romance"]
	},{ 
		title: "The Cleanse",
		year: 2018,
		cast: ["Johnny Galecki", "Anna Friel", "Oliver Platt", "Anjelica Huston"],
		genres: ["Comedy", "Horror"]
	},{ 
		title: "Tully",
		year: 2018,
		cast: ["Charlize Theron", "Mackenzie Davis", "Mark Duplass", "Ron Livingston"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Bad Samaritan",
		year: 2018,
		cast: ["David Tennant", "Robert Sheehan", "Carlito Olivero", "Kerry Condon", "Jacqueline Byers"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "Life of the Party",
		year: 2018,
		cast: ["Melissa McCarthy", "Maya Rudolph", "Molly Gordon", "Julie Bowen", "Gillian Jacobs", "Debby Ryan", "Matt Walsh", "Jacki Weaver"],
		genres: ["Comedy"]
	},{ 
		title: "Breaking In",
		year: 2018,
		cast: ["Gabrielle Union", "Billy Burke", "Richard Cabral", "Seth Carr", "Levi Meaden", "Ajiona Alexus", "Christa Miller"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "The Seagull",
		year: 2018,
		cast: ["Saoirse Ronan", "Annette Bening", "Corey Stoll", "Billy Howle"],
		genres: ["Thriller"]
	},{ 
		title: "Terminal",
		year: 2018,
		cast: ["Margot Robbie", "Simon Pegg", "Dexter Fletcher", "Max Irons", "Mike Myers"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Deadpool 2",
		year: 2018,
		cast: ["Ryan Reynolds", "Josh Brolin", "Zazie Beetz", "Julian Dennison", "Morena Baccarin", "T. J. Miller", "Brianna Hildebrand", "Stefan Kapičić", "Jack Kesy", "Leslie Uggams", "Karan Soni", "Shioli Kutsuna", "Eddie Marsan", "Terry Crews", "Bill Skarsgård", "Lewis Tan", "Rob Delaney"],
		genres: ["Superhero", "Action", "Comedy"]
	},{ 
		title: "Book Club",
		year: 2018,
		cast: ["Jane Fonda", "Candice Bergen", "Mary Steenburgen", "Diane Keaton"],
		genres: ["Comedy"]
	},{ 
		title: "First Reformed",
		year: 2018,
		cast: ["Ethan Hawke", "Amanda Seyfried", "Cedric Kyles"],
		genres: ["Drama"]
	},{ 
		title: "Pope Francis: A Man of His Word",
		year: 2018,
		cast: ["Pope Francis"],
		genres: ["Documentary"]
	},{ 
		title: "Show Dogs",
		year: 2018,
		cast: ["Will Arnett", "Natasha Lyonne", "Ludacris", "Stanley Tucci", "Shaquille O'Neal", "Gabriel Iglesias", "Alan Cumming", "Oliver Tompsett", "Andy Beckwith"],
		genres: ["Family", "Comedy"]
	},{ 
		title: "Solo: A Star Wars Story",
		year: 2018,
		cast: ["Alden Ehrenreich", "Woody Harrelson", "Emilia Clarke", "Donald Glover", "Thandie Newton", "Phoebe Waller-Bridge", "Joonas Suotamo", "Paul Bettany"],
		genres: ["Science Fiction", "Comedy", "Action", "Adventure"]
	},{ 
		title: "How to Talk to Girls at Parties",
		year: 2018,
		cast: ["Elle Fanning", "Alex Sharp", "Nicole Kidman", "Ruth Wilson", "Matt Lucas"],
		genres: ["Science Fiction", "Romance", "Comedy"]
	},{ 
		title: "In Darkness",
		year: 2018,
		cast: ["Natalie Dormer", "Emily Ratajkowski", "Ed Skrein", "Joely Richardson", "Neil Maskell", "James Cosmo", "Jan Bijvoet"],
		genres: ["Thriller"]
	},{ 
		title: "Future World",
		year: 2018,
		cast: ["James Franco", "Suki Waterhouse", "Jeffrey Wahlberg", "Margarita Levieva", "Snoop Dogg", "George Lewis Jr.", "Method Man", "Lucy Liu", "Milla Jovovich"],
		genres: ["Thriller", "Action", "Science Fiction"]
	},{ 
		title: "Action Point",
		year: 2018,
		cast: ["Johnny Knoxville", "Chris Pontius"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Adrift",
		year: 2018,
		cast: ["Shailene Woodley", "Sam Claflin"],
		genres: ["Drama"]
	},{ 
		title: "Upgrade",
		year: 2018,
		cast: ["Logan Marshall-Green", "Betty Gabriel", "Harrison Gilbertson", "Benedict Hardie"],
		genres: ["Science Fiction", "Horror", "Action"]
	},{ 
		title: "American Animals",
		year: 2018,
		cast: ["Evan Peters", "Barry Keoghan", "Blake Jenner", "Jared Abrahamson", "Udo Kier", "Ann Dowd"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Social Animals",
		year: 2018,
		cast: ["Noël Wells", "Josh Radnor", "Aya Cash", "Carly Chaikin", "Fortune Feimster", "Samira Wiley"],
		genres: ["Comedy"]
	},{ 
		title: "Ocean's 8",
		year: 2018,
		cast: ["Sandra Bullock", "Cate Blanchett", "Anne Hathaway", "Mindy Kaling", "Sarah Paulson", "Awkwafina", "Rihanna", "Helena Bonham Carter"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Won't You Be My Neighbor?",
		year: 2018,
		cast: ["Fred Rogers"],
		genres: ["Documentary"]
	},{ 
		title: "Hereditary",
		year: 2018,
		cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro", "Ann Dowd", "Gabriel Byrne"],
		genres: ["Horror"]
	},{ 
		title: "Hotel Artemis",
		year: 2018,
		cast: ["Jodie Foster", "Sterling K. Brown", "Sofia Boutella", "Jeff Goldblum", "Dave Bautista", "Brian Tyree Henry", "Jenny Slate", "Zachary Quinto", "Charlie Day"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Superfly",
		year: 2018,
		cast: ["Trevor Jackson", "Jason Mitchell", "Michael K. Williams", "Esai Morales"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Incredibles 2",
		year: 2018,
		cast: ["Holly Hunter", "Craig T. Nelson", "Sarah Vowell", "Huck Milner", "Samuel L. Jackson", "Bob Odenkirk", "Catherine Keener", "Brad Bird", "Jonathan Banks", "Michael Bird", "Sophia Bush", "Phil LaMarr", "Paul Eiding", "Bill Wise", "Isabella Rossellini", "John Ratzenberger"],
		genres: ["Superhero", "Family", "Animated"]
	},{ 
		title: "Tag",
		year: 2018,
		cast: ["Ed Helms", "Jeremy Renner", "Jon Hamm", "Jake Johnson", "Hannibal Buress", "Annabelle Wallis", "Isla Fisher", "Rashida Jones", "Leslie Bibb"],
		genres: ["Comedy"]
	},{ 
		title: "On Chesil Beach",
		year: 2018,
		cast: ["Saoirse Ronan", "Billy Howle", "Emily Watson", "Anne-Marie Duff", "Samuel West", "Adrian Scarborough"],
		genres: ["Drama"]
	},{ 
		title: "Gotti",
		year: 2018,
		cast: ["John Travolta", "Kelly Preston", "Stacy Keach", "Pruitt Taylor Vince", "Spencer Lofranco", "William DeMeo", "Leo Rossi", "Victor Gojcaj"],
		genres: ["Biography", "Crime", "Drama"]
	},{ 
		title: "Jurassic World: Fallen Kingdom",
		year: 2018,
		cast: ["Chris Pratt", "Bryce Dallas Howard", "Rafe Spall", "Justice Smith", "Daniella Pineda", "James Cromwell", "Toby Jones", "Ted Levine", "B. D. Wong", "Geraldine Chaplin", "Jeff Goldblum"],
		genres: ["Action", "Adventure", "Science Fiction"]
	},{ 
		title: "Boundaries",
		year: 2018,
		cast: ["Vera Farmiga", "Christopher Plummer", "Lewis MacDougall", "Bobby Cannavale", "Kristen Schaal"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Damsel",
		year: 2018,
		cast: ["Robert Pattinson", "Mia Wasikowska"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Domestics",
		year: 2018,
		cast: ["Tyler Hoechlin", "Kate Bosworth", "Lance Reddick", "Sonoya Mizuno", "Dana Gourrier", "Thomas Francis Murray", "David Dastmalchian"],
		genres: ["Science Fiction", "Thriller"]
	},{ 
		title: "Sicario: Day of the Soldado",
		year: 2018,
		cast: ["Benicio del Toro", "Josh Brolin", "Isabela Moner", "Jeffrey Donovan", "Manuel Garcia-Rulfo", "Catherine Keener"],
		genres: ["Action", "Crime", "Thriller"]
	},{ 
		title: "Leave No Trace",
		year: 2018,
		cast: ["Ben Foster", "Thomasin McKenzie", "Jeff Kober", "Dale Dickey"],
		genres: ["Drama"]
	},{ 
		title: "Uncle Drew",
		year: 2018,
		cast: ["Kyrie Irving", "Lil Rel Howery", "Shaquille O'Neal", "Reggie Miller", "Nate Robinson", "Chris Webber", "Erica Ash", "Lisa Leslie", "Nick Kroll", "Tiffany Haddish"],
		genres: ["Comedy", "Family", "Sports"]
	},{ 
		title: "Woman Walks Ahead",
		year: 2018,
		cast: ["Jessica Chastain", "Michael Greyeyes", "Chaske Spencer", "Sam Rockwell"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "The First Purge",
		year: 2018,
		cast: ["Y'lan Noel", "Lex Scott Davis", "Joivan Wade", "Luna Lauren Velez", "Marisa Tomei"],
		genres: ["Horror", "Science Fiction"]
	},{ 
		title: "Ant-Man and the Wasp",
		year: 2018,
		cast: ["Paul Rudd", "Evangeline Lilly", "Michael Peña", "Michael Douglas", "Michelle Pfeiffer", "Walton Goggins", "Hannah John-Kamen", "Bobby Cannavale", "Judy Greer", "Tip \"T.I.\" Harris", "David Dastmalchian", "Abby Ryder Fortson", "Randall Park", "Laurence Fishburne"],
		genres: ["Superhero", "Action", "Adventure", "Comedy", "Science Fiction"]
	},{ 
		title: "Sorry to Bother You",
		year: 2018,
		cast: ["Lakeith Stanfield", "Tessa Thompson", "Armie Hammer", "Steven Yeun", "Jermaine Fowler", "Omari Hardwick", "Terry Crews", "Danny Glover", "Patton Oswalt", "David Cross"],
		genres: ["Science Fiction", "Fantasy", "Comedy"]
	},{ 
		title: "Whitney",
		year: 2018,
		cast: ["Whitney Houston"],
		genres: ["Documentary"]
	},{ 
		title: "Hotel Transylvania 3: Summer Vacation",
		year: 2018,
		cast: ["Adam Sandler", "Andy Samberg", "Selena Gomez", "David Spade", "Steve Buscemi", "Molly Shannon", "Keegan-Michael Key", "Kevin James", "Fran Drescher", "Asher Blinkoff", "Sadie Sandler", "Joe Whyte", "Kathryn Hahn", "Jim Gaffigan", "Mel Brooks", "Joe Jonas"],
		genres: ["Comedy", "Animated", "Fantasy"]
	},{ 
		title: "Skyscraper",
		year: 2018,
		cast: ["Dwayne Johnson", "Neve Campbell", "Chin Han", "Roland Møller", "Pablo Schreiber", "Byron Mann", "Hannah Quinlivan", "Noah Taylor"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Eighth Grade",
		year: 2018,
		cast: ["Elsie Fisher", "Josh Hamilton", "Emily Robinson", "Missy Yager"],
		genres: ["Comedy"]
	},{ 
		title: "Don't Worry, He Won't Get Far on Foot",
		year: 2018,
		cast: ["Joaquin Phoenix", "Rooney Mara", "Jonah Hill", "Jack Black"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "Shock and Awe",
		year: 2018,
		cast: ["Woody Harrelson", "Tommy Lee Jones", "James Marsden", "Milla Jovovich", "Jessica Biel", "Richard Schiff", "Al Sapienza"],
		genres: ["Drama"]
	},{ 
		title: "Mamma Mia! Here We Go Again",
		year: 2018,
		cast: ["Lily James", "Amanda Seyfried", "Pierce Brosnan", "Colin Firth", "Stellan Skarsgård", "Julie Walters", "Christine Baranski", "Dominic Cooper", "Meryl Streep", "Cher", "Andy García"],
		genres: ["Romance", "Musical", "Comedy"]
	},{ 
		title: "The Equalizer 2",
		year: 2018,
		cast: ["Denzel Washington", "Ashton Sanders", "Pedro Pascal", "Melissa Leo", "Bill Pullman"],
		genres: ["Action", "Crime", "Thriller"]
	},{ 
		title: "Blindspotting",
		year: 2018,
		cast: ["Janina Gavankar", "Ethan Embry", "Daveed Diggs", "Rafael Casal", "Wayne Knight"],
		genres: ["Comedy"]
	},{ 
		title: "Unfriended: Dark Web",
		year: 2018,
		cast: ["Colin Woodell", "Stephanie Nogueras", "Betty Gabriel", "Rebecca Rittenhouse", "Andrew Lees", "Connor Del Rio", "Savira Windyani"],
		genres: ["Horror"]
	},{ 
		title: "Gauguin - Voyage de Tahiti",
		year: 2018,
		cast: ["Vincent Cassel", "Tuheï Adams", "Malik Zidi"],
		genres: ["Biography", "Drama", "Romance"]
	},{ 
		title: "Mission: Impossible – Fallout",
		year: 2018,
		cast: ["Tom Cruise", "Henry Cavill", "Ving Rhames", "Simon Pegg", "Rebecca Ferguson", "Sean Harris", "Angela Bassett", "Michelle Monaghan", "Alec Baldwin"],
		genres: ["Action", "Adventure", "Thriller"]
	},{ 
		title: "Teen Titans Go! To the Movies",
		year: 2018,
		cast: ["Scott Menville", "Khary Payton", "Tara Strong", "Greg Cipes", "Hynden Walch", "Will Arnett", "Kristen Bell"],
		genres: ["Animated", "Superhero", "Comedy"]
	},{ 
		title: "Hot Summer Nights",
		year: 2018,
		cast: ["Timothée Chalamet", "Maika Monroe", "Alex Roe", "Maia Mitchell"],
		genres: ["Drama"]
	},{ 
		title: "Puzzle",
		year: 2018,
		cast: ["Kelly Macdonald", "Irrfan Khan", "David Denman", "Bubba Weiler", "Austin Abrams", "Liv Hewson"],
		genres: ["Drama"]
	},{ 
		title: "Christopher Robin",
		year: 2018,
		cast: ["Ewan McGregor", "Hayley Atwell", "Bronte Carmichael", "Mark Gatiss", "Jim Cummings", "Brad Garrett", "Nick Mohammed", "Peter Capaldi", "Sophie Okonedo", "Sara Sheen", "Toby Jones"],
		genres: ["Family", "Comedy", "Drama", "Fantasy"]
	},{ 
		title: "The Darkest Minds",
		year: 2018,
		cast: ["Amandla Stenberg", "Mandy Moore", "Gwendoline Christie", "Harris Dickinson", "Skylan Brooks", "Miya Cech", "Patrick Gibson", "Golden Brooks", "Bradley Whitford"],
		genres: ["Science Fiction", "Action", "Thriller"]
	},{ 
		title: "The Spy Who Dumped Me",
		year: 2018,
		cast: ["Mila Kunis", "Kate McKinnon", "Sam Heughan"],
		genres: ["Action", "Comedy"]
	},{ 
		title: "Billionaire Boys Club",
		year: 2018,
		cast: ["Ansel Elgort", "Taron Egerton", "Kevin Spacey", "Jeremy Irvine", "Cary Elwes", "Emma Roberts", "Billie Lourd", "Suki Waterhouse", "Judd Nelson"],
		genres: ["Biography", "Crime", "Drama"]
	},{ 
		title: "Never Goin' Back",
		year: 2018,
		cast: ["Maia Mitchell", "Camila Morrone", "Kyle Mooney", "Joel Allen", "Kendal Smith", "Matthew Holcomb"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Miseducation of Cameron Post",
		year: 2018,
		cast: ["Chloë Grace Moretz", "Sasha Lane", "John Gallagher, Jr.", "Forrest Goodluck", "Jennifer Ehle"],
		genres: ["Drama"]
	},{ 
		title: "Dog Days",
		year: 2018,
		cast: ["Nina Dobrev", "Finn Wolfhard", "Vanessa Hudgens", "Adam Pally", "Eva Longoria"],
		genres: ["Comedy"]
	},{ 
		title: "The Meg",
		year: 2018,
		cast: ["Jason Statham", "Li Bingbing", "Rainn Wilson", "Ruby Rose", "Winston Chao", "Cliff Curtis"],
		genres: ["Action", "Horror", "Thriller", "Science Fiction"]
	},{ 
		title: "BlacKkKlansman",
		year: 2018,
		cast: ["John David Washington", "Adam Driver", "Laura Harrier", "Topher Grace"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Slender Man",
		year: 2018,
		cast: ["Joey King", "Julia Goldani Telles", "Jaz Sinclair", "Annalise Basso", "Javier Botet"],
		genres: ["Horror", "Thriller"]
	},{ 
		title: "A Prayer Before Dawn",
		year: 2018,
		cast: ["Joe Cole"],
		genres: ["Drama"]
	},{ 
		title: "Crazy Rich Asians",
		year: 2018,
		cast: ["Constance Wu", "Henry Golding", "Gemma Chan", "Awkwafina", "Nico Santos", "Lisa Lu", "Ken Jeong", "Michelle Yeoh"],
		genres: ["Romance", "Comedy", "Drama"]
	},{ 
		title: "Alpha",
		year: 2018,
		cast: ["Kodi Smit-McPhee", "Leonor Varela", "Jens Hultén"],
		genres: ["Adventure", "Fantasy", "Drama"]
	},{ 
		title: "Mile 22",
		year: 2018,
		cast: ["Mark Wahlberg", "John Malkovich", "Lauren Cohan", "Iko Uwais", "Ronda Rousey"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Down a Dark Hall",
		year: 2018,
		cast: ["AnnaSophia Robb", "Uma Thurman", "Isabelle Fuhrman", "Kirsty Mitchell", "Taylor Russell", "Jim Sturgeon", "Victoria Moroles"],
		genres: ["Fantasy", "Drama"]
	},{ 
		title: "The Wife",
		year: 2018,
		cast: ["Glenn Close", "Jonathan Pryce", "Christian Slater", "Max Irons", "Annie Starke", "Harry Lloyd", "Elizabeth McGovern"],
		genres: ["Drama"]
	},{ 
		title: "The Happytime Murders",
		year: 2018,
		cast: ["Melissa McCarthy", "Maya Rudolph", "Joel McHale", "Elizabeth Banks"],
		genres: ["Comedy", "Thriller"]
	},{ 
		title: "Searching",
		year: 2018,
		cast: ["John Cho", "Debra Messing"],
		genres: ["Thriller"]
	},{ 
		title: "Papillon",
		year: 2018,
		cast: ["Charlie Hunnam", "Rami Malek"],
		genres: ["Biography"]
	},{ 
		title: "A.X.L.",
		year: 2018,
		cast: ["Alex Neustaedter", "Becky G", "Alex MacNicoll", "Thomas Jane", "Lou Taylor Pucci", "Patricia de Leon"],
		genres: ["Science Fiction", "Adventure"]
	},{ 
		title: "Operation Finale",
		year: 2018,
		cast: ["Oscar Isaac", "Ben Kingsley", "Lior Raz", "Mélanie Laurent", "Nick Kroll", "Joe Alwyn"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "Kin",
		year: 2018,
		cast: ["Myles Truitt", "Jack Reynor", "Zoë Kravitz", "Carrie Coon", "Dennis Quaid", "James Franco"],
		genres: ["Science Fiction", "Action", "Crime", "Thriller"]
	},{ 
		title: "Juliet, Naked",
		year: 2018,
		cast: ["Ethan Hawke", "Rose Byrne"],
		genres: ["Romance", "Drama"]
	},{ 
		title: "Destination Wedding",
		year: 2018,
		cast: ["Winona Ryder", "Keanu Reeves"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "The Nun",
		year: 2018,
		cast: ["Demián Bichir", "Taissa Farmiga", "Jonas Bloquet", "Charlotte Hope", "Ingrid Bisu", "Bonnie Aarons"],
		genres: ["Horror"]
	},{ 
		title: "Peppermint",
		year: 2018,
		cast: ["Jennifer Garner", "John Ortiz", "Juan Pablo Raba", "John Gallagher Jr.", "Annie Ilonzeh", "Richard Cabral"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "The Predator",
		year: 2018,
		cast: ["Boyd Holbrook", "Trevante Rhodes", "Jacob Tremblay", "Keegan-Michael Key", "Olivia Munn", "Thomas Jane", "Alfie Allen", "Sterling K. Brown", "Augusto Aguilera", "Yvonne Strahovski", "Jake Busey"],
		genres: ["Horror", "Action", "Science Fiction"]
	},{ 
		title: "White Boy Rick",
		year: 2018,
		cast: ["Matthew McConaughey", "Richie Merritt", "Bel Powley", "Jennifer Jason Leigh", "Brian Tyree Henry", "Rory Cochrane", "RJ Cyler", "Jonathan Majors", "Eddie Marsan", "Bruce Dern", "Piper Laurie"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "A Simple Favor",
		year: 2018,
		cast: ["Anna Kendrick", "Blake Lively", "Henry Golding", "Andrew Rannells"],
		genres: ["Thriller", "Drama", "Comedy"]
	},{ 
		title: "The Children Act",
		year: 2018,
		cast: ["Emma Thompson", "Stanley Tucci", "Fionn Whitehead"],
		genres: ["Drama"]
	},{ 
		title: "Lizzie",
		year: 2018,
		cast: ["Chloë Sevigny", "Kristen Stewart", "Jay Huguley", "Fiona Shaw", "Jamey Sheridan", "Kim Dickens", "Denis O'Hare", "Jeff Perry"],
		genres: ["Biography", "Thriller"]
	},{ 
		title: "Unbroken: Path to Redemption",
		year: 2018,
		cast: ["Samuel Hunt", "Merritt Patterson", "Vanessa Bell Calloway", "Bobby Campo", "David DeLuise", "David Sakurai", "WIll Graham"],
		genres: ["Drama"]
	},{ 
		title: "The House with a Clock in Its Walls",
		year: 2018,
		cast: ["Jack Black", "Cate Blanchett", "Owen Vaccaro", "Kyle MacLachlan", "Renée Elise Goldsberry", "Sunny Suljic", "Vanessa Anne Williams", "Colleen Camp"],
		genres: ["Fantasy"]
	},{ 
		title: "Life Itself",
		year: 2018,
		cast: ["Oscar Isaac", "Olivia Wilde", "Mandy Patinkin", "Olivia Cooke", "Laia Costa", "Annette Bening", "Antonio Banderas"],
		genres: ["Drama"]
	},{ 
		title: "The Sisters Brothers",
		year: 2018,
		cast: ["John C. Reilly", "Joaquin Phoenix", "Jake Gyllenhaal", "Riz Ahmed"],
		genres: ["Western", "Comedy"]
	},{ 
		title: "Colette",
		year: 2018,
		cast: ["Keira Knightley", "Dominic West"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Assassination Nation",
		year: 2018,
		cast: ["Odessa Young", "Suki Waterhouse", "Hari Nef", "Abra", "Bella Thorne", "Bill Skarsgård", "Cody Christian", "Joel McHale", "Maude Apatow", "Colman Domingo", "Anika Noni Rose"],
		genres: ["Crime", "Drama"]
	},{ 
		title: "Fahrenheit 11/9",
		year: 2018,
		cast: [],
		genres: ["Documentary"]
	},{ 
		title: "Night School",
		year: 2018,
		cast: ["Kevin Hart", "Tiffany Haddish", "Taran Killam", "Rob Riggle", "Ben Schwartz", "Yvonne Orji"],
		genres: ["Comedy"]
	},{ 
		title: "Smallfoot",
		year: 2018,
		cast: ["Channing Tatum", "James Corden", "Zendaya", "Common", "LeBron James", "Gina Rodriguez", "Danny DeVito", "Yara Shahidi", "Ely Henry", "Jimmy Tatro"],
		genres: ["Animated", "Fantasy", "Comedy"]
	},{ 
		title: "The Old Man & the Gun",
		year: 2018,
		cast: ["Robert Redford", "Casey Affleck", "Danny Glover", "Tika Sumpter", "Tom Waits", "Sissy Spacek"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Hell Fest",
		year: 2018,
		cast: ["Bex Taylor-Klaus", "Amy Forsyth", "Reign Edwards", "Christian James", "Matt Mercurio", "Roby Attal"],
		genres: ["Horror"]
	},{ 
		title: "Power of the Air",
		year: 2018,
		cast: ["Nicholas X. Parsons", "Patty Duke", "Michael Gross", "Tracy Goode", "Karyn Williams", "Wendell Kinney", "Veryl Jones"],
		genres: ["Drama"]
	},{ 
		title: "Venom",
		year: 2018,
		cast: ["Tom Hardy", "Michelle Williams", "Riz Ahmed", "Scott Haze", "Reid Scott", "Jenny Slate"],
		genres: ["Superhero", "Horror", "Action", "Science Fiction", "Thriller"]
	},{ 
		title: "A Star Is Born",
		year: 2018,
		cast: ["Bradley Cooper", "Lady Gaga", "Andrew Dice Clay", "Dave Chappelle", "Sam Elliott"],
		genres: ["Romance", "Drama", "Musical"]
	},{ 
		title: "The Hate U Give",
		year: 2018,
		cast: ["Amandla Stenberg", "Regina Hall", "Russell Hornsby", "KJ Apa", "Algee Smith", "Lamar Johnson", "Issa Rae", "Sabrina Carpenter", "Common", "Anthony Mackie"],
		genres: ["Drama"]
	},{ 
		title: "First Man",
		year: 2018,
		cast: ["Ryan Gosling", "Claire Foy", "Jason Clarke", "Kyle Chandler", "Corey Stoll", "Ciaran Hinds", "Christopher Abbott", "Patrick Fugit", "Lukas Haas"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Bad Times at the El Royale",
		year: 2018,
		cast: ["Jeff Bridges", "Cynthia Erivo", "Chris Hemsworth", "Dakota Johnson", "Jon Hamm", "Cailee Spaeny", "Lewis Pullman", "Nick Offerman"],
		genres: ["Drama", "Action"]
	},{ 
		title: "Goosebumps 2: Haunted Halloween",
		year: 2018,
		cast: ["Wendi McLendon-Covey", "Madison Iseman", "Jeremy Ray Taylor", "Caleel Harris", "Chris Parnell", "Ken Jeong", "Jack Black"],
		genres: ["Horror", "Comedy"]
	},{ 
		title: "Beautiful Boy",
		year: 2018,
		cast: ["Steve Carell", "Timothée Chalamet", "Maura Tierney", "Amy Ryan"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "The Oath",
		year: 2018,
		cast: ["Ike Barinholtz", "Tiffany Haddish", "John Cho", "Carrie Brownstein", "Billy Magnussen", "Meredith Hagner", "Jon Barinholtz", "Nora Dunn", "Chris Ellis"],
		genres: ["Comedy"]
	},{ 
		title: "Halloween",
		year: 2018,
		cast: ["Jamie Lee Curtis", "Judy Greer", "Andi Matichak", "Will Patton", "Virginia Gardner", "Nick Castle", "James Jude Courtney"],
		genres: ["Horror"]
	},{ 
		title: "Can You Ever Forgive Me?",
		year: 2018,
		cast: ["Melissa McCarthy", "Richard E. Grant", "Jane Curtin", "Anna Deavere Smith", "Dolly Wells", "Jennifer Westfeldt"],
		genres: ["Biography", "Drama", "Comedy"]
	},{ 
		title: "Serenity",
		year: 2018,
		cast: ["Matthew McConaughey", "Anne Hathaway", "Diane Lane", "Jason Clarke", "Djimon Hounsou", "Jeremy Strong"],
		genres: ["Noir", "Thriller", "Drama"]
	},{ 
		title: "Mid90s",
		year: 2018,
		cast: ["Sunny Suljic", "Lucas Hedges", "Katherine Waterston"],
		genres: ["Drama"]
	},{ 
		title: "What They Had",
		year: 2018,
		cast: ["Hilary Swank", "Michael Shannon", "Robert Forster", "Blythe Danner", "Taissa Farmiga", "Josh Lucas"],
		genres: ["Drama"]
	},{ 
		title: "Wildlife",
		year: 2018,
		cast: ["Carey Mulligan", "Jake Gyllenhaal", "Ed Oxenbould", "Bill Camp"],
		genres: ["Drama"]
	},{ 
		title: "Hunter Killer",
		year: 2018,
		cast: ["Gerard Butler", "Gary Oldman", "Common", "Toby Stephens", "Linda Cardellini", "David Gyasi", "Gabriel Chavarria", "Zane Holtz", "Michael Nyqvist"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Suspiria",
		year: 2018,
		cast: ["Dakota Johnson", "Tilda Swinton", "Mia Goth", "Lutz Ebersdorf", "Jessica Harper", "Chloë Grace Moretz"],
		genres: ["Horror"]
	},{ 
		title: "Indivisible",
		year: 2018,
		cast: ["Justin Bruening", "Sarah Drew", "Jason George", "Tia Mowry", "Michael O'Neill", "Eric Close", "Madeline Carroll", "Tanner Stine", "Skye P. Marshall"],
		genres: ["Drama"]
	},{ 
		title: "The Nutcracker and the Four Realms",
		year: 2018,
		cast: ["Keira Knightley", "Mackenzie Foy", "Eugenio Derbez", "Matthew Macfadyen", "Richard E. Grant", "Misty Copeland", "Helen Mirren", "Morgan Freeman"],
		genres: ["Fantasy"]
	},{ 
		title: "Bohemian Rhapsody",
		year: 2018,
		cast: ["Rami Malek", "Lucy Boynton", "Gwilym Lee", "Ben Hardy", "Joseph Mazzello", "Aidan Gillen", "Tom Hollander", "Allen Leech", "Mike Myers"],
		genres: ["Biography", "Drama", "Musical"]
	},{ 
		title: "Nobody's Fool",
		year: 2018,
		cast: ["Tiffany Haddish", "Tika Sumpter", "Omari Hardwick", "Whoopi Goldberg", "Amber Riley"],
		genres: ["Comedy"]
	},{ 
		title: "Boy Erased",
		year: 2018,
		cast: ["Lucas Hedges", "Joel Edgerton", "Nicole Kidman", "Russell Crowe"],
		genres: ["Drama"]
	},{ 
		title: "A Private War",
		year: 2018,
		cast: ["Rosamund Pike", "Jamie Dornan", "Stanley Tucci", "Tom Hollander"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Bodied",
		year: 2018,
		cast: ["Calum Worthy", "Jackie Long", "Rory Uphold", "Dumbfoundead", "Walter Perez", "Anthony Michael Hall"],
		genres: ["Comedy", "Drama"]
	},{ 
		title: "The Front Runner",
		year: 2018,
		cast: ["Hugh Jackman", "Vera Farmiga", "J. K. Simmons", "Alfred Molina"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "The Grinch",
		year: 2018,
		cast: ["Benedict Cumberbatch", "Rashida Jones", "Kenan Thompson", "Cameron Seely", "Angela Lansbury", "Pharrell Williams"],
		genres: ["Animated", "Family", "Comedy"]
	},{ 
		title: "The Girl in the Spider's Web",
		year: 2018,
		cast: ["Claire Foy", "Sverrir Gudnason", "Lakeith Stanfield", "Sylvia Hoeks", "Stephen Merchant"],
		genres: ["Crime", "Thriller"]
	},{ 
		title: "Overlord",
		year: 2018,
		cast: ["Jovan Adepo", "Wyatt Russell", "Jacob Anderson", "Dominic Applewhite", "Pilou Asbæk", "Iain De Caestecker", "John Magaro", "Mathilde Ollivier", "Bokeem Woodbine"],
		genres: ["Action", "Horror", "Thriller"]
	},{ 
		title: "Conundrum: Secrets Among Friends",
		year: 2018,
		cast: ["Shaun Cairo (Screenplay)", "Jo Marie Payton", "Gary Leroi Gray", "Paula Jai Parker", "Parker McKenna Posey"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "Fantastic Beasts: The Crimes of Grindelwald",
		year: 2018,
		cast: ["Eddie Redmayne", "Katherine Waterston", "Alison Sudol", "Dan Fogler", "Ezra Miller", "Jude Law", "Johnny Depp", "Zoë Kravitz", "Callum Turner", "Claudia Kim", "William Nadylam", "Carmen Ejogo", "Kevin Guthrie", "Poppy Corby-Tuech"],
		genres: ["Fantasy", "Drama"]
	},{ 
		title: "Widows",
		year: 2018,
		cast: ["Viola Davis", "Michelle Rodriguez", "Elizabeth Debicki", "Cynthia Erivo", "Colin Farrell", "Brian Tyree Henry", "Daniel Kaluuya", "Garret Dillahunt", "Carrie Coon", "Jacki Weaver", "Jon Bernthal", "Manuel Garcia-Rulfo", "Robert Duvall", "Liam Neeson"],
		genres: ["Action", "Thriller"]
	},{ 
		title: "Instant Family",
		year: 2018,
		cast: ["Mark Wahlberg", "Rose Byrne", "Isabela Moner", "Tig Notaro", "Octavia Spencer"],
		genres: ["Comedy"]
	},{ 
		title: "Ralph Breaks the Internet",
		year: 2018,
		cast: ["John C. Reilly", "Sarah Silverman", "Jack McBrayer", "Jane Lynch", "Taraji P. Henson", "Gal Gadot", "Alan Tudyk", "Bill Hader", "Alfred Molina"],
		genres: ["Animated", "Fantasy", "Adventure", "Comedy"]
	},{ 
		title: "Creed II",
		year: 2018,
		cast: ["Michael B. Jordan", "Sylvester Stallone", "Tessa Thompson", "Dolph Lundgren", "Florian Munteanu", "Phylicia Rashad", "Andre Ward", "Wood Harris", "Brigitte Nielsen"],
		genres: ["Sports", "Drama"]
	},{ 
		title: "Robin Hood",
		year: 2018,
		cast: ["Taron Egerton", "Jamie Foxx", "Ben Mendelsohn", "Eve Hewson", "Jamie Dornan", "Tim Minchin", "Paul Anderson"],
		genres: ["Action", "Adventure"]
	},{ 
		title: "Green Book",
		year: 2018,
		cast: ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
		genres: ["Drama"]
	},{ 
		title: "The Favourite",
		year: 2018,
		cast: ["Emma Stone", "Rachel Weisz", "Olivia Colman", "Nicholas Hoult", "Joe Alwyn", "Mark Gatiss"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Anna and the Apocalypse",
		year: 2018,
		cast: ["Ella Hunt", "Malcolm Cumming", "Marli Siu", "Sarah Swire", "Christopher Leveaux", "Ben Wiggins"],
		genres: ["Horror", "Musical", "Comedy"]
	},{ 
		title: "If Beale Street Could Talk",
		year: 2018,
		cast: ["Kiki Layne", "Stephan James", "Teyonah Parris", "Regina King", "Dave Franco", "Ed Skrein", "Diego Luna", "Emily Rios"],
		genres: ["Drama", "Romance"]
	},{ 
		title: "Mary Queen of Scots",
		year: 2018,
		cast: ["Saoirse Ronan", "Margot Robbie", "Jack Lowden", "Martin Compston", "Joe Alwyn", "Brendan Coyle", "David Tennant", "Guy Pearce"],
		genres: ["Historical", "Drama"]
	},{ 
		title: "Under the Silver Lake",
		year: 2018,
		cast: ["Andrew Garfield", "Riley Keough", "Topher Grace", "Zosia Mamet", "Jimmi Simpson", "Luke Baines", "Patrick Fischler"],
		genres: ["Noir", "Crime", "Thriller"]
	},{ 
		title: "The Silence",
		year: 2018,
		cast: ["Miranda Otto", "Stanley Tucci", "John Corbett"],
		genres: ["Drama", "Thriller"]
	},{ 
		title: "This One's for the Ladies",
		year: 2018,
		cast: ["C-Pudding", "Poundcake", "Tyga & Raw Dawg", "Sweet Tea", "Young Rider", "Blaze", "Michele", "Double Trouble", "Satan", "Fever"],
		genres: ["Documentary"]
	},{ 
		title: "Ben Is Back",
		year: 2018,
		cast: ["Lucas Hedges", "Julia Roberts", "Kathryn Newton", "Courtney B. Vance"],
		genres: ["Drama"]
	},{ 
		title: "Mortal Engines",
		year: 2018,
		cast: ["Hera Hilmar", "Robert Sheehan", "Hugo Weaving", "Jihae", "Ronan Raftery", "Leila George", "Patrick Malahide", "Stephen Lang"],
		genres: ["Science Fiction", "Action", "Adventure"]
	},{ 
		title: "Spider-Man: Into the Spider-Verse",
		year: 2018,
		cast: ["Shameik Moore", "Hailee Steinfeld", "Mahershala Ali", "Jake Johnson", "Liev Schreiber", "Brian Tyree Henry", "Luna Lauren Velez", "Lily Tomlin", "John Mulaney", "Kimiko Glenn", "Nicholas Cage"],
		genres: ["Animated", "Superhero", "Action", "Comedy"]
	},{ 
		title: "The Mule",
		year: 2018,
		cast: ["Clint Eastwood", "Bradley Cooper", "Laurence Fishburne", "Michael Peña", "Dianne Wiest", "Andy Garcia"],
		genres: ["Drama", "Crime", "Biography"]
	},{ 
		title: "Vice",
		year: 2018,
		cast: ["Christian Bale", "Amy Adams", "Steve Carell", "Sam Rockwell", "Alison Pill", "Jesse Plemons", "Lily Rabe", "Bill Pullman", "Tyler Perry"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Second Act",
		year: 2018,
		cast: ["Jennifer Lopez", "Vanessa Hudgens", "Leah Remini", "Annaleigh Ashford", "Freddie Stroma", "Dan Bucatinsky", "Milo Ventimiglia", "Treat Williams", "Larry Miller"],
		genres: ["Romance", "Comedy"]
	},{ 
		title: "Mary Poppins Returns",
		year: 2018,
		cast: ["Emily Blunt", "Lin-Manuel Miranda", "Ben Whishaw", "Emily Mortimer", "Julie Walters", "Colin Firth", "Meryl Streep", "Dick Van Dyke", "Angela Lansbury"],
		genres: ["Musical", "Fantasy"]
	},{ 
		title: "Aquaman",
		year: 2018,
		cast: ["Jason Momoa", "Amber Heard", "Willem Dafoe", "Patrick Wilson", "Dolph Lundgren", "Yahya Abdul-Mateen II", "Nicole Kidman"],
		genres: ["Superhero", "Action", "Adventure"]
	},{ 
		title: "Bumblebee",
		year: 2018,
		cast: ["Hailee Steinfeld", "John Cena", "Jorge Lendeborg Jr.", "Jason Drucker", "Rachel Crow", "Pamela Adlon"],
		genres: ["Action", "Adventure", "Science Fiction"]
	},{ 
		title: "Welcome to Marwen",
		year: 2018,
		cast: ["Steve Carell", "Leslie Mann", "Diane Kruger", "Falk Hentschel", "Janelle Monáe", "Eiza Gonzalez", "Gwendoline Christie"],
		genres: ["Fantasy", "Drama"]
	},{ 
		title: "Holmes and Watson",
		year: 2018,
		cast: ["Will Ferrell", "John C. Reilly", "Rebecca Hall", "Ralph Fiennes", "Rob Brydon", "Kelly Macdonald", "Lauren Lapkus", "Hugh Laurie"],
		genres: ["Action", "Mystery", "Comedy"]
	},{ 
		title: "On the Basis of Sex",
		year: 2018,
		cast: ["Felicity Jones", "Armie Hammer", "Justin Theroux", "Jack Reynor", "Cailee Spaeny", "Sam Waterston", "Kathy Bates"],
		genres: ["Biography", "Drama"]
	},{ 
		title: "Destroyer",
		year: 2018,
		cast: ["Nicole Kidman", "Tatiana Maslany", "Sebastian Stan", "Toby Kebbell", "Scoot McNairy"],
		genres: ["Crime", "Thriller"] 
	}
]

module.exports = {
	movies, generate_users, generate_users_callback
};