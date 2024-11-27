export default function Projects() {
    const projects = [
      { title: 'Youtube Thumbnail', description: 'Eye-Catching Visuals for Maximum Clicks' ,image: "/no1.jpg",
},
      { title: 'Social Media Thumbnail', description: "Vibrant Designs for Standout Posts"

,        image: "/no2.jpg",
 },
      { title: 'Educational Thumbnails', description: "Clean and Informative Designs for Learning Content"

 ,
        image: "/no3.jpg",

      },
      { title: 'Gaming Thumbnails', description: "Dynamic and Bold Thumbnails for Gamers" ,image: "/no4.jpg",},
    { title: 'Educational post', description: "Professional Banner to Boost Brand Visibility" ,image: "/no5.jpg",},
    
    
    { title: 'Marketing flyer', description: "Professional marketing flyer to Boost Brand Visibility" ,image: "/no6.jpg",},
    { title: 'Bussnies post', description: "Professional banner to Boost Brand Visibility" ,image: "/no7.jpg",},
    { title: 'Marketing flyer', description: "Professional marketing flyer to Boost Brand Visibility" ,image: "/no8.jpg",},
    { title: 'Marketing flyer', description: "Professional flyer to Boost Brand Visibility" ,image: "/no9.jpg",},

  { title: 'Banner', description: "Professional and unique Banner to Boost Brand Visibility" ,image: "/no11.jpg",},
    { title: 'linkedin Banner', description: "Professional and unique post to Boost  Visibility" ,image: "/no12.jpg",},
    { title: 'linkedin Banner', description: "Professional and unique banner  to Boost Visibility" ,image: "/no13.jpg",},

    ];
  
    return (
      <section id="projects" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index ) => (
              <div key={index} className="border rounded-lg p-4 shadow">

<img
                  className="w-full h-30 object-cover"
                  src={project.image}
                />                <h3 className="text-xl font-semibold pt-10">{project.title}</h3>
                <p className="mt-2">{project.description}</p>

              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  