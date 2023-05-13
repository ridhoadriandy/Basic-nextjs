import BootsrapIcon from '../Svgs/bootsrap';
import FlutterIcon from '../Svgs/flutter';
import React, { useState } from 'react';

const cards = [
  {
    img: <CardImg src="/projectPortfolio.jpg" />,
    icon: [
      <AppsIcon icon={<FlutterIcon />} />,
      <AppsIcon icon={<BootsrapIcon />} />,
    ],
    text: <CardText judul="PTPN V" project="Talent Management" />,
  },
  {
    img: <CardImg src="/projectPortfolio.jpg" />,
    icon: [
      <AppsIcon icon={<FlutterIcon />} />,
      <AppsIcon icon={<BootsrapIcon />} />,
    ],
    text: <CardText judul="PTPN V" project="Talent Management" />,
  },
  {
    img: <CardImg src="/projectPortfolio.jpg" />,
    icon: [
      <AppsIcon icon={<FlutterIcon />} />,
      <AppsIcon icon={<BootsrapIcon />} />,
    ],
    text: <CardText judul="PTPN V" project="Talent Management" />,
  },
  {
    img: <CardImg src="/projectPortfolio.jpg" />,
    icon: [
      <AppsIcon icon={<FlutterIcon />} />,
      <AppsIcon icon={<BootsrapIcon />} />,
    ],
    text: <CardText judul="PTPN V" project="Talent Management" />,
  },
  {
    img: <CardImg src="/projectPortfolio.jpg" />,
    icon: [
      <AppsIcon icon={<FlutterIcon />} />,
      <AppsIcon icon={<BootsrapIcon />} />,
    ],
    text: <CardText judul="PTPN V" project="Talent Management" />,
  },
];

export default function Features() {
  return (
    <div className="md:max-w-4xl lg:max-w-7xl mt-14 px-4 py-4 mx-auto">
      <div className="space-y-3 md:space-y-0 md: grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-9 items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="px-4 py-4 border-dashed border-2 border-gray-200 rounded-2xl"
          >
            <div className="relative">
              {card.img}
              <div className="absolute flex inset-0 justify-end space-x-2 font-bold px-2 py-2 max-h-[54px]">
                {card.icon}
              </div>
            </div>
            <div className="py-2 justify-between">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardImg(props: any) {
  return <img src={props.src} className="object-cover rounded-2xl" />;
}

function AppsIcon(props: any) {
  return (
    <>
      <div className="px-2 py-2 bg-blue-100 rounded-lg">{props.icon}</div>
    </>
  );
}

function CardText(props: any) {
  return (
    <>
      <h3 className="font-semibold">{props.judul}</h3>
      <span className="text-[14px]">{props.project}</span>
    </>
  );
}
