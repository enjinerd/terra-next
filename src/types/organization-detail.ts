import * as Yup from 'yup';

import { OrgAddressDetailType } from './address-detail';
import { OrgEmailDetailType } from './email-detail';
import {
  ContactDetailType,
  ParentOrganizationsType,
  SelectDataType,
} from './general';
import {
  OrganziationMembershipDetailRawType,
  OrganziationMembershipDetailType,
} from './membership-details';
import { OrgPhoneDetailType } from './phone-detail';

interface OrganizationDetailType {
  organization_id: string;
  organization_name: string;
  parent_organization_id: string;
  parent_organization_name: string;
  description: string;
  accepts_members_flag: string;
  establishment_date: string;
  termination_date: string;
  notes: string;
}

interface OrganizationDetailFormType extends ContactDetailType {
  organization_name: string;
  parent_organization_name: string;
  description?: string;
  accepts_members_flag: boolean;
  establishment_date: Date;
  termination_date?: Date;
  notes?: string;
  membership: Array<OrganziationMembershipDetailType>;
}

interface OrganizationDataType {
  organization: OrganizationDetailType;
  address: Array<OrgAddressDetailType>;
  email: Array<OrgEmailDetailType>;
  phone: Array<OrgPhoneDetailType>;
  membership: Array<OrganziationMembershipDetailRawType>;
  parent_organizations: Array<ParentOrganizationsType>;
  address_type: Array<SelectDataType>;
  email_type: Array<SelectDataType>;
  phone_type: Array<SelectDataType>;
}

const organizationValidation = {
  organization_name: Yup.string().required(
    'Alapszervezet név kitöltése kötelező'
  ),
  parent_organization_name: Yup.string(),
  description: Yup.string().nullable(),
  accepts_members_flag: Yup.boolean()
    .default(false)
    .required('Kötelezően kitöltendő'),
  establishment_date: Yup.date().required('Alapítás dátum kitöltése kötelező'),
  termination_date: Yup.date().nullable(),
  notes: Yup.string().nullable(),
};

export type {
  OrganizationDataType,
  OrganizationDetailFormType,
  OrganizationDetailType,
};
export { organizationValidation };
