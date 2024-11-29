export const nameList = [
    "Badger Bob",
    "Linnet Innit",
    "El Corbertizo",
    "Bertholemew B Wooster",
    "Dirt Digger",
    "Mozart",
    "Clawdia Winkleman",
    "Badge Judd",
    "Honey Boo Boo Badger",
    "Badger Winkleman",
    "Clawdia",
    "Honey Grrlz",
    "Budge (Cause Digger!)",
    "Classic Mr. Woodwalkers E",
    "Badger Hepburn",
    "Clawdette",
    "Grub Grabber Greg",
    "Snuffle Ruffskins",
    "Digger T. Dirt",
    "Badge Nicholson",
    "Pawline",
    "Burrow Beatrix",
    "Clawrence Olivier",
    "Honey Buns",
    "Snoutorius B.A.D",
    "Diggeridoo",
    "Burrowly Streep",
    "Badgerton",
    "Grizzly Adams",
    "Burrow King",
    "Furrel Williams",
    "Sandy Paws",
    "Honey Pottamus"
];

export const getRandomName = () => {
    return nameList[Math.floor(Math.random() * nameList.length)];
}