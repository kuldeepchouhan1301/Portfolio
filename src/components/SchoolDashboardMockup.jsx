import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  FileSpreadsheet, 
  Download, 
  CheckCircle2, 
  Database, 
  Lock
} from 'lucide-react';

export default function SchoolDashboardMockup() {
  const [activeTab, setActiveTab] = useState('admissions');
  const [isSyncing, setIsSyncing] = useState(false);
  const [synced, setSynced] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSynced(true);
      setTimeout(() => setSynced(false), 3000);
    }, 1000);
  };

  const sampleAdmissions = [
    { id: "ADM-2026-089", name: "Rahul Sharma", grade: "Class X", date: "24 Sep 2026", status: "Approved", doc: "Verified" },
    { id: "ADM-2026-090", name: "Priya Verma", grade: "Class XII (Sci)", date: "24 Sep 2026", status: "Approved", doc: "Verified" },
    { id: "ADM-2026-091", name: "Aman Gupta", grade: "Class IX", date: "23 Sep 2026", status: "Pending Review", doc: "Uploaded" },
    { id: "ADM-2026-092", name: "Ananya Mehta", grade: "Class XI (Com)", date: "22 Sep 2026", status: "Approved", doc: "Verified" },
  ];

  const sampleResults = [
    { roll: "1024", name: "Rahul Sharma", class: "X-A", percentage: "94.2%", grade: "A+", result: "Pass" },
    { roll: "1025", name: "Priya Verma", class: "XII-Sci", percentage: "96.8%", grade: "A+", result: "Pass" },
    { roll: "1026", name: "Aman Gupta", class: "IX-B", percentage: "88.5%", grade: "A", result: "Pass" },
  ];

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-[#0A0D14] shadow-2xl overflow-hidden font-sans text-xs sm:text-sm">
      
      {/* Top Application Bar */}
      <div className="bg-[#0F131D] border-b border-slate-800 p-3 sm:p-4 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">
            MB
          </div>
          <div>
            <div className="flex items-center space-x-2 flex-wrap">
              <h4 className="font-semibold text-slate-100 text-xs sm:text-sm">MBVM School Management System</h4>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                Production Live
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400">PHP 8.2 • MySQL Database • Google Sheets API Integration</p>
          </div>
        </div>

        {/* Sync Button & Live Indicator */}
        <div className="flex items-center space-x-2 w-full xs:w-auto">
          <button
            onClick={handleSync}
            disabled={isSyncing}
            className="w-full xs:w-auto flex items-center justify-center space-x-1.5 px-3 py-2 min-h-[40px] rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-medium transition-all active:scale-95 disabled:opacity-50"
          >
            <FileSpreadsheet size={14} className={isSyncing ? "animate-spin" : ""} />
            <span>{isSyncing ? "Syncing API..." : synced ? "Synced with Sheets!" : "Sync Sheets"}</span>
          </button>
        </div>
      </div>

      {/* Navigation Modules Header - Touch friendly horizontal scroll */}
      <div className="bg-[#0C0F17] border-b border-slate-800/80 px-2 sm:px-4 flex space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar text-xs">
        <button
          onClick={() => setActiveTab('admissions')}
          className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 font-medium transition-colors whitespace-nowrap min-h-[44px] ${
            activeTab === 'admissions'
              ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users size={14} />
          <span>Admissions Module</span>
        </button>
        <button
          onClick={() => setActiveTab('results')}
          className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 font-medium transition-colors whitespace-nowrap min-h-[44px] ${
            activeTab === 'results'
              ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <GraduationCap size={14} />
          <span>Results & Marks</span>
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 font-medium transition-colors whitespace-nowrap min-h-[44px] ${
            activeTab === 'events'
              ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Calendar size={14} />
          <span>Events & Circulars</span>
        </button>
        <button
          onClick={() => setActiveTab('admin')}
          className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 font-medium transition-colors whitespace-nowrap min-h-[44px] ${
            activeTab === 'admin'
              ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Lock size={14} />
          <span>Admin Control Panel</span>
        </button>
      </div>

      {/* Main Stats Summary Cards */}
      <div className="p-3 sm:p-5 bg-[#080A0F]">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          <div className="p-3 rounded-xl bg-[#0F131C] border border-slate-800">
            <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Active Modules</span>
            <span className="text-base sm:text-lg font-bold text-slate-100 mt-0.5 block">10+ Deployed</span>
            <span className="text-[10px] text-emerald-400 flex items-center mt-1">
              <CheckCircle2 size={11} className="mr-1 shrink-0" /> Operational
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#0F131C] border border-slate-800">
            <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Database System</span>
            <span className="text-base sm:text-lg font-bold text-slate-100 mt-0.5 block">MySQL Relational</span>
            <span className="text-[10px] text-sky-400 flex items-center mt-1">
              <Database size={11} className="mr-1 shrink-0" /> Normalized Schema
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#0F131C] border border-slate-800">
            <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Data Pipeline</span>
            <span className="text-base sm:text-lg font-bold text-slate-100 mt-0.5 block">Google Sheets Sync</span>
            <span className="text-[10px] text-emerald-400 flex items-center mt-1">
              <FileSpreadsheet size={11} className="mr-1 shrink-0" /> Auto Backup
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#0F131C] border border-slate-800">
            <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Export Formats</span>
            <span className="text-base sm:text-lg font-bold text-slate-100 mt-0.5 block">CSV / PDF Ready</span>
            <span className="text-[10px] text-indigo-400 flex items-center mt-1">
              <Download size={11} className="mr-1 shrink-0" /> Automated Reports
            </span>
          </div>
        </div>

        {/* Tab Content Preview */}
        {activeTab === 'admissions' && (
          <div className="rounded-xl border border-slate-800 bg-[#0D111A] overflow-hidden">
            <div className="p-3 bg-[#111622] border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Users size={15} className="text-emerald-400 shrink-0" />
                <span className="font-semibold text-slate-200">Recent Online Admissions</span>
              </div>
              <span className="text-[11px] text-slate-400 hidden xs:inline">Total Entries: 140+</span>
            </div>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left text-xs min-w-[500px]">
                <thead className="bg-[#090C12] text-slate-400 border-b border-slate-800/80">
                  <tr>
                    <th className="p-2.5 font-medium">Application ID</th>
                    <th className="p-2.5 font-medium">Student Name</th>
                    <th className="p-2.5 font-medium">Grade</th>
                    <th className="p-2.5 font-medium">Date</th>
                    <th className="p-2.5 font-medium">Docs</th>
                    <th className="p-2.5 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-slate-300">
                  {sampleAdmissions.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-2.5 font-mono text-emerald-400 font-medium">{row.id}</td>
                      <td className="p-2.5 font-semibold text-slate-100">{row.name}</td>
                      <td className="p-2.5">{row.grade}</td>
                      <td className="p-2.5 text-slate-400">{row.date}</td>
                      <td className="p-2.5">
                        <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {row.doc}
                        </span>
                      </td>
                      <td className="p-2.5 text-right">
                        <span
                          className={`px-2 py-0.5 text-[10px] rounded-full font-medium ${
                            row.status === 'Approved'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="rounded-xl border border-slate-800 bg-[#0D111A] overflow-hidden">
            <div className="p-3 bg-[#111622] border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <GraduationCap size={15} className="text-emerald-400 shrink-0" />
                <span className="font-semibold text-slate-200">Academic Examination Results</span>
              </div>
              <span className="text-[11px] text-slate-400 hidden xs:inline">Session 2025-2026</span>
            </div>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left text-xs min-w-[500px]">
                <thead className="bg-[#090C12] text-slate-400 border-b border-slate-800/80">
                  <tr>
                    <th className="p-2.5 font-medium">Roll No</th>
                    <th className="p-2.5 font-medium">Student Name</th>
                    <th className="p-2.5 font-medium">Class</th>
                    <th className="p-2.5 font-medium">Percentage</th>
                    <th className="p-2.5 font-medium">Grade</th>
                    <th className="p-2.5 font-medium text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-slate-300">
                  {sampleResults.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-2.5 font-mono text-slate-400">{row.roll}</td>
                      <td className="p-2.5 font-semibold text-slate-100">{row.name}</td>
                      <td className="p-2.5">{row.class}</td>
                      <td className="p-2.5 font-bold text-emerald-400">{row.percentage}</td>
                      <td className="p-2.5">{row.grade}</td>
                      <td className="p-2.5 text-right">
                        <span className="px-2 py-0.5 text-[10px] rounded-full font-medium bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                          {row.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0D111A] text-slate-300 space-y-3">
            <h5 className="font-semibold text-slate-200 text-xs sm:text-sm flex items-center space-x-2">
              <Calendar size={15} className="text-emerald-400 shrink-0" />
              <span>Event & Announcement Management Module</span>
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Provides dynamic CRUD workflows for publishing school calendar updates, sports day schedules, and downloadable administrative circulars directly to the student portal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-lg bg-[#080A0F] border border-slate-800">
                <span className="text-emerald-400 text-xs font-semibold block">Annual Sports Day 2026</span>
                <span className="text-[11px] text-slate-400">Published by Admin • Oct 15, 2026</span>
              </div>
              <div className="p-3 rounded-lg bg-[#080A0F] border border-slate-800">
                <span className="text-emerald-400 text-xs font-semibold block">BCA Academic Exhibition</span>
                <span className="text-[11px] text-slate-400">Published by Admin • Nov 02, 2026</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'admin' && (
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0D111A] text-slate-300 space-y-3">
            <h5 className="font-semibold text-slate-200 text-xs sm:text-sm flex items-center space-x-2">
              <Lock size={15} className="text-emerald-400 shrink-0" />
              <span>Admin Authentication & System Privileges</span>
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Role-based admin dashboard with session handling, CSRF protection, file upload security, and MySQL database backups.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">PHP Password Hashing</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">MySQLi Prepared Statements</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">File MIME Type Validation</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[11px]">Google Sheets API OAuth</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="px-3 sm:px-4 py-2 bg-[#090B12] border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-sans">
        <span className="flex items-center truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1.5 shrink-0"></span>
          <span className="truncate">madhusudanschoolmungthala.co.in</span>
        </span>
        <span className="hidden sm:inline text-slate-400 font-mono">10+ Modules • PHP / MySQL</span>
      </div>

    </div>
  );
}
