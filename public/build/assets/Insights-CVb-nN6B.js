import{W as N,j as e,a as l,q as w,r as k,Y as S}from"./app-B3ttSp7m.js";import{M as C}from"./MarcomLayout-DW302fuz.js";import{c as b}from"./clsx-B-dksMZM.js";import{X as L}from"./x-_MA3TxW8.js";import{S as P}from"./search-BkBm2J_r.js";import{C as _}from"./chevron-left-BBCDD_kj.js";import{C as D}from"./chevron-right-1PYBo-pq.js";import{_ as H,$ as I,a0 as T,a1 as W,W as v,p as z}from"./index-B9fgh4US.js";import{P as A}from"./plus-inFlWf4h.js";import"./index-CL19ubyJ.js";const M=i=>{const{tagline:d,heading:m,description:h,buttons:y,blogPosts:x,links:g}={...q,...i},{data:o,setData:a,get:s}=N({search:""}),u=t=>{t.preventDefault(),s(route("insights",{search:o.search}),{preserveState:!0,preserveScroll:!0})},p=()=>{a("search",""),s(route("insights",{category:null,search:null}),{preserveState:!0,preserveScroll:!0})};return e.jsx("section",{id:"relume",className:"px-[5%] py-16 md:py-24 lg:py-28",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mb-12 md:mb-18 lg:mb-20",children:[e.jsxs("div",{className:"mx-auto w-full max-w-lg text-center",children:[e.jsx("p",{className:"mb-3 font-sans font-semibold text-cod-gray-light md:mb-4",children:d}),e.jsx("h1",{className:"mb-5 font-heading text-6xl font-bold text-cod-gray md:mb-6 md:text-9xl lg:text-10xl",children:m}),e.jsx("p",{className:"mb-6 font-sans text-cod-gray-light md:text-md",children:h}),e.jsx(l,{href:route("newsletter"),className:"inline-flex items-center justify-center rounded-full border border-cod-gray bg-cod-gray px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-pippin hover:text-cod-gray",children:"Subscribe to Newsletter"})]}),e.jsx("div",{className:"mx-auto mt-8 max-w-md",children:e.jsxs("form",{onSubmit:u,className:"relative",children:[e.jsx("input",{type:"text",value:o.search,onChange:t=>a("search",t.target.value),placeholder:"Search articles...",className:"w-full rounded-full border border-cod-gray/20 px-6 py-2.5 pr-24 text-sm font-sans text-cod-gray placeholder:text-cod-gray-light focus:border-cod-gray focus:outline-none focus:ring-1 focus:ring-cod-gray"}),o.search&&e.jsx("button",{type:"button",onClick:p,className:"absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-2 text-cod-gray-light transition-colors duration-200 hover:text-cod-gray",children:e.jsx(L,{className:"size-5"})}),e.jsx("button",{type:"submit",className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-cod-gray-light transition-colors duration-200 hover:text-cod-gray",children:e.jsx(P,{className:"size-5"})})]})})]}),e.jsxs("div",{className:"flex flex-col justify-start",children:[e.jsx("div",{className:"no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start gap-2 overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0",children:y.map((t,r)=>e.jsx(l,{href:t.href,className:b("rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200",{"border border-cod-gray bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray":r===0,"border border-transparent text-cod-gray-light hover:border-cod-gray hover:text-cod-gray":!t.active&&r!==0,"border border-cod-gray text-cod-gray":t.active&&r!==0}),children:t.title},r))}),e.jsx("div",{className:"grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3",children:x.length>0?x.map((t,r)=>e.jsxs("div",{children:[e.jsx(l,{href:t.url,className:"mb-6 inline-block w-full max-w-full",children:e.jsx("div",{className:"w-full overflow-hidden",children:e.jsx("img",{src:t.image.src,alt:t.image.alt,className:"aspect-[3/2] size-full object-cover transition-transform duration-500 hover:scale-105"})})}),e.jsx(l,{href:t.url,className:"mb-2 mr-4 inline-block max-w-full text-sm font-semibold text-cod-gray-light hover:text-cod-gray transition-colors duration-200",children:t.category}),e.jsx(l,{href:t.url,className:"mb-2 block max-w-full group",children:e.jsx("h5",{className:"font-heading text-xl font-bold text-cod-gray transition-colors duration-200 group-hover:text-cod-gray-light md:text-2xl",children:t.title})}),e.jsx("p",{className:"font-sans text-cod-gray-light",children:t.description}),e.jsxs("div",{className:"mt-6 flex items-center",children:[e.jsx("div",{className:"mr-4 shrink-0",children:e.jsx("img",{src:t.avatar.src,alt:t.avatar.alt,className:"size-12 min-h-12 min-w-12 rounded-full object-cover"})}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm font-sans font-semibold text-cod-gray",children:t.fullName}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-sm font-sans text-cod-gray-light",children:t.date}),e.jsx("span",{className:"mx-2 text-cod-gray-light",children:"•"}),e.jsx("p",{className:"text-sm font-sans text-cod-gray-light",children:t.readTime})]})]})]})]},r)):e.jsxs("div",{className:"col-span-full text-center py-12",children:[e.jsx("p",{className:"font-sans text-xl text-cod-gray-light mb-4",children:"No articles found"}),e.jsx("p",{className:"font-sans text-cod-gray-light",children:"Try adjusting your search terms or browse all articles"}),e.jsx(l,{href:route("insights"),className:"mt-6 inline-flex items-center justify-center rounded-full border border-cod-gray px-6 py-2.5 text-sm font-semibold text-cod-gray transition-all duration-200 hover:bg-cod-gray hover:text-white",children:"View All Articles"})]})}),g&&g.length>3&&e.jsx("div",{className:"mt-12 flex items-center justify-center gap-2",children:g.map((t,r)=>{if(t.url===null)return e.jsx("span",{className:"rounded-full px-4 py-2 text-sm font-semibold text-cod-gray-light",dangerouslySetInnerHTML:{__html:t.label}},r);const f=t.active,j=t.label.includes("Previous")||t.label.includes("Next");return e.jsxs(l,{href:t.url,className:b("flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",{"bg-cod-gray text-white":f,"text-cod-gray-light hover:text-cod-gray":!f,"gap-1":j}),children:[t.label.includes("Previous")&&e.jsx(_,{className:"size-4"}),e.jsx("span",{dangerouslySetInnerHTML:{__html:t.label.replace("Previous","").replace("Next","")}}),t.label.includes("Next")&&e.jsx(D,{className:"size-4"})]},r)})})]})]})})},q={tagline:"Blog",heading:"Short heading goes here",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{title:"View all",variant:"secondary"},{title:"Category one",variant:"link"},{title:"Category two",variant:"link"},{title:"Category three",variant:"link"},{title:"Category four",variant:"link"}],categoryLink:"#",blogPosts:[],links:[]},n={heading:"Frequently Asked Questions",description:"Find answers to common questions about our legal services and expertise.",questions:[{title:"What areas of law do you specialize in?",answer:"We specialize in trademark law, business law, estate planning, general counsel services, and privacy & data protection. Our experienced team provides comprehensive legal solutions tailored to your specific needs."},{title:"How can I protect my intellectual property?",answer:"We offer complete trademark services including clearance searches, registration, monitoring, enforcement, renewal, licensing, and international services. Our team will guide you through the process of securing and maintaining your intellectual property rights."},{title:"What is the trademark registration process?",answer:"The trademark registration process involves several steps: conducting a clearance search, filing an application, responding to office actions if any, publication for opposition, and finally registration. We handle the entire process for you, ensuring proper protection of your brand."},{title:"Do you offer international trademark services?",answer:"Yes, we provide comprehensive international trademark services. We can help you protect your brand globally through various international treaties and conventions, managing the process across different jurisdictions."},{title:"How long does trademark registration take?",answer:"The trademark registration process typically takes 8-12 months, though this can vary depending on various factors including office actions and oppositions. We'll keep you informed throughout the process and handle any challenges that arise."}],footerHeading:"Need more information?",footerDescription:"Contact our team for personalized assistance with your legal needs.",button:{title:"Contact Us",variant:"secondary"}},c={heading:"Stay Updated with Legal Insights",description:"Subscribe to our newsletter for the latest updates on trademark law, intellectual property, and legal strategies.",inputPlaceholder:"Enter your email address",button:{title:"Subscribe",variant:"secondary"},termsAndConditions:`
  <p class='text-xs font-sans text-cod-gray-light'>
    By subscribing, you agree to our
    <a href='/privacy-policy' class='text-cod-gray hover:text-cod-gray-dark underline transition-colors duration-200'> Privacy Policy</a>.
  </p>
  `};function B(){var o;const{blogPosts:i,categories:d,filters:m}=w().props,[h,y]=k.useState(""),x=a=>{a.preventDefault(),console.log({emailInput:h})},g={tagline:"Legal Insights",heading:"Knowledge Hub",description:"Stay informed with our latest articles on intellectual property law, trademark protection, and business strategies.",buttons:[{title:"View all",variant:"secondary",href:route("insights"),active:!m.category&&!m.search},...(d==null?void 0:d.map(a=>({title:a.name,variant:"link",href:route("insights",{category:a.slug}),active:m.category===a.slug})))||[]],blogPosts:((o=i.data)==null?void 0:o.map(a=>{var s,u,p,t;return{url:route("insight.detail",{slug:a.slug}),image:{src:a.featured_image||"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",alt:a.title},category:((s=a.category)==null?void 0:s.name)||"Legal Insights",title:a.title,description:a.excerpt,avatar:{src:a.author_profile_image||"/images/web-logo-black (2).svg",alt:((u=a.author)==null?void 0:u.name)||"Author"},fullName:((p=a.author)==null?void 0:p.name)||"Hebert-Thomas Law",date:new Date(a.published_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),readTime:`${Math.ceil(((t=a.content)==null?void 0:t.split(" ").length)/200)||5} min read`}}))||[],links:i.links};return e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx("title",{children:"Insights - Hebert-Thomas Law"}),e.jsx("meta",{name:"description",content:"Legal insights and resources from Hebert-Thomas Law"})]}),e.jsx(M,{...g}),e.jsx("section",{id:"relume",className:"px-[5%] py-16 md:py-24 lg:py-28 bg-gallery",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mb-12 max-w-lg md:mb-18 lg:mb-20",children:[e.jsx("h2",{className:"mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl",children:n.heading}),e.jsx("p",{className:"font-sans text-cod-gray-light md:text-md",children:n.description})]}),e.jsx(H,{type:"multiple",className:"grid items-start justify-stretch gap-4",children:n.questions.map((a,s)=>e.jsxs(I,{value:`item-${s}`,className:"border border-cod-gray bg-white px-5 md:px-6",children:[e.jsx(T,{icon:e.jsx(A,{className:"h-7 w-7 shrink-0 text-cod-gray transition-transform duration-300 md:h-8 md:w-8"}),className:"py-4 font-sans text-cod-gray md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45",children:a.title}),e.jsx(W,{className:"font-sans text-cod-gray-light md:pb-6",children:a.answer})]},s))}),e.jsxs("div",{className:"mt-12 md:mt-18 lg:mt-20",children:[e.jsx("h4",{className:"mb-3 font-heading text-2xl font-bold text-cod-gray md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl",children:n.footerHeading}),e.jsx("p",{className:"font-sans text-cod-gray-light md:text-md",children:n.footerDescription}),e.jsx("div",{className:"mt-6 md:mt-8",children:e.jsx(l,{href:route("contact"),children:e.jsx(v,{variant:"secondary",className:"bg-cod-gray text-white hover:bg-cod-gray-dark",children:n.button.title})})})]})]})}),e.jsx("section",{id:"relume",className:"px-[5%] py-16 md:py-24 lg:py-28 bg-white",children:e.jsxs("div",{className:"container grid w-full grid-cols-1 items-start justify-between gap-6 md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20",children:[e.jsxs("div",{className:"w-full max-w-lg",children:[e.jsx("h2",{className:"mb-3 font-heading text-4xl font-bold text-cod-gray leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl",children:c.heading}),e.jsx("p",{className:"font-sans text-cod-gray-light md:text-md",children:c.description})]}),e.jsxs("div",{children:[e.jsxs("form",{className:"mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4",onSubmit:x,children:[e.jsx(z,{id:"email",type:"email",placeholder:c.inputPlaceholder,value:h,onChange:a=>y(a.target.value),className:"font-sans text-cod-gray placeholder:text-cod-gray-light focus:border-cod-gray focus:ring-cod-gray"}),e.jsx(v,{...c.button,className:"bg-cod-gray text-white hover:bg-cod-gray-dark",children:c.button.title})]}),e.jsx("div",{dangerouslySetInnerHTML:{__html:c.termsAndConditions}})]})]})})]})}B.layout=i=>e.jsx(C,{children:i});export{B as default};
