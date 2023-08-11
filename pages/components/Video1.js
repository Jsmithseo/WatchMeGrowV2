function YoutubeEmbed() {
    return (
      <div className="video-responsive">
        <iframe
          width="600"
          height="380"
          src={`http://www.youtube.com/watch?v=YSEz2p56i9Q&t`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  }
  
  export default YoutubeEmbed;
  