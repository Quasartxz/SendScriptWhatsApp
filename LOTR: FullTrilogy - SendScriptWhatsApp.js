async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
TITLE: New Line Cinema Presents
TITLE: A Wingnut Films Production
ELVISH SINGING.
A WOMAN’S VOICE IS whispering, tinged with SADNESS and REGRET:
GALADRIEL (V.O.)
Elvish: subtitled
“I amar presten aen: han mathon ne nen, han mathon ne chae a han noston ned wilith.”
English:
The world is changed: I feel it in the water, I feel it in the earth, I smell it in the air. Much that once was is lost, for none now live who remember it.
title: THE LORD OF THE RINGS
EXT. PROLOGUE - DAY
IMAGE: FLICKERING FIRELIGHT. The NOLDORIN FORGE in EREGION.
MOLTEN GOLD POURS from the lip of an IRON LADLE.
GALADRIEL (V.O.)
It began with the forging of the Great Rings.
IMAGE: THREE RINGS, each set with a single GEM, are received by the HIGH ELVES - GALADRIEL, GIL-GALAD and CIRDAN.
GALADRIEL (V.O.)
Three were given to the Elves: immortal, wisest, fairest of all beings.
IMAGE: SEVEN RINGS held aloft in triumph by the DWARF LORDS.
GALADRIEL (V.O.)
Seven to the Dwarf Lords: great miners and craftsmen of the mountain halls.
IMAGE: NINE RINGS clutched tightly by the KINGS OF MEN as if holding-close a precious secret.
GALADRIEL (V.O.)
And Nine - nine rings were gifted to the race of Men, who above all else desire power.
GALADRIEL (V.O.)
For within these rings was bound the strength and the will to govern each race.
FADE TO BLACK
GALADRIEL (V.O.)
But they were all of them deceived.
FADE UP: An ancient PARCHMENT MAP of MIDDLE EARTH moving slowly across the MAP as if drawn by an unseen force the CAMERA closes in on a PLACE NAME - MORDOR.
GALADRIEL (V.O.)
-- for another Ring was made.
TEASING SHOTS: SAURON forging the ONE RING in the CHAMBERS of SAMMATH NAUR.
GALADRIEL (V.O.)
In the land of Mordor, in the fires of Mount Doom, the Dark Lord Sauron forged in secret a Master Ring to control all others.
IMAGE: The ONE RING reflecting the FIERY LAVA! FIRE WRITING emerges on the plain BAND OF GOLD.
GALADRIEL (V.O.)
-- and into this Ring he poured his cruelty, his malice and his will to dominate all life.
IMAGE: THE ONE RING falls through SPACE and into flames.
GALADRIEL (V.O.)
One Ring to rule them all.
IMAGE: A GREAT SHADOW falls across the MAP closing in around the realm of GONDOR.
IMAGE: SCREAMING VILLAGERS, MEN, WOMEN, AND CHILDREN, RUN from their homes, pursued by ARMIES OF HIDEOUS ORCS.
GALADRIEL (V.O.)
One by one the Free lands of Middle earth fell to the power of the Ring.
FADE TO BLACK.
GALADRIEL (V.O.)
But there were some who resisted.
FADE UP: ISILDUR, son of the KING OF GONDOR, leads an ARMY ACROSS the PLAINS OF DAGORLAD.
GALADRIEL (V.O.)
A last alliance of Men and Elves marched against the armies of Mordor. On the slopes of Mount Doom, they fought for the freedom of Middle-Earth.
TEASING SHOTS: THE BATTLE OF DAGORLAD. THE ELF LORD, ELROND, commands rack after rank of ELVEN ARCHERS.
ELROND
Elvish
Tangado haid! Leithio i philinn!
English
Hold positions! Fire the arrows!
TEASING SHOTS: ARROWS FIRING. ORCS RETREATING before the ARMY of the LAST ALLIANCE. ELENDIL, KING OF GONDOR, holds aloft the great SWORD NARSIL!
GALADRIEL (V.O.)
Victory was near!
IMAGES: THE HUGE, DARK FIGURE OF SAURON, bearing the ONE RING on his finger, looms over the field of battle.
GALADRIEL (V.O.)
But the power of the Ring could not be undone.
IMAGE: SAURON lays waste to the armies of the LAST ALLIANCE.
With desperate courage, ELENDIL leads a charge THE BLACK MACE OF SAURON LASHES OUT!!
IMAGE: ELENDIL’S body falls like a crumpled rag doll.
IMAGE: ISILDUR cradles the body of his father in his arms. The SHADOW OF SAURON falls over him.
GALADRIEL (V.O.)
It was in this moment when all hope had faded, that Isildur, son of the king, took up his father's sword.
ISILDUR snatches up the BROKEN BLADE OF NARSIL. The BLADE severs SAURON’S FINGERS AND THE ONE RING FLIES from his body.
GALADRIEL (V.O.)
Sauron, the enemy of the Free Peoples of Middle-Earth, was defeated.
SAURON’S ARMOUR clatters to the ground, his body GONE. VAPORIZED!
CLOSE ON: ISILDUR picks up the SEVERED FINGER and removes the ONE RING transfixed!
GALADRIEL (V.O.)
The Ring passed to Isildur who had this one chance to destroy evil forever.
IMAGE: GLADDEN FIELD. ISILDUR leads a small column of MEN through DARKENING WOODS, the ONE RING glinting on a CHAIN around his neck.
GALADRIEL (V.O.)
But the hearts of Men are easily corrupted. And the Ring of Power has a will of its own.
SUDDENLY! ARROWS FLY! They are ambushed by ORCS. ISILDUR is THROWN from his HORSE!
ISILDUR stumbles to his feet and in a PANIC, puts on the the RING and DISAPPEARS!
INVISIBLE ISILDUR flees from the BATTLE and jumps into the RIVER ANDUIN.
ISILDUR MATERIALIZES UNDER WATER as the RING slips slowly from his finger. He grasps for it, desperately.
ORCS on the RIVERBANK spot him in the WATER. They fire a BARRAGE OF ARROWS into him.
ISILDUR JERKS. Ripples of light play across ISILDUR’S PALE FACE, he is DEAD.
GALADRIEL (V.O.)
It betrayed Isildur to his death.
IMAGE: ISILDUR floats down the RIVER, ARROWS lodged in his back.
IMAGE: THE RING falls through the MURKY WATERS of the RIVER ANDUIN and into OBLIVION.
GALADRIEL (V.O.)
And some things that should not have been forgotten were lost.
FADE TO BLACK
GALADRIEL (V.O.)
Thus a Third Age of Middle-Earth began. History became legend, legend became myth.
FADE UP: The waters of the ANDUIN RIVER lie dark and undisturbed.
GALADRIEL (V.O.)
And for two and a half thousand years, the Ring passed out of all knowledge.
IMAGE: SILT SWIRLS. A THIN WHITE HAND reaches down, grasping the RING.
GALADRIEL (V.O.)
Until, when chance came, it ensnared a new bearer.
IMAGE: THE THIN WHITE HAND opens to reveal the ONE RING.
GOLLUM (V.O.)
My Precious --
IMAGE: MIST SHROUDED MOUNTAINS.
GALADRIEL (V.O.)
The Ring came to the creature Gollum, who took it deep into the tunnels of the Misty Mountains.
IMAGE: THE GLOOM of a MOUNTAIN CAVERN, a MURKY POOL of WATER, in the DARKNESS the SHADOWY OUTLINE of an EMACIATED FIGURE.
GALADRIEL (V.O.)
And there it consumed him.
A RASPY VOICE mutters in the half light.
GOLLUM
It came to me. My own. My love --
ecstatic whisper
My preciousness.
GALADRIEL (V.O.)
The Ring gave to Gollum unnatural long life. For five hundred years it poisoned his mind. And in the gloom of Gollum's cave --
FADE TO BLACK
GALADRIEL (V.O.)
It waited.
FADE UP: Bathed in COLD MOONLIGHT, the WORLD lies DARK and STILL, the unsettled quiet before the storm.
GALADRIEL (V.O.)
Darkness crept back into the forests of the world. Rumor grew of a Shadow in the East whispers of a nameless fear. And the Ring of Power perceived its time had now come. It abandoned Gollum.
SLOW MOTION: Unseen by its KEEPER, THE RING falls to the MUDDY FLOOR of a MOUNTAIN TUNNEL.
GALADRIEL (V.O.)
But something happened then the Ring did not intend --
FADE TO BLACK
IMAGE: FUMBLING in the dark, a SMALL HAND closes over the RING.
GALADRIEL (V.O.)
It was picked up by the most unlikely creature imaginable --
BILBO
to himself
What’s this?
A YOUNGISH LOOKING BILBO BAGGINS peers down at what lies in his hand. PERPLEXED by what he has found.
GALADRIEL (V.O.)
A Hobbit. Bilbo Baggins of the Shire.
BILBO
surprised
A Ring.
SUDDENLY! A VOICE SCREAMS. ITS ANGUISH RINGING through the COLD, DANK TUNNELS.
GOLLUM (V.O.)
Lost! Lost! My Precious is lost!!
Frightened, BILBO quickly POCKETS the ONE RING and hurries on.
DISSOLVE TO:
WIDE ON: THE CAMERA SOARS AWAY FROM THE MOUNTAINS. MOVING FASTER AND FASTER THEIR DARK GREEN FORESTS AND JAGGED WHITE PEAKS RECEDING INTO THE SHROUD OF MIST
GALADRIEL (V.O.)
For the time will soon come when Hobbits will shape the fortunes of all.
DISSOLVE TO:
CLOSE ON: A MAP OF MIDDLE-EARTH. WE MOVE from the MISTY MOUNTAINS to HOBBITON.
BILBO (V.O.)
The 22nd day of September in the year 1400 by Shire-reckoning. Bag End, Bagshot Row, Hobbiton, Westfarthing, the Shire, Middle-earth. The Third Age of this world.
PULL BACK ON THE MAP TO REVEAL:
INT. BAG END HALLWAY - DAY
ANGLES ON: The MAP rests on the floor with several other MAPS, BOOKS, SCROLLS, and other similar items of research.
CAMERA TRACKS: Down through the hall, we find BAG END shares this DECOR throughout its modest halls.
TITLE: THE FELLOWSHIP OF THE RING
INT. BAG END STUDY - DAY
ANGLE ON: BILBO sits at his DESK, PEN IN HAND.
BILBO
There and Back Again: A Hobbit’s Tale by Bilbo Baggins.
CLOSE ON: the book. The lettering on the page reads exactly as BILBO has dictated. He turns the next page, which is blank.
ANGLE ON: BILBO considers his words carefully.
BILBO
Now, where to begin? Ah yes --
CLOSE ON: BILBO dips his pen in the ink, and begins writing.
BILBO
“Concerning Hobbits.”
EXT. HOBBITON - DAY
WIDE ON: The small VILLAGE OF HOBBITON is a quaint rustic settlement nestled amongst rolling green hills and large trees.
The HOBBITS live in HOBBIT HOLES: neat burrows dug into the grassy hillside, with round doors and cute front gardens.
MONTAGE OF SHOTS UNDER BILBO: HOBBITS plowing fields, smoking pipes, serving food, woodworking, leading pigs, milking cattle, tidying their porches and of course, sleeping.
BILBO (V.O.)
“Hobbits have been living and farming in the four Farthings of the Shire for many hundreds of years, quite content to ignore and be ignored by the world of the Big Folk. Middle-earth being, after all, full of strange creatures beyond count, Hobbits must seem of little importance being neither renowned as great warriors nor counted among the very wise.”
END MONTAGE
INT. BAG END STUDY - DAY
ANGLE ON: BILBO laughs. HE TURNS TO a KNOCK at the door.
WIDE ON: BILBO in his study.
BILBO
calling out
Frodo! Someone at the door.
ANGLE ON: BILBO turns immediately back to his WRITING.
EXT. HOBBITON - DAY
IMAGE: A HOBBIT, when faced with a decision between a KISS from his SWEETHEART and a MUFFIN, chooses the MUFFIN.
BILBO (V.O.)
“In fact, it has been remarked by some that Hobbits’ only real passion is for food.
IMAGE: A HOBBIT carries a BARREL OF ALE on his SHOULDER, refilling his MUG as he walks.
BILBO (V.O.)
“A rather unfair observation as we have also developed a keen interest in the brewing of ales.
IMAGE: Several HOBBITS sit around SMOKING PIPES.
BILBO (V.O.)
-- and the smoking of pipe-weed."
IMAGE: HOBBITS carry their fresh picked crops. HOBBITS engaged in a leisurely game. HOBBITS GARDENING.
BILBO (V.O.)
“But where our hearts truly lie is in peace and quiet and good, tilled earth."
IMAGE: SAMWISE GAMGEE sits in front of his house, admiring his flowers.
BILBO (V.O.)
“For all Hobbits share a love of things that grow."
IMAGE: Near a large, old tree, HOBBITS raise BANNERS AND TENTS.
Others bring in BARRELS OF ALE.
BILBO (V.O.)
“And, yes, no doubt to others, our ways seem quaint. But today of all days, it is brought home to me: It is no bad thing to celebrate a simple life.”
IMAGE: The HOBBITS raise a large banner that reads: “Happy Birthday Bilbo Baggins.” Others applaud.
INT. BAG END STUDY - DAY
ANGLE ON: BILBO looking up, annoyed at yet another KNOCK to interrupt him.
BILBO
Frodo, the door!
His CALL is met with SILENCE.
BILBO
Sticklebacks. Where is that boy?
EXT. HOBBITON WOODS - DAY
ANGLE ON: TWO HOBBIT FEET resting on a small rock, rising out of the LONG, OVERGROWN GRASSES.
BILBO (O.S.)
Frodo!
CAMERA TRACKS TO: A figure lies beneath the dappled sunlight of an old tree. White flowers are scattered among the WELL seeded grasses. An idyllic setting at the end of a long hot summer, the figure is reading a book.
ON THE SOUNDTRACK: In the distance, growing louder over the GENTLE CLIP CLOP of an approaching cart and horse can be heard the HUMMING OF A DEEP VOICE to the tune of “The Road Goes Ever On and On.”
SUDDENLY! The figure in the grass sits up, looking straight at CAMERA is a handsome young HOBBIT, with dark curly hair and deep blue eyes. This is FRODO BAGGINS, his EYES alight with EXCITEMENT! Tossing away the long stem of grass in his mouth, FRODO runs off.
CUT TO:
EXT. SHIRE LANE - DAY
The cart rattles along a leafy lane, driven by a stooped figure in GREY.
INTERCUT WITH:
SHOTS OF FRODO RUNNING CAREENING DOWN A HILL, JUMPING OVER LOGS, DODGING TREE BRANCHES.
ANGLE ON: The shambling OLD PONY snorts and rears as --
SUDDENLY FRODO appears on the bank above the cart.
FRODO
You're late.
CLOSE ON: GANDALF glowers at the young HOBBIT.
GANDALF
A wizard is never late, Frodo Baggins, nor is he early. He arrives precisely when he means to.
They look at each other for a moment, then both start laughing as FRODO’S face breaks into a smile and he leaps on to the front seat of the cart.
FRODO
It's wonderful to see you, Gandalf!
Next to GANDALF, we see how small HOBBITS are. FRODO is 3 foot 6 inches tall.
GANDALF
You didn't think I'd miss your Uncle Bilbo’s birthday?
CUT TO:
EXT. HOBBITON FIELDS - DAY
WIDE ON: The cart rattles past a FIELD LUPIN being tended by HOBBITS.
FRODO
What's new in the world? Tell me everything.
ANGLE ON: GANDALF looks down at FRODO, a twinkle in his eye.
GANDALF
What, everything? Far too eager and curious for a Hobbit. Most unnatural. Well, what can I tell you? Life in the wide world goes on much as it has this past age. Full of its own comings and goings, scarcely even aware of the existence of Hobbits --
CLOSE ON: GANDALF as he surveys the peaceful scene before him.
GANDALF
-- for which I am very thankful. So, how is the old rascal? I hear this is to be a party of special magnificence.
FRODO
You know Bilbo. He’s got the whole place in an uproar.
GANDALF
Well, that should please him.
FRODO
Half the Shire’s been invited. And the rest of them are turning up anyway.
WIDE ON: The cart rattles over a stone bridge towards a BUSY HOBBIT MARKETPLACE.
BILBO (V.O.)
And so life in the Shire goes on very much as it has this past age full of its own comings and goings, with change coming slowly --
ANGLE ON: HOBBITS look up in wonder and excitement as the cart bearing GANDALF and FRODO rolls past the GREEN DRAGON INN.
BILBO (V.O.)
-- if it comes at all. For things are made to endure in the Shire passing from one generation to the next.
CRANE UP: As the cart rattles into the small village of HOBBITON, a quaint rustic settlement, nestled amongst rolling green hills and large trees.
BILBO (V.O.)
There’s always been a Baggins living here under the Hill in Bag End.
INT. BAG END STUDY - DAY
ANGLE ON: BILBO stops writing again and looks up, thoughtful.
BILBO
And there always will be.
EXT. HOBBITON FIELDS - DAY
ANGLE ON: GANDALF and FRODO continuing for their destination.
FRODO
To tell you the truth, Bilbo’s been a bit odd lately. I mean, more than usual. He’s taken to locking himself in his study.
INT. BAG END STUDY - DAY
CLOSE ON: BILBO picks up a MAP of Middle Earth.
FRODO (V.O.)
He spends hours poring over old maps when he thinks I’m not looking.
ANGLE ON: BILBO folds the map and puts it down. He pats his pants pockets. Suddenly, he looks worried. He pulls his pockets inside.
BILBO
worried
Where’s it gone?
QUICK CUTS: BILBO desperately searches for something under cushions, in pockets, through coats.
ANGLE ON: He shoves his hands into his vest pockets, and stops relieved.
CLOSE ON: He removes his hand from his pocket, his missing item clenched tightly in his fist, he holds it to his mouth, grateful to have not lost it.
CUT TO:
EXT. HOBBITON FIELDS - DAY
FRODO
He's up to something.
FRODO shoots a knowing look, as GANDALF averts his eyes.
FRODO
All right, then, keep your secrets.
GANDALF
What?
FRODO
But I know you have something to do with it.
GANDALF
Good gracious, me.
FRODO
Before you came along, we Bagginses were very well thought of.
GANDALF
Indeed?
FRODO
Never had any adventures or did anything unexpected.
GANDALF
If you're referring to the incident with the Dragon I was barely involved, all I did was give your uncle a little nudge out the door.
FRODO
Whatever you did, you’ve been officially labeled a disturber of the peace.
GANDALF
Oh, really?
ANGLE ON: ODO PROUDFOOT looks up as the CART passes by, deeply suspicious.
CUT TO:
EXT. HOBBITON - DAY
CRANE UP: EXCITED CHILDREN, chasing after the cart.
CLOSE ON: GANDALF ignores the children’s cries. The children stand deflated, watching GANDALF disappear up the lane.
AT THAT MOMENT: spinning balls of bright color suddenly leap out of the cart, fizzing over the heads of the delighted children.
ANGLE ON: GANDALF smiling to himself, well pleased with his joke.
ANGLE ON: ODO PROUDFOOT is unable to suppress a chuckle.
FRODO stands up in the cart as GANDALF reigns in the HORSE.
FRODO
Gandalf -- I'm glad you're back.
FRODO leaps expertly from the cart. GANDALF smiles.
GANDALF
So am I, dear boy -- so am I.
CUT TO:
EXT. BAG END - DAY
WIDE ON: GANDALF’S CART pulls up outside the gate to BAG END, a particularly fine example of a HOBBIT HOLE, with a large round front door set into a grassy hillside. There is a sign on the gate which reads: “NO ADMITTANCE EXCEPT ON PARTY BUSINESS.”
GANDALF strides up the garden path of BAG END. He raises his staff and raps on the front door, a voice calls out:
BILBO (O.S.)
No thank you! We don't want any more visitors, well-wishers, or distant relations.
GANDALF
And what about very old friends?
Suddenly the door opens and BILBO BAGGINS stands before him. He is a HOBBIT OF INDETERMINATE AGE, with a mischievous TWINKLE in his eye. Wearing a dashing brocade waistcoat, he look every inch the eccentric gentleman.
BILBO
Gandalf?
GANDALF
Bilbo Baggins!
BILBO
My dear Gandalf!
GANDALF drops to his knee to embrace his old friend.
GANDALF
Good to see you. One hundred and eleven years old, who would believe it?
GANDALF looks at him more keenly.
GANDALF
You haven't aged a day.
GANDALF and BILBO laugh together and enter BAG END.
BILBO
Come on, come in! Welcome, welcome!!
CUT TO:
INT. BAG END LIVING ROOM - DAY
BILBO leads GANDALF into BAG END, cozy and cluttered with souvenirs of BILBO’S travels. GANDALF has to stoop low to avoid hitting his head on the low ceiling.
BILBO hangs up GANDALF’S hat on a peg and trots off down the hall.
BILBO
calling
Tea? Or maybe something a little stronger, I’ve got a few bottle of the old Wi.
BILBO disappears into the kitchen as GANDALF looks around, enjoying the familiarity of BAG END, he turns, knocking his head on the light and then walking into the wooden beam. He GROANS.
BILBO
I was expecting you last week. Not that it matters, you come and go as you please, always have done, always will. You’ve caught me a bit unprepared, I’m afraid we’ve only got cold chicken, bit of pickle, some cheese here, ooh, no, that might be a little risky.
GANDALF stops in front of a framed map, charred in one corner, it is Thorin’s map of the LONELY MOUNTAIN. GANDALF smiles to himself.
BILBO
Er, we’ve got raspberry jam and apple tart, got some custard somewhere. Not much for Afters, I’m afraid. Oh no, we’re alright, I’ve just found some sponge cake. Nice little snack. Hope it’s enough.
comes into view
I could make you some eggs if you’d like?
BILBO jumps, a half eaten pork pie in his hand, as GANDALF mysteriously appears behind him.
GANDALF
Just tea, thank you.
BILBO
Oh, right. You don’t mind if --?
GANDALF
No, not at all. Go ahead.
A SUDDEN LOUD KNOCK ON THE FRONT DOOR.
LOBELIA (O.S.)
Bilbo Baggins, you open this door --
BILBO
I'm not home.
BILBO tiptoes to the window and peeps out.
BILBO
whispers
It’s the Sackville-Bagginses!
LOBELIA (O.S.)
I know you’re in there!
BILBO
whispers
They’re after the house. They’ve never forgiven me for living this long!
GANDALF watches, amused, as BILBO tries to hide.
BILBO
I’ve got to get away from these confounded relatives, hanging on the bell all day, never giving me a moment's peace. I want to see mountains again, mountains, Gandalf, and then find somewhere quiet where I can finish my book, oh, Tea!
GANDALF
So, you mean to go through with your plan, then?
BILBO
Yes, yes, it’s all in hand. All the arrangements are made.
GANDALF
Frodo suspects something.
BILBO
‘Course he does, he's a Baggins, not some blockheaded Bracegirdle from Hardbottle!
GANDALF
You will tell him, won't you?
BILBO
Yes, yes.
GANDALF
He’s very fond of you.
BILBO
I know. He’d probably come with me if I asked him. I think, in his heart, Frodo’s still in love with the Shire, the woods and the fields, little rivers.
BILBO stands gazing out of the kitchen window.
BILBO
I am old, Gandalf.
BILBO looks at GANDALF sadly.
BILBO
I know I don’t look it, but I’m beginning to feel it in my heart.
CLOSE ON: BILBO’S fingers close around his waistcoat pocket, gripping a small, unseen object.
BILBO
I feel thin, sort of stretched, like butter scraped over too much bread. I need a holiday, a very long holiday and I don’t expect I shall return, in fact, I mean not to.
CUT TO:
INT. BAG END - EVENING
GANDALF and BILBO are sitting on the BAG END porch. BELOW THEM, final preparations are being made on the PARTY field. BILBO strikes a match and lights his pipe.
BILBO
Old Toby. The finest weed in the Southfarthing!
BILBO blows a perfect smoke ring and watches it rise into the air. A tiny sailing ship with masts and sails glides through the CENTER of BILBO’S smoke ring.
BILBO
Ohhhh.
smiles
Gandalf, my old friend, this will be a night to remember.
CUT TO:
EXT. PARTY FIELD - HOBBITON - NIGHT
BOOM! A FIREWORK explodes into the night sky high above HOBBITON in the shape of a great green tree with unfolding branches.
TILT DOWN: with glowing flowers as they rain down from the branches evaporating just above the upturned faces of the delighted party-goers.
144 HOBBITS, feasting and drinking CARTS of beer and wine are scattered about, and the tables are piled high with steaming scones and savories.
GANDALF hurries about, lighting fireworks with a blue spark that dances magically from his staff, BILBO is greeting visitors.
BILBO
Hello, hello, Fatty Bolger, lovely to see you! Welcome, welcome!
FRODO and SAM sit at a table drinking ale. FRODO notices SAM’S eyes keep flicking to another pretty HOBBIT, ROSIE COTTON, sitting some distance away.
FRODO
Go on, Sam, ask Rosie for a dance.
SAM
horrified
I think I'll just have myself another ale.
FRODO
Oh, no you don't. Go on.
SAM goes to drain his glass, suddenly it is snatched out of his hands as FRODO thrusts him into the middle of a passing throng of dancers.
ANGLE ON: SAM’S HORRIFIED FACE as he is SWEPT away. FRODO laughs and finishes SAM’S beer.
ANGLE ON: GANDALF as he sets alight a particularly spectacular firework that draws gasps of admiration from the party guests.
CLOSE ON: BILBO is relating stories of his adventure to a group of YOUNG HOBBIT CHILDREN.
BILBO
melodramatic
So there I was at the mercy of three monstrous trolls. Have you ever heard of a Troll? Do you know what a Troll is? Great big nasty twenty foot high smelly things and they’re arguing -- arguing about how they were going to cook us!
ANGLE ON: A LITTLE HOBBIT GIRL’S upturned face, her eyes growing larger and larger.
BILBO
Whether it be turned on a spit or minced in a pie or whether they were going to sit on us one by one and squash us into jelly! They spent so long arguing the whither-to’s and why-for’s that the sun’s first light cracked over the top of the trees and turned them all to stone!
STUNNED GASPS from his young AUDIENCE greet his astonishing feat!
CLOSE ON: MERRY and PIPPIN, two mischievous YOUNG HOBBITS in their late teens. PIPPIN scrambles onto the back of GANDALF’S wagon, snatching up a small firework.
MERRY
No, no -- the big one -- the big one!
PIPPIN grabs a huge rocket. MERRY smiles. The pair runs off with it.
ANGLE ON: BILBO continues to greet his guests. He shakes hands with a woman who is tailed by an overwhelming crowd of CHILDREN.
BILBO
Mrs. Bracegirdle, how nice to see you! Welcome, welcome. Are all these children yours?
MRS. BRACEGIRDLE laughs with tired eyes and nods.
BILBO
Good gracious, you have been productive.
MRS. BRACEGIRDLE laughs and nods.
SUDDENLY! Bilbo’s ears are assailed by a familiar strident VOICE.
LOBELIA (O.S.)
Bilbo?
BILBO quickly runs to FRODO.
BILBO
panicked
Sackville-Bagginses! Quickly! Hide!
BILBO and FRODO quickly hide behind the wall of a tent.
ANGLE ON: OTHO AND LOBELIA SACKVILLE-BAGGINS, an older, grumpy-looking pair with sharp eyes emerge and look about the party like vultures searching for prey.
ANGLE ON: BILBO breathes a huge sigh of relief.
BILBO
Thank you, my boy.
ANGLE ON: FRODO chuckles.
BILBO
suddenly serious
You're a good lad, Frodo.
ANGLE ON: FRODO stares at his UNCLE, perturbed by the change of tone.
BILBO
I'm very selfish, you know. Yes, I am -- very selfish. I don't know why I took you in after your mother and father died, but it wasn't out of charity. I think it was because, of all my numerous relations you were the one Baggins that showed real spirit.
FRODO
Bilbo, have you been at the Gaffer's home brew?
BILBO
No. Well, yes. But that's not the point. The point is, Frodo, you'll be all right.
BILBO lifts his mug and takes a drink, probably of the Gaffer’s home brew.
CLOSE ON: FIREWORK FUSE crackles with flame!
ANGLE ON: MERRY is holding out the big rocket, he looks aghst at the fizzing fuse that PIPPIN has just lit.
MERRY
worried whisper
You're supposed to stick it in the ground!
PIPPIN
It is in the ground.
MERRY fearfully tosses the ROCKET to PIPPIN! the fuse sizzles angrily.
MERRY
Outside!
PIPPIN
This was your idea.
PIPPIN attempts to throw the fizzing rocket back to MERRY.
WHOOSH! The two HOBBITS are suddenly blown off their feet in a shower of sparks as the rocket blasts off with frightening power.
ANGLE ON: The ROCKET ZOOMS over the party, it suddenly bursts apart, forming the shape of a great red golden DRAGON! Fire fire gushes from its nostrils as it turns back and FLIES towards the startled crowd.
CLOSE ON: FRODO watches the FIREWORKS DRAGON with alarm but BILBO is oblivious to the PANICKING CROWD and impending danger!
FRODO
Bilbo! Watch out for the dragon!!
BILBO
Dragon? Nonsense. Hasn't been a dragon in these parts for a thousand years!
ANGLE ON: FRODO as he hurriedly pulls BILBO to the ground, just as the dragon roars a few feet above their heads like a flaming express train!
HOBBITS dive to the ground, tables overturn, tents collapse, food flies everywhere.
The FIREWORKS DRAGON turns a somersault and explodes over the hills with a deafening BANG! This gets the biggest cheer of the night.
ANGLE ON: MERRY AND PIPPIN, clothes and hair smoking.
MERRY
That was good!
PIPPIN
Let's get another one!
LARGE HANDS suddenly clamp down on MERRY and PIPPIN’S ears.
LOW ANGLE: GANDALF looking DOWN STERNLY!
GANDALF
Meriadoc Brandybuck, and Peregrin Took -- I might have known!
CUT TO:
MERRY and PIPPIN are leaning over a barrel, washing dishes in soapy water with GANDALF sitting nearby, smoking his pipe and sipping an ale.
Cries of “SPEECH! SPEECH!” erupt from the party.
ANGLE ON: BILBO stepping on a stool, he bows in gratitude at the applause.
FRODO
Speech!
BILBO
clearing his throat
My dear Bagginses and Boffins, Tooks and Brandybucks, Grubbs, Chubbs, Burrowses, Hornblowers, Bolgers, Bracegirdles, Goodbodies, Brockhouses and Proudfoots.
ANGLE ON: A HOBBIT WITH PARTICULARLY BIG FEET
PROUDFOOT
Proudfeet!
BILBO
Proudfoots. Also my good Sackville-Bagginses that I welcome back at last to Bag End.
ANGLE ON: OTHO and LOBELIA scowl at BILBO. He doesn’t care.
BILBO
Today is my one hundred and eleventh birthday. I am eleventy-one today! Yes, and alas. Eleventy-one years is far too short a time to live among such excellent and admirable Hobbits!
Tremendous outburst of approval!
BILBO
I don't know half of you half as well as I should like, and I like less than half of you half as well as you deserve!
SCATTERED CLAPPING as the guests try to work out if that was a compliment or not.
CLOSE ON: FRODO AND GANDALF smiling to themselves.
CLOSE ON: BILBO, a strange HUM seems to fill his head. A bead of sweat rolls down his brow.
BILBO’S hand pulls something out of his waistcoat pocket and holds it behind his back.
BILBO
I have -- things to do and I have put this off for far too long.
CLOSE ON: BILBO’S knuckles turn white as he tightens his grip on the small object behind his back.
BILBO
I regret to announce this is the end. I am going now. I bid you all a very fond farewell!!
BILBO looks across at FRODO, hesitates -- then --
BILBO
whisper
Goodbye.
BILBO instantly vanishes. The party explodes into an uproar, the crowd leaps to its feet.
ANGLE ON: FRODO staring at the empty stool in disbelief.
CUT TO:
EXT. BAG END - NIGHT
The party is still in an excited uproar, some 50 yards away as we PAN across a moonlit lane to the front door of BAG END.
Door opens, pulled by an invisible hand.
INT. BAG END - NIGHT
The door quietly closes. BILBO materializes as he pulls a plain gold ring off his finger. BILBO laughs as he tosses the ring in the air, then places it in his pocket.
ANGLE ON: BILBO emerges from the passage, carrying a walking stick. He finds GANDALF looming over him.
GANDALF
I suppose you think that was terribly clever?
BILBO
Come on, Gandalf. Did you see their faces?
GANDALF
There are many magic rings in this world, Bilbo Baggins, and none of them should be used lightly.
BILBO
It was just a bit of fun. Oh, you’re probably right, as usual.
BILBO
You will keep an eye on Frodo, won't you?
GANDALF
Two eyes. As often as I can spare them.
BILBO
I'm leaving everything to him.
GANDALF
What about this ring of yours? Is that staying too?
CLOSE ON: BILBO, he gives GANDALF a look and nods towards the mantelpiece.
BILBO
Yes, yes, it's in an envelope, over there on the mantelpiece.
GANDALF frowns at the empty mantelpiece. BILBO suddenly feels his waistcoat with a look of guilty surprise.
BILBO
No, wait. It’s here in my pocket. Isn't that, isn’t that odd, now? Yet, after all, why not? Why shouldn't I keep it?
GANDALF
I think you should leave the Ring behind, Bilbo. Is that so hard?
BILBO
Well, no, and yes. Now it comes to it, I don't feel like parting with it. It’s mine. I found it. It came to me!
ANGLE ON: GANDALF LOOKS DOWN AT BILBO WITH RISING CONCERN.
GANDALF
There's no need to get angry.
BILBO
Well, if I'm angry, it's your fault! It's mine. My own, my precious.
GANDALF
Precious? It's been called that before, but not by you.
BILBO
What business is it of yours what I do with my own things?
BILBO’S voice, shape and manner have suddenly changed.
GANDALF
I think you've had that ring quite long enough.
BILBO
You want it for yourself!
GANDALF rises to his full height, his eyes flash, his shadow suddenly seems to fill the room.
GANDALF
Bilbo Baggins, do not take me for some conjurer of cheap tricks!
BILBO cowers from GANDALF, disarmed by his power, a frightened HOBBIT. GANDALF’S expression softens.
GANDALF
I am not trying to rob you. I am trying to help you.
Sobbing, BILBO runs to GANDALF and hugs him.
GANDALF
All your long years we’ve been friends, trust me as you once did. Let it go!
BILBO
You're right, Gandalf. The Ring must go to Frodo.
BILBO lifts his knapsack and heads for the front door.
BILBO
It's late, the road is long, yes, it is time.
GANDALF
Bilbo?
BILBO
Hmmm?
GANDALF
The Ring is still in your pocket.
BILBO hesitates, reaches into his pocket.
BILBO
Oh, yes.
CLOSE ON: BILBO pulls out the ring, he stares at it in his palm. With all his will power, BILBO allows the ring to slowly slide off his palm and drop to the floor.
CLOSE ON: The tiny ring lands with a heavy thud on the wooden floor.
EXT. BAG END - NIGHT
ANGLE ON: BILBO staggering out of BAG END, he braces himself in the night air, PALE and TREMBLING, as if his loss of the ring has weakened him. GANDALF steps up behind.
BILBO
I've thought up an ending for my book. “And he lived happily ever after to the end of his days.”
GANDALF
I'm sure you will, my dear friend.
BILBO
Goodbye, Gandalf.
GANDALF
Goodbye, Bilbo.
BILBO walks away from BAG END, disappearing into the night, softly singing: “The Road goes on and on.”
GANDALF
softly
Until our next meeting.
CUT TO:
INT. BAG END LIVING ROOM - NIGHT
CLOSE ON: THE RING GLINTING on the floor. GANDALF circles around it, a PUZZLED look on his face. GANDALF slowly reaches for the RING. His fingers barely touch the RING, the creepy HUM rises on the SOUNDTRACK.
ANGLE ON: GANDALF is sitting in front of the fire, with his pipe staring into the flickering flames.
BILBO (V.O.)
It's mine, my own, my precious.
GANDALF
to himself
Riddles in the dark.
FRODO (O.S.)
Bilbo! Bilbo!
FRODO rushes into BAG END, he stops and picks up the RING at his feet. GANDALF continues staring into the fire, as if locked in thought.
GANDALF
to himself
My precious -- precious --
FRODO
quietly
He's gone, hasn't he?
FRODO steps into the living room.
FRODO
He talked for so long about leaving. I didn’t think he’d really do it.
GANDALF
mutters to himself
-- my own.
FRODO
Gandalf?
GANDALF turns, his eyes locking onto the RING in FRODO’S fingers.
GANDALF
Bilbo’s ring.
GANDALF sorts hurriedly through BILBO’S papers.
GANDALF
He's gone to stay with the Elves. He's left you Bag End.
GANDALF holds out the envelope. FRODO drops the RING into it.
GANDALF
-- along with all his possessions.
GANDALF seals the envelope with wax. He hands it to FRODO.
GANDALF
The ring is yours now. Put it somewhere out of sight.
GANDALF rises hurriedly and starts to gather his things.
FRODO
Where are you going?
GANDALF
There are things I must to see to.
FRODO
What things?
GANDALF
Questions. Questions that need answering.
FRODO
But you've only just arrived! I don't understand --
GANDALF is already at the door, he turns to FRODO.
GANDALF
Neither do I. Keep it secret, Keep it safe.
GANDALF hurries out the door, leaving FRODO standing alone in BAG END.
ANGLE ON: THE ENVELOPE
THE CAMERA PUSHES IN. THE HUM OF THE RING comes up on the SOUNDTRACK. The CAMERA PUSHES through the white paper to the RING beneath the HUM the whispered murmur of BLACK SPEECH can be heard.
CUT TO:
EXT. BARAD-DÛR - NIGHT
The jagged ruins of BARAD-DÛR. THE DARK TOWER!
TEASING IMAGES: THE HUGE DARK TOWER OF BARAD-DÛR is being rebuilt! Thousands of ORCS crawl over the surface, hauling stone and iron up the towering heights.
GOLLUM (O.S.)
Shire! Baggins!!
CUT TO:
EXT. MINAS MORGUL - NIGHT
NINE BLACK RIDERS burst out of MINAS MORGUL and charge toward CAMERA.
EXT. THE WEST ROAD - GONDOR - DAY
WIDE ON: A LONE HORSEMAN gallops to the crest of a hill on the west road. The main highway south to MINAS TIRITH, he looks toward the saw-toothed mountains of MORDOR.
WIDE ON: MOUNT DOOM. A HUGE, BILLOWING CLOUD OF BLACK FILTH grows and spreads across the red streaked sky, casting a shadowy pall over the nightmarish landscape, seeping out across the blood red sky.
ANGLE ON: GANDALF, his face grave. He spurs his horse on.
CUT TO:
INT. CITADEL - MINAS TIRITH - NIGHT
ANGLE ON: GANDALF making his way down into the lower depths of the CITADEL.
CUT TO:
INT. CITADEL CHAMBER - MINAS TIRITH - NIGHT
CLOSE ON: Pages flipping as GANDALF searches ancient scrolls and books placed high on a wooden table. His eyes settle on one old parchment. He murmurs hurriedly to himself, reading.
GANDALF
reading
The year 3434 of the Second Age here follows the account of Isildur, High King of Gondor, and the finding of the Ring of Power.
DISSOLVE TO:
CLOSE ON: ISILDUR, TRIUMPHANT, REACHES FOR THE ONE RING, HIS EYES FIXATED ON IT.
GANDALF
reading
It has come to me, the Ring of Power! It shall be an heirloom of my kingdom, all those who follow in my bloodline shall be bound to its fate, for I will risk no hurt to the ring, it is precious to me, though I buy it with great pain.
CLOSE ON: ELVISH LETTERING MARKS ON THE FADED OLD DOCUMENT IN GANDALF’S HAND.
GANDALF
reading
The marking on the band begin to fade, the writing which at first was as clear as red flame, has all but disappeared, a secret now that only fire can tell.
CUT TO:
EXT. HOBBIT FARMHOUSE - EVENING
FARMER MAGGOT is chopping wood in his garden.
CLOSE ON: SNORTING HORSE NOSTRILS as the shadow of a BLACK RIDER looms over a HOBBIT HOUSE.
Terrified, FARMER MAGGOT cowers in his doorway. FANGS, his dog, whimpers and backs away.
BLACK RIDER
hissing
Shire? Baggins?
FARMER MAGGOT
terrified
There’s no Bagginses around here! They're all up in Hobbiton that way.
THE BLACK RIDER GALLOPS AWAY AT SPEED.
CUT TO:
INT. GREEN DRAGON - NIGHT
The HOBBITS of HOBBITON are having a grand evening of ale and song.
ANGLE ON: MERRY and PIPPIN, mugs in hand, sing and dance on a table while supporting each other.
ANGLE ON: FRODO retrieves more mugs of ale from the bar and dances around the tavern.
HOBBITS
singing
Hey ho, to the bottle I go! To heal my heart and drown my woe. Rain may fall and wind may blow. But there still be – many miles to go!
Sweet is the sound of the pouring rain, and the stream that falls from hill to plain. Better than rain or rippling brook –
PIPPIN
is a mug of beer inside this Took!
Huge laughter and clinking of mugs.
ANGLE ON: DADDY TWOFOOT, TED SANDYMAN, and SAM’S father, HAM GAMGEE (A.K.A. THE GAFFER), involve themselves in a most serious discussion. SAM sits quietly next to his father.
DADDY TWOFOOT
There's been some strange folk crossing the Shire. Dwarves, and others of a less than savoury nature.
TED SANDYMAN
War is brewing. The mountains are fair teeming with goblins.
ANGLE ON: SAM, smokes his pipe and looks at ROSIE behind the bar. She gives him a huge smile.
GAFFER
Far-off tales and children's stories, that's all that is. You're beginning to sound like that old Bilbo Baggins. Cracked, he was.
TED SANDYMAN
Young Mr. Frodo here, he's cracking!
He laughs as FRODO arrives with drinks.
FRODO
And proud of it. Cheers, Gaffer.
GAFFER
Well, it's none of our concern what goes on beyond our borders. Keep your nose out of trouble, and no trouble'll come to you.
ANGLE ON: FRODO smiles and raises his tankard.
ANGLE ON: ROSIE COTTON bids the last of the PATRONS “Goodnight.” SAM meets her eyes for a moment as he and FRODO leave the inn.
ROSIE
Goodnight, lads.
SAM
Goodnight.
FRODO and SAM continue on their way. Behind them, an intoxicated HOBBIT kneels before ROSIE and raises his arms as if worshipping a goddess.
INTOXICATED HOBBIT
Goodnight, sweet maiden of the golden ale!
SAM
muttering
Mind who you're sweet-talking.
FRODO
Don't worry, Sam. Rosie knows an idiot when she sees one.
SAM stops walking.
SAM
worried
Does she?
CUT TO:
EXT. BAG END - NIGHT
WIDE ON: FRODO FAREWELLS SAM outside BAG END, and heads towards the front door.
CREEPY POV FROM INSIDE BAG END: FRODO coming up the path.
CUT TO:
INT. BAG END LIVING ROOM - NIGHT
ANGLE ON: FRODO enters BAG END, he immediately PAUSES, sensing that something is amiss. All is quiet. FRODO peers uneasily into the darkened living room.
SUDDENLY! A large figure looms out of the shadows, reaching for FRODO. FRODO lets out a startled cry, pulls himself free and spins around to face his ASSAILANT.
GANDALF steps into a shaft of moonlight. Paranoia blazes in his eyes. His clothes are dirty and ragged from much traveling. Hair and beard much longer and unkempt.
GANDALF
urgent whisper
Is it secret? Is it safe?
CUT TO:
INT. BAG END LIVING ROOM - NIGHT
FRODO pulls the envelope out of an old chest. GANDALF, suspicious, ALERT.
Without a word, GANDALF takes the envelope and tosses it into the fireplace!
FRODO
bewildered
What are you doing?
Flames instantly consume the envelope, revealing the RING, as it sinks into the red hot embers. GANDALF reaches into the fire with a pair of tongs, he lifts the RING out.
GANDALF
Hold out your hand, Frodo, it is quite cool.
GANDALF drops the RING into FRODO’S hand, he reacts to its weight.
GANDALF
What can you see? Can you see anything?
FRODO
Nothing -- there's nothing. Wait --
CLOSE ON: THE GOLD BAND of the RING as fiery letters begin to appear, a tiny inscription glows red as if burning from within.
FRODO
-- there are markings.
CLOSE ON: GANDALF -- STILL -- TENSE.
FRODO
It's some form of Elvish. I can't read it.
GANDALF
ominous
There are few who can, the language is that of Mordor, which I will not utter here.
FRODO
Mordor?
GANDALF
In the common tongue, it says: “One Ring to rule them all. One Ring to find them. One Ring to bring them all and in the darkness bind them.”
CUT TO:
INT. BAG END KITCHEN - NIGHT
CLOSE ON: THE RING lies on FRODO’S simple kitchen table.
GANDALF
This is the One Ring, forged by the Dark Lord Sauron, in the fires of Mount Doom taken by Isildur from the hand of Sauron himself.
FRODO
quiet realization
Bilbo found it in Gollum's cave.
GANDALF
Yes. For sixty years, the Ring lay quiet in Bilbo’s keeping, prolonging his life, delaying old age but no longer, Frodo. Evil is stirring in Mordor. The Ring has awoken. It's heard its master's call.
AT THAT MOMENT: A FLEETING, LOW WHISPER OF BLACK SPEECH emanates from the RING. FRODO looks at GANDALF, each knowing the other has heard it.
FRODO
But he was destroyed. Sauron was destroyed.
ANGLE ON: THE RING lies between them on the table.
GANDALF
No, Frodo. The spirit of Sauron endured. His life force is bound to the Ring and the Ring survived. Sauron has returned. His Orcs have multiplied, his fortress of Barad-dûr is rebuilt in the land of Mordor. Sauron needs only this Ring to cover all the lands in the second darkness. He is seeking it, seeking it, all his thought is bent on it. For the Ring yearns, above all else, to return to the hand of its master: They are one, the Ring and the Dark Lord. Frodo, he must never find it.
SUDDENLY, FRODO scoops up the RING.
FRODO
Alright!
CUT TO:
INT. BAG END LIVING ROOM - NIGHT
ANGLE ON: FRODO hurriedly entering the living room.
FRODO
thinking fast
We put it away, we keep it hidden! We never speak of it again. No one knows it’s here, do they?
GANDALF shifts uncomfortably.
FRODO
Do they, Gandalf?
GANDALF looks at FRODO sadly.
GANDALF
There is one other who knew that Bilbo had the Ring. I looked everywhere for the creature Gollum, but the enemy found him first.
CUT TO:
INT. BARAD-DÛR - NIGHT
CLOSE ON: A TEASING GLIMPSE of GOLLUM being tortured by the ORCS. The wretched creature screams in pain.
GANDALF (V.O.)
I don't know how long they tortured him but amidst the endless screams and inane babble, they discerned two words.
GOLLUM
screaming
S -- Shire! Baggins!
CUT TO:
INT. BAG END LIVING ROOM - NIGHT
CLOSE ON: FRODO’S HORRIFIED FACE!
FRODO
Shire! Baggins! That will lead them here!
EXT. SHIRE LANE - SOUTH FARTHING - NIGHT
IMAGE: On a dark country lane, a HOBBIT BOUNDER lifts his watch lantern in alarm.
HOBBIT BOUNDER
Halt! Who goes there?
Out of the darkness thunder two BLACK RIDERS. A LETHAL SWORD swings down at the small HOBBIT BOUNDER.
CUT TO:
INT. BAG END LIVING ROOM - NIGHT
FRODO thrusts the RING at GANDALF.
FRODO
Take it! Take it!
GANDALF
No, Frodo --
FRODO
You must take it.
GANDALF
You cannot offer me this ring.
FRODO
I am giving it to you!
GANDALF
Don't tempt me, Frodo! I dare not take it, not even to keep it safe.
CLOSE ON: THE RING IN FRODO’S HAND.
GANDALF
Understand, Frodo, I would use this Ring from a desire to do good but through me, it would wield a power too great and terrible to imagine.
FRODO
But it cannot stay in the Shire!
GANDALF
No, no, it can't.
CLOSE ON: THE RING IN FRODO’S CLENCHED HAND.
FRODO
What must I do?
CUT TO:
INT. FRODO’S BEDROOM - NIGHT
ANGLE ON: FRODO throwing clothes into a knapsack. GANDALF watches him, making plans.
GANDALF
You must leave, and leave quickly. Get out of the Shire.
FRODO
Where? Where shall I go?
GANDALF
Make for the village of Bree.
FRODO
Bree? What about you?
GANDALF
I will be waiting for you at the Inn of the Prancing Pony.
FRODO packs his food into his knapsack.
FRODO
And the Ring will be safe there?
GANDALF
I don't know, Frodo. I don't have any answers. I must see the Head of my Order. He is both wise and powerful. Trust me, Frodo. He’ll know what to do.
CUT TO:
INT. BAG END LIVING ROOM - NIGHT
FRODO is preparing to leave.
GANDALF
You’ll have to leave the name of Baggins behind you for that name is not safe outside the Shire.
GANDALF helps FRODO into his coat.
GANDALF
Travel only by day. And stay off the road.
FRODO
thinking
I can cut across country easily enough.
GANDALF looks at the young HOBBIT, moved by his courage.
GANDALF
My dear Frodo. Hobbits really are amazing creatures. You can learn all there is to know about their ways in a month, and yet, after a hundred years, they can still surprise you.
SUDDENLY! A SOUND from outside.
GANDALF
Get down!
GANDALF FREEZES, he moves quietly towards the window, eyes wide with tension. He raises his staff above the window, and slams it down on the intruder. THERE IS A YELP OF PAIN!
GANDALF hauls a small figure into the room. SAM GAMGEE sprawls across the floor! He looks up in terror as GANDALF looms over him.
GANDALF
angry
Confound it all! Samwise Gamgee, have you been eavesdropping?
SAM
I ain’t been dropping no eaves, sir! Honest. I was just cutting the grass under the window there, if you follow me --
GANDALF
It’s a little bit late for trimming the hedges, don’t you think?
SAM
I heard raised voices --
GANDALF
What did you hear? Speak!
SAM
Nothing important -- that is, I heard a good deal about a ring and a Dark Lord. And something about the end of the world, but -- Please, Mr. Gandalf, sir, don't hurt me! Don't turn me into anything unnatural!
GANDALF
No?
FRODO SMILES.
GANDALF
Perhaps not. I’ve thought of a better use for you.
CUT TO:
EXT. HOBBITON FIELDS - PREDAWN
WIDE ON: HOBBITON shrouded in a white veil of MIST.
WIDER: To REVEAL GANDALF, FRODO, and SAM hurrying across a ploughed field, away from HOBBITON! GANDALF leads his HORSE. FRODO and SAM are carrying knapsacks.
GANDALF (V.O.)
Come along, Samwise -- keep up --
CUT TO:
EXT. HOBBITON WOODS - DAY
GANDALF leads FRODO and SAM under the cover of WOODS.
GANDALF (V.O.)
Be careful, both of you. The Enemy has many spies in his service, many ways of hearing -- birds, beasts --
GANDALF takes FRODO to one side.
GANDALF
low voice
Is it safe?
FRODO NODS, he pats his pocket.
GANDALF
Never put it on, for the agents of the Dark Lord will be drawn to its power. Always remember, Frodo, the Ring is trying to get back to its master, it wants to be found.
GANDALF wheels his horse and gallops away.
CUT TO:
EXT. GREEN HILL COUNTRY - DAY
MONTAGE: FRODO and SAM hike over the gentle Shire countryside, wading through a shallow stream, pass by the quaint hollows of Hobbit Holes, heating a kettle over a small fire, clambering over stone walls.
CUT TO:
EXT. GREEN HILL COUNTRY - AFTERNOON
SAM stops short, taking stock of his surroundings. SAM looks back from where they came.
SAM
This is it.
FRODO
This is what?
SAM
If I take one more step, it’ll be the farthest away from home I've ever been.
FRODO gives SAM a pat on the shoulder.
FRODO
Come on, Sam.
SAM takes a deep breath and steps forward.
CLOSE ON: SAM’S brown, furry foot hits the ground.
FRODO IS SMILING.
FRODO
Remember what Bilbo used to say -- it's a dangerous business --
FRODO and SAM continue their journey.
BILBO (V.O.)
-- it’s a dangerous business, Frodo, going out your door, you step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.
CUT TO:
EXT. HOBBITON WOODS - NIGHT
SAM cooks a dinner while FRODO relaxes in a tree, smoking his pipe.
SUDDENLY, FRODO turns his head, listening.
ON THE SOUNDTRACK: Singing, high, sweet voices sing in a strange language.
ANGLE ON: FRODO looks at SAM with a delighted smile.
FRODO
whispers
Sam! Wood-Elves!
ANGLE ON: A group of ELVES pass slowly through the forest, some on horseback, some walking, some with banners. The group seems to shine of its own light, their white garments softly glowing against the purples and midnight blues of the woods. Their haunting song continues.
ELVEN VOICES
Elvish
A Galad ren i veniar hi' aladhremmin ennorath A Elbereth Gilthoniel ithil nâ thûl, ithil lîn hen O Light to us that wander here Amid the world of woven trees! O Elbereth! Gilthoniel! Clear are thy eyes and bright thy breath!
ANGLE ON: FRODO and SAM watching the procession from behind a tree.
FRODO
They're going to the harbour beyond the White Towers. To the Grey Havens.
SAM
They're leaving Middle-earth.
FRODO
Never to return.
SAM
I don't know why, it makes me sad.
CUT TO:
EXT. HOBBITON WOODS - NIGHT
FRODO appears asleep. SAM tries desperately to find a comfortable spot on the ground.
SAM
Everywhere I lie there’s a dirty great root sticking into my back.
FRODO neither moves nor opens his eyes.
FRODO
Just shut your eyes, and imagine you're back in your own bed, with a soft mattress and a lovely feather pillow.
ANGLE ON: SAM looks skeptical, but tries it.
SAM
sighs
It's not working Mr. Frodo. I'm never going to be able to sleep out here.
FRODO
Me neither, Sam.
FRODO smiles. SAM stares at the sky and finds something to nibble on.
EXT. SHIRE, A HILL - NIGHT
WIDE ON: Mist descends over the peaceful Shire.
TRACK BACK TO REVEAL: A horse neighs and stamps. Its BLACK RIDER comes slowly to a halt and looks for his prey.
CUT TO:
EXT. ISENGARD VALLEY - DAY
GANDALF is galloping along the outskirts of the ancient forest of FANGORN. Nestled in a basin at the foot of the distant MISTY MOUNTAINS, the tall black tower of ORTHANC is clearly visible.
EXT. ISENGARD VALLEY - DAY
GANDALF gallops through the gate, into the fortress of ISENGARD, a great ring-wall of stone, a mile from rim to rim, encloses beautiful trees and garden, watered by streams that flow down from the mountains.
SARUMAN (V.O.)
Smoke rises once more from the mountain of doom, the Shadow takes shape in the darkness of Mordor; the hour grows late and Gandalf the Grey rides to Isengard seeking my council.
The strange tower of ORTHANC, hewn from a solid pillar of obsidian, rises up in the center of the ISENGARD CIRCLE.
GANDALF arrives at he foot of the ORTHANC STAIRS.
ANGLE ON: SARUMAN, THE WHITE WIZARD as he sweeps down the ORTHANC stairs.
SARUMAN
For that is why you have come, is it not, my old friend?
GANDALF moves quickly towards him, grimy and weary from his long ride.
GANDALF
Saruman!
CUT TO:
EXT. ISENGARD GARDENS - DAY
GANDALF and SARUMAN walk slowly between the beautiful trees of ISENGARD. SARUMAN’S clean, white robe contrasts with GANDALF’S dusty grey robes.
SARUMAN
Are you sure of this?
GANDALF
Beyond any doubt.
SARUMAN
So the Ring of Power has been found?
GANDALF
All these long years, it was in the Shire, under my very nose.
SARUMAN
Yet you did not have the wit to see it. Your love of the Halfling’s leaf has clearly slowed your mind.
GANDALF
We still have time, time enough to counter Sauron if we act quickly.
SARUMAN
Time? What time do you think we have?
CUT TO:
INT. ORTHANC ANTE-CHAMBER - DAY
GANDALF and SARUMAN are seated in a small, cluttered room to the side of the cavernous central chamber.
SARUMAN
Sauron has regained much of his former strength. He cannot yet take physical form but his spirit has lost none of its potency. Concealed within his fortress, the Lord of Mordor sees all. His gaze pierces cloud, shadow, earth and flesh. You know of what I speak, Gandalf, a Great Eye, lidless, wreathed in flame.
GANDALF
softly
The Eye of Sauron.
SARUMAN
He is gathering all evil to him. Very soon, he will have summoned an army great enough to launch an assault on Middle earth.
GANDALF
You know this? How?
SARUMAN
I have seen it.
GANDALF and SARUMAN stride through ORTHANC toward a stone plinth on which a sphere like shape is draped with a cloth.
GANDALF
A Palantír is a dangerous tool, Saruman.
ANGLE ON: SARUMAN lifts the cloth to reveal the PALANTÍR.
SARUMAN
Why? Why should we fear to use it?
GANDALF
They are not all accounted for, the lost Seeing-stones. We do not know who else may be watching.
GANDALF throws the cloth back over the PALANTÍR.
FLASH IMAGE: A FIERY EYE!
ANGLE ON: SARUMAN sits on his throne.
SARUMAN
The hour is later than you think. Sauron’s forces are already moving, the Nine have left Minas Morgul.
GANDALF
shocked
The Nine?
SARUMAN
They crossed the River Isen on Midsummer's Eve, disguised as riders in black.
GANDALF
alarmed
They have reached the Shire?
SARUMAN shrugs.
SARUMAN
They will find the Ring and kill the one who carries it.
GANDALF backs away and turns to run to the door, horrified as the doors suddenly slam shut.
SARUMAN
You did not seriously think a Hobbit could contend with the will of Sauron? There are none who can.
GANDALF slowly turns to SARUMA, a look of dawning horror.
SARUMAN
Against the power of Mordor there can be no victory. We must join with him, Gandalf. We must join with Sauron. It would be wise, my friend.
GANDALF
deadly
Tell me, friend, when did Saruman the Wise abandon reason for madness?
AT THAT MOMENT: GANDALF is suddenly blasted across the room! He slams againt the wall, pinned there by some unseen force.
With sudden effort, GANDALF wrenches himself off the wall and swings his staff on SARUMAN, blasting him off his feet!
GANDALF and SARUMAN battle, powerful blasts throwing them across the room.
SARUMAN SCREAMS, EYES BLAZING! GANDALF’S staff is suddenly wrenched from his grasp, it flies across the chamber into SARUMAN’S hand! GANDALF is flung to the floor.
SARUMAN
I gave you the choice of aiding me willingly, but you have elected the way of pain!
GANDALF is breathing hard on the floor, his eye look into the madness of SARUMAN.
COMMANDING TWO STAFFS, SARUMAN sends GANDALF into a sickening spin. GANDALF tumbles towards the top of the chamber as if falling in reverse.
RUSHING POV: the roof of ORTHANC rockets toward CAMERA.
CUT TO:
EXT. FARMER’S FIELDS - DAY
WIDE ON: FRODO and SAM walking along a country lane which borders FARMER MAGGOT’S FIELDS.
ANGLE ON: SAM is looking up. FRODO has disappeared around a corner in the lane.
SAM
panicked
Mr. Frodo. Mr. Frodo!
FRODO turns, surprised as SAM comes running towards him.
SAM
worried
I thought I'd lost you.
ANGLE ON: FRODO looks at SAM suspiciously.
ANGLE ON: SAM glances down, embarrassed.
FRODO
teasing
What are you talking about?
SAM
mumbling
It's just something Gandalf said --
FRODO
What did he say?
SAM
He said -- “Don't you leave him, Samwise Gamgee.”
looks at Frodo intently
And I don't mean to.
FRODO
laughing
Sam, we're still in the Shire, what could possibly happen?
SUDDENLY! A figure comes crashing out of a hedgerow sending FRODO flying. FRODO picks himself up, only to be knocked back down again by PIPPIN.
PIPPIN
Frodo! Merry, it's Frodo Baggins.
MERRY
Hello Frodo!
ANGLE ON: MERRY, PIPPIN, and FRODO picking themselves up, a variety of vegetables have scattered everywhere.
SAM
What’s the meaning of this!
MERRY
Sam, hold this --
MERRY gives SAM a large cabbage.
SAM
You've been into Farmer Maggot's crop!
ANGLE ON: A large pitchfork can be seen racing towards them along the HEDGEROW, angry shouts from FARMER MAGGOT.
FARMER MAGGOT (O.S.)
Who’s that in my field! Get out of it! Get out of my field, you young varmits! I’ll show you, get out of my corn.
ANGLE ON: MERRY and PIPPIN hurriedly gather their booty and race away with FRODO and SAM on their heels.
MERRY
I don't know why he is so upset, it's only a couple of carrots.
PIPPIN
And some cabbages, and those three bags of potatoes that we lifted last week. And the mushrooms the week before.
MERRY
Yes, Pippin, my point is, he's clearly overreacting.
ON THE SOUNDTRACK: The BAYING OF LARGE DOG sounds!
PIPPIN
Run!
CUT TO:
EXT. WOODED ROAD - DAY
FRODO, SAM, and MERRY and PIPPIN tumble head over heel down a bank, onto a dark, wooded road.
CLOSE ON: A winded PIPPIN, his face inches away from a large pile of HORSE droppings.
PIPPIN
That was close.
FRODO picks himself up and looks around quickly.
MERRY
groaning
Ow, I think I've broken something.
He PULLS a LARGE CARROT, almost broken through in the middle, out from his back pocket.
MERRY
Oh.
SAM
turning on Merry and Pippin
Trust a Brandybuck and a Took!
MERRY
What? That was just a detour, a short cut.
SAM
A shortcut to what?
PIPPIN has spied something under the trees on the far side of the road.
PIPPIN
excited
Mushrooms!
CLOSE ON: SMALL, brown mushrooms growing amongst the LOAMY undergrowth. SAM, MERRY, and PIPPIN race toward the mushrooms!
ANGLE ON: FRODO is tense and watchful. He realizes they are on a wooded road. Scattered leaves rise into the air WHIRLING down the road as if blown by an invisible wind.
SUDDENLY THE SOUND OF HORSE HOOVES.
FRODO
I think we should get off the road.
A long drawn WAIL comes down the wind, like the cry of some evil and lovely creature.
FRODO
more urgency
Get off the road!
SAM grabs MERRY and PIPPIN as the HOBBITS quickly scramble down the bank, hiding under a mossy log.
THE SOUND OF HOOVES is close, a sinister MOUNTED RINGWRAITH steps into view, hooded and faceless, mounted on a huge snarling black horse with insane eyes!
FRODO freezes in terror.
ANGLE ON: The RINGWRAITH pauses right beside their hiding place, he sits very still with head bowed, listening. From inside the hood comes a sniffing noise as if he is trying to catch an elusive scent: he head turning from side to side.
CLOSE ON: FRODO beads of sweat gather on his brow.
ANGLE ON: The RINGWRAITH suddenly slides off his horse, leaning over the mossy log, peering suspiciously into the woods.
CLOSE ON: FRODO, he is drawing the RING out of his pocket, with trembling hands, his face fevered and sweating as if in the grip of some terrible INTERNAL STRUGGLE.
The SOUND OF SNIFFING intensifies as the RINGWRAITH darts his head from side to side like a bird of prey.
CLOSE ON: FRODO SQUEEZING HIS EYES SHUT.
QUICK PSYCHIC BLASTS! AN EVIL DARK TOWER. A GREAT EYE. A BURST OF FLAME.
ANGLE ON: SAM LOOKING AT FRODO WITH CONCERN.
SAM
Frodo?
MERRY desperately hurls the mushrooms across the road, the RINGWRAITH spins around at the sound, and darts to the far side of the road with frightening speed.
ANGLE ON: FRODO instantly slumps as if a PSYCHIC LINK had been broken.
MERRY
What was that?
FRODO is staring, a look of shock on his face at the RING lying in the palm of his hand.
EXT. FERRY LANE - NIGHT
FRODO, SAM, MERRY, and PIPPIN hurry through the trees, slipping and sliding on the muddy ground.
SAM
Anything?
FRODO
Nothing.
PIPPIN
What is going on?
ANGLE ON: MERRY moves past PIPPIN, toward FRODO, watching intently. SAM keeps looking around nervously.
MERRY
That Black Rider was looking for something or someone, Frodo?
SAM
Get down!
ANGLE ON: The SILHOUETTE OF A BLACK RIDER looms against the skyline.
ANGLE ON: The FOUR HOBBITS sprawled on the ground, holding their breath.
ANGLE ON: The BLACK RIDER turns and departs.
FRODO
I have to leave the Shire. Sam and I must get to Bree.
ANGLE ON: MERRY looks at his friend, realizing FRODO is in deep trouble.
MERRY
Right. Buckleberry Ferry, follow me!
The HOBBITS break cover.
SUDDENLY, A RINGWRAITH bursts out of the forest TOWARD THEM!
MERRY
There’s another one!! Frodo, this way!!
The HOBBITS run, THE RINGWRAITH SHRIEKS!
QUICK CUTS: Black horse hooves, snarling horse mouths, a fleeting black cowl.
MERRY
Frodo, follow me!
CUT TO:
EXT. BUCKLEBERRY FERRY - NIGHT
FRODO, SAM, MERRY, and PIPPIN are running towards the wide, placid BRANDYWINE RIVER and the FERRY.
MERRY
Get the ropes, Sam.
QUICK ANGLES: STOMPING HOOVES, SNARLING HORSES.
Four RINGWRAITHS are speeding through the FOG converging on the FERRY CROSSING. The HOBBITS stampede across the WHARF and TUMBLE onto the FERRY.
SAM
screaming
Frodo!
FRODO races across the WOODEN WHARF, followed by the RINGWRAITHS. He leaps onto the FERRY.
CLOSE ON: HOOVES THUNDER DOWN THE WOODEN WHARF!
SAM and MERRY shove off with the poles, the ferry slides out into the river, just as the RINGWRAITHS arrive. They pull up on the end of the wharf, shrieking with rage! The HOBBITS cover their ears.
The RINGWRAITHS wheel their horses towards the north and GALLOP away along the river bank, quickly disappearing into the fog.
FRODO
Where is the nearest crossing?
MERRY
The Brandywine bridge, twenty miles.
CUT TO:
EXT. BREE GATE - NIGHT
ANGLE ON: Lights of BREE, a small village of stone and half-timbered houses nestled against a low wooded hill. A thick hedge surrounds the village, a great gate bars the western entrance.
CLOSE ON: FRODO, SAM, MERRY, AND PIPPIN approaching the gatehouse, wild eyes, ragged, and out of breath.
FRODO
Come on.
ANGLE ON: A SURLY GATEKEEPER, OLD HARRY, glances down at them.
OLD HARRY
What do you want?
FRODO
We are headed for the Prancing Pony.
OLD HARRY swings his lantern onto the HOBBITS, bathing them in an uncomfortable yellow spotlight.
OLD HARRY
Hobbits! Four Hobbits, and what’s more, out of the Shire by your talk. What business brings you to Bree?
FRODO
We wish to stay at the inn, our business is our own.
To FRODO’S relief, OLD HARRY unlocks the gate.
OLD HARRY
All right, young sir, I meant no offense.
The HOBBITS gratefully enter BREE. OLD HARRY eyeing them curiously in the lantern light.
OLD HARRY
‘Tis Old Harry’s job to ask questions after nightfall. There's talk of strange folk abroad, can't be too careful.
CUT TO:
EXT. BREE STREETS - NIGHT
The tall BREE FOLK loom over the nervous LITTLE HOBBITS as FRODO, SAM, MERRY, and PIPPIN make their way through the NARROW STREETS. Tall buildings tower above them, light glow dimly from behind thick curtains.
CLOSE ON: The sign of the “PRANCING PONY INN.” FRODO, SAM, MERRY, and PIPPIN hurry toward it.
INT. “PRANCING PONY” RECEPTION - NIGHT
FRODO, SAM, MERRY, and PIPPIN come rushing in. FRODO attracts the INN KEEPER’s attention.
FRODO
Excuse me.
BUTTERBUR
Good evening, little masters. If you're seeking accommodation, we’ve got some nice, cozy Hobbit sized rooms available. Mr -- ah --
FRODO
Underhill -- my name's Underhill.
BUTTERBUR
Underhill? Hmmmm.
FRODO
We're friends of Gandalf the Grey. Can you tell him we've arrived?
BUTTERBUR frowns.
BUTTERBUR
puzzled
Gandalf -- Gandalf -- Oh --
recognition
Oh, yes! I remember -- elderly chap, big grey beard, pointy hat?
BUTTERBUR shakes his head.
BUTTERBUR
Not seen him for six months.
FRODO is shocked.
SAM
worried whisper
What do we do now?
INT. PRANCING PONY - LATER
WIDE ON: the noisy, smokey INN. It is dimly lit, shiefly from a blazing log fire and crowded with a mixture of BIG FOLK, LOCAL HOBBITS, and a couple of dwarfs.
ANGLE ON: FRODO, SAM, MERRY, and PIPPIN are sitting at a table against the wall, clearly trying to remain QUIET and inconspicuous. SAM can’t help himself, he keeps casting nervous glances around.
FRODO
Sam, he'll be here. He’ll come.
ANGLE ON: MERRY ploinks himself down at a table, carrying a very large mug of beer.
PIPPIN
What's that?
MERRY
This, my friend, is a pint.
PIPPIN
It comes in pints? I'm getting one.
SAM watches PIPPIN rise unsteadily to his feet and head to the bar.
SAM
You've got a whole half already!
MERRY watches PIPPIN go.
ANGLE ON: A COUPLE OF SWARTHY MEN leaning against the bar glance at FRODO, then quickly look away.
SAM
tense
That fellow's done nothing but stare at you since we arrived.
SAM indicates a BROODING STRANGER who sits alone at a table in the far corner, smoking a curiously carved long stemmed pipe, peering from beneath a travel stained cowl with gleaming eyes.
FRODO gestures to BUTTERBUR.
FRODO
Excuse me, that Man in the corner, who is he?
BUTTERBUR
He's one of them Rangers; they’re dangerous folk they are, wandering the wilds. What his right name is, I never heard, but round here he's known as Strider.
FRODO
to himself
Strider.
BENEATH TABLE: FRODO’S fingers are nervously TOYING WITH THE RING.
CLOSE ON: FRODO. Sweat runs down his brow. The STRANGE HUM OF THE RING spills into the SOUNDTRACK.
“Baggins -- Baggins --” a creepy whisper seems to fill FRODO’S head, sound that dissolves into PIPPIN’S loud voice:
PIPPIN
Baggins? Sure I know a Baggins. He’s over there.
ANGLE ON: PIPPIN sitting at the bar, chatting with LOCALS. FRODO leaps to his feet and pushes his way to the bar.
PIPPIN
Frodo Baggins. He's my second cousin, once removed on his mother's side and my third cousin, twice removed on his father’s side if you follow me.
FRODO grabs PIPPIN’S sleeve, spilling his beer.
FRODO
Pippin!
PIPPIN
Steady on, Frodo!
PIPPIN pushes FRODO away, he stumbles backwards, and falls to the floor.
AT THAT INSTANT, the INN goes silent and all the attention turns to FRODO.
CLOSE ON: THE RING in agonizing SLOW MOTION, we watch as it seems to hang in the air for a split second then crashes down onto his outstretched finger.
FRODO VANISHES!
There is a sharp intake of breath followed by total silence.
CUT TO:
EXT. BREE COUNTRYSIDE - NIGHT
THE RINGWRAITHS turn sharply in their saddles. INSTANTLY aware that the RING is being worn. They spur their horses towards the distant lights of BREE.
INT. “PRANCING PONY” INN - NIGHT
SAM looks sick; PIPPIN instantly sobers, realizing his folly; the brooding stranger frowns and the INN erupts into excited babble.
IN THE TWILIGHT WORLD:
ANGLE ON: FRODO, as he finds himself in the TWILIGHT WORLD of the RING: THE EXCITED CROWD are suddenly moving in SLOW MOTION, distorted voices, a weird photographic negative quality.
FRODO is moving in real time; against the slow motion background.
He suddenly clutches his head as he is hit with QUICK IMAGES of a GREAT EYE! AN EVIL CAT-LIKE EYE, WREATHED IN FLAMES.
VOICE OF SAURON
You cannot hide -- I see you -- There is no life here in the void -- only cold -- only death.
FRODO is terrified! He rolls under a table, desperately pulling the RING from his finger.
FRODO MATERIALIZES into the REAL WORLD.
AT THAT MOMENT: A LARGE HAND reaches under the table and GRABS FRODO by the collar, and DRAGS HIM AWAY!
CUT TO:
INT. PRANCING PONY - CORRIDOR - NIGHT
FRODO is roughly pushed against the wall. The BROODING STRANGER looms over him.
STRIDER
You draw far too much attention to yourself, Mr. Underhill.
CUT TO:
INT. HOBBIT’S ROOM - PRANCING PONY - NIGHT
FRODO is pushed into the HOBBIT’S ROOM by STRIDER.
FRODO
What do you want?
STRIDER
A little more caution from you, that is no trinket you carry.
FRODO
I carry nothing.
STRIDER
Indeed? I can avoid being seen if I wish, but to disappear entirely that is a rare gift.
He takes down the hood of his cloak to reveal a shaggy head of dark hair flecked with grey, and in a pale stern face a pair of keen grey eyes.
FRODO
Who are you?
STRIDER
Are you frightened?
FRODO
Yes.
STRIDER
Not nearly frightened enough. I know what hunts you.
FRODO jumps at the sound of a noise in the corridor. STRIDER deftly draws his sword.
ANGLE ON: The door BURSTS OPEN and SAM, MERRY, and PIPPIN appear on the doorway. SAM is squaring off with his FISTS, MERRY brandishes a CANDELABRA, and PIPPIN a CHAIR.
SAM
Let him go or I’ll have you, Longshanks!
STRIDER SHEATHS his sword, a slight smile playing on his lips.
STRIDER
You have a stout heart, little Hobbit, but that alone will not save you, Frodo. They’re coming.
CUT TO:
EXT. GATEHOUSE, BREE - NIGHT
OLD HARRY comes out of his LODGINGS with a lantern, a look of fear on his face. He approaches the closed gate with great apprehension.
CLOSE ON: OLD HARRY peers out of his PEEPHOLE.
CRASH!!
The gate crashes down on OLD HARRY as FOUR RINGWRAITHS ride into BREE!
EXT. BREE STREETS - NIGHT
The four RINGWRAITHS fly down the empty streets, like horsemen of the apocalypse.
INT. PRANCING PONY INN - NIGHT
LOW ANGLE: the front door FLIES OPEN. The FOUR RINGWRAITHS rush into the PRANCING PONY with WICKED SWORDS DRAWN.
CLOSE ON: BUTTERBUR hiding behind his bar, trembling and sweating in TERROR.
INT. HOBBIT’S ROOM - PRANCING PONY - NIGHT
INSERT: MERRY SNORING SOFTLY ON HIS PILLOW.
INSERT: PIPPIN stirs slightly, then settles back to sleep.
WIDE ON: The door creaks open. THE FOUR RINGWRAITHS silently slide into the HOBBIT’S ROOM. They LOOM over each bed, raising their SHINING SWORDS ABOVE THE SLEEPING HOBBITS.
QUICK INSERT: SAM’S eyes open wide.
In unison, the RINGWRAITHS STAB THE HOBBITS, in a SLASHING, HACKING FRENZY.
INT. STRIDER’S ROOM - NIGHT
ANGLE ON: STRIDER is grimly listening to the sounds from his room.
INT. HOBBIT’S ROOM - PRANCING PONY - NIGHT
WIDE ON: the RINGWRAITHS step back from the slashed beds in triumph.
CLOSE ON: A hacked blanket is pulled back to reveal nothing but a shredded pillow. The RINGWRAITHS SHRIEK WITH RAGE!!
INSERT: SAM sits up with a start!
CLOSE ON: Another shredded pillow is revealed! More SHRIEKS of rage.
INSERT: MERRY AND PIPPIN wake with a start.
CUT TO:
INT. STRIDER’S ROOM - NIGHT
WIDE ON: SAM, MERRY, and PIPPIN have been sleeping on STRIDER’S bed. FRODO stands next to STRIDER by the window, peering out nervously as furious RINGWRAITH screeches echo across the courtyard from the HOBBIT’S ROOM.
FRODO
What are they?
STRIDER
They were once Men.
ANGLE ON: STRIDER glances quickly at FRODO, then looks away.
STRIDER
quietly
Great kings of Men. Then Sauron the Deceiver gave to them Nine Rings of Power. Blinded by their greed they took them without question, one by one falling into darkness. Now they are slaves to his will.
STRIDER looks from the window as the RINGWRAITHS gallop down the BREE STREETS.
CLOSE ON: STRIDER turns back to the HOBBITS, his face lit faintly by the GLOWING EMBERS of the FIRE.
STRIDER
They are the Nazgûl, Ringwraiths, neither living nor dead. At all times they feel the presence of the Ring, drawn to the power of the One. They will never stop hunting you.
CUT TO:
EXT. CHETWOOD FOREST - DAY
ANGLE ON: STRIDER, MERRY, PIPPIN, AND FRODO march through a gloomy overgrown forest. SAM follows at the rear leading BILL, a SCRAWNY PONY, who is laden with supplies.
FRODO
Where are you taking us?
STRIDER
Into the Wild.
ANGLE ON: FRODO watches uneasily as STRIDER moves off into the cover of trees.
MERRY
whispered aside
How do we know this Strider is a friend of Gandalf?
FRODO
I think a servant of the enemy would look fairer and feel fouler.
MERRY
He’s foul enough.
FRODO
We have no choice but to trust him.
SAM
But where is he leading us?
STRIDER stops, casts a glance back at SAM.
STRIDER
To Rivendell, Master Gamgee to the house of Elrond.
SAM looks excited.
SAM
Did you hear that, Bill? Rivendell! We're going to see the Elves!
STRIDER leads the HOBBITS through the gloom of the forest.
CUT TO:
EXT. MIDGEWATER MOORS - DAY
AERIAL ON: STRIDER leading FRODO, SAM, MERRY, and PIPPIN across the windswept moor.
ANGLE ON: The HOBBITS suddenly stop and unstrap their knapsacks.
STRIDER
Gentlemen, we do not stop till nightfall.
PIPPIN
What about breakfast?
STRIDER
You’ve already had it.
PIPPIN
We've had one, yes, what about second breakfast?
ANGLE ON: STRIDER stares at PIPPIN blankly, then turns away, shaking his head.
MERRY
I don't think he knows about second breakfast, Pip.
PIPPIN
What about Elevenses, Luncheon, Afternoon tea, dinner, he knows about them, doesn’t he?
MERRY
I wouldn't count on it.
An apple is thrown to MERRY, who deftly catches it. Another, aimed at PIPPIN, catches him on the forehead.
MERRY
exasperated
Pippin!
ANGLE ON: The HOBBITS trudge through rain, looking tired, hungry, and miserable.
CUT TO:
EXT. MIDGEWATER - DAY
WIDE ON: ARAGORN, FRODO, SAM, BILL, MERRY, and PIPPIN struggle through a dense swampland. Bugs swarm around them.
ANGLE ON: MERRY slaps at the swarming insects.
MERRY
What do they eat when they can’t get Hobbit?
ANGLE ON: PIPPIN loses his balance and falls face first into the muck.
EXT. MIDGEWATER - NIGHT
ANGLE ON: The full moon stands high overhead.
ANGLE ON: STRIDER keeps a lone watch by the dying embers of the fire. He sings quietly to himself.
STRIDER
Elvish
Tinúviel elvanui, Elleth alfirin ethelhael O hon ring finnil fuinui A renc gelebrin thiliol. Tinúviel the elven-fair, Immortal maiden elven-wise, About him cast her night-dark hair, And arms like silver glimmering.
CLOSE ON: FRODO awakens, hearing Strider’s song.
FRODO
Who is she? This woman you sing of?
ANGLE ON: STRIDER turns, momentarily startled. He relaxes quickly. He speaks as if the tale is personal to him.
STRIDER
‘Tis the lady of Lúthien. The Elf-maiden who gave her love to Beren, a mortal.
FRODO
What happened to her?
STRIDER
She died.
STRIDER sighs. His face bears remorse as he turns to FRODO.
STRIDER
Get some sleep, Frodo.
FRODO nods and lays back down.
STRIDER turns back to his vigil and looks up at the moon. His eyes are brimming with tears.
CUT TO:
INT. ORTHANC ANTE-CHAMBER - NIGHT
SARUMAN stands over the PALANTÍR, his hands cupping the massive eye.
SARUMAN
whisper
The power of Isengard is at your command, Sauron, Lord of the Earth.
ON THE SOUNDTRACK: BLACK SPEECH FILLS THE ROOM. AMIDST THE HARSH, GUTTURAL WORDS, THE VOICE OF SAURON EMERGES.
SAURON
Build me an army worthy of Mordor.
INT. ORTHANC ANTE-CHAMBER - NIGHT
SARUMAN is seated as his ORC OVERSEER approaches
ORC OVERSEER
What orders from Mordor, my lord? What does the Eye command?
SARUMAN
We have work to do.
CUT TO:
INT. ISENGARD - NIGHT
CLOSE ON: GANDALF lying unconscious on a cold obsidian floor. He wakes to the sound of ripping and tearing, rising onto his knees, lifting his head.
GANDALF stands as the CAMERA PULLS BACK TO REVEAL HIM stranded on the SUMMIT OF ORTHANC. He is marooned on the tiny, flat peak, surrounded on all sides by a sheer 500 FOOT DROP.
Another whispering wail rends the air. GANDALF crosses quickly to the edge and peers down:
POV: One of the beautiful ISENGARD trees is being ripped from the ground by the ORCS. GANDALF looks on in HORROR as ORCS hack into the trunk with axes.
ANGLE ON: SARUMAN stands in RAIN looking out into the dark night, the ORC OVERSEER sidles up to him, axe in hand, sweating with exertion.
ORC OVERSEER
The trees are strong, my Lord. Their roots go deep.
SARUMAN
Rip them all down.
CAMERA CIRCLES SUMMIT: MORE AND MORE TREES are hauled down and killed as GANDALF looks on in helpless despair.
DISSOLVE TO:
EXT. WEATHERHILLS - DAY
WIDE ON: The rugged countryside as the HOBBITS journey on, lead by STRIDER. STRIDER stops before a distant hill, topped by an ANCIENT RUIN.
STRIDER
This was once the great Watchtower of Amon Sûl. We shall rest here tonight.
CUT TO:
EXT. WEATHERTOP HOLLOW - DUSK
ANGLE ON: FRODO, MERRY, and PIPPIN collapse into a small hollow, halfway up WEATHERTOP, they are muddy and exhausted.
ANGLE ON: STRIDER drops 4 SWORDS at the HOBBITS’ feet.
STRIDER
These are for you. Keep them close. I'm going to have a look around. Stay here.
CUT TO:
EXT. WEATHERTOP HOLLOW - NIGHT
CLOSE ON: FRODO eyes flickering open. He suddenly sits up, sniffing the air.
ANGLE ON: SAM, MERRY, and PIPPIN huddled over a small fire. SAUSAGES and BACON sizzle in a hot frying pan.
FRODO
What are you doing?
MERRY
Tomatoes, sausages, and crispy bacon.
SAM
We saved some for you, Mr. Frodo.
FRODO
Put it out, you fools! put it out!
PIPPIN
Oh, that's nice, ash on my tomatoes!
A SUDDEN SHRIEK!
ANGLE ON: FIVE RINGWRAITHS ON FOOT, running up the steep slope unnaturally fast.
FRODO
Go!
FRODO, SAM, MERRY, and PIPPIN clamber desperately towards the summit, clutching their swords.
CUT TO:
EXT. WEATHERTOP SUMMIT - NIGHT
FRODO, SAM, MERRY, and PIPPIN race into a RING OF BROKEN STONES on the summit on WEATHERTOP, the ruined base of an ancient tower.
The HOBBITS stand back-to-back in the centre of the RING, waiting for the first assault.
ANGLE ON: One by one, the 5 RINGWRAITHS appear, brandishing GLEAMING SWORDS, they move slowly towards the HOBBITS. In the center is their leader the WITCH KING!
SAM
Back, you devils!
ANGLE ON: SAM rushes forward with a cry. He swings his sword at the WITCH KING, who blocks the blow with his own sword. SAM’S blade shatters, the WITCH KING lashes out with his fist, sending SAM flying.
ANGLE ON: MERRY and PIPPIN, overcome with terror, throw themselves flat on the ground.
ANGLE ON: The RINGWRAITHS close in on FRODO, a VENOMOUS WHISPER dances in his head.
ANGLE ON: FRODO shuts his eyes and staggers back, desperately resisting the WRAITH’S WHISPERINGS.
SLOW MOTION as his hand goes into his pocket and pulls out the RING. The 5 RINGWRAITHS utter a chilling SCREECH OF EXCITEMENT. FRODO is unable to resist any longer, falls to his knees and slips on the RING. He DISAPPEARS.
SAM
No!
IN THE TWILIGHT WORLD:
ANGLE ON: FRODO finds himself in the weird TWILIGHT WORLD, he looks upon the RINGWRAITHS, now visible in their TRUE APPEARANCE: FIVE GHOULS dressed in long GREY ROBES, with white hair, and PALLID ruthless faces.
THE WITCH KING extends a haggard hand towards FRODO, reaching for the RING on his finger. FRODO’S trembling hand extends forward, as if by the pull of the RING, he slides to the ground, unable to pull his hand away.
The WITCH KING snarls and springs forward. He stabs at FRODO with a wicked DAGGER! FRODO winces as the tip of the dagger sinks into his shoulder.
SUDDENLY, STRIDER charges at the RINGWRAITHS, wielding his sword in one hand, a FLAMING TORCH in the other. He moves in SLOW MOTION, visible through a sea of mist.
FRODO sinks to the ground. Behind him is a faint image of a RINGWRAITH fleeing, his head engulfed in flames. With draining strength, FRODO manages to pull the RING off his finger.
IN THE REAL WORLD: APPEARING back in the real world, SAM rushes over to him.
SAM
horrified
Frodo!
Another RINGWRAITH is burning and screaming, others screech fearfully at the flames, turn and flee from the WEATHERTOP SUMMIT.
SAM
panicked
Mr. Frodo!!
STRIDER kneels before FRODO. He snatches up the WITCH KING’S DAGGER from the ground, staring gravely at the long, thin, blade.
SAM
Help him, Strider!
STRIDER
grim
He's been stabbed by a Morgul blade.
The MORGUL BLADE suddenly melts, vanishing into the air like smoke. STRIDER throws the hilt down in disgust.
SAM
Do something.
STRIDER
This is beyond my skill to heal.
urgently
He needs Elvish medicine.
STRIDER lifts FRODO onto his shoulders.
EXT. WEATHERHILLS - NIGHT
STRIDER is jogging grimly, carrying an ailing FRODO on his back.
SAM, MERRY, and PIPPIN are running to keep up. The HOBBITS are carrying FLAMING TORCHES for protection.
STRIDER
Hurry!
SAM
We are six days from Rivendell.
FRODO groans.
STRIDER
Hold on, Frodo
SAM
He’ll never make it!
CLOSE ON: FRODO, head lolling about, barely conscious.
FRODO
fevered calling
Gandalf -- Gandalf?
EXT. ISENGARD - NIGHT
LOW ANGLE looking up at ORTHANC, the TOWER OF ISENGARD, gleaming in the moonlight.
CAMERA RISES TO REVEAL the once beautiful gardens are now a pitted wasteland with smoke and fire billowing out of numerous tunnels and vent holes that littler the forecourt of ORTHANC. Strange guttural chants echo up from deep underground.
THE CAMERA IS RISING, a SMALL MOTH flutters into SHOT and LEADS THE CAMERA towards the SUMMIT OF ORTHANC.
GANDALF lies slumped against the wall at the very top of ORTHANC surrounded by a sheer 500 FOOT DROP. He looks WEAK and FRAIL and is seemingly asleep.
His hand suddenly moves at lightning speed and SNATCHES THE MOTH. GANDALF brings his hand close to his face and opens it.
The MOTH sits on the palm of his hand as GANDALF mutters strange words in a foreign tongue.
CLOSE ON: THE MOTH’S face seemingly listening. It suddenly flutters away.
CAMERA FOLLOWS the MOTH off the ORTHANC SUMMIT, but drops past the MOTH, falling down, down, towards the pitted wasteland, straight into a fiery red tunnel!
INT. CAVERNS BELOW ISENGARD - NIGHT
SERIES OF SHOTS: The dead trees of ISENGARD are fed into roaring furnaces, molten metal pours into casts, red hot metal, beaten by sweating ORC BLACKSMITHS, armor and weapons are forged from the great furnaces.
ANGLE ON: SARUMAN strides among the ORCS and stands looking on a newborn URUK-HAI as it escapes its birthing membrane, this is LURTZ, who rises up to stand before his master.
CUT TO:
EXT. TROLLSHAW FOREST CLEARING - NIGHT
CLOSE ON: FRODO, his eyes flicker open, clouded, red-rimmed, his brow, beaded with sweat.
FRODO’S POV: THREE LARGE STONE TROLLS sit in the clearing. SAM pops his head in front of FRODO.
SAM
Look, Frodo. It’s Mr. Bilbo’s trolls.
ANGLE ON: SAM feels of his skin.
SAM
Mr. Frodo? He's going cold!
PIPPIN
Is he going to die?
FRODO’S breathing is getting shallow. STRIDER looks out into the darkness.
STRIDER
He is passing into the Shadow World. He’ll soon become a Wraith like them.
A DISTANT CRY of a RINGWRAITH carries through the air.
MERRY
nervous
They're close.
FRODO gasps in sudden pain.
STRIDER
thinking hard
Sam, do you know the Athelas plant?
SAM looks blank.
SAM
Athelas?
STRIDER
Kingsfoil.
SAM
Kingsfoil. Aye. It's a weed.
STRIDER
It may help to slow the poisoning. Hurry!
EXT. TROLLSHAW FOREST - NIGHT
SAM and STRIDER desperately search the dark forest floor for the ATHELAS PLANT.
CLOSE ON: A small, white flowered plant! STRIDER drops to one knee, carefully pulling it from the ground.
SUDDENLY! STRIDER FREEZES AS A SWORD BLADE TOUCHES HIS NECK.
ARWEN (O.S.)
What is this? A Ranger caught off his guard?
STRIDER slowly looks up.
CUT TO:
EXT. TROLLSHAW FOREST CLEARING - NIGHT
FRODO is breathing hard, desperately ill.
FRODO’S HALF-CONSCIOUS POV: Surreal impression, a SHIMMERING FIGURE IN WHITE leaps off a horse.
FLASH INSERT: An ethereal vision of ARWEN, as she appears on the other side.
ARWEN
Elvish: with subtitles
Frodo, Im Arwen. Telin let thaed.
I am Arwen. I have come here to help you.
urgent
Lasto beth nîn. Tolo dan na ngalad.
Hear my voice. Return to the light.
PIPPIN
Who is she?
ARWEN
worried
Frodo?
SAM
She's an Elf.
ANGLE ON: ARWEN who now appears in her earth bound form, a young ELVEN WOMAN with tousled hair, dressed in mud-splattered riding clothes.
ARWEN
He's fading. He's not going to last. We must get him to my father.
STRIDER quickly lifts FRODO, placing him on the horse.
PIPPIN
Where are you taking him?
ARWEN
I've been looking for you for two days. There are five Wraiths behind you. Where the other four are, I do not know.
STRIDER
Elvish: with subtitles
Dartho guin Berian -- rych le ad tolthathon.
Stay with the Hobbits. I will send horses for you.
CLOSE ON: ARWEN grabbing the REINS of the horse.
ARWEN
Elvish: with subtitles
Hon mabathon. Rochon ellint im.
I am the faster rider. I’ll take him.
STRIDER clamps his hand over ARWEN’S.
STRIDER
Elvish: with subtitles
Andelu i ven.
The road is too dangerous.
ARWEN
Elvish: with subtitles
Frodo fîr. Ae athradon i hir, tur gwaith nin beriatha hon.
If I can get across the river, the power of my people will protect him.
PIPPIN
What are they saying?
CLOSE ON: ARWEN reaches for STRIDER’S hand, looking deep into his eyes.
ARWEN
I do not fear them.
CLOSE ON: STRIDER, we see that it is hard for him to let her go.
STRIDER
Elvish: with subtitles
Be iest lîn.
As you wish.
ANGLE ON: ARWEN mounts her horse, ASFALOTH.
STRIDER
Arwen, ride hard. Don't look back.
ANGLE ON: ARWEN looks down at STRIDER as she supports FRODO with one hand.
ARWEN
Elvish
Noro lim, Asfaloth, noro lim!
Ride fast, Asfaloth, ride fast!
SAM
What are you doing? Those Wraiths are still out there!
ANGLE ON: ASFALOTH springs away, bearing ARWEN and FRODO into the night.
CUT TO:
EXT. TROLLSHAW FOREST - NIGHT
SPEEDING POV: through the forest from the back of the WHITE HORSE.
ANGLE ON: FRODO, BOUNCING IN THE SADDLE, he lifts his head weakly.
SURREAL SLOW MOTION POV: THE HORSE’S HEAD BOBBING, trees sliding by, moonlight flickers through the trees.
CUT TO:
EXT. AERIAL OF ETTENMOORS - MORNING
AERIAL: of ARWEN’S white horse emerging from the trees and galloping across the open land as the sun rises.
CUT TO:
EXT. PINE FOREST - DAY
ASFALOTH charges through a PINE FOREST.
Suddenly 2 GALLOPING RINGWRAITHS emerge from the trees behind!
2 more RINGWRAITHS slide in from different directions to join the chase.
ARWEN grits her teeth, urges the white horse to greater speed.
CUT TO:
EXT. THE EAST ROAD - DAY
The white horse speeds out of the pine trees, the 4 RINGWRAITHS close behind.
PAN ONTO: 2 more RINGWRAITHS galloping down the hillside!
AERIAL SHOT: 3 MORE RINGWRAITHS enter frame from different directions, a total of 9 RINGWRAITHS now pursuing FRODO and ARWEN!
CLOSE ON: Panting head of the WHITE ELVEN HORSE.
ARWEN
Noro lim, Asfaloth!
Ride faster, Asfaloth!
CUT TO:
EXT. FORD OF BRUINEN - DAY
CRANE DOWN: As the WHITE HORSE races toward CAMERA, to REVEAL the wide river BRUINEN in the foreground.
Without hesitation, the white horse leaps into the shallow water and thunders across the Ford. The 9 RINGWRAITHS pulls up short of the Ford, clearly nervous of the water.
The white horse reaches the other side, ARWEN pulls up and turns to defiantly face the RINGWRAITHS from across the Ford.
WITCH KING
Give up the halfling, She-Elf.
She draws her sword and yells at the WITCH KING.
ARWEN
If you want him, come and claim him.
THE WITCH KING SCREECHES ANGRILY, draws his sword, and leads the RINGWRAITHS across the Ford. The water starts flowing faster, a distant rumble can be heard.
ARWEN waits until they are halfway across: she suddenly stands in the saddle arms raised!
ARWEN
Elvish
Nin o Chithaeglir, lasto Beth daer: Rimmo nin Bruinen, dan in Ulair! Nin o Chithaeglir, lasto beth daer, Rimmo nin Bruinen, dan in Ulair!
Waters of the Misty Mountains, listen to the great word: flow waters of Loudwater, against the Ringwraiths!
THE GROUND SUDDENLY TREMBLES. A MIGHTY ROAR FILLS THE AIR.
FRODO looks up weakly, to see a vast torrent of WATER flooding down the river towards the Ford as if a dam had burst!
ANGLE ON: The FOAMING WATER seems to form the shape of DANCING WHITE HORSES with frothing manes! The RINGWRAITHS screams in terror as they are swallowed up in the deluge. Their piercing cries are drowned in the roaring of the river as it carries them away!
CLOSE ON: FRODO as he loses consciousness.
ARWEN
upset
No, no -- Frodo, no! Frodo, don't give in -- not now!
ARWEN gathers the small HOBBIT in her arms, feeling his life slip away.
INT. FRODO’S DELIRIUM - DAY
DELIRIOUS IMAGES AND SOUNDS.
ARWEN (V.O.)
What grace is given me, let it pass to him. Let him be spared. Save him.
IMAGES: A city in the woods. A brief distorted glimpse of ELROND - an ELVEN LORD - working feverishly to save FRODO.
ELROND
Elvish
Lasto beth nîn. Tolo dan na ngalad.
Hear my voice, come back to the light
IMAGES: A BLADE STABBING, over and over. FRODO’S FACE, bathed in FIRELIGHT, the EYE OF SAURON looms toward FRODO! FRODO gasps at the EYE, his face twists with FEAR!
IMAGE: A BRIGHT LIGHT suddenly flares. FRODO squeezes his eyes shut, gasping.
FRODO
frightened
Where am I?
A FAMILIAR VOICE cuts through the swirl of sound.
GANDALF (O.S.)
You are in the House of Elrond, and it is ten o’clock in the morning on October the twenty-fourth, if you want to know.
INT. FRODO’S BEDROOM - DAY
FRODO’S eyes flicker OPEN. He is lying in bed next to an OPEN WINDOW. DAPPLED sunlight plays on richly carved timbers, the sound of a nearby waterfall drifts through the VISTA of FIR TREES.
FRODO
weak relief
Gandalf!
ANGLE ON: GANDALF IS SITTING NEXT TO FRODO’S BED, softly puffing on his pipe. He smiles at FRODO.
GANDALF
Yes, I'm here. And you're lucky to be here too. A few more hours and you would have been beyond our aid. But you have some strength in you, my dear Hobbit.
FRODO sits up, looking at GANDALF questioningly.
FRODO
What happened, Gandalf? Why didn't you meet us?
GANDALF
I am sorry, Frodo.
CLOSE ON: GANDALF troubled. His eyes drift away.
GANDALF
I was delayed.
CUT TO:
EXT. ORTHANC SUMMIT - NIGHT
SARUMAN stands over GANDALF, gloating.
SARUMAN
A friendship with Saruman is not lightly thrown aside.
With the power of his staff, SARUMAN tosses GANDALF from one side of ORTHANC to off the edge of the other side where he holds GANDALF, suspended as if GANDALF is standing on the side of the tower.
SARUMAN
One ill turn deserves another. It is over. Embrace the power of the Ring or embrace your own destruction!
SARUMAN raises GANDALF again, then sends him crashing to the floor.
GANDALF
There is only one Lord of the Ring. Only one who can bend it to his will and he does not share power.
SUDDENLY! GANDALF lurches to his feet and THROWS himself off the TOWER! SARUMAN watches GANDALF fly away from ISENGARD, on the BACK of a GIANT EAGLE.
SARUMAN
chilling
So you have chosen death.
CUT TO:
EXT. SKIES OVER MOUNTAINS - DAWN
GWAIHIR THE WINDLORD soars majestically over the mountains, carrying GANDALF towards the dawn.
CUT TO:
INT. FRODO’S BEDROOM - RIVENDELL - DAY
FRODO raises himself up and looks at GANDALF.
FRODO
Gandalf! What is it?
GANDALF returns his attention to FRODO.
GANDALF
Nothing, Frodo --
ANGLE ON: SAM runs to FRODO’S bedside. He is overjoyed to find FRODO awake.
SAM
Frodo! Frodo! Bless you, you’re awake!!
GANDALF
Sam has hardly left your side.
SAM
We were worried about you -- weren't we, Mr. Gandalf?
GANDALF
By the skills of Lord Elrond, you’re beginning to mend.
ANGLE ON: ELROND, LORD OF THE HIGH ELVES, steps up to FRODO’S bedside, his face is neither old nor young, though in it is written the memory of many things both glad and sorrowful.
ELROND
Welcome to Rivendell, Frodo Baggins.
FRODO sits up, looking at ELROND with awe.
CUT TO:
EXT. RIVENDELL VALLEY - DAY
WIDE ON: RIVENDELL, a small cluster of elegant ELVEN BUILDINGS sitting in a Shangri-la like VALLEY below towering cliffs and snow capped mountains.
ELROND (V.O.)
You have found your way to the last homely house east of the sea. The Elves of Imladris have dwelt within this valley for 3,000 years though few of my kin now remain.
ANGLE ON: FRODO looks out from his balcony.
CUT TO:
EXT. RIVENDELL GARDENS - DAY
FRODO and SAM walk together. Suddenly, the voices of MERRY and PIPPIN can be heard as they bound up to FRODO and throw their arms around him.
MERRY
Frodo! Frodo!
SAM looks past FRODO smiling, a bent figure sits alone on a bench, in the SUN.
CLOSE ON: FRODO turning, following SAM’S gaze.
FRODO
Bilbo!
EXT. RIVENDELL TERRACE - DAY
CLOSE ON: BILBO BAGGINS! He breaks into a broad grin as FRODO rushes forward to embrace him. BILBO has aged significantly since we last saw him.
BILBO
Hello, Frodo, my lad!
FRODO
Bilbo!
LATER. FRODO is turning the neatly inscribed title page of a red leather bound journal:
FRODO
“There and Back Again: A Hobbit's Tale” by Bilbo Baggins.
BILBO smiles PROUDLY. He is sitting with FRODO on a terrace overlooking a WATERFALL. FRODO looks at PAGE AFTER PAGE of beautiful HANDWRITING, with intricate MAPS and DRAWINGS.
FRODO
This is wonderful.
BILBO
I meant to go back, wander the paths of Mirkwood, visit Laketown, see the Lonely Mountain again, but age, it seems, has finally caught up with me.
FRODO turns a page there before him, is a map of the SHIRE.
FRODO
quietly
I miss the Shire. I spent all my childhood pretending I was off somewhere else -- off with you, on one of your adventures.
looks at Bilbo
But my own adventure turned out to be quite different. I'm not like you, Bilbo.
BILBO
My dear boy.
CUT TO:
EXT. RIVENDELL TERRACE - EVENING
SAM busily tries to stuff more and more things into his already full pack, pots and pans, blankets, cooking utensils, provisions, clothes.
SAM
Now, what have I forgotten?
PULL BACK TO REVEAL: FRODO, hands in his pockets, watching SAM.
FRODO
Packed already?
SAM looks up, startled.
SAM
slightly embarrassed
No harm in being prepared.
FRODO strolls to the edge of the BALCONY.
FRODO
I thought you wanted to see the Elves, Sam?
SAM
I do --
FRODO
More than anything.
SAM
I did. It’s just -- We did what Gandalf wanted, didn't we? We got the Ring this far, to Rivendell -- and I thought -- seeing as how you're on the mend, we'd be off soon. Off home.
FRODO
You're right, Sam --
FRODO looks at SAM.
FRODO
-- we did what we set out to do.
CLOSE ON: FRODO opens his hand, the RING sits in his PALM.
FRODO
The Ring will be safe in Rivendell. I am ready to go home.
CUT TO:
INT. ELROND’S CHAMBER - RIVENDELL - DAY
GANDALF and ELROND watch FRODO and SAM from ELROND’S balcony.
ELROND
His strength returns.
GANDALF
That wound will never fully heal. He will carry it the rest of his life.
ELROND
Yet to have come so far still bearing the Ring, the Hobbit has shown extraordinary resilience to its evil.
GANDALF
It is a burden he should never have had to bear. We can ask no more of Frodo.
ELROND
Gandalf, the enemy is moving. Sauron's forces are massing in the East. His Eye is fixed on Rivendell. And Saruman, you tell me, has betrayed us. Our list of allies grows thin.
GANDALF
His treachery runs deeper than you know. By foul craft, Saruman has crossed Orcs with Goblin Men ... He’s breeding an army in the caverns of Isengard. An army that can move in Sunlight and cover great distance at speed. Saruman is coming for the Ring.
ELROND turns and walks away.
ELROND
This evil cannot be concealed by the power of the Elves. We do not have the strength to fight both Mordor and Isengard. Gandalf, the Ring cannot stay here.
GANDALF turns and looks out the window.
ANGLES ON: Sounds of arrivals. GANDALF watches as BOROMIR rides through the RIVENDELL gate, followed by LEGOLAS and GIMLI.
ELROND (V.O.)
This peril belongs to all Middle-Earth. They must decide now how to end it.
ANGLE ON: ELROND approaches GANDALF.
ELROND (V.O.)
The time of the Elves is over. My people are leaving these shores. Who will you look to when we’ve gone? The Dwarves? They hide in their mountains seeking riches. They care nothing for the troubles of others.
GANDALF
It is in Men that we must place our hope.
ELROND
Men? Men are weak. The race of Men is failing. The blood of Númenor is all but spent, its pride and dignity forgotten. It is because of Men the Ring survives.
FLASH INSERT: With the broken sword, ISILDUR slices off SAURON’S finger. ELROND reacts.
ELROND (V.O.)
I was there, Gandalf. I was there three thousand years ago when Isildur took the Ring.
FLASH INSERT: ISILDUR PICKS UP THE RING AND STARES AT IT, ENTRANCED.
ELROND (V.O.)
I was there when the day the strength of Men failed.
CUT TO:
INT. CRACK OF DOOM - DAY
ELROND
Isildur -- hurry -- follow me!
IMAGES: ELROND leads ISILDUR into the steaming volcano.
ELROND (V.O.)
I led Isildur into the heart of Mount Doom, where the Ring was forged: the one place it could be destroyed.
FLASH INSERT: ELROND AND ISILDUR STAND BEFORE THE FIRES OF MOUNT DOOM.
ELROND
Cast it in the fire -- destroy it!
CLOSE ON: ISILDUR CAPTIVATED BY THE RING.
ISILDUR
No.
ISILDUR turns and walks away.
ELROND
Isildur!!
INT. ELROND’S CHAMBER - RIVENDELL - DAY
ANGLE ON: ELROND turns to GANDALF.
ELROND
It should have ended that day, but evil was allowed to endure. Isildur kept the Ring and the line of kings was broken. There’s no strength left in the world of Men. They are scattered, divided, leaderless.
GANDALF
There is one who could unite them, one who could reclaim the throne of Gondor.
ELROND
He turned from that path a long time ago. He has chosen exile.
CUT TO:
INT. ELROND’S CHAMBER - RIVENDELL - NIGHT
ANGLE ON: STRIDER watches from the shadows as BOROMIR strolls through the darkened gallery. BOROMIR’S eyes are drawn to an old FRESCO on the wall, depicting ISILDUR defeating SAURON.
BOROMIR turns suddenly and notices STRIDER, looking at him. He looks STRIDER up and down, confused for a moment.
BOROMIR
You are no Elf.
STRIDER
Men of the South are welcome here.
BOROMIR
Who are you?
STRIDER
I am a friend to Gandalf the Grey.
BOROMIR nods, understanding Strider’s vagueness.
BOROMIR
Then we are here on common purpose, friend.
BOROMIR smiles uncomfortably. STRIDER only looks at him silently.
BOROMIR looks with WONDERMENT at NARSIL, the BROKEN BLADE of ELENDIL, which lies on a cloth-covered plinth.
BOROMIR
quiet awe
The shards of Narsil, the blade that cut the Ring from Sauron's hand.
BOROMIR picks up the sword and gently touches the blade.
CLOSE ON: a small bloom of blood appears on BOROMIR’S finger.
BOROMIR
Still sharp.
He slowly looks over to STRIDER, as if sensing a connection.
BOROMIR
But no more than a broken heirloom.
BOROMIR replaces the blade, but it clatters to the floor.
BOROMIR walks away, leaving STRIDER sitting alone.
CLOSE ON: STRIDER picks up the broken hilt, as ARWEN appears behind him.
ARWEN
Why do you fear the past? You are Isildur's heir, not Isildur himself. You are not bound to his fate.
STRIDER
The same blood flows in my veins -- the same weakness --
ARWEN
Your time will come. You will face the same evil. And you will defeat it.
Elvish: with subtitles
A si i-Dhúath ú-orthor, Aragorn. Ú or le a ú or nin.
The shadow does not hold sway yet. Not over you and not over me.
CUT TO:
EXT. RIVENDELL VALLEY - NIGHT
Night falls upon the beautiful valley of RIVENDELL, still and quiet.
EXT. RIVENDELL WATERFALL - NIGHT
STRIDER and ARWEN stand together upon a stone bridge, the EVENSTAR at ARWEN’S breast shines in the moonlight.
ARWEN
Elvish: with subtitles
Renech i lu i erui govannen?
Do you remember when we first met?
STRIDER
Elvish: with subtitles
Nauthannem i ned ol reniannen.
I thought I had strayed into a dream.
ARWEN reaches up and gently touches the GREY at STRIDER’S temples.
ARWEN
Elvish: with subtitles
Gwenwin in enninath. U-arnech in naeth i si celich.
Long years have passed. You did not have the cares you carry now.
ARWEN looks into STRIDER’S eyes.
ARWEN
Elvish: with subtitles
Renech i beth i pennen?
Do you remember what I told you?
ARWEN reaches for STRIDER’S hand.
STRIDER
quietly
You said you would bind yourself to me, and forsaking immortal life of your people.
ARWEN
whisper
And to that I hold. I would rather share one lifetime with you than face all the Ages of this world alone.
CLOSE ON: STRIDER looks down. In his hand lies the EVENSTAR.
ARWEN
I choose a mortal life.
STRIDER
You cannot give me this.
ARWEN
It is mine to give to whom I will, like my heart.
ARWEN closes STRIDER’S fingers around the jewel.
ARWEN leans towards STRIDER, gently kissing him.
INT. COUNCIL CHAMBER - RIVENDELL - DAY
IMAGES from the PROLOGUE: the RINGS being given to the ELVES, DWARVES, and MEN.
ELROND (V.O.)
Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die, One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie. One Ring to rule them all. One Ring to find them, One Ring to bring them all together and in the darkness bind them, In the Land of Mordor where the Shadows lie.
CLOSE ON: FRODO opens his hand, the RING lies in his palm. He looks up.
ANGLE ON: ELROND addresses the COUNCIL.
ELROND
Strangers from distant land, friends of old. You have been summoned here to answer the threat of Mordor. Middle-Earth stands upon the brink of destruction. None can escape it. You will unite or you will fall. Each race is bound to this fate, this one doom --
FRODO sits amongst a council of FREE-PEOPLES of Middle earth, ELROND stands before them, addressing GANDALF, STRIDER, LEGOLAS, and 20 other ELVES, DWARVES, and MEN.
ELROND
Bring forth the Ring, Frodo.
ANGLE ON: FRODO steps forward and moves towards a stone PLINTH.
He places the RING on the plinth and returns to his seat.
BOROMIR
shocked
So it is true!
LEGOLAS
disbelief
Sauron’s Ring! The Ring of Power!
GIMLI
grim
The doom of man!
ON THE SOUNDTRACK: The HUM of the RING sounds.
ANGLE ON: Several members of the COUNCIL take notice. BOROMIR stands and begins to approach the RING, as if drawn to it.
BOROMIR
In a dream, I saw the eastern sky grow dark, but in the West a pale light lingered. A voice was crying: “Your doom is near at hand. Isildur’s Bane is found.”
ANGLE ON: ELROND and GANDALF exchange glances. BOROMIR reaches for the RING.
BOROMIR
Isildur’s Bane.
ELROND
standing
Boromir!
ANGLE ON: GANDALF stands and speaks in the BLACK TONGUE.
ON THE SOUNDTRACK: The RING responds to GANDALF.
ANGLES ON: BOROMIR staggers back to his chair, the sky darkens, thunder rolls, the ground trembles.
GANDALF
Black Speech
Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatul.
One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the Darkness bind them.
Nature returns to normal. ELROND looks to GANDALF.
ELROND
sternly
Never before has any voice uttered the words of that tongue here in Imladris.
GANDALF
I do not ask your pardon, Master Elrond, for the Black Speech of Mordor may yet be heard in every corner of the West! The Ring is altogether evil.
ANGLE ON: GANDALF returns to his seat.
ANGLE ON: BOROMIR shakes his head. He stands again to make his case to the COUNCIL.
BOROMIR
It is a gift -- a gift to the foes of Mordor! Why not use this Ring? Long has my father, the Steward of Gondor, kept the forces of Mordor at bay, by the blood of our people are your lands kept safe. Give Gondor the weapon of the enemy, let us use it against him!
STRIDER
You cannot wield it. None of us can. The One Ring answers to Sauron alone -- it has no other master.
ANGLE ON: BOROMIR turns and looks at STRIDER, coolly.
BOROMIR
And what would a Ranger know of this matter?
STRIDER says nothing and BOROMIR turns away dismissively.
ANGLE ON: LEGOLAS stands.
LEGOLAS
This is no mere Ranger. He is Aragorn, son of Arathorn. You owe him your allegiance.
ANGLE ON: FRODO looks at STRIDER questioningly. BOROMIR turns sharply.
BOROMIR
quiet disbelief
Aragorn? This is Isildur's heir?
LEGOLAS
And heir to the throne of Gondor.
STRIDER
Elvish: with subtitles
Havo dad, Legolas.
Sit down, Legolas.
BOROMIR
Gondor has no king.
GANDALF
Aragorn is right, we cannot use it.
ELROND
You have only one choice, the Ring must be destroyed.
ON THE SOUNDTRACK: The HUM OF THE RING seems to grow louder in FRODO’S ears.
ANGLE ON: GIMLI suddenly stands, excited.
GIMLI
Then, what are we waiting for?
GIMLI suddenly rushes forward! He swings his axe down on the RING. The axe SHATTERS with a deafening CRACK! GIMLI falls backwards staring in disbelief at the RING, unharmed!
ANGLE ON: FRODO winces as an angry IMAGE of the FIERY EYE hits him! He slumps in his chair, clutching his forehead. GANDALF looks at him with concern.
ELROND
The Ring cannot be destroyed, Gimli, son of Glóin, by any craft that we here possess. The Ring was made in the fires of Mount Doom -- only there can it be unmade.
ELROND
It must be taken deep into Mordor, and cast back into the fiery chasm from whence it came. One of you must do this.
STUNNED SILENCE, the council sits with downcast eyes, as if a great dread has descended upon them.
BOROMIR addresses the council in a quiet voice.
BOROMIR
One does not simply walk into Mordor. Its Black Gates are guarded by more than just Orcs. There is evil there that does not sleep and the Great Eye is ever watchful. It is a barren wasteland riddled with fire, and ash and dust -- the very air you breathe is a poisonous fume. Not with ten thousand Men could you do this. It is folly.
LEGOLAS
Have you heard nothing Lord Elrond has said? The Ring must be destroyed.
GIMLI
And I suppose you think you're the one to do it?
BOROMIR
And what if we fail, what then? What happens when Sauron takes back what is his?
GIMLI leaps to his feet!
GIMLI
I will be dead before I see the Ring in the hands of an Elf!
A STORM OF ARGUMENT erupts around the room.
CLOSE ON: FRODO, sound disappears as he watches in SLOW MOTION, the angry faces, the shaking fists, the accusatory fingers, his eyes move to the RING. THE HUM grows louder in his head.
GIMLI
shouting
Never trust an Elf!
CLOSE ON: THE RING fills the screen, streams of blood flow across the surface, flames flicker within the GOLD BAND.
GANDALF
Do you not understand? While we bicker amongst ourselves, Sauron’s power grows! No one will escape it. You will all be destroyed, with your homes burnt and your families put to the sword!
CLOSE ON: FRODO, breathing rapidly, CAUGHT in the grip of his hideous vision. With a huge effort of will, FRODO tears his gaze upon the RING.
ANGLE ON: FRODO suddenly stands, he speaks in a strong, clear voice.
FRODO
I will take it. I will take it. I will take the Ring to Mordor.
SUDDEN SILENCE. FRODO looks around the room at the astonished faces.
FRODO
quietly
Though I do not know the way.
ANGLE ON: GANDALF rises to his feet.
GANDALF
I will help you bear this burden, Frodo Baggins, as long as it is yours to bear.
ARAGORN
If by my life or death I can protect you, I will.
kneels before Frodo
-- you have my sword.
ARAGORN steps forward, followed by LEGOLAS and GIMLI.
LEGOLAS
And you have my bow.
GIMLI
And my axe.
ANGLE ON: BOROMIR looks at them all and then walks to FRODO.
BOROMIR
You carry the fates of us all, little one.
BOROMIR looks towards ELROND and GANDALF.
BOROMIR
If this is indeed the will of the Council, then Gondor will see it done.
ANGLE ON: FRODO stares in wonder as the GREATEST FIGHTERS in all Middle earth stand at his side.
SAM
unseen
Here!
A SUDDEN NOISE. SAM pops up from behind a BUSH!
SAM
Mr. Frodo's not going anywhere without me.
ELROND
No, indeed, it is hardly possible to separate you, even when he is summoned to a secret Council and you are not.
ANGLE ON: MERRY and PIPPIN jump up from behind another bush!
MERRY
Oi! We're coming too! You'd have to send us home tied up in a sack to stop us.
PIPPIN
Anyway, you need people of intelligence on this sort of mission -- quest -- thing --
MERRY
Well, that rules you out, Pip.
ELROND SURVEYS THE GROUP.
ELROND
thoughtfully
Nine companions, so be it.
announcing
You shall be the FELLOWSHIP OF THE RING.
PIPPIN
Great. Where are we going?
CUT TO:
EXT. GILRAEN’S MEMORIAL - RIVENDELL - DAWN
CLOSE ON: A HAND gently and reverently removes debris from the base and form of a STATUE
ANGLE ON: The STATUE OF GILRAEN’S hands are folded before her, and her head is hooded.
ANGLE ON: ARAGORN stands back and gazes into her sad face.
ELROND (O.S.)
Elvish; with subtitles
Anirne hene beriad i chên în. Ned Imladris nauthant e le beriathar aen.
She wanted to protect her child. She thought that in Rivendell you would be safe.
ANGLE ON: ELROND approaches ARAGORN.
ANGLE ON: ARAGORN pays little attention to ELROND. He caresses the face of his MOTHER’S STATUE.
ANGLE ON: ELROND approaches from behind ARAGORN.
ELROND
In her heart, your mother knew you’d be hunted all your life. That you’d never escape your fate. The skill of the Elves can reforge the sword of kings, but only you have the power to wield it.
CLOSE ON: ARAGORN TURNS to him.
ARAGORN
I do not want that power. I have never wanted it.
ELROND
You are the last of that bloodline. There is no other.
ANGLE ON: ARAGORN stands silently and continues looking upon the STATUE.
INT. FRODO’S BEDROOM - RIVENDELL - DAWN
CLOSE ON: AN OLD SWORD sliding out of a shabby leather SCABBARD. Its polished, well tendered BLADE glitters COLD AND BRIGHT.
BILBO
My old sword “Sting”. Here, take it!
BILBO offers STING to FRODO.
FRODO
It's so light!
BILBO
Yes, yes, made by the Elves, you know. The blade glows blue when Orcs are close -- and it’s times like that, my lad, when you have to be extra careful.
BILBO unwraps a SMALL SHIRT OF CLOSE WOVEN MAIL.
BILBO
Here’s a pretty thing. Mithril, as light as a feather, and as hard as dragon scales. Let me see you put it on. Come on.
CLOSE ON: FRODO peels off his SHIRT, revealing the RING on the CHAIN around his neck.
BILBO
entranced
Oh! My old Ring.
FRODO frowns as BILBO moves toward him.
BILBO
I should very much like to hold it again, one last time.
BILBO reaches forward, eyes locked on the RING.
ANGLE ON: SUDDENLY! A SHADOW passes across BILBO, for a split second he becomes a WRINKLED CREATURE with a HUNGRY FACE and BONY, GROPING HANDS.
ANGLE ON: FRODO pulls away, shocked.
ANGLE ON: THE SHADOW passes. BILBO slumps into a chair, his head in his hands. BILBO falters, his eyes filling with tears.
BILBO
Oh!
sad
I'm sorry, that I brought this upon you, my boy. I'm sorry that you must carry this burden. I'm sorry for everything.
BILBO sobs and FRODO moves to comfort him.
CUT TO:
EXT. RIVENDELL TERRACE - DAY
ANGLE ON: ELROND and FRODO walk towards the rest of the FELLOWSHIP waiting at the Gate of RIVENDELL.
ELROND
The time has come for the Ring to set out. You cannot count on your journey being aided by war or force. You will pass into the domain of the Enemy far from aid. Do you still hold to your word Frodo, that you will be the Ring-bearer?
FRODO
I do. I must. I will go with Sam.
ELROND
Then I cannot help you much, not even with counsel. I can foresee very little of your road; and how your task is to be achieve Mountains, and draws nigh even to the borders of the Greyflood; and under the Shadow all is dark to me. You will meet many foes, some open, and some disguised; and you may find friends upon your way when you least look for it. I will send out messages, such as I can contrive, to those whom I know in the wide world; but so perilous have the lands now become that some may well miscarry, or come no quicker than you yourself. Had I a host of Elves in armor of the Elder Days, it would avail little, save to arouse the power of Mordor. Are you confident in your companions?
FRODO
Yes, Lord Elrond. I must be, I’m afraid, for if I doubt them, we may never succeed.
ELROND
And what of your Hobbit friends? I had hoped to send them back to the Shire as messengers to warn the people of the impending danger according to the fashion of your country. I feel that the youngest, Peregrin Took, should not go with you. My heart is against it.
FRODO
His heart is set upon going. There will be no stopping him, even if you did send him home in a sack.
ELROND
Let it be so then. The Fellowship awaits.
WIDE ON: ELROND and FRODO turn a corner and descend to the FELLOWSHIP, now waiting by the gate.
EXT. RIVENDELL GATE - DAY
ANGLE ON: FRODO joins the FELLOWSHIP, ready to depart. They are set to go on foot with only SAM’S PONY, BILL, to carry much of their baggage.
ANGLE ON: ELROND stands with the ELVES, addressing their only hope of success.
ELROND
The Ring-bearer is setting out on the Quest of Mount Doom. On you who travel with him, no oath nor bond is laid to go further that you will. Farewell. Hold to your purpose. May the blessing of Elves and Men and all Free Folk go with you.
GANDALF
The Fellowship awaits the Ring-bearer.
ANGLE ON: FRODO slowly turns to the FELLOWSHIP and timidly makes his way to the head of the GROUP.
FRODO’S POV: The faces of those who vowed to follow him watch as he makes his way to lead the FELLOWSHIP.
ANGLE ON: FRODO leads the FELLOWSHIP out of RIVENDELL. He turns to GANDALF.
FRODO
Mordor, Gandalf, is it left or right?
ANGLE ON: GANDALF continues looking ahead.
GANDALF
Left.
ANGLE ON: GANDALF places his hand on Frodo’s left shoulder. The FELLOWSHIP follows FRODO into the Middle-Earth.
ANGLE ON: ARAGORN turns to bid a silent farewell.
ANGLE ON: ARWEN stands in a group of ELVES, watching him.
ANGLE ON: He nods to her and follows the FELLOWSHIP out.
EXT. RIVENDELL VALLEY - MORNING
ANGLE ON: The FELLOWSHIP climbs the long steep path out of the cloven vale of RIVENDELL.
CUT TO:
EXT. ROUGH COUNTRY - SOUTH OF RIVENDELL - DAY
ANGLE ON: The FELLOWSHIP trekking through a land of DEEP VALLEYS and turbulent water. The MISTY MOUNTAINS rise sharply to their left.
GANDALF (V.O.)
We must hold to this course, west of the Misty Mountains, for forty days. If our luck holds, the Gap of Rohan will still be open to us. From there, our road turns east, to Mordor.
CUT TO:
EXT. EREGION HILLS - DAWN
CLOSE ON: SAM at the CAMPFIRE. The SOUND OF CLASHING SWORDS!
WIDER: ARAGORN and BOROMIR are giving PIPPIN SWORD TUITION.
BOROMIR
Get away from the blade, Pippin -- on your toes -- good, very good -- I want you to react, not think.
SAM
Should not be too hard.
BOROMIR
Move your feet.
MERRY
Quite good, Pippin.
PIPPIN
Thanks.
CLOSE ON: GIMLI has managed to corner GANDALF.
GIMLI
If anyone were to ask for my opinion, which I note they have not, I would say we are taking the long way round. Gandalf, we can pass through the Mines of Moria. My cousin, Balin, would give us a royal welcome.
ANGLE ON: GANDALF clearly thinks this is a bad idea.
GANDALF
No, Gimli. I would not take the road through Moria unless I had no other choice.
ANGLE ON: BOROMIR thrusts, catching PIPPIN on the hand. PIPPIN throws down his SWORD, KICKS and LUNGES at BOROMIR, tackling him o the ground. Much laughter.
ANGLE ON: LEGOLAS’ EYES are fixed on a DISTANT DARK PATCH which darts about in the sky, like flying smoke in the wind.
SAM
What is that?
GIMLI
Nothing, it’s just a wisp of cloud.
BOROMIR
worried
It's moving fast, against the wind.
LEGOLAS
Crebain from Dunland!
ARAGORN
urgently
Hide!
BOROMIR
Merry! Pippin! Sam! Take cover!
WIDE ON: THE FELLOWSHIP scramble under what little cover there is as a regiment of LARGE CROWS fly overhead at GREAT SPEED, wheeling and circling above.
As their dark shadow passes over the FELLOWSHIP a single harsh CROAK is heard and the CROWS suddenly wheel away, back towards the SOUTH.
ANGLE ON: GANDALF staggers to his feet.
GANDALF
Spies of Saruman. The passage south is being watched.
GANDALF looks at ARAGORN, turns to the others, gestures towards a high mountain pass.
GANDALF
We must take the Pass of Caradhras!
CUT TO:
EXT. SNOWY MOUNTAINSIDE - DAY
ANGLE ON: The FELLOWSHIP clamber through ROCK and SNOW.
CLOSE ON: FRODO slips on some SHALE as he scrambles to his feet, the RING falls on the ground.
CLOSE ON: The RING gleaming in the snow! BOROMIR’S HAND picks it up by the CHAIN.
ANGLE ON: He stands, the RING dangling before his eyes. He seems to grow in stature, as if absorbing its power.
ANGLE ON: ARAGORN warily approaches BOROMIR.
ANGLE ON: BOROMIR is motionless, he stares at the RING, as if transfixed.
ARAGORN
Boromir?
BOROMIR
It is a strange fate that we should suffer so much fear and doubt over so small a thing, such a little thing.
ARAGORN
quietly
Boromir, give the Ring to Frodo.
CLOSE ON: ARAGORN’S HAND moves to his sword hilt.
RING’S POV: Looking at BOROMIR’S face.
ON THE SOUNDTRACK: The strange HUM VIBRATES.
CLOSE ON: A WEIRD BEATIFIC SMILE lights up on BOROMIR’S face.
The HUM grows to a deafening roar! BOROMIR suddenly snaps out of his trance and hands the RING to FRODO.
BOROMIR
lightly
As you wish. I care not.
BOROMIR smiles at FRODO, ruffling his hair.
CLOSE ON: ARAGORN unhands his SWORD.
CUT TO:
EXT. ISENGARD - DAY
Following the CROWS as they race deeper and deeper, passing a vista of INDUSTRY, HUNDREDS OF ORCS and writhing BIRTH SACKS flying past SARUMAN, who stands upon a wooden GANTRY.
CLOSE ON: SARUMAN, listening to the CRIES of the CROWS.
SARUMAN
So, Gandalf, you try to lead them over Caradhras. And if that fails where then will you go?
INSERT IMAGE: The FELLOWSHIP struggles through the SNOW on CARADHRAS.
SARUMAN (V.O.)
If the mountain defeats you, will you risk a more dangerous road?
CUT TO:
EXT. PASS OF CARADHRAS - DAY
THE FELLOWSHIP are struggling through a blinding blizzard, up towards the PASS OF CARADHRAS.
ANGLE ON: LEGOLAS the ELF moves lightly across the top of the snow, he suddenly pauses. SARUMAN’S VOICE sweeps by on the wind.
SARUMAN (V.O.)
chanting; subtitled
Cuiva nwalca Carnirasse; nai yarvaxea rasselya!
Wake up cruel Redhorn! May your horn be bloodstained!
LEGOLAS
urgent
There is a fell voice on the air.
GANDALF
It’s Saruman!
THUNDER RUMBLES. ROCK and SHALE fall from above.
ARAGORN
urgently
He's trying to bring down the mountain. Gandalf! We must turn back!
GANDALF
No!
GANDALF RAISES HIS STAFF. HE CHANTS INTO THE WIND.
GANDALF
yelling
Losto Caradhras, sedho, hodo, nuitho i ruith.
Sleep, Caradhras, be still, lie still, hold your wrath.
CUT TO:
EXT. ISENGARD - DAY
CAMERA SWEEPS PAST SARUMAN, he stands on the PINNACLE OF ORTHANC, CHANTING.
SARUMAN
Cuiva nwalca Carnirasse; Nai yarvaxea rasselya; taltuva notto-carinnar!
Wake up cruel Redhorn! May your bloodstained horn fall upon enemy heads!
CLOUDS ARE FLOWING FROM ALL DIRECTIONS, converging on the distant mountains in a stormy MAELSTROM.
EXT. PASS OF CARADHRAS - DAY
SARUMAN’S voice strengthens, rolling past the FELLOWSHIP like THUNDER. A LIGHTNING CRACK explodes on the mountainside above them.
ANGLE ON: FRODO looks up in HORROR as a huge snow avalanche thunders down towards them!
ANGLES ON: LEGOLAS pulls GANDALF to safety. ARAGORN shields FRODO and SAM as snow piles around them. Within moments, the PASS is blocked and the FELLOWSHIP are enveloped in snow.
BOROMIR and ARAGORN frantically dig for the HOBBITS, who are pulled out SHIVERING and FEARFUL.
BOROMIR
urgent
We must get off the mountain! Make for the Gap of Rohan and take the West road to my city!
ARAGORN
The Gap of Rohan takes us too close to Isengard.
GIMLI
We cannot pass over a mountain. Let us go under it. Let us go through the Mines of Moria.
ANGLE ON: GANDALF has a concerned look on his face.
SARUMAN (V.O.)
Moria. You fear to go into those mines, don’t you? The Dwarves delved too greedily and too deep.
INT. ORTHANC ANTE-CHAMBER - DAY
ANGLE ON: SARUMAN sits in ORTHANC reviewing an ancient text.
CLOSE ON: The BOOK showing the DOOR to MORIA.
SARUMAN
You know what they awoke in the darkness of Khazad-dûm. Shadow and flame.
CLOSE ON: AN IMAGE OF A FEARFUL CREATURE. WREATHED IN FLAME.
CUT TO:
EXT. PASS OF CARADHRAS - DAY
GANDALF
Let the Ring-bearer decide.
CLOSE ON: FRODO, the weight of the decision weighing heavily upon him.
CLOSE ON: MERRY and PIPPIN shivering in BOROMIR’S arms.
GANDALF
Frodo?
FRODO meets GANDALF’S eye.
FRODO
We will go through the mines.
GANDALF slowly nods.
GANDALF
So be it.
CUT TO:
EXT. WEST BASE OF THE MISTY MOUNTAINS - DUSK
WIDE ON: The FELLOWSHIP makes their way in the shadow of the ruins of a great aqueduct in the mist and ice of the mountains.
ANGLE ON: GANDALF beckons to FRODO.
GANDALF
Frodo, come and help an old man.
ANGLE ON: FRODO comes forward and allows GANDALF to lean on him.
GANDALF
How is your shoulder?
FRODO
Better than it was.
GANDALF stops.
GANDALF
And the Ring? You feel its power growing, don’t you? I’ve felt it too. You must be careful now. Evil will be drawn to you from outside the Fellowship. And, I fear, from within.
ANGLE ON: BOROMIR passes them. They glance at him.
FRODO
subdued
Who then do I trust?
GANDALF
You must trust yourself. Trust your own strengths.
FRODO
What do you mean?
GANDALF
There are many powers in this world for good or for evil. Some are greater than I am. And against some I have not yet been tested.
CLOSE ON: GIMLI comes to the top of the path and looks in WONDER.
GIMLI
in awe
The Walls of Moria!
WIDE ON: The FELLOWSHIP stands before a looming cliff cut into a sheer formation.
EXT. MORIA GATE - NIGHT
Footing is treacherous on the narrow strips of green and greasy stones.
ANGLE ON: GIMLI taps the WALL with his axe, listening. GANDALF does the same with his staff.
GIMLI
Dwarf doors are invisible when closed.
GANDALF
Yes, Gimli, their own masters cannot find them if their secrets are forgotten.
LEGOLAS
Why doesn’t that surprise me?
CLOSE ON: GIMLI sniffs with disgust at the comment.
ANGLE ON: GANDALF approaches the smooth rock wall between TWO TWISTED, GNARLED TREES. Slowly, faint lines appear like slender veins of luminous silver running through the stone.
GANDALF
Isildin, it mirrors only starlight and moonlight.
ANGLE ON: A LARGE MOON rises over the mountains.
ANGLE ON: The lines on the wall grow BROADER and CLEARER, forming a glowing arch of interlacing ancient letters and symbols.
GANDALF
It reads, “The door of Durin, Lord of Moria. Speak, friend, and enter.”
MERRY
What do you suppose that means?
GANDALF
confident
It’s simple. If you are a friend, you speak the password and the doors will open.
GANDALF raises his arms.
GANDALF
incanting
Annon Edhellen, edro hi ammen!
Gate of the Elves, open now for me!
The cliff towers into the night, the wind blows cold, FRODO shivers and the door stands fast. Undaunted, GANDALF raises his arms again.
GANDALF
Fennas Nogothrim, lasto beth lammen.
Doorway of the Dwarf-folk, listen to the word of my tongue.
PIPPIN
Nothing's happening.
ANGLE ON: GANDALF glances at him, annoyed. He begins to push on the doors, but they remain fast.
GANDALF
I once knew every spell in all the tongues of Elves, Men, and Orcs.
PIPPIN
What are you going to do, then?
GANDALF
angrily
Knock your head against these doors, Peregrin Took! And if that does not shatter them, and I am allowed a little peace from foolish questions, I will try to find the opening words.
LATER:
GANDALF CONTINUES.
MUMBLING spells in his efforts to open the door.
GANDALF
wearily
Ando Eldarinwa -- a lasta quettanya, Fenda Casarinwa.
Gate of Elves -- listen to my word, Threshold of Dwarves.
ANGLE ON: SAM packs pots and pans at his feet, watching sadly as ARAGORN unsaddles BILL THE PONY.
CLOSE ON: ARAGORN whispering to BILL THE PONY.
ARAGORN
whispering
Mines are no place for a Pony, even one so brave as Bill.
SAM
Bye, Bill.
ARAGORN
Go on, Bill, go on, don't worry, Sam , he knows his way home.
ARAGORN slaps BILL on the rump. BILL goes trotting off.
CLOSE ON: SAM watching BILL disappear into the darkness.
SPLASH! MERRY and PIPPIN are tossing stones into the lake. BLACK RIPPLING RINGS slowly fan out. PIPPIN is about to throw another stone, but ARAGORN grabs his arm.
ARAGORN
ominous
Do not disturb the water.
ARAGORN watches anxiously as the RIPPLES appear to grow, he exchanges a look with BOROMIR.
ARAGORN’S hand creeps towards his sword.
ANGLE ON: GANDALF gives up in despair, he sits down beside FRODO.
CLOSE ON: FRODO peers at the ELVISH INSCRIPTION, his face breaks into a smile of comprehension.
FRODO
quietly
It's a riddle.
GANDALF raises his eyebrows.
FRODO
Speak, friend, and enter. What's the Elvish word for friend?
GANDALF
Oh -- mellon.
With that, the rock face silently divides in the middle and TWO GREAT DOORS swing outwards -- revealing a blackness deeper than night. As the FELLOWSHIP enter the BLACKNESS something in the water stirs.
INT. MORIA GATE - NIGHT
The FELLOWSHIP step warily into the darkness of MORIA, a DANK CAVERN, with winding steps leading deeper into the mountain.
GIMLI
Soon, Master Elf, you will enjoy the fabled hospitality of the Dwarves; roaring fires, malt beer, red meat off the bone! This, my friend, is the home of my cousin Balin. And they call this a mine.
snorting
A mine!
ANGLE ON: A GLOW from GANDALF’S STAFF suddenly lights the chamber. The FELLOWSHIP recoil in HORROR! Many DWARF SKELETONS are strewn about, clearly in the dead of some old battle, the rusting armor and shields are peppered with arrows and axes.
BOROMIR
grimly
This is no mine. It's a tomb!
GIMLI
in horror
Oh -- no -- no -- no!
LEGOLAS pulls a crude arrow out of a SKELETON.
LEGOLAS
Goblins.
The FELLOWSHIP draw swords and back away, towards the ENTRANCE.
BOROMIR
We make for the Gap of Rohan. We should never have come here.
EXT. MORIA GATE - NIGHT
ANGLE ON: FRODO is suddenly PULLED TO THE GROUND! A LONG SINUOUS TENTACLE is wrapped around FRODO’S ankle and is dragging him towards the lake!
FRODO CRIES OUT as ARAGORN and BOROMIR rush forward! ARAGORN severs the TENTACLE holding FRODO, and pulls him to safety. BOROMIR hacks at the other WRITHING LIMBS, 20 more tentacles ripple out of the LAKE! The dark water BOILS as the hideous beast lashes out at the FELLOWSHIP!
Again the creature grabs FRODO and pulls him to the lake. FRODO is flung in the air as the FELLOWSHIP battle the creature.
ARAGORN hacks at a tentacle. FRODO is released, falling into BOROMIR’S arms.
GANDALF
Into the mines!
BOROMIR
Legolas!
LEGOLAS shoots an ARROW into the creature’s head, gaining a few vital seconds for ARAGORN and BOROMIR as they race out of the water with FRODO. The FELLOWSHIP hurriedly back away from the CREATURE, retreating into the MORIA CHAMBER as many COILING ARMS seize the large doors.
INT. MORIA GATE - NIGHT
With a shattering echo, the creature rips the doors away, creating a rock slide that crashes down the CLIFF FACE. Within seconds, tons of rock seal the doorway, throwing the FELLOWSHIP into PITCH BLACKNESS.
ANGLE ON: A faint light rises from GANDALF’S staff, throwing a CREEPY GLOW across the old wizard’s face.
GANDALF
ominous
Now we have but one choice, we must face the long dark of Moria. Be on your guard, there are older and fouler things than the Orcs in the deep places of the world.
CUT TO:
INT. NEW CHAMBER - MORIA - NIGHT
WIDE ON: THE FELLOWSHIP crossing a precarious bridge above deep mine workings.
GANDALF
Quietly, now. It’s a four day journey to the other side. Let us hope that our presence will go unnoticed.
INT. MORIA MITHRIL MINE - NIGHT
ANGLE ON: The FELLOWSHIP enter a CHAMBER with old ropes and ancient ladders.
ANGLE ON: GANDALF touches a shining substance on the wall.
GANDALF
The wealth of Moria was not in gold or jewels but mithril.
GANDALF holds his staff over the expansive drop beside them. The FELLOWSHIP looks down.
ANGLE ON: The ENDLESS DEPTH of the mine. A FAINT, BLUE GLOW issues from its depths. It looks all but abandoned.
The FELLOWSHIP continues onward.
GANDALF
Bilbo had a shirt of mithril rings that Thorin gave him.
GIMLI
Oh, that was a kingly gift.
GANDALF
Yes. I never told him, but its worth was greater than the value of the Shire.
CLOSE ON: FRODO’S eyes widen.
CUT TO:
INT. MORIA CEMETERY CAVERN - NIGHT
They continue up a steep stair, passing through a DWARF CEMETERY. The graves are despoiled. DWARF SKELETONS are strewn about and GOBLIN GRAFFITI is scrawled on monuments in DRIED DWARF BLOOD. THE ATMOSPHERE is very sinister.
CUT TO:
INT. MORIA TUNNEL FORK - NIGHT
The path splits into three passages, each disappearing into dark tunnel. GANDALF pauses, frowning.
GANDALF
I have no memory of this place.
THE FELLOWSHIP are nervously waiting while GANDALF sits, staring intently at the 3 tunnel mouths in front of him. He appears to be in some kind of trance.
CLOSE ON: FRODO turns at the sound of a faint noise down the tunnel behind them.
PIPPIN
Are we lost?
MERRY
No. I don’t think we are. Shhh, Gandalf’s thinking.
PIPPIN
Merry!
MERRY
What?
PIPPIN
I'm hungry.
FRODO’S POV: a sudden glimpse of a creature darting in the darkness. FRODO is nervous, he approaches GANDALF.
FRODO
whispers
There's something down there.
GANDALF
quietly
It's Gollum.
FRODO
Gollum!
GANDALF
He's been following us for three days.
TEASING SHOT: An emaciated, leering creature.
FRODO
disbelieving
He escaped from the dungeons of Barad-dûr?
GANDALF
Escaped or was set loose. And now the Ring has drawn him here, he will never be rid of his need for it. He hates and loves the Ring, as he hates and loves himself. Sméagol’s life is a sad story.
GANDALF catches FRODO’S look of surprise.
GANDALF
Yes. Sméagol he was once called. Before the Ring came to him, before it drove him mad.
GOLLUM’S withered fingers are gripping the cave wall, his LARGE LUMINOUS eyes blinking with malice.
FRODO
grim
It’s a pity Bilbo didn't kill him when he had the chance.
GANDALF
Pity? It was pity that stayed Bilbo’s hand. Many that live deserve death, and some that die deserve life. Can you give it to them, Frodo?
FRODO frowns.
GANDALF
Do not be too eager to deal out death in judgment even the very wise cannot see all ends. My heart tells me that Gollum has some part to play yet, for good or ill before this is over. The pity of Bilbo may rule the fate of many.
FRODO
I wish the Ring had never come to me . I wish none of this had happened.
GANDALF
So do all who live to see such times, but that is not for them to decide. All we have to decide is what to do with the time that is given to us.
There is a note of finality in GANDALF’S voice.
GANDALF
There are other forces at work in this world, Frodo, besides the will of evil. Bilbo was meant to find the Ring. In which case, you also were meant to have it and that is an encouraging thought.
sudden brightness
Ah! It's that way.
GANDALF points at the right hand tunnel, the FELLOWSHIP scramble to their feet.
MERRY
relieved
He's remembered!
GANDALF
No. But the air doesn’t smell so foul down here. If in doubt, Meriadoc, always follow your nose!
laughs
Yes --
INT. DWARROWDELF CHAMBER - MORIA - DAY
The FELLOWSHIP pass under an arched doorway into a black and empty space. GANDALF pauses.
GANDALF
Let me risk a little more light.
GANDALF taps his staff for a brief moment a light blazes, like a silent FLASH OF LIGHTNING. GREAT SHADOWS spring up and flee.
GANDALF
Behold! The great realm and Dwarf-city of Dwarrowdelf.
ANGLE ON: FRODO gasps at the brief sight of a roof, far above their heads, upheld by many mighty pillars of stone.
Before them stretches a huge empty hall, with black walls, polished and smooth as glass.
SAM
Well, there's an eye opener and no mistake!
Ahead of them, a wooden door has been smashed. BLACK ARROWS are embedded in the timbers. TWO GOBLIN SKELETONS lie in the doorway. GIMLI rushes ahead.
GANDALF
Gimli!!
CUT TO:
INT. BALIN’S TOMB - MORIA - DAY
GIMLI rushes into another vast empty chamber, lit with a narrow shaft of sunlight, beaming in from a small hole near the roof.
DWARF AND GOBLIN SKELETONS are piled high. In the far corner sits a stone walled WELL. A SHAFT OF LIGHT falls directly onto a stone table in the middle of the room: a single oblong block, about 4 feet high, topped with a great slab of white stone. GIMLI falls to his knees.
GIMLI
No -- no -- oh, no!
GIMLI sobs.
GANDALF quietly reads an inscription of runes, carved onto the white stone slab.
GANDALF
“Here lies Balin, son of Fundin, Lord of Moria.” He is dead, then. It’s as I feared.
GIMLI
chanting softly, sobbing
Kilmin malur ni zaram kalil ra narag. Kheled-zâram. Balin tazlifi.
GANDALF carefully lifts the rotting remains of a book from the white stone slab. It has been slashed and stabbed and appears to be covered in DRIED BLOOD. The pages crack and break as he opens it.
LEGOLAS
urgent whisper to Aragorn
We must move on. We cannot linger.
GANDALF
reading
“They have taken the Bridge and the second hall: we have barred the gates, but cannot hold them for long , the ground shakes, drums drums in the deep, we cannot get out. A shadow moves in the dark. Will no-one save us? They are coming.”
ANGLE ON: Unnerved, PIPPIN backs away nervously. He stumbles against the well, sending a precariously balanced ARMORED SKELETON tumbling in!
MERRY reaches out, GRABBING hold of PIPPIN before he falls. THE FELLOWSHIP freeze in stunned silence as the armored skeleton clatters down the deep well, echoing loudly!
ANGLE ON: GANDALF turns angrily on PIPPIN.
GANDALF
angrily
Fool of a Took! Throw yourself in next time, and rid us of your stupidity!
ANGLE ON: PIPPIN, CHASTENED.
They fall silent. A low rolling BOOM rises from the depths below, growing louder.
BOOM. BOOM as if the caverns of MORIA were turned into a vast drum. A great horn blasts nearby, ANSWERING horns running feet, harsh cries.
CLOSE ON: SAM’S eyes glance at FRODO’S belt.
SAM
worried
Mr. Frodo!
ANGLE ON: FRODO looks down. A cold blue glow is emanating from STING’S SCABBARD! FRODO draws the SWORD and stares at its glowing blade!
LEGOLAS
Orcs!
ARAGORN
to the Hobbits
Get back! Stay close to Gandalf.
ARAGORN and BOROMIR slam and wedge the doors. BOROMIR catches sight of something; he turns to ARAGORN with shock in his eyes.
BOROMIR
They have a cave-troll!
ANGLE ON: GIMLI snatches up two rusty Dwarf axes and leaps onto the tomb.
GIMLI
yelling
Let them come! There is one Dwarf yet in Moria who still draws breath!
BOOM! The door bursts open in a shower of wood fragments, and 20 GOBLINS charge into the tomb, followed by a HUGE CAVE TROLL!
ANGLES ON: GIMLI ducks a blow and immediately buries his AXES in 2 GOBLIN HELMETS. ARAGORN and BOROMIR wade into the mass of GOBLINS with their swords. LEGOLAS fires deadly arrows into GOBLIN throats, desperately trying to SHIELD the HOBBITS!
GANDALF is clutching his sword, GLAMDRING, and joins in the battle!
ANGLES ON: The CAVE TROLL is sweeping his club at ARAGORN who stumbles backwards, the huge club descends for the killing blow.
SUDDENLY, in a FLASH OF STEEL, BOROMIR’S long sword SLICES into the SCALY ARM of the TROLL; it rears back, SPEWING GREEN BLOOD!
ANGLES ON: SAM is backed up against a wall, a sword in one hand, a SAUCEPAN in the other. In desperation he swings wildly at a GOBLIN with the saucepan! It keels over. SAM looks surprised. He wallops another GOBLIN and it too, drops.
SAM
I think I’m getting the hang of this.
ANGLE ON: The CAVE TROLL lunges forward, thrusting at FRODO’S chest with his spear.
FRODO
Aragorn! Aragorn!
SAM screams as FRODO is lifted off his feet by the spear tip and slammed against the wall.
ARAGORN
shocked yell
Frodo!
ANGLES ON: The HOBBITS go crazy. SAM slashes at the CAVE TROLL’S knee, bringing him down. MERRY and PIPPIN jump on him. LEGOLAS fires an arrow and the CAVE TROLL topples, dead.
ANGLE ON: ARAGORN rushes to FRODO’S side as he slumps to the floor. FRODO appears to be dead.
CLOSE ON: GANDALF, ARAGORN, HOBBITS looking horrified.
SUDDENLY, FRODO coughs, takes a huge breath.
SAM
He's alive.
FRODO
I'm all right. I'm not hurt.
ARAGORN
You should be dead. That spear would have skewered a wild boar.
GANDALF
I think there’s more to this Hobbit than meets the eye.
ANGLE ON: FRODO opens his shirt to reveal the MITHRIL VEST. The TROLL SPEAR did not pierce the MITHRIL.
GIMLI
Mithril! You are full of surprises, Master Baggins.
BOOM. BOOM. BOOM. the sound of the drums rings out again!
GANDALF turns to the other.
GANDALF
To the bridge of Khazad-Dûm!
CUT TO:
INT. DWARROWDELF CHAMBER - MORIA - DAY
GANDALF leads the FELLOWSHIP into the huge DWARROWDELF CHAMBER.
GANDALF
This way!
They hurry towards a distant door as GOBLINS start scuttling down the PILLARS behind them, like cockroaches!
ANGLE ON: FRODO looks with horror at the overwhelming GOBLIN army that’s rushing towards them!
SUDDENLY! A deafening roar fills the air! A fiery light dances down the hallway, the pillars castings eerie shadows.
ANGLES ON: The GOBLINS freeze. They back fearfully away from the approaching beast, melting into the darkness.
BOROMIR
What is this new devilry?
A HUGE SHADOW, surrounded by FLAME, falls across the hall, the ground shakes, an unearthly sound rumbles.
GANDALF
quietly
A Balrog. A demon of the ancient world! This foe is beyond any of you!
urgent yell
Run! Quickly!
CUT TO:
INT. STAIRWAY OF KHAZAD-DÛM - MORIA - DAY
The BALROG, a massive creature rises from a chasm, a great 40-FOOT MAN-BEAST, with a MANE OF FLAMES! In one hand is a BLADE, like a stabbing TONGUE OF FIRE; in the other, a WHIP of MANY THONGS.
ANGLE ON: ARAGORN leads the FELLOWSHIP to the top of a dizzying stairway. GANDALF follows, leaning heavily on his staff.
CLOSE ON: ARAGORN looks at GANDALF, concerned.
GANDALF
Lead them on, Aragorn! The bridge is near.
ARAGORN hesitates. GANDALF looks at him.
GANDALF
Do as I say; Swords are no more use here.
The FELLOWSHIP race down the stairway.
ARAGORN picks up FRODO, leaping across a gaping chasm. GANDALF yells to the others.
ANGLE ON: ARAGORN makes to throw GIMLI across the chasm.
GIMLI
Nobody tosses a dwarf!
The BALROG smashes through the wall and spreads its VAST WINGS.
It swoops down past the FELLOWSHIP, disappearing into a FLAMING PIT!
CUT TO:
INT. BRIDGE OF KHAZAD-DÛ - MORIA - DAY
The FELLOWSHIP run into the SECOND HALL, the floor is split with fissures that spit flame.
GANDALF
yelling
Over the bridge! Fly!
They race towards the slender bridge of stone without kerb or rail, at the far end of the hall. The FELLOWSHIP recklessly hurry over the dizzying bridge but GANDALF, the last pauses in the middle of the span, he faces the BALROG, staff in one hand, GLAMDRING in the other!
ANGLE ON: FRODO looks back in horror:
GANDALF
You cannot pass!
FRODO
alarmed yell
Gandalf!
GANDALF
yelling
I am a servant of the Secret Fire, wielder of the flame of Anor. The dark fire will not avail you, flame of Udûn.
FRODO watches as the BALROG puts one foot on the bridge and draws up to FULL HEIGHT, wings spreading from wall-to-wall.
GANDALF is a tiny figure, balanced precariously on the narrow bridge.
GANDALF
Go back to the Shadow!
The BALROG slashes at GANDALF with its SWORD OF FLAME. GANDALF blocks with GLAMDRING, a ringing clash and the BALROG’S SWORD SHATTERS into MOLTEN FRAGMENTS!
GANDALF
booming
You shall not pass!!
The BALROG places one foot onto the bridge.
ARAGORN
He cannot stand alone! Elendil! I am with you Gandalf!
BOROMIR
raising his sword
Gondor!
ANGLE ON: ARAGORN and BOROMIR race forward, swords drawn.
GANDALF CRIES ALOUD as he summons his LAST RESERVES OF STRENGTH!!
He thumps the bridge with his staff, a blinding sheet of white flame springs up, the staff shatters, the bridge breaks, right at the BALROG’S feet.
The stone bridge drops away into the GULF from under the BALROG. For a moment, the great BEAST remains poised in the air then it plunges down:
SLOW MOTION: RELIEF floods FRODO’S face. GANDALF remains trembling on the lip of the broken bridge.
SLOW MOTION: As the BALROG falls, he lashes out with his whip of fire.
SLOW MOTION: The thongs of the whip lash and curl around GANDALF’S knees, dragging him over the brink! GANDALF just manages to hang on by his fingertips.
FRODO
screaming
Gandalf!
GANDALF
fierce
Fly, you fools!
CLOSE ON: GANDALF lets go his grip and falls away, following the BALROG into the BOTTOMLESS ABYSS!
FRODO cries out! BOROMIR scoops him up and carries him away!
FRODO
No!
ARAGORN
Gandalf!
They rush towards an archway.
CUT TO:
EXT. DIMRILL DALE DOOR - DAY
The FELLOWSHIP tumble out of the GREAT EASTERN GATE on to a grassy sunlit hillside. SAM, MERRY, and PIPPIN fall slowly to the ground, SOBBING.
ANGLE ON: ARAGORN turns to LEGOLAS and GIMLI.
ARAGORN
urgent
Legolas, get them up.
BOROMIR
Give them a moment, for pity's sake!
ARAGORN
By nightfall these hills will be swarming with Orcs! We must reach the woods of Lothlórien. Come Boromir, Legolas, Gimli, get them up. On your feet, Sam.
ANGLE ON: BOROMIR glances towards FRODO, then back at ARAGORN.
ANGLE ON: FRODO is walking away, as if in a daze.
ARAGORN
Frodo? Frodo!
CLOSE ON: FRODO SLOWLY TURNS, a look of numb shock on his devastated face. The FELLOWSHIP marches on.
CUT TO:
EXT. DIMRILL DALE HILLSIDE - DUSK
ARAGORN scours ahead of the COMPANY, as they stumble on in the fading light, in the distance the shimmer of a large forest can be seen LOTHLÓRIEN!
EXT. EDGE OF LOTHLÓRIEN - DUSK
WIDE ON: The FELLOWSHIP run across a forest floor strewn with YELLOW FLOWERS, above is a ROOF OF GOLDEN LEAVES, held up by SILVER PILLARS, the TRUNKS of HUGE, GREY TREES.
ANGLE ON: LEGOLAS, taking in the surroundings as if a return home.
LEGOLAS
musing
Ah, Lothlórien. The fairest of all the dwellings of my people. There are no trees like the trees of this land, for in autumn the leaves fall not, but turn to gold. Not till the spring comes and the new green opens do they fall, and then the boughs are laden with yellow flowers; and the floor of the wood is golden, and golden is the roof, and its pillars are of silver, for the bark of the trees is smooth and grey. So still our songs in Mirkwood say.
ANGLE ON: In contrast, GIMLI looks nervously around.
GIMLI
Stay close, young Hobbits, they say a great sorceress lives in these woods. An Elf-witch of terrible power. All who look upon her fall under her spell.
CLOSE ON: FRODO hesitates, a STRANGE VOICE whispers in his head.
GALADRIEL (V.O.)
Frodo --
GIMLI
And are never seen again!
GALADRIEL (V.O.)
-- your coming to us is as the footsteps of doom. You bring great evil here, Ring-bearer.
SAM
Mr. Frodo?
GIMLI
Well, here’s one Dwarf she won't ensnare so easily. I have the eyes of a hawk and the ears of a fox!
The FELLOWSHIP are suddenly surrounded by ARMED ELVES. DEADLY ARROWS are aimed at their heads. HALDIR, the ELVISH CAPTAIN, steps forward.
HALDIR
The Dwarf breathes so loud we could have shot him in the dark.
CUT TO:
INT. CERIN AMROTH - LOTHLÓRIEN - NIGHT
Night is deepening amongst the windy trees. The FELLOWSHIP stands on a platform in the trees. HALDIR greets them.
HALDIR
Elvish; with subtitles
Mae govannen, Legolas Thranduilion.
Welcome Legolas, son of Thranduil.
LEGOLAS
Elvish; with subtitles
Govannas vîn gwennen le, Haldir o Lórien.
Our Fellowship stands in your debt, Haldir of Lórien.
ANGLE ON: HALDIR glances at ARAGORN.
HALDIR
Elvish; with subtitles
A, Aragorn in Dúnedain istannen le ammen.
Oh, Aragorn of the Dúnedain, you are known to us.
ARAGORN
Haldir.
GIMLI
So much for the legendary courtesy of the Elves! Speak words we can also understand!
HALDIR
We have not had dealings with the Dwarves since the Dark Days.
GIMLI
And you know what this Dwarf says to that? Ishkhaqwi ai durugnul!
I spit on your grave!
ANGLE ON: ARAGORN takes GIMLI by the arm.
ARAGORN
stern
That was not so courteous.
HALDIR moves on to FRODO.
HALDIR
You bring great evil with you.
to ARAGORN
You can go no further.
HALDIR walks away.
ANGLE ON: SAM and PIPPIN turn to look at FRODO. FRODO appears uncomfortable.
The FELLOWSHIP sit while ARAGORN speaks with HALDIR.
ARAGORN
Boe ammen veriad lîn. Andelu i ven!
We need your protection. The road is fell!
HALDIR whispers back inaudibly.
ARAGORN
Merin le telim.
I wish we may come with you.
HALDIR answers quietly, again so that only ARAGORN can hear his words.
ARAGORN
Henio, aníron boe ammen i dulu lîn!
Please, understand, we need your support!
ANGLE ON: FRODO looks to the remainder of the FELLOWSHIP. As they meet his eyes, they look away, as if he has become a scourge to them.
ANGLE ON: ARAGORN continues to argue loudly with HALDIR.
ANGLE ON: FRODO, looking at his friends, sees blame that does not truly exist anywhere but in his mind. He is alone, it seems.
ANGLE ON: ARAGORN pleads with HALDIR.
ARAGORN
Andelu i ven.
The road is very dangerous.
ANGLE ON: BOROMIR approaches FRODO.
BOROMIR
Gandalf's death was not in vain. nor would he have you give up hope. You carry a heavy burden, Frodo. Don't carry the weight of the dead.
HALDIR stands before FRODO.
HALDIR
Very well. Here we will stay awhile, and come to the city of Galadhrim on the morrow.
INT. CERIN AMROTH - LOTHLÓRIEN - DAY
ANGLE ON: SAM and FRODO sit on one of the many platforms in the trees at CERIN AMROTH. SAM suddenly looks up and around, with a puzzled expression. He rubs his eyes.
FRODO
What is it?
SAM
It’s an odd thing, Mr. Frodo. It’s sunlight and bright day, right enough. I thought that Elves were all for moon and stars. But this is more Elvish than anything I ever heard tell of. I feel as if I was inside a song, if you take my meaning.
HALDIR
from behind them
You feel the power of the Lady of Galadhrim. Would it please you to climb with me up Cerin Amroth?
WIDE ON: FRODO and SAM follow HALDIR up a long series of platforms until they reach the pinnacle of the trees.
ANGLE ON: FRODO and SAM approach the edge of a high platform and look out in wonder.
HIGH WIDE SHOT: MIDDLE EARTH stretches out for miles and miles to the NORTH. Far to the NORTH, a shadow lingers over the FOREST OF MIRKWOOD.
ANGLE ON: HALDIR points the HOBBITS’ gaze to the dark cloud.
HALDIR
There lies the fastness of Southern Mirkwood. It is clad in a forest of dark fir, where the trees strive one against another and their branches rot and whither. In the midst upon a stony height stands Dol Guldur, where long the hidden Enemy had his dwelling. We fear that now it is inhabited again, and with power sevenfold. A black cloud lies often over it of late.
PAN ON WIDE SHOT: From ORTHANC to the WEST across the magnificent view to MORDOR and BARAD-DÛR in the EAST.
HALDIR
In this high place you may see the two powers that are oppose one to another; and ever they strive now in thought, but whereas the light perceives the very heart of the darkness, its own secret has not been discovered. Not yet.
ANGLE ON: HALDIR leaves the high place. With a final look, FRODO and SAM follow.
INT. CERIN AMROTH - LOTHLÓRIEN - DAY
CLOSE ON: A SMALL GOLDEN FLOWER in someone’s hand.
ANGLE ON: ARAGORN, admiring the beauty of this flower.
ARAGORN
Arwen vanimelda, namárië.
ANGLE ON: FRODO approaches. ARAGORN sighs, and then turns to FRODO and smiles.
ARAGORN
Here is the heart of Elvendom on earth, and here my heart dwells ever, unless there be a light beyond the dark roads that we still must tread, you and I.
FRODO
Do you believe we may yet succeed in our quest?
ARAGORN
We shall endure to the last.
CUT TO:
EXT. LOTHLÓRIEN HILLTOP - DAY
HALDIR leads the FELLOWSHIP onto a HILL TOP. They look with wonderment at the vista spread before them.
WIDE ON: Several miles towards the SOUTH, a LARGE HILL rises out of the woods. Upon the hill rise many mighty MALLORN TREES, taller than any others. NESTLED high in the crown of the mallorns is a BEAUTIFUL CITY. It GLEAMS in the low rays of the late afternoon, green, gold, and silver.
To the east of CARAS GALADHON, the WOODS of LÓRIEN run down the pale gleam of ANDUIN, the great river.
Beyond the RIVER, the land appears flat and empty, formless and vague, until far away, it rises again like a dark dreary wall.
The SUN that lies on LOTHLÓRIEN has not power to enlighten the shadows that lie beyond.
HALDIR
Caras Galadon. The heart of Elvendom on earth. This is the city of Galadhrim where dwell the Lord Celeborn and of Galadriel, Lady of Light.
CUT TO:
EXT. CELEBORN’S CHAMBER - CARAS GALADHON - NIGHT
ANGLE ON: THE FELLOWSHIP step onto a wide fleet filled with a soft light. The walls are green and silver, the roof gold and in its midst is the trunk of the mighty MALLORN TREE, now tapering toward its crown.
ANGLE ON: CELEBORN steps forward to greet the guests. His hair is long and silver, his face grave and beautiful, with no sign of age upon it. Next to him stands GALADRIEL, the LADY OF THE ELVES. She has hair of deep gold and timeless unsurpassed beauty.
ANGLE ON: CELEBORN looks hard at ARAGORN.
CELEBORN
The enemy knows you have entered here. What hope you had in secrecy is now gone. Eight there are here, yet nine there were set out from Rivendell. Tell me, where is Gandalf? For I much desire to speak with him. I can no longer see him from afar.
ANGLE ON: FRODO looks at GALADRIEL, standing silently beside CELEBORN.
GALADRIEL
softly aloud
Gandalf the Grey did not pass the borders of this land. He has fallen into Shadow.
LEGOLAS
He was taken by both Shadow and flame. A Balrog of Morgoth. For we went needlessly into the net of Moria.
ANGLE ON: The FELLOWSHIP bow their heads in sadness at the memory of GANDALF.
ANGLE ON: CELEBORN appears surprised.
GALADRIEL
Needless were none of the deeds of Gandalf in life. We do not yet know his full purpose.
GALADRIEL surveys the face of the FELLOWSHIP.
CLOSE ON: GIMLI looks up as GALADRIEL addresses him.
GALADRIEL
Do not let the great emptiness of Khazad-dûm fill your heart Gimli, son of Glóin. For the world has grown full of peril, and in all lands, love is now mingled with grief.
ANGLE ON: GALADRIEL looks over he FELLOWSHIP again to meet her gaze with BOROMIR’S.
CLOSE ON: BOROMIR is suddenly fearful and nervous.
CLOSE ON: GALADRIEL’S eyes piercing BOROMIR.
ANGLE ON: BOROMIR turns away from her.
ANGLE ON: GALADRIEL’S gaze remains on him for a moment before turning to CELEBORN.
CELEBORN
What now becomes of this Fellowship? Without Gandalf, hope is lost.
ANGLE ON: GALADRIEL looks to ARAGORN.
GALADRIEL
The quest stands upon the edge of a knife. Stray but a little and it will fail, to the ruin of all. Yet hope remains while the company is true.
GALADRIEL’S eyes settle on SAM.
GALADRIEL
Do not let your hearts be troubled. Go now and rest, for you are weary with sorrow and much toil.
GALADRIEL’S eyes turn to FRODO, her voice fades.
GALADRIEL
Tonight you will sleep in peace.
whispered v/o
Welcome, Frodo of the Shire --
CLOSE ON: FRODO looks at GALADRIEL.
SUDDEN INSERT: GALADRIEL as she is on the other side. POWERFUL, DIVINE, no longer of this world, a PIERCING white light surrounds her.
GALADRIEL (V.O.)
-- one who has seen the eye.
CUT TO:
EXT. CARAS GALADHON - LOTHLÓRIEN - NIGHT
GIMLI, LEGOLAS, MERRY, PIPPIN, FRODO, and SAM are in a pavilion set among the trees near the fountain. They lie on soft couches as ELVES leave food and wine for them. MOURNFUL SINGING drifts down from the trees above.
LEGOLAS
sadly
A lament for Gandalf.
MERRY
What do they say about him?
LEGOLAS
I have not the heart to tell you. For me, the grief is still too near.
ANGLE ON: FRODO lies on his bed watching the others. SAM works with PIPPIN.
SAM
I bet they don’t mention his fireworks. There should be a verse about them.
ANGLE ON: SAM stands up to add his own verse to the ELVEN SONG.
SAM
The finest rockets ever seen They burst in stars of blue and green Or after thunder, silver showers Come falling like a rain of flowers. Oh, that doesn’t do them justice by a long road.
SAM sits down, frustrated and disappointed with himself.
ANGLE ON: BOROMIR is sitting alone. ARAGORN approaches him.
ARAGORN
Take some rest. These borders are well protected.
ANGLE ON: Moonlight catches the trace of tears on BOROMIR’S face. ARAGORN kneels beside him.
BOROMIR
I will find no rest here. I heard her voice inside my head. She spoke of my father and the fall of Gondor. She said to me, “Even now, there is hope left.” But I cannot see it, it is long since we had any hope.
CLOSE ON: BOROMIR looks at ARAGORN in despair.
BOROMIR
My father is a noble man, but his rule is failing, and our -- our people lose faith. He looks to me to make things right and I would do it, I would see the glory of Gondor restored. Have you ever seen it, Aragorn? The White Tower of Ecthelion, glimmering like a spike of pearl and silver, its banners caught high in the morning breeze, have you ever been called home by the clear ringing of silver trumpets?
ARAGORN
I have seen the White City, long ago.
BOROMIR feels ARAGORN’S love for MINAS TIRITH and takes heart.
BOROMIR
One day, our paths will lead us there, and the tower guard will take up the call “the Lords of Gondor have returned.”
ARAGORN returns BOROMIR’S smile, betraying his disquiet sadness only when BOROMIR looks away.
The FELLOWSHIP are asleep on their beds. GIMLI is snoring loudly.
CLOSE ON: BARE FEET treads soundlessly across the lawn.
CLOSE ON: FRODO’S EYES FLICKER OPEN as if by instinct.
ANGLE ON: GALADRIEL, her WHITE dress glowing in the moonlight, glances at him. FRODO follows her as if drawn by an invisible force.
EXT. GALADRIEL’S GLADE - LOTHLÓRIEN - NIGHT
Upon a low stone pedestal, carved like a branching tree, sits a shallow SILVER BASIN. GALADRIEL leads FRODO into the small GLADE.
GALADRIEL
Will you look into the mirror?
ANGLE ON: FRODO looks with apprehension at the silver basin.
FRODO
warily
What will I see?
GALADRIEL pours water into the basin from a silver jug, a GLOW rises from the water.
GALADRIEL
Even the wisest cannot tell. For the mirror shows many things, things that were, things that are and some things that have not yet come to pass.
FRODO slowly steps up to the PEDESTAL, he peers into the glossy surface. The night sky is reflected in the water, suddenly a figure takes form, the bowed figure of an OLD MAN, CLAD IN WHITE ROBES. He walks down a long road. FRODO leans closer to the mirror’s surface.
CLOSE ON: GANDALF LIFTS HIS HEAD AND LOOKS DIRECTLY AT FRODO!
FRODO gasps, his face lighting up with hope.
FRODO
joyous
Gandalf!
GANDALF looks at FRODO with a fierce intensity. FRODO reaches out his hand toward the surface of the mirror. Suddenly the image flares, burning out to white.
THE VISION SHIFTS. FRODO gasps in horror! The SHIRE is in ruins!
THE IMAGE SUDDENLY WIDENS TO FILL THE SCREEN buildings burning, bodies strewn about, DARK SHAPES of ORCS looting and destroying BAG END, billowing in flames! The Party Tree is hacked down.
ANGLE ON: FRODO reels back as the mirror seems to grow. The nightmarish image sweeps past his head, engulfing him entirely.
IMAGE: HOBBITON, now an INDUSTRIAL WASTELAND. The fields and trees destroyed, replaced with BRICK FACTORIES belching smoke!
IMAGE: ORCS brutally herd manacled HOBBITS into the FACTORIES!
We see SAM, MERRY and ROSIE COTTON. SOOT-STAINED and SOBBING, they disappear into the factory hellhole!
SUDDENLY, the mirror goes dark and out of the black abyss a SINGLE EYE GROWS.
CLOSE ON: FRODO IS FROZEN. Unable to move or cry out. The RING dangles from his neck, inches above the water, not shimmering with curls of steam. FIRE erupts around the EYE.
WITH A YELL, FRODO pushes himself away from the pedestal and collapses on the ground. Light instantly fades from the mirror.
FRODO comes to his senses, he is shocked.
ANGLE ON: GALADRIEL stands still as a statue, unmoved, untouched by the horror.
GALADRIEL
I know what it is you saw, for it is also in my mind. It is the future, Frodo. It is what will come to pass if you should fail.
GALADRIEL looks at FRODO intensely. FRODO looks down, in his hand he is clutching the RING. FRODO looks up at GALADRIEL.
GALADRIEL
The Fellowship is breaking. It is already begun. He will try to take the Ring. You know of whom I speak. One by one, it will destroy them all.
FRODO (V.O.)
If you ask it of me, I will give you the One Ring.
GALADRIEL
You offer it to me freely. I do not deny that my heart has greatly desired this.
GALADRIEL suddenly seems to rise in stature before FRODO’S eyes.
FRODO is suddenly afraid of her.
GALADRIEL
In place of the Dark Lord, you would have a Queen, not dark, but beautiful and terrible as the Dawn. Treacherous as the Sea! Stronger than the foundations of the earth. All shall love me and despair!
ANGLE ON: FRODO takes a step away from GALADRIEL.
ANGLE ON: GALADRIEL suddenly laughs, a slender ELF-WOMAN once more, clad in simple white, her voice soft and sad.
GALADRIEL
gently
I pass the test.
laughs
I will diminish, and go into the West, and remain Galadriel.
ANGLE ON: FRODO’S confidence drains away.
FRODO
I cannot do this alone.
GALADRIEL
You are a Ring-bearer, Frodo. To bear a Ring of Power is to be alone.
CLOSE ON: GALADRIEL raises her hand to show FRODO her own RING.
GALADRIEL
This is Nenya, the Ring of Adamant. And I am its keeper.
GALADRIEL lowers her hand, hiding NENYA once more.
GALADRIEL
This task was appointed to you. And if you do not find a way, no one will.
ANGLE ON: FRODO realizes what her message is.
FRODO
Then I know what I must do. It's just I’m afraid to do it.
GALADRIEL kneels down to FRODO’S height, staring at him intently.
GALADRIEL
Even the smallest person can change the course of the future.
CLOSE ON: THE RING lies in the palm of FRODO’S hand, his fingers close over it.
CUT TO:
INT. ORTHANC CHAMBER - DAY
NAKED, LURTZ’S eyes follow SARUMAN, alight with a mean intelligence.
SARUMAN
smiles
Do you know how Orcs first came into being? They were Elves once. Taken by the Dark Powers, tortured and mutilated, a ruined and terrible form of life. And now perfected. My fighting Uruk-Hai. Whom do you serve?
LURTZ
guttural rasp
Saruman.
INT. CAVERNS BELOW ISENGARD - DAY
QUICK CUTS: LURTZ is quickly armored, BREASTPLATE, LEG GUARDS, HELMET, a sword is thrust in LURTZ’S hand. The URUK-HAI are smearing themselves in white paint, a creepy ritualistic ceremony, the WHITE HAND OF ISENGARD is smeared on bodies, faces, and armor.
ANGLE ON: SARUMAN addresses a crowd of 200 fully-armed URUK-HAI.
SARUMAN
Hunt them down. Do not stop until they are found. You do not know pain. You do not know fear. You will taste man-flesh.
SARUMAN turns to LURTZ.
SARUMAN
coldly
One of the Halflings carries something of great value, bring them to me alive and unspoiled -- kill the others.
EXT. ISENGARD - DAY
LURTZ is leading 200 URUK-HAI out of ISENGARD, they run fast, their powerful legs carrying them at speed.
EXT. SILVERLODE RIVER BANK - DAWN
The mists of morning lay heavily along the river. Bare-branched trees arch through the fogs, stray beams of light falling on the cold, blue waters.
ANGLE ON: GALADRIEL approaches the bank in an elegant ship, carved in the likeness of a swan.
DISSOLVE TO:
EXT. SILVERLODE SHORE - LOTHLÓRIEN - DAWN
CLOSE ON: An green, silver-veined ELVEN LEAF-BROOCH is clasped.
ANGLE ON: ELVES clasp ELVEN CLOAKS around on the FELLOWSHIP, each with a leaf-brooch.
CELEBORN (V.O.)
Never before have we clad strangers in the garb of our own people.
ANGLE ON: CELEBORN addresses the FELLOWSHIP.
CELEBORN
May these cloaks help shield you from unfriendly eyes.
EXT. SILVERLODE RIVER BANK - LOTHLÓRIEN - DAWN
ANGLE ON: LEGOLAS grabs a couple of packs and puts them in an Elven boat. MERRY and PIPPIN look up as he pulls a small piece of bread from one of the packs.
LEGOLAS
Lembas. Elvish waybread.
He takes a bite.
LEGOLAS
One small bite is enough to fill the stomach of a grown Man.
He stuffs the remaining piece back in the pack and places it in the boats.
ANGLE ON: MERRY and PIPPIN nod as he walks away.
MERRY
How many did you eat?
PIPPIN
Four.
MERRY nods and picks at his teeth. PIPPIN belches.
ANGLES ON: The FELLOWSHIP continue to load the boats for their journey. LEGOLAS helps GIMLI into a boat. SAM crawls into another boat and quickly reveals he has no measure of sea legs.
CELEBORN (V.O.)
Every league you travel south, the danger will increase. Mordor Orcs now hold the eastern shore of the Anduin. Nor will you find safety on the western bank.
EXT. SILVERLODE SHORE - LOTHLÓRIEN - DAWN
ANGLE ON: CELEBORN and ARAGORN walks toward the RIVER.
CELEBORN
Strange creatures bearing the White Hand have been seen on our borders. Seldom do Orcs journey in the open under the sun, yet these have done so.
CLOSE ON: CELEBORN holds a DAGGER out the ARAGORN. ARAGORN takes the dagger and unsheathes it. It is a beautiful, yet deadly work of art.
CELEBORN
Elvish; subtitled
Le aphadar aen.
You are being tracked.
ANGLE ON: ARAGORN replaces the dagger in its sheath.
CELEBORN
By river you have the chance of outrunning the enemy to the Falls of Rauros.
EXT. SILVERLODE RIVER BANK - DAWN
The FELLOWSHIP are in three small ELVEN BOATS. ELVES quietly watch them depart.
CLOSE ON: LEGOLAS, remembering --
GALADRIEL (V.O.)
My gift for you, Legolas, is a bow of the Galadhrim. Worthy of the skill of our woodland kin.
INSERT FLASHBACK
ANGLE ON: LEGOLAS lifts an elegant BOW and tests its strength.
ANGLE ON: GALADRIEL smiles and walks to MERRY and PIPPIN.
ANGLE ON: MERRY removes a dagger from its sheath and gazes upon it.
GALADRIEL (V.O.)
These are the daggers of the Noldorin. They have already seen service in war.
ANGLE ON: PIPPIN looks upon his gift with the fear he may have to use it. He casts his eyes upon GALADRIEL.
GALADRIEL (V.O.)
Do not fear, young Peregrin Took. You will find your courage.
END FLASHBACK
CLOSE ON: MERRY and PIPPIN ride expressionless in their boat.
CLOSE ON: SAM, remembering --
GALADRIEL (V.O.)
And for you, Samwise Gamgee, Elven rope made of hithlain.
INSERT FLASHBACK
ANGLE ON: SAM bows to her, accepting his gift.
SAM
Thank you, my lady.
He looks at MERRY and PIPPIN, and then back to GALADRIEL.
SAM
hesitantly
Have you run out of those nice, shiny daggers?
GALADRIEL smiles, and SAM holds onto his rope, embarrassed. She moves on to GIMLI, who stares at the ground in her presence.
GALADRIEL
And what gift would a Dwarf ask of the Elves?
ANGLE ON: GIMLI shakes his head quickly.
GIMLI
Nothing.
He looks up at her.
GIMLI
Except to look upon the lady of the Galadhrim one last time for she is more fair than all the jewels beneath the earth.
ANGLE ON: GALADRIEL laughs. GIMLI scowls at his foolishness and turns away. He recovers and turns back to her.
GIMLI
Actually -- There was one thing. No, no, I couldn’t. It’s quite impossible. Stupid to ask.
END FLASHBACK
CLOSE ON: GIMLI rides silently before LEGOLAS. He closes his eyes, allowing the memory to flood into his head.
CLOSE ON: ARAGORN, remembering --
INSERT FLASHBACK
ANGLE ON: GALADRIEL stands before ARAGORN.
GALADRIEL
I have nothing greater to give than the gift you already bear.
CLOSE ON: She touches the EVENSTAR PENDANT ARAGORN wears.
GALADRIEL
in Elvish; subtitled
Am meleth dîn. I ant e-guil Arwen Undómiel -- pelitha.
For her love, I fear the grace of Arwen Evenstar -- will diminish.
ARAGORN
in Elvish; subtitled
Aníron i e broniatha ar periatham amar hen. Aníron e ciratha a Valannor.
I would have her leave these shores, and be with her people. I would have her take the ship to Valinor.
GALADRIEL
That choice is yet before her. You have your own choice to make, Aragorn.
ANGLE ON: ARAGORN straightens before her.
GALADRIEL
To rise above the height of all your fathers since the days of Elendil or to fall into darkness with all that is left of your kin.
Silence follows, branches shake, a spider web’s glimmering strands sway in the wind.
ANGLE ON: GALADRIEL glances at the pendant, and smiles.
GALADRIEL
in Elvish; subtitled
Namárië.
Farewell.
ANGLE ON: ARAGORN bows to her and turns to leave. GALADRIEL stops him.
GALADRIEL
in Elvish; subtitled
Nadath nâ i moe cerich. Dan ú-'eveditham, Elessar.
There is much you have yet to do. We shall not meet again, Elessar.
END FLASHBACK
CLOSE ON: FRODO rides at the head of his boat.
GALADRIEL (V.O.)
Farewell, Frodo Baggins.
INSERT FLASHBACK
GALADRIEL gives FRODO a small CRYSTAL PHIAL.
GALADRIEL
I give you the light of Eärendil, our most beloved star.
GALADRIEL leans over and kisses his head.
END FLASHBACK
As the FELLOWSHIP’S boats drift past, GALADRIEL stands alone, watching from the banks of the river. In his head, FRODO still hears her voice.
GALADRIEL (V.O.)
May it be a light for you in dark places, when all other lights go out.
CLOSE ON: GIMLI riding at the head of his boat, paddled by LEGOLAS.
GIMLI
I have taken my worst wound at this parting having looked my last upon that which is fairest. Henceforth I will call nothing fair unless it be her gift to me.
LEGOLAS
What was her gift?
GIMLI
I asked her for one hair from her golden head. She gave me three.
CLOSE ON: LEGOLAS smiles.
EXT. RIVER ANDUIN - DAY
The boats pass into the GREAT RIVER ANDUIN. The THREE ELVEN boats carry the FELLOWSHIP steadily southward. GREEN TREES slowly give way to a brown and withered land.
EXT. FOREST - DAY
The URUK forces are running through the trees with deadly purpose.
EXT. RIVER ANDUIN - DAY
A flock of birds circle high above, BLACK against the PALE SKY.
ARAGORN watches them with concern.
EXT. RIVER ANDUIN BANKS - NIGHT
The THREE BOATS are safely stored on the bank out of the water.
ANGLE ON: BOROMIR hides behind a rock watching the river.
CLOSE ON: A LOG floats down the river. A HAND grasps the log and pulls itself onto it. Who or whatever it is seems to be trying to remain concealed from the eyes of the FELLOWSHIP.
ANGLE ON: ARAGORN approaches from behind BOROMIR.
ARAGORN
Gollum. He has tracked us since Moria.
GOLLUM’S POV: GOLLUM watches the BOROMIR and ARAGORN stand behind the ROCK.
ANGLE ON: The log runs into a rock on the opposite side of the river and stops.
ARAGORN (O.S.)
I had hoped we would lose him on the river.
ANGLE ON: ARAGORN and BOROMIR continue watching GOLLUM.
ARAGORN
But he’s too clever a waterman.
BOROMIR
And if he alerts the enemy to our whereabouts, it will make the crossing even more dangerous.
ANGLE ON: FRODO listens to the exchange between ARAGORN and BOROMIR. He looks worried.
SAM (O.S.)
Have some food, Mr. Frodo.
FRODO
No, Sam.
SAM
You haven’t eaten anything all day. You’re not sleeping, neither. Don’t think I haven’t noticed.
ANGLE ON: SAM moves from the campfire to sit with FRODO.
SAM
Mr. Frodo-
FRODO
I’m all right.
SAM
But you’re not. I’m here to help you. I promised Gandalf that I would.
CLOSE ON: FRODO looks at SAM, sadly, with the full weight of the knowledge of what he must do.
FRODO
You can’t help me, Sam. Not this time. Get some sleep.
FRODO turns away from SAM and returns to his own thoughts.
Reluctantly, SAM concedes and leaves FRODO alone.
ANGLE ON: BOROMIR turns away from the rock to ARAGORN.
BOROMIR
Minas Tirith is the safer road. You know that. From there we can regroup. Strike out for Mordor from a place of strength.
ARAGORN
There is no strength in Gondor that can avail us.
BOROMIR
You were quick enough to trust the Elves.
ARAGORN doesn’t respond, but listens impatiently.
BOROMIR
desperately
Have you so little faith in your own people? Yes, there is weakness. There is frailty. But there is courage also, and honor to be found in Men. But you will not see that.
ANGLE ON: ARAGORN turns away from BOROMIR. BOROMIR grabs ARAGORN’S tunic, and turns ARAGORN to him.
BOROMIR
You are afraid!
ANGLE ON: FRODO listens intently to BOROMIR arguing with ARAGORN.
BOROMIR (O.S.)
All your life, you have hidden in the shadows.
ANGLE ON: ARAGORN calmly listens to BOROMIR’S ravings.
BOROMIR
Scared of who you are, of what you are.
ARAGORN adjusts his tunic and turns away from BOROMIR. BOROMIR is speechless. ARAGORN turns back to him.
ARAGORN
I will not lead the Ring within a hundred leagues of your city.
CUT TO:
EXT. RIVER ANDUIN - DAY
ANGLE ON: BOROMIR, still feeling the defeat from the previous evening, paddles down the river along with the rest of the FELLOWSHIP. He glances scathingly towards ARAGORN.
ANGLE ON: ARAGORN refuses to return his glance.
EXT. PILLARS OF THE KINGS - RIVER ANDUIN - DAY
The THREE ELVEN boats drift slowly through the steep rocky gorge in the PRE-DAWN light.
CLOSE ON: ARAGORN, slowly paddling in the stern.
ARAGORN
quietly
Frodo.
FRODO slowly looks up, his eyes widening with amazement.
WIDE ON: TWO ENORMOUS ROCK STATUES, towering like 300 foot pinnacles on either side of the river carved images of GONDORIAN KINGS of old. They loom over the boats with power and majesty.
ARAGORN
The Argonath --
CLOSE ON: ARAGORN, strangely moved by the beauty of the silent sentinels. He speaks, almost as if to himself.
ARAGORN
Long have I desired to look upon the kings of old, my kin.
The FELLOWSHIP stare in stunned silence as the current takes them through the narrow gap at the STATUES’ feet.
WIDE ON: CRANING UP past the statues vast crumbling heads, to REVEAL a LARGE LAKE only a mile down river.
EXT. SHORE OF NEN HITHOEL - DAY
ANGLE ON: THE FELLOWSHIP as they leap out of the boats and clamber onto the wooded shore.
ARAGORN
We cross the lake at nightfall, hide the boats and continue on foot, we approach Mordor from the North.
GIMLI
gloomy
Oh, yes, just a simple matter of finding our way through Emyn Muil, an impassable labyrinth of razor-sharp rocks. And after that, it gets even better, a festering, stinking marshland as far as the eye can see.
ARAGORN
That is our road. I suggest you take some rest and recover your strength, Master Dwarf.
GIMLI
indignant
Recover my --
ANGLE ON: LEGOLAS turns to ARAGORN with urgency.
LEGOLAS
We should leave now.
ARAGORN
No. Orcs patrol the eastern shore. We must wait for cover of darkness.
LEGOLAS
It is not the Eastern shore that worries me.
LEGOLAS casts a glance around into the PARTH GALEN forest.
LEGOLAS
A shadow and a threat has been growing in my mind. Something draws near, I can feel it.
ARAGORN looks at LEGOLAS, knowing full well what he means.
ANGLE ON: SAM has slumped asleep. MERRY dumps a small pile of kindling at GIMLI’S feet.
MERRY
Where’s Frodo?
SAM sits up with a start. ARAGORN’S head snaps around. His eyes fly to BOROMIR’S shield which lies abandoned by his camp bed.
CLOSE ON: ARAGORN as he realizes BOROMIR has gone!
EXT. SLOPES OF AMON HEN - DAY
FRODO is walking beneath the trees, lost in thought. His feet hit the rough edge of an ancient stone slab, his eyes follow an overgrown path towards stone stairs leading to the SUMMIT OF AMON HEN, the seeing seat.
A CRACKLING SOUND! FRODO freezes.
BOROMIR
quietly
None of us should wander alone; you least of all. So much depends on you, Frodo?
ANGLE ON: FRODO turns slowly, he stares at BOROMIR, tense, cautious.
BOROMIR
I know why you seek solitude. You suffer, I see it day by day. Are you sure you do not suffer needlessly?
FRODO stands silent for a moment, the murmur of the WIND in the trees and the distant roar of the FALLS OF RAUROS can be heard.
BOROMIR
Let me help you. There are other ways, Frodo, other paths that we might take.
FRODO
I know what you would say, and it would sound like wisdom but for the warning of my heart.
BOROMIR
Warning? Against what?
BOROMIR has started forward towards FRODO. FRODO backs away from him.
BOROMIR
We’re all afraid, Frodo. But to let that fear drive us to destroy what hope we have, don't you see that is madness?
FRODO
There is no other way.
BOROMIR
I ask only for the strength to defend my people.
angrily drops the wood he has collected
If you would but lend me the Ring --
FRODO
No --
FRODO steps hurriedly away from BOROMIR.
BOROMIR
Why do you recoil? I am no thief.
FRODO
wary
You are not yourself.
BOROMIR
What chance do you think you have? They will find you, they will take the Ring and you will beg for death before the end.
FRODO turns to leave.
BOROMIR
You fool! It is not yours, save by unhappy chance. It might have been mine! It should be mine! Give it to me! Give me the Ring.
BOROMIR leaps on top of FRODO, grasping for the RING! FRODO has only moments to act. FRODO rips the RING from around his neck and rams it on his finger.
FRODO DISAPPEARS.
BOROMIR spins wildly around, yelling into thin air!
BOROMIR
I see your mind, you will take the Ring to Sauron. You will betray us! You go to your death and the death of us all! Curse you! Curse you and all your Halflings!
BOROMIR stumbles and falls. His body shakes as if in the THROES of a fit, slowly, he comes to.
BOROMIR
disoriented
Frodo! Frodo! What have I done? Please, Frodo --
EXT. SEEING SEAT - DAY
IN THE TWILIGHT WORLD: FRODO races through the misty Twilight world, past the foggy shapes of twisted trees. Somewhere behind him, Boromir’s distraught voice carries, as if from another dimension.
BOROMIR (O.S.)
I’m sorry, Frodo -- Frodo --
FRODO suddenly finds himself on the stone steps, he clambers up the stairs, onto a high seat, perched on four stone pillars.
FRODO cowers on the seat, like a lost child upon the throne of mountain kings. The world of mist swirls around him.
FRODO peers out from the seat, the world seems to shrink. In all directions, VIEWS of far off lands TELESCOPE towards him through the mist.
IMAGES: ORCS spilling out of holes in the MISTY MOUNTAINS. FLAMES rise from MIRKWOOD. Grim faced EASTERLINGS march to war. BLACK SHIPS sail to the South. All the power of the Dark Lord is in motion.
FRODO moves his gaze to the East. FIRE explodes against the smoke, as a huge mass of black battlements fills Frodo’s vision.
A mountain of iron, immeasurably strong, tower of adamant: BARAD-DÛR, the fortress of SAURON.
SUDDENLY! SAURON’S EYE LEAPS TOWARD FRODO LIKE A FINGER OF LIGHT.
SAURON (V.O.)
IN BLACK SPEECH
They will fall!
ANGLE ON: FRODO leaps off the seat, and tumbles down the stairs!
The EYE sweeps AMON HEN like a searchlight, seeking its RING!
With a huge effort, FRODO wrenches the RING off his finger.
EXT. SUMMIT OF AMON HEN - DAY
FRODO lies gasping on the SUMMIT OF AMON HEN, below the ancient ruins of the seeing seat.
AT THAT MOMENT: A BLACK BOOT STEPS INTO SHOT!
FRODO looks up as ARAGORN towers over him.
ARAGORN
Frodo?
FRODO
numb
It has taken Boromir.
ARAGORN moves towards FRODO.
ARAGORN
urgent
Where is the Ring?
FRODO backs away from ARAGORN. ARAGORN is shocked by the movement.
FRODO
Stay away!
ARAGORN
Frodo. I swore to protect you.
FRODO
Can you protect me from yourself?
CLOSE ON: FRODO uncurls his fist, in his palm lies the RING!
It glints, gold and beautiful in the afternoon sun, ARAGORN’S eyes are drawn to it.
FRODO
Would you destroy it?
THE RING
Aragorn. Aragorn. Elessar.
ARAGORN
kneeling to Frodo
I would have gone with you to the end -- into the very fires of Mordor.
FRODO
I know. Look after the others, especially Sam, he will not understand.
ARAGORN FREEZES! He draws his sword.
ARAGORN
urgent
Go, Frodo!
FRODO hesitates.
ARAGORN
yells
Run. Run!
FRODO backs away into the trees.
ANGLE ON: -- as 200 URUK-HAI SWARM onto AMON HEN behind ARAGORN!
ARAGORN attacks the leading URUK-HAI like a madman, he brings two down with his sword leaping into the ruins as others close in on him.
ANGLE ON: FRODO scrambles down the HILLSIDE, away from the fight.
ANGLE ON: ARAGORN battles the URUK-HAI, amongst the pillars and blocks of AMON HEN. Despite his bravery, he is quickly surrounded.
SUDDENLY: ELVEN ARROWS smash into the URUK-HAI. LEGOLAS races out of the woods, firing his bow. GIMLI leaps into the battle, wielding his mighty axe.
EXT. PARTH GALEN HILLSIDE - DAY
FRODO is darting down the steep hillside as heavy feet thunder down after him.
SAM
Mr. Frodo!
ANGLE ON: SAM looks around for FRODO.
CLOSE ON: LURTZ ordering his URUKS.
LURTZ
Find the Halflings, find the Halflings!
ANGLE ON: FRODO stumbles and falls, quickly he crawls behind a tree, above him the sound of URUK-HAI crashing through the forest rings out.
MERRY (O.S.)
urgent whisper
Frodo!
FRODO turns to see MERRY and PIPPIN hiding in a hollow, a few feet away.
MERRY
Hide here, quick!
PIPPIN
Come on!
ANGLE ON: FRODO looks at his friends, slowly shakes his head, a great sadness in his eyes.
PIPPIN
What's he doing?
ANGLE ON: MERRY’S eyes meets FRODO’S. Understanding.
MERRY
softly
He's leaving.
PIPPIN
No!
PIPPIN stands and makes a move toward FRODO. MERRY grabs at his arm.
MERRY
Pippin!
ANGLE ON: MERRY and PIPPIN look up the slope where a cry has rings out. THEY HAVE BEEN SEEN!
MERRY
to Frodo
Run, Frodo. Go on!
MERRY waves his arms at the approaching ORCS.
MERRY
Hey, hey you! Over here!
PIPPIN
Hey!
MERRY
Over here!
PIPPIN
This way!
MERRY and PIPPIN run, leading a pack of ORCS.
ANGLE ON: FRODO runs to the lake.
ANGLE ON: MERRY and PIPPIN, still running from the ORCS
PIPPIN
It's working!
MERRY
I know it's working! Run!
MERRY and PIPPIN stop, more URUK-HAI approach from the other direction. THEY ARE TRAPPED.
SUDDENLY! BOROMIR charges up the hillside and blocks the stroke of the leading URUK-HAI.
ANGLE ON: THE ECHO OF BOROMIR’S HORN reaches ARAGORN, LEGOLAS, and GIMLI, they are battling their way down the SLOPES towards the lake.
LEGOLAS
The horn of Gondor!
ARAGORN
Boromir!
ARAGORN desperately slashes his way towards BOROMIR, felling URUK-HAI in his path while LEGOLAS and GIMLI fight a REAR GUARD ACTION.
ANGLE ON: Many URUK-HAI fall to BOROMIR’S sword as he tries to protect MERRY and PIPPIN.
BOROMIR
Run! Run!
ANGLE ON: LURTZ takes aim.
ANGLE ON: A BLACK ARROW suddenly THUDS into BOROMIR’S chest.
Amazingly, BOROMIR continues fighting, but another arrow and another, brings him to his knees.
ANGLE ON: MERRY and PIPPIN are scooped off their feet by URUK-HAI.
MERRY & PIPPIN
Aaaaagh! Boromir! Boromir!
ANGLE ON: LURTZ aims his bow at BOROMIR’S heart, suddenly ARAGORN charges at him, smashing the BOW with his sword. They lock into a deadly battle.
ANGLE ON: ARAGORN cuts LURTZ down and races towards BOROMIR, who lies slumped against a tree. URUK-HAI arrows sticking out of his chest.
At least 20 dead URUK-HAI lie heaped around BOROMIR. His horn lies at his feet. CLOVEN in two.
BOROMIR
painful gasp
They took the little ones.
ARAGORN quickly tries to staunch the flow of BLOOD from BOROMIR’S shoulder.
BOROMIR
panicked
Frodo -- where is Frodo?
ARAGORN
I let Frodo go.
BOROMIR holds Aragorn’s gaze.
BOROMIR
Then you did what I could not. I tried to take the Ring from him.
ARAGORN
The Ring is beyond our reach now.
BOROMIR
Forgive me. I did not see. I have failed you all.
ARAGORN
No, Boromir. You fought bravely. You have kept your honor.
ARAGORN tries to bind BOROMIR’S wound.
BOROMIR
Leave it! It is over, the world of Men will fall and all will come to darkness and my city to ruin -- Aragorn --
ARAGORN
I do not know what strength is in my blood, but I swear to you -- I will not let the White City fall, nor your people fail.
BOROMIR
Our people -- our people --
ARAGORN places BOROMIR’S sword in his hand. BOROMIR’S fingers tighten around the hilt.
BOROMIR
I would have followed you, my brother -- my captain, my king.
ARAGORN lays BOROMIR down. He is dead.
ARAGORN
Be at peace, son of Gondor.
ARAGORN bends and KISSES BOROMIR’S forehead.
LEGOLAS and GIMLI appear behind him. ARAGORN stands.
ARAGORN
They will look for his coming from the White Tower but he will not return.
EXT. SHORE OF NEN HITHOEL - DAY
On the lakeshore, FRODO stands in front of one of the ELVISH boats, the RING in his palm.
ANGLE ON: A distraught SAM running as hard as he can through the forest.
SAM
Mr. Frodo!
CLOSE ON: FRODO looks to the far side of the river, the CAMERA moves in on the RING.
FRODO (V.O.)
I wish the Ring had never come to me. I wish none of this had happened --
Tears fall down FRODO’S face.
GANDALF (V.O.)
So do all who live to see such times but that is not for them to decide. All we have to decide is what to do with the time that is given us.
With renewed determination, FRODO tucks the RING inside his vest pocket.
ANGLE ON: The small figure of FRODO pushing the ELVISH boat into the water.
ANGLE ON: SAM bursts through the trees and runs toward the lake. FRODO is already paddling away.
SAM
anguished
Not alone, Frodo. Mr. Frodo!
ANGLE ON: FRODO, in the boat, paddling steadfastly away from the shore, tears in his eyes, the voice of SAM carried on the wind. FRODO whispers to himself.
FRODO
No, Sam.
ANGLE ON: SAM looks at the water then at the boat.
SPLASH! FRODO turns to see SAM launching himself into the water.
FRODO
Go back, Sam! I'm going to Mordor alone.
ANGLE ON: SAM splashes hopelessly toward the boat.
SAM
Of course you are and I'm coming with you!
FRODO
You can't swim.
SAM starts to go under, spluttering and coughing
ANGLE ON: FRODO drops his paddle and scramble backwards in the boat.
FRODO
frightened
Sam!
ANGLE ON: SAM is underwater, hands flailing helplessly as he sinks.
CLOSE ON: FRODO’S hand grasping SAM’S.
ANGLE ON: FRODO pulls a bedraggled and half-drowned SAM into the boat. FRODO and SAM look at each other, out of breath, tears and water streaming down both their faces.
SAM
I made a promise, Mr. Frodo, a promise.
fierce passion
“Don't you leave him, Samwise Gamgee.”
sobs
And I don't mean to -- I don't mean to.
FRODO
crying
Oh, Sam!
FRODO starts to laugh through his tears, the two friends hug.
FRODO
Come on then.
The two HOBBITS row through the water.
EXT. FALLS OF RAUROS AERIAL - DAY
SLOW MOTION: Looking down on swiftly flowing water. BOROMIR’S body slides under CAMERA.
He is lying in one of the boats, his arms across his chest, his broken horn at his side.
SUDDENLY the boat drops away from CAMERA as it plunges over the massive FALLS OF RAUROS, disappearing into the vapor below.
EXT. SHORE OF NEN HITHOEL - DAY
ANGLE ON: LEGOLAS pushes the last boat into the water.
LEGOLAS
If we are quick, we will catch Frodo and Sam before nightfall.
ARAGORN looks toward the far shore: FRODO and SAM’S small boat can be seen lying on the distant RIVERBANK as FRODO and SAM make off into the forest beyond. He doesn’t react.
ANGLE ON: LEGOLAS turns and looks at ARAGORN.
LEGOLAS
You mean not to follow them --
ARAGORN
Frodo's fate is no longer in our hands.
GIMLI
Then it has all been in vain -- the Fellowship has failed.
ARAGORN
Not if we hold true to each other. We will not abandon Merry and Pippin to torment and death, not while we have strength left.
ARAGORN pulls a HUNTING KNIFE out of his pack and straps it on.
ARAGORN
Leave all that can be spared behind.
CLOSE ON: ARAGORN, a steely light in his eye.
ARAGORN
grimly
We travel light. Let’s hunt some Orc.
GIMLI
Yes! Ha!
ARAGORN, LEGOLAS, and GIMLI disappear into the WOODS, following the URUK-HAI trail.
EXT. EMYN MUIL HILLTOP - DAY
FRODO and SAM scramble onto a high ridge.
WIDE ON: A distant line of SAW TOOTHED mountains below a dark, oppressive sky. Black volcanic smoke rises behind the mountains MORDOR!
ANGLE ON: FRODO and SAM look with grim determination.
FRODO
Mordor! I hope the others find a safer road.
SAM
simply
Strider’ll look after them.
FRODO
I don't suppose we'll ever see them again.
SAM
We may yet, Mr. Frodo. We may.
FRODO
Sam?
FRODO looks at SAM with great affection, despite the grim outlook, SAM is undeterred.
FRODO
I'm glad you're with me.
WIDE ON: THE TWO HOBBITS SETTING OFF TOWARD MORDOR.
FADE TO BLACK
TITLE: New Line Cinema Presents
TITLE: A Wingnut Films Production
TITLE: THE LORD OF THE RINGS
FADE IN ON:
EXT. THE MISTY MOUNTAINS - DAY
HIGH WIDE AERIAL ON: CAMERA flies over the snow-covered peaks of the Misty Mountains. As the tranquillity of the scene sinks in, voices disrupt the peacefulness.
GANDALF (O.S.)
You cannot pass!
FRODO (O.S.)
Gandalf!
ON THE SOUNDTRACK: A faint crash sounds over the landscape.
GANDALF (O.S.)
I am the servant of the Secret Fire, wielder of the Flame of Anor!
PAN CLOSER TO THE SIDE OF THE MOUNTAINS.
GANDALF (O.S.)
Go back to the Shadow. The dark fire will not avail you, flame of Udûn!
TRACK THROUGH THE SIDE OF THE MOUNTAIN TO:
INT. BRIDGE OF KHAZAD-DÛM - MORIA - DAY
WIDE ON: The BALROG slashes at GANDALF with its SWORD OF FLAME. GANDALF blocks with GLAMDRING, a ringing clash and the BALROG’S SWORD SHATTERS into MOLTEN FRAGMENTS!
GANDALF
booming
You shall not pass!!
The BALROG places one foot onto the bridge.
GANDALF CRIES ALOUD as he summons his LAST RESERVES OF STRENGTH!!
He thumps the bridge with his staff, a blinding sheet of white flame springs up, the staff shatters, the bridge breaks, right at the BALROG’S feet.
The stone bridge drops away into the GULF from under the BALROG. For a moment, the great BEAST remains poised in the air then it plunges down:
SLOW MOTION: RELIEF floods FRODO’S face. GANDALF remains trembling on the lip of the broken bridge.
SLOW MOTION: As the BALROG falls, he lashes out with his whip of fire.
SLOW MOTION: The thongs of the whip lash and curl around GANDALF’S knees, dragging him over the brink! GANDALF just manages to hang on by his fingertips.
FRODO
screaming
Gandalf!
GANDALF
fierce
Fly, you fools!
FRODO
No!
CLOSE ON: GANDALF lets go his grip and falls away, following the BALROG into the BOTTOMLESS ABYSS!
FRODO (O.S.)
Gandalf!
TRACK AT HIGH SPEED WITH GANDALF AS HE PLUMMETS. THE BALROG SMOKES FROM BELOW.
ANGLE ON: GANDALF snatches GLAMDRING as he plummets head-first behind the BALROG.
GANDALF alights on the BALROG’S NECK and stabs GLAMDRING deep into it, the BALROG swipes at GANDALF loosening GANDALF’S grip.
The BALROG swings at GANDALF several times before snatching GANDALF in his GRASP, another bounce off the close walls and GANDALF falls freely again.
GANDALF grabs ahold of the demon’s horn as they continue their never-ending plunge. The BALROG bounces off the walls as GANDALF prepares to drive GLAMDRING into its head.
INT. UNDERGROUND CAVERN - DAY
WIDE ON: AT THE UTTERMOST FOUNDATIONS BENEATH THE DEEPEST
DELVINGS OF THE DWARVES, GANDALF and the BALROG emerge like a small ball of fire high above an enormous body of water in a cavern without measure.
CLOSE ON: GANDALF’S EYES WIDEN as they crash into the water below.
CUT TO:
EXT. EMYN MUIL - DAY
CLOSE ON: FRODO awakens as if from a nightmare.
FRODO
calling out
Gandalf!
ANGLE ON: FRODO props himself up, hyperventilating. SAM sits up behind him.
SAM
What is it, Mr. Frodo?
FRODO
Nothing.
FRODO lies back down.
FRODO
Just a dream.
EXT. EMYN MUIL - LATER
WIDE ON: FOG lays heavy over the ROCKY LANDSCAPE of EMYN MUIL.
TITLE: THE TWO TOWERS
ANGLE ON: FRODO and SAM climb down a rock face toward the mist-covered ground.
SAM
Can you see the bottom?
ANGLE ON: FRODO looks down into the mist.
FRODO
No! Don’t look down, Sam! Just keep going!
CLOSE ON: SAM clings to the ROPE and nods. He slowly continues.
ANGLE ON: The ROPE is tied securely around a rock at the top of the face.
ANGLE ON: SAM takes a step and loses his footing. A SMALL BOX tumbles out of his pocket! He desperately reaches for it.
SAM
Catch it! Grab it, Mr. Frodo!
ANGLE ON: FRODO looks up. THE BOX bounces down the rock. FRODO deftly catches it.
SUDDENLY, HE LOSES HIS FOOTING AND PLUNGES INTO THE MIST BELOW!
SAM
Mr. Frodo!
After only a few feet, FRODO lands softly on the ground.
Stunned, he looks about for a moment, and then up to SAM.
FRODO
I think I’ve found the bottom.
SAM quickly climbs downward and walks away from the rope.
SAM
Bogs and rope, and goodness knows what. It ain’t natural, none of it.
FRODO studies the SMALL BOX.
FRODO
What’s in this?
SAM
Nothing. Just a bit of seasoning. I thought maybe if we was having a roast chicken one night or something.
CLOSE ON: SAM looks at FRODO with the greatest of honesty. FRODO looks at SAM incredulously.
FRODO
Roast chicken?!
SAM shrugs.
SAM
You never know.
FRODO laughs and shakes his head.
FRODO
Sam. My dear Sam.
CLOSE ON: Carefully, FRODO opens the lid to look inside. The BOX is filled to the brim with SEASONING.
SAM
It’s very special, that. It’s the best salt in all the Shire.
FRODO
It is special.
ANGLE ON: FRODO looks at SAM nostalgically.
FRODO
It’s a little bit of home.
FRODO hands the box back to SAM and walks over to the rope still tied at the top of the cliff. He gazes upward.
FRODO
We can’t leave this here for someone to follow us down.
SAM
Who’s gonna to follow us down here, Mr. Frodo?
FRODO looks at the rope, worried. SAM looks at it longingly.
SAM
It’s a shame, really. Lady Galadriel gave me that. Real Elvish rope.
SAM puts the box of seasoning in his pocket and walks over to the rock face.
SAM
Well, there’s nothing for it. It’s one of my knots. Won’t come free in a hurry.
SAM tugs on the rope - hard.
ANGLE ON: The ELVISH ROPE unties itself and plummets.
ANGLE ON: The ROPE lands at SAM’S FEET. SAM stands speechless for a moment, and then he looks at FRODO who shrugs.
FRODO
Real Elvish rope.
SAM looks briefly at the bit he is still holding, and then at the summit far above.
EXT. EMYN MUIL - DAY
WIDE ON: FRODO and SAM climb over the rocky terrain to reach the summit of another part of EMYN MUIL.
ANGLE ON: They look into the distance at the MORDOR. MOUNT DOOM belches fire and smoke.
SAM
Mordor. The one place in Middle-earth we don’t want to see any closer. And the one place we’re trying to get to. It’s just where we can’t get.
CLOSE ON: SAM turns to FRODO, worried.
SAM
Let’s face it, Mr. Frodo, we’re lost.
CLOSE ON: FRODO looks at SAM, scared.
SAM
I don’t think Gandalf meant for us to come this way.
FRODO
He didn’t mean for a lot of things to happen, Sam, but they did.
Suddenly, FRODO gasps.
INSERT IMAGE: From deep within Mordor the BLAZING EYE OF SAURON looks directly upon him from high atop THE TOWER OF BARAD-DÛR.
ANGLE ON: FRODO shudders and turns away from the sight. He sits, panting.
ANGLE ON: SAM turns to him.
SAM
Mr. Frodo?
FRODO continues panting, unable to respond.
SAM
It’s the Ring, isn’t it?
FRODO
It’s getting heavier.
CLOSE ON: FRODO clutches the RING on his chest.
ANGLE ON: SAM sits behind him and begins to go through his pack.
FRODO fumbles for his water bottle and takes a deep gulp.
FRODO
What food have we got left?
SAM
Let me see.
CLOSE ON: He takes a LEAF-WRAPPED BIT OF ELVEN BREAD from his pack.
SAM
Oh yes, lovely. Lembas bread. And look!
He digs deeper into his pack and pulls out:
SAM
More Lembas bread.
He breaks off a piece and tosses it to FRODO, and then eats a piece himself.
SAM
I don't usually hold with foreign food, but this Elvish stuff, it’s not bad.
FRODO
smiling
Nothing ever dampens your spirits, does it, Sam?
SAM smiles back, glances at his bread, as if considering another bite, and then looks ominously off into the distance. His expression drops.
SAM
Those rain clouds might.
EXT. EMYN MUIL - NIGHT
ANGLE ON: FRODO and SAM sit huddled together wrapped in their cloaks. RAIN beats mercilessly down upon them, neither one sleeps.
HIGH WIDE ON: The HOBBITS shivering at the base of the rocks. HARSH BREATHING SOUNDS. A HAND rests on the edge of the cliff.
ANGLE ON: FRODO suddenly looks up.
LOW ANGLE ON: The side of the rock face, nothing is seen on its peak.
ANGLE ON: FRODO shakes his head and huddles back down into his cloak.
CUT TO:
EXT. EMYN MUIL - DAY
ANGLES ON: FRODO and SAM climb over the rocks, walk along a path, scale the side of a rock face, walk along a summit.
SAM
This looks strangely familiar.
FRODO
exasperated
It’s because we’ve been here before. We’re going in circles.
SAM walks to an overlook.
SAM
What's that horrid stink? I warrant there's a nasty bog nearby. Can you smell it?
FRODO
Yes. I can smell it.
FRODO walks over to join SAM at the overlook.
CLOSE ON: FRODO looks to SAM ominously.
FRODO
whispers
We’re not alone.
CUT TO:
EXT. EMYN MUIL - NIGHT
ANGLE ON: FRODO and SAM sleep.
HIGH WIDE: A dark, spidery shape appears on top of the cliff and makes its way down to the slumbering HOBBITS.
ANGLE ON: The emaciated creature is dressed only in a tattered loincloth, and appears mostly human in appearance. Its frame is quite thin, but its hands, feet, and eyes are oversized. What hair remains is thin and falls where it may about its shoulders.
It descends the rock face upside down like an insect. This is GOLLUM. He speaks in an ancient, gravely voice.
GOLLUM
The thieves. The thieves. The filthy little thieves. Where is it?
CRANE BEHIND GOLLUM as he climbs down.
GOLLUM
Where is it? They stole it from us. My precious. Curse them, we hates them! It’s ours, it is, and we wants it!
GOLLUM reaches his hand out to snatch his prize.
SUDDENLY, the HOBBITS spring and snatch GOLLUM off the side of the rock. Amidst the struggle, GOLLUM wriggles loose and throws them both away from him.
As FRODO falls back, the RING comes out of his shirt.
GOLLUM recovers and sees the RING. He leaps straight for it.
GOLLUM desperately tries to get his hands on his precious while FRODO struggles to prevent this.
SAM recovers and grabs GOLLUM by the ankle, dragging him away from FRODO. GOLLUM reels back and hits SAM in the face, knocking him away.
He pounces back on FRODO and reaches for the RING. FRODO grabs Gollum’s hand, and struggles against his considerable strength.
CLOSE ON: GOLLUM’S cheeks puff with exertion as he struggles with FRODO, his enormous eyes fixed on the RING.
ANGLE ON: SAM comes up from behind GOLLUM again, and lifts him off of FRODO. GOLLUM grasps FRODO, throwing him off to one side as SAM swings GOLLUM around.
GOLLUM leaps from Sam’s grasp onto the rock wall beside them, and then back on top of FRODO.
SAM pulls GOLLUM off again, and GOLLUM turns on him, he fiercely bits SAM on the neck. SAM struggles against him, but GOLLUM reels around, wraps his legs around SAM and tries to choke him!
SAM falls to the ground atop GOLLUM, but GOLLUM continues to have the upper hand.
SUDDENLY, FRODO grabs GOLLUM by the hair, and holds STING to his neck.
CLOSE ON: GOLLUM’S eyes go wide, and he freezes. He maintains a hold on SAM.
FRODO
menacingly
This is Sting. You’ve seen it before, haven’t you, Gollum?
ANGLE ON: SAM tries to break GOLLUM’S grip, unsuccessfully.
FRODO
Release him or I’ll cut your throat!
ANGLE ON: Slowly, GOLLUM loosens his grip on SAM and then WAILS.
CUT TO:
EXT. EMYN MUIL - DAY
WIDE ON: Gollum’s wail ECHOES across the vast, rocky landscape of EMYN MUIL.
EXT. EMYN MUIL - DAY
ANGLE ON: FRODO and SAM walks through EMYN MUIL...SAM tugs on the rope and GOLLUM stumbles behind them. GOLLUM continues to SCREAM and WAIL.
GOLLUM
It burns! It burns us! It freezes! Nasty Elves twisted it. Take it off us!
SAM continues dragging GOLLUM, willing or not, across the rocks.
SAM
Quiet, you!
GOLLUM stops again.
SAM tugs fiercely at the rope to try and get him to come along, but GOLLUM wails again, unmoving. SAM turns to FRODO in dismay.
SAM
It’s hopeless. Every Orc in Mordor’s going to hear this racket. Let’s just tie him up and leave him.
ANGLE ON: GOLLUM stops crying at once and turns to the HOBBITS wide-eyed and pleading.
GOLLUM
No! That would kill us! Kill us!
SAM
It’s no more than you deserve!
GOLLUM wails again and COLLAPSES onto the ground, writhing.
ANGLE ON: FRODO looks down to GOLLUM.
FRODO
Maybe he does deserve to die. But now that I see him, I do pity him.
ANGLE ON: GOLLUM suddenly stops and turns to FRODO, smiling.
GOLLUM
begging
We be nice to them if they be nice to us. Take it off us.
ANGLE ON: FRODO and SAM look at GOLLUM warily.
GOLLUM
We swears to do what you wants. We swears.
FRODO
There’s no promise you can make that I can trust.
ANGLE ON: GOLLUM scrambles up and bows to FRODO desperately.
GOLLUM
smiling
We swears to serve the master of the precious. We will swear on the...on the precious.
coughing
Gollum. Gollum.
FRODO
The Ring is treacherous. It will hold you to your word.
ANGLE ON: GOLLUM crawls over to FRODO.
GOLLUM
Yes, on the precious. On the precious.
SAM
I don’t believe you!
ANGLE ON: SAM lunges at GOLLUM. GOLLUM jumps away, frightened, and climbs onto a boulder.
SAM
Get down! I said, down!
SAM jerks strongly at the rope. GOLLUM crashes to the ground, choking.
FRODO
Sam!
SAM
He’s trying to trick us! If we let him go he’ll throttle us in our sleep.
ANGLE ON: GOLLUM lies panting and holding his throat. He backs away, frightened, as FRODO approaches him.
FRODO
You know the way to Mordor?
GOLLUM
warily
Yes.
FRODO
You’ve been there before?
GOLLUM
Yes.
ANGLE ON: FRODO reaches out and removes the rope from GOLLUM’S neck. GOLLUM is surprised and relieved.
CLOSE ON: SAM is displeased.
FRODO
You will lead us to the Black Gate.
CUT TO:
EXT. EMYN MUIL - DAY
TRACK WITH: GOLLUM scrambles quickly through the rocky crags, looking back to make sure the HOBBITS are behind him.
ANGLE ON: FRODO and SAM struggle to keep his pace.
SMÉAGOL
To the Gate, to the Gate! To the Gate, the master says. Yes!
CLOSE ON: GOLLUM sports an EVIL FACE.
GOLLUM
No! We won’t go back. Not there. Not to him. They can’t make us.
coughing
Gollum! Gollum!
He scrambles on further and stops atop a rock. His FACE turns suddenly SOFT.
SMÉAGOL
pleading
But we swore to serve the master of the precious.
GOLLUM
No. Ashes and dust and thirst there is, and pits, pits, pits.
ANGLE ON: SAM and FRODO run up behind him, listening.
GOLLUM
And Orcses, thousands of Orcses. And always the Great Eye watching, watching.
He hides in face in his hands at the horror of the thought.
Suddenly, he looks back to see SAM and FRODO. He lets out a frightening growl and runs off down the path.
SAM starts forward.
GOLLUM leaps down a rock wall and scurries away from the HOBBITS.
SAM
Hey! Come back now! Come back!
SAM and FRODO try to follow, but he has escaped them.
SAM
There! What did I tell you? He’s run off, the old villain. So much for his promises.
GOLLUM pops up behind a nearby rock.
GOLLUM
This way, Hobbits. Follow me!
FRODO quickly runs after him. SAM, with a scowl, concedes to follow as well.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
CRANE DOWN TO: A BAND OF URUK-HAI runs across ROHAN. MERRY and PIPPIN, ride on the backs of two URUK-HAI, their hands bound around the URUK-HAIS’ necks.
ANGLE ON: PIPPIN tries to call to MERRY, who is unconscious with a gash on his brow.
PIPPIN
Merry! Merry!
MERRY does not respond.
ANGLE ON: SUDDENLY, the leading URUK-HAI, MAÚHUR, signals a stop. He sniffs the air.
ANGLE ON: Several Orcs from the North emerge from behind some rocks. They are led by a short, crook-legged Orc, very broad with long arms that hang almost to the ground called GRISHNÁKH.
GRISHNÁKH
You’re late. Our master grows impatient. He wants the Shire-rats now.
ANGLE ON: UGLÚK looks at MAÚHUR amused.
UGLÚK
I don’t take orders from Orc-maggots.
ANGLE ON: GRISHNÁKH’S face falls.
UGLÚK
Saruman will have his prize. We will deliver them.
UGLÚK turns away from the Northern Orcs.
ANGLE ON: GRISHNÁKH mocks him as he walks away, but they make no move on the URUK-HAI.
ANGLE ON: PIPPIN tries again to rouse MERRY.
PIPPIN
Merry! Merry? Wake up.
ANGLE ON: MERRY’S head lolls around, unresponsive. PIPPIN looks over to an Orc drinking his draught.
PIPPIN
My friend is sick.
ANGLE ON: An URUK-HAI turns to PIPPIN and growls.
PIPPIN
He needs water. Please!
ANGLE ON: UGLÚK makes his way through the ranks to the prisoners.
UGLÚK
Sick, is he? Give him some medicine, boys!
The ORCS laugh and dump their ORC-DRAUGHT down MERRY’S throat.
MERRY chokes on the foul stuff.
PIPPIN
Stop it!
UGLÚK
Can’t take his draught!
The Orcs laugh again as MERRY chokes on the draught.
PIPPIN
Leave him alone!
UGLÚK
Why?
ANGLE ON: PIPPIN looks at UGLÚK, afraid to respond.
UGLÚK
You want some?
PIPPIN doesn’t respond.
UGLÚK
Then keep your mouth shut.
UGLÚK turns and walks away.
ANGLE ON: PIPPIN turns to MERRY.
PIPPIN
Merry.
ANGLE ON: MERRY groggily lifts his head.
MERRY
Hello, Pip.
PIPPIN
You’re hurt.
MERRY
smiling uneasily
I’m fine. It was just an act.
PIPPIN
disbelieving
An act?
MERRY
See? I fooled you too.
ANGLE ON: PIPPIN smiles uneasily.
MERRY
Don’t worry about me, Pippin.
ANGLE ON: MAÚHUR sniffs the air again. UGLÚK appears behind him.
UGLÚK
What is it? What do you smell?
MAÚHUR
Man-flesh.
UGLÚK
They've picked up our trail.
PIPPIN
quietly to himself
Aragorn!
UGLÚK
loudly, to the company
Let's move!
The URUK-HAI break into a run. The NORTHERN ORCS follow.
ANGLE ON: PIPPIN struggles to remove his ELVEN BROOCH from his LÓRIEN cloak with his teeth. Once he has it, he spits it onto the ground.
CLOSE ON: The brooch lands in the grass. The URUK-HAI trample it, but it remains unbroken and visible.
CUT TO:
EXT. WESTERN EMYN MUIL - DAY
ARAGORN lies on the ground with his eyes closed and ear pressed to the ground, listening. Suddenly, he opens his eyes.
ARAGORN
softly
Their pace has quickened.
He climbs to his feet.
ARAGORN
They must have caught our scent.
desperately
Hurry!
He takes off Northward.
ANGLE ON: LEGOLAS is running up the hill behind him. He stops and turns behind him.
LEGOLAS
Come on, Gimli!
He runs onward. GIMLI struggles up the hill.
ANGLE ON: GIMLI pauses in his steps and huffs.
GIMLI
Three days and nights pursuit. No food. No rest. And no sign of our quarry but what bare rock can tell.
He runs after his companions beyond the boundaries of EMYN MUIL.
EXT. EAST WALL OF ROHAN - DAY
HIGH AERIAL: The THREE HUNTERS run along the edge of the cliff over a trickling stream at least twenty leagues below.
EXT. PLAINS OF ROHAN - DAY
CLOSE ON: PIPPIN’S ELVEN BROOCH is still visible in the mud and grass in the open plains. A HAND suddenly reaches down to pick it up. ARAGORN draws it to his face, and then looks ahead.
ARAGORN
Not idly do the leaves of Lórien fall.
ANGLE ON: LEGOLAS stops and turns to ARAGORN.
LEGOLAS
They may yet be alive.
ANGLE ON: ARAGORN briefly studies the ground, and starts to run again.
ARAGORN
Less than a day ahead of us. Come.
ARAGORN takes off.
ANGLE ON: GIMLI stumbles from behind some rocks and rolls to the ground. LEGOLAS stops and turns to him.
LEGOLAS
Come, Gimli! We are gaining on them!
GIMLI
panting
I am wasted on cross-country. We dwarves are natural sprinters. Very dangerous over short distances.
ANGLE ON: The HUNTERS come over a hill and pause as they gaze across the open fields of ROHAN.
ARAGORN
Rohan. Home of the Horse-lords. There’s something strange at work here. Some evil gives speed to these creatures. Sets its will against us.
ANGLE ON: LEGOLAS runs ahead and looks out to the horizon.
ARAGORN
Legolas! What do your Elf eyes see?
WIDE ON: A distant cloud of dust stirs up the otherwise serene view of ROHAN.
LEGOLAS
The Uruks turn northeast. They’re taking the Hobbits to Isengard!
ARAGORN
Saruman.
CUT TO:
EXT. ISENGARD - NIGHT
WIDE ON: The TOWER OF ORTHANC stands amidst the smoking CAVERNS OF ISENGARD. Smoke issues forth from amidst the now ash-colored land within the RING OF ISENGARD.
INT. ISENGARD - PALANTÍR CHAMBER - NIGHT
ANGLE ON: SARUMAN stands in his chamber, his hand hovering over the PALANTÍR. Within the dark orb are swirls of fire.
SARUMAN (V.O.)
The world is changing.
CLOSE ON: The view within the PALANTÍR changes to that of BARAD-DÛR.
SARUMAN (V.O.)
Who now has the strength to stand against the armies of Isengard and Mordor?
INSERT IMAGE: ARMIES OF ORCS march out of BARAD-DÛR.
SARUMAN (V.O.)
To stand against the might of Sauron and Saruman and the union of the two towers?
CRANE UP the height of the TOWER OF BARAD-DÛR, now completed - dark and menacing.
SARUMAN (V.O.)
Together, my Lord Sauron, we shall rule this Middle-earth.
ANGLE ON: The FLAMING EYE OF SAURON atop the tower, watching the world.
EXT. ISENGARD - NIGHT
ANGLES ON: The beautiful trees of ISENGARD hacked down by ORCS. AXES hack into the truck, their carcasses thrown down into the PITS.
INT. CAVERNS OF ISENGARD - NIGHT
SERIES OF CUTS: SARUMAN walks through his domain. ORCS hack into the tree trunks. ORCS throws logs into furnaces.
SARUMAN (V.O.)
The Old World will burn in the fires of industry. The forests will fall.
SERIES OF CUTS: MOLTEN METAL is poured into sword molds, finished swords are cooled, helmets are created, swords are pounded into shape.
ORCS add the completed swords to a large pile. URUK-HAI are birthed into creation, an ORC inspects the finished URUK-HAI.
SARUMAN (V.O.)
A new order will rise. We will drive the machine of war with the sword and the spear and the iron fists of the Orc.
EXT. ISENGARD - DAY
WIDE ON: SARUMAN stands on a scaffold high above the CAVERNS.
Far below, hundreds of ORCS go about their duties. SARUMAN turns to an ORC OVERSEER.
SARUMAN
I want them armed and ready to march within two weeks!
ORC OVERSEER
But, my lord, there are too many! They cannot all be armed in time, we don’t have the means.
SARUMAN
Build a dam, block the stream, work the furnaces night and day.
ORC OVERSEER
We don’t have enough fuel to feed the fires.
CLOSE ON: SARUMAN looks up and smiles.
WIDE ON: The beautiful and enormous FANGORN FOREST engulfs the nearby mountainside.
SARUMAN
The FOREST OF FANGORN lies on our doorstep.
CLOSE ON: SARUMAN looks upon the view coldly.
SARUMAN
Burn it.
ORC OVERSEER
happily
Yes.
CUT TO:
INT. ORTHANC - PALANTÍR CHAMBER - DAY
ANGLE ON: SARUMAN sits upon his throne. A WILD MAN stands before him.
WILD MAN
We will fight for you.
SARUMAN
Swear it.
CLOSE ON: The WILD MAN removes a knife from his belt, and holds it before him. He places the blade against his hand and cuts deeply.
CLOSE ON: SARUMAN smiles.
ANGLE ON: The WILD MAN clenches his fist. Blood seeps from between his fingers.
WILD MAN
We will die for Saruman.
EXT. ISENGARD - DAY
WIDE ON: SARUMAN stands in the midst of a large gathering of WILD MEN.
SARUMAN
The Horse-men took your land.
ANGLE ON: SARUMAN stands within a tight circle of the scowling MEN.
SARUMAN
They drove your people into the hills to scratch a living off rocks.
WILD MAN
Murderers!
The crowd descends quickly into a mob rule, quickly agreeing with the MAN.
SARUMAN
Take back the lands they stole from you. Burn every village!
ANGLES ON: The WILD MEN roar with approval and charge off to destroy for SARUMAN. He walks calmly through the pandemonium.
SARUMAN (V.O.)
We have only to remove those who oppose us.
EXT. PLAINS OF ROHAN - DAY
ANGLE ON: Several FORCES of MEN charge across ROHAN, heading toward a small village.
SARUMAN (V.O.)
It will begin in Rohan.
INT. ROHAN VILLAGE - DAY
The VILLAGERS quickly gather their things.
SARUMAN (V.O.)
Too long have these peasants stood against you. But no more.
ANGLE ON: MORWEN packs necessities on her horse. She calls out to her CHILDREN.
MORWEN
Éothain! Éothain!
ANGLE ON: A young boy and girl, ÉOTHAIN and FREDA, run to their mother with their bags. MORWEN helps him on the horse.
MORWEN
You’ll take your sister. You’ll go faster with just two.
FREDA
Papa says Éothain must not ride Garulf. He is too big for him!
MORWEN lifts FREDA onto the horse in front of her brother.
MORWEN
Listen to me. You must ride to Edoras and raise the alarm. Do you understand me?
ÉOTHAIN
Yes, Mama!
FREDA starts to cry, and reaches for her mother.
FREDA
I don’t want to leave. I don't want to go, Mama.
MORWEN
Freda, I will find you there.
A SCREAM BREAKS THE MOMENT.
CLOSE ON: MORWEN runs to look.
POV: The far side of the village is under siege. VILLAGERS are running towards MORWEN.
MORWEN
Quickly!
ANGLE ON: MORWEN slaps the horse and it rides off with the children. FREDA continues crying and reaching for her mother. MORWEN looks after them, sorrowfully.
MORWEN
quietly
Go, child.
SERIES OF CUTS: WILD MEN and URUK-HAI overrun the village, the VILLAGERS try in vain to escape, they are cut down, the village burns in their wake.
EXT. PLAINS OF ROHAN - DAY
ANGLE ON: ÉOTHAIN and FREDA weep as they look back.
WIDE ON: The village burns. Smoke billows into the air.
Reluctantly, they urge GARULF on to EDORAS.
SARUMAN (V.O.)
Rohan, my lord, is ready to fall.
CUT TO:
EXT. FORDS OF ISEN - NIGHT
WIDE ON: The aftermath of a battle lies in and out of the water.
A torrential downpour lends a grey air to the omnipresent death.
ANGLE ON: ÉOMER leads a group of ROHIRRIM HORSEMEN onto the scene and surveys the damage.
ÉOMER
quietly
Théodred.
to the ROHIRRIM
Find the king’s son!
ANGLES ON: The ROHIRRIM walk amongst the arrow-pierced dead, checking the face of each one.
ROHAN SOLDIER 1
Mordor will pay for this.
ÉOMER
These Orcs are not from Mordor.
CLOSE ON: He kicks one of the dead Orcs to reveal the familiar WHITE HAND OF SARUMAN.
ROHAN SOLDIER 2
My Lord Éomer, over here!
ANGLE ON: ÉOMER runs over to the riverbank where ROHAN SOLDIER 2 waits.
CLOSE ON: They roll over THÉODRED.
CLOSE ON: Hope flickers in ÉOMER’S eyes.
ÉOMER
He’s alive.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
MONTAGE OF SHOTS: The ROHIRRIM ride to EDORAS. ÉOMER leads, carrying a gravely wounded THÉODRED.
EXT. EDORAS - DAY
The HORSEMEN ride into the city. The people clear a path for the riders.
EXT. MEDUSELD - DAY
ANGLE ON: ÉOWYN hastens up the stairs to the GOLDEN HALL.
INT. THÉODRED’S BEDCHAMBER - DAY
ANGLE ON: ÉOWYN enters and runs over to THÉODRED’S bed. ÉOMER kneels beside it. She leans over THÉODRED.
ÉOWYN
Théodred!
ANGLE ON: THÉODRED head lolls, unresponsive.
ANGLE ON: ÉOMER nods to ÉOWYN. ÉOWYN draws back the covers and sees THÉODRED’S fatal wound. She gasps, knowing the meaning. She looks to ÉOMER, who nods.
INT. MAIN HALL - MEDUSELD - DAY
WIDE ON: ÉOMER and ÉOWYN stand before the king, THÉODEN, who sits motionless on his throne, wizened, and aged beyond his years. ÉOWYN kisses his cheeks and kneels before him.
ÉOWYN
Your son is badly wounded, my lord.
ÉOMER
He was ambushed by Orcs.
ANGLE ON: THÉODEN makes no response. He stares off into the distance.
ÉOMER
If we don’t defend our country, Saruman will take it by force.
WORMTONGUE (O.S.)
That is a lie.
ANGLE ON: GRÍMA WORMTONGUE appears from the shadows. He walks over to stand beside the king.
WORMTONGUE
Saruman the White has ever been our friend and ally.
ANGLE ON: ÉOMER looks at WORMTONGUE with contempt.
THÉODEN
mumbles feebly
Gríma -- Gríma --
ANGLE ON: WORMTONGUE leans down close to the King.
THÉODEN
My son -- Gríma --
ÉOMER
Orcs are running freely across our lands. Unchecked. Unchallenged. Killing at will. Orcs bearing the White Hand of Saruman.
ANGLE ON: ÉOMER drops one of the ORC HELMETS onto the ground, which topples over to reveal the WHITE HAND OF SARUMAN.
ANGLE ON: WORMTONGUE looks at it, as if considering his words.
Finally, he speaks, but kneels down to THÉODRED, as if speaking to the king.
WORMTONGUE
Why do you lay these troubles on an already troubled mind? Can you not see? Your uncle is wearied by your malcontent, your warmongering.
ANGLE ON: ÉOMER looks over to WORMTONGUE, surprised.
ÉOMER
Warmongering?
ÉOMER grabs WORMTONGUE and pins him against a pillar.
ÉOMER
How long is it since Saruman bought you? What was the promised price, Gríma? When all the Men are dead, you will take your share of the treasure?
CLOSE ON: WORMTONGUE’S eyes flicks to right. ÉOMER follows his glance.
ANGLE ON: ÉOWYN pauses to stare back for a moment before departing from the hall.
ANGLE ON: ÉOMER jerks WORMTONGUE again and clutches his hand around WORMTONGUE’S neck.
ÉOMER
Too long have you watched my sister. Too long have you haunted her steps.
ANGLE ON: WORMTONGUE’S eyes flick to the left and right. He smiles as ÉOMER is suddenly pulled off WORMTONGUE by his thugs.
WORMTONGUE
You see much, Éomer, Son of Éomund. Too much.
The thugs punch ÉOMER in the stomach.
WORMTONGUE
You are banished forthwith from the kingdom of Rohan and all its domains under pain of death.
ANGLE ON: ÉOMER struggles against the MEN.
ÉOMER
You have no authority here. Your orders mean nothing.
One of the MEN punches ÉOMER in the stomach again.
WORMTONGUE
shaking his head and smiling
This order does not come from me. It comes from the king.
ANGLE ON: WORMTONGUE holds up a document with a sloppy scrawl of a signature at the bottom.
WORMTONGUE
He signed it this morning.
ANGLE ON: The THUGS drag ÉOMER away.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
The URUK-HAI and ORCS continue to run across the open plains with their HOBBIT captives.
INTERCUT WITH: ARAGORN, LEGOLAS, and GIMLI continue to give pursuit.
GIMLI
Keep breathing. That’s the key. Breathe.
LEGOLAS
They run as if the very whips of their masters were behind them.
The TWO PARTIES continue running over the vastness of ROHAN from day through to sunset. Neither the URUK-HAI nor the THREE HUNTERS willing to stop for rest or breath.
EXT. BORDERS OF FANGORN - NIGHT
MERRY and PIPPIN are suddenly thrown onto the ground.
ANGLES ON: The ORCS collapse with exhaustion beneath the boughs of the trees on the very brink of the Fangorn Forest.
ORC
We’re not going no further till we’ve had a breather.
UGLÚK
Get a fire going!
WIDE ON: Several URUK-HAI break off and run into FANGORN FOREST.
ANGLE ON: PIPPIN, hands still bound, crawls over to MERRY.
PIPPIN
Merry! Merry!
MERRY opens his eyes.
MERRY
I think we might have made a mistake leaving the Shire, Pippin.
PIPPIN laughs.
EXT. FANGORN FOREST - NIGHT
ANGLES ON: A group of ORCS chops down the trees inside the Forest for firewood.
ON THE SOUNDTRACK: Low groans and rumbles issue from the forest.
EXT. BORDERS OF FANGORN - NIGHT
ANGLE ON: PIPPIN turns to MERRY with fear.
PIPPIN
What’s making that noise?
MERRY looks toward the forest. He smiles.
MERRY
It’s the trees.
PIPPIN
What?
MERRY
Do you remember the Old Forest, on the borders of Buckland? Folk used to say there was something in the water that made the trees grow tall and come alive.
PIPPIN
Alive?
ON THE SOUNDTRACK: Another groan issues from the Forest.
MERRY
Trees that could whisper, talk to each other, even move.
ANGLE ON: An URUK-HAI stares at a piece of bread, and then throws it to the ground.
URUK-HAI
I'm starving. We ain't had nothing but maggoty bread for three stinking days.
ANGLE ON: AN ORC looks up in agreement.
SNAGA
Yeah! Why can’t we have some meat?!
CLOSE ON: The SNAGA’S eyes grow wide and hungry.
ANGLE ON: MERRY and PIPPIN look over to the ORC. They squirm uncomfortably.
SNAGA
What about them? They’re fresh.
UGLÚK
They are not for eating.
ANGLE ON: An URUK-HAI stands the HOBBITS up and moves them off to the side.
ANGLE ON: GRISHNÁKH watches their movements hungrily.
GRISHNÁKH
What about their legs? They don't need those. They look tasty.
GRISHNÁKH makes a move towards the HOBBITS. UGLÚK shoves him back into the ORCS.
UGLÚK
Get back, scum!
The ORCS spring forward and scowl at UGLÚK.
UGLÚK
The prisoners go to Saruman. Alive and unspoiled.
GRISHNÁKH
Alive?
ANGLE ON: GRISHNÁKH feints to one side of UGLÚK to have another good look at the HOBBITS.
GRISHNÁKH
Why alive? Do they give good sport?
He looks to UGLÚK hungrily. UGLÚK is unmoved.
UGLÚK
They have something. An Elvish weapon. The master wants it for the war.
ANGLE ON: SNAGA stealthily approaches from behind MERRY and PIPPIN, licking his lips.
ANGLE ON: PIPPIN leans over to MERRY.
PIPPIN
They think we have the Ring.
MERRY quickly shushes PIPPIN.
MERRY
As soon as they find out we don’t, we’re dead.
ANGLE ON: SNAGA rises up from behind the HOBBITS and raises his blade.
SNAGA
Just a mouthful. A bit of the flank.
MERRY and PIPPIN gasp.
SUDDENLY, UGLÚK swings his weapon. MERRY and PIPPIN shudder as SNAGA’S head tumbles to the ground between them. They turn around to see his body stand for a moment, and then topple over.
UGLÚK
Looks like meat’s back on the menu, boys.
ANGLES ON: The ORCS and URUK-HAI cheer mightily.
They shove MERRY and PIPPIN to the ground and tear at the carcass.
MERRY
Pippin. Let’s go.
Their hands still bound, the HOBBITS crawl away.
SUDDENLY, a foot comes down on MERRY.
ANGLE ON: PIPPIN turns over and looks straight into the face of --
CLOSE ON: GRISHNÁKH brandishing a blade in his face.
GRISHNÁKH
Go on. Call for help.
GRISHNÁKH grabs PIPPIN by the face and pulls him closer.
GRISHNÁKH
Squeal. No one’s gonna save you now.
ANGLE ON: SUDDENLY, a SPEAR pierces GRISHNÁKH’S back.
He screams and rolls off of PIPPIN. PIPPIN and MERRY look up to see who threw the spear.
ANGLES ON: The ORCS halt their feast and look into the darkness to find --
ANGLES ON: -- Hundreds of HORSEMEN burst onto the camp. The ROHIRRIM throw spears and quickly begin to decimate the Orcs’ numbers.
ANGLE ON: MERRY starts crawling again.
MERRY
Pippin!
SERIES OF CUTS: The ORCS and URUKS make a feeble charge on the ROHIRRIM. The ROHIRRIM mercilessly slaughter them with swords, arrows, and spears, all from horseback! The ORCS and URUKS run for their lives!
ANGLE ON: PIPPIN looks around quickly in the ensuing pandemonium, he rolls onto his back and looks up to find --
POV: -- A HORSE REARING ABOVE HIM! THE HOOVES CRASH DOWN.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
The dawning sun rises as the THREE HUNTERS continue their trek across the fields at high speed.
ANGLE ON: LEGOLAS pauses and looks upon the sun with dread.
LEGOLAS
A red sun rises. Blood has been spilled this night.
Without another word, he continues on the hunt.
EXT. PLAINS OF ROHAN - DAY
At the top of a rise, ARAGORN stops again to examine the ground.
ON THE SOUNDTRACK: The SOUNDS OF HORSES NEIGHING BREAKS THE AIR!
ANGLE ON: ARAGORN looks up warily. He gestures to LEGOLAS and GIMLI to hasten behind a nearby rock formation to hide.
WIDE ON: The ÉOMER AND HIS RIDERS OF ROHAN ride over the hill.
ANGLE ON: ARAGORN looks up at them passing. He walks calmly out of hiding.
ARAGORN
calling out
Riders of Rohan, what news from the Mark?
WIDE ON: The HEAD HORSEMAN signals the pack with his spear.
With astonishing speed and skill, the ROHIRRIM check their steeds, wheel around, and charge the THREE.
ANGLE ON: ARAGORN is joined by LEGOLAS and GIMLI. Together, they watch the ROHIRRIM approach.
WIDE ON: The RIDERS circle around the THREE HUNTERS tightly.
They suddenly stop and point their spears at the THREE.
ANGLE ON: ARAGORN holds up his hands in surrender. ÉOMER rides forward and addresses them from his steed.
ÉOMER
What business does an Elf, a Man and a Dwarf have in the Riddermark? Speak quickly!
GIMLI
defiantly
Give me your name, horse-master, and I shall give you mine.
ANGLE ON: ÉOMER hands his staff to another RIDER, and gets off his horse.
ANGLE ON: GIMLI gives an arrogant nod at ÉOMER’S approach.
ARAGORN puts a hand on GIMLI’S shoulder to stay him.
ÉOMER
I would cut off your head, beard and all, Master Dwarf, if it stood but a little higher from the ground.
ANGLE ON: In a lightning fast move, LEGOLAS nocks an arrow, and points it at ÉOMER.
LEGOLAS
You would die before your stroke fell.
IN A TENSE MOMENT, ALL SPEARS ARE TRAINED ON LEGOLAS.
ARAGORN lowers LEGOLAS’ bow.
ARAGORN
I am Aragorn, son of Arathorn. This is Gimli, son of Glóin and Legolas of the Woodland Realm. We are friends of Rohan and of Théoden, your king.
ÉOMER
Théoden no longer recognizes friend from foe.
ANGLE ON: ÉOMER removes his helmet.
ÉOMER
Not even his own kin.
The ROHIRRIM withdraw their spears.
ÉOMER
Saruman has poisoned the mind of the king and claimed lordship over these lands. My company are those loyal to Rohan. And for that, we are banished.
quietly to the THREE; accusing
The White Wizard is cunning. He walks here and there, they say, as an old man hooded and cloaked. And everywhere, his spies slip past our nets.
ARAGORN
We are no spies. We track a party of Uruk-Hai westward across the plain. They have taken two of our friends captive.
ÉOMER
The Uruks are destroyed. We slaughtered them during the night.
ANGLE ON: GIMLI springs forward.
GIMLI
desperately
But there were two Hobbits. Did you see two Hobbits with them?
ARAGORN
They would be small. Only children to your eyes.
ÉOMER
shaking his head
We left none alive. We piled the carcasses and burned them.
ANGLE ON: Smoke rises from a pile in the distance.
ANGLES ON: ARAGORN looks away, dumbfounded. GIMLI stands in shock.
GIMLI
Dead?
ÉOMER
nodding
I am sorry.
LEGOLAS puts a hand on Gimli’s shoulder in grief.
ANGLE ON: ÉOMER turns and whistles.
ÉOMER
Hasufel! Arod!
Two steeds move to the forefront. ÉOMER lovingly places his hand on them.
ÉOMER
May these horses bear you to better fortune than their former masters. Farewell.
ÉOMER puts on his helmet and returns to his horse.
ÉOMER
Look for your friends. But do not trust to hope. It has forsaken these lands.
To the RIDERS
We ride north!
WIDE ON: The ROHIRRIM quickly ride off and disappear to the North.
ANGLE ON: ARAGORN looks toward the smoldering pile.
EXT. PLAINS OF ROHAN - DAY
WIDE ON: ARAGORN on HASUFEL, and GIMLI riding behind LEGOLAS on AROD, they ride across the Plains toward the edge of the FANGORN FOREST, where the pile of dead Orcs smolders.
EXT. BORDERS OF FANGORN - DAY
ANGLE ON: THE THREE HUNTERS halt their steeds beside the pile and dismount. They look upon the pile with dismay.
GIMLI half-heartedly shifts through the smoldering ORCS with his axe. He reaches down to retrieve one of the HOBBITS’ sheathes.
He turns mournfully to ARAGORN and LEGOLAS.
GIMLI
It’s one of their wee belts.
ANGLE ON: LEGOLAS bows his head and closes his eyes.
LEGOLAS
in ELVISH
Hiro hyn hîdh ab 'wanath.
May they find peace in death.
ANGLE ON: ARAGORN kicks a helmet. He screams a cry of anguished defeat and falls to his knees, hanging his head low. He sits in despair.
GIMLI
We failed them.
ANGLE ON: ARAGORN turns his head. Something on the ground suddenly catches his attention. A glimmer of hope flickers across his visage as he notes some marks on the ground. He moves towards them, and touches the spots with his hands.
ARAGORN
A Hobbit lay here. And the other.
He sits back to ponder the meaning of these marks.
INTERCUT WITH: PIPPIN screams as the HORSE rears over him. He rolls out of the way as it CRASHES DOWN.
ANGLE ON: ARAGORN’S eyes shift to a new set of markings off to one side.
ARAGORN
They crawled.
INTERCUT WITH: PIPPIN crawls across the raging battlefield.
ANGLE ON: ARAGORN tracks the HOBBITS with LEGOLAS and GIMLI closely following his progress. He points out the marks.
ARAGORN
Their hands were bound.
INTERCUT WITH: PIPPIN reaches a fallen blade. He rubs his bonds furiously against its sharp edge.
ANGLE ON: ARAGORN comes upon a short length of rope buried in the trampled grass.
ARAGORN
Their bonds were cut.
He continues tracking across the grass.
INTERCUT WITH: PIPPIN frantically releases MERRY from his bonds, and pulls him to his feet. They begin to make their way to safety outside the ring of battle.
ANGLE ON: ARAGORN continues to follow their progress from the history they left in the dirt and grass.
INTERCUT WITH: MERRY and PIPPIN narrowly avoid horse, spear, and falling ORC to make their way to safety.
ANGLE ON: ARAGORN points out their tracks in the ground.
ARAGORN
They ran over here.
As he follows the prints, he notes another set alongside them.
ARAGORN
They were followed.
INTERCUT WITH: As they flee, GRISHNÁKH, wounded on the ground, grabs PIPPIN by his belt and clings on.
MERRY
The belt!
PIPPIN unbuckles his belt, leaving it with GRISHNÁKH.
GRISHNÁKH throws it onto the ground and crawls after them. The HOBBITS continue running at their top speed away across the plain.
MERRY
Run!
ANGLE ON: ARAGORN runs after their tracks, imagining them.
ARAGORN
The tracks lead away from the battle --
INTERCUT WITH: MERRY and PIPPIN run right into FANGORN FOREST and disappear in the trees.
ANGLE ON: ARAGORN, LEGOLAS, and GIMLI are running and stop short of entering FANGORN.
ARAGORN
-- into Fangorn Forest.
WIDE ON: The THREE HUNTERS look into the dense and dark forest of gnarled trees so close together, it’s as if it is guarding against entry.
GIMLI
Fangorn? What madness drove them in there?
ANGLE ON: The THREE HUNTERS continue to look into the forest, uncertain as to whether they should enter or not.
PAN INTO THE FOREST AND CROSSFADE TO:
EXT. FANGORN FOREST - NIGHT
WIDE ON: PIPPIN and MERRY charge into the looming forest checking behind them as they go.
ANGLE ON: They finally collapse on a bed of leaves and look about them.
WIDE ON: MERRY and PIPPIN seem all of a sudden much smaller compared to the majesty of the ancient forest.
PIPPIN
Did we lose him? I think we lost him.
ANGLE ON: PIPPIN and MERRY turns in the direction of an approaching sound. Their expressions drop.
ANGLE ON: GRISHNÁKH stumbles his way through the underbrush, looking for them. He holds his blade before him, ready to strike.
GRISHNÁKH
grumbling
I’m going to rip out your filthy little innards!
ANGLE ON: MERRY and PIPPIN hasten behind a tree.
GRISHNÁKH
Come here!
ANGLE ON: MERRY and PIPPIN run across the forest, desperate for a hiding place.
MERRY
Trees. Climb a tree.
ANGLES ON: MERRY and PIPPIN quickly climb the nearest tree.
ANGLE ON: MERRY climbs to the lowermost branch and looks about the forest.
POV: GRISHNÁKH is nowhere in sight. MERRY sighs with relief.
MERRY
He's gone.
SUDDENLY, MERRY is jerked out of the tree.
ANGLE ON: He falls to the ground in a heap, and GRISHNÁKH looms over him, hungrily. MERRY kicks him in the face, but he is undeterred. MERRY attempts to back away from his attacker, but GRISHNÁKH maintains his superior position.
PIPPIN
from the tree
Merry!
ANGLE ON: PIPPIN looks down, helpless. Suddenly, as if reacting to Pippin’s yell, TWO YELLOW EYES flicker open on the tree.
PIPPIN glances over to them, and then back to MERRY.
Realization dawns on him, and he slowly looks back at the EYES.
The TREE grimaces and then turns its head to looks directly at PIPPIN.
Speechless, PIPPIN loses his grip and begins to fall.
The TREE lifts one of its limbs and catches PIPPIN in its hand before he can get very far.
ANGLE ON: GRISHNÁKH raises his blade to pierce MERRY.
GRISHNÁKH
Let’s put a maggot hole in your belly!
The TREE raises a leg high over GRISHNÁKH.
ANGLE ON: MERRY takes his attention from GRISHNÁKH and focuses on the TREE.
ANGLE ON: GRISHNÁKH notices MERRY’S expression and looks behind him.
HIGH ANGLE ON: The TREE brings its leg down and smashes GRISHNÁKH into the ground.
PIPPIN
Run, Merry!
ANGLE ON: MERRY runs, but is quickly overtaken by the TREE who takes a mighty step and scoops MERRY up into his other hand.
ANGLE ON: The TREE examines the struggling HOBBITS as he continues walking through the forest.
THE TREE
Little Orcs. Burárum --
PIPPIN stops struggling and looks at MERRY, wide-eyed.
PIPPIN
It’s talking, Merry. The tree is talking.
THE TREE
angrily
Tree? I am no tree! I am an Ent.
ANGLE ON: Recognition dawns on MERRY’S face, and he smiles in wonder and delight.
MERRY
A tree-herder. A shepherd of the forest.
PIPPIN
Don’t talk to it, Merry. Don’t encourage it!
TREEBEARD
TREEBEARD, some call me.
PIPPIN
And whose side are you on?
TREEBEARD
Side? I am on nobody’s side because nobody’s on my side, little Orc. Nobody cares for the woods anymore.
MERRY
We’re not Orcs! We’re Hobbits!
TREEBEARD
Hobbits? Never heard of a Hobbit before. Sounds like Orc mischief to me!
He squeezes the HOBBITS in rage. MERRY and PIPPIN squirm in pain.
TREEBEARD
angrily
They come with fire. They come with axes. Gnawing, biting, breaking, hacking, burning! Destroyers and usurpers! Curse them!
MERRY
No! You don’t understand. We’re Hobbits! Halflings! Shire-folk!
They continue struggling in TREEBEARD’S firm grip.
TREEBEARD
Maybe you are and maybe you aren’t. The White Wizard will know.
PIPPIN
worried
The White Wizard?
MERRY
quietly
Saruman.
TREEBEARD drops them at the feet of a WIZARD dressed in gleaming white with long, white hair. MERRY and PIPPIN slowly look up to the WIZARD.
CUT TO:
EXT. EMYN MUIL - DAY
GOLLUM scrambles upward through a narrow pass, with FRODO and SAM following close behind. He leaps up to a higher point as the HOBBITS trail.
GOLLUM
See? See? We have led you out. Hurry, Hobbitses. Hurry!
FRODO and SAM catch up to GOLLUM. He climbs atop a rock.
GOLLUM
Very lucky we find you.
WIDE ON: They stand at the edge of EMYN MUIL overlooking the next part of their journey with MORDOR in the distance. FRODO walks past, but SAM pauses to give GOLLUM an evil look. GOLLUM cringes.
GOLLUM
Nice Hobbit.
He leaps after FRODO, putting a wide berth between him and SAM.
CUT TO:
EXT. THE DEAD MARSHES - TWILIGHT
ANGLE ON: Sam’s foot slips in a puddle of muck, he starts backward to get a view of where they’re going.
SAM
It’s a bog. He’s led us into a swamp.
GOLLUM
A swamp, yes, yes. Come, master. We will take you on safe paths through the mist.
WIDE ON: GOLLUM starts making his way across an invisible path across the wetlands. He looks back to the HOBBITS.
GOLLUM
gesturing
Come, Hobbits, come. We go quickly.
FRODO and SAM follow him.
EXT. AERIAL OF THE DEAD MARSHES - DAY
AERIAL: The DEAD MARSHES stretch for miles and miles as far as the eye can see. FRODO, SAM, and GOLLUM appear AS TINY AS SPECKS slowly crossing it.
GOLLUM (V.O.)
I found it, I did. The way through the marshes. Orcs don't use it. Orcs don't know it. They go around for miles and miles. Come quickly. Soft and quick as shadows we must be.
EXT. THE DEAD MARSHES - DAY
ANGLE ON: FRODO, SAM and GOLLUM rest from the day’s journey.
SAM
I hate this place. It’s too quiet. There’s been no sight or sound of a bird for two days.
GOLLUM
No, no birdses to eat. No crunchable birdses.
SAM locates some LEMBAS BREAD in his pack and hands some to FRODO, before getting some for himself. GOLLUM pounds the ground in frustration.
GOLLUM
We are famished! Yes! Famished we are, precious!
Suddenly, GOLLUM sees something on the ground. His eyes dart around following it, before his hands move like lightning to snatch up --
-- a worm. He looks at it suspiciously, shakes it a little, and then slurps it down with a grimace.
CLOSE ON: SAM grimaces as well and opts out of finishing his bit of LEMBAS BREAD.
ANGLE ON: FRODO breaks a piece off of his bread and tosses it to GOLLUM.
FRODO
Here.
ANGLE ON: GOLLUM snaps around to look at it.
GOLLUM
What does it eats?
He runs over to the piece on the ground and circles it like a hungry animal.
GOLLUM
Is it tasty?
He picks it up and tosses it into his mouth. Almost immediately, he dramatically chokes on it and spits it out.
CLOSE ON: SAM rolls his eyes and sighs.
ANGLE ON: GOLLUM hacks and coughs.
GOLLUM
It tries to chokes us! We can’t eats Hobbit food! We must starve!
GOLLUM bawls and falls onto his back, whining.
SAM
Well, starve, then. And good riddance!
GOLLUM crawls toward SAM.
GOLLUM
Oh, cruel Hobbit. It does not care if we be hungry. Does not care if we should die.
ANGLE ON: GOLLUM turns to FRODO, his eyes growing wide and innocent.
GOLLUM
Not like master.
ANGLE ON: FRODO ignores GOLLUM’S words.
GOLLUM
Master cares. Master knows.
FRODO looks to GOLLUM, beginning to understand.
GOLLUM
Yes. Precious.
CLOSE ON: FRODO raises his hand to cover the RING hidden under his tunic.
CLOSE ON: GOLLUM mimics his action, watching where FRODO holds.
GOLLUM
Once it takes hold of us, it never lets go.
ANGLE ON: FRODO is tranced by the truth of Gollum’s words.
ANGLE ON: GOLLUM reaches out to touch the RING. FRODO comes to, and slaps Gollum’s hand away.
FRODO
Don’t touch me!
GOLLUM shrinks away from FRODO. There is a tense moment before GOLLUM backs away from FRODO and lies down on the ground.
EXT. THE DEAD MARSHES - DAY
GOLLUM leads SAM and FRODO into an area of the marshes where small flames burn on the surface of the mist-covered waters.
ANGLE ON: SAM suddenly stops and glimpses beneath the water’s surface.
ANGLE ON: PALLID FACES of dead MEN and ELVES float in the water.
SAM
There are dead things! Dead faces in the water.
ANGLE ON: FRODO looks to the disturbing sight.
GOLLUM
All dead. All rotten. Elves and Men and Orcses. A great battle long ago.
ANGLE ON: GOLLUM stops and turns to the HOBBITS.
GOLLUM
Dead Marshes. Yes. Yes, that is their name.
gesturing and moving on
This way. Don’t follow the lights.
ANGLE ON: SAM slips into the water again. GOLLUM turns to them quickly.
GOLLUM
Careful now!
CLOSE ON: The DEAD FACES IN THE WATER.
GOLLUM (O.S.)
Or Hobbits go down to join the dead ones and light little candles of their own.
ANGLE ON: SAM warily follows GOLLUM, but FRODO is drawn toward the water.
ANGLE ON: One of the DEAD dressed in ELVEN ARMOUR. It floats just beneath the surface with a disturbing peacefulness.
ANGLE ON: FRODO draws himself closer and closer to the water.
ANGLE ON: SAM looks around. His face drops when he sees where FRODO is.
SAM
Frodo!
ANGLE ON: FRODO pays SAM no mind, but continues to stare at the DEAD ELF in the water.
CLOSE ON: SUDDENLY, the Dead Elf’s eyes snap open. Its blank, pallid stare looks straight at FRODO.
ANGLE ON: FRODO registers surprise only for a moment before falling face-first into the marsh. SAM bolts toward him.
INT. THE DEAD MARSHES - DAY
ANGLE ON: FRODO floats beneath the surface. He looks about in fear, a decayed face silently screams and moves toward him, reaching out its rotten hand.
Panicked, FRODO tries to escape. Two more DEAD grasp him from behind. The DEAD quickly surrounded him, grasping with decayed limbs.
Another hand reaches around FRODO, and he collapses into the dead behind him.
EXT. THE DEAD MARSHES - DAY
GOLLUM pulls FRODO out of the BOG. FRODO gasps and sputters for air. GOLLUM drags the struggling FRODO completely out of the water, and lays him on the ground.
ANGLE ON: FRODO finally comes to and looks over to his savior, in perplexed gratitude and disbelief.
FRODO
Gollum?
GOLLUM
emphatically
Don’t follow the lights.
He crawls away. SAM runs to Frodo’s side.
FRODO
Gollum!
SAM
Mr. Frodo! Are you all right?
SAM drags FRODO away from the swamp. FRODO stares after GOLLUM.
CUT TO:
EXT. THE DEAD MARSHES - NIGHT
WIDE ON: MOUNT DOOM chokes ash and fire, giving light to the night.
PAN OVER THE CAMP: The HOBBITS sleep or so it appears.
ANGLE ON: FRODO holds the RING in the palm of his hand, caressing it, gazing upon it.
SUDDENLY, he hears GOLLUM. He grasps the RING, as if to hide it.
GOLLUM (O.S.)
So bright. So beautiful.
FRODO quickly stuffs the RING inside his shirt.
ANGLE ON: FRODO rolls over. GOLLUM crouches away from him, stroking the centre of his palm, just as FRODO was doing only a moment before.
GOLLUM
Our precious.
FRODO
What did you say?
ANGLE ON: GOLLUM calmly turns to FRODO, still lost in his own reverie.
GOLLUM
Master should be resting. Master needs to keep up his strength.
FRODO gets up and stands behind GOLLUM.
FRODO
Who are you?
GOLLUM
quickly
Mustn’t ask us. Not its business.
coughing
Gollum. Gollum.
FRODO crouches behind him.
FRODO
Gandalf told me you were one of the river-folk.
GOLLUM
absently; ignoring Frodo
Cold be heart and hand and bone Cold be travelers far from home
FRODO
He said your life was a sad story.
GOLLUM
They do not see what lies ahead, when sun has failed and moon is dead.
FRODO
You were not so very different from a Hobbit once. Were you?
He looks closely at GOLLUM, who tries to ignore him.
FRODO
Sméagol.
CLOSE ON: GOLLUM reacts. He looks up slowly. His face changes to that of surprise and wonder.
GOLLUM
What did you call me?
FRODO
That was your name once, wasn’t it? A long time ago.
GOLLUM
with difficulty
My name -- my name --
smiling
Sméagol.
ON THE SOUNDTRACK: A piercing cry breaks the silence of the night.
ANGLES ON: SAM snaps around, waking up instantly. FRODO looks around quickly. GOLLUM gasps and lays close to the ground, trying to hide.
SAM
Black Riders!
GOLLUM
Hide! Hide!
ANGLE ON: GOLLUM runs off. FRODO grasps the RING and groans in agony.
FLASH INSERT: The faces of the RINGWRAITHS bear down on FRODO.
The WITCH KING reaches for the RING.
ANGLE ON: FRODO collapses onto the ground, wincing.
FLASH INSERT: Surrounded by the RINGWRAITHS, the WITCH KING reels back and stabs FRODO with his blade.
ANGLE ON: FRODO lurches reliving the act, clutching his shoulder. SAM runs over to him, he passes GOLLUM, hiding under a small tree.
SAM
Come on, Frodo! Come on!
SAM drags FRODO across the ground toward GOLLUM.
GOLLUM
Quick! They will see us! They will see us!
SAM finally gets FRODO over with GOLLUM under the tree.
SAM
I thought they were dead!
GOLLUM
shaking his head
Dead? No, you cannot kill them. No.
ANGLE ON: GOLLUM and SAM look out to see if they can spot the RINGWRAITH.
EXT. SKIES ABOVE THE DEAD MARSHES - DAY
CLOSE ON: ARMOURED HANDS grip the reins of a flying FELLBEAST.
ANGLE ON: The RINGWRAITH looks out from behind the darkness of his hood.
AERIAL ON: SCREAMS of the DARK RIDER fill the air as the winged beast flies over the Marshes.
EXT. THE DEAD MARSHES - DAY
GOLLUM whelps and cowers as the RINGWRAITH swoops over their hiding place.
ANGLE ON: SAM ducks, covering FRODO.
GOLLUM
Wraiths! Wraiths on wings!
CLOSE ON: FRODO’S eyes roll back into his head as the shrieks of the NAZGÛL penetrate him. He clutches the RING at his chest.
ANGLE ON: GOLLUM looks over to him, concerned.
GOLLUM
They are calling for it. They are calling for the precious.
CLOSE ON: FRODO hyperventilates and continues clutching the RING as it tries to take him and respond to the calls of the WRAITHS. SAM grabs Frodo’s hand and shakes him.
SAM
Mr. Frodo! It’s alright. I’m here.
AERIAL ON: The RINGWRAITH passes over them once more before turning towards MORDOR.
ANGLE ON: GOLLUM watches it go, and then turns to the HOBBITS, as they sit up.
GOLLUM
Hurry, Hobbits. The Black Gate is very close.
CUT TO:
EXT. FANGORN FOREST - DAY
CLOSE ON: A DARK STAIN dominates a leaf of one of the many plants on the floor of FANGORN FOREST. Someone approaches. A HAND touches the stain and brings it up to his mouth. It is GIMLI. He spits out the offending substance.
GIMLI
Orc blood.
ANGLE ON: ARAGORN scours the forest floor, following the tracks of the HOBBITS. LEGOLAS follows closely, and GIMLI joins them.
ARAGORN suddenly halts, regarding his latest findings.
ARAGORN
These are strange tracks.
GIMLI
fearful
The air is so close in here.
ANGLE ON: LEGOLAS looks about the forest, as if feeling it.
LEGOLAS
This forest is old. Very old. Full of memory and anger.
ON THE SOUNDTRACK: Low groans reverberate throughout the forest.
ANGLE ON: GIMLI gasps and raises his axe.
LEGOLAS
The trees are speaking to each other.
ANGLE ON: ARAGORN turns to GIMLI, who is fearfully waving his axe about, looking for foes.
ARAGORN
whispering
Gimli!
ANGLE ON: GIMLI starts at the sound of his name.
ARAGORN
gesturing
Lower your axe.
GIMLI recollects himself and lowers his axe, as if surrendering.
LEGOLAS
reverently
They have feelings, my friend. The Elves began it. Waking up the trees, teaching them to speak.
GIMLI
in disbelief
Talking trees. What do trees have to talk about? Except the consistency of squirrel droppings.
They continue walking through the forest.
ANGLE ON: SUDDENLY, LEGOLAS senses something and runs off for a better look.
LEGOLAS
in ELVISH; subtitled
Aragorn, nad nâ ennas!
Something is out there.
CLOSE ON: LEGOLAS intently searches the FOREST. ARAGORN comes up behind him.
ARAGORN
in ELVISH; subtitled
Man cenich?
What do you see?
LEGOLAS
whispered
The White Wizard approaches.
CLOSE ON: The THREE HUNTERS weigh the gravity of this pronouncement.
ARAGORN
whispered
Do not let him speak. He will put a spell on us.
CLOSE ON: ARAGORN readies his sword. GIMLI grips his axes. LEGOLAS nocks an arrow.
ARAGORN
whispered
We must be quick.
QUICK SERIES OF CUTS: WITH A YELL, the three swing round to attack, a bright light envelops them from the WIZARD. GIMLI throws his axe, it is shattered. LEGOLAS launches an arrow, it is deflected. ARAGORN’S sword becomes red hot in his grasp, it clatters to the forest floor.
ANGLE ON: The THREE HUNTERS shield their eyes from the blinding light emanating from the WHITE WIZARD.
WHITE WIZARD
You are tracking the footsteps of two young Hobbits.
ARAGORN
Where are they?
WHITE WIZARD
They passed this way the day before yesterday. They met someone they did not expect. Does that comfort you?
ARAGORN
Who are you? Show yourself!
ANGLE ON: The WHITE WIZARD recalls his light, slowly, his face is revealed, standing before them, DRESSED ALL IN WHITE, is GANDALF!
ANGLE ON: ARAGORN looks upon him, astounded.
ARAGORN
It cannot be.
LEGOLAS
kneeling
Forgive me. I mistook you for Saruman.
GIMLI joins LEGOLAS in bowing before the light of GANDALF.
GANDALF
I am Saruman. Or rather, Saruman as he should have been.
ARAGORN
You fell.
GANDALF
Through fire and water.
EXT. DURIN’S TOWER - SILVERTINE - FLASHBACK
WIDE ON: In a raging snowstorm, high atop SILVERTINE in the living rock of ZIRAKZIGIL, GANDALF faces off with the BALROG in DURIN’S TOWER.
GANDALF (V.O.)
From the lowest dungeon to the highest peak, I fought with the Balrog of Morgoth.
ANGLE ON: GANDALF holds up GLAMDRING, lightning energizes it.
THE BALROG charges GANDALF again. GANDALF plunges GLAMDRING into the BALROG.
WIDE ON: With a final cry, the BALROG falls, smoking, from the peak and lands on the icy mountainside.
GANDALF (V.O.)
Until at last, I threw down my enemy and smote his ruin upon the mountainside.
ANGLE ON: High above the BALROG, GANDALF lies upon the snowy peak, dying.
GANDALF (V.O.)
Darkness took me, and I strayed out of thought and time.
TRACK IN TO GANDALF’S EYE. A BRIGHT LIGHT erupts.
INSERT IMAGE: DEATH. BIRTH. COSMIC WEIRDNESS.
GANDALF (V.O.)
Stars wheeled overhead and every day was as long as a life age of the Earth.
WHITE LIGHT ENVELOPES THE IMAGE.
TRACK OUT FROM GANDALF’S EYE.
GANDALF (V.O.)
But it was not the end. I felt life in me again.
ANGLE ON: GANDALF lies upon the ground - naked, calm, and still.
His hair has turned white, and his wounds are healed. He suddenly utters with a deep gasp and pants as life returns to him.
GANDALF (V.O.)
I've been sent back --
EXT. FANGORN FOREST - DAY
GANDALF
-- until my task is done.
ARAGORN
Gandalf.
GANDALF
momentarily confused
Gandalf? Yes.
smiling
That's what they used to call me.
ARAGORN nods. GANDALF looks at ARAGORN, smiling.
GANDALF
Gandalf the Grey. That was my name.
GIMLI
Gandalf.
GANDALF
with a smile
I am Gandalf the White.
LEGOLAS grins.
GANDALF
And I come back to you now at the turn of the tide.
EXT. FANGORN FOREST - DAY
WIDE ON: GANDALF leads ARAGORN, LEGOLAS, and GIMLI through the forest. He wears his ELVEN CLOAK over his white robes.
GANDALF
One stage of the journey is over, another begins. We must travel to Edoras with all speed.
GIMLI
Edoras? That is no short distance!
ARAGORN
We hear of trouble in Rohan. It goes ill with the king.
GANDALF stops.
GANDALF
Yes, and it will not be easily cured.
GIMLI
Then we have run all this way for nothing? Are we to leave those poor Hobbits here in this horrid, dark, dank tree-infested--?
WIDE ON: The FOREST responds to Gimli’s complaints with a low rumble.
ANGLE ON: GIMLI stops and looks around, fearfully.
GIMLI
I mean, charming, quite charming forest.
He smiles. The rumbling ceases.
ANGLE ON: GANDALF turns to GIMLI.
GANDALF
It was more than mere chance that brought Merry and Pippin to Fangorn. A great power has been sleeping here for many long years. The coming of Merry and Pippin will be like the falling of small stones that starts an avalanche in the mountains.
ARAGORN
In one thing you have not changed, dear friend.
GANDALF leans close to ARAGORN.
ARAGORN
low
You still speak in riddles.
They laugh.
GANDALF
A thing is about to happen that has not happened since the Elder Days. The Ents are going to wake up and find that they are strong.
GIMLI
Strong?!
smiling nervously
Oh, that’s good.
GANDALF
turning to leave
So stop your fretting, Master Dwarf.
GANDALF starts walking out of the FOREST again.
GANDALF
Merry and Pippin are quite safe. In fact, they are far safer than you are about to be.
GIMLI
to himself
This new Gandalf’s more grumpy than the old one.
GIMLI trudges after the rest of the party.
EXT. BORDER OF FANGORN FOREST - DAY
ANGLE ON: GANDALF whistles piercingly. It echoes off into the distance. He whistles again. As the echo dies out, a neigh answers him.
ANGLE ON: A magnificent WHITE HORSE gallops towards GANDALF over a nearby hill. GANDALF smiles.
ANGLE ON: LEGOLAS, standing with ARAGORN, GIMLI and their steeds, looks upon the approaching steed in awe.
LEGOLAS
That is one of the Mearas, unless my eyes are cheated by some spell.
ANGLE ON: The horse gallops across the plain and comes to a stop in front of GANDALF.
GANDALF
Shadowfax. He is the lord of all horses and has been my friend through many dangers.
GANDALF walks up to SHADOWFAX and strokes his neck.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
The THREE HUNTERS make haste in riding across the vast plains to their destination at EDORAS.
EXT. FANGORN FOREST - DAY
ANGLE ON: TREEBEARD continues his slow trek through the forest.
MERRY and PIPPIN remain perched in his branches - helplessly lead along to whatever fate has in store for them.
TREEBEARD
passionately
O Rowan mine I saw you shine Upon a summer’s day Upon your head How golden-red The crown you bore aloft
MERRY yawns.
TREEBEARD
Such a beautiful verse.
MERRY
Is it much further?
TREEBEARD
Bru-ra-hroom. Don’t be hasty. You might call it far, perhaps. My home lies deep in the forest near the roots of the mountain. I told Gandalf I would keep you safe. And safe is where I’ll keep you. I believe you will enjoy this next one too. It’s one of my own compositions. Right.
TREEBEARD clears his throat.
ANGLE ON: PIPPIN settles in to TREEBEARD and closes his eyes.
AERIAL: Over the mist-covered trees as the sun sets, TREEBEARD plods along to his destination.
TREEBEARD (V.O.)
Beneath the roof of sleeping leaves And the dreams of trees unfold When woodland halls are green and cool And the wind is in the West Come back to me Come back to me And say my land is best
ANGLE ON: TREEBEARD looks over to the HOBBITS to find them asleep.
CUT TO:
EXT. FANGORN FOREST - NIGHT
ANGLE ON: TREEBEARD carefully lays the sleeping HOBBITS on the ground.
TREEBEARD
Sleep, little Shirelings. Heed no nightly noise. Sleep till morning light.
ANGLE ON: TREEBEARD stands back up and walks away, through the forest.
TREEBEARD
I have business in the forest. There are many to call. Many that must come. The Shadow lies on Fangorn. The withering of all woods is drawing near.
WIDE ON: TREEBEARD slowly walks away from the HOBBITS.
EXT. PLAINS OF ROHAN - NIGHT
GANDALF stands on the edge of a small hill overlooking the Plains. ARAGORN leaves the fire and joins him.
GANDALF
The veiling shadow that glowers in the east takes shape. Sauron will suffer no rival. From the summit of Barad-dûr, his Eye watches ceaselessly. But he is not so mighty yet that he is above fear. Doubt ever gnaws at him. The rumor has reached him. The heir of Númenor still lives.
ANGLE ON: ARAGORN looks over to GANDALF to find him already looking into his eyes.
GANDALF
Sauron fears you, Aragorn. He fears what you may become.
ARAGORN looks away, considering these words. GANDALF looks back to the east.
GANDALF
And so he’ll strike hard and fast at the world of Men. He will use his puppet Saruman to destroy Rohan. War is coming. Rohan must defend itself, and therein lies our first challenge for Rohan is weak and ready to fall. The king’s mind is enslaved, it’s an old device of Saruman’s. His hold over King Théoden is now very strong. Sauron and Saruman are tightening the noose. But for all their cunning, we have one advantage.
ARAGORN and GANDALF lock eyes again.
GANDALF
The Ring remains hidden.
ARAGORN nods.
GANDALF
And that we should seek to destroy it has not yet entered their darkest dreams.
GANDALF
And so the weapon of the enemy is moving towards Mordor in the hands of a Hobbit. Each day brings it closer to the fires of Mount Doom. We must trust now in Frodo. Everything depends upon speed and the secrecy of his quest.
GANDALF looks over to ARAGORN and sees the worry upon his face.
GANDALF
Do not regret your decision to leave him. Frodo must finish this task alone.
ARAGORN
He’s not alone. Sam went with him.
GANDALF looks over to ARAGORN, surprise alighting on his face.
GANDALF
smiling
Did he? Did he, indeed? Good.
He looks back to the landscape.
GANDALF
Yes, very good.
CUT TO:
EXT. EPHEL DÚATH - DAY
ANGLE ON: SAM and FRODO climb a sheer rock face. They scramble to the top where GOLLUM awaits.
GOLLUM
The Black Gate of Mordor.
WIDE ON: The enormous BLACK GATE OF MORDOR guards the way to MORDOR with Orcs patrolling and standing guard in the TEETH OF MORDOR and atop the walls.
ANGLE ON: SAM almost religiously looks upon the BLACK GATE and its BATTLEMENTS.
SAM
Oh, save us.
ANGLE ON: GOLLUM hides his face in his hands. SAM scrambles along EPHEL DÚATH and hides behind a rock. FRODO comes up quickly behind him.
SAM
My old Gaffer would have a thing or two to say if he could see us now.
ANGLE ON: GOLLUM scramble up behind them.
GOLLUM
Master says to show him the way into Mordor. So good Sméagol does, master says so.
CLOSE ON: FRODO looks upon the GATE, wide-eyed, only now comprehending the gravity of the request.
FRODO
I did.
INTERCUT WITH: ORCS stand guard and patrol atop the MASSIVE BLACK GATE BATTLEMENTS.
ANGLE ON: The HOBBITS and GOLLUM looking in wonder at the Gate.
SAM’S expression drops as he turns to FRODO.
SAM
That’s it then. We can’t get past that.
HIGH ANGLE ON: An army of EASTERLING SOLDIERS marches to the Black Gate on a path far below EPHEL DÚATH. A COMMANDER screams orders to the TROOPS.
ANGLE ON: The THREE shrink away from the edge of the overlook.
ANGLE ON: The ARMY marches steadily towards the BLACK GATE. A HORN SOUNDS their arrival.
ANGLE ON: GOLLUM whimpers and cringes from the sound. FRODO looks to him for a moment, and then returns his gaze to the ARMY.
EXT. BLACK GATE BATTLEMENTS - DAY
ANGLES ON: An ORC SOUNDS the HORN again, two enormous CAVE TROLLS work the MECHANISM to open the mighty gate, the ORCS atop the BATTLEMENTS brace themselves as the GATE slowly opens, the MIGHTY CAVE TROLLS open the heavy gate, walking along a thin walkway patrolled by the smaller ORCS.
EXT. EPHEL DÚATH - DAY
ANGLE ON: SAM points to the BLACK GATE.
SAM
Look! The gate. It's opening!
HIGH WIDE ON: The BLACK GATE slowly opens to receive the approaching ARMY.
ANGLE ON: SAM crawls to a rock at the edge of the overlook.
SAM
I can see a way down.
SUDDENLY, THE ROCK GIVES WAY UNDER SAM AND RACES DOWN THE SIDE OF EPHEL DÚATH WITH SAM RIDING ATOP IT!
FRODO
Sam, no!
ANGLE ON: FRODO scrambles after SAM. GOLLUM breaks from his cowering to look up as FRODO runs off.
GOLLUM
Master!
FRODO runs and slides down the side of EPHEL DÚATH.
EXT. BASE OF EPHEL DÚATH - DAY
FRODO slides to a stop behind a rock near the bottom.
ANGLE ON: One of the EASTERLING SOLDIERS looks up at the mountainside.
WIDE ON: A cloud of dust issues from the side of the mountain.
ANGLE ON: FRODO darts form behind one rock, slides down EPHEL DÚATH some more and comes to rest behind another rock.
ANGLE ON: TWO EASTERLING SOLDIERS approach the mountainside to investigate.
ANGLE ON: FRODO darts from behind the rock and reaches SAM, who is buried to his waist in rocks. FRODO struggles to free SAM to no avail.
POV: The EASTERLING SOLDIERS come ever closer --
ANGLE ON: FRODO struggles desperately to get SAM loose.
POV: The EASTERLING SOLDIERS are nearly upon them --
ANGLE ON: FRODO quickly swings his ELVISH CLOAK over himself and SAM.
LOW ANGLE ON: The EASTERLING SOLDIERS reach the base of EPHEL DÚATH. They survey the mountainside.
ANGLE ON: FRODO and SAM huddle beneath FRODO’S CLOAK, not daring to breathe.
POV THROUGH CLOAK: One of the EASTERLINGS stands almost directly over FRODO and SAM
They lie directly in the path of the SOLDIERS, holding their breath. The SOLDIERS stop in front of them and look at the mountainside.
ANGLE ON: The EASTERLING SOLDIERS look at each other for a moment, shrug, and rejoin their party.
CLOSE ON: A ROCK in the gravel directly in front of the EASTERLINGS’ position, the surface of the ROCK suddenly peels back to reveal FRODO and SAM beneath it.
ANGLE ON: FRODO and SAM desperately dig SAM out. With SAM free, they scramble behind a nearby boulder.
ANGLE ON: The ARMY marches through the BLACK GATE. ORDERS are shouted to the TROOPS and ORCS.
ANGLE ON: FRODO readies himself to run for the GATE.
FRODO
I do not ask you to come with me, Sam.
SAM
I know, Mr. Frodo. I doubt even these Elvish cloaks will hide us in there.
ANGLE ON: They give each other a final glance and nod.
FRODO
Now!
SUDDENLY, as they start to run, HANDS grab them from behind and drag them to the ground.
GOLLUM
No! No! No master!
FRODO and SAM look angrily at GOLLUM. FRODO turns desperately to the GATE.
GOLLUM
They catch you! They catch you!
FRODO tries to run for it again, but GOLLUM detains him.
GOLLUM
Don’t take it to him.
CLOSE ON: FRODO looks curiously at GOLLUM.
CLOSE ON: GOLLUM looks desperately back to them.
GOLLUM
ominously
He wants the precious. Always he is looking for it. And the precious is wanting to go back to him.
evilly
But we mustn’t let him have it.
ANGLE ON: The EASTERLING ARMY progresses through THE BLACK GATE. A HORN SOUNDS. The GATE begins to close behind them.
ANGLE ON: FRODO tries to run for the GATE once more. GOLLUM holds him back.
GOLLUM
No! There’s another way. There’s another way. More secret. A dark way.
ANGLE ON: SAM grabs GOLLUM angrily, spinning him around.
SAM
Why haven’t you spoken of this before?!
GOLLUM
Because Master did not ask.
ANGLE ON: FRODO turns to him quickly. SAM tosses GOLLUM aside.
SAM
He’s up to something.
FRODO
Are you saying there’s another way into Mordor?
GOLLUM
nodding
Yes. There’s a path and some stairs -- and then -- a tunnel.
ANGLE ON: FRODO and SAM watch the BLACK GATE close. GOLLUM buries his face in FRODO’S CLOAK as FRODO turns away from his former goal. FRODO looks at GOLLUM.
FRODO
He’s led us this far, Sam.
SAM
desperately
Mr. Frodo, no.
FRODO
He’s been true to his word.
GOLLUM looks up at FRODO, hopeful. SAM shakes his head.
SAM
No.
FRODO
Lead the way, Sméagol.
GOLLUM
Good Sméagol always helps.
GOLLUM leaps away.
SAM stares at FRODO in disbelief. FRODO tries not to meet Sam’s gaze. He looks back at the BLACK GATE.
ANGLE ON: THE BLACK GATE CLOSES COMPLETELY.
CUT TO:
EXT. ENT DRAFT - FANGORN FOREST - DAY
MERRY wakes up. He looks around.
POV: Sunlight breaks through a few of the trees giving light.
A small brook bubbles down the center of the draft. PIPPIN sits on a root, drinking the water.
ANGLE ON: MERRY stands up and surveys his surroundings. He walks out in a daze.
MERRY
Hello?
PIPPIN looks up, smiling.
WIDE ON: MERRY looks out into the dark forest beyond the Draft.
MERRY
calling out
Treebeard?
to himself
Where’s he gone?
ANGLE ON: PIPPIN sits up, holding a bowl of the water.
PIPPIN
I had the loveliest dream last night. There was this large barrel, full of pipe-weed. And we smoked all of it. And then you were sick.
ANGLE ON: MERRY scowls quietly. PIPPIN lies back upon the root.
PIPPIN
I’d give anything for a whiff of Old Toby.
A LOW GROAN ISSUES across the forest. The HOBBITS turn in its direction.
MERRY
Did you hear that?
ANGLE ON: PIPPIN gathers his water pitchers. MERRY walks in the direction of the issuing sound. Another GROAN breaks the silence of the forest.
MERRY
There it is again. Something’s not right here. Not right at all.
ANGLE ON: PIPPIN climbs off of the root to the ground and issues his own sound: an LOW GRUNT.
CLOSE ON: MERRY looks over to him, wide-eyed.
MERRY
You just said something. Treeish.
PIPPIN
No, I didn’t. I was just stretching.
ANGLE ON: PIPPIN grunts again, stretching. MERRY walks around PIPPIN, running his eyes up and down PIPPIN.
MERRY
You’re taller.
PIPPIN
turning to MERRY
Who?
MERRY
You!
PIPPIN
Than what?
MERRY
Than me!
PIPPIN scoffs.
PIPPIN
I’ve always been taller than you.
MERRY
indignant
Pippin, everyone knows I’m the tall one. You’re the short one.
PIPPIN
Please, Merry. You’re what? Three-foot-six? At the most?
MERRY shrugs as if to say, “Yeah.”
PIPPIN
Whereas me, I’m pushing 3’7”.
Another groan issues from PIPPIN, and he grows again.
CLOSE ON: MERRY’S eyes grow wide.
PIPPIN
smiling
3’8”!
ANGLE ON: PIPPIN happily takes another huge gulp of the water.
CLOSE ON: MERRY looks on in shock.
MERRY
Three-foot-eight.
ANGLE ON: PIPPIN shrugs, as if to say, “Yeah.”
MERRY
You did something.
PIPPIN shrugs again and smiles.
ANGLE ON: He nonchalantly places the WATER BOWL next to the brook. MERRY looks at the water, and then snatches the water jug and takes a huge drink.
PIPPIN
Merry don’t! Don’t drink it!
MERRY takes off with the jug. PIPPIN chases him. He takes another drink, pushing PIPPIN away.
PIPPIN
Merry! No, Treebeard said that you shouldn’t have any.
PIPPIN tries to grab MERRY again, but MERRY pushes him away and runs off to take another drink.
MERRY
I want some!
PIPPIN
It could well be dangerous!
ANGLE ON: MERRY leads PIPPIN across some large tree roots.
PIPPIN
Give me it back. Merry!
SUDDENLY, MERRY slips between two of the roots, and the tree groans and moves.
CLOSE ON: It closes its roots to traps the ankles of both HOBBITS.
PIPPIN
What’s happening!
MERRY
It’s got my leg!
SERIES OF CUTS: The TREE moves its roots to traps the HOBBITS’ limbs.
PIPPIN
Merry!
ANGLE ON: The tree pulls them into its roots as others close in over them.
Disturbed leaves from above cover the HOBBITS, making them virtually invisible as they scream. The roots finish the job and completely bury the HOBBITS.
PIPPIN
muffled
Help!
WIDE ON: Silence fills the air as the scene looks serene - as if nothing sinister happened at all.
ON THE SOUNDTRACK: Large footfalls ECHO.
TREEBEARD quickly approaches the tree.
TREEBEARD
Away with you. You should not be waking. Eat earth. Dig deep. Drink water.
ANGLES ON: The roots move again, releasing the HOBBITS. With desperate cries, they free themselves from the tree’s grasp.
TREEBEARD
Go to sleep. Away with you.
The HOBBITS shake off the leaves and stand by TREEBEARD, looking back at the tree roots in horror.
TREEBEARD
Come, the forest is waking up. It isn’t safe.
ANGLE ON: TREEBEARD lifts the HOBBITS, one in each hand, and walks out of the grove.
EXT. FANGORN FOREST - DAY
ANGLE ON: TREEBEARD travels through the FOREST again, carrying the HOBBITS on his shoulders.
TREEBEARD
The trees have grown wild and dangerous. Anger festers in their hearts. Black are their thoughts. Strong is their hate. They will harm you if they can. There are too few of us now. Too few of us Ents left to manage them.
PIPPIN
Why are there so few of you when you have lived so long? Are there Ent children?
TREEBEARD
Bru-ra-hroom. There have been no Entings for a terrible long count of years.
MERRY
Why is that?
TREEBEARD
We lost the Entwives.
PIPPIN
Oh, I’m sorry. How did they die?
TREEBEARD
Die? No. We lost them. And now we cannot find them. I don’t suppose you’ve seen Entwives in the Shire?
MERRY
hesitantly
Can’t say that I have. You, Pip?
ANGLE ON: PIPPIN stares off blankly, and then shakes his head.
PIPPIN
What do they look like?
TREEBEARD
sighs deeply
I don’t remember now.
They continue their walk through the forest.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
ANGLE ON: GANDALF, ARAGORN, LEGOLAS, and GIMLI ride across the Plains. They stop on a rise looking across to EDORAS
WIDE ON: The FOUR FIGURES look upon a walled city covering a small mountain. Atop its summit is MEDUSELD.
GANDALF
Edoras and the Golden Hall of Meduseld. There dwells Théoden, King of Rohan --
INT. MEDUSELD THRONE ROOM - DAY
HIGH WIDE ON: THÉODEN, grayed and ancient, sits upon his throne, head bowed for he is hardly able to hold it up. ÉOWYN kneels beside him, holding his hand comfortingly.
GANDALF (V.O.)
whose mind is overthrown. Saruman’s hold over King Théoden is now very strong.
CLOSE ON: ÉOWYN gently strokes the KING’S HAND.
ÉOWYN
My lord, your son, he is dead.
ANGLE ON: ÉOWYN looks at THÉODEN, tearfully, when he fails to respond.
ÉOWYN
My lord? Uncle?
ANGLE ON: THÉODEN stares forward a moment. His eyes are clouded, as if blind. Slowly he moves his eyes to look at her, but he remains expressionless.
ÉOWYN
pleading
Will you not go to him? Will you do nothing?
THÉODEN continues to look at her, blankly.
EXT. PLAINS OF ROHAN - DAY
ANGLE ON: The THREE HUNTERS sit atop their steeds, listening to GANDALF.
GANDALF
Be careful what you say. Do not look for welcome here.
GANDALF starts off. The THREE HUNTERS follow him to EDORAS.
INT. MEDUSELD - THÉODRED’S ROOM - DAY
ANGLE ON: THÉODRED lies dead upon his bed.
ANGLE ON: ÉOWYN kneels beside him, weeping.
ANGLE ON: A shadow moves in the hall behind her. She pays it no mind. WORMTONGUE appears at the door. He looks upon her, concerned.
WORMTONGUE
Oh, he must have died sometime in the night. What a tragedy for the king to lose his only son and heir.
He sits on the bed and puts a hand on ÉOWYN’S shoulder.
WORMTONGUE
I understand. His passing is hard to accept. Especially now that your brother has deserted you.
ÉOWYN jumps up and throws off his hand.
EÓWYN
Leave me alone, snake!
She backs away from him. WORMTONGUE rises and moves over to her.
WORMTONGUE
suddenly sinister
Oh, but you are alone. Who knows what you’ve spoken to the darkness in the bitter watches of the night when all your life seems to shrink. The walls of your bower closing in about you. A hutch to trammel some wild thing in.
He stops in front of her and stares into her eyes. She seems transfixed by him. He puts a hand on the side of her face as he speaks.
WORMTONGUE
So fair, so cold. Like a morning pale spring still clinging to winter's chill.
She closes her eyes as if affected by his words. He moves his hand to her throat.
CLOSE ON: She suddenly opens her eyes and looks through him.
ANGLE ON: WORMTONGUE starts back away.
ÉOWYN
angrily
Your words are poison.
ANGLE ON: ÉOWYN abruptly leaves the room. WORMTONGUE appears taken aback by the sudden change in her.
EXT. MEDUSELD - DAY
ÉOWYN throws open the main doors and charges outside. She walks to the brink of the porch outside the hall and looks far-off into the distance, as if hoping to find someone there. She walks impatiently from one side of the platform to the other. Far below, something catches her eye.
POV: Three horses approach EDORAS.
ANGLE ON: The wind tears a flag off its mast and carries it across the city.
EXT. GATES OF EDORAS - DAY
ANGLE ON: GANDALF, LEGOLAS, and GIMLI ride through the gate. As ARAGORN approaches, the FLAG flutters to the ground. He looks to its source as if it were a bad omen.
EXT. EDORAS - DAY
As the Four Riders ride through EDORAS, the people eye them silently and warily, as if they come as harbingers of doom.
ANGLE ON: ARAGORN looks forward to MEDUSELD.
POV: A LADY IN WHITE stands upon its porch, watching them.
GIMLI
You’d find more cheer in a graveyard.
ANGLE ON: ARAGORN looks back to the hall --
POV: The LADY has disappeared.
EXT. MEDUSELD - DAY
ANGLE ON: The doors of the Golden Hall open and HÁMA exits, followed by a small detachment.
ANGLE ON: The Four climb the steps, and HÁMA meets them at the top. GANDALF leans heavily on his staff, like an old man. He looks up to HÁMA and smiles.
HÁMA
I cannot allow you before Théoden King so armed, Gandalf Greyhame. By order of Gríma Wormtongue.
CLOSE ON: GANDALF nods to the others to surrender their weapons.
ANGLES ON: Almost comically, they turn over every weapon they have: SWORDS. KNIVES. ARROWS and AXES.
CLOSE ON: HÁMA signals to GANDALF.
HÁMA
Your staff.
ANGLE ON: GANDALF glances at his staff and scoffs innocently.
GANDALF
You would not part an old man from his walking stick.
He continues to look at HÁMA innocently.
ANGLE ON: HÁMA nods, rolls his eyes, and then gestures for them to follow him.
ANGLE ON: GANDALF gives a wink to ARAGORN, who smiles in return. GANDALF follows HÁMA into the hall, leaning on Legolas’ arm as an old man might for support.
INT. MEDUSELD THRONE ROOM - DAY
HÁMA enters the hall and bows before the King. He steps aside to allow the Four to enter behind him.
ANGLE ON: WORMTONGUE leans over and whispers to THÉODEN.
WORMTONGUE
My lord, Gandalf the Grey is coming.
ANGLE ON: THE FOUR continue walking toward THÉODEN. GUARDS close the doors behind them.
POV: They notice several Men behind the contingency of GUARDS following them as they walk towards the King.
WORMTONGUE
He’s a herald of woe.
ANGLE ON: LEGOLAS releases GANDALF’S ARM.
GANDALF
The courtesy of your hall is somewhat lessened of late, Théoden King.
WORMTONGUE
whispered to THÉODEN
He’s not welcome.
THÉODEN
labored
Why should I welcome you, Gandalf Stormcrow?
He looks to WORMTONGUE for affirmation, who nods.
WORMTONGUE
A just question, my liege.
WORMTONGUE stands before them. He walks to meet them well in front of THÉODEN.
WORMTONGUE
Late is the hour in which this conjurer chooses to appear. Láthspell spell I name him. Ill news is an ill guest.
GANDALF
Be silent.
ANGLE ON: WORMTONGUE freezes in his tracks.
GANDALF
Keep your forked tongue behind your teeth. I have not passed through fire and death to bandy crooked words with a witless worm.
He raises his staff to WORMTONGUE. WORMTONGUE back away from it.
WORMTONGUE
His staff.
He backs well away from GANDALF while addressing the guards, arrogantly.
WORMTONGUE
I told you to take the wizard’s staff.
ANGLES ON: The MEN behind the lines burst through to ATTACK. ARAGORN, LEGOLAS, and GIMLI engage them in a fist-fight to keep them from GANDALF as he approaches THÉODEN.
ANGLE ON: GAMLING tries to go forward but HÁMA holds him back.
ANGLE ON: GANDALF reaches out to THÉODEN.
GANDALF
Théoden, son of Thengel --
ANGLE ON: THÉODEN reacts to GANDALF with a wicked stare.
GANDALF
-- too long have you sat in the shadows.
ANGLE ON: The THREE HUNTERS finish off the GUARDS. WORMTONGUE tries to crawl away unnoticed, but GIMLI catches him and pins him to the floor under his foot.
GIMLI
growling
I would stay still if I were you.
ANGLE ON: GANDALF continues approaching THÉODEN.
GANDALF
Hearken to me!
WIDE ON: The PEOPLE of the HALL approach behind GANDALF.
GANDALF
I release you from the spell.
ANGLE ON: GANDALF holds out his hand and concentrates.
ANGLE ON: SUDDENLY, THÉODEN laughs, menacingly. GANDALF opens his eyes.
THÉODEN
laughing
You have no power here, Gandalf the Grey.
ANGLE ON: Angered, GANDALF throws back his grey cloak and spreads his hands. A blinding white light issues from him.
ANGLE ON: THÉODEN is thrown back against his seat.
GANDALF
I will draw you, Saruman, as poison is drawn from a wound.
He thrusts his staff towards THÉODEN. The force knocks THÉODEN back in his throne. GANDALF moves in closer.
ANGLE ON: ÉOWEN rushes in. Thinking THÉODEN is in trouble, she tries to run to him, but ARAGORN stops her.
ARAGORN
Wait.
ANGLE ON: A new aura comes over THÉODEN. He looks at GANDALF evilly and speaks in Saruman’s voice.
THÉODEN/SARUMAN
If I go, Théoden dies.
GANDALF thrusts his staff again and throwing THÉODEN/SARUMAN back again.
GANDALF
You did not kill me, you will not kill him.
CLOSE ON: THÉODEN/SARUMAN leans forward with difficulty, hate welling in his eyes.
THÉODEN/SARUMAN
with difficulty
Rohan is mine.
THÉODEN/SARUMAN struggles against Gandalf’s power.
GANDALF
Be gone.
ANGLE ON: THÉODEN/SARUMAN lunges for GANDALF. GANDALF smites him, and he is thrown back into the chair.
INSERT IMAGE: SARUMAN flies backwards across the floor away from the PALANTÍR in ORTHANC. He slowly rises, bleeding from the wound GANDALF left in his forehead.
ANGLE ON: GANDALF lets out a sigh of relief.
ANGLE ON: THÉODEN moans and falls from his throne. ARAGORN releases ÉOWYN. She charges across the hall to catch him before he can hit the floor.
ANGLE ON: GAMLING makes to charge GANDALF, but HÁMA holds him steady.
CLOSE ON: ÉOWYN holds THÉODEN up to look at him. His eyes clear, his hair changes from white strands to brown splendor, his face de-ages to a more youthful King.
ANGLE ON: ÉOWYN smiles, overjoyed. THÉODEN looks about, confused, and finds ÉOWYN.
THÉODEN
I know your face.
smiling
Éowyn. Éowyn.
ÉOWYN weeps with joy. THÉODEN looks up and is surprised to see GANDALF standing over him.
THÉODEN
Gandalf?
GANDALF
Breathe the free air again, my friend.
THÉODEN rises to his feet and looks over his Hall.
THÉODEN
Dark have been my dreams of late.
He looks down at his trembling hands.
GANDALF
Your fingers would remember their old strength better if they grasped your sword.
ANGLE ON: HÁMA runs to the King with his sword, HERUGRIM.
THÉODEN slowly reaches for it.
CLOSE ON: THÉODEN wraps his fingers around the hilt and then slowly draws HERUGRIM from its scabbard.
ANGLE ON: WORMTONGUE trembles and tries to escape. GIMLI restrains him.
ANGLE ON: THÉODEN gazes upon the steel, feeling his strength return.
CLOSE ON: THÉODEN’S eyes DARKEN, he turns his gaze to WORMTONGUE. WORMTONGUE shudders.
EXT. MEDUSELD - DAY
HÁMA and GAMLING throw WORMTONGUE down the stairs. He lands hard on the lower stoop and groans in pain.
ANGLE ON: THÉODEN walks down the steps, holding HERUGRIM.
ANGLE ON: WORMTONGUE crawls away as he speaks.
WORMTONGUE
beseechingly
I've only ever served you, my lord.
THÉODEN continues his advance toward WORMTONGUE.
THÉODEN
Your leechcraft would have had me crawling on all fours like a beast!
WORMTONGUE
Send me not from your sight.
THÉODEN raises HERUGRIM to kill WORMTONGUE. ARAGORN stops him.
ARAGORN
No, my lord! No, my lord. Let him go. Enough blood has been spilt on his account.
THÉODEN looks at ARAGORN and relents. ARAGORN offers his hand to WORMTONGUE, but WORMTONGUE spits in it and scrambles to his feet. ARAGORN shakes off the spittle
ANGLE ON: WORMTONGUE violently pushes his way through the CROWD OF BYSTANDERS.
WORMTONGUE
Get out of my way!
Those on the STEPS solemnly watch WORMTONGUE depart.
HÁMA
calling out
Hail, Théoden king!
WIDE ON: The crowd kneels before THÉODEN.
INTERCUT WITH: WORMTONGUE charges out of the EDORAS GATE upon a horse.
EXT. MEDUSELD - DAY
ANGLE ON: THÉODEN observes the crowd on its knees. He looks at ARAGORN. ARAGORN kneels before THÉODEN. THÉODEN turns to go back into the hall. He stops and surveys those standing on the steps.
THÉODEN
Where is Théodred? Where is my son?
EXT. EDORAS - DAY
ANGLE ON: Two lines of SOLDIERS form a pathway within a throng of PEOPLE. Their heads are bowed low as PALL-BEARERS carry the body of THÉODRED between them. Upon THÉODRED’S chest is a small bundle of white flowers.
ANGLE ON: THÉODEN follows his son. ARAGORN, LEGOLAS, GIMLI, and GANDALF follow behind him.
WIDE ON: The PEOPLE OF EDORAS stands closely leaving only a small pathway through the center of the city for the PALL-BEARERS to carry THÉODRED. Cries and moans pierce the air.
EXT. THÉODRED’S TOMB - DAY
ANGLE ON: ÉOWYN stands near the tomb’s open door.
ANGLE ON: The PALL-BEARERS lower THÉODRED and pass his wicket between a path of people to the women waiting within the tomb to receive him.
ÉOWYN
singing; in OLD ENGLISH
Bealocwealm hafað fréone frecan forth onsended giedd sculon singan gléomenn sorgiende on Meduselde þæt he ma no wære his dryhtne dyrest and mæga deorost. Bealo --
An evil death has set forth the noble warrior A song shall sing sorrowing minstrels in Meduseld that he is no more, to his lord dearest and kinsmen most beloved. An evil death --
CUT TO:
EXT. THÉODRED’S TOMB - DAY
CLOSE ON: The closed door of the TOMB. A SMALL WHITE FLOWER COMES INTO VIEW.
THÉODEN
Simbelmynë.
ANGLE ON: THÉODEN looks upon the flower mournfully. He releases it, and it swirls down to rest with the flowers still within the earth.
THÉODEN
Ever has it grown on the tombs of my forebearers.
He turns to GANDALF.
THÉODEN
Now it shall cover the grave of my son. Alas that these evil days should be mine. The young perish and the old linger. That I should live to see the last days of my house.
GANDALF
Théodred’s death was not of your making.
THÉODEN
No parent should have to bury their child.
ANGLE ON: THÉODEN breaks down, falls to his knees, and weeps.
GANDALF
His was strong in life. His spirit will find its way to the halls of your fathers.
ANGLE ON: THÉODEN continues weeping, not listening to GANDALF’S comfort.
GANDALF
in OLD ENGLISH
Westu hál. Ferðu, Théodred, Ferðu.
Be-thou well. Go-thou, Théodred, go-thou.
WIDE ON: GANDALF turns to return to EDORAS, leaving THÉODEN to mourn privately.
ANGLE ON: Something catches GANDALF’S eyes. He stops.
POV: A horse trots over the ridge, ridden by two children. It is ÉOTHAIN and FREDA upon GARULF. ÉOTHAIN falls to the ground.
CUT TO:
INT. MEDUSELD THRONE ROOM - DAY
ANGLES ON: ÉOTHAIN and FREDA sit at a table in the GREAT HALL ravenous eating. ÉOWYN stands and looks to THÉODEN. THÉODEN sits on his throne with GANDALF at his side, his head buried in his hand in deep thought.
ÉOWYN
The had no warning. They were unarmed. Now the Wild Men are moving through the Westfold, burning as they go.
ANGLE ON: ARAGORN, LEGOLAS, and GIMLI look at each other, concerned.
ÉOWYN
Rick, cot and tree.
FREDA
Where’s mama?
ANGLES ON: ÉOWYN turns to comfort FREDA. GANDALF turns to THÉODEN.
GANDALF
This is but a taste of the terror that Saruman will unleash. All the more potent for he is driven now by fear of Sauron. Ride out and meet him head on.
ANGLE ON: GANDALF leans forward and puts a hand on THÉODEN’S chair. THÉODEN looks at him warily.
GANDALF
Draw him away from your women and children. You must fight.
ARAGORN
You have 2000 good men riding north as we speak. Éomer is loyal to you. His men will return and fight for their king.
ANGLE ON: THÉODEN gets out of his chair walks to the center of his HALL.
THÉODEN
They will be 300 leagues from here by now. Éomer cannot help us.
ANGLE ON: GANDALF moves forward to speak, but THÉODEN halts him.
THÉODEN
I know what it is that you want of me, but I will not bring further death to my people. I will not risk open war.
ANGLE ON: ARAGORN removes his pipe and leans forward to speak.
ARAGORN
Open war is upon you, whether you would risk it or not.
ANGLES ON: ÉOWYN spins to look at THÉODEN and ARAGORN. THÉODEN turns to ARAGORN.
THÉODEN
indignant
When last I looked, Théoden, not Aragorn, was king of Rohan.
GANDALF
Then what is the king’s decision?
CLOSE ON: THÉODEN turns away from them, concern etched in his face.
CUT TO:
EXT. EDORAS - DAY
ANGLE ON: HÁMA stands in the midst of the city delivering the KING’S decision.
HÁMA
By order of the king, the city must empty. We make for the refuge of Helm’s Deep. Do not burden yourself with treasures. Take only what provisions you need.
ANGLES ON: The PEOPLE OF EDORAS gather their things together. ARAGORN, LEGOLAS, GIMLI, and GANDALF walk among them.
GIMLI
Helm’s Deep. They flee to the mountains when they should stand and fight.
INT. ROHIRRIM STABLES - DAY
The FOUR enter a ROHIRRIM STABLE and continue walking past the HORSES of ROHAN.
GIMLI
Who will defend them if not their king?
ARAGORN
He’s only doing what he thinks is best for his people. Helm’s Deep has saved them in the past.
ARAGORN and GANDALF approach the stable of SHADOWFAX.
GANDALF
There is no way out of that ravine. Théoden is walking into a trap. He thinks he’s leading them to safety. What they will get is a massacre.
CLOSE ON: GANDALF turns to ARAGORN.
GANDALF
grim
Théoden has a strong will, but I fear for him. I fear for the survival of Rohan. He will need you before the end, Aragorn. The people of Rohan will need you. The defenses have to hold.
CLOSE ON: ARAGORN holds GANDALF’S gaze resolutely.
ARAGORN
They will hold.
ANGLE ON: GANDALF turns from ARAGORN to SHADOWFAX. Gently, he strokes the mighty horse’s coat.
GANDALF
musing
The Grey Pilgrim. That’s what they used to call me. Three hundred lives of Men I’ve walked this earth, and now I have no time.
ANGLES ON: ARAGORN opens the stall door. GANDALF mounts SHADOWFAX.
GANDALF
With luck, my search will not be in vain. Look to my coming at first light on the fifth day. At dawn, look to the east.
ARAGORN
nodding
Go.
ANGLE ON: LEGOLAS and GIMLI jump out of the way as GANDALF blasts out of the stable at top speed.
EXT. PLAINS OF ROHAN - DAY
WIDE ON: GANDALF rides across the open plains as fast as SHADOWFAX can carry him.
CUT TO:
INT. ROHIRRIM STABLES - DAY
ANGLES ON: TWO SOLDIERS attempt to subdue a mighty brown stallion, BREGO, with little success. ÉOWYN turns to them, watching.
ANGLE ON: ARAGORN enters carrying his saddle, he turns to the struggle, he puts down his saddle and walks to them.
SOLDIER
That horse is half mad, my lord. There’s nothing you can do. Leave him.
ANGLE ON: BREGO rears and whinnies as ARAGORN comes closer.
ARAGORN
in OLD ENGLISH
Fæste, stille nú -- fæste --
Fast, be quiet now -- fast --
ARAGORN signals one of the SOLDIERS to go --
ARAGORN
in OLD ENGLISH
-- stille nú. Lac is drefed, gefrægon.
-- be quiet now. A battle is stirred up, they heard.
ARAGORN slowly reaches BREGO, he caresses the beast’s coat, carefully, he removes the ropes detaining BREGO, he hands them to the other SOLDIER. ÉOWYN watches with wonder.
ARAGORN
in OLD ENGLISH
Hwæt nemnað ðe? Hm? Hwæt nemnað ðe?
What is your name? Hm? What is your name?
ÉOWYN
His name is Brego.
ANGLE ON: ARAGORN snaps around to look at ÉOWYN.
ÉOWYN
He was my cousin’s horse.
ARAGORN
Brego.
to BREGO; in OLD ENGLISH
Ðin nama is cynglic.
Your name is kingly.
CLOSE ON: ÉOWYN moves slowly to ARAGORN as he speaks, transfixed.
ARAGORN
in ELVISH
Man le trasta, Brego? Man cenich?
What troubles you, Brego? What did you see?
ÉOWYN
I have heard of the magic of Elves, but I did not look for it in a Ranger from the North. You speak as one of their own.
ARAGORN
I was raised in Rivendell for a time. Turn this fellow free. He’s seen enough of war.
ARAGORN leaves BREGO with ÉOWYN, he retrieves his saddle and leaves.
CUT TO:
EXT. CAVERNS OF ISENGARD - NIGHT
WIDE PAN ON: The industrial mechanics of the ORCS have taken the place of the once beautiful trees marring the landscape around ORTHANC. The ORCS work non-stop to their ends on the black ground.
INT. PALANTÍR CHAMBER - ORTHANC - NIGHT
ANGLE ON: SARUMAN paces the chamber mulling over his loss to GANDALF.
SARUMAN
Gandalf the White. Gandalf the Fool! Does he seek to humble me with his newfound piety?
ANGLE ON: WORMTONGUE enters slowly and moves to SARUMAN... SARUMAN stands suddenly still, a look of disgust crossing his face.
WORMTONGUE
There were three who followed the wizard. An Elf, a Dwarf, and a Man.
SARUMAN sniffs.
SARUMAN
You stink of horse.
WORMTONGUE shrinks back and walks away --
SARUMAN
The Man --
turns to Wormtongue
-- was he from Gondor?
WORMTONGUE
No, from the North. One of the Dúnedain Rangers, I thought he was.
CLOSE ON: SARUMAN suddenly shows much interest.
WORMTONGUE
His cloth was poor. And yet he bore a strange ring. Two serpents with emerald eyes. One devouring, the other crowned with golden flowers.
CUT TO:
INT. ANTE-CHAMBER - ORTHANC - NIGHT
CLOSE ON: A BOOK opens to a page showing a picture of the very ring WORMTONGUE described.
ANGLE ON: SARUMAN sits back in his chair. WORMTONGUE stands behind him at the door.
SARUMAN
The Ring of Barahir. So Gandalf Greyhame thinks he has found Isildur’s heir. The lost king of Gondor. He is a fool. The line was broken years ago.
CLOSE ON: SARUMAN closes his book and pushes it aside.
SARUMAN
It matters not. The world of Men shall fall. It will begin at Edoras.
CUT TO:
EXT. EDORAS MAIN GATE - DAY
WIDE ON: The ROHIRRIM begin to pour out of their city by the hundreds, carrying what they can. A solid line of people stretches across the Plains of Rohan.
INT. THÉODEN’S ROOM - MEDUSELD - DAY
ANGLE ON: THÉODEN prepares himself. GAMLING stands ready behind him.
THÉODEN
I am ready, Gamling. Bring my horse.
GAMLING bows and walks to the door, silently, shoulders slumped.
THÉODEN
This is not a defeat.
GAMLING turns to him.
THÉODEN
We will return.
GAMLING bows to him and exits.
THÉODEN
to himself
We will return.
INT. MEDUSELD THRONE ROOM - DAY
ROHIRRIM gather things from the Great Hall and carry it out.
ANGLE ON: ÉOWYN opens a chest and pulls out a sheathed sword, she unsheathes it and holds it before her, running her hand down the flat side of the blade, smiling, deliberately, she practices her swing.
POV: Someone approaches from behind, she swings it behind her!
ANGLE ON: ARAGORN meets her swing with his DAGGER. ÉOWYN’S face does not soften at his gaze.
ARAGORN
You have some skill with a blade.
With a swift move, ÉOWYN swings her sword, throwing ARAGORN’S arm and knife to one side, rendering him vulnerable and gaining the upper hand.
He lowers his weapon, she does likewise and steps away.
ÉOWYN
Women of this country learned long ago: those without swords may still die upon them. I fear neither death nor pain.
ANGLE ON: ÉOWYN re-sheathes the sword, she replaces it in the chest.
ARAGORN
What do you fear, my lady?
CLOSE ON: She freezes for a moment, she turns to him.
ÉOWYN
gravely
A cage. To stay behind bars until use and old age accept them. And all chance of valor has gone beyond recall or desire.
CLOSE ON: ARAGORN shakes his head in wonder.
ARAGORN
You’re a daughter of kings, a shieldmaiden of Rohan.
ANGLE ON: ARAGORN sheathes his knife, he continues to look at her.
ARAGORN
I do not think that will be your fate.
CLOSE ON: ÉOWYN gazes at him, unable to respond.
ANGLE ON: He bows and exits.
EXT. FIELDS OF ROHAN - DAY
WIDE ON: THÉODEN, ARAGORN, LEGOLAS, and GIMLI ride at the forefront of the people leaving EDORAS.
CLOSE ON: THÉODEN pauses atop the first rise to gaze back upon his city.
ANGLE ON: The ROHIRRIM walk single file out of their city, following him, carrying only what they need.
AERIAL ON: The ROHIRRIM speckle the landscape of ROHAN in a single line leading from EDORAS.
WORMTONGUE (V.O.)
Théoden will not stay at Edoras.
INTERCUT WITH: SARUMAN patiently listens to WORMTONGUE in ORTHANC.
WORMTONGUE
It’s vulnerable. He knows this. He will expect an attack on the city. They will flee to Helm’s Deep, the great fortress of Rohan.
ANGLES ON: The ROHIRRIM make their way towards the mountains where HELM’S DEEP lies, some falter, some ride in carts, ever so slowly, they draw closer to their destination.
WORMTONGUE (V.O.)
It is a dangerous road to take through the mountains. They will be slow.
INSERT IMAGE: WORMTONGUE speaks to SARUMAN in ORTHANC.
WORMTONGUE
They will have women and children with them.
CLOSE ON: SARUMAN’S eyebrows rise in response and a grin crosses his face. Opportunity!
INT. CAVERNS OF ISENGARD - DAY
ANGLE ON: SARUMAN makes haste to an ORC COMMANDER within the caverns.
SARUMAN
Send out your Warg-riders.
ANGLE ON: The ORC COMMANDER sits above a pit, shadows of fierce creatures dance on the walls, alit by fire, growling impatiently.
CLOSE ON: The ORC COMMANDER smiles and nods with pleasure.
CUT TO:
EXT. ITHILIEN - DAY
WIDE ON: GOLLUM watches the water silently.
SUDDENLY, he thrusts in, loses his balance and falls wholly into the stream, a fish, his prize, flies out of the water. GOLLUM grasps at it desperately causing him to slide downstream.
ANGLE ON: FRODO and SAM come over the rise behind him.
SAM
Hey, stinker, don’t go getting too far ahead!
FRODO
Why do you do that?
SAM stops and turns to FRODO.
SAM
What?
FRODO
Call him names. Run him down all the time.
SAM
Because. Because that's what he is, Mr. Frodo. There's naught left in him but lies and deceit. It's the Ring he wants. It's all he cares about.
FRODO
angrily
You have no idea what it did to him, what it's still doing to him.
He pushes past SAM and stops.
FRODO
I want to help him, Sam.
SAM
Why?
POV: GOLLUM looks about for the fish, slowly, he realises it is lost, he looks up at FRODO and smiles.
ANGLE ON: FRODO’S eyes dart to the side away from GOLLUM, worried.
FRODO
Because I have to believe he can come back.
SAM
You can’t save him, Mr. Frodo.
FRODO
spinning to SAM; angrily
What do you know about it? Nothing!
SAM is taken aback. Slowly, he walks past FRODO. FRODO turns to him.
FRODO
I'm sorry, Sam. I don't know why I said that.
SAM turns back to FRODO.
SAM
gently
I do. It's the Ring. You can't take your eyes off it! I've seen you. You're not eating. You barely sleep. It's taken hold of you, Mr. Frodo. You have to fight it.
CLOSE ON: FRODO’S eyes flare again.
FRODO
angrily
I know what I have to do Sam. The Ring was entrusted to me. It's my task. Mine! My own!
FRODO storms away. SAM turns to him, shocked.
SAM
Can't you hear yourself? Don't you know who you sound like?
FRODO continues walking without turning back.
EXT. ITHILIEN - NIGHT
SAM and FRODO sleep.
CLOSE ON: FRODO clutches the RING in his hand.
GOLLUM
We wants it. We needs it.
ANGLE ON: GOLLUM watches them from a distance, hatred is etched across his face.
GOLLUM
Must have the precious. They stole it from us. Sneaky little Hobbitses. Wicked. Tricksy. False.
Suddenly, his expression softens, and he shakes his head. His eyes grow wide, as if looking at his GOLLUM half.
SMÉAGOL
No. Not Master.
His expression turns to hate again. His head turns as if responding to the SMÉAGOL half.
GOLLUM
Yes, precious. False. They will cheat you, hurt you, lie!
SMÉAGOL
Master’s my friend.
GOLLUM
taunting
You don’t have any friends. Nobody likes you.
SMÉAGOL
Not listening. I’m not listening.
GOLLUM
You’re a liar and a thief.
SMÉAGOL
No.
GOLLUM
Murderer.
SMÉAGOL sniffles.
SMÉAGOL
Go away.
GOLLUM
Go away?
GOLLUM laughs at the very notion. SMÉAGOL acts as if the exchange stresses him. He holds his head and speaks in a small voice.
SMÉAGOL
I hate you. I hate you.
GOLLUM
fiercely
Where would you be without me?
coughing
Gollum. Gollum. I saved us. It was me. We survived because of me.
SMÉAGOL raises his head and looks at GOLLUM.
SMÉAGOL
Not anymore.
GOLLUM
startled
What did you say?
SMÉAGOL
with building confidence
Master looks after us now. We don’t need you.
GOLLUM
What?
SMÉAGOL
Leave now and never come back.
GOLLUM
No.
SMÉAGOL
Leave now and never come back.
GOLLUM growls and bares his teeth.
SMÉAGOL
resolutely
Leave now and never come back!
SMÉAGOL looks scared for a moment. GOLLUM does not respond. He looks around quickly, desperately. A smile breaks on his face.
SMÉAGOL
We told him to go away. And away he goes, precious.
He leaps from where he was sitting and dances about.
SMÉAGOL
singing
Gone! Gone! Gone! Sméagol is free!
CUT TO:
EXT. ITHILIEN - DAY
FRODO rests against a rock. SAM stands off, looking into the distance. GOLLUM suddenly runs up clutching TWO CONEYS in his mouth. He spits them onto FRODO’S lap.
CLOSE ON: FRODO jumps, startled.
GOLLUM
Look. Look. See what Sméagol finds?
ANGLES ON: GOLLUM smiles deliriously, and then jumps around laughing proudly. FRODO smiles at GOLLUM and looks over to SAM. SAM is not so amused. GOLLUM raises a triumphant fist to conclude his happy little dance. He picks up one of the CONEYS.
GOLLUM
They are young.
He snaps the Coney’s back. FRODO cringes, disgusted with this particular display.
GOLLUM
They are tender. They are nice. Yes, they are. Eat them. Eat them!
ANGLES ON: Disgusted, SAM walks over to GOLLUM. GOLLUM digs his teeth into his CONEY ripping a large chunk of raw meat out of it.
SAM
You’ll make him sick, you will --
SAM snatches the CONEY from GOLLUM’S hands, tossing him to one side.
SAM
-- behaving like that!
SAM holds up the CONEYS.
SAM
There’s only one way to eat a brace of coneys.
CUT TO:
EXT. ITHILIEN CAMPSITE - DAY
CLOSE ON: A pot of stew simmers over a fire. GOLLUM screams, horrified.
ANGLES ON: SAM stirs it and adds herbs to the mix. GOLLUM looks into the pot.
GOLLUM
What’s he doing? Stupid, fat Hobbit. It ruins it.
CLOSE ON: SAM looks at GOLLUM, offended. He returns to stirring.
SAM
What’s to ruin? There’s hardly any meat on them.
ON THE SOUNDTRACK: A faint bird-call rings across the camp.
CLOSE ON: FRODO turns to find its source.
ANGLE ON: SAM continues stirring the stew, ignoring GOLLUM.
SAM
What we need is a few good taters.
GOLLUM
spinning to SAM, worried
What’s taters, precious? What’s taters? Eh?
ANGLE ON: The calling sound continues. FRODO starts walking, searching for its source.
SAM
impatiently
Po-ta-toes. Boil them, mash them, stick them in a stew. Lovely big golden chips with a nice piece of fried fish.
GOLLUM spits at the very thought. SAM looks to him, proud of his imagery.
SAM
Even you couldn’t say no to that.
GOLLUM
indignant
Oh, yes, we could. Spoil a nice fish.
He scrambles up close to SAM.
GOLLUM
Give it to us raw and wriggling. You keep nasty chips.
ANGLE ON: SAM brings up the ladle to have a taste of his stew...GOLLUM hops away. SAM shakes his head.
SAM
You’re hopeless.
He sips the stew.
EXT. ITHILIEN FOREST - DAY
ANGLE ON: FRODO walks through the woods, still searching. The sound ensues again. FRODO looks in that direction and continues towards it.
EXT. ITHILIEN CAMPSITE - DAY
SAM brings down his ladle and looks about.
SAM
Mr. Frodo?
EXT. EDGE OF ITHILIEN - DAY
FRODO crawls to the edge of an overlook.
HIGH WIDE ON: A HARADRIM ARMY marches across the land below him.
ANGLE ON: SAM and GOLLUM come up behind him.
SAM
Who are they?
GOLLUM
Wicked Men. Servants of Sauron. They are called to Mordor. The Dark One is gathering all armies to him. It won’t be long now. He will soon be ready.
SAM
Ready to do what?
GOLLUM
To make his war. The last war that will cover all the world in Shadow.
FRODO
We’ve got to get moving. Come on, Sam.
FRODO starts to leave. SUDDENLY, SAM grabs Frodo’s arm, entranced with the sight.
SAM
Mr. Frodo. Look. It’s an oliphaunt.
WIDE ON: GIGANTIC MAMÛKIL CARRYING SOLDIERS AND SUPPLIES ON THEIR BACKS!
These creatures look like elephants, but stand at least 7 men tall. They tower over the formations of soldiers below them.
CLOSE ON: SAM looks upon them with rapture.
SAM
No one at home will believe this.
CLOSE ON: FRODO looks at SAM and smiles. They both gaze in wonder at the enormous creatures.
ON THE SOUNDTRACK: The call sounds again.
ANGLE ON: All THREE of them look about, warily. GOLLUM slips off. FRODO looks after him.
FRODO
Sméagol?
WIDE ON: SUDDENLY, PANDEMONIUM ENSUES; THE ARMY IS BEING AMBUSHED! The MAMÛKIL react to the onslaught, they throw MEN from their backs, who fall to their deaths.
ANGLES ON: Cloaked ARCHERS fire deadly arrows, the SOLDIERS fall one by one.
CLOSE ON: One of the ARCHERS, FARAMIR, runs to the forefront to survey the battle.
ANGLE ON: One of the MAMÛKIL starts trumpeting and stomping towards FRODO and SAM, swinging his huge trunk and tusks, throwing MEN from his back.
ANGLE ON: FRODO and SAM back away from he overlook in fear.
CLOSE ON: FARAMIR nocks an arrow and fires at the MAMÛKIL’S DRIVER.
ANGLE ON: The SOLDIER falls from the MAMÛKIL and lands right behind FRODO and SAM, dead. The MAMÛKIL tromps off in another direction.
ANGLE ON: FRODO and SAM backs away from the edge and look behind them.
FRODO
We’ve lingered here too long.
ANGLE ON: FRODO begins to run off, when he notices SAM is still watching the battle.
FRODO
Come on, Sam.
ANGLES ON: FRODO turns and runs right into a GONDORIAN RANGER, who grabs hold of him. SAM draws his weapon and charges the RANGER, but another comes out of the trees and knocks him onto his back, the RANGER with FRODO lifts him briefly and tosses him to the ground.
CLOSE ON: A RANGER holds his sword to Sam’s neck, pinning him.
ANGLE ON: FRODO desperately tries to escape, but the RANGERS detain him.
SAM
Wait! We’re innocent travelers!
FARAMIR appears to challenge SAM.
FARAMIR
There are no travelers in this land. Only servants of the Dark Tower.
FARAMIR walks past them to lead on.
FRODO
We are bound to an errand of secrecy.
FARAMIR stops and turns to him.
FRODO
Those that claim to oppose the enemy would do well not to hinder us.
FARAMIR
The enemy?
FARAMIR turns to the fallen SOLDIER.
FARAMIR
His sense of duty was no less than yours, I deem.
CLOSE ON: FARAMIR rolls the SOLDIER over with his foot and looks upon his dead face.
FARAMIR
You wonder what his name is, where he came from. And if he was really evil at heart. What lies or threats led him on this long march from home. If he would not rather have stayed there in peace.
He breaks from his reflection and turns back to FRODO.
FARAMIR
War will make corpses of us all. Bind their hands.
ANGLES ON: FRODO makes a final fruitless effort to escape, but to no avail. SAM is violently lifted from the ground.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
ANGLE ON: GIMLI rides atop a horse, led by ÉOWYN, among the throng of traveling ROHIRRIM.
GIMLI
It’s true you don’t see many Dwarf women. And in fact, they are so alike in voice and appearance, that they’re often mistaken for Dwarf Men.
ANGLE ON: ÉOWYN smiles and looks back at ARAGORN.
ARAGORN
gestures and whispers
It’s the beards.
ÉOWYN smiles and shushes him.
GIMLI
And this, in turn, has given rise to the belief that there are no Dwarf women, and that Dwarves just spring out of holes in the ground --
ÉOWYN laughs. GIMLI joins her and continues.
GIMLI
-- which is of course ridiculous.
The horse suddenly rears up. ÉOWYN loses her hold on the reins.
ANGLES ON: The horse gallops through the throng, throwing GIMLI to the dirt. ÉOWYN rushes forward to GIMLI who struggles to get up like a turtle on its back.
GIMLI
It’s all right. Nobody panic. That was deliberate. It was deliberate.
ÉOWYN helps GIMLI to his feet.
ANGLE ON: THÉODEN and ARAGORN, riding side by side, laugh at the sight. THÉODEN glances at ARAGORN.
THÉODEN
I haven’t seen my niece smile for a long time. She was a girl when they brought her father back dead. Cut down by Orcs. She watched her mother succumb to grief.
ANGLE ON: ARAGORN’S expression turns dark and mournful, he looks to ÉOWYN.
POV: ÉOWYN laughs and looks to him as she brushes GIMLI off.
ANGLE ON: ARAGORN looks back to THÉODEN.
THÉODEN
Then she was left alone, to tend her king in growing fear. Doomed to wait upon an old man who should have loved her as a father.
CLOSE ON: ÉOWYN looks back at ARAGORN with the sun behind her and the wind in her hair, smiling at him.
DISSOLVE TO:
EXT. PLAINS OF ROHAN - DAY
ANGLE ON: ÉOWYN walks through a makeshift ROHIRRIM camp, carrying a pot of stew, she sees GIMLI and offers him some.
ÉOWYN
Gimli.
GIMLI
No, I couldn’t. I really couldn’t.
GIMLI walks away. ÉOWYN continues walking until she comes upon ARAGORN. He looks up at her approach.
ÉOWYN
I made some stew. It isn’t much, but it’s hot.
She draws him a bowl, and he takes it. She hands him a spoon.
ARAGORN
Thank you.
CLOSE ON: He dips the spoon in the bowl and fishes for a bite of meat.
Immediately upon putting the morsel into his mouth, he freezes, his face registers the distaste of this morsel, meekly, he looks up to ÉOWYN, he swallows hard, and nods with the word “Yuck” written all over his face.
ARAGORN
It’s good.
ÉOWYN
Really?
She begins to walk away.
ANGLE ON: SUBTLY, ARAGORN tips the bowl to pour out the distasteful mixture. ÉOWYN turns suddenly. ARAGORN tries to catch himself, but ends up soaking his arms in the steaming brew.
ÉOWYN
My uncle told me a strange thing. He said that you rode to war with Thengel, my grandfather. But he must be mistaken.
ARAGORN
King Théoden has a good memory. He was only a small child at the time.
ANGLE ON: ÉOWYN kneels down to him, shocked.
ÉOWYN
Then you must be at least 60.
CLOSE ON: He chuckles uncomfortably, and looks away.
ÉOWYN
Seventy?
ARAGORN looks down and still doesn’t respond.
ÉOWYN
But you cannot be 80!
He looks at her calmly, and smiles.
ARAGORN
Eighty-seven.
CLOSE ON: ÉOWYN’S jaw DROPS, she stands, momentarily speechless.
ÉOWYN
You are one of the Dúnedain.
ANGLE ON: ARAGORN nods, humbly.
ÉOWYN
A descendant of Númenor, blessed with long life. It was said that your race had passed into legend.
ARAGORN
There are few of us left. The Northern Kingdom was destroyed long ago.
ARAGORN looks down, sadly.
ÉOWYN
I’m sorry.
smiling
Please, eat.
She continues to stand by him, giving him little choice but to eat the distasteful mess he was given.
CUT TO:
EXT. CAMPSITE - PLAINS OF ROHAN - NIGHT
ARAGORN sits silently, smoking a pipe. His eyes stare off into the distance -- his mind elsewhere.
ARWEN (V.O.)
The light of the Evenstar does not wax and wane. It is mine to give to whom I will. Like my heart.
Slowly, ARAGORN’S pipe lowers along with his head.
ARWEN (V.O.)
Go to sleep --
CROSSFADE TO:
INT. ARWEN’S ROOM - RIVENDELL - DAY - FLASHBACK
ANGLE ON: ARAGORN lies on a chaise, eyes closed.
ARAGORN
I am asleep.
Slowly, his eyes open. He glances upward and smiles.
ANGLE ON: ARWEN stands above him, smiling back at him.
ARAGORN
This is a dream.
ARWEN bends down to kiss him.
ARWEN
Then it is a good dream.
They kiss lightly. ARAGORN relishes the touch of her skin again. ARWEN pulls back and strokes his cheek.
ARWEN
whisper
Sleep.
She runs her fingers over his eyes to close them, and kisses him. ARAGORN appears at peace. ARWEN stands, and then walks to a doorway that overlooks RIVENDELL. ARAGORN opens his eyes. He turns his head to look at her.
ARAGORN
in ELVISH; subtitled
Min lû pennich nin i aur hen telitha.
You told me once that this day would come.
ANGLE ON: ARWEN looks to him sadly.
ARWEN
in ELVISH; subtitled
Ú i vethed-- nâ i onnad. Boe bedich go Frodo. Han bâd lîn.
This is not the end-- it is the beginning. You must go with Frodo. That is your path.
ANGLE ON: ARAGORN stands and walks to ARWEN, he takes her in his arms, and stares off into the distance.
ARAGORN
in ELVISH; subtitled
Dolen i vâd o nin.
My path is hidden from me.
ARWEN
reassuringly; in ELVISH; subtitled
Si peliannen i vâd na dail lîn. Si boe ú-dhannathach.
It is already laid before your feet. You cannot falter now.
ARAGORN
Arwen --
CLOSE ON: ARWEN places her fingers on his lips, silencing his fears and doubts, she runs her fingers down his chin.
ARWEN
in ELVISH; subtitled
Ae ú-esteliach nad --
If you trust nothing else --
-- to rest on the EVENSTAR PENDANT around his neck.
ARWEN
in ELVISH; subtitled
-- estelio han. Estelio ammen.
-- trust this. Trust us.
ARAGORN takes her hand in his.
ANGLE ON: They kiss passionately in the gleaming sunlight of the RIVENDELL morning.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
CLOSE ON: THE EVENSTAR PENDANT around ARAGORN’S neck.
ANGLE ON: ARAGORN leads his horse to Helm’s Deep, distracted by the memory of ARWEN.
ÉOWYN
Where is she?
ARAGORN turns.
CLOSE ON: ÉOWYN looks at him nervously.
ÉOWYN
The woman who gave you that jewel.
CLOSE ON: ARAGORN says nothing and continues walking.
DISSOLVE TO:
EXT. RIVENDELL - DAY - FLASHBACK
ELROND stands before ARAGORN.
ELROND
beseeching
Our time here is ending. Arwen’s time is ending. Let her go. Let her take the ship into the west. Let her bear away her love for you to the Undying Lands. There it will be evergreen.
ARAGORN
But never more than memory.
ELROND
I will not leave my daughter here to die.
ARAGORN
She stays because she still has hope.
ELROND
She stays for you. She belongs with her people.
ARAGORN leaves ELROND without another word.
CUT TO:
EXT. RIVENDELL - DAY - FLASHBACK
ANGLE ON: ARAGORN walks down the stairs to join the FELLOWSHIP at the RIVENDELL GATE. He checks his weapons and garments in preparation as he walks. ARWEN emerges from behind a pillar.
ARWEN
in ELVISH; subtitled
Nach gwannatha sin?
Is this how you would take your leave?
ARAGORN pauses and turns to her, he continues walking, she follows.
ARWEN
in ELVISH; subtitled
Ma nathach hi gwannathach or minuial archened?
Did you think you could slip away at first light – unnoticed?
ARWEN finally stands in front of him, forcing him to stop.
ARAGORN
in ELVISH; subtitled
Ú-ethelithon.
I will not be coming back.
He tries to walk past her.
ARWEN
in ELVISH; subtitled
Estelio guru lîn ne dagor. Ethelithach.
You underestimate your skill in battle. You will come back.
ARAGORN
in ELVISH; subtitled
Ú-bedin o gurth ne dagor.
It is not of death in battle that I speak.
ARWEN gently grabs his arm, and stands before him again...he stops, trying not to meet her gaze.
ARWEN
in ELVISH; subtitled
O man pedich?
What do you speak of?
ARAGORN looks at the ground momentarily, then into her eyes.
ARAGORN
with difficulty; in ELVISH; subtitled
Idhren emmen menna gui ethwel. Hae o auth, a nîr, a naeth.
You have a chance for another life. Away from war, grief, despair.
CLOSE ON: ARWEN is mortified.
ARWEN
Why are you saying this?
ARAGORN
gently
I am mortal. You are Elf-kind. It was a dream, Arwen. Nothing more.
ARWEN
shaking her head
I don’t believe you.
ANGLES ON: He takes ARWEN’S hand and turns it open, she looks down, he opens his hand to reveal the EVENSTAR PENDANT, he looks back to her.
ARAGORN
This belongs to you.
CLOSE ON: ARWEN looks at ARAGORN with all the composure she can muster.
ARWEN
It was a gift.
CLOSE ON: She closes his hand around the PENDANT.
ARWEN
Keep it.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
CLOSE ON: ARAGORN continues to gaze off, flooded with the painful memory of his departure from ARWEN. ÉOWYN endeavors to break his musing.
ÉOWYN
My lord?
ANGLE ON: ARAGORN looks at ÉOWYN to give up his story.
ARAGORN
pained
She is sailing to the Undying Lands with all that is left of her kin.
ANGLE ON: ÉOWYN turns quickly away from him, digesting this.
ANGLE ON: GAMLING and HÁMA ride through the crowds to scout ahead.
WIDE ON: They ride over the ridge, distracting LEGOLAS, who is watching the horizon as they pass.
ANGLE ON: They reach a tall formation of rock, their HORSES become uneasy.
GAMLING
What is it? Háma?
HÁMA
I’m not sure.
LOW ANGLE ON: High atop the rocks, a ORC WARG RIDER watches them. SUDDENLY, THE WARG RIDER CHARGES DOWN THE ROCK FACE AND ATTACKS HÁMA! HÁMA is knocked from his steed to the ground. He rolls over as the WARG bears down upon him.
ANGLE ON: ARAGORN and ÉOWYN look up to hear HÁMA’S cries. GAMLING draws his sword.
GAMLING
yelling
Wargs!
ANGLE ON: The WARG throws HÁMA away, and turns to GAMLING. The two WARRIORS CLASH. LEGOLAS leaps from his lookout point and fires an arrow, felling the WARG, and throwing his RIDER to the ground.
ANGLE ON: ARAGORN runs atop the ridge. LEGOLAS bears down on the ORC and slices his throat.
LEGOLAS
yelling
A scout!
ANGLE ON: ARAGORN runs back down the hill to THÉODEN, who rides toward him.
THÉODEN
What is it? What do you see?
ARAGORN
Warg! We are under attack!
ANGLES ON: The crowd is instantly reduced to a blind panic, the people scream and turn back to EDORAS.
ANGLE ON: ARAGORN makes his way through the crowd to ÉOWYN and his HORSE. THÉODEN turns back to the troops.
THÉODEN
All riders to the head of the column!
ANGLE ON: GIMLI ties to mount AROD.
GIMLI
Come on. Get me up here. I’m a rider!
With some help, GIMLI succeeds.
GIMLI
Come on!
He spurs the HORSE onward, and almost falls off!
WIDE ON: LEGOLAS runs across the plain to the top of another ridge, overlooking a vast plain, over the next hill come a large number of WARG RIDERS, barking and kicking up dust as they ride.
ANGLE ON: THÉODEN rides to ÉOWYN, mounting her HORSE.
THÉODEN
You must lead the people to Helm’s Deep, and make haste.
ÉOWYN
I can fight!
THÉODEN
No!
ÉOWYN holds THÉODEN’S gaze for a moment.
THÉODEN
You must do this for me.
Reluctantly, ÉOWYN agrees. THÉODEN turns his HORSE to the BATTLE.
THÉODEN
Follow me!
ANGLES ON: THÉODEN charges forward, the WARRIORS follow, ARAGORN spurs BREGO onward as he mounts. AROD, GIMLI on his back, walks backward.
GIMLI
Forward. I mean, charge forward.
ANGLE ON: ÉOWYN leads the people away from the battle.
ÉOWYN
Make for the lower ground!
ANGLE ON: GIMLI finally succeeds in moving AROD forward, he holds on unsteadily as the HORSE gallops.
GIMLI
That’s it! Go on!
ANGLE ON: ÉOWYN manages to get everyone moving in the same direction, she continues to rally them to her.
ÉOWYN
Stay together!
ANGLE ON: The ROHIRRIM HORSEMEN ride together under their standard up the hill to confront the WARG RIDERS.
ANGLE ON: ARAGORN turns for a final glance to ÉOWYN and the VILLAGERS. ÉOWYN turns for a final glance to ARAGORN and the HORSEMEN, their eyes lock for a moment before ARAGORN turns and heads for the battle.
WIDE ON: The HORSEMEN ride up the hill into battle. Atop the ridge, LEGOLAS fires ARROWS into the ranks of the WARG RIDERS, hitting his mark each time, the ROHIRRIM ride over the hill. LEGOLAS turns and joins GIMLI on AROD.
SERIES OF CUTS: The two armies ride towards each others. THÉODEN and the WARG COMMANDER give their armies the signal, the two ARMIES CLASH on the field of battle, riders are knocked from their mounts, spears, arrows, teeth, and swords make contact, the blood-thirsty WARGS maul fallen MEN and HORSES.
ANGLE ON: GIMLI falls from AROD, he stands, facing off against a hungry WARG. GIMLI readies himself.
GIMLI
Bring your pretty face to my axe!
The WARG charges. GIMLI prepares to make contact.
SUDDENLY, LEGOLAS rides by and kills the WARG with a well-placed ARROW!
GIMLI
outraged
That one counts as mine!
ANGLE ON: A WARG attacks GIMLI from behind, he kills the creature with his axe, but as it falls, GIMLI is pinned under it.
SERIES OF CUTS: The battle rages on. ARAGORN and THÉODEN deftly dispatch ORCS with their swords, an ARCHER fires arrow after arrow at the attackers before a WARG mauls him. RIDERS are knocked from their mounts.
ANGLE ON: GIMLI tries to lift the WARG off of him.
GIMLI
strained
Stinking creature.
ANGLES ON: An ORC leans over the DEAD WARG. GIMLI’S eyes widen, the ORC raises a short sword. GIMLI grabs the ORC’S head and breaks his neck, the ORC collapses on the growing heap. GIMLI sniffs and grimaces with disgust.
A WARG looks over his fallen brethren and finds GIMLI. GIMLI’S eyes widen again as he realises he is at the creature’s mercy.
ARAGORN looks over and spots GIMLI’S predicament.
THE WARG closes in for the kill.
ARAGORN rides towards GIMLI. He snatches a spear from the ground and skewers the WARG, it falls, adding to the weight GIMLI is currently carrying. GIMLI moans in pain.
THE BATTLE RAGES ON --
ANGLE ON: A WARG takes ARAGORN off guard and knocks him from HASUFEL.
ANGLE ON: One of the RIDERS, SHARKU, charges ARAGORN and attempts to take him out. ARAGORN grabs the ORC’S arm and pulls himself to the back of the WARG, behind SHARKU!
They charge across the plains. SHARKU butts ARAGORN off the WARG, but ARAGORN holds on to the WARG’S course hair, dragged across the field, ARAGORN draws his dagger and swings at SHARKU. SHARKU kicks him back down!
FINALLY, ARAGORN stabs SHARKU. The two grasp at each other. ARAGORN throws SHARKU from the WARG, but ARAGORN is unable to let go.
CLOSE ON: HIS HAND IS WRAPPED IN THE CREATURES SADDLE!
WIDE ON: The WARG charges across the field of battle.
POV: A DROP-OFF APPROACHES QUICKLY!
CLOSE ON: ARAGORN desperately tries to disentangle himself.
WIDE ON: The WARG charges over the edge. ARAGORN FALLS WITH HIM!
ANGLE ON: GIMLI axes a fallen WARG. He looks about.
WIDE ON: All over the plains the WARG RIDERS are retreating, still being removed from this life by ROHIRRIM HORSEMEN.
ANGLE ON: LEGOLAS walks across the field, looking about suddenly!
LEGOLAS
calling out
Aragorn!
CLOSE ON: GIMLI seems to notice ARAGORN missing as well...he looks about, worried.
GIMLI
calling out
Aragorn?
ANGLE ON: THÉODEN also looks around amongst the MEN near him. LEGOLAS and GIMLI approach the drop-off. They look over the ground. LEGOLAS looks up to an ORC, who is laughing rasply, it is SHARKU. LEGOLAS and GIMLI approach him. GIMLI holds his axe threateningly over SHARKU’S head.
GIMLI
Tell me what happened and I will ease your passing.
SHARKU
with difficulty
He’s dead.
SHARKU laughs.
SHARKU
Took a little tumble off the cliff.
THÉODEN turns to the cliff. LEGOLAS bends down and grabs SHARKU by the shirt.
LEGOLAS
You lie.
SHARKU chortles and dies with a smile. LEGOLAS roughly releases him. Something in the ORC’S hand catches his eye, he takes the item.
CLOSE ON: LEGOLAS holds the EVANSTAR PENDANT, his expression changes to worry.
ANGLE ON: He quickly joins THÉODEN at the drop-off with GIMLI close behind.
POV: Down the sheer cliff to the rushing water below, there is no sign of either the WARG or ARAGORN.
ANGLE ON: LEGOLAS and GIMLI desperately scan the ravine for ARAGORN.
ANGLE ON: GAMLING runs up behind THÉODEN. THÉODEN turns to him.
THÉODEN
Get the wounded on horses. The wolves of Isengard will return. Leave the dead.
GAMLING acknowledges and runs back to the ranks.
ANGLE ON: LEGOLAS looks at THÉODEN with an expression of perplexed anger. THÉODEN puts a comforting hand on LEGOLAS' shoulder.
THÉODEN
Come.
LOW ANGLE ON: THÉODEN leaves LEGOLAS and GIMLI staring at the river. LEGOLAS looks at the EVANSTAR, not wanting to believe the truth.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
WIDE ON: The line of ROHIRRIM stretch far behind them. They look up and cry with delight.
VILLAGER
Helm’s Deep!
They begin running for their refuge.
ANGLE ON: ÉOWYN walks to the forefront.
WIDE ON: In the distance, nestled in the shadow of Thrihyrne, lay
HELM’S DEEP. ÉOWYN stands upon the rise, looking into the Westfold Vale to the gorge where HELM’S DEEP lies.
CLOSE ON: ÉOWYN looks upon the sight, mixed with relief and dread. She follows the ROHIRRIM down.
CUT TO:
EXT. HELM’S DEEP - DAY
ANGLE ON: SOLDIERS OPEN THE MIGHTY DOORS. ÉOWYN enters, followed by the throng from EDORAS.
WIDE ON: The roads are lined with the soldiers and people of ROHAN - all those of the land of ROHAN who were driven from their homes have taken refuge there.
AERIAL ON: SOLDIERS man the BATTLEMENTS around the HELM’S DEEP WALL. PEOPLE continue to flow in inside the walls is a FLURRY OF ACTIVITY.
ANGLE ON: ÉOTHAIN and FREDA run through the masses.
FREDA
Mama!
MORWEN
Éothain! Freda!
ANGLE ON: The CHILDREN embrace their MOTHER again.
ANGLE ON: ÉOWYN assesses supplies.
ÉOWYN
Where is the rest?
ALDOR
This is all we could save, my lady.
ANGLE ON: The FOOD SUPPLY consists of perhaps a dozen bags and about the same number of baskets of food.
ÉOWYN
Take it to the caves.
GAMLING (O.S.)
Make way for the king!
ÉOWYN breaks into a run to meet the returning soldiers.
HIGH ANGLE ON: The HORSEMEN ride into HELM’S DEEP and up the roads.
GAMLING (O.S.)
Make way for Théoden! Make way for the king!
ANGLE ON: ÉOWYN runs through the city to meet them. She surveys their numbers quickly.
ÉOWYN
So few. So few of you have returned.
ANGLE ON: THÉODEN turns to her, finding his words. He averts his gaze as much as possible.
THÉODEN
Our people are safe.
He turns to assist a wounded soldier who was riding with him.
THÉODEN
We have paid for it with many lives.
ANGLE ON: GIMLI solemnly approaches ÉOWYN.
GIMLI
My lady.
She turns to him, worried.
ÉOWYN
Lord Aragorn -- where is he?
GIMLI
with difficulty
He fell.
SLOW MOTION: ÉOWYN’S eyes grow wide, her mouth drops open, speechless, she turns to looks at THÉODEN. THÉODEN catches her glance, and turns away, confirming GIMLI’S statement, visibly shaken, ÉOWYN sits to recover herself.
EXT. HELM’S DEEP BATTLEMENTS - DAY
WIDE ON: THÉODEN stands, overlooking the land outside of HELM’S DEEP. He addresses the SOLDIERS and MEN accompanying him.
THÉODEN
Draw all our forces behind the wall. Bar the gate. And set a watch on the surround.
THÉODEN turns to leave the BATTLEMENTS. The MEN follow.
GAMLING
What of those who cannot fight, my lord? The women and children?
THÉODEN
Get them into the caves.
EXT. HELM’S DEEP - DAY
ANGLE ON: THÉODEN leads his MEN down from the BATTLEMENTS and past the DEEPING STREAM, which flows through it via a grate in the wall.
THÉODEN
Saruman's arm will have grown long indeed if he thinks he can reach us here.
TRACK IN ON THE GRATE IN THE WALL.
WORMTONGUE (V.O.)
Helm’s Deep has one weakness. Its outer wall is solid rock but for a small culvert at its base which is little more than a drain.
CUT TO:
INT. ORTHANC ANTE-CHAMBER - DAY
CLOSE ON: SARUMAN pours gunpowder into a LARGE STONE POT.
WORMTONGUE
How? How can fire undo stone? What kind of device could bring down the wall?
ANGLE ON: WORMTONGUE leans over the pot, holding a candle. SARUMAN reaches out his hand to stay the candle’s approach. SARUMAN pushes WORMTONGUE away from the pot.
SARUMAN
If the wall is breached, Helm's Deep will fall.
SARUMAN walks through ORTHANC. WORMTONGUE follows closely.
WORMTONGUE
Even if it is breached, it would take a number beyond reckoning, thousands, to storm the keep.
SARUMAN approaches his balcony, which overlooks ISENGARD.
SARUMAN
Tens of thousands.
WORMTONGUE
But, my lord, there is no such force.
TRACK WITH: SARUMAN and WORMTONGUE walk onto the balcony as a HORN sounds.
HIGH WIDE ON: SARUMAN’S TENS OF THOUSANDS of URUK-HAI stand ready upon the wrecked field of ISENGARD, the ground simply appears covered in a black seething mass of neat rows and columns.
CLOSE ON: WORMTONGUE’S jaw drops in awe.
ANGLE ON: SARUMAN holds up his hand to calm his army.
SARUMAN
A new power is rising. Its victory is at hand.
HIGH WIDE ON: The URUK-HAI cheer and roar.
ANGLE ON: SARUMAN holds out his hand to calm them.
SARUMAN
This night, the land would be stained with the blood of Rohan!
TRACK AWAY FORM ORTHANC DOWN THROUGH THE MASS OF SPEARS WHICH TRAVELS SO FAR, SARUMAN APPEARS AS ONLY A SPECK ON THE OBSIDIAN TOWER OF ORTHANC, EVEN AT SUCH A DISTANCE, SARUMAN IS CLEARLY HEARD.
SARUMAN
March to Helm's Deep! Leave none alive!
CLOSE ON: SARUMAN raises his hands in anticipated triumph.
SARUMAN
To war!
HIGH WIDE ON: The army cheers and roars even louder.
CLOSE ON: WORMTONGUE stands awed and frightened. SARUMAN looks over the ARMY grimly.
SARUMAN
quietly
There will be no dawn for Men.
CUT TO:
EXT. ISENGARD - DAY
The MASSIVE URUK-HAI ARMY marches to war at HELM’S DEEP.
CUT TO:
EXT. FANGORN FOREST - DAY
AERIAL ON: Amidst the lush foliage of FANGORN, TREEBEARD continues his own arch with MERRY and PIPPIN in tow. In the distance, ORTHANC is clearly visible in the RING OF ISENGARD, a dark shape moves across the land towards ROHAN.
ANGLE ON: PIPPIN spots ISENGARD in the distance.
PIPPIN
Look! There’s smoke to the south.
TREEBEARD
There is always smoke rising from Isengard these days.
MERRY reacts to the mention of the name.
MERRY
Isengard?
MERRY climbs up TREEBEARD for a better view.
TREEBEARD
There was a time when Saruman would walk in my woods.
PIPPIN sees MERRY climbing, so he climbs too. TREEBEARD pays them little mind.
TREEBEARD
But now he has a mind of metal and wheels. He no longer cares for growing things.
ANGLE ON: MERRY and PIPPIN reach the upper branches of TREEBEARD, just above the tops of the trees.
PIPPIN
What is it?
HIGH WIDE ON: On the FIELDS of ISENGARD, the FLOOD of the URUK-HAI army marches.
ANGLE ON: MERRY and PIPPIN ride atop TREEBEARD, worried.
MERRY
It’s Saruman’s army. The war has started.
CUT TO:
EXT. RIVER - DAY
WIDE ON: ARAGORN floats atop the water, unconscious, his body comes to rest on a bank of rocks.
INTERCUT WITH ARWEN lying in RIVENDELL.
ARAGORN remains unconscious at the river.
ANGLE ON: SUDDENLY, ARWEN leans in above ARAGORN and kisses him gently. ARAGORN opens his eyes.
ARWEN
May the grace of the Valar protect you.
ARWEN FADES OUT. ARAGORN takes a deep breath.
EXT. RIVERBANK - DAY
ANGLE ON: ARAGORN lies unconscious on the RIVERBANK.
CLOSE ON: SUDDENLY, a HORSE HOOF steps next to his head.
ANGLE ON: It grunts and nudges ARAGORN over and over until he stirs.
ARAGORN
mumbling
Brego.
ANGLE ON: BREGO drops to his knees. ARAGORN takes hold of BREGO’S MANE and PULLS HIMSELF onto BREGO’S back. Once ARAGORN is safely aboard, BREGO stands and carries him away.
EXT. PLAINS OF ROHAN - DAY
BREGO carries a weary and beaten ARAGORN across the distance towards HELM’S DEEP.
DISSOLVE TO:
INT. ARWEN’S ROOM - RIVENDELL - DAY
ARWEN lies on her bed, deep in thought. A VOICE startles her.
ELROND
Arwen.
ARWEN turns to ELROND at her door, and sits up.
ELROND
in ELVISH; subtitled
Tollen i lû. I chair gwannar na Valannor. Si bado no círar.
It is time. The ships are leaving for Valinor. Go now before it is too late.
ARWEN looks at him impassively.
ARWEN
I have made my choice.
ELROND approaches her.
ELROND
He is not coming back. Why do you linger here when there is no hope?
ARWEN
There is still hope.
ELROND walks toward the window and looks away from her.
ELROND
If Aragorn survives this war, you will still be parted. If Sauron is defeated and Aragorn made king and all that you hope for comes true, you will still have to taste the bitterness of mortality. Whether by the sword or the slow decay of time, Aragorn will die.
INSERT IMAGE: ARAGORN lies in state holding ANDÚRIL in the COURTYARD OF THE KINGS at MINAS TIRITH. His hair is greyed many years. ARWEN stands over him mourning his passing. A line of MOURNERS pass behind them.
ELROND (V.O.)
And there will be no comfort for you, no comfort to ease the pain of his passing.
CROSS-FADE TO: A STONE MONUMENT of ARAGORN lying on the TABLE.
All around, MINAS TIRITH has fallen into grave disrepair. To one side on his TOMB, ARWEN stands, still dressed in black as an eternal widow.
ELROND (V.O.)
He will come to death, an image of the splendor of the kings of Men in glory undimmed before the breaking of the world. But you, my daughter, you will linger on in darkness and in doubt as nightfall in winter that comes without a star.
CLOSE ON: ARWEN, veiled in her grief, young and beautiful.
ELROND (V.O.)
Here you will dwell, bound to your grief --
INSERT IMAGE: ARWEN walks through the dead FOREST of LOTHLÓRIEN. Sunlight splays through long standing carcasses of the trees.
ELROND (V.O.)
-- under the fading trees, until all the world has changed and the long years of your life are utterly spent.
CLOSE ON: ELROND, once again standing at the window in ARWEN’S ROOM.
CLOSE ON: ARWEN, a tear streams down her face.
ELROND turns from the window to face her.
ELROND
Arwen --
ARWEN breathes deeply, torn by her love for ARAGORN and her love for her father.
ELROND
There is nothing for you here, only death.
ARWEN raises her tear-worn eyes to him. ELROND walks over to her a sits beside her. He brushes his hand gently across her face.
ELROND
in ELVISH; subtitled
A im, ú-'erin veleth lîn?
Do I not also have your love?
ARWEN gives in to his embrace and holds him.
ARWEN
choked; in ELVISH; subtitled
Gerich meleth nîn, ada.
You have my love, father
CUT TO:
EXT. RIVENDELL - NIGHT
A group of ELVES move out of RIVENDELL, each carrying a lantern.
ANGLES ON: ARWEN walks among them, silent and stoic. ELROND stands on a balcony, watching them go. ARWEN turns a final sad glance to him.
CLOSE ON: ELROND remains impassive and resigned.
EXT. MIDDLE EARTH - NIGHT
WIDE ON: The line of ELVES with their lanterns stretches across the bridge before RIVENDELL, standing gravely empty behind them.
EXT. RIVENDELL - NIGHT
CLOSE ON: ELROND remains on his balcony, watching the entourage leave. The VOICE of GALADRIEL is heard --
INTERCUT: GALADRIEL speaking across the distance.
GALADRIEL
in ELVISH
I amar prestar aen -- han mathon ne nen, han mathon ne chae, a han nostan ned gwilith.
The world has changed -- I feel it in the water, I feel it in the earth, I smell it in the air.
INTERCUT: ELROND standing at his window. He continues watching the entourage leave.
GALADRIEL (V.O.)
in English
The power of the enemy is growing. Sauron will use his puppet Saruman --
INTERCUT: SARUMAN in the PALANTÍR CHAMBER at ORTHANC, his hand held over the PALANTÍR. Within the ball swirls the FIERY EYE OF SAURON.
GALADRIEL (V.O.)
-- to destroy the people of Rohan.
INTERCUT WITH: SARUMAN’S URUK-HAI ARMY marches across ISENGARD towards ROHAN. The ARMY forms a black line that stretches back for miles. THOUSANDS OF SPEARS rise high over the heads of the ARMY.
GALADRIEL (V.O.)
Isengard has been unleashed.
INTERCUT: THE EYE OF SAURON high atop the TOWER OF BARAD-DÛR.
GALADRIEL (V.O.)
The Eye of Sauron now turns to Gondor --
INTERCUT: HIGH OVERHEAD AERIAL of OSGILIATH, it east and west portions of the city split by the RIVER ANDUIN.
GALADRIEL (V.O.)
-- the last free kingdom of Men.
A SHADOW spreads over OSGILIATH.
GALADRIEL (V.O.)
His war on this country will come swiftly.
INTERCUT: THE EYE OF SAURON high atop the TOWER OF BARAD-DÛR, looking in the direction of OSGILIATH and GONDOR.
GALADRIEL (V.O.)
He senses the Ring is close.
INTERCUT: FRODO and SAM, blindfolded, are being pushed along by the GONDORIAN RANGERS, led by FARAMIR.
GALADRIEL (V.O.)
The strength of the Ring-bearer is failing.
INTERCUT: ELROND at his window, anger and frustration welling up within him, as he listens to GALADRIEL.
GALADRIEL (V.O.)
In his heart, Frodo begins to understand --
INTERCUT: CLOSE ON: GALADRIEL
GALADRIEL
-- the quest will claim his life. You know this.
INTERCUT: ELROND stands at his window.
GALADRIEL (V.O.)
You have foreseen it. It is the risk we all took.
FADE TO BLACK.
CLOSE ON: The RING spins through the darkness.
GALADRIEL (V.O.)
In the gathering dark, the will of the Ring grows strong.
EXT. FOREST OF ITHILIEN - DAY
ANGLE ON: The GONDORIAN RANGERS continue prodding FRODO and SAM along.
GALADRIEL (V.O.)
It works hard now to find its way back into the hands of Men. Men, who are so easily seduced by its power.
ANGLE ON: FARAMIR, leading the band of RANGERS.
GALADRIEL (V.O.)
The young captain of Gondor has but to extend his hands, take the Ring for his own and the world will fall.
WIDE ANGLE ON: The WATERFALL in ITHILIEN, which conceals the hideout of the RANGERS, HENNETH ANNÛN.
INT. HENNETH ANNÛN - DAY
ANGLE ON: The MEN pass FRODO and SAM to one another within the hideout to imprison them.
GALADRIEL (V.O.)
It is close now --
INTERCUT: GALADRIEL’S EYES, watching across the distance.
GALADRIEL (V.O.)
-- so close to achieving its goal.
INTERCUT: THE EYE OF SAURON on BARAD-DÛR.
GALADRIEL (V.O.)
For Sauron will have dominion of all life on this Earth --
PULL BACK TO REVEAL: The TOWER deep within MORDOR. NAZGÛL fly around the TOWER on FELL-BEASTS, guarding it from invaders.
INTERCUT: CLOSE ON: GALADRIEL’S EYES, with their deep pools of wisdom.
GALADRIEL
-- even unto the ending of the world. The time of the Elves is over.
INTERCUT: ELROND walks up to the painting of ISILDUR defeating SAURON with the BROKEN BLADE of NARSIL.
CLOSE ON: The PAINTING, panning from the image of SAURON to that of ISILDUR.
GALADRIEL (V.O.)
Do we leave Middle-earth to its fate? Do we let them stand alone?
CLOSE ON: ELROND, his face etched with frustration and indecision.
INT. HENNETH ANNÛN - DAY
CLOSE ON: A MAP of MIDDLE-EARTH is unrolled onto a table.
ANGLE ON: FARAMIR and MADRIL, poring over the MAP.
FARAMIR
What news?
MADRIL
Our scouts report Saruman has attacked Rohan.
CLOSE ON: The MAP as MADRIL indicates ROHAN and HELM’S DEEP.
MADRIL
Théoden’s people have fled to Helm’s Deep. But we must look to our own borders.
PAN ON: MADRIL moves his FINGER from HELM’S DEEP to the borders of MORDOR, where he traces from the BLACK GATE to OSGILIATH.
MADRIL
Faramir, Orcs are on the move. Sauron is marshaling an army. Easterlings and Southrons are passing through the Black Gate.
FARAMIR
How many?
MADRIL
Some thousands. More come every day.
FARAMIR
Who’s covering the river to the north?
CLOSE ON: The MAP is centered on GONDOR. MADRIL points out OSGILIATH.
MADRIL
We pulled 500 Men at Osgiliath, but if the city is attacked, we won’t hold it.
ANGLE ON: FARAMIR considers MADRIL’S words carefully.
CLOSE ON: The MAP shows ISENGARD.
FARAMIR
Saruman attacks from Isengard.
PAN ON: FARAMIR moves his FINGER from ISENGARD to MORDOR.
FARAMIR
Sauron from Mordor.
PULL BACK TO REVEAL the ISENGARD, GONDOR, and MORDOR on the MAP.
FARAMIR
The fight will come to Men on both fronts. Gondor is weak.
ANGLE ON: FARAMIR.
FARAMIR
Sauron will strike us soon. And he will strike hard.
CLOSE ON: The MAP closes in on OSGILIATH.
FARAMIR
He knows now we do not have the strength to repel him.
INT. HENNETH ANNÛN - LATER
CLOSE ON: FRODO’S BLINDFOLD is ripped of him.
ANGLE ON: FRODO and SAM stand in the midst of the GONDORIAN RANGERS, all walking to and fro in their duties.
ANGLE ON: FARAMIR enters and address FRODO and SAM.
FARAMIR
My Men tell me that you are Orc spies.
SAM
Spies?! Now wait just a minute!
FARAMIR
Well if you’re not spies, then who are you?
SAM looks over to FRODO, who remains silent and unmoving. FARAMIR sits to address them.
FARAMIR
Speak.
FRODO and SAM stay silent for a moment, finally, FRODO speaks.
FRODO
We are Hobbits of the Shire. Frodo Baggins is my name, and this is Samwise Gamgee.
FARAMIR
Your bodyguard?
SAM
insulted
His gardener.
FARAMIR
And where is your skulking friend?
ANGLE ON: FRODO looks suddenly nervous, his eyes widening.
FARAMIR
That gangrel creature. He had an ill-favored look.
FRODO shakes his head.
FRODO
There was no other.
ANGLE ON: SAM looks uncomfortable, as if caught in a lie. FARAMIR eyes them suspiciously.
FRODO
We set out from Rivendell with seven companions.
FARAMIR is suddenly very interested.
FRODO
One we lost in Moria, two were my kin, a Dwarf there was also, and an Elf. And two Men, Aragorn, son of Arathorn, and Boromir of Gondor.
FARAMIR’S expression changes to that of reserved surprise.
FARAMIR
intently
You’re a friend of Boromir?
FRODO
Yes, for my part.
ANGLE ON: FARAMIR turns away from the HOBBITS for a moment, and then back to address them.
FARAMIR
It would grieve you then to learn that he was dead.
CLOSE ON: FRODO’S mouth drops, shocked.
FRODO
Dead? How? When?
FARAMIR
As one of his companions, I hoped you would tell me.
FRODO
If something has happened to Boromir, we would have you tell us.
FARAMIR
with great difficulty
His horn washed up on the riverbank, about six days past. It was cloven in two. But more than this, I know it in my heart. He was my brother.
CLOSE ON: FRODO stands speechless at the revelation.
IMAGES: FARAMIR stands alone on a riverbank. FARAMIR walks through the water to an ELVEN BOAT, floating down the river.
IMAGE: CLOSE ON the ELVEN BOAT: BOROMIR lies in state.
IMAGE: FARAMIR stands in shock at the image as the boat passes him by.
INT. HENNETH ANNÛN - DAY
FARAMIR sits alone, deep in thought.
CLOSE ON: In his hands, he holds the BOROMIR’S HORN, cloven in two.
ON THE SOUNDTRACK: Voices cry out, “Boromir! Boromir!”
CUT TO:
EXT. OSGILIATH - DAY
Hundreds of GONDORIANS crowd the streets of the city, crying BOROMIR’S name.
ANGLE ON: BOROMIR plants a flag in one of the turrets and draws his sword in salute.
BOROMIR
This city was once the jewel of our kingdom, a place of light and beauty and music and so it shall be once more!
The people cheer in response.
BOROMIR
Let the armies of Mordor know this: never again will the land of my people fall into enemy hands.
The people cheer again.
BOROMIR
This city of Osgiliath has been reclaimed for Gondor!
WIDE ON: BOROMIR raises his sword in triumph over the city. The people respond to him with cheers and jubilation.
ANGLE ON: FARAMIR makes his way through the crowds to BOROMIR.
They embrace.
FARAMIR
Good speech. Nice and short.
BOROMIR
Leaves more time for drinking!
The brothers laughs. BOROMIR addresses the people around him.
BOROMIR
Break out the ale! These men are thirsty!
The men cheer in agreement.
ANGLE ON: BOROMIR fills two tankards of ale. He hands one to FARAMIR and they toast.
BOROMIR
Remember today, little brother. Today, life is good.
They drink...FARAMIR’S gaze drifts beyond BOROMIR. His expression drops.
BOROMIR
What?
FARAMIR
He’s here.
BOROMIR turns.
ANGLE ON: LORD DENETHOR, their father and the STEWARD OF GONDOR, makes his way through the crowd, happily greeting the people.
ANGLE ON: BOROMIR, turns away in frustration.
BOROMIR
One moment of peace, can he not give us that?
DENETHOR
smiling broadly
Where is he? Where is Gondor’s finest? Where’s my first-born?
BOROMIR musters a smile, and then turns to greet DENETHOR.
BOROMIR
Father!
ANGLE ON: FARAMIR drops back, as if staying out of the way. BOROMIR embraces DENETHOR.
DENETHOR
They say you vanquished the enemy almost single-handedly.
BOROMIR
They exaggerate. The victory belongs to Faramir also.
FARAMIR smiles and steps forward. DENETHOR scowls.
DENETHOR
condescending
But for Faramir, this city would still be standing. Were you not entrusted to protect it?
FARAMIR
I would have done, but our numbers were too few.
DENETHOR
Oh, too few. You let the enemy walk in and take it on a whim.
ANGLE ON: FARAMIR is shattered, hurt by his father’s condescension. DENETHOR steps toward him for the kill.
DENETHOR
Always you cast a poor reflection on me.
FARAMIR
That is not my intent.
BOROMIR
impatient
You give him no credit, and yet he tries do to your will.
ANGLE ON: BOROMIR storms away. DENETHOR leaves FARAMIR and follows him.
BOROMIR
He loves you, Father.
DENETHOR
Do not trouble me with Faramir. I know his uses, and they are few.
ANGLE ON: BOROMIR turns away, unbelieving a father would say such things of a son.
DENETHOR
We have more urgent things to speak of. Elrond of Rivendell has called a meeting. He will not say why, but I have guessed its purpose. It is rumored that the weapon of the enemy has been found.
CLOSE ON: BOROMIR’S mouth DROPS in SURPRISE and DISBELIEF.
BOROMIR
delicately
The One Ring. Isildur’s Bane.
DENETHOR
It has fallen into the hands of the Elves. Everyone will try to claim it: Men, Dwarves, wizards. We cannot let that happen. This thing must come to Gondor.
BOROMIR
Gondor.
DENETHOR
It’s dangerous, I know. Ever the Ring will seek to corrupt the hearts of lesser Men. But you, you are strong... and our need is great. It is our blood which is being spilled, our people who are dying. Sauron is biding his time. He’s massing fresh armies. He will return. And when he does, we will be powerless to stop him. You must go. Bring me back this mighty gift.
ANGLE ON: BOROMIR pulls away from DENETHOR and proceeds back out into OSGILIATH.
BOROMIR
No. My place is here with my people. Not in Rivendell
ANGLE ON: DENETHOR chases BOROMIR out.
DENETHOR
Would you deny your own father?
ANGLE ON: FARAMIR steps forward.
FARAMIR
If there is a need to go to Rivendell, send me in his stead.
ANGLE ON: DENETHOR looks at FARAMIR with a cruel sneer.
DENETHOR
You? Oh, I see. A chance for Faramir, captain of Gondor, to show his quality. I think not.
ANGLE ON: FARAMIR’S confident expression drops.
DENETHOR
I trust this mission only to your brother. The one who will not fail me.
ANGLE ON: DENETHOR turns to BOROMIR, who stands against the wall looking strangely angered and defeated.
CUT TO:
EXT. OSGILIATH - DAY
ANGLE ON: BOROMIR sits ready atop his steed, looking as he did when we first saw him ride into RIVENDELL. He glances upward.
ANGLE ON: A WHITE FLAG, EMBLAZONED with the IMAGE OF A TREE, the STANDARD OF THE STEWARD OF GONDOR flies high over OSGILIATH.
ANGLE ON: BOROMIR turns his gaze to FARAMIR, who looks up at his brother.
BOROMIR
Remember today, little brother.
ANGLE ON: FARAMIR smiles and nods. BOROMIR smiles in return and trots his horse out of OSGILIATH.
CUT TO:
INT. HENNETH ANNÛN - NIGHT
FARAMIR sits alone, staring into nothing, lost in his memories. MADRIL approaches behind him.
MADRIL
Captain Faramir!
MADRIL leans to FARAMIR’S ear.
MADRIL
whispers
We found the third one.
CUT TO:
INT. HENNETH ANNÛN - NIGHT
ANGLE ON: FRODO and SAM sleep. FRODO’S eyes slowly open as footsteps approach. He looks up at figures before him.
ANGLE ON: FARAMIR stands before him with 2 other GONDORIAN RANGERS.
FARAMIR
You must come with me. Now.
FRODO silently rises and follows them.
EXT. HENNETH ANNÛN - NIGHT
WIDE ON: The Waterfall concealing their location flows over the cliff leaving space on the sides. FARAMIR inches toward the edge.
ANGLE ON: FARAMIR gestures to FRODO.
FARAMIR
Down there.
ANGLE ON: FRODO carefully walks to the edge and looks down.
FARAMIR eyes him watchfully.
ANGLE ON: Far below, GOLLUM jumps into the pool at the base of the waterfall.
ANGLE ON: FRODO’S eyes open wide, as if caught in his lie.
FARAMIR
calmly
To enter the Forbidden Pool bears the penalty of death.
FRODO looks at FARAMIR with fear. FARAMIR gestures to the sides of the waterfall. ARCHERS stationed on both sides of the pool lean in and draw their bows. FRODO looks back to GOLLUM.
FARAMIR
They wait for my command.
ANGLE ON: Far below, GOLLUM emerges from the pool with a fish in his teeth and sits on a rock.
ANGLE ON: FARAMIR still calmly watches FRODO’S reactions.
FARAMIR
Shall I shoot?
ANGLE ON: FRODO is rapt with indecision.
ANGLE ON: GOLLUM sits on the rock with his fish, completely oblivious that his life may be in mortal danger.
ANGLE ON: FARAMIR gives a signal to the ARCHERS. They raise their bows.
ANGLE ON: FRODO continues watching GOLLUM, indecision etched across his face.
ANGLE ON: GOLLUM attempts to eat the fish, but it wriggles about in his grasp. He regains control of the fish and whacks it repeatedly on the rock.
ANGLE ON: FARAMIR raises his hand to give the signal to fire.
FRODO
Wait!
FARAMIR stops. He continues looking at FRODO expectantly.
FRODO
with difficulty
This creature is bound to me. And I to him.
FARAMIR lowers his hand and responds, knowing GOLLUM is connected to FRODO.
FRODO
He is our guide.
desperately
Please, let me go down to him.
FARAMIR nods. FRODO runs off.
EXT. THE FORBIDDEN POOL - NIGHT
GOLLUM tears at the fish. FRODO appears from behind him.
FRODO
Sméagol!
GOLLUM continues eating, not responding to FRODO’S call.
FRODO
Master is here.
ANGLE ON: GOLLUM turns to FRODO, hesitantly.
FRODO
Come, Sméagol. Trust master. Come!
GOLLUM doesn’t move. He looks at FRODO distrustfully.
GOLLUM
We must go now?
FRODO
Sméagol, you must trust master. Follow me, come on. Come.
GOLLUM finally responds to FRODO. He puts the fish between his teeth and follows warily after FRODO.
FRODO
Come Sméagol. Nice Sméagol. That’s it. Come on.
ANGLE ON: FRODO stops. GOLLUM’S eyes dart around, fearfully.
SUDDENLY! A GONDORIAN RANGER grabs GOLLUM by the neck, lifting him off the ground. Instantly, several others descend on him, quickly overpowering him. GOLLUM wails in anguish.
FRODO
Don’t hurt him! Sméagol don’t struggle! Sméagol listen to me!
GOLLUM
Master!
A BLACK CLOTH is draped over GOLLUM’S head. The RANGERS pack him back into HENNETH ANNÛN. FRODO looks up to FARAMIR, speechless.
INT. HENNETH ANNÛN - NIGHT
CLOSE ON: GOLLUM is slung against a wall of the cave. He wails in agony.
ANGLES ON: FARAMIR’S MEN throw GOLLUM to the ground, beating and kicking him. GOLLUM is helpless against their strength.
ANGLE ON: FARAMIR watches out into the night. Finally, he turns to them.
FARAMIR
That’s enough.
ANGLE ON: The MEN throw GOLLUM to the ground. He scrambles into a corner. FARAMIR approaches him.
FARAMIR
Where are you leading them?
ANGLE ON: GOLLUM cowers away from him, whimpering.
FARAMIR
Answer me!
GOLLUM continues sobbing. Suddenly, his hand starts stroking his shoulder, comfortingly.
GOLLUM
Sméagol. Why does it cry, Sméagol?
ANGLE ON: FARAMIR looks upon GOLLUM, confused.
SMÉAGOL
sobbing
Cruel Men hurts us. Master tricksed us.
GOLLUM
Of course he did.
SMÉAGOL sobs again.
GOLLUM
I told you he was tricksy. I told you he was false.
SMÉAGOL
sobbing
Master is our friend, our friend.
GOLLUM
Master betrayed us.
SMÉAGOL
No. Not its business. Leave us alone!
GOLLUM hits his fist against the wall.
GOLLUM
Filthy little Hobbitses. They stole it from us!
SMÉAGOL
whimpers
No, No.
ANGLE ON: FARAMIR, suddenly interested.
FARAMIR
What did they steal?
ANGLE ON: GOLLUM turns to FARAMIR with a fearsome expression.
GOLLUM
My Precious!
He bares his teeth and growls.
CUT TO:
INT. HENNETH ANNÛN - NIGHT
ANGLE ON: SAM and FRODO sit alone in a storage area.
SAM
whispers
We have to get out of here. You go. Go, now.
ANGLE ON: FRODO looks to SAM, warily. SAM crawls over to him.
SAM
whispers
You can do it. Use the Ring, Mr. Frodo. Just this once. Put it on. Disappear.
FRODO shakes his head.
FRODO
with difficulty
I can’t. You were right, Sam. You tried to tell me but I’m sorry. The Ring’s taking me, Sam.
fearfully
If I put it on, he’ll find me. He’ll see.
SAM
Mr. Frodo --
SAM suddenly looks up.
ANGLE ON: FARAMIR enters and draws his sword. The HOBBITS jump up and stand before him.
FARAMIR
So this is the answer to all the riddles, here in the Wild I have you. Two halflings and a host of Men at my call.
FARAMIR backs FRODO up against a wall, his sword at FRODO’S neck.
FARAMIR
The Ring of Power within my grasp.
CLOSE ON: FARAMIR lifts the RING from FRODO'S tunic with the tip of his sword.
ANGLE ON: FRODO looks at FARAMIR with fear.
FARAMIR
A chance for Faramir, captain of Gondor, to show his quality.
CLOSE ON: The RING remains on FRODO’S chest at the tip of FARAMIR’S sword.
ON THE SOUNDTRACK: The HUM of the RING grows louder.
ANGLE ON: FRODO reacts to the RING’S call to FARAMIR.
SUDDENLY! FRODO breaks from his trance and throws FARAMIR’S sword from him.
FRODO
No!!
FRODO runs into a corner and cowers there with the RING.
ANGLE ON: FARAMIR watches FRODO’S reaction with surprise. SAM reels on FARAMIR.
SAM
angrily
Stop it! Leave him alone! Don’t you understand? He’s got to destroy it! That’s where we’re going into Mordor to the mountain of fire.
ANGLE ON: FARAMIR, unmoving, continues to stare at FRODO. MADRIL enters behind him, snapping him out of his trance.
MADRIL
Osgiliath is under attack. They call for reinforcements.
SAM
Please. It’s such a burden. Will you not help him?
MADRIL
Captain?
FARAMIR
to Madril
Prepare to leave.
FARAMIR turns back to SAM and FRODO, expressionless.
FARAMIR
The Ring will go to Gondor.
SAM’S face turns to fear and hopelessness.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
ARAGORN rides atop BREGO. He stops on a ridge overlooking the PLAINS.
CLOSE ON: ARAGORN looks across the PLAINS, worried.
ANGLE ON: Still far off in the distance, the massive URUK-HAI ARMY marches in files towards HELM’S DEEP. The black lines of troops stretches beyond eyesight.
ANGLE ON: ARAGORN, speechless and scared, pulls BREGO back and gallops as fast as he can handle to HELM’S DEEP.
EXT. HELM’S DEEP OVERLOOK - DAY
WIDE ON: ARAGORN and BREGO reach the hillock overlooking the wide plains before HELM’S DEEP, nestled in the mountain.
ANGLE ON: ARAGORN smiles and pats BREGO.
ARAGORN
in ELVISH
Mae carnen, Brego, mellon nîn.
Well done, Brego, my friend.
EXT. HELM’S DEEP - DAY
ANGLE ON: ARAGORN gallops up the walk into HELM’S DEEP.
EXT. HELM’S DEEP COURTYARD - DAY
ANGLES ON: ARAGORN rides past the people. They are amazed to see him alive, a soldier takes charge of BREGO. ARAGORN dismounts. GIMLI fights his way through the crowd.
GIMLI
Where is he? Where is he? Get out of the way! I’m gonna kill him!
CLOSE ON: GIMLI looks upon ARAGORN in amazement. He smiles broadly.
GIMLI
You are the luckiest, the canniest and the most reckless man I ever knew!
ANGLE ON: GIMLI embraces ARAGORN. ARAGORN accepts his friend’s affection.
ARAGORN
Gimli, where is the king?
GIMLI nods to the HALL.
INT. HELM’S DEEP HALL - DAY
As ARAGORN walks through the people, he meets LEGOLAS, who blocks his path. LEGOLAS looks at him, amused.
LEGOLAS
in ELVISH; subtitled
Le ab-dollen.
You’re late.
They smiles. LEGOLAS gives ARAGORN a once-over and frowns.
LEGOLAS
You look terrible.
ARAGORN laughs.
ANGLE ON: ÉOWYN tends to one of the people. She turns and is overjoyed to see ARAGORN returned. She moves to him, but pauses.
CLOSE ON: LEGOLAS hands ARAGORN a necklace. ARAGORN hands up his hand to reveal the EVENSTAR has been returned to him.
ANGLE ON: ÉOWYN’S smile fades.
ANGLE ON: ARAGORN looks at LEGOLAS in reverent happiness. He nods with appreciation.
ARAGORN
in ELVISH
Hannon le.
Thank you.
ANGLE ON: ÉOWYN continues watching, now torn within. She fights back tears.
INT. HELM’S DEEP HALL - DAY
ANGLE ON: THÉODEN sits on his throne with GAMLING at his side.
The door sounds and they turn to it.
ANGLE ON: ARAGORN throws open the doors an stands before them.
ANGLE ON: THÉODEN, taking in ARAGORN’S story.
THÉODEN
A great host, you say?
ARAGORN
All Isengard is emptied
THÉODEN
How many?
ARAGORN
Ten thousand strong at least.
THÉODEN turns to ARAGORN, incredulous.
THÉODEN
in disbelief
Ten thousand?
ARAGORN
grim
It is an army bred for a single purpose to destroy the world of Men.
CLOSE ON: THÉODEN attempts to fathom ARAGORN’S bombshell. He shows real fear.
CLOSE ON: ARAGORN grimly completes the bad news.
ARAGORN
They will be here by nightfall.
ANGLE ON: THÉODEN turns away slowly, considering. Finally, he walks resolutely from the hall.
THÉODEN
Let them come!
EXT. HELM’S DEEP BATTLEMENTS - DAY
ANGLE ON: THÉODEN and GAMLING walk down the stairs followed by ARAGORN, LEGOLAS, and GIMLI.
THÉODEN
to Gamling
I want every man and strong lad able to bear arms to be ready for battle by nightfall.
He dismisses GAMLING. He, ARAGORN, LEGOLAS, and GIMLI continue on to stand just outside the main gate.
WIDE ON: THÉODEN stands outside the gate on the stone pathway leading into HELM’S DEEP. He addresses his plan.
THÉODEN
We will cover the causeway and the gate from above. No army has ever breached the Deeping Wall or set foot inside the Hornburg!
GIMLI stands bored against the gate.
GIMLI
This is no rabble of mindless Orcs.
THÉODEN turns to GIMLI, almost surprised to hear from him.
GIMLI
These are Uruk-Hai. Their armor is thick and their shields broad.
THÉODEN stands tall before GIMLI.
THÉODEN
I have fought many wars, Master Dwarf. I know how to defend my own Keep.
THÉODEN walks back into the KEEP.
CLOSE ON: ARAGORN and LEGOLAS walk past GIMLI, who appears to have been put off.
EXT. HELM’S DEEP BATTLEMENTS - DAY
WIDE ON: THÉODEN leads ARAGORN, LEGOLAS, and GIMLI across the battlements of HELM’S DEEP, overlooking the expansive plains.
THÉODEN
They will break upon this fortress like water on rock. Saruman’s hordes will pillage and burn. We’ve seen it before. Crops can be resown; homes rebuilt. Within these walls, we will outlast them.
ANGLE ON: ARAGORN follows THÉODEN closely.
ARAGORN
They do not come to destroy Rohan’s crops or villages. They come to destroy its people down to the last child.
ANGLE ON: THÉODEN turns quickly to ARAGORN and draws him close.
THÉODEN
quietly; angrily
What would you have me do? Look at my Men. Their courage hangs by a thread.
ANGLE ON: ARAGORN looks away ashamed.
THÉODEN
If this is to be our end, then I would have them make such an end as to be worthy of remembrance.
THÉODEN walks away. ARAGORN pleads with THÉODEN.
ARAGORN
Send out riders, my lord. You must call for aid.
THÉODEN turns back ARAGORN, drawing close again.
THÉODEN
doubtfully
And who will come? Elves? Dwarves? We are not so lucky in our friends as you. The old alliances are dead.
ARAGORN
Gondor will answer.
THÉODEN
angrily
Gondor?! Where was Gondor when the Westfold fell? Where was Gondor when our enemies closed in around us?! Where was Gon--?
THÉODEN recollects himself. He looks into ARAGORN’S eyes.
THÉODEN
quietly
No, my Lord Aragorn, we are alone.
ANGLE ON: THÉODEN turns away again. ARAGORN looks after him, nodding. THÉODEN walks up the steps to the HALL, followed closely by GAMLING.
THÉODEN
Get the women and children into the caves.
GAMLING
We need more time to lay provisions--
THÉODEN
curt
There is no time. War is upon us.
THÉODEN and STAFF enter into the HALL. HIGH OVERHEAD, a flock of crows gathers.
EXT. FANGORN FOREST - DAY
TREEBEARD continues his walk through FANGORN. MERRY and PIPPIN rest in his branches, carried along by their fates.
TREEBEARD
The Ents have not troubled about the wars of Men and wizards for a very long time.
ANGLE ON: TREEBEARD enters an expansive clearing and stops.
TREEBEARD
But now, something is about to happen that has not happened for an age Entmoot.
MERRY
What’s that?
TREEBEARD
'Tis a gathering.
MERRY
A gathering of what?
A noise sounds from behind them.
ANGLE ON: MERRY turns to look behind TREEBEARD.
ANGLES ON: ENTS begin emerging from the forest and walking towards TREEBEARD.
OVERHEAD ANGLE ON: Many ENTS walk to the middle of the gathering where TREEBEARD awaits.
TREEBEARD
Beech. Oak. Chestnut. Ash. Good. Good. Good. Many have come.
ANGLES ON: The ENTS all stop near TREEBEARD. MERRY and PIPPIN look about in awe.
TREEBEARD
Now we must decide if the Ents will go to war.
ANGLE ON: MERRY and PIPPIN look to TREEBEARD in fear and anticipation.
EXT. HELM’S DEEP COURTYARD - DAY
ANGLES ON: In a mass organized movement, the people gather their belongings and trudge together into hiding. SOLDIERS assist the elderly and infirm in getting themselves into the caves.
ANGLE ON: ARAGORN works his way through the throng and explains the plan to LEGOLAS.
ARAGORN
We’ll place the reserves along the wall. They can support the archers from above the gate.
LEGOLAS
Aragorn, you must rest. You’re no use to us half alive.
ARAGORN pays LEGOLAS no mind. A VOICE breaks across the throngs. ARAGORN looks in its direction.
ÉOWYN (O.S.)
Aragorn! Aragorn!
ANGLE ON: ÉOWYN runs through the crowds towards him. She looks at him angrily.
ÉOWYN
I’m to be sent with the women into the caves.
ARAGORN
nodding
That is an honorable charge.
ÉOWYN
To mind the children, to find food and bedding with the men return. What renown is there in that?
ARAGORN grasps her hands.
ARAGORN
reassuring
My lady, a time may come for valor without renown. Who then will your people look to in the last defense?
ÉOWYN
pleading
Let me stand at your side.
ARAGORN
It is not in my power to command it.
ARAGORN turns away from her. She looks after him unmoved. He turns.
ÉOWYN
You do not command the others to stay! They fight beside you because they would not be parted from you.
desperately
Because they love you!
ARAGORN stands before her, looking at her silently. She averts her gaze.
ÉOWYN
I’m sorry.
She pushes past him and follows the people into the caves.
INT. HELM’S DEEP CAVES - NIGHT
ANGLE ON: WOMEN and CHILDREN comfort each other as they trudge their way into the caves. They regard their new home with fear and doubt. ÉOWYN studies her task grimly.
WIDE ON: The expansiveness of the caves holds thousands of ROHIRRIM. The caves seem to go on forever.
ANGLES ON: Tearful goodbyes from wives, mothers, young siblings and children as even old men and boys are drafted into service and taken away from their families to fight.
ANGLES ON: Swords are passed out to the miserable army.
ANGLE ON: ARAGORN examines one of the swords. He tosses it away, discouraged.
ARAGORN
Farmer, farriers, stable boys. These are no soldiers.
GIMLI
Most have seen too many winters.
LEGOLAS
Or too few.
ARAGORN nods, miserably.
ANGLES ON: The new soldiers continue to prepare.
LEGOLAS
Look at them. They’re frightened. I can see it in their eyes.
ANGLE ON: Everyone around them turns to look at LEGOLAS. He turns away, angrily.
LEGOLAS
in ELVISH; subtitled
Boe a hûn -- neled herain -- dan caer menig!
And they should be -- Three hundred -- against ten thousand!
ANGLE ON: ARAGORN looks at LEGOLAS with as much confidence as he can muster.
ARAGORN
in ELVISH; subtitled
Si beriathar hýn. Amar nâ ned Edoras.
subtitled
They have more hope of defending themselves here than at Edoras.
LEGOLAS
Aragorn, Men i ndagor. Hýn ú- ortheri. Natha daged aen!
Aragorn, we are warriors. They cannot win this fight. They are all going to die!
ARAGORN explodes at LEGOLAS.
ARAGORN
resolute
Then I shall die as one them!
Their gaze locks for a moment. ARAGORN breaks and walks away.
LEGOLAS makes to follow him. GIMLI puts a hand on his arm.
GIMLI
Let him go, lad. Let him be.
EXT. HELM’S DEEP - NIGHT
WIDE ON: SOLDIERS stand at the BATTLEMENTS. The PLAINS before the DEEP are quiet like the calm before a storm.
INT. KING’S CHAMBER - HELM’S DEEP - NIGHT
GAMLING approaches KING THÉODEN.
GAMLING
Every villager able to wield a sword has been sent to the armory.
THÉODEN stands silently - unarmed and armourless.
GAMLING
My lord?
THÉODEN
quietly
Who am I, Gamling?
GAMLING
matter-of-fact
You are our king, sire.
THÉODEN
quietly
And do you trust your king?
GAMLING stands at THÉODEN’S side with his armour, unmoving.
GAMLING
Your men, my lord, will follow you to whatever end.
Slowly, GAMLING wraps the armour around THÉODEN.
THÉODEN
quietly, to himself
To whatever end --
ANGLES ON: GAMLING attaches THÉODEN’S ARMOUR, piece by piece.
INTERCUT: Lances held high like an enormous porcupine, the URUK-HAI ARMY continues its steady march across the PLAINS OF ROHAN to HELM’S DEEP.
THÉODEN
Where is the horse and the rider? Where is the horn that was blowing?
IMAGE: A SOLDIER sharpens a sword on a whetstone, Old men collect spears on their way to fight.
THÉODEN (V.O.)
They have passed like rain on the mountains.
IMAGE: A oversized helmet is placed on the head of a boy.
THÉODEN (V.O.)
Like wind in the meadow.
IMAGE: An axe is handed to a frightened boy, who takes it with trepidation.
THÉODEN (V.O.)
The days have gone down in the west --
INTERCUT: The URUK-HAI ARMY marches ever closer.
THÉODEN (V.O.)
-- behind the hills --
IMAGE: A boy dressed in full chainmail too large for him, takes a shield and moves to fight.
THÉODEN (V.O.)
--into Shadow.
INTERCUT: The URUK-HAI ARMY closes in on HELM’S DEEP and begins to take their positions.
ANGLE ON: THÉODEN in his hall, still standing still as GAMLING adjusts his armour.
THÉODEN
How did it come to this?
WIDE ON: GAMLING stands to the side of THÉODEN in the empty room. They are ready.
EXT. FANGORN FOREST - ENTMOOT - NIGHT
HIGH WIDE AERIAL OVER the treetops to the location of the ENTMOOT. The ENTS move and groan.
ANGLE ON: PIPPIN rests against a root. MERRY paces impatiently.
MERRY
It’s been going for hours.
PIPPIN stands and walks over to him.
PIPPIN
They must have decided something by now.
TREEBEARD turns to them and shakes his head.
TREEBEARD
Decided? No.
Slowly, TREEBEARD turns to the HOBBITS.
TREEBEARD
We only just finished saying, good morning.
TREEBEARD turns back to the ENTMOOT.
ANGLE ON: MERRY looks on in frustration.
MERRY
But it’s nighttime already. You can’t take forever.
ANGLE ON: TREEBEARD slowly turns to MERRY again.
TREEBEARD
Don’t be hasty.
MERRY
We’re running out of time!
TREEBEARD seems to ignore him and turns back to the ENTMOOT.
EXT. HELM’S DEEP BATTLEMENTS - NIGHT
SOLDIERS move to and fro preparing HELM’S DEEP for the imminent attack.
ANGLE ON: ARAGORN sits on the steps on the HALL, pondering the inevitable. He glances across the steps.
ANGLE ON: A boy stands at the edge of the steps, nervously holding a sword. He looks at ARAGORN briefly and averts his gaze.
ARAGORN
Give me your sword.
ANGLE ON: The boy whips around, looking at ARAGORN. Slowly, he walks over to ARAGORN and hands over his sword. ARAGORN takes it.
ARAGORN
What is your name?
HALETH
Haleth, son of Háma, my lord.
ARAGORN reacts to the name.
HALETH
The Men are saying that we will not live out the night. They say that it is hopeless --
Wordlessly, ARAGORN stands and eyeballs the sword. He gives it a few swings and holds it before him. He looks at HALETH.
ARAGORN
This is a good sword.
ARAGORN hands the sword back to HALETH, who takes it gingerly.
ARAGORN
Haleth, son of Háma --
ARAGORN leans down to him.
ARAGORN
-- there is always hope.
CUT TO:
INT. ARMORY - HELM’S DEEP - NIGHT
SERIES OF IMAGES: ARAGORN quickly dons his CHAIN MAIL, LEATHER VEST, and ELVEN DAGGER.
ANGLE ON: SOMEONE hands ARAGORN his SWORD. ARAGORN looks up. LEGOLAS stands before ARAGORN, ARAGORN’S sword in hand. ARAGORN takes it and nods in thanks.
LEGOLAS
We have trusted you this far. You have not led us astray. Forgive me. I was wrong to despair.
ARAGORN shakes his head.
ARAGORN
in ELVISH; subtitled
Ú-moe edhored, Legolas.
There is nothing to forgive, Legolas.
They smile at each other, their friendship renewed.
ANGLE ON: GIMLI wrestles with a shirt of CHAIN MAIL.
GIMLI
We had time, I’d get this adjusted.
He gets the shirt on, and drops the bundle to the floor. It lands in a heap.
ANGLE ON: ARAGORN and LEGOLAS smile. GIMLI is unphased.
GIMLI
It’s a little tight across the chest.
ANGLE ON: ARAGORN and LEGOLAS nod in feigned agreement.
ON THE SOUNDTRACK: A HORN sounds from outside.
ANGLE ON: LEGOLAS turns in curiosity.
LEGOLAS
That is no Orc horn.
ANGLE ON: LEGOLAS and ARAGORN run out of the ARMORY.
EXT. HELM’S DEEP BATTLEMENTS - NIGHT
The GUARDS look over the edge of the Battlements.
GUARD 1
to GUARD 2
Send for the king.
GUARD 2 nods and runs off.
GUARD 1
Open the gate!
The order passes down the WALL.
ANGLE ON: An army of LOTHLÓRIEN ELVEN ARCHERS march up the Causeway into the HORNBURG, the SOLDIERS look upon them in wonder and excitement. THÉODEN walks down the steps of the HALL. His mouth drops open in surprise.
ANGLE ON: HALDIR leads the ELVES to THÉODEN. He bows with respect.
THÉODEN
How is this possible?
HALDIR
I bring word from Elrond of Rivendell. An alliance once existed between Elves and Men. Long ago we fought and died together.
ANGLE ON: ARAGORN, LEGOLAS, and GIMLI appear at the head of the stairs. HALDIR looks up to them and smiles.
HALDIR
We come to honor that allegiance.
ANGLE ON: ARAGORN, LEGOLAS, and GIMLI descend the steps to greet HALDIR.
ARAGORN
in ELVISH
Mae govannen, Haldir.
Welcome, Haldir
HALDIR extends in hand in the traditional ELVISH welcome.
ARAGORN begins to, but then grabs HALDIR in a huge embrace.
HALDIR is momentarily stunned, but hugs back lightly.
ARAGORN
You are most welcome.
LEGOLAS and HALDIR clasp each other on the shoulder in greeting.
ANGLE ON: The ARMY OF ELVES performs a LEFT FACE and stands before THÉODEN for his review. HALDIR bows before him.
HALDIR
We are proud to fight alongside Men once more.
EXT. HELM’S DEEP BATTLEMENTS - NIGHT
WIDE ON: The MEN and ELVES stand ready and watchful on the BATTLEMENTS of HELM’S DEEP. Every inch of space overlooking the sides of the wall is covered.
WIDE ON: ACROSS THE PLAINS BEFORE HELM’S DEEP, AN ENORMOUS ARMY, LIT BY TORCHES, APPROACHES THE HEAVILY MANNED BATTLEMENTS.
ANGLE ON: LEGOLAS watches before a COMPLEMENT of ARCHERS. The top of a HELMET is just visible over the edge of the wall.
GIMLI
You could have picked a better spot.
LEGOLAS smirks. ARAGORN approaches and stands beside them.
GIMLI
Well lad, whatever luck you live by, let’s hope it lasts the night.
LIGHTNING FLASHES. THUNDER ROLLS.
WIDE ON: As the LIGHTNING illuminates the night, it reveal the sheer size of the sea of approaching URUK-HAI.
ANGLE ON: LEGOLAS’ eyes grow wide at the very sight.
LEGOLAS
Your friends are with you, Aragorn.
GIMLI
Let’s hope they last the night.
ON THE SOUNDTRACK: The steady approach of the URUK-HAI grows louder.
ANGLE ON: THÉODEN stands ready with his men. LIGHTNING peels across the sky accompanied by more THUNDER. THÉODEN looks up as it begins to rain.
WIDE ON: THE MEN ON THE BATTLEMENTS ARE UNMOVED BY THE SUDDEN DOWNPOUR.
ANGLES ON: THE SEA OF SPEAR GROWS EVER CLOSER.
AN ORC COMMANDER stands atop a rock, urging the sea of URUK-HAI onward.
WIDE ON: The URUK-HAI move ever closer to the WALL of HELM’S DEEP.
ANGLE ON: ARAGORN moves through the ranks of the ELVEN ARCHERS.
ARAGORN
in ELVISH; subtitled
A Eruchîn, ú-dano i faelas a hyn -- an uben tanatha le faelas!
Show them no mercy -- for you shall receive none!
ANGLE ON: The URUK-HAI COMMANDER roars at his troops. They stop their march.
WIDE ON: The two armies stand still opposite each other, each waiting for the other.
ANGLE ON: ARAGORN moves to the edge of the BATTLEMENT.
ANGLE ON: The URUK-HAI stand impatiently, waiting for their orders.
ANGLE ON: GIMLI jumps and strains to see.
GIMLI
What’s happening out there?
LEGOLAS
Shall I describe it to you?
He looks at GIMLI with a grin.
LEGOLAS
Or would you like me to find you a box?
GIMLI laughs.
WIDE ON: THE URUK-HAI COMMANDER roars. The ENTIRE URUK-HAI ARMY begins POUNDS their spears on the ground.
ANGLES ON: The MEN and ELVES draw their swords and ready their arrows.
ANGLE ON: ALDOR, an old man standing ready with his bow, loses his grip, the arrows sails to the front line of URUK-HAI and hits its mark.
ARAGORN
in ELVISH
Dartho!
Hold!
ANGLE ON: The URUK-HAI groans and collapses to the ground, dead, the COMMANDER roars and thrusts his sword forward, the URUK-HAI roar in response and running towards the BATTLEMENTS.
ANGLE ON: THÉODEN regards the scene grimly.
THÉODEN
So it begins.
WIDE ON: The front line of URUK-HAI rush toward the WALL.
ANGLE ON: ARAGORN shouts orders to the ARCHERS.
ARAGORN
in ELVISH; subtitled
Tangado halad!
Prepare to fire!
ANGLES ON: As one, the ARCHERS nock their arrows. And stand ready to fire.
ANGLE ON: LEGOLAS speaks to HALDIR.
LEGOLAS
in ELVISH; subtitled
Faeg i-varv dîn na lanc a nu ranc.
Their armor is weak at the neck and underneath the arms.
ANGLE ON: ARAGORN brings his arm down.
ARAGORN
in ELVISH; subtitled
Leithio i philinn!
Release Arrows!
ANGLES ON: The ARCHERS release their arrows and they find their marks. With every URUK-HAI that falls others replace him.
ANGLE ON: GIMLI yells to LEGOLAS.
GIMLI
Did they hit anything?
ANGLE ON: THÉODEN calmly speak to GAMLING.
THÉODEN
Give them a volley.
GAMLING
Fire!
ANGLES ON: The order is passed to the Men, and the arrows fly.
Many more URUK-HAI are felled but the advance continues.
ANGLE ON: GIMLI impatiently awaits his own opportunity to participate, jumping at the battlements, wishing he could see.
GIMLI
Send them to me! Come on!
WIDE ON: THE URUK-HAI continue advancing on HELM’S DEEP. VOLLEY after VOLLEY of arrows are launched into the fray felling the front line over and over, but the advance cannot be halted --
ANGLE ON: URUK-HAI launch arrows from crossbows into the ALLIANCE. ELVES and MEN fall to their doom among the approaching throng, the URUK-HAI produce ladders and mount them against the WALL.
ANGLE ON: ARAGORN looks down to this new peril.
ARAGORN
in ELVISH; subtitled
Pendraid!
Ladders!
ANGLE ON: GIMLI jumps with glee.
GIMLI
Good!
ANGLE ON: Ladders with URUK-HAI riders are raised against the WALL.
ARAGORN
Swords! Swords!
ANGLE ON: The ELVES draw their swords and prepare for close combat.
ANGLE ON: The first URUK-HAI comes over the wall and GIMLI is the first to make contact.
QUICK SERIES OF CUTS: The URUK-HAI begin pouring over the wall, the MEN and ELVES battle against them.
ANGLE ON: GIMLI and LEGOLAS take stock of each other.
GIMLI
holding up 2 fingers
Legolas! Two already!
LEGOLAS
I’m on seventeen!
GIMLI
outraged
I’ll have no pointy-ear outscoring me!
GIMLI quickly turns and fells another URUK-HAI climbing over the wall.
LEGOLAS fires more arrows at the invaders.
LEGOLAS
to GIMLI
Nineteen!
QUICK SERIES OF CUTS: The battle rages on more and more siege ladders are raised against HELM’S DEEP more and more URUK-HAI flood in.
EXT. ENT MOOT - NIGHT
ANGLES ON: TREEBEARD turns from the ENTS. PIPPIN paces, he looks up and gestures to MERRY.
PIPPIN
Merry!
MERRY responds and they meet up with TREEBEARD.
TREEBEARD
We have just agreed.
ANGLES ON: MERRY and PIPPIN wait with rapt anticipation. TREEBEARD bows his head and closes his eyes. MERRY tilts his head in query.
MERRY
Yes?
TREEBEARD shakes himself and looks at the HOBBITS.
TREEBEARD
I have told your names to the Entmoot and we have agreed, you are not Orcs.
TREEBEARD gives them a smile. PIPPIN and MERRY stand profoundly still. MERRY appears confused. PIPPIN nods.
PIPPIN
Well, that’s good news.
MERRY
impatiently
And what about Saruman? Have you come to a decision about him?
ANGLE ON: TREEBEARD comes back up to his full height and waves his hand.
TREEBEARD
Now don’t be hasty, Master Meriadoc.
MERRY
angrily
Hasty? Our friends are out there. They need our help. They cannot fight this war on their own.
TREEBEARD
slowly
War? Yes. It affects us all. Tree, root and twig. But you must understand, young Hobbit, it takes a long time to say anything in Old Entish and we never say anything unless it is worth taking a long time to say.
ANGLE ON: MERRY and PIPPIN look at each other with frustrated impatience.
CUT TO:
EXT. HELM’S DEEP BATTLEMENTS - NIGHT
WIDE ON: The MASSIVE URUK-HAI ARMY continues advancing toward the HELM’S DEEP BATTLEMENTS.
PAN ACROSS THE FIELD OF BATTLE TO: A large team of URUK-HAI shield themselves like a turtle and make their way up the CAUSEWAY to the MAIN GATE. ARROWS bounce off the shields.
ANGLE ON: ARAGORN notices the peril on the CAUSEWAY. He runs through the ARCHERS shouting orders.
ARAGORN
in ELVISH
Na fennas!
Causeway!
THE ELVISH ARCHERS turn and fire at the URUK-HAI on the CAUSEWAY.
ANGLE ON: The URUK-HAI on the sides of the turtle formation fall but the TURTLE keeps advancing.
ANGLE ON: THÉODEN observes the BATTLE.
THÉODEN
Is this it? Is this all you can conjure, Saruman?
ANGLE ON: Two URUK-HAI carry a SPIKED BALL towards the SLUICE GATE of HELM’S DEEP, they place it within, two more follow and place a second SPIKED BALL within, the URUK-HAI make a clear path for another URUK-HAI, armed with a sparkling torch, to make a clear run for the SLUICE GATE.
ANGLE ON: ARAGORN sees the approaching URUK-HAI. He yells to LEGOLAS.
ARAGORN
in ELVISH; subtitled
Togo hon dad, Legolas!
Bring him down, Legolas!
ANGLE ON: LEGOLAS fires several arrows at the URUK-HAI, but he continues to run.
ANGLE ON: ARAGORN desperately points to the BERSERKER.
ARAGORN
in ELVISH; subtitled
Dago hon! Dago hon!
Kill him! Kill him!
The URUK reaches the SPIKED BALLS.
A MASSIVE EXPLOSION DESTROYS AN ENTIRE SECTION OF THE WALL THROWING MEN AND URUKS IN ITS WAKE!
ANGLE ON: THÉODEN turns to the explosion, for the first time feeling the fear of the battle.
ARAGORN, LEGOLAS, and GIMLI are all thrown to the ground from the explosion. Massive chunks of the wall come down and flatten portions of the URUK-HAI ARMY.
ANGLE ON: Water flows out of the breach. URUK-HAI flow in.
ANGLE ON: THÉODEN turns from the explosion to the TURTLE on the CAUSEWAY.
HIGH ANGLE ON: The TURTLE, URUKS still falling from the sides, has slowly made its way to the gate.
ANGLE ON: The front shields of the TURTLE peel back to reveal a battering ram buried within.
THÉODEN
calling out
Brace the Gate!
INT. HELM’S DEEP MAIN GATE - NIGHT
MEN force themselves against the GATE, trying to hold it.
INTERCUT WITH: The URUK-HAI pound the RAM into the GATE.
The force of the hit throws the MEN back away from the gate.
They quickly recover.
EXT. HELM’S DEEP GATE - NIGHT
ANGLE ON: ABOVE THE GATE, SOLDIERS throw down stones and spears in an attempt to disrupt the RAM.
EXT. HELM’S DEEP BATTLEMENTS - NIGHT
HIGH OVERHEAD ANGLE ON: The URUK-HAI rush throw the destroyed section of the DEEPING WALL.
ANGLE ON: ARAGORN slowly comes to his feet. GIMLI, still atop the wall, sees ARAGORN’S peril.
GIMLI
Aragorn!
GIMLI jumps off the wall and lands in the sea of URUK-HAI. He fights them off, but is soon overpowered.
ARAGORN
Gimli!
ARAGORN commands the ELVES behind him.
ARAGORN
in ELVISH
Hado i philinn!
Hurl the arrows!
ANGLES ON: The VOLLEY OF ARROWS fells many URUK-HAI, but many more follow in their wake.
ANGLE ON: ARAGORN holds his sword at the ready.
ARAGORN
in ELVISH; subtitled
Herio!
Charge!
The ELVES charge the approaching URUK-HAI. When contact is made, ground is neither lost nor gained. ARAGORN and the ELVES valiantly battle the URUK-HAI with much success.
ANGLE ON: ARAGORN reaches below the surface of the water and pulls GIMLI to the surface. He coughs and sputters. ARAGORN drags him to temporary safety.
WIDE ON: The ELVES and URUK-HAI continue their battle at the gap in the DEEPING WALL.
CUT TO:
EXT. ENT MOOT - NIGHT
TREEBEARD stands over the HOBBITS, the other ENTS behind him.
TREEBEARD
The Ents cannot hold back this storm. We must weather such things as we have always done.
MERRY
angrily
How can that be your decision?!
TREEBEARD
This is not our war.
MERRY
But you're part of this world!
ANGLE ON: TREEBEARD stands up uncomfortably. MERRY looks to the other ENTS.
MERRY
Aren’t you?!
ANGLE ON: The ENTS looks at each other, surprised at this outburst.
MERRY
desperately
You must help. Please. You must do something.
TREEBEARD
simply
You are young and brave, Master Merry. But your part in this tale is over. Go back to your home.
CLOSE ON: MERRY stands speechless, angry, frustrated.
MERRY is putting on his jacket. PIPPIN approaches him slowly.
PIPPIN
Maybe Treebeard’s right. We don’t belong here, Merry. It's too big for us. What can we do in the end? We've got the Shire. Maybe we should go home.
MERRY
distantly
The fires of Isengard will spread And the woods of Tuckborough and Buckland will burn. And --
MERRY turns to PIPPIN.
MERRY
angrily
-- and all that was once green and good in this world will be gone.
MERRY looks into PIPPIN’S eyes intently.
MERRY
There won't be a Shire, Pippin.
CLOSE ON: PIPPIN stands silently, taking this in.
EXT. HELM’S DEEP BATTLEMENTS - NIGHT
HIGH WIDE AERIAL: The endless sea of URUK-HAI swarm into HELM’S DEEP. The DEFENDERS of the KEEP work fiercely to hold them back.
ANGLE ON: THÉODEN stands at his tower, intensely observing every facet of the battle.
SERIES OF CUTS: ARAGORN, LEGOLAS, and GIMLI fight tirelessly against the onslaught.
ANGLE ON: ARAGORN looks up as a VOICE cuts across the battle.
THÉODEN (O.S.)
Aragorn! Fall back to the Keep! Get your Men out of there!
WIDE PAN FROM THE UPPER BATTLEMENTS TO THE FIELD OF BATTLE.
ANGLE ON: ARAGORN signals the fighters.
ARAGORN
in ELVISH; subtitled
Na Barad! Na Barad!
To the Keep! Pull back to the Keep!
ARAGORN looks around for anyone who may not have heard. He glances up to the WALL.
ARAGORN
Haldir!
ANGLE ON: HALDIR turns to him.
ARAGORN
in ELVISH; subtitled
Na barad!
To the Keep!
HALDIR nods and starts fighting his way down.
ANGLE ON: LEGOLAS and another ELF carry GIMLI off the FIELD, kicking and struggling.
GIMLI
protesting
What are you doing? What are you stopping for?
ANGLE ON: HALDIR gives orders to his retreating detachment.
HALDIR
in ELVISH
Na barad!
He turns and starts to retreat, but he is stopped by an URUK-HAI who leaps in front of him. He makes short work of this one, but another comes from behind him and stabs him in the arm.
SLOW MOTION: HALDIR staggers, he kills the offending URUK, he looks down to his arm in total disbelief, he whirls around, lost to his purpose --
BEHIND HIM, AN URUK EMERGES AND BRINGS HIS SWORD DOWN ON HALDIR’S HEAD.
HALDIR freezes with a shocked look on his face.
SLOW MOTION ANGLE ON: ARAGORN, on the ground, sees HALDIR FALLING. HALDIR falls to his knees, his world spinning around him. ARAGORN fights his way up the steps. HALDIR looks about him, the dead bodies of his kinsmen lie all around him, he falls to the ground just as ARAGORN catches him, his head falls into ARAGORN’S arm, eyes lifeless and unseeing.
ANGLE ON: ARAGORN gives HALDIR a silent farewell, seeing a group of approaching URUK-HAI, like a madman, ARAGORN leaps aboard the nearest ladder and rides it into the sea of URUK-HAI below.
EXT. HELM’S DEEP GATE - NIGHT
The GATE smashes under the onslaught of the BATTERING RAM. A SOLDIER is impaled on the RAM’S JAGGED END.
ANGLES ON: The SOLDIERS and URUKS exchange arrow fire.
ANGLE ON: THÉODEN draws his sword.
THÉODEN
to his COMMANDERS
To the gate. Draw your swords!
They depart for battle.
ANGLE ON: ARAGORN fights against the URUK-HAI on the ground and makes his way up a steep outside stairway into the KEEP.
INT. HELM’S DEEP GATE - NIGHT
THÉODEN and his SOLDIERS work desperately to hold the gate against impossible odds.
An URUK starts to get the better of GAMLING, but THÉODEN rescues him. Seizing this advantage, another URUK stabs THÉODEN in the shoulder with his lance. Wounded but undeterred, THÉODEN returns the blow, but more lethally.
He falls into GAMLING’S arms. GAMLING quickly pulls him out of the area.
GAMLING
Make way for the king!
The fighting continues at the GATE.
ANGLE ON: GAMLING carries THÉODEN away from the battle and rest him against the wall.
GAMLING
We cannot hold much longer.
ANGLE ON: The GATE begins to give way under the strength of the URUK-HAI. The MEN work fiercely to hold it.
ANGLE ON: THÉODEN looks momentarily discouraged until ARAGORN runs through and begins hacking at the URUK-HAI.
THÉODEN
yelling
Hold them!
ARAGORN
How long do you need?
THÉODEN takes his sword in hand.
THÉODEN
As long as you can give me.
ARAGORN nods and looks around.
ARAGORN
Gimli!
ARAGORN slips out a side exit as the MEN rush the GATE to hold it.
EXT. HELM’S DEEP GATE - NIGHT
More URUKS run at the GATE.
PAN OVER TO: A DOOR OPENS on the side of a tower near the gate.
ARAGORN peeps out. Seeing no immediate danger, he and GIMLI creep out and sidle along the outside of the wall.
CLOSE ON: ARAGORN carefully peeps around the side of the tower.
POV: A hoard of URUK-HAI crowd the GATE, trying to force their way in.
ANGLE ON: ARAGORN sidles back up against the wall. GIMLI looks up at him.
GIMLI
desperately
Come on. We can take them.
ANGLE ON: ARAGORN looks at GIMLI sidelong with a smirk.
ARAGORN
It’s a long way.
ANGLE ON: GIMLI takes a peek, he steps back and looks into the distance, embarrassed.
GIMLI
mumbles
Toss me.
ARAGORN
What?
GIMLI
quickly
I cannot jump the distance. You’ll have to toss me!
ARAGORN nods slowly, he turns to lift GIMLI.
GIMLI
Oh, don’t tell the Elf.
ARAGORN
Not a word.
ANGLE ON: with one swift move, ARAGORN tosses GIMLI across the span and into the throng of URUK-HAI, taking them by complete surprise.
ARAGORN jumps the distance himself and fight alongside GIMLI.
HIGH WIDE: ARAGORN and GIMLI successfully delay the advance of the never-ending supply of URUK-HAI, hacking them off the edges of the narrow causeway as quick as they can advance.
INT. HELM’S DEEP GATE - NIGHT
ANGLE ON: THÉODEN observes ARAGORN and GIMLI. He turns back to his MEN.
THÉODEN
Shore up the door!
ANGLE ON: A group of SOLDIERS carry beams to dam up the door to the ocean outside.
EXT. HELM’S DEEP BATTLEMENTS - NIGHT
The URUK-HAI load a grappling hook onto an enormous crossbow.
INTERCUT WITH: The MEN feverishly work to shore up the HELM’S DEEP GATE.
INTERCUT WITH: ARAGORN and GIMLI continue their efforts on the CAUSEWAY outside the GATE.
The URUK-HAI ready the crossbow, and fire it up to the UPPER BATTLEMENTS.
ANGLE ON: The SOLDIERS fall back from its landing. It grips onto the inside of the WALL.
ANGLE ON: The URUKS fire another.
ANGLE ON: The HOOK grapples to the inside of the WALL. The SOLDIERS try in vain to dislodge it.
ANGLE ON: The URUK-HAI use the hooks as pulleys to pull great SIEGE LADDERS laden with URUK-HAI to the UPPER BATTLEMENTS. The LADDERS hook themselves on contact, and the URUK-HAI make to continue the fight.
INT. HELM’S DEEP GATE - NIGHT
The SOLDIERS successfully reinforce the GATE.
EXT. HELM’S DEEP GATE - NIGHT
ARAGORN and GIMLI continue holding off the onslaught on the CAUSEWAY.
ANGLE ON: THÉODEN’S face appears in the crack in the gate.
THÉODEN
Gimli! Aragorn! Get out of there!
A final board is put in place to seal off the crack.
ANGLE ON: LEGOLAS calls to them from the top of the battlements.
LEGOLAS
ARAGORN!
LEGOLAS drops a rope over the edge.
ANGLE ON: ARAGORN grabs the rope in one hand and GIMLI in the other. LEGOLAS pulls them to safety, the URUK-HAI rush past them and attack the GATE once more.
SERIES OF QUICK CUTS: LEGOLAS pulls ARAGORN and GIMLI up the wall, more GRAPPLING HOOKS are fired, more LADEN LADDERS are raised, the URUKS storm over the WALL, the SOLDIERS fiercely battle against them.
ANGLE ON: ARAGORN and GIMLI reach the top of the WALL. LEGOLAS and some SOLDIERS pull them to safety.
INT. HELM’S DEEP GATE - NIGHT
THÉODEN moves away from the GATE with GAMLING.
THÉODEN
Pull everybody back! Pull them back!
GAMLING
Pull back! Pull back!
EXT. HELM’S DEEP BATTLEMENTS - NIGHT
HIGH WIDE ON: A hopeless stream of URUK-HAI stream up the LADDERS, press against the outer wall, charge the main gate, the scant supply of SOLDIERS fire arrows fruitlessly against them.
THE URUK-HAI BREAK THROUGH THE GATE AND POUR IN.
ARAGORN
They have broken through! The castle is breached! Retreat!
PAN UP TO: As one, the SOLDIERS on the BATTLEMENTS break and run into the KEEP. The URUK-HAI stream up the steps to prevent the retreat.
CUT TO:
EXT. FANGORN FOREST - NIGHT
TREEBEARD walks lazily through the forest, carrying MERRY and PIPPIN in his branches.
TREEBEARD
I will leave you at the western borders of the forest. You can make your way north to your homeland from there.
MERRY and PIPPIN do not respond. They look dejected.
SUDDENLY, PIPPIN looks up with a gleam in his eye.
PIPPIN
Wait! Stop! Stop!
ANGLE ON: MERRY looks over to PIPPIN, curious. TREEBEARD stops.
PIPPIN
Turn around. Turn around. Take us south!
TREEBEARD looks to him, perturbed.
TREEBEARD
South? But that will lead you past Isengard.
PIPPIN smiles.
PIPPIN
Yes. Exactly. If we go south we can slip past Saruman unnoticed. The closer we are to danger, the farther we are from harm. It’s the last thing he’ll expect.
MERRY looks away, confused. TREEBEARD ponders this for a moment.
TREEBEARD
That doesn’t make sense to me. But then, you are very small. Perhaps you’re right.
ANGLE ON: PIPPIN breathes a sigh of relief and smiles.
TREEBEARD
South it is then. Hold on, little Shirelings.
ANGLE ON: TREEBEARD begins his slow plod through the forest again. MERRY looks over the PIPPIN, incredulous.
MERRY
Are you mad? We’ll be caught.
PIPPIN
No we won’t. Not this time.
EXT. ITHILIEN - DAY
FARAMIR and COMPANY, with FRODO and SAM in tow, come to the top of a ridge and stop.
WIDE ON: OSGILIATH, positioned astride the ANDUIN RIVER, stands before them, smoke plumes from its buildings. And in the far distance-nestled in the mountains-is MINAS TIRITH.
MADRIL
Osgiliath burns!
RANGER
Mordor has come.
The RANGERS walk down to OSGILIATH.
ANGLE ON: FRODO stands before FARAMIR, observing.
FRODO
grimly
The Ring will not save Gondor. It has only the power to destroy. Please, let me go.
ANGLE ON: FARAMIR hesitates, lost in indecision then he gestures to his men.
FARAMIR
Hurry.
FRODO and SAM are pushed forward.
FRODO
desperately
Faramir! You must let me go!
CUT TO:
EXT. FANGORN FOREST - DAY
TREEBEARD plods along with MERRY and PIPPIN riding in his branches.
TREEBEARD
And a little family of field mice that climb up sometimes, and they tickle me awfully. They’re always trying to get somewhere where they --
ANGLE ON: TREEBEARD’S expression drops, his eyes grow wide, he stops in speechless horror.
WIDE ON: The edge of the FOREST is utterly destroyed, burnt stumps and mangled bits of trees are all that remains.
TREEBEARD
choked
Many of these trees were my friends. Creatures I had known from nut and acorn.
ANGLE ON: PIPPIN looks down at TREEBEARD with pity.
PIPPIN
I’m sorry, Treebeard.
TREEBEARD
They had voices of their own.
WIDE ON: TREEBEARD looks to the distant ISENGARD, now treeless as well with smoking caverns.
TREEBEARD
Saruman.
ANGLE ON: TREEBEARD shakes in fury.
TREEBEARD
angrily
A wizard should know better!
WIDE ON: TREEBEARD stands amidst the desolation and emits a furious roar.
TREEBEARD
There is no curse in Elvish, Entish or the tongues of Men for this treachery.
A SOUND emits from the FOREST behind them.
ANGLE ON: PIPPIN whips around, his eyes grow wide.
PIPPIN
Look! The trees! They’re moving!
WIDE ON: The borders of FANGORN stir, howls fall across the landscape.
ANGLE ON: MERRY looks to TREEBEARD.
MERRY
Where are they going?
TREEBEARD
They have business with the Orcs.
ANGLE ON: TREEBEARD’S EYE NARROW IN FURY.
TREEBEARD
My business is with Isengard tonight with rock and stone.
MORE HOWLS SOUND.
WIDE ON: ENTS. DOZENS OF THEM, pour out of FANGORN and stand behind TREEBEARD.
MERRY
Yes!
ANGLE ON: TREEBEARD begins plodding down the slope.
TREEBEARD
Come my friends. The Ents are going to war. It is likely that we go to our doom. Last march of the Ents!
WIDE ON: The ENTS march behind TREEBEARD through the ruined portion of FANGORN down the long slope to ISENGARD.
EXT. OSGILIATH - DAY
FARAMIR and his RANGERS lead FRODO, SAM, and GOLLUM into OSGILIATH.
HIGH WIDE ON: OSGILIATH is under siege. SOLDIERS run everywhere in its defense as the RANGERS pass in.
ANGLE ON: FARAMIR and his RANGERS cut through a battle zone, ducking friendly arrows as the city is being defended. FARAMIR approaches one of his OFFICERS.
MADRIL
Faramir, Orcs have taken the eastern shore. Their numbers are too great. By nightfall we will be overrun.
ANGLE ON: FRODO seems suddenly stricken. SAM looks to him.
SAM
Frodo!
FRODO
It’s calling to him, Sam. His Eye is almost on me.
ON THE SOUNDTRACK: A SHRILL CRY drowns out SAM’S words.
SAM
Hold on, Mr. Frodo. You'll be all right.
CLOSE ON: FRODO is horrified. SAM speaks to him, but FRODO does not hear him.
FARAMIR
Take them to my father.
SAM and FRODO are hustled through the RANGERS.
FARAMIR
proudly
Tell him Faramir sends a mighty gift. A weapon that will change our fortunes in this war.
ANGLE ON: SAM breaks their grip a moment.
SAM
desperately
You want to know what happened to Boromir?
ANGLE ON: FARAMIR turns to SAM. He looks upon the little HOBBIT with intense curiosity.
SAM
You want to know why your brother died? He tried to take the Ring from Frodo! After swearing an oath to protect him, he tried to kill him! The Ring drove your brother mad!
Before FARAMIR can respond, a cry screams across the silence.
RANGER
Watch out!
LOW ANGLE ON: A large boulder smashes into a tower, crumbling it.
ANGLE ON: FRODO’S head lolls around, his eyes roll into the back of his head, he looks at the skies.
SAM
Mr. Frodo?
FRODO
They’re here.
ANGLE ON: FARAMIR looks down at FRODO in fear. FRODO foams at the mouth.
FRODO
They’ve come.
A SHRILL CRY PENETRATES THE AIR.
FARAMIR and his MEN look to the sky.
FARAMIR
Nazgûl!
Everyone looks up and cringes.
HIGH WIDE AERIAL ON: A NAZGÛL, riding atop his FELLBEAST, surveys the ruined OSGILIATH.
ANGLE ON: FRODO stares at the NAZGÛL, transfixed. FARAMIR grabs him and drags him off. SAM takes off after them
ANGLES ON: The RANGERS and SOLDIERS take cover in OSGILIATH, endeavoring to stay out of sight. GOLLUM cowers at the end of his rope.
ANGLE ON: FARAMIR deposits him within a ruined tower.
FARAMIR
Stay here. Keep out of sight.
He exits as SAM enters to accompany FRODO.
ANGLE ON: FARAMIR shouts to those on the BATTLEMENTS.
FARAMIR
yelling
Take cover!
ANGLE ON: FARAMIR ducks as A FELLBEAST soars fiendishly close to the rooftops of OSGILIATH.
EXT. HELM’S DEEP HALL - DAY
WIDE ON: BANNERS OF THE WHITE HAND fly atop the Battlements of HELM’S DEEP. The URUK-HAI are everywhere, it is completely overrun.
ANGLE ON: A band of URUK-HAI run a BATTERING RAM into the DOOR OF THE HALL.
INT. HELM’S DEEP HALL - DAY
A group of SOLDIERS work to barricade the door.
ANGLE ON: THÉODEN watches them with despair.
THÉODEN
The fortress is taken. It is over.
ANGLE ON: ARAGORN runs to THÉODEN. LEGOLAS carries more furniture to the door.
ARAGORN
You said this fortress would never fall while your Men defend it. They still defend it. They have died defending it.
ANOTHER DEAFENING CRUNCH!
INTERCUT WITH: The women and children in the GLITTERING CAVES panic, they cling to each other, ÉOWYN gives comfort where she can.
ANGLE ON: ARAGORN looks around the HALL.
ARAGORN
Is there no other way for the women and children to get out of the caves?
ANGLE ON: THÉODEN stands silently, staring at the floor.
ARAGORN
Is there no other way?
GAMLING
There is one passage. It leads into the mountains. But they will not get far. The Uruk-Hai are too many.
INTERCUT WITH: The URUK-HAI batter the door once more.
ANGLE ON: ARAGORN pleads with GAMLING.
ARAGORN
Tell the women and children to make for the mountain pass. And barricade the entrance.
ANGLE ON: THÉODEN looks over to ARAGORN and GAMLING.
THÉODEN
So much death. What can Men do against such reckless hate?
ANOTHER SICKENING CRACK AT THE DOOR.
ANGLE ON: ARAGORN thinks a moment. He looks to THÉODEN.
ARAGORN
quietly
Ride out with me.
ANGLE ON: THÉODEN turns to him, confused.
ARAGORN
Ride out and meet them.
ANGLE ON: THÉODEN walks to ARAGORN, a light glimmering in his eyes.
THÉODEN
For death and glory.
ARAGORN
For Rohan. For your people.
ANGLE ON: GIMLI looks up at the window to the HALL.
GIMLI
The sun is rising.
ANGLE ON: ARAGORN turns to the window, the first light of the sun streams through it.
GANDALF (V.O.)
Look to my coming at first light on the fifth day. At dawn, look to the east.
ANGLE ON: ARAGORN looks back to THÉODEN with grim determination.
THÉODEN
Yes. Yes. The horn of Helm Hammerhand shall sound in the deep one last time!
ANGLE ON: GIMLI looks over to them with excitement.
GIMLI
Yes!
CRUNCH! The force of the BATTERING RAM throws MEN to the ground.
They scramble back up to hold it.
ANGLE ON: THÉODEN places his hand on ARAGORN’S shoulder.
THÉODEN
Let this be the hour when we draw swords together.
ANGLE ON: ARAGORN nods, understanding fully.
INTERCUT WITH: GIMLI climbs a stairway to the HORN OF HELM HAMMERHAND at its summit.
ANGLE ON: The RAM crunches against the door again.
THÉODEN
Fell deeds awake, now for wrath, now for ruin and a red dawn!
THÉODEN places his helmet on his head.
INTERCUT WITH: GIMLI blows on the HORN, it sounds a deep blast across the depths of HELM’S DEEP.
ANGLE ON: The URUK-HAI crack through the door and pour into the HALL.
CLOSE ON: THÉODEN RAISES HIS SWORD!
THÉODEN
Forth Eorlingas!
ANGLE ON: The DECIMATED ARMY on HORSEBACK charges out of the HALL.
EXT. HELM’S DEEP - DAY
The HORSES blast out of the HALL under the standard of ROHAN.
They charge down the roads of the KEEP slicing through stunned URUK-HAI as they ride.
INTERCUT WITH: GIMLI continues blowing on the HORN, sounding its low blast through the KEEP.
HIGH OVERHEAD ON: They charge out the MAIN GATE and down the CAUSEWAY, knocking URUK-HAI off the narrow walkway as they go.
They fight bravely, as if it were their last stand.
ANGLE ON: ARAGORN SUDDENLY LOOKS UP.
WIDE ON: Between two massive boulders in the light of the dawning sun, a WHITE HORSE rears on the horizon.
ANGLE ON: ARAGORN sighs with relief.
ARAGORN
Gandalf.
ANGLE ON: GANDALF looks down at the scene below him.
ANGLES ON: THÉODEN looks up and cheers, the URUK-HAI turn to face the new enemy.
WIDE ON: The URUK-HAI outside of HELM’S DEEP is still quite massive, taking up the entire volume of the plain.
ANGLE ON: GANDALF sits atop SHADOWFAX, ready.
GANDALF
Théoden king stands alone.
ÉOMER rides up behind him.
ÉOMER
Not alone.
He draws his sword.
ÉOMER
Rohirrim!
A large group of riders emerge from behind the rise.
ANGLE ON: THÉODEN smiles.
THÉODEN
Éomer.
ANGLE ON: ÉOMER raises his sword and orders the ROHIRRIM forward.
ÉOMER
To the king!
WIDE ON: The ROHIRRIM and GANDALF charge down the ridge toward the waiting throng of URUK-HAI.
ANGLES ON: The URUK-HAI move into the position to receive this new threat. They ready their lances before them.
WIDE ON: As the ROHIRRIM and GANDALF near the URUK-HAI front line, the sun emerges from behind the ridge and momentarily blinds the URUK-HAI, giving the ROHIRRIM first strike to overrun them.
SERIES OF QUICK CUTS: The ROHIRRIM and GANDALF fight against the URUK-HAI, quickly decimating their numbers.
CUT TO:
EXT. ISENGARD - DAY
SERIES OF CUTS: The ENTS storm into ISENGARD, throwing stones and ORCS, crushing them under foot, tearing down their towers, the ORCS are losing.
ANGLE ON: SARUMAN rushes to his balcony and looks out.
WIDE ON: ISENGARD is overrun by hundreds of ENTS, destroying everything that SARUMAN has worked to build up.
ANGLE ON: SARUMAN rushes from one side of the balcony to the other, helpless to stop them.
ANGLE ON: AN ENT works on the supports to the DAM.
TREEBEARD (O.S.)
Break the dam! Release the river!
The ENT succeeds in breaking the supports, water breaks through the cracks until THE DAM SHATTERS. ORCS fall to their deaths in the rushing torrents.
CLOSE ON: SARUMAN looks on in horror as the freed RIVER ISEN flows down the mountain and into ISENGARD.
ANGLE ON: MERRY and PIPPIN grasp TREEBEARD tightly. TREEBEARD stands proud of his destruction.
MERRY
Pippin! Hold on!
WIDE ON: The ORCS run for their lives before the flood, the ENTS brace themselves.
ANGLE ON: TREEBEARD braces himself.
TREEBEARD
Hold on little Hobbits!
WIDE ON: The water hits the ENTS full force, but they are unmoved, the water flushes the running ORCS and their constructs over the edge of the ISENGARD caverns.
ANGLE ON: ORCS working in the depths of the caverns.
PAN UP TO: Water floods in on top of them.
ANGLES ON: The ORCS in the CAVERNS run hopelessly from the flood, the water destroys their bridges, forges, everything.
WIDE ON: The RIVER floods all of ISENGARD destroying everything and washing it into the caverns, only the ENTS escape untouched.
EXT. OSGILIATH - DAY
ANGLE ON: FRODO, in some kind of trance, walks slowly away from the safe corner. SAM tries to speak to him as he passes.
SAM
What are you doing?
FRODO pays him no attention.
ANGLE ON: THE NAZGÛL on his FELLBEAST flies over the city, looking for his prey. FRODO walks out of the tower of safety and through the rushing throngs of SOLDIERS. SAM rushes to the door of the tower, panicked.
SAM
Where are you going?!
SLOW MOTION: FRODO stands atop a high wall before him, the FELLBEAST flies into view. FRODO raises the RING.
CLOSE ON: The RING in FRODO’S fingers.
ANGLE ON: FARAMIR spots FRODO across OSGILIATH.
WIDE ON: FRODO stands atop the wall, the NAZGÛL flies over him, ready to strike.
ANGLE ON: SAM runs up the stairs, screaming silently.
CLOSE ON: FRODO closes the RING in on his finger.
ANGLE ON: SAM tackles FRODO and wrestles the RING away from his finger. They fall to the ground just as the FELLBEAST closes its massive claws around the spot where FRODO was standing only moments before.
ANGLE ON: FARAMIR fires an arrows into the side of the FELLBEAST, the FELLBEAST screams and flies away.
ANGLE ON: SAM and FRODO roll down the stairs and off the edge, coming to a dead stop on the ground below. FRODO rolls on top of SAM, pinning him to the ground.
CLOSE ON: FRODO draws STING and holds it at SAM’S neck, anger and distrust etched on his face.
ANGLE ON: SAM looks at the blade with fear, tears runs down his face.
SAM
It’s me. It’s your Sam. Don’t you know your Sam?
CLOSE ON: FRODO’S MADNESS fades into shock and confusion. FRODO backs away from SAM and slumps against a wall. STING CLATTERS to the ground.
ANGLE ON: SAM touches his neck lightly and pulls himself up. He looks at FRODO. FRODO stares at the ground and shakes his head in shock.
FRODO
slowly
I can’t do this, Sam.
SAM
sadly
I know. It’s all wrong. By rights we shouldn’t even be here.
SAM stumbles to his feet and leans against a wall.
SAM
But we are.
WIDE ON: Over the ruined OSGILIATH, the FELLBEAST continues to circle.
ANGLE ON: SAM keeps watching the terrible scene, and speaks absently.
SAM
It’s like in the great stories, Mr. Frodo. The ones that really mattered. Full of darkness and danger they were. And sometimes you didn’t want to know the end. Because how could the end be happy?
ANGLE ON: FRODO panting against the wall.
EXT. HELM’S DEEP - DAY
The ROHIRRIM decimate the retreating URUK-HAI.
SAM (V.O.)
How could the world go back to the way it was when so much bad had happened?
ANGLE ON: THÉODEN shouts proudly atop his horse.
THÉODEN
Victory! We have victory!
ANGLE ON: GANDALF watches the URUK-HAI run, smiling.
SAM (V.O.)
But in the end, it’s only a passing thing, this shadow.
ANGLE ON: ARAGORN looks up with relief, the battle is over.
EXT. ISENGARD - DAY
WIDE ON: The waters continue flowing over ISENGARD destroying all the evil that grew there, the ENTS chase the ORCS into the pits.
SAM (V.O.)
Even darkness must pass. A new day will come.
ANGLE ON: MERRY and PIPPIN watch the goings-on with wonder riding atop TREEBEARD.
SAM (V.O.)
And when the sun shines it will shine out the clearer.
ANGLE ON: The ENTS stands tall in the flowing water.
SAM (V.O.)
Those were the stories that stayed with you --
ANGLE ON: SARUMAN, trapped in ORTHANC, slowly, he backs away from the edge of his balcony, and closes the doors to ORTHANC.
SAM (V.O.)
-- that meant something. Even if you were too small to understand why.
HIGH WIDE ON: The waters completely flood the RING OF ISENGARD, to the very edges, wiping out everything SARUMAN had done, preparing the land for a renewal.
SAM (V.O.)
But I think, Mr. Frodo, I do understand. I know now.
EXT. OSGILIATH - DAY
ANGLE ON: SAM stands overlooking OSGILIATH.
SAM
Folk in those stories had lots of chances of turning back only they didn’t. They kept going because they were holding on to something.
FRODO
skeptically
What are we holding on to, Sam?
SAM looks at FRODO. SAM walks over and lifts FRODO to his feet.
SAM
resolute
There’s some good in this world, Mr. Frodo. And it’s worth fighting for.
CLOSE ON: FRODO is moved by SAM’S determination. He smiles grimly.
ANGLE ON: FARAMIR approaches them. SAM stiffens at his approach.
He kneels to their level.
FARAMIR
I think at last we understand one another, Frodo Baggins.
MADRIL APPROACHES FROM BEHIND FARAMIR. FARAMIR stands to face him.
MADRIL
You know the laws of our country, the laws of your father. If you let them go, your life will be forfeit.
CLOSE ON: FARAMIR looks at MADRIL, unwavering.
FARAMIR
Then it is forfeit. Release them.
ANGLE ON: FRODO looks at FARAMIR with gratitude. SAM shakes a RANGER’S hand from his shoulder.
EXT. PLAINS OF ROHAN - DAY
WIDE ON: The fleeing URUK-HAI run from HELM’S DEEP over a ridge into the PLAINS, standing on the other side of the ridge is a large forest. The URUK-HAI run directly for it.
ANGLE ON: THÉODEN, ARAGORN, ÉOMER, and the rest of the ROHIRRIM ride to the top of the ridge and stop.
ÉOMER
Stay out of the forest! Keep away from the trees!
ANGLE ON: ÉOMER looks with fear at the forest that has sprung up.
ANGLE ON: Inside the forest, the URUK-HAI charge between the trunks mindlessly.
WIDE ON: The DEFENDERS OF ROHAN watch silently from atop the ridge as the last of the URUK-HAI runs in. Suddenly, the trees move. Scream emit from with the forest.
ANGLES ON: the DEFENDERS look on in fear and surprise as the forest eliminates the last of their enemies.
EXT. HELM’S DEEP HALL - DAY
ÉOWYN and the other WOMEN and CHILDREN emerge. ARAGORN climbs the steps to meet ÉOWYN at their summit. She looks upon him with delight and holds him.
EXT. HELM’S DEEP BATTLEMENTS - DAY
SOLDIERS pile the bodies of the dead URUK-HAI.
ANGLE ON: LEGOLAS walks through the carnage and spots GIMLI, smoking his pipe. He stops, stroking his bow.
LEGOLAS
Final count 42.
GIMLI
mock admiration
Forty-two? That’s not bad for a pointy-eared Elvish princeling. I myself am sitting pretty on 43.
ANGLE ON: LEGOLAS’ face drops, suddenly, he fires an arrow at the URUK that GIMLI sits upon.
LEGOLAS
Forty-three.
GIMLI
He was already dead.
LEGOLAS
He was twitching.
GIMLI
He was twitching because he’s got my axe buried in his nervous system.
GIMLI demonstrates by working the axe in the URUK’S head. The hands and feet twitch as he does.
EXT. ISENGARD - DAY
MERRY and PIPPIN stand waist-deep in the water.
MERRY
He doesn’t look too happy, does he?
PIPPIN
Not too happy at all, Merry.
ANGLE ON: SARUMAN and WORMTONGUE look hopelessly down from their prison.
ANGLE ON: MERRY and PIPPIN watching them near the outer wall.
MERRY
Still, I suppose the view would be quite nice from up there.
PIPPIN
Oh, yes, it’s a quality establishment. I hear the staff are very good.
MERRY holds his hand out from his head, measuring his height against PIPPIN’S. PIPPIN catches this out of the corner of his eye. MERRY pretends to be playing with his hair.
PIPPIN
What are you doing?
MERRY
Nothing. The world’s back to normal, that’s all.
PIPPIN
No, it isn’t. I’m starving.
MERRY picks up a floating basket and tosses out its contents.
MERRY
Good luck trying to find something decent to eat around here. Probably dead rats and moldy bread.
PIPPIN picks up a floating apple. He looks to the sky for a moment trying to figure out where it came from. Suddenly, he sees another and another.
MERRY sees what is happening. They follow the trail of apples until they find a turkey and then a basket of apples and then --
JACKPOT! The HOBBITS look with rapt anticipation at the food storehouse in the WALL OF ISENGARD.
MERRY
Saruman’s storeroom!
CLOSE ON: TWO BARRELS LABELED FROM THE SOUTHFARTHING OF THE SHIRE!
ANGLE ON: MERRY and PIPPIN look with reverent awe on the barrels.
PIPPIN
I don’t believe it.
MERRY
It can’t be.
ANGLE ON: They crack open the top of one of the barrels.
MERRY
It is!
PIPPIN
Longbottom Leaf.
MERRY takes a huge sniff of it.
MERRY
with pleasure
The finest pipe-weed in South Farthing.
PIPPIN
It’s perfect. One barrel each.
PIPPIN suddenly stops.
PIPPIN
Wait. Do you think we should share it with Treebeard?
MERRY
Share it?
shaking his head
No. No. Dead plant and all that. Don’t think he’d understand.
He leans into PIPPIN.
MERRY
quietly
Could be a distant relative.
PIPPIN smiles.
PIPPIN
I get it. Don’t be hasty.
MERRY whips out his pipe.
MERRY
Exactly.
deeply
Bah-hrum.
MERRY and PIPPIN laugh.
ANGLE ON: TREEBEARD passes close to the storeroom. He hears the laughing and looks in on them.
CUT TO:
EXT. OSGILIATH - DAY
FARAMIR leads FRODO, SAM, and GOLLUM through the turmoil to a water logged tunnel.
FARAMIR
This is the old sewer. Runs right under the river through to the edge of the city. You’ll find cover in the woods there.
ANGLE ON: FRODO and SAM look at him gratefully.
SAM
Captain Faramir, you have shown your quality, sir.
ANGLE ON: FARAMIR stands back, surprised at SAM’S words.
SAM
The very highest.
FARAMIR
The Shire must really be a great realm, Master Gamgee, where gardeners are held in high honor.
ANGLE ON: SAM looks away, embarrassed. FARAMIR smiles.
FARAMIR
What road will you take once you reach the woods?
FRODO
Gollum says there’s a path near Minas Morgul that climbs up into the mountains.
FARAMIR looks surprised. GOLLUM tries to slink away.
FARAMIR
Cirith Ungol?
FARAMIR snatches GOLLUM up by the neck and holds him against the wall.
FARAMIR
Is that its name?
GOLLUM
No. No!
FARAMIR tightens his grip.
GOLLUM
Yes.
FARAMIR turns to FRODO desperately.
FARAMIR
Frodo, they say a dark terror dwells in the passes above Minas Morgul. You cannot go that way.
ANGLE ON: FRODO, rapt with indecision.
GOLLUM
It is the only way. Master says we must go to Mordor, so we must try.
FARAMIR looks to FRODO, seemingly desperate to talk him out of it. FRODO looks resolute again.
FRODO
I must.
FARAMIR throws GOLLUM down. He stands before FRODO and SAM.
FARAMIR
Go, Frodo. Go with the goodwill of all Men.
ANGLE ON: FRODO looks at FARAMIR, touched by his sincerity.
FRODO
Thank you.
FRODO starts off into the sewer. SAM follows.
ANGLE ON: GOLLUM starts to slink to the sewer. FARAMIR grabs him up by the neck again, pinning him against the wall.
CLOSE ON: FARAMIR looks at GOLLUM intently.
FARAMIR
May death find you quickly if you bring them to harm.
GOLLUM doesn’t respond. FARAMIR throws him into the tunnel.
GOLLUM slinks away, with a final, scathing glance to FARAMIR.
INT. OSGILIATH SEWER TUNNEL - DAY
FRODO and SAM walk easily through the tunnel. GOLLUM limps behind them.
FRODO
Come on, keep up.
ANGLE ON: GOLLUM slumps to the ground, in pain. SAM stops.
SAM
Mr. Frodo didn’t mean for them Rangers to hurt you. You know that, don’t you? He was trying to save you, see?
ANGLE ON: GOLLUM looks up to SAM in wonder.
GOLLUM
Save me?
SAM
So there’s no hard feelings. Forgive and forget.
GOLLUM
shaking his head
No, no, no hard feelings.
coughing
Gollum, Gollum. Yes, master.
SAM steps back for GOLLUM to pass.
WIDE ON: GOLLUM crawls into the culvert, following FRODO. SAM stands back and waits for him to wriggle his way in.
GOLLUM
Nice Hobbits.
SAM
Very decent of you. Very decent, indeed, Gollum.
CUT TO:
EXT. PLAINS OF ROHAN - DAY
GANDALF, ARAGORN, LEGOLAS, GIMLI, THÉODEN, and ÉOMER ride to the top of the rise in front of HELM’S DEEP, looking off into the distance.
GANDALF
Sauron’s wrath will be terrible, his retribution swift.
WIDE ON: In the far distance, the skies over MORDOR crackle and the darkness spreads.
ANGLES ON: The others look to GANDALF as he speaks.
GANDALF
The battle for Helm’s Deep is over. The battle for Middle-earth is about to begin. All our hopes now lie with two little Hobbits --
EXT. ITHILIEN - DAY
GOLLUM leads FRODO and SAM through the woods.
GANDALF (V.O.)
-- somewhere in the wilderness.
SAM
I wonder if we’ll ever be put into songs or tales.
FRODO
What?
SAM
I wonder if people will ever say, “Let’s hear about Frodo and the Ring.” And they’ll say “Yes, that’s one of my favorite stories. Frodo was really courageous, wasn’t he, dad.” “Yes, my boy, the most famousest of Hobbits. And that’s saying a lot.”
FRODO laughs and turns to SAM.
FRODO
Well, you’ve left out one of the chief characters: “Samwise the Brave.” I want to hear more about Sam.
FRODO turns to SAM. SAM smiles sheepishly. FRODO’S smile fades.
He stops and turns to SAM, seriously.
FRODO
Frodo wouldn’t have got far without Sam.
SAM
Now Mr. Frodo, you shouldn’t make fun. I was being serious.
FRODO
smiling
So was I.
FRODO walks onward.
CLOSE ON: SAM, dreaming of being a great storybook hero.
SAM
dreamily
“Samwise the Brave.”
He gives his backpack a heave and follows FRODO.
ANGLE ON: FRODO smiles. The HOBBITS walk through the forest in the distance.
FRODO
Sméagol!
SAM
We’re not gonna wait for you. Come on!
PAN TO: GOLLUM crawls over a short hill, struggling.
SMÉAGOL
Master. Master looks after us. Master wouldn’t hurt us.
GOLLUM
Master broke his promise.
SMÉAGOL
Don’t ask Sméagol. Poor, poor Sméagol.
GOLLUM
Master betrayed us. Wicked. Tricksy. False. We ought to wring his filthy little neck. Kill him! Kill him! Kill them both. And then we take the precious and we be the master!
SMÉAGOL runs and hides behind a tree.
SMÉAGOL
But the fat Hobbit, he knows. Eyes always watching.
GOLLUM peeks out from behind the other side of the tree.
GOLLUM
Then we stabs them out. Put out his eyeses and make him crawl.
SMÉAGOL nods eagerly.
SMÉAGOL
Yes! Yes! Yes!
GOLLUM
Kill them both.
SMÉAGOL
Yes! No! No!
He backs away from the tree.
SMÉAGOL
It’s too risky. It’s too risky.
ANGLE ON: The HOBBITS come over the rise behind GOLLUM.
SAM
Where is he? Where’s he gone? Hey, Gollum! Where are you?
FRODO
Sméagol?
GOLLUM
thoughtfully
We could let her do it.
SMÉAGOL
Yes. She could do it.
GOLLUM
Yes, precious, she could. And then we takes it once they’re dead.
SMÉAGOL
Once they’re dead.
GOLLUM
Shh.
With a smile, GOLLUM leaps out of hiding.
SMÉAGOL
Come on, Hobbits. Long ways to go yet. Sméagol will show you the way.
ANGLE ON: GOLLUM walks through the forest, FRODO and SAM close behind.
GOLLUM
sinister
Follow me.
WIDE ON: GOLLUM continues leading the HOBBITS through the forest to their eventual destination.
PAN UP OVER THE FOREST OVER EPHEL DÚATH TO REVEAL MORDOR.
THE TOWER OF BARAD-DÛR WITH THE EYE OF SAURON BURNING ON ITS SUMMIT.
MOUNT DOOM BELCHES FIRE AND ASH INTO THE SKY.
NAZGÛL ON FELLBEASTS CIRCLE THE SKIES.
FADE TO BLACK.
THE END
BLACK SCREEN
SUPER: THE LORD OF THE RINGS
BLACK SCREEN:
EXT. RIVER ANDUIN – DAY
ANGLE ON: SMÉAGOL and his cousin, DÉAGOL, sit in a SMALL CORACLE, their FISHING LINES draped over the side ... SUNSHINE glinting off the surface of the water.
An idyllic image.
SUDDENLY ... DÉAGOL’S FISHING ROD BENDS under the weight of a LARGE FISH.
DÉAGOL
excited
Sméagol, I've got one!
he laughs
I've got a fish, Sméagol!
SMÉAGOL
excitedly
Go on, pull it in.
DÉAGOL pulls on his ROD, but is HAULED OVERBOARD and disappears underwater with a SPLASH!
ANGLE ON: SMÉAGOL leaning over the BOAT ... CONCERNED.
SMÉAGOL
worried
Déagol!
EXT. UNDERWATER - RIVER ANDUIN – DAY
ANGLE ON: DÉAGOL is towed to the RIVER BED by a LARGE FISH ... he suddenly lets go of the line ... eyes fixed on a SHINING GOLD RING, lying in the SILT.
EXT. RIVER ANDUIN - GLADDEN FIELDS - DAY
CLOSE ON: DÉAGOL climbs out of the WATER onto the RIVER BANK.
CLOSE ON: the RING revealed in DÉAGOL’S PALM...
ANGLE ON: SMÉAGOL peers over his shoulder ... the GOLD reflects in SMÉAGOL’S EYES!
ON SOUNDTRACK: The HUM of the RING growing LOUDER...
SMÉAGOL
Give us that, Déagol, my love!
DÉAGOL turns to look at him, a smirk on his face.
DÉAGOL
Why?
CLOSE ON: SMÉAGOL moves towards DÉAGOL...
SMÉAGOL
Because...it's my birthday and I wants it.
ANGLE ON: SMÉAGOL jumps on DÉAGOL ... STRANGLING HIM! SMÉAGOL rips the GLITTERING RING from DÉAGOL’S LIMP HAND.
SMÉAGOL
My precious!
CLOSE ON: SMÉAGOL slips the RING onto his FINGER and DISAPPEARS.
DISSOLVE TO:
INT. MISTY MOUNTAINS CAVES – DAY
IMAGES: SMÉAGOL descending into madness. His body TWISTS and DISTORTS ... he becomes a CREEPY, SHRIVELED wretch ... finally crawling into a DARK CAVE beneath the MISTY MOUNTAINS.
SMÉAGOL (V.O.)
They cursed us. Murderer. Murderer they called us. They cursed us and drove us away. And we wept, Precious. We wept, to be so alone. And we forgot the taste of bread, the sound of trees, the softness of the wind ... We even forgot our own name.
in a choking cough
Gollum! Gollum!
ANGLE ON: GOLLUM in the CAVE staring at the RING in his hand.
GOLLUM
It’s mine! My own. It came to me.
SMÉAGOL
ecstatic
My Precious.
DISSOLVE TO:
EXT. CULVERT, VALE OF MORGUL – DAWN
ANGLE ON: A GRIM LANDSCAPE, covered in THORN BUSHES and the scars of RECENT FIRES. The DARK MORGUL VALLEY disappears up towards the MOUNTAINS.
SETTLE ON: FRODO and SAM in a FILTHY CULVERT.
SAM twitches in a RESTLESS SLEEP. But FRODO is awake ... His hand trails down to the CHAIN around his NECK...
A SUDDEN HISS! FRODO quickly hides the RING as GOLLUM peers at them with GLEAMING EYES.
GOLLUM
Wake up! Wake up! Wake up, sleepies! We must go, yes, we must go at once!
SAM STIRS, looks at FRODO...
SAM
Haven't you had any sleep, Mr. Frodo?
FRODO shakes his HEAD.
SAM
I've gone and had too much!
SAM looks at the dead, BROWN TWILIGHT, below the LOWERING CLOUD.
SAM
It must be getting late.
FRODO
No ... no it isn't. It isn't midday yet. The days are growing darker.
The GROUND suddenly QUIVERS, as a ROLLING, RUMBLING NOISE ECHOES down the VALLEY.
GOLLUM
Come on, must go, no time...
SAM
Not before Mr. Frodo's had something to eat.
GOLLUM
... no time to lose, silly.
SAM shoots GOLLUM a HOSTILE LOOK and turns back to rummage in his KNAPSACK. He holds up a piece of dried LEMBAS BREAD to FRODO.
SAM
Here.
FRODO
What about you?
SAM
lying badly
I'm not hungry – leastways, not for Lembas bread.
FRODO
Sam.
SAM
confessing
Alright. We don't have that much left.
SAM
We have to be careful or we're going to run out. You go ahead and eat that, Mister Frodo. I've rationed it. There should be enough.
FRODO looks at SAM questioningly.
FRODO
For what?
SAM
The journey home.
FRODO says nothing.
EXT. CULVERT, VALE OF MORGUL - DAY
WIDE: FRODO and SAM follow GOLLUM as he leads them on the winding, torturous path ... clambering through BRACKEN and over JAGGED ROCKS.
GOLLUM
Come, Hobbitses. Very close now. Very close to Mordor! No safe places here. Hurry! Shhh.
EXT. THE FOREST OF ISENGARD - DAY
GANDALF leads ARAGORN, LEGOLAS, THÉODEN, and GIMLI through dark woodland...
The MOVING FOREST of FANGORN ... opens before them ... creating an AVENUE of TREES, which allows them access along the old ISENGARD ROAD. A THICK, HUMID MIST fills the forest.
SUPER: THE RETURN OF THE KING
ANGLE ON: The FOREST SEPARATES ahead, REVEALING: the RUINS of ISENGARD.
EXT. ISENGARD GATE – DAY
WIDE ON: All about, the GREAT STONE WALL is cracked and splintered into countless jagged shards.
Far off, half veiled in the swirling STEAM, the TOWER of ORTHANC stands ... Unbroken by the storm. Pale waters lap about its feet.
ANGLE ON: TWO SMALL HOBBITS are sitting on the SMASHED WALL ... MERRY AND PIPPIN! SPREAD before them is a feast of BREADS, MEATS, and WINE. They PUFF on long pipes as they lie back in the SUN.
PIPPIN
I feel like I'm back at the Green Dragon after a hard day's work.
MERRY
Only, you've never done a hard day's work.
MERRY cuts PIPPIN off before he can respond in kind.
MERRY
Welcome, my Lords, to Isengard.
ANGLE ON: GANDALF, ARAGORN, LEGOLAS and GIMLI stare at the SIGHT before them...
GIMLI
You young rascals! A merry hunt you've led us on, and now we find you, feasting and smoking.
PIPPIN
mouth full
We are sitting on a field of victory, enjoying a few well-earned comforts. The salted pork is particularly good.
GIMLI
suddenly interested
Salted pork?
GANDALF
shaking his head
Hobbits.
MERRY
We're under orders, from Treebeard, who's taken over management of Isengard.
WIDE: GANDALF leads the company through the flotsam and jetsam which floats upon the muddied waters surrounding the TOWER ... TREEBEARD, the GIANT ENT, strides towards them, ALARMING all but GANDALF.
TREEBEARD
Burarum ... Young Master Gandalf. I'm glad you've come. Wood and water, stock and stone, I can master, but there’s a Wizard to be managed here ... locked in his tower.
GANDALF
And there Saruman must remain, under your guard, Treebeard.
GIMLI
Let's just have his head and be done with it.
GANDALF stares up the long length of the DARK TOWER...
GANDALF
quietly
No. He has no power any more.
THE OLD ENT nods his head wisely...
TREEBEARD
The filth of Saruman is washing Away ... Trees will come back to live Here, young trees ... wild trees.
CLOSE ON: PIPPIN, his eye caught by something lying in the WATER
ANGLE ON: The MUDDY waters GLOWING with a golden light...
ARAGORN turns as, quick as a FLASH, PIPPIN has jumped off his horse and picked up – the PALANTÍR!
TREEBEARD
Well bless my bark!
GANDALF
urgent
Peregrin Took! I'll take that, my lad.
PIPPIN doesn’t move, his eyes staring in wonder at the smooth black stone...
GANDALF
Quickly, now!
RELUCTANTLY, PIPPIN hands the PALANTÍR to GANDALF ... who immediately smothers it in his cloak.
ANGLE ON: GANDALF looks back at PIPPIN ... troubled.
EXT. EDORAS – DAY
WIDE: BACK SHOT – a GROUP OF RIDERS gallop towards the ROHAN CITY of EDORAS...
PUSH IN: ÉOWYN standing alone outside the GOLDEN HALL.
waiting...
CUT TO:
INT. EDORAS, GOLDEN HALL - EVENING
WIDE: A ROARING FIRE: a LAMB ROASTING on a SPIT; LONG TABLES laden with FOOD; BARRELS of WINE; a banquet is laid – ready for the returning soldiers.
THÉODEN
Tonight we remember those who gave their blood to defend this country. Hail the victorious dead!
ANGLE ON: Amidst the sheering crowd, ÉOWYN moves towards ARAGORN ... As she proffers the CHALICE, their eyes meet.
ÉOWYN
Westu Aragorn hál.
ÉOWYN watches as ARAGORN moves away ... a voice speaks in her ear.
THÉODEN
I am happy for you.
ÉOWYN looks at her UNCLE, as THÉODEN follows her gaze.
THÉODEN
He is an honorable man.
ÉOWYN
smiling
You are both honorable Men.
THÉODEN
It was not Théoden of Rohan who led our people to victory.
ÉOWYN looks at him questioningly, disturbed by his tone.
THÉODEN
Don't listen to me. You are young, and tonight is for you.
ANGLE ON: ÉOWYN watches concerned as her UNCLE moves away.
ANGLE ON: MERRY & PIPPIN are in full voice, on top of one of the TABLES ... both hold very large mugs of ALE in their hands.
MERRY & PIPPIN
singing
Oh, you can search – up and down As many lands as can be found But you'll never find a beer so brown As the one we drink in our home town You can keep your fancy ales You can drink them by the flagon But the only brew, for the brave and true, Comes from the Green Dragon!
ANGLE ON: GANDALF laughing and clapping the HOBBITS. ARAGORN steps up beside him, SMILING at the floorshow.
ARAGORN
No news of Frodo?
GANDALF
No word ... nothing.
ARAGORN
We still have time.
GANDALF turns quickly to ARAGORN.
ARAGORN
Every day Frodo moves closer to Mordor.
GANDALF watches his friend’s face ... seeking reassurance.
GANDALF
Do we know that?
ARAGORN
gently
What does your heart tell you?
GANDALF
with a small smile
That Frodo is alive.
to himself
Yes - yes, he is alive.
EXT. MORGUL VALLEY – NIGHT
ANGLE ON: FRODO and SAM lie asleep amidst scrubby bushes near a stagnant pool. SMÉAGOL lies nearby, muttering in his sleep.
SMÉAGOL
Too risky. Too risky. The thieves! They stole it from us. Kill them ... kill them ... kill them both!
SMÉAGOL wakes suddenly, shaking, his face drenched in SWEAT, eyes wide in horror.
SMÉAGOL
No!
GOLLUM
hissed whisper
Shhh! Quiet!
SMÉAGOL’S features suddenly transform into the MALEVOLENT face of GOLLUM!
GOLLUM
Mustn’t waken them, mustn't ruin it now!
SMÉAGOL casts a quick glance over his SHOULDER to the SLEEPING figures of FRODO and SAM as he clambers off to his ROCK ... silently sidling towards the EDGE of the STAGNANT POOL.
SMÉAGOL
They knows, they knows, they suspects us!
SMÉAGOL stares into the MURKY depths of the WATER.
The SURFACE RIPPLES as the face of GOLLUM appears as SMÉAGOL’S REFLECTION.
GOLLUM
What's it saying, my Precious, my love? Is Sméagol losing his nerve??
SMÉAGOL
No! Not! Never!! Sméagol hates nasty Hobbitses! Sméagol wants to see them – dead!
GOLLUM
And we will ... Sméagol did it once...
sly
... He can do it again.
FLASH INSERT: SMÉAGOL choking DÉAGOL ... Fingers locked tight around his THROAT.
GOLLUM
It's ours - ours!
SMÉAGOL
We must get the Precious. We must get it back.
GOLLUM
Patience, patience, my love. First, we must lead them to her.
SMÉAGOL
We lead them to the windy stairs.
GOLLUM
prompting
Yes, the stairs ... and then?
SMÉAGOL
Up, up, up, up the stairs we go ... until we come to...
naughty excitement
... the Tunnel!
GOLLUM
quiet
And when they go in, there's no coming out. She's always hungry, she always needs to feed. She must eat. All she gets is filthy Orcses.
SMÉAGOL
And they doesn't taste very nice, does they, Precious?
GOLLUM
No ...not very nice at all, my love. She hungers for sweeter meats...
CLOSE ON: SAM ... his EYES flicker OPEN...
GOLLUM
“Hobbit meat.” And when She throws away the bones and the empty clothes, then we will find it...
SMÉAGOL
And take it for me!
GOLLUM
correcting
For us...
SMÉAGOL
Yes, we, we meant for us...
choking cough
Gollum! Gollum!
GOLLUM
sly
The Precious will be ours, once the Hobbitses are dead!
SUDDEN ANGLE ON: SAM’S image mirrored in the water as he SMACKS GOLLUM on the HEAD with his POT!
SAM
yelling
You treacherous little toad!
SAM drops the POT and FLINGS himself ON TOP of GOLLUM! GOLLUM SCREAMS ... his ARMS and LEGS FLAILING WILDLY!
GOLLUM
crying
No! Not! Help! Master!
ANGLE ON: FRODO staggers over to SAM and PULLS HIM OFF GOLLUM.
FRODO
No, Sam! Leave him alone!
CLOSE ON: GOLLUM, huddled on the ground, WHIMPERING and SOBBING.
SAM
fuming
I heard it from his own mouth ... he means to murder us!
SMÉAGOL
Never! Sméagol wouldn't hurt a fly! He’s a horrid, fat Hobbit who hates Sméagol and who makes up nasty lies!
SAM makes for SMÉAGOL again ... with a look of MURDEROUS RAGE.
SAM
You miserable little maggot! I'll stove your head in!
FRODO grabs SAM’S ARM.
FRODO
Sam...
SAM
Call me a liar! You're a liar!
FRODO
Sam! If you scare him off, we're lost.
SAM pulls away from FRODO...
SAM
I don't care! I can't do it, Mr. Frodo. I won't wait around for him to kill us!
FRODO
fierce whisper
I'm not sending him away.
SAM stares at FRODO ... at a loss.
SAM
You don't see it, do you? He's a villain!
FRODO
We can't do this by ourselves, Sam. Not without a guide. I need you on my side.
ANGLE ON: SAM, his face softening.
SAM
taken aback
I'm on your side, Mr. Frodo.
FRODO
I know, Sam. I know.
whisper
You must trust me.
FRODO beckons to GOLLUM.
FRODO
Come, Sméagol.
GOLLUM turns slowly, staring at SAM through hooded, HATE-FILLED EYES ... and SMILES.
CUT TO:
EXT. EDORAS, GOLDEN HALL – EARLY DAWN
ARAGORN joins LEGOLAS on the STEPS to the golden HALL, oblivious to the CHILL WIND ... they look out across the SLEEPING CITY to the LOOMING MOUNTAIN RANGE BEYOND ... DARK CLOUDS mark the sky.
LEGOLAS
The stars are veiled. Something stirs in the East ... a sleepless malice.
LEGOLAS looks at ARAGORN ... realization in his face.
LEGOLAS
The eye of the enemy is moving.
INT. EDORAS, SLEEPING QUARTERS – EARLY DAWN
CLOSE ON: PIPPIN ... he is AWAKE! He sits up ... ANXIOUS, FIDGETY...
Suddenly he hops out of bed and creeps towards the SLEEPING FORM of GANDALF.
MERRY
whispers
What you doing?
PIPPIN gasps with FRIGHT! MERRY is sitting up, wiping sleep from his eyes. He moves on...
ANGLE ON: A sleeping GANDALF lies with eyes wide open! But PIPPIN is undeterred...
MERRY sits up, a worried look on his face.
MERRY
Pippin? Pippin? Pippin! What are you doing?
With quick stealth, PIPPIN lifts the WRAPPED PALANTÍR from GANDALF’S grasp...
MERRY
Pippin, are you mad?
PIPPIN
I just want to look at it. Just one more time.
MERRY
Put it back! Put – it – back!
PIPPIN unwraps the PALANTÍR and as MERRY looks on HORRIFIED, he gazes intently into it.
MERRY
Pippin!
As PIPPIN lays his hands on the CRYSTAL, a SICKLY PALE light slowly spreads from the GLASS BALL onto PIPPIN’S FACE ... his EYES WIDEN.
MERRY
Pippin!
EXT. EDORAS GOLDEN HALL – EARLY DAWN
On the STEPS on the GOLDEN HALL, LEGOLAS turns to ARAGORN.
LEGOLAS
urgent
He is here.
INT. EDORAS, SLEEPING QUARTERS - NIGHT
PIPPIN suddenly starts to HYPERVENTILATE ... He STAGGERS BACKWARDS, PALANTÍR held rigidly before him...
THE GREAT EYE OF SAURON seems to LEAP from the FIRE ... PIPPIN is bathed in the FIERY RED LIGHT.
PIPPIN sinks to his KNEES, his mouth open in a soundless SCREAM ... He FALLS BACKWARDS, powerless to release the FIERY GLOBE.
MERRY
Help! Someone help him!
GANDALF wakes with start! Just as ARAGORN enters, and wrenches the PALANTÍR from PIPPIN’S HANDS ... PIPPIN FALLS to the FLOOR!
... ARAGORN spins away, reeling backwards, the PALANTÍR falling from his HANDS...
The PALANTÍR rolls across the FLOOR, causing EVERYONE in the room to COWER BACK.
ANGLE ON: GANDALF throws a BLANKET over it, ANGRY DISBELIEF on his face! He rounds on PIPPIN.
GANDALF
Fool of a Took!
GANDALF lifts the HOBBIT’S SLUMPED HEAD.
MERRY
Pippin!
PIPPIN is trembling ... GANDALF calms him...
PIPPIN
Gandalf! Forgive me.
GANDALF
Look at me! What did you see?
PIPPIN
disjointed
A tree ... There was a white tree ... in a courtyard of stone... It was dead!
FLASH INSERT: A lone white tree surrounded by flames.
PIPPIN
The city was burning...
GANDALF
Minas Tirith??
to PIPPIN
Is that what you saw?
PIPPIN
terrified
I saw ... I saw him ... I can hear his voice in my head.
GANDALF
What did you tell him? Speak!
PIPPIN
He asked me my name, I didn't Answer ... he hurt me...
CLOSE ON: GANDALF stares at PIPPIN with a FRIGHTENING INTENSITY...
GANDALF
What did you tell him about Frodo and the Ring?
INT. EDORAS, GOLDEN HALL - DAY
THÉODEN stands in the GOLDEN HALL, gravely listening to GANDALF ... ARAGORN, LEGOLAS, and GIMLI look on...
GANDALF
There was no lie in Pippin's eyes; a fool, but an honest fool he remains. He told Sauron nothing of Frodo and the Ring.
ANGLE ON: GIMLI lets out a sigh of relief.
GANDALF turns to look at THÉODEN.
GANDALF
We've been strangely fortunate. What Pippin saw in the Palantír was a glimpse of our enemy's plan.
GANDALF looks from one to the other of the gathered company.
GANDALF
Sauron moves to strike the city of Minas Tirith. His defeat at Helm's Deep showed our enemy one thing.
The WIZARD turns towards ARAGORN...
GANDALF
The Heir of Elendil has come forth. Men are not as weak as he supposed. There is courage still - strength enough left to challenge him.
THÉODEN listens intently, saying nothing.
GANDALF
warningly
Sauron fears this. He will not risk the peoples of Middle-earth uniting under one banner. He will raze Minas Tirith to the ground before he sees the return of the King.
CLOSE ON: ARAGORN ... he knows GANDALF SPEAKS THE TRUTH.
ANGLE ON: GANDALF rounds on THÉODEN.
GANDALF
If the beacons of Gondor are lit, Rohan must be ready for war!
THÉODEN holds GANDALF’S gaze.
THÉODEN
Tell me. Why should we ride to the aid of those who did not come to ours?
ANGLE ON: ARAGORN turns to look at THÉODEN.
THÉODEN
What do we owe Gondor?
ARAGORN
low and urgent
I will go.
GANDALF
hurried
No!
ARAGORN
They must be warned!
GANDALF
They will be.
low voice, to ARAGORN
You must come to Minas Tirith by another road.
cryptic
Follow the river, look to the black ships.
louder, to all
Understand this, things are now in motion that cannot be undone.
GANDALF turns on his heel ... and stares at a surprised PIPPIN.
GANDALF
I ride for Minas Tirith! And I won't be going alone!
EXT. EDORAS STREETS - DAWN
ANGLE ON: GANDALF hurries along the STREETS ... PIPPIN and MERRY run alongside trying to KEEP UP...
GANDALF
Of all the inquisitive Hobbits, Peregrin Took, you are the worst! Hurry, hurry!
PIPPIN catches up to MERRY.
PIPPIN
worried
Where are we going?
MERRY
Why did you look - why do you always have to look?
PIPPIN
subdued
I don't know. I can't help it.
MERRY turns away...
MERRY
You never can.
PIPPIN
lightly
I'm sorry, all right? I won't do it again.
This is too much for MERRY. He turns on PIPPIN.
MERRY
Don't you understand ... the Enemy thinks you have the Ring ... he's going to be looking for you, Pip. They have to get you out of here!
PIPPIN
And you. You're coming with me ... Merry?
MERRY
Come on!
PUSH IN: PIPPIN’S face as MERRY strides away.
CUT TO:
INT. EDORAS STABLES – DAWN
ANGLE ON: PIPPIN is dumped unceremoniously onto the back of SHADOWFAX as GANDALF hurriedly prepares to leave...
PIPPIN
nervous
How far is Minas Tirith?
GANDALF
Three days ride, as the Nazgûl flies, and you better hope we don't have one of those on our tail.
MERRY thrusts a SMALL PACKAGE into PIPPIN’S HAND...
MERRY
Here - something for the road.
PIPPIN stares down at the leather-bound bundle of PIPE-WEED.
PIPPIN
The last of the Longbottom Leaf.
MERRY
I know you've run out ... You smoke too much, Pip.
PIPPIN
But we'll see each other soon?
A WORRIED MERRY exchanges glances with GANDALF.
PIPPIN
Won’t we?
MERRY
I don't know... I don't know what's going to happen.
GANDALF mounts SHADOWFAX.
PIPPIN
rising panic
Merry?
GANDALF spurs the GREAT HORSE forward.
GANDALF
Run Shadowfax. Show us the meaning of haste.
PIPPIN
panicked
Merry!
SHADOWFAX thunders out of the STABLES!
CLOSE ON: MERRY’S devastated face.
EXT. GATES OF EDORAS – DAY
ANGLE ON: SHADOWFAX carries GANDALF and PIPPIN out of the GATE and down the WINDING ROAD towards the PLAINS OF ROHAN.
EXT. EDORAS GATES LOOK-OUT – DAY
ANGLE ON: MERRY clambers up a WATCHTOWER, ARAGORN in pursuit.
ANGLE ON: The SMALL FIGURE as he watches his best friend DISAPPEAR into the DISTANCE...
CLOSE ON: ARAGORN ... he knows what it is to lose someone.
EXT. RIVENDELL FOREST - DAY
WIDE: ARWEN – escorted by a SMALL ENTOURAGE of ELVES – rides through the gathering darkness of a PINE FOREST.
ELROND (V.O.)
Take her by the safest road. A ship lies anchored in the Grey Havens. It waits to carry her across the sea ... the last journey of Arwen Undómiel.
SLOW MOTION: As ARWEN rides through the FOREST, the FIGURE of a SMALL BOY of about 5 SUDDENLY runs across the path in front of her.
ARWEN reigns in ASFALOTH ... something about the BOY intrigues her – but she does not know why...
As ARWEN watches the BOY move away, the TREES begin to thin ... the BOY continues running. One by one, the TREES TRANSFORM into TALL WHITE PILLARS.
ARWEN’S POV: The BOY now stands within a VISION of the majestic architecture of the great Gondorian city of MINAS TIRITH.
A SILHOUETTED FIGURE appears in the distance and moves towards the CHILD ... the BOY runs to the FIGURE.
ARWEN watches as the FIGURE holds out its arms – swinging the LAUGHING CHILD into the AIR...
The Figure turns to reveal ... ARAGORN, a little older, dressed in the casual finery of a GONDORIAN NOBLE.
CLOSE ON: The CHILD, now in ARAGORN’S ARMS, looks directly at ARWEN ... it is a QUIET LOOK filled with INFINITE SADNESS.
ARWEN’S eyes drop to the CHILD’S CHEST ... around the CHILD’S neck hangs the EVENSTAR...
CLOSE ON: ARWEN as she realizes she is staring at a future that can never be, the CHILD she and ARAGORN will never have.
INSERT: ELROND speaking to his daughter...
ELROND (V.O.)
Arwen, there is nothing for you here ... only death.
ARWEN shuts her eyes ... when she opens them again, the VISION is gone ... she is staring at DARK TREES once more.
FIGWIT (O.S.)
Lady Arwen?
ARWEN turns towards her COMPANION who stares at her, concerned.
FIGWIT
We cannot delay.
SUDDENLY: ARWEN wheels ASFALOTH around ... riding away.
FIGWIT
calling
My Lady!
EXT. RIVENDELL – DAY
WIDE SHOT: ARWEN’S HORSE gallops over the BRIDGE and through the GATES into RIVENDELL.
EXT. ELROND’S BALCONY, RIVENDELL – DAY
ANGLE ON: ELROND seated alone ... ARWEN runs up the STEPS towards him ...
ARWEN
What did you see?
CLOSE ON: ELROND stands – stunned.
ELROND
Arwen?
ANGLE ON: ARWEN breathing hard, walking towards ELROND with fierce light in her eyes.
ARWEN
You have the gift of foresight – tell me what you have seen.
CLOSE ON: ELROND - his face grim.
ELROND
I looked into your future and I saw death.
ARWEN
There is also life.
Her father turns away...
ARWEN
You saw there was a child... you saw my son.
ELROND stares into space, the fight seems to go out of him. He won’t look at her...
ELROND
quietly
That future is almost gone.
ARWEN
But it is not lost...
ELROND
Nothing is certain.
ANGLE ON: ARWEN gently takes her FATHER’S face in her hands and turns him toward her...
ARWEN
Some things are certain. If I leave him now, I will regret it forever.
whisper
Ada, it is time.
INSERT IMAGE: A HOODED FIGURE ascends a CURVED STAIRCASE towards a GALLERY ... The FIGURE stops before a STATUE that holds the BROKEN SHARDS of an ancient sword in its arms.
ARWEN (V.O.)
From the ashes a fire shall be woken, a light from the shadow shall spring, renewed shall be blade that was broken...
INSERT IMAGE: The BLADE shattering in several fragments as ISILDUR brandishes NARSIL at SAURON.
ARWEN (V.O.)
The crownless again shall be King...
CLOSE ON: The HOODED FIGURE looks up into the sorrowful face of the STATUE ... The figure is ARWEN...
ARWEN (V.O.)
Reforge the sword.
INT. ARWEN’S CHAMBER, RIVENDELL - NIGHT
ANGLE ON: ELROND stares at his daughter, unwavering...
ARWEN
Ada...
ANGLE ON: ELROND turns away...
ANGLE ON: ARWEN in ANGUISH, sits on her bed, the book falls to the FLOOR...
CLOSE ON: ELROND picks up her JOURNAL and takes one of her hands in his...
ELROND
Your hands are cold.
distressed
The life of the Eldar is leaving you.
CLOSE ON: ELROND’S despair is plain...
ELROND
It has begun.
ARWEN
This was my choice. Ada ... Whether by your will or not, there is no ship now that can bear me hence.
ANGLE ON: ELROND, he understands now that to protect his daughter, he must trust her...
INSERT IMAGES: A BROKEN SWORD GLOWS with RED HEAT ... It’s BLADE in SEVERAL FRAGMENTS.
IMAGE: A HEAVY HAMMER pounds the RED-HOT BLADE on an ANVIL ... As ELVEN-SMITHS TEMPER the STEEL.
IMAGE: ELROND’S FACE lit by FLICKERING FIRE as SPARKS fly in the RIVENDELL FORGE.
CLOSE ON: The SWORD is withdrawn from a POOL OF STEAMING WATER ... LIGHT SHIMMERS as the WATER DROPS slide down the BLADE of NARSIL, the SWORD that was broken has been remade.
DISSOLVE TO:
EXT. FOOTHILLS OF WHITE MOUNTAINS – NIGHT
CLOSE ON: PIPPIN asleep ... GANDALF’S PROTECTIVE ARM around him...
...as SHADOWFAX THUNDERS through the NIGHT.
DISSOLVE TO:
EXT. FOOTHILLS OF WHITE MOUNTAINS – DAY
ANGLE ON: SHADOWFAX powers along the COUNTRYSIDE.
ANGLE ON: PIPPIN, huddled in front of GANDALF, the WIND sailing through his hair.
GANDALF
We have just passed into the realm of Gondor.
EXT. MINAS TIRITH – DAWN
ANGLE ON: SHADOWFAX gallops up onto a LOW RIDGE...
ANGLE ON: Before them is the DARK MASS of Mount Mindolluin, its tall WHITE FACE whitening in the RISING SUN. Upon its out-thrust knee is the Guarded City: MINAS TIRITH.
With SEVEN WALLS OF WHITE STONE, so strong and old that it seems to have been not built, MINAS TIRITH looks carven by giants out of the bones of the earth.
GANDALF
Minas Tirith ... City of the Kings.
Suddenly, the SUN climbs over the eastern hills, and sends forth a SHAFT OF SUNLIGHT that GLEAMS against the face of the CITY.
The TOWER OF ECTHELION stands high within the topmost walls.
WHITE BANNERS break and FLUTTER from the BATTLEMENTS in the morning breeze.
EXT. MINAS TIRITH STREETS – DAY
GANDALF steering SHADOWFAX up the STEEP STREETS of MINAS TIRITH.
ANGLE ON: The stares of frightened GONDORIANS as GANDALF and PIPPIN gallop through the WINDING STREETS...
AERIAL SHOT: SHADOWFAX, carrying GANDALF and PIPPIN up towards the 7th LEVEL.
MINAS TIRITH is built in 7 LEVELS – each behind a CIRCULAR DEFENSIVE WALL. Each level rises – the city reaches a height of nearly 1000 FEET on its TOPMOST LEVEL.
A towering BASTION of NATURAL ROCK – shaped like a sharp ship’s prow – bisects the city from the 2nd LEVEL to the TOP.
EXT. MINAS TIRITH, COURT OF THE KINGS – DAY
SHADOWFAX arrives at a GREAT CITADEL on the SUMMIT of the CITY – 1000 FEET above the PELENNOR FIELDS.
GANDALF and PIPPIN dismount, leaving the GUARDS of the CITADEL to tend to SHADOWFAX. GANDALF hurries off...
CLOSE ON: PIPPIN as he takes in his surroundings, his eye caught by a DEAD TREE that stands in the middle of the COURT, FOUR SOLEMN CITADEL GUARDS standing sentry around it.
PIPPIN
whisper
It's the tree.
hurrying after GANDALF
Gandalf! Gandalf!
GANDALF
Yes, the White Tree of Gondor. The tree of the King.
GANDALF leads PIPPIN across a FLAT COURT of WHITE STONES, surrounded by GREEN LAWNS ... towards a GREAT HALL beneath the GLEAMING TOWER.
GANDALF
Lord Denethor, however, is not the king. He is a steward, only. A caretaker of the throne.
GANDALF lowers his voice, as they approach the TOWER HALL.
GANDALF
quietly
Now, listen carefully. Lord Denethor is Boromir's father. To give him news of his beloved son's death would be most unwise ... And do not mention Frodo ... Or the Ring ... And say nothing of Aragorn, either.
hesitates
In fact, it's better if you don't speak at all, Peregrin Took.
CLOSE ON: PIPPIN, suitably chastened, nods.
INT. MINAS TIRITH TOWER HALL – DAY
ANGLE ON: A LONG SOLEMN HALL ... with ROWS of BLACK MARBLE PILLARS. Between the pillars stand a company of TALL KINGS carved in cold STONE.
GANDALF strides down the HALL, with PIPPIN following obediently behind.
At the FAR END, upon a DAIS OF MANY STEPS, sits a LARGE, EMPTY THRONE ... and on the wall is the IMAGE of a FLOWERING WHITE TREE set in GEMS.
At the Foot of the DAIS, in a small STONE CHAIR, sits an OLD MAN, gazing at his lap: DENETHOR – the Lord Steward of GONDOR.
GANDALF
Hail Denethor, son of Ecthelion, Lord and Steward of Gondor.
DENETHOR does not look up as GANDALF and PIPPIN approach.
GANDALF
I come with tidings in this dark hour - and with counsel.
DENETHOR slowly raises COLD EYES...
DENETHOR
bitter
Perhaps you come to explain this?
DENETHOR holds up BOROMIR’S BROKEN HORN...
DENETHOR
Perhaps you come to tell me why my son is dead.
CLOSE ON: PIPPIN remembering...
INSERT IMAGE: BOROMIR, as URUK-HAI arrows thud into his body, he falls to his KNEES...
PIPPIN starts forward unable to say nothing...
PIPPIN
Boromir died to save us ... my kinsman and me ... he fell, defending us from many foes.
CLOSE ON: DENETHOR, pain flickers in his eyes.
GANDALF
hurried whisper
Pippin!
PIPPIN drops to his knee offering DENETHOR his SWORD...
PIPPIN
I offer you my service, such as it is, in payment of this debt.
DENETHOR looks at PIPPIN blankly, overcome with grief.
GANDALF
to PIPPIN
Get up!
addressing DENETHOR
My Lord, there will be a time to grieve for Boromir, but it is not now. War is coming ... the Enemy is on your doorstep. As Steward, you are charged with the defense of this city. Where are Gondor's armies?
DENETHOR’S gaze turns slowly on GANDALF...
GANDALF
You still have friends - You are not alone in this fight. Send word to Théoden of Rohan. Light the beacons.
DENETHOR smiles at GANDALF, as if amused by something.
DENETHOR
softly
You think you are wise, Mithrandir, yet for all your subtleties you have not wisdom. Do you think the eyes of the White Tower are blind? I have seen more than you know. With your left hand you would use me as a shield against Mordor, and with your right you would seek to supplant me.
CLOSE ON: GANDALF looks shocked. DENETHOR’S eyes NARROW.
DENETHOR
contemptuous
I know who rides with Théoden of Rohan. Oh, yes. Word has reached my ears of this Aragorn, son of Arathorn, and I tell you now, I will not bow to this Ranger from the North, last of a ragged house long bereft of Lordship.
GANDALF
stung
Authority is not given you to deny the return of the King – Steward!
DENETHOR
explosive
The rule of Gondor is mine, and no other's!
CLOSE ON: PIPPIN, horrified. GANDALF looks at DENETHOR closely for a moment, then turns on his heel to leave. PIPPIN follows.
GANDALF
Come.
GANDALF and PIPPIN stride from the TOWER HALL ... DENETHOR slumps back into his SEAT.
INT. MINAS TIRITH, PIPPIN’S QUARTERS - NIGHT
ANGLE ON: PIPPIN is carefully laying out a SMALL UNIFORM of the ROYAL GUARD on a bed.
PIPPIN
So I imagine this is just a ceremonial Position ... I mean, they don't actually expect me to do any fighting ... do they?
WIDE: GANDALF STANDING QUIETLY on a BALCONY that overlooks the GREAT CITY.
GANDALF
You're in the service of the Steward Now - You're going to have to do as you're told, Peregrin Took...
under his breath
Guard of the Citadel!
EXT. MINAS TIRITH BALCONY – NIGHT
ANGLE ON: PIPPIN as he stares up at the vast NIGHT SKY.
PIPPIN
It's so quiet.
GANDALF watches the young HOBBIT.
GANDALF
It's the deep breath before the plunge.
PIPPIN
I don't want to be in a battle ... but waiting on the edge of one I can't escape is even worse.
tense
Is there any hope, Gandalf - for Frodo and Sam?
GANDALF joins PIPPIN as they look towards the distant, jagged MOUNTAINS of MORDOR...
GANDALF
There never was much hope.
PIPPIN looks up at him, unnerved. GANDALF gives him a small, self-deprecating smile...
GANDALF
Just a fool's hope.
GANDALF and PIPPIN share a quiet moment as they stare out towards the FIERY SKY over MORDOR.
GANDALF (V.O.)
grim
Our enemy is almost ready, his full strength gathered. Not only Orcs, but men as well.
INSERT IMAGE: GIANT MÛMAKIL carrying ARMIES upon their backs.
GANDALF (V.O.)
Legions of Haradrim from the South...
INSERT IMAGE: CORSAIR SHIPS sail up the RIVER...
GANDALF (V.O.)
Mercenaries from the coast ... All will answer Mordor's call.
ANGLE ON: GANDALF ... he is almost talking to himself now... like a man unable to prevent a sure disaster.
GANDALF
This will be the end of Gondor as we know it. Here the hammerstroke will fall the hardest.
INSERT IMAGE: The BATTLE-SCARRED CITY of OSGILIATH – last bastion between MINAS TIRITH and MORDOR...
GANDALF (V.O.)
If the river is taken, if the garrison at Osgiliath falls, the last defense of this city will be gone.
CLOSE ON: PIPPIN ... desperately seeking reassurance.
PIPPIN
But we have the White Wizard, that's got to count for something.
GANDALF looks down at PIPPIN, he says nothing...
PIPPIN
nervous
Gandalf?
GANDALF stares into the distance as if seeing something in his mind’s eye.
INSERT IMAGE: A TOWERING, HOODED FIGURE, DRESSED in BLACK, is being dressed in ARMOUR by attendant ORCS...
GANDALF (V.O.)
Sauron has yet to release his deadliest servant ... The one who will lead Mordor’s armies in war, the one they say no living man can kill.
CLOSE ON: GANDALF still staring intently as if facing his enemy in person.
GANDALF
The Witch-King of Angmar...
he looks down at a startled PIPPIN
You've met him before...
ANGLE ON: PIPPIN looks up at GANDALF, afraid to ask...
GANDALF
He stabbed Frodo on Weathertop.
INSERT IMAGE: FRODO screaming as the MORGUL BLADE is driven into his SHOULDER...
PIPPIN blanches at the MEMORY...
GANDALF
He is the Lord of the Nazgûl - the greatest of the nine...
EXT. MINAS MORGUL – NIGHT
GANDALF (V.O.)
And Minas Morgul is his lair.
ANGLE ON: FRODO and SAM clamber into a SMALL GULLY beside a ROUGH-HEWN ROAD ... GOLLUM CAREFULLY peers OVER the lip of the GULLY...
ANGLE ON: MINAS MORGUL, a MASSIVE DEAD CITY, set upon a ROCKY KNEE at the HEAD OF THE Morgul Valley. CORRUPT and LOATHSOME, it glows with a SICKLY LUMINOUS LIGHT – like a CORPSE CANDLE.
TWO HUGE, BESTIAL STONE STATUES guard the BRIDE that leads to the CITY...
GOLLUM
The Dead City, very nasty place, full of ... enemies.
GOLLUM, FRODO and SAM hurry from their COVER scampering in the SHADOWS towards MINAS MORGUL...
GOLLUM
Quick! Quick! They will see, they will see.
CLOSE ON: FRODO ... he LOOKS UP at the HIDEOUS STATUES. His SENSES START REELING.
GOLLUM
Come away, come away. Look! We have found it.
FRODO and SAM look AGHAST at the sight of a NARROW, NEAR-VERTICAL STAIRCASE, cut into the ROCK-FACE ... Directly in FRONT of the MINAS MORGUL GATES.
GOLLUM
The way into Mordor!
ANGLE ON: Following the STAIRS ... HIGHER and HIGHER up the sheer western side of the MORGUL VALLEY – to the HIGH PEAKS of the razor-like MOUNTAINS OF MORDOR.
GOLLUM
The secret stairs ... climb!
SUDDENLY! FRODO staggers across the ROAD ... as if some FORCE, other than his own will, is at work! He lurches towards the BRIDGE ... towards MINAS MORGUL!
SAM
No, Mr. Frodo!
GOLLUM
desperate
Not that way!
SAM runs after FRODO, catching him in his arms as he STUMBLES.
GOLLUM
What's it doing?
SAM
No!
SAM and GOLLUM pull FRODO from the BRIDGE.
FRODO
disoriented
They're calling me!
FRODO falls to the GROUND.
AT THAT MOMENT: the GROUND QUIVERS, and a great RUMBLING NOISE rolls across the ground and ECHOES in the mountains.
The cold, dull MORGUL VALLEY is suddenly VIOLENT and FIERCE, as UPRUSHING FLAME springs from MOUNT DOOM.
MINAS MORGUL ANSWERS: A FLARE of LIVID LIGHTNING, FORKS of BLUE FLAME, SPRING UP from the TOWER into the SULLEN CLOUD.
INTERCUT WITH:
EXT. MINAS TIRITH BALCONY – NIGHT
ANGLE ON: VIOLENT FIERY FLASHES light the CLOUD above MORDOR ... SHARP THUNDER rolls across 40 MILES to MINAS TIRITH.
CLOSE ON: PIPPIN looking on in FRIGHTENED AWE. GANDALF’S comforting HAND rests on his shoulder.
INTERCUT WITH:
EXT. MINAS MORGUL – NIGHT
SAM and GOLLUM lead FRODO to the STAIRS...
ABOVE MINAS MORGUL the SKY is BRIGHT with LIGHT as the CITY, erupts...
GOLLUM
Hide! Hide!
INTERCUT WITH:
EXT. MINAS TIRITH BATTLEMENTS – NIGHT
ANGLES ON: FACES of SOLDIERS and CIVILIANS of MINAS TIRITH as they watch from the PARAPETS of the CITY.
INTERCUT WITH:
EXT. MINAS MORGUL – NIGHT
FRODO and SAM sink to the ground, holding their hands against their ears, as out of the CITY comes a RENDING SCREECH ... SHIVERING, rising swiftly to a PIERCING PITCH beyond the range of hearing. The terrible CRY ends, falling back through a long sickening WAIL, to SILENCE.
ANGLE ON: FRODO slowly RAISES HIS HEAD ... across the NARROW VALLEY, directly opposite the HOBBITS, the LORD OF THE NAZGÛL – the WITCH KING – suddenly RISES UP out of the DEAD CITY on his FELL-BEAST!
...as the WITCH KING settles on the BATTLEMENTS of MINAS MORGUL.
His DARK HEAD turns this way and that, sweeping the shadows with unseen eyes – as if SENSING the RING!
ANGLE ON: FRODO breaking out into a COLD SWEAT. He squeezes his eyes shut, clutching at his SHIRT as if it’s on FIRE!
FRODO
gasping
I can feel his blade!
THE CAVERNOUS GATE of MINAS MORGUL swings OPEN...
...and a HUGE ARMY MARCHES OUT!
RANK upon RANK of ARMOUR CLAD ORCS, moving SWIFTLY and SILENTLY, pass close to FRODO and SAM in an ENDLESS STREAM of RAGGED COLUMNS!
EXT. MINAS TIRITH BALCONY – NIGHT
CLOSE ON: GANDALF...
GANDALF
quiet
We come to it at last ... the great battle of our time.
INTERCUT WITH:
EXT. MINAS MORGUL - NIGHT
ANGLE ON: 75,000 ORCS MARCHING TO WAR, just below FRODO and SAM.
GANDALF (V.O.)
This war is long planned. Sauron has hated The West through many ages ... It is a Hatred that flows from the depths of time, Across the deeps of the Sea.
The WITCH KING SWOOPS down the VALLEY to join the HEAD of his ARMY. He vanishes into the GLOOM – a shadow into shadow.
CLOSE ON: GOLLUM peers out from his stony hiding place.
GOLLUM
urgent
Come, Hobbits. We climb - we must climb!
ANGLE ON: FRODO, SAM and GOLLUM climb the STONY STAIRS high above the MARCHING ARMY.
EXT. MINAS TIRITH BALCONY – NIGHT
ANGLE ON: GANDALF ... thinking, calculating...
GANDALF
to himself
The board is set, the pieces are moving.
EXT. MINAS TIRITH SIXTH LEVEL – NIGHT
ANGLE ON: GANDALF striding BACK STREETS of the CITY ... so DETERMINED and PURPOSEFUL is he, that PIPPIN has to RUN to keep up. GANDALF suddenly stops and looks down at PIPPIN...
GANDALF
Peregrin Took, my lad, there is a task now to be done. Another opportunity for one of the Shire-folk to prove their great worth!
GANDALF kneels down and looks at PIPPIN earnestly, his hand on PIPPIN’S shoulder.
GANDALF
You must not fail me.
GANDALF watches as PIPPIN hurries away.
EXT. WEST OSGILIATH, RIVER ANDUIN – NIGHT
WIDE ON: An ANCIENT STONE BRIDGE which spans the RUINS of EAST and WEST OSGILIATH – a once MIGHTY GONDORIAN CITY.
WIDE ON: ITHILIEN RANGERS patrolling the BRIDGE and the RIVERBANK.
WEST OSGILIATH has fallen into disrepair, but the DESOLATION of EAST OSGILIATH is more pronounced – it is held by the FORCES of MORDOR.
CAMERA tracks down beneath the BRIDGE to the DARK WATERS ... catching a STEALTHY MOVEMENT...
ANGLE ON: MANY BOATS, carrying MURDEROUS-LOOKING ORCS, are quietly tracking down the RIVER. On board several HUNCHED FIGURES steer with LONG OARS.
GOTHMOG
to his oarsmen
Quiet!
EXT. WEST OSGILIATH, RIVER ANDUIN - NIGHT
CLOSE ON: FARAMIR, CAPTAIN OF GONDOR, as he issues orders to his SOLDIERS.
FARAMIR
urgent
To the river – quick!
ANGLE ON: ITHILIEN RANGERS take position; they are all WEATHERED, HARDENED, PROFESSIONAL SOLDIERS ... Watchful, ready, waiting...
GOTHMOG
Faster!
ON THE RIVER the BOATS quietly advance.
ORC COMMANDER
Draw swords!
ANGLE ON: FARAMIR and his SOLDIERS lie in wait. As the BOATS arrive, HUNDREDS of ORCS race ashore. FARAMIR steps out, his SWORD drawn. A FIERCE BATTLE ensues, but FARAMIR is unable to stop the advance as HUNDREDS OF ORCS cross the WIDE BRIDGE into WEST OSGILIATH.
EXT. MOUNT MINDOLLUIN – DAWN
HIGH ANGLE ON: A DIZZYING VIEW ... Looking down on MINAS TIRITH, 1000 FEET BELOW, as PIPPIN desperately scrambles up the ROCKY MOUNTAINSIDE.
EXT. MINAS TIRITH BEACON – DAWN
PIPPIN clambers over a ROCKY LEDGE and ducks behind a STONE WALL ... panting HEAVILY.
ANGLE ON: An ancient STONE LEDGE holds a GREAT PILE of FIREWOOD, secured in stacked bundles ... The MINAS TIRITH BEACON!
TWO bored CITADEL GUARDS sit chatting ... passing the long hours.
INTERCUT WITH:
EXT. MINAS TIRITH STREETS – DAWN
ANGLE ON: GANDALF as he waits tensely below...
INTERCUT WITH:
EXT. MINAS TIRITH BEACON – DAWN
ANGLES ON: PIPPIN as he stealthily manages to POUR OIL on the WOOD and set a FLAME to it!
Within SECONDS, the GREAT PYRE is alight! The GUARDS look on in TOTAL SURPRISE as the FLAMES ERUPT into the TWILIGHT SKY.
INTERCUT WITH:
EXT. MINAS TIRITH STREETS
ANGLE ON: GANDALF as the BEACONS burst into FLAMES ... His eyes flash briefly with TRIUMPH before he hurries off...
EXT. MINAS TIRITH BATTLEMENTS – DUSK
ANGLE ON: The BEACON glows BRIGHTLY on the slopes on MOUNT MINDOLLUIN, high above MINAS TIRITH...
PULL BACK: GANDALF hurries to the BATTLEMENT, looking further west along the WHITE MOUNTAINS.
GANDALF
to himself
Amon Dîn ... come on...
ANGLE ON: a bright FIRE ignites on a DISTANT MOUNTAIN PEAK.
NOISY COMMOTION in the city as PEOPLE realize the BEACONS have been lit!
GUARD
The beacon! The beacon at Amon Dîn is lit!
FLASH INSERT: DENETHOR staring at the BEACON from the CITADEL WINDOW ... a look of BLACK FURY on his face.
ANGLE ON: GANDALF, a strange smile plays on his face...
GANDALF
to himself
Hope is kindled.
CUT TO:
EXT. WHITE MOUNTAINS AERIAL – NIGHT
AERIAL SHOT: MOVING over the WHITE MOUNTAINS... as the TRAIL of GREAT FIRES slowly winds from PEAK TO PEAK.
EXT. EDORAS COURTYARD – DAWN
ANGLE ON: A ROCKY PEAK high above EDORAS ... a GREAT BEACON FIRE is IGNITED.
ON THE SOUNDTRACK: A BELL TOLLS urgently!
CLOSE ON: ARAGORN looks tensely out across the MOUNTAINS...
PULL BACK ... ARAGORN runs towards the GOLDEN HALL.
INT. EDORAS, GOLDEN HALL – DAWN
CLOSE ON: ARAGORN bursts into the GOLDEN HALL.
ARAGORN
The beacons of Minas Tirith! The beacons are lit! Gondor calls for aid!
ANGLE ON: THÉODEN looks up, startled.
CLOSE ON: ÉOWYN, ÉOMER turn to look at their UNCLE ... tension builds.
CLOSE ON: THÉODEN, his head lowered ... Slowly, it rises – he looks ARAGORN in the EYE.
THÉODEN
Then Rohan will answer. Muster the Rohirrim!
EXT. EDORAS COURTYARD – DAWN
WIDE ON: EDORAS LOOKOUT ... A SOLDIER RINGING the GREAT BELL in alarm as below, in the COURTYARD, SOLDIERS mount their STEEDS amid great activity.
ANGLE ON: THÉODEN striding purposefully outside, flanked by ÉOMER and his SOLDIERS...
THÉODEN
Assemble the Men at Dunharrow - as many Men as can be found. You have two days ... On the third, we ride for Gondor ... and war.
ANGLE ON: THÉODEN strides onto the PARAPETS...
THÉODEN
Gamling, make haste across the Riddermark ... Summon every able-bodied man to Dunharrow!
ANGLE ON: THÉODEN watches as below the SOLDIERS prepare.
ANGLE ON: ÉOWYN hurriedly pulling on RIDING GLOVES, preparing to mount her HORSE.
ARAGORN
You ride with us?
ÉOWYN turns and runs SMACK into ARAGORN...
ÉOWYN
Just to the encampment. It's tradition for the women of the Court to farewell the Men.
ARAGORN smiles ... reaching past her, he lifts a cover to reveal a SWORD, strapped to the side of the saddle of her HORSE.
ÉOWYN deftly pulls the cover back down. She looks at ARAGORN.
ÉOWYN
softly
The Men have found their Captain - they will follow you into battle, even to death.
quietly
You have given us hope.
PULL BACK: to reveal THÉODEN stares around at the STREETS and PEOPLE of EDORAS ... it is as if he knows he will not see this place again.
THÉODEN (V.O.)
So ... It is before the walls of Minas Tirith that the doom of our time will be decided.
ANGLE ON: ÉOMER astride his horse, calls to the assembled SOLDIERS...
ÉOMER
Now is the hour! Riders of Rohan - Oaths you have taken. Now, fulfill them all - For Lord and land!
EXT. PLAINS OF ROHAN – DAY
ANGLE ON: THÉODEN astride SNOWMANE, as he, ÉOMER, ARAGORN & MERRY and LEGOLAS & GIMLI ride out AMID a GREAT COLUMN of ROHIRRIM, THUNDERING towards DUNHARROW in the MOUNTAINS.
EXT. WEST OSGILIATH, RIVER ANDUIN – DAY
ANGLE ON: FARAMIR and his MEN are fighting a losing BATTLE against the MORDOR invasion.
MADRIL
We cannot hold them! The city is lost!
FARAMIR
Tell the Men to break up. We ride for Minas Tirith.
ON THE SOUNDTRACK: OMINOUS SOUNDS of WIND RISING ... HUGE WINGS BEATING...
SOLDIER
Nazgûl!
SPINNING ANGLE: FARAMIR looks up at the sky ... ITHILIEN RANGERS are suddenly nervous, frightened ... A HUGE SHADOW passes overhead!
FARAMIR
Take cover!
A SUDDEN TERRIFYING SHRIEK rends the AIR!
FARAMIR
Pull back! Pull back to Minas Tirith!
ANGLE ON: SOLDIERS RETREATING through the RUINS of the CITY as, high in the sky above, the NAZGÛL swoop...
ANGLE ON: MADRIL as he is cut down by an ORC...
CLOSE ON: MADRIL ... his breathing quick and shallow ... footsteps approach...
ANGLE ON: The HIDEOUSLY deformed features of GOTHMOG standing over the prone figure of the INJURED RANGER.
Grabbing a spear from a nearby underling, GOTHMOG drives the shaft into MADRIL’S chest...
CLOSE ON: GOTHMOG surveys the carnage with satisfaction.
GOTHMOG
The age of Men is over. The time of the Orc has come.
EXT. PELENNOR FIELDS – DAY
FARAMIR and a few survivors flee WEST OSGILIATH, desperately riding toward MINAS TIRITH ... in the SKY above DARK SHAPES pursue them...
ANGLE ON: SUDDENLY, from on HIGH, the NAZGÛL strike!
TILT DOWN ... following the NAZGÛL as it SWOOPS out of LOW-LYING, MURKY CLOUDS tossing MEN in the AIR like LIMP RAG-DOLLS!
AT THAT MOMENT: Across the PLAIN, a FIGURE clothed in WHITE rides towards them!
From the BATTLEMENTS of MINAS TIRITH, a call ... “The White Rider!”
EXT. PELENNOR FIELDS – DAY
WIDE ON: GANDALF as he spurs SHADOWFAX forward! PIPPIN clings tightly to the great horse’s MANE.
ANGLE ON: FARAMIR, SWORD in hand, remains at the REAR, trying desperately to fend off the DEADLY ASSAULT...
AGAIN the FELL-BEASTS DIVE low...
GANDALF thunders into view, raising his STAFF...
A SHAFT OF WHITE LIGHT suddenly stabs upwards! The NAZGÛL SWERVES AWAY from the LIGHT, as it pierces the LOW CLOUD!
For a BRIEF MOMENT, SUNLIGHT streams through the hole onto PELENNOR FIELDS ... The NAZGÛL circle away from the SUN RAYS, swiftly spiraling higher and higher.
The NAZGÛL defeated, GANDALF and the RANGERS ride towards the safety of MINAS TIRITH.
EXT. MINAS TIRITH GATES – DAY
ANGLE ON: IORLAS runs towards the GATES, yelling...
IORLAS
Open the Gates! Pull!
The GREAT GATES OPEN, allowing GANDALF, PIPPIN, FARAMIR and the OSGILIATH SURVIVORS to RIDE IN ... Nearly 100 WOUNDED AND SHOCKED MEN.
AS GANDALF pulls SHADOWFAX up...
FARAMIR
Mithrandir!
ANGLE ON: FARAMIR STEERS HIS HORSE through the CROWD towards GANDALF...
FARAMIR
They broke through our defenses. They have taken the bridge and the West Bank. Battalions of Orcs are crossing the River.
IORLAS
It is as the Lord Denethor predicted - long has he foreseen this doom!
GANDALF
Foreseen and done nothing!
FARAMIR suddenly STARES at PIPPIN. GANDALF reads the surprise in his eyes.
GANDALF
Faramir? ... This is not the first Halfling to have crossed your path?
FARAMIR shakes his head.
FARAMIR
No.
PIPPIN
disbelief
You've seen Frodo and Sam?
FARAMIR NODS.
GANDALF
Where? When?
FARAMIR
In Ithilien, not two days ago. Gandalf - they are taking the road to the Morgul Vale.
GANDALF
shocked realisation
...And then the Pass of Cirith Ungol.
CLOSE ON: GANDALF, deeply troubled.
PIPPIN
What does that mean? What's wrong?
GANDALF
urgent
Faramir ... Tell me everything.
EXT. CIRITH UNGOL STAIRS – NIGHT
ANGLE ON: FRODO and SAM following GOLLUM up the dizzying STAIRWAY, carved into the SHEER CLIFF.
The STEPS are NARROW, UNEVENLY SPACED, and many are BROKEN. They are so STEEP that FRODO and SAM climb as if on a LADDER, their desperate FINGERS clinging to the STEPS ABOVE – trying not to look at the LONG BLACK FALL below them.
ANGLE ON: FRODO’S foot slips and for a brief moment he is HANGING PRECARIOUSLY from the ROCK-FACE.
GOLLUM
Careful, Master - careful! Very far to fall. Very dangerous on the stairs.
EXT. CIRITH UNGOL LEDGE - NIGHT
ANGLE ON: GOLLUM peering down from ABOVE ... he has reached a SMALL LEDGE.
GOLLUM
Come, Master.
CLOSE ON: FRODO tries to CLAMBER UP onto the LEDGE ... as he does, the RING slips out of his SHIRT and DANGLES in FULL VIEW of GOLLUM!
CLOSE ON: GOLLUM rears back in shock ... tenses like a CAT, EYES WIDENING.
GOLLUM
dreamlike
Come to Sméagol.
ANGLE ON: FRODO, head bowed, trying to pull himself up. He doesn’t notice GOLLUM’S HAND reaching for the RING!
CLOSE ON: GOLLUM’S FINGERS ... closing in on the RING...
ANGLE ON: SAM, still TEETERING on the PRECIPITOUS STAIRS, draws HIS SWORD!
SAM
alarmed yell
Mr. Frodo!
STARTLED, FRODO looks down at SAM, losing his footing in the process...
SAM
Get back you! Don't touch him!
ANGLE ON: SAM’S horrified face as...
GOLLUM’S out-stretched HAND suddenly GRASPS FRODO’S ARM pulling him SAFELY onto the LEDGE.
GOLLUM glares down at SAM.
GOLLUM
Why does he hates poor Sméagol? What has Sméagol ever done to him? Master?
CLOSE ON: GOLLUM blinks, masking the MALICE of his EYES with their heavy pale lids.
GOLLUM
Master carries heavy burden ... Sméagol Knows ... Heavy, heavy burden. Fat one cannot know. Sméagol look after Master.
CLOSE ON: GOLLUM creeps CLOSE to FRODO and WHISPERS in his ear:
GOLLUM
rasping whisper
He wants it - he needs it! Sméagol sees it in his eyes. Very soon, he will ask you for it - you will see ... the Fat One will take it from you.
CLOSE ON: FRODO looking at SAM ... his hand strays to his NECK, closing tight around the RING.
CUT TO:
EXT. OSGILIATH – DAY
HIGH ABOVE OSGILIATH, the SINISTER PROFILE of the WITCH KING seated on a FELL-BEAST as GOTHMOG stands, awaiting his orders.
WITCH KING
clinical
Send forth all legions. Do not stop the attack until the city is taken. Slay them all.
GOTHMOG
What of the Wizard?
SLOWLY the WITH KING’S HEAD turns...
WITCH KING
I will break him.
EXT. MINAS TIRITH BATTLEMENTS - DAY
REACTIONS: OF GONDORIAN SOLDIERS upon the MINAS TIRITH BATTLEMENTS ... AWE ... FEAR ... TERROR!
ANXIOUS SOLDIERS crowd around GANDALF.
SOLDIER 1
worried
What of Théoden's Riders?
SOLDIER 2
Will Rohan’s army come?
SOLDIER 1
Mithrandir?
GANDALF
grim
Courage is the best defense that you have now.
CUT TO:
INT. MINAS TIRITH TOWER HALL – DAY
CLOSE ON: PIPPIN ... DRESSED in OVER-SIZED ARMOUR ... kneels before DENETHOR...
PIPPIN
nervous
Here do I swear fealty and service to Gondor, in peace or war, in living or dying, from this hour henceforth, until my lord release me, or death take me.
DENETHOR
And I shall not forget it, nor fail to reward that which is given...
ANGLE ON: DENETHOR proffers his RING which PIPPIN kisses...
DENETHOR
...fealty with love...
DENETHOR gently raises PIPPIN’S head ... DENETHOR’S eyes meet FARAMIR’S.
DENETHOR
...valor with honor...
DENETHOR crosses to a table ... Attendants BEGIN SERVING him a MEAL...
DENETHOR
...disloyalty with vengeance.
DENETHOR addresses his meal...
DENETHOR
reasonable
I do not think we should so lightly abandon the outer defenses; defenses that your brother long held intact.
FARAMIR
What would you have me do?
DENETHOR
I will not yield the River and Pelennor unfought - Osgiliath must be retaken.
FARAMIR
My Lord, Osgiliath is overrun.
DENETHOR
Much must be risked in war. Is there a captain here who still has the courage to do his Lord's will?
CLOSE ON: FARAMIR as he finally realises the truth.
FARAMIR
quietly
You wish now that our places had been exchanged, that I had died and Boromir had lived?
CLOSE ON: For a brief second, DENETHOR seems to hesitate, then...
DENETHOR
coldly
Yes, I wish that.
FARAMIR
Since you are robbed of Boromir, I will do what I can in his stead.
ANGLE ON: FARAMIR bows low to DENETHOR, then turns to leave, stops, turns back...
FARAMIR
If I should return ... think better of me, father.
DENETHOR
That will depend on the manner of your return.
DENETHOR continues with his meal. FARAMIR exits.
CUT TO:
EXT. CIRITH UNGOL LEDGE – DAWN
AERIAL SHOT: ... HIGH above MINAS MORGUL, on the SMALL LEDGE next to the STAIRS, LIE the FIGURES of FRODO, SAM and GOLLUM.
SAM watches a sleeping GOLLUM suspiciously as he desperately tries to stay awake. SLOWLY, INEVITABLY, SAM falls asleep.
CLOSE ON: GOLLUM’S EYES SNAP OPEN ... he sits up and quietly crawls towards SAM’S KNAPSACK.
SAM breathes deeply now, heavily asleep.
GOLLUM grimaces in DISTASTE as he pulls out the LEMBAS BREAD ... Quietly he SPRINKLES CRUMBS over the sleeping SAM.
ANGLE ON: GOLLUM as he throws the remaining LEMBAS BREAD over the cliff.
CLOSE ON: SAM’S EYES flick open ... GOLLUM spins around, caught off guard...
SAM
What are you up to? Sneaking off, are we?
SMÉAGOL
prevaricating
Sneaking? Sneaking? Fat Hobbit is always so polite. Sméagol shows them secret ways that nobody else could find and they say ”Sneak!”, “Sneak!” Very nice friends, oh yes, my Precious, very nice.
SAM
Alright, alright - You just startled me is all.
peering over the cliff’s edge
What were you doing?
SMÉAGOL
sly
Sneaking!
Too exhausted to argue, SAM turns away.
SAM
Fine, have it your own way.
SAM gently shakes FRODO’S shoulder.
SAM
Sorry to wake you, Mr. Frodo. We have to be moving on.
SAM rummages through his KNAPSACK, looking for a bite to eat.
FRODO sits up slowly.
FRODO
It's dark still.
SAM
It's always dark here-
CLOSE ON: SAM stops rummaging ... SHOCK on his face.
SAM
It's gone ... the Elven bread!
FRODO
alarmed
What? That's all we have left!
SAM slowly turns to GOLLUM...
SAM
dawning realization
He took it! He must have!
GOLLUM
shocked
Sméagol? No, no, not poor Sméagol. Sméagol hates nasty Elf bread!
SAM
You're a lying wretch! What did you do with it?
FRODO
He doesn't eat it ... he can't have taken it.
CLOSE ON: GOLLUM slaps his hand against SAM’S JACKET ... sending LEMBAS CRUMBS RAINING DOWN!
GOLLUM
What's this? Crumbs on his jacketses!
fake outrage
He took it! He took it! I seen him, he's always stuffing his face when Master's not looking!
SAM
angry
That's a filthy Lie!
SAM is ENRAGED ... he throws himself at GOLLUM ... punching him!
SAM
yelling
You stinking two-faced sneak! Call me a thief...
FRODO
yelling
Sam! Stop it!
FRODO pulls SAM off GOLLUM.
SAM
yelling
I'll kill him! I’ll kill him!
FRODO
No, Sam!
FRODO COLLAPSES on the GROUND!
CLOSE ON: SAM’S horrified face!
SAM
Alright, I'm sorry, I didn't mean for it to go so far. I was angry ... Here, let's rest up a bit.
SAM attempts to fuss around FRODO...
FRODO
exhausted
I'm alright.
SAM
No, no, you're not alright! You're exhausted. It's that Gollum; it's this place; it's that thing around your neck. I could help a bit ... I could carry it for a while - share the load.
CLOSE ON: A terrible light comes into FRODO’S eyes as he STARES into the EARNEST eyes of SAM.
FRODO
Get away!
FRODO pushes SAM away, clutching at the RING beneath his shirt.
SAM
confused
I don't want to keep it ... I just want to help!
FRODO rises to his FEET, as if empowered with a frightening intense ENERGY.
GOLLUM
See! See! He wants it for himself.
SAM
beside himself
Shut up, you! Go away. Get out of here.
CLOSE ON: FRODO...
FRODO
quietly
No, Sam ... it's you.
SAM stares at FRODO with DISBELIEF.
FRODO
I'm sorry, Sam...
CLOSE ON: TEARS WELL in SAM’S eyes...
SAM
hopelessly
But ... he's a liar ... he's poisoned you against me.
FRODO
You can't help me anymore.
SAM
You don't mean that.
FRODO
eerie calm
Go home.
CLOSE ON: TEARS spill down SAM’S cheeks ... as FRODO turns AWAY!
ANGLE ON: FRODO and GOLLUM leave ... SAM is in complete MISERY.
EXT. MINAS TIRITH STREETS - DAY
ANGLE ON: FARAMIR leading a COLUMN of 200 KNIGHTS through the STREETS towards the CITY GATE ... PEOPLE are rushing forward, THROWING FLOWERS over the KNIGHTS.
CLOSE ON: GANDALF hurries alongside FARAMIR’S HORSE.
GANDALF
Faramir! Faramir! Your father's will has turned to madness! Do not throw away your life so rashly!
FARAMIR
deadened
Where does my allegiance lie if not here?
GANDALF reads the PAIN in FARAMIR’S eyes ... he calls after him, trying one more time to stop the YOUNG MAN.
GANDALF
Your father loves you, Faramir!
quietly
And will remember it before the end.
EXT. MINAS TIRITH BATTLEMENTS - DAY
HIGH ANGLE: FARAMIR leads the 200 MOUNTED KNIGHTS through the GATES OF MINAS TIRITH and across the PELENNOR FIELDS towards the RUINS of OSGILIATH.
ANGLE ON: The people of MINAS TIRITH watch from the BATTLEMENTS.
HIGH WIDE: FARAMIR’S KNIGHTS FAN OUT ... to form one straight line of 200 HORSEMEN.
EXT. WEST OSGILIATH - DAY
GOTHMOG and his MEN watch as the KNIGHTS approach.
INT. TOWER HALL, MINAS TIRITH - DAY
FAST PUSH IN ... to PIPPIN looking on as DENETHOR eats.
DENETHOR
Can you sing, Master Hobbit?
PIPPIN
uneasy
Well ... yes, at least, well enough for my own people ... but we have no songs for great halls and evil times ... we seldom sing of anything more terrible than wind or rain.
DENETHOR
And why should your songs be unfit for my halls, or for hours such as these. Come - sing me a song!
PIPPIN’S simple, clear voice echoes through the VAST HALL.
PIPPIN (V.O.)
Home is behind, the world ahead, And there are many paths to tread. Through shadow to the edge of night Until the stars are all alight. Mist and shadow, cloud and shade: All shall fade, all shall fade.
INTERCUT WITH:
EXT. PELENNOR FIELDS/OSGILIATH RUINS - DAY
ANGLE ON: SLOW MOTION ... TRACKING WITH THE 200 MOUNTED KNIGHTS.
ANGLE ON: SLOW MOTION ... GOTHMOG rises amidst the RUINS of OSGILIATH.
ANGLE ON: SLOW MOTION ... FARAMIR’S KNIGHTS - 75 yards away - thundering towards camera.
PULL BACK ... to GOTHMOG ... he turns to CAMERA and RAISES HIS BOW.
ANGLE ON: SLOW MOTION ... Behind GOTHMOG - all over the RUINED CITY - 5000 ORC ARCHERS rise to their feet ... BLACK ARROWS already strung on their BOWS!
CLOSE ON: SLOW MOTION ... FARAMIR YELLING defiantly.
WIDE PROFILE: SLOW MOTION ... FARAMIR’S 200 KNIGHTS ride straight into a BLACK WALL of FLYING ARROWS.
AS ONE, the HORSES and HORSEMEN collapse into a CARTWHEELING, TUMBLING HEAP ... within seconds all are MOTIONLESS.
CLOSE ON: NORMAL SPEED ... FAST CUTS of SCREAMING ORCS...
INT. TOWER HALL, MINAS TIRITH - DAY
THROUGHOUT the above sequence DENETHOR has continued to EAT.
ANGLE ON: PIPPIN finishes his bittersweet song ... he looks up at DENETHOR who continues as if he has not sent his son to his death.
ANGLE ON: PIPPIN turns away, his SORROW etched on his YOUNG FACE...
EXT. MINAS TIRITH COURTYARD - DAY
GANDALF sits quietly in a COURTYARD, alone, defeated.
EXT. OSGILIATH BRIDGE - DAY
GREAT SIEGE TOWERS and CATAPULTS are ROLLED along the REPAIRED BRIDGE which spans both sides of OSGILIATH ... They head straight towards MINAS TIRITH...
EXT. DUNHARROW ENCAMPMENT - DUSK
ANGLES ON: ARAGORN, THÉODEN, ÉOMER, MERRY, LEGOLAS and GIMLI GALLOP into a VAST CAMP beneath the COVER OF TREES ... TEEMING with MEN, HORSES and TENTS.
ANGLE ON: THÉODEN acknowledges GRIMBOLD, a MARSHALL OF ROHAN, as he passes by a GROUP of SOLDIERS.
THÉODEN
Grimbold, how many?
GRIMBOLD
I bring five hundred Men from the Westfold, My Lord.
ROHAN MARSHALL (O.S.)
We have three hundred more from Fenmarch, Théoden King.
THÉODEN smiles grimly as he rides on.
THÉODEN
quietly
Where are the riders from Snowbourn?
GAMLING (O.S.)
None have come, My Lord.
EXT. DUNHARROW PLATEAU - DUSK
ARAGORN joins THÉODEN on a BLUFF overlooking the ENCAMPMENT BELOW...
CAMERA CRANES to REVEAL: THOUSANDS of MEN and HORSES! Smoke from many small CAMP-FIRES has filled the VALLEY with a TWILIGHT HAZE.
THÉODEN
quietly
Six thousand spears ... less than half of what I'd hoped for...
ANGLE ON: ARAGORN turns to THÉODEN...
ARAGORN
Six thousand will not be enough to break the lines of Mordor.
THÉODEN
More will come.
ARAGORN
Every hour lost hastens Gondor's defeat. We have till dawn. Then we must ride.
CLOSE ON: THÉODEN realizing what ARAGORN is saying - no matter the numbers he must commit to war by the morning. THÉODEN nods.
The HORSES whinny loudly in the distance ... THÉODEN looks up at the MOUNTAIN which looms behind them...
EXT. DUNHARROW PLATEAU - DUSK
ANGLE ON: HORSES rearing in terror as ROHAN SOLDIERS try to quieten them...
ANGLE ON: LEGOLAS and GIMLI move through the CAMP...
CLOSE ON: LEGOLAS looking at a group of ROHAN SOLDIERS ... they sit quiet and hunched ... no one speaking...
LEGOLAS looking toward ÉOMER, who is unsaddling his HORSE...
LEGOLAS
The horses are restless ... and the Men are quiet...
ÉOMER
They grow nervous in the shadow of the mountain...
GIMLI’S eyes travel to a ROW of ANCIENT STANDING STONES that mark the ENTRANCE to a ROAD leading away from the ENCAMPMENT and INTO the MOUNTAIN.
GIMLI
That road there - where does that lead?
LEGOLAS
It is the road to the Dimholt... The door under the mountain.
ÉOMER
None who venture there ever return.
under his breath
That mountain is evil...
ANGLE ON: ARAGORN stands before the road as though transfixed ... before him a HORSE whinnies and pulls at his ropes nervously...
ARAGORN POV: A GHOSTLY FIGURE seems to emerge from the gloom ... ARAGORN starts in fright as...
GIMLI (O.S.)
Aragorn!
ANGLE ON: ARAGORN stares down at the LITTLE DWARF...
GIMLI
Let's find some food.
ARAGORN casts another look back at the ANCIENT STANDING STONES before following GIMLI.
EXT. DUNHARROW PLATEAU - DUSK
ANGLE ON: All is quiet in the ENCAMPMENT...
INT. ÉOWYN’S TENT, DUNHARROW - NIGHT
ANGLE ON: ÉOWYN kneels before MERRY, adjusting his HELMET STRAP.
ÉOWYN
There! A true Esquire of Rohan.
MERRY exhales - excited and terrified in equal measure. In his EXCITEMENT, he draws his SWORD...
ÉOWYN steps back, laughing...
MERRY
Sorry, it isn't all that dangerous.
despondent
It isn’t even sharp.
ÉOWYN
Well, that's no good, you won't kill many Orcs with a blunt blade. Come on.
EXT. DUNHARROW PLATEAU - NIGHT
As ÉOWYN and MERRY leave the tent, ÉOMER and GAMLING are sitting nearby, finishing a meal ... ÉOWYN ushers MERRY off.
ÉOWYN
To the Smithy - go!
MERRY hurries off ... ÉOMER watches the YOUNG HOBBIT leave.
ÉOMER
You should not encourage him.
ÉOWYN
You should not doubt him.
ÉOMER
I do not doubt his heart ... Only the reach of his arm.
CLOSE ON: GAMLING stifles a laugh ... ÉOWYN turns on both of them...
ÉOWYN
Why should Merry be left behind? He has as much cause to go to war as you.
to herself
Why can he not fight for those he loves?
ANGLE ON: At the PLATEAU edge, a GUARD looks down the STEEP PRECIPICE as a HORSE and RIDER move along the RIDGE...
EXT. DUNHARROW TRACK - NIGHT
ANGLE ON: ARAGORN tosses in his SLEEP, disturbed by images and voice...
GANDALF
To the Black Ships...
In ARAGORN’S dream, ARWEN suddenly WAKES...
ARWEN (V.O.)
I choose a mortal life ... I wish I could have seen him, one last time...
As ARWEN lies dying, the EVENSTAR falls from her fingers... At that moment, ARAGORN wakes, his SWORD quickly in his HAND ... A GUARD stands in the DOORWAY...
GUARD
King Théoden awaits you, My Lord.
EXT. DUNHARROW PLATEAU - NIGHT
ARAGORN hurries towards THÉODEN’S TENT...
INT. THÉODEN’S TENT, DUNHARROW PLATEAU - NIGHT
ANGLE ON: THÉODEN looks up as ARAGORN enters.
THÉODEN
I take my leave.
ANGLE ON: THÉODEN bows slightly to the HOODED FIGURE and LEAVES, shooting ARAGORN a strange look as he goes...
CLOSE ON: The FIGURE stands and pulls back the HOOD ... to reveal ... ELROND.
ARAGORN
My Lord Elrond.
ELROND
I come on behalf of one whom I love.
ELROND’S face is ETCHED with PAIN...
ELROND
Arwen is dying.
ANGLE ON: ARAGORN receiving this news ... ASHEN-FACED.
ARAGORN
She stayed?
ELROND
She will not long survive the evil that now spreads from Mordor.
ELROND’S eyes fall to the EVENSTAR which hangs around ARAGORN’S neck...
ELROND
The light of the Evenstar is failing. As Sauron's power grows, her strength wanes. Arwen's life is now tied to the fate of the Ring. The Shadow is upon us, Aragorn, the end has come.
ARAGORN
It will not be our end, but his.
ELROND
You ride to war, but not to victory. Sauron's armies march on Minas Tirith - this you know - but in secret he sends another force which will attack from the river...
CLOSE ON: ARAGORN looks at ELROND in shock.
ELROND
A fleet of Corsair ships sails from the South.
FLASH INSERT: A FLEET of BLACK SAILS moving along a SILVER RIBBON of WATER.
ELROND
They'll be in the city in two days... You're outnumbered, Aragorn. You need more men.
ARAGORN
There are none.
ELROND hesitates a BEAT...
ELROND
quietly
There are those who dwell in the mountain.
A SUDDEN WIND rushes through the TENT, lifting HANGINGS, scattering MAPS, knocking over GOBLETS...
As ARAGORN looks at ELROND, an IMAGES FLASHES in MIND’S EYE ... The GHOSTLY FIGURE on the DIMHOLT ROAD...
ARAGORN looks at ELROND in shock...
ARAGORN
Murderers, traitors - You would call upon them to fight? They believe in nothing. They answer to no-one.
ELROND
They will answer to the King of Gondor.
ARAGORN’S eyes fall to a PLAIN BLACK SCABBARD, which ELROND draws from beneath his robes.
CLOSE ON: ELROND’S long white finger draw the hilt of a SWORD from the scabbard to reveal ... an ELVEN SWORD glinting in the firelight!
ELROND
Andúril, flame of the West, forged from the Shards of Narsil.
ARAGORN takes the sword ... staring at it in wonder.
ARAGORN
Sauron will not have forgotten the Sword of Elendil...
ARAGORN draws the long blade from its sheath...
ARAGORN
...the blade that was broken shall return to Minas Tirith.
ELROND
The man who can wield the power of this sword can summon to him an army more deadly than any that walks this earth.
ELROND stares hard at ARAGORN...
ELROND
Put aside the Ranger - become who you were born to be - take the Dimholt road.
A HEAVE SILENCE hangs in the room.
ELROND
ELVISH: with subtitles
Ónen i-Estel Edain. I give hope to Men.
ARAGORN
ELVISH: with subtitles
Ú-chebin estel anim. I keep none for myself.
ANGLE ON: ARAGORN re-sheathes the SWORD.
EXT. DUNHARROW PLATEAU - NIGHT
ANGLE ON: As ARAGORN readies BREGO for leaving, ÉOWYN approaches ... her temper barely held in check.
ÉOWYN
Why are you doing this?
ARAGORN looks over his shoulder at her...
ÉOWYN
The war lies to the east; you cannot leave on the eve of battle. You cannot abandon the Men.
ARAGORN
Éowyn...
ÉOWYN
We need you here-
ARAGORN rounds on her...
ARAGORN
Why have you come?
ÉOWYN
hesitant
Do you not know?
ARAGORN looks at her sadly, not wanting to hurt her.
ARAGORN
gentle
It is but a shadow and a thought that you love ... I cannot give you what you seek.
ÉOWYN steps back as though STRUCK ... she watches stricken as ARAGORN leaves...
EXT. DUNHARROW PLATEAU - NIGHT
ANGLE ON: ARAGORN leads his horse through the TENTS towards the DIMHOLT ROAD.
A LIGHT FLARES ahead of him...
ANGLE ON: A SHORT FIGURE steps out of the SHADOWS ... PIPE in hand.
GIMLI
Just where do you think you're off to?
ARAGORN looks at GIMLI - GRATEFUL for his COURAGE but determined to go ALONE.
ARAGORN
Not this time ... This time you must stay, my friend.
LEGOLAS (O.S.)
Have you learnt nothing of the stubbornness of Dwarves?
ANGLE ON: ARAGORN looks at LEGOLAS as he appears, leading his HORSE - already SADDLED.
GIMLI steps closer to ARAGORN.
GIMLI
You might as well accept it - we're going with you, laddie.
ARAGORN shakes his head, smiling his acceptance.
ANGLE ON: ARAGORN, LEGOLAS and GIMLI as they slowly ride towards the BACK of the PLATEAU ... Past the ANCIENT STANDING STONES that lead to the NARROW PASS.
EXT. DUNHARROW PLATEAU - NIGHT
ANGLE ON: THÉODEN and GAMLING watch the RETREATING FIGURES of ARAGORN, LEGOLAS and GIMLI ... ROHAN SOLDIERS emerge from their tent, crestfallen to see ARAGORN leave.
ARAGORN, LEGOLAS and GIMLI disappear into the SHADOWS of the MOUNTAINS. The ROHAN SOLDIERS murmur among themselves, “What’s happening?”, “Where’s he going?”
GAMLING
Lord Aragorn!
ROHAN SOLDIER (O.S.)
Why does he leave on the eve of battle?
GAMLING
He leaves because there is no hope.
CLOSE ON: THÉODEN as he moves forward.
THÉODEN
He leaves because he must.
GAMLING
Too few have come. We cannot defeat the armies of Mordor.
THÉODEN
No, we cannot...
surveying his frightened Men
But we will meet them in battle, nonetheless.
EXT. THÉODEN’S TENT, DUNHARROW PLATEAU - DAWN
ANGLE ON: THÉODEN looks at ÉOWYN who stands as if turned to stone ... she is looking up at a LIGHTENING SKY ... The QUIET before the MEN depart for WAR...
THÉODEN
gentle
I have left instruction: the people are to follow your rule in my stead ... take up my seat in the Golden Hall ... long may you defend Edoras if the battle goes ill.
ANGLE ON: ÉOWYN turns to the KING ... her FACE a BLANK ... She speaks without emotion.
ÉOWYN
What other duty would you have me do, My Lord?
THÉODEN moves towards her, taking her hand...
THÉODEN
quiet
Duty? ...No, I would have you smile again - not grieve for those whose time has come.
ÉOWYN slowly lifts her head...
THÉODEN
You shall live to see these days renewed.
CLOSE ON: THÉODEN lifts ÉOWYN’S face to look into her EYES...
THÉODEN
whisper
No more despair.
EXT. DIMHOLT ROAD - DAY
ANGLE ON: ARAGORN, LEGOLAS and GIMLI make their way up a GLOOMY CANYON, shadowed by BLACK FIR TREES. The shadowed ridges of the DWIMORBERG MOUNTAIN rise BEFORE THEM.
It is a SPOOKY PLACE.
GIMLI
What kind of an army would linger in such a place?
LEGOLAS
One that is cursed ... Long ago the Men of the Mountain swore an oath to the last King of Gondor - to come to his aid, to fight, but when the time came, when Gondor's need was dire, they fled ... Vanishing into the darkness of the mountain ... And so Isildur cursed them - never to rest until they had fulfilled their pledge.
SILENCE surrounds them, there are no birds, no wind. Only the OMINOUSLY MUFFLED THUD of their horses’ hooves on the dank FIR-NEEDLES.
EXT. DIMHOLT GLEN - DAY
ANGLE ON: Before them, at the ROOT OF THE MOUNTAIN, a SHEER WALL of ROCK towers...
GIMLI
terrified whisper
The very warmth of my blood seems stolen away.
Within the walls, a creepy DARK DOOR gapes like a mouth of night. SIGNS and FIGURES are carved above its WIDE ARCH.
LEGOLAS
translating
The way is shut. It was made by those who are dead, and the Dead keep it. The way is shut.
AT THAT MOMENT: A CHILL WIND seems to rush out of the DOORWAY ... ARAGORN stares into the BLACKNESS, his HAIR BLOWING WILDLY.
The HORSES REAR and ‘BUCK’ in terror, turning and GALLOPING AWAY.
ARAGORN
Brego!
The three HORSES DISAPPEAR ... ARAGORN turns resolutely towards the DOORWAY...
ARAGORN
steely resolve
I do not fear death!
ANGLE ON: ARAGORN WALKING into the BLACKNESS.
LEGOLAS quickly follows ... swallowed by the DARKNESS.
CLOSE ON: GIMLI left ALONE ... He hesitates, struggling with his FEAR.
GIMLI
Well, this is a thing unheard of ... An Elf will go underground when a Dwarf dare not.
gritting his teeth
Oh! I'd never hear the end of it!
GIMLI plunges into the TUNNEL behind the OTHERS!
EXT. DUNHARROW ENCAMPMENT - DAWN
MUCH ACTIVITY ... HORNS SOUND ... the ENTIRE CAMP is on the MOVE ... fires are DOUSED, TENTS pulled down, HORSES saddled.
EXT. DUNHARROW PLATEAU - DAWN
ANGLE ON: THÉODEN strides through the CAMP, ÉOMER at his SIDE.
THÉODEN
We must ride light and swift. It's a long road ahead ... and man and beast must reach the end with the strength to fight.
ANGLE ON: MERRY ... preparing a LITTLE PONY with a SADDLE and SUPPLIES. He is wearing an OVERSIZED HELMET and ROHIRRIM CLOTHING ... he looks at once NERVOUS and EXCITED.
KING THÉODEN breaks away from a COLUMN and rides up to MERRY.
THÉODEN
gently
Little Hobbits do not belong in war, Master Meriadoc.
MERRY
All my friends have gone to battle. I would be ashamed to be left behind!
THÉODEN
It's a three-day gallop to Minas Tirith. None of my Riders can bear you as a burden.
MERRY
But ... I want to fight!
THÉODEN
I will say no more.
KING THÉODEN wheels his HORSE away...
MERRY is bitterly DISAPPOINTED. He stands, head down - a TINY DEJECTED FIGURE - as the MIGHTY ROHIRRIM on their LARGE HORSES ride by ... a jangling sea of HELMETS, SHIELDS and BANNERS.
SUDDENLY ... MERRY is plucked off the ground! A SOLDIER has snatched him by the collar ... and plonked him down on their SADDLE!
CLOSE ON: MERRY twists around, looking up at the SOLDIER ... Beneath a HELMET and MAIL HOOD is...
...ÉOWYN, disguised as a MAN!
ÉOWYN
grimly
Ride with me.
MERRY
My Lady!
CLOSE ON: MERRY’S face visible under the CAPE ... looking EXCITED!
ÉOMER
shouting above the din
Move out - move out!
THÉODEN
Ride! Ride now, for Gondor!
EXT. DUNHARROW VALLEY - DAWN
HIGH WIDE: The VALLEY FLOOR as THOUSANDS of HORSEMEN ride out after their KING.
EXT. PELENNOR FIELDS/MINAS TIRITH - DAY
ANGLE ON: GREAT SIEGE TOWERS and CATAPULTS are ROLLING across the PELENNOR FIELDS ... Thousands of FLAMING TORCHES light the snarling, slathering MORGUL ORCS ... marching in RAGGED RANKS.
ANGLES ON: Flowing torrents of ORCS stream past CAVE TROLLS, beating the DRUMS OF WAR ... MINAS TIRITH lies ahead - only TWO MILES AWAY!
INT. PATHS OF THE DEAD CAVERN - DAY
ANGLE ON: ARAGORN leads LEGOLAS and GIMLI into a WIDE CAVERN ... he WAVES HIS TORCH through the DARKNESS: ILLUMINATING a HUGE CAVERN...
A ghastly CREAKING NOISE, like stone being sundered, cuts through the SILENCE.
A GHOSTLY FIGURE steps from the ROCK WALLS!
ANGLES ON: ARAGORN, LEGOLAS and GIMLI look on in HORROR, as a MUMMIFIED SPECTRE looms before them: EYELESS SOCKETS ... ROTTEN TEETH ... a pale SICKLY GLOW ... the KING OF THE DEAD!
FOG SWIRLS around as the GHOST SNARLS at ARAGORN...
KING OF THE DEAD
Who enters my domain?
ARAGORN moves forward ... unflinching...
ARAGORN
One who will have your allegiance.
KING OF THE DEAD
snarl
The Dead do not suffer the living to pass...
ARAGORN
You will suffer me!
The KING OF THE DEAD’S MALEVOLENT LAUGH echoes through the CAVES...
ANGLE ON: The FOG suddenly ROLLS BACK, forming a retreating wall of GREY VAPOR ... slowly, RANK upon RANK of SPECTRAL WARRIORS are revealed! GHOULISH FACES ... RUSTING WEAPONS ... TATTERED BANNERS.
WIDE ON: The FOG reveals a DEAD ARMY of MANY THOUSANDS ... assembled around the CAVERN!
ANGLE ON: ARAGORN stares GRIMLY at the KING OF THE DEAD.
CLOSE ON: THE KING OF THE DEAD as he smiles evilly at ARAGORN ... ARAGORN holds his GAZE...
KING OF THE DEAD
chilling
The way is shut...
THE KING OF THE DEAD moves relentlessly towards ARAGORN...
KING OF THE DEAD
It was made by those who are Dead and the Dead keep it...
WIDE: ARAGORN, LEGOLAS and GIMLI are now surrounded by an ARMY of the DEAD...
KING OF THE DEAD
The way is shut. Now, you must die.
ANGLE ON: LEGOLAS fires an ARROW at the KING OF THE DEAD ... it PASSES STRAIGHT THROUGH!
ARAGORN keeps moving forward, his eyes locked on the SPECTRE.
ARAGORN
desperate
I summon you to fulfill your oath!
ANGLE ON: The KING OF THE DEAD SNARLS and raises his DEADLY SWORD above ARAGORN’S HEAD!
KING OF THE DEAD
raspy yell
None but the King of Gondor may command me!
QUICK BEAT: ARAGORN RAISES ANDÚRIL...
With a TERRIFYING SHRIEK, THE KING OF THE DEAD SWEEPS his SWORD towards ARAGORN’S HEAD!
SLOW MOTION: ARAGORN raises his SWORD in ANSWER ... a LOW WHISTLE as it SWEEPS through the AIR...
CLANG! The BLADE OF ANDÚRIL clashes with the SPECTRAL SWORD ... the SHARP RING of METAL reverberates through the CAVERNS!
CLOSE ON: THE KING OF THE DEAD stares at ARAGORN in DISBELIEF.
KING OF THE DEAD
fearful
It cannot be - that line was broken!
ANGLE ON: ARAGORN grabs the SHOCKED GHOST by the NECK...
ARAGORN holds the SHARP BLADE against the GHOST’S THROAT!
ARAGORN
It has been remade!
SILENCE.
ARAGORN releases the KING OF THE DEAD ... he ADDRESSES the GHOST ARMY.
ARAGORN
Fight for us and regain your honor!
GHOSTLY FACES stare hollow-eyed at ARAGORN...
ARAGORN
yelling
What say you?
SILENCE.
ARAGORN
What say you?
GIMLI
Aghh! You’re wasting your time, Aragorn! They had no honour in life, they have none now in death.
ARAGORN
yelling
I am Isildur's heir. Fight for me and I will hold your oath fulfilled. What say you?
EXT. PELENNOR FIELDS/MINAS TIRITH - DAY
ANGLES ON: THOUSANDS OF ORCS continue moving relentlessly forward ... Towards the WALLS of MINAS TIRITH.
EXT. MINAS TIRITH GATES - DAY
CLOSE ON: A GUARD yells down from the PARAPET above the HUGE WOODEN GATE...
GATE GUARD
yelling
Open the gate! Quick!
ANGLE ON: The HUGE GATE swings open, revealing ... FARAMIR’S badly wounded HORSE ... dragging FARAMIR behind! Both the HORSE and FARAMIR are impaled with ORC ARROWS!
IORLAS
shocked
Lord Faramir!
EXT. PELENNOR FIELDS/MINAS TIRITH - DAY
As CATAPULTS are prepared, GOTHMOG rides through ranks of ORCS...
INT. MINAS TIRITH, COURT OF THE KINGS - DAY
ANGLE ON: IORLAS and OTHER SOLDIERS arrive at the CITADEL with FARAMIR’S UNCONSCIOUS BODY on a STRETCHER ... PIPPIN follows them.
CLOSE ON: DENETHOR EMERGES from the TOWER HALL ... he runs towards his son...
DENETHOR
Faramir!
DENETHOR bends to the STRETCHER bearing his SON.
DENETHOR
whisper
Say not that he has fallen...
IORLAS
They were outnumbered, none survived.
CLOSE ON: PIPPIN devastated...
EXT. PELENNOR FIELDS/MINAS TIRITH - DAY
GOTHMOG turns to his LIEUTENANTS...
GOTHMOG
Fear! The city is rank with it. Let us ease their pain. Release the prisoners!
LIEUTENANT
Catapults!
At his ORDERS, the GREAT CATAPULTS fire THWAT! THWAT! THWAT!
EXT. MINAS TIRITH STREETS - DAY
The ORC CATAPULTS do not fire rocks...
HORROR sweeps through the streets of MINAS TIRITH as the SEVERED HEADS of FARAMIR’S HORSEMEN land amongst the SOLDIERS!
EXT. MINAS TIRITH COURT OF THE KINGS - DAY
DENETHOR looks down at FARAMIR’S UNCONSCIOUS BODY...
DENETHOR
My son is dead. My line has ended.
PIPPIN has run to FARAMIR and bends towards him...
PIPPIN
touching FARAMIR’S forehead
He's alive!
DENETHOR
The House of Stewards has failed!...
PIPPIN
urgently
He needs medicine, My Lord!
DENETHOR
My line has ended.
PIPPIN
urgently
My Lord!
ANGLE ON: DENETHOR slowly turning away ... walking as if in a TRANCE...
CLOSE ON: DENETHOR has reached the edge of the COURTYARD ... he STARES in SHOCKED DISBELIEF at the VISTA spread out BELOW:
HIGH WIDE ANGLE: A FULL VIEW of the ORC ARMY ... from the TOP of MINAS TIRITH.
75,000 ORCS are spread out across the PELENNOR FIELDS like a sea of black ANTS.
CLOSE ON: TROLLS load the CATAPULTS with ROCKS.
BATTERING RAMS and SIEGE TOWERS are hauled on CHAINS.
Thousands of flickering TORCHES give the army the look of a moving city in the MURKY MORDOR TWILIGHT.
CLOSE ON: DENETHOR ... struggling to regain the power of speech!
DENETHOR
rasping whisper
Rohan has deserted us.
ANGLE ON: A HUGE BOULDER smashes into the wall of MINAS TIRITH.
WIDE ON: BOULDERS HURTLE from CATAPULTS across the fields towards MINAS TIRITH.
DENETHOR
Théoden's betrayed me.
CLOSE ON: A BOULDER smashes into a BALCONY full of CIVILIANS.
CONFUSION and PANIC spread amongst the SOLDIERS.
DENETHOR
panicked scream
Abandon your posts!
CLOSE ON: PIPPIN, SHOCKED.
DENETHOR
Flee! Flee for your lives!
SUDDENLY: THWACK!
GANDALF’S STAFF smashes into the back of DENETHOR’S HEAD!
GANDALF grimly swings his staff again, CLUBBING DENETHOR to the GROUND!
ANGLE ON: GANDALF spins around and ADDRESSES the SOLDIERS:
GANDALF
yell
Prepare for battle!
EXT. MINAS TIRITH STREETS - DAY
ANGLE ON: GANDALF GALLOPS down the WINDING LABYRINTHINE STREETS on SHADOWFAX ... against the flow of FLEEING SOLDIERS.
GANDALF
yelling
Return to your posts!
CUT TO:
EXT. MINAS TIRITH BATTLEMENTS - DAY
ANGLE ON: SHADOWFAX bounds up STAIRS onto the LEVEL ONE BATTLEMENTS ... GANDALF looks at the approaching ORC ARMY, now less than 50 yards from the WALLS of the CITY!
GANDALF
angry yell
Send these foul beasts into the abyss!
QUICK CUTS: MIGHTY WOODEN CATAPULTS positioned within the walls of MINAS TIRITH are fired!
EXT. MINAS TIRITH - DAY
THWAT! THWAT! THWAT! CATAPULTS send their great ROCKS high into the air, over the BATTLEMENTS!
Dizzying AERIAL SHOTS of huge BOULDERS flying up close to CAMERA ... then falling away towards the ORCS!
CRUNCH!! BOULDERS flatten ORCS. THWAT!! 100 more ROCKS ... THWAT!! another 100!! The ORC FRONT RANKS are in disarray!
EXT. PELENNOR FIELDS/MINAS TIRITH - DAY
As the GREAT BOULDERS land among them, the ORCS start to PANIC!
GOTHMOG
Stay where you are!
INTERCUT WITH:
EXT. MINAS TIRITH BATTLEMENTS - DAY
GANDALF walks the BATTLEMENTS as huge BOULDERS rain onto the ORC ARMY below...
INTERCUT WITH:
EXT. PELENNOR FIELDS/MINAS TIRITH - DAY
GOTHMOG glances up at a WHISTLING SOUND - a huge BOULDER hurtles towards him. He side-steps CALMLY out o the way ... spitting on the BOULDER in CONTEMPT.
CUT TO:
EXT. MINAS TIRITH BATTLEMENTS - DAY
SUDDENLY! 9 NAZGÛL DIVE out of the DIM SKY, CLAD in BATTLE ARMOUR!
ANGLES ON: SOLDIERS throw themselves down as the NAZGÛL zoom overhead, emitting their PIERCING SHRIEKS! GONDORIAN SOLDIERS run for SHELTER in PANIC, covering their ears...
CLOSE ON: PIPPIN COWERING...
GANDALF
rallying
Stand to your posts! Do not give in to fear. Fight!
QUICK CUTS: MIGHTY WOODEN CATAPULTS positioned within the walls of MINAS TIRITH are fired!
The NAZGÛL circle LOW over the CITY, like VULTURES seeking doomed men’s flesh. SOLDIERS are plucked into the AIR by SHRIEKING NAZGÛL and dropped to their DEATHS hundreds of FEET BELOW. TOWERS and BUILDINGS are DESTROYED. CHAOS as SOLDIERS, WOMEN and CHILDREN DODGE falling MASONRY.
CLOSE ON: GONDORIAN SOLDIERS send a rain of arrows at the approaching TOWERS and TROLLS.
GANDALF
Not at the towers! Aim for the Trolls! Kill the Trolls! Bring them down!
TOO LATE! The TOWERS reach the walls, their DOORS crashing down, releasing ORCS directly onto the LOWER LEVELS.
As the ORCS swarm from the TOWER, GANDALF realizes PIPPIN has come down from the CITADEL...
GANDALF
Peregrin Took - go back to the citadel!
PIPPIN
stupor
They called us out to fight...
PIPPIN looks stunned, as a HUGE ORC leaps towards him... GANDALF intercepts the BEAST, striking him with his STAFF...
GANDALF
urgency
This is no place for a Hobbit!
GANDALF wields his STAFF, cutting through the attacking ORC with EASE ... BEHIND him, an ORC prepares to cut down GANDALF ... PIPPIN instinctively slashes his SWORD at him.
ANGLE ON: GANDALF turns on PIPPIN, smiling despite himself.
GANDALF
Guard of the Citadel, indeed! Now, back up the hill - quickly! Quickly!
CUT TO:
EXT. PELENNOR FIELDS - DUSK
ANGLE ON: Out of the BLACK SWIRLING BATTLE. SMOKE crawls an IRON MONSTER! A MASSIVE WHEELED BATTERING RAM ... 60 FEET HIGH and 150 FEET LONG ... pushed by 20 huge MOUNTAIN TROLLS ... a MASSIVE IRON HEAD, cast in the likeness of a SNARLING WOLF!
...this is GROND ... the BATTERING RAM FROM HELL! The ORC are chanting as the BEAST is wheeled closer and closer to the GATES...
ORCS
Grond! Grond! Grond!
EXT. MINAS TIRITH BATTLEMENTS - DUSK
CLOSE ON: GANDALF ... blanching at the sight of this crawling IRON MONSTER!
CUT TO:
EXT. PASS OF CIRITH UNGOL, TUNNEL MOUTH - DAY
ANGLE ON: GOLLUM leads FRODO up a LONG RAVINE between COLUMNS of TORN and WEATHERED ROCK.
AHEAD is a GREAT GREY WALL, a last huge mass of mountain stone ... and in the SHADOWS at the base of the TOWERING ROCK lies a TUNNEL.
FRODO reacts to the FOUL STENCH coming out of the BLACK HOLE.
FRODO
exhausted
What is this place?
GOLLUM
Master must go inside the tunnel.
FRODO
Now that I'm here, I don't think I want to.
SMÉAGOL
It's the only way.
GOLLUM; slyly
Go in, or go back.
FRODO stares into the darkness...
FRODO
under his breath
I can't go back.
CLOSE ON: GOLLUM, his sparse oily hair hanging like rank weed over his hooded eyes...
Drawing a DEEP BREATH, FRODO follows GOLLUM into the TUNNEL.
INT. SHELOB’S TUNNEL - DAY
FRODO nearly GAGS.
FRODO
What's that smell?
GOLLUM
lying
Orcses filth! Orcses come in here sometimes.
They continue on, deep into the DARK TUNNEL ... FRODO is feeling his way in the dark, following the SOUND of GOLLUM’S scampering.
GOLLUM (O.S.)
disembodied
Hurry!
FRODO follows the sound of GOLLUM’S voice. He is VERY TIRED.
GOLLUM (O.S.)
disembodied
This way.
FRODO cannot see GOLLUM in the MURKY TUNNEL...
FRODO
Sméagol!
GOLLUM (O.S.)
disembodied
Over here.
FRODO slips as he tries to follow the voice ... He puts his HAND to the WALL to STEADY HIMSELF but quickly YANKS it away ... strands of a WHITE THREAD stuck to his HAND.
FRODO
It's sticky ... What is it?
GOLLUM is nowhere to be seen ... only his voice echoes back down the LABYRINTH of TUNNELS.
GOLLUM (O.S.)
You will see ... Oh, yes ... You will see.
FRODO FREEZES!
FRODO
nervous
Sméagol! Sméagol!
NO ANSWER, no echo, not even a tremor in the air.
FRODO
panicked
Sméagol!
CLOSE ON: FRODO realises with HORROR that GOLLUM has deserted him!
FRODO
whisper
Sam.
CLOSE ON: FRODO breathing hard ... passing all manner of creatures, trussed up in evil WEB-LIKE material...
A BUBBLING HISS can be heard ... There is a CREAKING as some great JOINTED THING moves with slow purpose in the DARK...
FRODO begins to run in BLIND PANIC...
CUT TO:
EXT. CIRITH UNGOL STAIRS - DAY
SAM stumbles blindly down the ANCIENT STAIRS, reckless and uncaring, his face pale and devastated.
CLOSE ON SAM’S FOOT slips...
...SUDDENLY, as if the ground has given way beneath him, SAM is slipping and sliding dangerously OUT OF CONTROL.
ANGLE ON: SAM thudding into a LARGE ROCK, which save him from tumbling headlong over the PRECIPICE.
Something catches SAM’S EYE ... he stares, barely breathing.
CLOSE ON: A package of LEMBAS BREAD...
ANGLE ON: SAM looking BACK up the LONG STEEP STAIR...
CUT TO:
INT. SHELOB’S TUNNEL - DAY
FRODO is running BLINDLY ... He falls, trapped in the sticky substance which CLINGS to him. As he lays on the ground, unable to move, a VOICE comes to him as if from a distant memory...
GALADRIEL (V.O.)
I give you the light of Eärendil - our most beloved star. May it be a light for you in dark places, when all other lights go out.
CLOSE ON: FRODO fumbles in his JACKET, FEAR growing in him ... he pulls out the GLASS PHIAL - his GIFT from GALADRIEL - he holds it aloft.
FRODO
stronger
Aiya Eärendil Elenion Ancalima!
Hail Eärendil brightest of the Stars!
The PHIAL flickers ... kindles into a SILVER FLAME - a BRIGHT RADIANT STARLIGHT!
LOW ANGLE ON: The LIGHT instantly REVEALS a HUGE LOATHSOME SPIDER ... towering over FRODO!
CLOSE ON: SHELOB the SPIDER HISSES at the LIGHT! TWO great clusters of many-windowed EYES protrude from her bulbous head.
Her LEGS are bent, with a 12-FOOT SPAN and HAIRS that stick out like steel spines. Her HUGE, SWOLLEN BODY, a vast bloated bag, sways and sags between her legs. Her age-old BLACK HIDE is knobbly and pitted, blotchy with LIVID MARKS ... but her belly underneath is PALE and LUMINOUS.
SHELOB beats the air with her FORELEGS.
ANGLE ON: Calling up all his remaining STRENGTH and RESOLUTION, FRODO forces his LEGS to MOVE ... he backs away keeping his EYES on SHELOB.
SHELOB crawls SLOWLY towards his ... then, with sudden hideous SPEED, she ATTACKS!
She lashes out with her FRONT LEGS ... FRODO is flung back ... the GLASS PHIAL clatters to the TUNNEL FLOOR, casting an eerie LOW LIGHT.
SHELOB squats above FRODO, her EYE CLUSTERS fidgeting with hideous delight, gloating over a prey trapped beyond all hope of escape.
SUDDENLY! FRODO draws STING! He slashes wildly at the GIANT SPIDER ... hewing off the TIP of a LEG!
SHELOB SPASMS ... a WILD BLUR of thrashing LEGS!
ANGLE ON: FRODO leaps to his feet and RUNS - not even PAUSING to pick up the PHIAL of LIGHT!
TRACKING BACK: with FRODO as he careens blindly down NARROW TUNNELS, gasping in the CHOKING AIR ... looking back over his shoulder for any sign of SHELOB.
ANGLE ON: FRODO sees the TUNNEL EXIT ahead...
...just as he runs straight into a great COBWEB!
CLOSE ON: FRODO ... eyes wild with fear ... as he tries to wrench STING free of the STICKY WEB.
GOLLUM (O.S.)
sing-song
Naughty little fly, Why does it cry?
ANGLE ON: GOLLUM on the other side of the WEB...
GOLLUM
Caught in her web, Soon you'll be... ...Eaten!
ANGLE ON: FRODO as he SLASHES WILDLY with STING. The SHINING BLADE of STING as it hacks through the FIBROUS STRANDS. They whip and snap back into FRODO’S FACE as he cuts himself free.
ANGLE ON: Back up the TUNNEL - lit by the LIGHT OF GALADRIEL - SHELOB’S HEAVING SHADOW approaches...
CLOSE ON: GOLLUM watches in mounting disbelief as STING slashes through the WEB ... DISBELIEF turns to FEAR as SHELOB gets closer and closer, GOLLUM quickly turns and BOLTS...
FRODO hacks at the WEB and with a last desperate LUNGE, frees himself ... STING is caught in the WEB ... FRODO leaves the SWORD and THROWS HIMSELF through a narrow CREVICE...
EXT. PASS OF CIRITH UNGOL - DAY
ANGLE ON: FRODO stumbles out of SHELOB’S LAIR ... Tumbling onto COLD ROCK.
ANGLE ON: FRODO covered in COBWEBS, wild-eyed and drenched in SWEAT ... He looks up as GOLLUM lunges at him.
GOLLUM
Got away did it, Precious? Not this time, not this time!
GOLLUM and FRODO fight ... Rolling on the GROUND towards the EDGE of a PRECIPICE...
FRODO pins GOLLUM on the ground, hands around his throat.
SMÉAGOL
It wasn't us! It wasn't us! Sméagol wouldn't hurt master.
ANGLE ON: FRODO’S fingers squeeze tighter around GOLLUM’S THROAT.
SMÉAGOL
Sméagol promised. You must believe us. It was the Precious! The Precious made us do it!
FRODO has a sudden moment of SELF REALISATION and releases GOLLUM, horrified at his VIOLENCE.
ANGLE ON: GOLLUM cowering black ... COUGHING and SPUTTERING.
ANGLE ON: FRODO looking at SMÉAGOL, in SHOCK, he gets to his FEET.
FRODO
shaky
I have to destroy it, Sméagol. I have to destroy it for both our sakes.
SMÉAGOL stares at FRODO in DISBELIEF ... in a FURY he LUNGES at FRODO who falls backwards, dangerously close to the edge of the PRECIPICE - GOLLUM tumbles over FRODO’S BODY and FALLS to the bottom of the RAVINE...
EXT. PASS OF CIRITH UNGOL - NIGHT
FRODO, overcome with EXHAUSTION, stumbles down the steep stairs of CIRITH UNGOL ... He is full of REMORSE at his TREATMENT of SAM...
FRODO
I'm so sorry, Sam.
FRODO falls to his knees -
FRODO
...so sorry...
EXT. FRODO’S DREAM, LOTHLÓRIEN - DAY
CLOSE ON: FRODO lands on SOFT GREEN GRASS.
SUN DRENCHED IMAGES: Of trees ... of fields ... of LOTHLÓRIEN...
HAZY IMAGE: GALADRIEL walking towards him, BARE-FOOT on the GRASS...
GALADRIEL
This task was appointed to you, Frodo of the Shire. If you do not find a way ... no one will.
GALADRIEL leans down towards FRODO, OFFERING her hand ... for a beat, FRODO stares at her ... torn, not wanting to go on, wanting to lie down ... But he knows what he must do.
ANGLE ON: FRODO ... as he is LIFTED to HIS FEET.
ANGLE ON: FRODO - once again in the dark, rank tunnels of the PASS of CIRITH UNGOL ... He goes on.
CUT TO:
EXT. MINAS TIRITH STREETS - NIGHT
ANGLES ON: FLAMING MISSILES rain down on the CITY!
A DEEP BOOM!
GROND thuds against the MINAS TIRITH GATE ... sending a VIBRATION running through the city!
ANGLE ON GANDALF, on SHADOWFAX, leads SEVERAL HUNDRED GONDORIAN FOOT SOLDIERS down through the streets.
GANDALF
To the Gates! Man the Gates!
CUT TO:
EXT. MINAS TIRITH, COURT OF THE KINGS - NIGHT
PIPPIN watches as FARAMIR’S UNCONSCIOUS BODY is carried on the STRETCHER by DENETHOR’S SERVANTS lead by DENETHOR ... it has the atmosphere of a FUNERAL.
INT. MINAS TIRITH, STEWARD’S TOMB - NIGHT
ANGLE ON: An IRON DOOR creaks OPEN ... FARAMIR’S PROCESSION enters a WIDE VAULTED CHAMBER.
The LANTERN LIGHT throws great SHADOWS upon the SHROUDED WALLS of a wide VAULTED CHAMBER, ROW upon ROW of MARBLE TOMBS are visible in the DIM LIGHT. Upon each TOMB lies a SLEEPING FORM, carved in STONE, hands folded.
DENETHOR speaks in a HUSHED VOICE...
DENETHOR
whisper
No tomb for Denethor and Faramir. No long, slow, sleep of death embalmed. We shall burn, like the heathen kings of old.
The SERVANTS place FARAMIR’S UNCONSCIOUS BODY on a STONE TABLE in the CENTRE of the CHAMBER. They stand, heads bowed ... as MOURNERS beside a bed of death.
DENETHOR turns to his SERVANTS.
DENETHOR
Bring wood and oil!
CUT TO:
EXT. MINAS TIRITH GATES - NIGHT
BOOOMM! The GATE SPLINTERS under GROND’S mighty weight ... Behind the GATES the GONDORIAN FOOT SOLDIERS are FEARFUL...
GANDALF rallies the line of BOWMEN as they wait in front of the GREAT DOORS ... their COURAGE wavering with each CRASHING BLOW...
GANDALF
commanding
Steady! Steady!
SUDDENLY the FEARSOME HEAD protrudes into MINAS TIRITH!
GANDALF
You are soldiers of Gondor! No matter what comes through that gate you will stand your ground!
Within MOMENTS the GATE is smashed and GIANT CAVE TROLLS enter into the FIRST CIRCLE of MINAS TIRITH, under the archway that no enemy had ever passed!
GANDALF
yelling
Fire!
ROWS of ARCHERS fire off a VOLLEY of ARROWS but the TROLLS continue to SMASH the FOOT SOLDIERS with their giant CLUBS ... ORCS swarm through the OPENING and the PITCHED, HAND-TO-HAND BATTLE spills into the FLAMES and BLACKENED, SMOULDERING BUILDINGS ... through the streets of MINAS TIRITH.
ANGLE ON: With a ROAR, GANDALF leads a COUNTER ATTACK on SHADOWFAX, followed by SEVERAL HUNDRED GONDORIAN FOOT SOLDIERS!
THOUSANDS OF ORCS swarm in through the CITY GATES ... the FIRST LEVEL is breached!
CUT TO:
EXT. PASS OF CIRITH UNGOL - DAY
ANGLE ON: FRODO STAGGERS through the PASS OF CIRITH UNGOL ... the weight of the RING, dragging at his neck.
HE MOVES FORWARD, fueled by a GRIM RESOLVE...
ANGEL ON: FRODO starts climbing a STONE STAIRCASE that climbs through a NARROW PASS ... TALL PEAKS rise on either side, like pillars holding up a sagging sky.
AHEAD is the SUMMIT of CIRITH UNGOL ... and an ORC WATCH TOWER! A FAINT LIGHT glows from within the STONE TOWER ... the PATH over the SUMMIT is in FULL VIEW of the ORCS.
FRODO stays CLOSE to the ROCK WALL, masked by SHADOWS.
LOW ANGLE: Behind FRODO, SHELOB APPEARS! With hideous STEALTH, she follows FRODO...
ANGLE ON: FRODO slowly climbing the STONE STAIRS ... his GAZE and CONCENTRATION on the ORC TOWER. Behind him, SHELOB lurches into a HORRIBLE SCUTTLE down the SHEER ROCK FACE.
CLOSE ON: FRODO suddenly sense the LURKING MALICE ... he SPINS AROUND: Before he can react, SHELOB VICIOUSLY STABS FRODO in the NECK with her monstrous abdominal STINGER!
FRODO instantly goes LIMP ... SHELOB’S LEGS catch him as he falls ... she quickly starts WEAVING COBWEBS around him. With great dexterity, she tumbles the LITTLE HOBBIT over and over in her LEGS, binding him in WEB from HEAD to TOE!
SUDDENLY!... The RAZOR SHARP EDGE of a SWORD comes into shot.
REVEAL ON: SAMWISE GAMGEE stands before the GIANT SPIDER - STING clutched in one hand, the SHINING PHIAL in the other!
SAM
Let him go, you filth!
SHELOB HISSES at SAM ... DROPPING FRODO ... he ROLLS down the STAIRS in his WEB COCOON.
SAM
You will not touch him again!
SAM moves forward, a fell light in his normally friendly eyes.
SAM
Come on and finish it!
SAM SWINGS the small sword ... SLASHING upward!
ANGLE ON: SHELOB HISSES and REARS above SAM, her STINGER dribbling with VENOM!
SAM ducks inside the arch of her LEGS and STABS STING into one of her EYE CLUSTERS!
CLOSE ON: SHELOB SCREAMS, her MANDIBLES thrashing wildly, GREEN OOZE trickling from her WOUNDED EYE.
With HIND LEGS, SHELOB picks SAM off the ground and TOSSES him BACKWARDS! SAM lands heavily ... and SHELOB POUNCES!
ANGLE ON: SHELOB heaves the great bag of her BELLY high above SAM’S HEAD. As she splays her legs to drive her huge bulk down on him, SAM lifts the ELVEN BLADE above his head, holding it with TWO HANDS.
STING slides into SHELOB’S SOFT UNDERBELLY! A SHUDDER runs through her! HEAVING up again, she wrenches herself away from the PAIN ... her LIMBS writhing beneath her.
ANGLE ON: JERKING and QUIVERING, SHELOB crawls to her HOLE, leaving a trail of GREEN-YELLOW SLIME. She SQUEEZES down the HOLE and DISAPPEARS ... the SOUND of her BUBBLING MISERY fades.
ANGLE ON: SAM RACES TO FRODO...
SAM
worried
SAM
Mr. Frodo!
CLOSE ON: SAM RIPS COBWEBS away from FRODO’S HEAD ... his FACE is DEATHLY PALE.
SAM
panicking
Oh no! Frodo!
CLOSE ON: FRODO’S PALE, LIFELESS FACE.
SAM
Mr. Frodo! Wake up!
FRODO’S head LOLLS LIFELESSLY in SAM’S ARMS.
SAM
desperate whisper
Wake up ... don't leave me here alone. Don't go where I can't follow. Wake up!
CLOSE ON: FRODO STARING, UNMOVING.
SAM
numbly
Not asleep ... Dead.
SAM lays his FACE on FRODO’S CHEST ... WEEPING SOFTLY.
CLOSE ON: STING’S BLADE GLOWS BLUE!
SOUNDTRACK: TRAMPING FEET approach ... CLINKING METAL ... HARSH SHOUTS!
CLOSE ON: SAM looks up ... looks back down at FRODO.
CLOSE ON: SAM looks up at the ORC TOWER and then at STING which is glowing BLUE! ORCS approach - SAM must make a decision.
ANGLE ON: A SMALL PARTY of ORCS and URUK-HAI heading down the STAIRS from the WATCH TOWER! ... SHAGRAT leads the URUK-HAI, and GORBAG leads the ORCS.
GORBAG spies FRODO’S BODY...
GORBAG
What's this? Looks like Old Shelob's been having a bit of fun!
SHAGRAT
Killed another one, has she?
ANGLE ON: GORBAG peers curiously at FRODO as he leans down and pokes at FRODO’S LIFELESS BODY.
GORBAG
No ... this fellow ain't dead.
CLOSE ON: SAM, hidden in a rock crevice, as SHOCK sweeps across his FACE!
SAM
to himself
Not dead!
SHAGRAT
excited
She jabs him with her stinger and they go as limp as a boned fish. Then she has her way with them. That's how she likes to feed - fresh blood.
yelling
Get him to the Tower!
SAM
Samwise, you fool!
ANGLE ON: The ORCS GRUNT as they lift FRODO ... and CARRY him back towards the WATCH TOWER.
ORC 2
This fellow will be awake in a few hours.
GORBAG
Then he'll wish he'd never been born.
ORC LAUGHTER ... FRODO is carried up the steep STAIRS...
CUT TO:
INT. MINAS TIRITH/STEWARD’S TOMB - NIGHT
FROM the SHADOWS PIPPIN watches, aghast, as FARAMIR is lain on a FUNERAL PYRE...
CLOSE ON: DENETHOR kisses FARAMIR’S sweating, FEVERED brow.
DENETHOR
The house of his spirit crumbles! He is burning ... already burning.
ANGLE ON: BUNDLES of DRIED FIREWOOD are being stacked around FARAMIR’S BODY.
ANGEL ON: PIPPIN rushes forward, desperately PULLING the FIREWOOD AWAY!
PIPPIN
yelling
He's not dead! He's not dead!
DENETHOR grabs PIPPIN by the collar! He roughly carries him towards the door.
PIPPIN
No! No! No! He’s not dead. No!
DENETHOR
menacing
Hear now, Peregrin, son of Paladin ... I release you from my service...
DENETHOR throws PIPPIN outside!
DENETHOR
Go now and die in what way seems best to you.
DENETHOR SLAMS the DOOR SHUT!
DENETHOR (O.S.)
ordering
Pour oil on the wood!
CUT TO:
EXT. MINAS TIRITH STREETS - NIGHT
ANGLE ON: PIPPIN RACES down the STEEP STREETS ... passing SOLDIERS running back from the BURNING CITY. GREAT BALLS of FIRE are hurtling through the air ... The city is in CHAOS.
PIPPIN
yelling
Gandalf? ... Gandalf?
AMIDST the FLEEING SOLDIERS...
GANDALF
Pull back - to the second level! Hurry! Get the women and children out of here - get them out!
PIPPIN desperately pushes against the TIDE of SOLDIERS retreating from the FIGHTING.
INTERCUT WITH:
EXT. PELENNOR FIELDS - NIGHT
GOTHMOG turns to his SECOND LIEUTENANT...
GOTHMOG
Move into the city ... Kill all in your path.
INTERCUT WITH:
EXT. MINAS TIRITH STREETS
As ORC run through the STREETS, MEN, WOMEN, and CHILDREN flee ... the PITCHED BATTLE continues...
GANDALF
Fight! Fight for your lives!
SUDDENLY! in the midst of the BATTLE, GANDALF turns ... SHRILL and CLEAR come the sounds of DISTANT HORNS! Off the SIDE of MOUNT MILLDOLLUIN, they dimly ECHO - WAR HORNS of the west ... ROHAN HAS COME!
CUT TO:
EXT. PELENNOR FIELDS - DAWN
GOTHMOG turns at the sound of the DISTANT HORNS...
WIDE ON: 6000 HORSEMEN, lead by THÉODEN and ÉOMER, step up to the SKYLINE...
ANGLE ON: MINAS TIRITH lies less than a MILE AWAY, down a gentle slope. Over 50,000 ORCS are swarming around the base of the city ... thick BLACK SMOKE belches from within it.
CLOSE ON: MERRY BLANCHES with FEAR ... ÉOWYN puts a comforting hand on his shoulder.
ÉOWYN
whisper
Courage, Merry ... courage for our friends.
On the BATTLE FIELD, GOTHMOG walks among his troops...
GOTHMOG
Form ranks, you maggots! Form ranks! Pikes in front, lances behind.
The ORCS PREPARE for BATTLE.
ANGLE ON: THÉODEN gallops in front of his ARMY, ISSUING URGENT ORDERS to his CAPTAINS:
THÉODEN
urgent
Éomer, take your Éored down the left flank ... Gamling! Follow the King's banner down the centre. Grimbold, take your company right, after we pass the wall. Forth, and fear no darkness!
CLOSE ON: THÉODEN rides to the front of his ARMY. He rises in his stirrups, TALL and PROUD, yelling in a clear, LOUD VOICE.
THÉODEN
Arise, arise, Riders of Théoden! Spears shall be shaken, shields shall be splintered ... A sword day, a red day , ‘ere the sun rises!
ANGLE ON: A RAY of SUNLIGHT escapes through the BLACK CLOUDS bathing the ROHIRRIM in GOLDEN LIGHT. WEAPONS and ARMOUR GLEAMS ... as 6000 HORSEMEN hold their SPEARS aloft!
Below, on PELENNOR FIELD, the ORC kneel and raise their LANCES in READINESS...
ANGLE ON: ÉOWYN, her arm around MERRY before her...
ÉOWYN
terrified
Whatever happens, stay with me. I'll look after you.
MERRY looks on in SHOCK...
ANGLE ON: As THÉODEN rides past the ranks of SOLDIERS he runs his LANCE along their SPEARS ... The noise echoes through the RANKS as the WEAPONS of other RIDERS CLATTER in response...
THÉODEN
stirring call
Ride now, ride now, ride, ride for ruin, and the world's ending!
THÉODEN faces his ENEMY!
THÉODEN
Death!
ROHIRRIM
6000 voices
Death!
CLOSE ON: MERRY is swept up in the emotion ... he whips out his LITTLE SWORD!
THÉODEN
Death!
MERRY
Death!
ÉOWYN
Death!
THÉODEN
yelling
Death! Forth, Eorlingas!
ALL the HORNS of the ROHIRRIM burst BLAST upon BLAST!
ANGLE ON: The 6000 ROHIRRIM move off, a great WALL of HORSES and SPEAR POINTS, building up to a GALLOP like a rising tide, as they CHARGE TOWARDS the 50,000 ORCS!
ANGLE ON: MERRY, wind blowing in his hair, ÉOWYN’S ARM around his chest ... as he YELLS at the top of his lungs!
ANGLE ON: GOTHMOG marshaling his troops.
GOTHMOG
Fire!
The first VOLLEY of ARROWS hit the ROHAN SOLDIERS ... The charge continues...
THÉODEN
Charge!
The second VOLLEY ... GOTHMOG watches in HORRIFIED AWE as the ROHAN ADVANCE CONTINUES ... SUDDEN FEAR runs through the ORC and URUK-HAI assembled on PELENNOR FIELD ... The ROHAN charge like MEN POSSESSED!
ANGLE ON: The WALL of ROHIRRIM HORSES and SPEARS is seemingly unstoppable! Entire ORC COMPANIES vanish under their hooves, like sand beneath a foaming breaker, as they RACE towards the MAIN BODY of the ORC ARMY!
ANGLES ON: ORC ARCHERS fire into the thundering ROHIRRIM ... ORC SPEARS LOWER ... the SUDDENLY the ROHIRRIM crash into the ORCS and the screen is FILLED with hacking, SLASHING SWORDS and CLASHING SHIELDS...
....A JAW DROPPING SIGHT!
EXT. MINAS TIRITH STREETS - DAWN
ANGLE ON: PIPPIN rushes towards GANDALF, dodging FLAMING DEBRIS.
PIPPIN
panicked yell
Gandalf!
GANDALF wheels around on SHADOWFAX...
PIPPIN
breathless
Denethor has lost his mind. He's burning Faramir alive!
GANDALF pulls PIPPIN onto SHADOWFAX.
GANDALF
Come! Quickly!
EXT. PELENNOR FIELDS - DAWN
The ROHAN charge is decimating the ENEMY!
CUT TO:
INT. MINAS TIRITH, STEWARD’S TOMB - DAWN
LOW ANGLE POV: DENETHOR standing on the table astride FARAMIR, pouring OIL over his OWN HEAD ... It runs through his hair and down his face, quickly soaking his ROBES.
CLOSE ON: FARAMIR, his eyes flicker open. As he tries to FOCUS through his delirium, OIL splashes onto his CHEST and FACE.
DENETHOR
Set a fire in our flesh!
BUNDLES of OIL-SOAKED wood are STACKED all around them.
SERVANTS are holding FLAMING TORCHES, awaiting their orders ... DENETHOR nods to them:
The SERVANTS approach the PYRE, TORCHES held firmly.
AT THAT MOMENT: GANDALF and PIPPIN burst into the HALLOWS, astride SHADOWFAX!
GANDALF
yelling
Stay this madness!
The fearful SERVANTS back away from the PYRE...
CLOSE ON: With a ROAR, DENETHOR SNATCHES a FLAMING TORCH ... and HURLS it at the PYRE!
WHOOSH! The PYRE IGNITES!
ANGLE ON: GANDALF GALLOPS towards the PYRE, knocking DENETHOR off his FEET ... PIPPIN LEAPS from SHADOWFAX onto the BURNING PYRE!
With a desperate strength, PIPPIN pushes FARAMIR off the BURNING PYRE ... they tumble down the BUNDLES of WOOD, onto the FLOOR! PIPPIN douses the FLAMES on FARAMIR’S clothing.
DENETHOR SCREAMS with RAGE!
DENETHOR
No! Do not take my son from me!
DENETHOR leaps ACROSS THE PYRE, RIPPING and TUGGING at PIPPIN!
FIRE quickly spreads up DENETHOR’S OIL-SOAKED BACK as he hauls PIPPIN off FARAMIR!
ANGLE ON: SHADOWFAX rears up and STRIKES at DENETHOR who falls back onto the PYRE.
CLOSE ON: DENETHOR ... he looks into his SON’S eyes ... for a BRIEF MOMENT, SANITY returns.
DENETHOR
whisper
Faramir...
ANGLE ON: FLAMES begin to ENGULF DENETHOR...
CLOSE ON: GANDALF pulls PIPPIN to safety ... they look in HORROR as...
SUDDENLY! DENETHOR lurches off the PYRE! Now a SCREAMING unguided BALL OF FLAME, he runs across the CHAMBER, disappearing out of the door!
GANDALF
grimly
So passes Denethor, Son of Ecthelion.
CUT TO:
EXT. MINAS TIRITH - DAY
DENETHOR runs across the WHITE COURT atop MINAS TIRITH ... and PLUMMETS straight over the 700 FOOT SHEER DROP into the FLAMING CITY below!
EXT. PELENNOR FIELDS - DAY
PAN OFF: DENETHOR’S DEATH PLUNGE to the ROHIRRIM gaining the upper hand - VAST NUMBERS of ORCS are SLAIN, or are FLEEING!
ÉOMER
Drive them into the river!
THÉODEN STANDS PROUD in his saddle, YELLING to his ROHIRRIM!
THÉODEN
yelling
Make safe the city!
CLOSE ON: THÉODEN ... his look of JOY turns to HORROR!
ANGLE ON: Across the VAST SEA of BATTLE come...
...20 MÛMAKIL! MASSIVE elephant-like CREATURES, each carrying a WAR-TOWER, packed with HARADRIM ARCHERS!
ANGLE ON: ROHIRRIM RIDERS PANICKING.
CLOSE ON: THÉODEN on his HORSE, CIRCLING AMONGST THEM.
THÉODEN
Reform the line...Reform the line!
ANGLE ON: ROHIRRIM HORSES MOVING BACK INTO LINE.
THÉODEN
to GAMLING
Sound the charge!
THÉODEN
sword raised
...Charge!
ANGLE ON: ROHIRRIM RIDERS CHARGE TOWARDS THE LINE OF MÛMAKIL!
ANGLES ON: The MÛMAKIL BELLOW as they are goaded into war, driven mercilessly by their brutal HARADRIM MASTERS. They LUMBER into the SEA of MEN, crushing RIDERS and HORSES beneath their MASSIVE FEET! Their SPIKED TUSKS swing wildly, sweeping and impaling RIDERS!
HARADRIM ARCHERS are sending a RAIN of ARROWS into the PANICKING ROHIRRIM!
ÉOWYN and MERRY are THROWN from their HORSE...
EXT. MINAS TIRITH - DAWN
HIGH WIDE: The SIXTH LEVEL of the CITY ... Smoke rising around it, fires burning beneath it...
EXT. THE SIXTH GATE, MINAS TIRITH - DAWN
WIDE ON: A rabble of ORCS are clustered outside the SIXTH GATE as TROLLS pound on its WOODEN DOORS with HUGE HAMMERS.
ANGLE ON: WOOD splinters ... The DOORS are near breaking point.
ANGLE ON: GANDALF and PIPPIN sit on stone steps ... Both covered in sweat and grime, bone-weary from fighting, spirits and hearts bruised...
PIPPIN looks towards the WOODEN GATES at which a NUMBER of SOLDIERS continue to build a BARRICADE...
PIPPIN
quiet
I didn't think it would end this way...
GANDALF looks at the SMALL HOBBIT a beat.
GANDALF
gently
End? No, the journey doesn't end here.
PIPPIN looks up at GANDALF, questioningly...
GANDALF
Death is just another path, one that we all must take.
ANGLE ON: GANDALF looks down to see PIPPIN looking up at him with fear in his eyes...
GANDALF
remembering
The grey rain-curtain of this world rolls back, and all turns to silver glass...
to himself
and then you see it...
ANGLE ON: GANDALF breaks off, lost in reverie...
PIPPIN
What, Gandalf? See what?
GANDALF
White shores ... And beyond... a far green country under a swift sunrise.
PIPPIN stares up at the OLD WIZARD’S FACE, softened, quiet and full of peace...
PIPPIN
quiet
Well, that isn't so bad.
GANDALF
gently
No... No, it isn't.
BOOM!
ANGLE ON: GANDALF and PIPPIN’S faces turn as the WOODEN DOORS shudder under another BLOW.
CUT TO:
EXT. PELENNOR FIELDS - DAY
ANGLE ON: The battlefield is in CHAOS as MÛMAKIL decimate the VALIANT ROHIRRIM...
CLOSE ON: THÉODEN tries to rally his men amid the SEA of CRYING MEN and NEIGHING HORSES!
THÉODEN
yelling
Rally to me! To me!
SUDDENLY the WITCH-KING SWOOPS down on his FELL-BEAST scooping up THÉODEN and his HORSE ... they CARTWHEEL into the AIR and land in a heap ... the HORSE is DEAD ... THÉODEN lies DYING beneath it.
ANGLE ON: The WITCH-KING swooping down on his FELL-BEAST!
The FELL-BEAST lands on THÉODEN’S DEAD HORSE.
WITCH-KING
Feast on his flesh!
ANGLE ON: The FELL-BEAST opens it’s WICKED JAWS...!
ANGLE ON: A ROHAN SOLDIER stands before the BEAST ... it is ÉOWYN!
ÉOWYN
I will kill you if you touch him!
CLOSE ON: The WITCH-KING laughs...
WITCH-KING
Do not come between the Nazgûl and his prey!
ANGLE ON: The FELL-BEAST lifts ÉOWYN from her feet...
SUDDENLY! With a mighty SWORD BLOW, the FELL-BEAST’S HEAD is SEVERED! The huge CREATURE crumples to the ground, VAST WINGS out-stretched, sending the WITCH-KING sprawling!
ANGLE ON: The WITCH-KING rises out of the wreckage ... tall and threatening...
ÉOWYN stands before him, the FELL-BEAST’S BLOOD dripping from her SWORD!
With a shrill SHRIEK of HATRED, he knocks ÉOWYN backwards with his MACE! STUNNED, ÉOWYN tries to stand and is hit once again with another CRIPPLING BLOW...
ANGLE ON: The WITCH-KING laughs once again as he SMASHES his MACE downward ... ÉOWYN tries to block the BLOW but her SHIELD shatters into MANY PIECES!
The WITCH-KING towers over ÉOWYN ... raising his MACE for the KILLING BLOW!
CUT TO:
EXT. MINAS TIRITH DOCKS - DAY
ANGLE ON: An ORC COMMANDER hurrying on to the ANDUIN RIVER DOCKS, close to the CITY. LARGE BLACK SHADOWS slide across the DOCKS, as SAILING SHIPS approach O.S.
ANGLE ON: A sinister BLACK SAILED SHIP GLIDES into the DOCKS ... 9 OTHER CORSAIR SHIPS follow behind.
CLOSE ON: The ORC COMMANDER...
HEAD ORC
angry
Late as usual! Get off your ships, you sea rats! There’s knife work here needs doing.
ANGLE ON: ARAGORN leaping from the LEADING SHIP and charging across the DOCKS, ROARING at the top of his LUNGS! He is followed by LEGOLAS and GIMLI...
ANGLE ON: Surprised ORC REACTION to the THREE charging towards THOUSANDS of ORCS!
GIMLI
Plenty for the both of us ... may the best dwarf win!
ANGLE ON: The ARMY OF THE DEAD suddenly LEAP straight out of the SIDES of the SHIPS! They charge ACROSS the SURFACE OF THE WATER with FRIGHTENING SPEED, overtaking ARAGORN!
The ORCS SCREAM at the SIGHT of 5000 SPECTRAL WARRIORS!
ANGLE ON: The SPECTRAL WARRIORS SWARM into the flank of the ORC ARMY! With a raging blood-lust, the UNDEAD climb over the top of each other to try and reach the enemy, creating a kind of ROLLING MOUNTAIN of GHOULS that sweep all before them away!
The ORCS have no defense as their WEAPONS CANNOT MAKE CONTACT with the GHOSTS!
EXT. PELENNOR FIELDS - DAY
ANGLE ON: MERRY on the ground ... He looks around to see THE WITH-KING standing over ÉOWYN, pulling her to her FEET!
WITCH-KING
No man can kill me ... Die!
ANGLE ON: MERRY driving his SWORD into the back of the WITCH-KING’S KNEE! MERRY’S SWORD bursts into FLAME and his ARM is shot with PAIN...
ÉOWYN struggles to her feet ... pulling off her HELMET:
CLOSE ON: ÉOWYN ... her LONG HAIR tumbling onto her shoulders!
ÉOWYN
I am no man!
With her last strength, ÉOWYN thrusts her SWORD into the WITCH-KING’S FACE! ÉOWYN’S SWORD SHATTER into MANY SHARDS!
The WITCH-KING topples back DEAD, a BLACK OOZE leaking from his ROBES and ARMOUR! A shuddering CRY, fading into a SHRILL WAIL passes with the WIND.
ARAGORN and LEGOLAS battle the ORC - LEGOLAS JUMPS onto the BACK of a GIANT MÛMAKIL bringing it down ... he lands on his feet in front of GIMLI...
GIMLI
That still only counts as one!
The MÛMAKIL react with terror as SPECTRAL WARRIORS climb up their SIDES, routing the HARADRIM from their WAR-TOWERS!
ORCS flee in their THOUSANDS ... the TERRIFIED MÛMAKIL trampling them in their PANIC to ESCAPE!
ANGLE ON: The ARMY OF THE DEAD swarming over the CITY, routing the ORCS!
ANGLE ON: ÉOWYN crawls to where THÉODEN lays, mortally wounded...
THÉODEN looks up at ÉOWYN ... his breathing shallow ... his vision clouded...
THÉODEN
gasping weakly
I know your face ... Éowyn...
ÉOWYN smiles down at him as she GENTLY STROKES his FACE...
THÉODEN
My eyes darken...
ÉOWYN
No... I am going to save you...
THÉODEN
loving
You already did...
clutching her hand
My body is broken ... you have to let me go.
ÉOWYN
No...
THÉODEN touches her tear-stained face...
THÉODEN
I go to my fathers ... in whose mighty company, I shall not now feel ashamed...
THÉODEN is DYING...
THÉODEN
Éowyn?
THÉODEN DIES ... ÉOWYN breaks down, SOBBING ... ALL AROUND is a VISTA OF DEFEAT.
CUT TO:
EXT. PELENNOR FIELDS, MINAS TIRITH - DAY
WIDE ON: PELENNOR FIELDS ... strangely SILENT ... all ORCS have fled ... BATTLE DEBRIS and BODIES stretch as far as the eye can see...
ABOVE MINAS TIRITH ... BLINDING SUN RAYS break through the LOW CLOUDS!
ANGLE ON: GANDALF, LEGOLAS, GIMLI and PIPPIN watch as ... ARAGORN walks slowly across the FIELD OF BATTLE towards the HIDEOUS GHOULS...
KING OF THE DEAD
Release us.
GIMLI
quietly
Bad idea. Very handy in a tight spot, these lads - despite the fact, they're dead!
KING OF THE DEAD
You gave us your word.
ARAGORN
I hold your oath fulfilled... Go. Be at peace.
ANGLE ON: The ARMY OF THE DEAD slowly DISSOLVE INTO DUST, and are immediately swept away by the four winds.
ARAGORN turns to GANDALF who bows his head in HOMAGE...
PIPPIN, in his GONDORIAN armour, looks around at the devastation ... his eyes full of SADNESS ... they suddenly fix on something.
ANGLE ON: PIPPIN running through the RUIN of the BATTLE ... towards a SMALL FIGURE slumped on the ground...
PIPPIN
Merry?
MERRY stares unseeing at PIPPIN ... HORROR and SHOCK erasing all other memories from MERRY’S mind ... tears fall down PIPPIN’S FACE as he looks on his FRIEND.
PIPPIN
Merry ... it's me, it's Pippin...
MERRY
groggy
I knew you'd find me.
disoriented
Are you going to leave me?
PIPPIN
No, Merry. I'm going to look after you.
ANGLE ON: PIPPIN covers MERRY with a blanket...
CUT TO:
EXT. TOWER OF CIRITH UNGOL - NIGHT
CAMERA RISES ... towards the dark ORC TOWER of CIRITH UNGOL.
A light glows from the TOPMOST WINDOW.
CAMERA reaches the TOWER, dissolving through the wall into...
CUT TO:
INT. TOWER OF CIRITH UNGOL/TOP ROOM - NIGHT
... a small cold ROOM. FRODO BAGGINS is UNCONSCIOUS on the floor. His eyes suddenly flicker and he WAKES UP.
TILT UP ... to reveal the ORC and URUK-HAI, GORBAG and SHAGRAT, arguing over FRODO’S BELONGINGS and CLOTHES! GORBAG is snatching for the MITHRIL VEST.
SHAGRAT
Hey! Hands off - that shiny shirt, that's mine.
GORBAG
It's going to the Great Eye, along with everything else.
ANGLE ON: ... FRODO as he realises that he has been STRIPPED down to his UNDERWEAR. He clutches at his throat.
...The RING HAS GONE!
SHAGRAT
I don't take orders from stinking Morgul rats!
GORBAG grabs for the MITHRIL VEST...
GORBAG
You touch it, and I'll stick this blade in your guts!
ANGLE ON: GORBAG draws his SWORD, but SHAGRAT KICKS him BACKWARDS with his foot! GORBAG FALLS THROUGH a TRAP DOOR leading to the floor below!
CUT TO:
INT. TOWER OF CIRITH UNGOL/GUARD ROOM - NIGHT
ANGLE ON: GORBAG lands in the GUARD ROOM with a CRASH, creating SUDDEN ALARM amongst the ORCS and URUK-HAI stationed there.
SHAGRAT leans through the TRAP DOOR...
SHAGRAT
yelling
The scum tried to knife me! Kill him!
SEVERAL URUK-HAI converge on GORBAG - he LASHES OUT, slashing one across the throat with his SWORD!
The DEAD URUK-HAI topples backwards over the PARAPET...
CUT TO:
EXT. TOWER OF CIRITH UNGOL/COURTYARD - NIGHT
...landing on top of URUK-HAI and ORCS in the courtyard below. Within moment, a brutal CIVIL WAR breaks out between the TWO COMPANIES stationed in CIRITH UNGOL!
EXT. PASS OF CIRITH UNGOL - NIGHT
ANGLE ON: SAM hurries towards the gate, fearful for FRODO.
CUT TO:
EXT. TOWER OF CIRITH UNGOL/COURTYARD
SAM is confronted with the sight of over 50 SLAUGHTERED ORC and URUK-HAI, strewn over the COURTYARD!
ANGLE ON: SAM pounds UP THE STAIRCASE ... he suddenly PAUSES.
SEVERAL URUK-HAI are running DOWN TOWARDS HIM! He grips STING and continues CHARGING UP - SCREAMING at the top of his lungs!
ANGLE ON: The FOUR URUKS ... they see a HUGE DISTORTED SHADOW on the wall in front of them! They turn around and flee in terror back to the top of the stairs!
SAM appears - and before the URUK-HAI can fully regain their wits - he slays THREE ... YELLING:
SAM
yelling ... 1st URUK-HAI
That's for Frodo!
yelling ... 2nd URUK-HAI
And for the Shire!
yelling ... 3rd URUK-HAI
And that's for my old Gaffer!
SAM runs into the TOWER...
INT. TOWER OF CIRITH UNGOL/TOP ROOM - NIGHT
ANGLE ON: FRODO struggling against his bonds, as GORBAG climbs back into the room ... with VENGEANCE in his EVIL EYES.
GORBAG
Stop your squeaking, you dunghill rat!
CLOSE ON: GORBAG grabs FRODO’S hair and pulls his head back, exposing his neck. He pulls out his SWORD, ready to cut FRODO’S throat...
GORBAG
I'm gonna bleed you like a stuck pig!
SUDDENLY! GORBAG GASPS as STING is rammed into his back by SAM!
SAM
Not if I stick you first!
GORBAG falls dead!
FRODO
joyous disbelief
Sam!!!
ANGLE ON: FRODO ... humbled by SAM’S unswerving loyalty.
FRODO
Oh, Sam ... I'm so sorry ... sorry for everything.
SAM quickly cuts FRODO free.
SAM
Come on.
FRODO
despairing
It's too late. It's over ... they've taken it. Sam - they took the Ring!
SAM
quietly
Begging your pardon, but they haven't.
SAM pulls the RING from his pocket...
SAM
I thought I'd lost you ... so I took it - only for safe-keeping.
CLOSE ON: FRODO looks at SAM amazed ... his eyes drop to the RING...
FRODO
Give it to me.
SAM hesitates ... TENSION instantly builds between them.
FRODO
Give me the Ring, Sam.
SAM seems strangely reluctant ... ON THE SOUNDTRACK, the HUM of the RING builds.
FRODO
Sam! Give me the Ring.
CLOSE ON: SAM drops the RING into FRODO’S palm...
FRODO sags in RELIEF ... he puts the RING back around his neck...
FRODO
You must understand ... The Ring is my burden ... It will destroy you, Sam.
FRODO looks at SAM, pain in his eyes...
SAM looks down at FRODO ... his plain HOBBIT face full of compassion. SAM’S resolve hardens, a new strength takes hold.
SAM
Come on, Mr. Frodo, we'd best find you some clothes. You can't go walking through Mordor in naught but your skin.
CUT TO:
EXT. PASS OF CIRITH UNGOL - NIGHT
FRODO and SAM are now dressed in FOUL-LOOKING ORC gear...
ANGLE ON: FRODO and SAM turn east and walk over the SUMMIT of CIRITH UNGOL ... into MORDOR
CLOSE ON: FRODO and SAM ... they STOP DEAD ... STARING AHEAD:
ANGLE ON: MOUNT DOOM ... 50 MILES AWAY - across the barren GORGOROTH PLATEAU - the mountain is erupting streams of ASH and LAVA high into the air, lighting the low cloud blanket of MORDOR with a flickering ORANGE WASH.
With immense trepidation, FRODO and SAM head down the steep path into the dark kingdom...
...TWO TINY FIGURES in a bleak, foreboding landscape. Before them lies the PLAIN OF GORGOROTH ... Their eyes are drawn to the OMINOUS SILHOUETTE of MOUNT DOOM...
SAM
We did it, Mr. Frodo. We made it to Mordor.
ANGLE ON: FRODO’S eyes travel down towards the HUNDREDS of FIRES which glow on the PLAINS beneath them ... thousands upon thousands of ORCS are encamped there.
FRODO
There are so many of them ... So many. We’ll never get through unseen.
THEIR eyes are drawn to a DARK LOOMING SHAPE ... BARAD-DÛR ... A RED LIGHT seems to sweep across the PLAIN...
FRODO
terror
It's him - the Eye.
The GREAT EYE OF SAURON!
SAM cannot see what FRODO sees. GENTLY, he urges FRODO on.
SAM
We have to go in there, Mr. Frodo. There's nothing for it. Come on. Let's just make it down the hill for starters.
INT. MINAS TIRITH, TOWER HALL - DAY
CLOSE ON: GANDALF stands in the TOWER HALL ... seemingly alone ... he speaks quietly, doubt and fear edge his voice.
GANDALF
Frodo has passed beyond my sight. The darkness is deepening.
He turns and crosses the HALL to reveal the presence of GIMLI, LEGOLAS, ÉOMER and ARAGORN...
ARAGORN, his back to GANDALF...
ARAGORN
If Sauron had the Ring, we would know it.
CLOSE ON: GANDALF - still troubled, still worried...
GANDALF
It's only a matter of time. He has suffered a defeat, yes, but behind the walls of Mordor our enemy is regrouping.
GIMLI sits insolently on the SEAT of the STEWARD...
GIMLI
Let him stay there. Let him rot. Why should we care?
GANDALF looks across at the DWARF ... His face ashen.
GANDALF
Because ten thousand Orcs now stand between Frodo and Mount Doom.
GANDALF
to himself
I've sent him to his death.
ANGLE ON: ARAGORN turns around suddenly...
ARAGORN
No.
GANDALF looks up sharply at ARAGORN...
ARAGORN
There's still hope for Frodo. He needs time and safe passage across the Plains of Gorgoroth. We can give him that.
GANDALF
How?
ARAGORN
Draw out Sauron's armies - empty his lands. Then we gather our full strength and march on the Black Gate.
At this, GIMLI CHOKES on his pipe ... ÉOMER steps forward.
ÉOMER
We cannot achieve victory through strength of arms.
ARAGORN
Not for ourselves ... But we can give Frodo his chance if we keep Sauron's eye fixed upon us. Keep him blind to all else that moves.
LEGOLAS
A diversion...
CLOSE ON: GANDALF speaks in a low tone to ARAGORN...
GANDALF
doubtful
Sauron will suspect a trap. He will not take the bait!
GIMLI
Certainty of death. Small chance of success. What are we waiting for?
CUT TO:
EXT. PELENNOR FIELDS - DUSK
CLOSE ON: ARAGORN wearing a BREAST PLATE emblazoned with the WHITE TREE.
He rides at the head of a COLUMN of 500 FOOT SOLDIERS from ROHAN and GONDOR ... leading them from the RUINS of OSGILIATH.
GANDALF, LEGOLAS, GIMLI, ÉOMER, MERRY and PIPPIN ride directly behind him.
AHEAD OF THEM: THE MOUNTAINS OF MORDOR.
EXT. PLAINS OF GORGOROTH - NIGHT
GREAT ARMIES of ORC and URUK-HAI stream across the PLAINS from MORDOR...
EXT. ORC ROAD, MORDOR - NIGHT
WIDE SHOT: The VOLCANIC WASTELAND of the GORGOROTH FOOTHILLS.
FRODO and SAM, still disguised in the ORC ARMOUR, slide down scree bank and land on the road below ... their attention is fixed on the PLAIN below ... thousands of ORCS can be seen marching away from MOUNT DOOM...
SAM
Look, the Orcs! They're moving off. You see, Mr. Frodo - some luck at last.
EXT. GORGOROTH PLAIN, MORDOR - DAWN
FRODO and SAM ... moving across a HELLISH dry landscape of twisted volcanic rock and STEAMING FISSURES.
40 MILES AWAY, MOUNT DOOM rises out of the PLAIN ... its feet founded in ashen ruin, its huge cone rising to a great height, where its reeking head is swathed in cloud.
EXT. BLACK GATES OF MORDOR - DAY
ARAGORN’S FORCE of 500 approaches the great BLACK GATES OF MORDOR. He positions his troops about half a mile from the GATES.
EXT. GORGOROTH PLAIN, MORDOR - DAY
ANGLE ON: FRODO slumped against a ROCK ... he tries to DRINK from his WATER BOTTLE ... but finds it EMPTY.
SAM
Take mine ... there's a few drops left.
FRODO gratefully takes a SMALL SIP from SAM’S BOTTLE ... hands it back.
FRODO
There'll be none left for the return journey.
SAM
softly
I don't think there will be a return journey, Mister Frodo.
A moment of EYE CONTACT between FRODO and SAM as they acknowledge what lies ahead.
SAM offers FRODO his hand ... and PULLS HIM UP.
CUT TO:
EXT. BLACK GATES OF MORDOR - DAY
At the BLACK GATES, ARAGORN musters his MEN...
CUT TO:
EXT. PLAINS OF GORGOROTH - DAY
WIDE ON: FRODO and SAM staggering across the TORTURED LANDSCAPE ... they are no longer WEARING the ORC ARMOUR.
CLOSE ON: FRODO is walking half-bowed, often stumbling ... as if his eyes no longer see the way before his feet.
His right HAND is pressed against his CHEST ... supporting a HEAVY WEIGHT. His left HAND often rises, as if to ward off some invisible blow. SAM watches him, CONCERN etched across his FACE...
CLOSE ON: FRODO as a malevolent VOICE in his head calls to him ... “Baggins - Baggins”...
CLOSE ON: SAM looking behind him in time to see...
WIDE ON: A RAY of RED LIGHT stabs through the GLOOM and begins to sweep over the BARREN LANDSCAPE...
SAM
Frodo, get down!
SAM throws himself to the ground ... FRODO turns to the light, unable to stop himself...
FRODO crumpling to the ground as the RED LIGHT hits him like a SEARCHLIGHT.
EXT. BLACK GATES OF MORDOR - NIGHT
All is QUIET ... No sign of the ENEMY...
PIPPIN
wary
Where are they?
ANGLE ON: GANDALF ... watchful ... alert. He nods at ARAGORN.
WIDE: ARAGORN, GANDALF, LEGOLAS, GIMLI, ÉOMER, MERRY and PIPPIN galloping towards the BLACK GATES. They pull up less than 50 yards from the TOWERING GATES...
INTERCUT WITH:
EXT. PLAINS OF GORGOROTH - NIGHT
FRODO is slumped on the GROUND, unable to MOVE...
INTERCUT WITH:
EXT. BLACK GATES OF MORDOR - NIGHT
ANGLE ON: ARAGORN moves his HORSE forward.
ARAGORN
Let the lord of the Black Land come forth; let justice be done upon him.
From behind the HUGE GATES, the terrifying CHANTING and the CLANGING of the ARMOUR of THOUSANDS...
With the SOUND of TORTURED METAL, the MASSIVE GATES begin to open ... LEGOLAS, MERRY and ÉOMER look on in trepidation.
EXT. PLAINS OF GORGOROTH - NIGHT
With the EYE OF SAURON sweeping the PLAINS around them, SAM gets to his feet...
EXT. BLACK GATES OF MORDOR - NIGHT
The BLACK GATES of MORDOR SWING OPEN! SAURON’S ARMY of 300,000 ORCS MARCH OUT!
ARAGORN
Pull back! Pull back!
ANGLE ON: ARAGORN, GANDALF, LEGOLAS, GIMLI, ÉOMER, MERRY and PIPPIN GALLOP back towards their SMALL ARMY as the ORC MASSES slowly MARCH toward them.
Behind them, the EYE OF SAURON is directed toward THEM...
CUT TO:
EXT. PLAINS OF GORGOROTH - NIGHT
FRODO’S eyes open with a START...
SAM
It's gone, Mr. Frodo.
ANGLE ON: SAM crawls toward FRODO...
SAM
The light's passed on, away towards the North ... something's drawn its gaze.
FRODO and SAM stagger to their feet and move off.
CUT TO:
EXT. BLACK GATES OF MORDOR - DAY
ANGLE ON: The MASSIVE ORC ARMY marching towards ARAGORN’S MEN.
ANGLES ON: ARAGORN’S MEN ... starting to WAVER as the ORCS ENCIRCLE THEM. SOME MEN are backing away ... losing their nerve.
ARAGORN GALLOPS in front of his ARMY...
ARAGORN
Hold your ground - hold your ground! Sons of Gondor - of Rohan ... my brothers!
ANGLE ON: ARAGORN ... he seems to fix each and every one of his MEN with his eyes.
ARAGORN
I see in your eyes the same fear that would take the heart of me. A day may come when the courage of Men fails; when we forsake our friends and break all bonds of fellowship; but it is not this day - an hour of wolves and shattered shields, when the Age of Men comes crashing down - but it is not this day!! This day we fight! By all that you hold dear on this good earth - I bid you stand!
ARAGORN holds ANDÚRIL ALOFT!
ARAGORN
Men of the West!
CUT TO:
EXT. MOUNT DOOM - NIGHT
FRODO and SAM are CLIMBING the face of MOUNT DOOM...
The LANDSCAPE is VIOLENT ... RED HEAT hisses out of FISSURES, the ROCK is JAGGED ... RAZOR SHARP ... ASH blankets the LAND.
RED LIGHTNING FORKS across the SKY with a DEAFENING CRACK!
CLOSE ON: FRODO and SAM’S FEET dragging across the ASH ... Their PARCHED LIPS ... SWEATING, DUSTY FACES.
FRODO TRIPS ... falls FACE-FIRST into the DUST ... SAM drops beside him.
INTERCUT WITH:
EXT. BLACK GATES OF MORDOR - DAY
HIGH WIDE: Of ARAGORN’S ARMY totally SURROUNDED by 300,000 ORCS ... poised for the order to ATTACK!
INTERCUT WITH:
EXT. MOUNT DOOM - NIGHT
FRODO slowly lifts his head and looks up...
FRODO’S POV: Looking straight up the STEEP SLOPES of MOUNT DOOM! ... a huge mass of ash and slag and burned stone!
FRODO starts to CRAWL on his HANDS and KNEES! He hauls himself a FEW PITIFUL FEET before SLUMPING in the ASH.
CUT TO:
EXT. BLACK GATES OF MORDOR - NIGHT
ANGLE ON: GIMLI as he surveys the ARMY of MORDOR...
GIMLI
Never thought I'd die fighting side by side with an elf.
LEGOLAS
quietly
What about side by side with a friend?
GIMLI looks up into the EYES of LEGOLAS, with whom he has shared so much. The GRUFF DWARF smiles quietly...
GIMLI
Aye - I could do that.
LEGOLAS drops his hand on GIMLI’S shoulder ... SLOWLY they turn and FACE the ENEMY TOGETHER.
CUT TO:
EXT. GORGOROTH PAIN, MORDOR - NIGHT
CLOSE ON: SAM crawls to FRODO who lies SLUMPED against the rock-face ...he turns him over, holding him in his ARMS.
SAM
softly
Do you remember the Shire, Mr. Frodo? ... It'll be spring soon, and the orchards will be in blossom; and the birds will be nesting in the hazel thicket; and they'll be sowing the summer barley in the lower fields; and eating the first of the strawberries with cream.
looking down at FRODO
Do you remember the taste of strawberries?
CLOSE ON: FRODO shuts his eyes, his breath coming in GASPS.
FRODO
weak whisper
No, Sam. I can't recall the taste of food; nor the sound of water; nor the touch of grass ... I'm naked in the dark.
rising panic
There's no veil between me and the wheel of fire. I can see him with my waking eyes!
CLOSE ON: SAM looks at FRODO with GRIM DETERMINATION.
SAM
Then let us be rid of it - once and for all! Come on, Mr. Frodo. I can't carry it for you ... but I can carry you! Come on!
With that, SAM lifts FRODO onto his shoulders and starts to CLIMB MOUNT DOOM! his plain hobbit-face grows stern, almost grim, as the will hardens in him.
WIDE ON: TWO TINY HOBBITS on the ENDLESS shale SLOPES of the MOUNTAIN...
CUT TO:
EXT. BLACK GATES ON MORDOR - DAY
ANGLE ON: ARAGORN and COMPANY watch as they are surrounded by a tide of ORCS...
ARAGORN raises ANDÚRIL in the BROAD SWEEP as he walks forward ... he turns to FACE the OTHERS...
CLOSE ON: QUIET RESOLVE written on ARAGORN’S face as he looks into the EYES of the remaining members of the FELLOWSHIP...
ARAGORN
softly
For Frodo...
ANGLE ON: ARAGORN turning, SWORD-raised, he CHARGES FORWARD!
There is a moment of SILENCE ... no-one else moves ... SUDDENLY a SHOUT goes up!
ANGLE ON: PIPPIN and MERRY charging forward ... The rest of the MEN following...
ANGLE ON: ARAGORN crashing head on into a line of ORCS...
ANGLE ON: The blade of ANDÚRIL flashing as ARAGORN HACKS at ORCS!
CUT TO:
EXT. SLOPES OF MOUNT DOOM - DAY
WIDE: Like a small grey insect, SAM creeps up the slope with FRODO on his back ... foot by foot.
The mantling CLOUD swirls, revealing the cruel pinnacles and iron crown of BARAD-DÛR, the Dark Tower, in the distance.
CLOSE ON: SAM staggering under FRODO’S weight ... STRONG ash-laden WINDS are buffeting him as he slowly CLIMBS MOUNT DOOM.
The PLAIN of GORGOROTH lies 1000 FEET BELOW, wrapped in fume and shadow.
A TREMOR ripples through the GROUND ... a RED FLAME explodes into the SKY...
ANGLE ON: SAM looks up - fearful the MOUNTAIN could explode at any moment!
SAM POV: Through the THICK, FUME-LADEN AIR a set of STAIRS can be made out...
SAM
growing excitement
Look, Mr. Frodo! We're almost there!
SAM can’t believe it - relief and joy flood through him...
GOLLUM
Clever Hobbits to climb so high!
SMACK! OUT OF NOWHERE the figure of SMÉAGOL crashes into them sending SAM and FRODO sprawling.
ANGLE ON: SMÉAGOL pounces on FRODO ... his fingers wrapping around his throat, snapping FRODO’S neck from side to side!
ANGLE ON: FRODO as he struggles to unlock the BONY, WHITE FINGERS around his neck, but SMÉAGOL’S grip is too strong.
CLOSE ON: SMÉAGOL’S fingers tightening around FRODO’S neck - squeezing the life out of him...
WHACK! A ROCK connects with the SIDE of SMÉAGOL’S head...
ANGLE ON: SAM jumps on a STUNNED SMÉAGOL...
ANGLE ON: FRODO comes to...
INTERCUT WITH:
EXT. BLACK GATES OF MORDOR - DAY
The BATTLE between MEN and ORCS rages on ... From MORDOR, high OVERHEAD, the NAZGÛL fly out into the FRAY...
INTERCUT WITH:
EXT. SLOPES OF MOUNT DOOM - DAY
All the old HATRED between SAM and SMÉAGOL boils over as they FIGHT ... SAM falls back ... SMÉAGOL BITING at his SHOULDER!
SAM pushes SMÉAGOL away with his feet ... rolls to his KNEES, as SMÉAGOL charges at him...
SAM slashes out with STING! He cuts SMÉAGOL across the stomach! SMÉAGOL staggers back, SCREAMING with PAIN...
SAM looks around desperately for FRODO...
SAM
yelling desperately
Frodo!
FRODO has GONE!
ANGLE ON: FRODO RUNNING UP THE MOUNTAIN!
INTERCUT WITH:
EXT. BLACK GATES OF MORDOR - DAY
FELLOWSHIP fight BRAVELY ... a hideous screech rends the AIR!
ANGLE ON: GANDALF looks up to a NAZGÛL diving straight toward him!
CLOSE ON: GANDALF’S eyes flicker as a small MOTH flutters across his line of sight.
ANGLE ON: THE FELL-BEAST - JAWS OPEN, TALONS EXTENDED!
Another cry rends the air as...
SMACK! The GIANT EAGLE, GWAHIR, SMASHES into the FELL-BEAST, it’s claws ripping into the HIDEOUS MONSTER’S NECK!
ANGLE ON: PIPPIN in the midst of BATTLE looks up.
PIPPIN
disbelieving
Eagles...
Above the BATTLE attack formation, more EAGLES appear...
PIPPIN
The Eagles are coming! The Eagles are coming!
The EAGLES engage the NAZGÛL!
CUT TO:
EXT. DOOR OF SAMMATH NAUR, MOUNT DOOM - DAY
ANGLE ON: SAM is GASPING, his lungs EXPLODING as he RACES up the SLOPES of MOUNT DOOM searching for FRODO.
ANGLE ON: SAM arriving at the STONE DOORWAY of SAMMATH NAUR ... leading into the MOUNTAIN!
SAM staggers into it!
INT. THE CRACK OF DOOM TUNNEL - DAY
ANGLE ON: SAM flinches against the FIERCE HEAT blasting down the TUNNEL.
SAM
yelling
Frodo!
SAM lurches forward ... towards ORANGE GLOW deep in the HEART of the MOUNTAIN.
INT. CRACK OF DOOM - DAY
The HEAT is almost UNBEARABLE ... SAM sees FRODO in the DISTANCE...
FRODO
I'm here, Sam.
ANGLE ON: FRODO is standing on the EDGE of the CRACK OF DOOM ... a deep LAVA FILLED CHASM, in the very heart of ancient SAURON’S FORGES, the greatest in Middle-earth.
The RAGING ORANGE GLARE from the CHASM turns FRODO into a BLACK SILHOUETTE ... standing TENSE and STILL.
FRODO holds the RING in his HAND ... he RAISES IT, holding it over the BUBBLING LAVA far below.
SAM
yelling
Destroy it - go on! Throw it in the fire!
CLOSE ON: FRODO ... a STRANGE EXPRESSION on his face...
SAM
What are you waiting for? Just let it go!
ON THE SOUNDTRACK: The HUM of the RING grows louder and louder! FRODO PULLS the RING close to his body as he turns to SAM.
FRODO looks at SAM. The RING has finally taken him.
FRODO
The Ring is mine.
SAM SCREAMS as...
... FRODO PUTS THE RING ON! He VANISHES!
SAM
No!
CUT TO:
EXT. BLACK GATES OF MORDOR - DAY
With a storm of wings, the NAZGÛL wheel around and hurtle towards MOUNT DOOM!
In the midst of the BATTLE - GANDALF ... realising FRODO has been seen...
INTERCUT WITH:
INT. CRACK OF DOOM - DAY
CLOSE ON: SAM is SCREAMING for FRODO...
ANGLE ON: FOOTPRINTS moving across the ASH COVERED CAVERN FLOOR!
SUDDENLY! GOLLUM smashes a ROCK down on SAM’S HEAD, knocking him to the GROUND!
GOLLUM LEAPS on to the INVISIBLE FRODO!
CLOSE ON: FRODO’S FOOTPRINTS ... staggering about under GOLLUM’S WEIGHT!
ANGLE ON: GOLLUM clawing FRANTICALLY, riding on the BACK of the INVISIBLE FRODO...
INTERCUT WITH:
EXT. BLACK GATES OF MORDOR - DAY
ARAGORN turns and is confronted by an ARMOURED TROLL wielding an ENORMOUS MALLET...
INTERCUT WITH:
INT. CRACK OF DOOM
GOLLUM suddenly LIFTS HIS HANDS to his face ... and BITES HARD!
ANGLE ON: FRODO MATERIALIZES as he DROPS TO HIS KNEES, clutching his BLEEDING HAND ... he SCREAMS.
The FIRES below roar in anger, RED LIGHT blazes, and all the cavern is filled with a great glare and heat.
INTERCUT WITH:
EXT. BLACK GATE OF MORDOR - DAY
ANGLE ON: LEGOLAS as ARAGORN falls to the GROUND...
INTERCUT WITH:
INT. CRACK OF DOOM - DAY
CLOSE ON: GOLLUM triumphantly HOLDS the RING ALOFT... ECSTATIC!
CLOSE ON: GOLLUM dancing GLEEFULLY ... PERILOUSLY close to the EDGE OF THE CHASM!
INTERCUT WITH:
EXT. BLACK GATES OF MORDOR - DAY
ARAGORN turns to see HUGE TROLL FEET moving CLOSER... LEGOLAS races toward him...
INT. CRACK OF DOOM
GOLLUM still TRIUMPHANT ... on the edge of the PRECIPICE ... The FIERY LAVA casting an EVIL LIGHT ... He jumps about in DELIGHT...
GOLLUM
Precious! Precious!
ANGLE ON: FRODO rises slowly ... his EYES lock on GOLLUM ... time seems to stand still as each regards the other...
CLOSE ON: the RING glinting in GOLLUM’S HAND ... BEAUTIFUL ... POWERFUL ... EVIL...
SUDDENLY! FRODO lunges at GOLLUM...
FRODO thuds into GOLLUM, lifting him off his feet...
ANGLE ON: FRODO and GOLLUM locked n STRUGGLE plummet over the EDGE OF THE CHASM.
INTERCUT WITH:
EXT. BLACK GATES OF MORDOR - DAY
THUD! The HUGE FOOT of the CAVE TROLL lands on ARAGORN’S chest. He STABS at it, ineffectually...
ANGLE ON: GANDALF in despair...
INTERCUT WITH:
INT. CRACK OF DOOM
SAM watches in HORROR as FRODO and GOLLUM ... disappear into the CHASM! He staggers over...
SLOW MOTION: GOLLUM falls into the CRACK OF DOOM... INSTANTLY engulfed in the CHURNING LAVA!
ANGLE ON: SAM leans into the CRACK OF DOOM...
ANGLE ON: FRODO clinging onto the ROCK FACE with his ONE GOOD HAND!
The CAVERNS are SHAKING VIOLENTLY.
SAM desperately reaches for him ... FRODO is too far down.
SAM
Give me your hand.
CLOSE ON: FRODO looks at SAM, his face impassive.
SAM
Take my hand!
FRODO struggles to reach SAM ... he can’t reach WITH HIS BLEEDING hand, and falls back, still clinging valiantly to the ROCK with his good hand...
SAM
No!
ANGLE ON: FRODO looks at SAM imploringly...
SAM
Don't you let go! Don't let go.
desperate
Reach!!!
ANGLE ON: FRODO reaches up once more and this time SAM GRASPS his hand TIGHTLY.
CLOSE ON: The RING sits on the river of LAVA for a brief moment, then SINKS away...
ANGLE ON: the EYE OF SAURON...
WIDE ON: Across the GREAT PLAINS - MOUNT DOOM is clearly IMPLODING...
INTERCUT WITH:
EXT. BLACK GATES OF MORDOR - DAY
On the BATTLEFIELD, all eyes turn to MOUNT DOOM...
ANGLE ON: The CAVE TROLL, with ARAGORN at his mercy, is distracted by the SOUNDS emanating from MORDOR ... he turns in TERROR and RUNS OFF...
EXT. BARAD-DÛR - DAY
ANGLE ON: The FELLOWSHIP turns to watch as the MASSIVE DARK TOWER of SAURON shakes itself to pieces!
TOWERS FALL and WALLS CRUMBLE: vast spires of SMOKE and spouting STEAM billow up!
The FOUNDATIONS explode apart...
EXT. BLACK GATES OF MORDOR - DAY
The BLACK GATES collapse in a huge cloud of ASH!
THE ORCS are FLEEING in all DIRECTIONS ... As the very foundations of MORDOR collapse!
THE COMPANY watches as MOUNT DOOM explodes ... the reason for their MISERY is clear ... it’s plain FRODO and SAM can never survive the cataclysm...
CUT TO:
EXT. SLOPES OF MOUNT DOOM - DAY
The VOLCANO is ERUPTING, FIRE belches from its riven summit, sending LAVA streaming down its sides...
ANGLE ON: FRODO and SAM stagger out of the SAMMATH NAUR DOOR ... all around ASH and MOLTEN ROCKS fall. The SKIES burst into THUNDER, seared with LIGHTENING.
The screaming NAZGÛL fall from the sky in FLAMES!
The ground is shaking so violently that FRODO and SAM can barely stand.
FRODO stumbles ... SAM helps him up ... FRODO smiles.
FRODO
It's gone ... it's done.
SAM looks down at FRODO ... FRODO’S FACE is at PEACE ... his BURDEN destroyed...
SAM
Yes, Mr. Frodo ... it's over now.
FRODO and SAM crawl onto a ROCK as LAVA streams towards them ... in seconds THEIR ROCK is an island in a sea of MOLTEN FIRE.
FRODO shuts his eyes...
FRODO
remembering
I can see the Shire ... The Brandywine River, Bag End, Gandalf's fireworks ... the lights in the Party Tree...
SAM
Rosie Cotton dancing ... she had ribbons in her hair...
sobs
...if ever I was to marry someone ... it would have been her ... it would have been her.
FRODO glances at SAM ... he is WEEPING.
CLOSE ON: FRODO wrapping an ARM around SAM’S SHOULDER.
FRODO
calm
I'm glad to be with you, Samwise Gamgee, here at the end of all things.
HIGH WIDE: TWO TINY HOBBITS waiting to die amid a cataclysmic landscape ... LAVA erupts around them ... FIREBALLS rain down from the sky.
We SLOWLY FADE TO BLACK...
FADE UP:
SLOW MOTION: GWAIHIR, the GREAT EAGLE flaps towards CAMERA ... He bears GANDALF on his back, and is followed by TWO MORE EAGLES.
WIDE SHOT ... The EAGLES bravely fly amid the RAINING ASH and MOLTEN ROCKS ... and SNATCH FRODO and SAM from the ROCK!
CLOSE ON: FRODO’S FACE ... as the FIERY VOLCANO recedes away beneath him ... the wind ruffles his hair ... he PASSES OUT.
FADE TO BLACK.
INT. MINAS TIRITH, HOUSES OF HEALING - DAY
SLOW MOTION ... FRODO’S eyes flutter open ... looking around slowly his eyes alight on GANDALF...
FRODO
Gandalf?
GANDALF’S face breaks into a smile ... then laughter...
...as MERRY and PIPPIN run in ... jumping on the bed and hugging FRODO...
GIMLI and LEGOLAS enter the room ... their joy is PLAIN...
ARAGORN joins them - the FELLOWSHIP is complete...
...finally FRODO’S eyes fall upon a FIGURE standing apart from the others ... it is SAM...
CLOSE ON: FRODO’S and SAM’S eyes meet...
CUT TO:
EXT. MINAS TIRITH, COURT OF THE KINGS - DAY
ANGLE ON: SWEEPING over the MINAS TIRITH WALLS, racing towards the TOP of the CITY ... through a BLIZZARD of WHITE FLOWER PETALS! MINAS TIRITH is restored ... it GLEAMS WHITE in the BRIGHT SUN.
SOARING UP: to REVEAL the COURT OF THE KINGS, CROWDED with 4000 PEOPLE ... cramming the WIDE PATH leading to the TOWER HALL!
CLOSE ON: The CROWN of GONDOR glints in the BRILLIANT SUNSHINE...
GANDALF places the CROWN upon ARAGORN’S head.
GANDALF
Now come the days of the King...
ARAGORN smiles up at GANDALF...
GANDALF
softly to ARAGORN
May they be blessed.
ARAGORN slowly RISES, turning to face the CROWD, who CHEER and CLAP for their KING...
ARAGORN
This day does not belong to one man but to all. Let us together rebuild this world that we may share in the days of peace.
The CHEERS of his PEOPLE are DEAFENING...
ARAGORN
in ELVISH; subtitled
Et Eärello Endorenna utúlien. Sinome maruvan ar Hildinyar tenn' Ambar-metta.
Out of the Great Sea to Middle-earth I am come. In this place will I abide, and my heirs, unto the ending of the world.
ARAGORN sings for his people ... The WALKS in SLOW PROCESSION down the WHITE PAVED PATH as the CROWD BOW their heads in respect to their NEW KING...
ARAGORN passes ÉOWYN and FARAMIR who bow before him ... ÉOMER steps FORWARD to bow in respect...
TRUMPETS SOUND as a PROCESSION of ELVES, dressed in shimmering SILVERS and WHITES, led by LEGOLAS approach the KING ...
ARAGORN
in ELVISH; subtitled
Hannon le.
Thank you.
LEGOLAS gestures behind him...
CLOSE ON: ARAGORN’S eyes scan amongst the ELVES.
ANGLE ON: A BANNER carried aloft bearing the WHITE TREE of GONDOR in FULL FLOWER ... the RANKS of ELVES part revealing:
ARWEN, eyes shining ... MORTAL now, but deeply in love ... carrying the STANDARD of GONDOR ... ARAGORN kisses her.
ELROND looks on ... his face breaks into a smile.
ARAGORN and ARWEN embrace.
ANGLE ON: ARAGORN and ARWEN walking through the CROWD towards four SMALL FIGURES who stand nervously at the end of the AVENUE...
ANGLE ON: ARAGORN and ARWEN look on FRODO, SAM, MERRY, and PIPPIN as they stand before them...
The FOUR HOBBITS, dressed in their OLD CLOTHES, clean and mended, bow their heads...
ARAGORN raises his HAND.
ARAGORN
My friends ... you bow to no-one.
ANGLE ON: ARAGORN drops on ONE KNEE, kneeling before THE HOBBITS, his head bowed ... followed by all assembled there.
CLOSE ON: TEARS spring into FRODO’S EYES. He clutches SAM’S shoulder as 4000 PEOPLE pay homage to the courage of two little Hobbits from the Shire.
CAMERA RISES INTO THE AIR ... away from the CROWDED CITADEL, until MINAS TIRITH becomes a SPECK in the LANDSCAPE...
CUT TO:
EXT. MIDDLE EARTH MAP - DAY
DISSOLVING into the PARCHMENT MAP of MIDDLE-EARTH ... Slowly drifting across the MAP towards the WEST...
FRODO (V.O.)
And thus it was a Fourth Age of Middle-earth began, and the Fellowship of the Ring, though eternally bound by friendship and love, was ended. Thirteen months to the day, since Gandalf sent us on our long journey...
CUT TO:
EXT. HOBBITON - DUSK
FRODO (V.O.)
...we found ourselves looking upon a familiar site ... We were home!
MATCHING MOVE: Revealing HOBBITON bathed in a WARM SUNSET ... As FRODO, SAM, MERRY and PIPPIN ride into SHOT on PONIES ... past ODO PROUDFOOT who shake his head at the STRANGENESS of their appearance.
INT. THE GREEN DRAGON INN - NIGHT
FRODO brings a round of drinks to the TABLE.
Nearby a HUGE FUSS is being made of a LARGE PUMPKIN which has been brought in to be shown off.
ANGLE ON: The FOUR FRIENDS looks at each other. A WORLD of experience now separates them from their fellow HOBBITS.
Seated at a long table, the FOUR FRIENDS raise their glasses ... SAM’S eye is suddenly caught!
ANGLE ON: ROSIE COTTON who is serving behind the BAR...
SAM steels himself and leaves to go and TALK to ROSIE...
FRODO, MERRY and PIPPIN exchange smiles as...
CUT TO:
EXT. HOBBITON - DAY
On a BEAUTIFUL sunny day, SAM and ROSIE are MARRIED ... With their dearest FRIENDS gathered around them...
ROSIE throws a beautiful bouquet of FLOWERS ... it’s caught by PIPPIN who smiles in embarrassment...
DISSOLVE TO:
INT. BAG END - DAY
FRODO walks through BAG END to his STUDY...
FRODO (V.O.)
How do you pick up the threads of an old life? How do you go on, when in your heart you begin to understand. There is no going back. There are some things that time cannot mend. Some hurts that go too deep. That have taken hold.
ANGLE ON: FRODO ... from behind. He is HUNCHED over a DESK...
PUSH IN ... to reveal BILBO’S RED BOOK open on FRODO’S DESK.
He is WRITING in the LAST CHAPTERS in careful neat HANDWRITING.
FRODO turns back the pages, REVEALING: There and Back Again - A Hobbit’s Tale, by Bilbo Baggins. He writes below it as SAM GAMGEE calls out from the door:
SAM (O.S.)
Mr. Frodo?
CLOSE ON: FRODO WINCES with a sharp GASP of PAIN ... He puts the PEN down and CLUTCHES at his SHOULDER...
SAM has entered the ROOM and stands BEHIND FRODO...
SAM
concerned
What is it?
CLOSE ON: FRODO ... He is DRAWN and PALE.
FRODO
It's been four years to the day since Weathertop, Sam. It's never really healed.
CLOSE ON: SAM ... at a loss for words. His EYES fall to the BOOK.
SAM
“There and Back Again ... A Hobbit's Tale, by Bilbo Baggins”
TILT DOWN: to FRODO’S HANDWRITING:
SAM
“... And The Lord of the Rings, by Frodo Baggins”.
delighted
You’ve finished it!
FRODO
closing the book
Not quite ... There's room for a little more.
CUT TO:
EXT. HOBBITON FIELDS - EARLY MORNING
LYRICAL MUSIC OVER...
A COLD WINTER’S MORNING ... Out of the FOG rattles a SMALL COVERED WAGON; GANDALF is at the REINS.
ANGLE ON: FRODO, SAM, MERRY and PIPPIN are waiting on PONIES for the WAGON ... all are wearing their GREY ELVEN ROBES.
FRODO (V.O.)
Bilbo once told me, the great stories never end - that each of us must come and go in the telling. His part in this tale was now over. There would be no more journeys for Bilbo. Save one.
CLOSE ON: GANDALF arrives in his CART...
DISSOLVE TO:
EXT. WEST FARTHING - DAY
WIDE ON: The WAGON trundles along at a SEDATE PACE.
SAM, MERRY and PIPPIN ride behind, leading FRODO’S EMPTY PONY.
BILBO (O.S.)
frail
Tell me again, lad. Where are we going?
FRODO (O.S.)
To the harbour, Bilbo. The Elves have accorded you a special honor. A place on the last ship to leave Middle-earth.
INT. WAGON - DAY
CLOSE ON: FRODO is SITTING in the WAGON ... his ARM around his UNCLE BILBO.
BILBO is extremely OLD and FRAIL. He is DOZING ... his head slumped.
BILBO’S eyes flutter OPEN ... with effort he raises his head.
BILBO
frail
Frodo ... Any chance of seeing that old Ring of mine ... the one I gave you?
FRODO
quietly
Sorry, Uncle ... I'm afraid, I lost it.
BILBO
frail
Oh ... pity. I should like to have held it one last time.
BILBO nods back to sleep ... FRODO rests his head against him.
DISSOLVE TO:
EXT. THE GREY HAVENS - DUSK
ANGLE ON: FRODO, walking arm-in-arm with BILBO through a beautiful ELVEN BOAT-HOUSE ... GANDALF follows with MERRY, PIPPIN and SAM.
CLOSE ON: As BILBO looks up, he is STUNG by the BEAUTY before him...
BILBO
Oh! Well, here’s a sight I have never seen before.
TRACKING: Passing under a beautiful ELVEN ARCHWAY...
...to reveal a WHITE SHIP, ready to depart from a WHITE STONE DOCK.
ANGLE ON: ELROND, CELEBORN and GALADRIEL are waiting for them.
The SETTING SUN slowly dropping behind the SEA ... visible between the HEADLANDS of a beautiful INLET.
The lighting is beautiful ... SUN streams through the sails, casting an ethereal glow on THE GROUP as they walk onto the DOCK.
BILBO bows in acknowledgment to ELROND, CELEBORN and GALADRIEL, who return his GREETING.
GALADRIEL
The power of the Three Rings is ended. The time has come for the Dominion of Men.
ELROND
ELVISH: with subtitles
I Aear can vên na mar.
The Sea calls us home.
ELROND holds out his ARMS to BILBO who suddenly seems MUCH YOUNGER and SPRIGHTLIER ... He sets off down the PATH TOWARD his HOSTS...
BILBO
I think I'm quite ready for another adventure.
BILBO walks down toward the BOAT and BOARDS with ELROND...
ANGLE ON: FRODO looks up ... GALADRIEL is watching him. She SMILES, TURNS and BOARDS the BOAT...
GANDALF kneels before SAM, MERRY and PIPPIN - who are all looking TEARFUL.
GANDALF
Farewell, my brave Hobbits. My work is now finished. Here at last, on the shores of the sea, comes the end of our Fellowship.
There is GREAT SADNESS ... MERRY SNIFFLES LOUDLY.
GANDALF
I will not say: “do not weep”, for not all tears are an evil.
CLOSE ON: GANDALF turns and walks away ... FRODO is DOWNCAST ... SUDDENLY, GANDALF turns and looks toward him.
GANDALF
It is time, Frodo.
ANGLE ON: GANDALF looks to FRODO then turns and slowly walks towards the GANGPLANK to board the SHIP.
SAM
alarmed
What does he mean?
CLOSE ON: FRODO turns to SAM...
FRODO
gently
We set out to save the Shire, and it has been saved ... but not for me...
SAM
shaken
You don't mean that - You can't leave!
ANGLE ON: SAM looks down ... FRODO is holding BILBO’S RED JOURNAL out towards him.
FRODO
The last pages are for you, Sam.
SAM is SOBBING ... MERRY and PIPPIN are DISTRAUGHT...
FRODO hugs MERRY and PIPPIN, and last of all SAM ... and climbs on board the SHIP.
ANGLE ON: FRODO a look of WONDERMENT crosses his face ... as he STEPS FORWARD and ACCEPTS GANDALF’S HAND ... finally released from his pain, care falls from his face ... he is the young FRODO we first met so long ago.
SAM, MERRY and PIPPIN comfort each other as the WHITE SHIP glides away from the DOCK...
WIDE ON: The WHITE BOAT sails away towards the HEADLANDS, disappearing into the GOLDEN LIGHT of the SETTING SUN.
ANGLE ON: SAM in growing darkness, still follows the departing SHIP with his eyes, MERRY and PIPPIN are already preparing to leave.
CUT TO:
EXT. NO.3 BAGSHOT ROW - MORNING
ANGLE ON: SAM walks up the path towards his house...
A LITTLE GIRL toddles up to greet him.
SAM
Elanor!
He hugs his daughter...
FRODO (V.O.)
My dear Sam. You cannot always be torn in two. You have to be one and whole for many years. You have so much to enjoy and to be and to do. Because Sam, your part in the journey goes on.
ANGLE ON: ROSIE COTTON steps up and kisses SAM on the cheek ... she gives him a TINY BABY BOY to cradle.
SAM
Hello, little Frodo!
ANGLE ON: SAM with his FAMILY ... he draws a deep breath:
SAM
Well ... I’m back.
SAM looks at his LOVELY FAMILY with GREAT HAPPINESS, tinged with a little SADNESS...
SAM and ROSIE wake the CHILDREN’S HANDS and enter BAGSHOT ... the BRIGHT YELLOW DOORWAY closes behind them.
FADE TO BLACK.
THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
