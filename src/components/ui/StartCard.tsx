const StartCard = ({ amount, title }: StatsProps) => {
  return (
    <div className=" bg-white/20 text-gray-300 px-4 rounded-md shadow-inner flex flex-col items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="amount text-green-500 text-sm">{amount} Rwf</p>
    </div>
  );
};

export default StartCard;
