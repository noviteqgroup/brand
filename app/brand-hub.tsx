'use client';

import { useState } from 'react';
import {
  ArrowDown, ArrowUpRight, Check, ChevronRight, Clipboard, Download,
  FileText, FormInput, Globe2, Image as ImageIcon, Mail, Menu, Palette,
  PanelTop, PenTool, Presentation, ShoppingBag, Sparkles, Type, UserCircle2, X,
} from 'lucide-react';

const nav = [
  ['Principles', 'principles'], ['Identity', 'identity'], ['Colour', 'colour'],
  ['Type', 'type'], ['Voice', 'voice'], ['Toolkit', 'tools'], ['Governance', 'governance'],
];

const colours = [
  { name: 'Signal Blue', hex: '#1686F8', rgb: '22 · 134 · 248', text: 'white' },
  { name: 'Electric Cyan', hex: '#49C8FF', rgb: '73 · 200 · 255', text: '#07101d' },
  { name: 'Deep Navy', hex: '#081B43', rgb: '8 · 27 · 67', text: 'white' },
  { name: 'Carbon', hex: '#07090D', rgb: '7 · 9 · 13', text: 'white' },
  { name: 'Cloud', hex: '#F3F5F7', rgb: '243 · 245 · 247', text: '#07101d' },
  { name: 'White', hex: '#FFFFFF', rgb: '255 · 255 · 255', text: '#07101d' },
];

const toolOptions = [
  { id: 'letterhead', title: 'Letterhead', desc: 'A4 company correspondence', icon: FileText },
  { id: 'signature', title: 'Email signature', desc: 'Responsive HTML signature', icon: Mail },
  { id: 'landing', title: 'Landing page', desc: 'Campaign-ready web section', icon: Globe2 },
  { id: 'email', title: 'Email template', desc: 'Announcement and nurture', icon: PanelTop },
  { id: 'store', title: 'Online store', desc: 'Product and category theme', icon: ShoppingBag },
  { id: 'social', title: 'Social post', desc: 'Square campaign creative', icon: ImageIcon },
  { id: 'profile', title: 'Profile branding', desc: 'Avatar and cover guidance', icon: UserCircle2 },
  { id: 'form', title: 'Form styling', desc: 'Accessible lead capture', icon: FormInput },
  { id: 'slides', title: 'Slide template', desc: '16:9 presentation system', icon: Presentation },
];

const toolMeta: Record<string, { label: string; size: string; copy: string }> = {
  letterhead: { label: 'Company letterhead', size: 'A4 · 210 × 297 mm', copy: 'Formal, clear and ready for business.' },
  signature: { label: 'Email signature', size: '600 × 180 px', copy: 'A consistent sign-off across every inbox.' },
  landing: { label: 'Landing page hero', size: 'Responsive · 1440 px', copy: 'Move faster. Stay secure. Own what’s next.' },
  email: { label: 'Marketing email', size: '600 px safe width', copy: 'Useful communication, delivered with clarity.' },
  store: { label: 'Store collection', size: 'Responsive commerce', copy: 'Technology chosen for work that matters.' },
  social: { label: 'Social post', size: '1080 × 1080 px', copy: 'Practical technology. Measurable progress.' },
  profile: { label: 'Profile system', size: 'Avatar + cover', copy: 'Recognisable at every scale.' },
  form: { label: 'Lead form', size: 'Responsive component', copy: 'Ask only what helps us take the next step.' },
  slides: { label: 'Presentation cover', size: '16:9 · 1920 × 1080 px', copy: 'Clarity for every room.' },
};

function Logo({ compact = false }: { compact?: boolean }) {
  return <div className="flex items-center gap-3">
    <img src="/noviteq-logo-primary.png" alt="" className="h-10 w-10 rounded-full object-cover object-top" />
    {!compact && <span className="text-[13px] font-semibold tracking-[.17em]">NOVITEQ <span className="text-[#1686f8]">BRAND</span></span>}
  </div>;
}

export default function BrandHub() {
  const [menu, setMenu] = useState(false);
  const [activeTool, setActiveTool] = useState('letterhead');
  const [name, setName] = useState('Thandi Mokoena');
  const [role, setRole] = useState('Technology Consultant');
  const [copied, setCopied] = useState('');
  const meta = toolMeta[activeTool];

  const copyValue = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied(''), 1400);
  };

  const downloadTemplate = () => {
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${meta.label} — Noviteq</title>
<style>body{font-family:Arial,sans-serif;margin:0;color:#07090d}.brand{color:#1686f8}.wrap{max-width:900px;margin:64px auto;padding:48px;border-top:6px solid #1686f8}h1{font-size:52px;letter-spacing:-2px}p{line-height:1.6;color:#495466}.footer{margin-top:140px;padding-top:24px;border-top:1px solid #dbe1e8;font-size:12px}</style></head>
<body><main class="wrap"><strong>NOVITEQ <span class="brand">SOLUTIONS</span></strong><h1>${meta.copy}</h1><p>Prepared by ${name}, ${role}.</p><div class="footer">noviteq-solutions.com · Johannesburg, South Africa · Brand Hub export</div></main></body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `noviteq-${activeTool}-template.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090d]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-12">
          <a href="#top" aria-label="Noviteq Brand Hub home"><Logo /></a>
          <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[.12em] text-white/58 lg:flex">
            {nav.map(([label, id]) => <a key={id} href={`#${id}`} className="transition hover:text-white">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#tools" className="hidden rounded-full bg-[#1686f8] px-4 py-2.5 text-xs font-semibold sm:inline-flex">Create an asset</a>
            <button aria-label="Toggle navigation" onClick={() => setMenu(!menu)} className="rounded-full border border-white/15 p-2.5 lg:hidden">{menu ? <X size={17} /> : <Menu size={17} />}</button>
          </div>
        </div>
        {menu && <nav className="grid border-t border-white/10 px-5 py-4 text-sm lg:hidden">{nav.map(([label, id]) => <a onClick={() => setMenu(false)} className="border-b border-white/8 py-3 text-white/70" key={id} href={`#${id}`}>{label}</a>)}</nav>}
      </header>

      <section id="top" className="relative mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-10 px-5 py-16 lg:grid-cols-[1.12fr_.88fr] lg:px-12">
        <div className="absolute left-[42%] top-[15%] h-80 w-80 rounded-full bg-[#006cff]/18 blur-[110px]" />
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.18em] text-[#49c8ff]"><Sparkles size={15} /> Brand system · 2026</div>
          <h1 className="max-w-4xl text-[clamp(4.2rem,8.5vw,8.25rem)] font-semibold leading-[.82] tracking-[-.07em]">Clarity,<br /><span className="text-[#1686f8]">built in.</span></h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-white/60">The identity system for Noviteq Solutions—built to keep every experience sharp, useful and unmistakably ours.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#principles" className="inline-flex items-center gap-2 rounded-full bg-[#1686f8] px-6 py-3.5 text-sm font-semibold">Explore the system <ArrowDown size={16} /></a>
            <a href="#tools" className="inline-flex items-center gap-2 rounded-full border border-white/16 px-6 py-3.5 text-sm font-semibold">Open the toolkit <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-12 rounded-full bg-[#047cff]/20 blur-3xl" />
          <img src="/noviteq-logo-energy.png" alt="Noviteq illuminated brand mark" className="relative z-10 w-full" />
        </div>
      </section>

      <section id="principles" className="bg-[#f3f5f7] px-5 py-24 text-[#07090d] lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
            <div><p className="eyebrow">01 · Brand idea</p><h2 className="mt-5 text-5xl font-semibold leading-[.95] tracking-[-.05em] lg:text-7xl">Practical<br />progress.</h2></div>
            <div>
              <p className="max-w-3xl text-3xl font-medium leading-[1.2] tracking-[-.025em] lg:text-5xl">Noviteq turns complex technology into clear, secure momentum for ambitious organisations.</p>
              <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-3">
                {[['Business first', 'Lead with the outcome, not the product.'], ['Security always', 'Build trust into every decision.'], ['Built to last', 'Transfer knowledge and stay accountable.']].map(([title, copy], i) => <article className="bg-white p-7" key={title}><span className="font-mono text-xs text-[#1686f8]">0{i + 1}</span><h3 className="mt-16 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-black/55">{copy}</p></article>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="identity" className="px-5 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-16 grid gap-8 lg:grid-cols-2"><div><p className="eyebrow-cyan">02 · Identity</p><h2 className="section-title">A mark of<br />connected progress.</h2></div><p className="max-w-lg self-end text-base leading-7 text-white/56">Use the complete signature for corporate communication. Use the symbol when space is tight or recognition is already established.</p></div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="brand-panel flex min-h-[470px] items-center justify-center bg-black p-10"><img src="/noviteq-logo-primary.png" alt="Primary Noviteq Solutions logo" className="w-full max-w-[430px]" /></div>
            <div className="brand-panel flex min-h-[470px] items-center justify-center bg-[#edf1f5] p-10"><img src="/noviteq-logo-energy.png" alt="Noviteq energy logo variant" className="w-full max-w-[420px] mix-blend-multiply" /></div>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[['Clear space', 'Keep one symbol-stroke of space around every side.'], ['Minimum size', 'Digital: 32 px symbol / 140 px signature. Print: 12 mm / 36 mm.'], ['Never', 'Do not stretch, rotate, recolour, add shadows or place on noisy imagery.']].map(([t,c]) => <article key={t} className="rounded-2xl border border-white/12 p-6"><h3 className="text-base font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-white/50">{c}</p></article>)}
          </div>
        </div>
      </section>

      <section id="colour" className="bg-white px-5 py-24 text-[#07090d] lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-14"><p className="eyebrow">03 · Colour</p><h2 className="section-title mt-5">Signal with<br />confidence.</h2></div>
          <div className="grid overflow-hidden rounded-3xl border border-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {colours.map(c => <button onClick={() => copyValue(c.hex)} key={c.hex} className="group min-h-64 p-7 text-left" style={{background:c.hex,color:c.text}}>
              <div className="flex justify-between"><span className="text-xs font-semibold uppercase tracking-[.12em]">{c.name}</span>{copied === c.hex ? <Check size={16}/> : <Clipboard size={16} className="opacity-45 transition group-hover:opacity-100"/>}</div>
              <div className="mt-28"><p className="font-mono text-lg">{c.hex}</p><p className="mt-1 font-mono text-xs opacity-55">RGB {c.rgb}</p></div>
            </button>)}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Rule title="Core ratio" copy="Carbon / white 70% · Signal Blue 20% · Cyan 10%. Cyan is a highlight, never a body-text colour." />
            <Rule title="Accessibility" copy="Target WCAG AA: 4.5:1 for body text and 3:1 for large text and essential interface elements." />
            <Rule title="Print" copy="Use colour-managed CMYK proofs. For high-fidelity marks, verify coated and uncoated stock before production." />
          </div>
        </div>
      </section>

      <section id="type" className="bg-[#dcecff] px-5 py-24 text-[#07101d] lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <p className="eyebrow">04 · Typography</p>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.65fr]">
            <div><p className="text-[clamp(5rem,15vw,13rem)] font-semibold leading-[.68] tracking-[-.085em]">Aa</p><h2 className="mt-14 text-4xl font-semibold tracking-[-.04em]">Geist Sans</h2><p className="mt-3 max-w-lg leading-7 text-black/58">Our primary family. Direct, technical and human. Use Semibold for decisive headlines and Regular for clear reading.</p></div>
            <div className="grid gap-4">
              {[['Display', '64–132 / 82%', 'Move faster.'], ['Heading', '36–64 / 95%', 'Own what’s next.'], ['Body', '16–20 / 155%', 'Technology that moves business forward.'], ['Label', '11–13 / 120%', 'CONNECTED EXPERTISE']].map(([t,s,e]) => <div className="border-b border-black/15 pb-5" key={t}><div className="flex justify-between font-mono text-[11px] uppercase tracking-wider text-black/45"><span>{t}</span><span>{s}</span></div><p className="mt-4 text-2xl font-semibold tracking-tight">{e}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="voice" className="bg-[#07090d] px-5 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-14 lg:grid-cols-2"><div><p className="eyebrow-cyan">05 · Voice</p><h2 className="section-title">Expert.<br />Never distant.</h2></div><p className="max-w-xl self-end text-2xl leading-9 text-white/65">We make technology understandable without making it simplistic. We sound composed, capable and close to the work.</p></div>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[['Clear', 'Prefer short words and active sentences.'], ['Useful', 'Answer “what does this change?” early.'], ['Confident', 'Be specific. Avoid hype and empty superlatives.'], ['Human', 'Write to one person. Respect their time.']].map(([t,c]) => <article className="rounded-2xl border border-white/12 p-6" key={t}><PenTool className="text-[#49c8ff]" size={20}/><h3 className="mt-16 text-xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-white/48">{c}</p></article>)}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2"><Example good title="Write this" copy="Protect your team with practical controls and a clear response plan."/><Example title="Not this" copy="Leverage our best-in-class next-generation solutions to revolutionise your security posture."/></div>
        </div>
      </section>

      <section id="tools" className="bg-[#f3f5f7] px-5 py-24 text-[#07090d] lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-14 grid gap-6 lg:grid-cols-2"><div><p className="eyebrow">06 · Creation toolkit</p><h2 className="section-title mt-5">From rules<br />to ready.</h2></div><p className="max-w-lg self-end leading-7 text-black/56">Choose an asset, personalise the content, preview it instantly and download a clean HTML starter for your production workflow.</p></div>
          <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
              {toolOptions.map(({id,title,desc,icon:Icon}) => <button key={id} onClick={() => setActiveTool(id)} className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${activeTool === id ? 'border-[#1686f8] bg-[#e5f1ff]' : 'border-black/10 bg-white hover:border-black/25'}`}><span className={`rounded-xl p-3 ${activeTool === id ? 'bg-[#1686f8] text-white' : 'bg-[#f0f2f5]'}`}><Icon size={19}/></span><span><strong className="block text-sm">{title}</strong><span className="mt-1 block text-xs text-black/48">{desc}</span></span><ChevronRight className="ml-auto" size={16}/></button>)}
            </div>
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
              <div className="grid gap-8 border-b border-black/10 p-6 md:grid-cols-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-black/48">Name<input value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f8fa] px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none focus:border-[#1686f8]" /></label>
                <label className="text-xs font-semibold uppercase tracking-wider text-black/48">Role or campaign<input value={role} onChange={e=>setRole(e.target.value)} className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f8fa] px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none focus:border-[#1686f8]" /></label>
              </div>
              <div className="p-5 md:p-8">
                <div className="relative flex min-h-[500px] flex-col overflow-hidden rounded-2xl bg-[#07090d] p-7 text-white md:p-10">
                  <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[32px] border-[#1686f8]/20 shadow-[0_0_60px_#1686f855]" />
                  <div className="relative z-10"><Logo/><p className="mt-16 text-[10px] font-semibold uppercase tracking-[.18em] text-[#49c8ff]">{meta.size}</p><h3 className="mt-5 max-w-2xl text-4xl font-semibold leading-[.95] tracking-[-.045em] md:text-6xl">{meta.copy}</h3></div>
                  <div className="relative z-10 mt-auto flex flex-wrap items-end justify-between gap-5 border-t border-white/14 pt-6"><div><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs text-white/50">{role}</p></div><p className="text-xs text-white/45">noviteq-solutions.com</p></div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 p-5"><div><p className="text-sm font-semibold">{meta.label}</p><p className="mt-1 text-xs text-black/48">Editable HTML starter · Brand tokens included</p></div><button onClick={downloadTemplate} className="inline-flex items-center gap-2 rounded-full bg-[#1686f8] px-5 py-3 text-sm font-semibold text-white">Download template <Download size={15}/></button></div>
            </div>
          </div>
        </div>
      </section>

      <section id="governance" className="bg-white px-5 py-24 text-[#07090d] lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">07 · Governance</p><h2 className="mt-5 text-5xl font-semibold leading-[.95] tracking-[-.05em]">Protect the<br />signal.</h2></div><div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">{[['Owner', 'Marketing owns the master system and approves external campaigns.'],['Versioning', 'Use year.major.minor. Record changes and archive retired assets.'],['Quality check', 'Confirm logo, contrast, copy, links, consent and accessibility before release.'],['Partners', 'Share only approved assets. Do not provide editable master logos without agreement.']].map(([t,c])=><Rule key={t} title={t} copy={c}/>)}</div></div>
          <div className="mt-16 rounded-3xl bg-[#1686f8] p-8 text-white md:p-12"><div className="grid items-end gap-8 md:grid-cols-[1fr_auto]"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-white/65">Preflight checklist</p><h3 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.04em] md:text-6xl">Clear. Consistent.<br/>Ready to move.</h3></div><a href="#top" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07101d]">Back to top <ArrowUpRight size={16}/></a></div></div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 lg:px-12"><div className="mx-auto flex max-w-[1344px] flex-col justify-between gap-6 text-xs text-white/42 sm:flex-row sm:items-center"><Logo/><p>Noviteq Solutions · Brand Hub v1.0 · September 2026</p><a href="https://noviteq-solutions.com/" target="_blank" rel="noreferrer" className="text-white/70">noviteq-solutions.com ↗</a></div></footer>
    </main>
  );
}

function Rule({title,copy}:{title:string;copy:string}) { return <article className="bg-white p-6"><h3 className="text-sm font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-black/52">{copy}</p></article> }
function Example({title,copy,good=false}:{title:string;copy:string;good?:boolean}) { return <article className={`rounded-2xl border p-7 ${good?'border-[#1686f8]/50 bg-[#0b1728]':'border-white/12'}`}><p className={`text-xs font-semibold uppercase tracking-wider ${good?'text-[#49c8ff]':'text-white/38'}`}>{title}</p><p className="mt-7 text-xl leading-8 text-white/78">“{copy}”</p></article> }
