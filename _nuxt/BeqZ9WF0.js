import{b as R,u as E,_ as V}from"#entry";import{_ as K}from"./CyEDaApa.js";import{_ as H}from"./Bj58JBYI.js";import{u as Q,M,a as W}from"./CZPd01VG.js";import{_ as P}from"./DlAUqK2U.js";import{Y as u,I as h,V as j,ag as z,Z as t,aa as x,$ as c,u as r,a8 as w,a9 as I,l as L,ab as F,a0 as N,a7 as Y,ac as G,w as Z,o as J,a as B}from"./D1CKChmP.js";import{_ as T}from"./DBUD6v_N.js";import{a as X}from"./DKkqxA9s.js";import{u as tt}from"./BnVjrd0W.js";import"./CvQzBXm8.js";import"./EA9EYHsy.js";import"./BNbcgpgy.js";const et={class:"cart-items-section"},ot={class:"cart-item-content"},st={class:"cart-item-image"},at={class:"cart-item-info"},nt={class:"cart-item-header"},rt={class:"cart-item-title"},it=["onClick"],lt={class:"cart-item-price"},ct={class:"price-total"},dt={class:"price-detail"},ut={class:"cart-item-controls"},pt={class:"quantity-controls"},mt=["onClick"],gt=["value","onInput","min"],ht=["onClick"],yt={class:"quantity-hint"},bt={__name:"CartItemList",props:{items:{type:Array,required:!0}},emits:["removeItem","increaseQuantity","decreaseQuantity","updateQuantity"],setup(b,{emit:i}){const a=i,k=Q(),{trackRemoveFromCart:p}=W(),y=g=>{const n=k.items.find(s=>s.bagId===g);n&&p(n.bag.id,`${n.bag.id} Handbag`,n.bag.price,n.quantity,"Handbag"),a("removeItem",g)},v=g=>{a("increaseQuantity",g)},D=g=>{a("decreaseQuantity",g)},$=(g,n)=>{const s=Number.parseInt(n)||M;a("updateQuantity",g,s)};return(g,n)=>{const s=H;return u(),h("div",et,[(u(!0),h(j,null,z(b.items,l=>(u(),h("div",{key:l.bagId,class:"cart-item-card"},[t("div",ot,[t("div",st,[x(s,{src:l.bag.images[0].url,alt:l.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",at,[t("div",nt,[t("div",null,[t("h3",rt,c(l.bag.id)+" Handbag",1)]),t("button",{onClick:d=>y(l.bagId),class:"cart-item-remove"},[...n[0]||(n[0]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,it)]),t("div",lt,[t("p",ct," ¥"+c((l.bag.price*l.quantity).toLocaleString()),1),t("p",dt," ¥"+c(l.bag.price)+" × "+c(l.quantity),1)]),t("div",ut,[t("div",pt,[t("button",{onClick:d=>D(l.bagId),class:"quantity-btn"}," - ",8,mt),t("input",{value:l.quantity,onInput:d=>$(l.bagId,d.target.value),type:"number",min:r(M),class:"quantity-input"},null,40,gt),t("button",{onClick:d=>v(l.bagId),class:"quantity-btn"}," + ",8,ht)]),t("p",yt,"Min "+c(r(M))+" pcs/style",1)])])])]))),128))])}}},ft=P(bt,[["__scopeId","data-v-db7963e4"]]),xt={class:"cart-summary-section"},vt={class:"cart-summary-card"},wt={class:"cart-summary-details"},_t={class:"summary-row"},kt={class:"summary-row"},Ct={class:"summary-row"},$t={key:0,class:"text-success"},St={key:1},It={class:"summary-total"},Dt={class:"total-amount"},Tt={class:"total-usd"},Lt={key:0},Pt={key:1},qt={class:"cart-summary-actions"},Mt={__name:"CartSummary",props:{totalItems:{type:Number,required:!0},totalPrice:{type:Number,required:!0},shippingCost:{type:Number,required:!0},totalWithShipping:{type:Number,required:!0},wholesalerKey:{type:String,default:"default"}},emits:["sendToWholesaler","continueShopping"],setup(b,{emit:i}){const a=b,k=i,p=Q(),y=R(),{trackBeginCheckout:v,trackUserInteraction:D,trackButtonClick:$}=W(),g=_=>String(_??"").replace(/\D/g,""),n=L(()=>g(a.wholesalerKey)||g(X)),s=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,l=()=>{if(!p.items||p.items.length===0)return;const _=p.items.reduce((f,S)=>f+S.quantity,0),e=y.convertCNYToUSD(a.totalWithShipping),C=y.convertCNYToUSD(a.totalPrice),m=y.convertCNYToUSD(a.shippingCost);let o=`ID	Qty	RMB	USD	Total RMB	Total USD
`;p.items.forEach(f=>{const S=y.convertCNYToUSD(f.bag.price),q=f.bag.price*f.quantity,O=y.convertCNYToUSD(q);o+=`${f.bag.id}	${f.quantity}	${f.bag.price}	${S?S.toFixed(2):"N/A"}	${q}	${O?O.toFixed(2):"N/A"}
`}),o+=`
`,o+=`Subtotal Items:	${_}
`,o+=`Subtotal RMB:	${a.totalPrice}
`,o+=`Subtotal USD:	${C?C.toFixed(2):"N/A"}
`,o+=`Shipping RMB:	${a.shippingCost}
`,o+=`Shipping USD:	${m?m.toFixed(2):"N/A"}
`,o+=`Total RMB:	${a.totalWithShipping}
`,o+=`Total USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(o).then(()=>{const f=encodeURIComponent(o),S=`https://wa.me/${n.value}?text=${f}`;s()?window.location.href=S:window.open(S,"_blank","noopener,noreferrer")}).catch(f=>{console.error("Modern clipboard API failed:",f),d(o)}):d(o)},d=_=>{try{const e=document.createElement("textarea");e.value=_,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const C=document.execCommand("copy");if(e.remove(),C){const m=encodeURIComponent(_),o=`https://wa.me/${n.value}?text=${m}`;s()?window.location.href=o:window.open(o,"_blank","noopener,noreferrer")}else{const m=`https://wa.me/${n.value}`;s()?window.location.href=m:window.open(m,"_blank","noopener,noreferrer")}}catch(e){console.error("Fallback copy failed:",e);const C=`https://wa.me/${n.value}`;s()?window.location.href=C:window.open(C,"_blank","noopener,noreferrer")}},U=()=>{if(p.items.length>0){const _=p.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));v(_,p.totalPrice),D("send_to_wholesaler","cart_page",{item_count:p.items.length}),$("send_to_wholesaler","cart_page",{item_count:p.items.length,total_value:p.totalPrice}),l()}k("sendToWholesaler")},A=()=>{k("continueShopping")};return(_,e)=>(u(),h("div",xt,[t("div",vt,[e[7]||(e[7]=t("h2",{class:"cart-summary-title"},"Cart List Summary",-1)),e[8]||(e[8]=t("div",{class:"cart-summary-title-divider"},null,-1)),t("div",wt,[t("div",_t,[e[0]||(e[0]=t("span",null,"Items",-1)),t("span",null,c(a.totalItems)+" pieces",1)]),t("div",kt,[e[1]||(e[1]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+c(a.totalPrice.toLocaleString()),1)]),t("div",Ct,[e[2]||(e[2]=t("span",null,"Shipping",-1)),a.shippingCost===0?(u(),h("span",$t," Free ")):(u(),h("span",St,"¥"+c(a.shippingCost.toLocaleString()),1))]),e[4]||(e[4]=t("div",{class:"cart-summary-divider"},null,-1)),t("div",It,[e[3]||(e[3]=t("span",null,"Total",-1)),t("div",Dt,[t("div",null,"¥"+c(a.totalWithShipping.toLocaleString()),1),t("div",Tt,[r(y).isLoading?(u(),h("span",Lt," Loading USD... ")):(u(),h("span",Pt,c(r(y).formatUSDPrice(a.totalWithShipping)||"USD price unavailable"),1))])])])]),e[9]||(e[9]=t("div",{class:"cart-summary-section-divider"},null,-1)),t("div",qt,[e[6]||(e[6]=t("div",{class:"whatsapp-notice"},[t("p",null," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),x(r(T),{size:"lg",variant:"enhanced",class:"send-button",style:{color:"white","background-color":"green"},onClick:U},{default:w(()=>[...e[5]||(e[5]=[t("svg",{class:"mr-2 h-5 w-5",viewBox:"0 0 24 24",fill:"currentColor"},[t("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"})],-1),I(" Send To WhatsApp ",-1)])]),_:1}),t("div",{class:"continue-shopping"},[t("button",{onClick:A,class:"continue-shopping-btn"}," Browse More Products >> ")])]),e[10]||(e[10]=t("div",{class:"cart-summary-section-divider"},null,-1)),e[11]||(e[11]=t("div",{class:"welcome-message"},[t("p",null," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])]))}},Nt=P(Mt,[["__scopeId","data-v-8d02bfd9"]]),Ut={class:"mb-6 flex items-center justify-between"},At={class:"flex items-center gap-4"},Bt={class:"text-sm text-gray-600 dark:text-gray-300"},Qt={class:"font-semibold text-gray-900 dark:text-white"},Wt={class:"mb-6 overflow-x-auto"},Ot={class:"w-full border-collapse"},Rt={class:"px-4 py-3"},Ht={class:"flex flex-col items-center gap-2"},jt={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},zt={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},Ft={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},Yt={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},Et={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},Vt={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},Kt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Gt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Zt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},Jt={class:"px-4 py-3 text-right"},Xt={class:"text-primary text-lg font-bold"},te={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},ee={key:0},oe={key:1},se={class:"flex gap-3"},ae={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(b,{emit:i}){const a=b,k=i,p=R(),y=L(()=>a.cartItems.reduce((n,s)=>n+s.quantity,0)),v=L(()=>a.totalPrice-a.shippingCost),D=async()=>{try{let n="";n+=`Order Date: ${new Date().toLocaleDateString()}

`,n+=`Product ID	Quantity	Unit Price	Total
`,a.cartItems.forEach(s=>{const l=s.bag.price*s.quantity;n+=`${s.bag.id}	${s.quantity}	${s.bag.price}	${l}
`}),n+=`
`,n+=`Total Items	${y.value}
`,n+=`Total Price	${a.totalPrice}
`,await navigator.clipboard.writeText(n),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),g()}catch(n){console.error("Failed to copy to clipboard:",n),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},$=()=>{const n=`
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
        <p><strong>Total Items:</strong> ${y.value} pieces</p>
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
          ${a.cartItems.map(l=>{const d=l.bag.price*l.quantity;return`
              <tr>
                <td>${l.bag.id}</td>
                <td>${l.quantity} pieces</td>
                <td>¥${l.bag.price}</td>
                <td>¥${d.toLocaleString()}</td>
              </tr>
            `}).join("")}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>${y.value} pieces</strong></td>
            <td></td>
            <td><strong>¥${a.totalPrice.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div class="summary">
        <h3>Order Summary</h3>
        <p><strong>Total Items:</strong> ${y.value} pieces</p>
        <p><strong>Total Price:</strong> ¥${a.totalPrice.toLocaleString()}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `,s=window.open("","_blank");s.document.write(n),s.document.close(),s.focus(),s.print(),s.close()},g=()=>{k("close")};return(n,s)=>{const l=H;return b.isOpen?(u(),h("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:g},[s[8]||(s[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:s[0]||(s[0]=F(()=>{},["stop"]))},[t("div",Ut,[t("div",At,[s[2]||(s[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",Bt,[s[1]||(s[1]=I(" Order Date: ",-1)),t("span",Qt,c(new Date().toLocaleDateString()),1)])]),t("button",{onClick:g,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...s[3]||(s[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",Wt,[t("table",Ot,[s[4]||(s[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(u(!0),h(j,null,z(b.cartItems,d=>(u(),h("tr",{key:d.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",Rt,[t("div",Ht,[t("div",jt,[d.bag.images[0]?(u(),Y(l,{key:0,src:d.bag.images[0].url,alt:d.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):N("",!0)]),t("span",zt,c(d.bag.id),1)])]),t("td",Ft,c(d.quantity)+" pieces ",1),t("td",Yt," ¥"+c(d.bag.price),1),t("td",Et," ¥"+c((d.bag.price*d.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",Vt,[t("td",Kt,c(b.cartItems.length)+" designs ",1),t("td",Gt,c(r(y))+" pieces ",1),t("td",Zt," ¥"+c(r(v).toLocaleString()),1),t("td",Jt,[t("div",Xt," ¥"+c(b.totalPrice.toLocaleString()),1),t("div",te,[r(p).isLoading?(u(),h("span",ee,"Loading USD...")):(u(),h("span",oe,c(r(p).formatUSDPrice(b.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",se,[x(r(T),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:g},{default:w(()=>[...s[5]||(s[5]=[I(" Close ",-1)])]),_:1}),x(r(T),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:D},{default:w(()=>[...s[6]||(s[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),I(" Copy ",-1)])]),_:1}),x(r(T),{class:"hidden flex-1",onClick:$},{default:w(()=>[...s[7]||(s[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),I(" Print ",-1)])]),_:1})])])])):N("",!0)}}},ne=P(ae,[["__scopeId","data-v-72957e9b"]]),re={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},ie={class:"mb-6 text-gray-600 dark:text-gray-300"},le={class:"flex gap-3"},ce={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(b,{emit:i}){const a=i,k=()=>{a("confirm"),a("close")},p=()=>{a("close")};return(y,v)=>(u(),Y(G,{to:"body"},[b.isOpen?(u(),h("div",{key:0,class:"dialog-overlay fixed inset-0 z-50 flex items-center justify-center p-4",onClick:p},[v[1]||(v[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:v[0]||(v[0]=F(()=>{},["stop"]))},[t("h3",re,c(b.title),1),t("p",ie,c(b.message),1),t("div",le,[x(r(T),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:p},{default:w(()=>[I(c(b.cancelText),1)]),_:1}),x(r(T),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:k},{default:w(()=>[I(c(b.confirmText),1)]),_:1})])])])):N("",!0)]))}},de=P(ce,[["__scopeId","data-v-7d35bdfb"]]),ue={class:"cart-page-container"},pe={class:"mb-8 flex items-center justify-between"},me={key:0},ge={key:0,class:"cart-loading-state"},he={key:1,class:"cart-main-container"},ye={key:2,class:"empty-cart-state"},be={__name:"cart",setup(b){const i=Q(),a=B(!0),{wholesalerKey:k,navigateWithWholesaler:p,buildPath:y}=tt();Z(()=>i.items,m=>{console.warn("🛒 购物车页面商品更新:",m)},{deep:!0});const{trackViewCart:v}=W(),D=B(!1),$=B(!1),g=m=>{i.removeFromCart(m)},n=m=>{i.increaseQuantity(m)},s=m=>{i.decreaseQuantity(m)},l=(m,o)=>{const f=Number.parseInt(o)||M;i.updateQuantity(m,f)},d=()=>{},U=()=>{p("/products")},A=()=>{$.value=!0},_=()=>{i.clearCart()};J(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",i.items.length),setTimeout(()=>{a.value=!1,console.warn("🛒 购物车加载完成，商品数量:",i.items.length)},100),i.items.length>0){const m=i.items.map(o=>({item_id:o.bag.id,item_name:`${o.bag.id} Handbag`,item_category:"Handbag",price:o.bag.price,quantity:o.quantity}));v(m,i.totalPrice)}});const e=L(()=>i.totalItems),C=L(()=>i.totalPrice+e.value);return E({title:"Cart List - Fashionable Handbags",meta:[{name:"description",content:"View your cart list and manage favorite items."}]}),(m,o)=>{const f=V,S=K;return u(),h("div",ue,[t("div",pe,[o[3]||(o[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Cart List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),x(f,null,{default:w(()=>[r(i).items.length>0?(u(),h("div",me,[x(r(T),{variant:"outline",size:"sm",onClick:A,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:w(()=>[...o[2]||(o[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),I(" Clear Cart List ",-1)])]),_:1})])):N("",!0)]),_:1})]),x(f,null,{fallback:w(()=>[...o[10]||(o[10]=[t("div",{class:"cart-loading-state"},[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})]),t("p",{class:"cart-loading-text"},"Loading your wish list...")],-1)])]),default:w(()=>[r(a)?(u(),h("div",ge,[...o[4]||(o[4]=[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})],-1),t("p",{class:"cart-loading-text"},"Loading your cart list...",-1)])])):r(i).items.length>0?(u(),h("div",he,[x(ft,{items:r(i).items,onRemoveItem:g,onIncreaseQuantity:n,onDecreaseQuantity:s,onUpdateQuantity:l},null,8,["items"]),x(Nt,{"total-items":r(i).totalItems,"total-price":r(i).totalPrice,"shipping-cost":r(e),"total-with-shipping":r(C),"wholesaler-key":r(k),onSendToWholesaler:d,onContinueShopping:U},null,8,["total-items","total-price","shipping-cost","total-with-shipping","wholesaler-key"])])):(u(),h("div",ye,[o[6]||(o[6]=t("div",{class:"empty-cart-icon"},[t("svg",{class:"empty-wishlist-icon text-muted-foreground h-20 w-20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})])],-1)),o[7]||(o[7]=t("h2",{class:"empty-cart-title"},"Your cart list is empty",-1)),o[8]||(o[8]=t("p",{class:"empty-cart-description"}," You haven't added any items to your cart list yet ",-1)),o[9]||(o[9]=t("p",{class:"empty-cart-message"}," 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. ",-1)),x(S,{to:r(y)("/products")},{default:w(()=>[x(r(T),{size:"lg",class:"browse-button",style:{color:"white",cursor:"pointer","background-color":"#4a3429"}},{default:w(()=>[...o[5]||(o[5]=[I(" Browse More Products ",-1)])]),_:1})]),_:1},8,["to"])]))]),_:1}),x(ne,{"is-open":r(D),"cart-items":r(i).items,"total-price":r(C),"shipping-cost":r(e),onClose:o[0]||(o[0]=q=>D.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),x(de,{"is-open":r($),title:"Clear Cart List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Cart List","cancel-text":"Cancel",variant:"danger",onClose:o[1]||(o[1]=q=>$.value=!1),onConfirm:_},null,8,["is-open"])])}}},Le=P(be,[["__scopeId","data-v-d28699e0"]]);export{Le as default};
