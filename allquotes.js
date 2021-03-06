
let quotesArray = [
  [ "I’ve got a bad feeling about this." , " Han Solo"],

  [ "May the Force be with you." , " General Dodonna"],

  [ "The ability to speak does not make you intelligent, now get out of here." , " Qui-Gon Jinn"],

  [ "The Force will be with you. Always." , " Obi-Wan Kenobi"],

  [ "Your weapon… you will not need it." , " Yoda"],

  [ "Don’t call me a mindless philosopher, you overweight glob of grease!" , " C-3PO"],

  [ "Would somebody get this big walking carpet out of my way?" , " Princess Leia"],

  [ "Either shut him up or shut him down!" , " Han Solo"],

  [ "Help me, Obi-Wan Kenobi. You’re my only hope." , " Princess Leia"],

  [ "You look absolutely beautiful. You truly belong here with us among the clouds." , " Lando"],

  [ "I think I just blasted it." , " Luke Skywalker"],

  [ "Don’t you call me a mindless philosopher, you overweight glob of grease!" , " C-3PO"],

  [ "Laugh it up, fuzzball!" , " Han Solo"],

  [ "You don’t have to do this to impress me." , " Princess Leia"],

  [ "I never doubted you for a second. Wonderful!" , "C-3PO"],

  [ "Boring conversation anyway. Luke! We’re gonna have company!" , " Han Solo"],

  [ "Oh no, my young Jedi. You will find that it is you who are mistaken, about a great many things." , " The Emperor"],

  [ "Women always figure out the truth. Always." , " Han Solo"],

  [ "There’s always a bigger fish." , " Qui-Gon Jinn, Star Wars Episode I: The Phantom Menace"],

  [ "He is as clumsy as he is stupid. General, prepare your troops for a surface attack." , " Darth Vader"
  ],
  [ "Wait. Oh my! What have you done. I’m backwards. You flea-bitten furball! Only an overgrown mop-head like you would be stupid enough to…" , " C-3PO"
  ],
  [ "Hmph! Adventure. Heh! Excitement. Heh! A Jedi craves not these things. You are reckless!" , " Yoda"
  ],
  [ "Now, witness the power of this fully operational battle station." , " The Emperor"
  ],
  [ "I assure you, Lord Vader. My men are working as fast as they can." , " Moff Jerjerrod"
  ],
  [ "I’m one with the Force, and the Force is with me." , " Chirrut Imwe"
  ],
  [ "I can fix this." , " Poe Dameron"
  ],
  [ "There is no escape! Don’t make me destroy you. Luke, you do not yet realize your importance. You’ve only begun to discover your power!" , " Darth Vader"
  ],
  [ "It’s not my fault." , " Han Solo"
  ],
  [ "Be careful not to choke on your aspirations, Director." , " Darth Vader"
  ],
  [ "I wouldn’t be nice to you. It doesn’t pay much." , " Han Solo"
  ],
  [ "Someone has to save our skins. Into the garbage chute, fly boy." , " Princess Leia"
  ],
  [ "Same thing I always do: talk my way out of it." , " Han Solo"
  ],
  [ "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man." , " Han Solo"
  ],
  [ "You do have your moments. Not many, but you have them." , " Princess Leia"
  ],
  [ "We shall double our efforts!" , " Moff Jerjerrod"
  ],
  [ "Who’s the more foolish: the fool, or the fool who follows him?" , " Obi-Wan Kenobi"
  ],
  [ "What if the democracy we thought we were serving no longer exists, and the Republic has become the very evil we’ve been fighting to destroy?" , " Padme Amidala"
  ],
  [ "Great, kid! Don’t get cocky." , " Han Solo"
  ],
  [ "I fear nothing. For all is as the Force wills it." , " Chirrut Imwe"
  ],
  [ "I’m standing by as you requested, although there’s a problem on the horizon. There’s no horizon." , " K-SO"
  ],
  [ "But I was going into Tosche Station to pick up some power converters!" , " Luke Skywalker"
  ],
  [ "I have lived long enough to see the same eyes in different people." , " Maz Kanata"
  ],
  [ "Death is a natural part of life. Rejoice for those around you who transform into the Force." , " Yoda"
  ],
  [ "If we can make it to the ground, we’ll take the next chance. And the next. On and on until we win… or the chances are spent." , " Jyn Erso"
  ],
  [ "You will know when you are calm, at peace, passive. A Jedi uses the force for knowledge and defense, never for attack." , " Yoda"
  ],
  [ "Never tell me the odds!" , " Han Solo"
  ],
  [ "We seem to be made to suffer. It’s our lot in life." , " C-3PO"
  ],
  [ "I find your lack of faith disturbing." , " Darth Vader"
  ],
  [ "When you look at the dark side, careful you must be… for the dark side looks back." , " Yoda"
  ],
  [ "He’s the brains, sweetheart!" , " Han Solo"
  ],
  [ "The strongest stars have hearts of kyber." , " Chirrut Imwe"
  ],
  [ "Do. Or do not. There is no try." , " Yoda"
  ],
  [ "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned." , " Yoda"
  ],
  [ "I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me." , " Luke Skywalker"
  ],
  [ "Size matters not. Look at me. Judge me by my size, do you?" , " Yoda"
  ],
  [ "You don’t need to see his identification… These aren’t the droids you’re looking for." , " Obi-Wan Kenobi"
  ],
  [ "Now, young Skywalker, you will die." , " Emperor Palpatine"
  ],
  [ "It’s the ship that made the Kessel Run in less than  parsecs." , " Han Solo"
  ],
  [ "Aren’t you a little short for a stormtrooper?" , " Princess Leia"
  ],
  [ "Just for once, let me look on you with my own eyes." , " Anakin Skywalker"
  ],
  [ "In time, the suffering of your people will persuade you to see our point of view." , " Nute Gunray"
  ],
  [ "You can’t stop the change, any more than you can stop the suns from setting." , " Shmi Skywalker"
  ],
  [ "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you." , " Yoda"
  ],
  [ "Well, if droids could think, there’d be none of us here, would there?" , " Obi-Wan Kenobi"
  ],
  [ "Truly wonderful the mind of a child is." , " Yoda"
  ],
  [ "I got a bad feeling about this." , " Han Solo"
  ],
  [ "We must keep our faith in the Republic. The day we stop believing democracy can work is the day we lose it." , " Queen Jamillia"
  ],
  [ "If you strike me down I shall become more powerful than you can possibly imagine." , " Obi-Wan Kenobi"
  ],
  [ "I’m just a simple man trying to make my way in the universe." , " Jango Fett"
  ],
  [ "What if I told you that the Republic was now under the control of a Dark Lord of the Sith?" , " Count Dooku"
  ],
  [ "Sorry about the mess." , " Han Solo"
  ],
  [ "The dark side of the Force is a pathway to many abilities some consider to be unnatural." , " Chancellor Palpatine"
  ],
  [ "Power! Unlimited power!" , " Darth Sidious"
  ],
  [ "You are unwise to lower your defenses!" , " Darth Vader"
  ],
  [ "So this is how liberty dies. With thunderous applause." , " Padmé Amidala"
  ],
  [ "I want to come with you to Alderaan. There’s nothing for me here now. I want to learn the ways of the Force and become a Jedi like my father." , " Luke Skywalker"
  ],
  [ "She may not look like much, but she’s got it where it counts, kid." , " Han Solo"
  ],
  [ "You were my brother, Anakin. I loved you." , " Obi-Wan Kenobi"
  ],
  [ "To die for one’s people is a great sacrifice. To live for one’s people, an even greater sacrifice. I choose to live for my people." , " Riyo Chuchi"
  ],
  [ "I suggest a new strategy, Artoo: Let the Wookiee win." , " C-3PO"
  ],
  [ "You are the Chosen One. You have brought balance to this world. Stay on this path, and you will do it again for the galaxy. But beware your heart." , " The Father"
  ],
  [ "Remember, my dear Obi-Wan. I’ve loved you always. I always will." , " Duchess Satine Kryze"
  ],
  [ "The Sith killed each other, victims of their own greed. But from the ashes of their destruction, I was the last survivor. I chose to pass my knowledge on to only one. I created a legacy so resilient that now you come before me." , " Darth Bane"
  ],
  [ "That is why you fail." , " Yoda"
  ],
  [ "The Sith took everything from me. Ripped me from my mother’s arms, murdered my brother, used me as a weapon, and then cast me aside. Abandoned me. Once, I had power — now I have nothing." , " Darth Maul"
  ],
  [ "I am no Jedi." , " Ahsoka Tano"
  ],
  [ "Governor Tarkin, I should’ve expected to find you holding Vader’s leash. I recognized your foul stench when I was brought on board." , " Princess Leia"
  ],
  [ "An object cannot make you good or evil. The temptation of power, forbidden knowledge, even the desire to do good can lead some down that path. But only you can change yourself." , " Bendu"
  ],
  [ "Hokey religions and ancient weapons are no match for a good blaster at your side, kid." , " Han Solo"
  ],
  [ "If you define yourself by your power to take life, your desire to dominate, to possess, then you have nothing." , " Obi-Wan Kenobi"
  ],
  [ "The garbage’ll do!" , " Rey"
  ],
  [ "Don’t worry about Master Luke. I’m sure he’ll be all right. He’s quite clever, you know… for a human being." , " C-3PO"
  ],
  [ "Chewie, we’re home." , " Han Solo"
  ],
  [ "Everything is proceeding as I have foreseen." , " The Emperor"
  ],
  [ "That’s no moon. It’s a space station." , " Obi-Wan Kenobi"
  ],
  [ "You know, no matter how much we fought, I’ve always hated watching you leave." , " Princess Leia"
  ],
  [ "Oh, my dear friend. How I’ve missed you." , " C-3PO"
  ],
  [ "I’m one with the Force. The Force is with me." , " Chirrut Îmwe"
  ],
  [ "Every time I walked away from something I wanted to forget, I told myself it was for a cause that I believed in. A cause that was worth it. Without that, we’re lost." , " Cassian Andor"
  ],
  [ "This holiday is yours, where we all share with you the hope that this day brings us closer to freedom and to harmony and to peace. No matter how different we appear, we’re all the same in our struggle against the powers of evil and darkness. I hope that this day will always be a day of joy, in which we can reconfirm our dedication and our courage. And more than anything else, our love for one another. This is the promise of the Tree of Life." , " Princess Leia"],
];

console.log(quotesArray.length);

const quotesObj = {};

// quotesArray = quotesArray.map( quote => {
//   quote.map( str => str.trim())
// });

for (let i = 0; i < quotesArray.length; i++) {
  // if (i < 3) {console.log(quotesArray[i]);};

  for (let j = 0; j < quotesArray[i].length; j++) {
    quotesArray[i][j] = quotesArray[i][j].trim();
  }
  // if (i < 3) {console.log(quotesArray[i]);};
}


quotesArray.forEach( array => {
  quotesObj[array[1]] = array[0];
});

let namesArray = [];
quotesArray.forEach(array => {
  namesArray.push(array[1]);
});


module.exports = quotesArray;