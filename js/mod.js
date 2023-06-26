let modInfo = {
	name: "Tuba's Tree 2",
	id: "tt2official",
	author: "randomtuba",
	pointsName: "tubas",
	modFiles: ["layers.js", "tree.js", "side-layers.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "The First Update!",
}

let changelog = `<h1>Tuba's Tree 2 Changelog</h1><br><span style="color:red;"><b>WARNING: SPOILERS!</b></span><br><br>
	<h3>v0.1: The First Update! (6/25/2023)</h3><br>
		- Added Prestige.<br>
    - Added Ascension.<br>
    - Added Transcension.<br>
    - Added 26 Achievements.<br>
    - Added 4 Skills.<br>
    - Added Tokens.<br>
    - Added Shards and 3 Shard Generators.<br>
    - Added Boosters.<br>
    - Added some pre-Prestige stuff.`

let winText = `@randomtuba You litte f**ker<br>You made a shit of piece with your trash rewrite it's f**King Bad this trash game I will become back my money I hope you will in your next time a cow on a trash farm you sucker`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = buyableEffect("n",11)
  gain = gain.mul(buyableEffect("n",12))
  gain = gain.mul(buyableEffect("n",13))
  if(hasUpgrade("n",11)) gain = gain.mul(5)
  if(hasUpgrade("p",11)) gain = gain.mul(upgradeEffect("p",11))
  if(hasUpgrade("p",12)) gain = gain.mul(3)
  if(hasUpgrade("p",13)) gain = gain.mul(upgradeEffect("p",13))
  if(hasUpgrade("p",21)) gain = gain.mul(1e10)
  if(hasUpgrade("p",22)) gain = gain.mul(upgradeEffect("p",22))
  gain = gain.mul(buyableEffect("p",12))
  if(hasUpgrade("p",23)) gain = gain.mul(upgradeEffect("p",23))
  gain = gain.mul(buyableEffect("a",11))
  gain = gain.mul(shardEffect())
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
  "Current Endgame: 1e12,000 tubas",
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e12000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}