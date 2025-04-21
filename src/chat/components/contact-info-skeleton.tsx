import React from "react";

export const ContactInfoSkeleton = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center pb-6 border-b">
        {/* Avatar Skeleton */}
        <div className="h-20 w-20 rounded-full bg-muted/80 animate-pulse mb-3" />
        {/* Name Skeleton */}
        <div className="h-6 w-32 bg-muted/80 rounded animate-pulse mb-2" />
        {/* Account Type Skeleton */}
        <div className="h-4 w-24 bg-muted/80 rounded animate-pulse mb-1" />
        {/* Status Skeleton */}
        <div className="flex items-center mt-1">
          <div className="h-2 w-2 rounded-full bg-muted/80 animate-pulse mr-1" />
          <div className="h-3 w-12 bg-muted/80 rounded animate-pulse" />
        </div>
      </div>

      <div className="py-4 space-y-4">
        {/* Contact Information Section */}
        <div>
          <div className="h-4 w-36 bg-muted/80 rounded animate-pulse mb-4" />
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between">
                <div className="h-4 w-24 bg-muted/80 rounded animate-pulse" />
                <div className="h-4 w-32 bg-muted/80 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Account Details Section */}
        <div>
          <div className="h-4 w-32 bg-muted/80 rounded animate-pulse mb-4" />
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between">
                <div className="h-4 w-24 bg-muted/80 rounded animate-pulse" />
                <div className="h-4 w-28 bg-muted/80 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="pt-4 border-t">
        <div className="h-9 w-full bg-muted/80 rounded animate-pulse" />
      </div>
    </div>
  );
};
