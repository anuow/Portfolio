import  { useState } from "react";
import { AnimatePresence } from "motion/react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-6 sm:flex sm:space-y-0">
        <div className="flex-1">
          <p className="text-xl sm:text-2xl font-semibold text-white">{title}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sand text-sm sm:text-base">
            {tags.map((tag) => (
              <span key={tag.id} className="px-2 py-1 rounded-md bg-white/5">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={openModal}
          className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base cursor-pointer hover-animation transition-all duration-200 hover:text-white"
          aria-label={`Read more about ${title}`}
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
        </button>
      </div>
      
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            closeModal={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;