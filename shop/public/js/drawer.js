export const initDrawerLogoutBtn = () => {
  setTimeout(() => {
    const drawerLogoutBtn = document.getElementById('drawer-logout-btn');
    drawerLogoutBtn.addEventListener('click', () => {
      const form = document.getElementById('drawer-logout');
      form.submit();
    });
  }, 1000);
};

const initDrawer = () => {
  const drawer = document.querySelector('.nav-drawer');
  const openButton = document.querySelector('.navbar-burger');

  openButton.addEventListener('click', () => drawer.show());
};

export default initDrawer;
