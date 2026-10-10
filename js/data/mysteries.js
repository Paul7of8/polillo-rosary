// The four sets of mysteries.
//
// For each mystery:
//   title        – shown as the screen heading
//   fruit        – the traditional fruit shown on screen (pick one of fruitOptions)
//   fruitOptions – the variants found in common lists; not shown, kept for reference
//   scripture    – ref and url identify the NABRE passage; paste the exact text
//                  from bible.usccb.org between the backticks of `text`.
//                  Empty text shows on screen as a placeholder.

window.MYSTERIES = {
  joyful: {
    name: "Joyful",
    mysteries: [
      {
        title: "The Annunciation",
        fruit: "Humility",
        fruitOptions: ["Humility"],
        scripture: { ref: "Luke 1:38", url: "https://bible.usccb.org/bible/luke/1?38", text: `` },
      },
      {
        title: "The Visitation",
        fruit: "Love of neighbor",
        fruitOptions: ["Love of neighbor", "Charity"],
        scripture: { ref: "Luke 1:41–42", url: "https://bible.usccb.org/bible/luke/1?41", text: `` },
      },
      {
        title: "The Nativity",
        fruit: "Poverty of spirit",
        fruitOptions: ["Poverty of spirit", "Detachment from the things of the world", "Love of the poor"],
        scripture: { ref: "Luke 2:7", url: "https://bible.usccb.org/bible/luke/2?7", text: `` },
      },
      {
        title: "The Presentation in the Temple",
        fruit: "Obedience",
        fruitOptions: ["Obedience", "Purity of mind and body"],
        scripture: { ref: "Luke 2:22", url: "https://bible.usccb.org/bible/luke/2?22", text: `` },
      },
      {
        title: "The Finding in the Temple",
        fruit: "Joy in finding Jesus",
        fruitOptions: ["Joy in finding Jesus", "Piety", "True wisdom and true conversion", "Zeal for God"],
        scripture: { ref: "Luke 2:46", url: "https://bible.usccb.org/bible/luke/2?46", text: `` },
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
        scripture: { ref: "Matthew 3:16–17", url: "https://bible.usccb.org/bible/matthew/3?16", text: `` },
      },
      {
        title: "The Wedding at Cana",
        fruit: "To Jesus through Mary",
        fruitOptions: ["To Jesus through Mary", "Fidelity"],
        scripture: { ref: "John 2:5", url: "https://bible.usccb.org/bible/john/2?5", text: `` },
      },
      {
        title: "The Proclamation of the Kingdom",
        fruit: "Repentance and trust in God",
        fruitOptions: ["Repentance and trust in God", "Conversion", "Desire for holiness"],
        scripture: { ref: "Mark 1:15", url: "https://bible.usccb.org/bible/mark/1?15", text: `` },
      },
      {
        title: "The Transfiguration",
        fruit: "Desire for holiness",
        fruitOptions: ["Desire for holiness", "Spiritual courage"],
        scripture: { ref: "Luke 9:35", url: "https://bible.usccb.org/bible/luke/9?35", text: `` },
      },
      {
        title: "The Institution of the Eucharist",
        fruit: "Adoration",
        fruitOptions: ["Adoration", "Eucharistic adoration", "Active participation at Mass"],
        scripture: { ref: "Luke 22:19", url: "https://bible.usccb.org/bible/luke/22?19", text: `` },
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
        scripture: { ref: "Luke 22:42", url: "https://bible.usccb.org/bible/luke/22?42", text: `` },
      },
      {
        title: "The Scourging at the Pillar",
        fruit: "Purity",
        fruitOptions: ["Purity", "Mortification of the senses"],
        scripture: { ref: "John 19:1", url: "https://bible.usccb.org/bible/john/19?1", text: `` },
      },
      {
        title: "The Crowning with Thorns",
        fruit: "Moral courage",
        fruitOptions: ["Moral courage", "Contempt of the world", "Humility"],
        scripture: { ref: "Matthew 27:29", url: "https://bible.usccb.org/bible/matthew/27?29", text: `` },
      },
      {
        title: "The Carrying of the Cross",
        fruit: "Patience",
        fruitOptions: ["Patience", "Patience in adversity"],
        scripture: { ref: "John 19:17", url: "https://bible.usccb.org/bible/john/19?17", text: `` },
      },
      {
        title: "The Crucifixion",
        fruit: "Perseverance",
        fruitOptions: ["Perseverance", "Final perseverance", "Self-denial", "Salvation", "Forgiveness"],
        scripture: { ref: "Luke 23:46", url: "https://bible.usccb.org/bible/luke/23?46", text: `` },
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
        scripture: { ref: "Luke 24:5–6", url: "https://bible.usccb.org/bible/luke/24?5", text: `` },
      },
      {
        title: "The Ascension",
        fruit: "Hope",
        fruitOptions: ["Hope", "Desire for heaven"],
        scripture: { ref: "Luke 24:51", url: "https://bible.usccb.org/bible/luke/24?51", text: `` },
      },
      {
        title: "The Descent of the Holy Spirit",
        fruit: "Love of God",
        fruitOptions: ["Love of God", "Wisdom", "The gifts of the Holy Spirit", "Zeal"],
        scripture: { ref: "Acts 2:4", url: "https://bible.usccb.org/bible/acts/2?4", text: `` },
      },
      {
        title: "The Assumption",
        fruit: "Grace of a happy death",
        fruitOptions: ["Grace of a happy death", "Devotion to Mary"],
        scripture: { ref: "Revelation 12:1", url: "https://bible.usccb.org/bible/revelation/12?1", text: `` },
      },
      {
        title: "The Coronation of Mary",
        fruit: "Trust in Mary’s intercession",
        fruitOptions: ["Trust in Mary’s intercession", "Eternal happiness", "Final perseverance"],
        scripture: { ref: "Revelation 12:1", url: "https://bible.usccb.org/bible/revelation/12?1", text: `` },
      },
    ],
  },
};

// Required acknowledgment, as worded at
// https://www.usccb.org/offices/new-american-bible/permissions
window.NABRE_NOTICE =
  "Scripture texts in this work are taken from the New American Bible, revised edition " +
  "© 2010, 1991, 1986, 1970 Confraternity of Christian Doctrine, Washington, D.C. and are " +
  "used by permission of the copyright owner. All Rights Reserved. No part of the New " +
  "American Bible may be reproduced in any form without permission in writing from the " +
  "copyright owner.";
