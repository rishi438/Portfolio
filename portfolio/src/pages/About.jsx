// @ts-nocheck

const Home = () => {
  return (
    <section className="font-family-poppins max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span
          className="red-gradient-text font-medium
          drop-shadow"
        >
          Rishi{" "}
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-stone-500">
        <p>
          Software Developer based in India, a polymath, specialized in
          developing user-friendly web interfaces{" "}
          <span className="text-blue-500">#frontend</span> and implementing
          seamless API's, server side logic and databases{" "}
          <span className="text-blue-500">#backend</span>.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12"></div>
      </div>
    </section>
  );
};

export default Home;
