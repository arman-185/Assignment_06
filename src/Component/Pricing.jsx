const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect for getting started",
      cta: "Get Started Free",
      features: ["10 free tools", "Basic templates", "Community support", "1 project/month"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      desc: "Ideal for professionals",
      cta: "Start Pro Trial",
      features: ["All premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      desc: "For teams and businesses",
      cta: "Contact Sales",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee"],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-white" id="pricing">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-sm">Upgrade or downgrade anytime.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col gap-4 border ${
                plan.highlight
                  ? 'border-violet-500 shadow-lg'
                  : 'border-gray-200'
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full w-fit">
                  Most Popular
                </span>
              )}

              {/* Plan name & price */}
              <div>
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{plan.desc}</p>
                <p className="text-3xl font-extrabold text-gray-900 mt-3">
                  {plan.price} <span className="text-sm font-normal text-gray-400">/mo</span>
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-violet-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: plan.highlight ? '#7c3aed' : '#f3f0ff',
                  color: plan.highlight ? 'white' : '#7c3aed',
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;