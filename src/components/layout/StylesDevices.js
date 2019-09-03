    
// colors: BA73F2, ac53f2, 663399, #8A2BE2

export const colorRoxo = "#8A2BE2";

const sizeTamanhoTela = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(max-width: ${sizeTamanhoTela.mobileS})`,
  mobileM: `(max-width: ${sizeTamanhoTela.mobileM})`,
  mobileL: `(max-width: ${sizeTamanhoTela.mobileL})`,
  tablet: `(max-width: ${sizeTamanhoTela.tablet})`,
  laptop: `(max-width: ${sizeTamanhoTela.laptop})`,
  laptopL: `(max-width: ${sizeTamanhoTela.laptopL})`,
  desktop: `(max-width: ${sizeTamanhoTela.desktop})`,
  desktopL: `(max-width: ${sizeTamanhoTela.desktop})`
};