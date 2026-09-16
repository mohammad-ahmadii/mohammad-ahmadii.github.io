import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon';
import MailLineIcon from 'remixicon-react/MailLineIcon';
import MapPin2LineIcon from 'remixicon-react/MapPin2LineIcon';
import PhoneLineIcon from 'remixicon-react/PhoneLineIcon';

import type { ContactChannel } from '../types';
import { profile } from '@/constants/resumeData';

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailLineIcon,
    external: false,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: PhoneLineIcon,
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: profile.linkedin,
    href: profile.linkedinUrl,
    icon: LinkedinLineIcon,
    external: true,
  },
  {
    id: 'location',
    label: 'Location',
    value: profile.location,
    href: null,
    icon: MapPin2LineIcon,
    external: false,
  },
];
