dataSetVersion = "2022-08-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Release",
    key: "album",
    tooltip: "Check this to restrict to certain releases.",
    checked: false,
    sub: [
      { name: "The Dream Chapter: Star", key: "tdcs" },
      { name: "The Dream Chapter: Magic", tooltip: "hover text", key: "tdcm" },
      { name: "The Dream Chapter: Eternity", key: "tdce" },
      { name: "Minisode1: Blue Hour", key: "m1bh" },
      { name: "The Chaos Chapter: Freeze", key: "tccf" },
      { name: "The Chaos Chapter: Fight or Escape", key: "tccfoe" },
      { name: "Minisode2: Thursday's Child", key: "m2tc" },
      { name: "Singles & Collabs", key: "single" },
      { name: "Japanese Releases", key: "jpn" },
      { name: "YouTube, Weverse", key: "uno" },
      { name: "Soundtracks (OST)", ket: "ost" },
    ]
  },
  {
    name: "Filter by Year",
    key: "year",
    tooltip: "Check this to restrict to songs released in certain years.",
    checked: false,
    sub: [ 
      { name: "2019", key: "19" }, 
      { name: "2020", key: "20" }, 
      { name: "2021", key: "21" }, 
      { name: "2022", key: "22" }, 
    ]
  },
  {
    name: "Remove remixes",
    key: "remix",
    tooltip: "e.g.: Our Summer (Acoustic Mix), 0x1=LOVESONG (I Know I Love You) Emocore Mix",
    checked: true
  },
  {
    name: "Remove tracks where TXT is not the main artist",
    key: "feat",
    tooltip: "Check this to remove all songs where TXT is not the main artist.",
    checked: true
  },
  {
    name: "Remove non-original foreign language tracks",
    key: "lang",
    tooltip: "Check this to remove all non-original foreign language tracks (e.g., Cat & Dog - English ver.).",
    checked: true
  },
  {
    name: "Remove instrumental tracks",
    key: "inst",
    tooltip: "Check this to remove all instrumental tracks.",
    checked: true
  },

];

dataSet[dataSetVersion].characterData = [
  {
    name: "Blue Orangeade",
    img: "c5DqpgX.png",
    opts: {
      album: [ "tdcs" ],
      year: [ "19" ]
    }
  },
  {
    name: "CROWN",
    img: "tJnkSzK.png",
    opts: {
      album: [ "tdcs" ],
      year: [ "19" ]
    }
  },
  {
    name: "Our Summer",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcs" ],
      year: [ "19" ]
    }
  },
  {
    name: "Cat & Dog",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcs" ],
      year: [ "19" ]
    }
  },
    {
    name: "Nap of a star",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcs" ],
      year: [ "19" ]
    }
  },
  {
    name: "Our Summer (Acoustic Mix)",
    img: "NWlZud3.png",
    opts: {
      album: [ "single" ],
      year: [ "19" ],
      remix: true
    }
  },
  {
    name: "Cat & Dog - English ver.",
    img: "tDO653L.png",
    opts: {
      album: [ "single" ],
      year: [ "19" ],
      lang: true
    }
  },
  
  
  
  //TDCS ERA END
  
  
  {
    name: "New Rules",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcm" ],
      year: [ "19" ]
    }
  },
  {
    name: "9 and Three Quarters (Run Away)",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcm" ],
      year: [ "19" ]
    }
  },
  {
    name: "Roller Coaster",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcm" ],
      year: [ "19" ]
    }
  },
  {
    name: "Poppin' Star",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcm" ],
      year: [ "19" ]
    }
  },
  {
    name: "Can't We Just Leave The Monster Alive?",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcm" ],
      year: [ "19" ]
    }
  },
  {
    name: "Magic Island",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcm" ],
      year: [ "19" ]
    }
  },
  {
    name: "20cm",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcm" ],
      year: [ "19" ]
    }
  },
  {
    name: "Angel Or Devil",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdcm" ],
      year: [ "19" ]
    }
  },
  
  
  {
    name: "9と4分の3番線で君を待つ (Run Away) - Japanese Ver.",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "20", "21" ],
      lang: true
    }
  },
  {
    name: "ある日、頭からツノが生えた (Crown) - Japanese Ver.",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "20", "21" ],
      lang: true
    }
  },
  {
    name: "Angel Or Devil - Japanese Ver.",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "20", "21" ],
      lang: true
    }
  },
  
  
  
  
  //TDCM ERA END
  
  
  
  
  {
    name: "Drama",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdce" ],
      year: [ "20" ]
    }
  },
  {
    name: "Can't You See Me?",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdce" ],
      year: [ "20" ]
    }
  },
  {
    name: "Fairy of Shampoo",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdce" ],
      year: [ "20" ]
    }
  },
  {
    name: "Maze in the Mirror",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdce" ],
      year: [ "20" ]
    }
  },
  {
    name: "PUMA",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdce" ],
      year: [ "20" ]
    }
  },
  {
    name: "Eternally",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tdce" ],
      year: [ "20" ]
    }
  },
  
  
  {
    name: "Sweat",
    img: "0YT7QlS.png",
    opts: {
      album: [ "uno" ],
      year: [ "20" ]
    }
  },
  
  
  {
    name: "Drama - Japanese Ver.",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn", "single" ],
      year: [ "20", "21" ],
      lang: true
    }
  },
  {
    name: "永遠に光れ (Everlasting Shine)",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "20", "21" ]
    }
  },
  {
    name: "Can't You See Me? (世界が燃えてしまった夜、僕たちは...) - Japanese Ver.",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "20", "21" ],
      lang: true
    }
  },
  
  
  
  
  //TDCE ERA END
  
  
  
  {
    name: "Ghosting",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m1bh" ],
      year: [ "20" ]
    }
  },
  {
    name: "Blue Hour",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m1bh" ],
      year: [ "20" ]
    }
  },
  {
    name: "We Lost The Summer",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m1bh" ],
      year: [ "20" ]
    }
  },
  {
    name: "Wishlist",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m1bh" ],
      year: [ "20" ]
    }
  },
  {
    name: "Way Home",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m1bh" ],
      year: [ "20" ]
    }
  },
 
  
  {
    name: "Your Light",
    img: "0YT7QlS.png",
    opts: {
      album: [ "ost", "single" ],
      year: [ "20" ]
    }
  },
  {
    name: "Your Light - Japanese Ver.",
    img: "0YT7QlS.png",
    opts: {
      album: [ "ost", "jpn", "single" ],
      year: [ "20" ],
      lang: true
    }
  },
  {
    name: "Your Light - Instrumental",
    img: "0YT7QlS.png",
    opts: {
      album: [ "ost", "single" ],
      year: [ "20" ],
      inst: true
    }
  },
  
  
  {
    name: "Force",
    img: "0YT7QlS.png",
    opts: {
      album: [ "ost", "jpn", "single" ],
      year: [ "21" ]
    }
  },
  
  
  {
    name: "Intro: DREAMING",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "21" ],
      inst: true,
      intro: true
    }
  },
  {
    name: "5時53分の空で見つけた君と僕 - Japanese Ver. [Blue Hour]",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "21" ],
      lang: true
    }
  },
  {
    name: "Outro: STILL",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "21" ],
      inst: true,
      intro: true
    }
  },
  
  
  {
    name: "Love Sight",
    img: "0YT7QlS.png",
    opts: {
      album: [ "ost", "single" ],
      year: [ "21" ]
    }
  },
  {
    name: "Love Sight - Instrumental",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn", "single" ],
      year: [ "21" ],
      inst: true
    }
  },
  
  
  
  //BLUE HOUR ERA END
  
  
  
  {
    name: "Anti-Romantic",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccf", "tccfoe" ],
      year: [ "21" ]
    }
  },
  {
    name: "0X1=LOVESONG (I Know I Love You) feat. Seori",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccf", "tccfoe" ],
      year: [ "21" ]
    }
  },
  {
    name: "Magic",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccf", "tccfoe" ],
      year: [ "21" ]
    }
  },
  {
    name: "Ice Cream",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccf", "tccfoe" ],
      year: [ "21" ]
    }
  },
  {
    name: "What if I had been that PUMA [Balance Game]",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccf", "tccfoe" ],
      year: [ "21" ]
    }
  },
  {
    name: "No Rules",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccf", "tccfoe" ],
      year: [ "21" ]
    }
  },
  {
    name: "Dear Sputnik",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccf", "tccfoe" ],
      year: [ "21" ]
    }
  },
  {
    name: "Frost",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccf", "tccfoe" ],
      year: [ "21" ]
    }
  },
  
  
  {
    name: "0X1=LOVESONG (I Know I Love You) feat. pH-1, Woodie GoChild, Seori",
    img: "0YT7QlS.png",
    opts: {
      album: [ "single" ],
      year: [ "21" ],
      remix: true
    }
  },
  
  
  
  //FREEZE ERA END
  
  
  
  {
    name: "LO$ER=LO♡ER",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccfoe" ],
      year: [ "21" ]
    }
  },
   {
    name: "MOA Diary (Dubaddu Wari Wari)",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccfoe" ],
      year: [ "21" ]
    }
  },
  {
    name: "0X1=LOVESONG (I Know I Love You) feat. Seori (Emocore Mix)",
    img: "0YT7QlS.png",
    opts: {
      album: [ "tccfoe" ],
      year: [ "21" ],
      remix: true
    }
  },
  
  
  {
    name: "0X1=LOVESONG (I Know I Love You) feat. MOD SUN",
    img: "0YT7QlS.png",
    opts: {
      album: [ "single" ],
      year: [ "21" ],
      remix: true
    }
  },
  
  
  {
    name: "Ito",
    img: "0YT7QlS.png",
    opts: {
      album: [ "single", "jpn" ],
      year: [ "21" ]
    }
  },
  {
    name: "0X1=LOVESONG (I Know I Love You) - Japanese Ver.",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "21" ],
      lang: true
    }
  },
  {
    name: "MOA Diary (Dubaddu Wari Wari) - Japanese Ver.",
    img: "0YT7QlS.png",
    opts: {
      album: [ "jpn" ],
      year: [ "21" ],
      lang: true
    }
  },
  
  
  {
    name: "EYES (from 'Armored Saurus')",
    img: "0YT7QlS.png",
    opts: {
      album: [ "ost", "single" ],
      year: [ "21" ],
    }
  },
  
  
  
  //FOE ERA END
  
  
  
  {
    name: "PS5 (with TOMORROW X TOGETHER & Alan Walker)",
    img: "0YT7QlS.png",
    opts: {
      album: [ "single" ],
      year: [ "22" ],
      feat: true
    }
  },
  
  
  {
    name: "Opening Sequence",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m2tc" ],
      year: [ "22" ]
    }
  },
  {
    name: "Good Boy Gone Bad",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m2tc" ],
      year: [ "22" ]
    }
  },
  {
    name: "Trust Fund Baby",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m2tc" ],
      year: [ "22" ]
    }
  },
  {
    name: "Lonely Boy (The tattoo on my ring finger)",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m2tc" ],
      year: [ "22" ]
    }
  },
  {
    name: "Thursday's Child Has Far To Go",
    img: "0YT7QlS.png",
    opts: {
      album: [ "m2tc" ],
      year: [ "22" ]
    }
  },
  
  
  {
    name: "Valley of Lies",
    img: "0YT7QlS.png",
    opts: {
      album: [ "single" ],
      year: [ "22" ]
    }
  },
  
  
  
  
  
  
  
  
];
