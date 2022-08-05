import { App, Plugin } from 'vue';
import UserInfo from './src/index.vue';

export const UserInfoPlugin: Plugin = {
  install(app: App) {
    app.component('my-user-info', UserInfo);
  },
};

export {
  UserInfo,
};
