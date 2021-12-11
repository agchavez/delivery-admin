export interface ClientResponse {
  ok:      boolean;
  clients: Client[];
  count:   number;
}

export interface Client {
  _id:       string;
  firstName: string;
  lastName:  string;
  phone:     number;
  email:     string;
  status:    boolean;
  verified:  boolean;
}
