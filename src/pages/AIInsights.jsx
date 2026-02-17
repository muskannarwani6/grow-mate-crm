import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Upload,
    FileText,
    BarChart as BarChartIcon,
    PieChart as PieChartIcon,
    LineChart as LineChartIcon,
    Brain,
    Zap,
    Table as TableIcon,
    AlertCircle,
    CheckCircle2,
    RefreshCcw,
    X,
    TrendingUp
} from 'lucide-react';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell
} from 'recharts';

const AIInsights = () => {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [numericColumns, setNumericColumns] = useState([]);
    const [labelColumn, setLabelColumn] = useState("");
    const [fileName, setFileName] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [chartType, setChartType] = useState('bar'); // 'bar', 'line', 'pie'

    const COLORS = ['#2563eb', '#4f46e5', '#8b5cf6', '#d946ef', '#f43f5e', '#f97316'];

    const resetState = () => {
        setData([]);
        setHeaders([]);
        setNumericColumns([]);
        setLabelColumn("");
        setFileName("");
        setError("");
        setSuccessMessage("");
        setIsAnalyzing(false);
    };

    const processData = (rawData) => {
        if (!rawData || rawData.length === 0) {
            setError("The uploaded file appears to be empty.");
            setIsAnalyzing(false);
            return;
        }

        // Clean and normalize data
        const cleanValue = (val) => {
            if (val === null || val === undefined) return 0;
            if (typeof val === 'number') return val;
            if (typeof val !== 'string') return val;

            const cleaned = val.replace(/[$,₹,€,£,%, ]/g, '').replace(/,/g, '');
            const num = parseFloat(cleaned);
            return !isNaN(num) ? num : val;
        };

        const normalizedData = rawData.map(row => {
            const newRow = {};
            Object.keys(row).forEach(key => {
                newRow[key] = cleanValue(row[key]);
            });
            return newRow;
        });

        const keys = Object.keys(normalizedData[0]);
        const numCols = keys.filter(h => {
            return normalizedData.some(row => typeof row[h] === 'number');
        });

        // Detect if any column looks like a date or time-based data
        const hasTimeData = keys.some(h => {
            const val = String(normalizedData[0][h]).toLowerCase();
            return val.includes('date') || val.includes('year') || val.includes('month') || val.includes('time') || /^\d{4}-\d{2}-\d{2}$/.test(val);
        });

        const labelCol = keys.find(h => !numCols.includes(h)) || keys[0];

        setData(normalizedData);
        setHeaders(keys);
        setNumericColumns(numCols);
        setLabelColumn(labelCol);
        setChartType(hasTimeData ? 'line' : 'bar');

        setTimeout(() => {
            setIsAnalyzing(false);
            setSuccessMessage("File uploaded and processed successfully!");
        }, 1000);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const fileExt = file.name.split('.').pop().toLowerCase();
        setFileName(file.name);
        setIsAnalyzing(true);
        setError("");
        setSuccessMessage("");

        const reader = new FileReader();

        if (fileExt === 'csv') {
            reader.onload = (evt) => {
                const text = evt.target.result;
                Papa.parse(text, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        processData(results.data);
                    },
                    error: (err) => {
                        setError("Error parsing CSV: " + err.message);
                        setIsAnalyzing(false);
                    }
                });
            };
            reader.readAsText(file);
        } else if (fileExt === 'xlsx' || fileExt === 'xls') {
            reader.onload = (evt) => {
                try {
                    const data = new Uint8Array(evt.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const json = XLSX.utils.sheet_to_json(worksheet);
                    processData(json);
                } catch (err) {
                    setError("Error parsing Excel: " + err.message);
                    setIsAnalyzing(false);
                }
            };
            reader.readAsArrayBuffer(file);
        } else {
            setError("Unsupported file format. Please upload .csv, .xlsx, or .xls");
            setIsAnalyzing(false);
        }

        // Reset input value to allow re-uploading the same file
        e.target.value = '';
    };

    // Slice data for chart to avoid performance issues with huge datasets
    const chartData = data.slice(0, 15);

    return (
        <div className="pt-24 min-h-screen bg-neutral-50 pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-100"
                    >
                        <Brain size={16} className="animate-pulse" />
                        <span>Advanced Data Analytics</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Grow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smarter</span> with AI
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Drop your sales data or customer sheets here. We'll instantly transform them into beautiful, actionable visualizations and insights.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Control Panel */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900 flex items-center">
                                    <Upload className="mr-2 text-blue-600" size={20} />
                                    Data Source
                                </h3>
                                {data.length > 0 && (
                                    <button
                                        onClick={resetState}
                                        className="p-2 hover:bg-red-50 text-red-500 rounded-xl transition-colors"
                                        title="Clear data"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>

                            {!fileName ? (
                                <label className="relative block border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group overflow-hidden">
                                    <input
                                        type="file"
                                        accept=".xlsx, .xls, .csv"
                                        onChange={handleFileUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-none"
                                    />
                                    <div className="space-y-4">
                                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                            <FileText size={32} />
                                        </div>
                                        <div className="text-slate-600">
                                            <p className="font-bold text-lg">Upload Dataset</p>
                                            <p className="text-sm text-slate-400">CSV or Excel files only</p>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                                </label>
                            ) : (
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                                            <FileText size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-slate-900 truncate">{fileName}</p>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider">{data.length} Records Found</p>
                                        </div>
                                        <CheckCircle2 className="text-green-500" size={20} />
                                    </div>
                                    <button
                                        onClick={() => document.querySelector('input[type="file"]').click()}
                                        className="w-full py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-50 transition-all text-sm"
                                    >
                                        <RefreshCcw size={16} />
                                        <span>Change File</span>
                                    </button>
                                    <input
                                        type="file"
                                        accept=".xlsx, .xls, .csv"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                </div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-4 p-4 bg-red-50 rounded-2xl flex items-start space-x-3 border border-red-100"
                                >
                                    <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                                    <p className="text-sm text-red-600 font-medium">{error}</p>
                                </motion.div>
                            )}

                            {successMessage && !error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-4 p-4 bg-green-50 rounded-2xl flex items-center space-x-3 border border-green-100"
                                >
                                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={18} />
                                    <p className="text-sm text-green-600 font-bold">{successMessage}</p>
                                </motion.div>
                            )}
                        </motion.div>

                        {data.length > 0 && !isAnalyzing && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl shadow-2xl"
                            >
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-2 bg-blue-500/20 rounded-lg">
                                        <Zap className="text-blue-400" size={18} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-tight">Quick Stats</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Rows</p>
                                        <p className="text-2xl font-black text-white">{data.length}</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Metrics</p>
                                        <p className="text-2xl font-black text-white">{numericColumns.length}</p>
                                    </div>
                                </div>
                                <div className="mt-4 p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-900/40 relative overflow-hidden group cursor-pointer">
                                    <div className="relative z-10 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest mb-1">Quality Score</p>
                                            <p className="text-2xl font-black text-white italic">Excellent</p>
                                        </div>
                                        <TrendingUp className="text-white/40 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" size={40} />
                                    </div>
                                    <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Right: Visualization & Data */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            {isAnalyzing ? (
                                <motion.div
                                    key="analyzing"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white p-20 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center justify-center text-center space-y-8 min-h-[500px]"
                                >
                                    <div className="relative">
                                        <div className="w-32 h-32 border-[6px] border-slate-50 border-t-blue-600 rounded-full animate-spin"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Brain className="text-blue-600 animate-pulse" size={48} />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-3xl font-black text-slate-900">Crunching Your Data...</h2>
                                        <p className="text-slate-400 max-w-sm text-lg leading-relaxed">Our AI is identifying patterns, normalizing fields, and crafting the perfect charts for you.</p>
                                    </div>
                                </motion.div>
                            ) : data.length > 0 ? (
                                <motion.div
                                    key="visualization"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-8"
                                >
                                    {/* Main Chart Card */}
                                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/30">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                                    {chartType === 'bar' ? <BarChartIcon size={24} /> : chartType === 'line' ? <LineChartIcon size={24} /> : <PieChartIcon size={24} />}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-slate-900 leading-tight">Dynamic Insights</h3>
                                                    <p className="text-sm text-slate-400 font-medium">Auto-generated based on first {chartData.length} records</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center bg-slate-50 p-1.5 rounded-2xl border border-slate-100 self-start md:self-center">
                                                <button
                                                    onClick={() => setChartType('bar')}
                                                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${chartType === 'bar' ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
                                                >
                                                    Bar
                                                </button>
                                                <button
                                                    onClick={() => setChartType('line')}
                                                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${chartType === 'line' ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
                                                >
                                                    Line
                                                </button>
                                                <button
                                                    onClick={() => setChartType('pie')}
                                                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${chartType === 'pie' ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
                                                >
                                                    Pie
                                                </button>
                                            </div>
                                        </div>

                                        <div className="h-[450px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                {chartType === 'bar' ? (
                                                    <BarChart data={chartData}>
                                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                                        <XAxis
                                                            dataKey={labelColumn}
                                                            stroke="#94a3b8"
                                                            fontSize={12}
                                                            tickLine={false}
                                                            axisLine={false}
                                                            dy={10}
                                                        />
                                                        <YAxis
                                                            stroke="#94a3b8"
                                                            fontSize={12}
                                                            tickLine={false}
                                                            axisLine={false}
                                                        />
                                                        <Tooltip
                                                            contentStyle={{
                                                                backgroundColor: 'white',
                                                                borderRadius: '20px',
                                                                border: 'none',
                                                                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                                                                padding: '16px'
                                                            }}
                                                            cursor={{ fill: '#f8fafc' }}
                                                        />
                                                        <Legend verticalAlign="top" height={36} iconType="circle" />
                                                        {numericColumns.slice(0, 3).map((col, idx) => (
                                                            <Bar
                                                                key={col}
                                                                dataKey={col}
                                                                fill={COLORS[idx % COLORS.length]}
                                                                radius={[6, 6, 0, 0]}
                                                                barSize={32}
                                                            />
                                                        ))}
                                                    </BarChart>
                                                ) : chartType === 'line' ? (
                                                    <LineChart data={chartData}>
                                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                                        <XAxis
                                                            dataKey={labelColumn}
                                                            stroke="#94a3b8"
                                                            fontSize={12}
                                                            tickLine={false}
                                                            axisLine={false}
                                                            dy={10}
                                                        />
                                                        <YAxis
                                                            stroke="#94a3b8"
                                                            fontSize={12}
                                                            tickLine={false}
                                                            axisLine={false}
                                                        />
                                                        <Tooltip
                                                            contentStyle={{
                                                                backgroundColor: 'white',
                                                                borderRadius: '20px',
                                                                border: 'none',
                                                                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                                                                padding: '16px'
                                                            }}
                                                        />
                                                        <Legend verticalAlign="top" height={36} iconType="circle" />
                                                        {numericColumns.slice(0, 3).map((col, idx) => (
                                                            <Line
                                                                key={col}
                                                                type="monotone"
                                                                dataKey={col}
                                                                stroke={COLORS[idx % COLORS.length]}
                                                                strokeWidth={4}
                                                                dot={{ r: 6, fill: 'white', strokeWidth: 3 }}
                                                                activeDot={{ r: 8 }}
                                                            />
                                                        ))}
                                                    </LineChart>
                                                ) : (
                                                    <PieChart>
                                                        <Pie
                                                            data={chartData}
                                                            innerRadius={110}
                                                            outerRadius={150}
                                                            paddingAngle={8}
                                                            dataKey={numericColumns[0] || headers[1]}
                                                            nameKey={labelColumn}
                                                        >
                                                            {chartData.map((entry, index) => (
                                                                <Cell
                                                                    key={`cell-${index}`}
                                                                    fill={COLORS[index % COLORS.length]}
                                                                    stroke="none"
                                                                />
                                                            ))}
                                                        </Pie>
                                                        <Tooltip
                                                            contentStyle={{
                                                                backgroundColor: 'white',
                                                                borderRadius: '20px',
                                                                border: 'none',
                                                                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                                                                padding: '16px'
                                                            }}
                                                        />
                                                        <Legend />
                                                    </PieChart>
                                                )}
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    {/* Table Preview */}
                                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/30 overflow-hidden">
                                        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-slate-50 text-slate-600 rounded-xl">
                                                    <TableIcon size={20} />
                                                </div>
                                                <h3 className="text-xl font-black text-slate-900">Dataset Preview</h3>
                                            </div>
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">Showing First 10 Rows</span>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-slate-50/50">
                                                        {headers.map(h => (
                                                            <th key={h} className="py-5 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">{h}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.slice(0, 10).map((row, i) => (
                                                        <tr key={i} className="group hover:bg-slate-50/50 transition-all">
                                                            {headers.map(h => (
                                                                <td key={h} className="py-5 px-6 text-sm font-medium text-slate-600 border-b border-slate-50 group-last:border-0">
                                                                    {typeof row[h] === 'number' ? row[h].toLocaleString() : String(row[h])}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white p-20 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-100/50 flex flex-col items-center justify-center text-center space-y-10 min-h-[600px] relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/50 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                                    <div className="relative">
                                        <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-200 rounded-[2rem] flex items-center justify-center rotate-12">
                                            <BarChartIcon size={48} />
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white text-blue-600 rounded-2xl shadow-xl flex items-center justify-center -rotate-12 border border-blue-50">
                                            <CheckCircle2 size={24} />
                                        </div>
                                    </div>

                                    <div className="space-y-4 relative z-10">
                                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Ready for Exploration?</h2>
                                        <p className="text-slate-400 max-w-sm text-lg leading-relaxed mx-auto italic">"Your data has a story to tell. Let us help you listen."</p>
                                    </div>

                                    <button
                                        onClick={() => document.querySelector('input[type="file"]').click()}
                                        className="py-4 px-10 bg-blue-600 text-white rounded-[1.5rem] font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all shadow-xl shadow-blue-200 flex items-center space-x-3"
                                    >
                                        <Upload size={20} />
                                        <span>Start Analyzing</span>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIInsights;
