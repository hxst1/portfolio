const ImgWithFallback = ({
  src,
  fallback,
  alt,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img className="imagePFP" src={fallback} {...delegated} alt={alt}/>
    </picture>
  );
};

export default ImgWithFallback
