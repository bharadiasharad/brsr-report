export class P4_1 {
  mechanism: any;
  constructor(obj) {
    this.mechanism = obj.mechanism;
  }
}

export class P4_2 {
  stakeholderGroup: any;
  isVulnerableMarginalized: any;
  channelOfCommunication: any;
  frequency: any;
  purpose: any;
  constructor(obj) {
    this.stakeholderGroup = obj.stakeholderGroup;
    this.isVulnerableMarginalized = obj.isVulnerableMarginalized;
    this.channelOfCommunication = obj.channelOfCommunication;
    this.frequency = obj.frequency;
    this.purpose = obj.purpose;
  }
}

export class P4_3 {
  consultation: any;
  constructor(obj) {
    this.consultation = obj.consultation;
  }
}

export class P4_4 {
  isSupportIdentification: any;
  details: Text;
  constructor(obj) {
    this.isSupportIdentification = obj.isSupportIdentification;
    this.details = obj.details;
  }
}

export class P4_5 {
  instancesOfEngagement: Text;
  constructor(obj) {
    this.instancesOfEngagement = obj.instancesOfEngagement;
  }
}
