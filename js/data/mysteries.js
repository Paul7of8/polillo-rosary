// The four sets of mysteries.
//
// For each mystery:
//   title        – shown as the screen heading
//   fruit        – the traditional fruit shown on screen (pick one of fruitOptions)
//   fruitOptions – the variants found in common lists; not shown, kept for reference
//   scripture    – the passage (Douay-Rheims) and its reference.
//                  Empty text shows on screen as a placeholder.

window.MYSTERIES = {
  joyful: {
    name: "Joyful",
    mysteries: [
      {
        title: "The Annunciation",
        fruit: "Humility",
        fruitOptions: ["Humility"],
        scripture: {
          ref: "Luke 1:38",
          text: `Behold the handmaid of the Lord; be it done to me according to thy word.`,
        },
      },
      {
        title: "The Visitation",
        fruit: "Love of neighbor",
        fruitOptions: ["Love of neighbor", "Charity"],
        scripture: {
          ref: "Luke 1:41–42",
          text: `Elizabeth was filled with the Holy Ghost: And she cried out with a loud voice, and said: Blessed art thou among women, and blessed is the fruit of thy womb.`,
        },
      },
      {
        title: "The Nativity",
        fruit: "Poverty of spirit",
        fruitOptions: ["Poverty of spirit", "Detachment from the things of the world", "Love of the poor"],
        scripture: {
          ref: "Luke 2:7",
          text: `She brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn.`,
        },
      },
      {
        title: "The Presentation in the Temple",
        fruit: "Obedience",
        fruitOptions: ["Obedience", "Purity of mind and body"],
        scripture: {
          ref: "Luke 2:22–23",
          text: `They carried him to Jerusalem, to present him to the Lord: As it is written in the law of the Lord: Every male opening the womb shall be called holy to the Lord.`,
        },
      },
      {
        title: "The Finding in the Temple",
        fruit: "Joy in finding Jesus",
        fruitOptions: ["Joy in finding Jesus", "Piety", "True wisdom and true conversion", "Zeal for God"],
        scripture: {
          ref: "Luke 2:46",
          text: `They found him in the temple, sitting in the midst of the doctors, hearing them, and asking them questions.`,
        },
      },
    ],
  },

  luminous: {
    name: "Luminous",
    mysteries: [
      {
        title: "The Baptism of the Lord",
        fruit: "Openness to the Holy Spirit",
        fruitOptions: ["Openness to the Holy Spirit", "Fidelity to our baptismal promises"],
        scripture: {
          ref: "Matthew 3:16–17",
          text: `The heavens were opened to him: and he saw the Spirit of God descending as a dove, and coming upon him. And behold a voice from heaven, saying: This is my beloved Son, in whom I am well pleased.`,
        },
      },
      {
        title: "The Wedding at Cana",
        fruit: "To Jesus through Mary",
        fruitOptions: ["To Jesus through Mary", "Fidelity"],
        scripture: {
          ref: "John 2:5",
          text: `His mother saith to the waiters: Whatsoever he shall say to you, do ye.`,
        },
      },
      {
        title: "The Proclamation of the Kingdom",
        fruit: "Repentance and trust in God",
        fruitOptions: ["Repentance and trust in God", "Conversion", "Desire for holiness"],
        scripture: {
          ref: "Mark 1:15",
          text: `The time is accomplished, and the kingdom of God is at hand: repent, and believe in the gospel.`,
        },
      },
      {
        title: "The Transfiguration",
        fruit: "Desire for holiness",
        fruitOptions: ["Desire for holiness", "Spiritual courage"],
        scripture: {
          ref: "Matthew 17:5",
          text: `Behold a bright cloud overshadowed them. And lo, a voice out of the cloud, saying: This is my beloved Son, in whom I am well pleased: hear ye him.`,
        },
      },
      {
        title: "The Institution of the Eucharist",
        fruit: "Adoration",
        fruitOptions: ["Adoration", "Eucharistic adoration", "Active participation at Mass"],
        scripture: {
          ref: "1 Corinthians 11:24–25",
          text: `This is my body, which shall be delivered for you: this do for the commemoration of me. This chalice is the new testament in my blood.`,
        },
      },
    ],
  },

  sorrowful: {
    name: "Sorrowful",
    mysteries: [
      {
        title: "The Agony in the Garden",
        fruit: "Sorrow for sin",
        fruitOptions: ["Sorrow for sin", "Contrition", "Conformity to the will of God"],
        scripture: {
          ref: "Luke 22:42–43",
          text: `Father, if thou wilt, remove this chalice from me: but yet not my will, but thine be done. And there appeared to him an angel from heaven, strengthening him.`,
        },
      },
      {
        title: "The Scourging at the Pillar",
        fruit: "Purity",
        fruitOptions: ["Purity", "Mortification of the senses"],
        scripture: {
          ref: "Isaiah 53:5",
          text: `He was wounded for our iniquities, he was bruised for our sins: the chastisement of our peace was upon him, and by his bruises we are healed.`,
        },
      },
      {
        title: "The Crowning with Thorns",
        fruit: "Moral courage",
        fruitOptions: ["Moral courage", "Contempt of the world", "Humility"],
        scripture: {
          ref: "Matthew 27:29",
          text: `Platting a crown of thorns, they put it upon his head, and a reed in his right hand. And bowing the knee before him, they mocked him, saying: Hail, King of the Jews.`,
        },
      },
      {
        title: "The Carrying of the Cross",
        fruit: "Patience",
        fruitOptions: ["Patience", "Patience in adversity"],
        scripture: {
          ref: "Luke 9:23",
          text: `If any man will come after me, let him deny himself, and take up his cross daily, and follow me.`,
        },
      },
      {
        title: "The Crucifixion",
        fruit: "Perseverance",
        fruitOptions: ["Perseverance", "Final perseverance", "Self-denial", "Salvation", "Forgiveness"],
        scripture: {
          ref: "John 19:30",
          text: `Jesus therefore, when he had taken the vinegar, said: It is consummated. And bowing his head, he gave up the ghost.`,
        },
      },
    ],
  },

  glorious: {
    name: "Glorious",
    mysteries: [
      {
        title: "The Resurrection",
        fruit: "Faith",
        fruitOptions: ["Faith"],
        scripture: {
          ref: "Luke 24:5–6",
          text: `Why seek you the living with the dead? He is not here, but is risen. Remember how he spoke unto you, when he was yet in Galilee.`,
        },
      },
      {
        title: "The Ascension",
        fruit: "Hope",
        fruitOptions: ["Hope", "Desire for heaven"],
        scripture: {
          ref: "Acts 1:9",
          text: `While they looked on, he was raised up: and a cloud received him out of their sight.`,
        },
      },
      {
        title: "The Descent of the Holy Spirit",
        fruit: "Love of God",
        fruitOptions: ["Love of God", "Wisdom", "The gifts of the Holy Spirit", "Zeal"],
        scripture: {
          ref: "Acts 2:4",
          text: `They were all filled with the Holy Ghost, and they began to speak with divers tongues, according as the Holy Ghost gave them to speak.`,
        },
      },
      {
        title: "The Assumption",
        fruit: "Grace of a happy death",
        fruitOptions: ["Grace of a happy death", "Devotion to Mary"],
        scripture: {
          ref: "Canticle of Canticles 6:9",
          text: `Who is she that cometh forth as the morning rising, fair as the moon, bright as the sun, terrible as an army set in array?`,
        },
      },
      {
        title: "The Coronation of Mary",
        fruit: "Trust in Mary’s intercession",
        fruitOptions: ["Trust in Mary’s intercession", "Eternal happiness", "Final perseverance"],
        scripture: {
          ref: "Revelation 12:1",
          text: `A great sign appeared in heaven: A woman clothed with the sun, and the moon under her feet, and on her head a crown of twelve stars.`,
        },
      },
    ],
  },
};
