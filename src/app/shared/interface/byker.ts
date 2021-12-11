export interface BykerResponse {
  ok:     boolean;
  count:  number;
  bikers: Biker[];
}

export interface Biker {
  info?:      Info;
  firstName: string;
  email:     string;
  identity:  number;
  phone:     number;
  lastName:  string;
  status:    boolean;
  aproved:   boolean;
  verified:  boolean;
  imgUrl?:   string;
}

export interface Info {
  imgCard:    string;
  imgLicense: string;
}
