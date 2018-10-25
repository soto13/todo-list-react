import HomeModule from '../modules/home/home.module';
import UserModule from '../modules/user/user.module';

export const redirectHome = () => {
  return {
    type: 'REDIRECT_HOME',
    component: HomeModule,
    path: '/home' || '/',
    children: [],
  }
}

export const redirectUser = () => {
  return {
    type: 'REDIRECT_USER',
    component: UserModule,
    path: '/user',
    children: [],
  }
}

