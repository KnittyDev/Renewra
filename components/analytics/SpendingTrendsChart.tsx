'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'May', value: 2800 },
  { month: 'Jun', value: 3200 },
  { month: 'Jul', value: 2900 },
  { month: 'Aug', value: 3500 },
  { month: 'Sep', value: 3100 },
  { month: 'Oct', value: 3800 },
];

export default function SpendingTrendsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100 flex flex-col justify-between min-h-[400px]"
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Spending Trends</h3>
          <p className="text-sm text-slate-400 mt-1">Total spend over the last 6 months</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary"></span>
          <span className="text-xs font-medium text-slate-600">Total Spend</span>
        </div>
      </div>
      <div className="relative h-64 w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 10, left: 10, bottom: 20 }}
          >
            <defs>
              <linearGradient id="gradientAreaMain" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#13eccf" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#13eccf" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
              tickMargin={8}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#cbd5e1', fontSize: 10, fontWeight: 500 }}
              tickMargin={8}
              tickFormatter={(value) => {
                if (value >= 1000) return `€${(value / 1000).toFixed(1)}k`;
                return `€${value}`;
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px 12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
              }}
              labelStyle={{ color: '#64748b', fontSize: '12px', fontWeight: 600 }}
              formatter={(value: number) => [`€${value.toLocaleString()}`, 'Spend']}
              cursor={{ stroke: '#13eccf', strokeWidth: 2, strokeDasharray: '5 5' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#13eccf"
              strokeWidth={3}
              fill="url(#gradientAreaMain)"
              dot={{ fill: '#ffffff', stroke: '#13eccf', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: '#13eccf', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
