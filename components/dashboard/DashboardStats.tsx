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
  { month: 'Jan', value: 235.50 },
  { month: 'Feb', value: 242.30 },
  { month: 'Mar', value: 238.90 },
  { month: 'Apr', value: 251.20 },
  { month: 'May', value: 247.60 },
  { month: 'Jun', value: 256.80 },
  { month: 'Jul', value: 253.40 },
  { month: 'Aug', value: 248.50 },
  { month: 'Sep', value: 255.70 },
  { month: 'Oct', value: 248.50 },
  { month: 'Nov', value: 0 },
  { month: 'Dec', value: 0 },
];

export default function DashboardStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100 flex flex-col justify-between min-h-[340px]"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <h3 className="text-slate-500 font-medium mb-1">Total Monthly Spend</h3>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">€248.50</span>
            <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-teal-600 text-sm font-bold">trending_up</span>
              <span className="text-xs font-bold text-teal-700">+2.9%</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Vs. last month (€241.50)</p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-slate-600">Total Budget</span>
                  <span className="text-xs font-bold text-slate-900">€300.00</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${(248.50 / 300) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {((248.50 / 300) * 100).toFixed(1)}% of budget used
                </p>
              </div>
            </div>
          </div>
        </div>
        <select className="bg-slate-50 border-none text-xs font-semibold text-slate-600 rounded-lg py-1.5 pl-3 pr-8 focus:ring-primary/50 cursor-pointer outline-none">
          <option>This Year</option>
          <option>Last 6 Months</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      {/* Chart */}
      <div className="relative h-48 w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#13eccf" stopOpacity={0.2} />
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
            <YAxis hide />
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
              strokeWidth={2}
              fill="url(#colorSpend)"
              dot={{ fill: '#ffffff', stroke: '#13eccf', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: '#13eccf', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
