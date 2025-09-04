"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const supplierData = [
  { name: "ENDESA HOGAR", value: 47, percentage: "47%", color: "#36D7B7" },
  { name: "NATURGY", value: 22, percentage: "22%", color: "#4CAF50" },
  { name: "PLENITUDE", value: 19, percentage: "19%", color: "#8BC34A" },
  { name: "ENDESA PYME", value: 3, percentage: "3%", color: "#36D7B7" },
  { name: "GANA", value: 3, percentage: "3%", color: "#9E9E9E" },
  { name: "TOTAL PYME", value: 2, percentage: "2%", color: "#8BC34A" },
  { name: "NATURGY PYME", value: 2, percentage: "2%", color: "#4CAF50" },
  { name: "IBERDROLA", value: 1, percentage: "1%", color: "#2196F3" },
  { name: "REPSOL", value: 0, percentage: "0%", color: "#FF5722" },
  { name: "UNIELECTRICA", value: 0, percentage: "0%", color: "#FF9800" },
  { name: "GALP", value: 0, percentage: "0%", color: "#FFC107" },
];

const sortedData = [...supplierData].sort((a, b) => b.value - a.value);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-content1 p-3 rounded-md shadow-md border border-default-200">
        <p className="font-medium">{data.name}</p>
        <p className="text-sm">
          <span className="font-semibold">Porcentaje:</span> {data.percentage}
        </p>
      </div>
    );
  }
  return null;
};

const ContractsNations = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg ">
      <h3 className="text-lg font-medium mb-4">RESUMEN COMERCIALIZADORAS</h3>

      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              type="number"
              domain={[0, 50]}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 12 }}
              width={100}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {sortedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedData
          .filter((item) => item.value > 0)
          .map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-foreground-600">
                {item.name}: {item.percentage}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContractsNations;
