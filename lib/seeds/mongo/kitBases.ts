import mongoose from "mongoose";

const raw = [
  {
    _id: "60df4a12bf84855a680f88f0",
    displayName: "MP7",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mp7.png",
    gameInfo: {
      blurb:
        "Compact by design, this fully automatic weapon has a high rate of fire and low recoil.",
      stats: {
        accuracy: 63,
        range: 47,
        mobility: 75,
        damage: 64,
        fireRate: 78.5,
        control: 76,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "12",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "29",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "16",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "10",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "50",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "36",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "15",
          optionId: "60e367d9bf84855a680f99cf",
        },
        {
          orderPlacement: "41",
          optionId: "60e367ddbf84855a680f99d3",
        },
        {
          orderPlacement: "27",
          optionId: "60e367dabf84855a680f99d1",
        },
        {
          orderPlacement: "8",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "51",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "23",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "3",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "13",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "21",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "25",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "17",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "28",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "32",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "35",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "37",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "40",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "42",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "45",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "48",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "52",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "54",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "19",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "38",
          optionId: "60df7471bf84855a680f8aa5",
        },
        {
          orderPlacement: "4",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "9",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "11",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "18",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "24",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "31",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "34",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "39",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "47",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "6",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "20",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "33",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "44",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "53",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "22",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "43",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "30",
          optionId: "60e1cf42bf84855a680f8d99",
        },
        {
          orderPlacement: "49",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "14",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "46",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "26",
          optionId: "60df749dbf84855a680f8aad",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mp7"],
    category: "SMG",
  },
  {
    _id: "60df6206bf84855a680f895d",
    displayName: "Dragunov",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/dragunov.png",
    gameInfo: {
      blurb:
        "A soviet workhorse chambered in 7.62mm x 54mmR. This gas-operated, semi-automatic sniper rifle allows for rapid follow-up shots.",
      stats: {
        accuracy: 81,
        range: 75,
        mobility: 50,
        damage: 78,
        fireRate: 48,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "5",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "11",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "19",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "8",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "28",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "25",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "33",
          optionId: "60e3efc98a26dd1acccc6167",
        },
        {
          orderPlacement: "9",
          optionId: "60e3efc18a26dd1acccc6165",
        },
        {
          orderPlacement: "14",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "4",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "12",
          optionId: "60e3ec798a26dd1acccc60ba",
        },
        {
          orderPlacement: "16",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "23",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "27",
          optionId: "60e3ec858a26dd1acccc60bc",
        },
        {
          orderPlacement: "31",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "34",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "30",
          optionId: "60e3efdb8a26dd1acccc616b",
        },
        {
          orderPlacement: "18",
          optionId: "60e211f2bf84855a680f9230",
        },
        {
          orderPlacement: "6",
          optionId: "60e3d9998a26dd1acccc5d49",
        },
        {
          orderPlacement: "35",
          optionId: "60e3ed588a26dd1acccc60f0",
        },
        {
          orderPlacement: "13",
          optionId: "60e3db4b8a26dd1acccc5d9d",
        },
        {
          orderPlacement: "21",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "26",
          optionId: "60e3db598a26dd1acccc5da1",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "7",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "10",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "15",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "17",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "20",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "22",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "24",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "29",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "36",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "32",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["dragunov"],
    category: "Sniper Rifle",
  },
  {
    _id: "60df66efbf84855a680f8980",
    displayName: "Renetti",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/renetti.png",
    gameInfo: {
      blurb:
        "Well rounded semi-auto 9mm pistol. This unassuming sidearm excels in close range combat, and features gunsmithing capabilities unique to the pistol class that permit a variety of engagement strategies.",
      stats: {
        accuracy: 60,
        range: 41,
        mobility: 80,
        damage: 55,
        fireRate: 62,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "23",
          optionId: "60e3f90f8a26dd1acccc62f0",
        },
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "20",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "5",
          optionId: "60e3f78d8a26dd1acccc62a6",
        },
        {
          orderPlacement: "12",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "19",
          optionId: "60e3f9278a26dd1acccc62f4",
        },
        {
          orderPlacement: "46",
          optionId: "60e3f92a8a26dd1acccc62f6",
        },
        {
          orderPlacement: "32",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "9",
          optionId: "60e3f9248a26dd1acccc62f2",
        },
        {
          orderPlacement: "45",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "27",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "39",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "14",
          optionId: "60e3f9548a26dd1acccc62fa",
        },
        {
          orderPlacement: "8",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "37",
          optionId: "60e3f9588a26dd1acccc62fc",
        },
        {
          orderPlacement: "4",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "11",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "15",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "18",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "21",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "24",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "29",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "31",
          optionId: "60e3f96d8a26dd1acccc62fe",
        },
        {
          orderPlacement: "33",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "35",
          optionId: "60e3f9768a26dd1acccc6300",
        },
        {
          orderPlacement: "40",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "44",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "25",
          optionId: "60e3f7d68a26dd1acccc62b8",
        },
        {
          orderPlacement: "10",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "42",
          optionId: "60e3f7db8a26dd1acccc62ba",
        },
        {
          orderPlacement: "16",
          optionId: "60e3f9828a26dd1acccc6302",
        },
        {
          orderPlacement: "30",
          optionId: "60e3f9858a26dd1acccc6304",
        },
        {
          orderPlacement: "3",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "6",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "13",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "17",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "26",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "28",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "36",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "41",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "43",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "99",
          optionId: "60e3f8098a26dd1acccc62c0",
        },
        {
          orderPlacement: "22",
          optionId: "60e3f99e8a26dd1acccc6306",
        },
        {
          orderPlacement: "34",
          optionId: "60e3f9a18a26dd1acccc6308",
        },
        {
          orderPlacement: "38",
          optionId: "60e3f9a78a26dd1acccc630a",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["renetti"],
    category: "Handgun",
  },
  {
    _id: "60df5b77bf84855a680f891e",
    displayName: "MG34",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mg34.png",
    gameInfo: {
      blurb:
        "Fully automatic weapon with a high rate of fire and punishing 7.92 Mauser ammunition. Salvaged WW2 machine guns are still reliable and deadly on the battlefield.",
      stats: {
        accuracy: 72,
        range: 78,
        mobility: 48,
        damage: 76.5,
        fireRate: 76,
        control: 72,
      },
      availableOptions: [
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "3",
          optionId: "60df7e5abf84855a680f8c12",
        },
        {
          orderPlacement: "13",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "18",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "27",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "40",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "51",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "36",
          optionId: "60e3b9ac8a26dd1acccc5a42",
        },
        {
          orderPlacement: "23",
          optionId: "60e3b9a98a26dd1acccc5a40",
        },
        {
          orderPlacement: "48",
          optionId: "60e3b9bb8a26dd1acccc5a46",
        },
        {
          orderPlacement: "8",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "26",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "39",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "19",
          optionId: "60e3b9d98a26dd1acccc5a4c",
        },
        {
          orderPlacement: "4",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "33",
          optionId: "60e3b9dd8a26dd1acccc5a4e",
        },
        {
          orderPlacement: "9",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "12",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "22",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "38",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "28",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "42",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "47",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "53",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "25",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "43",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "56",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "10",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "14",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "21",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "24",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "30",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "34",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "31",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "37",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "41",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "44",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "46",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "52",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "50",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "55",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "57",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "15",
          optionId: "60e1cf42bf84855a680f8d99",
        },
        {
          orderPlacement: "29",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "35",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "11",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "16",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "32",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "20",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "49",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "54",
          optionId: "60df744fbf84855a680f8a9f",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mg34"],
    category: "LMG",
  },
  {
    _id: "60df6779bf84855a680f8986",
    displayName: "1911 (MW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/1911-mw.png",
    gameInfo: {
      blurb:
        "A well-rounded, semi-automatic sidearm with a moderate rate of fire. Slightly more range than your average .45 ACP pistol.",
      stats: {
        accuracy: 55,
        range: 44,
        mobility: 80,
        damage: 59,
        fireRate: 55,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "10",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "18",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "5",
          optionId: "60e3f78d8a26dd1acccc62a6",
        },
        {
          orderPlacement: "17",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "25",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "8",
          optionId: "60e3fc888a26dd1acccc63a7",
        },
        {
          orderPlacement: "34",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "16",
          optionId: "60e3fc8a8a26dd1acccc63a9",
        },
        {
          orderPlacement: "23",
          optionId: "60e3fc908a26dd1acccc63ab",
        },
        {
          orderPlacement: "7",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "21",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "29",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "14",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "24",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "33",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "13",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "4",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "26",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "12",
          optionId: "60e3d9c98a26dd1acccc5d51",
        },
        {
          orderPlacement: "28",
          optionId: "60e3db4b8a26dd1acccc5d9d",
        },
        {
          orderPlacement: "9",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "19",
          optionId: "60e3f7d68a26dd1acccc62b8",
        },
        {
          orderPlacement: "31",
          optionId: "60e3f7db8a26dd1acccc62ba",
        },
        {
          orderPlacement: "3",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "6",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "15",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "11",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "20",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "22",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "30",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "32",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "27",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "99",
          optionId: "60e3f8098a26dd1acccc62c0",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mw1911", "1911mw"],
    category: "Handgun",
  },
  {
    _id: "60df5f46bf84855a680f8943",
    displayName: "SKS",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/sks.png",
    gameInfo: {
      blurb:
        "Lightweight, semi-auto Carbine chambered in 7.62x39mm. This hard hitting and agile Soviet rifle focuses on utility over accuracy. It flaunts a faster fire rate than other weapons in its class, but a carefully placed round will eliminate the need for follow up shots entirely. This classic DMR has seen a lot of battles, and its unique gunsmith configurations reflect a diverse service history.",
      stats: {
        accuracy: 75,
        range: 71,
        mobility: 59,
        damage: 76,
        fireRate: 52,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "10",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "17",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "19",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "13",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "26",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "34",
          optionId: "60e3d96d8a26dd1acccc5d43",
        },
        {
          orderPlacement: "45",
          optionId: "60e3d98b8a26dd1acccc5d45",
        },
        {
          orderPlacement: "42",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "14",
          optionId: "60e3d9688a26dd1acccc5d41",
        },
        {
          orderPlacement: "40",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "27",
          optionId: "60e3d9998a26dd1acccc5d49",
        },
        {
          orderPlacement: "51",
          optionId: "60e39531bf84855a680f9f2a",
        },
        {
          orderPlacement: "21",
          optionId: "60e3d9948a26dd1acccc5d47",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "4",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "11",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "16",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "20",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "22",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "25",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "28",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "31",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "32",
          optionId: "60e3da418a26dd1acccc5d55",
        },
        {
          orderPlacement: "35",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "37",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "41",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "39",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "44",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "49",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "47",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "53",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "9",
          optionId: "60e34416bf84855a680f9509",
        },
        {
          orderPlacement: "48",
          optionId: "60e3d9c98a26dd1acccc5d51",
        },
        {
          orderPlacement: "23",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "3",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "30",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "36",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "43",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "52",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "12",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "7",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "15",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "18",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "29",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "33",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "24",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "38",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "46",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
        {
          orderPlacement: "50",
          optionId: "60df752fbf84855a680f8ac1",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["sks"],
    category: "Marksman Rifle",
  },
  {
    _id: "60df4f75bf84855a680f8908",
    displayName: "VLK Rogue",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/vlk-rogue.png",
    gameInfo: {
      blurb:
        "An agile 12-gauge mag fed shotgun from VLK with extensive options to modify range, stability, and maneuverability.",
      stats: {
        accuracy: 57,
        range: 42,
        mobility: 78,
        damage: 78,
        fireRate: 51.5,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "29",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "19",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "21",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "31",
          optionId: "60e38f62bf84855a680f9e17",
        },
        {
          orderPlacement: "47",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "30",
          optionId: "60e390f7bf84855a680f9e63",
        },
        {
          orderPlacement: "36",
          optionId: "60e3910fbf84855a680f9e67",
        },
        {
          orderPlacement: "15",
          optionId: "60e390f3bf84855a680f9e61",
        },
        {
          orderPlacement: "43",
          optionId: "60e39101bf84855a680f9e65",
        },
        {
          orderPlacement: "27",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "9",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "4",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "40",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "10",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "23",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "7",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "13",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "18",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "25",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "22",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "32",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "34",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "37",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "46",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "42",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "49",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "51",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "12",
          optionId: "60e38fa4bf84855a680f9e21",
        },
        {
          orderPlacement: "33",
          optionId: "60e38fabbf84855a680f9e23",
        },
        {
          orderPlacement: "45",
          optionId: "60e3931cbf84855a680f9e73",
        },
        {
          orderPlacement: "99",
          optionId: "60e39325bf84855a680f9e75",
        },
        {
          orderPlacement: "14",
          optionId: "60e3933ebf84855a680f9e79",
        },
        {
          orderPlacement: "24",
          optionId: "60e3934bbf84855a680f9e7d",
        },
        {
          orderPlacement: "41",
          optionId: "60e3934fbf84855a680f9e7f",
        },
        {
          orderPlacement: "8",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "11",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "16",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "20",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "26",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "35",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "44",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "38",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "50",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "17",
          optionId: "60e223dfbf84855a680f9374",
        },
        {
          orderPlacement: "28",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "39",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "48",
          optionId: "60df739abf84855a680f8a87",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["vlk", "vlkrogue"],
    category: "Shotgun",
  },
  {
    _id: "60df60c4bf84855a680f8951",
    displayName: "LW3 - Tundra",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/lw3-tundra.png",
    gameInfo: {
      blurb:
        "Bolt-action sniper rifle. High damage with moderate sway. 1-shot kill to the head, chest, or shoulders. Hold button while ADS to steady.",
      stats: {
        accuracy: 82,
        range: 84,
        mobility: 42,
        damage: 85,
        fireRate: 38,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e3e29d8a26dd1acccc5eda",
        },
        {
          orderPlacement: "38",
          optionId: "60e3e2bc8a26dd1acccc5ee4",
        },
        {
          orderPlacement: "11",
          optionId: "60e3e2a18a26dd1acccc5edc",
        },
        {
          orderPlacement: "29",
          optionId: "60e3e2b78a26dd1acccc5ee2",
        },
        {
          orderPlacement: "20",
          optionId: "60e3e2a98a26dd1acccc5ede",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "46",
          optionId: "60e3e2c38a26dd1acccc5ee6",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "13",
          optionId: "60e3e6728a26dd1acccc5fa4",
        },
        {
          orderPlacement: "4",
          optionId: "60e3e6698a26dd1acccc5fa2",
        },
        {
          orderPlacement: "21",
          optionId: "60e3e6828a26dd1acccc5fa8",
        },
        {
          orderPlacement: "39",
          optionId: "60e3e69e8a26dd1acccc5fb0",
        },
        {
          orderPlacement: "30",
          optionId: "60e3e6918a26dd1acccc5fac",
        },
        {
          orderPlacement: "48",
          optionId: "60e3e6a98a26dd1acccc5fb4",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "17",
          optionId: "60e3e3248a26dd1acccc5ef8",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "37",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "52",
          optionId: "60e3e3308a26dd1acccc5efc",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e3e33e8a26dd1acccc5efe",
        },
        {
          orderPlacement: "34",
          optionId: "60e3e3578a26dd1acccc5f06",
        },
        {
          orderPlacement: "25",
          optionId: "60e3e3508a26dd1acccc5f04",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "51",
          optionId: "60e3e35f8a26dd1acccc5f08",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "54",
          optionId: "60e20f2fbf84855a680f91bc",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["tundra"],
    category: "Sniper Rifle",
  },
  {
    _id: "60ded5b6bf84855a680f88a3",
    displayName: "FR 5.56",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/fr-556.png",
    gameInfo: {
      blurb:
        "A 3 round burst bullpup assault rifle. A well placed burst can be extremely deadly at intermittent ranges.",
      stats: {
        accuracy: 73,
        range: 62,
        mobility: 59,
        damage: 75,
        fireRate: 76,
        control: 71,
      },
      availableOptions: [
        {
          orderPlacement: "8",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "14",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "45",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "37",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "3",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "62",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "20",
          optionId: "60e349c6bf84855a680f95b3",
        },
        {
          orderPlacement: "26",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "54",
          optionId: "60e34a17bf84855a680f95b9",
        },
        {
          orderPlacement: "39",
          optionId: "60e349d0bf84855a680f95b5",
        },
        {
          orderPlacement: "58",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "42",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "11",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "34",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "51",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "4",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "6",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "10",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "16",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "18",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "22",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "25",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "28",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "30",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "33",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "36",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "40",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "43",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "47",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "50",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "52",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "57",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "55",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "61",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "63",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "21",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "5",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "46",
          optionId: "60df7471bf84855a680f8aa5",
        },
        {
          orderPlacement: "9",
          optionId: "60e21267bf84855a680f9238",
        },
        {
          orderPlacement: "15",
          optionId: "60e21275bf84855a680f923c",
        },
        {
          orderPlacement: "19",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "31",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "23",
          optionId: "60e2124dbf84855a680f9234",
        },
        {
          orderPlacement: "27",
          optionId: "60e21290bf84855a680f9240",
        },
        {
          orderPlacement: "41",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "44",
          optionId: "60e212a9bf84855a680f9244",
        },
        {
          orderPlacement: "49",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "56",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "60",
          optionId: "60e212c5bf84855a680f9248",
        },
        {
          orderPlacement: "64",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "7",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "13",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "24",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "17",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "32",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "29",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "65",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "53",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "12",
          optionId: "60e349a0bf84855a680f95af",
        },
        {
          orderPlacement: "38",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "48",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "59",
          optionId: "60e349afbf84855a680f95b1",
        },
        {
          orderPlacement: "35",
          optionId: "60df7ef4bf84855a680f8c1c",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["fr", "fr556"],
    category: "Assault Rifle",
  },
  {
    _id: "60ded302bf84855a680f888b",
    displayName: "XM4",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/xm4.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. Reliable damage with improved fire rate. Fair weapon control when sustaining fire.",
      stats: {
        accuracy: 71,
        range: 63,
        mobility: 63,
        damage: 77,
        fireRate: 70,
        control: 79,
      },
      availableOptions: [
        {
          orderPlacement: "17",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "47",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "13",
          optionId: "60e20e09bf84855a680f91a0",
        },
        {
          orderPlacement: "4",
          optionId: "60e20df9bf84855a680f919e",
        },
        {
          orderPlacement: "21",
          optionId: "60e20e19bf84855a680f91a4",
        },
        {
          orderPlacement: "30",
          optionId: "60e20e27bf84855a680f91a8",
        },
        {
          orderPlacement: "39",
          optionId: "60e20e30bf84855a680f91aa",
        },
        {
          orderPlacement: "48",
          optionId: "60e20e3ebf84855a680f91ae",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "16",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e464bf84855a680f8f9d",
        },
        {
          orderPlacement: "34",
          optionId: "60e20d16bf84855a680f9160",
        },
        {
          orderPlacement: "43",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "51",
          optionId: "60e20b3fbf84855a680f9106",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "54",
          optionId: "60e20f2fbf84855a680f91bc",
        },
        {
          orderPlacement: "36",
          optionId: "60e20efabf84855a680f91b4",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["xm4"],
    category: "Assault Rifle",
  },
  {
    _id: "60ded377bf84855a680f888f",
    displayName: "RAM-7",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ram-7.png",
    gameInfo: {
      blurb:
        "A fully automatic bullpup assault rifle with a compact design that lends itself to close-quarter engagements.",
      stats: {
        accuracy: 70,
        range: 60,
        mobility: 66,
        damage: 72.5,
        fireRate: 76,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "10",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "18",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "36",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "12",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "9",
          optionId: "60e213e1bf84855a680f92a3",
        },
        {
          orderPlacement: "53",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "41",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "48",
          optionId: "60e213ebbf84855a680f92a5",
        },
        {
          orderPlacement: "54",
          optionId: "60e213f9bf84855a680f92a9",
        },
        {
          orderPlacement: "39",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "3",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "30",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "49",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "11",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "19",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "15",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "23",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "27",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "29",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "33",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "37",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "42",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "44",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "45",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "50",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "47",
          optionId: "60e2146dbf84855a680f92ad",
        },
        {
          orderPlacement: "57",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "59",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "60",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "62",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "16",
          optionId: "60e21f1cbf84855a680f92b1",
        },
        {
          orderPlacement: "28",
          optionId: "60e21f30bf84855a680f92b5",
        },
        {
          orderPlacement: "58",
          optionId: "60e21f38bf84855a680f92b7",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "8",
          optionId: "60df740dbf84855a680f8a95",
        },
        {
          orderPlacement: "14",
          optionId: "60df7442bf84855a680f8a9b",
        },
        {
          orderPlacement: "17",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "20",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "25",
          optionId: "60e21267bf84855a680f9238",
        },
        {
          orderPlacement: "31",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "51",
          optionId: "60df742fbf84855a680f8a97",
        },
        {
          orderPlacement: "34",
          optionId: "60df73efbf84855a680f8a93",
        },
        {
          orderPlacement: "56",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "61",
          optionId: "60df73c2bf84855a680f8a8b",
        },
        {
          orderPlacement: "63",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "24",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "22",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "38",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "55",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "6",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "13",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "21",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "26",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "32",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "35",
          optionId: "60df7521bf84855a680f8abf",
        },
        {
          orderPlacement: "40",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "43",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "46",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "52",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "64",
          optionId: "60df7536bf84855a680f8ac3",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["ram", "ram7"],
    category: "Assault Rifle",
  },
  {
    _id: "60df6610bf84855a680f8978",
    displayName: "AMP63",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/amp63.png",
    gameInfo: {
      blurb:
        "Full-auto pistol. Fast fire rate with improved bullet velocity and moderate recoil. Reliable damage output at close range.",
      stats: {
        accuracy: 57,
        range: 34,
        mobility: 78,
        damage: 70,
        fireRate: 65,
        control: 62,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "34",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "18",
          optionId: "60e3f1408a26dd1acccc61a0",
        },
        {
          orderPlacement: "8",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "3",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "13",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "19",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "24",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "4",
          optionId: "60e3f3188a26dd1acccc61e8",
        },
        {
          orderPlacement: "9",
          optionId: "60e3551fbf84855a680f96ef",
        },
        {
          orderPlacement: "20",
          optionId: "60e3f3438a26dd1acccc61f4",
        },
        {
          orderPlacement: "14",
          optionId: "60e3f3388a26dd1acccc61f0",
        },
        {
          orderPlacement: "30",
          optionId: "60e3f1338a26dd1acccc619e",
        },
        {
          orderPlacement: "25",
          optionId: "60e3f34a8a26dd1acccc61f6",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "15",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "10",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "26",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "21",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e3f3bd8a26dd1acccc6202",
        },
        {
          orderPlacement: "11",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "16",
          optionId: "60e3f3c28a26dd1acccc6204",
        },
        {
          orderPlacement: "22",
          optionId: "60e3f3c98a26dd1acccc6206",
        },
        {
          orderPlacement: "27",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "7",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "32",
          optionId: "60e3f3d18a26dd1acccc6208",
        },
        {
          orderPlacement: "17",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "12",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "23",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "28",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "33",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "35",
          optionId: "60e3f1498a26dd1acccc61a2",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["amp63"],
    category: "Handgun",
  },
  {
    _id: "60df4a4fbf84855a680f88f2",
    displayName: "AUG (MW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/aug-mw.png",
    gameInfo: {
      blurb:
        "A modular, fully automatic weapon configured for mobility and close range combat.",
      stats: {
        accuracy: 67,
        range: 58,
        mobility: 65,
        damage: 70,
        fireRate: 72,
        control: 72,
      },
      availableOptions: [
        {
          orderPlacement: "5",
          optionId: "60df7e5abf84855a680f8c12",
        },
        {
          orderPlacement: "8",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "25",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "21",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "13",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "9",
          optionId: "60e36ab3bf84855a680f9a14",
        },
        {
          orderPlacement: "50",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "51",
          optionId: "60e36ac3bf84855a680f9a18",
        },
        {
          orderPlacement: "38",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "49",
          optionId: "60e36abbbf84855a680f9a16",
        },
        {
          orderPlacement: "55",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "24",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "36",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "19",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "32",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "42",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "4",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "12",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "14",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "22",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "18",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "26",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "30",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "31",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "35",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "39",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "37",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "40",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "48",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "52",
          optionId: "60e37115bf84855a680f9a1e",
        },
        {
          orderPlacement: "54",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "56",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "57",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "28",
          optionId: "60e37153bf84855a680f9a24",
        },
        {
          orderPlacement: "16",
          optionId: "60e37148bf84855a680f9a22",
        },
        {
          orderPlacement: "44",
          optionId: "60e37162bf84855a680f9a26",
        },
        {
          orderPlacement: "11",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "17",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "27",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "47",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "53",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "6",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "20",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "23",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "29",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "34",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "41",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "43",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "15",
          optionId: "60e3719abf84855a680f9a2c",
        },
        {
          orderPlacement: "46",
          optionId: "60df7521bf84855a680f8abf",
        },
        {
          orderPlacement: "33",
          optionId: "60e371ccbf84855a680f9a32",
        },
        {
          orderPlacement: "45",
          optionId: "60e371d2bf84855a680f9a34",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mwaug", "augmw"],
    category: "SMG",
  },
  {
    _id: "60df5bd4bf84855a680f8922",
    displayName: "PKM",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/pkm.png",
    gameInfo: {
      blurb:
        "A fully automatic light machine gun firing 7.62mm ammunition for high damage at a moderate fire rate.",
      stats: {
        accuracy: 75,
        range: 76,
        mobility: 50,
        damage: 77,
        fireRate: 72.5,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "12",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "7",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "15",
          optionId: "60df7e5abf84855a680f8c12",
        },
        {
          orderPlacement: "21",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "32",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "22",
          optionId: "60e3c7648a26dd1acccc5ae3",
        },
        {
          orderPlacement: "46",
          optionId: "60e3c7878a26dd1acccc5ae7",
        },
        {
          orderPlacement: "49",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "30",
          optionId: "60e3c77e8a26dd1acccc5ae5",
        },
        {
          orderPlacement: "35",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "18",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "54",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "3",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "6",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "9",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "11",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "16",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "20",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "14",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "23",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "26",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "34",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "31",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "28",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "37",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "40",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "47",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "43",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "51",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "53",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "42",
          optionId: "60e3a88d8a26dd1acccc59a4",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "13",
          optionId: "60e3c6238a26dd1acccc5a9e",
        },
        {
          orderPlacement: "56",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "19",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "29",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "39",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "45",
          optionId: "60e3c8508a26dd1acccc5af1",
        },
        {
          orderPlacement: "55",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "24",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "17",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "33",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "41",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "50",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "52",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "57",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "27",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "8",
          optionId: "60e1cf42bf84855a680f8d99",
        },
        {
          orderPlacement: "36",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "44",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "48",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "38",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "25",
          optionId: "60df749dbf84855a680f8aad",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["pkm"],
    category: "LMG",
  },
  {
    _id: "60ded54fbf84855a680f889f",
    displayName: "M4A1",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m4a1.png",
    gameInfo: {
      blurb:
        "A fully automatic, all-purpose assault rifle. Control your shots and this weapon can be very effective at range.",
      stats: {
        accuracy: 71,
        range: 63,
        mobility: 63,
        damage: 72,
        fireRate: 75,
        control: 71,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "10",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "12",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "18",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "37",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "43",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "58",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "9",
          optionId: "60df849dbf84855a680f8c68",
        },
        {
          orderPlacement: "36",
          optionId: "60df84aabf84855a680f8c6a",
        },
        {
          orderPlacement: "52",
          optionId: "60df84b9bf84855a680f8c6c",
        },
        {
          orderPlacement: "59",
          optionId: "60df84c2bf84855a680f8c6e",
        },
        {
          orderPlacement: "70",
          optionId: "60df84cebf84855a680f8c70",
        },
        {
          orderPlacement: "30",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "41",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "54",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "3",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "11",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "15",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "19",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "23",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "27",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "29",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "33",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "38",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "44",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "47",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "49",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "51",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "55",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "62",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "65",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "66",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "68",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "16",
          optionId: "60df84ffbf84855a680f8c72",
        },
        {
          orderPlacement: "28",
          optionId: "60df8509bf84855a680f8c74",
        },
        {
          orderPlacement: "53",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "64",
          optionId: "60df8519bf84855a680f8c78",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "8",
          optionId: "60df740dbf84855a680f8a95",
        },
        {
          orderPlacement: "14",
          optionId: "60df7442bf84855a680f8a9b",
        },
        {
          orderPlacement: "17",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "20",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "25",
          optionId: "60df73d6bf84855a680f8a8f",
        },
        {
          orderPlacement: "31",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "34",
          optionId: "60df73efbf84855a680f8a93",
        },
        {
          orderPlacement: "46",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "56",
          optionId: "60df742fbf84855a680f8a97",
        },
        {
          orderPlacement: "61",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "67",
          optionId: "60df73c2bf84855a680f8a8b",
        },
        {
          orderPlacement: "69",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "24",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "39",
          optionId: "60df7471bf84855a680f8aa5",
        },
        {
          orderPlacement: "48",
          optionId: "60df854cbf84855a680f8c7a",
        },
        {
          orderPlacement: "63",
          optionId: "60df855abf84855a680f8c7c",
        },
        {
          orderPlacement: "22",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "40",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "60",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "6",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "13",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "21",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "26",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "32",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "35",
          optionId: "60df7521bf84855a680f8abf",
        },
        {
          orderPlacement: "42",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "45",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "50",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "57",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "71",
          optionId: "60df7536bf84855a680f8ac3",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["m4", "m4a1"],
    category: "Assault Rifle",
  },
  {
    _id: "60df4ac6bf84855a680f88f6",
    displayName: "P90",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/p90.png",
    gameInfo: {
      blurb:
        "An automatic bullpup submachine gun. The unique top mounted magazine hold carries ample high velocity 5.7 x 28mm ammunition.",
      stats: {
        accuracy: 69,
        range: 52,
        mobility: 70,
        damage: 65,
        fireRate: 77.5,
        control: 74,
      },
      availableOptions: [
        {
          orderPlacement: "14",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "3",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "11",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "31",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "18",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "20",
          optionId: "60e3757bbf84855a680f9ac3",
        },
        {
          orderPlacement: "47",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "37",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "6",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "42",
          optionId: "60e37588bf84855a680f9ac5",
        },
        {
          orderPlacement: "44",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "22",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "38",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "5",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "10",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "7",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "12",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "15",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "19",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "23",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "28",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "26",
          optionId: "60e3761cbf84855a680f9acf",
        },
        {
          orderPlacement: "30",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "32",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "34",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "36",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "40",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "43",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "45",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "50",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "48",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "25",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "13",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "4",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "8",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "17",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "21",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "24",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "33",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "46",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "35",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "49",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "16",
          optionId: "60e371ccbf84855a680f9a32",
        },
        {
          orderPlacement: "29",
          optionId: "60e375adbf84855a680f9ac9",
        },
        {
          orderPlacement: "39",
          optionId: "60e375babf84855a680f9acb",
        },
        {
          orderPlacement: "27",
          optionId: "60e695e861052d41a04116df",
        },
        {
          orderPlacement: "9",
          optionId: "60e695e161052d41a04116dd",
        },
        {
          orderPlacement: "41",
          optionId: "60e695eb61052d41a04116e1",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["p90"],
    category: "SMG",
  },
  {
    _id: "60df65dabf84855a680f8976",
    displayName: "Magnum",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/magnum.png",
    gameInfo: {
      blurb:
        "Double action revolver. High damage with increased penetration and faster bullet velocity.",
      stats: {
        accuracy: 60,
        range: 61,
        mobility: 71,
        damage: 63,
        fireRate: 54,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "19",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "3",
          optionId: "60e35985bf84855a680f9799",
        },
        {
          orderPlacement: "8",
          optionId: "60e3598dbf84855a680f979b",
        },
        {
          orderPlacement: "13",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "24",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "14",
          optionId: "60e3f11c8a26dd1acccc6198",
        },
        {
          orderPlacement: "20",
          optionId: "60e3f1248a26dd1acccc619a",
        },
        {
          orderPlacement: "4",
          optionId: "60e3f1068a26dd1acccc6194",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "9",
          optionId: "60e3f1118a26dd1acccc6196",
        },
        {
          orderPlacement: "25",
          optionId: "60e3f12b8a26dd1acccc619c",
        },
        {
          orderPlacement: "34",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "30",
          optionId: "60e3f1338a26dd1acccc619e",
        },
        {
          orderPlacement: "18",
          optionId: "60e3f1408a26dd1acccc61a0",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "10",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "21",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "15",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "26",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "11",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "6",
          optionId: "60e3f1618a26dd1acccc61a6",
        },
        {
          orderPlacement: "22",
          optionId: "60e3f17b8a26dd1acccc61ac",
        },
        {
          orderPlacement: "16",
          optionId: "60e3f16d8a26dd1acccc61aa",
        },
        {
          orderPlacement: "27",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "32",
          optionId: "60e3f1818a26dd1acccc61ae",
        },
        {
          orderPlacement: "7",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "12",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "17",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "23",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "28",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "33",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "35",
          optionId: "60e3f1498a26dd1acccc61a2",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["magnum"],
    category: "Handgun",
  },
  {
    _id: "60ded203bf84855a680f8883",
    displayName: "Groza",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/groza.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. Excellent handling speeds with improved damage. Fast fire rate and fair damage range.",
      stats: {
        accuracy: 70,
        range: 64,
        mobility: 58,
        damage: 78,
        fireRate: 72.5,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "7",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "47",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dd79bf84855a680f8f7f",
        },
        {
          orderPlacement: "55",
          optionId: "60e1e510bf84855a680f8fb1",
        },
        {
          orderPlacement: "11",
          optionId: "60e1dd86bf84855a680f8f81",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "29",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "38",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "46",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "4",
          optionId: "60e1e848bf84855a680f9030",
        },
        {
          orderPlacement: "13",
          optionId: "60e1e85bbf84855a680f9032",
        },
        {
          orderPlacement: "21",
          optionId: "60e1e86abf84855a680f9034",
        },
        {
          orderPlacement: "39",
          optionId: "60e1e886bf84855a680f9038",
        },
        {
          orderPlacement: "30",
          optionId: "60e1e87abf84855a680f9036",
        },
        {
          orderPlacement: "48",
          optionId: "60e1e899bf84855a680f903a",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "31",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e1def0bf84855a680f8f97",
        },
        {
          orderPlacement: "50",
          optionId: "60e1def4bf84855a680f8f99",
        },
        {
          orderPlacement: "8",
          optionId: "60e35c1bbf84855a680f9817",
        },
        {
          orderPlacement: "16",
          optionId: "60e1e46ebf84855a680f8f9f",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "34",
          optionId: "60e360ffbf84855a680f98d5",
        },
        {
          orderPlacement: "43",
          optionId: "60e1e486bf84855a680f8fa5",
        },
        {
          orderPlacement: "9",
          optionId: "60e1eb44bf84855a680f9044",
        },
        {
          orderPlacement: "51",
          optionId: "60e1e48fbf84855a680f8fa7",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "45",
          optionId: "60e1e4d7bf84855a680f8fad",
        },
        {
          orderPlacement: "54",
          optionId: "60e1e8c5bf84855a680f903c",
        },
      ],
      maxOptions: 5,
    },
    commandCodes: ["groza"],
    __v: 0,
    category: "Assault Rifle",
  },
  {
    _id: "60df48fbbf84855a680f88e6",
    displayName: "MP5 (CW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mp5-cw.png",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. Fast fire rate with low recoil. Good visibility and control while firing.",
      stats: {
        accuracy: 66,
        range: 52,
        mobility: 70,
        damage: 69,
        fireRate: 76,
        control: 77,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "20",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "11",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "4",
          optionId: "60e35b61bf84855a680f97fb",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "21",
          optionId: "60e35bd7bf84855a680f9807",
        },
        {
          orderPlacement: "13",
          optionId: "60e35bb9bf84855a680f9803",
        },
        {
          orderPlacement: "30",
          optionId: "60e35be6bf84855a680f980b",
        },
        {
          orderPlacement: "39",
          optionId: "60e35bf2bf84855a680f980f",
        },
        {
          orderPlacement: "48",
          optionId: "60e35bffbf84855a680f9813",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "32",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "47",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "55",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e35c1bbf84855a680f9817",
        },
        {
          orderPlacement: "16",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "25",
          optionId: "60e353d7bf84855a680f9697",
        },
        {
          orderPlacement: "34",
          optionId: "60e35c3abf84855a680f981b",
        },
        {
          orderPlacement: "43",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "51",
          optionId: "60e1da9abf84855a680f8f31",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e35d16bf84855a680f9821",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["cwmp5", "mp5cw"],
    category: "SMG",
  },
  {
    _id: "60df5c07bf84855a680f8924",
    displayName: "SA87",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/sa87.png",
    gameInfo: {
      blurb:
        "A fully automatic bullpup light machine gun. Lower rate of fire and 5.56mm ammunition keep this rifle stable and effective at long ranges.",
      stats: {
        accuracy: 73,
        range: 77,
        mobility: 53,
        damage: 74,
        fireRate: 64,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "10",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "21",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "17",
          optionId: "60df7e5abf84855a680f8c12",
        },
        {
          orderPlacement: "6",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "34",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "9",
          optionId: "60e3ca1c8a26dd1acccc5b2f",
        },
        {
          orderPlacement: "44",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "20",
          optionId: "60e3ca228a26dd1acccc5b31",
        },
        {
          orderPlacement: "38",
          optionId: "60e3ca268a26dd1acccc5b33",
        },
        {
          orderPlacement: "11",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "53",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "35",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "23",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "28",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "43",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "12",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "2",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "15",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "18",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "29",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "22",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "25",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "33",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "36",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "39",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "42",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "45",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "47",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "49",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "54",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "51",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "56",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "16",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "37",
          optionId: "60df7471bf84855a680f8aa5",
        },
        {
          orderPlacement: "13",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "24",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "32",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "41",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "46",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "55",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "4",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "8",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "14",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "19",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "30",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "26",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "48",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "40",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "52",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "31",
          optionId: "60e3ca4d8a26dd1acccc5b37",
        },
        {
          orderPlacement: "27",
          optionId: "60e3ca458a26dd1acccc5b35",
        },
        {
          orderPlacement: "50",
          optionId: "60e371ccbf84855a680f9a32",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["sa87"],
    category: "LMG",
  },
  {
    _id: "60df5fcbbf84855a680f8949",
    displayName: "Kar98k (MW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/kar98k.png",
    gameInfo: {
      blurb:
        "Bolt action rifle chambered in 7.92 Mauser. A WW2 relic that is still extremely lethal in the hands of a rebel marksman.",
      stats: {
        accuracy: 76,
        range: 75,
        mobility: 53,
        damage: 82,
        fireRate: 40,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "8",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "20",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "4",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "16",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "33",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "9",
          optionId: "60e3def48a26dd1acccc5e3d",
        },
        {
          orderPlacement: "45",
          optionId: "60e3defd8a26dd1acccc5e41",
        },
        {
          orderPlacement: "24",
          optionId: "60e3def78a26dd1acccc5e3f",
        },
        {
          orderPlacement: "38",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "49",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "13",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "27",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "29",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "41",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "5",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "15",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "10",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "12",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "7",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "17",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "21",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "19",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "23",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "25",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "28",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "34",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "36",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "31",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "39",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "42",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "44",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "50",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "47",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "30",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "6",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "18",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "11",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "22",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "32",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "35",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "40",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "37",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
        {
          orderPlacement: "46",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "48",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "14",
          optionId: "60e3df148a26dd1acccc5e45",
        },
        {
          orderPlacement: "26",
          optionId: "60e3df1b8a26dd1acccc5e47",
        },
        {
          orderPlacement: "43",
          optionId: "60e3df288a26dd1acccc5e49",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["kar98", "kar", "kar98k"],
    category: "Marksman Rifle",
  },
  {
    _id: "60df4b35bf84855a680f88fa",
    displayName: "MP5 (MW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mp5-mw.png",
    gameInfo: {
      blurb:
        "A fully automatic 9mm submachine gun. A perfect balance of stability, mobility, and lethality.",
      stats: {
        accuracy: 66,
        range: 55,
        mobility: 73,
        damage: 69,
        fireRate: 74.75,
        control: 77,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "27",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "17",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "12",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "20",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "30",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "16",
          optionId: "60e3793fbf84855a680f9b50",
        },
        {
          orderPlacement: "36",
          optionId: "60e37949bf84855a680f9b54",
        },
        {
          orderPlacement: "45",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "43",
          optionId: "60e37941bf84855a680f9b52",
        },
        {
          orderPlacement: "7",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "53",
          optionId: "60e37952bf84855a680f9b56",
        },
        {
          orderPlacement: "25",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "11",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "57",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "32",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "48",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "5",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "14",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "21",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "26",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "23",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "18",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "29",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "33",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "35",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "38",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "41",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "46",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "49",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "54",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "52",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "56",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "13",
          optionId: "60e2248abf84855a680f937e",
        },
        {
          orderPlacement: "24",
          optionId: "60e3799dbf84855a680f9b5e",
        },
        {
          orderPlacement: "9",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "19",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "34",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "39",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "55",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "4",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "6",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "15",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "31",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "37",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "44",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "40",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "47",
          optionId: "60df7521bf84855a680f8abf",
        },
        {
          orderPlacement: "50",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "22",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "42",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "28",
          optionId: "60e379cabf84855a680f9b62",
        },
        {
          orderPlacement: "51",
          optionId: "60e379dfbf84855a680f9b66",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mwmp5", "mp5mw"],
    category: "SMG",
  },
  {
    _id: "60df4a92bf84855a680f88f4",
    displayName: "Fennec",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/fennec.png",
    gameInfo: {
      blurb:
        "An aggressive full auto submachine gun with buttery smooth recoil and a blazing fast rate of fire that is exceptional for strategic room clearing and holding down the front line.",
      stats: {
        accuracy: 71,
        range: 50,
        mobility: 70,
        damage: 65,
        fireRate: 82,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "11",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "27",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "18",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "13",
          optionId: "60df7e5abf84855a680f8c12",
        },
        {
          orderPlacement: "5",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "52",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "38",
          optionId: "60e373b8bf84855a680f9a86",
        },
        {
          orderPlacement: "32",
          optionId: "60e3733fbf84855a680f9a76",
        },
        {
          orderPlacement: "50",
          optionId: "60e37347bf84855a680f9a78",
        },
        {
          orderPlacement: "16",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "24",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "49",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "44",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "14",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "29",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "2",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "4",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "6",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "9",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "12",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "15",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "25",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "21",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "28",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "34",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "37",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "35",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "41",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "43",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "45",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "48",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "53",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "51",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "40",
          optionId: "60e36463bf84855a680f9977",
        },
        {
          orderPlacement: "20",
          optionId: "60e37356bf84855a680f9a7a",
        },
        {
          orderPlacement: "8",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "30",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "17",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "36",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "46",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "7",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "23",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "19",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "26",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "31",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "39",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "47",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "22",
          optionId: "60e37372bf84855a680f9a7e",
        },
        {
          orderPlacement: "33",
          optionId: "60df8519bf84855a680f8c78",
        },
        {
          orderPlacement: "42",
          optionId: "60e37385bf84855a680f9a82",
        },
        {
          orderPlacement: "54",
          optionId: "60df738dbf84855a680f8a85",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["fennec"],
    category: "SMG",
  },
  {
    _id: "60df610bbf84855a680f8953",
    displayName: "M82",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m82.png",
    gameInfo: {
      blurb:
        "Semi-auto sniper rifle. Heavy recoil with slow handling. 1-shot kill to the head or upper chest. Hold button while ADS to steady.",
      stats: {
        accuracy: 80,
        range: 73,
        mobility: 45,
        damage: 84,
        fireRate: 51,
        control: 60,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e3e7b88a26dd1acccc5ff4",
        },
        {
          orderPlacement: "29",
          optionId: "60e3e2b78a26dd1acccc5ee2",
        },
        {
          orderPlacement: "20",
          optionId: "60e3e2a98a26dd1acccc5ede",
        },
        {
          orderPlacement: "38",
          optionId: "60e3e2bc8a26dd1acccc5ee4",
        },
        {
          orderPlacement: "11",
          optionId: "60e3e7bd8a26dd1acccc5ff6",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "46",
          optionId: "60e3e2c38a26dd1acccc5ee6",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "4",
          optionId: "60e3e7d18a26dd1acccc5ffa",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "13",
          optionId: "60e3e7e08a26dd1acccc5ffe",
        },
        {
          orderPlacement: "21",
          optionId: "60e3e7ec8a26dd1acccc6002",
        },
        {
          orderPlacement: "30",
          optionId: "60e3e7f78a26dd1acccc6006",
        },
        {
          orderPlacement: "48",
          optionId: "60e3e81a8a26dd1acccc600e",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "39",
          optionId: "60e3e8098a26dd1acccc600a",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "17",
          optionId: "60e3e3248a26dd1acccc5ef8",
        },
        {
          orderPlacement: "37",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "52",
          optionId: "60e3e3308a26dd1acccc5efc",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "41",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e3e33e8a26dd1acccc5efe",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "25",
          optionId: "60e3e3508a26dd1acccc5f04",
        },
        {
          orderPlacement: "34",
          optionId: "60e3e3578a26dd1acccc5f06",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e3e35f8a26dd1acccc5f08",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e20f2fbf84855a680f91bc",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["m82"],
    category: "Sniper Rifle",
  },
  {
    _id: "60ded254bf84855a680f8885",
    displayName: "FARA 83",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/fara-83.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. High fire rate and muzzle velocity provides reliable stopping power from long range. Slightly heavier recoil with slower handling speeds.",
      stats: {
        accuracy: 69,
        range: 68,
        mobility: 63,
        damage: 80,
        fireRate: 73,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "47",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "29",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "38",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "46",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "4",
          optionId: "60e1ee3ebf84855a680f9094",
        },
        {
          orderPlacement: "13",
          optionId: "60e1ee4fbf84855a680f9096",
        },
        {
          orderPlacement: "21",
          optionId: "60e1ee5abf84855a680f9098",
        },
        {
          orderPlacement: "30",
          optionId: "60e1ee63bf84855a680f909a",
        },
        {
          orderPlacement: "39",
          optionId: "60e1ee77bf84855a680f909c",
        },
        {
          orderPlacement: "48",
          optionId: "60e1ee8bbf84855a680f909e",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "31",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60e1def0bf84855a680f8f97",
        },
        {
          orderPlacement: "50",
          optionId: "60e1def4bf84855a680f8f99",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e464bf84855a680f8f9d",
        },
        {
          orderPlacement: "16",
          optionId: "60e1e46ebf84855a680f8f9f",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "34",
          optionId: "60e20849bf84855a680f90a0",
        },
        {
          orderPlacement: "43",
          optionId: "60e1e486bf84855a680f8fa5",
        },
        {
          orderPlacement: "51",
          optionId: "60e1e48fbf84855a680f8fa7",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "53",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "54",
          optionId: "60e1e4dcbf84855a680f8faf",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["fara"],
    category: "Assault Rifle",
  },
  {
    _id: "60ded45bbf84855a680f8895",
    displayName: "Kilo 141",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/kilo-141.png",
    gameInfo: {
      blurb:
        "Fully automatic assault rifle with an ergonomic design that improves handling, and a steady fire rate helps stay on target.",
      stats: {
        accuracy: 70,
        range: 64,
        mobility: 61,
        damage: 73,
        fireRate: 72.5,
        control: 72,
      },
      availableOptions: [
        {
          orderPlacement: "5",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "19",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "25",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "37",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "48",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "68",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "10",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "23",
          optionId: "60df7251bf84855a680f8a4b",
        },
        {
          orderPlacement: "38",
          optionId: "60df725cbf84855a680f8a4d",
        },
        {
          orderPlacement: "52",
          optionId: "60df7261bf84855a680f8a4f",
        },
        {
          orderPlacement: "20",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "43",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "57",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "4",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "6",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "8",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "13",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "22",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "26",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "29",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "31",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "34",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "41",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "46",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "51",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "53",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "56",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "59",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "61",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "64",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "67",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "69",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "14",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "39",
          optionId: "60df7388bf84855a680f8a83",
        },
        {
          orderPlacement: "50",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "65",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "12",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "18",
          optionId: "60df73c2bf84855a680f8a8b",
        },
        {
          orderPlacement: "21",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "24",
          optionId: "60df73d6bf84855a680f8a8f",
        },
        {
          orderPlacement: "28",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "32",
          optionId: "60df73efbf84855a680f8a93",
        },
        {
          orderPlacement: "35",
          optionId: "60df740dbf84855a680f8a95",
        },
        {
          orderPlacement: "40",
          optionId: "60df742fbf84855a680f8a97",
        },
        {
          orderPlacement: "45",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "49",
          optionId: "60df7442bf84855a680f8a9b",
        },
        {
          orderPlacement: "55",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "63",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "66",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "9",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "58",
          optionId: "60df7479bf84855a680f8aa7",
        },
        {
          orderPlacement: "15",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "42",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "60",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "7",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "11",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "16",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "27",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "33",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "36",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "44",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "54",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "62",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "30",
          optionId: "60df7471bf84855a680f8aa5",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["kilo"],
    category: "Assault Rifle",
  },
  {
    _id: "60df5accbf84855a680f8918",
    displayName: "RPD",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/rpd.png",
    gameInfo: {
      blurb:
        "Full-auto light machine gun. Reliable stopping power with superior handling and movement speeds.",
      stats: {
        accuracy: 74,
        range: 72,
        mobility: 47,
        damage: 78,
        fireRate: 71,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e1dd79bf84855a680f8f7f",
        },
        {
          orderPlacement: "29",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "11",
          optionId: "60e1dd86bf84855a680f8f81",
        },
        {
          orderPlacement: "38",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "46",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "31",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "23",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "21",
          optionId: "60e39fa6bf84855a680fa10a",
        },
        {
          orderPlacement: "4",
          optionId: "60e39f64bf84855a680fa102",
        },
        {
          orderPlacement: "13",
          optionId: "60e39f72bf84855a680fa104",
        },
        {
          orderPlacement: "30",
          optionId: "60e39fb5bf84855a680fa10e",
        },
        {
          orderPlacement: "39",
          optionId: "60e39fc6bf84855a680fa112",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "48",
          optionId: "60e39fc9bf84855a680fa114",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "52",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "55",
          optionId: "60e1e510bf84855a680f8fb1",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e1def0bf84855a680f8f97",
        },
        {
          orderPlacement: "50",
          optionId: "60e1def4bf84855a680f8f99",
        },
        {
          orderPlacement: "8",
          optionId: "60e39c31bf84855a680fa06e",
        },
        {
          orderPlacement: "25",
          optionId: "60e39c3fbf84855a680fa070",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "34",
          optionId: "60e39ce1bf84855a680fa076",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "51",
          optionId: "60e3a0aabf84855a680fa11a",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "54",
          optionId: "60e1e4dcbf84855a680f8faf",
        },
        {
          orderPlacement: "45",
          optionId: "60e1e4d7bf84855a680f8fad",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["rpd"],
    category: "LMG",
  },
  {
    _id: "60df5fa3bf84855a680f8947",
    displayName: "MK2 Carbine",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mk2-carbine.png",
    gameInfo: {
      blurb:
        "Highly accurate lever action rifle. Will neutralize an enemy with one well placed round to the head or chest.",
      stats: {
        accuracy: 78,
        range: 68,
        mobility: 66,
        damage: 80,
        fireRate: 45,
        control: 60,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "17",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "7",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "28",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "12",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "32",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "10",
          optionId: "60e3dd338a26dd1acccc5df8",
        },
        {
          orderPlacement: "41",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "22",
          optionId: "60e3dd388a26dd1acccc5dfa",
        },
        {
          orderPlacement: "36",
          optionId: "60e3dd3a8a26dd1acccc5dfc",
        },
        {
          orderPlacement: "39",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "45",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "4",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "13",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "31",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "6",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "9",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "15",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "24",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
        {
          orderPlacement: "20",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "29",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "38",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "35",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "49",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "43",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "3",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "8",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "11",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "14",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "16",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "21",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "18",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "23",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "25",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "27",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "34",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "30",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "37",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "40",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "42",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "44",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "46",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "48",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "50",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "19",
          optionId: "60e3dd468a26dd1acccc5dfe",
        },
        {
          orderPlacement: "26",
          optionId: "60e3dd4e8a26dd1acccc5e00",
        },
        {
          orderPlacement: "33",
          optionId: "60e3dd548a26dd1acccc5e02",
        },
        {
          orderPlacement: "47",
          optionId: "60e3dd5c8a26dd1acccc5e04",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mk2carbine", "mk2"],
    category: "Marksman Rifle",
  },
  {
    _id: "60ded078bf84855a680f885f",
    displayName: "C58",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/c58.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. High damage at close range with a slower fire rate. Fast bullet velocity and reliable recoil control with less ammo capacity.",
      stats: {
        accuracy: 68,
        range: 60,
        mobility: 63,
        damage: 77,
        fireRate: 65,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "60e1dd79bf84855a680f8f7f",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dd86bf84855a680f8f81",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "2",
          optionId: "60e382a1bf84855a680f9c4a",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "1",
          optionId: "60e38292bf84855a680f9c46",
        },
        {
          orderPlacement: "3",
          optionId: "60e382b1bf84855a680f9c4e",
        },
        {
          orderPlacement: "4",
          optionId: "60e382b9bf84855a680f9c50",
        },
        {
          orderPlacement: "6",
          optionId: "60e382cfbf84855a680f9c58",
        },
        {
          orderPlacement: "5",
          optionId: "60e1debfbf84855a680f8f93",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "12",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "8",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "9",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "10",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "4",
          optionId: "60e35463bf84855a680f96a7",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "1",
          optionId: "60e1e8ecbf84855a680f903e",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "3",
          optionId: "60e353d7bf84855a680f9697",
        },
        {
          orderPlacement: "4",
          optionId: "60e35a20bf84855a680f97b9",
        },
        {
          orderPlacement: "6",
          optionId: "60e3591cbf84855a680f975d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "4",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["c58"],
    category: "Assault Rifle",
  },
  {
    _id: "60df5c3ebf84855a680f8926",
    displayName: "FiNN",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/finn.png",
    gameInfo: {
      blurb:
        "An ultra-light open bolt 5.56 machine gun with a low cyclic rate and advanced recoil controls, giving the FiNN exceptional full-auto accuracy.",
      stats: {
        accuracy: 79,
        range: 72,
        mobility: 54,
        damage: 74,
        fireRate: 66,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "19",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "13",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "29",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "7",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "9",
          optionId: "60e3ccb18a26dd1acccc5b78",
        },
        {
          orderPlacement: "40",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "52",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "20",
          optionId: "60e3ccbe8a26dd1acccc5b7c",
        },
        {
          orderPlacement: "15",
          optionId: "60e3ccb98a26dd1acccc5b7a",
        },
        {
          orderPlacement: "33",
          optionId: "60e3ccd38a26dd1acccc5b80",
        },
        {
          orderPlacement: "27",
          optionId: "60e3ccc78a26dd1acccc5b7e",
        },
        {
          orderPlacement: "39",
          optionId: "60e3ccda8a26dd1acccc5b82",
        },
        {
          orderPlacement: "26",
          optionId: "60e3ccf58a26dd1acccc5b86",
        },
        {
          orderPlacement: "51",
          optionId: "60e3cce58a26dd1acccc5b84",
        },
        {
          orderPlacement: "37",
          optionId: "60e3ccfb8a26dd1acccc5b88",
        },
        {
          orderPlacement: "3",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "53",
          optionId: "60e3ccff8a26dd1acccc5b8a",
        },
        {
          orderPlacement: "6",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "11",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "14",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "23",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "25",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "28",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "36",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "41",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "34",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "31",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "50",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "45",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "43",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "46",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "48",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "54",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "56",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "49",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "18",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "24",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "32",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "55",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "44",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "12",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "22",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "16",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "35",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "42",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "38",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "58",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "21",
          optionId: "60e3cd0b8a26dd1acccc5b8c",
        },
        {
          orderPlacement: "30",
          optionId: "60e3cd168a26dd1acccc5b8e",
        },
        {
          orderPlacement: "47",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "57",
          optionId: "60e3cd208a26dd1acccc5b90",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["finn"],
    category: "LMG",
  },
  {
    _id: "60df5cafbf84855a680f8928",
    displayName: "DMR 14",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/dmr-14.png",
    gameInfo: {
      blurb:
        "Semi-auto tactical rifle. Increased fire rate with minimal recoil. Maintains reliable damage over longer range encounters.",
      stats: {
        accuracy: 77,
        range: 73,
        mobility: 60,
        damage: 76,
        fireRate: 55,
        control: 78,
      },
      availableOptions: [
        {
          orderPlacement: "11",
          optionId: "60e1dd86bf84855a680f8f81",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dd79bf84855a680f8f7f",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "20",
          optionId: "60e3ceee8a26dd1acccc5bdf",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "46",
          optionId: "60e3ceff8a26dd1acccc5be3",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "13",
          optionId: "60e3ce998a26dd1acccc5bcf",
        },
        {
          orderPlacement: "21",
          optionId: "60e3ceac8a26dd1acccc5bd3",
        },
        {
          orderPlacement: "4",
          optionId: "60e3ce8f8a26dd1acccc5bcd",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "30",
          optionId: "60e3cebb8a26dd1acccc5bd5",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "39",
          optionId: "60e3ceca8a26dd1acccc5bd9",
        },
        {
          orderPlacement: "48",
          optionId: "60e3cece8a26dd1acccc5bdb",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "52",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e3cf768a26dd1acccc5be7",
        },
        {
          orderPlacement: "16",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "34",
          optionId: "60e3cf8f8a26dd1acccc5bef",
        },
        {
          orderPlacement: "25",
          optionId: "60e3cf7f8a26dd1acccc5beb",
        },
        {
          orderPlacement: "51",
          optionId: "60e3cfae8a26dd1acccc5bf3",
        },
        {
          orderPlacement: "43",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["dmr"],
    category: "Tactical Rifle",
  },
  {
    _id: "60df671dbf84855a680f8982",
    displayName: ".50 GS",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/50-gs.png",
    gameInfo: {
      blurb:
        "The most powerful semi-automatic handgun available, deals heavy damage up to intermediate ranges.",
      stats: {
        accuracy: 54,
        range: 52,
        mobility: 77,
        damage: 65,
        fireRate: 53,
        control: 60,
      },
      availableOptions: [
        {
          orderPlacement: "8",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "3",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "15",
          optionId: "60e3f78d8a26dd1acccc62a6",
        },
        {
          orderPlacement: "11",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "21",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "41",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "27",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "7",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "38",
          optionId: "60e3fac08a26dd1acccc6344",
        },
        {
          orderPlacement: "13",
          optionId: "60e3fabd8a26dd1acccc6342",
        },
        {
          orderPlacement: "22",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "39",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "25",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "18",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "35",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "5",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "9",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "12",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "17",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "19",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "32",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "29",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "23",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "34",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "36",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "40",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "31",
          optionId: "60e3fadf8a26dd1acccc634a",
        },
        {
          orderPlacement: "16",
          optionId: "60e3d9c98a26dd1acccc5d51",
        },
        {
          orderPlacement: "4",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "6",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "14",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "20",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "24",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "28",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "30",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "33",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "37",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "10",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "26",
          optionId: "60e3f7d68a26dd1acccc62b8",
        },
        {
          orderPlacement: "42",
          optionId: "60e3f7db8a26dd1acccc62ba",
        },
        {
          orderPlacement: "80",
          optionId: "60e3f8098a26dd1acccc62c0",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["deagle", "50gs"],
    category: "Handgun",
  },
  {
    _id: "60df5053bf84855a680f8910",
    displayName: "JAK-12",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/jak-12.png",
    gameInfo: {
      blurb:
        "Fully automatic open bolt shotgun with a recoil reducing gas blowback system. This combat shotgun unloads high volumes of lead down range at a steady rate.",
      stats: {
        accuracy: 56,
        range: 40,
        mobility: 70,
        damage: 75,
        fireRate: 53,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "19",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "3",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "29",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "21",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "15",
          optionId: "60e39a15bf84855a680fa00b",
        },
        {
          orderPlacement: "31",
          optionId: "60e38f62bf84855a680f9e17",
        },
        {
          orderPlacement: "49",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "37",
          optionId: "60e3910fbf84855a680f9e67",
        },
        {
          orderPlacement: "30",
          optionId: "60e39a1cbf84855a680fa00d",
        },
        {
          orderPlacement: "9",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "27",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "44",
          optionId: "60e39a23bf84855a680fa00f",
        },
        {
          orderPlacement: "41",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "4",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "10",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "23",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "2",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "18",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "13",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "22",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "25",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "32",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "35",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "38",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "48",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "43",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "51",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "12",
          optionId: "60e39a57bf84855a680fa013",
        },
        {
          orderPlacement: "54",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "33",
          optionId: "60e38fabbf84855a680f9e23",
        },
        {
          orderPlacement: "40",
          optionId: "60e39a71bf84855a680fa015",
        },
        {
          orderPlacement: "46",
          optionId: "60e39a79bf84855a680fa017",
        },
        {
          orderPlacement: "47",
          optionId: "60e39a88bf84855a680fa019",
        },
        {
          orderPlacement: "24",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "14",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "34",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "42",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "11",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "52",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "16",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "8",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "20",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "39",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "45",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "26",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "36",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "53",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "50",
          optionId: "60e39aa5bf84855a680fa01f",
        },
        {
          orderPlacement: "28",
          optionId: "60e39aa1bf84855a680fa01d",
        },
        {
          orderPlacement: "17",
          optionId: "60e39a97bf84855a680fa01b",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["jak12", "jak"],
    category: "Shotgun",
  },
  {
    _id: "60df4eddbf84855a680f8902",
    displayName: "Gallo SA12",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/gallo-sa12.png",
    gameInfo: {
      blurb:
        "Semi-auto shotgun. Reliable damage and pellet spread. Heavy recoil and low visibility when sustaining fire.",
      stats: {
        accuracy: 50,
        range: 43,
        mobility: 73,
        damage: 76,
        fireRate: 44,
        control: 77,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e38840bf84855a680f9d40",
        },
        {
          orderPlacement: "9",
          optionId: "60e38846bf84855a680f9d42",
        },
        {
          orderPlacement: "20",
          optionId: "60e3884ebf84855a680f9d44",
        },
        {
          orderPlacement: "14",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "26",
          optionId: "60e38855bf84855a680f9d46",
        },
        {
          orderPlacement: "31",
          optionId: "60e38859bf84855a680f9d48",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "16",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "28",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "33",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "15",
          optionId: "60e38ce2bf84855a680f9d9d",
        },
        {
          orderPlacement: "10",
          optionId: "60e38cd5bf84855a680f9d9b",
        },
        {
          orderPlacement: "4",
          optionId: "60e38cc6bf84855a680f9d99",
        },
        {
          orderPlacement: "27",
          optionId: "60e38cfdbf84855a680f9da1",
        },
        {
          orderPlacement: "21",
          optionId: "60e38ceebf84855a680f9d9f",
        },
        {
          orderPlacement: "32",
          optionId: "60e38d07bf84855a680f9da3",
        },
        {
          orderPlacement: "19",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "36",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "23",
          optionId: "60e38d5abf84855a680f9da7",
        },
        {
          orderPlacement: "6",
          optionId: "60e38d55bf84855a680f9da5",
        },
        {
          orderPlacement: "7",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "12",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "29",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "17",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "24",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "34",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "8",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "25",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "18",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "13",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "30",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "35",
          optionId: "60e1da2bbf84855a680f8f11",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["gallo"],
    category: "Shotgun",
  },
  {
    _id: "60df4bcfbf84855a680f88fe",
    displayName: "ISO",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/iso.png",
    gameInfo: {
      blurb:
        "Precision crafted 9mm submachine gun with a fast rate of fire. This lightweight and reliable firearm is designed to control the close-range battlefield.",
      stats: {
        accuracy: 64.5,
        range: 51,
        mobility: 74,
        damage: 68,
        fireRate: 76.5,
        control: 76.5,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "12",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "29",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "10",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "16",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "15",
          optionId: "60e37d25bf84855a680f9bf0",
        },
        {
          orderPlacement: "51",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "41",
          optionId: "60e37d39bf84855a680f9bf6",
        },
        {
          orderPlacement: "36",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "27",
          optionId: "60e37d30bf84855a680f9bf4",
        },
        {
          orderPlacement: "48",
          optionId: "60e37d3ebf84855a680f9bf8",
        },
        {
          orderPlacement: "23",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "8",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "14",
          optionId: "60e37d51bf84855a680f9bfa",
        },
        {
          orderPlacement: "52",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "26",
          optionId: "60e37d57bf84855a680f9bfc",
        },
        {
          orderPlacement: "46",
          optionId: "60e37d5dbf84855a680f9bfe",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "3",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "13",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "17",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "21",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "25",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "28",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "32",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "35",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "37",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "40",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "42",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "45",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "49",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "53",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "55",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "19",
          optionId: "60e34416bf84855a680f9509",
        },
        {
          orderPlacement: "38",
          optionId: "60e37d76bf84855a680f9c02",
        },
        {
          orderPlacement: "6",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "33",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "20",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "44",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "54",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "4",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "9",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "11",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "18",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "24",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "31",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "39",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "34",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "47",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "30",
          optionId: "60e1cf42bf84855a680f8d99",
        },
        {
          orderPlacement: "22",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "50",
          optionId: "60e37d95bf84855a680f9c08",
        },
        {
          orderPlacement: "43",
          optionId: "60e37d91bf84855a680f9c06",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["iso"],
    category: "SMG",
  },
  {
    _id: "60df49e3bf84855a680f88ee",
    displayName: "Striker 45",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/striker-45.png",
    gameInfo: {
      blurb:
        "A hard hitting submachine gun chambered in .45 Auto that will shred at longer distances than other weapons in its class. Moderate rate of fire keeps the gun in control while fully automatic.",
      stats: {
        accuracy: 68,
        range: 61,
        mobility: 72,
        damage: 75,
        fireRate: 64,
        control: 72,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "29",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "16",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "10",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "12",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "37",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "51",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "27",
          optionId: "60e3642abf84855a680f996d",
        },
        {
          orderPlacement: "15",
          optionId: "60e36421bf84855a680f996b",
        },
        {
          orderPlacement: "42",
          optionId: "60e36431bf84855a680f996f",
        },
        {
          orderPlacement: "8",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "52",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "23",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "14",
          optionId: "60e3643fbf84855a680f9971",
        },
        {
          orderPlacement: "26",
          optionId: "60e36445bf84855a680f9973",
        },
        {
          orderPlacement: "3",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "47",
          optionId: "60e3644ebf84855a680f9975",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "13",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "17",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "21",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "32",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "28",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "25",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "34",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "36",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "38",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "43",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "41",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "46",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "55",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "50",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "53",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "49",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "19",
          optionId: "60e36463bf84855a680f9977",
        },
        {
          orderPlacement: "20",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "6",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "39",
          optionId: "60e2248abf84855a680f937e",
        },
        {
          orderPlacement: "33",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "45",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "11",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "54",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "9",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "4",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "18",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "24",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "31",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "35",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "40",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "48",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "22",
          optionId: "60e3665abf84855a680f998b",
        },
        {
          orderPlacement: "30",
          optionId: "60e36677bf84855a680f998f",
        },
        {
          orderPlacement: "44",
          optionId: "60e36685bf84855a680f9991",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["striker45", "striker"],
    category: "SMG",
  },
  {
    _id: "60ded5e6bf84855a680f88a5",
    displayName: "AS VAL",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/as-val.png",
    gameInfo: {
      blurb:
        "Chambered in subsonic 9x39mm and integrally suppressed, the AS VAL is a powerhouse built for stealth, accuracy, and penetration. This weapon will excel in the hands of an operator able to control heavy recoil and a high rate of fire.",
      stats: {
        accuracy: 69,
        range: 59,
        mobility: 64,
        damage: 76,
        fireRate: 77,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "20",
          optionId: "60e34d5bbf84855a680f960d",
        },
        {
          orderPlacement: "10",
          optionId: "60e34d54bf84855a680f960b",
        },
        {
          orderPlacement: "3",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "15",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "28",
          optionId: "60e34d69bf84855a680f960f",
        },
        {
          orderPlacement: "34",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "47",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "19",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "9",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "4",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "11",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "7",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "8",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "6",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "16",
          optionId: "60e34ddabf84855a680f961b",
        },
        {
          orderPlacement: "18",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "25",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "22",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "27",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "29",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "33",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "35",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "39",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "40",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "44",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "45",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "50",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "52",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "53",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "17",
          optionId: "60e34416bf84855a680f9509",
        },
        {
          orderPlacement: "42",
          optionId: "60e34dc1bf84855a680f9619",
        },
        {
          orderPlacement: "21",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "24",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "13",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "30",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "37",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "49",
          optionId: "60e22172bf84855a680f9312",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "12",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "23",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "26",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "32",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "36",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "41",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "43",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "48",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "14",
          optionId: "60e34d78bf84855a680f9611",
        },
        {
          orderPlacement: "51",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "31",
          optionId: "60e34d8ebf84855a680f9613",
        },
        {
          orderPlacement: "38",
          optionId: "60e34da1bf84855a680f9615",
        },
        {
          orderPlacement: "46",
          optionId: "60e34da5bf84855a680f9617",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["asval"],
    category: "Assault Rifle",
  },
  {
    _id: "60df4fabbf84855a680f890a",
    displayName: "725",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/725.png",
    gameInfo: {
      blurb:
        "Break action shotgun with 2 round capacity. A long back-bored barrel and cylindrical choke keeps spread tight and lethal over extended ranges.",
      stats: {
        accuracy: 70,
        range: 56,
        mobility: 62,
        damage: 85,
        fireRate: 46,
        control: 60,
      },
      availableOptions: [
        {
          orderPlacement: "4",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "16",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "26",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "11",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "2",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "31",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "37",
          optionId: "60e38f62bf84855a680f9e17",
        },
        {
          orderPlacement: "44",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "25",
          optionId: "60e3946fbf84855a680f9f12",
        },
        {
          orderPlacement: "12",
          optionId: "60e39465bf84855a680f9f10",
        },
        {
          orderPlacement: "40",
          optionId: "60e3947abf84855a680f9f14",
        },
        {
          orderPlacement: "48",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "15",
          optionId: "60e394f3bf84855a680f9f1a",
        },
        {
          orderPlacement: "21",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "27",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "50",
          optionId: "60e39500bf84855a680f9f1e",
        },
        {
          orderPlacement: "3",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "23",
          optionId: "60e394fabf84855a680f9f1c",
        },
        {
          orderPlacement: "6",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "9",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "14",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "34",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "18",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "22",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "30",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "36",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "39",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "45",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "38",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "43",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "47",
          optionId: "60e395afbf84855a680f9f30",
        },
        {
          orderPlacement: "49",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "32",
          optionId: "60e39516bf84855a680f9f22",
        },
        {
          orderPlacement: "7",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "19",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "29",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "42",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "46",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "8",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "10",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "17",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "28",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "20",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "35",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "41",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "52",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "24",
          optionId: "60e3952bbf84855a680f9f28",
        },
        {
          orderPlacement: "13",
          optionId: "60e39527bf84855a680f9f26",
        },
        {
          orderPlacement: "33",
          optionId: "60e39531bf84855a680f9f2a",
        },
        {
          orderPlacement: "51",
          optionId: "60e39535bf84855a680f9f2c",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["725"],
    category: "Shotgun",
  },
  {
    _id: "60df613fbf84855a680f8955",
    displayName: "ZRG 20mm",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/zrg-20mm.png",
    gameInfo: {
      blurb:
        "Bolt-action sniper rifle. High damage, 1-shot kill to the head, chest, and shoulders. Hold button while ADS to steady.",
      stats: {
        accuracy: 83,
        range: 81,
        mobility: 45,
        damage: 88,
        fireRate: 51,
        control: 60,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "17",
          optionId: "60e3e3248a26dd1acccc5ef8",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "37",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "3",
          optionId: "60e3e9a18a26dd1acccc604c",
        },
        {
          orderPlacement: "52",
          optionId: "60e3e3308a26dd1acccc5efc",
        },
        {
          orderPlacement: "20",
          optionId: "60e3e2a98a26dd1acccc5ede",
        },
        {
          orderPlacement: "11",
          optionId: "60e3e9a48a26dd1acccc604e",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "29",
          optionId: "60e3e2b78a26dd1acccc5ee2",
        },
        {
          orderPlacement: "46",
          optionId: "60e3e2c38a26dd1acccc5ee6",
        },
        {
          orderPlacement: "13",
          optionId: "60e3ea278a26dd1acccc6054",
        },
        {
          orderPlacement: "4",
          optionId: "60e3ea1d8a26dd1acccc6052",
        },
        {
          orderPlacement: "38",
          optionId: "60e3e2bc8a26dd1acccc5ee4",
        },
        {
          orderPlacement: "21",
          optionId: "60e3ea338a26dd1acccc6056",
        },
        {
          orderPlacement: "30",
          optionId: "60e3ea3c8a26dd1acccc6058",
        },
        {
          orderPlacement: "39",
          optionId: "60e3ea468a26dd1acccc605a",
        },
        {
          orderPlacement: "48",
          optionId: "60e3ea518a26dd1acccc605c",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e3ea9c8a26dd1acccc6060",
        },
        {
          orderPlacement: "25",
          optionId: "60e3eaab8a26dd1acccc6062",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "34",
          optionId: "60e3eabb8a26dd1acccc6066",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e3eac88a26dd1acccc6068",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["zrg"],
    category: "Sniper Rifle",
  },
  {
    _id: "60ded125bf84855a680f887f",
    displayName: "FFAR 1",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ffar1.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. Fast fire rate with quick reloading speeds. Modest damage and slightly less ammo capacity.",
      stats: {
        accuracy: 69,
        range: 64,
        mobility: 47,
        damage: 70,
        fireRate: 82,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "47",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d894bf84855a680f8edf",
        },
        {
          orderPlacement: "13",
          optionId: "60e1d8a2bf84855a680f8ee1",
        },
        {
          orderPlacement: "21",
          optionId: "60e1d8b0bf84855a680f8ee3",
        },
        {
          orderPlacement: "39",
          optionId: "60e1d8cbbf84855a680f8ee7",
        },
        {
          orderPlacement: "30",
          optionId: "60e1d8bdbf84855a680f8ee5",
        },
        {
          orderPlacement: "48",
          optionId: "60e1d8d9bf84855a680f8ee9",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "8",
          optionId: "60e1da77bf84855a680f8f27",
        },
        {
          orderPlacement: "16",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "25",
          optionId: "60e1da85bf84855a680f8f2b",
        },
        {
          orderPlacement: "34",
          optionId: "60e1da8bbf84855a680f8f2d",
        },
        {
          orderPlacement: "43",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "51",
          optionId: "60e1da9abf84855a680f8f31",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["ffar"],
    category: "Assault Rifle",
  },
  {
    _id: "60df5f71bf84855a680f8945",
    displayName: "EBR-14",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ebr-14.png",
    gameInfo: {
      blurb:
        "A semi-automatic long range marksman rifle balances rate of fire with lethality.",
      stats: {
        accuracy: 77,
        range: 73,
        mobility: 58,
        damage: 76,
        fireRate: 50,
        control: 72,
      },
      availableOptions: [
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "19",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "13",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "17",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "10",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "14",
          optionId: "60e3db258a26dd1acccc5d95",
        },
        {
          orderPlacement: "46",
          optionId: "60e3db308a26dd1acccc5d97",
        },
        {
          orderPlacement: "34",
          optionId: "60e3db378a26dd1acccc5d99",
        },
        {
          orderPlacement: "26",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "43",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "41",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "9",
          optionId: "60e3db4b8a26dd1acccc5d9d",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "49",
          optionId: "60e3db598a26dd1acccc5da1",
        },
        {
          orderPlacement: "7",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "12",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "15",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "18",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "29",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "24",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "33",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "38",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "47",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "51",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "4",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "11",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "16",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "20",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "22",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "25",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "28",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "31",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "32",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "35",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "37",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "45",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "40",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "42",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "48",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "50",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "54",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "21",
          optionId: "60e3dc3e8a26dd1acccc5daf",
        },
        {
          orderPlacement: "27",
          optionId: "60e3dc7c8a26dd1acccc5db7",
        },
        {
          orderPlacement: "52",
          optionId: "60e3dc8d8a26dd1acccc5dbb",
        },
        {
          orderPlacement: "39",
          optionId: "60e3db878a26dd1acccc5da9",
        },
        {
          orderPlacement: "3",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "23",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "30",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "36",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "53",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "44",
          optionId: "60df744fbf84855a680f8a9f",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["ebr"],
    category: "Marksman Rifle",
  },
  {
    _id: "60df5ba4bf84855a680f8920",
    displayName: "M91",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m91.png",
    gameInfo: {
      blurb:
        "Robust light machine gun sacrifices mobility for stability. High caliber sustained fire will neutralize targets at long ranges.",
      stats: {
        accuracy: 74,
        range: 77,
        mobility: 51,
        damage: 76,
        fireRate: 68,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "28",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "14",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "7",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "20",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "2",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "39",
          optionId: "60e3c6068a26dd1acccc5a98",
        },
        {
          orderPlacement: "38",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "52",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "54",
          optionId: "60e3c60c8a26dd1acccc5a9a",
        },
        {
          orderPlacement: "9",
          optionId: "60e3c6038a26dd1acccc5a96",
        },
        {
          orderPlacement: "19",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "13",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "50",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "32",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "35",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "45",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "11",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "3",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "6",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "15",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "27",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "23",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "25",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "30",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "40",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "33",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "42",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "36",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "44",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "46",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "51",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "53",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "49",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "56",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "26",
          optionId: "60e3c61f8a26dd1acccc5a9c",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "47",
          optionId: "60e3c6238a26dd1acccc5a9e",
        },
        {
          orderPlacement: "18",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "24",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "31",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "43",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "55",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "12",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "16",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "22",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "34",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "37",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "41",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "21",
          optionId: "60e1cf42bf84855a680f8d99",
        },
        {
          orderPlacement: "58",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "29",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "48",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "57",
          optionId: "60e3c6408a26dd1acccc5aa2",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["m91"],
    category: "LMG",
  },
  {
    _id: "60df5d0bbf84855a680f892c",
    displayName: "M16",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m16.png",
    gameInfo: {
      blurb:
        "Burst fire tactical rifle. Excellent burst fire accuracy when aiming down sights. Good visibility while firing with a slightly pronounced delay between bursts.",
      stats: {
        accuracy: 73,
        range: 62,
        mobility: 63,
        damage: 75,
        fireRate: 64,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "11",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "20",
          optionId: "60e3ceee8a26dd1acccc5bdf",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "46",
          optionId: "60e3ceff8a26dd1acccc5be3",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "4",
          optionId: "60e3d08f8a26dd1acccc5c2f",
        },
        {
          orderPlacement: "13",
          optionId: "60e1ee4fbf84855a680f9096",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "21",
          optionId: "60e3d0a78a26dd1acccc5c31",
        },
        {
          orderPlacement: "30",
          optionId: "60e3cebb8a26dd1acccc5bd5",
        },
        {
          orderPlacement: "39",
          optionId: "60e3d0ba8a26dd1acccc5c35",
        },
        {
          orderPlacement: "48",
          optionId: "60e3d0bf8a26dd1acccc5c37",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "52",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e464bf84855a680f8f9d",
        },
        {
          orderPlacement: "16",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "34",
          optionId: "60e3d0e18a26dd1acccc5c3b",
        },
        {
          orderPlacement: "43",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "51",
          optionId: "60e3d0ee8a26dd1acccc5c3f",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e20f2fbf84855a680f91bc",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["m16"],
    category: "Tactical Rifle",
  },
  {
    _id: "60df49abbf84855a680f88ec",
    displayName: "Bullfrog",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/bullfrog.png",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. Reliable damage with improved range. Large ammo pool and less accurate hipfire spread.",
      stats: {
        accuracy: 69,
        range: 52,
        mobility: 72,
        damage: 70,
        fireRate: 62,
        control: 74,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "11",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "29",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "20",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "38",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "46",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "31",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "4",
          optionId: "60e36267bf84855a680f9913",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "13",
          optionId: "60e36273bf84855a680f9915",
        },
        {
          orderPlacement: "21",
          optionId: "60e3627fbf84855a680f9917",
        },
        {
          orderPlacement: "30",
          optionId: "60e3628ebf84855a680f991b",
        },
        {
          orderPlacement: "39",
          optionId: "60e36298bf84855a680f991d",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "48",
          optionId: "60e3629fbf84855a680f991f",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "32",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "55",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "47",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e1def0bf84855a680f8f97",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "50",
          optionId: "60f0b5951d00452cd055422c",
        },
        {
          orderPlacement: "8",
          optionId: "60e362a9bf84855a680f9921",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "25",
          optionId: "60e362b5bf84855a680f9925",
        },
        {
          orderPlacement: "34",
          optionId: "60e362c0bf84855a680f9929",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e362cbbf84855a680f992b",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60e1e4d7bf84855a680f8fad",
        },
        {
          orderPlacement: "54",
          optionId: "60e1e4dcbf84855a680f8faf",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["bullfrog"],
    category: "SMG",
  },
  {
    _id: "60df47dcbf84855a680f88de",
    displayName: "PPSh-41 (CW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ppsh-41.png",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. Faster fire rate with a large bullet spread. Reliable damage range with less control when firing.",
      stats: {
        accuracy: 62,
        range: 50,
        mobility: 81,
        damage: 67,
        fireRate: 78,
        control: 76,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "32",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "47",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "55",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dd79bf84855a680f8f7f",
        },
        {
          orderPlacement: "20",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "11",
          optionId: "60e1dd86bf84855a680f8f81",
        },
        {
          orderPlacement: "29",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "38",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "46",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "13",
          optionId: "60e352a1bf84855a680f9679",
        },
        {
          orderPlacement: "4",
          optionId: "60e35288bf84855a680f9675",
        },
        {
          orderPlacement: "21",
          optionId: "60e352b3bf84855a680f967d",
        },
        {
          orderPlacement: "30",
          optionId: "60e352babf84855a680f967f",
        },
        {
          orderPlacement: "39",
          optionId: "60e352c8bf84855a680f9683",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "48",
          optionId: "60e352e1bf84855a680f9687",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "23",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "31",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e35370bf84855a680f968f",
        },
        {
          orderPlacement: "50",
          optionId: "60e1def4bf84855a680f8f99",
        },
        {
          orderPlacement: "8",
          optionId: "60e353b4bf84855a680f9693",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "34",
          optionId: "60e353eabf84855a680f969b",
        },
        {
          orderPlacement: "25",
          optionId: "60e353d7bf84855a680f9697",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e35405bf84855a680f96a1",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "35",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "53",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "36",
          optionId: "60e35463bf84855a680f96a7",
        },
        {
          orderPlacement: "45",
          optionId: "60e1e4d7bf84855a680f8fad",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["ppsh"],
    category: "SMG",
  },
  {
    _id: "60df4feebf84855a680f890c",
    displayName: "Model 680",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/model-680.png",
    gameInfo: {
      blurb: "A reliable, well-rounded 12 gauge pump-action shotgun.",
      stats: {
        accuracy: 60,
        range: 45,
        mobility: 69,
        damage: 82,
        fireRate: 44,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "19",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "3",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "23",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "16",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "44",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "17",
          optionId: "60e3966ebf84855a680f9f6b",
        },
        {
          orderPlacement: "28",
          optionId: "60e38f62bf84855a680f9e17",
        },
        {
          orderPlacement: "32",
          optionId: "60e3974abf84855a680f9f89",
        },
        {
          orderPlacement: "27",
          optionId: "60e39677bf84855a680f9f6d",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "40",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "48",
          optionId: "60e39680bf84855a680f9f6f",
        },
        {
          orderPlacement: "10",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "29",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "4",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "9",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "12",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "21",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "24",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "38",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "33",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "30",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "41",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "43",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "45",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "36",
          optionId: "60e39516bf84855a680f9f22",
        },
        {
          orderPlacement: "50",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "47",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "20",
          optionId: "60e3968fbf84855a680f9f71",
        },
        {
          orderPlacement: "99",
          optionId: "60e396b1bf84855a680f9f79",
        },
        {
          orderPlacement: "7",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "100",
          optionId: "60e396c0bf84855a680f9f7b",
        },
        {
          orderPlacement: "101",
          optionId: "60e39325bf84855a680f9e75",
        },
        {
          orderPlacement: "102",
          optionId: "60e396c9bf84855a680f9f7d",
        },
        {
          orderPlacement: "15",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "37",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "31",
          optionId: "60e396dabf84855a680f9f7f",
        },
        {
          orderPlacement: "22",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "46",
          optionId: "60e396e1bf84855a680f9f81",
        },
        {
          orderPlacement: "5",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "8",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "13",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "11",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "18",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "26",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "35",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "39",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "14",
          optionId: "60e396e9bf84855a680f9f83",
        },
        {
          orderPlacement: "25",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "34",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "49",
          optionId: "60e223dfbf84855a680f9374",
        },
        {
          orderPlacement: "42",
          optionId: "60e39714bf84855a680f9f85",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["model680"],
    category: "Shotgun",
  },
  {
    _id: "60df6694bf84855a680f897c",
    displayName: "Diamatti",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/diamatti.png",
    gameInfo: {
      blurb:
        "Burst fire pistol. Fast cyclic rate of fire with a short delay between bursts. Increased ammo capacity and slightly slower reloading speeds.",
      stats: {
        accuracy: 60,
        range: 36,
        mobility: 80,
        damage: 60,
        fireRate: 59,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "13",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "8",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "24",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "19",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "9",
          optionId: "60e3551fbf84855a680f96ef",
        },
        {
          orderPlacement: "4",
          optionId: "60e3f3188a26dd1acccc61e8",
        },
        {
          orderPlacement: "14",
          optionId: "60e3f3388a26dd1acccc61f0",
        },
        {
          orderPlacement: "20",
          optionId: "60e3f3438a26dd1acccc61f4",
        },
        {
          orderPlacement: "30",
          optionId: "60e3f1338a26dd1acccc619e",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "18",
          optionId: "60e3f1408a26dd1acccc61a0",
        },
        {
          orderPlacement: "34",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "25",
          optionId: "60e3f34a8a26dd1acccc61f6",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "10",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "15",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "26",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "21",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "11",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "6",
          optionId: "60e3f69a8a26dd1acccc6278",
        },
        {
          orderPlacement: "16",
          optionId: "60e3f6a28a26dd1acccc627a",
        },
        {
          orderPlacement: "22",
          optionId: "60e3f6a88a26dd1acccc627c",
        },
        {
          orderPlacement: "27",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "32",
          optionId: "60e3f6bb8a26dd1acccc627e",
        },
        {
          orderPlacement: "12",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "7",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "17",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "23",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "28",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "33",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "35",
          optionId: "60e3f1498a26dd1acccc61a2",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["diamatti"],
    category: "Handgun",
  },
  {
    _id: "60ded4dcbf84855a680f889b",
    displayName: "FAL",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/fal.png",
    gameInfo: {
      blurb:
        "A semi-automatic assault rifle with a high rate of fire for faster follow up shots.",
      stats: {
        accuracy: 74,
        range: 70,
        mobility: 60,
        damage: 79,
        fireRate: 59,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "23",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "35",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "11",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "13",
          optionId: "60e3429cbf84855a680f94f7",
        },
        {
          orderPlacement: "58",
          optionId: "60e342c2bf84855a680f94ff",
        },
        {
          orderPlacement: "43",
          optionId: "60e342b1bf84855a680f94fb",
        },
        {
          orderPlacement: "65",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "20",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "27",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "60",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "16",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "33",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "45",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "10",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "15",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "19",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "24",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "26",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "29",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "32",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "34",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "37",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "44",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "41",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "47",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "49",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "51",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "55",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "59",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "62",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "66",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "31",
          optionId: "60e3440cbf84855a680f9505",
        },
        {
          orderPlacement: "53",
          optionId: "60e34416bf84855a680f9509",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "9",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "12",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "17",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "21",
          optionId: "60e212c5bf84855a680f9248",
        },
        {
          orderPlacement: "28",
          optionId: "60e2124dbf84855a680f9234",
        },
        {
          orderPlacement: "36",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "40",
          optionId: "60e212a9bf84855a680f9244",
        },
        {
          orderPlacement: "46",
          optionId: "60e21267bf84855a680f9238",
        },
        {
          orderPlacement: "54",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "57",
          optionId: "60e21275bf84855a680f923c",
        },
        {
          orderPlacement: "63",
          optionId: "60e21290bf84855a680f9240",
        },
        {
          orderPlacement: "67",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "7",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "14",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "18",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "22",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "30",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "42",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "39",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "50",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "52",
          optionId: "60df7521bf84855a680f8abf",
        },
        {
          orderPlacement: "56",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "61",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "25",
          optionId: "60e344afbf84855a680f950d",
        },
        {
          orderPlacement: "38",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "48",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "64",
          optionId: "60e1cf42bf84855a680f8d99",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["fal"],
    category: "Assault Rifle",
  },
  {
    _id: "60ded1bbbf84855a680f8881",
    displayName: "AK-47 (CW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ak-47-cw.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. High damage with a marginally slower fire rate. Excellent stopping power for mid range encounters.",
      stats: {
        accuracy: 68,
        range: 60,
        mobility: 63,
        damage: 77,
        fireRate: 65,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "47",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dd79bf84855a680f8f7f",
        },
        {
          orderPlacement: "11",
          optionId: "60e1dd86bf84855a680f8f81",
        },
        {
          orderPlacement: "55",
          optionId: "60e1e510bf84855a680f8fb1",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "29",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "38",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "46",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "4",
          optionId: "60e1de92bf84855a680f8f8b",
        },
        {
          orderPlacement: "21",
          optionId: "60e1deabbf84855a680f8f8f",
        },
        {
          orderPlacement: "13",
          optionId: "60e1de9fbf84855a680f8f8d",
        },
        {
          orderPlacement: "30",
          optionId: "60e1deb3bf84855a680f8f91",
        },
        {
          orderPlacement: "39",
          optionId: "60e1debfbf84855a680f8f93",
        },
        {
          orderPlacement: "48",
          optionId: "60e1ded1bf84855a680f8f95",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "31",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60e1def0bf84855a680f8f97",
        },
        {
          orderPlacement: "50",
          optionId: "60e1def4bf84855a680f8f99",
        },
        {
          orderPlacement: "16",
          optionId: "60e1e46ebf84855a680f8f9f",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e464bf84855a680f8f9d",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "34",
          optionId: "60e1e480bf84855a680f8fa3",
        },
        {
          orderPlacement: "43",
          optionId: "60e1e486bf84855a680f8fa5",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "51",
          optionId: "60e1e48fbf84855a680f8fa7",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "53",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "54",
          optionId: "60e1e4dcbf84855a680f8faf",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60e1e4d7bf84855a680f8fad",
        },
      ],
      maxOptions: 5,
    },
    commandCodes: ["cwak47", "ak47cw"],
    category: "Assault Rifle",
  },
  {
    _id: "60ded425bf84855a680f8893",
    displayName: "CR-56 AMAX",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/cr-56-amax.png",
    gameInfo: {
      blurb:
        "This lightweight 7.62 x 39mm full auto assault rifle is compact and powerful. Built exclusively for military use, the standard issue rifle is deadly at mid range combat and easily configured for a variety of assault tactics.",
      stats: {
        accuracy: 69,
        range: 65,
        mobility: 61.5,
        damage: 76,
        fireRate: 66,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "11",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "23",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "36",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "13",
          optionId: "60e2226dbf84855a680f9366",
        },
        {
          orderPlacement: "66",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "59",
          optionId: "60e22083bf84855a680f930a",
        },
        {
          orderPlacement: "44",
          optionId: "60e22277bf84855a680f9368",
        },
        {
          orderPlacement: "20",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "61",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "27",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "2",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "10",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "15",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "24",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "19",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "26",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "29",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "32",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "35",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "38",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "42",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "45",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "48",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "52",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "50",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "56",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "60",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "63",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "25",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "67",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "33",
          optionId: "60e223dfbf84855a680f9374",
        },
        {
          orderPlacement: "41",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "49",
          optionId: "60e223e3bf84855a680f9376",
        },
        {
          orderPlacement: "54",
          optionId: "60e223e9bf84855a680f9378",
        },
        {
          orderPlacement: "65",
          optionId: "60e223eebf84855a680f937a",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "9",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "12",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "21",
          optionId: "60df73efbf84855a680f8a93",
        },
        {
          orderPlacement: "17",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "28",
          optionId: "60df73c2bf84855a680f8a8b",
        },
        {
          orderPlacement: "37",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "40",
          optionId: "60df742fbf84855a680f8a97",
        },
        {
          orderPlacement: "55",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "47",
          optionId: "60df73d6bf84855a680f8a8f",
        },
        {
          orderPlacement: "58",
          optionId: "60df7442bf84855a680f8a9b",
        },
        {
          orderPlacement: "64",
          optionId: "60df740dbf84855a680f8a95",
        },
        {
          orderPlacement: "68",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "53",
          optionId: "60e2249fbf84855a680f9384",
        },
        {
          orderPlacement: "31",
          optionId: "60e2248abf84855a680f937e",
        },
        {
          orderPlacement: "16",
          optionId: "60e224cfbf84855a680f9388",
        },
        {
          orderPlacement: "34",
          optionId: "60e224d6bf84855a680f938a",
        },
        {
          orderPlacement: "46",
          optionId: "60e224d9bf84855a680f938c",
        },
        {
          orderPlacement: "7",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "14",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "18",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "22",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "30",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "39",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "43",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "51",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "57",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "62",
          optionId: "60df7536bf84855a680f8ac3",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["amax"],
    category: "Assault Rifle",
  },
  {
    _id: "60f0735f1d00452cd0554157",
    gameId: "60da97598821ed46dc9c008c",
    displayName: "OTs 9",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. Impressive firepower at close range with good visibility while firing. Reliable recoil control with a smaller magazine size.",
      stats: {
        accuracy: 70,
        range: 48,
        mobility: 73,
        damage: 76,
        fireRate: 76,
        control: 78,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "1",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "5",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "4",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "3",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "1",
          optionId: "60f0b2a91d00452cd05541f0",
        },
        {
          orderPlacement: "3",
          optionId: "60f0b2f71d00452cd05541f8",
        },
        {
          orderPlacement: "2",
          optionId: "60f0b2d41d00452cd05541f4",
        },
        {
          orderPlacement: "4",
          optionId: "60f0b3061d00452cd05541fc",
        },
        {
          orderPlacement: "6",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "6",
          optionId: "60f0b3191d00452cd0554200",
        },
        {
          orderPlacement: "5",
          optionId: "60f0b30f1d00452cd05541fe",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "4",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "7",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "8",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "9",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "10",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "2",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "4",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "5",
          optionId: "60f0b4fb1d00452cd0554224",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1e4dcbf84855a680f8faf",
        },
        {
          orderPlacement: "2",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "6",
          optionId: "60f0b5951d00452cd055422c",
        },
        {
          orderPlacement: "5",
          optionId: "60e1def0bf84855a680f8f97",
        },
        {
          orderPlacement: "1",
          optionId: "60e3cf768a26dd1acccc5be7",
        },
        {
          orderPlacement: "2",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "3",
          optionId: "60e3cf7f8a26dd1acccc5beb",
        },
        {
          orderPlacement: "5",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "6",
          optionId: "60f0b3671d00452cd0554206",
        },
        {
          orderPlacement: "4",
          optionId: "60f0b3501d00452cd0554204",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "4",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "99",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
      ],
      maxOptions: 5,
    },
    image: "/warzone/ots-9.png",
    __v: 0,
    commandCodes: ["ots", "ots9"],
    category: "SMG",
  },
  {
    _id: "60ded4b0bf84855a680f8899",
    displayName: "AN-94",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/an-94.png",
    gameInfo: {
      blurb:
        "Cutting edge 5.45x39mm Russian assault rifle with a unique hyperburst feature. The initial shot from each trigger pull fires a rapid 2-round burst before perceived recoil is felt, creating a tightly grouped cluster with increased damage potential. This mechanism is fed by a canted magazine, and a reciprocating receiver helps keep control of the recoil.",
      stats: {
        accuracy: 74,
        range: 62,
        mobility: 62,
        damage: 74,
        fireRate: 68,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e33ee3bf84855a680f9482",
        },
        {
          orderPlacement: "24",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "11",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "37",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "13",
          optionId: "60e33ef0bf84855a680f9484",
        },
        {
          orderPlacement: "45",
          optionId: "60e33f11bf84855a680f9486",
        },
        {
          orderPlacement: "66",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "59",
          optionId: "60e33f1cbf84855a680f9488",
        },
        {
          orderPlacement: "20",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "61",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "28",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "16",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "36",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "47",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "10",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "15",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "19",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "25",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "27",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "30",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "33",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "35",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "46",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "43",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "39",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "48",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "50",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "52",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "60",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "54",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "57",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "63",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "55",
          optionId: "60e33fedbf84855a680f949e",
        },
        {
          orderPlacement: "32",
          optionId: "60e2248abf84855a680f937e",
        },
        {
          orderPlacement: "67",
          optionId: "60e33f30bf84855a680f948a",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "9",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "22",
          optionId: "60df73efbf84855a680f8a93",
        },
        {
          orderPlacement: "12",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "17",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "29",
          optionId: "60df73c2bf84855a680f8a8b",
        },
        {
          orderPlacement: "38",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "41",
          optionId: "60df742fbf84855a680f8a97",
        },
        {
          orderPlacement: "56",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "58",
          optionId: "60df7442bf84855a680f8a9b",
        },
        {
          orderPlacement: "49",
          optionId: "60df73d6bf84855a680f8a8f",
        },
        {
          orderPlacement: "64",
          optionId: "60df740dbf84855a680f8a95",
        },
        {
          orderPlacement: "68",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "7",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "14",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "21",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "18",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "23",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "31",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "40",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "44",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "53",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "62",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "42",
          optionId: "60e33f4dbf84855a680f9490",
        },
        {
          orderPlacement: "51",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "34",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "26",
          optionId: "60e33f44bf84855a680f948e",
        },
        {
          orderPlacement: "65",
          optionId: "60e33f5abf84855a680f9494",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["an94"],
    category: "Assault Rifle",
  },
  {
    _id: "60df4ea8bf84855a680f8900",
    displayName: "Streetsweeper",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/streetsweeper.png",
    gameInfo: {
      blurb:
        "Full-auto shotgun. Fastest fire rate in class with a larger ammo pool. Reduced damage with reliable weapon control.",
      stats: {
        accuracy: 53,
        range: 40,
        mobility: 62,
        damage: 75,
        fireRate: 53,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "19",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "3",
          optionId: "60e38840bf84855a680f9d40",
        },
        {
          orderPlacement: "36",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "9",
          optionId: "60e38846bf84855a680f9d42",
        },
        {
          orderPlacement: "14",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "20",
          optionId: "60e3884ebf84855a680f9d44",
        },
        {
          orderPlacement: "4",
          optionId: "60e20e27bf84855a680f91a8",
        },
        {
          orderPlacement: "31",
          optionId: "60e38859bf84855a680f9d48",
        },
        {
          orderPlacement: "26",
          optionId: "60e38855bf84855a680f9d46",
        },
        {
          orderPlacement: "10",
          optionId: "60e388f5bf84855a680f9d50",
        },
        {
          orderPlacement: "32",
          optionId: "60e38926bf84855a680f9d5e",
        },
        {
          orderPlacement: "27",
          optionId: "60e3891abf84855a680f9d5a",
        },
        {
          orderPlacement: "15",
          optionId: "60e38905bf84855a680f9d54",
        },
        {
          orderPlacement: "21",
          optionId: "60e3890dbf84855a680f9d56",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "16",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "28",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "33",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e38933bf84855a680f9d60",
        },
        {
          orderPlacement: "23",
          optionId: "60e38950bf84855a680f9d64",
        },
        {
          orderPlacement: "7",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "12",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "17",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "24",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "29",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "34",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "8",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "13",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "18",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "25",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "30",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "35",
          optionId: "60e1da2bbf84855a680f8f11",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["streetsweeper"],
    category: "Shotgun",
  },
  {
    _id: "60df66bfbf84855a680f897e",
    displayName: "X16",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/x16.png",
    gameInfo: {
      blurb:
        "A semi-automatic pistol chambered in .45 ACP ammunition. A reliable fallback when you find yourself in close quarters.",
      stats: {
        accuracy: 55,
        range: 42,
        mobility: 81,
        damage: 57,
        fireRate: 58,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "10",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "19",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "4",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "14",
          optionId: "60e3f78d8a26dd1acccc62a6",
        },
        {
          orderPlacement: "24",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "31",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "22",
          optionId: "60e3f7b48a26dd1acccc62b0",
        },
        {
          orderPlacement: "8",
          optionId: "60e3f7a98a26dd1acccc62ac",
        },
        {
          orderPlacement: "33",
          optionId: "60e3f7af8a26dd1acccc62ae",
        },
        {
          orderPlacement: "11",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "27",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "16",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "7",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "17",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "30",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "6",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "13",
          optionId: "60e3f7c18a26dd1acccc62b2",
        },
        {
          orderPlacement: "28",
          optionId: "60e3f7c48a26dd1acccc62b4",
        },
        {
          orderPlacement: "21",
          optionId: "60e3f7d68a26dd1acccc62b8",
        },
        {
          orderPlacement: "34",
          optionId: "60e3f7db8a26dd1acccc62ba",
        },
        {
          orderPlacement: "18",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "23",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "35",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "25",
          optionId: "60e3f7f18a26dd1acccc62bc",
        },
        {
          orderPlacement: "3",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "5",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "12",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "9",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "15",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "20",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "26",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "32",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "29",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "99",
          optionId: "60e3f8098a26dd1acccc62c0",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["x16"],
    category: "Handgun",
  },
  {
    _id: "60df4f10bf84855a680f8904",
    displayName: "Hauer 77",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/hauer-77.png",
    gameInfo: {
      blurb:
        "Pump-action shotgun. High damage with a possible 1-shot kill in close quarters. Hand loaded with moderate rechamber speed.",
      stats: {
        accuracy: 63,
        range: 45,
        mobility: 70,
        damage: 87,
        fireRate: 44,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e38840bf84855a680f9d40",
        },
        {
          orderPlacement: "14",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "26",
          optionId: "60e38855bf84855a680f9d46",
        },
        {
          orderPlacement: "20",
          optionId: "60e3884ebf84855a680f9d44",
        },
        {
          orderPlacement: "9",
          optionId: "60e38846bf84855a680f9d42",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "31",
          optionId: "60e38859bf84855a680f9d48",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "16",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "28",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "4",
          optionId: "60e38e43bf84855a680f9dd4",
        },
        {
          orderPlacement: "10",
          optionId: "60e38e51bf84855a680f9dd8",
        },
        {
          orderPlacement: "33",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "15",
          optionId: "60e38e61bf84855a680f9dda",
        },
        {
          orderPlacement: "21",
          optionId: "60e38e6abf84855a680f9ddc",
        },
        {
          orderPlacement: "27",
          optionId: "60e38e7bbf84855a680f9de0",
        },
        {
          orderPlacement: "19",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "32",
          optionId: "60e38e84bf84855a680f9de2",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "36",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "6",
          optionId: "60e38edebf84855a680f9de8",
        },
        {
          orderPlacement: "23",
          optionId: "60e38ee4bf84855a680f9dea",
        },
        {
          orderPlacement: "7",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "12",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "17",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "29",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "34",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "8",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "13",
          optionId: "60e38f1bbf84855a680f9dee",
        },
        {
          orderPlacement: "25",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "18",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "30",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "35",
          optionId: "60e1da2bbf84855a680f8f11",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["hauer"],
    category: "Shotgun",
  },
  {
    _id: "60ded2cdbf84855a680f8889",
    displayName: "Krig 6",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/krig-6.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. Improved damage and accuracy. Excellent weapon control and visibility when sustaining fire.",
      stats: {
        accuracy: 70,
        range: 73,
        mobility: 62,
        damage: 77,
        fireRate: 65,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "47",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "13",
          optionId: "60e20c17bf84855a680f914a",
        },
        {
          orderPlacement: "4",
          optionId: "60e20c0cbf84855a680f9148",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "21",
          optionId: "60e20c20bf84855a680f914c",
        },
        {
          orderPlacement: "30",
          optionId: "60e20c2abf84855a680f914e",
        },
        {
          orderPlacement: "39",
          optionId: "60e20c52bf84855a680f9152",
        },
        {
          orderPlacement: "48",
          optionId: "60e20c63bf84855a680f9156",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e464bf84855a680f8f9d",
        },
        {
          orderPlacement: "16",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "34",
          optionId: "60e20d16bf84855a680f9160",
        },
        {
          orderPlacement: "43",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "51",
          optionId: "60e20b3fbf84855a680f9106",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["krig"],
    category: "Assault Rifle",
  },
  {
    _id: "60df616fbf84855a680f8957",
    displayName: "AX-50",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ax-50.png",
    gameInfo: {
      blurb:
        "Hard hitting, bolt action sniper rifle with .50 cal BMG ammunition. Its tungsten sabot tipped bullets are fast and powerful, but require precise shots over long distances.",
      stats: {
        accuracy: 82,
        range: 79,
        mobility: 44,
        damage: 85,
        fireRate: 38,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "6",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "9",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "4",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "15",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "25",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "7",
          optionId: "60e3ebd08a26dd1acccc60a4",
        },
        {
          orderPlacement: "20",
          optionId: "60e3ebf08a26dd1acccc60a8",
        },
        {
          orderPlacement: "31",
          optionId: "60e3ebf58a26dd1acccc60aa",
        },
        {
          orderPlacement: "28",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "10",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "32",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "21",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "27",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "5",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "17",
          optionId: "60e3ec798a26dd1acccc60ba",
        },
        {
          orderPlacement: "11",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "24",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "35",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "37",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "39",
          optionId: "60e3ec858a26dd1acccc60bc",
        },
        {
          orderPlacement: "12",
          optionId: "60e3ec048a26dd1acccc60ac",
        },
        {
          orderPlacement: "14",
          optionId: "60e3ec1f8a26dd1acccc60b4",
        },
        {
          orderPlacement: "34",
          optionId: "60e3ec098a26dd1acccc60b0",
        },
        {
          orderPlacement: "23",
          optionId: "60e3ec078a26dd1acccc60ae",
        },
        {
          orderPlacement: "18",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "29",
          optionId: "60e3ec218a26dd1acccc60b6",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "8",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "13",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "16",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "19",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "26",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "30",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "22",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
        {
          orderPlacement: "33",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "36",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "38",
          optionId: "60df752fbf84855a680f8ac1",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["ax50"],
    category: "Sniper Rifle",
  },
  {
    _id: "60df665ebf84855a680f897a",
    displayName: "1911 (CW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/1911-cw.png",
    gameInfo: {
      blurb:
        "Semi-auto pistol. Good accuracy with a modest ammo capacity. High damage in close range encounters.",
      stats: {
        accuracy: 55,
        range: 44,
        mobility: 80,
        damage: 59,
        fireRate: 60,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e35985bf84855a680f9799",
        },
        {
          orderPlacement: "8",
          optionId: "60e3598dbf84855a680f979b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "13",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "19",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "4",
          optionId: "60e3f5598a26dd1acccc6238",
        },
        {
          orderPlacement: "14",
          optionId: "60e3f56c8a26dd1acccc623c",
        },
        {
          orderPlacement: "9",
          optionId: "60e3f5628a26dd1acccc623a",
        },
        {
          orderPlacement: "20",
          optionId: "60e3f5748a26dd1acccc623e",
        },
        {
          orderPlacement: "25",
          optionId: "60e3f57d8a26dd1acccc6240",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "30",
          optionId: "60e3f5848a26dd1acccc6242",
        },
        {
          orderPlacement: "34",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "18",
          optionId: "60e3f1408a26dd1acccc61a0",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "15",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "10",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "21",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "26",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "11",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "22",
          optionId: "60e3f59c8a26dd1acccc6248",
        },
        {
          orderPlacement: "16",
          optionId: "60e3f5938a26dd1acccc6246",
        },
        {
          orderPlacement: "6",
          optionId: "60e3f5908a26dd1acccc6244",
        },
        {
          orderPlacement: "27",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "7",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "32",
          optionId: "60e3f5a38a26dd1acccc624a",
        },
        {
          orderPlacement: "12",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "17",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "23",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "28",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "33",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "35",
          optionId: "60e3f1498a26dd1acccc61a2",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["cw1911", "1911cw"],
    category: "Handgun",
  },
  {
    _id: "60df674bbf84855a680f8984",
    displayName: "M19",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m19.png",
    gameInfo: {
      blurb:
        "Semi-automatic 9mm pistol, excellent stability with a rapid cycle rate.",
      stats: {
        accuracy: 57,
        range: 40,
        mobility: 82,
        damage: 55,
        fireRate: 60,
        control: 72,
      },
      availableOptions: [
        {
          orderPlacement: "4",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "2",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "10",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "20",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "16",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "27",
          optionId: "60e3f78d8a26dd1acccc62a6",
        },
        {
          orderPlacement: "34",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "32",
          optionId: "60e3fbc98a26dd1acccc637d",
        },
        {
          orderPlacement: "8",
          optionId: "60e3fbb88a26dd1acccc6379",
        },
        {
          orderPlacement: "18",
          optionId: "60e3fbbf8a26dd1acccc637b",
        },
        {
          orderPlacement: "5",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "28",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "21",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "24",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "15",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "33",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "31",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "23",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "7",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "13",
          optionId: "60e3f9548a26dd1acccc62fa",
        },
        {
          orderPlacement: "25",
          optionId: "60e37148bf84855a680f9a22",
        },
        {
          orderPlacement: "17",
          optionId: "60e3f7d68a26dd1acccc62b8",
        },
        {
          orderPlacement: "29",
          optionId: "60e3f7db8a26dd1acccc62ba",
        },
        {
          orderPlacement: "11",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "3",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "6",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "9",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "19",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "12",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "14",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "22",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "26",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "99",
          optionId: "60e3f8098a26dd1acccc62c0",
        },
        {
          orderPlacement: "30",
          optionId: "60df752fbf84855a680f8ac1",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["m19"],
    category: "Handgun",
  },
  {
    _id: "60df5ce4bf84855a680f892a",
    displayName: "CARV.2",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/carv2.png",
    gameInfo: {
      blurb:
        "Burst fire tactical rifle. Moderate firepower with improved fire rate and recoil control. Effective at mid-to-long range.",
      stats: {
        accuracy: 71,
        range: 62,
        mobility: 64,
        damage: 72,
        fireRate: 69,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "60e4b074e580dd3004e5db34",
        },
        {
          orderPlacement: "2",
          optionId: "60e4b084e580dd3004e5db38",
        },
        {
          orderPlacement: "4",
          optionId: "60e4b0a1e580dd3004e5db40",
        },
        {
          orderPlacement: "5",
          optionId: "60e4b0bfe580dd3004e5db46",
        },
        {
          orderPlacement: "3",
          optionId: "60e4b092e580dd3004e5db3c",
        },
        {
          orderPlacement: "6",
          optionId: "60e4b0d1e580dd3004e5db4a",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "8",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "9",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "10",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "11",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "12",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "1",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "5",
          optionId: "60e35ef7bf84855a680f987b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "1",
          optionId: "60e1e8ecbf84855a680f903e",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "4",
          optionId: "60e3d6b98a26dd1acccc5c9f",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "6",
          optionId: "60e3d0ee8a26dd1acccc5c3f",
        },
        {
          orderPlacement: "1",
          optionId: "60e4b4ffe580dd3004e5db6a",
        },
        {
          orderPlacement: "2",
          optionId: "60e4b50ae580dd3004e5db6c",
        },
        {
          orderPlacement: "3",
          optionId: "60e3ceee8a26dd1acccc5bdf",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "6",
          optionId: "60e3ceff8a26dd1acccc5be3",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "4",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["carv", "carv2"],
    category: "Tactical Rifle",
  },
  {
    _id: "60df619dbf84855a680f8959",
    displayName: "HDR",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/hdr.png",
    gameInfo: {
      blurb:
        "An anti-material bolt action sniper rifle chambered in 12.7x108mm ammunition. 745 gr bullets have a lower muzzle velocity, but are devastating at very long ranges.",
      stats: {
        accuracy: 83,
        range: 83,
        mobility: 43,
        damage: 86,
        fireRate: 36,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "15",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "23",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "8",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "5",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "33",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "29",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "31",
          optionId: "60e3ed3d8a26dd1acccc60ec",
        },
        {
          orderPlacement: "9",
          optionId: "60e3ed2d8a26dd1acccc60e8",
        },
        {
          orderPlacement: "16",
          optionId: "60e3ed348a26dd1acccc60ea",
        },
        {
          orderPlacement: "27",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "4",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "11",
          optionId: "60e3ec798a26dd1acccc60ba",
        },
        {
          orderPlacement: "18",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "24",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "34",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "28",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "37",
          optionId: "60e3ec858a26dd1acccc60bc",
        },
        {
          orderPlacement: "13",
          optionId: "60e3ed588a26dd1acccc60f0",
        },
        {
          orderPlacement: "19",
          optionId: "60e3d9998a26dd1acccc5d49",
        },
        {
          orderPlacement: "26",
          optionId: "60e3ed658a26dd1acccc60f4",
        },
        {
          orderPlacement: "7",
          optionId: "60e3ec1f8a26dd1acccc60b4",
        },
        {
          orderPlacement: "35",
          optionId: "60e3eda58a26dd1acccc60f8",
        },
        {
          orderPlacement: "21",
          optionId: "60e3ec218a26dd1acccc60b6",
        },
        {
          orderPlacement: "30",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "6",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "12",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "14",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "17",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "22",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "20",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
        {
          orderPlacement: "25",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "32",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "36",
          optionId: "60df74c7bf84855a680f8ab5",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["hdr"],
    category: "Sniper Rifle",
  },
  {
    _id: "60ded51abf84855a680f889d",
    displayName: "FN Scar 17",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/fn-scar-17.png",
    gameInfo: {
      blurb:
        "Large caliber, fully automatic assault rifle that provides high damage over long ranges.",
      stats: {
        accuracy: 69,
        range: 68,
        mobility: 57,
        damage: 77,
        fireRate: 62.5,
        control: 67,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "10",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "8",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "16",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "33",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "42",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "38",
          optionId: "60e3450fbf84855a680f9557",
        },
        {
          orderPlacement: "28",
          optionId: "60e34509bf84855a680f9555",
        },
        {
          orderPlacement: "50",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "58",
          optionId: "60e3451bbf84855a680f9559",
        },
        {
          orderPlacement: "9",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "32",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "59",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "24",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "12",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "65",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "3",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "13",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "7",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "18",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "15",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "20",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "23",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "26",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "29",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "34",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "40",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "37",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "45",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "47",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "49",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "52",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "54",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "56",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "60",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "64",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "14",
          optionId: "60e34530bf84855a680f955d",
        },
        {
          orderPlacement: "62",
          optionId: "60e34416bf84855a680f9509",
        },
        {
          orderPlacement: "11",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "17",
          optionId: "60e21290bf84855a680f9240",
        },
        {
          orderPlacement: "22",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "25",
          optionId: "60df740dbf84855a680f8a95",
        },
        {
          orderPlacement: "31",
          optionId: "60df7442bf84855a680f8a9b",
        },
        {
          orderPlacement: "36",
          optionId: "60df742fbf84855a680f8a97",
        },
        {
          orderPlacement: "39",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "44",
          optionId: "60e21267bf84855a680f9238",
        },
        {
          orderPlacement: "46",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "57",
          optionId: "60e212c5bf84855a680f9248",
        },
        {
          orderPlacement: "51",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "63",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "4",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "21",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "6",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "35",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "27",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "41",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "48",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "53",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "61",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "19",
          optionId: "60e223dfbf84855a680f9374",
        },
        {
          orderPlacement: "30",
          optionId: "60e3454abf84855a680f9561",
        },
        {
          orderPlacement: "43",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "55",
          optionId: "60e3455fbf84855a680f9565",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["scar", "fnscar"],
    category: "Assault Rifle",
  },
  {
    _id: "60df608ebf84855a680f894f",
    displayName: "Swiss K31",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/swiss-k31.png",
    gameInfo: {
      blurb:
        "Bolt-action sniper rifle. Improved accuracy with moderate recoil. Fast rechamber and aiming speed with a larger ammo capacity.",
      stats: {
        accuracy: 82,
        range: 78,
        mobility: 54,
        damage: 79,
        fireRate: 35,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "17",
          optionId: "60e3e3248a26dd1acccc5ef8",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "37",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "52",
          optionId: "60e3e3308a26dd1acccc5efc",
        },
        {
          orderPlacement: "11",
          optionId: "60e3e48e8a26dd1acccc5f48",
        },
        {
          orderPlacement: "3",
          optionId: "60e3e48a8a26dd1acccc5f46",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "20",
          optionId: "60e3e2a98a26dd1acccc5ede",
        },
        {
          orderPlacement: "29",
          optionId: "60e3e2b78a26dd1acccc5ee2",
        },
        {
          orderPlacement: "46",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "38",
          optionId: "60e3e2bc8a26dd1acccc5ee4",
        },
        {
          orderPlacement: "13",
          optionId: "60e3e4b78a26dd1acccc5f4e",
        },
        {
          orderPlacement: "4",
          optionId: "60e3e4aa8a26dd1acccc5f4c",
        },
        {
          orderPlacement: "21",
          optionId: "60e3e4bf8a26dd1acccc5f50",
        },
        {
          orderPlacement: "30",
          optionId: "60e3e4cc8a26dd1acccc5f54",
        },
        {
          orderPlacement: "48",
          optionId: "60e3e4e38a26dd1acccc5f5c",
        },
        {
          orderPlacement: "39",
          optionId: "60e3e4dd8a26dd1acccc5f5a",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "50",
          optionId: "60e3e5a38a26dd1acccc5f62",
        },
        {
          orderPlacement: "8",
          optionId: "60e3e33e8a26dd1acccc5efe",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "25",
          optionId: "60e3e3508a26dd1acccc5f04",
        },
        {
          orderPlacement: "34",
          optionId: "60e3e3578a26dd1acccc5f06",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e3e35f8a26dd1acccc5f08",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["swiss"],
    category: "Sniper Rifle",
  },
  {
    _id: "60df6017bf84855a680f894b",
    displayName: "SP-R 208",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/sp-r-208.png",
    gameInfo: {
      blurb:
        "Reliable, hard-hitting .300 Win bolt action rifle from Sloan Precision. This weapon's extensive military and civilian use gives rise to an abundance of customization.",
      stats: {
        accuracy: 76.5,
        range: 76,
        mobility: 51,
        damage: 84,
        fireRate: 41,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "10",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "13",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "17",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "20",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "43",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "26",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "46",
          optionId: "60e3e05a8a26dd1acccc5e84",
        },
        {
          orderPlacement: "35",
          optionId: "60e3e0528a26dd1acccc5e82",
        },
        {
          orderPlacement: "14",
          optionId: "60e3e04e8a26dd1acccc5e80",
        },
        {
          orderPlacement: "53",
          optionId: "60e3e0638a26dd1acccc5e86",
        },
        {
          orderPlacement: "41",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "2",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "4",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "11",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "16",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "22",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "28",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "25",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "32",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "33",
          optionId: "60e3e1b98a26dd1acccc5e9e",
        },
        {
          orderPlacement: "36",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "38",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "42",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "45",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "51",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "48",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "27",
          optionId: "60e3e08b8a26dd1acccc5e8a",
        },
        {
          orderPlacement: "21",
          optionId: "60e3e07a8a26dd1acccc5e88",
        },
        {
          orderPlacement: "40",
          optionId: "60e3e0938a26dd1acccc5e8c",
        },
        {
          orderPlacement: "54",
          optionId: "60e3e09a8a26dd1acccc5e8e",
        },
        {
          orderPlacement: "3",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "23",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "31",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "37",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "44",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "18",
          optionId: "60e3e11d8a26dd1acccc5e92",
        },
        {
          orderPlacement: "55",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "49",
          optionId: "60e3e1298a26dd1acccc5e94",
        },
        {
          orderPlacement: "9",
          optionId: "60e3d9c98a26dd1acccc5d51",
        },
        {
          orderPlacement: "29",
          optionId: "60e3e13e8a26dd1acccc5e98",
        },
        {
          orderPlacement: "7",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "50",
          optionId: "60e3e1478a26dd1acccc5e9a",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "12",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "15",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "19",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "30",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "24",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "34",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "39",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "47",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
        {
          orderPlacement: "52",
          optionId: "60df752fbf84855a680f8ac1",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["spr"],
    category: "Marksman Rifle",
  },
  {
    _id: "60df5025bf84855a680f890e",
    displayName: "R9-0",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/r9-0.png",
    gameInfo: {
      blurb: "Double barrels provide two rapid shots before each re-chamber.",
      stats: {
        accuracy: 55,
        range: 42,
        mobility: 71,
        damage: 79,
        fireRate: 51,
        control: 75,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "20",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "25",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "10",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "15",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "48",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "16",
          optionId: "60e398bbbf84855a680f9fc8",
        },
        {
          orderPlacement: "30",
          optionId: "60e38f62bf84855a680f9e17",
        },
        {
          orderPlacement: "32",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "43",
          optionId: "60e398bdbf84855a680f9fca",
        },
        {
          orderPlacement: "6",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "23",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "13",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "47",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "4",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "38",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "3",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "14",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "22",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "31",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "27",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "34",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "36",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "39",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "42",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "44",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "46",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "19",
          optionId: "60e3968fbf84855a680f9f71",
        },
        {
          orderPlacement: "40",
          optionId: "60e39516bf84855a680f9f22",
        },
        {
          orderPlacement: "9",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "28",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "35",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "7",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "11",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "18",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "26",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "29",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "33",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "37",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "41",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "12",
          optionId: "60e398d2bf84855a680f9fcc",
        },
        {
          orderPlacement: "24",
          optionId: "60e398ddbf84855a680f9fd0",
        },
        {
          orderPlacement: "45",
          optionId: "60e398e2bf84855a680f9fd2",
        },
        {
          orderPlacement: "99",
          optionId: "60e39325bf84855a680f9e75",
        },
        {
          orderPlacement: "21",
          optionId: "60df74b8bf84855a680f8ab1",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["r90", "r9"],
    category: "Shotgun",
  },
  {
    _id: "60df48b8bf84855a680f88e4",
    displayName: "LC10",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/lc10.png",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. Well rounded with excellent damage range and good accuracy. Moderate damage with an impressive muzzle velocity and a high fire rate.",
      stats: {
        accuracy: 66,
        range: 60,
        mobility: 70,
        damage: 65,
        fireRate: 75,
        control: 80,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e35985bf84855a680f9799",
        },
        {
          orderPlacement: "11",
          optionId: "60e3598dbf84855a680f979b",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "20",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "21",
          optionId: "60e359c5bf84855a680f97a5",
        },
        {
          orderPlacement: "30",
          optionId: "60e359d3bf84855a680f97a9",
        },
        {
          orderPlacement: "4",
          optionId: "60e359a6bf84855a680f979f",
        },
        {
          orderPlacement: "13",
          optionId: "60e359b7bf84855a680f97a1",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "48",
          optionId: "60e359eabf84855a680f97b1",
        },
        {
          orderPlacement: "39",
          optionId: "60e359debf84855a680f97ad",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "32",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "47",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "55",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e464bf84855a680f8f9d",
        },
        {
          orderPlacement: "25",
          optionId: "60e35a11bf84855a680f97b5",
        },
        {
          orderPlacement: "34",
          optionId: "60e35a20bf84855a680f97b9",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e35a33bf84855a680f97bd",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["lc10"],
    category: "SMG",
  },
  {
    _id: "60ded332bf84855a680f888d",
    displayName: "AK-47 (MW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ak-47-mw.png",
    gameInfo: {
      blurb:
        "Very reliable automatic assault rifle chambered in 7.62mm Soviet. Large caliber ammunition requires skill to control recoil.",
      stats: {
        accuracy: 68,
        range: 67,
        mobility: 59,
        damage: 77,
        fireRate: 61,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "5",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "46",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "32",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "10",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "15",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "54",
          optionId: "60e20fcbbf84855a680f9204",
        },
        {
          orderPlacement: "27",
          optionId: "60e21020bf84855a680f920c",
        },
        {
          orderPlacement: "61",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "56",
          optionId: "60e21040bf84855a680f9214",
        },
        {
          orderPlacement: "47",
          optionId: "60e21033bf84855a680f9210",
        },
        {
          orderPlacement: "63",
          optionId: "60e21058bf84855a680f9218",
        },
        {
          orderPlacement: "9",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "66",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "28",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "2",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "4",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "11",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "14",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "18",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "22",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "25",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "29",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "33",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "39",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "41",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "48",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "52",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "45",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "58",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "60",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "19",
          optionId: "60e211e0bf84855a680f9228",
        },
        {
          orderPlacement: "67",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "64",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "23",
          optionId: "60e211f2bf84855a680f9230",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "6",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "62",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "50",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "12",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "16",
          optionId: "60e2124dbf84855a680f9234",
        },
        {
          orderPlacement: "21",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "24",
          optionId: "60e21267bf84855a680f9238",
        },
        {
          orderPlacement: "34",
          optionId: "60e21275bf84855a680f923c",
        },
        {
          orderPlacement: "37",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "40",
          optionId: "60e21290bf84855a680f9240",
        },
        {
          orderPlacement: "49",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "43",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "68",
          optionId: "60e212c5bf84855a680f9248",
        },
        {
          orderPlacement: "59",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "55",
          optionId: "60e212a9bf84855a680f9244",
        },
        {
          orderPlacement: "13",
          optionId: "60e21301bf84855a680f9250",
        },
        {
          orderPlacement: "44",
          optionId: "60e2131bbf84855a680f9254",
        },
        {
          orderPlacement: "17",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "31",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "53",
          optionId: "60e21323bf84855a680f9256",
        },
        {
          orderPlacement: "51",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "3",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "7",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "20",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "26",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "30",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "35",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "38",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "42",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "57",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "65",
          optionId: "60df7536bf84855a680f8ac3",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mwak47", "ak47mw"],
    category: "Assault Rifle",
  },
  {
    _id: "60df4977bf84855a680f88ea",
    displayName: "AK-74u",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ak-74u.png",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. Improved damage with reliable weapon control. Utilizes 5.45mm ammo for superior bullet velocity.",
      stats: {
        accuracy: 64,
        range: 53,
        mobility: 68,
        damage: 75,
        fireRate: 72,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "11",
          optionId: "60e36057bf84855a680f98bb",
        },
        {
          orderPlacement: "29",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "20",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "3",
          optionId: "60e36050bf84855a680f98b9",
        },
        {
          orderPlacement: "38",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "46",
          optionId: "60e1de7bbf84855a680f8f89",
        },
        {
          orderPlacement: "23",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "31",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "4",
          optionId: "60e36087bf84855a680f98c1",
        },
        {
          orderPlacement: "21",
          optionId: "60e360aabf84855a680f98c5",
        },
        {
          orderPlacement: "13",
          optionId: "60e36098bf84855a680f98c3",
        },
        {
          orderPlacement: "30",
          optionId: "60e360b8bf84855a680f98c9",
        },
        {
          orderPlacement: "48",
          optionId: "60e360ddbf84855a680f98d1",
        },
        {
          orderPlacement: "39",
          optionId: "60e360cfbf84855a680f98cd",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "32",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "47",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "55",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "15",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60e1def0bf84855a680f8f97",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "50",
          optionId: "60e1def4bf84855a680f8f99",
        },
        {
          orderPlacement: "16",
          optionId: "60e1e46ebf84855a680f8f9f",
        },
        {
          orderPlacement: "25",
          optionId: "60e353d7bf84855a680f9697",
        },
        {
          orderPlacement: "34",
          optionId: "60e360ffbf84855a680f98d5",
        },
        {
          orderPlacement: "8",
          optionId: "60e35c1bbf84855a680f9817",
        },
        {
          orderPlacement: "43",
          optionId: "60e1e486bf84855a680f8fa5",
        },
        {
          orderPlacement: "51",
          optionId: "60e35405bf84855a680f96a1",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "35",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "45",
          optionId: "60e1e4d7bf84855a680f8fad",
        },
        {
          orderPlacement: "54",
          optionId: "60e1e4dcbf84855a680f8faf",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["ak74u"],
    category: "SMG",
  },
  {
    _id: "60ded3d0bf84855a680f8891",
    displayName: "Grau 5.56",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/grau-556.png",
    gameInfo: {
      blurb:
        "This modular 5.56 weapon platform is lightweight and maneuverable, with exceptional range. Precision engineering and world class aftermarket barrels give this weapon extreme potential.",
      stats: {
        accuracy: 70,
        range: 66,
        mobility: 65,
        damage: 72,
        fireRate: 71.5,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "10",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "37",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "12",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "18",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "36",
          optionId: "60e22060bf84855a680f9304",
        },
        {
          orderPlacement: "56",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "43",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "9",
          optionId: "60e22038bf84855a680f9302",
        },
        {
          orderPlacement: "50",
          optionId: "60e2206cbf84855a680f9306",
        },
        {
          orderPlacement: "99",
          optionId: "60e22083bf84855a680f930a",
        },
        {
          orderPlacement: "41",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "57",
          optionId: "60e2207abf84855a680f9308",
        },
        {
          orderPlacement: "30",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "52",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "3",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "15",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "11",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "29",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "19",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "23",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "27",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "33",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "38",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "44",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "46",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "47",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "49",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "53",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "60",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "62",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "61",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "64",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "23",
          optionId: "60e211f2bf84855a680f9230",
        },
        {
          orderPlacement: "19",
          optionId: "60e211e0bf84855a680f9228",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "50",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "62",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "8",
          optionId: "60e2124dbf84855a680f9234",
        },
        {
          orderPlacement: "17",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "14",
          optionId: "60e21275bf84855a680f923c",
        },
        {
          orderPlacement: "20",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "25",
          optionId: "60df73d6bf84855a680f8a8f",
        },
        {
          orderPlacement: "31",
          optionId: "60e22172bf84855a680f9312",
        },
        {
          orderPlacement: "34",
          optionId: "60e212c5bf84855a680f9248",
        },
        {
          orderPlacement: "54",
          optionId: "60e212a9bf84855a680f9244",
        },
        {
          orderPlacement: "59",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "63",
          optionId: "60df73c2bf84855a680f8a8b",
        },
        {
          orderPlacement: "65",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "24",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "39",
          optionId: "60df7471bf84855a680f8aa5",
        },
        {
          orderPlacement: "22",
          optionId: "60e221b9bf84855a680f9318",
        },
        {
          orderPlacement: "40",
          optionId: "60e221bfbf84855a680f931a",
        },
        {
          orderPlacement: "58",
          optionId: "60e221c7bf84855a680f931c",
        },
        {
          orderPlacement: "6",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "13",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "21",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "26",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "32",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "35",
          optionId: "60df7521bf84855a680f8abf",
        },
        {
          orderPlacement: "42",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "45",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "48",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "55",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "66",
          optionId: "60df7536bf84855a680f8ac3",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["grau"],
    category: "Assault Rifle",
  },
  {
    _id: "60df67d2bf84855a680f898a",
    displayName: "Sykov",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/sykov.png",
    gameInfo: {
      blurb:
        "A dependable fallback in close quarters, this double-action/single-action sidearm comes with a few custom gunsmith mods that make it an outstanding addition to any arsenal.",
      stats: {
        accuracy: 53,
        range: 43,
        mobility: 80,
        damage: 57,
        fireRate: 57,
        control: 71,
      },
      availableOptions: [
        {
          orderPlacement: "5",
          optionId: "60e3f78d8a26dd1acccc62a6",
        },
        {
          orderPlacement: "19",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "21",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "11",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "28",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "39",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "18",
          optionId: "60e3fe8a8a26dd1acccc641e",
        },
        {
          orderPlacement: "40",
          optionId: "60e3fe918a26dd1acccc6420",
        },
        {
          orderPlacement: "9",
          optionId: "60e3fe868a26dd1acccc641c",
        },
        {
          orderPlacement: "8",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "24",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "34",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "4",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "7",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "14",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "21",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "17",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "26",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "29",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "35",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "22",
          optionId: "60e3fead8a26dd1acccc6424",
        },
        {
          orderPlacement: "10",
          optionId: "60e3fea48a26dd1acccc6422",
        },
        {
          orderPlacement: "37",
          optionId: "60e3feb38a26dd1acccc6426",
        },
        {
          orderPlacement: "20",
          optionId: "60e3fec08a26dd1acccc6428",
        },
        {
          orderPlacement: "33",
          optionId: "60e3fec38a26dd1acccc642a",
        },
        {
          orderPlacement: "20",
          optionId: "60e3fed68a26dd1acccc642e",
        },
        {
          orderPlacement: "30",
          optionId: "60e3fedd8a26dd1acccc6430",
        },
        {
          orderPlacement: "15",
          optionId: "60e3fee88a26dd1acccc6432",
        },
        {
          orderPlacement: "27",
          optionId: "60e3feeb8a26dd1acccc6434",
        },
        {
          orderPlacement: "31",
          optionId: "60e3feee8a26dd1acccc6436",
        },
        {
          orderPlacement: "3",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "6",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "12",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "16",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "23",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "25",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "32",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "36",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "38",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "99",
          optionId: "60e3f8098a26dd1acccc62c0",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["sykov"],
    category: "Handgun",
  },
  {
    _id: "60df4b05bf84855a680f88f8",
    displayName: "PP19 Bizon",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/pp19-bizon.png",
    gameInfo: {
      blurb:
        "Well-balanced automatic submachine gun with a high capacity helical magazine.",
      stats: {
        accuracy: 64,
        range: 53,
        mobility: 68,
        damage: 72,
        fireRate: 67,
        control: 75,
      },
      availableOptions: [
        {
          orderPlacement: "16",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "22",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "26",
          optionId: "60df7e5abf84855a680f8c12",
        },
        {
          orderPlacement: "9",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "4",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "41",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "14",
          optionId: "60e3775fbf84855a680f9b08",
        },
        {
          orderPlacement: "32",
          optionId: "60e37764bf84855a680f9b0a",
        },
        {
          orderPlacement: "37",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "44",
          optionId: "60e37768bf84855a680f9b0c",
        },
        {
          orderPlacement: "7",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "36",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "23",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "20",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "25",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "42",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "11",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "15",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "19",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "21",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "24",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "28",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "31",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "34",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "38",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "40",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "43",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "46",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "48",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "49",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "30",
          optionId: "60e37777bf84855a680f9b0e",
        },
        {
          orderPlacement: "3",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "6",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "13",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "18",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "27",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "33",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "39",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "45",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "12",
          optionId: "60e377b9bf84855a680f9b14",
        },
        {
          orderPlacement: "29",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "35",
          optionId: "60e377c7bf84855a680f9b18",
        },
        {
          orderPlacement: "47",
          optionId: "60df739abf84855a680f8a87",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["bizon"],
    category: "SMG",
  },
  {
    _id: "60df4f48bf84855a680f8906",
    displayName: "Origin 12",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/origin-12.png",
    gameInfo: {
      blurb:
        "A semi-automatic shotgun with a large ammo capacity allows for continuous firing. Effective at close range.",
      stats: {
        accuracy: 50,
        range: 38,
        mobility: 76,
        damage: 76,
        fireRate: 49,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "19",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "3",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "6",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "29",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "21",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "36",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "42",
          optionId: "60e38f8cbf84855a680f9e1d",
        },
        {
          orderPlacement: "30",
          optionId: "60e38f89bf84855a680f9e1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e38f87bf84855a680f9e19",
        },
        {
          orderPlacement: "31",
          optionId: "60e38f62bf84855a680f9e17",
        },
        {
          orderPlacement: "9",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "27",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "4",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "40",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "10",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "23",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "2",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "7",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "13",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "18",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "22",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "25",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "32",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "34",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "37",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "41",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "45",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "48",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "50",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "12",
          optionId: "60e38fa4bf84855a680f9e21",
        },
        {
          orderPlacement: "33",
          optionId: "60e38fabbf84855a680f9e23",
        },
        {
          orderPlacement: "44",
          optionId: "60e38fb1bf84855a680f9e25",
        },
        {
          orderPlacement: "14",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "24",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "8",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "11",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "20",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "16",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "26",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "35",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "38",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "43",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "49",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "17",
          optionId: "60e223dfbf84855a680f9374",
        },
        {
          orderPlacement: "28",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "39",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "47",
          optionId: "60e38fcfbf84855a680f9e29",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["origin"],
    category: "Shotgun",
  },
  {
    _id: "60df5b3dbf84855a680f891c",
    displayName: "Holger-26",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/holger-26.png",
    gameInfo: {
      blurb:
        "A versatile fully automatic 5.56mm light machine gun. Modular design can be configured for a broad range of engagements.",
      stats: {
        accuracy: 73,
        range: 76,
        mobility: 52,
        damage: 73,
        fireRate: 71,
        control: 72,
      },
      availableOptions: [
        {
          orderPlacement: "20",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "2",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "27",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "14",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "7",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "39",
          optionId: "60e3b53b8a26dd1acccc59ec",
        },
        {
          orderPlacement: "9",
          optionId: "60e3b5238a26dd1acccc59ea",
        },
        {
          orderPlacement: "19",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "51",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "38",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "49",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "13",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "31",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "35",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "45",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "3",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "8",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "6",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "15",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "11",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "23",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "24",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "26",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "29",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "32",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "34",
          optionId: "60e3b6d38a26dd1acccc59fb",
        },
        {
          orderPlacement: "36",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "40",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "42",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "44",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "46",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "48",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "50",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "52",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "54",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "56",
          optionId: "60e3b70e8a26dd1acccc59ff",
        },
        {
          orderPlacement: "25",
          optionId: "60e34416bf84855a680f9509",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "18",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "30",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "43",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "53",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "12",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "16",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "22",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "33",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "37",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "41",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "57",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "21",
          optionId: "60e3b5fe8a26dd1acccc59f3",
        },
        {
          orderPlacement: "28",
          optionId: "60e3b60c8a26dd1acccc59f5",
        },
        {
          orderPlacement: "47",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "55",
          optionId: "60e3b6108a26dd1acccc59f7",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["holger"],
    category: "LMG",
  },
  {
    _id: "60ded290bf84855a680f8887",
    displayName: "QBZ-83",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/qbz-83.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. Superior mobility with improved handling speeds. Erratic initial recoil with less accurate hipfire spread.",
      stats: {
        accuracy: 73,
        range: 62,
        mobility: 70,
        damage: 67,
        fireRate: 76,
        control: 71,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "47",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "4",
          optionId: "60e20a5bbf84855a680f90ec",
        },
        {
          orderPlacement: "13",
          optionId: "60e20a65bf84855a680f90ee",
        },
        {
          orderPlacement: "21",
          optionId: "60e20a73bf84855a680f90f0",
        },
        {
          orderPlacement: "30",
          optionId: "60e20a7bbf84855a680f90f2",
        },
        {
          orderPlacement: "39",
          optionId: "60e20a85bf84855a680f90f4",
        },
        {
          orderPlacement: "48",
          optionId: "60e20a9ebf84855a680f90f8",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e8ecbf84855a680f903e",
        },
        {
          orderPlacement: "16",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "34",
          optionId: "60e20b1fbf84855a680f9102",
        },
        {
          orderPlacement: "43",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "51",
          optionId: "60e20b3fbf84855a680f9106",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["qbz"],
    category: "Assault Rifle",
  },
  {
    _id: "60df61dabf84855a680f895b",
    displayName: "Rytec AMR",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/rytec-amr.png",
    gameInfo: {
      blurb:
        "This semi-automatic Anti-Material Rifle is chambered in .50 BMG for dominant long range assaults. A 25x59mm high-explosive payload variant is officially listed as 'experimental', but has been deployed on multiple classified missions with great effectiveness.",
      stats: {
        accuracy: 80,
        range: 78,
        mobility: 40,
        damage: 84,
        fireRate: 46,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "21",
          optionId: "60e3ee728a26dd1acccc6124",
        },
        {
          orderPlacement: "23",
          optionId: "60e3ee778a26dd1acccc6126",
        },
        {
          orderPlacement: "27",
          optionId: "60e3ee8f8a26dd1acccc612c",
        },
        {
          orderPlacement: "15",
          optionId: "60e3ee898a26dd1acccc612a",
        },
        {
          orderPlacement: "4",
          optionId: "60e3ee828a26dd1acccc6128",
        },
        {
          orderPlacement: "16",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "6",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "3",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "28",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "22",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "7",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "12",
          optionId: "60e3ec798a26dd1acccc60ba",
        },
        {
          orderPlacement: "26",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "20",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "32",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "8",
          optionId: "60e3ee9e8a26dd1acccc612e",
        },
        {
          orderPlacement: "34",
          optionId: "60e3ec858a26dd1acccc60bc",
        },
        {
          orderPlacement: "18",
          optionId: "60e3eea18a26dd1acccc6130",
        },
        {
          orderPlacement: "10",
          optionId: "60e3eecf8a26dd1acccc6138",
        },
        {
          orderPlacement: "30",
          optionId: "60e3eebe8a26dd1acccc6136",
        },
        {
          orderPlacement: "5",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "2",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "24",
          optionId: "60e3eed68a26dd1acccc613a",
        },
        {
          orderPlacement: "13",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "9",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "11",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "17",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "14",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "19",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "25",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "31",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "33",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "29",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["rytec"],
    category: "Sniper Rifle",
  },
  {
    _id: "60ded488bf84855a680f8897",
    displayName: "M13",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m13.png",
    gameInfo: {
      blurb:
        "Automatic assault rifle featuring a short stroke piston system that keeps the fire rate high and the recoil low.",
      stats: {
        accuracy: 72,
        range: 64,
        mobility: 62,
        damage: 71,
        fireRate: 77,
        control: 74,
      },
      availableOptions: [
        {
          orderPlacement: "11",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "8",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "2",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "33",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "19",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "60",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "56",
          optionId: "60e1cf1cbf84855a680f8d97",
        },
        {
          orderPlacement: "15",
          optionId: "60e1cf0ebf84855a680f8d93",
        },
        {
          orderPlacement: "37",
          optionId: "60e1cf15bf84855a680f8d95",
        },
        {
          orderPlacement: "50",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "4",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "3",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "44",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "22",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "5",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "7",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "10",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "12",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "16",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "23",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "25",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "35",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "28",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "31",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "39",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "43",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "45",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "48",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "51",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "55",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "63",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "58",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "67",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "69",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "20",
          optionId: "60e1cf42bf84855a680f8d99",
        },
        {
          orderPlacement: "49",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "34",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "65",
          optionId: "60e1cf58bf84855a680f8d9b",
        },
        {
          orderPlacement: "9",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "13",
          optionId: "60df73d6bf84855a680f8a8f",
        },
        {
          orderPlacement: "18",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "21",
          optionId: "60e21275bf84855a680f923c",
        },
        {
          orderPlacement: "27",
          optionId: "60e212a9bf84855a680f9244",
        },
        {
          orderPlacement: "30",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "36",
          optionId: "60e2124dbf84855a680f9234",
        },
        {
          orderPlacement: "40",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "47",
          optionId: "60e21290bf84855a680f9240",
        },
        {
          orderPlacement: "52",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "64",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "57",
          optionId: "60df73efbf84855a680f8a93",
        },
        {
          orderPlacement: "68",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "24",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "41",
          optionId: "60e1cfa2bf84855a680f8d9d",
        },
        {
          orderPlacement: "53",
          optionId: "60df7471bf84855a680f8aa5",
        },
        {
          orderPlacement: "14",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "6",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "26",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "61",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "17",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "29",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "42",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "32",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "38",
          optionId: "60df7521bf84855a680f8abf",
        },
        {
          orderPlacement: "46",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "54",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "59",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "62",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "66",
          optionId: "60df7536bf84855a680f8ac3",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["m13"],
    category: "Assault Rifle",
  },
  {
    _id: "60df6050bf84855a680f894d",
    displayName: "Pelington 703",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/pelington-703.png",
    gameInfo: {
      blurb:
        "Bolt-action sniper rifle. Hand loaded with improved aim speeds and faster rechamber. 1-shot kill to the head or upper chest. Hold button while ADS to steady.",
      stats: {
        accuracy: 75,
        range: 80,
        mobility: 48,
        damage: 81,
        fireRate: 42,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e3e29d8a26dd1acccc5eda",
        },
        {
          orderPlacement: "11",
          optionId: "60e3e2a18a26dd1acccc5edc",
        },
        {
          orderPlacement: "20",
          optionId: "60e3e2a98a26dd1acccc5ede",
        },
        {
          orderPlacement: "29",
          optionId: "60e3e2b78a26dd1acccc5ee2",
        },
        {
          orderPlacement: "38",
          optionId: "60e3e2bc8a26dd1acccc5ee4",
        },
        {
          orderPlacement: "46",
          optionId: "60e3e2c38a26dd1acccc5ee6",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "4",
          optionId: "60e3e2cf8a26dd1acccc5ee8",
        },
        {
          orderPlacement: "13",
          optionId: "60e3e2e78a26dd1acccc5eec",
        },
        {
          orderPlacement: "21",
          optionId: "60e3e2f38a26dd1acccc5eee",
        },
        {
          orderPlacement: "30",
          optionId: "60e3e2ff8a26dd1acccc5ef0",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "48",
          optionId: "60e3e3158a26dd1acccc5ef6",
        },
        {
          orderPlacement: "39",
          optionId: "60e3e30d8a26dd1acccc5ef4",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "17",
          optionId: "60e3e3248a26dd1acccc5ef8",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "37",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "52",
          optionId: "60e3e3308a26dd1acccc5efc",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e3e33e8a26dd1acccc5efe",
        },
        {
          orderPlacement: "25",
          optionId: "60e3e3508a26dd1acccc5f04",
        },
        {
          orderPlacement: "16",
          optionId: "60e3e34c8a26dd1acccc5f02",
        },
        {
          orderPlacement: "34",
          optionId: "60e3e3578a26dd1acccc5f06",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e3e35f8a26dd1acccc5f08",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e20f2fbf84855a680f91bc",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["pelington"],
    category: "Sniper Rifle",
  },
  {
    _id: "60df4b65bf84855a680f88fc",
    displayName: "Uzi",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/uzi.png",
    gameInfo: {
      blurb:
        "A fully automatic open bolt submachine gun. Simple, steady, effective.",
      stats: {
        accuracy: 61,
        range: 49,
        mobility: 78,
        damage: 70,
        fireRate: 64,
        control: 78,
      },
      availableOptions: [
        {
          orderPlacement: "5",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "15",
          optionId: "60df7e5abf84855a680f8c12",
        },
        {
          orderPlacement: "20",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "12",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "29",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "51",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "34",
          optionId: "60e37b81bf84855a680f9ba6",
        },
        {
          orderPlacement: "13",
          optionId: "60e37b74bf84855a680f9ba4",
        },
        {
          orderPlacement: "38",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "52",
          optionId: "60e37b91bf84855a680f9ba8",
        },
        {
          orderPlacement: "99",
          optionId: "60e37babbf84855a680f9bac",
        },
        {
          orderPlacement: "18",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "45",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "26",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "16",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "49",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "31",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "2",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "6",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "4",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "14",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "10",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "23",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "27",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "17",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "30",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "35",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "39",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "36",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "42",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "44",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "46",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "50",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "53",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "55",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "22",
          optionId: "60e21301bf84855a680f9250",
        },
        {
          orderPlacement: "41",
          optionId: "60df7463bf84855a680f8aa3",
        },
        {
          orderPlacement: "99",
          optionId: "60e37bdcbf84855a680f9bb0",
        },
        {
          orderPlacement: "7",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "19",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "32",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "37",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "47",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "8",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "11",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "21",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "25",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "28",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "33",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "40",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "48",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "9",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "24",
          optionId: "60e37beabf84855a680f9bb2",
        },
        {
          orderPlacement: "43",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "54",
          optionId: "60df739abf84855a680f8a87",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["uzi"],
    category: "SMG",
  },
  {
    _id: "60df486abf84855a680f88e2",
    displayName: "Milano 821",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/milano-821.png",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. High damage with a slower fire rate and fair recoil. Improved handling speeds with more accurate hipfire spread.",
      stats: {
        accuracy: 61,
        range: 49,
        mobility: 78,
        damage: 70,
        fireRate: 59,
        control: 83,
      },
      availableOptions: [
        {
          orderPlacement: "11",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "3",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "20",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "30",
          optionId: "60e357f1bf84855a680f9751",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "4",
          optionId: "60e357bebf84855a680f9747",
        },
        {
          orderPlacement: "13",
          optionId: "60e357d2bf84855a680f974b",
        },
        {
          orderPlacement: "21",
          optionId: "60e357e7bf84855a680f974f",
        },
        {
          orderPlacement: "39",
          optionId: "60e357fabf84855a680f9753",
        },
        {
          orderPlacement: "48",
          optionId: "60e35804bf84855a680f9755",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "32",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "47",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "55",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e8ecbf84855a680f903e",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "34",
          optionId: "60e35908bf84855a680f9759",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e3591cbf84855a680f975d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["milano"],
    category: "SMG",
  },
  {
    _id: "60df5a32bf84855a680f8912",
    displayName: "Stoner 63",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/stoner-63.png",
    gameInfo: {
      blurb:
        "Full-auto light machine gun. Improved fire rate with a large ammo capacity. Good recoil control and visibility when sustaining fire.",
      stats: {
        accuracy: 75,
        range: 76,
        mobility: 55,
        damage: 82,
        fireRate: 69,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "21",
          optionId: "60e39bf6bf84855a680fa062",
        },
        {
          orderPlacement: "13",
          optionId: "60e39befbf84855a680fa060",
        },
        {
          orderPlacement: "4",
          optionId: "60e39bdfbf84855a680fa05c",
        },
        {
          orderPlacement: "30",
          optionId: "60e39c00bf84855a680fa064",
        },
        {
          orderPlacement: "39",
          optionId: "60e39c08bf84855a680fa066",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "48",
          optionId: "60e39c15bf84855a680fa06a",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "52",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e39c31bf84855a680fa06e",
        },
        {
          orderPlacement: "25",
          optionId: "60e39c3fbf84855a680fa070",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "34",
          optionId: "60e39ce1bf84855a680fa076",
        },
        {
          orderPlacement: "51",
          optionId: "60e39c46bf84855a680fa072",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e20f2fbf84855a680f91bc",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["stoner"],
    category: "LMG",
  },
  {
    _id: "60df67a3bf84855a680f8988",
    displayName: ".357",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/357.png",
    gameInfo: {
      blurb:
        "Double action revolver firing .357 Magnum ammunition for powerful damage over extended ranges.",
      stats: {
        accuracy: 60,
        range: 56,
        mobility: 76,
        damage: 63,
        fireRate: 44,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "20",
          optionId: "60e3fd498a26dd1acccc63db",
        },
        {
          orderPlacement: "5",
          optionId: "60e3fd428a26dd1acccc63d9",
        },
        {
          orderPlacement: "8",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "16",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "26",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "7",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "17",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "28",
          optionId: "60e3fd4e8a26dd1acccc63dd",
        },
        {
          orderPlacement: "10",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "12",
          optionId: "60e3fd778a26dd1acccc63e1",
        },
        {
          orderPlacement: "35",
          optionId: "60e3fd7d8a26dd1acccc63e3",
        },
        {
          orderPlacement: "38",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "23",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "3",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "6",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "18",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "9",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "15",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "13",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "21",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "30",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "36",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "32",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "27",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "39",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "41",
          optionId: "60e3fd888a26dd1acccc63e5",
        },
        {
          orderPlacement: "29",
          optionId: "60e3fe068a26dd1acccc63ed",
        },
        {
          orderPlacement: "11",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "4",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "19",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "22",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "31",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "25",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "34",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "40",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "37",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "14",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "24",
          optionId: "60e3f7d68a26dd1acccc62b8",
        },
        {
          orderPlacement: "99",
          optionId: "60e3f8098a26dd1acccc62c0",
        },
        {
          orderPlacement: "33",
          optionId: "60e3f7db8a26dd1acccc62ba",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["357"],
    category: "Handgun",
  },
  {
    _id: "60df5d75bf84855a680f8930",
    displayName: "Type 63",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/type-63.png",
    gameInfo: {
      blurb:
        "Semi-auto tactical rifle. High damage and reliable accuracy with lower ammo capacity. Fair visibility and control while firing.",
      stats: {
        accuracy: 75,
        range: 71,
        mobility: 62,
        damage: 81,
        fireRate: 50,
        control: 73,
      },
      availableOptions: [
        {
          orderPlacement: "11",
          optionId: "60e1dd86bf84855a680f8f81",
        },
        {
          orderPlacement: "20",
          optionId: "60e3ceee8a26dd1acccc5bdf",
        },
        {
          orderPlacement: "29",
          optionId: "60e1de6bbf84855a680f8f85",
        },
        {
          orderPlacement: "38",
          optionId: "60e1de73bf84855a680f8f87",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dd79bf84855a680f8f7f",
        },
        {
          orderPlacement: "46",
          optionId: "60e3d81e8a26dd1acccc5cff",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "31",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "23",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "4",
          optionId: "60e3d7418a26dd1acccc5cdd",
        },
        {
          orderPlacement: "13",
          optionId: "60e3d74f8a26dd1acccc5ce1",
        },
        {
          orderPlacement: "21",
          optionId: "60e3d7578a26dd1acccc5ce3",
        },
        {
          orderPlacement: "30",
          optionId: "60e3d7668a26dd1acccc5ce7",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "48",
          optionId: "60e3d77e8a26dd1acccc5ced",
        },
        {
          orderPlacement: "39",
          optionId: "60e3d7768a26dd1acccc5ceb",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "55",
          optionId: "60e1e510bf84855a680f8fb1",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "52",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "41",
          optionId: "60e3d8938a26dd1acccc5d03",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "50",
          optionId: "60e1def4bf84855a680f8f99",
        },
        {
          orderPlacement: "16",
          optionId: "60e1e46ebf84855a680f8f9f",
        },
        {
          orderPlacement: "34",
          optionId: "60e3d7968a26dd1acccc5cf1",
        },
        {
          orderPlacement: "8",
          optionId: "60e3cf768a26dd1acccc5be7",
        },
        {
          orderPlacement: "25",
          optionId: "60e3cf7f8a26dd1acccc5beb",
        },
        {
          orderPlacement: "43",
          optionId: "60e1e486bf84855a680f8fa5",
        },
        {
          orderPlacement: "51",
          optionId: "60e3d7a28a26dd1acccc5cf5",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "35",
          optionId: "60e1e534bf84855a680f8fb3",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1e542bf84855a680f8fb5",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "45",
          optionId: "60e1e4d7bf84855a680f8fad",
        },
        {
          orderPlacement: "54",
          optionId: "60e1e8c5bf84855a680f903c",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["type63"],
    category: "Tactical Rifle",
  },
  {
    _id: "60df5b0ebf84855a680f891a",
    displayName: "Bruen Mk9",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/bruen-mk9.png",
    gameInfo: {
      blurb:
        "This air-cooled open bolt 5.56 light machine gun features a competitive rate of fire and excellent stability that will dominate the mid to long range battlefield.",
      stats: {
        accuracy: 78,
        range: 74,
        mobility: 52,
        damage: 73,
        fireRate: 72.5,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "9",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "14",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "21",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "28",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "37",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "53",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "19",
          optionId: "60e3a5408a26dd1acccc599e",
        },
        {
          orderPlacement: "38",
          optionId: "60e3a54a8a26dd1acccc59a0",
        },
        {
          orderPlacement: "54",
          optionId: "60e3a55a8a26dd1acccc59a2",
        },
        {
          orderPlacement: "20",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "51",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "35",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "13",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "32",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "45",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "3",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "11",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "7",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "6",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "15",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "25",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "23",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "30",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "27",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "33",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "36",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "41",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "39",
          optionId: "60df72dbbf84855a680f8a65",
        },
        {
          orderPlacement: "44",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "47",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "50",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "52",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "55",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "58",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "26",
          optionId: "60e3a88d8a26dd1acccc59a4",
        },
        {
          orderPlacement: "4",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "48",
          optionId: "60df7471bf84855a680f8aa5",
        },
        {
          orderPlacement: "18",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "24",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "31",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "42",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "5",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "57",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "10",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "12",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "34",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "16",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "22",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "40",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "46",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "59",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "8",
          optionId: "60e1cf42bf84855a680f8d99",
        },
        {
          orderPlacement: "29",
          optionId: "60df737dbf84855a680f8a81",
        },
        {
          orderPlacement: "49",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "43",
          optionId: "60df739abf84855a680f8a87",
        },
        {
          orderPlacement: "56",
          optionId: "60e211f2bf84855a680f9230",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["bruen"],
    category: "LMG",
  },
  {
    _id: "6109bb97ec0dea4e34958025",
    commandCodes: ["cx9", "cx-9"],
    displayName: "CX-9",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/cx-9.png",
    gameInfo: {
      blurb:
        "Excellent maneuverability and a fast fire rate make this blowback-operated SMG a formidable weapon in close-quarters engagements.",
      stats: {
        accuracy: 65,
        range: 52,
        mobility: 79,
        damage: 66,
        fireRate: 80.5,
        control: 74,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "1",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "2",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "4",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "5",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "7",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "6",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "1",
          optionId: "61099ca156bb294be45a7e22",
        },
        {
          orderPlacement: "2",
          optionId: "61099cd256bb294be45a7e24",
        },
        {
          orderPlacement: "3",
          optionId: "61099cd856bb294be45a7e26",
        },
        {
          orderPlacement: "4",
          optionId: "61099cdc56bb294be45a7e28",
        },
        {
          orderPlacement: "5",
          optionId: "61099cdf56bb294be45a7e2a",
        },
        {
          orderPlacement: "1",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "2",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "3",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "2",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "1",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "3",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "4",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "6",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "8",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "9",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "10",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "11",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "12",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "14",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "13",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "15",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "16",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "17",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "18",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "1",
          optionId: "61099cf256bb294be45a7e2c",
        },
        {
          orderPlacement: "2",
          optionId: "61099cf556bb294be45a7e2e",
        },
        {
          orderPlacement: "1",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "3",
          optionId: "61099cf956bb294be45a7e30",
        },
        {
          orderPlacement: "2",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "3",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "4",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "1",
          optionId: "60e34416bf84855a680f9509",
        },
        {
          orderPlacement: "5",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "3",
          optionId: "60e37d76bf84855a680f9c02",
        },
        {
          orderPlacement: "2",
          optionId: "61099d5056bb294be45a7e38",
        },
        {
          orderPlacement: "1",
          optionId: "61099d0956bb294be45a7e32",
        },
        {
          orderPlacement: "2",
          optionId: "61099d0e56bb294be45a7e34",
        },
        {
          orderPlacement: "3",
          optionId: "61099d1256bb294be45a7e36",
        },
        {
          orderPlacement: "2",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "1",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "3",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "4",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "5",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "7",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "6",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "8",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "9",
          optionId: "60df74b8bf84855a680f8ab1",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    category: "SMG",
  },
  {
    _id: "60ded588bf84855a680f88a1",
    displayName: "Oden",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/oden.png",
    gameInfo: {
      blurb:
        "A fully automatic bullpup assault rifle maintains a slow cycle rate to help control hard hitting 12.7 x 55mm ammunition.",
      stats: {
        accuracy: 65,
        range: 68,
        mobility: 57,
        damage: 81,
        fireRate: 56,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "4",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "6",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "10",
          optionId: "60df7e5abf84855a680f8c12",
        },
        {
          orderPlacement: "22",
          optionId: "60df7e65bf84855a680f8c14",
        },
        {
          orderPlacement: "30",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "46",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "54",
          optionId: "60df7203bf84855a680f8a49",
        },
        {
          orderPlacement: "23",
          optionId: "60df7e79bf84855a680f8c16",
        },
        {
          orderPlacement: "39",
          optionId: "60df7e8abf84855a680f8c1a",
        },
        {
          orderPlacement: "8",
          optionId: "60df7270bf84855a680f8a51",
        },
        {
          orderPlacement: "19",
          optionId: "60df7279bf84855a680f8a53",
        },
        {
          orderPlacement: "52",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "3",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "5",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "7",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "11",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "17",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "20",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "26",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "29",
          optionId: "60df732abf84855a680f8a73",
        },
        {
          orderPlacement: "33",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "35",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "37",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "41",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "44",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "47",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "50",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "53",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "56",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "60",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "62",
          optionId: "60df7368bf84855a680f8a7f",
        },
        {
          orderPlacement: "64",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "18",
          optionId: "60df7ef4bf84855a680f8c1c",
        },
        {
          orderPlacement: "40",
          optionId: "60df7efdbf84855a680f8c1e",
        },
        {
          orderPlacement: "58",
          optionId: "60df7f05bf84855a680f8c20",
        },
        {
          orderPlacement: "12",
          optionId: "60df73b1bf84855a680f8a89",
        },
        {
          orderPlacement: "16",
          optionId: "60df742fbf84855a680f8a97",
        },
        {
          orderPlacement: "24",
          optionId: "60df73cbbf84855a680f8a8d",
        },
        {
          orderPlacement: "27",
          optionId: "60df73c2bf84855a680f8a8b",
        },
        {
          orderPlacement: "34",
          optionId: "60df73d6bf84855a680f8a8f",
        },
        {
          orderPlacement: "38",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "42",
          optionId: "60df7436bf84855a680f8a99",
        },
        {
          orderPlacement: "45",
          optionId: "60df744fbf84855a680f8a9f",
        },
        {
          orderPlacement: "49",
          optionId: "60df7442bf84855a680f8a9b",
        },
        {
          orderPlacement: "55",
          optionId: "60df740dbf84855a680f8a95",
        },
        {
          orderPlacement: "57",
          optionId: "60df73e5bf84855a680f8a91",
        },
        {
          orderPlacement: "63",
          optionId: "60df73efbf84855a680f8a93",
        },
        {
          orderPlacement: "65",
          optionId: "60df7448bf84855a680f8a9d",
        },
        {
          orderPlacement: "13",
          optionId: "60e34530bf84855a680f955d",
        },
        {
          orderPlacement: "59",
          optionId: "60e34416bf84855a680f9509",
        },
        {
          orderPlacement: "15",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "32",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "51",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "2",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "9",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "14",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "21",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "25",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "28",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "36",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "43",
          optionId: "60df752fbf84855a680f8ac1",
        },
        {
          orderPlacement: "47",
          optionId: "60df7521bf84855a680f8abf",
        },
        {
          orderPlacement: "61",
          optionId: "60df7f6ebf84855a680f8c26",
        },
        {
          orderPlacement: "66",
          optionId: "60df7536bf84855a680f8ac3",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["oden"],
    category: "Assault Rifle",
  },
  {
    _id: "60df5a9dbf84855a680f8916",
    displayName: "M60",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m60.png",
    gameInfo: {
      blurb:
        "Full-auto light machine gun. Consistent ammo capacity with heavy-grain rounds provides premium stopping power and bullet economy. Slower fire rate and handling speeds.",
      stats: {
        accuracy: 78,
        range: 80,
        mobility: 45,
        damage: 80,
        fireRate: 62,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "11",
          optionId: "60e1dd86bf84855a680f8f81",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dd79bf84855a680f8f7f",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "20",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "4",
          optionId: "60e39db2bf84855a680fa0b4",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "13",
          optionId: "60e39dc1bf84855a680fa0b8",
        },
        {
          orderPlacement: "21",
          optionId: "60e39dc8bf84855a680fa0ba",
        },
        {
          orderPlacement: "48",
          optionId: "60e39de7bf84855a680fa0c2",
        },
        {
          orderPlacement: "30",
          optionId: "60e39dd4bf84855a680fa0bc",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "39",
          optionId: "60e39de3bf84855a680fa0c0",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "52",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e39c31bf84855a680fa06e",
        },
        {
          orderPlacement: "25",
          optionId: "60e39c3fbf84855a680fa070",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "34",
          optionId: "60e4af67e580dd3004e5daec",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e39c46bf84855a680fa072",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["m60"],
    category: "LMG",
  },
  {
    _id: "60df4934bf84855a680f88e8",
    displayName: "KSP 45",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ksp-45.png",
    gameInfo: {
      blurb:
        "3-round burst submachine gun. High damage with moderate range. Burst fire spread is less efficient at long range.",
      stats: {
        accuracy: 65,
        range: 61,
        mobility: 75,
        damage: 80,
        fireRate: 62,
        control: 76,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e35985bf84855a680f9799",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "11",
          optionId: "60e3598dbf84855a680f979b",
        },
        {
          orderPlacement: "20",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "13",
          optionId: "60e35db7bf84855a680f985d",
        },
        {
          orderPlacement: "4",
          optionId: "60e357bebf84855a680f9747",
        },
        {
          orderPlacement: "21",
          optionId: "60e35dcdbf84855a680f9861",
        },
        {
          orderPlacement: "30",
          optionId: "60e35be6bf84855a680f980b",
        },
        {
          orderPlacement: "39",
          optionId: "60e35de3bf84855a680f9865",
        },
        {
          orderPlacement: "48",
          optionId: "60e35dedbf84855a680f9867",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "32",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "47",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "55",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "15",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "41",
          optionId: "60e35ef7bf84855a680f987b",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e35e19bf84855a680f986b",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "25",
          optionId: "60e35a11bf84855a680f97b5",
        },
        {
          orderPlacement: "34",
          optionId: "60e35e33bf84855a680f986f",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "51",
          optionId: "60e35e40bf84855a680f9871",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["ksp"],
    category: "SMG",
  },
  {
    _id: "60df5d45bf84855a680f892e",
    displayName: "AUG (CW)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/aug-cw.png",
    gameInfo: {
      blurb:
        "Burst fire tactical rifle. High damage with moderate recoil and slower movement speeds when firing. Built in optic provides 1.5x magnification.",
      stats: {
        accuracy: 67,
        range: 58,
        mobility: 59,
        damage: 75,
        fireRate: 66,
        control: 65,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "20",
          optionId: "60e3ceee8a26dd1acccc5bdf",
        },
        {
          orderPlacement: "46",
          optionId: "60e3ceff8a26dd1acccc5be3",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "21",
          optionId: "60e3d5f08a26dd1acccc5c8f",
        },
        {
          orderPlacement: "13",
          optionId: "60e3d5e28a26dd1acccc5c8b",
        },
        {
          orderPlacement: "4",
          optionId: "60e3d5d38a26dd1acccc5c87",
        },
        {
          orderPlacement: "30",
          optionId: "60e3d5ff8a26dd1acccc5c93",
        },
        {
          orderPlacement: "39",
          optionId: "60e3d60b8a26dd1acccc5c97",
        },
        {
          orderPlacement: "48",
          optionId: "60e3d6158a26dd1acccc5c9b",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "32",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "47",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "52",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "55",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "6",
          optionId: "60e35ec8bf84855a680f9875",
        },
        {
          orderPlacement: "15",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "41",
          optionId: "60e35ef7bf84855a680f987b",
        },
        {
          orderPlacement: "33",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "8",
          optionId: "60e1e8ecbf84855a680f903e",
        },
        {
          orderPlacement: "25",
          optionId: "60e1e478bf84855a680f8fa1",
        },
        {
          orderPlacement: "16",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "34",
          optionId: "60e3d6b98a26dd1acccc5c9f",
        },
        {
          orderPlacement: "43",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "51",
          optionId: "60e3d0ee8a26dd1acccc5c3f",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "19",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "28",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "36",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "54",
          optionId: "60e20f2fbf84855a680f91bc",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["cwaug", "augcw"],
    category: "Tactical Rifle",
  },
  {
    _id: "60df4822bf84855a680f88e0",
    displayName: "MAC-10",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mac-10.png",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. Excellent fire rate with higher vertical recoil. Improved handling speeds with reduced damage.",
      stats: {
        accuracy: 64,
        range: 44,
        mobility: 81,
        damage: 65,
        fireRate: 82,
        control: 78,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "11",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "20",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "38",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "29",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "4",
          optionId: "60e3550ebf84855a680f96ed",
        },
        {
          orderPlacement: "46",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "13",
          optionId: "60e3551fbf84855a680f96ef",
        },
        {
          orderPlacement: "30",
          optionId: "60e3555fbf84855a680f96f3",
        },
        {
          orderPlacement: "21",
          optionId: "60e35551bf84855a680f96f1",
        },
        {
          orderPlacement: "39",
          optionId: "60e3556ebf84855a680f96f5",
        },
        {
          orderPlacement: "14",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "48",
          optionId: "60e35580bf84855a680f96f7",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "23",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "31",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "40",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "49",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "17",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "22",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "32",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "27",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "37",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "52",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "47",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "42",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "55",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "24",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "15",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "33",
          optionId: "6103130a84d1eb258ce0f4c2",
        },
        {
          orderPlacement: "41",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "50",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "8",
          optionId: "60e35685bf84855a680f96fd",
        },
        {
          orderPlacement: "16",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "25",
          optionId: "60e35692bf84855a680f9701",
        },
        {
          orderPlacement: "34",
          optionId: "60e356a2bf84855a680f9705",
        },
        {
          orderPlacement: "43",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "18",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "51",
          optionId: "60e356b3bf84855a680f9709",
        },
        {
          orderPlacement: "9",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "26",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "35",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "44",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "10",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "28",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "53",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "19",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "36",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "54",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "45",
          optionId: "60e1da3bbf84855a680f8f17",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mac10", "mac"],
    category: "SMG",
  },
  {
    _id: "61161f48147d3f4f203722f2",
    commandCodes: ["em2"],
    displayName: "EM2",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/em2.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. Well rounded British rifle with good firing control. Built in low-zoom optic improves accuracy. Slower fire rate with reliable range.",
      stats: {
        accuracy: 66,
        range: 62,
        mobility: 62,
        "damage:": 80,
        fireRate: 63,
        control: 67,
      },
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61161a0f147d3f4f203722ae",
        },
        {
          orderPlacement: "2",
          optionId: "61161a16147d3f4f203722b0",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "2",
          optionId: "61161a51147d3f4f203722b6",
        },
        {
          orderPlacement: "1",
          optionId: "61161a38147d3f4f203722b2",
        },
        {
          orderPlacement: "3",
          optionId: "61161a64147d3f4f203722b8",
        },
        {
          orderPlacement: "4",
          optionId: "61161a74147d3f4f203722bc",
        },
        {
          orderPlacement: "6",
          optionId: "61161a8a147d3f4f203722c0",
        },
        {
          orderPlacement: "5",
          optionId: "61161a7f147d3f4f203722be",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "8",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "10",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "9",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "12",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da35bf84855a680f8f15",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da2fbf84855a680f8f13",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "1",
          optionId: "61161ad2147d3f4f203722c8",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "3",
          optionId: "61161ae3147d3f4f203722cc",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da8bbf84855a680f8f2d",
        },
        {
          orderPlacement: "6",
          optionId: "61161aff147d3f4f203722d0",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "4",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    category: "Assault Rifle",
  },
  {
    _id: "611620ae147d3f4f203722f6",
    commandCodes: ["tec", "tec9", "tec-9"],
    displayName: "TEC-9",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/tec-9.png",
    gameInfo: {
      blurb:
        "Semi-auto submachine gun. Improved accuracy with minimal recoil. High damage output with moderate range.",
      stats: {
        accuracy: 61,
        range: 49,
        mobility: 71,
        "damage:": 64,
        fireRate: 80,
        control: 74,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "3",
          optionId: "611623b9147d3f4f2037235e",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "1",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "2",
          optionId: "61161b4d147d3f4f203722dc",
        },
        {
          orderPlacement: "6",
          optionId: "61161b2b147d3f4f203722d6",
        },
        {
          orderPlacement: "1",
          optionId: "61161b44147d3f4f203722da",
        },
        {
          orderPlacement: "3",
          optionId: "61161b5b147d3f4f203722de",
        },
        {
          orderPlacement: "4",
          optionId: "61161b65147d3f4f203722e0",
        },
        {
          orderPlacement: "5",
          optionId: "61161b6c147d3f4f203722e2",
        },
        {
          orderPlacement: "6",
          optionId: "61161b75147d3f4f203722e4",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "7",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "8",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "10",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "9",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "12",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "2",
          optionId: "60e1e4bebf84855a680f8fa9",
        },
        {
          orderPlacement: "4",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "2",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "1",
          optionId: "61161ba1147d3f4f203722e8",
        },
        {
          orderPlacement: "2",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "3",
          optionId: "61161bab147d3f4f203722ec",
        },
        {
          orderPlacement: "4",
          optionId: "60e35e33bf84855a680f986f",
        },
        {
          orderPlacement: "5",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "6",
          optionId: "60e35e40bf84855a680f9871",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "4",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "6",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    category: "SMG",
  },
  {
    _id: "611e8e8bbe7e9b1954658e27",
    commandCodes: ["marshal"],
    gameId: "60da97598821ed46dc9c008c",
    displayName: "Marshal",
    image: "/warzone/marshal.png",
    gameInfo: {
      blurb:
        "Break action pistol. Hand loaded double barrel pistol fires 12 gauge shells. Excellent damage at close range with a 1-shot kill potential.",
      stats: {
        accuracy: 51,
        range: 40,
        mobility: 75,
        damage: 77,
        fireRate: 42,
        control: 69,
      },
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "611e8f4ebe7e9b1954658e3b",
        },
        {
          orderPlacement: "2",
          optionId: "611e8f57be7e9b1954658e3d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "1",
          optionId: "611e8f30be7e9b1954658e37",
        },
        {
          orderPlacement: "1",
          optionId: "60e3f1498a26dd1acccc61a2",
        },
      ],
      maxOptions: 5,
    },
    category: "Handgun",
    __v: 0,
  },
  {
    _id: "61252d6022975356085a1a07",
    commandCodes: ["raal", "raalmg"],
    displayName: "RAAL MG",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/raal-mg.png",
    gameInfo: {
      stats: {
        accuracy: 71,
        range: 82,
        mobility: 47,
        damage: 81,
        fireRate: 63,
        control: 64,
      },
      blurb:
        "The Reconnaissance Auxiliary Assault Lightweight Machine Gun uses a low fire rate and a reciprocating barrel to mitigate the powerful .338 Norma Magrecoil. Advanced titanium construction keeps the weight manageable.",
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "60df71e7bf84855a680f8a41",
        },
        {
          orderPlacement: "2",
          optionId: "60df6f37bf84855a680f898c",
        },
        {
          orderPlacement: "3",
          optionId: "60df71eebf84855a680f8a43",
        },
        {
          orderPlacement: "4",
          optionId: "60df71f7bf84855a680f8a45",
        },
        {
          orderPlacement: "5",
          optionId: "60df71dcbf84855a680f8a3f",
        },
        {
          orderPlacement: "7",
          optionId: "61252e4522975356085a1a0f",
        },
        {
          orderPlacement: "1",
          optionId: "61252e9922975356085a1a13",
        },
        {
          orderPlacement: "6",
          optionId: "60df71fdbf84855a680f8a47",
        },
        {
          orderPlacement: "2",
          optionId: "61252ebb22975356085a1a15",
        },
        {
          orderPlacement: "3",
          optionId: "61252ee722975356085a1a19",
        },
        {
          orderPlacement: "2",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "1",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "1",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "3",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "4",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "5",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "7",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "6",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "8",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "9",
          optionId: "60df72fabf84855a680f8a69",
        },
        {
          orderPlacement: "10",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "11",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "12",
          optionId: "60e3b70e8a26dd1acccc59ff",
        },
        {
          orderPlacement: "13",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "14",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "15",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "16",
          optionId: "60df7361bf84855a680f8a7d",
        },
        {
          orderPlacement: "17",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "18",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "19",
          optionId: "60df7345bf84855a680f8a79",
        },
        {
          orderPlacement: "2",
          optionId: "61252f0522975356085a1a1d",
        },
        {
          orderPlacement: "3",
          optionId: "60e33f4dbf84855a680f9490",
        },
        {
          orderPlacement: "1",
          optionId: "61252efd22975356085a1a1b",
        },
        {
          orderPlacement: "4",
          optionId: "61252f2c22975356085a1a21",
        },
        {
          orderPlacement: "1",
          optionId: "61252f7422975356085a1a25",
        },
        {
          orderPlacement: "3",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "2",
          optionId: "61252f7c22975356085a1a27",
        },
        {
          orderPlacement: "4",
          optionId: "61252f8022975356085a1a29",
        },
        {
          orderPlacement: "1",
          optionId: "60e3c6238a26dd1acccc5a9e",
        },
        {
          orderPlacement: "2",
          optionId: "61252fa622975356085a1a2d",
        },
        {
          orderPlacement: "2",
          optionId: "60df749dbf84855a680f8aad",
        },
        {
          orderPlacement: "1",
          optionId: "60df748dbf84855a680f8aa9",
        },
        {
          orderPlacement: "3",
          optionId: "60df7496bf84855a680f8aab",
        },
        {
          orderPlacement: "1",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "2",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "5",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "4",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "3",
          optionId: "60df74b1bf84855a680f8aaf",
        },
        {
          orderPlacement: "6",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "7",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "8",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "9",
          optionId: "60df752fbf84855a680f8ac1",
        },
      ],
      maxOptions: 5,
    },
    category: "LMG",
    __v: 0,
  },
  {
    _id: "60df5a67bf84855a680f8914",
    displayName: "MG 82",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mg-82.png",
    gameInfo: {
      blurb:
        "Full-auto light machine gun. Highest fire rate in class with improved aiming speed. Moderate recoil and damage with increased ammo capacity.",
      stats: {
        accuracy: 74,
        range: 72,
        mobility: 47,
        damage: 78,
        fireRate: 71,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "1",
          optionId: "60e4adf8e580dd3004e5daca",
        },
        {
          orderPlacement: "2",
          optionId: "60e4ae0ce580dd3004e5dace",
        },
        {
          orderPlacement: "3",
          optionId: "60e4ae1ee580dd3004e5dad4",
        },
        {
          orderPlacement: "4",
          optionId: "60e4ae32e580dd3004e5dad8",
        },
        {
          orderPlacement: "5",
          optionId: "60e4ae3fe580dd3004e5dada",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "6",
          optionId: "60e4ae5ce580dd3004e5dae0",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "8",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "10",
          optionId: "60e1dd1fbf84855a680f8f7b",
        },
        {
          orderPlacement: "9",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "11",
          optionId: "60e39c24bf84855a680fa06c",
        },
        {
          orderPlacement: "12",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da5cbf84855a680f8f21",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "1",
          optionId: "60e4af44e580dd3004e5dae6",
        },
        {
          orderPlacement: "2",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "3",
          optionId: "60e4af58e580dd3004e5daea",
        },
        {
          orderPlacement: "4",
          optionId: "60e4af67e580dd3004e5daec",
        },
        {
          orderPlacement: "5",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "6",
          optionId: "60e4af6ee580dd3004e5daee",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "4",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "4",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da40bf84855a680f8f19",
        },
      ],
      maxOptions: 5,
    },
    __v: 0,
    commandCodes: ["mg82"],
    category: "LMG",
  },
  {
    _id: "614e13b355d8b2253cc05551",
    commandCodes: ["r1", "shadowhunter"],
    displayName: "R1 Shadowhunter",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/r1-shadowhunter.png",
    gameInfo: {
      blurb:
        "Launches lethal bolt projectiles to silently eliminate enemies. Excellent hip fire accuracy with good handling. Bolts must be manually loaded.",
      stats: {
        accuracy: 70,
        range: 65,
        mobility: 70,
        damage: 85,
        fireRate: 26,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
      ],
      maxOptions: 5,
    },
    category: "Marksman Rifle",
    __v: 0,
  },
  {
    _id: "614e12c655d8b2253cc0554f",
    commandCodes: ["crossbow"],
    displayName: "Crossbow",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/crossbow.png",
    gameInfo: {
      blurb:
        'Silent and agile, this high-performance crossbow fires 20.0" bolts with exceptional lethality. Exclusive customization, distinct functionality, and unique ammunition types put this weapon in a class of its own. Standard 20.0" bolts are recoverable, and are undetectable by trophy systems.',
      stats: {
        accuracy: 70,
        range: 60,
        mobility: 70,
        damage: 85,
        fireRate: 26,
        control: 64,
      },
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "614e0dea55d8b2253cc0552d",
        },
        {
          orderPlacement: "2",
          optionId: "614e0dee55d8b2253cc0552f",
        },
        {
          orderPlacement: "1",
          optionId: "614e0e2855d8b2253cc05531",
        },
        {
          orderPlacement: "2",
          optionId: "614e0e3155d8b2253cc05533",
        },
        {
          orderPlacement: "3",
          optionId: "614e0e3955d8b2253cc05535",
        },
        {
          orderPlacement: "1",
          optionId: "60df72d2bf84855a680f8a63",
        },
        {
          orderPlacement: "1",
          optionId: "60df7280bf84855a680f8a55",
        },
        {
          orderPlacement: "2",
          optionId: "60df72aabf84855a680f8a5b",
        },
        {
          orderPlacement: "3",
          optionId: "60df7298bf84855a680f8a59",
        },
        {
          orderPlacement: "4",
          optionId: "60df72bdbf84855a680f8a5f",
        },
        {
          orderPlacement: "5",
          optionId: "60df72c7bf84855a680f8a61",
        },
        {
          orderPlacement: "6",
          optionId: "60df728fbf84855a680f8a57",
        },
        {
          orderPlacement: "7",
          optionId: "614e0e5755d8b2253cc05537",
        },
        {
          orderPlacement: "8",
          optionId: "60df7319bf84855a680f8a6f",
        },
        {
          orderPlacement: "9",
          optionId: "60df72e9bf84855a680f8a67",
        },
        {
          orderPlacement: "10",
          optionId: "60df733ebf84855a680f8a77",
        },
        {
          orderPlacement: "11",
          optionId: "60df72b5bf84855a680f8a5d",
        },
        {
          orderPlacement: "12",
          optionId: "60df7301bf84855a680f8a6b",
        },
        {
          orderPlacement: "13",
          optionId: "60df730fbf84855a680f8a6d",
        },
        {
          orderPlacement: "14",
          optionId: "60df7359bf84855a680f8a7b",
        },
        {
          orderPlacement: "15",
          optionId: "60df7321bf84855a680f8a71",
        },
        {
          orderPlacement: "16",
          optionId: "60df7331bf84855a680f8a75",
        },
        {
          orderPlacement: "1",
          optionId: "614e0e6e55d8b2253cc0553b",
        },
        {
          orderPlacement: "17",
          optionId: "614e0e6155d8b2253cc05539",
        },
        {
          orderPlacement: "2",
          optionId: "614e0e7555d8b2253cc0553d",
        },
        {
          orderPlacement: "3",
          optionId: "614e0e7955d8b2253cc0553f",
        },
        {
          orderPlacement: "1",
          optionId: "614e0e8255d8b2253cc05541",
        },
        {
          orderPlacement: "2",
          optionId: "614e0eb255d8b2253cc05543",
        },
        {
          orderPlacement: "3",
          optionId: "614e0edd55d8b2253cc05545",
        },
        {
          orderPlacement: "1",
          optionId: "614e0eeb55d8b2253cc05547",
        },
        {
          orderPlacement: "2",
          optionId: "614e0ef855d8b2253cc05549",
        },
        {
          orderPlacement: "3",
          optionId: "614e0f0255d8b2253cc0554b",
        },
        {
          orderPlacement: "2",
          optionId: "60df74dcbf84855a680f8abb",
        },
        {
          orderPlacement: "1",
          optionId: "60df74b8bf84855a680f8ab1",
        },
        {
          orderPlacement: "3",
          optionId: "60df74c7bf84855a680f8ab5",
        },
        {
          orderPlacement: "4",
          optionId: "60df74d4bf84855a680f8ab9",
        },
        {
          orderPlacement: "5",
          optionId: "60df7536bf84855a680f8ac3",
        },
        {
          orderPlacement: "7",
          optionId: "60e3da9d8a26dd1acccc5d59",
        },
        {
          orderPlacement: "6",
          optionId: "60df74cdbf84855a680f8ab7",
        },
        {
          orderPlacement: "8",
          optionId: "60df751dbf84855a680f8abd",
        },
        {
          orderPlacement: "9",
          optionId: "60df74bdbf84855a680f8ab3",
        },
        {
          orderPlacement: "10",
          optionId: "60df752fbf84855a680f8ac1",
        },
      ],
      maxOptions: 5,
    },
    category: "Marksman Rifle",
    __v: 0,
  },
  {
    _id: "61609fec4af6fb76f45408df",
    commandCodes: ["grav"],
    displayName: "Grav",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/grav.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle. Fast firing rifle with improved range. Fastest bullet velocity in class with modest damage and moderate recoil.",
      stats: {
        accuracy: 63,
        range: 66,
        mobility: 65,
        damage: 80,
        fireRate: 73,
        control: 64,
      },
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "60e1d86abf84855a680f8ed7",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d863bf84855a680f8ed5",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d859bf84855a680f8ed3",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "1",
          optionId: "6160a50d4af6fb76f45408f9",
        },
        {
          orderPlacement: "3",
          optionId: "6160a5314af6fb76f4540901",
        },
        {
          orderPlacement: "2",
          optionId: "6160a5214af6fb76f45408fd",
        },
        {
          orderPlacement: "4",
          optionId: "6160a54c4af6fb76f4540905",
        },
        {
          orderPlacement: "5",
          optionId: "6160a55d4af6fb76f4540909",
        },
        {
          orderPlacement: "6",
          optionId: "6160a5744af6fb76f454090d",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e63dbf84855a680f8fb9",
        },
        {
          orderPlacement: "4",
          optionId: "60e1e650bf84855a680f8fbb",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da00bf84855a680f8f0d",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "7",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "8",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "9",
          optionId: "60e1d9e6bf84855a680f8f07",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "10",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "4",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da53bf84855a680f8f1d",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "4",
          optionId: "6103130a84d1eb258ce0f4c2",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "1",
          optionId: "6160a6994af6fb76f4540925",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da7ebf84855a680f8f29",
        },
        {
          orderPlacement: "3",
          optionId: "60e353d7bf84855a680f9697",
        },
        {
          orderPlacement: "4",
          optionId: "6160a6bf4af6fb76f4540929",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da91bf84855a680f8f2f",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "2",
          optionId: "6160a7274af6fb76f4540937",
        },
        {
          orderPlacement: "6",
          optionId: "6160a6d14af6fb76f454092d",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "4",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "6",
          optionId: "6160a7764af6fb76f4540943",
        },
      ],
      maxOptions: 5,
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "6160a8b54af6fb76f45409a0",
    commandCodes: ["ironhide", "410ironhide"],
    displayName: ".410 Ironhide",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/410-ironhide.png",
    gameInfo: {
      blurb:
        "Lever-action shotgun. High damage at close range with an improved fire rate. Reliable 2-shot kill with a short 1-shot kill range.",
      stats: {
        accuracy: 75,
        range: 85,
        mobility: 71,
        damage: 85,
        fireRate: 44,
        control: 70,
      },
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "60e38840bf84855a680f9d40",
        },
        {
          orderPlacement: "3",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "5",
          optionId: "60e38855bf84855a680f9d46",
        },
        {
          orderPlacement: "4",
          optionId: "60e3884ebf84855a680f9d44",
        },
        {
          orderPlacement: "2",
          optionId: "6160a9304af6fb76f45409aa",
        },
        {
          orderPlacement: "6",
          optionId: "60e38859bf84855a680f9d48",
        },
        {
          orderPlacement: "3",
          optionId: "6160a9fd4af6fb76f45409b8",
        },
        {
          orderPlacement: "2",
          optionId: "6160a9da4af6fb76f45409b2",
        },
        {
          orderPlacement: "1",
          optionId: "6160a9c04af6fb76f45409ae",
        },
        {
          orderPlacement: "4",
          optionId: "6160aa0e4af6fb76f45409bc",
        },
        {
          orderPlacement: "5",
          optionId: "6160aa294af6fb76f45409c0",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "6",
          optionId: "6160aa3e4af6fb76f45409c4",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "2",
          optionId: "60e38f1bbf84855a680f9dee",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "4",
          optionId: "60df738dbf84855a680f8a85",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "2",
          optionId: "60e38ee4bf84855a680f9dea",
        },
        {
          orderPlacement: "1",
          optionId: "6160aaf54af6fb76f45409ce",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "4",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
      ],
      maxOptions: 5,
    },
    category: "Shotgun",
    __v: 0,
  },
  {
    _id: "6170e3a69655ec26143f1060",
    commandCodes: ["lapa"],
    displayName: "LAPA",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/lapa.png",
    gameInfo: {
      blurb:
        "Full-auto submachine gun. Lightweight prototype with reliable damage and good firing control. Improved handling and range with a slower fire rate.",
      stats: {
        accuracy: 64,
        damage: 75,
        range: 53,
        fireRate: 72,
        mobility: 68,
        control: 68,
      },
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60e354d8bf84855a680f96e7",
        },
        {
          orderPlacement: "1",
          optionId: "60e354d0bf84855a680f96e5",
        },
        {
          orderPlacement: "3",
          optionId: "60e3524fbf84855a680f9671",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d877bf84855a680f8ed9",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d87ebf84855a680f8edb",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d885bf84855a680f8edd",
        },
        {
          orderPlacement: "1",
          optionId: "60e357bebf84855a680f9747",
        },
        {
          orderPlacement: "2",
          optionId: "6170e55f9655ec26143f1079",
        },
        {
          orderPlacement: "3",
          optionId: "6170e5ab9655ec26143f107d",
        },
        {
          orderPlacement: "4",
          optionId: "6170e5fb9655ec26143f1081",
        },
        {
          orderPlacement: "6",
          optionId: "6170e62c9655ec26143f1087",
        },
        {
          orderPlacement: "5",
          optionId: "6170e6259655ec26143f1085",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d977bf84855a680f8eeb",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d97fbf84855a680f8eed",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d986bf84855a680f8eef",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d98fbf84855a680f8ef1",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d997bf84855a680f8ef3",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d99ebf84855a680f8ef5",
        },
        {
          orderPlacement: "1",
          optionId: "60e1d9c0bf84855a680f8efd",
        },
        {
          orderPlacement: "2",
          optionId: "60e1d9afbf84855a680f8ef7",
        },
        {
          orderPlacement: "3",
          optionId: "60e1d9babf84855a680f8efb",
        },
        {
          orderPlacement: "4",
          optionId: "60e1d9b7bf84855a680f8ef9",
        },
        {
          orderPlacement: "5",
          optionId: "60e1d9d8bf84855a680f8f03",
        },
        {
          orderPlacement: "7",
          optionId: "60e35178bf84855a680f965d",
        },
        {
          orderPlacement: "6",
          optionId: "60e1d9debf84855a680f8f05",
        },
        {
          orderPlacement: "8",
          optionId: "60e1d9f6bf84855a680f8f0b",
        },
        {
          orderPlacement: "9",
          optionId: "60e1d9d0bf84855a680f8f01",
        },
        {
          orderPlacement: "10",
          optionId: "60e351a1bf84855a680f9663",
        },
        {
          orderPlacement: "11",
          optionId: "60e1d9c7bf84855a680f8eff",
        },
        {
          orderPlacement: "12",
          optionId: "60e1d9edbf84855a680f8f09",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da23bf84855a680f8f0f",
        },
        {
          orderPlacement: "2",
          optionId: "60e1da2bbf84855a680f8f11",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da3bbf84855a680f8f17",
        },
        {
          orderPlacement: "3",
          optionId: "60e1e4ccbf84855a680f8fab",
        },
        {
          orderPlacement: "4",
          optionId: "60e35463bf84855a680f96a7",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da40bf84855a680f8f19",
        },
        {
          orderPlacement: "1",
          optionId: "60e1da4fbf84855a680f8f1b",
        },
        {
          orderPlacement: "2",
          optionId: "60e35346bf84855a680f968b",
        },
        {
          orderPlacement: "5",
          optionId: "60e1da62bf84855a680f8f23",
        },
        {
          orderPlacement: "3",
          optionId: "60e1da57bf84855a680f8f1f",
        },
        {
          orderPlacement: "6",
          optionId: "60e1da66bf84855a680f8f25",
        },
        {
          orderPlacement: "4",
          optionId: "6103130a84d1eb258ce0f4c2",
        },
        {
          orderPlacement: "2",
          optionId: "60e353c5bf84855a680f9695",
        },
        {
          orderPlacement: "1",
          optionId: "61161ad2147d3f4f203722c8",
        },
        {
          orderPlacement: "3",
          optionId: "6170e7499655ec26143f109b",
        },
        {
          orderPlacement: "5",
          optionId: "60e353f0bf84855a680f969d",
        },
        {
          orderPlacement: "4",
          optionId: "60e1da8bbf84855a680f8f2d",
        },
        {
          orderPlacement: "6",
          optionId: "61161aff147d3f4f203722d0",
        },
        {
          orderPlacement: "1",
          optionId: "60e1daaebf84855a680f8f33",
        },
        {
          orderPlacement: "4",
          optionId: "60e1dabbbf84855a680f8f39",
        },
        {
          orderPlacement: "2",
          optionId: "60e1dab1bf84855a680f8f35",
        },
        {
          orderPlacement: "3",
          optionId: "60e1dab5bf84855a680f8f37",
        },
        {
          orderPlacement: "5",
          optionId: "60e1dac1bf84855a680f8f3b",
        },
        {
          orderPlacement: "6",
          optionId: "60e1dac7bf84855a680f8f3d",
        },
      ],
      maxOptions: 5,
    },
    category: "SMG",
    __v: 0,
  },
  {
    _id: "61b1104dcbb40a531ccf075a",
    commandCodes: ["stg", "stg44"],
    displayName: "STG44",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/stg44.png",
    gameInfo: {
      blurb: "Versatile assault rifle adaptable to any situation.",
      stats: {
        accuracy: 69,
        range: 68,
        mobility: 70,
        damage: 68,
        fireRate: 61,
        control: 65,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "2",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "4",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "5",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "7",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "6",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "1",
          optionId: "61b106b4cbb40a531ccf05af",
        },
        {
          orderPlacement: "2",
          optionId: "61b106e1cbb40a531ccf05b5",
        },
        {
          orderPlacement: "4",
          optionId: "61b10622cbb40a531ccf0587",
        },
        {
          orderPlacement: "3",
          optionId: "61b10644cbb40a531ccf0593",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "3",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "4",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "5",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "7",
          optionId: "61b10377cbb40a531ccf04e7",
        },
        {
          orderPlacement: "9",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "10",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "11",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "12",
          optionId: "61b23d9176830d4150677d4c",
        },
        {
          orderPlacement: "14",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "13",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "15",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "16",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "17",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "20",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "18",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "19",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "21",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "23",
          optionId: "61b10383cbb40a531ccf04eb",
        },
        {
          orderPlacement: "22",
          optionId: "61b1037dcbb40a531ccf04e9",
        },
        {
          orderPlacement: "1",
          optionId: "61b10806cbb40a531ccf0613",
        },
        {
          orderPlacement: "2",
          optionId: "61b107e7cbb40a531ccf0607",
        },
        {
          orderPlacement: "3",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "4",
          optionId: "61b1086fcbb40a531ccf063b",
        },
        {
          orderPlacement: "5",
          optionId: "61b1088dcbb40a531ccf0643",
        },
        {
          orderPlacement: "2",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "3",
          optionId: "61b10730cbb40a531ccf05cd",
        },
        {
          orderPlacement: "4",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "5",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "6",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "8",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "7",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "9",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "1",
          optionId: "61b2418b76830d4150677d80",
        },
        {
          orderPlacement: "2",
          optionId: "61b10b7bcbb40a531ccf0666",
        },
        {
          orderPlacement: "3",
          optionId: "61b10c67cbb40a531ccf06be",
        },
        {
          orderPlacement: "4",
          optionId: "61b10b81cbb40a531ccf0668",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "7",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e02cbb40a531ccf0730",
        },
        {
          orderPlacement: "2",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "4",
          optionId: "61b10df1cbb40a531ccf0728",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd4cbb40a531ccf071c",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "61b11130cbb40a531ccf075e",
    commandCodes: ["itra"],
    displayName: "Itra Burst",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/itra-burst.png",
    gameInfo: {
      blurb: "Four-round burst rifle, accurate at medium to long range.",
      stats: {
        accuracy: 73,
        range: 62,
        mobility: 58,
        damage: 76,
        fireRate: 72,
        control: 72,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "4",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "3",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "2",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "5",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "6",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "7",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "1",
          optionId: "61b104a7cbb40a531ccf0543",
        },
        {
          orderPlacement: "2",
          optionId: "61b10578cbb40a531ccf057b",
        },
        {
          orderPlacement: "4",
          optionId: "61b104a1cbb40a531ccf0541",
        },
        {
          orderPlacement: "3",
          optionId: "61b10665cbb40a531ccf059d",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "3",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "4",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "5",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "7",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "9",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "10",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "11",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "12",
          optionId: "61b103f9cbb40a531ccf050f",
        },
        {
          orderPlacement: "13",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "14",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "15",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "16",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "17",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "18",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "19",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "20",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "22",
          optionId: "61b24da976830d4150677f39",
        },
        {
          orderPlacement: "21",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "23",
          optionId: "61b24de276830d4150677f3d",
        },
        {
          orderPlacement: "1",
          optionId: "61b1075ecbb40a531ccf05d9",
        },
        {
          orderPlacement: "2",
          optionId: "61b107ddcbb40a531ccf0603",
        },
        {
          orderPlacement: "4",
          optionId: "61b1082ccbb40a531ccf0621",
        },
        {
          orderPlacement: "5",
          optionId: "61b10753cbb40a531ccf05d5",
        },
        {
          orderPlacement: "3",
          optionId: "61b10758cbb40a531ccf05d7",
        },
        {
          orderPlacement: "2",
          optionId: "61b10730cbb40a531ccf05cd",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "3",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "7",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "6",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "1",
          optionId: "61b24e9476830d4150677f49",
        },
        {
          orderPlacement: "9",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "8",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "3",
          optionId: "61b24ef976830d4150677f53",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "4",
          optionId: "61b10ba7cbb40a531ccf0676",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "7",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e20cbb40a531ccf073e",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e05cbb40a531ccf0732",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "3",
          optionId: "61b10dd4cbb40a531ccf071c",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "5",
          optionId: "61b10de0cbb40a531ccf0722",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "2",
          optionId: "61b24ec576830d4150677f4d",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "61b1116ecbb40a531ccf0760",
    commandCodes: ["bar"],
    displayName: "BAR",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/bar.png",
    gameInfo: {
      blurb:
        "High-caliber full-auto with accuracy for long distance engagements.",
      stats: {
        accuracy: 69,
        range: 68,
        mobility: 57,
        damage: 76,
        fireRate: 63,
        control: 65,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "2",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "1",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "4",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "5",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "6",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "7",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "1",
          optionId: "61b104dfcbb40a531ccf0551",
        },
        {
          orderPlacement: "2",
          optionId: "61b104d1cbb40a531ccf054d",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "3",
          optionId: "61b2528176830d415067802d",
        },
        {
          orderPlacement: "4",
          optionId: "61b104eecbb40a531ccf0555",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "3",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "4",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "7",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "5",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "11",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "9",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "10",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "12",
          optionId: "61b1038fcbb40a531ccf04ef",
        },
        {
          orderPlacement: "13",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "14",
          optionId: "61b10389cbb40a531ccf04ed",
        },
        {
          orderPlacement: "16",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "15",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "17",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "18",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "19",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "21",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "20",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "22",
          optionId: "61b2536376830d4150678037",
        },
        {
          orderPlacement: "23",
          optionId: "61b2537f76830d4150678039",
        },
        {
          orderPlacement: "1",
          optionId: "61b1077acbb40a531ccf05e3",
        },
        {
          orderPlacement: "2",
          optionId: "61b107a7cbb40a531ccf05f3",
        },
        {
          orderPlacement: "3",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "4",
          optionId: "61b10830cbb40a531ccf0623",
        },
        {
          orderPlacement: "5",
          optionId: "61b107b0cbb40a531ccf05f7",
        },
        {
          orderPlacement: "2",
          optionId: "61b10730cbb40a531ccf05cd",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "3",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "6",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "9",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "7",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "8",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "2",
          optionId: "61b2542576830d4150678043",
        },
        {
          orderPlacement: "1",
          optionId: "61b10b8dcbb40a531ccf066c",
        },
        {
          orderPlacement: "3",
          optionId: "61b10bd8cbb40a531ccf0688",
        },
        {
          orderPlacement: "4",
          optionId: "61b10bddcbb40a531ccf068a",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "7",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "1",
          optionId: "61b2549f76830d415067804b",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "4",
          optionId: "61b10dcecbb40a531ccf0718",
        },
        {
          orderPlacement: "3",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "5",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "6",
          optionId: "61b10de0cbb40a531ccf0722",
        },
        {
          orderPlacement: "7",
          optionId: "61b10dd4cbb40a531ccf071c",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "61b111e4cbb40a531ccf0764",
    commandCodes: ["nz41"],
    displayName: "NZ-41",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/nz-41.png",
    gameInfo: {
      blurb:
        "Full-auto assault rifle with very accurate initial fire. Recoil becomes difficult to control with sustained fire.",
      stats: {
        accuracy: 68,
        range: 67,
        mobility: 59,
        damage: 76,
        fireRate: 61,
        control: 68,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "2",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "3",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "4",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "5",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "6",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "7",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "1",
          optionId: "61b1066bcbb40a531ccf059f",
        },
        {
          orderPlacement: "2",
          optionId: "61b1065dcbb40a531ccf059b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10658cbb40a531ccf0599",
        },
        {
          orderPlacement: "4",
          optionId: "61b10653cbb40a531ccf0597",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "3",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "4",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "5",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "6",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "7",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "8",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "10",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "9",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "11",
          optionId: "61b1038fcbb40a531ccf04ef",
        },
        {
          orderPlacement: "12",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "13",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "14",
          optionId: "61b10389cbb40a531ccf04ed",
        },
        {
          orderPlacement: "15",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "17",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "16",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "18",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "19",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "20",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "2",
          optionId: "61b10811cbb40a531ccf0617",
        },
        {
          orderPlacement: "21",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "1",
          optionId: "61b1083fcbb40a531ccf0629",
        },
        {
          orderPlacement: "22",
          optionId: "61b257b476830d41506780d4",
        },
        {
          orderPlacement: "4",
          optionId: "61b1081bcbb40a531ccf061b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10827cbb40a531ccf061f",
        },
        {
          orderPlacement: "5",
          optionId: "61b10816cbb40a531ccf0619",
        },
        {
          orderPlacement: "6",
          optionId: "61b10820cbb40a531ccf061d",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "2",
          optionId: "61b10730cbb40a531ccf05cd",
        },
        {
          orderPlacement: "3",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "6",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "7",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "8",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "1",
          optionId: "61b269e876830d41506780ef",
        },
        {
          orderPlacement: "9",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "3",
          optionId: "61b26a2176830d41506780f3",
        },
        {
          orderPlacement: "2",
          optionId: "61b2542576830d4150678043",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "7",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "1",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "2",
          optionId: "61b10dc2cbb40a531ccf0710",
        },
        {
          orderPlacement: "3",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "4",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dfecbb40a531ccf072e",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e27cbb40a531ccf0742",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "61b1126ecbb40a531ccf0766",
    commandCodes: ["volk", "volks"],
    displayName: "Volkssturmgewehr",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/volkssturmgewehr.png",
    gameInfo: {
      blurb:
        "Quick and mobile full-auto assault rifle. Ideal for pushing enemy positions at short to medium range.",
      stats: {
        accuracy: 70,
        range: 60,
        mobility: 66,
        damage: 72,
        fireRate: 69,
        control: 74,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "3",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "4",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "2",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "5",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "6",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "7",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "1",
          optionId: "61b10633cbb40a531ccf058d",
        },
        {
          orderPlacement: "2",
          optionId: "61b106afcbb40a531ccf05ad",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "3",
          optionId: "61b10671cbb40a531ccf05a1",
        },
        {
          orderPlacement: "3",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "4",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "5",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "7",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "9",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "10",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "11",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "12",
          optionId: "61b103f9cbb40a531ccf050f",
        },
        {
          orderPlacement: "13",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "15",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "14",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "16",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "17",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "19",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "18",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "20",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "21",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "22",
          optionId: "61b26d0576830d4150678181",
        },
        {
          orderPlacement: "1",
          optionId: "61b1085fcbb40a531ccf0635",
        },
        {
          orderPlacement: "23",
          optionId: "61b26d1776830d4150678183",
        },
        {
          orderPlacement: "2",
          optionId: "61b10800cbb40a531ccf0611",
        },
        {
          orderPlacement: "3",
          optionId: "61b1080ccbb40a531ccf0615",
        },
        {
          orderPlacement: "4",
          optionId: "61b10844cbb40a531ccf062b",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "2",
          optionId: "61b10730cbb40a531ccf05cd",
        },
        {
          orderPlacement: "3",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "6",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "7",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "8",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "9",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "1",
          optionId: "61b10c5ecbb40a531ccf06ba",
        },
        {
          orderPlacement: "2",
          optionId: "61b26dc076830d4150678193",
        },
        {
          orderPlacement: "3",
          optionId: "61b10c72cbb40a531ccf06c2",
        },
        {
          orderPlacement: "4",
          optionId: "61b26e1f76830d4150678199",
        },
        {
          orderPlacement: "5",
          optionId: "61b26e5876830d415067819d",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "7",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e02cbb40a531ccf0730",
        },
        {
          orderPlacement: "3",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "4",
          optionId: "61b10dfbcbb40a531ccf072c",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "6",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "61b111abcbb40a531ccf0762",
    commandCodes: ["as44"],
    displayName: "AS44",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/as44.png",
    gameInfo: {
      blurb:
        "Fast firing full-auto assault rifle ideal for close to mid-range engagements.",
      stats: {
        accuracy: 72,
        range: 64,
        mobility: 62,
        damage: 71,
        fireRate: 70,
        control: 75,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "2",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "4",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "5",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "6",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "7",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "1",
          optionId: "61b2712976830d4150678221",
        },
        {
          orderPlacement: "2",
          optionId: "61b2724376830d415067822b",
        },
        {
          orderPlacement: "3",
          optionId: "61b2727276830d415067822f",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "3",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "4",
          optionId: "61b2728f76830d4150678233",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "5",
          optionId: "61b272b776830d4150678237",
        },
        {
          orderPlacement: "5",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "4",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "7",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "9",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "10",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "11",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "15",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "14",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "12",
          optionId: "61b103f9cbb40a531ccf050f",
        },
        {
          orderPlacement: "13",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "17",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "16",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "18",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "19",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "20",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "21",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "1",
          optionId: "61b2739676830d4150678245",
        },
        {
          orderPlacement: "3",
          optionId: "61b273c676830d4150678249",
        },
        {
          orderPlacement: "4",
          optionId: "61b2740376830d415067824f",
        },
        {
          orderPlacement: "2",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "5",
          optionId: "61b2741576830d4150678253",
        },
        {
          orderPlacement: "3",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "2",
          optionId: "61b10730cbb40a531ccf05cd",
        },
        {
          orderPlacement: "6",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "7",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "8",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "1",
          optionId: "61b2746e76830d415067825b",
        },
        {
          orderPlacement: "9",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "2",
          optionId: "61b2749b76830d415067825f",
        },
        {
          orderPlacement: "3",
          optionId: "61b2418b76830d4150677d80",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "7",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "1",
          optionId: "61b10dc5cbb40a531ccf0712",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "5",
          optionId: "61b10db3cbb40a531ccf0708",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "6",
          optionId: "61b10deacbb40a531ccf0726",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
      ],
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "61b11105cbb40a531ccf075c",
    commandCodes: ["automaton"],
    displayName: "Automaton",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/automaton.png",
    gameInfo: {
      blurb:
        "High-accuracy and low-recoil allow this assult rifle precision at longer ranges.",
      stats: {
        accuracy: 70,
        range: 66,
        mobility: 65,
        damage: 72,
        fireRate: 65,
        control: 71,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "2",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "4",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "5",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "1",
          optionId: "61b276c376830d41506782e4",
        },
        {
          orderPlacement: "7",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "6",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "2",
          optionId: "61b276ca76830d41506782e6",
        },
        {
          orderPlacement: "3",
          optionId: "61b276da76830d41506782ea",
        },
        {
          orderPlacement: "4",
          optionId: "61b276ee76830d41506782ee",
        },
        {
          orderPlacement: "5",
          optionId: "61b134c01ede1b55003fd164",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "3",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "5",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "4",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "7",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "9",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "11",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "10",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "12",
          optionId: "61b103f9cbb40a531ccf050f",
        },
        {
          orderPlacement: "13",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "14",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "15",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "17",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "18",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "16",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "19",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "20",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "2",
          optionId: "61b2261476830d4150677d15",
        },
        {
          orderPlacement: "1",
          optionId: "61b27d1476830d415067839c",
        },
        {
          orderPlacement: "21",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "3",
          optionId: "61b2739676830d4150678245",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "3",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "5",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "2",
          optionId: "61b10730cbb40a531ccf05cd",
        },
        {
          orderPlacement: "6",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "7",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "8",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "1",
          optionId: "61b26a2176830d41506780f5",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "3",
          optionId: "61b226a976830d4150677d17",
        },
        {
          orderPlacement: "2",
          optionId: "61b27e1276830d41506783aa",
        },
        {
          orderPlacement: "4",
          optionId: "61b27e5e76830d41506783b0",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "7",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e19cbb40a531ccf073a",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e02cbb40a531ccf0730",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dcacbb40a531ccf0716",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "7",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e23cbb40a531ccf0740",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
      ],
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "61b112a7cbb40a531ccf0768",
    commandCodes: ["cooper"],
    displayName: "Cooper Carbine",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/cooper-carbine.png",
    gameInfo: {
      blurb: "This short range AR is easy to control with a fast fire rate.",
      stats: {
        accuracy: 71,
        range: 60,
        mobility: 67,
        damage: 73,
        fireRate: 69,
        control: 75,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "4",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "1",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "3",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "2",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "1",
          optionId: "61b2820e76830d4150678440",
        },
        {
          orderPlacement: "5",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "7",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "6",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "2",
          optionId: "61b2822b76830d4150678444",
        },
        {
          orderPlacement: "3",
          optionId: "61b2823f76830d4150678448",
        },
        {
          orderPlacement: "4",
          optionId: "61b2825876830d415067844c",
        },
        {
          orderPlacement: "1",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "2",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "3",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "4",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "5",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "6",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "11",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "7",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "8",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "9",
          optionId: "61b103f9cbb40a531ccf050f",
        },
        {
          orderPlacement: "10",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "13",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "14",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "12",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "15",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "17",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "16",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "18",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "20",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "2",
          optionId: "61b282fb76830d415067845c",
        },
        {
          orderPlacement: "19",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "1",
          optionId: "61b282e476830d4150678458",
        },
        {
          orderPlacement: "21",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "3",
          optionId: "61b2831176830d4150678460",
        },
        {
          orderPlacement: "4",
          optionId: "61b2832776830d4150678464",
        },
        {
          orderPlacement: "5",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "1",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "4",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "5",
          optionId: "61b10730cbb40a531ccf05cd",
        },
        {
          orderPlacement: "6",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "9",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "7",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "8",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "1",
          optionId: "61b2836d76830d415067846c",
        },
        {
          orderPlacement: "2",
          optionId: "61b283a576830d4150678472",
        },
        {
          orderPlacement: "4",
          optionId: "61b283d576830d4150678478",
        },
        {
          orderPlacement: "3",
          optionId: "61b283c976830d4150678476",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "5",
          optionId: "61b2841a76830d415067847e",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "8",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "6",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e23cbb40a531ccf0740",
        },
        {
          orderPlacement: "2",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "3",
          optionId: "61b10de0cbb40a531ccf0722",
        },
        {
          orderPlacement: "4",
          optionId: "61b10dc2cbb40a531ccf0710",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "7",
          optionId: "61b10de6cbb40a531ccf0724",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "7",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
      ],
    },
    category: "Assault Rifle",
    __v: 0,
  },
  {
    _id: "61b11300cbb40a531ccf076a",
    commandCodes: ["m1928"],
    displayName: "M1912",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m1928.png",
    gameInfo: {
      blurb:
        "High rate-of-fire SMG with high ammo capacity ideal for close range engagements.",
      stats: {
        accuracy: 52,
        range: 52,
        mobility: 70,
        damage: 52,
        fireRate: 77,
        control: 72,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "2",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "5",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "7",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "1",
          optionId: "61b104bdcbb40a531ccf0549",
        },
        {
          orderPlacement: "3",
          optionId: "61b104f5cbb40a531ccf0557",
        },
        {
          orderPlacement: "2",
          optionId: "61b104b5cbb40a531ccf0547",
        },
        {
          orderPlacement: "4",
          optionId: "61b10510cbb40a531ccf055d",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "4",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "6",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "5",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "7",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "8",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "9",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "10",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "14",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "11",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "12",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "13",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "15",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "16",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "17",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "18",
          optionId: "61b2868d76830d4150678509",
        },
        {
          orderPlacement: "19",
          optionId: "61b286aa76830d415067850b",
        },
        {
          orderPlacement: "1",
          optionId: "61b10774cbb40a531ccf05e1",
        },
        {
          orderPlacement: "2",
          optionId: "61b1077ecbb40a531ccf05e5",
        },
        {
          orderPlacement: "20",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "3",
          optionId: "61b1083acbb40a531ccf0627",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073acbb40a531ccf05d1",
        },
        {
          orderPlacement: "4",
          optionId: "61b10799cbb40a531ccf05ef",
        },
        {
          orderPlacement: "5",
          optionId: "61b10784cbb40a531ccf05e7",
        },
        {
          orderPlacement: "4",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "5",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "7",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "8",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "1",
          optionId: "61b10bc9cbb40a531ccf0682",
        },
        {
          orderPlacement: "3",
          optionId: "61b10bbacbb40a531ccf067c",
        },
        {
          orderPlacement: "2",
          optionId: "61b2872a76830d4150678515",
        },
        {
          orderPlacement: "4",
          optionId: "61b10c6ccbb40a531ccf06c0",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "5",
          optionId: "61b10c58cbb40a531ccf06b8",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "10",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10dc5cbb40a531ccf0712",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e02cbb40a531ccf0730",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "6",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "SMG",
    __v: 0,
  },
  {
    _id: "61b11376cbb40a531ccf076e",
    commandCodes: ["mp40"],
    displayName: "MP-40",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mp-40.png",
    gameInfo: {
      blurb: "Workhorse SMG suited to all short to medium range engagements.",
      stats: {
        accuracy: 61,
        range: 53,
        mobility: 68,
        damage: 56,
        fireRate: 71,
        control: 73,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "2",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "5",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "7",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "1",
          optionId: "61b1062ecbb40a531ccf058b",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "2",
          optionId: "61b106aacbb40a531ccf05ab",
        },
        {
          orderPlacement: "4",
          optionId: "61b10699cbb40a531ccf05a9",
        },
        {
          orderPlacement: "3",
          optionId: "61b10629cbb40a531ccf0589",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "5",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "4",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "7",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "9",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "10",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "11",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "12",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "13",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "14",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "16",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "15",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "17",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "18",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "19",
          optionId: "61b10383cbb40a531ccf04eb",
        },
        {
          orderPlacement: "1",
          optionId: "61b107f7cbb40a531ccf060d",
        },
        {
          orderPlacement: "20",
          optionId: "61b1037dcbb40a531ccf04e9",
        },
        {
          orderPlacement: "2",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "3",
          optionId: "61b10887cbb40a531ccf0641",
        },
        {
          orderPlacement: "4",
          optionId: "61b1087bcbb40a531ccf063f",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "5",
          optionId: "61b10893cbb40a531ccf0645",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "4",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "5",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073acbb40a531ccf05d1",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "1",
          optionId: "61b28e7776830d4150678632",
        },
        {
          orderPlacement: "8",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "2",
          optionId: "61b28b7476830d41506785a6",
        },
        {
          orderPlacement: "7",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "3",
          optionId: "61b10ca5cbb40a531ccf06d4",
        },
        {
          orderPlacement: "4",
          optionId: "61b10c63cbb40a531ccf06bc",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "10",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "2",
          optionId: "61b10dfbcbb40a531ccf072c",
        },
        {
          orderPlacement: "3",
          optionId: "61b10df1cbb40a531ccf0728",
        },
        {
          orderPlacement: "4",
          optionId: "61b10deacbb40a531ccf0726",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e27cbb40a531ccf0742",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dc2cbb40a531ccf0710",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "SMG",
    __v: 0,
  },
  {
    _id: "61b11331cbb40a531ccf076c",
    commandCodes: ["sten"],
    displayName: "Sten",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/sten.png",
    gameInfo: {
      blurb: "High-mobility full-auto SMG ideal for flanking enemy positions.",
      stats: {
        accuracy: 56,
        range: 49,
        mobility: 74,
        damage: 50,
        fireRate: 70,
        control: 72,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "2",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "4",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "5",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "7",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "8",
          optionId: "61b10568cbb40a531ccf0575",
        },
        {
          orderPlacement: "9",
          optionId: "61b10556cbb40a531ccf056f",
        },
        {
          orderPlacement: "10",
          optionId: "61b1056dcbb40a531ccf0577",
        },
        {
          orderPlacement: "11",
          optionId: "61b10573cbb40a531ccf0579",
        },
        {
          orderPlacement: "12",
          optionId: "61b10685cbb40a531ccf05a3",
        },
        {
          orderPlacement: "13",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "14",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "15",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "16",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "17",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "18",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "19",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "20",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "21",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "22",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "23",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "24",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "25",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "26",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "27",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "28",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "29",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "30",
          optionId: "61b28a6976830d415067858a",
        },
        {
          orderPlacement: "31",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "32",
          optionId: "61b107c2cbb40a531ccf05fd",
        },
        {
          orderPlacement: "33",
          optionId: "61b1085acbb40a531ccf0633",
        },
        {
          orderPlacement: "34",
          optionId: "61b28a8876830d415067858e",
        },
        {
          orderPlacement: "35",
          optionId: "61b107d2cbb40a531ccf0601",
        },
        {
          orderPlacement: "36",
          optionId: "61b107cccbb40a531ccf05ff",
        },
        {
          orderPlacement: "37",
          optionId: "61b107b7cbb40a531ccf05f9",
        },
        {
          orderPlacement: "38",
          optionId: "61b107bccbb40a531ccf05fb",
        },
        {
          orderPlacement: "39",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "40",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "41",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "42",
          optionId: "61b1073acbb40a531ccf05d1",
        },
        {
          orderPlacement: "43",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "44",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "45",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "46",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "48",
          optionId: "61b28b7476830d41506785b7",
        },
        {
          orderPlacement: "47",
          optionId: "61b28b5176830d41506785a2",
        },
        {
          orderPlacement: "49",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "50",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "52",
          optionId: "61b10bc4cbb40a531ccf0680",
        },
        {
          orderPlacement: "51",
          optionId: "61b2872a76830d4150678515",
        },
        {
          orderPlacement: "53",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "54",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "55",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "56",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "57",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "58",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "59",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "60",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "61",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "62",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "63",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "64",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "65",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "66",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "67",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "68",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "69",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "70",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "71",
          optionId: "61b10deacbb40a531ccf0726",
        },
        {
          orderPlacement: "72",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "73",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "74",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "75",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "76",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "77",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "78",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "79",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "80",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "SMG",
    __v: 0,
  },
  {
    _id: "61b11405cbb40a531ccf0770",
    commandCodes: ["vgppsh", "ppshvg"],
    displayName: "PPSh-41 (VG)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ppsh-41-vg.png",
    gameInfo: {
      blurb:
        "Incredibly fast firing smg that eliminates close range threats quickly.",
      stats: {
        accuracy: 60,
        range: 48,
        mobility: 76,
        damage: 48,
        fireRate: 79,
        control: 74,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "60df732abf84855a680f8a85",
        },
        {
          orderPlacement: "1",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "7",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042fcbb40a531ccf052c",
        },
        {
          orderPlacement: "5",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "1",
          optionId: "61b2917a76830d4150678712",
        },
        {
          orderPlacement: "2",
          optionId: "61b291a176830d4150678716",
        },
        {
          orderPlacement: "3",
          optionId: "61b291e676830d415067871c",
        },
        {
          orderPlacement: "4",
          optionId: "61b17ac6b71116459c87f357",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "5",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "6",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "4",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "7",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "10",
          optionId: "61b2924276830d4150678724",
        },
        {
          orderPlacement: "9",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "11",
          optionId: "61b2927676830d415067872a",
        },
        {
          orderPlacement: "12",
          optionId: "61b103a7cbb40a531ccf04f7",
        },
        {
          orderPlacement: "13",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "16",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "14",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "15",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "17",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "18",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "1",
          optionId: "61b292d876830d4150678734",
        },
        {
          orderPlacement: "20",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "3",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "2",
          optionId: "61b292f476830d4150678738",
        },
        {
          orderPlacement: "19",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "4",
          optionId: "61b21d9ca453845fe0b671fe",
        },
        {
          orderPlacement: "5",
          optionId: "61b2931f76830d415067873c",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073acbb40a531ccf05d1",
        },
        {
          orderPlacement: "4",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "5",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "7",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "8",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "2",
          optionId: "61b293f076830d415067874a",
        },
        {
          orderPlacement: "1",
          optionId: "61b2936d76830d4150678744",
        },
        {
          orderPlacement: "3",
          optionId: "61b2941076830d415067874e",
        },
        {
          orderPlacement: "4",
          optionId: "61b2947276830d4150678758",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "10",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "3",
          optionId: "61b10dc5cbb40a531ccf0712",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e23cbb40a531ccf0740",
        },
        {
          orderPlacement: "5",
          optionId: "61b10df1cbb40a531ccf0728",
        },
        {
          orderPlacement: "6",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "SMG",
    __v: 0,
  },
  {
    _id: "61b1142ecbb40a531ccf0772",
    commandCodes: ["owen"],
    displayName: "Owen Gun",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/owen.png",
    gameInfo: {
      blurb: "High-caliber full-auto SMG with accuracy for medium ranges.",
      stats: {
        accuracy: 67,
        range: 61,
        mobility: 73,
        damage: 61,
        fireRate: 71,
        control: 71,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "2",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "1",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "5",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "1",
          optionId: "61b295f976830d41506787c2",
        },
        {
          orderPlacement: "7",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "2",
          optionId: "61b2961676830d41506787c6",
        },
        {
          orderPlacement: "3",
          optionId: "61b2962576830d41506787c8",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "4",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "5",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "10",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "8",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "7",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "9",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "11",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "12",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "13",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "15",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "14",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "16",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "17",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "1",
          optionId: "61b296b876830d41506787d2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "2",
          optionId: "61b296d476830d41506787d6",
        },
        {
          orderPlacement: "4",
          optionId: "61b296f976830d41506787dc",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "5",
          optionId: "61b2971776830d41506787e2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "4",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073acbb40a531ccf05d1",
        },
        {
          orderPlacement: "5",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "7",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "8",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "1",
          optionId: "61b2975476830d41506787ea",
        },
        {
          orderPlacement: "5",
          optionId: "61b297bb76830d41506787f6",
        },
        {
          orderPlacement: "4",
          optionId: "61b10c72cbb40a531ccf06c2",
        },
        {
          orderPlacement: "2",
          optionId: "61b2977476830d41506787ee",
        },
        {
          orderPlacement: "3",
          optionId: "61b28b5176830d41506785a3",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "10",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e2dcbb40a531ccf0746",
        },
        {
          orderPlacement: "2",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "4",
          optionId: "61b10dc2cbb40a531ccf0710",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "6",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "SMG",
    __v: 0,
  },
  {
    _id: "61b1145ecbb40a531ccf0774",
    commandCodes: ["type100"],
    displayName: "Type 100",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/type-100.png",
    gameInfo: {
      blurb:
        "High-accuracy and low recoil SMG offering additional effective range.",
      stats: {
        accuracy: 63,
        range: 55,
        mobility: 73,
        damage: 52,
        fireRate: 73,
        control: 75,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "2",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "1",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "7",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "1",
          optionId: "61b2994876830d415067885f",
        },
        {
          orderPlacement: "5",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "2",
          optionId: "61b2996076830d4150678863",
        },
        {
          orderPlacement: "3",
          optionId: "61b2997f76830d4150678867",
        },
        {
          orderPlacement: "4",
          optionId: "61b2999576830d415067886b",
        },
        {
          orderPlacement: "5",
          optionId: "61b106edcbb40a531ccf05b9",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "4",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "7",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "5",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "9",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "12",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "11",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "10",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "13",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "15",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "14",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "17",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "16",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "2",
          optionId: "61b29a5876830d4150678883",
        },
        {
          orderPlacement: "18",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "19",
          optionId: "61b29a0476830d4150678877",
        },
        {
          orderPlacement: "1",
          optionId: "61b29a2976830d415067887d",
        },
        {
          orderPlacement: "3",
          optionId: "61b29a7576830d4150678887",
        },
        {
          orderPlacement: "5",
          optionId: "61b13da5878e37564483ddd8",
        },
        {
          orderPlacement: "4",
          optionId: "61b10863cbb40a531ccf0637",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073acbb40a531ccf05d1",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "5",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "4",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "7",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "8",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "1",
          optionId: "61b10c78cbb40a531ccf06c4",
        },
        {
          orderPlacement: "2",
          optionId: "61b10b7bcbb40a531ccf0666",
        },
        {
          orderPlacement: "3",
          optionId: "61b29acf76830d415067888f",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "4",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "1",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "3",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "2",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e27cbb40a531ccf0742",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "SMG",
    __v: 0,
  },
  {
    _id: "61b1148acbb40a531ccf0776",
    commandCodes: ["einhorn"],
    displayName: "Einhorn Revolving",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/einhorn-revolving.png",
    gameInfo: {
      blurb:
        "Protoype shotgun with a revolving cylinder. Effective at close range.",
      stats: {
        accuracy: 50,
        range: 38,
        mobility: 76,
        damage: 76,
        fireRate: 57,
        control: 71,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1043acbb40a531ccf0523",
        },
        {
          orderPlacement: "3",
          optionId: "61b1040ecbb40a531ccf0513",
        },
        {
          orderPlacement: "4",
          optionId: "61b10480cbb40a531ccf0539",
        },
        {
          orderPlacement: "2",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "1",
          optionId: "61b1068acbb40a531ccf05a5",
        },
        {
          orderPlacement: "2",
          optionId: "61b10585cbb40a531ccf057f",
        },
        {
          orderPlacement: "3",
          optionId: "61b1057dcbb40a531ccf057d",
        },
        {
          orderPlacement: "4",
          optionId: "61b1060fcbb40a531ccf0581",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "2",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "1",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "4",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "5",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "8",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "6",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "7",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "9",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "10",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "14",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "11",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "13",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "12",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "16",
          optionId: "61b2868d76830d4150678509",
        },
        {
          orderPlacement: "15",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "18",
          optionId: "61b286aa76830d415067850b",
        },
        {
          orderPlacement: "17",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "2",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "3",
          optionId: "61b1089dcbb40a531ccf0649",
        },
        {
          orderPlacement: "4",
          optionId: "61b10874cbb40a531ccf063d",
        },
        {
          orderPlacement: "1",
          optionId: "61b10849cbb40a531ccf062d",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "5",
          optionId: "61b107e2cbb40a531ccf0605",
        },
        {
          orderPlacement: "3",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "7",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "1",
          optionId: "61b10bf1cbb40a531ccf0692",
        },
        {
          orderPlacement: "4",
          optionId: "61b10be7cbb40a531ccf068e",
        },
        {
          orderPlacement: "3",
          optionId: "61b10bf6cbb40a531ccf0694",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cb1cbb40a531ccf06d8",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf0cbb40a531ccf06f0",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cebcbb40a531ccf06ee",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "4",
          optionId: "61b10ce6cbb40a531ccf06ec",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "7",
          optionId: "61b10ccacbb40a531ccf06e0",
        },
        {
          orderPlacement: "1",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e2dcbb40a531ccf0746",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "3",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "2",
          optionId: "61b10df1cbb40a531ccf0728",
        },
        {
          orderPlacement: "4",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dc5cbb40a531ccf0712",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "7",
          optionId: "61b10deacbb40a531ccf0726",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
      ],
    },
    category: "Shotgun",
    __v: 0,
  },
  {
    _id: "61b114c2cbb40a531ccf0778",
    commandCodes: ["gracey"],
    displayName: "Gracey Auto",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/gracey-auto.png",
    gameInfo: {
      blurb:
        "Semi-auto shotgun with a very fast rate-of-fire. Effective at very close range.",
      stats: {
        accuracy: 70,
        range: 56,
        mobility: 62,
        damage: 84,
        fireRate: 50,
        control: 60,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "2",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "1",
          optionId: "61b1043acbb40a531ccf0523",
        },
        {
          orderPlacement: "3",
          optionId: "61b1040ecbb40a531ccf0513",
        },
        {
          orderPlacement: "4",
          optionId: "61b10480cbb40a531ccf0539",
        },
        {
          orderPlacement: "1",
          optionId: "61b104d9cbb40a531ccf054f",
        },
        {
          orderPlacement: "2",
          optionId: "61b10509cbb40a531ccf055b",
        },
        {
          orderPlacement: "4",
          optionId: "61b104c9cbb40a531ccf054b",
        },
        {
          orderPlacement: "3",
          optionId: "61b1068acbb40a531ccf05a5",
        },
        {
          orderPlacement: "1",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "2",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "4",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "5",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "6",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "8",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "7",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "9",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "10",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "11",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "13",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "12",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "15",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "14",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "16",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "1",
          optionId: "61b10834cbb40a531ccf0625",
        },
        {
          orderPlacement: "2",
          optionId: "61b10789cbb40a531ccf05e9",
        },
        {
          orderPlacement: "4",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "3",
          optionId: "61b1079fcbb40a531ccf05f1",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "5",
          optionId: "61b1076dcbb40a531ccf05df",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "3",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "7",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "1",
          optionId: "61b10beccbb40a531ccf0690",
        },
        {
          orderPlacement: "4",
          optionId: "61b10be3cbb40a531ccf068c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cbacbb40a531ccf06dc",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cb6cbb40a531ccf06da",
        },
        {
          orderPlacement: "1",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "1",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e23cbb40a531ccf0740",
        },
        {
          orderPlacement: "3",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "4",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e19cbb40a531ccf073a",
        },
        {
          orderPlacement: "6",
          optionId: "61b10dfecbb40a531ccf072e",
        },
        {
          orderPlacement: "7",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cebcbb40a531ccf06ee",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf0cbb40a531ccf06f0",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "4",
          optionId: "61b10ce6cbb40a531ccf06ec",
        },
        {
          orderPlacement: "7",
          optionId: "61b10ccacbb40a531ccf06e0",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
      ],
    },
    category: "Shotgun",
    __v: 0,
  },
  {
    _id: "61b114f0cbb40a531ccf077a",
    commandCodes: ["combatshotgun"],
    displayName: "Combat Shotgun",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/combat-shotgun.png",
    gameInfo: {
      blurb: "Pump-action shotgun offering addtional effective range.",
      stats: {
        accuracy: 60,
        range: 45,
        mobility: 70,
        damage: 83,
        fireRate: 45,
        control: 66,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1043acbb40a531ccf0523",
        },
        {
          orderPlacement: "2",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "2",
          optionId: "61b2a33b76830d4150678a77",
        },
        {
          orderPlacement: "3",
          optionId: "61b1040ecbb40a531ccf0513",
        },
        {
          orderPlacement: "1",
          optionId: "61b2a2fb76830d4150678a6f",
        },
        {
          orderPlacement: "4",
          optionId: "61b10480cbb40a531ccf0539",
        },
        {
          orderPlacement: "3",
          optionId: "61b1068acbb40a531ccf05a5",
        },
        {
          orderPlacement: "4",
          optionId: "61b2a34d76830d4150678a7b",
        },
        {
          orderPlacement: "1",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "4",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "2",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "5",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "6",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "7",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "8",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "9",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "10",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "11",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "12",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "13",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "14",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "15",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "16",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "1",
          optionId: "61b2a3ce76830d4150678a85",
        },
        {
          orderPlacement: "2",
          optionId: "61b2a3e876830d4150678a89",
        },
        {
          orderPlacement: "3",
          optionId: "61b2a40076830d4150678a8d",
        },
        {
          orderPlacement: "4",
          optionId: "61b2a41876830d4150678a93",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "3",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "1",
          optionId: "61b2a46176830d4150678a9b",
        },
        {
          orderPlacement: "7",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "2",
          optionId: "61b2a47e76830d4150678a9f",
        },
        {
          orderPlacement: "3",
          optionId: "61b2a49b76830d4150678aa3",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cebcbb40a531ccf06ee",
        },
        {
          orderPlacement: "4",
          optionId: "61b2a4b776830d4150678aa7",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf0cbb40a531ccf06f0",
        },
        {
          orderPlacement: "4",
          optionId: "61b10ce6cbb40a531ccf06ec",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "7",
          optionId: "61b10ccacbb40a531ccf06e0",
        },
        {
          orderPlacement: "1",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e2dcbb40a531ccf0746",
        },
        {
          orderPlacement: "2",
          optionId: "61b10dc5cbb40a531ccf0712",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "6",
          optionId: "61b10deacbb40a531ccf0726",
        },
        {
          orderPlacement: "7",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
      ],
    },
    category: "Shotgun",
    __v: 0,
  },
  {
    _id: "61b1151acbb40a531ccf077c",
    commandCodes: ["doublebarrel"],
    displayName: "Double Barrel",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/double-barrel.png",
    gameInfo: {
      blurb:
        "Break-action shotgun with a fast rate-of-fire. Effective at close range.",
      stats: {
        accuracy: 71,
        range: 56,
        mobility: 62,
        damage: 85,
        fireRate: 50,
        control: 60,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1043acbb40a531ccf0523",
        },
        {
          orderPlacement: "3",
          optionId: "61b1040ecbb40a531ccf0513",
        },
        {
          orderPlacement: "2",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "4",
          optionId: "61b10480cbb40a531ccf0539",
        },
        {
          orderPlacement: "1",
          optionId: "61b2a63476830d4150678b07",
        },
        {
          orderPlacement: "2",
          optionId: "61b2a64876830d4150678b0b",
        },
        {
          orderPlacement: "3",
          optionId: "61b1068acbb40a531ccf05a5",
        },
        {
          orderPlacement: "4",
          optionId: "61b2a66176830d4150678b11",
        },
        {
          orderPlacement: "1",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "4",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "2",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "5",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "8",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "6",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "9",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "7",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "10",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "15",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "12",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "11",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "13",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "14",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "16",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "1",
          optionId: "61b2a6ce76830d4150678b1b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "2",
          optionId: "61b2a6e676830d4150678b1f",
        },
        {
          orderPlacement: "4",
          optionId: "61b2a71376830d4150678b25",
        },
        {
          orderPlacement: "6",
          optionId: "61b2a73c76830d4150678b2d",
        },
        {
          orderPlacement: "4",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "3",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "2",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "5",
          optionId: "61b2a72876830d4150678b29",
        },
        {
          orderPlacement: "1",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "5",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "6",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "2",
          optionId: "61b2a78f76830d4150678b39",
        },
        {
          orderPlacement: "1",
          optionId: "61b2a77a76830d4150678b35",
        },
        {
          orderPlacement: "7",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "1",
          optionId: "61b10cebcbb40a531ccf06ee",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf0cbb40a531ccf06f0",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "4",
          optionId: "61b10ce6cbb40a531ccf06ec",
        },
        {
          orderPlacement: "7",
          optionId: "61b10ccacbb40a531ccf06e0",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "1",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "5",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "1",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e02cbb40a531ccf0730",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "3",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "4",
          optionId: "61b10df4cbb40a531ccf072a",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "8",
          optionId: "61b10dbbcbb40a531ccf070c",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
      ],
    },
    category: "Shotgun",
    __v: 0,
  },
  {
    _id: "61b11559cbb40a531ccf077e",
    commandCodes: ["mg42"],
    displayName: "MG42",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/mg42.png",
    gameInfo: {
      blurb:
        "Extreme rate-of-fire LMG able to suppress enemy forces at medium range.",
      stats: {
        accuracy: 72,
        range: 78,
        mobility: 48,
        damage: 76,
        fireRate: 70,
        control: 72,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "4",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "3",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "2",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "5",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "7",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "1",
          optionId: "61b2a92f76830d4150678b9e",
        },
        {
          orderPlacement: "6",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "2",
          optionId: "61b2a95376830d4150678ba2",
        },
        {
          orderPlacement: "3",
          optionId: "61b2a97676830d4150678ba8",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "4",
          optionId: "61b2a9be76830d4150678bb0",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "7",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "6",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "5",
          optionId: "61b10377cbb40a531ccf04e7",
        },
        {
          orderPlacement: "9",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "8",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "10",
          optionId: "61b23d9176830d4150677d4c",
        },
        {
          orderPlacement: "12",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "11",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "14",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "13",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "15",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "17",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "16",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "18",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "19",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "21",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "20",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "22",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "24",
          optionId: "61b2aa3e76830d4150678bbc",
        },
        {
          orderPlacement: "23",
          optionId: "61b2aa2a76830d4150678bb8",
        },
        {
          orderPlacement: "4",
          optionId: "61b2aa9876830d4150678bca",
        },
        {
          orderPlacement: "3",
          optionId: "61b2aa7e76830d4150678bc6",
        },
        {
          orderPlacement: "1",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "2",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "5",
          optionId: "61b2aab576830d4150678bd0",
        },
        {
          orderPlacement: "4",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "5",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "7",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "6",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "8",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "1",
          optionId: "61b2aaf976830d4150678bd8",
        },
        {
          orderPlacement: "2",
          optionId: "61b2ab1f76830d4150678bde",
        },
        {
          orderPlacement: "3",
          optionId: "61b2ab3c76830d4150678be2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "4",
          optionId: "61b2ab6176830d4150678be6",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "5",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "2",
          optionId: "61b10dc5cbb40a531ccf0712",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e2dcbb40a531ccf0746",
        },
        {
          orderPlacement: "4",
          optionId: "61b10df1cbb40a531ccf0728",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e23cbb40a531ccf0740",
        },
        {
          orderPlacement: "6",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "6",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "4",
          optionId: "61b2a99476830d4150678bac",
        },
        {
          orderPlacement: "2",
          optionId: "61b2aa6576830d4150678bc2",
        },
      ],
    },
    category: "LMG",
    __v: 0,
  },
  {
    _id: "61b11584cbb40a531ccf0780",
    commandCodes: ["dp27"],
    displayName: "DP27",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/dp27.png",
    gameInfo: {
      blurb:
        "Versatile LMG capable of full-auto accuracy up to medium range and accurate in burst at long range.",
      stats: {
        accuracy: 37,
        range: 76,
        mobility: 50,
        damage: 77,
        fireRate: 68,
        control: 65,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "2",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "4",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "3",
          optionId: "61b10413cbb40a531ccf0515",
        },
        {
          orderPlacement: "6",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "5",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "7",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "1",
          optionId: "61b2ad5d76830d4150678c53",
        },
        {
          orderPlacement: "3",
          optionId: "61b2ad9d76830d4150678c5b",
        },
        {
          orderPlacement: "4",
          optionId: "61b2adbb76830d4150678c61",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b2ad8076830d4150678c57",
        },
        {
          orderPlacement: "4",
          optionId: "61b2adfc76830d4150678c69",
        },
        {
          orderPlacement: "5",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "7",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "11",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "9",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "10",
          optionId: "61b2ae2276830d4150678c6d",
        },
        {
          orderPlacement: "8",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "12",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "14",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "15",
          optionId: "61b2ae5376830d4150678c73",
        },
        {
          orderPlacement: "13",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "16",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "17",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "18",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "22",
          optionId: "61b2ae8776830d4150678c79",
        },
        {
          orderPlacement: "20",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "21",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "19",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "1",
          optionId: "61b2aeba76830d4150678c81",
        },
        {
          orderPlacement: "23",
          optionId: "61b2ae8b76830d4150678c7b",
        },
        {
          orderPlacement: "2",
          optionId: "61b2aecc76830d4150678c83",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "4",
          optionId: "61b2aeff76830d4150678c8b",
        },
        {
          orderPlacement: "3",
          optionId: "61b2aedd76830d4150678c85",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "2",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "4",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "1",
          optionId: "61b2af7176830d4150678c95",
        },
        {
          orderPlacement: "6",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "8",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "5",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "7",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "2",
          optionId: "61b2af8a76830d4150678c97",
        },
        {
          orderPlacement: "4",
          optionId: "61b2afd576830d4150678c9f",
        },
        {
          orderPlacement: "5",
          optionId: "61b2afe676830d4150678ca1",
        },
        {
          orderPlacement: "3",
          optionId: "61b2afb976830d4150678c9b",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "11",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "14",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "13",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "12",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "15",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "16",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "1",
          optionId: "61b10dc5cbb40a531ccf0712",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e19cbb40a531ccf073a",
        },
        {
          orderPlacement: "17",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "4",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "6",
          optionId: "61b10de0cbb40a531ccf0722",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "LMG",
    __v: 0,
  },
  {
    _id: "61b115adcbb40a531ccf0782",
    commandCodes: ["bren"],
    displayName: "Bren",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/bren.png",
    gameInfo: {
      blurb:
        "Full-auto LMG with accurate initial fire. Recoil becomes difficult to control with sustained fire.",
      stats: {
        accuracy: 48,
        range: 77,
        mobility: 53,
        damage: 74,
        fireRate: 64,
        control: 70,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "4",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "3",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "1",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "2",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "5",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "7",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "1",
          optionId: "61b2b22876830d4150678d19",
        },
        {
          orderPlacement: "6",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "2",
          optionId: "61b2b23b76830d4150678d1d",
        },
        {
          orderPlacement: "4",
          optionId: "61b2b24a76830d4150678d21",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "3",
          optionId: "61b2b24276830d4150678d1f",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "5",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "4",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "6",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "7",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "8",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "11",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "10",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "9",
          optionId: "61b1038fcbb40a531ccf04ef",
        },
        {
          orderPlacement: "12",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "13",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "14",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "15",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "16",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "17",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "19",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "18",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "20",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "1",
          optionId: "61b2b32176830d4150678d33",
        },
        {
          orderPlacement: "3",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "22",
          optionId: "61b2b2f676830d4150678d2d",
        },
        {
          orderPlacement: "2",
          optionId: "61b2b33576830d4150678d37",
        },
        {
          orderPlacement: "21",
          optionId: "61b2b2f376830d4150678d2b",
        },
        {
          orderPlacement: "4",
          optionId: "61b2b34176830d4150678d39",
        },
        {
          orderPlacement: "5",
          optionId: "61b2b34976830d4150678d3b",
        },
        {
          orderPlacement: "3",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "1",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "4",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "2",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "5",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "6",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "7",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "2",
          optionId: "61b10bd8cbb40a531ccf0688",
        },
        {
          orderPlacement: "1",
          optionId: "61b2b3ad76830d4150678d43",
        },
        {
          orderPlacement: "8",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "3",
          optionId: "61b2b3e576830d4150678d49",
        },
        {
          orderPlacement: "4",
          optionId: "61b2b3f276830d4150678d4d",
        },
        {
          orderPlacement: "1",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "4",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "3",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "2",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "5",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "6",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "2",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "7",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "1",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "3",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "4",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "5",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "6",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "8",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "7",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "9",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "10",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "2",
          optionId: "61b10dcacbb40a531ccf0716",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e2dcbb40a531ccf0746",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e23cbb40a531ccf0740",
        },
        {
          orderPlacement: "1",
          optionId: "61b10db3cbb40a531ccf0708",
        },
        {
          orderPlacement: "5",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "6",
          optionId: "61b10dc2cbb40a531ccf0710",
        },
        {
          orderPlacement: "2",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "4",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "6",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "5",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "1",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "7",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "8",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "LMG",
    __v: 0,
  },
  {
    _id: "61b115dbcbb40a531ccf0784",
    commandCodes: ["type11"],
    displayName: "Type 11",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/type-11.png",
    gameInfo: {
      blurb:
        "Lighter LMG offers additional maneuverability to reposition during battle.",
      stats: {
        accuracy: 73,
        range: 76,
        mobility: 52,
        damage: 73,
        fireRate: 70,
        control: 72,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "4",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "2",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "3",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "6",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "5",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "7",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "1",
          optionId: "61b2ba9f76830d4150678dc0",
        },
        {
          orderPlacement: "2",
          optionId: "61b2bac476830d4150678dc4",
        },
        {
          orderPlacement: "3",
          optionId: "61b2badd76830d4150678dc8",
        },
        {
          orderPlacement: "1",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "2",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "3",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "4",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "7",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "6",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "5",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "8",
          optionId: "61b23d9176830d4150677d4c",
        },
        {
          orderPlacement: "12",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "11",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "9",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "10",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "13",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "14",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "16",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "15",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "18",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "17",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "19",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "20",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "21",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "22",
          optionId: "61b2bb5a76830d4150678dd2",
        },
        {
          orderPlacement: "23",
          optionId: "61b2bb9876830d4150678dd8",
        },
        {
          orderPlacement: "24",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "25",
          optionId: "61b2bb9c76830d4150678dda",
        },
        {
          orderPlacement: "27",
          optionId: "61b2bba976830d4150678dde",
        },
        {
          orderPlacement: "26",
          optionId: "61b2bba676830d4150678ddc",
        },
        {
          orderPlacement: "28",
          optionId: "61b2bbb076830d4150678de0",
        },
        {
          orderPlacement: "29",
          optionId: "61b2bbb576830d4150678de2",
        },
        {
          orderPlacement: "30",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "31",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "32",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "34",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "35",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "33",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "36",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "37",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "38",
          optionId: "61b2bc3376830d4150678dea",
        },
        {
          orderPlacement: "41",
          optionId: "61b2bc6576830d4150678df2",
        },
        {
          orderPlacement: "39",
          optionId: "61b2bc5176830d4150678dee",
        },
        {
          orderPlacement: "40",
          optionId: "61b2bc5876830d4150678df0",
        },
        {
          orderPlacement: "42",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "43",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "44",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "46",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "45",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "47",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "48",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "49",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "51",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "54",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "50",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "52",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "53",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "55",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "56",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "57",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "58",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "61",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "60",
          optionId: "61b10dcecbb40a531ccf0718",
        },
        {
          orderPlacement: "59",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "63",
          optionId: "61b10e02cbb40a531ccf0730",
        },
        {
          orderPlacement: "62",
          optionId: "61b10dc2cbb40a531ccf0710",
        },
        {
          orderPlacement: "66",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "67",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "65",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "64",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "68",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "69",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "71",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "72",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "70",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
      ],
    },
    category: "LMG",
    __v: 0,
  },
  {
    _id: "61b11620cbb40a531ccf0786",
    commandCodes: ["m1", "garand"],
    displayName: "M1 Garand",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/m1-garand.png",
    gameInfo: {
      blurb:
        "Versatile rifle offering effective accuracy and stopping power at all ranges.",
      stats: {
        accuracy: 77,
        range: 73,
        mobility: 58,
        damage: 76,
        fireRate: 57,
        control: 72,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "4",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "2",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "5",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "7",
          optionId: "61b104e6cbb40a531ccf0553",
        },
        {
          orderPlacement: "8",
          optionId: "61b1052ccbb40a531ccf0563",
        },
        {
          orderPlacement: "9",
          optionId: "61b10521cbb40a531ccf0561",
        },
        {
          orderPlacement: "10",
          optionId: "61b10501cbb40a531ccf0559",
        },
        {
          orderPlacement: "12",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "11",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "13",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "16",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "14",
          optionId: "61b2be0676830d4150678e5a",
        },
        {
          orderPlacement: "15",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "17",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "18",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "20",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "19",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "21",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "22",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "23",
          optionId: "61b1038fcbb40a531ccf04ef",
        },
        {
          orderPlacement: "24",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "25",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "26",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "27",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "28",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "31",
          optionId: "61b10389cbb40a531ccf04ed",
        },
        {
          orderPlacement: "32",
          optionId: "61b10768cbb40a531ccf05dd",
        },
        {
          orderPlacement: "33",
          optionId: "61b10793cbb40a531ccf05ed",
        },
        {
          orderPlacement: "29",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "30",
          optionId: "61b2be6176830d4150678e62",
        },
        {
          orderPlacement: "39",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "38",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "35",
          optionId: "61b1078ecbb40a531ccf05eb",
        },
        {
          orderPlacement: "36",
          optionId: "61b2beaf76830d4150678e6a",
        },
        {
          orderPlacement: "37",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "34",
          optionId: "61b107accbb40a531ccf05f5",
        },
        {
          orderPlacement: "43",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "45",
          optionId: "61b10bb4cbb40a531ccf067a",
        },
        {
          orderPlacement: "41",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "40",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "44",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "42",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "46",
          optionId: "61b10b96cbb40a531ccf0670",
        },
        {
          orderPlacement: "51",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "50",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "47",
          optionId: "61b10b91cbb40a531ccf066e",
        },
        {
          orderPlacement: "48",
          optionId: "61b10c00cbb40a531ccf0698",
        },
        {
          orderPlacement: "49",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "52",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "54",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "55",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "53",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "57",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "56",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "58",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "60",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "59",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "62",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "63",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "61",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "65",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "64",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "66",
          optionId: "61b10e02cbb40a531ccf0730",
        },
        {
          orderPlacement: "69",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "67",
          optionId: "61b10e19cbb40a531ccf073a",
        },
        {
          orderPlacement: "68",
          optionId: "61b10db3cbb40a531ccf0708",
        },
        {
          orderPlacement: "71",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "73",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "70",
          optionId: "61b10de0cbb40a531ccf0722",
        },
        {
          orderPlacement: "75",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "74",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "72",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "76",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "77",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "78",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "79",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
      ],
    },
    category: "LMG",
    __v: 0,
  },
  {
    _id: "61b11659cbb40a531ccf0788",
    commandCodes: ["svt"],
    displayName: "SVT-40",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/svt-40.png",
    gameInfo: {
      blurb:
        "High-caliber semi-automatic battle rifle. Especially effective with headshots.",
      stats: {
        accuracy: 78,
        range: 68,
        mobility: 66,
        damage: 80,
        fireRate: 63,
        control: 60,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "4",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "2",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "7",
          optionId: "61b2c03276830d4150678ed7",
        },
        {
          orderPlacement: "5",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "8",
          optionId: "61b2c03576830d4150678ed9",
        },
        {
          orderPlacement: "9",
          optionId: "61b2c03c76830d4150678edb",
        },
        {
          orderPlacement: "10",
          optionId: "61b2c04176830d4150678edd",
        },
        {
          orderPlacement: "11",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "12",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "13",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "14",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "15",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "16",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "17",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "18",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "20",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "21",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "19",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "22",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "23",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "24",
          optionId: "61b23d9176830d4150677d4c",
        },
        {
          orderPlacement: "27",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "25",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "26",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "28",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "29",
          optionId: "61b103b3cbb40a531ccf04fb",
        },
        {
          orderPlacement: "30",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "31",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "32",
          optionId: "61b2c0f776830d4150678ee9",
        },
        {
          orderPlacement: "33",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "34",
          optionId: "61b2c10076830d4150678eeb",
        },
        {
          orderPlacement: "35",
          optionId: "61b2c10676830d4150678eed",
        },
        {
          orderPlacement: "36",
          optionId: "61b2c10a76830d4150678eef",
        },
        {
          orderPlacement: "40",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "38",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "39",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "37",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "41",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "42",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "43",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "45",
          optionId: "61b2c19576830d4150678ef7",
        },
        {
          orderPlacement: "44",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "46",
          optionId: "61b2c1a276830d4150678ef9",
        },
        {
          orderPlacement: "48",
          optionId: "61b2c1c076830d4150678efd",
        },
        {
          orderPlacement: "47",
          optionId: "61b2c1ad76830d4150678efb",
        },
        {
          orderPlacement: "49",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "51",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "50",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "52",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "53",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "54",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "55",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "56",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "57",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "58",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "60",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "59",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "61",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "63",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "62",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "64",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "66",
          optionId: "61b2c24e76830d4150678f09",
        },
        {
          orderPlacement: "65",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "67",
          optionId: "61b10e09cbb40a531ccf0734",
        },
        {
          orderPlacement: "69",
          optionId: "61b10dfbcbb40a531ccf072c",
        },
        {
          orderPlacement: "68",
          optionId: "61b10dd4cbb40a531ccf071c",
        },
        {
          orderPlacement: "70",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "71",
          optionId: "61b10e27cbb40a531ccf0742",
        },
        {
          orderPlacement: "73",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "72",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "74",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "75",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "76",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "77",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "78",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "79",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
      ],
    },
    category: "LMG",
    __v: 0,
  },
  {
    _id: "61b11684cbb40a531ccf078a",
    commandCodes: ["g43"],
    displayName: "G-43",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/g-43.png",
    gameInfo: {
      blurb:
        "High rate-of-fire semi-automatic rifle most effective at medium range.",
      stats: {
        accuracy: 76,
        range: 72,
        mobility: 60,
        damage: 76,
        fireRate: 62,
        control: 73,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "2",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "4",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "5",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "8",
          optionId: "61b2c61276830d4150678f68",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "7",
          optionId: "61b2c60a76830d4150678f66",
        },
        {
          orderPlacement: "9",
          optionId: "61b2c61c76830d4150678f6a",
        },
        {
          orderPlacement: "10",
          optionId: "61b2c62076830d4150678f6c",
        },
        {
          orderPlacement: "11",
          optionId: "61b2c62876830d4150678f6e",
        },
        {
          orderPlacement: "12",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "14",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "17",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "15",
          optionId: "61b10377cbb40a531ccf04e7",
        },
        {
          orderPlacement: "13",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "16",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "19",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "20",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "21",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "23",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "22",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "18",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "24",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "25",
          optionId: "61b103f9cbb40a531ccf050f",
        },
        {
          orderPlacement: "26",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "28",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "27",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "29",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "30",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "32",
          optionId: "61b10389cbb40a531ccf04ed",
        },
        {
          orderPlacement: "33",
          optionId: "61b2c6eb76830d4150678f7a",
        },
        {
          orderPlacement: "31",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "34",
          optionId: "61b2c6f276830d4150678f7c",
        },
        {
          orderPlacement: "35",
          optionId: "61b2c6fc76830d4150678f80",
        },
        {
          orderPlacement: "36",
          optionId: "61b2c70b76830d4150678f82",
        },
        {
          orderPlacement: "38",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "37",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "39",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "40",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "41",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "42",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "44",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "45",
          optionId: "61b2542576830d4150678044",
        },
        {
          orderPlacement: "43",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "46",
          optionId: "61b2c79d76830d4150678f8a",
        },
        {
          orderPlacement: "47",
          optionId: "61b2c7ad76830d4150678f8d",
        },
        {
          orderPlacement: "48",
          optionId: "61b24ec576830d4150677f4d",
        },
        {
          orderPlacement: "49",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "50",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "54",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "52",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "51",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "55",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "53",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "56",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "58",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "60",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "59",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "57",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "61",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "62",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "64",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "67",
          optionId: "61b10e09cbb40a531ccf0734",
        },
        {
          orderPlacement: "63",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "65",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "66",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "69",
          optionId: "61b10dbdcbb40a531ccf070e",
        },
        {
          orderPlacement: "68",
          optionId: "61b10e23cbb40a531ccf0740",
        },
        {
          orderPlacement: "73",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "72",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "71",
          optionId: "61b10e05cbb40a531ccf0732",
        },
        {
          orderPlacement: "70",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "74",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "75",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "76",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "77",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "79",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "78",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
      ],
    },
    category: "LMG",
    __v: 0,
  },
  {
    _id: "61b116c4cbb40a531ccf078c",
    commandCodes: ["3line", "threeline"],
    displayName: "3-Line Rifle",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/3-line-rifle.png",
    gameInfo: {
      blurb:
        "Heavier bolt-action rifle offers increased stability. Immediately lethal almost anywhere on the body.",
      stats: {
        accuracy: 83,
        range: 83,
        mobility: 43,
        damage: 79,
        fireRate: 43,
        control: 65,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "1",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "4",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "2",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "7",
          optionId: "61b1054bcbb40a531ccf056b",
        },
        {
          orderPlacement: "5",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "8",
          optionId: "61b1061bcbb40a531ccf0585",
        },
        {
          orderPlacement: "12",
          optionId: "61b10492cbb40a531ccf053d",
        },
        {
          orderPlacement: "10",
          optionId: "61b1049bcbb40a531ccf053f",
        },
        {
          orderPlacement: "9",
          optionId: "61b10615cbb40a531ccf0583",
        },
        {
          orderPlacement: "11",
          optionId: "61b10551cbb40a531ccf056d",
        },
        {
          orderPlacement: "13",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "14",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "15",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "17",
          optionId: "60e3e3248a26dd1acccc5ef8",
        },
        {
          orderPlacement: "16",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "18",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "19",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "20",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "23",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "22",
          optionId: "61b2cb0e76830d415067900d",
        },
        {
          orderPlacement: "21",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "24",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "26",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "25",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "28",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "29",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "27",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "30",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "31",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "32",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "35",
          optionId: "61b2cb6576830d4150679015",
        },
        {
          orderPlacement: "34",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "33",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "36",
          optionId: "61b2cb9876830d415067901b",
        },
        {
          orderPlacement: "40",
          optionId: "61b107eccbb40a531ccf0609",
        },
        {
          orderPlacement: "37",
          optionId: "61b2cba076830d415067901d",
        },
        {
          orderPlacement: "38",
          optionId: "61b2cba776830d415067901f",
        },
        {
          orderPlacement: "39",
          optionId: "61b107f1cbb40a531ccf060b",
        },
        {
          orderPlacement: "41",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "42",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "44",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "43",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "45",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "47",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "46",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "48",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "50",
          optionId: "61b10c31cbb40a531ccf06aa",
        },
        {
          orderPlacement: "53",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "52",
          optionId: "61b10b9bcbb40a531ccf0672",
        },
        {
          orderPlacement: "54",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "49",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "51",
          optionId: "61b10baecbb40a531ccf0678",
        },
        {
          orderPlacement: "55",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "56",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "57",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "58",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "59",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "60",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "61",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "63",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "62",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "64",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "65",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "66",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "67",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "68",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "69",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "70",
          optionId: "61b10dbdcbb40a531ccf070e",
        },
        {
          orderPlacement: "72",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "71",
          optionId: "61b10e27cbb40a531ccf0742",
        },
        {
          orderPlacement: "73",
          optionId: "61b10e10cbb40a531ccf0736",
        },
        {
          orderPlacement: "74",
          optionId: "61b10de0cbb40a531ccf0722",
        },
        {
          orderPlacement: "75",
          optionId: "61b10e09cbb40a531ccf0734",
        },
        {
          orderPlacement: "77",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "78",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "76",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "79",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "80",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "81",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "83",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "82",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
      ],
    },
    category: "Sniper Rifle",
    __v: 0,
  },
  {
    _id: "61b11712cbb40a531ccf078e",
    commandCodes: ["vgkar", "karvg", "vgkar98", "kar98vg"],
    displayName: "Kar98k (VG)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/kar98k-vg.png",
    gameInfo: {
      blurb:
        "Versatile bolt-action rifle. Immediately lethal to the torso and head.",
      stats: {
        accuracy: 83,
        range: 80,
        mobility: 44,
        damage: 85,
        fireRate: 44,
        control: 70,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "3",
          optionId: "61b1046ecbb40a531ccf0533",
        },
        {
          orderPlacement: "2",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "4",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "5",
          optionId: "61b1047acbb40a531ccf0537",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "8",
          optionId: "61b1064ecbb40a531ccf0595",
        },
        {
          orderPlacement: "7",
          optionId: "61b2cd6976830d415067908c",
        },
        {
          orderPlacement: "9",
          optionId: "61b106e7cbb40a531ccf05b7",
        },
        {
          orderPlacement: "12",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "11",
          optionId: "61b10638cbb40a531ccf058f",
        },
        {
          orderPlacement: "10",
          optionId: "61b1063ecbb40a531ccf0591",
        },
        {
          orderPlacement: "14",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "15",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "17",
          optionId: "61b2cff176830d41506790a2",
        },
        {
          orderPlacement: "13",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "16",
          optionId: "61b10377cbb40a531ccf04e7",
        },
        {
          orderPlacement: "18",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "20",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "21",
          optionId: "61b2d01c76830d41506790a6",
        },
        {
          orderPlacement: "22",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "19",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "23",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "24",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "25",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "27",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "26",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "28",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "29",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "30",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "31",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "33",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "32",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "34",
          optionId: "61b108a2cbb40a531ccf064b",
        },
        {
          orderPlacement: "35",
          optionId: "61b10868cbb40a531ccf0639",
        },
        {
          orderPlacement: "36",
          optionId: "61b10898cbb40a531ccf0647",
        },
        {
          orderPlacement: "37",
          optionId: "61b1084ecbb40a531ccf062f",
        },
        {
          orderPlacement: "38",
          optionId: "61b107fccbb40a531ccf060f",
        },
        {
          orderPlacement: "39",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "40",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "41",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "42",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "44",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "47",
          optionId: "61b2d0ef76830d41506790b4",
        },
        {
          orderPlacement: "46",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "45",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "43",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "48",
          optionId: "61b2d10376830d41506790b6",
        },
        {
          orderPlacement: "49",
          optionId: "61b2d11c76830d41506790b8",
        },
        {
          orderPlacement: "53",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "50",
          optionId: "61b10bfbcbb40a531ccf0696",
        },
        {
          orderPlacement: "51",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "52",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "54",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "55",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "59",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "58",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "57",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "56",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "64",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "60",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "62",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "65",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "61",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "63",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "70",
          optionId: "61b10e27cbb40a531ccf0742",
        },
        {
          orderPlacement: "67",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "66",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "71",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "69",
          optionId: "61b10dcecbb40a531ccf0718",
        },
        {
          orderPlacement: "68",
          optionId: "61b10de6cbb40a531ccf0724",
        },
        {
          orderPlacement: "72",
          optionId: "61b10e05cbb40a531ccf0732",
        },
        {
          orderPlacement: "73",
          optionId: "61b10e09cbb40a531ccf0734",
        },
        {
          orderPlacement: "76",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "77",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "74",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "75",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "80",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "79",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "81",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "82",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "78",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "6.5",
          optionId: "61b10419cbb40a531ccf0517",
        },
      ],
    },
    category: "Sniper Rifle",
    __v: 0,
  },
  {
    _id: "61b11742cbb40a531ccf0790",
    commandCodes: ["type99"],
    displayName: "Type 99",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/type-99.png",
    gameInfo: {
      blurb:
        "Lighter bolt-action rifle offers additional maneuverability. Immediately lethal to the upper torso and head.",
      stats: {
        accuracy: 82,
        range: 79,
        mobility: 44,
        damage: 85,
        fireRate: 44,
        control: 70,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "4",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "1",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "2",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "7",
          optionId: "61b2d27676830d4150679122",
        },
        {
          orderPlacement: "5",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "8",
          optionId: "61b2d27f76830d4150679124",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "9",
          optionId: "61b2d28276830d4150679126",
        },
        {
          orderPlacement: "10",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "12",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "11",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "13",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "14",
          optionId: "60e3e3248a26dd1acccc5ef8",
        },
        {
          orderPlacement: "15",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "16",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "17",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "18",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "19",
          optionId: "61b2d3be76830d4150679132",
        },
        {
          orderPlacement: "22",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "20",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "21",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "23",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "25",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "24",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "26",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "27",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "28",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "29",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "30",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "31",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "35",
          optionId: "61b2da3a76830d4150679146",
        },
        {
          orderPlacement: "33",
          optionId: "61b2da2476830d4150679142",
        },
        {
          orderPlacement: "34",
          optionId: "61b2da3576830d4150679144",
        },
        {
          orderPlacement: "32",
          optionId: "61b2d41076830d415067913a",
        },
        {
          orderPlacement: "37",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "39",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "36",
          optionId: "61b2da4176830d4150679148",
        },
        {
          orderPlacement: "38",
          optionId: "61b2bbb076830d4150678de0",
        },
        {
          orderPlacement: "40",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "41",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "43",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "42",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "44",
          optionId: "61b1071acbb40a531ccf05c5",
        },
        {
          orderPlacement: "48",
          optionId: "61b2db1776830d4150679154",
        },
        {
          orderPlacement: "45",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "49",
          optionId: "61b2db1f76830d4150679156",
        },
        {
          orderPlacement: "46",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "47",
          optionId: "61b2dabd76830d4150679150",
        },
        {
          orderPlacement: "50",
          optionId: "61b24ec576830d4150677f4d",
        },
        {
          orderPlacement: "52",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "51",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "53",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "55",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "54",
          optionId: "61b10cc6cbb40a531ccf06de",
        },
        {
          orderPlacement: "56",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "59",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "57",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "58",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "61",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "60",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "62",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "64",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "63",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "65",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "67",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "66",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "68",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "73",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "69",
          optionId: "61b10e19cbb40a531ccf073a",
        },
        {
          orderPlacement: "70",
          optionId: "61b10de0cbb40a531ccf0722",
        },
        {
          orderPlacement: "71",
          optionId: "61b10dfbcbb40a531ccf072c",
        },
        {
          orderPlacement: "72",
          optionId: "61b10dd4cbb40a531ccf071c",
        },
        {
          orderPlacement: "74",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "75",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "77",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "79",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "80",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "78",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "76",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "81",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
      ],
    },
    category: "Sniper Rifle",
    __v: 0,
  },
  {
    _id: "61b1265ce413884abcc513bc",
    commandCodes: ["gorenko"],
    displayName: "Gorenko Anti-Tank Rifle",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/gorenko-anti-tank-rifle.png",
    gameInfo: {
      blurb:
        "Heavy semi-automatic anti-tank rifle with devestating performance against infantry and vehicles alike.",
      stats: {
        accuracy: 78,
        range: 68,
        mobility: 66,
        damage: 80,
        fireRate: 63,
        control: 60,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b251fd76830d4150678027",
        },
        {
          orderPlacement: "2",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "3",
          optionId: "61b1041fcbb40a531ccf0519",
        },
        {
          orderPlacement: "4",
          optionId: "61b1044dcbb40a531ccf0529",
        },
        {
          orderPlacement: "5",
          optionId: "61b10452cbb40a531ccf052b",
        },
        {
          orderPlacement: "6",
          optionId: "61b1042acbb40a531ccf051d",
        },
        {
          orderPlacement: "7",
          optionId: "61b2dc6c76830d41506791bb",
        },
        {
          orderPlacement: "8",
          optionId: "61b2dc7576830d41506791bd",
        },
        {
          orderPlacement: "9",
          optionId: "61b2dc7f76830d41506791bf",
        },
        {
          orderPlacement: "10",
          optionId: "61b2dc8476830d41506791c1",
        },
        {
          orderPlacement: "11",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "12",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "13",
          optionId: "60e3e3248a26dd1acccc5ef8",
        },
        {
          orderPlacement: "14",
          optionId: "61b103e9cbb40a531ccf050b",
        },
        {
          orderPlacement: "15",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "16",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "17",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "19",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "18",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "20",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "21",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "22",
          optionId: "61b2868d76830d4150678509",
        },
        {
          orderPlacement: "23",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "24",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "27",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "26",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "25",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "28",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "32",
          optionId: "61b103e2cbb40a531ccf0509",
        },
        {
          orderPlacement: "29",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "34",
          optionId: "61b2dd1a76830d41506791cd",
        },
        {
          orderPlacement: "31",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "30",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "33",
          optionId: "61b286aa76830d415067850b",
        },
        {
          orderPlacement: "38",
          optionId: "61b2dd6b76830d41506791dd",
        },
        {
          orderPlacement: "35",
          optionId: "61b10868cbb40a531ccf0639",
        },
        {
          orderPlacement: "36",
          optionId: "61b2dd3576830d41506791d1",
        },
        {
          orderPlacement: "37",
          optionId: "61b2dd5776830d41506791d9",
        },
        {
          orderPlacement: "39",
          optionId: "61b106fecbb40a531ccf05bd",
        },
        {
          orderPlacement: "40",
          optionId: "60df7454bf84855a680f8aa1",
        },
        {
          orderPlacement: "42",
          optionId: "61b2dd9876830d41506791e5",
        },
        {
          orderPlacement: "41",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "45",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "46",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "43",
          optionId: "61b2dd9f76830d41506791e7",
        },
        {
          orderPlacement: "44",
          optionId: "61b2dda576830d41506791e9",
        },
        {
          orderPlacement: "47",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "48",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "51",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "52",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "50",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "49",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "53",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "54",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "55",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "56",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "58",
          optionId: "61b10dd4cbb40a531ccf071c",
        },
        {
          orderPlacement: "57",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "59",
          optionId: "61b10dc8cbb40a531ccf0714",
        },
        {
          orderPlacement: "60",
          optionId: "61b10e09cbb40a531ccf0734",
        },
        {
          orderPlacement: "64",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "62",
          optionId: "61b10dcecbb40a531ccf0718",
        },
        {
          orderPlacement: "61",
          optionId: "61b10db3cbb40a531ccf0708",
        },
        {
          orderPlacement: "63",
          optionId: "61b10dcacbb40a531ccf0716",
        },
        {
          orderPlacement: "66",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "65",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "67",
          optionId: "61b10e38cbb40a531ccf0748",
        },
        {
          orderPlacement: "68",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "70",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "69",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "71",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
      ],
    },
    category: "Sniper Rifle",
    __v: 0,
  },
  {
    _id: "61b1179bcbb40a531ccf0792",
    commandCodes: ["machinepistol"],
    displayName: "Machine Pistol",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/machine-pistol.png",
    gameInfo: {
      blurb:
        "Very fast firing fully-automatic pistol. Effective at close range.",
      stats: {
        accuracy: 54,
        range: 52,
        mobility: 77,
        damage: 65,
        fireRate: 53,
        control: 60,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "2",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "5",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "6",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "7",
          optionId: "61b104adcbb40a531ccf0545",
        },
        {
          orderPlacement: "8",
          optionId: "61b10694cbb40a531ccf05a7",
        },
        {
          orderPlacement: "9",
          optionId: "61b106bacbb40a531ccf05b1",
        },
        {
          orderPlacement: "10",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "11",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "12",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "13",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "15",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "16",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "14",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "19",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "17",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "18",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "22",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "20",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "21",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "25",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "23",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "24",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "28",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "27",
          optionId: "61b1037dcbb40a531ccf04e9",
        },
        {
          orderPlacement: "26",
          optionId: "61b10383cbb40a531ccf04eb",
        },
        {
          orderPlacement: "30",
          optionId: "61b2dfc876830d4150679258",
        },
        {
          orderPlacement: "31",
          optionId: "61b2dfda76830d415067925c",
        },
        {
          orderPlacement: "29",
          optionId: "61b2dfc376830d4150679256",
        },
        {
          orderPlacement: "34",
          optionId: "61b28b5176830d41506785a4",
        },
        {
          orderPlacement: "32",
          optionId: "61b2dfd276830d415067925a",
        },
        {
          orderPlacement: "33",
          optionId: "61b2e02b76830d4150679262",
        },
        {
          orderPlacement: "37",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "38",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "35",
          optionId: "61b10c78cbb40a531ccf06c4",
        },
        {
          orderPlacement: "36",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "40",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "39",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "41",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "42",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "45",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "44",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "43",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "46",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "47",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "48",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "51",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "49",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "52",
          optionId: "61b10e23cbb40a531ccf0740",
        },
        {
          orderPlacement: "50",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "53",
          optionId: "61b10dc2cbb40a531ccf0710",
        },
        {
          orderPlacement: "54",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "56",
          optionId: "61b10df4cbb40a531ccf072a",
        },
        {
          orderPlacement: "55",
          optionId: "61b10dc5cbb40a531ccf0712",
        },
        {
          orderPlacement: "57",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "58",
          optionId: "61b10dbbcbb40a531ccf070c",
        },
        {
          orderPlacement: "59",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "60",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "61",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "62",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "63",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "64",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "65",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
      ],
    },
    category: "Handgun",
    __v: 0,
  },
  {
    _id: "61b117c0cbb40a531ccf0794",
    commandCodes: ["ratt"],
    displayName: "RATT",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/ratt.png",
    gameInfo: {
      blurb: "Fast-firing semi-automatic pistol. Effective at close range.",
      stats: {
        accuracy: 57,
        range: 40,
        mobility: 82,
        damage: 55,
        fireRate: 60,
        control: 72,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "2",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "8",
          optionId: "61b10546cbb40a531ccf0569",
        },
        {
          orderPlacement: "5",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "7",
          optionId: "61b106f3cbb40a531ccf05bb",
        },
        {
          orderPlacement: "6",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "10",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "11",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "9",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "12",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "13",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "15",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "14",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "16",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "17",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "18",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "19",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "20",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "21",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "23",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "22",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "24",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "25",
          optionId: "61b2dfc376830d4150679256",
        },
        {
          orderPlacement: "26",
          optionId: "61b2dfc876830d4150679258",
        },
        {
          orderPlacement: "27",
          optionId: "61b2dfda76830d415067925c",
        },
        {
          orderPlacement: "29",
          optionId: "61b2e27476830d41506792c4",
        },
        {
          orderPlacement: "28",
          optionId: "61b2dfd276830d415067925a",
        },
        {
          orderPlacement: "30",
          optionId: "61b2e27c76830d41506792c6",
        },
        {
          orderPlacement: "31",
          optionId: "61b2e28076830d41506792c8",
        },
        {
          orderPlacement: "32",
          optionId: "61b2e2a576830d41506792cc",
        },
        {
          orderPlacement: "35",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "34",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "33",
          optionId: "61b10bd3cbb40a531ccf0686",
        },
        {
          orderPlacement: "36",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "37",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "41",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "40",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "38",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "39",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "42",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "43",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "45",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "47",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "44",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "46",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "48",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "49",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "50",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "51",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "52",
          optionId: "61b10e1ccbb40a531ccf073c",
        },
        {
          orderPlacement: "53",
          optionId: "61b10df4cbb40a531ccf072a",
        },
        {
          orderPlacement: "56",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "54",
          optionId: "61b10dfbcbb40a531ccf072c",
        },
        {
          orderPlacement: "55",
          optionId: "61b10e27cbb40a531ccf0742",
        },
        {
          orderPlacement: "57",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "59",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "58",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "60",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "61",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "62",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "63",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
      ],
    },
    category: "Handgun",
    __v: 0,
  },
  {
    _id: "61b1184acbb40a531ccf0796",
    commandCodes: ["vg1911", "1911vg"],
    displayName: "1911 (VG)",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/1911-vg.png",
    gameInfo: {
      blurb:
        "Versatile semi-automatic pistol accurate at close and medium range.",
      stats: {
        accuracy: 55,
        range: 44,
        mobility: 80,
        damage: 60,
        fireRate: 55,
        control: 69,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "2",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "8",
          optionId: "61b1055bcbb40a531ccf0571",
        },
        {
          orderPlacement: "5",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "6",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "7",
          optionId: "61b1053acbb40a531ccf0565",
        },
        {
          orderPlacement: "9",
          optionId: "61b10562cbb40a531ccf0573",
        },
        {
          orderPlacement: "10",
          optionId: "61b10540cbb40a531ccf0567",
        },
        {
          orderPlacement: "11",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "12",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "13",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "15",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "14",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "16",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "17",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "18",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "19",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "20",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "22",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "23",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "21",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "24",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "25",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "29",
          optionId: "61b2dfda76830d415067925c",
        },
        {
          orderPlacement: "28",
          optionId: "61b2dfc876830d4150679258",
        },
        {
          orderPlacement: "26",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "27",
          optionId: "61b2dfc376830d4150679256",
        },
        {
          orderPlacement: "30",
          optionId: "61b2dfd276830d415067925a",
        },
        {
          orderPlacement: "31",
          optionId: "61b10bcecbb40a531ccf0684",
        },
        {
          orderPlacement: "33",
          optionId: "61b10bbfcbb40a531ccf067e",
        },
        {
          orderPlacement: "32",
          optionId: "61b2e46676830d415067932f",
        },
        {
          orderPlacement: "34",
          optionId: "61b10b87cbb40a531ccf066a",
        },
        {
          orderPlacement: "35",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "36",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "37",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "38",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "40",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "41",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "39",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "42",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "43",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "46",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "45",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "44",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "47",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "48",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "49",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "50",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "54",
          optionId: "61b10e2acbb40a531ccf0744",
        },
        {
          orderPlacement: "53",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "52",
          optionId: "61b10df1cbb40a531ccf0728",
        },
        {
          orderPlacement: "51",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "55",
          optionId: "61b10dfecbb40a531ccf072e",
        },
        {
          orderPlacement: "58",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "56",
          optionId: "61b10dbbcbb40a531ccf070c",
        },
        {
          orderPlacement: "60",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "59",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "57",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "61",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "62",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "63",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
      ],
    },
    category: "Handgun",
    __v: 0,
  },
  {
    _id: "61b1189dcbb40a531ccf079a",
    commandCodes: ["klauser"],
    displayName: "Klauser",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/klauser.png",
    gameInfo: {
      blurb:
        "Steady high-caliber semi-automatic pistol more effective at range than other pistols.",
      stats: {
        accuracy: 56,
        range: 42,
        mobility: 81,
        damage: 57,
        fireRate: 58,
        control: 71,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "1",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "2",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "4",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "3",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "5",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "6",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "7",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "8",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "9",
          optionId: "61b2e86676830d415067943e",
        },
        {
          orderPlacement: "10",
          optionId: "61b2e87976830d4150679440",
        },
        {
          orderPlacement: "11",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "12",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "13",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "15",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "14",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "16",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "17",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "19",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "18",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "20",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "22",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "23",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "24",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "21",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "27",
          optionId: "61b2e8d176830d415067944a",
        },
        {
          orderPlacement: "26",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "29",
          optionId: "60e3f7d38a26dd1acccc62b6",
        },
        {
          orderPlacement: "30",
          optionId: "61b2dfc376830d4150679256",
        },
        {
          orderPlacement: "25",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "28",
          optionId: "61b2e8d676830d415067944c",
        },
        {
          orderPlacement: "31",
          optionId: "61b2dfc876830d4150679258",
        },
        {
          orderPlacement: "32",
          optionId: "61b2dfda76830d415067925c",
        },
        {
          orderPlacement: "36",
          optionId: "61b2e92876830d4150679456",
        },
        {
          orderPlacement: "34",
          optionId: "61b2e46676830d415067932f",
        },
        {
          orderPlacement: "35",
          optionId: "61b2e92176830d4150679454",
        },
        {
          orderPlacement: "33",
          optionId: "61b2dfd276830d415067925a",
        },
        {
          orderPlacement: "37",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "41",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "42",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "38",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "40",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "39",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "43",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "44",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "45",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "47",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "46",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "48",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "49",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "50",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "51",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "52",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "53",
          optionId: "61b10e02cbb40a531ccf0730",
        },
        {
          orderPlacement: "54",
          optionId: "61b10dcecbb40a531ccf0718",
        },
        {
          orderPlacement: "56",
          optionId: "61b10e19cbb40a531ccf073a",
        },
        {
          orderPlacement: "55",
          optionId: "61b10dd4cbb40a531ccf071c",
        },
        {
          orderPlacement: "57",
          optionId: "61b10e15cbb40a531ccf0738",
        },
        {
          orderPlacement: "58",
          optionId: "61b10dc2cbb40a531ccf0710",
        },
        {
          orderPlacement: "59",
          optionId: "61b10de0cbb40a531ccf0722",
        },
        {
          orderPlacement: "60",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "63",
          optionId: "61b10e47cbb40a531ccf0750",
        },
        {
          orderPlacement: "61",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "62",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "65",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "64",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "66",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
      ],
    },
    category: "Handgun",
    __v: 0,
  },
  {
    _id: "61dfd74a4656770013ed3681",
    commandCodes: ["welgun"],
    displayName: "Welgun",
    gameId: "60da97598821ed46dc9c008c",
    image: "/warzone/welgun.png",
    gameInfo: {
      blurb:
        "Heavy full-auto SMG with lethality and range perfect for short to medium range engagements.",
      stats: {
        accuracy: 52,
        range: 52,
        mobility: 70,
        damage: 52,
        fireRate: 77,
        control: 72,
      },
      maxOptions: 10,
      availableOptions: [
        {
          orderPlacement: "5",
          optionId: "61b10468cbb40a531ccf0531",
        },
        {
          orderPlacement: "6",
          optionId: "61b10487cbb40a531ccf053b",
        },
        {
          orderPlacement: "1",
          optionId: "61b285d176830d41506784fb",
        },
        {
          orderPlacement: "2",
          optionId: "61b10419cbb40a531ccf0517",
        },
        {
          orderPlacement: "4",
          optionId: "61b10446cbb40a531ccf0527",
        },
        {
          orderPlacement: "3",
          optionId: "61b10457cbb40a531ccf052d",
        },
        {
          orderPlacement: "7",
          optionId: "61b1042fcbb40a531ccf051f",
        },
        {
          orderPlacement: "8",
          optionId: "61dfd4634656770013ed366b",
        },
        {
          orderPlacement: "9",
          optionId: "61dfd47c4656770013ed366d",
        },
        {
          orderPlacement: "10",
          optionId: "61dfd4904656770013ed366f",
        },
        {
          orderPlacement: "11",
          optionId: "61dfd4a74656770013ed3671",
        },
        {
          orderPlacement: "12",
          optionId: "61b103c5cbb40a531ccf0501",
        },
        {
          orderPlacement: "13",
          optionId: "61b103c0cbb40a531ccf04ff",
        },
        {
          orderPlacement: "14",
          optionId: "61b23c4f76830d4150677d36",
        },
        {
          orderPlacement: "15",
          optionId: "61b103efcbb40a531ccf050d",
        },
        {
          orderPlacement: "17",
          optionId: "61b10371cbb40a531ccf04e5",
        },
        {
          orderPlacement: "16",
          optionId: "61b103d2cbb40a531ccf0505",
        },
        {
          orderPlacement: "18",
          optionId: "61b103cbcbb40a531ccf0503",
        },
        {
          orderPlacement: "19",
          optionId: "61b23c8976830d4150677d3c",
        },
        {
          orderPlacement: "20",
          optionId: "61b10345cbb40a531ccf04df",
        },
        {
          orderPlacement: "21",
          optionId: "61b103adcbb40a531ccf04f9",
        },
        {
          orderPlacement: "24",
          optionId: "61b103a1cbb40a531ccf04f5",
        },
        {
          orderPlacement: "22",
          optionId: "61b103b8cbb40a531ccf04fd",
        },
        {
          orderPlacement: "23",
          optionId: "61b23e0d76830d4150677d54",
        },
        {
          orderPlacement: "25",
          optionId: "61b1039acbb40a531ccf04f3",
        },
        {
          orderPlacement: "26",
          optionId: "61b23ddc76830d4150677d50",
        },
        {
          orderPlacement: "27",
          optionId: "61b10363cbb40a531ccf04e1",
        },
        {
          orderPlacement: "30",
          optionId: "61b2a6e676830d4150678b1f",
        },
        {
          orderPlacement: "28",
          optionId: "61b23d3776830d4150677d48",
        },
        {
          orderPlacement: "31",
          optionId: "61dfd5354656770013ed3673",
        },
        {
          orderPlacement: "29",
          optionId: "61b103dbcbb40a531ccf0507",
        },
        {
          orderPlacement: "32",
          optionId: "61dfd5444656770013ed3675",
        },
        {
          orderPlacement: "33",
          optionId: "61dfd5574656770013ed3677",
        },
        {
          orderPlacement: "34",
          optionId: "61b10853cbb40a531ccf0631",
        },
        {
          orderPlacement: "35",
          optionId: "61b10735cbb40a531ccf05cf",
        },
        {
          orderPlacement: "36",
          optionId: "61b10708cbb40a531ccf05c1",
        },
        {
          orderPlacement: "37",
          optionId: "61b1073fcbb40a531ccf05d3",
        },
        {
          orderPlacement: "38",
          optionId: "61b10725cbb40a531ccf05c9",
        },
        {
          orderPlacement: "39",
          optionId: "61b1073acbb40a531ccf05d1",
        },
        {
          orderPlacement: "40",
          optionId: "61b10711cbb40a531ccf05c3",
        },
        {
          orderPlacement: "41",
          optionId: "61b1071fcbb40a531ccf05c7",
        },
        {
          orderPlacement: "42",
          optionId: "61b1072acbb40a531ccf05cb",
        },
        {
          orderPlacement: "43",
          optionId: "61dfd57d4656770013ed3679",
        },
        {
          orderPlacement: "44",
          optionId: "61dfd58f4656770013ed367b",
        },
        {
          orderPlacement: "45",
          optionId: "61dfd5a24656770013ed367d",
        },
        {
          orderPlacement: "46",
          optionId: "61dfd5b84656770013ed367f",
        },
        {
          orderPlacement: "47",
          optionId: "61b10ccecbb40a531ccf06e2",
        },
        {
          orderPlacement: "48",
          optionId: "61b10cdfcbb40a531ccf06ea",
        },
        {
          orderPlacement: "49",
          optionId: "61b10cf5cbb40a531ccf06f2",
        },
        {
          orderPlacement: "50",
          optionId: "61b10cd2cbb40a531ccf06e4",
        },
        {
          orderPlacement: "51",
          optionId: "61b10cd6cbb40a531ccf06e6",
        },
        {
          orderPlacement: "52",
          optionId: "61b10cdbcbb40a531ccf06e8",
        },
        {
          orderPlacement: "53",
          optionId: "61b10d80cbb40a531ccf06fc",
        },
        {
          orderPlacement: "54",
          optionId: "61b10d8bcbb40a531ccf0702",
        },
        {
          orderPlacement: "55",
          optionId: "61b10d83cbb40a531ccf06fe",
        },
        {
          orderPlacement: "56",
          optionId: "61b10d87cbb40a531ccf0700",
        },
        {
          orderPlacement: "57",
          optionId: "61b10d90cbb40a531ccf0704",
        },
        {
          orderPlacement: "58",
          optionId: "61b2442c76830d4150677da2",
        },
        {
          orderPlacement: "59",
          optionId: "61b10d7ccbb40a531ccf06fa",
        },
        {
          orderPlacement: "60",
          optionId: "61b10d94cbb40a531ccf0706",
        },
        {
          orderPlacement: "61",
          optionId: "61b10d78cbb40a531ccf06f8",
        },
        {
          orderPlacement: "62",
          optionId: "61b10d75cbb40a531ccf06f6",
        },
        {
          orderPlacement: "63",
          optionId: "61b10df4cbb40a531ccf072a",
        },
        {
          orderPlacement: "64",
          optionId: "61b10e27cbb40a531ccf0742",
        },
        {
          orderPlacement: "65",
          optionId: "61b10db7cbb40a531ccf070a",
        },
        {
          orderPlacement: "66",
          optionId: "61b10dd1cbb40a531ccf071a",
        },
        {
          orderPlacement: "67",
          optionId: "61b10deacbb40a531ccf0726",
        },
        {
          orderPlacement: "68",
          optionId: "61b10dd8cbb40a531ccf071e",
        },
        {
          orderPlacement: "69",
          optionId: "61b10ddccbb40a531ccf0720",
        },
        {
          orderPlacement: "70",
          optionId: "61b10e3ecbb40a531ccf074c",
        },
        {
          orderPlacement: "71",
          optionId: "61b10e4ccbb40a531ccf0754",
        },
        {
          orderPlacement: "72",
          optionId: "61b10e4ecbb40a531ccf0756",
        },
        {
          orderPlacement: "73",
          optionId: "61b10e49cbb40a531ccf0752",
        },
        {
          orderPlacement: "74",
          optionId: "61b10dd1cbb40a531ccf071b",
        },
        {
          orderPlacement: "75",
          optionId: "61b10e3bcbb40a531ccf074a",
        },
        {
          orderPlacement: "76",
          optionId: "61b10e42cbb40a531ccf074e",
        },
        {
          orderPlacement: "77",
          optionId: "61b10e47cbb40a531ccf0750",
        },
      ],
    },
    category: "SMG",
    __v: 0,
  },
];

export default raw.map((base) => ({
  ...base,
  _id: new mongoose.Types.ObjectId(base._id),
  gameId: new mongoose.Types.ObjectId(base.gameId),
  gameInfo: {
    ...base.gameInfo,
    availableOptions: base.gameInfo.availableOptions.map((opt) => ({
      ...opt,
      optionId: new mongoose.Types.ObjectId(opt.optionId),
    })),
  },
}));
