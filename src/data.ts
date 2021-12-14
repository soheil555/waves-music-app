import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Gham Gerefte Hame Kochehaye Maro",
      cover:
        "https://guitarmusics.ir/wp-content/uploads/2021/08/Gham-Gerefte-Hame-Koochehaye-Maro-tataloo.jpg",
      artist: "Amir Tataloo",
      audio:
        "https://s1.pr3m.ir/Music/1399/4/33/Amir%20Tataloo%20-%20Gham%20Gerefte%20Hame%20Kochehaye%20Maro.mp3",
      color: ["#A49B96", "#35504B"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Jang Setiz",
      cover:
        "https://guitarmusics.ir/wp-content/uploads/2021/09/jang-setiz-amir-tataloo.jpg",
      artist: "Amir Tataloo",
      audio:
        "https://s1.pr3m.ir/Music/1399/4/33/Amir%20Tataloo%20-%20Jang%20Setiz%20%5B128%5D.mp3",
      color: ["#929FC1", "#990037"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sahm",
      cover:
        "https://guitarmusics.ir/wp-content/uploads/2021/10/sahm-amir-tataloo.jpg",
      artist: "Amir Tataloo",
      audio:
        "https://s1.pr3m.ir/Music/1399/4/33/Amir%20Tataloo%20-%20Sahm..mp3",
      color: ["#8B9BE9", "#B88363"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Dari Be Chi Fekr Mikoni",
      cover:
        "https://guitarmusics.ir/wp-content/uploads/2021/09/remix-amir-tataloo-dari-be-chi-fekr-mikoni.jpg",
      artist: "Amir Tataloo",
      audio:
        "https://dl.guitarmusics.ir/Music/Amir%20Tataloo/Remix/Amir%20Tataloo%20-%20Dari%20Be%20Chi%20Fekr%20Mikoni%20Remix%20[320].mp3",
      color: ["#6D8EB1", "#D29252"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Navazesh",
      cover:
        "https://guitarmusics.ir/wp-content/uploads/2021/08/tataloo-navazesh-remix.jpg",
      artist: "Amir Tataloo",
      audio:
        "https://dl.guitarmusics.ir/Music/Amir%20Tataloo/Remix/Amir%20Tataloo%20-%20Navezesh%20Remix%20[128].mp3",
      color: ["#3D3D3D", "#E1E1E1"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fargh Daram Az Dam Ba Ina",
      cover:
        "https://guitarmusics.ir/wp-content/uploads/2021/06/tataloo-fargh-daram-az-dam-ba-ina-2.jpg",
      artist: "Amir Tataloo",
      audio:
        "https://dl.guitarmusics.ir/Music/Amir%20Tataloo/128/Amir%20Tataloo%20-%20Fargh%20Daram%20Az%20Dam%20Ba%20Ina%202%20[128].mp3",
      color: ["#3D6540", "#001300"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
