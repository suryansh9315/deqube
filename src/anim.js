const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] }

export const hamCircleAnim = {
  initial: {
    height: 16,
    width: 16,
  },
  hover: {
    height: 40,
    width: 40,
    transition: { duration: 0.25 },
  },
  notHover: {
    height: 16,
    width: 16,
    transition: { duration: 0.25 },
  },
  openHover: {
    height: 50,
    width: 50,
    transition: { duration: 0.25 },
  },
  openNotHover: {
    height: 40,
    width: 40,
    transition: { duration: 0.25 },
  }
};

export const hamLineAnim = {
  initial: {
    height: 0,
    width: 0,
  },
  hover: {
    height: 2,
    width: 18,
    transition: { duration: 0.25 },
  },
  notHover: {
    height: 0,
    width: 0,
    transition: { duration: 0.25 },
  },
  openHover: {
    height: 2,
    width: 18,
    rotate: '45deg',
    translateY: 2,
    // translateX: 1,
    transition: { duration: 0.25 },
  },
  openNotHover: {
    height: 2,
    width: 18,
    translateY: 2,
    // translateX: 1,
    rotate: '45deg',
    transition: { duration: 0.25 },
  }
};

export const hamLineAnim2 = {
    initial: {
      height: 0,
      width: 0,
    },
    hover: {
      height: 2,
      width: 18,
      transition: { duration: 0.25 },
    },
    notHover: {
      height: 0,
      width: 0,
      transition: { duration: 0.25 },
    },
    openHover: {
      height: 2,
      width: 18,
      translateY: -2,
      // translateX: -1,
      rotate: '-45deg',
      transition: { duration: 0.25 },
    },
    openNotHover: {
      height: 2,
      width: 18,
      translateY: -2,
      // translateX: -1,
      rotate: '-45deg',
      transition: { duration: 0.25 },
    }
  };

export const hamContentBg = {
    initial: {
      height: 0,
    },
    open: {
      height: '100vh',
      transition,
    },
    close: {
      height: 0,
      transition: { duration: 0.3 },
    },
  };

export const logo = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7 }
  }
}

export const logo_dark = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, delay: 0.7 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
}
