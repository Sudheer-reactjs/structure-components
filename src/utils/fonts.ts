import localFont from 'next/font/local';

export const playwriteVN = localFont({
  variable: "--font-playwriteVN",
  src: [
    {
      path: '../../public/fonts/PlaywriteVN-Regular.ttf', 
      weight: '400',
      style: 'normal',
    },
  ],
});

export const roboto = localFont({
  variable: "--font-roboto",
  src: [
    {
      path: '../../public/fonts/Roboto-Regular.ttf', 
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
});
