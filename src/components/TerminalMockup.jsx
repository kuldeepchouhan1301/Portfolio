import React, { useState } from 'react';
import { Terminal as TerminalIcon, Code, Play, Copy, Check, Server, Shield, Database } from 'lucide-react';

export default function TerminalMockup() {
  const [activeTab, setActiveTab] = useState('views.py');
  const [copied, setCopied] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [outputLog, setOutputLog] = useState([
    { type: 'sys', text: '$ python manage.py runserver 0.0.0.0:8000' },
    { type: 'success', text: 'Django v5.0.2 backend running on http://127.0.0.1:8000/' },
    { type: 'info', text: 'System check identified 0 issues (0 silenced).' },
    { type: 'api', text: 'GET /api/v1/projects/ 200 OK [18ms]' },
  ]);

  const handleRunApi = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setOutputLog((prev) => [
        ...prev,
        { type: 'sys', text: '$ curl -X GET https://api.kuldeep.dev/v1/healthcheck' },
        { type: 'success', text: '{"status": "healthy", "service": "Django REST API", "database": "Connected (MySQL)", "uptime": "99.98%"}' },
      ]);
      setIsExecuting(false);
    }, 600);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    'views.py': `# Django REST API Viewset for Scalable Backend Services
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import ApplicationRecord, SecurityAudit
from .serializers import ApplicationSerializer

class ApplicationListAPI(APIView):
    """
    Production-ready REST Endpoint for application data pipeline.
    Includes authentication, validation & optimized DB queries.
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        queryset = ApplicationRecord.objects.select_related(
            'academic_year'
        ).filter(is_active=True).order_by('-created_at')
        
        serializer = ApplicationSerializer(queryset, many=True)
        return Response({
            "status": "success",
            "count": queryset.count(),
            "data": serializer.data
        }, status=status.HTTP_200_OK)`,

    'models.py': `# Django ORM Data Architecture definition
from django.db import models
from django.contrib.auth.models import User

class ApplicationRecord(models.Model):
    student_name = models.CharField(max_length=150, db_index=True)
    enrollment_no = models.CharField(max_length=50, unique=True)
    department = models.CharField(max_length=100)
    status = models.CharField(
        max_length=20, 
        choices=[('PENDING', 'Pending'), ('VERIFIED', 'Verified')],
        default='PENDING'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'app_records'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.student_name} ({self.enrollment_no})"`
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-[#0B0E14] shadow-2xl code-glow font-mono text-xs max-w-full">
      
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#0F131C] border-b border-slate-800/80">
        <div className="flex items-center space-x-2 overflow-hidden">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shrink-0"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 shrink-0"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 shrink-0"></div>
          <span className="ml-1 text-[11px] sm:text-xs font-sans text-slate-400 font-medium truncate max-w-[150px] xs:max-w-[220px] sm:max-w-none">
            kuldeep@backend-node-01: ~/django_api
          </span>
        </div>

        <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-sans shrink-0">
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs">Django Active</span>
          </div>
        </div>
      </div>

      {/* Tabs bar */}
      <div className="flex flex-wrap items-center justify-between px-2 bg-[#0C0F17] border-b border-slate-800 text-xs gap-1">
        <div className="flex space-x-1 overflow-x-auto py-1 max-w-full">
          <button
            onClick={() => setActiveTab('views.py')}
            className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-t-md transition-colors min-h-[36px] ${
              activeTab === 'views.py'
                ? 'bg-[#151B28] text-brand-python border-t-2 border-brand-python font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Code size={13} className="text-brand-python" />
            <span className="text-[11px] sm:text-xs">views.py</span>
          </button>
          
          <button
            onClick={() => setActiveTab('models.py')}
            className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-t-md transition-colors min-h-[36px] ${
              activeTab === 'models.py'
                ? 'bg-[#151B28] text-brand-django border-t-2 border-brand-django font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Database size={13} className="text-brand-django" />
            <span className="text-[11px] sm:text-xs">models.py</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-t-md transition-colors min-h-[36px] ${
              activeTab === 'terminal'
                ? 'bg-[#151B28] text-amber-400 border-t-2 border-amber-400 font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <TerminalIcon size={13} className="text-amber-400" />
            <span className="text-[11px] sm:text-xs">Terminal</span>
          </button>
        </div>

        {/* Copy / Run Actions */}
        <div className="flex items-center space-x-1.5 py-1">
          {activeTab !== 'terminal' && (
            <button
              onClick={() => handleCopyCode(codeSnippets[activeTab])}
              className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Copy code snippet"
              title="Copy snippet"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          )}
          <button
            onClick={handleRunApi}
            disabled={isExecuting}
            className="flex items-center space-x-1 px-2.5 py-1.5 text-[11px] sm:text-xs bg-brand-primary/20 hover:bg-brand-primary/30 text-indigo-300 border border-indigo-500/30 rounded-lg transition-all active:scale-95 disabled:opacity-50 min-h-[36px]"
          >
            <Play size={12} className={isExecuting ? "animate-spin" : ""} />
            <span>{isExecuting ? "Testing..." : "Test Endpoint"}</span>
          </button>
        </div>
      </div>

      {/* Code / Terminal Content Area */}
      <div className="p-3 sm:p-4 min-h-[220px] sm:min-h-[270px] max-h-[320px] overflow-y-auto bg-[#0A0D14] font-mono text-slate-300 leading-relaxed text-[11px] sm:text-xs md:text-[13px]">
        {activeTab !== 'terminal' ? (
          <div className="overflow-x-auto w-full">
            <pre className="whitespace-pre text-slate-200 min-w-full">
              {codeSnippets[activeTab].split('\n').map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pr-3 text-slate-600 select-none text-right text-[10px] sm:text-xs">{idx + 1}</span>
                  <span className="table-cell">{highlightPython(line)}</span>
                </div>
              ))}
            </pre>
          </div>
        ) : (
          <div className="space-y-2">
            {outputLog.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-slate-600 select-none">{'>'}</span>
                <div
                  className={`break-all ${
                    item.type === 'success'
                      ? 'text-emerald-400'
                      : item.type === 'api'
                      ? 'text-sky-400 font-semibold'
                      : item.type === 'sys'
                      ? 'text-indigo-300'
                      : 'text-slate-300'
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}
            <div className="flex items-center space-x-2 text-slate-400 pt-2 border-t border-slate-800/60">
              <span className="inline-block w-2 h-4 bg-brand-python animate-pulse"></span>
              <span className="text-slate-500 text-[11px] font-sans">Ready for API requests...</span>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-3 sm:px-4 py-2 bg-[#090C12] border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-sans">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <Server size={12} className="text-emerald-400" />
            <span>Python 3.11</span>
          </span>
          <span className="flex items-center space-x-1">
            <Shield size={12} className="text-sky-400" />
            <span>REST Auth</span>
          </span>
        </div>
        <div className="hidden xs:block font-mono">
          UTF-8 | LF
        </div>
      </div>
    </div>
  );
}

function highlightPython(line) {
  if (line.trim().startsWith('#')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }
  if (line.includes('class ') || line.includes('def ')) {
    return (
      <span>
        {line.split(/(class |def )/).map((part, i) =>
          part === 'class ' || part === 'def ' ? (
            <span key={i} className="text-rose-400 font-bold">{part}</span>
          ) : (
            <span key={i} className="text-sky-300 font-semibold">{part}</span>
          )
        )}
      </span>
    );
  }
  if (line.includes('from ') || line.includes('import ')) {
    return <span className="text-purple-400 font-medium">{line}</span>;
  }
  if (line.includes('return ')) {
    return (
      <span>
        {line.split('return ').map((part, i) =>
          i === 0 ? part : <React.Fragment key={i}><span className="text-rose-400 font-bold">return </span>{part}</React.Fragment>
        )}
      </span>
    );
  }
  return <span>{line}</span>;
}
