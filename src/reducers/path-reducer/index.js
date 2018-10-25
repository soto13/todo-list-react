import HomeModule from '../../modules/home/home.module';

const stateInitial = {
  type: 'REDIRECT_HOME',
  component: HomeModule,
  path: '/home' || '/',
  children: [],
}

const pathReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case 'REDIRECT_HOME':
      return {
        type: action.type,
        component: action.component,
        path: action.path,
        children: action.children,
      };
    
    case 'REDIRECT_USER':
      return {
        type: action.type,
        component: action.component,
        path: action.path,
        children: action.children,
      };
  
    default:
      return state;
  }
}

export default pathReducer;