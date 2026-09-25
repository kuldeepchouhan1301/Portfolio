import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, Terminal, MessageSquare, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error' | 'warning', text: string }

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatusMessage({
        type: 'error',
        text: 'Please enter a valid email address.'
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS keys are configured in environment variables
    if (!serviceId || !templateId || !publicKey) {
      // Fallback/Placeholder notice when keys are not configured yet
      setStatusMessage({
        type: 'warning',
        text: 'EmailJS keys are pending configuration in .env. Attempting direct mailto composer...'
      });
      
      const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Hi Kuldeep,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      subject: formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`,
      message: formData.message.trim(),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatusMessage({
        type: 'success',
        text: 'Message sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      setStatusMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative bg-[#080A0F] border-t border-slate-800/60">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-brand-primary/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 text-brand-python font-mono text-xs tracking-wider uppercase">
            <Terminal size={14} />
            <span>07. Contact & Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Let's build something useful.
          </p>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Available for Python Backend Developer roles, Django/Flask application development, and API engineering opportunities.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto reveal-on-scroll">
          
          {/* Left Column: Direct Contact Info Cards & Quick Copy */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Email Card */}
            <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover space-y-3 border border-slate-800">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-bold text-slate-100 hover:text-sky-300 transition-colors truncate block focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover space-y-3 border border-slate-800">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Phone Number</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-bold text-slate-100 hover:text-emerald-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl glass-card glass-card-hover border border-slate-800 flex items-center space-x-3 group min-h-[44px] focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-600/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform shrink-0">
                  <Linkedin size={18} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">LinkedIn</span>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-sky-400 transition-colors truncate block">
                    /in/kuldeep...
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl glass-card glass-card-hover border border-slate-800 flex items-center space-x-3 group min-h-[44px] focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform shrink-0">
                  <Github size={18} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">GitHub</span>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-sky-400 transition-colors truncate block">
                    @kuldeep...
                  </span>
                </div>
              </a>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 font-mono">
              📍 Based in Abu Road, Rajasthan • Open to Remote & Relocation Opportunities.
            </div>

          </div>

          {/* Right Column: EmailJS Functional Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border border-slate-800 space-y-5">
              <div className="flex items-center space-x-2 border-b border-slate-800 pb-4">
                <MessageSquare size={18} className="text-brand-python shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  Send Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-slate-400 uppercase">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Recruiter / Client"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSending}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-indigo-500 transition-colors text-xs disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-slate-400 uppercase">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSending}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-indigo-500 transition-colors text-xs disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-slate-400 uppercase">Subject (Optional)</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Python Backend Role / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={isSending}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-indigo-500 transition-colors text-xs disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-slate-400 uppercase">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Hello Kuldeep, I checked out your portfolio and would like to connect..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSending}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-indigo-500 transition-colors text-xs resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-brand-primary via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={16} className="animate-spin text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Inline Toast Status Feedback */}
                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl border text-xs font-mono flex items-start space-x-2.5 transition-all animate-fadeIn ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                        : statusMessage.type === 'warning'
                        ? 'bg-amber-950/80 border-amber-500/40 text-amber-300'
                        : 'bg-rose-950/80 border-rose-500/40 text-rose-300'
                    }`}
                  >
                    {statusMessage.type === 'success' ? (
                      <CheckCircle2 size={16} className="shrink-0 text-emerald-400 mt-0.5" />
                    ) : (
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    )}
                    <span className="leading-relaxed">{statusMessage.text}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
