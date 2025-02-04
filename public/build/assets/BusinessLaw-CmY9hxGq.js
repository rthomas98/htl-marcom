import{r as y,j as e,a as f}from"./app-DruEAryR.js";import{M as j}from"./MarcomLayout-BgDA4EmJ.js";import{b as N,s as b,d as C,e as S,m as h,N as L,j as T,f as k,i as z,w as F,S as P,l as B,k as E,Q as _}from"./index-b9KmiZFC.js";import{P as R}from"./play-BwRodnBZ.js";import{L as q,F as D}from"./Faq5-BGSlcL9K.js";import"./index-CimJrWf-.js";import"./chevron-right-BfMZnhJg.js";import"./gavel-Cw3hJ0jQ.js";import"./chart-no-axes-column-cpsF7gs1.js";import"./scale-DHpGNIp9.js";import"./plus-BLJSGRX0.js";function W(t){t.values.forEach(s=>s.stop())}function x(t,s){[...s].reverse().forEach(r=>{const n=t.getVariant(r);n&&b(t,n),t.variantChildren&&t.variantChildren.forEach(l=>{x(l,s)})})}function A(t,s){if(Array.isArray(s))return x(t,s);if(typeof s=="string")return x(t,[s]);b(t,s)}function I(){const t=new Set,s={subscribe(i){return t.add(i),()=>void t.delete(i)},start(i,r){const n=[];return t.forEach(l=>{n.push(N(l,i,{transitionOverride:r}))}),Promise.all(n)},set(i){return t.forEach(r=>{A(r,i)})},stop(){t.forEach(i=>{W(i)})},mount(){return()=>{s.stop()}}};return s}function O(){const t=C(I);return S(t.mount,[]),t}const M=O,p="/images/placeholder.svg",V=t=>{const{heading:s,description:i,buttons:r,images:n,className:l=""}={...Y,...t},d=M();return y.useEffect(()=>{d.start({x:["0%","-50%"],transition:{x:{duration:20,repeat:1/0,ease:"linear",repeatType:"loop"}}})},[]),e.jsxs("section",{className:`grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 ${l}`,children:[e.jsxs("div",{className:"mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end",children:[e.jsx("h1",{className:"mb-4 sm:mb-5 font-heading text-4xl sm:text-5xl font-bold text-cod-gray md:mb-6 md:text-6xl lg:text-7xl",children:s}),e.jsx("p",{className:"font-sans text-base sm:text-lg text-cod-gray-light",children:i}),e.jsx("div",{className:"mt-6 flex flex-wrap gap-4 md:mt-8",children:r.map((m,a)=>e.jsx(f,{href:m.href,className:`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${m.variant==="primary"?"bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray":"bg-pippin text-cod-gray hover:bg-pippin-light"}`,children:m.title},a))})]}),e.jsx("div",{className:"flex items-center gap-4 overflow-hidden bg-gallery py-8 md:py-16 lg:h-screen",children:e.jsx(h.div,{className:"flex gap-4",animate:d,style:{width:"200%"},children:[...Array(2)].map((m,a)=>e.jsx("div",{className:"flex gap-4 min-w-[50%]",children:n.map((o,c)=>e.jsx("div",{className:"relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] shrink-0",children:e.jsx("img",{className:"absolute inset-0 size-full object-cover rounded-lg",src:o.src,alt:o.alt,loading:a===0?"eager":"lazy",decoding:"async"})},c))},a))})})]})},Y={heading:"Expert Business Law Services for Your Success",description:"Comprehensive legal solutions to protect and grow your business. From entity formation to contract management, we provide the guidance you need to thrive in today's business environment.",buttons:[{title:"Schedule Consultation",variant:"primary",href:"#"},{title:"View Services",variant:"secondary",href:"#"}],images:[{src:p,alt:"Business Law Services - Contract Review"},{src:p,alt:"Business Law Services - Entity Formation"},{src:p,alt:"Business Law Services - Legal Compliance"}]},g="/images/placeholder.svg",$=t=>{const{tagline:s,heading:i,description:r,features:n,className:l=""}={...Q,...t},[d,m]=y.useState(0),a=o=>{m(c=>c===o&&n.filter((te,w)=>w===c).length===1?c:c===o?null:o)};return e.jsx("section",{className:`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${l}`,children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"mb-8 sm:mb-12 w-full max-w-3xl md:mb-16 lg:mb-20",children:[e.jsx("p",{className:"mb-3 font-heading text-base sm:text-lg font-semibold text-pippin-darker md:mb-4",children:s}),e.jsx("h2",{className:"mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl",children:i}),e.jsx("p",{className:"font-sans text-base sm:text-lg text-cod-gray-light",children:r})]}),e.jsx("div",{className:"flex w-full flex-col overflow-hidden rounded-lg border border-gallery bg-white lg:h-[90vh] lg:flex-row",children:n.map((o,c)=>e.jsx(H,{isActive:d===c,setIsActive:()=>a(c),...o},c))})]})})},H=({isActive:t,setIsActive:s,...i})=>{const r=L("(max-width: 991px)");return e.jsxs(h.div,{className:"flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-gallery last:border-r-0",onClick:s,animate:{width:r||t?"100%":"5rem"},transition:{duration:.3,ease:"easeInOut"},children:[e.jsxs("div",{className:"relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-gallery py-8 first:border-t-0 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none",children:[e.jsx("p",{className:"absolute left-6 whitespace-nowrap font-heading text-lg font-bold text-cod-gray md:left-10 md:text-xl lg:relative lg:left-0",children:i.columnText}),e.jsx("h3",{className:"hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:font-heading lg:text-xl lg:font-bold lg:text-cod-gray",children:i.verticalText}),e.jsx("p",{className:"font-heading text-lg font-bold text-cod-gray md:text-xl lg:hidden",children:i.horizontalText})]}),r?e.jsx(h.div,{className:"w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[40rem] lg:overflow-auto",animate:{height:t?"auto":"0px"},transition:{duration:.3,ease:"easeInOut"},children:e.jsx(v,{feature:i})}):e.jsx("div",{className:"w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[40rem] lg:overflow-auto",children:e.jsx(v,{feature:i})})]})},v=({feature:t})=>e.jsxs("div",{className:"flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-8 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16",children:[e.jsx("h3",{className:"mb-4 font-heading text-2xl font-bold text-cod-gray sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl",children:t.heading}),e.jsx("p",{className:"font-sans text-base text-cod-gray-light sm:text-lg",children:t.description}),e.jsx("div",{className:"mt-6 h-64 sm:mt-8 sm:h-80 md:mt-10 md:h-[25rem] lg:mt-12",children:e.jsx("img",{src:t.image.src,alt:t.image.alt,className:"size-full rounded-lg object-cover",loading:"lazy"})})]}),Q={tagline:"Entity Formation",heading:"Building Strong Foundations for Your Business",description:"Expert guidance in selecting and establishing the right business structure to protect your interests and support your growth objectives.",features:[{columnText:"01",verticalText:"LLC Formation",horizontalText:"LLC Formation",heading:"Limited Liability Company",description:"Protect your personal assets while maintaining operational flexibility. Our LLC formation services include operating agreements, member agreements, and all necessary state filings.",image:{src:g,alt:"LLC Formation Services"}},{columnText:"02",verticalText:"Corporations",horizontalText:"Corporations",heading:"C-Corps & S-Corps",description:"Strategic incorporation services to establish your business as a corporation. We handle shareholder agreements, bylaws, and compliance requirements to ensure proper corporate governance.",image:{src:g,alt:"Corporation Formation Services"}},{columnText:"03",verticalText:"Partnerships",horizontalText:"Partnerships",heading:"Partnership Structures",description:"Comprehensive partnership formation services including partnership agreements, profit sharing structures, and liability protection strategies for all partners involved.",image:{src:g,alt:"Partnership Formation Services"}},{columnText:"04",verticalText:"Non-Profits",horizontalText:"Non-Profits",heading:"Non-Profit Organizations",description:"Specialized services for establishing non-profit organizations, including 501(c)(3) applications, board governance structures, and compliance with state and federal regulations.",image:{src:g,alt:"Non-Profit Formation Services"}}]},u="/images/placeholder.svg",Z=t=>{const{tagline:s,heading:i,description:r,tabs:n,buttons:l,defaultTabValue:d,className:m=""}={...G,...t};return e.jsx("section",{className:`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${m}`,children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"mx-auto mb-8 sm:mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20",children:[e.jsx("p",{className:"mb-3 font-heading text-base sm:text-lg font-semibold text-pippin-darker md:mb-4",children:s}),e.jsx("h2",{className:"mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl",children:i}),e.jsx("p",{className:"font-sans text-base sm:text-lg text-cod-gray-light",children:r}),e.jsx("div",{className:"mt-6 flex items-center justify-center gap-x-4 md:mt-8",children:l.map((a,o)=>e.jsx(f,{href:a.href,className:a.variant==="primary"?"rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light inline-flex items-center gap-2":a.variant==="link"?"text-pippin-darker hover:text-pippin-darkest font-semibold inline-flex items-center gap-1":"rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light inline-flex items-center gap-2",children:a.title},o))})]}),e.jsxs(T,{defaultValue:d,className:"grid grid-cols-1 items-center gap-y-8 sm:gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20",children:[n.map((a,o)=>e.jsxs(k,{value:a.value,className:"data-[state=active]:animate-tabs rounded-lg overflow-hidden",children:[a.image&&e.jsx("img",{src:a.image.src,alt:a.image.alt,className:"w-full h-full object-cover",loading:"lazy"}),a.video&&e.jsxs(z,{children:[e.jsx(F,{asChild:!0,children:e.jsxs("button",{className:"relative flex w-full items-center justify-center rounded-lg overflow-hidden",children:[e.jsx("img",{src:a.video.image.src,alt:a.video.image.alt,className:"w-full h-full object-cover",loading:"lazy"}),e.jsx("span",{className:"absolute inset-0 z-10 bg-black/50"}),e.jsx(R,{className:"absolute z-20 size-16 text-white"})]})}),e.jsx(P,{children:e.jsx(B,{video:a.video.url})})]})]},o)),e.jsx(E,{className:"grid grid-cols-1 items-center gap-x-4",children:n.map((a,o)=>e.jsxs(_,{value:a.value,className:"flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-4 pl-6 pr-0 text-left data-[state=active]:border-l-pippin data-[state=active]:bg-transparent data-[state=active]:text-cod-gray md:pl-8",children:[e.jsx("h3",{className:"mb-3 font-heading text-xl font-bold text-cod-gray sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl",children:a.heading}),e.jsx("p",{className:"font-sans text-base text-cod-gray-light",children:a.description})]},o))})]})]})})},G={tagline:"Contract Management",heading:"Expert Contract Solutions for Your Business",description:"Comprehensive contract services to protect your interests and ensure smooth business operations.",defaultTabValue:"drafting",tabs:[{value:"drafting",heading:"Contract Drafting",description:"Custom contract creation tailored to your specific business needs, ensuring comprehensive coverage and protection of your interests.",image:{src:u,alt:"Contract Drafting Services"}},{value:"review",heading:"Contract Review",description:"Thorough analysis of contracts to identify potential risks, ensure compliance, and protect your business interests.",image:{src:u,alt:"Contract Review Services"}},{value:"negotiation",heading:"Contract Negotiation",description:"Strategic negotiation services to secure favorable terms while maintaining positive business relationships.",image:{src:u,alt:"Contract Negotiation Services"}}],buttons:[{title:"Schedule Consultation",variant:"primary",href:"#"},{title:"Learn More",variant:"link",href:"#"}]},K="/images/placeholder.svg",J=t=>{const{heading:s,description:i,image:r,className:n=""}={...U,...t};return e.jsx("section",{className:`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${n}`,children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"mb-8 sm:mb-12 grid grid-cols-1 items-start justify-between gap-x-8 gap-y-6 md:mb-16 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20",children:[e.jsx("h2",{className:"font-heading text-3xl font-bold text-cod-gray sm:text-4xl md:text-5xl lg:text-6xl",children:s}),e.jsx("p",{className:"font-sans text-base text-cod-gray-light sm:text-lg",children:i})]}),e.jsx("div",{className:"rounded-lg overflow-hidden",children:e.jsx("img",{src:r.src,className:"w-full object-cover",alt:r.alt,loading:"lazy"})})]})})},U={heading:"Ensuring Regulatory Compliance for Your Business",description:"Stay compliant with state and federal regulations while focusing on your business growth. Our comprehensive compliance services help you navigate complex regulatory requirements, implement proper procedures, and maintain ongoing compliance to protect your business from potential legal issues.",image:{src:K,alt:"Regulatory Compliance Services"}},X=t=>{const{heading:s,description:i,buttons:r,className:n=""}={...ee,...t};return e.jsx("section",{id:"relume",className:`relative px-[5%] py-16 md:py-24 lg:py-28 bg-pippin ${n}`,children:e.jsxs("div",{className:"container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16",children:[e.jsx("h1",{className:"font-heading text-4xl font-bold text-cod-gray md:text-6xl lg:text-7xl",children:s}),e.jsxs("div",{children:[e.jsx("p",{className:"font-sans text-base text-cod-gray-light md:text-lg",children:i}),e.jsx("div",{className:"mt-6 flex flex-wrap gap-4 md:mt-8",children:r.map((l,d)=>e.jsx(f,{href:l.href,className:"inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300",children:l.title},d))})]})]})})},ee={heading:"Ready to Discuss Your Legal Needs?",description:"Our experienced team of business law attorneys is here to help protect and grow your business. Contact us today to schedule a consultation and learn how we can assist with your legal matters.",buttons:[{title:"Schedule Consultation",variant:"secondary",href:route("contact")}]};function pe(){return e.jsxs(j,{title:"Business Law Services | Hebert Thomas Law",description:"Comprehensive business law services including entity formation, contracts, compliance, and more for companies in Louisiana",children:[e.jsx(V,{className:"bg-white",heading:"Expert Business Law Services for Your Success",description:"Comprehensive legal solutions to protect and grow your business. From entity formation to contract management, we provide the guidance you need to thrive in today's business environment.",buttons:[{title:"Schedule Consultation",variant:"primary",href:route("contact")}],images:[{src:"/images/other/business-law/shutterstock_2136488967.jpg",alt:"Business Law Services - Contract Review"},{src:"/images/other/business-law/shutterstock_2192921481.jpg",alt:"Business Law Services - Entity Formation"},{src:"/images/other/business-law/shutterstock_2303744865.jpg",alt:"Business Law Services - Legal Compliance"}]}),e.jsx($,{id:"services",className:"bg-gallery",tagline:"Entity Formation",heading:"Building Strong Foundations for Your Business",description:"Expert guidance in selecting and establishing the right business structure to protect your interests and support your growth objectives.",features:[{columnText:"01",verticalText:"LLC Formation",horizontalText:"LLC Formation",heading:"Limited Liability Company",description:"Protect your personal assets while maintaining operational flexibility. Our LLC formation services include operating agreements, member agreements, and all necessary state filings.",image:{src:"/images/other/business-law/shutterstock_2312975429.jpg",alt:"LLC Formation Services"}},{columnText:"02",verticalText:"Corporations",horizontalText:"Corporations",heading:"C-Corps & S-Corps",description:"Strategic incorporation services to establish your business as a corporation. We handle shareholder agreements, bylaws, and compliance requirements to ensure proper corporate governance.",image:{src:"/images/other/business-law/shutterstock_2322560073.jpg",alt:"Corporation Formation Services"}},{columnText:"03",verticalText:"Partnerships",horizontalText:"Partnerships",heading:"Partnership Structures",description:"Comprehensive partnership formation services including partnership agreements, profit sharing structures, and liability protection strategies for all partners involved.",image:{src:"/images/other/business-law/shutterstock_2380776367.jpg",alt:"Partnership Formation Services"}},{columnText:"04",verticalText:"Non-Profits",horizontalText:"Non-Profits",heading:"Non-Profit Organizations",description:"Specialized services for establishing non-profit organizations, including 501(c)(3) applications, board governance structures, and compliance with state and federal regulations.",image:{src:"/images/other/business-law/shutterstock_2470549275.jpg",alt:"Non-Profit Formation Services"}}]}),e.jsx(Z,{className:"bg-white",tagline:"Contract Management",heading:"Expert Contract Solutions for Your Business",description:"Comprehensive contract services to protect your interests and ensure smooth business operations.",defaultTabValue:"drafting",tabs:[{value:"drafting",heading:"Contract Drafting",description:"Custom contract creation tailored to your specific business needs, ensuring comprehensive coverage and protection of your interests.",image:{src:"/images/other/business-law/shutterstock_1477336853.jpg",alt:"Contract Drafting Services"}},{value:"review",heading:"Contract Review",description:"Thorough analysis of contracts to identify potential risks, ensure compliance, and protect your business interests.",image:{src:"/images/other/business-law/shutterstock_1792964791.jpg",alt:"Contract Review Services"}},{value:"negotiation",heading:"Contract Negotiation",description:"Strategic negotiation services to secure favorable terms while maintaining positive business relationships.",image:{src:"/images/other/business-law/shutterstock_1903262713.jpg",alt:"Contract Negotiation Services"}}],buttons:[{title:"Schedule Consultation",variant:"primary",href:route("contact")}]}),e.jsx(J,{id:"compliance",className:"bg-gallery",heading:"Ensuring Regulatory Compliance for Your Business",description:"Stay compliant with state and federal regulations while focusing on your business growth. Our comprehensive compliance services help you navigate complex regulatory requirements, implement proper procedures, and maintain ongoing compliance to protect your business from potential legal issues.",image:{src:"/images/other/business-law/shutterstock_1918278398.jpg",alt:"Regulatory Compliance Services"}}),e.jsx(q,{className:"bg-white",tagline:"Dispute Resolution",heading:"Resolving Business Conflicts Effectively",description:"We offer comprehensive dispute resolution services to help businesses resolve conflicts efficiently while preserving important relationships and protecting your interests.",sections:[{icon:{src:"/images/other/business-law/shutterstock_765674290.jpg",alt:"Mediation Services"},heading:"Mediation",description:"Professional mediation services to facilitate productive dialogue and reach mutually beneficial resolutions while maintaining business relationships."},{icon:{src:"/images/other/business-law/shutterstock_1477336853.jpg",alt:"Arbitration Services"},heading:"Arbitration",description:"Expert arbitration representation to resolve disputes efficiently through a structured process, saving time and resources compared to litigation."},{icon:{src:"/images/other/business-law/shutterstock_1792964791.jpg",alt:"Litigation Support"},heading:"Litigation Support",description:"Strategic litigation support when necessary, providing strong advocacy and representation to protect your business interests in court."}],buttons:[{title:"Schedule Consultation",variant:"primary",href:route("contact")}]}),e.jsx(D,{id:"faq",className:"bg-gallery",heading:"Common Questions",description:"Find answers to frequently asked questions about our business law services and how we can help protect and grow your business.",questions:[{title:"What business structure is right for my company?",answer:"The ideal business structure depends on various factors including liability protection needs, tax considerations, management flexibility, and growth plans. We'll help evaluate your specific situation and recommend the most advantageous structure, whether it's an LLC, corporation, partnership, or other entity type."},{title:"How long does it take to form a new business entity?",answer:"The timeline varies depending on the entity type and state requirements. Generally, basic LLC or corporation formation can be completed in 1-2 weeks. However, more complex structures or those requiring special permits may take longer. We'll provide a specific timeline based on your needs."},{title:"What contract review services do you provide?",answer:"Our contract review services include comprehensive analysis of terms and conditions, risk assessment, compliance verification, and recommendations for modifications. We review all types of business contracts including service agreements, leases, employment contracts, and vendor agreements."},{title:"How do you help with regulatory compliance?",answer:"We provide ongoing compliance support including regulatory audits, policy development, compliance training, and updates on changing regulations. We help ensure your business meets all state and federal requirements while implementing efficient compliance processes."},{title:"What is the best way to resolve a business dispute?",answer:"The best resolution method depends on the specific situation, relationship dynamics, and desired outcomes. We typically recommend starting with mediation for its cost-effectiveness and relationship preservation benefits. If needed, we can escalate to arbitration or litigation while always focusing on your business objectives."}],footerHeading:"Need More Information?",footerDescription:"Contact us for a consultation to discuss your specific business law needs.",button:{title:"Schedule Consultation",variant:"primary",href:route("contact")}}),e.jsx(X,{})]})}export{pe as default};
