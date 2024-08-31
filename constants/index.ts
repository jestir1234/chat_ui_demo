interface ISender {
  name: string;
  avatar: string;
}

interface ISenderById {
  [key: number]: ISender;
}

export const SENDERS: ISenderById = {
  1: {
    name: "Vegeta",
    avatar:
      "https://i.pinimg.com/736x/27/13/71/271371dc6832afe82ba75203be7ef772.jpg",
  },
  2: {
    name: "Goku",
    avatar:
      "https://w7.pngwing.com/pngs/84/363/png-transparent-ssb-son-goku-illustration-goku-dragon-ball-xenoverse-2-vegeta-gohan-piccolo-goku-head-fictional-character-cartoon.png",
  },
  3: {
    name: "Krillin",
    avatar:
      "https://staticg.sportskeeda.com/editor/2022/11/926b6-16672463829218-1920.jpg",
  },
  4: {
    name: "Piccolo",
    avatar:
      "https://i.pinimg.com/564x/9d/9e/bc/9d9ebc588763f577af11defbebf5dfb2.jpg",
  },
};