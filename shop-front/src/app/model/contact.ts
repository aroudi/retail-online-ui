import {ConfigCategory} from './config-category';

export class Contact {
  id : bigint;
  title : string;
  firstName : string;
  surName : string;
  middleName : string;
  country : string;
  state : string;
  suburb : string;
  postCode : string;
  address1 : string;
  address2 : string;
  email : string;
  email2 : string;
  mobile : string;
  phone : string;
  fax : string;
  webSite : string;
  contactType :ConfigCategory
}
