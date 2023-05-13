import Link from 'next/link';
import GithubIcon from '../Svgs/github';
import InstaIcon from '../Svgs/instagram';
import TiktokIcon from '../Svgs/tiktok';
import YoutubeIcon from '../Svgs/youtube';

const icons = [
  { icon: GithubIcon, href: 'https://github.com/ridhoadriandy' },
  { icon: InstaIcon, href: 'https://www.instagram.com/mridho_ad/' },
  { icon: TiktokIcon, href: '/' },
  { icon: YoutubeIcon, href: '/' },
];

export default function HeadIcon(props: any) {
  return (
    <div className={props.ClassName}>
      {icons.map((icon, index) => (
        <div key={index} className="hover:bg-slate-100">
          <Link href={icon.href}>
            <icon.icon />
          </Link>
        </div>
      ))}
    </div>
  );
}
