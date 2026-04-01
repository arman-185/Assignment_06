import { use } from 'react';
import ModelCard from './ModelCards';

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Premium Digital Tools</h1>
          <p className="text-gray-400 text-sm">Choose from our curated collection of premium digital products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;