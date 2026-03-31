const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="py-10 px-4" style={{ background: 'linear-gradient(90deg, #7c3aed, #5b21b6)' }}>
      <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-white px-6 py-4">
            <p className="text-4xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.value}</p>
            <p className="text-white/80 text-sm mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
