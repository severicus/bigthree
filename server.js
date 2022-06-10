const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const the_big_three = {
  Naruto: {
    characters: {
      Naruto: {
        name: "Uzumaki Naruto",
        village: "Hidden Leaf Village",
        Jinchuriki: "Kurama",
        description:
          "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja, regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, literally meaning: Seventh Fire Shadow).",
        abilities: [
          "Shadow Clone Jutsu",
          "Rasengan",
          "Six Paths Sage Mode",
          "Baryon Mode",
          "Rasenshuriken",
          "Planetary Rasengan",
          "",
        ],
        quote:
          "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!",
        image:
          "https://i.pinimg.com/474x/ed/df/4e/eddf4e76648b2f70155ed0fec6ff9f92.jpg",
      },
      Sasuke: {
        name: "Uchiha Sasuke",
        village: "Leaf Village",
        description:
          "Sasuke is one of the only surviving members of the Uchiha clan, a powerful clan of ninja living in village Konohagakure. When Sasuke was a young boy, his older brother Itachi, an extremely skilled ninja, ended up slaughtering the entire Uchiha clan, except for Sasuke. Itachi left Sasuke alive, hoping his hatred would grow strong enough for Sasuke to kill him in the future. ",
        abilities: [
          "Sharingan",
          "Mangekyo Sharingan",
          "Chidoro",
          "Kirin",
          "Planetary Destruction",
          "Rinnegan",
          "Susanoo",
          "Great Fireball Technique",
        ],
        quote:
          "I understand now. Even if I must take the Devil's fruit, I must gain power. I am an avenger.",
        image: "https://data.whicdn.com/images/351632182/original.jpg",
      },
      Sakura: {
        name: "Uchiha Sasuke",
        village: "Hidden Leaf Village",
        description:
          "Sakura Uchiha (うちはサクラ, Uchiha Sakura, née Haruno (春野)) is a kunoichi of Konohagakure. When assigned to Team 7, Sakura quickly finds herself ill-prepared for the duties of a shinobi. However, after training under the Sannin Tsunade, she overcomes this, and becomes recognised as one of the greatest medical-nin in the world.",
        abilities: [
          "Strength of a Hundred Seal",
          "Mystical Palm ",
          "Planetary Destruction",
          "Delicate Illness Extraction",
          "Creation Rebirth",
          "Sozo Saisei — Byakugo No Jutsu",
        ],
        quote:
          "I've always considered myself to be a true ninja… but those were just empty words, because Sasuke and Naruto were always in the lead! But now it's my turn to take the lead, and all of you can watch me from the background!",
        image:
          "https://at-cdn-s02.audiotool.com/2019/04/24/documents/xjkpp5o6dmv/0/cover256x256-86083b466acd415a8024f8b1de4b4a26.jpg",
      },
    },
  },
  Bleach: {
    characters: {
      Ichigo: {
        name: "Kurosaki Ichigo",
        description:
          "Ichigo Kurosaki is the main protagonist of the Bleach franchise. In the original series, he is a teenager with the ability to see spirits who gains the powers of a Shinigami from Rukia Kuchiki. He is a hybrid of Human, Soul Reaper, Quincy, and Hollow.",
        abilities: [
          "Getsuga Tenshō",
          "Tensa Zangetsu",
          "Saigo no Getsuga Tenshō",
          "Blut",
          "Hollowfication",
          "Fullbring",
        ],
        quote:
          "...If fate is a millstone, then we are the grist. There is nothing we can do. So I wish for strength. If I cannot protect them from the wheel, then give me a strong blade, and enough strength... to shatter fate.",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1901350/ss_066203e2e92b5f3c53a87309a381fecdcdf99647.jpg",
      },
      Urahara: {
        name: "Kisuke Urahara",
        description:
          'Kisuke Urahara is a supporting character in the anime/manga series Bleach. He is the former captain of the 12th Division, as well as the founder and 1st President of the Shinigami Research and Development Institute. He currently lives in the Human World after being exiled, where he owns a small convenience store, "Urahara Shop", which doubles in selling Shinigami items. The shop is maintained by Urahara himself, as well as his employees Tessai Tsukabishi, Jinta Hanakari, and Ururu Tsumugiya. He is also a longtime friend of Yoruichi Shihōin and a mentor of Ichigo Kurosaki.',
        abilities: [
          "Hakuda Master",
          "Shunpo Master",
          "Kido Master",
          "Chikasumi no Tate",
          "Nake, Benihime",
          "Tsuppane, Benihime",
          "Kannonbiraki Benihime Aratame",
        ],
        quote:
          "Noooo, there’s no way I, a mere handsome and sexy shopkeeper, could possibly have bankai!",
        image:
          "https://ubisoft-avatars.akamaized.net/12de91a2-1a25-4694-881d-d4f3ea4714a0/default_256_256.png",
      },
      Aizen: {
        name: "Sosuke Aizen",
        description:
          'Kisuke Urahara is a supporting character in the anime/manga series Bleach. He is the former captain of the 12th Division, as well as the founder and 1st President of the Shinigami Research and Development Institute. He currently lives in the Human World after being exiled, where he owns a small convenience store, "Urahara Shop", which doubles in selling Shinigami items. The shop is maintained by Urahara himself, as well as his employees Tessai Tsukabishi, Jinta Hanakari, and Ururu Tsumugiya. He is also a longtime friend of Yoruichi Shihōin and a mentor of Ichigo Kurosaki.',
        abilities: [
          "Kanzen Saimin",
          "Shunpo Master",
          "Kido Master",
          "Ultrafragor",
        ],
        quote:
          "I had no intention of deceiving anyone. It's just that none of you could understand...My true self.",
        image:
          "https://c-fa.cdn.smule.com/rs-s79/arr/1f/45/bd363830-91cb-4832-b531-aea0bf057c57.jpg",
      },
    },
  },
  "One Piece": {
    characters: {
      Luffy: {
        name: "Monkey D. Luffy",
        description:
          'Born in Foosha Village, Luffy accidentally ate the Gomu Gomu no Mi at age 7, which turned his body into rubber.[28] He met "Red-Haired" Shanks, who gave Luffy the very Straw Hat that has become Luffy\'s signature accessory, having gifted it to the boy as part of a promise for them to meet again someday. Luffy is the son of the Revolutionary leader Monkey D. Dragon,[29] the grandson of the Marine hero Monkey D. Garp,[30] the sworn brother of the late "Fire Fist" Portgas D. Ace and Revolutionary Chief-of-Staff Sabo, and the foster son of Curly Dadan. He is one of the few people in the world who carries the Will of D.',
        abilities: [
          "Armament Haki",
          "Mytic Zoan Devilfruit",
          "Ryou",
          "Awakening",
          "Advanced Conqueror's Haki",
          "Future Sight Observation Haki",
          "Busoshoku Haki",
          "Red Hawk",
          "King Kong Gon",
        ],
        quote:
          "I don’t wanna conquer anything. It's just that the person with the most freedom on the sea is the Pirate King.",
        image:
          "https://steamuserimages-a.akamaihd.net/ugc/1839164727925777779/17CE8A9BC75CFA7FA8D5F608D8CAB0B7E794A943/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      },
      Zoro: {
        name: "Roronoa Zoro",
        description:
          "He was the first member to join the crew, and, to date, is considered the largest threat and most dangerous member in it after Luffy. His fame as a master swordsman and his great strength, along with the actions of his captain, sometimes led others to believe he was the true captain of the crew before he obtained his first bounty, while a few people believe him to be the first mate.",
        abilities: [
          "Homura Saki",
          "Asura",
          "Ryuo",
          "Conqueror's Haki Infusion",
          "Santoryu Ougi: Rokudo no Tsuji",
          "Enma Slash",
          "Santoryu Ougi: Ichidai Sanzen Daisen Sekai",
        ],
        quote:
          "Being strong isn't just about having power or move, it about one's spirit",
        image:
          "https://i.pinimg.com/474x/f2/ae/8e/f2ae8e2cde7e371b71e45924513bfe4a.jpg",
      },
      King: {
        name: "Alber",
        description:
          "Alber better known as King the Conflagration, is an All-Star of the Beasts Pirates and a major antagonist in the Wano Country arc of One Piece. He is one of Kaido's right-hand men, along with Queen and Jack, and is the second highest ranked member within the crew. He is a sole survivor of the Lunarian race. He is renowned as the strongest of the All-Stars. Years ago, he and Kaido were test subjects who escaped the World Government. His bounty is 1,390,000,000 Berries.",
        abilities: ["hakka", "Andon", "Omori Karyudon", "Busoshoku Haki"],
        quote: "...",
        image: "https://pbs.twimg.com/media/FG-yMOyUYAYP62R.jpg",
      },
    },
  },
};

app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname, "/index.html");
});

app.get("/api/the_big_three", (req, res) => {
  if (the_big_three) {
    res.json(the_big_three);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}, better catch it!`);
});
