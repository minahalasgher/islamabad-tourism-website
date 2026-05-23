export default function Portfolio() { return ( <div className="min-h-screen bg-slate-100 text-slate-900 p-6"> <div className="max-w-4xl mx-auto"> <section className="bg-white shadow-lg rounded-2xl p-8 mb-6 text-center"> <img
src="https://via.placeholder.com/150"
alt="Profile"
className="w-32 h-32 rounded-full mx-auto mb-4"
/> <h1 className="text-4xl font-bold">Minahil Asghar</h1> <p className="text-lg mt-2">BS Computer Science Student | Frontend Web Developer</p> </section>

<section className="bg-white shadow-lg rounded-2xl p-8 mb-6">
      <h2 className="text-2xl font-semibold mb-3">About Me</h2>
      <p>I am a passionate web developer skilled in building responsive and modern websites.</p>
    </section>

    <section className="bg-white shadow-lg rounded-2xl p-8 mb-6">
      <h2 className="text-2xl font-semibold mb-3">Skills</h2>
      <ul className="list-disc pl-5">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind css</li>
      </ul>
    </section>

    <section className="bg-white shadow-lg rounded-2xl p-8 mb-6">
      <h2 className="text-2xl font-semibold mb-3">Projects</h2>
      <p>Project 1 - E-commerce Website</p>
      <p>Project 2 - Portfolio Website</p>
    </section>

    <section className="bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p>Email: minahilasghar218@gmail.com</p>
      <p>Phone: 0370-6087687</p>
    </section>
  </div>
</div>

); }