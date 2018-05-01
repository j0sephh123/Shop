import React from 'react'

const Home = () => {
  return (
    <div className='container w-50 mx-auto'>
      <p>This is the 0.0.1 version of an application solely made for testing purposes.
        Its idea is to imitate an online shop, of course a very simplified version.
        For this one I havent really gotten any external ideas, just sat and coded what I like and enjoy as functionality.
        The app is made with React/Redux/React Router v4, although at one place i decided to skip the router, because i got really frustrated with it.
        There is no authentication or database usage. I intend to add them later, I just wanted to finish the basis of it and then extend its functionality.
        Why shop? Because the information is easy to structure, so I can focus on coding.
        Summary of functions:
          1) List of all the products. The user can add a product to cart and sort products by category
          2) Admin panel for adding new products/categories, deleting, updating, changing price, quantity.
          3) Cart where there is a list of the added products and also on clicking the product, additional information for it is displayed.
        29/04/18. 
      </p>
    </div>
  );
}
export default Home;