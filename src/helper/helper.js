export function getStylesForRange(value) {
  return { marginLeft: value >= 98 ? "98%" : value <= 3 ? "3%" : value + "%" };
}

export function debounce(cb, delay) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(e || null);
    }, delay);
  };
}

export function calculateTotalItems(bagItems) {
  return bagItems.reduce((acc, next) => {
    return (acc += next.qty);
  }, 0);
}

export function addAnExistingProductToBag(bagItems, action) {
  return bagItems.map((item) =>
    item.id == action.payload.item.id &&
    item.size == action.payload.item.size &&
    item.color == action.payload.item.color
      ? { ...item, qty: item.qty + action.payload.item.qty }
      : item
  );
}

export function removeAnExistingProductFromBag(bagItems, action) {
  const filtered = bagItems.map((item) =>
    item.id == action.payload.item.id &&
    item.size == action.payload.item.size &&
    item.color == action.payload.item.color
      ? undefined
      : item
  );

  return filtered.filter(Boolean);
}

export function calculateTotalPriceForEachItem(bagItems) {
  return bagItems.map((item) => {
    return {
      ...item,
      priceTotal: item.qty * parseFloat(item.price.split("$")[1]),
    };
  });
}

export function calculateSubTotal(bagItems) {
  return bagItems.reduce((acc, next) => {
    return (acc += next.priceTotal);
  }, 0);
}

export function setCustomQtyHelper(bagItems, action) {
  return bagItems.map((item) =>
    item.id == action.payload.id &&
    item.size == action.payload.size &&
    item.color == action.payload.color
      ? { ...item, qty: action.payload.qty }
      : item
  );
}

export const isClient = typeof window != "undefined";

export const greaterThanOne = (property) => property > 1;

export function makeBodyNotScrollable() {
  document.body.classList.add("not-scrollable");
}

export function makeBodyScrollable() {
  document.body.classList.remove("not-scrollable");
}

export function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function stringifyPrice(price) {
  const formattedPrice = parseFloat(price).toFixed(2);

  return `$${formattedPrice}`;
}

export function createIfDoesNotExist(tag, id) {
  const exiting = document.getElementById(id);
  if (!exiting) {
    const elm = document.createElement(tag);
    elm.id = "product-review";
    document.body.appendChild(elm);
    return elm;
  }
  return exiting;
}
