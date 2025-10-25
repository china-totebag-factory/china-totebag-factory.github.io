import{_ as z}from"./B54Z19yI.js";import{_ as E}from"./tiF_snPY.js";import{_ as A}from"./Cip1akfp.js";import{u as N}from"./B7xX6Qq_.js";import{a as W,b as O,u as V,n as Y}from"#entry";import{_ as L}from"./DlAUqK2U.js";import{O as b,Q as m,L as H,a9 as R,U as t,a3 as x,X as c,u as l,a1 as _,a2 as S,c as q,W as U,a4 as F,a0 as j,a5 as G,b as M,w as X,o as J}from"./Co5tMnYY.js";import{_ as I}from"./Bbo0jKgt.js";import{M as P}from"./BBu5wbos.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";import"./C7xmkHdv.js";const K={class:"cart-items-section"},Z={class:"cart-item-content"},tt={class:"cart-item-image"},et={class:"cart-item-info"},ot={class:"cart-item-header"},st={class:"cart-item-title"},at=["onClick"],nt={class:"cart-item-price"},it={class:"price-total"},rt={class:"price-detail"},lt={class:"cart-item-controls"},ct={class:"quantity-controls"},dt=["onClick"],pt=["value","onInput"],ut=["onClick"],mt={__name:"CartItemList",props:{items:{type:Array,required:!0}},emits:["removeItem","increaseQuantity","decreaseQuantity","updateQuantity"],setup(f,{emit:i}){const a=i,$=W(),{trackRemoveFromCart:d}=N(),g=p=>{const n=$.items.find(o=>o.bagId===p);n&&d(n.bag.id,`${n.bag.id} Handbag`,n.bag.price,n.quantity,"Handbag"),a("removeItem",p)},w=p=>{a("increaseQuantity",p)},D=p=>{a("decreaseQuantity",p)},T=(p,n)=>{const o=Number.parseInt(n)||1;a("updateQuantity",p,o)};return(p,n)=>{const o=A;return m(),b("div",K,[(m(!0),b(H,null,R(f.items,r=>(m(),b("div",{key:r.bagId,class:"cart-item-card"},[t("div",Z,[t("div",tt,[x(o,{src:r.bag.images[0].url,alt:r.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",et,[t("div",ot,[t("div",null,[t("h3",st,c(r.bag.id)+" Handbag",1)]),t("button",{onClick:h=>g(r.bagId),class:"cart-item-remove"},[...n[0]||(n[0]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,at)]),t("div",nt,[t("p",it," ¥"+c((r.bag.price*r.quantity).toLocaleString()),1),t("p",rt," ¥"+c(r.bag.price)+" × "+c(r.quantity),1)]),t("div",lt,[t("div",ct,[t("button",{onClick:h=>D(r.bagId),class:"quantity-btn"}," - ",8,dt),t("input",{value:r.quantity,onInput:h=>T(r.bagId,h.target.value),type:"number",min:"1",class:"quantity-input"},null,40,pt),t("button",{onClick:h=>w(r.bagId),class:"quantity-btn"}," + ",8,ut)])])])])]))),128))])}}},gt=L(mt,[["__scopeId","data-v-265154a6"]]),ht={class:"cart-summary-section"},yt={class:"cart-summary-card"},bt={class:"cart-summary-details"},ft={class:"summary-row"},xt={class:"summary-row"},vt={class:"summary-row"},wt={key:0,class:"text-success"},_t={key:1},kt={class:"summary-total"},$t={class:"total-amount"},Ct={class:"total-usd"},St={key:0},It={key:1},Dt={class:"cart-summary-actions"},Tt={__name:"CartSummary",props:{totalItems:{type:Number,required:!0},totalPrice:{type:Number,required:!0},shippingCost:{type:Number,required:!0},totalWithShipping:{type:Number,required:!0}},emits:["sendToWholesaler","continueShopping"],setup(f,{emit:i}){const a=f,$=i,d=W(),g=O(),{trackBeginCheckout:w,trackUserInteraction:D,trackButtonClick:T}=N(),p=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,n=()=>{if(!d.items||d.items.length===0)return;const k=d.items.reduce((v,C)=>v+C.quantity,0),e=g.convertCNYToUSD(a.totalWithShipping),y=g.convertCNYToUSD(a.totalPrice),s=g.convertCNYToUSD(a.shippingCost);let u=`ID	Qty	RMB	USD	Total RMB	Total USD
`;d.items.forEach(v=>{const C=g.convertCNYToUSD(v.bag.price),B=v.bag.price*v.quantity,Q=g.convertCNYToUSD(B);u+=`${v.bag.id}	${v.quantity}	${v.bag.price}	${C?C.toFixed(2):"N/A"}	${B}	${Q?Q.toFixed(2):"N/A"}
`}),u+=`
`,u+=`Subtotal Items:	${k}
`,u+=`Subtotal RMB:	${a.totalPrice}
`,u+=`Subtotal USD:	${y?y.toFixed(2):"N/A"}
`,u+=`Shipping RMB:	${a.shippingCost}
`,u+=`Shipping USD:	${s?s.toFixed(2):"N/A"}
`,u+=`Total RMB:	${a.totalWithShipping}
`,u+=`Total USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(u).then(()=>{const v=encodeURIComponent(u),C=`https://wa.me/${P}?text=${v}`;p()?window.location.href=C:window.open(C,"_blank","noopener,noreferrer")}).catch(v=>{console.error("Modern clipboard API failed:",v),o(u)}):o(u)},o=k=>{try{const e=document.createElement("textarea");e.value=k,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const y=document.execCommand("copy");if(e.remove(),y){const s=encodeURIComponent(k),u=`https://wa.me/${P}?text=${s}`;p()?window.location.href=u:window.open(u,"_blank","noopener,noreferrer")}else{const s=`https://wa.me/${P}`;p()?window.location.href=s:window.open(s,"_blank","noopener,noreferrer")}}catch(e){console.error("Fallback copy failed:",e);const y=`https://wa.me/${P}`;p()?window.location.href=y:window.open(y,"_blank","noopener,noreferrer")}},r=()=>{if(d.items.length>0){const k=d.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));w(k,d.totalPrice),D("send_to_wholesaler","cart_page",{item_count:d.items.length}),T("send_to_wholesaler","cart_page",{item_count:d.items.length,total_value:d.totalPrice}),n()}$("sendToWholesaler")},h=()=>{$("continueShopping")};return(k,e)=>(m(),b("div",ht,[t("div",yt,[e[8]||(e[8]=t("h2",{class:"cart-summary-title"},"Wish List Summary",-1)),e[9]||(e[9]=t("div",{class:"cart-summary-title-divider"},null,-1)),t("div",bt,[t("div",ft,[e[0]||(e[0]=t("span",null,"Items",-1)),t("span",null,c(a.totalItems)+" pieces",1)]),t("div",xt,[e[1]||(e[1]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+c(a.totalPrice.toLocaleString()),1)]),t("div",vt,[e[2]||(e[2]=t("span",null,"Shipping",-1)),a.shippingCost===0?(m(),b("span",wt," Free ")):(m(),b("span",_t,"¥"+c(a.shippingCost.toLocaleString()),1))]),e[4]||(e[4]=t("div",{class:"shipping-info"},[t("p",null,"• 500 pieces or more for free shipping"),t("p",null," • Factory to transit warehouse shipping (not international logistics) ")],-1)),e[5]||(e[5]=t("div",{class:"cart-summary-divider"},null,-1)),t("div",kt,[e[3]||(e[3]=t("span",null,"Total",-1)),t("div",$t,[t("div",null,"¥"+c(a.totalWithShipping.toLocaleString()),1),t("div",Ct,[l(g).isLoading?(m(),b("span",St," Loading USD... ")):(m(),b("span",It,c(l(g).formatUSDPrice(a.totalWithShipping)||"USD price unavailable"),1))])])])]),e[10]||(e[10]=t("div",{class:"cart-summary-section-divider"},null,-1)),t("div",Dt,[e[7]||(e[7]=t("div",{class:"whatsapp-notice"},[t("p",null," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),x(l(I),{size:"lg",variant:"enhanced",class:"send-button",style:{color:"white","background-color":"#4a3429"},onClick:r},{default:_(()=>[...e[6]||(e[6]=[S(" Send To Wholesaler ",-1)])]),_:1}),t("div",{class:"continue-shopping"},[t("button",{onClick:h,class:"continue-shopping-btn"}," Browse More Products >> ")])]),e[11]||(e[11]=t("div",{class:"cart-summary-section-divider"},null,-1)),e[12]||(e[12]=t("div",{class:"welcome-message"},[t("p",null," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])]))}},Lt=L(Tt,[["__scopeId","data-v-4c7da112"]]),Pt={class:"mb-6 flex items-center justify-between"},qt={class:"flex items-center gap-4"},Ut={class:"text-sm text-gray-600 dark:text-gray-300"},Mt={class:"font-semibold text-gray-900 dark:text-white"},Nt={class:"mb-6 overflow-x-auto"},Wt={class:"w-full border-collapse"},Bt={class:"px-4 py-3"},Qt={class:"flex flex-col items-center gap-2"},At={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},Ot={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},Ht={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},Rt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},Ft={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},jt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},zt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Et={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Vt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},Yt={class:"px-4 py-3 text-right"},Gt={class:"text-primary text-lg font-bold"},Xt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},Jt={key:0},Kt={key:1},Zt={class:"flex gap-3"},te={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(f,{emit:i}){const a=f,$=i,d=O(),g=q(()=>a.cartItems.reduce((n,o)=>n+o.quantity,0)),w=q(()=>a.totalPrice-a.shippingCost),D=async()=>{try{let n="";n+=`Order Date: ${new Date().toLocaleDateString()}

`,n+=`Product ID	Quantity	Unit Price	Total
`,a.cartItems.forEach(o=>{const r=o.bag.price*o.quantity;n+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${r}
`}),n+=`
`,n+=`Total Items	${g.value}
`,n+=`Total Price	${a.totalPrice}
`,await navigator.clipboard.writeText(n),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),p()}catch(n){console.error("Failed to copy to clipboard:",n),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},T=()=>{const n=`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Order Summary</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          color: #333;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #2563eb;
          margin-bottom: 10px;
        }
        .order-info {
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }
        th {
          background-color: #f8f9fa;
          font-weight: bold;
        }
        .total-row {
          background-color: #f8f9fa;
          font-weight: bold;
        }
        .summary {
          margin-top: 20px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 5px;
        }
        @media print {
          body { margin: 0; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Fashionable Handbags</h1>
        <h2>Order Summary</h2>
        <p>Date: ${new Date().toLocaleDateString()}</p>
      </div>
      
      <div class="order-info">
        <p><strong>Total Items:</strong> ${g.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${a.totalPrice.toLocaleString()}</p>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Design</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${a.cartItems.map(r=>{const h=r.bag.price*r.quantity;return`
              <tr>
                <td>${r.bag.id}</td>
                <td>${r.quantity} pieces</td>
                <td>¥${r.bag.price}</td>
                <td>¥${h.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${g.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${a.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${g.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${a.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,o=window.open("","_blank");o.document.write(n),o.document.close(),o.focus(),o.print(),o.close()},p=()=>{$("close")};return(n,o)=>{const r=A;return f.isOpen?(m(),b("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:p},[o[8]||(o[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:o[0]||(o[0]=F(()=>{},["stop"]))},[t("div",Pt,[t("div",qt,[o[2]||(o[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",Ut,[o[1]||(o[1]=S(" Order Date: ",-1)),t("span",Mt,c(new Date().toLocaleDateString()),1)])]),t("button",{onClick:p,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...o[3]||(o[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",Nt,[t("table",Wt,[o[4]||(o[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(m(!0),b(H,null,R(f.cartItems,h=>(m(),b("tr",{key:h.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",Bt,[t("div",Qt,[t("div",At,[h.bag.images[0]?(m(),j(r,{key:0,src:h.bag.images[0].url,alt:h.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):U("",!0)]),t("span",Ot,c(h.bag.id),1)])]),t("td",Ht,c(h.quantity)+" pieces ",1),t("td",Rt," ¥"+c(h.bag.price),1),t("td",Ft," ¥"+c((h.bag.price*h.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",jt,[t("td",zt,c(f.cartItems.length)+" designs ",1),t("td",Et,c(l(g))+" pieces ",1),t("td",Vt," ¥"+c(l(w).toLocaleString()),1),t("td",Yt,[t("div",Gt," ¥"+c(f.totalPrice.toLocaleString()),1),t("div",Xt,[l(d).isLoading?(m(),b("span",Jt,"Loading USD...")):(m(),b("span",Kt,c(l(d).formatUSDPrice(f.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",Zt,[x(l(I),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:p},{default:_(()=>[...o[5]||(o[5]=[S(" Close ",-1)])]),_:1}),x(l(I),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:D},{default:_(()=>[...o[6]||(o[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),S(" Copy ",-1)])]),_:1}),x(l(I),{class:"hidden flex-1",onClick:T},{default:_(()=>[...o[7]||(o[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),S(" Print ",-1)])]),_:1})])])])):U("",!0)}}},ee=L(te,[["__scopeId","data-v-72957e9b"]]),oe={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},se={class:"mb-6 text-gray-600 dark:text-gray-300"},ae={class:"flex gap-3"},ne={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(f,{emit:i}){const a=i,$=()=>{a("confirm"),a("close")},d=()=>{a("close")};return(g,w)=>(m(),j(G,{to:"body"},[f.isOpen?(m(),b("div",{key:0,class:"dialog-overlay fixed inset-0 z-50 flex items-center justify-center p-4",onClick:d},[w[1]||(w[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:w[0]||(w[0]=F(()=>{},["stop"]))},[t("h3",oe,c(f.title),1),t("p",se,c(f.message),1),t("div",ae,[x(l(I),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:d},{default:_(()=>[S(c(f.cancelText),1)]),_:1}),x(l(I),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:$},{default:_(()=>[S(c(f.confirmText),1)]),_:1})])])])):U("",!0)]))}},ie=L(ne,[["__scopeId","data-v-7d35bdfb"]]),re={class:"cart-page-container"},le={class:"mb-8 flex items-center justify-between"},ce={key:0},de={key:0,class:"cart-loading-state"},pe={key:1,class:"cart-main-container"},ue={key:2,class:"empty-cart-state"},me={__name:"cart",setup(f){const i=W(),a=M(!0);X(()=>i.items,y=>{console.warn("🛒 购物车页面商品更新:",y)},{deep:!0});const{trackViewCart:$}=N(),d=M(!1),g=M(!1),w=y=>{i.removeFromCart(y)},D=y=>{i.increaseQuantity(y)},T=y=>{i.decreaseQuantity(y)},p=(y,s)=>{const u=Number.parseInt(s)||1;i.updateQuantity(y,u)},n=()=>{},o=()=>{Y("/products")},r=()=>{g.value=!0},h=()=>{i.clearCart()};J(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",i.items.length),setTimeout(()=>{a.value=!1,console.warn("🛒 购物车加载完成，商品数量:",i.items.length)},100),i.items.length>0){const y=i.items.map(s=>({item_id:s.bag.id,item_name:`${s.bag.id} Handbag`,item_category:"Handbag",price:s.bag.price,quantity:s.quantity}));$(y,i.totalPrice)}});const k=q(()=>i.totalItems),e=q(()=>i.totalPrice+k.value);return V({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}]}),(y,s)=>{const u=z,v=E;return m(),b("div",re,[t("div",le,[s[3]||(s[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),x(u,null,{default:_(()=>[l(i).items.length>0?(m(),b("div",ce,[x(l(I),{variant:"outline",size:"sm",onClick:r,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:_(()=>[...s[2]||(s[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),S(" Clear Wish List ",-1)])]),_:1})])):U("",!0)]),_:1})]),x(u,null,{fallback:_(()=>[...s[10]||(s[10]=[t("div",{class:"cart-loading-state"},[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})]),t("p",{class:"cart-loading-text"},"Loading your wish list...")],-1)])]),default:_(()=>[l(a)?(m(),b("div",de,[...s[4]||(s[4]=[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})],-1),t("p",{class:"cart-loading-text"},"Loading your wish list...",-1)])])):l(i).items.length>0?(m(),b("div",pe,[x(gt,{items:l(i).items,onRemoveItem:w,onIncreaseQuantity:D,onDecreaseQuantity:T,onUpdateQuantity:p},null,8,["items"]),x(Lt,{"total-items":l(i).totalItems,"total-price":l(i).totalPrice,"shipping-cost":l(k),"total-with-shipping":l(e),onSendToWholesaler:n,onContinueShopping:o},null,8,["total-items","total-price","shipping-cost","total-with-shipping"])])):(m(),b("div",ue,[s[6]||(s[6]=t("div",{class:"empty-cart-icon"},[t("svg",{class:"empty-wishlist-icon text-muted-foreground h-20 w-20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})])],-1)),s[7]||(s[7]=t("h2",{class:"empty-cart-title"},"Your wish list is empty",-1)),s[8]||(s[8]=t("p",{class:"empty-cart-description"}," You haven't added any items to your wish list yet ",-1)),s[9]||(s[9]=t("p",{class:"empty-cart-message"}," 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. ",-1)),x(v,{to:"/products"},{default:_(()=>[x(l(I),{size:"lg",class:"browse-button",style:{color:"white",cursor:"pointer","background-color":"#4a3429"}},{default:_(()=>[...s[5]||(s[5]=[S(" Browse More Products ",-1)])]),_:1})]),_:1})]))]),_:1}),x(ee,{"is-open":l(d),"cart-items":l(i).items,"total-price":l(e),"shipping-cost":l(k),onClose:s[0]||(s[0]=C=>d.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),x(ie,{"is-open":l(g),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:s[1]||(s[1]=C=>g.value=!1),onConfirm:h},null,8,["is-open"])])}}},Se=L(me,[["__scopeId","data-v-ec7dc7aa"]]);export{Se as default};
