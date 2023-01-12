function shout(name) {
	return name.toUpperCase();
}

function whisper(name) {
	return name.toLowerCase();
}

function logShout(name) {
	console.log(shout(name));
}

function logWhisper(name) {
	console.log(whisper(name));
}

function sayHiToHeadphonedRoommate(word) {
	if (word == word.toLowerCase()) {
		return "I can't hear you!";
	} else if (word == word.toUpperCase()) {
		return "YES INDEED!";
	} else if (word == "Let's have dinner together!") {
		return "I would love to!";
	}
 }
 
 function sayHiToGrandma(word) {
	 	if (word == word.toLowerCase()) {
		return "I can't hear you!";
	} else if (word == word.toUpperCase()) {
		return "YES INDEED!";
	} else if (word == "I love you, Grandma.") {
		return "I love you, too."
	}
 }