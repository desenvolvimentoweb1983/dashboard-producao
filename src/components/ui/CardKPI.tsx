type Props = {
  title: string;
  value: string;
  type?: "producao" | "eficiencia" | "defeitos";
};

export default function CardKPI({ title, value, type }: Props) {
  const getColor = () => {
    switch (type) {
      case "producao":
        return "text-primary";
      case "eficiencia":
        return "text-success";
      case "defeitos":
        return "text-danger";
      default:
        return "";
    }
  };

  return (
    <div className="card fade-in">
      <p className="kpi-title">{title}</p>
      <h2 className={`kpi-value ${getColor()}`}>{value}</h2>
    </div>
  );
}