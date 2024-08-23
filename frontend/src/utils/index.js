export const getMenuLink = (productType) => {
  switch (productType) {
    case "예금":
      return "/deposit";
    case "적금":
      return "/saving";
    case "대출":
      return "/loan";
    case "체크카드":
      return "/checkcard";
    default:
      return "/";
  }
};
