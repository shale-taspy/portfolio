    'use client';

    import Image from 'next/image';
    import Link from 'next/link';

    export default function Home() {
    return (
        <>
        <section className="bg-[#0e1012] text-white flex items-start pt-10 pb-8">
        <div className=" max-w-full mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-90 items-center py-10 ">

            {/* LEFT — Text Content */}
            <div className="flex flex-col gap-6 mr-20">

            {/* Location tag */}
            <p className="text-[#eb7a52] text-xs tracking-[0.25em] uppercase font-mono">
                / Dhaka, Bangladesh — Available for work
            </p>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Full-stack<br />
                Devel<span className="text-[#eb7a52]">oper</span>
            </h1>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                I build scalable, maintainable web applications with React, Next.js and
                Node.js — pairing intuitive frontends with reliable backends and clean
                code principles.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-2">
                <Link
                href="/projects"
                className="px-6 py-2.5 bg-[#eb7a52] text-black text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
                >
                View Projects
                </Link>
                <Link
                href="/contact"
                className="px-6 py-2.5 border border-[#eb7a52] text-[#eb7a52] text-xs font-semibold tracking-widest uppercase hover:bg-[#eb7a52] hover:text-black transition-all duration-300"
                >
                Get in Touch
                </Link>
            </div>
            </div>

            {/* RIGHT — Terminal Card */}
            <div className="flex flex-col rounded-sm overflow-hidden border border-white/10 shadow-2xl w-full max-w-lg ml-auto">

            {/* Terminal top bar */}
            <div className="bg-[#1a1d22] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                <span className="text-white/30 text-xs font-mono">~ shaleportfolio &nbsp; <span className="text-[#eb7a52]">~/portrait <span className="cursor-blink">_</span></span></span>
                <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-[#eb7a52]" />
                </div>
            </div>

            {/* Portrait */}
            <div className="relative w-full h-64 bg-[#1a1d22]">
                <Image
                src="/CV1.png"
                alt="Shale Ahammed Taspy"
                fill
                className="object-cover object-top"
                priority
                />
            </div>

            {/* Code snippet */}
            <div className="bg-[#1a1d22] px-5 py-4 font-mono text-xs leading-relaxed border-t border-white/10">
                <p className="text-white/40">const <span className="text-white/70">developer</span> = {'{'}</p>
                <p className="pl-4 text-white/40">name: <span className="text-white/70">&quot;Shale&quot;</span>,</p>
                <p className="pl-4 text-white/40">role: <span className="text-[#eb7a52]">&quot;full-stack&quot;</span>,</p>
                <p className="pl-4 text-white/40">status: <span className="text-[#eb7a52]">&quot;available&quot;</span></p>
                <p className="text-white/40">{'};'}</p>
            </div>

            {/* Terminal footer */}
            <div className="bg-[#1a1d22] px-5 py-2 border-t border-white/10">
                <span className="text-white/20 text-xs font-mono">/ image node</span>
            </div>
            </div>

        </div>
        </section>
        <div className="w-full border-t border-[#2d3037]" />
        </>
    );
    }
