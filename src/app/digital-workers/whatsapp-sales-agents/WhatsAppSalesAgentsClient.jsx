"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    MessageCircle, 
    Zap, 
    Database, 
    BrainCircuit, 
    CheckCircle2,
    ArrowRight,
    Workflow,
    Mic,
    Clock,
    TrendingUp,
    Users,
    ChevronDown,
    Building2,
    Briefcase,
    ShoppingBag,
    Plane,
    Truck,
    ChevronUp,
    GlassWater,
    CarFront,
    Box
} from "lucide-react";
import FAQItem from "@/components/FAQItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const CollapsibleText = ({ children, maxHeight = 100, fadeColor = "var(--bg)" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const wrapperRef = useRef(null);
    
    useGSAP(() => {
        if (!wrapperRef.current || !contentRef.current) return;
        
        const targetHeight = isExpanded ? contentRef.current.scrollHeight : maxHeight;
        
        gsap.to(wrapperRef.current, {
            height: targetHeight,
            duration: 0.6,
            ease: "power3.inOut",
            overwrite: true
        });
    }, { dependencies: [isExpanded], scope: wrapperRef });

    return (
        <div style={{ marginBottom: "1.5rem" }}>
            <div 
                ref={wrapperRef}
                style={{ 
                    height: `${maxHeight}px`, 
                    overflow: "hidden",
                    position: "relative",
                    willChange: "height"
                }}
            >
                <div ref={contentRef}>
                    {children}
                </div>
                
                {/* Premium Gradient Shadow */}
                <div style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    width: "100%", 
                    height: "80px", 
                    background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
                    pointerEvents: "none",
                    opacity: isExpanded ? 0 : 1,
                    transition: "opacity 0.4s ease",
                    zIndex: 2
                }} />
            </div>
            
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="expand-btn"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1.2rem",
                    padding: "2px 0",
                    background: "none",
                    border: "none",
                    color: "var(--primary)",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    zIndex: 3,
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                }}
            >
                <span style={{ position: "relative" }}>
                    {isExpanded ? "Close" : "Learn More"}
                    <div className="btn-line" style={{ 
                        position: "absolute", 
                        bottom: "-4px", 
                        left: 0, 
                        width: "100%", 
                        height: "2px", 
                        background: "var(--primary)",
                        transform: "scaleX(0.3)",
                        transformOrigin: "left",
                        transition: "transform 0.4s ease",
                        opacity: 0.6
                    }} />
                </span>
                <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)"
                }}>
                    <ChevronDown size={16} strokeWidth={2.5} />
                </div>
            </button>

            <style jsx>{`
                .expand-btn:hover .btn-line {
                    transform: scaleX(1);
                    opacity: 1;
                }
                .expand-btn:active {
                    transform: translateY(1px);
                }
            `}</style>
        </div>
    );
};


export default function WhatsAppSalesAgentsClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal");
        reveals.forEach((el) => {
            gsap.from(el, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, { scope: containerRef });

    const SectionHeader = ({ title, label, dark = false }) => (
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4.5rem", position: "relative" }}>
            {label && <div className="section-label" style={{ color: dark ? "rgba(255,255,255,0.6)" : "var(--primary)" }}>{label}</div>}
            <h2 className="section-title" style={{ color: dark ? "#fff" : "var(--text)" }}>{title}</h2>
        </div>
    );

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            {/* HERO SECTION */}
            <section style={{ 
                minHeight: "90vh", 
                display: "flex", 
                alignItems: "center", 
                position: "relative",
                padding: "clamp(120px, 15vh, 180px) 1.5rem 100px",
                background: "var(--bg)",
                overflow: "hidden"
            }}>
                {/* Background Visual — light/clean technical pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "60%",
                        height: "100%",
                        zIndex: 0,
                        opacity: 0.3,
                        pointerEvents: "none",
                    }}
                >
                    <Image
                        src="/images/platform_hero_professional.png"
                        alt=""
                        aria-hidden="true"
                        fill
                        style={{
                            objectFit: "cover",
                            maskImage: "radial-gradient(circle at right, white, transparent 90%)",
                            WebkitMaskImage: "radial-gradient(circle at right, white, transparent 90%)",
                            filter: "brightness(1.5) contrast(0.8)"
                        }}
                    />
                </div>

                {/* Subtle gradient overlay behind text */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        background: "linear-gradient(to right, var(--bg) 40%, transparent 95%)",
                        pointerEvents: "none",
                    }}
                />
                
                <div className="container" style={{ maxWidth: "1250px", position: "relative", zIndex: 1 }}>
                    <div className="hero-content" style={{ maxWidth: "900px" }}>
                        <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "rgba(37, 211, 102, 0.1)", color: "#25D366", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "2rem" }}>
                            <MessageCircle size={16} /> WhatsApp Sales & Concierge
                        </div>
                        <h1 className="reveal" style={{ 
                            fontSize: "clamp(2.2rem, 5.5vw, 4rem)", 
                            fontWeight: 900, 
                            marginBottom: "2rem", 
                            lineHeight: 1.1,
                            textAlign: "left"
                        }}>
                            WhatsApp Sales & Concierge Agents: The Future of <span style={{ 
                                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>Real-Time Customer Engagement</span>
                        </h1>
                        <p className="reveal" style={{ 
                            fontSize: "1.15rem", 
                            lineHeight: 1.8, 
                            color: "var(--text-muted)",
                            maxWidth: "850px",
                            marginBottom: "3rem"
                        }}>
                            In the UAE, 85%+ of business communication happens on WhatsApp. Our AI-powered 
                            agents respond in real-time, handle Arabic language nuance, and integrate 
                            directly with Zoho CRM to turn conversations into conversions.
                        </p>
                        <div className="reveal">
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1.25rem 2.5rem" }}>
                                Book WhatsApp Audit <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL ARCHITECTURE */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
                        <div className="reveal">
                            <div className="section-label">THE ENGINE</div>
                            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "2rem" }}>How It Actually Works: The Technical Architecture</h2>
                            <CollapsibleText maxHeight={200} fadeColor="var(--bg-secondary)">
                                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                                    When a customer texts your WhatsApp business number, here's what happens: the message arrives at 
                                    our n8n webhook. If it contains voice (common in UAE), Gemini's speech-to-text transcribes it in Arabic 
                                    or English (handling Gulf, Levantine, Egyptian dialects). The message and transcription go into Zoho CRM 
                                    as a linked activity on the customer record (or create a new record if they're new). Claude retrieves 
                                    customer context (past interactions, current projects, known preferences, conversation history). Claude 
                                    reasons through the inquiry—is this a qualification question (can we handle it), an objection (needs 
                                    override), or a referral (needs escalation)? Claude generates a response in Arabic or English as 
                                    appropriate. The response is sent back to WhatsApp within 4.2 seconds on average. If escalation is 
                                    needed, a human picks it up with full context—not 'Customer says they want to refinance' but 'Customer 
                                    has AED 2.1M budget, prefers villas, needs within 3 months, previously rejected 4 properties due to 
                                    school district, this one meets all criteria.' Your team responds to pre-qualified, fully-contextualized 
                                    opportunities, not cold inquiries.
                                </p>
                            </CollapsibleText>
                        </div>
                        
                        <div className="reveal">
                            <Image 
                                src="/images/whatsapp-agent/tech-flow.png" 
                                alt="WhatsApp Agent Technical Flow Diagram"
                                width={800}
                                height={600}
                                style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* THE PROBLEM SECTION */}
            <section style={{ padding: "100px 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <SectionHeader title="The Problem Your Business Faces" label="CURRENT CHALLENGES" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(300px, 45%, 600px), 1fr))", gap: "2rem" }}>
                        {[
                            { 
                                id: "1", 
                                title: "WhatsApp Drowning No System", 
                                icon: <MessageCircle />,
                                content: "Your team receives 50-200 WhatsApp messages daily on personal phones. Some go to the main admin phone; some to sales staff personal phones; some get forwarded to group chats. No single source of truth. A customer asks about a property three times, gets three different answers from three different people. You have no CRM record of the conversation. No audit trail. No way to analyze what customers are actually asking about. You lose leads because responses are slow (your team is in meetings, away from phone, stuck in traffic). You lose deals because context is lost (the customer was interested in villas; they got shown apartments). You lose organizational memory (a customer's previous complaints aren't visible to new team members). This is the UAE WhatsApp reality: chaotic, inefficient, opportunity-losing."
                            },
                            { 
                                id: "2", 
                                title: "Manual Qualification is Exhausting", 
                                icon: <Clock />,
                                content: "Even when your team is responsive, qualification is brutal. Real estate agent gets a WhatsApp: 'Do you have any villas in Dubai Hills in my budget?' Qualifier needs to ask: How much is your budget? When do you need to move? Do you have AED financing or do you need a bank? Are you on a visa? How long have you been in UAE? Are you working here or transferred by company? Do you own property elsewhere in UAE (FEWA implications)? That's 8 back-and-forths, each taking minutes. The customer gets impatient ('I'll call someone else'). Your qualifier gets frustrated (tired of the same questions). Most leads go dead in qualification. We've measured this: manual qualification takes 45 minutes per lead and only converts 18% of inquiries. AI-assisted qualification takes 4 minutes and converts 61% of inquiries. The reason: the AI asks all the hard questions immediately (because it doesn't get tired), understands nuance (budget can mean gross vs. net; timeline can mean 'need keys in 4 weeks' or 'starting to look'), and routes intelligently (serious leads to closers, curious leads to content streams)."
                            },
                            { 
                                id: "3", 
                                title: "You're Losing Deals to Response Speed", 
                                icon: <Zap />,
                                content: "A customer WhatsApps three real estate agents with the same inquiry. The first to respond with a relevant property wins. In a manual system, response time depends on whether your person happened to check their phone in the last 5 minutes. Average response time in manual systems: 6+ hours. Average response time with AI agent: 12 minutes. That's a 30x difference. In retail, a customer asks about a product variant. Manual: 45 minutes (employee needs to check inventory system, might be on break). AI agent: 2 minutes (real-time inventory lookup, instant response). The customer buys from someone else because someone else responded. We've measured this: every hour of response delay reduces conversion by 3-4%. A 6-hour delay reduces conversion by 18-24%. Your AI agent responds in 12 minutes. You win deals from speed alone."
                            },
                            { 
                                id: "4", 
                                title: "Arabic Language is Critical, and You're Handling it Wrong", 
                                icon: <Mic />,
                                content: "Most of your incoming WhatsApp traffic is in Arabic. Your team speaks Arabic. But your CRM is English-only. So every message needs translation—slowing down response, losing nuance. A customer writes in Gulf Arabic with colloquialisms. Your system can't understand slang (e.g., 'شنو الموجود' is colloquial for 'what do you have,' not literal; Google Translate gets this wrong). You're either hiring Arabic-fluent staff (expensive, limited supply in UAE service roles) or losing deals to miscommunication. Our agents understand Gulf Arabic, Levantine Arabic, and Egyptian Arabic. We handle voice notes (common in WhatsApp; your team currently has to listen to each one, translate mentally, and respond). We can respond in the customer's language (if they write in Arabic, you respond in Arabic; if they mix Arabic and English, we match their style). This isn't a nice-to-have in UAE—it's a blocking issue. If you're not serving your customers in their language, your competitor will."
                            }
                        ].map((prob, i) => (
                            <div key={i} className="reveal" style={{ padding: "3rem", background: "var(--card-bg)", borderRadius: "32px", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
                                <div style={{ display: "flex", alignItems: "start", gap: "1.5rem", marginBottom: "1.5rem" }}>
                                    <div style={{ color: "var(--primary)", marginTop: "0.25rem" }}>{prob.icon}</div>
                                    <div>
                                        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>CHALLENGE 0{prob.id}</div>
                                        <h3 style={{ fontSize: "1.6rem", fontWeight: 800 }}>{prob.title}</h3>
                                    </div>
                                </div>
                                <CollapsibleText maxHeight={120} fadeColor="var(--card-bg)">
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1rem" }}>{prob.content}</p>
                                </CollapsibleText>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT THIS SOLUTION DOES SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <SectionHeader title="What This Solution Actually Does" label="CORE CAPABILITIES" />
                    <div style={{ display: "grid", gap: "6rem" }}>
                        {[
                            {
                                title: "Real-Time Inquiry Handling",
                                image: "/images/whatsapp-agent/usecase-retail.png",
                                text: "A customer sends a WhatsApp: ' مليون؟3هل عندكم فيلا في جيميز بـ' (Do you have a villa in Jumeirah at AED 3 million?). The AI agent, within 12 seconds: looks up customer history (first time? returning?), queries your property database for villas in Jumeirah in the 2.8-3.2M range, retrieves current available properties with photos, understands context (the AED 3M is a budget ceiling, not a precise target), and responds: ' مليون. واحدة مع مسبح وحديقة كبيرة... متى تفضل موعد عرض؟3.1 إلى 2.95 فيلات متاحة في جميرة، من 3نعم عندنا ' (Yes, we have 3 villas available in Jumeirah, from 2.95 to 3.1M. One with pool and large garden... When would you prefer a viewing?). This is not templated text. This is Claude reasoning: understanding that the customer wants villas (not apartments), understanding budget as a range (not exact), prioritizing the property with the amenities that typically matter for this budget tier, and naturally inviting the next step (viewing). That's what we deliver."
                            },
                            {
                                title: "Qualification & Lead Scoring",
                                image: "/images/whatsapp-agent/whatsapp-results-v2.png",
                                text: "For each inbound inquiry, the agent captures and scores: Budget (actual buying power, not stated budget—AED 3M might mean 'I was approved for 2.8M'), Timeline (immediate, 3 months, 6 months, 'someday'), Nationality & Visa (critical for UAE real estate—some nationals can buy, some can't, expats need 3+ years visa), Current Status (renting, own elsewhere, first-time buyer), Previous Interactions (if returning customer, what was their objection last time?). The score determines routing: hot leads (qualified, ready to buy, within 4 weeks) go to your top closer; warm leads (qualified, ready to buy, within 6 months) go to regular sales team; cool leads (early-stage, just exploring) go to nurture sequences. Your top closers spend 100% of their time on hot leads, not sorting inquiries. We've seen this improve conversion by 43% because friction is removed—your team works pre-qualified, pre-informed leads."
                            },
                            {
                                title: "Multilingual Communication",
                                image: "/images/whatsapp-agent/tech-flow.png",
                                text: "A customer WhatsApps in Gulf Arabic. The agent responds in Gulf Arabic. A different customer sends voice note in Levantine. The agent transcribes and responds—understanding Levantine context. A third customer mixes English and Arabic in one message. The agent code-switches appropriately. We handle not just language, but dialect and register. When a customer is casual ('شنو أخبارك' - what's up), the agent responds casually. When a customer is formal ('أود السؤال عن' - I would like to inquire about), the agent matches that formality. Language quality directly impacts perceived quality—if your response sounds wrong (bad grammar, weird phrasing, formal when casual is expected), the customer thinks your company is unprofessional. We handle this by training Claude specifically on regional business Arabic, not generic Arabic. This matters more in UAE where language preference is strong."
                            },
                            {
                                title: "Context & Memory",
                                image: "/images/real-estate-agent/real-estate-agent-flow-v2.png",
                                text: "A customer asks about a property on a Tuesday. Your team sends info. On Friday, they WhatsApp again with a follow-up question. A manual system shows: 'Customer asked about property X' with maybe a note. An AI system shows: customer mentioned AED 3M budget, interested in Jumeirah, asked about schools, you sent property photos, they asked about rental yield, you explained purchase vs. rental, they went silent for 3 days, now asking about maintenance costs. That's a customer considering a buy-to-rent strategy. You should respond with comparative yield data, not with another property photo. Our agents maintain conversation context across multiple interactions, across time. When the customer returns, the agent understands where the conversation left off."
                            },
                            {
                                title: "Escalation with Intelligence",
                                image: "/images/whatsapp-agent/usecase-recruitment.png",
                                text: "Some inquiries can't be handled by an agent. A customer writes: 'I'm stuck in another country, can't get back to do property viewing. Can you arrange a virtual tour with AR?' This needs human judgment about what's possible, what process to follow, how to handle the unusual request. The agent detects this requires escalation. When you (human) pick it up, you see: customer is abroad, needs virtual tour, has legitimate reason (stuck due to visa/work), you previously helped a similar customer with Matterport tour. Here's the path: approve virtual tour (we have Matterport setup), schedule with photographer (2-day turnaround), provide customer with link Friday. That's an escalation with full context and suggested path. You can approve and execute in 30 seconds instead of re-questioning the customer, revisiting your process, and spending 15 minutes figuring out what's possible."
                            }
                        ].map((item, i) => (
                            <div key={i} className="reveal feature-row" style={{ 
                                display: "flex", 
                                flexDirection: i % 2 === 0 ? "row" : "row-reverse", 
                                gap: "4rem", 
                                alignItems: "center",
                                marginBottom: "4rem"
                            }}>
                                <div style={{ flex: 1, minWidth: "300px" }}>
                                    <Image 
                                        src={item.image} 
                                        alt={item.title}
                                        width={800}
                                        height={500}
                                        style={{ width: "100%", height: "auto", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                                    />
                                </div>
                                <div style={{ flex: 1.5, minWidth: "300px" }}>
                                    <h3 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 900, marginBottom: "1.5rem" }}>{item.title}</h3>
                                    <CollapsibleText maxHeight={150} fadeColor="var(--bg-secondary)">
                                        <p style={{ lineHeight: 1.8, color: "var(--text-muted)", fontSize: "1.1rem" }}>{item.text}</p>
                                    </CollapsibleText>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            {/* REAL WORLD USE CASES SECTION */}
            <section style={{ padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <SectionHeader title="Real World Use Cases" label="PROVEN SECTORS" />
                    <div style={{ display: "grid", gap: "6rem" }}>
                        {[
                            {
                                label: "Use Case 1",
                                title: "Real Estate Lead Qualification (Hyper-Competitive Market)",
                                icon: <Building2 />,
                                image: "/images/whatsapp-agent/usecase-real-estate.png",
                                text: "Dubai real estate has 50,000+ agents chasing the same deals. Speed and qualification matter enormously. We deployed WhatsApp agents at three brokerages. Agent receives inquiry on Monday 9am. Qualifies within 4 minutes: budget confirmed (AED 2.4M, not 'about 2.5'), location confirmed (Dubai Hills, ready to move in 6 weeks, yes to schools in the area), financing confirmed (cash down payment, bank mortgage), visa status confirmed (on company visa for 7 more years). Agent routes to the one agent in their team that specializes in Dubai Hills off-plan (because the AI knows their specialties). That agent picks up with full context. By Monday 5pm, the customer has been shown 3 properties, fallen in love with one, and is discussing terms. A competitor who responded at 10am Tuesday had already lost the deal. Our agents turned response time from 6 hours (next business day) to 12 minutes (same morning). Result: the brokerage improved close rate from 18% of qualified inquiries to 43%, and reduced days to close from 45 to 28. The ROI was 8x in year one."
                            },
                            {
                                label: "Use Case 2",
                                title: "Retail Product Information & Ordering",
                                icon: <ShoppingBag />,
                                image: "/images/whatsapp-agent/usecase-retail.png",
                                text: "A luxury retail group has 8 locations. They sell women's fashion, bags, accessories. Customers WhatsApp about sizes, colors, availability, styling questions, order status. Previously, each location manager had WhatsApp blowing up. They'd drop what they were doing to respond, often with incomplete info ('I'll check' then never follow up). We deployed a centralized WhatsApp agent. Customer at home browsing Instagram sees a bag, WhatsApps: 'هل الشنطة الزرقاء الموجودة في الصورة متاحة؟' (Is the blue bag in the photo available?). Agent looks up product from the Instagram post metadata, checks real-time inventory across all 8 locations, responds: ' فروع. الشارقة والتعليم سيتي والمنطقة الحرة. أي فرع أقرب لك؟3نعم الشنطة متاحة في ' (Available at 3 locations, here are the closest options). Customer says 'التعليم سيتي' (Education City), agent confirms, offers to hold for 2 hours, sends store location and operating hours. Customer arrives, purchases. That's a customer acquired through WhatsApp. The retail group handled 10x more inquiries with the same staff. Customer satisfaction (response speed, accuracy) went up. Staff stress (constant phone interruption) went down."
                            },
                            {
                                label: "Use Case 3",
                                title: "Professional Services Intake & Scheduling",
                                icon: <Users />,
                                image: "/images/whatsapp-agent/usecase-recruitment.png",
                                text: "A recruitment firm gets inbound inquiries from job seekers and hiring managers. Job seeker WhatsApps: 'I'm looking for a software engineering role in Abu Dhabi, 5 years experience in fintech, open to relocation.' Agent understands: this is a candidate qualifying conversation, not a job inquiry. Agent asks: current salary expectation (to understand market positioning), visa sponsorship needed? (job-critical in UAE), availability (notice period? competing offers?), preferred company size/industry beyond fintech. Agent creates candidate profile in Zoho, runs a search against open jobs, finds 2 matches, offers to introduce. The whole flow takes 6 minutes of AI time, 1 minute of human time (recruiter review + approval to proceed). Previously, this took 20 minutes of recruiter time (phone call, note-taking, searching) and the candidate often went to a competitor who responded faster. The firm handled 3x more candidates/month, higher quality (better-qualified candidates from faster response), and their recruiters spent their time on relationship-building and closing, not intake."
                            }
                        ].map((caseStudy, i) => (
                            <div key={i} className="reveal usecase-row" style={{ 
                                display: "flex", 
                                flexDirection: i % 2 === 0 ? "row" : "row-reverse", 
                                gap: "4rem", 
                                alignItems: "center"
                            }}>
                                <div style={{ flex: 1, minWidth: "300px" }}>
                                    <Image 
                                        src={caseStudy.image} 
                                        alt={caseStudy.title}
                                        width={800}
                                        height={500}
                                        style={{ width: "100%", height: "auto", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                                    />
                                </div>
                                <div style={{ flex: 1.2, minWidth: "300px" }}>
                                    <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                                        <h3 style={{ fontSize: "1.8rem", fontWeight: 800, margin: 0, lineHeight: 1.2, flex: 1 }}>{caseStudy.title}</h3>
                                        <div style={{ fontSize: "0.7rem", fontWeight: 800, background: "rgba(255,255,255,0.05)", padding: "0.4rem 0.8rem", borderRadius: "100px", textTransform: "uppercase", whiteSpace: "nowrap", marginTop: "0.5rem" }}>{caseStudy.label}</div>
                                    </div>
                                    <CollapsibleText maxHeight={150} fadeColor="var(--bg)">
                                        <p style={{ lineHeight: 1.8, color: "var(--text-muted)", fontSize: "1.05rem" }}>{caseStudy.text}</p>
                                    </CollapsibleText>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ADDITIONAL INFORMATION SECTIONS */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.03, pointerEvents: "none", background: "radial-gradient(circle at 70% 30%, var(--primary), transparent 70%)" }} />
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gap: "8rem" }}>
                        {[
                            {
                                title: "Arabic Language Intelligence",
                                icon: <Mic />,
                                text: "Arabic in WhatsApp is colloquial, fast, often includes voice notes, and varies by origin. A Saudi user writes differently from an Egyptian user. A local Emirati writes differently from an expat Indian in Arabic. We've trained our agents on: Gulf Arabic (UAE, Saudi, Kuwait dialect including colloquialisms and business register), Levantine Arabic (Syria, Lebanon, Palestine dialect), and Egyptian Arabic (Egypt and often used as regional lingua franca). We handle: voice transcription (including detecting dialect from voice), understanding slang (شنو, وشلونك, etc.), understanding context (بس can mean 'but' or 'only' depending on context), understanding number formatting (Arab style: ٣ مليون instead of 3 million), understanding currency context (when someone says مليون, do they mean AED or SAR? We infer from company location and context), understanding code-switching (mixing Arabic and English) which is normal in professional UAE Arabic."
                            },
                            {
                                title: "Integration & Data Sovereignty",
                                icon: <Database />,
                                text: "The agent lives between WhatsApp and your Zoho CRM. WhatsApp message comes in to n8n webhook. n8n matches the sender to a Zoho contact (or creates new record). All messages are logged as Zoho activities, linked to the contact. Customer contact history, property preferences, budget, everything flows into Zoho. When a human picks up, they see Zoho context. When the AI responds, it reads from Zoho (latest interactions, customer preferences, open opportunities). Zoho is the single source of truth. This architecture means: no data silos, no dual data entry, full compliance (all customer data in UAE/EU server, not US servers), full audit trail. We use Zoho's UAE data center, not US. Data sovereignty is not negotiable in UAE."
                            },
                            {
                                title: "Performance & Response Timing",
                                icon: <Zap />,
                                text: "Average response time: 4.2 seconds from WhatsApp message to AI response sent back. This includes: message ingestion, Zoho context retrieval, Gemini transcription (if voice), Claude reasoning, response generation. We've tested and optimized every step. On slower internet (not uncommon in UAE), response time is 6-8 seconds. 95th percentile response time is 12 seconds. The customer perceives this as 'instant' definitely fast enough that they wait for the response instead of calling someone else or moving to a competitor. Compare to human response time: 6-300 minutes. We're 50-100x faster."
                            }
                        ].map((info, i) => (
                            <div key={i} className="reveal" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                                    <div style={{ color: "var(--primary)" }}>{info.icon && React.cloneElement(info.icon, { size: 40 })}</div>
                                    <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900 }}>{info.title}</h2>
                                </div>
                                <CollapsibleText maxHeight={150} fadeColor="var(--bg)">
                                    <p style={{ lineHeight: 1.8, color: "var(--text-muted)", fontSize: "1.2rem", maxWidth: "900px" }}>{info.text}</p>
                                </CollapsibleText>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESULTS: THE NUMBERS SECTION */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", position: "relative" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ flex: 1, minWidth: "300px" }} className="reveal">
                            <SectionHeader title="Results: The Numbers" label="DATA PROVEN" />
                            <div style={{ marginTop: "2rem" }}>
                                <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem" }}>
                                    We've deployed WhatsApp agents at 12 organizations over 18 months. Here's what we're seeing: 
                                    Response time improves from 6+ hours to 12 minutes average (50x improvement). Lead conversion rate 
                                    improves 43% on average—customers are more likely to convert when you respond faster and with 
                                    better information. Time-to-close improves 30% on average—qualified deals close faster.
                                </p>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
                                    {[
                                        { label: "Staff Time Freed", val: "20 hrs/week" },
                                        { label: "NPS Improvement", val: "+10 Points" },
                                        { label: "ROI Payback", val: "6-8 Weeks" }
                                    ].map((stat, i) => (
                                        <div key={i} style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                                            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</div>
                                            <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary)" }}>{stat.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: "350px" }} className="reveal">
                            <Image 
                                src="/images/whatsapp-agent/whatsapp-results-v2.png" 
                                alt="WhatsApp Agent Performance Results"
                                width={800}
                                height={600}
                                style={{ width: "100%", height: "auto", borderRadius: "32px", boxShadow: "0 30px 60px rgba(0,0,0,0.3)", border: "1px solid var(--border)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO IS THIS FOR? SECTION */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900 }}>Who Is This For? 6 Key Industries</h2>
                    </div>
                    
                    <div className="industry-grid" style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                        gap: "2rem" 
                    }}>
                        {[
                            { title: "Real Estate & Property Management", icon: <Building2 />, desc: "Lead-heavy, WhatsApp-driven, qualification-dependent. Ideal for agents drowning in inquiries." },
                            { title: "Retail & E-Commerce", icon: <ShoppingBag />, desc: "Inventory questions, order tracking, styling advice. Ideal for managing 10-100 daily inquiries without hiring more staff." },
                            { title: "Hospitality & F&B", icon: <GlassWater />, desc: "Reservations, guest requests, local recommendations. Ideal for 24/7 response, improving guest experience." },
                            { title: "Automotive (Sales & Service)", icon: <CarFront />, desc: "Inquiry handling, test drive scheduling, service booking. Ideal for converting warm leads quickly." },
                            { title: "Professional Services", icon: <Users />, desc: "Recruitment, consulting, accounting. Intake, scheduling, preliminary qualification. Ideal for handling high volume of cold inquiries." },
                            { title: "Logistics & Supply Chain", icon: <Box />, desc: "Shipment inquiries, exception handling, delivery scheduling. Ideal for reducing escalations and customer support volume." }
                        ].map((industry, i) => (
                            <div key={i} className="reveal industry-card" style={{ 
                                padding: "1.75rem 2rem", 
                                borderRadius: "24px", 
                                background: "var(--card-bg)", 
                                border: "1px solid var(--border)", 
                                display: "flex", 
                                gap: "1.25rem", 
                                alignItems: "center",
                                height: "100%",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                <div className="card-accent" style={{ position: "absolute", left: 0, top: 0, width: "4px", height: "100%", background: "var(--primary)", opacity: 0, transition: "opacity 0.3s" }} />
                                <div style={{ color: "var(--primary)", minWidth: "40px", display: "flex", justifyContent: "center" }}>{React.cloneElement(industry.icon, { size: 28 })}</div>
                                <div>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.4rem" }}>{industry.title}</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.5, fontSize: "0.95rem" }}>{industry.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>

            {/* TECH STACK SECTION */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderRadius: "60px 60px 0 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label">UNDER THE HOOD</div>
                        <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>The Production-Proven Tech Stack</h2>
                    </div>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
                        {[
                            { name: "Meta Business API", desc: "Enterprise WhatsApp ingestion" },
                            { name: "Claude 3.5 Sonnet", desc: "Multi-turn reasoning & Arabic nuance" },
                            { name: "Zoho CRM (UAE)", desc: "Data residency & customer context" },
                            { name: "n8n (Self-Hosted)", desc: "Secure workflow orchestration" }
                        ].map((tech, i) => (
                            <div key={i} style={{ padding: "2.5rem", background: "var(--bg)", borderRadius: "32px", border: "1px solid var(--border)", textAlign: "center" }}>
                                <div style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.5rem" }}>{tech.name}</div>
                                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{tech.desc}</div>
                            </div>
                        ))}
                    </div>

                    <CollapsibleText maxHeight={200} fadeColor="var(--bg-secondary)">
                        <p style={{ lineHeight: 1.8, fontSize: "1.1rem", color: "var(--text-muted)", textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
                            WhatsApp Business API (Meta) handles message ingestion and sending. n8n (self-hosted or cloud) 
                            orchestrates the flow: receives webhook from WhatsApp, routes to appropriate handler (new vs. 
                            returning customer, Arabic vs. English, text vs. voice). Gemini's speech-to-text handles voice transcription 
                            and language detection (is this Gulf Arabic or Levantine?). Claude 3.5 Sonnet handles all reasoning: 
                            customer qualification, context retrieval, response generation. We use Claude for reasoning because it 
                            handles multi-turn context (understanding that question 4 refers back to information from question 1), 
                            because it can engage with complex business logic (real estate financing rules, inventory availability, 
                            policy exceptions), and because it's transparent and auditable (we can see why it made a decision). Zoho 
                            CRM is the data layer all customer data, contact history, interactions, opportunities. We use Zoho's UAE 
                            data center. LangChain handles retrieval-augmented generation. This stack is production-proven. We've handled 
                            80,000+ interactions across 12 customers without significant incidents.
                        </p>
                    </CollapsibleText>
                </div>
            </section>

            {/* IMPLEMENTATION TIMELINE SECTION */}
            <section style={{ padding: "100px 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1100px" }}>
                    <SectionHeader title="Implementation Timeline & Process" />
                    <div style={{ display: "grid", gap: "2.5rem" }}>
                        {[
                            { 
                                period: "Weeks 1-2: Discovery & Setup", 
                                action: "You provide: WhatsApp Business account (we help set up if needed), sample Zoho CRM instance or access to your live instance, sample inquiries (50-100 past WhatsApp messages so we understand your patterns), team interviews (frontline staff, managers).",
                                deliverable: "We deliver: AI agent specification (what the agent will and won't handle), integration plan (how WhatsApp connects to Zoho), UAT test cases."
                            },
                            { 
                                period: "Weeks 2-4: Build & Training", 
                                action: "We configure: n8n workflows, Claude prompts (trained on your business logic, tone, language preferences), Zoho integration (message logging, context retrieval), WhatsApp connectivity.",
                                deliverable: "You run: internal training (your team learns how to monitor agent, escalate when needed), UAT (your team tests agent with real-like scenarios, provides feedback)."
                            },
                            { 
                                period: "Weeks 4-6: Soft Launch & Monitoring", 
                                action: "Agent goes live to 20% of incoming traffic initially (testing in production with real customers, but only a sample).",
                                deliverable: "We monitor: response quality, accuracy, escalation patterns, customer satisfaction. You monitor: are your customers happy, is escalation working, what's missing. We refine based on feedback."
                            },
                            { 
                                period: "Weeks 6-8: Full Launch", 
                                action: "Agent takes 100% of inbound WhatsApp traffic.",
                                deliverable: "We move to oversight mode: daily monitoring for first 2 weeks, weekly for next month, then monthly check-ins. Ongoing: monthly optimization calls (reviewing metrics, refining prompts, training updates as your business changes)."
                            }
                        ].map((step, i) => (
                            <div key={i} className="reveal" style={{ 
                                padding: "2.5rem", 
                                background: "var(--card-bg)", 
                                borderRadius: "24px", 
                                border: "1px solid var(--border)"
                            }}>
                                <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: "1.5rem" }}>{step.period}</h3>
                                <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>{step.action}</p>
                                <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-muted)" }}>{step.deliverable}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1100px" }}>
                    <SectionHeader title="Frequently Asked Questions" />
                    <div style={{ display: "grid", gap: "1.5rem" }}>
                        {[
                            { q: "Will customers know they're talking to an AI?", a: "Not necessarily. We don't deceive if a customer asks, we're truthful. But the default experience is: they WhatsApp, they get a response in 12 minutes, the response is accurate and helpful. They don't care if it's AI or human. Some customers prefer AI (faster, available 24/7, no judgment, consistent). Some prefer human (wants personal relationship, complex negotiation). Our system handles both: AI handles 90% of inquiries, humans handle 10% that need judgment. The customer's experience is seamless no difference whether they're talking to AI or human." },
                            { q: "What if the AI makes a mistake?", a: "Good question. Mistakes happen. A customer quotes a price for a property; the AI confirms it without checking your pricing. That's escalation-worthy and you need to catch it. We build in: every AI response gets logged and tagged (AI_RESPONSE tag in Zoho), your team can set alerts on certain response types, critical decisions (pricing, policy exceptions) are routed to humans automatically, not to AI. You're not blindly trusting AI; you're using AI to do the safe, repetitive 90%, and humans focus on the risky 10%." },
                            { q: "What about data privacy and compliance?", a: "We take this seriously. All data lives in UAE/EU servers (Zoho's UAE data center). Customer messages are logged in Zoho, not stored in separate AI systems. We don't train our models on customer data (your data is not used to improve our general models). Interactions are auditable (you can see exactly what the AI said, when, to whom). We comply with DFSA, ADIB, and general UAE data protection expectations. If you're regulated (financial services, healthcare), we work with your compliance team to ensure the deployment meets your specific requirements." },
                            { q: "Can the AI handle edge cases and unusual requests?", a: "Partially. The AI handles edge cases it's been trained on. An unusual request (customer wants to pay in Bitcoin; customer wants property as a company asset and needs specific entity structure) gets escalated to humans. The AI knows its limits and escalates intelligently. Over time, as your team trains the AI on patterns, it handles more edge cases. But there will always be a 'weird request' category that needs human judgment." },
                            { q: "What happens during WhatsApp outages or Zoho downtime?", a: "During WhatsApp outage, messages can't come in or go out (not our problem that's Meta). During our system outage (n8n, Claude API), we have: fallback alerting (your team gets notified that agent is down), manual failover (messages get routed to a human queue), recovery process (we fix it and restart). We target 99.8% uptime. In practice, the agent might be down a few hours per year. When it is, your team handles WhatsApp manually as they did before. It's not a critical dependency; it's a capability you're adding on top of existing process." },
                            { q: "How do you handle multiple languages in one conversation?", a: "Our default is: we respond in the language of the inbound message. If customer writes in Arabic, we respond in Arabic. If they write in English, we respond in English. If they code-switch (mix Arabic and English), we match their code-switching style. If they switch languages mid-conversation, we detect and switch. This requires some training we need to understand your brand voice in both languages. That's part of the discovery phase." },
                            { q: "Can the agent handle complex product selection (e.g., customer specifies 15 criteria for a property)?", a: "Yes. The agent can handle complex filtering. Customer gives: budget, location (Dubai Hills, ok but not Sports City), property type (villa or townhouse, not apartment), amenities (pool preferred, security gate required, no requirement on maid's room), timeline (needs keys in 8 weeks), financing (cash down payment, bank mortgage), and ownership type (individual, yes; company, no). The agent understands all 15 criteria, runs a search against your property DB, returns the matching properties (usually 3-8 options), and offers to schedule viewings. This is way better than a human having to ask each question and type into a search form." },
                            { q: "What's the cost? Is it per inquiry or per month?", a: "Pricing is per month, not per inquiry. Typical cost: AED 18,000/month includes: n8n hosting, Zoho integration, Claude API (up to 1,000 interactions/day), Gemini transcription (included), monitoring and support. If you need 2,000 interactions/day, it's AED 28,000/month. It's usage-based but billed monthly so you can plan. Most customers hit ROI in 6-8 weeks (cost savings of 1.5-2 FTEs vs. the agent cost)." },
                            { q: "How long is the implementation?", a: "6-8 weeks from contract to full launch. Weeks 1-2 discovery, weeks 2-4 build, weeks 4-6 soft launch, weeks 6-8 ramp to 100%. If your Zoho instance is a mess (no clean data, no integration architecture), add 2-4 weeks for that cleanup. If you want multiple agents (WhatsApp + email + voice), add 2-3 weeks per additional channel." }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* YOUR NEXT STEP SECTION */}
            <section style={{ padding: "120px 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <SectionHeader title="Your Next Step" />
                    <p className="reveal" style={{ 
                        fontSize: "1.2rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-muted)", 
                        marginBottom: "3rem",
                        maxWidth: "700px",
                        margin: "0 auto 3rem"
                    }}>
                        If this resonates, let's talk. We offer a WhatsApp Quick Connect you WhatsApp us, we respond within 2 
                        hours with a brief assessment of whether this makes sense for your business. Or book a 30-minute call 
                        and we'll walk through a real-world example from your industry. No pitch, no pressure. We'll be honest if 
                        we think it's a good fit and if we think you should wait 6 months for your CRM situation to stabilize.
                    </p>
                    <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                         <Link href="/contact" className="btn-primary" style={{ padding: "1.25rem 3.5rem", fontSize: "1.1rem" }}>
                            Book Your AI Audit
                         </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @media (max-width: 991px) {
                    .feature-row {
                        flex-direction: column !important;
                        gap: 2rem !important;
                    }
                }
                .industry-card {
                    cursor: pointer;
                }
                .industry-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--primary);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                }
                .industry-card:hover .card-accent {
                    opacity: 1 !important;
                }
                @media (min-width: 992px) {
                    .industry-grid {
                        grid-template-columns: repeat(3, 1fr) !important;
                    }
                }
            `}</style>
        </div>
    );
}
