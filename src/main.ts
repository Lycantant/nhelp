import './utils/hacks';
import './index.less';
import 'noty/lib/noty.css';
import { GM_registerMenuCommand } from '$';
import type { App, Component } from 'vue';
import { createApp } from 'vue';
import once from 'just-once';
import DownloadPanelVue from './app/DownloadPanel.vue';
import SettingsDialog from './app/SettingsDialog.vue';
import { initPage } from './utils/initPage';
import { IS_SETTINGS_DIALOG_DEV } from './const';

const createAppAndMount = <T extends Component & (abstract new (...args: any) => any)>(
  component: T,
  appInitFunc?: (app: App<Element>) => void,
): InstanceType<T> => {
  const el = document.createElement('div');
  document.body.append(el);
  const app = createApp(component);
  appInitFunc?.(app);
  return app.mount(el) as any;
};

const initSettingsDialogApp = once(() => createAppAndMount(SettingsDialog));

const openSettingsDialog = (): void => {
  const dialog = initSettingsDialogApp();
  dialog.open();
};

createAppAndMount(DownloadPanelVue);
initPage();

GM_registerMenuCommand('Settings', openSettingsDialog);

if (IS_SETTINGS_DIALOG_DEV) {
  document.body.outerHTML = '<body></body>';
  openSettingsDialog();
}
