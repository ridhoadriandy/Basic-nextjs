import Link from 'next/link';

const menus = [
  { text: 'Home', href: '/' },
  { text: 'about', href: '/about' },
  { text: 'contact', href: '/contact' },
];

export default function Header() {
  return (
    <>
      <header className="fixed w-full">
        <div className="py-3 md:py-4 px-4 mx-auto flex flex-row justify-between items-center md:max-w-3xl lg:max-w-7xl">
          <div>
            <Link href="/">
              <div className="flex py-2 md:px-3 space-x-2 md:space-x-4 items-center">
                <img
                  src="/profile.jpeg"
                  className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
                ></img>
                <span className="font-semibold">It's me</span>
              </div>
            </Link>

            <nav>
              <ul>
                <li>
                  <Link href=""></Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>Kanan</div>
        </div>
      </header>
    </>
  );
}
