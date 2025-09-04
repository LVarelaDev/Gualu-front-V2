import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// Datos de ejemplo para los contratos
const contractData = [
  {
    name: "Contratos Temporales",
    value: 120,
    color: "#0088FE",
    percentage: 30,
  },
  {
    name: "Contratos en Trámite",
    value: 80,
    color: "#00C49F",
    percentage: 20,
  },
  {
    name: "Contratos Activos",
    value: 160,
    color: "#FFBB28",
    percentage: 40,
  },
  {
    name: "Contratos de Baja",
    value: 40,
    color: "#FF8042",
    percentage: 10,
  },
];

// Componente para mostrar cada tipo de contrato con su estadística
const ContractStatCard = ({
  name,
  value,
  percentage,
  color,
}: {
  name: string;
  value: number;
  percentage: number;
  color: string;
}) => (
  <div className="flex flex-col items-center p-4 bg-content1 rounded-lg border">
    <div className="w-full flex justify-between items-center mb-2">
      <span className="text-foreground-600 text-sm">{name}</span>
      <span
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-foreground-500 text-sm">{percentage}%</span>
    </div>
  </div>
);

// Componente para el tooltip personalizado
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-content1 p-3 rounded-md shadow-md border border-default-200">
        <p className="font-medium">{data.name}</p>
        <p className="text-sm">
          <span className="font-semibold">Cantidad:</span> {data.value}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Porcentaje:</span> {data.percentage}%
        </p>
      </div>
    );
  }
  return null;
};

export const ContractStatusCharts = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {contractData.map((item) => (
          <ContractStatCard
            key={item.name}
            name={item.name}
            value={item.value}
            percentage={item.percentage}
            color={item.color}
          />
        ))}
      </div>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={contractData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              label={({ name, percentage }) => `${name}: ${percentage}%`}
              labelLine={false}
            >
              {contractData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              formatter={(value) => (
                <span className="text-sm text-foreground-600">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
