// bitta joyda nomlangan path'lar
export const ROUTES = {
  home: '/',
  menu: '/menu',
  about: '/about',
  booking: '/booking',
  contacts: '/contacts',
  news: '/news',
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];
