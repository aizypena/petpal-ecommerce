import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  // Sample cart items (static for now, but can be dynamic)
  const cartItems = [
    {
      id: 1,
      title: "Pedigree Dog Food",
      price: 645,
      quantity: 1,
      image:
        "https://www.petwarehouse.ph/23078-home_default/pedigree-nutridefense-chicken-egg-and-milk-stage-2-puppy-dry-food.jpg", // Placeholder image
    },
    {
      id: 2,
      title: "Whiskas Cat Food",
      price: 35,
      quantity: 2,
      image:
        "https://www.petwarehouse.ph/17824-medium_default/whiskas-tuna-white-fish-80g-cat-wet-food.jpg", // Placeholder image
    },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 font-mono bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {/* Cart Items */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">₱{item.price}</p>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <button className="text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              ))}
              {/* Total Price */}
              <div className="text-right font-bold text-lg mt-4">
                Total: ₱{totalPrice}
              </div>
            </div>
          )}
        </section>

        {/* Delivery Address Selection */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>123 Main St, Manila, Philippines</option>
            <option>456 Mabini St, Makati, Philippines</option>
            <option>Add New Address...</option>
          </select>
        </section>

        {/* Payment Method Selection */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Card", "GCash", "Maya", "Cash on Delivery"].map((method) => (
              <label
                key={method}
                className="flex items-center space-x-3 border border-gray-300 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <input type="radio" name="payment" className="h-4 w-4" />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Shipping Method Selection */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between border border-gray-300 p-3 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium">Standard Shipping (3-5 days)</p>
                <p className="text-sm text-gray-500">₱100</p>
              </div>
              <input type="radio" name="shipping" className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between border border-gray-300 p-3 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium">Express Shipping (1-2 days)</p>
                <p className="text-sm text-gray-500">₱200</p>
              </div>
              <input type="radio" name="shipping" className="h-4 w-4" />
            </label>
          </div>
        </section>

        {/* Checkout Button */}
        <div className="flex justify-center mt-16">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
