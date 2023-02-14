export class P8_1 {
  project: any;
  isIndependent: any;
  notification: any;
  isResult: any;
  date: any;
  link: any;
  constructor(obj) {
    this.project = obj.project;
    this.isIndependent = obj.isIndependent;
    this.notification = obj.notification;
    this.date = obj.date;
    this.isResult = obj.isResult;
    this.link = obj.link;
  }
}

export class P8_2 {
  serial: any;
  name: any;
  state: any;
  district: any;
  affected: any;
  covered: any;
  amount: any;
  constructor(obj) {
    this.serial = obj.serial;
    this.name = obj.name;
    this.state = obj.state;
    this.district = obj.district;
    this.affected = obj.affected;
    this.covered = obj.covered;
    this.amount = obj.amount;
  }
}

export class P8_3 {
  mechanism: any;
  constructor(obj) {
    this.mechanism = obj.mechanism;
  }
}

export class P8_4 {
  msme: any;
  neigbouring: any;
  constructor(obj) {
    this.msme = obj.msme;
    this.neigbouring = obj.neigbouring;
  }
}

export class P8_5 {
  negative: any;
  corrective: any;
  constructor(obj) {
    this.negative = obj.negative;
    this.corrective = obj.corrective;
  }
}

export class P8_6 {
  serial: number;
  state: Text;
  distrit: Text;
  amount: number;
  constructor(obj) {
    this.serial = obj.serial;
    this.state = obj.state;
    this.distrit = obj.district;
    this.amount = obj.amount;
  }
}

export class P8_7 {
  isPolicy: any;
  group: any;
  percentageSourcing: any;
  constructor(obj) {
    this.isPolicy = obj.isPolicy;
    this.group = obj.group;
    this.percentageSourcing = obj.percentageSourcing;
  }
}

export class P8_8 {
  ipr: any;
  isOwned: any;
  isShared: any;
  basis: any;
  constructor(obj) {
    this.ipr = obj.ipr;
    this.isOwned = obj.isOwned;
    this.isShared = obj.isshared;
    this.basis = obj.basis;
  }
}

export class P8_9 {
  authority: any;
  brief: any;
  corrective: any;
  constructor(obj) {
    this.authority = obj.authority;
    this.brief = obj.breif;
    this.corrective = obj.corrective;
  }
}

export class P8_10 {
  serial: number;
  csr: any;
  person: number;
  constructor(obj) {
    this.serial = obj.serial;
    this.csr = obj.csr;
    this.person = obj.person;
  }
}
