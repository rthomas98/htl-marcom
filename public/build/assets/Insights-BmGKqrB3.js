import{W as v,j as e,a as l,q as j,r as N,Y as w}from"./app-CgDMtFhf.js";import{M as k}from"./MarcomLayout-DV4AWyyc.js";import{c as p}from"./clsx-B-dksMZM.js";import{X as S}from"./x-DajDjnah.js";import{S as _}from"./search-Bj_2Z4rM.js";import{C as L}from"./chevron-left-Bs2FYVU4.js";import{C}from"./chevron-right-B17RnOVV.js";import{_ as D,A as P,B as H,D as T,W}from"./index-CO_vWVPu.js";import{P as z}from"./plus-CKqHJzwq.js";import"./index-D51ahks6.js";const I=i=>{const{tagline:c,heading:d,description:x,buttons:u,blogPosts:a,links:r}={...A,...i},{data:o,setData:m,get:g}=v({search:""}),f=t=>{t.preventDefault(),g(route("insights",{search:o.search}),{preserveState:!0,preserveScroll:!0})},y=()=>{m("search",""),g(route("insights",{category:null,search:null}),{preserveState:!0,preserveScroll:!0})};return e.jsx("section",{id:"relume",className:"px-[5%] py-16 md:py-24 lg:py-28",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mb-12 md:mb-18 lg:mb-20",children:[e.jsxs("div",{className:"mx-auto w-full max-w-lg text-center",children:[e.jsx("p",{className:"mb-3 font-sans font-semibold text-cod-gray-light md:mb-4",children:c}),e.jsx("h1",{className:"mb-5 font-heading text-6xl font-bold text-cod-gray md:mb-6 md:text-9xl lg:text-10xl",children:d}),e.jsx("p",{className:"mb-6 font-sans text-cod-gray-light md:text-md",children:x}),e.jsx(l,{href:route("newsletter"),className:"inline-flex items-center justify-center rounded-full border border-cod-gray bg-cod-gray px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-pippin hover:text-cod-gray",children:"Subscribe to Newsletter"})]}),e.jsx("div",{className:"mx-auto mt-8 max-w-md",children:e.jsxs("form",{onSubmit:f,className:"relative",children:[e.jsx("input",{type:"text",value:o.search,onChange:t=>m("search",t.target.value),placeholder:"Search articles...",className:"w-full rounded-full border border-cod-gray/20 px-6 py-2.5 pr-24 text-sm font-sans text-cod-gray placeholder:text-cod-gray-light focus:border-cod-gray focus:outline-none focus:ring-1 focus:ring-cod-gray"}),o.search&&e.jsx("button",{type:"button",onClick:y,className:"absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-2 text-cod-gray-light transition-colors duration-200 hover:text-cod-gray",children:e.jsx(S,{className:"size-5"})}),e.jsx("button",{type:"submit",className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-cod-gray-light transition-colors duration-200 hover:text-cod-gray",children:e.jsx(_,{className:"size-5"})})]})})]}),e.jsxs("div",{className:"flex flex-col justify-start",children:[e.jsx("div",{className:"no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start gap-2 overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0",children:u.map((t,s)=>e.jsx(l,{href:t.href,className:p("rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200",{"border border-cod-gray bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray":s===0,"border border-transparent text-cod-gray-light hover:border-cod-gray hover:text-cod-gray":!t.active&&s!==0,"border border-cod-gray text-cod-gray":t.active&&s!==0}),children:t.title},s))}),e.jsx("div",{className:"grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3",children:a.length>0?a.map((t,s)=>e.jsxs("div",{children:[e.jsx(l,{href:t.url,className:"mb-6 inline-block w-full max-w-full",children:e.jsx("div",{className:"w-full overflow-hidden rounded-2xl",children:e.jsx("img",{src:t.image.src,alt:t.image.alt,className:"aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105",loading:"lazy",onError:h=>{console.error("Image failed to load:",{src:t.image.src,alt:t.image.alt}),h.target.onerror=null,h.target.src="/images/placeholders/blog-placeholder.svg"}})})}),e.jsx(l,{href:t.url,className:"mb-2 mr-4 inline-block max-w-full text-sm font-semibold text-cod-gray-light hover:text-cod-gray transition-colors duration-200",children:t.category}),e.jsx(l,{href:t.url,className:"mb-2 block max-w-full group",children:e.jsx("h5",{className:"font-heading text-xl font-bold text-cod-gray transition-colors duration-200 group-hover:text-cod-gray-light md:text-2xl line-clamp-2",children:t.title})}),e.jsx("p",{className:"font-sans text-cod-gray-light line-clamp-3",children:t.description}),e.jsxs("div",{className:"mt-6 flex items-center",children:[e.jsx("div",{className:"mr-4 shrink-0",children:e.jsx("img",{src:t.avatar.src,alt:t.avatar.alt,className:"size-12 min-h-12 min-w-12 rounded-full object-cover"})}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm font-sans font-semibold text-cod-gray",children:t.fullName}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-sm font-sans text-cod-gray-light",children:t.date}),e.jsx("span",{className:"mx-2 text-cod-gray-light",children:"•"}),e.jsx("p",{className:"text-sm font-sans text-cod-gray-light",children:t.readTime})]})]})]})]},s)):e.jsxs("div",{className:"col-span-full text-center py-12",children:[e.jsx("p",{className:"font-sans text-xl text-cod-gray-light mb-4",children:"No articles found"}),e.jsx("p",{className:"font-sans text-cod-gray-light",children:"Try adjusting your search terms or browse all articles"}),e.jsx(l,{href:route("insights"),className:"mt-6 inline-flex items-center justify-center rounded-full border border-cod-gray px-6 py-2.5 text-sm font-semibold text-cod-gray transition-all duration-200 hover:bg-cod-gray hover:text-white",children:"View All Articles"})]})}),r&&r.length>3&&e.jsx("div",{className:"mt-12 flex items-center justify-center gap-2",children:r.map((t,s)=>{if(t.url===null)return e.jsx("span",{className:"rounded-full px-4 py-2 text-sm font-semibold text-cod-gray-light",dangerouslySetInnerHTML:{__html:t.label}},s);const h=t.active,b=t.label.includes("Previous")||t.label.includes("Next");return e.jsxs(l,{href:t.url,className:p("flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",{"bg-cod-gray text-white":h,"text-cod-gray-light hover:text-cod-gray":!h,"gap-1":b}),children:[t.label.includes("Previous")&&e.jsx(L,{className:"size-4"}),e.jsx("span",{dangerouslySetInnerHTML:{__html:t.label.replace("Previous","").replace("Next","")}}),t.label.includes("Next")&&e.jsx(C,{className:"size-4"})]},s)})})]})]})})},A={tagline:"Blog",heading:"Short heading goes here",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{title:"View all",variant:"secondary"},{title:"Category one",variant:"link"},{title:"Category two",variant:"link"},{title:"Category three",variant:"link"},{title:"Category four",variant:"link"}],categoryLink:"#",blogPosts:[],links:[]},n={heading:"Frequently Asked Questions",description:"Find answers to common questions about our legal services and expertise.",questions:[{title:"What areas of law do you specialize in?",answer:"We specialize in trademark law, business law, estate planning, general counsel services, and privacy & data protection. Our experienced team provides comprehensive legal solutions tailored to your specific needs."},{title:"How can I protect my intellectual property?",answer:"We offer complete trademark services including clearance searches, registration, monitoring, enforcement, renewal, licensing, and international services. Our team will guide you through the process of securing and maintaining your intellectual property rights."},{title:"What is the trademark registration process?",answer:"The trademark registration process involves several steps: conducting a clearance search, filing an application, responding to office actions if any, publication for opposition, and finally registration. We handle the entire process for you, ensuring proper protection of your brand."},{title:"Do you offer international trademark services?",answer:"Yes, we provide comprehensive international trademark services. We can help you protect your brand globally through various international treaties and conventions, managing the process across different jurisdictions."},{title:"How long does trademark registration take?",answer:"The trademark registration process typically takes 8-12 months, though this can vary depending on various factors including office actions and oppositions. We'll keep you informed throughout the process and handle any challenges that arise."}],footerHeading:"Need more information?",footerDescription:"Contact our team for personalized assistance with your legal needs.",button:{title:"Contact Us",variant:"secondary"}};function B(){var u;const{blogPosts:i,categories:c,filters:d}=j().props;N.useState("");const x={tagline:"Legal Insights",heading:"Knowledge Hub",description:"Stay informed with our latest articles on intellectual property law, trademark protection, and business strategies.",buttons:[{title:"View all",variant:"secondary",href:route("insights"),active:!d.category&&!d.search},...(c==null?void 0:c.map(a=>({title:a.name,variant:"link",href:route("insights",{category:a.slug}),active:d.category===a.slug})))||[]],blogPosts:((u=i.data)==null?void 0:u.map(a=>{var r,o,m,g;return console.log("Blog Post Data:",{featured_image:a.featured_image,featured_image_url:a.featured_image_url}),{url:route("insight.detail",{slug:a.slug}),image:{src:a.featured_image_url||"/images/placeholders/blog-placeholder.svg",alt:a.title||"Blog post image"},category:((r=a.category)==null?void 0:r.name)||"Legal Insights",title:a.title,description:a.excerpt,avatar:{src:a.author_profile_image||"/images/placeholders/avatar-placeholder.svg",alt:((o=a.author)==null?void 0:o.name)||"Author"},fullName:((m=a.author)==null?void 0:m.name)||"Hebert-Thomas Law",date:new Date(a.published_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),readTime:`${Math.ceil((((g=a.content)==null?void 0:g.length)||0)/1e3)} min read`}}))||[],links:i.links};return e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx("title",{children:"Insights - Hebert-Thomas Law"}),e.jsx("meta",{name:"description",content:"Legal insights and resources from Hebert-Thomas Law"})]}),e.jsx(I,{...x}),e.jsx("section",{id:"relume",className:"px-[5%] py-16 md:py-24 lg:py-28 bg-gallery",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mb-12 max-w-lg md:mb-18 lg:mb-20",children:[e.jsx("h2",{className:"mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl",children:n.heading}),e.jsx("p",{className:"font-sans text-cod-gray-light md:text-md",children:n.description})]}),e.jsx(D,{type:"multiple",className:"grid items-start justify-stretch gap-4",children:n.questions.map((a,r)=>e.jsxs(P,{value:`item-${r}`,className:"border border-cod-gray bg-white px-5 md:px-6",children:[e.jsx(H,{icon:e.jsx(z,{className:"h-7 w-7 shrink-0 text-cod-gray transition-transform duration-300 md:h-8 md:w-8"}),className:"py-4 font-sans text-cod-gray md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45",children:a.title}),e.jsx(T,{className:"font-sans text-cod-gray-light md:pb-6",children:a.answer})]},r))}),e.jsxs("div",{className:"mt-12 md:mt-18 lg:mt-20",children:[e.jsx("h4",{className:"mb-3 font-heading text-2xl font-bold text-cod-gray md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl",children:n.footerHeading}),e.jsx("p",{className:"font-sans text-cod-gray-light md:text-md",children:n.footerDescription}),e.jsx("div",{className:"mt-6 md:mt-8",children:e.jsx(l,{href:route("contact"),children:e.jsx(W,{variant:"secondary",className:"bg-cod-gray text-white hover:bg-cod-gray-dark",children:n.button.title})})})]})]})})]})}B.layout=i=>e.jsx(k,{children:i});export{B as default};
