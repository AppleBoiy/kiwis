export default function Video({ src }) {
  return (
    <video
      muted
      playsInline
      loop
      controls
      className="mt-6 rounded-xl border dark:border-zinc-800"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

module.exports = {
  Video,
};
