const whoamiObj = {
  "message" : [
    [
      "A CS PhD student at Purdue,",
      "still figuring out trustworthy AI — and also "
    ],
    [
      "From Xiamen (Amoy), via HKU,",
      "now in West Lafayette, quietly asking - "
    ],
    [
      "Piano for 10+ years, Oasis on repeat,",
      "always hunting the next great burger, while pondering - "
    ],
    [
      "Table tennis paddle in one hand,",
      "Lonely Planet in the other, still wondering - "
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
