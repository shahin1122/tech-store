import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "New Phone",
      description:
        "A brand new mobile phone has been arise in our shop for your",
      price: 250.0,
      image:"https://images-na.ssl-images-amazon.com/images/I/51VCP05020L._AC_US218_.jpg",
    },
    {
      id: 2,
      title: "Mapping Accessory",
      description:
      "Sony DSCW800/B 20.1 MP Digital Camera (Black)",
      price: 220.0,
      image:
      "https://images-na.ssl-images-amazon.com/images/I/416TS-ODxfL._AC_US218_.jpg",
    },
    {
      id: 3,
      title: "Sony Phone",
      description:
        "These Phone will keep you busy all throughout the entire lowdown and give you some great advise from famous people",
      price: 150.0,
      image:
      "https://images-na.ssl-images-amazon.com/images/I/51xI8gJTNYL._AC_US218_.jpg",
    },
    {
      id: 4,
      title: "Spay Camera",
      description:
        "Digital Camera,KINGEAR 2.7 inch TFT LCD HD Digital Camera",
      price: 135.0,
      image:
      "https://images-na.ssl-images-amazon.com/images/I/314hcoZg2JL._AC_US218_.jpg",
    },
    {
      id: 5,
      title: "phone Camera",
      description:
      "Cell Phone Camera Lens - TURATA 2 in 1 Professional HD Camera Lens Kit 0.45X Super Wide Angle & 12.5X Macro Lens for iPhone7 6s 6s plus 6 plus 5s & Most Smartphone, Tablet",
      price: 200.0,
      image:
      "https://images-na.ssl-images-amazon.com/images/I/41wyZE9sWLL._AC_US218_.jpg",
    },
    {
      id: 6,
      title: "DSLR Camera",
      description:
      "Kodak PIXPRO Friendly Zoom FZ43 16 MP Digital Camera with 4X Optical Zoom and 2.7\" LCD Screen (Black)",
      price: 150.0,
      image:
      "https://images-na.ssl-images-amazon.com/images/I/61heZtEPPBL._AC_US218_.jpg",
    },
    {
      id: 7,
      title: "This is the COOLEST Cube Ever",
      description:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 8,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 9,
      title: "Books That CHANGED My Life",
      description:
        "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
      price: 130.0,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
