import MiniProfileIconProp from "./MiniProfileIconProp";

export default function MiniProfileIcon(prop: MiniProfileIconProp) {
  const { src, alt } = prop;
  return (
    <div className="w-8 h-8 group-hover:cursor-pointer">
      <img className="rounded-md" src={src} alt={alt} />
    </div>
  );
}
