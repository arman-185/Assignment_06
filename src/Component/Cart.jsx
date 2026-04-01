import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
    const total = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
    };

    const handleDelete = (id) => {
        setCarts(carts.filter(c => c.id !== id));
        toast.error("Item removed!");
        // console.log(carts.filter(c => c.id !== id));
    };

    return (
        <div className="max-w-2xl mx-auto border border-gray-200 rounded-2xl p-6 mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your Cart</h2>

            {carts.length === 0 && <p className="text-gray-400 text-sm">Your cart is empty.</p>}

            {carts.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mb-2">
                    <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.title} className="w-8 h-8 object-contain" />
                        <div>
                            <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                            <p className="text-xs text-gray-400">${item.price}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => handleDelete(item.id)}
                        className="text-xs text-red-400 hover:text-red-600"
                    >
                        Remove
                    </button>
                </div>
            ))}

            {carts.length > 0 && (
                <>
                    <div className="flex justify-between py-3 border-t border-gray-100">
                        <span className="text-sm text-gray-500">Total</span>
                        <span className="font-bold text-gray-900">${total}</span>
                    </div>
                    <button onClick={handlePayment} className="pointer w-full py-3 rounded-xl text-sm font-semibold text-white mt-2" style={{ backgroundColor: "#7c3aed" }}>
                        Proceed To Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;