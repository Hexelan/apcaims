const SR = {
  name: "RIVERS",
  email: "Rivers@apcaims.com",
  password: "lsp02",
  phone: "08108850572",
  statecode: "RIVERS",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "RIVERS",
  state: "RIVERS",
  lga: [
    {
      wards: [
        "ABUA IV",
        "ABUA I",
        "ABUA II",
        "ABUA III",
        "AGADA",
        "AKANI",
        "ANYU",
        "EMAGO-KUGBO",
        "EMELEGO",
        "EMUGHAN I",
        "EMUGHAN II",
        "OKPEDEN",
        "OTAPHA",
      ],
      name: "ABUA-ODUAL",
    },
    {
      wards: [
        "AHOADA IV",
        "AHOADA I",
        "AHOADA II",
        "AHOADA III",
        "AKOH I",
        "AKOH II",
        "AKOH III",
        "UPPATA III",
        "UPPATA IV",
        "UPPATA V",
        "UPPATA VI",
        "UPPATA I",
        "UPPATA II",
      ],
      name: "AHOADA EAST",
    },
    {
      wards: [
        "EDIRO I",
        "EDIRO II",
        "IGBUDUYA I",
        "IGBUDUYA II",
        "IGBUDUYA III",
        "IGBUDUYA IV",
        "JOINKRAMA",
        "OKARKI",
        "UBIE I",
        "UBIE II",
        "UBIE III",
        "UBIE IV",
      ],
      name: "AHOADA WEST",
    },
    {
      wards: [
        "ALISE GROUP",
        "BRIGGS I",
        "BRIGGS II",
        "BRIGGS III",
        "GEORGEWILL II",
        "GEORGEWILL III",
        "GEORGWILL III",
        "JACK I",
        "JACK II",
        "JACK III",
        "KULA I",
        "KULA II",
        "MANUEL I",
        "MANUEL II",
        "MANUEL III",
        "NORTH/SOUTH GROUP",
        "OBONOMA",
      ],
      name: "AKUKU TORU",
    },
    {
      wards: [
        "AGWUT-OBOLO",
        "ASARAMA",
        "ATABA I",
        "ATABA II",
        "EKEDE",
        "IKURU TOWN",
        "NGO TOWN",
        "SAMANGA",
        "UNYEADA I",
        "UNYEADA II",
        "UNYEN GALA",
      ],
      name: "ANDONI",
    },
    {
      wards: [
        "BUGUMA EAST I",
        "BUGUMA EAST II",
        "BUGUMA NORTH EAST",
        "BUGUMA SOUTH WEST",
        "BUGUMA EAST WEST",
        "BUGUMA NORTH WEST II",
        "BUGUMA NORTH WEST I",
        "BUGUMA SOUTH",
        "BUGUMA SOUTH EAST",
        "BUGUMA WEST",
        "ISIA GROUP I",
        "ISIA GROUP II",
        "WEST CENTAL GROUP",
      ],
      name: "ASARI-TORU",
    },
    {
      wards: [
        "WARD I ORO-IGWE",
        "WARD II COURT/ ADA ALLISON",
        "WARD III DAN JUMBO/ BERESIRI",
        "WARD III OROSIRIRI",
        "WARD IV NEW LAYOUT",
        "WARD IX NANABIE",
        "WARD V FINIMA",
        "WARD VI ABALAMABIE",
        "WARD VII DEMA ABBEY",
        "WARD X OLOMA AYAMINIMA",
        "WARD XI PETERSIDE",
        "WARD XII KALAIBIAMA",
      ],
      name: "BONNY",
    },
    {
      wards: [
        "BAKANA VI",
        "BAKANA I",
        "BAKANA II",
        "BAKANA III",
        "BAKANA IV",
        "BAKANA V",
        "BILLE",
        "BUKUMA",
        "DEGEMA I",
        "DEGEMA II",
        "DEGEMA III",
        "KE/OLD BAKANA",
        "OBUAMA",
        "TOMBLE I",
        "TOMBLE II",
        "TOMBLE III",
        "TOMBLE IV",
      ],
      name: "DEGEMA",
    },
    {
      wards: [
        "AGBONCHIA",
        "AKPAJO",
        "ALESA",
        "ALETO",
        "ALODE",
        "EBUBU",
        "EKPORO",
        "ETEO",
        "OGALE",
        "ONNE",
      ],
      name: "ELEME",
    },
    {
      wards: [
        "EGBEDA",
        "ELELE ALIMINI",
        "EMOHUA II",
        "EMOHUA I",
        "IBAA",
        "OBELLE",
        "ODEGU I",
        "ODEGU II",
        "OGBAKIRI I",
        "OGBAKIRI II",
        "OMUDIOGA/ AKPADU",
        "RUMUEKPE",
        "RUNDELE",
        "UBIMINI",
      ],
      name: "EMOHUA",
    },
    {
      wards: [
        "AFARA",
        "AKPOKU/UMUOYE",
        "AKWA/ODOGWA",
        "EGBU",
        "EGWI/OPIRO",
        "IGBO I",
        "IGBO II",
        "IGBO III",
        "IGBODO",
        "MBA",
        "NDASHI",
        "NIHI",
        "OBIBI/AKWUKABI",
        "OBITE",
        "ODUFOR",
        "OKEHI",
        "OWU",
        "OZUZU",
        "ULAKWO",
      ],
      name: "ETCHE",
    },
    {
      wards: [
        "B-DERE",
        "BERA",
        "BIARA I",
        "BIARA II",
        "BODO I",
        "BODO II",
        "BODO III",
        "BOMU I",
        "BOMU II",
        "DERKEN/DEEYOR/NWERIBIARA",
        "K-DERE I",
        "K-DERE II",
        "KPOR/LEWE/GBE",
        "MOGHO",
        "NWEOL/GIOKO/BARAKO",
        "YEGHE I",
        "YEGHE II",
      ],
      name: "GOKANA",
    },
    {
      wards: [
        "ALUU",
        "APANI",
        "ELELE I",
        "ELELE II",
        "IGWURUTA",
        "ISIOKPO I",
        "ISIOKPO II",
        "OMADEME/IPO",
        "OMAGWA",
        "OMERELU",
        "OZUAHA",
        "UBIMA",
        "UMUANWA",
      ],
      name: "IKWERRE",
    },
    {
      wards: [
        "BAEN/KPEAN/DUBURO",
        "BANE",
        "BARGHA",
        "BEERI",
        "BORI",
        "BOUE",
        "GWARA/KAA/EEKEN",
        "KAANI",
        "KONO/KWAWA",
        "LLUEKU/NYOKURU",
        "LORRE/LUEBE/KPAA",
        "OKWALI",
        "OPUOKO/KALAOKO",
        "SII/BETEM/KBAABBE",
        "SOGHO",
        "TAABAA",
        "UEGWERE",
        "WIIYAA KARA",
        "ZAAKPORI",
      ],
      name: "KHANA",
    },
    {
      wards: [
        "CHOBA",
        "ELELENWO (3B)",
        "ORO-IGWE",
        "OZUOBA/OGBOGORO",
        "RUKPOKU",
        "RUMUEME (7A)",
        "RUMUEME (7B)",
        "RUMUEME (7C)",
        "RUMUIGBO (8A)",
        "RUMUKWUTA (8B)",
        "RUMUODARA",
        "RUMUODOMAYA (3A)",
        "RUMUOKORO",
        "RUMUOKWU (2B)",
        "RUMUOLUMENI",
        "RUMUOMASI",
        "WORJI",
      ],
      name: "OBIO/AKPOR",
    },
    {
      wards: [
        "EGBEMA I",
        "EGBEMA II",
        "EGI I",
        "EGI II",
        "EGI III",
        "EGI IV",
        "IGBURU",
        "NDONI I",
        "NDONI II",
        "NDONI III",
        "OMOKU TOWN I",
        "OMOKU TOWN II",
        "OMOKU TOWN IV (USOMINI)",
        "OMOKU TOWN V",
        "OMUKU TOWN (OBIETI)",
        "USOMINI I (NORTH)",
        "USOMINI II (SOUTH)",
      ],
      name: "OGBA/EGBEMA/NDONI",
    },
    {
      wards: [
        "BOLO IV",
        "BOLO I",
        "BOLO II",
        "BOLO III",
        "ELE",
        "OGU I",
        "OGU II",
        "OGU III",
        "OGU IV",
        "OGU V",
        "OGU VI",
        "WAKAMA",
      ],
      name: "OGU/BOLO",
    },
    {
      wards: [
        "KALIO",
        "OGAN",
        "OGOLOMA I",
        "OGOLOMA II",
        "OGOLOMA III",
        "OKRIKA I",
        "OKRIKA II",
        "OKRIKA III",
        "OKRIKA IV",
        "OKRIKA V",
        "OKRIKA VI",
        "OKRIKA VII",
      ],
      name: "OKRIKA",
    },
    {
      wards: [
        "ARIRANIIRI/OWU-AHIA COMMUNITY",
        "EBERI-DIKEOMUUO COMMUNITY",
        "OBIBI/AJULOKE COMMUNITY",
        "OBIOHIA COMMUNITY",
        "OFEH COMMUNITY",
        "OHIMOGHO COMMUNITY",
        "OYORO",
        "UMUAJULOKE COMMUNITY",
        "UMUOGBA I COMMUNITY",
        "UMUOGBA II COMMUNITY",
      ],
      name: "OMUMA",
    },
    {
      wards: [
        "DAPPAYE AMA-KIRI I",
        "DAPPAYE AMA-KIRI II",
        "DIEPIRI",
        "JAJA",
        "KALAIBIAMA I",
        "KALAIBIAMA II",
        "NKORO I",
        "NKORO II",
        "NKORO III",
        "QUEENS TOWN KALAMA",
        "UKONU",
      ],
      name: "OPOBO/NEKORO",
    },
    {
      wards: [
        "ASA",
        "AZUOGU",
        "KOMKOM",
        "OBEAKPU",
        "OBETE",
        "OGBERU",
        "OKOLOMA",
        "OYIGBA WEST",
        "OYIGBO CENTRAL",
        "UMUAGBAI",
      ],
      name: "OYIGBO",
    },
    {
      wards: [
        "ABULOMA/AMADI-AMA",
        "DIOBU",
        "ELEKAHIA",
        "MGBUNDUKWU (ONE)",
        "MGBUNDUKWU (TWO)",
        "NKPOLU OROWORUKWO",
        "NKPOLU OROWORUKWO TWO",
        "OCHIRI/RUMUKALAGBOR",
        "OGBUNABALI",
        "OROABALI",
        "OROGBUM",
        "OROMINEKE/EZIMGBU",
        "OROWORUKWO",
        "PORT HARCOURT TOWNSHIP",
        "PORT HARCOURT TOWNSHIP VI",
        "PORT HARCOURT VII",
        "RUMUOBIEKWE WARD",
        "RUMUWOJI (ONE)",
        "RUMUWOJI (THREE)",
        "RUMUWOJI (TWO)",
      ],
      name: "PORT HARCOURT",
    },
    {
      wards: [
        "WARD I (BOTEM/GBENEO)",
        "WARD II (KPITE)",
        "WARD III (KOROKORO)",
        "WARD IV KOROMA/HORO",
        "WARD IX NANABIE",
        "WARD V (KIRA/BOROBARA)",
        "WARD VI (GIO/KPORGHOR/GBAM)",
        "WARD VII (NONWA)",
        "WARD VIII (BARRYIRA/BARA-ALE/SIME)",
        "WARD X (BAN-OGOI)",
      ],
      name: "TAI",
    },
  ],
};

export const RIVERS = { states, SR };
