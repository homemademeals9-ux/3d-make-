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
.mu{color:var(--m);font-size:13px}img.ph{width:100%;max-height:200px;object-fit:cover;border-radius:8px}
@media(max-width:640px){.side{flex-direction:column}.side nav{width:100%;display:flex;flex-wrap:wrap}.hero h1{font-size:34px}}
`;document.head.appendChild(css);
const E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const V=id=>document.getElementById(id)?.value.trim(),A=e=>alert(e.message||e);
let me=null,cat=[],view="home",sub="",pre="";
const ico=c=>c.image_url?`<img src="${E(c.image_url)}">`:`<div class="im">👻</div>`;
const nm=id=>cat.find(c=>c.id==id)?.name||"Print";
async function load(){const{data:{session}}=await sb.auth.getSession();me=null;
 if(session)me=(await sb.from("profiles").select("*").eq("id",session.user.id).single()).data;
 cat=(await sb.from("catalog").select("*").order("name")).data||[];
 go(ADMIN?"manage":(me?"home":"home"),ADMIN?"overview":"")}
function go(v,s){view=v;sub=s??"";(ADMIN?adminShell:shell)()}
function shell(){
 const t=(v,l)=>`<a class="${view==v?"on":""}" onclick="go('${v}')">${l}</a>`;
 let nav=t("home","Home")+t("browse","Browse")+t("hunt","Hunt");
 if(!me)nav+=t("login","Hider Login");
 else{nav+=t("orders","Orders");if(me.role=="hider"||me.role=="owner")nav+=t("hider","Hider");nav+=t("profile","Profile")}
 nav+=t("about","About");
 app.innerHTML=`<div class="wrap"><header><span class="logo">🧊</span>${nav}<span class="sp"></span>${me?`<span class="av" onclick="go('profile')">${E(me.username[0]).toUpperCase()}</span>`:""}</header><main id="m"></main></div>`;
 ({home,browse,hunt,login,orders,hider,profile,about,found})[view]()}
const M=h=>document.getElementById("m").innerHTML=h;
function home(){M(`<div class="hero"><h1>Campus<br><span>Finds</span> Are<br>Here.</h1><p>Discover 3D prints hidden around campus, order your favorites, and earn points.</p>
<button class="btn" onclick="go('browse')">🛒 Browse Items</button><button class="btn n" onclick="go('login')">Buyer Login</button><button class="btn o" onclick="go('login')">Hider Login</button>
<div class="stats"><div><b>20</b>Order Points</div><div><b>58</b>Find Points</div><div><b>10</b>Return Points</div></div></div>`)}
function about(){M(`<h1>About</h1><p class="sub">Prints are hidden around campus with the school's OK. Hunt for them, report finds with a photo, and earn points. Orders earn 20, finds earn 58, and returning a print to its hider earns 10.</p>`)}
function login(){M(`<div class="card" style="text-align:center"><h1>Welcome!</h1><p>Are you a hider or a buyer?</p><div class="row" style="text-align:center">
<div class="card y"><h2>🛒 Buyer</h2><p class="mu">Create an account or log in to browse items, place orders, join the hunt, and earn points.</p><button class="btn w" onclick="lf('buyer')">Create an Account</button><button class="btn o w" onclick="lf('login')">Log In</button></div>
<div class="card" style="background:#e8f0fc"><h2>📦 Hider</h2><p class="mu">Log in with your assigned username and password.</p><button class="btn n w" onclick="lf('login')">Log In</button></div></div><div id="f"></div></div>`)}
function lf(k){document.getElementById("f").innerHTML=`<div class="card" style="text-align:left;max-width:380px;margin:12px auto"><label>Username</label><input id="u" autocapitalize="none"><label>Password</label><input id="p" type="password">
${k=="buyer"?`<button class="btn w" onclick="signup()">Create Account</button>`:`<button class="btn w" onclick="signin()">Log In</button>`}</div>`}
const em=()=>V("u").toLowerCase().replace(/[^a-z0-9_.-]/g,"")+DOM;
async function signin(){const{error}=await sb.auth.signInWithPassword({email:em(),password:V("p")});if(error)return A(error);await load()}
async function signup(){if(V("p").length<6)return alert("Password needs 6+ characters");const{error}=await sb.auth.signUp({email:em(),password:V("p")});if(error)return A(error);await signin()}
async function out(){await sb.auth.signOut();await load()}
function browse(f="",t=""){const l=cat.filter(c=>c.active&&c.name.toLowerCase().includes(f.toLowerCase()));
 M(`<h1>Browse Items</h1><p class="sub">Explore all available 3D prints. Place an order to earn 20 points.</p><input placeholder="🔍 Search items..." oninput="browse(this.value)" value="${E(f)}">
 <div class="grid">${l.map(c=>`<div class="it">${ico(c)}<b>${E(c.name)}</b><small>${E(c.description)}</small><button class="btn" onclick="order('${c.id}')">Order</button></div>`).join("")||"<p>No items yet.</p>"}</div>`)}
async function order(id){if(!me){alert("Please log in to order");return go("login")}
 const q=prompt("Quantity (1-20)?","1");if(!q)return;const{error}=await sb.rpc("place_order",{cat:id,q:+q,n:prompt("Note (your name/class, optional)")||""});if(error)return A(error);alert("Ordered! +20 points");await load();go("orders")}
async function hunt(){const h=(await sb.from("hunt_hints").select("*")).data||[];
 M(`<h1>Hunt</h1><p class="sub">Here are hints for prints that are still hidden. Go find them!</p>`+(h.map(x=>{const c=cat.find(k=>k.id==x.catalog_id)||{};return`<div class="hl"><div class="th">${c.image_url?`<img class="th" src="${E(c.image_url)}">`:"👻"}</div><div><b>${E(c.name)}</b><br><span class="mu">Hint: ${E(x.hint)}</span></div><button class="btn" onclick="pre='${x.catalog_id}';go('found')">Report Found</button></div>`}).join("")||"<p>No hints right now.</p>"))}
function found(){if(!me){alert("Please log in first");return go("login")}
 M(`<h1>Report a Found Print</h1><p class="sub">Tell us about the print you found. Upload a photo as proof.</p><div class="row"><div><label>Select Print Type *</label><select id="c">${cat.map(c=>`<option value="${c.id}" ${c.id==pre?"selected":""}>${E(c.name)}</option>`).join("")}</select>
 <label>Where was it? *</label><textarea id="w" rows="4" placeholder="Describe the location in detail..."></textarea><label>Serial Number (optional)</label><input id="se"></div>
 <div class="card" style="text-align:center"><div style="font-size:40px">📷</div><b>Upload a photo</b><p class="mu">Clear photo of the print only, no faces.</p><input id="ph" type="file" accept="image/*"></div></div><button class="btn w" onclick="sendF()">Submit Find</button>`)}
async function sendF(){const f=document.getElementById("ph").files[0];if(!f)return alert("Photo required");if(!V("w"))return alert("Say where you found it");
 const p=`${me.id}/${Date.now()}.jpg`,u=await sb.storage.from("claim-photos").upload(p,f);if(u.error)return A(u.error);
 const{error}=await sb.rpc("submit_claim",{cat:V("c"),ser:V("se"),wh:V("w"),photo:p});if(error)return A(error);alert("Sent to the hider for confirmation");pre="";go("home")}
async function orders(t="Active"){if(!me)return go("login");const o=(await sb.from("orders").select("*").order("created_at",{ascending:false})).data||[];
 const l=o.filter(x=>(x.status=="done")==(t=="Past"));
 M(`<h1>My Orders</h1><p class="sub">These are the items you've requested. Each order earns 20 points.</p><div class="tabs">${["Active","Past"].map(x=>`<a class="${x==t?"on":""}" onclick="orders('${x}')">${x}</a>`).join("")}</div>`+
 (l.map(x=>`<div class="hl"><div class="th">${(cat.find(c=>c.id==x.catalog_id)||{}).image_url?`<img class="th" src="${E(cat.find(c=>c.id==x.catalog_id).image_url)}">`:"👻"}</div><div><b>${E(nm(x.catalog_id))}</b> ×${x.qty}<br><span class="mu">Requested ${new Date(x.created_at).toLocaleDateString()}</span></div><span class="tag">${x.status=="done"?"Done":"Pending"}</span></div>`).join("")||"<p>Nothing here.</p>"))}
async function profile(t="Account"){if(!me)return go("login");
 const lg=t=="Activity"?(await sb.from("points_log").select("*").order("created_at",{ascending:false}).limit(30)).data||[]:[];
 M(`<div style="display:flex;justify-content:space-between;align-items:center"><div><h1>My Profile</h1><b>${E(me.username)}</b> <span class="mu">${me.role}</span></div><div class="pts">⭐ ${me.points}<br><small>Points</small></div></div>
 <div class="tabs">${["Account","Contact Info","Activity"].map(x=>`<a class="${x==t?"on":""}" onclick="profile('${x}')">${x}</a>`).join("")}</div>`+
 (t=="Account"?`<label>Username</label><input value="${E(me.username)}" disabled><label>Role</label><input value="${me.role}" disabled><button class="btn o" onclick="out()">Log out</button>`:
  t=="Contact Info"?`<p class="mu">Optional. Only you and the owner can see this.</p><label>Email (optional)</label><input id="e" value="${E(me.email)}"><label>Phone (optional)</label><input id="ph" value="${E(me.phone)}"><button class="btn w" onclick="saveC()">Save Changes</button>`:
  lg.map(l=>`<div class="hl"><div>${l.delta>0?"+":""}${l.delta} · ${E(l.reason)}<br><span class="mu">${new Date(l.created_at).toLocaleString()}</span></div></div>`).join("")||"<p>No activity yet.</p>"))}
async function saveC(){const{error}=await sb.rpc("update_contact",{e:V("e"),p:V("ph")});error?A(error):(alert("Saved"),await load(),go("profile"))}
const photo=async p=>(await sb.storage.from("claim-photos").createSignedUrl(p,600)).data?.signedUrl||"";
async function hider(s){s=s||sub||"add";sub=s;if(!me||me.role=="buyer")return go("home");
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
async function rpc(f,a,msg){const{error}=await sb.rpc(f,a);if(error)return A(error);if(msg)alert(msg);await load();go(ADMIN?"manage":"hider",sub)}
async function doHide(){if(!V("sp"))return alert("Add where it's hidden");const{error}=await sb.from("prints").insert({catalog_id:V("c"),hider_id:me.id,serial:V("se")||null,spot:V("sp"),hint:V("hi")||null,in_hunt:document.getElementById("ih").checked});error?A(error):hider("mine")}
async function rehide(id){const sp=prompt("Where did you hide it now?");if(!sp)return;const hi=prompt("Hint (optional)")||"";rpc("rehide",{pid:id,sp,hi,hunt:!!hi})}
/* ---------- ADMIN (/admin) ---------- */
function adminShell(){
 if(!me||me.role!="owner"){app.innerHTML=`<div class="wrap"><header><span class="logo">🧊</span><b>Campus Finds Admin</b></header><main><div class="card" style="max-width:380px;margin:30px auto"><h2>Owner login</h2><label>Username</label><input id="u" autocapitalize="none"><label>Password</label><input id="p" type="password"><button class="btn w" onclick="signin()">Log In</button>${me?`<p class="mu">This account is not the owner.</p><button class="btn o" onclick="out()">Log out</button>`:""}</div></main></div>`;return}
 manage()}
async function manage(){const s=sub||"overview";sub=s;
 const[us,od,cl,pr,lg]=await Promise.all([sb.from("profiles").select("*").order("username"),sb.from("orders").select("*").order("created_at",{ascending:false}),sb.from("claims").select("*").order("created_at",{ascending:false}),sb.from("prints").select("*"),sb.from("points_log").select("*").order("created_at",{ascending:false}).limit(60)].map(async p=>(await p).data||[]));
 const un=id=>us.find(u=>u.id==id)?.username||"?",nav=[["overview","🏠 Overview"],["users","👥 Users"],["items","🧊 Items"],["prints","📦 Hidden Prints"],["unm","🔍 Unmatched Finds"],["log","⭐ Points Log"],["exp","📤 End of Year Export"]];
 const un2=cl.filter(c=>c.status=="needs_owner"),act=pr.filter(p=>p.status=="hidden").length,pend=cl.filter(c=>c.status=="pending").length;let b="";
 if(s=="overview")b=`<h1>Manage</h1><div class="st"><div><b>${act}</b>Active Hidden Prints</div><div><b>${pend}</b>Pending Claims</div><div><b>${un2.length}</b>Unmatched Finds</div></div><h2>Recent Activity</h2>`+lg.slice(0,8).map(l=>`<div class="hl"><div>${E(un(l.user_id))}: ${l.delta>0?"+":""}${l.delta} · ${E(l.reason)}</div><span class="mu">${new Date(l.created_at).toLocaleString()}</span></div>`).join("")+`<h2>Orders</h2>`+od.map(o=>`<div class="hl"><div>${E(un(o.buyer_id))}: ${o.qty}× ${E(nm(o.catalog_id))}<br><span class="mu">${E(o.note)}</span></div>${o.status=="new"?`<button class="btn" onclick="doneO('${o.id}')">Mark done</button>`:`<span class="tag">Done</span>`}</div>`).join("");
 if(s=="users")b=`<h1>Users</h1><div class="card y"><h2>Create hider account</h2><label>Username</label><input id="nu" autocapitalize="none" placeholder="lucas"><label>Password</label><input id="np" placeholder="unique password (write it on paper)"><button class="btn" onclick="mkHider()">Create hider</button></div>`+us.map(u=>`<div class="hl"><div><b>${E(u.username)}</b> <span class="tag">${u.role}</span> ⭐${u.points}<br><span class="mu">${E(u.email)} ${E(u.phone)}</span></div>${u.role!="owner"?`<button class="btn o" onclick="rpc('owner_set_role',{u:'${u.id}',r:'${u.role=="hider"?"buyer":"hider"}'})">Make ${u.role=="hider"?"buyer":"hider"}</button>`:""}<button class="btn o" onclick="adj('${u.id}')">± pts</button></div>`).join("");
 if(s=="items")b=`<h1>Items</h1><div class="card y"><label>Name</label><input id="cn"><label>Description</label><input id="cd"><label>Photo</label><input id="ci" type="file" accept="image/*"><button class="btn" onclick="addCat()">Add item</button></div>`+cat.map(c=>`<div class="hl"><div class="th">${c.image_url?`<img class="th" src="${E(c.image_url)}">`:"👻"}</div><div><b>${E(c.name)}</b><br><span class="mu">${E(c.description)}</span></div><button class="btn o" onclick="togC('${c.id}',${!c.active})">${c.active?"Hide":"Show"}</button></div>`).join("");
 if(s=="prints")b=`<h1>Hidden Prints</h1>`+pr.map(p=>`<div class="hl"><div><b>${E(nm(p.catalog_id))}</b> ${p.serial?"#"+E(p.serial):""} · ${E(un(p.hider_id))}<br><span class="mu">${E(p.spot)}</span></div><span class="tag">${p.status}</span></div>`).join("");
 if(s=="unm"){b=`<h1>Unmatched Finds</h1><p class="sub">Award points with ± pts on the Users page.</p>`;for(const c of un2)b+=`<div class="card"><b>${E(c.finder_username)}</b> · ${E(nm(c.catalog_id))}<br>${E(c.found_where)}<br><img class="ph" src="${await photo(c.photo_path)}"></div>`;if(!un2.length)b+="<p>None.</p>"}
 if(s=="log")b=`<h1>Points Log</h1>`+lg.map(l=>`<div class="hl"><div>${E(un(l.user_id))}: ${l.delta>0?"+":""}${l.delta} · ${E(l.reason)}</div><span class="mu">${new Date(l.created_at).toLocaleString()}</span></div>`).join("");
 if(s=="exp")b=`<h1>End of Year Export</h1><p class="sub">Every print per hider, so they can collect them.</p><button class="btn" onclick="exp()">Download CSV</button>`;
 window._d={pr,us};
 app.innerHTML=`<div class="wrap"><header><span class="logo">🧊</span><b>Manage</b><span class="sp"></span><a onclick="out()">Log out</a></header><main><div class="side"><nav>${nav.map(n=>`<a class="${n[0]==s?"on":""}" onclick="go('manage','${n[0]}')">${n[1]}</a>`).join("")}</nav><div>${b}</div></div></main></div>`}
async function mkHider(){const{data:{session}}=await sb.auth.getSession();
 const r=await fetch(URL_+"/functions/v1/create-hider",{method:"POST",headers:{"Content-Type":"application/json",apikey:KEY,Authorization:"Bearer "+session.access_token},body:JSON.stringify({username:V("nu"),password:V("np")})});
 const j=await r.json();if(!r.ok)return alert(j.error||"Failed");alert("Hider created: "+j.username);manage()}
async function addCat(){let url=null;const f=document.getElementById("ci").files[0];
 if(f){const p=Date.now()+".jpg",u=await sb.storage.from("catalog").upload(p,f);if(u.error)return A(u.error);url=sb.storage.from("catalog").getPublicUrl(p).data.publicUrl}
 const{error}=await sb.from("catalog").insert({name:V("cn"),description:V("cd"),image_url:url});if(error)return A(error);await load();go("manage","items")}
async function togC(id,a){await sb.from("catalog").update({active:a}).eq("id",id);await load();go("manage","items")}
async function doneO(id){await sb.from("orders").update({status:"done"}).eq("id",id);manage()}
async function adj(id){const d=prompt("Points (use - to remove)");if(!d)return;const{error}=await sb.rpc("owner_adjust",{u:id,d:+d,why:prompt("Reason")||"Owner adjustment"});error?A(error):manage()}
function exp(){const{pr,us}=window._d,q=s=>`"${String(s??"").replace(/"/g,'""')}"`;
 const rows=[["hider","print","serial","spot","status"],...pr.map(p=>[us.find(u=>u.id==p.hider_id)?.username,nm(p.catalog_id),p.serial,p.spot,p.status]).sort((a,b)=>String(a[0]).localeCompare(String(b[0])))];
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([rows.map(r=>r.map(q).join(",")).join("\n")],{type:"text/csv"}));a.download="prints.csv";a.click()}
load();
