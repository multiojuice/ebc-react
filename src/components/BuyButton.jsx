import { useEffect } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const button_options = {
    "product": {
    "styles": {
        "product": {
        "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
        }
        },
        "title": {
        "font-family": "Calisto MT, serif",
        "font-weight": "normal"
        },
        "button": {
        "font-family": "Crimson Text, serif",
        "font-weight": "bold",
        ":hover": {
            "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
            "background-color": "#000000"
        }
        },
        "price": {
        "font-family": "Calisto MT, serif"
        },
        "compareAt": {
        "font-family": "Calisto MT, serif"
        },
        "unitPrice": {
        "font-family": "Calisto MT, serif"
        }
    },
    "contents": {
        "img": false,
        "button": false,
        "buttonWithQuantity": true,
        "title": false,
        "price": false
    },
    "text": {
        "button": "Add to cart"
    },
    "googleFonts": [
        "Crimson Text"
    ]
    },
    "productSet": {
    "styles": {
        "products": {
        "@media (min-width: 601px)": {
            "margin-left": "-20px"
        }
        }
    }
    },
    "modalProduct": {
    "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
    },
    "styles": {
        "product": {
        "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
        }
        },
        "button": {
        "font-family": "Crimson Text, serif",
        "font-weight": "bold",
        ":hover": {
            "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
            "background-color": "#000000"
        }
        },
        "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
        },
        "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
        },
        "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
        },
        "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
        }
    },
    "googleFonts": [
        "Crimson Text"
    ],
    "text": {
        "button": "Add to cart"
    }
    },
    "option": {
    "styles": {
        "label": {
        "font-family": "Crimson Text, serif",
        "font-weight": "bold"
        },
        "select": {
        "font-family": "Crimson Text, serif",
        "font-weight": "bold"
        }
    },
    "googleFonts": [
        "Crimson Text"
    ]
    },
    "cart": {
    "styles": {
        "button": {
        "font-family": "Crimson Text, serif",
        "font-weight": "bold",
        ":hover": {
            "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
            "background-color": "#000000"
        }
        }
    },
    "text": {
        "total": "Subtotal",
        "button": "Checkout"
    },
    "googleFonts": [
        "Crimson Text"
    ]
    },
    "toggle": {
    "styles": {
        "toggle": {
        "font-family": "Crimson Text, serif",
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
            "background-color": "#000000"
        },
        ":focus": {
            "background-color": "#000000"
        }
        }
    },
    "googleFonts": [
        "Crimson Text"
    ]
    }
}

const shopifyClient = ShopifyBuy.buildClient({
    domain: 'ebony-beach-club-dev.myshopify.com',
    storefrontAccessToken: 'b1ba4b059f6eb6c100a5b6a646b4ec36'
});

const ui = ShopifyBuy.UI.init(shopifyClient);

export default function BuyNow({ id }) {
    useEffect(() => {
        ui.createComponent('product', {
            id,
            node: document.getElementById(`buy-now-${id}`),
            options: button_options
        });
    });

    return <div id={`buy-now-${id}`} />;
}