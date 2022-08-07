dataSetVersion = "2022-08-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Singles", key: "single" },
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
    name: "Remove covers",
    key: "cover",
    tooltip: "Check this to remove covers."
    checked: true
  },
  {
    name: "Remove tracks where TXT is not the main artist",
    key: "feat",
    tooltip: "Check this to remove all songs where TXT is not the main artist.",
    checked: false
  },
  {
    name: "Remove non-original foreign language tracks",
    key: "feat",
    tooltip: "Check this to remove all non-original foreign language tracks (e.g., Cat & Dog - English ver.).",
    checked: false
  }
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
      year: [ "19" ]
      lang: true
    }
  },
 
];
