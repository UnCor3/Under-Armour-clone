import { createContext, useContext, Component, useReducer } from "react";
import {
  addAnExistingProductToBag,
  calculateSubTotal,
  calculateTotalItems,
  calculateTotalPriceForEachItem,
  removeAnExistingProductFromBag,
  setCustomQtyHelper,
} from "../helper/helper";
import Cookies from "js-cookie";

export const BagContext = createContext();

const INITIAL_DATA = (bag) => ({
  bag: bag || [],
  shipment: "ship",
  subTotal: 0,
});

class BagContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bagContext: INITIAL_DATA(JSON.parse(this.props.bag || "[]")),
    };
  }

  componentDidUpdate() {
    try {
      Cookies.set("bag", JSON.stringify(this.state.bagContext.bag), {
        secure: true,
        sameSite: "strict",
        expires: Infinity,
      });
    } catch (error) {
      alert("Cannot use cookies so cannot persist bag");
    }
  }

  render() {
    //my own useReducer implementation
    const dispatch = (action) =>
      this.setState((s) => ({
        bagContext: reducer(s.bagContext, action),
      }));

    const bagContext = this.state.bagContext;

    bagContext.totalItems = calculateTotalItems(bagContext.bag);
    bagContext.bag = calculateTotalPriceForEachItem(bagContext.bag);
    bagContext.subTotal = calculateSubTotal(bagContext.bag);

    const {
      bag: { color },
    } = bagContext;

    function removeItemFromBag(item) {
      dispatch({
        type: "REMOVE_FROM_BAG",
        payload: {
          item: {
            id: item.id,
            color: item.color,
            size: item.size,
          },
        },
      });
    }

    function setCustomQty(payload) {
      dispatch({ type: "SET_CUSTOM_QTY", payload });
    }

    return (
      <BagContext.Provider
        value={{ dispatch, color, bagContext, removeItemFromBag, setCustomQty }}
      >
        {this.props.children}
      </BagContext.Provider>
    );
  }
}

export const useBagCtx = () => useContext(BagContext);

const reducer = (state, action) => {
  let doesExist;

  switch (action.type) {
    case "SET_CUSTOM_QTY":
      return {
        ...state,
        bag: setCustomQtyHelper(state.bag, action),
      };

    case "REMOVE_FROM_BAG":
      return {
        ...state,
        bag: removeAnExistingProductFromBag(state.bag, action),
      };
    case "ADD_TO_BAG":
      doesExist = state.bag.length
        ? state.bag.find(
            (item) =>
              item.id == action.payload.item.id &&
              item.color == action.payload.item.color &&
              item.size == action.payload.item.size
          )
        : false;
      if (doesExist) {
        const bag = addAnExistingProductToBag(state.bag, action);
        return {
          bag: bag,
          shipment: action.payload.shipment,
        };
      }
      const bag = [...state.bag, { ...action.payload.item }];
      return {
        bag: bag,
        shipment: action.payload.shipment,
      };
    default:
      return state;
  }
};

export default BagContextProvider;
