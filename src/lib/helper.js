import {isMobile, } from 'react-device-detect';




export const addStickyHeader = (element) => {
  const header = document.getElementById('myHeader');
  const scrollTop = element.scrollTop;
  scrollTop ? header.classList.add('sticky') : header.classList.remove('sticky');
};


/* getting the og:url */




export function getDeviceName() {
  var device = 'Desktop';

  if(isMobile){
    device = 'Mobile';
  }
  // if (navigator.userAgent.match(/Tablet|iPad/i)) {
  //   device = 'Tablet';
  // } else if (
  //   /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  // ) {
  //   device = 'Mobile';
  // }
  // console.log(navigator);
  return device;
}

let deviceName = getDeviceName();

export const panAxies = {
  rotation: { x: 0.5, y: -0.9, z: -0.1 },

  scaling:
    deviceName === 'Desktop'
          ? { x: 15, y: 15, z: 15 }
          : deviceName === 'Tablet'

      ? orientation === 'potrait'
          ? { x: 9, y: 9, z: 9 }
          : { x: 15, y: 15, z: 15 }

      : orientation === 'potrait'
          ? { x: 9.5, y: 9.5, z: 9.5 }
          : { x: 9, y: 9, z: 9 },

  position:
    deviceName === 'Desktop'
      ? { x: 4.8, y: 1.9, z: 0 }
      : deviceName === 'Mobile'
      ? orientation === 'potrait'
        ? { x: 0, y: 0, z: 0 }
        : { x: 4.5, y: 3, z: 0 }
      : orientation === 'potrait'
      ? { x: 4.6, y: 2.8, z: 0 }
      : { x: 7, y: 1.5, z: 0 },
};

export const sphereAxis = {
  left: {
    rotation: { x: 0.2, y: 0.5, z: -0.1 },

    scaling:
      deviceName === 'Desktop'
        ? { x: 7, y: 7, z: 7 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 0, y: 0, z: 0 }
          : { x: 0, y: 0, z: 0 }
        : orientation === 'potrait'
        ? { x: 0, y: 0, z: 0 }
        : { x: 0, y: 0, z: 0 },

    position:
      deviceName === 'Desktop'
        ? { x: 8.9, y: 2, z: 1 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 7.8, y: 2, z: 1 }
          : { x: 8.9, y: 2, z: 1 }
        : window.innerHeight > 667
        ? { x: 7.4, y: 2.5, z: 1 }
        : { x: 7.7, y: 2.5, z: 1 },
  },
  right: {
    rotation: { x: -0.36, y: -3.7, z: 0 },

    scaling:
      deviceName === 'Desktop'
        ? { x: 10, y: 10, z: 10 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 0, y: 0, z: 0 }
          : { x: 0, y: 0, z: 0 }
        : orientation === 'potrait'
        ? { x: 0, y: 0, z: 0 }
        : { x: 0, y: 0, z: 0 },

    position:
      deviceName === 'Desktop'
        ? { x: 1.7, y: 3.4, z: 1 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 3.3, y: 3.8, z: 1 }
          : { x: 1.7, y: 3.4, z: 1 }
        : window.innerHeight > 667
        ? { x: 3.9, y: 4.7, z: 1 }
        : { x: 3.5, y: 4.6, z: 1 },
  },
  center: {
    rotation: { x: 0, y: -2.07, z: 0 },

    scaling:
      deviceName === 'Desktop'
        ? { x: 15, y: 15, z: 15 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 15, y: 15, z: 15 }
          : { x: 15, y: 15, z: 15 }
        : orientation === 'potrait'
        ? { x: 15, y: 15, z: 15 }
        : { x: 15, y: 15, z: 15 },
    idleScaling:
      deviceName === 'Desktop'
        ? { x: 60, y: 60, z: 60 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 45, y: 45, z: 45 }
          : { x: 45, y: 45, z: 45 }
        : orientation === 'potrait'
        ? { x: 50, y: 50, z: 50 }
        : { x: 60, y: 60, z: 60 },

    position:
      deviceName === 'Desktop'
        ? { x: 4.9, y: 2.5, z: 0 }
        : deviceName === 'Tablet'
        ? orientation === 'potrait'
          ? { x: 5, y: 2.5, z: 0 }
          : { x: 4.8, y: 2.5, z: 0 }
        : window.innerHeight > 667
        ? { x: 5, y: 3.5, z: 0 }
        : { x: 5, y: 3.5, z: 0 },
  },
};

export const panToSpherePosition =
  deviceName === 'Desktop'
    ? { x: 5.8, y: 1.8 }
    : deviceName === 'Tablet'
    ? { x: 3.8, y: 1.8 }
    : { x: 4.3, y: 2.1 };

export const serviceDetailPosition =
  deviceName === 'Desktop'
    ? { left: 0.4, right: 9.2 }
    : deviceName === 'Tablet'
    ? { left: 0.4, right: 9.5 }
    : window.innerHeight > 667
    ? { left: 2.8, right: 7.2 }
    : { left: 2.5, right: 7.5 };



// helper methods for opening popups
export const checkingMethod = () => {
  console.log("is this working or not in video production");
}
export const openMarketingForm = () => {
  let form = document.querySelector(".formPopup-branding");
  form.style.display = 'block';
}
export const openBrandingForm = () => {
  let form = document.querySelector(".formPopup-branding");
  form.style.display = 'block';
}
