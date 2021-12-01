import {Contact} from './contact';

export class Company {
  id : number;
  compName : string;
  compDesc : string;
  compCode : string;
  compLogo : object;
  compPicture : object;
  compIsTrading :boolean;
  compUserLicence :number
  contactInfo: string;
  contactList: Contact[];
}
