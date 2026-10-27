const URL_="https://dbcnfpbtylkzyukrodej.supabase.co",KEY="sb_publishable_dh5UvdJJ3j6KrNMS9tjnVA_4qaq2gSS",DOM="@hunt.example.com";
const sb=supabase.createClient(URL_,KEY),app=document.getElementById("app");
const css=document.createElement("style");css.textContent=`
:root{--y:#fdd23f;--n:#17337a;--b:#2b6fd6;--c:#fff8e6;--bg:#dbe8f5;--t:#14213d;--m:#5b6475}
*{box-sizing:border-box}body{margin:0;font:16px system-ui,sans-serif;background:var(--bg);color:var(--t)}
.wrap{max-width:1000px;margin:0 auto;background:var(--c);min-height:100vh}
header{display:flex;align-items:center;gap:6px;padding:10px 16px;flex-wrap:wrap;background:#fff}
.logo{font-size:26px;margin-right:8px}header a{padding:8px 10px;font-size:14px;color:var(--t);text-decoration:none;cursor:pointer;border-bottom:3px solid transparent}
header a.on{border-color:var(--y);font-weight:700}header .sp{flex:1}.av{width:34px;height:34px;border-radius:50%;background:var(--n);color:#fff;display:grid;place-items:center;cursor:pointer}
main{padding:18px}h1{margin:4px 0;font-size:30px;color:var(--n)}h2{color:var(--n)}.sub{color:var(--m);margin:0 0 14px}
.hero{background:linear-gradient(120deg,#fff 0,#fff3c4 60%,#9cc2f2);border-radius:16px;padding:30px 22px;margin-bottom:16px}
.hero h1{font-size:44px;line-height:1.05;color:#111}.hero h1 span{color:var(--y);text-shadow:0 0 1px #000}
.btn{display:inline-block;background:var(--y);color:#111;border:0;border-radius:10px;padding:11px 16px;font-weight:700;font-size:15px;cursor:pointer;margin:3px 4px 3px 0}
.btn.n{background:var(--n);color:#fff}.btn.o{background:#fff;color:var(--n);border:2px solid var(--n)}.btn.w{width:100%}.btn.r{background:#e5484d;color:#fff}
.row{display:flex;gap:12px;flex-wrap:wrap}.row>*{flex:1;min-width:230px}
.stats{display:flex;gap:22px;margin-top:20px;font-weight:700}.stats div{text-align:center;color:var(--n)}.stats b{font-size:22px;display:block}
.card{background:#fff;border-radius:14px;padding:14px;margin:8px 0;box-shadow:0 1px 4px #0002}.card.y{background:#fff3c4}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
.it{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px #0002;padding-bottom:8px;text-align:center}
.it .im{height:110px;background:#eaf1fb;display:grid;place-items:center;font-size:44px}.it img{width:100%;height:110px;object-fit:cover}
.it b{display:block;margin-top:6px}.it small{color:var(--m);display:block;padding:0 6px 6px}.it .btn{width:90%;margin:0}
input,select,textarea{width:100%;padding:10px;margin:4px 0 10px;border:1px solid #c9d3e3;border-radius:8px;font:inherit;background:#fff;color:var(--t)}
label{font-size:13px;font-weight:700;color:var(--n)}
.side{display:flex;gap:16px}.side nav{width:180px;flex-shrink:0}.side nav a{display:block;padding:10px;border-radius:8px;cursor:pointer;font-size:14px;margin-bottom:2px}
.side nav a.on{background:var(--y);font-weight:700}.side>div{flex:1;min-width:0}
.hl{display:flex;align-items:center;gap:10px;background:#fff;border-radius:10px;padding:8px;margin:6px 0}.hl .th{width:48px;height:48px;border-radius:8px;object-fit:cover;background:#eaf1fb;display:grid;place-items:center;font-size:26px;flex-shrink:0}
.hl>div{flex:1;min-width:0}.tag{background:#ffe9a8;border-radius:8px;padding:3px 9px;font-size:12px;font-weight:700}
.pts{background:var(--y);border-radius:12px;padding:10px 16px;text-align:center;font-weight:800}
.tabs{display:flex;gap:18px;border-bottom:1px solid #ddd;margin:10px 0}.tabs a{padding:8px 2px;cursor:pointer;color:var(--m)}.tabs a.on{color:var(--n);font-weight:700;border-bottom:3px solid var(--y)}
.st{display:flex;gap:10px;flex-wrap:wrap}.st div{flex:1;min-width:110px;background:#fff;border-radius:12px;padding:12px}.st b{font-size:26px;display:block;color:var(--n)}
.mu{color:var(--m);font-size:13px}img[data-b]{cursor:pointer}.lg{width:16px;height:16px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:4px}.logo-big{width:56px;height:56px;border-radius:12px;object-fit:cover;vertical-align:middle;margin-right:8px}img.ph{width:100%;max-height:200px;object-fit:cover;border-radius:8px}
@media(max-width:640px){.side{flex-direction:column}.side nav{width:100%;display:flex;flex-wrap:wrap}.hero h1{font-size:34px}}
`;document.head.appendChild(css);
const E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const V=id=>document.getElementById(id)?.value.trim(),A=e=>alert(e.message||e);
let me=null,cat=[],shop=[],archived=[],shopCos=[],curStore="",mtab="main",myCos=[],curCo="",curPw=null,view="home",sub="",pre="";
const ico=c=>c.image_url?`<img src="${E(c.image_url)}"${c.image_url2?` data-b="${E(c.image_url2)}" onclick="swap(this)" title="Tap for the 2nd photo"`:""}>`:`<div class="im">👻</div>`;
function swap(i){const a=i.src;i.src=i.dataset.b;i.dataset.b=a}
const nm=id=>cat.find(c=>c.id==id)?.name||"Print";
async function load(){const{data:{session}}=await sb.auth.getSession();me=null;
 if(session)me=(await sb.from("profiles").select("*").eq("id",session.user.id).single()).data;
 if(me&&me.disabled){await sb.auth.signOut();me=null;alert("This account has been deactivated.")}
 cat=(await sb.from("catalog").select("*").order("name")).data||[];
 shop=(await sb.from("shop_items").select("*")).data||[];archived=(await sb.from("shop_archived").select("*")).data||[];shopCos=(await sb.from("shop_companies").select("*")).data||[];myCos=[];
 if(me){const ids=((await sb.from("company_members").select("company_id").eq("user_id",me.id)).data||[]).map(x=>x.company_id);
  if(ids.length)myCos=(await sb.from("companies").select("*").in("id",ids)).data||[]}
 if(ADMIN){const o=me&&me.role=="owner";go(o?"manage":(curCo?"company":"hub"),o?"overview":"items")}else go(me?(me.role=="hider"?"hider":"browse"):"home")}
function go(v,s){view=v;sub=s??"";(ADMIN?adminShell:shell)()}
function shell(){
 if(me&&me.role=="hider"&&!sessionStorage.getItem("agreed"))return agreement();
 const t=(v,l)=>`<a class="${view==v?"on":""}" onclick="go('${v}')">${l}</a>`;
 let nav=(me?"":t("home","Home"))+t("browse","Marketplace")+t("hunt","Hunt")+t("companies","Companies");
 if(!me)nav+=t("login","Hider Login");
 else{nav+=t("orders","Orders");if(me.role=="hider"||me.role=="owner")nav+=t("hider","Hider");nav+=t("profile","Profile")}
 nav+=t("about","About");
 app.innerHTML=`<div class="wrap"><header><span class="logo">🧊</span>${nav}<span class="sp"></span>${me?`<span class="av" onclick="go('profile')">${E(me.username[0]).toUpperCase()}</span>`:""}</header><main id="m"></main></div>`;
 ({home,browse,hunt,login,orders,hider,profile,about,found,companies,company,store})[view]()}
const M=h=>document.getElementById("m").innerHTML=h;
function agreement(){
 app.innerHTML=`<div class="wrap"><header><span class="logo">🧊</span><b>Campus Finds</b></header><main><div class="card" style="max-width:520px;margin:20px auto">
 <h1>Hello, ${E(me.username)}!</h1><p>Please confirm that you are a hider and that you agree to these conditions:</p>
 <ol><li>Hiding is allowed anywhere around campus.</li>
 <li>If one of your hidden items survives until the end of the school year, anyone with an item that survives will be given a custom 1-foot dragon.</li>
 <li>I am a hider, and I am not someone who randomly logged into this account.</li></ol>
 <label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="ag" style="width:auto;margin:0" onchange="document.getElementById('agb').disabled=!this.checked">I confirm I am a hider and I agree to these conditions.</label><br>
 <button class="btn" id="agb" disabled onclick="sessionStorage.setItem('agreed','1');go('hider')">I agree</button><button class="btn o" onclick="out()">Log out</button></div></main></div>`}
function home(){M(`<div class="hero"><h1>Campus<br><span>Finds</span> Are<br>Here.</h1><p>Discover 3D prints hidden around campus, order your favorites, and earn points.</p>
<button class="btn" onclick="go('browse')">🛒 Marketplace</button><button class="btn n" onclick="go('login')">Buyer Login</button><button class="btn o" onclick="go('login')">Hider Login</button>
<div class="stats"><div><b>20</b>Order Points</div><div><b>58</b>Find Points</div><div><b>10</b>Return Points</div></div></div>`)}
function about(){M(`<h1>About</h1><p class="sub">Prints are hidden around campus with the school's OK. Hunt for them, report finds with a photo, and earn points. Orders earn 20, finds earn 58, and returning a print to its hider earns 10.</p>`)}
function login(){M(`<div class="card" style="text-align:center"><h1>Welcome!</h1><p>Are you a hider or a buyer?</p><div class="row" style="text-align:center">
<div class="card y"><h2>🛒 Buyer</h2><p class="mu">Create an account or log in to browse items, place orders, join the hunt, and earn points.</p><button class="btn w" onclick="lf('buyer')">Create an Account</button><button class="btn o w" onclick="lf('login')">Log In</button></div>
<div class="card" style="background:#e8f0fc"><h2>📦 Hider</h2><p class="mu">Log in with your assigned username and password.</p><button class="btn n w" onclick="lf('login')">Log In</button></div><div class="card" style="background:#eafbea"><h2>🏢 Company</h2><p class="mu">Create or log in to a company. No account needed.</p><button class="btn w" onclick="go('companies')">Company login</button></div></div><div id="f"></div></div>`)}
function lf(k){document.getElementById("f").innerHTML=`<div class="card" style="text-align:left;max-width:380px;margin:12px auto"><label>Username</label><input id="u" autocapitalize="none"><label>Password</label><input id="p" type="password">
${k=="buyer"?`<button class="btn w" onclick="signup()">Create Account</button>`:`<button class="btn w" onclick="signin()">Log In</button>`}</div>`}
const em=()=>V("u").toLowerCase().replace(/[^a-z0-9_.-]/g,"")+DOM;
async function signin(){sessionStorage.removeItem("agreed");const r=await sb.rpc("login_email",{u:V("u")});const{error}=await sb.auth.signInWithPassword({email:r.data||em(),password:V("p")});if(error)return A(error);await load()}
async function signup(){if(V("p").length<6)return alert("Password needs 6+ characters");const{error}=await sb.auth.signUp({email:em(),password:V("p")});if(error)return A(error);await signin()}
async function out(){sessionStorage.removeItem("agreed");await sb.auth.signOut();await load()}
function browse(){const old=mtab=="old";
 M(`<h1>Marketplace</h1><p class="sub">Pay the seller and you earn 20 points once they confirm.</p><div class="tabs"><a class="${old?"":"on"}" onclick="mtab='main';browse()">Main marketplace</a><a class="${old?"on":""}" onclick="mtab='old';browse()">No longer for sale</a></div>
 ${old?`<p class="mu">Items that were stopped, and items from suspended companies. These can't be ordered.</p>`:""}<input placeholder="🔍 Search items or companies..." oninput="grid(this.value)"><div id="cr"></div><div class="grid" id="g"></div>`);grid("")}
function grid(f){const q=f.toLowerCase(),m=x=>x.name.toLowerCase().includes(q),old=mtab=="old",
 card=(c,btn,sm)=>`<div class="it" ${old?'style="opacity:.65"':""}>${ico(c)}<b>${E(c.name)}</b><small>${sm}</small>${btn}</div>`;
 const g=cat.filter(c=>(c.active!=old)&&m(c)).map(c=>card(c,old?`<span class="tag">No longer for sale</span>`:`<button class="btn" onclick="order('${c.id}')">Order</button>`,E(c.description)+(c.price>0?`<br>${money(c.price)}`:""))).join("")+
  (old?archived:shop).filter(m).map(c=>card(c,old?`<span class="tag">Company suspended</span>`:`<button class="btn" onclick="orderShop('${c.id}')">Order</button>`,E(c.description)+`<br>by <a style="cursor:pointer;text-decoration:underline" onclick="openStore('${c.company_id}')">${c.company_logo?`<img class="lg" src="${E(c.company_logo)}">`:""}${E(c.company_name)}</a> · ${money(c.price)}`)).join("");
 document.getElementById("g").innerHTML=g||"<p>Nothing here.</p>";
 document.getElementById("cr").innerHTML=q?shopCos.filter(m).map(c=>`<div class="hl" style="cursor:pointer" onclick="openStore('${c.id}')"><div class="th">${c.logo_url?`<img class="th" src="${E(c.logo_url)}">`:"🏢"}</div><div><b>${E(c.name)}</b><br><span class="mu">Company · tap to open its page</span></div><span class="tag">Open</span></div>`).join(""):""}
async function orderShop(id){if(!me){alert("Please log in to order");return go("login")}
 const q=prompt("Quantity (1-20)?","1");if(!q)return;const{error}=await sb.rpc("place_company_order",{item:id,q:+q,note:prompt("Note (your name/class, optional)")||""});if(error)return A(error);alert("Ordered! Pay the seller. You get 20 points once they confirm payment.");await load();go("orders")}
async function order(id){if(!me){alert("Please log in to order");return go("login")}
 const q=prompt("Quantity (1-20)?","1");if(!q)return;const{error}=await sb.rpc("place_order",{cat:id,q:+q,n:prompt("Note (your name/class, optional)")||""});if(error)return A(error);alert("Ordered! Pay the seller. You get 20 points once they confirm payment.");await load();go("orders")}
async function hunt(){const h=(await sb.from("hunt_hints").select("*")).data||[];
 M(`<h1>Hunt</h1><p class="sub">Here are hints for prints that are still hidden. Go find them!</p>`+(h.map(x=>{const c=cat.find(k=>k.id==x.catalog_id)||{};return`<div class="hl"><div class="th">${c.image_url?`<img class="th" src="${E(c.image_url)}">`:"👻"}</div><div><b>${E(c.name)}</b><br><span class="mu">Hint: ${E(x.hint)}</span></div><button class="btn" onclick="pre='${x.catalog_id}';go('found')">Report Found</button></div>`}).join("")||"<p>No hints right now.</p>"))}
function found(){if(!me){alert("Please log in first");return go("login")}
 M(`<h1>Report a Found Print</h1><p class="sub">Tell us about the print you found. Upload a photo as proof.</p><div class="row"><div><label>Select Print Type *</label><select id="c">${cat.map(c=>`<option value="${c.id}" ${c.id==pre?"selected":""}>${E(c.name)}</option>`).join("")}</select>
 <label>Where was it? *</label><textarea id="w" rows="4" placeholder="Describe the location in detail..."></textarea><label>Serial Number (optional)</label><input id="se"></div>
 <div class="card" style="text-align:center"><div style="font-size:40px">📷</div><b>Upload a photo</b><p class="mu">Clear photo of the print only, no faces.</p><input id="ph" type="file" accept="image/*"></div></div><button class="btn w" onclick="sendF()">Submit Find</button>`)}
async function sendF(){const f=document.getElementById("ph").files[0];if(!f)return alert("Photo required");if(!V("w"))return alert("Say where you found it");
 const p=`${me.id}/${Date.now()}.jpg`,u=await sb.storage.from("claim-photos").upload(p,f);if(u.error)return A(u.error);
 const{error}=await sb.rpc("submit_claim",{cat:V("c"),ser:V("se"),wh:V("w"),photo:p});if(error)return A(error);alert("Sent to the hider for confirmation");pre="";go("browse")}
async function orders(t="Active"){if(!me)return go("login");const o=(await sb.from("orders").select("*").order("created_at",{ascending:false})).data||[];
 const cs=(await sb.from("company_sales").select("*").eq("buyer_id",me.id).order("created_at",{ascending:false})).data||[];
 const rp=new Set(((await sb.from("company_reports").select("sale_id").eq("reporter_id",me.id)).data||[]).map(x=>x.sale_id));
 const stag=z=>({new:"Waiting for payment confirmation",paid:"Paid · +20 pts",done:"Paid",cancelled:"Cancelled"}[z]||z),l=o.filter(x=>(x.status!="new")==(t=="Past")),l2=cs.filter(x=>(x.status!="new")==(t=="Past")),th=id=>{const c=cat.find(c=>c.id==id);return c&&c.image_url?`<img class="th" src="${E(c.image_url)}">`:"👻"};
 M(`<h1>My Orders</h1><p class="sub">These are the items you've requested. Each order earns 20 points.</p><div class="tabs">${["Active","Past"].map(x=>`<a class="${x==t?"on":""}" onclick="orders('${x}')">${x}</a>`).join("")}</div>`+
 (l.map(x=>`<div class="hl"><div class="th">${th(x.catalog_id)}</div><div><b>${E(nm(x.catalog_id))}</b> ×${x.qty}<br><span class="mu">Requested ${new Date(x.created_at).toLocaleDateString()}</span></div><span class="tag">${stag(x.status)}</span></div>`).join("")+
  l2.map(x=>`<div class="hl"><div class="th">🏢</div><div><b>${E(x.item_name)}</b> ×${x.qty} · $${(x.qty*x.unit_price).toFixed(2)}<br><span class="mu">Company order · ${new Date(x.created_at).toLocaleDateString()}</span></div><span class="tag">${stag(x.status)}</span>${rp.has(x.id)?`<span class="tag">Reported</span>`:`<button class="btn o" onclick="reportSale('${x.id}')">🚩 Report</button>`}</div>`).join("")||"<p>Nothing here.</p>"))}
async function reportSale(id){const w=prompt("What happened? (for example: the mystery bag only had paper inside)");if(!w)return;const{error}=await sb.rpc("report_company",{sale:id,why:w});error?A(error):(alert("Reported. The owner will review it."),orders())}
async function profile(t="Account"){if(!me)return go("login");
 const lg=t=="Activity"?(await sb.from("points_log").select("*").order("created_at",{ascending:false}).limit(30)).data||[]:[];
 M(`<div style="display:flex;justify-content:space-between;align-items:center"><div><h1>My Profile</h1><b>${E(me.username)}</b> <span class="mu">${me.role}</span></div><div class="pts">⭐ ${me.points}<br><small>Points</small></div></div>
 <div class="tabs">${["Account","Contact Info","Activity"].map(x=>`<a class="${x==t?"on":""}" onclick="profile('${x}')">${x}</a>`).join("")}</div>`+
 (t=="Account"?`<label>Username</label><input id="nn" value="${E(me.username)}" ${me.username_locked?"disabled":""}>${me.username_locked?`<p class="mu">🔒 Your username is locked by the owner.</p>`:`<button class="btn" onclick="rpc('change_username',{n:V('nn')},'Username changed')">Change username</button>`}<label>Role</label><input value="${me.role}" disabled><button class="btn o" onclick="out()">Log out</button>`:
  t=="Contact Info"?`<p class="mu">Optional. Only you and the owner can see this.</p><label>Email (optional)</label><input id="e" value="${E(me.email)}"><label>Phone (optional)</label><input id="ph" value="${E(me.phone)}"><button class="btn w" onclick="saveC()">Save Changes</button>`:
  lg.map(l=>`<div class="hl"><div>${l.delta>0?"+":""}${l.delta} · ${E(l.reason)}<br><span class="mu">${new Date(l.created_at).toLocaleString()}</span></div></div>`).join("")||"<p>No activity yet.</p>"))}
async function saveC(){const{error}=await sb.rpc("update_contact",{e:V("e"),p:V("ph")});error?A(error):(alert("Saved"),await load(),go("profile"))}
const photo=async p=>(await sb.storage.from("claim-photos").createSignedUrl(p,600)).data?.signedUrl||"";
async function hider(s){s=s||sub||"add";sub=s;if(!me||me.role=="buyer")return go("browse");
 const nav=[["add","➕ Add Hidden Print"],["mine","📦 My Hidden Prints"],["claims","📝 Claims to Review"],["ret","↩️ Returns"],["stats","📊 My Stats"],["how","📖 Instructions"]];
 const pr=(await sb.from("prints").select("*").eq("hider_id",me.id).order("created_at",{ascending:false})).data||[];
 const cl=(await sb.from("claims").select("*").eq("current_hider_id",me.id).eq("status","pending")).data||[];
 let b="";
 if(s=="add")b=`<h1>Add a Hidden Print</h1><p class="sub">Choose the print type and tell us where you hid it.</p><label>Select Print Type</label><select id="c">${cat.filter(c=>c.active).map(c=>`<option value="${c.id}">${E(c.name)}</option>`).join("")}</select>
 <label>Location Description *</label><textarea id="sp" rows="3" placeholder="Be specific (building, area, near what, etc.)"></textarea><label>Hint (optional)</label><input id="hi" placeholder="Give a hint for the hunt..."><label><input type="checkbox" id="ih" checked style="width:auto"> Include in Hunt</label><div class="mu">Uncheck if you don't want this print to appear in the hunt.</div><label>Serial Number (optional)</label><input id="se"><button class="btn" onclick="doHide()">Save Hidden Print</button>`;
 if(s=="mine")b=`<h1>My Hidden Prints</h1>`+(pr.map(p=>`<div class="hl"><div><b>${E(nm(p.catalog_id))}</b> ${p.serial?"#"+E(p.serial):""}<br><span class="mu">${E(p.spot)}</span></div><span class="tag">${p.status}</span></div>`).join("")||"<p>None yet.</p>");
 if(s=="claims"){b=`<h1>Claims to Review</h1>`;for(const c of cl)b+=`<div class="card"><b>${E(c.finder_username)}</b> found a ${E(nm(c.catalog_id))}<br>${c.serial?`Serial: ${E(c.serial)}<br>`:""}Where: ${E(c.found_where)}<br><img class="ph" src="${await photo(c.photo_path)}"><button class="btn" onclick="rpc('confirm_claim',{cid:'${c.id}'})">Confirm, it's gone (+58 to finder)</button>${c.print_id?"":`<button class="btn o" onclick="rpc('pass_claim',{cid:'${c.id}'})">Not mine, next person</button>`}</div>`;if(!cl.length)b+="<p>Nothing waiting.</p>"}
 if(s=="ret")b=`<h1>Returns</h1><p class="sub">Want more points? Return found prints to their finders' usernames, then hide them again.</p>`+(pr.filter(p=>p.status=="found").map(p=>`<div class="card"><b>${E(nm(p.catalog_id))}</b> ${p.serial?"#"+E(p.serial):""}<br><input id="r${p.id}" placeholder="Finder's username"><button class="btn" onclick="rpc('return_print',{pid:'${p.id}',finder_name:V('r${p.id}')},'10 points sent')">Give 10 points</button><button class="btn o" onclick="rehide('${p.id}')">Hide again</button></div>`).join("")||"<p>No found prints.</p>");
 if(s=="stats"){const f=pr.filter(p=>p.status=="found").length;b=`<h1>My Stats</h1><div class="st"><div><b>${pr.length}</b>Hidden total</div><div><b>${pr.length-f}</b>Still hidden</div><div><b>${f}</b>Found</div><div><b>${me.points}</b>Points</div></div>`}
 if(s=="how")b=`<h1>Instructions</h1><ol><li>Add each print you hide, with a hint if you want it in the Hunt.</li><li>When someone finds one, review the claim and confirm it.</li><li>The finder gets 58 points. If they return it to you, give them 10 more and hide it again.</li></ol>`;
 M(`<div class="side"><nav>${nav.map(n=>`<a class="${n[0]==s?"on":""}" onclick="hider('${n[0]}')">${n[1]}${n[0]=="claims"&&cl.length?` <span class="tag">${cl.length}</span>`:""}</a>`).join("")}</nav><div>${b}</div></div>`)}
async function rpc(f,a,msg){const keep=sub;const{error}=await sb.rpc(f,a);if(error)return A(error);if(msg)alert(msg);await load();go(ADMIN?"manage":(f=="change_username"?"profile":"hider"),keep)}
async function doHide(){if(!V("sp"))return alert("Add where it's hidden");const{error}=await sb.from("prints").insert({catalog_id:V("c"),hider_id:me.id,serial:V("se")||null,spot:V("sp"),hint:V("hi")||null,in_hunt:document.getElementById("ih").checked});error?A(error):hider("mine")}
async function rehide(id){const sp=prompt("Where did you hide it now?");if(!sp)return;const hi=prompt("Hint (optional)")||"";rpc("rehide",{pid:id,sp,hi,hunt:!!hi})}
/* ---------- COMPANIES (no account needed) ---------- */
function store(){const c=shopCos.find(x=>x.id==curStore);if(!c)return go("browse");
 const on=shop.filter(x=>x.company_id==c.id),off=archived.filter(x=>x.company_id==c.id),
 card=(x,ord)=>`<div class="it">${ico(x)}<b>${E(x.name)}</b><small>${E(x.description)}<br>${money(x.price)}</small>${ord?`<button class="btn" onclick="orderShop('${x.id}')">Order</button>`:`<span class="tag">No longer for sale</span>`}</div>`;
 M(`<button class="btn o" onclick="go('browse')">← Marketplace</button>
 <div style="height:150px;border-radius:14px;margin:8px 0;background:${c.banner_url?`url('${E(c.banner_url)}') center/cover`:"linear-gradient(120deg,#fdd23f,#2b6fd6)"}"></div>
 <h1>${c.logo_url?`<img class="logo-big" src="${E(c.logo_url)}">`:"🏢 "}${E(c.name)}</h1>
 ${c.status=="suspended"?`<div class="card" style="background:#fde8e8">⛔ This company is suspended. Its items can't be ordered.</div>`:c.status=="probation"?`<div class="card" style="background:#fff3c4">🟡 This company is on probation.</div>`:""}
 <h2>For sale</h2><div class="grid">${on.map(x=>card(x,true)).join("")||"<p>Nothing for sale right now.</p>"}</div>
 ${off.length?`<h2>No longer for sale</h2><div class="grid" style="opacity:.65">${off.map(x=>card(x,false)).join("")}</div>`:""}`)}
async function openStore(id){await refreshShop();curStore=id;go("store")}
function companies(){
 M(`<h1>Companies</h1><p class="sub">A company is a group that sells prints on the site and tracks its sales. No account needed.</p>
 ${myCos.length?`<h2>Linked to your account</h2>`+myCos.map(c=>`<div class="hl"><div class="th">${c.logo_url?`<img class="th" src="${E(c.logo_url)}">`:"🏢"}</div><div><b>${E(c.name)}</b></div><button class="btn" onclick="openCo('${c.id}',null)">Open</button></div>`).join(""):""}
 <div class="row"><div class="card"><h2>Sign in</h2><label>Company name</label><input id="jn"><label>Password</label><input id="jp" type="password"><button class="btn w" onclick="coLogin()">Sign in</button></div>
 <div class="card y"><h2>Create a company</h2><label>Name</label><input id="cn2"><label>Password</label><input id="cp2" type="password" placeholder="share it with your group"><button class="btn w" onclick="coCreate()">Create</button></div></div>`)}
async function coLogin(){const pw=document.getElementById("jp").value,{data,error}=await sb.rpc("company_login",{n:V("jn"),pw});if(error)return A(error);openCo(data.id,pw)}
async function coCreate(){const pw=document.getElementById("cp2").value,{data,error}=await sb.rpc("company_create",{n:V("cn2"),pw});if(error)return A(error);openCo(data,pw)}
function coHome(){go(ADMIN?"hub":"companies")}
function openCo(id,pw){curCo=id;curPw=pw||null;go("company","items")}
const money=n=>"$"+Number(n||0).toFixed(2);
async function company(){
 if(!curCo)return coHome();
 const{data:d,error}=await sb.rpc("company_data",{cid:curCo,pw:curPw});if(error){alert(error.message);curCo="";return coHome()}
 const it=d.items,sl=d.sales,s=sub||"items",tabs=[["items","Items"],["orders","Online orders"],["phys","Physical sales"],["sum","Sales summary"]];let b="";
 const link=me?(d.linked?`<div class="card">✅ Linked to your account. <button class="btn o" onclick="coUnlink()">Unlink</button></div>`:`<div class="card y">Link this company to your account so you won't need the password? <button class="btn" onclick="coLink()">Link to my account</button> <span class="mu">Or just keep it unlinked.</span></div>`):`<div class="card"><span class="mu">Not linked to an account. Log in to a main account to link it.</span></div>`;
 const day=864e5,ps=d.probation_start?new Date(d.probation_start).getTime():0,fd=t=>new Date(t).toLocaleDateString();let ban="";
 if(d.status=="suspended")ban=`<div class="card" style="background:#fde8e8"><b>⛔ This company is suspended</b> after ${d.flags} scam reports. Its items moved to the Marketplace's "No longer for sale" tab, and it can't add new items. You can still log in and see everything.${d.appeal?`<br>📨 An appeal is waiting for the owner.`:""}</div>`+(d.can_appeal?`<div class="card y"><h2>Ask to be reinstated</h2><p class="mu">You're in a trusted company, so you can ask.</p><label>Why should this company come back?</label><textarea id="aw" rows="3"></textarea><label>How will you fix the problem?</label><textarea id="af" rows="3"></textarea><button class="btn" onclick="appeal()">Send to the owner</button></div>`:`<p class="mu">Only linked members who are in a trusted company (3+ days, no flags) can ask for reinstatement.</p>`);
 if(d.phase=="probation1")ban=`<div class="card" style="background:#fff3c4">🟡 <b>Probation, phase 1.</b> No reports until ${fd(ps+4*day)} moves you to phase 2. Any new report suspends the company again.</div>`;
 if(d.phase=="probation2")ban=`<div class="card" style="background:#fff3c4">🟡 <b>Probation, phase 2.</b> No reports until ${fd(ps+18*day)} makes the company normal again. Any new report suspends it again.</div>`;
 if(s=="items")b=(d.status=="suspended"?`<p class="mu">New items are paused while the company is suspended.</p>`:`<div class="card y"><h2>Put an item up for sale</h2><label>Name</label><input id="in"><label>Description</label><input id="id"><label>Price ($)</label><input id="ip" type="number" step="0.01" min="0"><label>Photos (optional, up to 2)</label><input id="ii" type="file" accept="image/*"><input id="ii2" type="file" accept="image/*"><button class="btn" onclick="addItem()">Add to the Marketplace</button></div>`)+
  (it.map(x=>`<div class="hl"><div class="th">${x.image_url?`<img class="th" src="${E(x.image_url)}">`:"🧊"}</div><div><b>${E(x.name)}</b> · ${money(x.price)}<br><span class="mu">${E(x.description)}</span></div><button class="btn o" onclick="cr('company_item_set',{item:'${x.id}',a:${!x.active}},'items')">${x.active?"Hide":"Show"}</button><button class="btn r" onclick="coDel('company_item_del',{item:'${x.id}'},'items')">✕</button></div>`).join("")||"<p>No items yet.</p>");
 if(s=="orders")b=`<p class="sub">Confirm an order only after you've received the payment. The buyer gets their 20 points when you confirm.</p>`+(sl.filter(x=>x.kind=="online").map(x=>`<div class="hl"><div><b>${E(x.buyer_username)}</b>: ${x.qty}× ${E(x.item_name)} · ${money(x.qty*x.unit_price)}<br><span class="mu">${E(x.note)} · ${new Date(x.created_at).toLocaleDateString()}</span></div>${x.status=="new"?`<button class="btn" onclick="cr('company_sale_pay',{sale:'${x.id}',paid:true},'orders')">Payment received</button><button class="btn o" onclick="cr('company_sale_pay',{sale:'${x.id}',paid:false},'orders')">Cancel</button>`:`<span class="tag">${x.status=="paid"?"Paid":"Cancelled"}</span>`}</div>`).join("")||"<p>No online orders yet.</p>");
 if(s=="phys")b=`<div class="card y"><h2>Add a physical sale</h2><p class="mu">For sales made in person, not through the site.</p><label>Item</label><select id="pi">${it.map(x=>`<option value="${x.id}">${E(x.name)} (${money(x.price)})</option>`).join("")}</select><label>Quantity</label><input id="pq" type="number" min="1" value="1"><label>Price each (leave empty for the listed price)</label><input id="pp" type="number" step="0.01" min="0"><label>Note (optional)</label><input id="pn"><button class="btn" onclick="addPhys()">Save sale</button></div>`+
  (sl.filter(x=>x.kind=="physical").map(x=>`<div class="hl"><div>${x.qty}× <b>${E(x.item_name)}</b> · ${money(x.qty*x.unit_price)}<br><span class="mu">${E(x.note)} · ${new Date(x.created_at).toLocaleDateString()}</span></div><button class="btn r" onclick="coDel('company_sale_del',{sale:'${x.id}'},'phys')">✕</button></div>`).join("")||"<p>No physical sales yet.</p>");
 if(s=="sum"){const sd=sl.filter(x=>x.kind=="physical"||x.status=="paid"),wait=sl.filter(x=>x.kind=="online"&&x.status=="new").length,t=k=>sd.filter(x=>k?x.kind==k:true),u=a=>a.reduce((n,x)=>n+x.qty,0),r=a=>a.reduce((n,x)=>n+x.qty*x.unit_price,0),names=[...new Set(sd.map(x=>x.item_name))];
  b=`<p class="mu">Counts physical sales and online orders you confirmed as paid. ${wait} online order(s) still waiting for payment.</p><div class="st"><div><b>${u(t())}</b>Units sold</div><div><b>${money(r(t()))}</b>Revenue</div><div><b>${u(t("online"))}</b>Online units</div><div><b>${u(t("physical"))}</b>Physical units</div></div><h2>By item</h2>`+
  (names.map(n=>{const a=sd.filter(x=>x.item_name==n);return`<div class="hl"><div><b>${E(n)}</b><br><span class="mu">${u(a.filter(x=>x.kind=="online"))} online · ${u(a.filter(x=>x.kind=="physical"))} physical</span></div><b>${money(r(a))}</b></div>`}).join("")||"<p>No sales yet.</p>")}
 M(`${d.banner_url?`<div style="height:90px;border-radius:12px;margin:6px 0;background:url('${E(d.banner_url)}') center/cover"></div>`:""}<h1>${d.logo_url?`<img class="logo-big" src="${E(d.logo_url)}">`:"🏢 "}${E(d.name)}</h1><label class="btn o" style="cursor:pointer">🖼 Change logo<input type="file" accept="image/*" hidden onchange="setLogo(this)"></label><label class="btn o" style="cursor:pointer">🏞 Change banner<input type="file" accept="image/*" hidden onchange="setBanner(this)"></label><button class="btn o" onclick="openStore(curCo)">👁 View public page</button>${link}${ban}<div class="tabs">${tabs.map(x=>`<a class="${x[0]==s?"on":""}" onclick="go('company','${x[0]}')">${x[1]}</a>`).join("")}<a onclick="curCo='';curPw=null;coHome()">Sign out</a></div>${b}`)}
async function setLogo(el){const f=el.files[0];if(!f)return;const p=`${curCo}/logo-${Date.now()}.jpg`,u=await sb.storage.from("company-items").upload(p,f);if(u.error)return A(u.error);cr("company_set_logo",{logo:sb.storage.from("company-items").getPublicUrl(p).data.publicUrl},sub)}
async function setBanner(el){const f=el.files[0];if(!f)return;const p=`${curCo}/banner-${Date.now()}.jpg`,u=await sb.storage.from("company-items").upload(p,f);if(u.error)return A(u.error);cr("company_set_banner",{banner:sb.storage.from("company-items").getPublicUrl(p).data.publicUrl},sub)}
async function appeal(){const{error}=await sb.rpc("appeal_request",{cid:curCo,why:V("aw"),fix:V("af")});error?A(error):(alert("Sent to the owner"),go("company",sub))}
async function refreshShop(){shop=(await sb.from("shop_items").select("*")).data||[];archived=(await sb.from("shop_archived").select("*")).data||[];shopCos=(await sb.from("shop_companies").select("*")).data||[]}
async function cr(f,a,next){const{error}=await sb.rpc(f,{cid:curCo,pw:curPw,...a});if(error)return A(error);await refreshShop();go("company",next)}
async function coDel(f,a,next){if(confirm("Delete this?"))cr(f,a,next)}
async function coLink(){const{error}=await sb.rpc("company_link",{cid:curCo,pw:curPw});if(error)return A(error);await load();go("company",sub)}
async function coUnlink(){if(!confirm("Unlink this company? You will need its password to open it again."))return;await sb.rpc("company_unlink",{cid:curCo});await load();go("company",sub)}
async function up(id,k){const f=document.getElementById(id)?.files[0];if(!f)return null;const p=`${curCo}/${Date.now()}-${k}.jpg`,u=await sb.storage.from("company-items").upload(p,f);if(u.error){A(u.error);throw u.error}return sb.storage.from("company-items").getPublicUrl(p).data.publicUrl}
async function addItem(){if(!V("in"))return alert("Add a name");try{const a=await up("ii",1),b=await up("ii2",2);cr("company_item_save",{nm:V("in"),ds:V("id"),pr:+V("ip")||0,img:a,img2:b},"items")}catch(e){}}
async function addPhys(){if(!V("pi"))return alert("Add an item first");cr("company_sale_add",{item:V("pi"),q:+V("pq")||1,pr:V("pp")===""?null:+V("pp"),nt:V("pn")||null},"phys")}
/* ---------- ADMIN (/admin) ---------- */
function adminShell(){
 const o=me&&me.role=="owner";
 if(view=="company"&&curCo){app.innerHTML=`<div class="wrap"><header><span class="logo">🧊</span><b>Campus Finds Admin</b><span class="sp"></span>${o?`<a onclick="go('manage','overview')">Owner Manage</a>`:""}<a onclick="curCo='';curPw=null;go('hub')">Companies</a>${me?`<a onclick="out()">Log out</a>`:""}</header><main id="m"></main></div>`;return company()}
 if(o&&view!="hub")return manage();
 hub()}
function hub(){const o=me&&me.role=="owner";
 app.innerHTML=`<div class="wrap"><header><span class="logo">🧊</span><b>Campus Finds Admin</b><span class="sp"></span>${o?`<a onclick="go('manage','overview')">Owner Manage</a>`:""}${me?`<a onclick="out()">Log out</a>`:""}</header><main id="m"></main></div>`;
 M(`<h1>Admin</h1><p class="sub">Manage your company here, or sign in as the owner.</p>
 ${me?`<div class="card">Signed in as <b>${E(me.username)}</b></div>`+(myCos.length?`<h2>Your linked companies</h2>`+myCos.map(c=>`<div class="hl"><div class="th">${c.logo_url?`<img class="th" src="${E(c.logo_url)}">`:"🏢"}</div><div><b>${E(c.name)}</b></div><button class="btn" onclick="openCo('${c.id}',null)">Manage</button></div>`).join(""):`<p class="mu">No companies are linked to this account yet. Sign in to a company below, then tap "Link to my account."</p>`):
 `<div class="card"><h2>Main account</h2><p class="mu">Owner, or any account that has a linked company.</p><label>Username</label><input id="u" autocapitalize="none"><label>Password</label><input id="p" type="password"><button class="btn w" onclick="signin()">Log in</button></div>`}
 <div class="card y"><h2>Company login</h2><p class="mu">No account needed.</p><label>Company name</label><input id="jn"><label>Password</label><input id="jp" type="password"><button class="btn w" onclick="coLogin()">Sign in to company</button></div>`)}
async function manage(){const s=sub||"overview";sub=s;
 const[us,od,cl,pr,lg]=await Promise.all([sb.from("profiles").select("*").order("username"),sb.from("orders").select("*").order("created_at",{ascending:false}),sb.from("claims").select("*").order("created_at",{ascending:false}),sb.from("prints").select("*"),sb.from("points_log").select("*").order("created_at",{ascending:false}).limit(60)].map(async p=>(await p).data||[]));
 const rp=(await sb.from("company_reports").select("*").order("created_at",{ascending:false})).data||[],cos=(await sb.from("companies").select("*").order("name")).data||[],ap=(await sb.from("company_appeals").select("*").order("created_at",{ascending:false})).data||[],pap=ap.filter(a=>a.status=="pending").length;
 const un=id=>us.find(u=>u.id==id)?.username||"?",nav=[["overview","🏠 Overview"],["users","👥 Users"],["items","🧊 Items"],["prints","📦 Hidden Prints"],["unm","🔍 Unmatched Finds"],["log","⭐ Points Log"],["rep","🚩 Reports"],["app","📨 Appeals"+(pap?" ("+pap+")":"")],["cos","🏢 Companies"],["exp","📤 End of Year Export"]];
 const un2=cl.filter(c=>c.status=="needs_owner"),act=pr.filter(p=>p.status=="hidden").length,pend=cl.filter(c=>c.status=="pending").length;let b="";
 if(s=="overview")b=`<h1>Manage</h1><div class="st"><div><b>${act}</b>Active Hidden Prints</div><div><b>${pend}</b>Pending Claims</div><div><b>${un2.length}</b>Unmatched Finds</div></div><h2>Recent Activity</h2>`+lg.slice(0,8).map(l=>`<div class="hl"><div>${E(un(l.user_id))}: ${l.delta>0?"+":""}${l.delta} · ${E(l.reason)}</div><span class="mu">${new Date(l.created_at).toLocaleString()}</span></div>`).join("")+`<h2>Orders</h2>`+od.map(o=>`<div class="hl"><div>${E(un(o.buyer_id))}: ${o.qty}× ${E(nm(o.catalog_id))}<br><span class="mu">${E(o.note)}</span></div>${o.status=="new"?`<button class="btn" onclick="rpc('owner_confirm_order',{oid:'${o.id}',paid:true})">Payment received</button><button class="btn o" onclick="rpc('owner_confirm_order',{oid:'${o.id}',paid:false})">Cancel</button>`:`<span class="tag">${o.status=="paid"?"Paid":o.status=="cancelled"?"Cancelled":"Done"}</span>`}</div>`).join("");
 if(s=="users")b=`<h1>Users</h1><div class="card y"><h2>Create hider account</h2><label>Username</label><input id="nu" autocapitalize="none" placeholder="lucas"><label>Password</label><input id="np" placeholder="unique password (write it on paper)"><button class="btn" onclick="mkHider()">Create hider</button></div>`+us.map(u=>`<div class="hl"><div><b>${E(u.username)}</b> <span class="tag">${u.role}</span>${u.disabled?` <span class="tag">Deactivated</span>`:""} ⭐${u.points}<br><span class="mu">${E(u.email)} ${E(u.phone)}</span></div>${u.role!="owner"?`<button class="btn o" onclick="rpc('owner_set_role',{u:'${u.id}',r:'${u.role=="hider"?"buyer":"hider"}'})">Make ${u.role=="hider"?"buyer":"hider"}</button>`:""}<button class="btn o" onclick="adj('${u.id}')">± pts</button><button class="btn o" onclick="ren('${u.id}')">Rename</button><button class="btn o" onclick="rpc('owner_lock_username',{u:'${u.id}',l:${!u.username_locked}})">${u.username_locked?"🔒 Unlock name":"Lock name"}</button></div>`).join("");
 if(s=="items")b=`<h1>Items</h1><div class="card y"><label>Name</label><input id="cn"><label>Description</label><input id="cd"><label>Price ($)</label><input id="cpr" type="number" step="0.01" min="0"><label>Photo</label><input id="ci" type="file" accept="image/*"><button class="btn" onclick="addCat()">Add item</button></div>`+cat.map(c=>`<div class="hl"><div class="th">${c.image_url?`<img class="th" src="${E(c.image_url)}">`:"👻"}</div><div><b>${E(c.name)}</b> · ${money(c.price)}<br><span class="mu">${E(c.description)}</span></div><button class="btn o" onclick="togC('${c.id}',${!c.active})">${c.active?"Hide":"Show"}</button></div>`).join("");
 if(s=="prints")b=`<h1>Hidden Prints</h1>`+pr.map(p=>`<div class="hl"><div><b>${E(nm(p.catalog_id))}</b> ${p.serial?"#"+E(p.serial):""} · ${E(un(p.hider_id))}<br><span class="mu">${E(p.spot)}</span></div><span class="tag">${p.status}</span></div>`).join("");
 if(s=="unm"){b=`<h1>Unmatched Finds</h1><p class="sub">Award points with ± pts on the Users page.</p>`;for(const c of un2)b+=`<div class="card"><b>${E(c.finder_username)}</b> · ${E(nm(c.catalog_id))}<br>${E(c.found_where)}<br><img class="ph" src="${await photo(c.photo_path)}"></div>`;if(!un2.length)b+="<p>None.</p>"}
 if(s=="log")b=`<h1>Points Log</h1>`+lg.map(l=>`<div class="hl"><div>${E(un(l.user_id))}: ${l.delta>0?"+":""}${l.delta} · ${E(l.reason)}</div><span class="mu">${new Date(l.created_at).toLocaleString()}</span></div>`).join("");
 if(s=="exp")b=`<h1>End of Year Export</h1><p class="sub">Every print per hider, so they can collect them.</p><button class="btn" onclick="exp()">Download CSV</button>`;
 if(s=="rep"){const cn=id=>cos.find(c=>c.id==id)?.name||"?";b=`<h1>Reports</h1><p class="sub">Every report counts as a flag automatically. 3 flags from different people suspends the company and its leader's account. Remove a report here if it was false.</p>`+(rp.map(r=>`<div class="card"><b>${E(cn(r.company_id))}</b> · flags: ${cos.find(c=>c.id==r.company_id)?.flags??0}/3<br>Reported by <b>${E(r.reporter_username)}</b><br>${E(r.reason)}<br><span class="mu">${new Date(r.created_at).toLocaleString()} · ${r.status}</span>${r.status=="confirmed"||r.status=="pending"?`<br><button class="btn o" onclick="rpc('owner_review_report',{rid:'${r.id}',ok:false})">Remove this report</button>`:""}</div>`).join("")||"<p>No reports.</p>")}
 if(s=="app")b=`<h1>Appeals</h1><p class="sub">Approving starts a 4-day probation, then 2 more weeks, then the company is normal again. Any report during probation suspends it again.</p>`+(ap.map(a=>`<div class="card"><b>${E(cos.find(c=>c.id==a.company_id)?.name)}</b> · by ${E(a.requester_username)}<br><b>Why:</b> ${E(a.why)}<br><b>Fix:</b> ${E(a.fix)}<br><span class="mu">${new Date(a.created_at).toLocaleString()} · ${a.status}</span>${a.status=="pending"?`<br><button class="btn" onclick="rpc('owner_decide_appeal',{aid:'${a.id}',ok:true})">Approve (probation)</button><button class="btn o" onclick="rpc('owner_decide_appeal',{aid:'${a.id}',ok:false})">Deny</button>`:""}</div>`).join("")||"<p>No appeals.</p>");
 if(s=="cos")b=`<h1>Companies</h1>`+(cos.map(c=>`<div class="hl"><div><b>${E(c.name)}</b> <span class="tag">${c.status}</span><br><span class="mu">by ${E(un(c.created_by))} · flags ${c.flags}/3</span></div>${c.status!="active"?`<button class="btn" onclick="rpc('owner_reinstate_company',{cid:'${c.id}'})">Reinstate now</button>`:""}<button class="btn r" onclick="delCo('${c.id}')">Delete</button></div>`).join("")||"<p>None yet.</p>");
 window._d={pr,us};
 app.innerHTML=`<div class="wrap"><header><span class="logo">🧊</span><b>Manage</b><span class="sp"></span><a onclick="go('hub')">My companies</a><a onclick="out()">Log out</a></header><main><div class="side"><nav>${nav.map(n=>`<a class="${n[0]==s?"on":""}" onclick="go('manage','${n[0]}')">${n[1]}</a>`).join("")}</nav><div>${b}</div></div></main></div>`}
async function mkHider(){const{data:{session}}=await sb.auth.getSession();
 const r=await fetch(URL_+"/functions/v1/create-hider",{method:"POST",headers:{"Content-Type":"application/json",apikey:KEY,Authorization:"Bearer "+session.access_token},body:JSON.stringify({username:V("nu"),password:V("np")})});
 const j=await r.json();if(!r.ok)return alert(j.error||"Failed");alert("Hider created: "+j.username);manage()}
async function addCat(){let url=null;const f=document.getElementById("ci").files[0];
 if(f){const p=Date.now()+".jpg",u=await sb.storage.from("catalog").upload(p,f);if(u.error)return A(u.error);url=sb.storage.from("catalog").getPublicUrl(p).data.publicUrl}
 const{error}=await sb.from("catalog").insert({name:V("cn"),description:V("cd"),price:+V("cpr")||0,image_url:url});if(error)return A(error);await load();go("manage","items")}
async function togC(id,a){await sb.from("catalog").update({active:a}).eq("id",id);await load();go("manage","items")}
async function ren(id){const n=prompt("New username");if(n)rpc("owner_rename",{u:id,n})}
async function delCo(id){if(!confirm("Delete this company and all its items and sales?"))return;await sb.from("companies").delete().eq("id",id);manage()}
async function doneO(id){await sb.from("orders").update({status:"done"}).eq("id",id);manage()}
async function adj(id){const d=prompt("Points (use - to remove)");if(!d)return;const{error}=await sb.rpc("owner_adjust",{u:id,d:+d,why:prompt("Reason")||"Owner adjustment"});error?A(error):manage()}
function exp(){const{pr,us}=window._d,q=s=>`"${String(s??"").replace(/"/g,'""')}"`;
 const rows=[["hider","print","serial","spot","status"],...pr.map(p=>[us.find(u=>u.id==p.hider_id)?.username,nm(p.catalog_id),p.serial,p.spot,p.status]).sort((a,b)=>String(a[0]).localeCompare(String(b[0])))];
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([rows.map(r=>r.map(q).join(",")).join("\n")],{type:"text/csv"}));a.download="prints.csv";a.click()}
load();
