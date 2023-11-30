<<<<<<< HEAD
=======
'use client';
>>>>>>> master
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
<<<<<<< HEAD
=======
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
>>>>>>> master

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
<<<<<<< HEAD
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
=======
    href: '/dashboard/invoice',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customer', icon: UserGroupIcon },
];

export default function NavLinks() {
  const usePathName = usePathname();
>>>>>>> master
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
<<<<<<< HEAD
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
=======
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            {'bg-sky-100 text-blue-600':usePathName === link.href}
            )}
>>>>>>> master
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
