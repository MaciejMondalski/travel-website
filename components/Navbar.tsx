'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className=''>
      <div className='flexBetween padding-container max-containter  relative  z-30 py-5'>
        <Link href='/'>
          <Image
            src='/hilink-logo.svg'
            alt='logo'
            width={74}
            height={29}
          />{' '}
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link
              className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className='lg:flexCenter hidden'>
          <Button
            type='button'
            title='Login'
            icon='/user.svg'
            variant='btn_dark_green'
          />
        </div>
        <button onClick={() => setMenuToggle(!menuToggle)}>
          {!menuToggle ? (
            <Image
              src='menu.svg'
              alt='menu'
              width={32}
              height={32}
              className='inline-block cursor-pointer lg:hidden'
            />
          ) : (
            <Image
              src='menu-close.svg'
              alt='menu'
              width={32}
              height={32}
              className='inline-block cursor-pointer lg:hidden'
            />
          )}
        </button>
      </div>

      {/* Burger Menu */}

      {menuToggle && (
        <ul className='bg-white-600 z-100  flex-col flexCenter gap-8 lg:hidden static duration-500 '>
          {NAV_LINKS.map((link) => (
            <Link
              className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
