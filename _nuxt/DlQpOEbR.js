import{b as U,u as E,_ as F}from"./B8lDWo6C.js";import{_ as Y}from"./BC10HNSo.js";import{_ as O}from"./B6H2jIG1.js";import{u as W,M as Q,a as N}from"./YqMhg49r.js";import{_ as L}from"./DlAUqK2U.js";import{Y as g,I as b,V as R,ag as H,Z as t,aa as f,$ as d,u as r,a8 as w,a9 as C,l as I,ab as j,a0 as q,a7 as z,ac as K,w as G,o as Z,a as A}from"./Daug-Mgy.js";import{_ as S}from"./BK5oiH23.js";import{a as J}from"./DKkqxA9s.js";import{u as X}from"./CCP_HcVN.js";import"./CpqfRo_a.js";import"./BTSYkuA0.js";import"./DMP5xfoI.js";const tt={class:"cart-items-section"},et={class:"cart-item-content"},ot={class:"cart-item-image"},at={class:"cart-item-info"},st={class:"cart-item-header"},nt={class:"cart-item-title"},rt=["onClick"],it={class:"cart-item-price"},lt={class:"price-total"},ct={class:"price-detail"},dt={class:"cart-item-controls"},ut={class:"quantity-controls"},pt=["onClick"],mt=["value","onInput","min"],gt=["onClick"],yt={__name:"CartItemList",props:{items:{type:Array,required:!0}},emits:["removeItem","increaseQuantity","decreaseQuantity","updateQuantity"],setup(m,{emit:l}){const i=l,_=W(),{trackRemoveFromCart:u}=N(),x=p=>{const n=_.items.find(a=>a.bagId===p);n&&u(n.bag.id,`${n.bag.id} Handbag`,n.bag.price,n.quantity,"Handbag"),i("removeItem",p)},v=p=>{i("increaseQuantity",p)},$=p=>{i("decreaseQuantity",p)},k=(p,n)=>{const a=Number.parseInt(n)||Q;i("updateQuantity",p,a)};return(p,n)=>{const a=O;return g(),b("div",tt,[(g(!0),b(R,null,H(m.items,s=>(g(),b("div",{key:s.bagId,class:"cart-item-card"},[t("div",et,[t("div",ot,[f(a,{src:s.bag.images[0].url,alt:s.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",at,[t("div",st,[t("div",null,[t("h3",nt,d(s.bag.id)+" Handbag",1)]),t("button",{onClick:c=>x(s.bagId),class:"cart-item-remove"},[...n[0]||(n[0]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,rt)]),t("div",it,[t("p",lt," ¥"+d((s.bag.price*s.quantity).toLocaleString()),1),t("p",ct," ¥"+d(s.bag.price)+" × "+d(s.quantity),1)]),t("div",dt,[t("div",ut,[t("button",{onClick:c=>$(s.bagId),class:"quantity-btn"}," - ",8,pt),t("input",{value:s.quantity,onInput:c=>k(s.bagId,c.target.value),type:"number",min:r(Q),class:"quantity-input"},null,40,mt),t("button",{onClick:c=>v(s.bagId),class:"quantity-btn"}," + ",8,gt)])])])])]))),128))])}}},ht=L(yt,[["__scopeId","data-v-1a419a15"]]),ft={class:"cart-summary-section"},bt={class:"cart-summary-card"},xt={class:"cart-summary-details"},vt={class:"summary-row"},wt={class:"summary-total"},_t={class:"summary-row summary-row-total-usd"},kt={class:"cart-summary-actions"},Ct={__name:"CartSummary",props:{totalItems:{type:Number,required:!0},totalPrice:{type:Number,required:!0},shippingCost:{type:Number,required:!0},totalWithShipping:{type:Number,required:!0},wholesalerKey:{type:String,default:"default"}},emits:["sendToWholesaler","continueShopping"],setup(m,{emit:l}){const i=m,_=l,u=W(),x=U(),{trackBeginCheckout:v,trackUserInteraction:$,trackButtonClick:k}=N(),p=y=>{const e=x.convertCNYToUSD(y);return e===null?"N/A":e.toFixed(2)},n=I(()=>x.isLoading?"Loading USD...":x.formatUSDPrice(i.totalWithShipping)||"USD price unavailable"),a=y=>String(y!=null?y:"").replace(/\D/g,""),s=I(()=>a(i.wholesalerKey)||a(J)),c=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,M=()=>{if(!u.items||u.items.length===0)return;const y=u.items.reduce((o,h)=>o+h.quantity,0);let e=`ID	Qty	UnitPriceRMB	TotalRMB
`;u.items.forEach(o=>{const h=o.bag.price*o.quantity;e+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${h}
`}),e+=`
`,e+=`Items:	${y}
`,e+=`TotalRMB:	${i.totalWithShipping}
`,e+=`TotalUSD:	${p(i.totalWithShipping)}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e).then(()=>{const o=encodeURIComponent(e),h=`https://wa.me/${s.value}?text=${o}`;c()?window.location.href=h:window.open(h,"_blank","noopener,noreferrer")}).catch(o=>{console.error("Modern clipboard API failed:",o),T(e)}):T(e)},T=y=>{try{const e=document.createElement("textarea");e.value=y,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const o=document.execCommand("copy");if(e.remove(),o){const h=encodeURIComponent(y),P=`https://wa.me/${s.value}?text=${h}`;c()?window.location.href=P:window.open(P,"_blank","noopener,noreferrer")}else{const h=`https://wa.me/${s.value}`;c()?window.location.href=h:window.open(h,"_blank","noopener,noreferrer")}}catch(e){console.error("Fallback copy failed:",e);const o=`https://wa.me/${s.value}`;c()?window.location.href=o:window.open(o,"_blank","noopener,noreferrer")}},B=()=>{if(u.items.length>0){const y=u.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));v(y,u.totalPrice),$("send_to_wholesaler","cart_page",{item_count:u.items.length}),k("send_to_wholesaler","cart_page",{item_count:u.items.length,total_value:u.totalPrice}),M()}_("sendToWholesaler")},D=()=>{_("continueShopping")};return(y,e)=>(g(),b("div",ft,[t("div",bt,[e[6]||(e[6]=t("h2",{class:"cart-summary-title"},"Cart List Summary",-1)),e[7]||(e[7]=t("div",{class:"cart-summary-title-divider"},null,-1)),t("div",xt,[t("div",vt,[e[0]||(e[0]=t("span",null,"Items",-1)),t("span",null,d(i.totalItems)+" pieces",1)]),e[3]||(e[3]=t("div",{class:"cart-summary-divider"},null,-1)),t("div",wt,[e[1]||(e[1]=t("span",null,"TotalRMB",-1)),t("span",null,"¥"+d(i.totalWithShipping.toLocaleString()),1)]),t("div",_t,[e[2]||(e[2]=t("span",null,"TotalUSD",-1)),t("span",null,d(r(n)),1)])]),e[8]||(e[8]=t("div",{class:"cart-summary-section-divider"},null,-1)),t("div",kt,[e[5]||(e[5]=t("div",{class:"whatsapp-notice"},[t("p",null," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),f(r(S),{size:"lg",variant:"enhanced",class:"send-button",onClick:B},{default:w(()=>[...e[4]||(e[4]=[t("svg",{class:"mr-2 h-5 w-5",viewBox:"0 0 24 24",fill:"currentColor"},[t("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"})],-1),C(" Send To WhatsApp ",-1)])]),_:1}),t("div",{class:"continue-shopping"},[t("button",{onClick:D,class:"continue-shopping-btn"}," Browse More Products >> ")])]),e[9]||(e[9]=t("div",{class:"cart-summary-section-divider"},null,-1)),e[10]||(e[10]=t("div",{class:"welcome-message"},[t("p",null," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])]))}},$t=L(Ct,[["__scopeId","data-v-54bc6a85"]]),St={class:"mb-6 flex items-center justify-between"},It={class:"flex items-center gap-4"},Dt={class:"text-sm text-gray-600 dark:text-gray-300"},Lt={class:"font-semibold text-gray-900 dark:text-white"},Tt={class:"mb-6 overflow-x-auto"},Pt={class:"w-full border-collapse"},qt={class:"px-4 py-3"},Mt={class:"flex flex-col items-center gap-2"},Bt={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},At={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},Qt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},Wt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},Nt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},Ut={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},Ot={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Rt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Ht={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},jt={class:"px-4 py-3 text-right"},zt={class:"text-primary text-lg font-bold"},Vt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},Et={key:0},Ft={key:1},Yt={class:"flex gap-3"},Kt={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(m,{emit:l}){const i=m,_=l,u=U(),x=I(()=>i.cartItems.reduce((n,a)=>n+a.quantity,0)),v=I(()=>i.totalPrice-i.shippingCost),$=async()=>{try{let n="";n+=`Order Date: ${new Date().toLocaleDateString()}

`,n+=`Product ID	Quantity	Unit Price	Total
`,i.cartItems.forEach(a=>{const s=a.bag.price*a.quantity;n+=`${a.bag.id}	${a.quantity}	${a.bag.price}	${s}
`}),n+=`
`,n+=`Total Items	${x.value}
`,n+=`Total Price	${i.totalPrice}
`,await navigator.clipboard.writeText(n),typeof window!="undefined"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),p()}catch(n){console.error("Failed to copy to clipboard:",n),typeof window!="undefined"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},k=()=>{const n=`
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
        <p><strong>Total Items:</strong> ${x.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${i.totalPrice.toLocaleString()}</p>
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
          ${i.cartItems.map(s=>{const c=s.bag.price*s.quantity;return`
              <tr>
                <td>${s.bag.id}</td>
                <td>${s.quantity} pieces</td>
                <td>¥${s.bag.price}</td>
                <td>¥${c.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${x.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${i.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${x.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${i.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,a=window.open("","_blank");a.document.write(n),a.document.close(),a.focus(),a.print(),a.close()},p=()=>{_("close")};return(n,a)=>{const s=O;return m.isOpen?(g(),b("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:p},[a[8]||(a[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:a[0]||(a[0]=j(()=>{},["stop"]))},[t("div",St,[t("div",It,[a[2]||(a[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",Dt,[a[1]||(a[1]=C(" Order Date: ",-1)),t("span",Lt,d(new Date().toLocaleDateString()),1)])]),t("button",{onClick:p,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...a[3]||(a[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",Tt,[t("table",Pt,[a[4]||(a[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(g(!0),b(R,null,H(m.cartItems,c=>(g(),b("tr",{key:c.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",qt,[t("div",Mt,[t("div",Bt,[c.bag.images[0]?(g(),z(s,{key:0,src:c.bag.images[0].url,alt:c.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):q("",!0)]),t("span",At,d(c.bag.id),1)])]),t("td",Qt,d(c.quantity)+" pieces ",1),t("td",Wt," ¥"+d(c.bag.price),1),t("td",Nt," ¥"+d((c.bag.price*c.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",Ut,[t("td",Ot,d(m.cartItems.length)+" designs ",1),t("td",Rt,d(r(x))+" pieces ",1),t("td",Ht," ¥"+d(r(v).toLocaleString()),1),t("td",jt,[t("div",zt," ¥"+d(m.totalPrice.toLocaleString()),1),t("div",Vt,[r(u).isLoading?(g(),b("span",Et,"Loading USD...")):(g(),b("span",Ft,d(r(u).formatUSDPrice(m.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",Yt,[f(r(S),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:p},{default:w(()=>[...a[5]||(a[5]=[C(" Close ",-1)])]),_:1}),f(r(S),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:$},{default:w(()=>[...a[6]||(a[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),C(" Copy ",-1)])]),_:1}),f(r(S),{class:"hidden flex-1",onClick:k},{default:w(()=>[...a[7]||(a[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),C(" Print ",-1)])]),_:1})])])])):q("",!0)}}},Gt=L(Kt,[["__scopeId","data-v-72957e9b"]]),Zt={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},Jt={class:"mb-6 text-gray-600 dark:text-gray-300"},Xt={class:"flex gap-3"},te={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(m,{emit:l}){const i=l,_=()=>{i("confirm"),i("close")},u=()=>{i("close")};return(x,v)=>(g(),z(K,{to:"body"},[m.isOpen?(g(),b("div",{key:0,class:"dialog-overlay fixed inset-0 z-50 flex items-center justify-center p-4",onClick:u},[v[1]||(v[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:v[0]||(v[0]=j(()=>{},["stop"]))},[t("h3",Zt,d(m.title),1),t("p",Jt,d(m.message),1),t("div",Xt,[f(r(S),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:u},{default:w(()=>[C(d(m.cancelText),1)]),_:1}),f(r(S),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:_},{default:w(()=>[C(d(m.confirmText),1)]),_:1})])])])):q("",!0)]))}},ee=L(te,[["__scopeId","data-v-7d35bdfb"]]),oe={class:"cart-page-container"},ae={class:"mb-8 flex items-center justify-between"},se={key:0},ne={key:0,class:"cart-loading-state"},re={key:1,class:"cart-main-container"},ie={key:2,class:"empty-cart-state"},le={__name:"cart",setup(m){const l=W(),i=A(!0),{wholesalerKey:_,navigateWithWholesaler:u,buildPath:x}=X();G(()=>l.items,e=>{console.warn("🛒 购物车页面商品更新:",e)},{deep:!0});const{trackViewCart:v}=N(),$=A(!1),k=A(!1),p=e=>{l.removeFromCart(e)},n=e=>{l.increaseQuantity(e)},a=e=>{l.decreaseQuantity(e)},s=(e,o)=>{const h=Number.parseInt(o)||Q;l.updateQuantity(e,h)},c=()=>{},M=()=>{u("/products")},T=()=>{k.value=!0},B=()=>{l.clearCart()};Z(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",l.items.length),setTimeout(()=>{i.value=!1,console.warn("🛒 购物车加载完成，商品数量:",l.items.length)},100),l.items.length>0){const e=l.items.map(o=>({item_id:o.bag.id,item_name:`${o.bag.id} Handbag`,item_category:"Handbag",price:o.bag.price,quantity:o.quantity}));v(e,l.totalPrice)}});const D=I(()=>l.totalItems),y=I(()=>l.totalPrice+D.value);return E({title:"Cart List - Fashionable Handbags",meta:[{name:"description",content:"View your cart list and manage favorite items."}]}),(e,o)=>{const h=F,P=Y;return g(),b("div",oe,[t("div",ae,[o[3]||(o[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Cart List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),f(h,null,{default:w(()=>[r(l).items.length>0?(g(),b("div",se,[f(r(S),{variant:"outline",size:"sm",onClick:T,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:w(()=>[...o[2]||(o[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),C(" Clear Cart List ",-1)])]),_:1})])):q("",!0)]),_:1})]),f(h,null,{fallback:w(()=>[...o[10]||(o[10]=[t("div",{class:"cart-loading-state"},[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})]),t("p",{class:"cart-loading-text"},"Loading your wish list...")],-1)])]),default:w(()=>[r(i)?(g(),b("div",ne,[...o[4]||(o[4]=[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})],-1),t("p",{class:"cart-loading-text"},"Loading your cart list...",-1)])])):r(l).items.length>0?(g(),b("div",re,[f(ht,{items:r(l).items,onRemoveItem:p,onIncreaseQuantity:n,onDecreaseQuantity:a,onUpdateQuantity:s},null,8,["items"]),f($t,{"total-items":r(l).totalItems,"total-price":r(l).totalPrice,"shipping-cost":r(D),"total-with-shipping":r(y),"wholesaler-key":r(_),onSendToWholesaler:c,onContinueShopping:M},null,8,["total-items","total-price","shipping-cost","total-with-shipping","wholesaler-key"])])):(g(),b("div",ie,[o[6]||(o[6]=t("div",{class:"empty-cart-icon"},[t("svg",{class:"empty-wishlist-icon text-muted-foreground h-20 w-20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})])],-1)),o[7]||(o[7]=t("h2",{class:"empty-cart-title"},"Your cart list is empty",-1)),o[8]||(o[8]=t("p",{class:"empty-cart-description"}," You haven't added any items to your cart list yet ",-1)),o[9]||(o[9]=t("p",{class:"empty-cart-message"}," 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. ",-1)),f(P,{to:r(x)("/products")},{default:w(()=>[f(r(S),{size:"lg",class:"browse-button",style:{color:"white",cursor:"pointer","background-color":"#4a3429"}},{default:w(()=>[...o[5]||(o[5]=[C(" Browse More Products ",-1)])]),_:1})]),_:1},8,["to"])]))]),_:1}),f(Gt,{"is-open":r($),"cart-items":r(l).items,"total-price":r(y),"shipping-cost":r(D),onClose:o[0]||(o[0]=V=>$.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),f(ee,{"is-open":r(k),title:"Clear Cart List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Cart List","cancel-text":"Cancel",variant:"danger",onClose:o[1]||(o[1]=V=>k.value=!1),onConfirm:B},null,8,["is-open"])])}}},we=L(le,[["__scopeId","data-v-d28699e0"]]);export{we as default};
