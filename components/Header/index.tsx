import { Bars3Icon } from '@heroicons/react/24/solid';

import Link from 'next/link';
import GithubIcon from '../svgs/github';
import InstaIcon from '../svgs/instagram';
import TiktokIcon from '../svgs/tiktok';
import YoutubeIcon from '../svgs/youtube';

const menus = [
  { text: 'Home', href: '/' },
  { text: 'about', href: '/about' },
  { text: 'contact', href: '/contact' },
];

const icons = [
  { icon: GithubIcon, href: 'https://github.com/ridhoadriandy' },
  { icon: InstaIcon, href: 'https://www.instagram.com/mridho_ad/' },
  { icon: TiktokIcon, href: '/' },
  { icon: YoutubeIcon, href: '/' },
];

export default function Header() {
  return (
    <>
      <header className="fixed w-full">
        <div className="py-3 md:py-4 px-4 mx-auto flex flex-row justify-between items-center md:max-w-3xl lg:max-w-7xl">
          <div className="flex place-items-center space-x-6">
            <Link href="/">
              <div className="flex py-2 md:px-3 space-x-2 md:space-x-4 items-center ">
                <img
                  src="/profile.jpeg"
                  className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
                ></img>
                <span className="font-semibold">It's me</span>
              </div>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex flex-row space-x-2 ">
                {menus.map((menu, index) => (
                  <li key={index} className="hover:bg-slate-100">
                    <Link href={menu.href}>
                      <div className="px-3 py-2">{menu.text}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-6">
            <div className="hidden lg:block">
              <div className="flex space-x-6">
                {icons.map((icon, index) => (
                  <div key={index} className="hover:bg-slate-100">
                    <Link href={icon.href}>
                      <icon.icon />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <button className="py-2 px-6 text-sm border border-red-400 rounded-full hover:bg-slate-50">
              Donwload CV
            </button>

            <button className="md:hidden py-2">
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
