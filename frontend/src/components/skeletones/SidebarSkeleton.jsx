import React from "react";
import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside
      className="h-full w-20 sm:w-24 md:w-28 lg:w-72 border-r border-base-300 
    flex flex-col transition-all duration-200"
    >
      {/* Header */}
      <div className="border-b border-base-300 w-full p-4 sm:p-5">
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <Users className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-medium text-sm sm:text-base hidden lg:block">
            Contacts
          </span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full py-2 sm:py-3">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="w-full px-2 sm:px-3 py-2 flex items-center gap-3"
          >
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-10 sm:size-12 rounded-full" />
            </div>

            {/* Text skeletons: hidden on small screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-3 w-24 sm:w-32 mb-2" />
              <div className="skeleton h-2.5 w-14 sm:w-16" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
