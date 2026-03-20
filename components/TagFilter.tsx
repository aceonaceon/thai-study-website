'use client';

interface TagFilterProps {
  label: string;
  options: string[];
  selected?: string;
  onChange: (value: string) => void;
}

export default function TagFilter({
  label,
  options,
  selected,
  onChange,
}: TagFilterProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-foreground mb-3">{label}</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange('')}
          className={`px-3 py-1.5 text-sm rounded-full transition-all ${
            !selected
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-muted hover:bg-gray-200'
          }`}
        >
          全部
        </button>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-3 py-1.5 text-sm rounded-full transition-all ${
              selected === option
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-muted hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
