const SR = {
  name: "DELTA",
  email: "Delta@apcaims.com",
  password: "ufh64",
  phone: "08108850572",
  statecode: "DELTA",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "DELTA",
  state: "DELTA",
  lga: [
    {
      wards: [
        "ABA - UNOR",
        "EJEME",
        "ISHEAGU-EWULU",
        "NSUKWA",
        "OGWASHI - UKU I",
        "OGWASHI - UKU II",
        "OGWASHI - UKU VILLAGE",
        "UBULU - UKU I",
        "UBULU - UKU II",
        "UBULU - UNOR",
        "UBULU OKITI",
      ],
      name: "ANIOCHA - SOUTH",
    },
    {
      wards: [
        "EZI",
        "IDUMUJE - UNOR",
        "ISSELE - AZAGBA",
        "ISSELE UKU I",
        "ISSELE UKU II",
        "OBIOR",
        "OBOMKPA",
        "ONICHA - OLONA",
        "ONICHA UGBO",
        "UKWU - NZU",
      ],
      name: "ANIOCHA NORTH",
    },
    {
      wards: [
        "AKUGBENE I",
        "AKUGBENE II",
        "AKUGBENE III",
        "BOMADI",
        "KOLAFIOGBENE/EKAMETAGBENE",
        "KPAKIAMA",
        "OGBEINAMA/OKOLOBA",
        "OGO - EZE",
        "OGRIAGBENE",
        "SYAMA",
      ],
      name: "BOMADI",
    },
    {
      wards: [
        "BULOU - NDORO",
        "NGBILEBIRI I",
        "NGBILEBIRI II",
        "OBOTEBE",
        "OGBOLUBIRI",
        "OGULAGHA",
        "OJOBO",
        "SEIMBIRI",
        "TAMIGBE",
        "TORUGBENE",
        "TUOMO",
      ],
      name: "BURUTU",
    },
    {
      wards: [
        "ABRAKA I",
        "ABRAKA II",
        "ABRAKA III",
        "AGBON I",
        "AGBON II",
        "AGBON III",
        "AGBON IV",
        "AGBON V",
        "AGBON VI",
        "AGBON VII",
        "AGBON VIII",
      ],
      name: "ETHIOPE EAST",
    },
    {
      wards: [
        "JESSE I",
        "JESSE II",
        "JESSE III",
        "JESSE IV",
        "MOSOGAR I",
        "MOSOGAR II",
        "OGHARA I",
        "OGHARA II",
        "OGHARA III",
        "OGHARA IV",
        "OGHARA V",
      ],
      name: "ETHIOPE WEST",
    },
    {
      wards: [
        "ABAVO I",
        "ABAVO II",
        "ABAVO III",
        "AGBOR TOWN I",
        "AGBOR TOWN II",
        "BOJI - BOJI I",
        "BOJI - BOJI II",
        "BOJI - BOJI III",
        "EKUKU - AGBOR",
        "IHIUIYASE I",
        "IHUIYASE II",
        "IHUOZOMOR (OZANOGOGO ALISIMIE)",
      ],
      name: "IKA - SOUTH",
    },
    {
      wards: [
        "AKUMAZI",
        "IDUMUESAH",
        "IGBODO",
        "MBIRI",
        "OTOLOKPO",
        "OWA V",
        "OWA VI",
        "OWA I",
        "OWA II",
        "OWA III",
        "OWA IV",
        "UMUNEDE",
        "UTE - OGBEJE",
        "UTE - OKPU",
      ],
      name: "IKA NORTH- EAST",
    },
    {
      wards: [
        "ELLU",
        "EMEVOR",
        "ILUELOGBO",
        "IYEDE I",
        "IYEDE II",
        "OKPE - ISOKO",
        "OTIBIO",
        "OVRODE",
        "OWHE/AKIEHWE",
        "OYEDE",
        "OZORO I",
        "OZORO II",
        "OZORO III",
      ],
      name: "ISOKO NORTH",
    },
    {
      wards: [
        "AVIARA",
        "EMEDE",
        "ENHWE/OKPOLO",
        "EROWA/UMEH",
        "IGBIDE",
        "IRRI II",
        "IRRI I",
        "OLEH I",
        "OLEH II",
        "OLOMORO",
        "UZERE",
      ],
      name: "ISOKO SOUTH",
    },
    {
      wards: [
        "ABARRA/INYI/ONUABOH",
        "ABOH/AKARRAI",
        "AFOR/OBIKWELE",
        "ASE",
        "ASHAKA",
        "IBEDENI",
        "IBREDE/IGBUKU / ONOGBOKOR",
        "OKPAI/UTCHI/BENEKU",
        "ONYIA/ADIAI/OTUOKU/UMUOLU",
        "OSSISSA",
      ],
      name: "NDOKWA EAST",
    },
    {
      wards: [
        "ABBI II",
        "ABBI I",
        "EMU",
        "OGUME I",
        "OGUME II",
        "ONICHA - UKWANI",
        "UTAGBA OGBE",
        "UTAGBA UNO I",
        "UTAGBA UNO II",
        "UTAGBA UNO III",
      ],
      name: "NDOKWA WEST",
    },
    {
      wards: [
        "AGHALOKPE",
        "ARAGBA TOWN",
        "MEREJE I",
        "MEREJE II",
        "MEREJE III",
        "OHA I",
        "OHA II",
        "OREROKPE",
        "OVIRI - OKPE",
        "UGHOTON",
      ],
      name: "OKPE",
    },
    {
      wards: [
        "AKWUKWU",
        "EBU",
        "IBUSA I",
        "IBUSA II",
        "IBUSA III",
        "IBUSA IV",
        "IBUSA V",
        "ILLAH",
        "OKPANAM",
        "UKALA",
      ],
      name: "OSHIMILI - NORTH",
    },
    {
      wards: [
        "AGU",
        "ANALA-AMAKOM",
        "CABLE POINT I",
        "CABLE POINT II",
        "OGBELE/AKPAKO",
        "OKWE",
        "UGBOMANTA QUARTERS",
        "UMUAJI",
        "UMUEZEI",
        "UMUONAJE",
        "WEST END",
      ],
      name: "OSHIMILI - SOUTH",
    },
    {
      wards: [
        "ABARI",
        "AGOLOMA",
        "BOLOU - ANGIAMA",
        "ODORUBU/ADOBU/BOLOU APELEBRI",
        "PATANI II",
        "PATANI III",
        "PATANI I",
        "TAWARE/KOLOWARA AVEN",
        "TORU-ANGIAMA",
        "UDUOPHORI",
      ],
      name: "PATANI",
    },
    {
      wards: [
        "AMUOKPE",
        "ELUME",
        "OKOKPORO/UGBORHEN",
        "SAPELE URBAN III",
        "SAPELE URBAN IV",
        "SAPELE URBAN V",
        "SAPELE URBAN VI",
        "SAPELE URBAN VII",
        "SAPELE URBAN VIII",
        "SAPELE URBAN I",
        "SAPELE URBAN II",
      ],
      name: "SAPELE",
    },
    {
      wards: [
        "ALADJA",
        "EKETE",
        "OPETE/ASSAGBA/EDJOPHE",
        "ORHUWERUN",
        "OVWIAN I",
        "OVWIAN II",
        "UDU I",
        "UDU II",
        "UDU III",
        "UDU IV",
      ],
      name: "UDU",
    },
    {
      wards: [
        "AGBARHA",
        "AGBARHO I",
        "AGBARHO II",
        "EVWRENI",
        "OGOR",
        "OROGUN I",
        "OROGUN II",
        "UGHELLI I",
        "UGHELLI II",
        "UGHELLI III",
        "UWHERU",
      ],
      name: "UGHELLI NORTH",
    },
    {
      wards: [
        "EFFURUN - OTOR",
        "EKAKPAMRE",
        "EWU I",
        "EWU II",
        "EWU III",
        "JEREMI I",
        "JEREMI II",
        "JEREMI III",
        "JEREMI IV",
        "OLOMU I",
        "OLOMU II",
      ],
      name: "UGHELLI SOUTH",
    },
    {
      wards: [
        "AKOKU",
        "AMAI",
        "EBEDEI",
        "EZIOKPOR",
        "EZIONUM",
        "OBIARUKU I",
        "OBIARUKU II",
        "UMUEBU",
        "UMUKWATA",
        "UMUTU",
      ],
      name: "UKWUANI",
    },
    {
      wards: [
        "ARMY BARRACKS AREA",
        "EFFURUN I",
        "EFFURUN II",
        "EKPAN I",
        "EKPAN II",
        "ENERHEN I",
        "ENERHEN II",
        "UGBOMRO/UGBOLOKPOSO",
        "UGBORIKOKO",
        "UGBOROKE",
      ],
      name: "UVWIE",
    },
    {
      wards: [
        "EBROHIMI",
        "EGHORO",
        "GBOKODA",
        "ISEKELEWU (EGBEMA II)",
        "KOKO I",
        "KOKO II",
        "OGBINBIRI (EGBEMA III)",
        "OGBUDUGBUDU (EGBEMA IV)",
        "OGHEYE",
        "OPUAMA (EGBEMA I)",
      ],
      name: "WARRI NORTH",
    },
    {
      wards: [
        "BOWEN",
        "EDJEBA",
        "G.R.A.",
        "IGBUDU",
        "OBODO/OMADINO",
        "ODE-ITSEKIRI",
        "OGUNU/EKUREDE-URHOBO",
        "OKERE",
        "OKUMAGBA I",
        "OKUMAGBA II",
        "PESSU",
        "UGBUWANGUE/EKUREDE-ITSEKIRI",
      ],
      name: "WARRI SOUTH",
    },
    {
      wards: [
        "AJA - UDAIBO",
        "AKPIKPA",
        "GBARAMATU",
        "ISABA",
        "MADANGHO",
        "OGBE - IJOH",
        "OGIDIGBEN",
        "OPOROZA",
        "ORERE",
        "UGBORODO",
      ],
      name: "WARRI SOUTH WEST",
    },
  ],
};

export const DELTA = { states, SR };
