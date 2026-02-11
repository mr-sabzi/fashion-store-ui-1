export default function Img({ src, classname, alt, onLoad , crossOrigin}) {
    return <img src={src} onLoad={onLoad} crossOrigin={crossOrigin} alt={alt} className={classname} />
}