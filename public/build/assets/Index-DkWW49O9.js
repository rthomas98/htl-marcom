import{j as e,Y as p,a as d,y as u}from"./app-DruEAryR.js";import{M as j}from"./MarcomLayout-BgDA4EmJ.js";import{W as r}from"./index-b9KmiZFC.js";import{X as f}from"./x-BXVTZirQ.js";import{C as v}from"./calendar-ByaYzn0t.js";import{C as y}from"./clock-CFWCHLvz.js";import"./index-CimJrWf-.js";const o="/images/placeholders/legalnar-placeholder.svg",x="/images/placeholders/avatar-placeholder.svg";function _({auth:m,registrations:c}){const g=a=>{confirm("Are you sure you want to cancel this registration? This action cannot be undone.")&&u.delete(route("legalnars.registrations.cancel",a))},h=a=>{const l=new Date,s=new Date(a.scheduled_start);return a.type==="live"&&s>l};return e.jsxs(j,{user:m.user,children:[e.jsx(p,{title:"My Registrations"}),e.jsx("div",{className:"bg-white py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-3xl font-heading font-bold tracking-tight text-cod-gray sm:text-4xl",children:"My Registrations"}),e.jsx("p",{className:"mt-2 text-lg leading-8 text-cod-gray-light",children:"Manage your Legalnar registrations"})]}),c.data.length===0?e.jsxs("div",{className:"mt-16 rounded-lg border border-cod-gray/10 bg-white p-8 text-center",children:[e.jsx("p",{className:"text-cod-gray",children:"You haven't registered for any Legalnars yet."}),e.jsx(d,{href:route("legalnars.index"),children:e.jsx(r,{variant:"solid",size:"sm",className:"mt-4 bg-cod-gray text-white hover:bg-cod-gray-light",children:"Browse Legalnars"})})]}):e.jsx("div",{className:"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12",children:c.data.map(a=>{var l,s,n,i;return e.jsx("article",{className:"flex flex-col overflow-hidden rounded-lg border border-cod-gray/10 bg-white shadow-sm",children:e.jsxs("div",{className:"flex flex-col-reverse lg:flex-row",children:[e.jsxs("div",{className:"flex-1 p-6 lg:p-8",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:"font-heading text-xl font-semibold text-cod-gray",children:a.legalnar.title}),e.jsx("p",{className:"text-sm text-cod-gray-light",children:a.legalnar.description})]}),e.jsxs("div",{className:"ml-4 flex flex-shrink-0 flex-col items-end space-y-2",children:[e.jsx(d,{href:route("legalnars.show",a.legalnar.id),children:e.jsx(r,{variant:"outline",size:"sm",className:"border-cod-gray bg-white text-cod-gray hover:bg-cod-gray hover:text-white",children:"View Details"})}),h(a.legalnar)&&e.jsxs(r,{onClick:()=>g(a.id),variant:"outline",size:"sm",className:"border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white",children:[e.jsx(f,{className:"mr-2 size-4"}),"Cancel Registration"]})]})]}),e.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-4 text-sm text-cod-gray-light",children:[a.legalnar.type==="live"&&a.legalnar.scheduled_start&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(v,{className:"size-4"}),e.jsx("span",{children:new Date(a.legalnar.scheduled_start).toLocaleDateString()})]}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(y,{className:"size-4"}),e.jsx("span",{children:new Date(a.legalnar.scheduled_start).toLocaleTimeString()})]})]}),e.jsx("div",{className:"flex items-center gap-x-2",children:e.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${a.legalnar.type==="live"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:a.legalnar.type==="live"?"Live Session":"On-Demand"})})]}),e.jsxs("div",{className:"mt-6 flex items-center gap-x-4",children:[e.jsx("img",{src:((l=a.legalnar.instructor)==null?void 0:l.avatar_url)||x,alt:(s=a.legalnar.instructor)==null?void 0:s.name,className:"h-10 w-10 rounded-full bg-gray-100",onError:t=>{t.target.src=x}}),e.jsxs("div",{className:"text-sm leading-6",children:[e.jsx("p",{className:"font-semibold text-cod-gray",children:(n=a.legalnar.instructor)==null?void 0:n.name}),e.jsx("p",{className:"text-cod-gray-light",children:((i=a.legalnar.instructor)==null?void 0:i.title)||"Instructor"})]})]})]}),e.jsx("div",{className:"relative aspect-[16/9] w-full lg:aspect-square lg:w-72",children:e.jsx("img",{src:a.legalnar.featured_image_url||o,alt:a.legalnar.title,className:"h-full w-full object-cover",onError:t=>{t.target.src=o}})})]})},a.id)})})]})})]})}export{_ as default};
