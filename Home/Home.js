import React from 'react'

const Home = () => {
  return (
    <div className='container w-50 mx-auto'>
      <p>This application is solely made for testing purposes.
        Its idea is to imitate an online shop, of course a very simplified version of it.
        For this one I havent really gotten any external ideas, just sat and coded what I like and enjoy as a functionality.
        The app is made with React/Redux/React Router v4.
        There is no authentication or database usage. I intend to add them later, I just wanted to finish the basis of it and then extend its functionality.
        Why shop? Because the information is easy to structure, so I can focus on coding.
        Summary of functions:
          1) List of all the products. The user can add a product to cart and sort products by category
          2) Admin panel for adding new products/categories, deleting, updating, changing price, quantity.
          3) Cart where there is a list of the added products and also on clicking the product, additional information for it is displayed.
        29/04/18. 
      </p>
      <p>
        Improved the UI a bit, although there is a lot of work ot do
        02/05/18. 
      </p>
      <p>
        Statistics and info page for each particular product.
        04/05/18. 
      </p>
      <p>
        On information about each product "Leave comment" is now functional.
        11/05/18. 
        I fully realize that it doesn't look pretty enough, 
      </p>
    </div>
  );
}
export default Home;