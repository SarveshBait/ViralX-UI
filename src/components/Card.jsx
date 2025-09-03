function Card() {
    return (
<section id="explore" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Trending Now 🔥</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl">
              <div
                // key={post.id}
                className="bg-white rounded-2xl shadow"
                data-aos="fade-right"
                // data-aos-delay={index * 100} // delay effect for staggered animation
              >
              <img
                src="https://picsum.photos/400/300?random=3"
                alt="Trending Post"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Lifestyle Vibes</h4>
              <p className="text-gray-600">Catch the latest lifestyle updates trending worldwide.</p>
            </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl">
              <div
                // key={post.id}
                className="bg-white rounded-2xl shadow"
                data-aos="fade-down"
                // data-aos-delay={index * 100} // delay effect for staggered animation
              >
              <img
                src="https://picsum.photos/400/300?random=4"
                alt="Trending Post"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold pt-4 mb-2">Tech Trends</h4>
              <p className="text-gray-600">Explore the coolest innovations shaping the future.</p>
            </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl">
              <div
                // key={post.id}
                className="bg-white rounded-2xl shadow"
                data-aos="fade-left"
                // data-aos-delay={index * 100} // delay effect for staggered animation
              >
              <img
                src="https://picsum.photos/400/300?random=2"
                alt="Trending Post"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Sports Buzz</h4>
              <p className="text-gray-600">Stay updated with your favorite sports and athletes.</p>
            </div>
            </div>
          </div>
        </div>
      </section>
      );
}

export default Card;