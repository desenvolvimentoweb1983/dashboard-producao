type CardKPIProps = {
  title: string;
  value: string;
  type?: "producao" | "eficiencia" | "defeitos";
};

export default function CardKPI({ title, value, type }: CardKPIProps) {

  const getColor = () => {
    switch (type) {
      case "producao":
        return "text-success";
      case "eficiencia":
        return "text-primary";
      case "defeitos":
        return "text-danger";
      default:
        return "";
    }
  };

  return (
    <div className="card">
      <p className="kpi-title">{title}</p>
      <h2 className={`kpi-value ${getColor()}`}>{value}</h2>
    </div>
  );
}