import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const WA='263718574227';
const wa=`https://wa.me/${WA}`;
const images={
 hero:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=85',
 rings:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
 necklaces:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85',
 watches:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85',
 earrings:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85',
 bracelets:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',
 eyewear:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85'
};
const categories=[['Rings','rings'],['Necklaces','necklaces'],['Watches','watches'],['Earrings','earrings'],['Bracelets','bracelets'],['Eyewear','eyewear']];
function Icon({name}){const p={fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round'}; if(name==='search')return <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" {...p}/><path d="m20 20-4-4" {...p}/></svg>; if(name==='menu')return <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" {...p}/></svg>; if(name==='bag')return <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Z" {...p}/><path d="M9 8a3 3 0 0 1 6 0" {...p}/></svg>; if(name==='pin')return <svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" {...p}/><circle cx="12" cy="10" r="2.5" {...p}/></svg>; if(name==='phone')return <svg viewBox="0 0 24 24"><path d="M7 4h3l1.3 4-2 1.5a15 15 0 0 0 5.2 5.2l1.5-2L20 14v3c0 1.7-1.3 3-3 3C10.9 20 4 13.1 4 7a3 3 0 0 1 3-3Z" {...p}/></svg>; return null}
function App(){const [open,setOpen]=useState(false); return <>
<header className="top"><div><Icon name="pin"/> Eastgate Market, Shop I6, Harare</div><a href="tel:+263718574227"><Icon name="phone"/> 071 857 4227</a></header>
<nav className="nav"><button className="icon" onClick={()=>setOpen(!open)} aria-label="Menu"><Icon name="menu"/></button><a className="brand" href="#top">PLUS DE FOI<span>JEWELRY</span></a><div className="actions"><button className="icon"><Icon name="search"/></button><a className="icon" href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="bag"/></a></div></nav>
{open&&<div className="mobileMenu"><a href="#collections" onClick={()=>setOpen(false)}>Collections</a><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="#visit" onClick={()=>setOpen(false)}>Visit Us</a><a href={wa} target="_blank" rel="noreferrer">WhatsApp</a></div>}
<main id="top">
<section className="hero"><img src={images.hero}/><div className="heroOverlay"><p className="eyebrow">JEWELRY • WATCHES • ACCESSORIES</p><h1>PLUS DE FOI</h1><p className="heroText">Jewelry, watches, eyewear and accessories.</p><a className="goldBtn" href="#collections">VIEW COLLECTIONS <span>→</span></a></div></section>
<section className="intro"><p className="eyebrow dark">PLUS DE FOI JEWELRY</p><h2>Explore the collection</h2><p>Browse the categories available from Plus De Foi. Product details, pricing and availability can be confirmed directly with the store.</p></section>
<section id="collections" className="grid">{categories.map(([name,key])=><a className="cat" href={wa} target="_blank" rel="noreferrer" key={key}><img src={images[key]} alt={`${name} collection`}/><div><h3>{name}</h3><span>ASK ON WHATSAPP →</span></div></a>)}</section>
<section className="feature"><img src={images.rings}/><div><p className="eyebrow">JEWELRY</p><h2>Find a piece that fits your style.</h2><p>See available pieces and ask the store about current designs, sizes and pricing.</p><a className="darkBtn" href={wa} target="_blank" rel="noreferrer">ASK ON WHATSAPP →</a></div></section>
<section id="about" className="about"><div><p className="eyebrow dark">ABOUT PLUS DE FOI</p><h2>Jewelry, watches, eyewear & accessories.</h2><p>Plus De Foi Jewelry is listed in Harare as a jewelry and watch business. The store is located at Shop I6, Eastgate Market.</p></div><img src={images.watches} alt="Watch collection"/></section>
<section id="visit" className="visit"><div><p className="eyebrow dark">VISIT THE STORE</p><h2>Eastgate Market, Shop I6</h2><p>Corner 3rd Street & Robert Mugabe, Harare.</p><div className="contact"><span><Icon name="phone"/> 071 857 4227</span><span><Icon name="pin"/> Shop I6, Eastgate Market</span></div><a className="darkBtn" href={wa} target="_blank" rel="noreferrer">CHAT ON WHATSAPP →</a></div><div className="hours"><strong>STORE HOURS</strong><span>Mon–Fri: 9:00 AM–5:30 PM</span><span>Saturday: 9:00 AM–6:00 PM</span><span>Sunday: Closed</span></div></section>
</main>
<a className="waFloat" href={wa} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><span>◔</span></a>
<footer><div className="brand footerBrand">PLUS DE FOI<span>JEWELRY</span></div><p>Jewelry • Watches • Eyewear • Accessories</p><div className="footerLinks"><a href="#collections">Collections</a><a href="#visit">Contact</a><a href={wa} target="_blank" rel="noreferrer">WhatsApp</a></div></footer>
</>}
createRoot(document.getElementById('root')).render(<App/>);
