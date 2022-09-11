const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img className="imagePFP" src={fallback} {...delegated} alt=""/>
    </picture>
  );
};

export default ImgWithFallback
