import { Workbox } from 'workbox-window';

const registerServiceWorker = eventName => {
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    const wb = new Workbox(`/sw.js`);

    wb.addEventListener('installed', event => {
      if (event.isUpdate) {
        window.dispatchEvent(new CustomEvent(eventName));
      }
    });

    wb.register();
  }
};

export default registerServiceWorker;
