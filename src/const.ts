export const IS_DEV = import.meta.env.DEV;

export const IS_SETTINGS_DIALOG_DEV =
  IS_DEV && location.href === 'https://nhelper.lolicon.app/dev.html';

/** 建议的 worker 最大线程数 */
export const WORKER_THREAD_NUM = Math.max(navigator.hardwareConcurrency - 1, 1);

const { pathname, host } = location;

/** 在本子详情页 */
export const IS_PAGE_MANGA_DETAIL = /^\/g\/[0-9]+\/?(\?.*)?$/.test(pathname);

/** 在本子在线浏览页 */
export const IS_PAGE_ONLINE_VIEW = /^\/g\/[0-9]+(\/list)?\/[0-9]+\/?(\?.*)?$/.test(pathname);

/** 在本子列表页 */
export const IS_PAGE_MANGA_LIST =
  !IS_PAGE_MANGA_DETAIL &&
  !IS_PAGE_ONLINE_VIEW &&
  document.getElementsByClassName('gallery').length > 0;

/** nhentai.net */
export const IS_NHENTAI = host === 'nhentai.net';

/** nhentai.to | nhentai.website */
export const IS_NHENTAI_TO = host === 'nhentai.to' || host === 'nhentai.website';
