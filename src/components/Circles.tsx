"use client";

function Circles() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden w-[min(100%,804px)] pt-[min(100%,804px)] min-h-0 max-h-0">
        <div className="absolute inset-0 rounded-full bg-gray-900 overflow-hidden">
          <video
            src="/pexels_videos_1722882_(1080p).mp4"
            poster="/heroposter.jpg"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-2/3 translate-x-1/3">
        <div className="relative rounded-full overflow-hidden min-w-[428px]  max-w-[428px] min-h-[428px]  max-h-[428px] bg-gray-900">
          <video
            src="/pexels_videos_1722882_(1080p).mp4"
            poster="/heroposter.jpg"
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
      </div>
      <div className="absolute left-3/4 top-1/3 -translate-x-12">
        <div className="relative rounded-full overflow-hidden min-w-[234px]  max-w-[234px] min-h-[234px]  max-h-[234px] bg-gray-900">
          <video
            src="/pexels_videos_1722882_(1080p).mp4"
            poster="/heroposter.jpg"
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Circles;
