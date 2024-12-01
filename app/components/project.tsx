export default function Projects() {
  const groupedProjects = {
    Thumbnails: [
      { title: 'Youtube Thumbnail', description: 'Eye-Catching Visuals for Maximum Clicks', image: "/no1.jpg" },
      { title: 'Social Media Thumbnail', description: "Vibrant Designs for Standout Posts", image: "/no2.jpg" },
      { title: 'Educational Thumbnails', description: "Clean and Informative Designs for Learning Content", image: "/no3.jpg" },
      { title: 'Gaming Thumbnails', description: "Dynamic and Bold Thumbnails for Gamers", image: "/no4.jpg" },
    ],
    PostsFlyers: [
      { title: 'Educational post', description: "Professional Banner to Boost Brand Visibility", image: "/no5.jpg" },
      { title: 'Marketing flyer', description: "Professional marketing flyer to Boost Brand Visibility", image: "/no6.jpg" },
      { title: 'Business post', description: "Professional banner to Boost Brand Visibility", image: "/no7.jpg" },
      { title: 'Marketing flyer', description: "Professional flyer to Boost Brand Visibility", image: "/no8.jpg" },
      { title: 'Marketing flyer', description: "Professional flyer to Boost Brand Visibility", image: "/no9.jpg" },
      { title: 'personal flyer', description: "Professional flyer to Boost Brand Visibility", image: "https://i.ibb.co/QKNWqnQ/66352824391a.jpg" },
      { title: 'Marketing flyer', description: "Professional flyer to Boost Brand Visibility", image: "https://i.ibb.co/s3nLfB2/21e9746b3791.jpg" },

      
    ],
    Logos: [
      { title: 'Logo', description: "Creative logo design representing Brand Identity with modern aesthetics.", image: "/logo1.jpg" },
      { title: 'Brand Logo', description: "A vibrant and professional logo tailored to enhance the brand's presence.", image: "/logo2.jpg" },
      { title: 'T-shirt Logo', description: "Minimalist logo design reflecting the core values of the brand.", image: "/logo3.jpg" },
      { title: 'Brand Logo', description: "Bold and unique logo crafted to symbolize innovation and growth.", image: "/logo4.jpg" },
      { title: 'Brand Logo', description: "A logo design blending elegance and functionality for lasting impact.", image: "/logo5.jpg" },
      { title: 'Startup Logo', description: "Dynamic logo designed to represent creativity and excellence.", image: "/logo6.jpg" },
      { title: 'Business Logo', description: "Sophisticated logo design portraying trust and professionalism.", image: "/logo7.jpg" },
      { title: 'Brand Logo', description: "Stylish logo crafted to align with the brand's youthful energy.", image: "/logo8.jpg" },
      { title: 'Logo', description: "Innovative logo showcasing the brand's vision and uniqueness.", image: "/logo9.jpg" },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        {Object.entries(groupedProjects).map(([category, projects]) => (
          <div key={category} className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-6 relative">
              <span className="block">{category}</span>
              <span className="absolute w-20 h-1 bg-blue-500 rounded-lg mt-2 mx-auto left-0 right-0"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-4 shadow">
                  <img
                    className="w-full h-30 object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                  <h4 className="text-xl font-semibold pt-10">{project.title}</h4>
                  <p className="mt-2">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
