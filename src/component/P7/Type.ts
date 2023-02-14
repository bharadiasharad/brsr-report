export class P7_1 {
  number: number;
  constructor(obj) {
    this.number = obj.number;
  }
}

export class P7_2 {
  serial: number;
  name: any;
  reach: any;
  constructor(obj) {
    this.serial = obj.serial;
    this.name = obj.name;
    this.reach = obj.reach;
  }
}

export class P7_3 {
  authority: any;
  brief: any;
  correctiveAction: any;
  constructor(obj) {
    this.authority = obj.authority;
    this.brief = obj.breif;
    this.correctiveAction = obj.correctiveAction;
  }
}

export class P7_4 {
  serial: any;
  isPublic: any;
  policy: any;
  frequency: any;
  methods: any;
  weblink: any;
  constructor(obj) {
    this.serial = obj.serial;
    this.isPublic = obj.isPublic;
    this.policy = obj.policy;
    this.frequency = obj.frequency;
    this.methods = obj.methods;
    this.weblink = obj.weblink;
  }
}
