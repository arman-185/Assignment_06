import BannerImage from '../assets/banner.png';

const Banner = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <span className="badge badge-outline text-violet-600 border-violet-300 bg-violet-50 mb-4 text-xs font-medium px-3 py-1 rounded-full">
             New AI-Powered Tools Available
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-700 leading-tight mb-4">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn text-white font-semibold px-6 rounded-full" style={{ backgroundColor: '#7c3aed'}}>
              Explore Products
            </a>
            <a className="btn btn-ghost border border-gray-200 font-semibold px-6 rounded-full text-gray-700 flex items-center gap-2">
              Watch Demo
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl opacity-20" style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', filter: 'blur(40px)', transform: 'scale(0.9)' }}></div>
            
             <img src={BannerImage} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
