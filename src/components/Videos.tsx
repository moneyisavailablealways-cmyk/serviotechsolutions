import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const categories = ["All", "Company", "Services", "Demo", "Testimonials"] as const;

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [autoplay, setAutoplay] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 200);
  };

  const videos = [
    {
      id: "welcome",
      title: "Welcome to Skyline Tech Solutions",
      description: "Learn about our mission, values, and what sets us apart in the software development industry.",
      category: "Company",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    },
    {
      id: "webdev",
      title: "Custom Web Development Process",
      description: "See how we transform ideas into powerful web applications using cutting-edge technologies.",
      category: "Services",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    },
    {
      id: "mobile",
      title: "Mobile App Development Demo",
      description: "Discover our approach to creating seamless mobile experiences for iOS and Android.",
      category: "Services",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    },
    {
      id: "cloud",
      title: "Cloud Solutions Explained",
      description: "Learn how we leverage cloud technologies to build scalable and reliable systems.",
      category: "Services",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    },
    {
      id: "ai",
      title: "AI Integration Showcase",
      description: "See real examples of how we integrate AI and machine learning into business applications.",
      category: "Demo",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    },
    {
      id: "success",
      title: "Client Success Stories",
      description: "Hear directly from our clients about their experience working with Skyline Tech Solutions.",
      category: "Testimonials",
      thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    }
  ];

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-play carousel every 5 seconds on mobile
  useEffect(() => {
    if (!api || !autoplay) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api, autoplay]);

  // Stop autoplay when user interacts
  const handleVideoClick = useCallback((videoUrl: string) => {
    setAutoplay(false);
    setSelectedVideo(videoUrl);
  }, []);

  const handleCarouselInteraction = useCallback(() => {
    setAutoplay(false);
  }, []);

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const renderVideoCard = (video: typeof videos[0], index: number) => (
    <Card 
      key={video.id}
      className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in border-2 hover:border-primary/50"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => handleVideoClick(video.videoUrl)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          <Badge className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm">
            {video.category}
          </Badge>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {video.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Video Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Watch our videos to learn more about our services, see our work in action, and hear from our team and clients.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Carousel - Shows on small screens */}
        <div className={`md:hidden transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {filteredVideos.length > 0 ? (
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {filteredVideos.map((video, index) => (
                  <CarouselItem key={video.id}>
                    {renderVideoCard(video, index)}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                className="left-2" 
                onClick={handleCarouselInteraction}
              />
              <CarouselNext 
                className="right-2" 
                onClick={handleCarouselInteraction}
              />
            </Carousel>
          ) : (
            <p className="text-center text-muted-foreground">No videos in this category.</p>
          )}
          {/* Dot Indicators */}
          {filteredVideos.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {filteredVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    api?.scrollTo(index);
                    setAutoplay(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Grid Layout - Shows on medium and larger screens */}
        <div className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video, index) => renderVideoCard(video, index))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">No videos in this category.</p>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary text-2xl font-bold"
            >
              ✕
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full rounded-lg shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;