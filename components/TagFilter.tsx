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
      <h3
        className="text-xs font-medium mb-3"
        style={{
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange('')}
          className="px-3 py-1.5 text-sm rounded-md transition-all"
          style={{
            background: !selected ? 'var(--primary)' : 'var(--surface)',
            color: !selected ? 'var(--surface)' : 'var(--text-muted)',
            border: `1px solid ${!selected ? 'var(--primary)' : 'var(--border-light)'}`,
          }}
        >
          全部
        </button>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className="px-3 py-1.5 text-sm rounded-md transition-all"
            style={{
              background: selected === option ? 'var(--primary)' : 'var(--surface)',
              color: selected === option ? 'var(--surface)' : 'var(--text-muted)',
              border: `1px solid ${selected === option ? 'var(--primary)' : 'var(--border-light)'}`,
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
