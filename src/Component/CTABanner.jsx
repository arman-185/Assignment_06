const CTABanner = () => {
  return (
    <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
      <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-white/80 text-sm mb-8">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <button className="btn bg-white text-violet-700 hover:bg-violet-50 border-0 font-semibold rounded-full px-6">
            Explore Products
          </button>
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-violet-700 font-semibold rounded-full px-6">
            View Pricing
          </button>
        </div>
        <p className="text-white/60 text-xs">14-day free trial · No credit card required · Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTABanner;
