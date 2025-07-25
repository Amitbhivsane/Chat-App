const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}
        >
          {/* Avatar Skeleton */}
          <div className="chat-image avatar">
            <div className="size-8 sm:size-10 rounded-full">
              <div className="skeleton w-full h-full rounded-full" />
            </div>
          </div>

          {/* Header (time) Skeleton */}
          <div className="chat-header mb-1">
            <div className="skeleton h-3 w-12 sm:h-4 sm:w-16" />
          </div>

          {/* Message bubble Skeleton */}
          <div className="chat-bubble bg-transparent p-0">
            <div className="skeleton h-12 w-40 sm:h-16 sm:w-[200px] rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
