import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
    const isBuy = carts.some(c => c.id === model.id);

    const handleBuy = () => {
        if (isBuy) {
            toast.info("Already in cart!");
            return;
        }
        setCarts([...carts, model]);
        toast.success("Item added to Cart!");
    };

    return (
        <div className="border border-gray-200 rounded-3xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <img src={model.image} alt={model.title} className="w-10 h-10 object-contain" />
            <h3 className="font-bold text-gray-900 text-base">{model.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{model.description}</p>
            <p className="font-extrabold text-gray-900 text-lg">
                ${model.price}
                <span className="text-xs font-normal text-gray-400 ml-1">/Mo</span>
            </p>
            <button
                onClick={handleBuy}
                disabled={isBuy}
                className="btn btn-primary rounded-full"
            >
                {isBuy ? "Added" : "Buy Now"}
            </button>
        </div>
    );
};

export default ModelCard;