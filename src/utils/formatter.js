export const getEllipsisTxt = (str, n = 6) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
  };
  export const getFormTxt = (str, n = 6) => {
    if (str) {
      return `${str.slice(0, n)}***${str.slice(str.length - n)}`;
    }
    return "";
  };
  