export type TextBlockProps = {
  title: string;
  text: string;
  className?: string;
};

const TextBlock = ({ text, title, className }: TextBlockProps) => {
  return (
    <div
      className={`
        flex flex-col justify-center items-start py-6 pr-5 pl-8 gap-3 bg-dark rounded-md
        ${className}
      `}
    >
      <h1 className="text-gray-primary text-xxl font-extrabold">{title}</h1>
      <p className="text-gray-primary text-md">{text}</p>
    </div>
  );
};

export default TextBlock;
