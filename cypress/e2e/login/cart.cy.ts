import IndexPage from "../../pages/IndexPage";
import ItemPage from "../../pages/ItemPage";
import CartPage from "../../pages/CartPage";

describe("Cart tests", () => {

    beforeEach(()=>{
        cy.visit("/");
    })

  it("Adding Laptop to cart", () => {
    IndexPage.selectCategory("Laptops");
    IndexPage.selectItem("Sony vaio i7");
    ItemPage.validateItemName("Sony vaio i7");
    ItemPage.clickAddToCart();
    IndexPage.clickCartButton();
    CartPage.validateCartItem("Sony vaio i7");
  });

  it("Adding Phone to cart", () => {
    IndexPage.selectCategory("Phones");
    IndexPage.selectItem("Nokia lumia 1520");
    ItemPage.validateItemName("Nokia lumia 1520");
    ItemPage.clickAddToCart();
    IndexPage.clickCartButton();
    CartPage.validateCartItem("Nokia lumia 1520");
  });

  it("Adding Monitor to cart", () => {
    IndexPage.selectCategory("Monitors");
    IndexPage.selectItem("ASUS Full HD");
    ItemPage.validateItemName("ASUS Full HD");
    ItemPage.clickAddToCart();
    IndexPage.clickCartButton();
    CartPage.validateCartItem("ASUS Full HD");
  });
});
