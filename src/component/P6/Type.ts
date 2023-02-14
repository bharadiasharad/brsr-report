export class P6_1 {
  electicictyConsumption: number;
  fuelConsumption: number;
  energyOtherSource: number;
  totalEnergy: number;
  energyIntesity: number;
  energyIntensityOptional: number;
  independentAssesment: any;
  constructor(obj) {
    this.electicictyConsumption = obj.electicictyConsumption;
    this.fuelConsumption = obj.fuelConsumption;
    this.energyOtherSource = obj.energyOtherSource;
    this.totalEnergy = obj.totalEnergy;
    this.energyIntesity = obj.energyIntesity;
    this.energyIntensityOptional = obj.energyIntensityOptional;
    this.independentAssesment = obj.independentAssesment;
  }
}

export class P6_2 {
  isDesignatedConsumer: any;
  targetAchieved: any;
  constructor(obj) {
    this.isDesignatedConsumer = obj.isDesignatedConsumer;
    this.targetAchieved = obj.targetAchieved;
  }
}

export class P6_3 {
  surface: any;
  ground: any;
  thirdParty: any;
  seaDesalinated: any;
  other: any;
  totalWithdrawal: any;
  totalConsumption: any;
  waterIntensity: any;
  waterIntensityOptional: any;
  independentAssesment: any;
  constructor(obj) {
    this.surface = obj.surface;
    this.ground = obj.ground;
    this.thirdParty = obj.thirdParty;
    this.seaDesalinated = obj.seaDesalinated;
    this.totalWithdrawal = obj.totalWithdrawal;
    this.totalConsumption = obj.totalConsumption;
    this.waterIntensity = obj.waterIntensity;
    this.waterIntensityOptional = obj.waterIntensityOptional;
    this.independentAssesment = obj.independentAssesment;
  }
}

export class P6_4 {
  isZeroLiquidDischarge: any;
  details: any;
  constructor(obj) {
    this.isZeroLiquidDischarge = obj.isZeroLiquidDischarge;
    this.details = obj.details;
  }
}

export class P6_5 {
  nox: any;
  sox: any;
  pm: any;
  pop: any;
  voc: any;
  hap: any;
  others: any;
  independentAssesment: any;
  constructor(obj) {
    this.nox = obj.nox;
    this.sox = obj.sox;
    this.pm = obj.pm;
    this.pop = obj.pop;
    this.voc = obj.voc;
    this.hap = obj.hap;
    this.others = obj.others;
    this.independentAssesment = obj.independentAssesment;
  }
}

export class P6_6 {
  scope1: number;
  scope2: number;
  total: number;
  independentAssesment: any;
  constructor(obj) {
    this.scope1 = obj.scope1;
    this.scope2 = obj.scope2;
    this.total = obj.total;
    this.independentAssesment = obj.independentAssesment;
  }
}

export class P6_7 {
  isProjectGhg: any;
  details: any;
  constructor(obj) {
    this.isProjectGhg = obj.isProjectGhg;
    this.details = obj.details;
  }
}

export class P6_8 {
  plastic: any;
  ewaste: any;
  bioMedical: any;
  construction: any;
  battery: any;
  radioActive: any;
  otherHazardous: any;
  otherNonHazardous: any;
  total: any;
  recycled: any;
  reused: any;
  otherRecoveryOption: any;
  totalRecovery: any;
  incineration: any;
  landfilling: any;
  otherDisposal: any;
  totalDisposal: any;
  independentAssesment: any;
  constructor(obj) {
    this.plastic = obj.plastic;
    this.ewaste = obj.ewaste;
    this.bioMedical = obj.bioMedical;
    this.construction = obj.construction;
    this.battery = obj.battery;
    this.radioActive = obj.radioActive;
    this.otherHazardous = obj.otherHazardous;
    this.otherNonHazardous = obj.otherNonHazardous;
    this.total = obj.total;
    this.recycled = obj.recycled;
    this.reused = obj.reused;
    this.otherRecoveryOption = obj.otherRecoveryOption;
    this.totalRecovery = obj.totalRecovery;
    this.incineration = obj.incineration;
    this.landfilling = obj.landfilling;
    this.otherDisposal = obj.otherDisposal;
    this.totalDisposal = obj.totalDisposal;
    this.independentAssesment = obj.independentAssesment;
  }
}

export class P6_9 {
  wasteManagementPractices: any;
  constructor(obj) {
    this.wasteManagementPractices = obj.wasteManagementPractices;
  }
}

export class P6_10 {
  location: any;
  is: any;
  reason: any;
  operation: any;
  constructor(obj) {
    this.location = obj.location;
    this.is = obj.is;
    this.reason = obj.reason;
    this.operation = obj.operation;
  }
}

export class P6_11 {
  name: any;
  notification: any;
  date: any;
  isConducted: any;
  isPublic: any;
  link: any;
  constructor(obj) {
    this.name = obj.name;
    this.notification = obj.notification;
    this.date = obj.date;
    this.isConducted = obj.isConducted;
    this.isPublic = obj.isPublic;
    this.link = obj.link;
  }
}

export class P6_12 {
  law: any;
  details: any;
  fine: any;
  corrective: any;
  constructor(obj) {
    this.law = obj.law;
    this.details = obj.details;
    this.fine = obj.fine;
    this.corrective = obj.corrective;
  }
}

export class P6_13 {
  totalRenewableElectricity: any;
  totalRenewableFuel: any;
  otherRenewableSources: any;
  totalRenewableEnergy: any;
  totalNonRenewableElectricity: any;
  totalNonRenewableFuel: any;
  otherNonRenewableSources: any;
  totalNonRenewableEnergy: any;
  independentAssesment: any;
  constructor(obj) {
    this.totalRenewableElectricity = obj.totalRenewableElectricity;
    this.totalRenewableFuel = obj.totalRenewableFuel;
    this.otherRenewableSources = obj.otherRenewableSources;
    this.totalRenewableEnergy = obj.totalRenewableEnergy;
    this.independentAssesment = obj.independentAssesment;
    this.totalNonRenewableElectricity = obj.totalNonRenewableElectricity;
    this.totalNonRenewableEnergy = obj.totalNonRenewableEnergy;
    this.totalNonRenewableFuel = obj.totalNonRenewableFuel;
    this.otherNonRenewableSources = obj.otherNonRenewableSources;
  }
}
export class P6_14 {
  surface: any;
  surfaceNoTreatment: any;
  surfaceWithTreatment: any;
  groundwater: any;
  groundwaterNoTreatment: any;
  groundwaterWithTreatment: any;
  seawater: any;
  seawaterNoTreatment: any;
  seawaterWithTreatment: any;
  thirdParty: any;
  thirdPartyNoTreatment: any;
  thirdPartyWithTreatment: any;
  others: any;
  othersNoTreatment: any;
  othersWithTreatment: any;
  totalWaterDischarge: any;
  independentAssesment: any;
  constructor(obj) {
    this.surface = obj.surface;
    this.surfaceNoTreatment = obj.surfaceNoTreatment;
    this.surfaceWithTreatment = obj.surfaceWithTreatment;
    this.groundwater = obj.groundwater;
    this.groundwaterNoTreatment = obj.groundwaterNoTreatment;
    this.groundwaterWithTreatment = obj.groundwaterWithTreatment;
    this.seawater = obj.seawater;
    this.seawaterNoTreatment = obj.seawaterNoTreatment;
    this.seawaterWithTreatment = obj.seawaterWithTreatment;
    this.thirdParty = obj.thirdParty;
    this.thirdPartyNoTreatment = obj.thirdPartyNoTreatment;
    this.thirdPartyWithTreatment = obj.thirdPartyWithTreatment;
    this.others = obj.others;
    this.othersNoTreatment = obj.othersNoTreatment;
    this.othersWithTreatment = obj.othersWithTreatment;
    this.totalWaterDischarge = obj.totalWaterDischarge;
    this.independentAssesment = obj.independentAssesment;
  }
}

export class P6_15 {
  area: any;
  natureOfOperation: any;
  waterWithdrawal: any;
  surface: any;
  ground: any;
  thirdParty: any;
  seaDesalinated: any;
  otherSource: any;
  totalWithdrawal: any;
  totalConsumption: any;
  waterIntensity: any;
  waterIntensityOptional: any;
  independentAssesment: any;
  surfaceDischarge: any;
  surfaceNoTreatmentDischarge: any;
  surfaceWithTreatmentDischarge: any;
  levelOfTreatementSurface: any;
  groundwaterDischarge: any;
  groundwaterNoTreatmentDischarge: any;
  groundwaterWithTreatmentDischarge: any;
  levelOfTreatementGroundwater: any;
  seawaterDischarge: any;
  seawaterNoTreatmentDischarge: any;
  seawaterWithTreatmentDischarge: any;
  levelOfTreatementSeawater: any;
  thirdPartyDischarge: any;
  thirdPartyNoTreatmentDischarge: any;
  thirdPartyWithTreatmentDischarge: any;
  levelOfTreatementThirdParty: any;
  othersDischarge: any;
  othersNoTreatmentDischarge: any;
  othersWithTreatmentDischarge: any;
  levelOfTreatementOther: any;
  totalWaterDischarge: any;
  constructor(obj) {
    this.area = obj.area;
    this.natureOfOperation = obj.natureOfOperation;
    this.waterWithdrawal = obj.waterWithdrawal;
    this.surface = obj.surface;
    this.ground = obj.ground;
    this.thirdParty = obj.thirdParty;
    this.seaDesalinated = obj.seaDesalinated;
    this.otherSource = obj.otherSource;
    this.totalWithdrawal = obj.totalWithdrawal;
    this.totalConsumption = obj.totalConsumption;
    this.waterIntensity = obj.waterIntensity;
    this.waterIntensityOptional = obj.waterIntensityOptional;
    this.independentAssesment = obj.independentAssesment;
    this.surfaceDischarge = obj.surfaceDischarge;
    this.surfaceNoTreatmentDischarge = obj.surfaceNoTreatmentDischarge;
    this.surfaceWithTreatmentDischarge = obj.surfaceWithTreatmentDischarge;
    this.levelOfTreatementSurface = obj.levelOfTreatementSurface;
    this.groundwaterDischarge = obj.groundwaterDischarge;
    this.groundwaterNoTreatmentDischarge = obj.groundwaterNoTreatmentDischarge;
    this.groundwaterWithTreatmentDischarge =
      obj.groundwaterWithTreatmentDischarge;
    this.levelOfTreatementGroundwater = obj.levelOfTreatementGroundwater;
    this.seawaterDischarge = obj.seawaterDischarge;
    this.seawaterNoTreatmentDischarge = obj.seawaterNoTreatmentDischarge;
    this.seawaterWithTreatmentDischarge = obj.seawaterWithTreatmentDischarge;
    this.levelOfTreatementSeawater = obj.levelOfTreatementSeawater;
    this.thirdPartyDischarge = obj.thirdPartyDischarge;
    this.thirdPartyNoTreatmentDischarge = obj.thirdPartyNoTreatmentDischarge;
    this.thirdPartyWithTreatmentDischarge =
      obj.thirdPartyWithTreatmentDischarge;
    this.levelOfTreatementThirdParty = obj.levelOfTreatementThirdParty;
    this.othersDischarge = obj.othersDischarge;
    this.othersNoTreatmentDischarge = obj.othersNoTreatmentDischarge;
    this.othersWithTreatmentDischarge = obj.othersWithTreatmentDischarge;
    this.levelOfTreatementOther = obj.levelOfTreatementOther;
    this.totalWaterDischarge = obj.totalWaterDischarge;
    this.independentAssesment = obj.independentAssesment;
  }
}

export class P6_16 {
  scope3: any;
  turnover: any;
  relevantMetric: any;
  independentAssesment: any;
  constructor(obj) {
    this.scope3 = obj.scope3;
    this.turnover = obj.turnover;
    this.relevantMetric = obj.relevantMetric;
    this.independentAssesment = obj.independentAssesment;
  }
}

export class P6_17 {
  biodiversity: any;
  constructor(obj) {
    this.biodiversity = obj.biodiversity;
  }
}
export class P6_18 {
  initiative: any;
  details: any;
  outcome: any;
  constructor(obj) {
    this.initiative = obj.initiative;
    this.details = obj.details;
    this.outcome = obj.outcome;
  }
}

export class P6_19 {
  is: any;
  link: any;
  constructor(obj) {
    this.is.policy = obj.is.policy;
    this.link = obj.link;
  }
}

export class P6_20 {
  adverseImpact: any;
  constructor(obj) {
    this.adverseImpact = obj.adverseImpact;
  }
}

export class P6_21 {
  valueChainPartner: any;
  constructor(obj) {
    this.valueChainPartner = obj.valueChainPartner;
  }
}
