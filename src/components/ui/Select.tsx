type Props = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export default function Select({ value, onChange, options }: Props) {
  return (
    <select
      className="border rounded px-3 py-2 bg-white"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}