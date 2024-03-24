// components/AboutMeSection.js
const AboutMeSection = () => {
  return (
    <div id="about" className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">49.4K</h3>
          <p className="text-lg">YouTube Subscribers</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">5,590,021</h3>
          <p className="text-lg">Views on YouTube</p>
        </div>
      </div>
      <p className="text-lg my-6">
        Shubham Dhebe is a renowned self-taught filmmaker, best-known for his
        unique style of video editing that influenced a new era of content
        creation. Since beginning his career in 2014, Shubham’s talent for video
        editing has amassed him a dedicated following and also led him to
        touring with the chainsmokers, becoming head of video at beautiful
        destinations, and working with global brands like YouTube, Canon, DJI,
        Gymshark, and many more.
      </p>
      <p className="text-lg">
        Shubham is known for pushing his creative limits. Regardless if
        it&apos;s a travel vlog, gear review or video ad, you can always expect
        him to create truly one of a kind content for your brand. Working with
        Shubham means getting access to one of the most engaged audiences of
        travelers, creators and adventurers on the internet today.
      </p>
    </div>
  );
};

export default AboutMeSection;
