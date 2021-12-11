import initDrawer, { initDrawerLogoutBtn } from './drawer.js';
import renderBreadCrumb from './breadcrumb.js';

(async () => {
  initDrawer();
  if (document.getElementById('breadcrumb')) renderBreadCrumb();
  if (document.getElementById('drawer-logout-btn')) initDrawerLogoutBtn();
})();
