interface Props {
  items: string[];
}

export default function TechTags({ items }: Props) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-line bg-base px-2.5 py-1 font-mono text-xs text-neutral-400"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
