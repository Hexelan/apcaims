import { ABIA } from "./abia";
import { ADAMAWA } from "./adamawa";
import { AKWAIBOM } from "./akwaibom";
import { ANAMBRA } from "./anambra";
import { BAUCHI } from "./bauchi";
import { BAYELSA } from "./bayelsa";
import { BENUE } from "./benue";
import { BORNO } from "./borno";
import { CROSSRIVERS } from "./crossrivers";
import { DELTA } from "./delta";
import { EBONYI } from "./ebonyi";
import { EDO } from "./edo";
import { EKITI } from "./ekiti";
import { ENUGU } from "./enugu";
import { FCT } from "./fct";
import { GOMBE } from "./gombe";
import { IMO } from "./imo";
import { JIGAWA } from "./jigawa";
import { KADUNA } from "./kaduna";
import { KANO } from "./kano";
import { KATSINA } from "./katsina";
import { KEBBI } from "./kebbi";
import { KOGI } from "./kogi";
import { KWARA } from "./kwara";
import { LAGOS } from "./lagos";

const states = [
  ABIA.states,
  ADAMAWA.states,
  AKWAIBOM.states,
  ANAMBRA.states,
  BAUCHI.states,
  BAYELSA.states,
  BENUE.states,
  BORNO.states,
  CROSSRIVERS.states,
  DELTA.states,
  EBONYI.states,
  EDO.states,
  EKITI.states,
  ENUGU.states,
  FCT.states,
  GOMBE.states,
  IMO.states,
  JIGAWA.states,
  KADUNA.states,
  KANO.states,
  KATSINA.states,
  KEBBI.states,
  KOGI.states,
  KWARA.states,
  LAGOS.states,
];
const sr = [
  ABIA.SR,
  ADAMAWA.SR,
  AKWAIBOM.SR,
  ANAMBRA.SR,
  BAUCHI.SR,
  BAYELSA.SR,
  BENUE.SR,
  BORNO.SR,
  CROSSRIVERS.SR,
  DELTA.SR,
  EBONYI.SR,
  EDO.SR,
  EKITI.SR,
  ENUGU.SR,
  FCT.SR,
  GOMBE.SR,
  IMO.SR,
  JIGAWA.SR,
  KADUNA.SR,
];
const fedConst = [ABIA.fedral_constituency];
const senDist = [ABIA.senatorial_district];

export const data = { states, sr, fedConst, senDist };
