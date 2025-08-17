// bitta joyda nomlangan path'lar
export const ROUTES = {
  home: '/',
  menu: '/menu',
  about: '/about',
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];
