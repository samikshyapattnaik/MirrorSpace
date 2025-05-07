import React from "react";

export default function OurBlogs() {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 space-y-16">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl text-red-700 font-bold mb-4">Transform Your Home with Interior Excellence</h1>
        <p className="text-lg">
          At <strong>BricknBar.com</strong> and <strong>Mirrorspace.in</strong>, we turn everyday spaces into
          extraordinary experiences with personalized, innovative, and client-centric interior design solutions.
        </p>
      </section>

      <Section
        title="1. Personalized Interior Solutions"
        content="Your home should reflect your personality and lifestyle. Our bespoke designs capture your unique story, whether it's minimalist Scandinavian elegance or vibrant eclectic charm. We create spaces that resonate with you—from cozy reading nooks to open, social living areas."
        content2="Our team of expert designers collaborates with you to understand your vision, preferences, and needs. We create a tailored design plan that transforms your space into a true reflection of your style."
        content3="From concept to completion, we ensure every detail aligns with your vision. Our personalized approach guarantees that your home is not just a place to live, but a sanctuary that tells your story."
      />

      <Section
        title="2. Functional & Stylish Spaces"
        content="We balance beauty with practicality. From ergonomic home offices and relaxing bedrooms to efficient kitchens and spa-inspired bathrooms, our spaces enhance your daily life. Each design combines aesthetics with thoughtful, functional layouts."
        content2="Our designs prioritize functionality without compromising on style. We create spaces that are not only visually stunning but also practical and efficient, ensuring that every corner of your home serves a purpose."
        content3="Whether it's maximizing storage in a small kitchen or creating a serene retreat in your bedroom, we focus on the details that make your home both beautiful and functional."
      />

      <Section
        title="3. Premium Materials & Craftsmanship"
        content="We use only the finest materials, from marble countertops to handcrafted woodwork. Partnering with skilled artisans ensures every detail is perfect, creating spaces that exude beauty and durability."
        content2="Our commitment to quality craftsmanship means that every element of your home is designed to last. We source the best materials and work with skilled artisans to ensure that your home is not only beautiful but also built to withstand the test of time."
        content3="From custom cabinetry to exquisite flooring, we pay attention to every detail, ensuring that your home is a masterpiece of design and craftsmanship."
      />

      <Section
        title="4. Seamless Integration of Technology"
        content="Smart living starts here. Our homes feature integrated tech—smart lighting, climate control, voice-activated systems, and discrete security. Enjoy convenience without compromising on design."
        content2="We understand that technology is an integral part of modern living. Our designs seamlessly integrate smart home technology, allowing you to control lighting, temperature, and security with ease."
        content3="Whether it's a smart thermostat that learns your preferences or a home theater system that transforms your living room into a cinematic experience, we ensure that technology enhances your lifestyle without detracting from the beauty of your home."
      />

      <Section
        title="5. Sustainable and Eco-Friendly Practices"
        content="We prioritize eco-conscious designs—sustainable materials, energy-efficient appliances, and designs that optimize natural light and ventilation. Our homes are both luxurious and environmentally responsible."
        content2="We believe in creating spaces that are not only beautiful but also sustainable. Our designs incorporate eco-friendly materials and practices, ensuring that your home is as kind to the planet as it is to your lifestyle."
        content3="From energy-efficient appliances to sustainable building materials, we focus on creating homes that minimize environmental impact while maximizing comfort and style."
      />

      <Section
        title="6. A Collaborative Design Process"
        content="We collaborate closely with clients, ensuring your vision drives the project. Mood boards, 3D visuals, and regular feedback sessions guarantee a seamless, engaging journey from concept to completion."
        content2="Our design process is collaborative and transparent. We involve you at every step, from initial concept development to final installation, ensuring that your vision is realized in every detail."
        content3="We provide regular updates and opportunities for feedback, ensuring that you are always informed and involved in the design process. Your satisfaction is our top priority, and we work tirelessly to exceed your expectations."
      />

      <Section
        title="7. Revitalizing Spaces with a Touch of Art"
        content="Art enhances our designs. From custom wall art to curated decor, we bring soul to your space. Collaborating with local artists ensures your home features pieces that are as unique as you are."
        content2="We believe that art is an essential part of interior design. Our team collaborates with local artists to curate unique pieces that enhance your space and reflect your personality."
        content3="Whether it's a stunning mural, a custom sculpture, or carefully selected decor, we ensure that your home is a canvas for creativity and self-expression."
      />

      <section className="bg-gray-100 py-12 rounded-2xl shadow-lg px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Bring Your Vision to Life</h2>
        <p className="mb-6">
          Contact <strong>BricknBar.com</strong> or <strong>Mirrorspace.in</strong> today to begin your journey toward
          a luxurious, comfortable, and personalized living space.
        </p>
        <button className="bg-red-800 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">Get Started</button>
      </section>

    </div>

  );
}

function Section({ title, content , content2, content3 }) {
  // This component renders a section with a title and content
  return (
    <>
    <div className="mx-auto space-y-4">
      <h2 className="text-2xl font-semibold text-red-700">{title}</h2>
      <p className="text-gray-700 text-lg leading-relaxed">{content}</p>
      <p className="text-gray-700 text-lg leading-relaxed">{content2}</p>
      <p className="text-gray-700 text-lg leading-relaxed">{content3}</p>

    </div>
    </>
  );
}