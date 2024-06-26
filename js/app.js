console.log('Linked.')

const body = document.body

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')
	// 1. create a section tag with an id of middle-earth
	const section = document.createElement('section')
	section.id = 'middle-earth'
	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const article = document.createElement('article')
		//   2b. gives each land article an `id` tag of the corresponding land name
		article.id = lands[i]
		//   2c. includes an h1 with the name of the land inside each land article
		const h1 = document.createElement('h1')
		h1.innerText = lands[i]
		article.appendChild(h1)
		//   2d. appends each land to the middle-earth section
		section.appendChild(article)
	}
	// 3. append the section to the body of the DOM.
	body.appendChild(section)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	const ul = document.createElement('ul')
	ul.classList.add('hobbits-ul')
	// display an `unordered list` of hobbits in the shire
	for (let i = 0; i < hobbits.length; i++) {
		// give each hobbit a class of `hobbit`
		const li = document.createElement('li')
		li.classList.add('hobbit')
		li.innerText = hobbits[i]
		ul.appendChild(li)
	}
	const theShire = document.getElementById('The-Shire')
	theShire.appendChild(ul)
	// hint: create a 'ul' outside the loop into which to append the 'li's
	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	// create a div with an id of `'the-ring'`
	const div = document.createElement('div')
	div.id = 'the-ring'
	// give the div a class of `'magic-imbued-jewelry'`
	div.classList.add('magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	const frodo = document.querySelector('.hobbit')
	frodo.appendChild(div)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	const ul = document.createElement('ul')
	ul.classList.add('baddies-ul')
	// display an unordered list of baddies in Mordor
	for (let i = 0; i < baddies.length; i++) {
		// give each of the baddies a class of "baddy"
		const li = document.createElement('li')
		li.classList.add('baddy')
		li.innerText = baddies[i]
		ul.appendChild(li)
	}
	const mordor = document.querySelector('#Mordor')
	mordor.appendChild(ul)
	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')
	const aside = document.createElement('aside')
	aside.classList.add('rivendell-aside')
	// create an `aside` tag
	const ul = document.createElement('ul')
	ul.classList.add('buddies-ul')
	// put an `unordered list` of the `'buddies'` in the aside
	for (let i = 0; i < buddies.length; i++) {
		const li = document.createElement('li')
		li.classList.add('buddy')
		li.innerText = buddies[i]
		ul.appendChild(li)
	}
	aside.appendChild(ul)
	const rivendell = document.querySelector('#Rivendell')
	rivendell.appendChild(aside)
	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	// grab the shire container and the hobbits ul
	const theShire = document.querySelector('#The-Shire')
	const hobbitsUl = document.querySelector('.hobbits-ul')
	// console.log(hobbitsUl)
	// remove the hobbits ul from the shire container
	theShire.removeChild(hobbitsUl)
	// grab the rivendell aside
	const rivendellAside = document.querySelector('.rivendell-aside')
	// append the hobbits ul to the rivendell aside
	rivendellAside.appendChild(hobbitsUl)
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	// grab strider from the buddies list
	const buddies = document.querySelectorAll('.buddy')
	// console.log(buddies)
	const strider = buddies[3]
	// console.log(strider)
	// change innerText to Aragorn
	strider.innerText = 'Aragorn'
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const rivendell = document.querySelector('#Rivendell')
	const div = document.createElement('div')
	div.id = 'the-fellowship'
	const hobbits = document.querySelectorAll('.hobbit')
	console.log(hobbits)
	const buddies = document.querySelectorAll('.buddy')
	console.log(buddies)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	hobbits.forEach((hobbit) => {
		div.appendChild(hobbit)
		// alert(`${hobbit.innerText} has joined the party`)
	})
	buddies.forEach((buddy) => {
		div.appendChild(buddy)
		// alert(`${buddy.innerText} has joined the party`)
	})
	// after each character is added make an alert that they // have joined your party
	rivendell.appendChild(div)
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalf = document.querySelector('.buddy')
	gandalf.innerText = 'Gandalf the White'
	gandalf.style.backgroundColor = 'white'
	gandalf.style.border = '3px solid grey'
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	// alert('The horn of Gondor has been blown!!!')
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	const fellowship = document.querySelector('#the-fellowship')
	const buddies = document.querySelectorAll('.buddy')
	const boromir = buddies[4]
	// console.log(boromir)
	// console.log(fellowship)
	fellowship.removeChild(boromir)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const ringbearers = document.createElement('div')
	ringbearers.classList.add('ringbearers')
	const fellowship = document.querySelector('#the-fellowship')
	const hobbits = document.querySelectorAll('.hobbit')
	const frodo = hobbits[0]
	const sam = hobbits[1]
	fellowship.removeChild(frodo)
	fellowship.removeChild(sam)
	ringbearers.appendChild(frodo)
	ringbearers.appendChild(sam)
	const mordor = document.querySelector('#Mordor')
	mordor.appendChild(ringbearers)
	const mountDoom = document.createElement('div')
	mountDoom.classList.add('mount-doom')
	mordor.appendChild(mountDoom)
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div')
	gollum.id = 'gollum'
	const ringbearers = document.querySelector('.ringbearers')
	// console.log(ringbearers.firstChild)
	const frodo = ringbearers.firstChild
	const theRing = document.querySelector('#the-ring')
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	frodo.removeChild(theRing)
	gollum.appendChild(theRing)
	// Move Gollum into Mount Doom
	const mountDoom = document.querySelector('.mount-doom')
	mountDoom.appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
	const gollum = document.getElementById('gollum')
	gollum.remove()
	const hobbits = document.querySelectorAll('.hobbit')
	console.log(hobbits)
	const theShire = document.getElementById('The-Shire')
	for (let i = 0; i < hobbits.length; i++) {
		theShire.appendChild(hobbits[i])
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
