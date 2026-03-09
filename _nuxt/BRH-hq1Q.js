import{_ as z}from"./B54Z19yI.js";import{_ as E}from"./tiF_snPY.js";import{_ as Q}from"./Cip1akfp.js";import{u as N}from"./B7xX6Qq_.js";import{a as B,b as O,u as V}from"#entry";import{_ as P}from"./DlAUqK2U.js";import{O as h,Q as p,L as R,a9 as H,U as t,a3 as f,X as d,c as T,u as i,a1 as w,a2 as I,W as U,a4 as j,a0 as F,a5 as Y,b as M,w as K,o as G}from"./Co5tMnYY.js";import{_ as L}from"./Bbo0jKgt.js";import{W as X,M as J}from"./Cqt_zyQA.js";import{u as Z}from"./D9lstHyc.js";import"./Bvi1VPMX.js";import"./zWPNylOE.js";import"./C7xmkHdv.js";const tt={class:"cart-items-section"},et={class:"cart-item-content"},ot={class:"cart-item-image"},st={class:"cart-item-info"},at={class:"cart-item-header"},nt={class:"cart-item-title"},rt=["onClick"],it={class:"cart-item-price"},lt={class:"price-total"},ct={class:"price-detail"},dt={class:"cart-item-controls"},ut={class:"quantity-controls"},pt=["onClick"],mt=["value","onInput"],gt=["onClick"],ht={__name:"CartItemList",props:{items:{type:Array,required:!0}},emits:["removeItem","increaseQuantity","decreaseQuantity","updateQuantity"],setup(b,{emit:c}){const a=c,k=B(),{trackRemoveFromCart:m}=N(),y=u=>{const n=k.items.find(o=>o.bagId===u);n&&m(n.bag.id,`${n.bag.id} Handbag`,n.bag.price,n.quantity,"Handbag"),a("removeItem",u)},x=u=>{a("increaseQuantity",u)},D=u=>{a("decreaseQuantity",u)},C=(u,n)=>{const o=Number.parseInt(n)||1;a("updateQuantity",u,o)};return(u,n)=>{const o=Q;return p(),h("div",tt,[(p(!0),h(R,null,H(b.items,l=>(p(),h("div",{key:l.bagId,class:"cart-item-card"},[t("div",et,[t("div",ot,[f(o,{src:l.bag.images[0].url,alt:l.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:96,height:96,format:"webp"},null,8,["src","alt"])]),t("div",st,[t("div",at,[t("div",null,[t("h3",nt,d(l.bag.id)+" Handbag",1)]),t("button",{onClick:g=>y(l.bagId),class:"cart-item-remove"},[...n[0]||(n[0]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,rt)]),t("div",it,[t("p",lt," ¥"+d((l.bag.price*l.quantity).toLocaleString()),1),t("p",ct," ¥"+d(l.bag.price)+" × "+d(l.quantity),1)]),t("div",dt,[t("div",ut,[t("button",{onClick:g=>D(l.bagId),class:"quantity-btn"}," - ",8,pt),t("input",{value:l.quantity,onInput:g=>C(l.bagId,g.target.value),type:"number",min:"1",class:"quantity-input"},null,40,mt),t("button",{onClick:g=>x(l.bagId),class:"quantity-btn"}," + ",8,gt)])])])])]))),128))])}}},yt=P(ht,[["__scopeId","data-v-265154a6"]]),bt={class:"cart-summary-section"},ft={class:"cart-summary-card"},xt={class:"cart-summary-details"},vt={class:"summary-row"},wt={class:"summary-row"},_t={class:"summary-row"},kt={key:0,class:"text-success"},$t={key:1},Ct={class:"summary-total"},St={class:"total-amount"},It={class:"total-usd"},Dt={key:0},Lt={key:1},Tt={class:"cart-summary-actions"},Pt={__name:"CartSummary",props:{totalItems:{type:Number,required:!0},totalPrice:{type:Number,required:!0},shippingCost:{type:Number,required:!0},totalWithShipping:{type:Number,required:!0},wholesalerKey:{type:String,default:"default"}},emits:["sendToWholesaler","continueShopping"],setup(b,{emit:c}){const a=b,k=c,m=B(),y=O(),{trackBeginCheckout:x,trackUserInteraction:D,trackButtonClick:C}=N(),u=T(()=>X[a.wholesalerKey]||J),n=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,o=()=>{if(!m.items||m.items.length===0)return;const S=m.items.reduce((s,v)=>s+v.quantity,0),e=y.convertCNYToUSD(a.totalWithShipping),_=y.convertCNYToUSD(a.totalPrice),$=y.convertCNYToUSD(a.shippingCost);let r=`ID	Qty	RMB	USD	Total RMB	Total USD
`;m.items.forEach(s=>{const v=y.convertCNYToUSD(s.bag.price),W=s.bag.price*s.quantity,q=y.convertCNYToUSD(W);r+=`${s.bag.id}	${s.quantity}	${s.bag.price}	${v?v.toFixed(2):"N/A"}	${W}	${q?q.toFixed(2):"N/A"}
`}),r+=`
`,r+=`Subtotal Items:	${S}
`,r+=`Subtotal RMB:	${a.totalPrice}
`,r+=`Subtotal USD:	${_?_.toFixed(2):"N/A"}
`,r+=`Shipping RMB:	${a.shippingCost}
`,r+=`Shipping USD:	${$?$.toFixed(2):"N/A"}
`,r+=`Total RMB:	${a.totalWithShipping}
`,r+=`Total USD:	${e?e.toFixed(2):"N/A"}
`,navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(r).then(()=>{const s=encodeURIComponent(r),v=`https://wa.me/${u.value}?text=${s}`;n()?window.location.href=v:window.open(v,"_blank","noopener,noreferrer")}).catch(s=>{console.error("Modern clipboard API failed:",s),l(r)}):l(r)},l=S=>{try{const e=document.createElement("textarea");e.value=S,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.append(e),e.focus(),e.select();const _=document.execCommand("copy");if(e.remove(),_){const $=encodeURIComponent(S),r=`https://wa.me/${u.value}?text=${$}`;n()?window.location.href=r:window.open(r,"_blank","noopener,noreferrer")}else{const $=`https://wa.me/${u.value}`;n()?window.location.href=$:window.open($,"_blank","noopener,noreferrer")}}catch(e){console.error("Fallback copy failed:",e);const _=`https://wa.me/${u.value}`;n()?window.location.href=_:window.open(_,"_blank","noopener,noreferrer")}},g=()=>{if(m.items.length>0){const S=m.items.map(e=>({item_id:e.bag.id,item_name:`${e.bag.id} Handbag`,item_category:"Handbag",price:e.bag.price,quantity:e.quantity}));x(S,m.totalPrice),D("send_to_wholesaler","cart_page",{item_count:m.items.length}),C("send_to_wholesaler","cart_page",{item_count:m.items.length,total_value:m.totalPrice}),o()}k("sendToWholesaler")},A=()=>{k("continueShopping")};return(S,e)=>(p(),h("div",bt,[t("div",ft,[e[7]||(e[7]=t("h2",{class:"cart-summary-title"},"Wish List Summary",-1)),e[8]||(e[8]=t("div",{class:"cart-summary-title-divider"},null,-1)),t("div",xt,[t("div",vt,[e[0]||(e[0]=t("span",null,"Items",-1)),t("span",null,d(a.totalItems)+" pieces",1)]),t("div",wt,[e[1]||(e[1]=t("span",null,"Subtotal",-1)),t("span",null,"¥"+d(a.totalPrice.toLocaleString()),1)]),t("div",_t,[e[2]||(e[2]=t("span",null,"Shipping",-1)),a.shippingCost===0?(p(),h("span",kt," Free ")):(p(),h("span",$t,"¥"+d(a.shippingCost.toLocaleString()),1))]),e[4]||(e[4]=t("div",{class:"cart-summary-divider"},null,-1)),t("div",Ct,[e[3]||(e[3]=t("span",null,"Total",-1)),t("div",St,[t("div",null,"¥"+d(a.totalWithShipping.toLocaleString()),1),t("div",It,[i(y).isLoading?(p(),h("span",Dt," Loading USD... ")):(p(),h("span",Lt,d(i(y).formatUSDPrice(a.totalWithShipping)||"USD price unavailable"),1))])])])]),e[9]||(e[9]=t("div",{class:"cart-summary-section-divider"},null,-1)),t("div",Tt,[e[6]||(e[6]=t("div",{class:"whatsapp-notice"},[t("p",null," 💬 Click to jump to WhatsApp customer service chat, pls feel free to click send ")],-1)),f(i(L),{size:"lg",variant:"enhanced",class:"send-button",style:{color:"white","background-color":"green"},onClick:g},{default:w(()=>[...e[5]||(e[5]=[t("svg",{class:"mr-2 h-5 w-5",viewBox:"0 0 24 24",fill:"currentColor"},[t("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"})],-1),I(" Send To WhatsApp ",-1)])]),_:1}),t("div",{class:"continue-shopping"},[t("button",{onClick:A,class:"continue-shopping-btn"}," Browse More Products >> ")])]),e[10]||(e[10]=t("div",{class:"cart-summary-section-divider"},null,-1)),e[11]||(e[11]=t("div",{class:"welcome-message"},[t("p",null," 🌟 Our handbag styles are very popular worldwide! Welcome to place your order and experience our premium quality products. ")],-1))])]))}},Wt=P(Pt,[["__scopeId","data-v-d4decd2f"]]),qt={class:"mb-6 flex items-center justify-between"},Ut={class:"flex items-center gap-4"},At={class:"text-sm text-gray-600 dark:text-gray-300"},Mt={class:"font-semibold text-gray-900 dark:text-white"},Nt={class:"mb-6 overflow-x-auto"},Bt={class:"w-full border-collapse"},Qt={class:"px-4 py-3"},Ot={class:"flex flex-col items-center gap-2"},Rt={class:"h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"},Ht={class:"text-xs font-medium text-gray-600 dark:text-gray-300"},jt={class:"px-4 py-3 text-center text-sm text-gray-900 dark:text-white"},Ft={class:"px-4 py-3 text-right text-sm text-gray-900 dark:text-white"},zt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},Et={class:"border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"},Vt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Yt={class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"},Kt={class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"},Gt={class:"px-4 py-3 text-right"},Xt={class:"text-primary text-lg font-bold"},Jt={class:"text-sm font-normal text-gray-600 dark:text-gray-300"},Zt={key:0},te={key:1},ee={class:"flex gap-3"},oe={__name:"CheckoutDialog",props:{isOpen:{type:Boolean,default:!1},cartItems:{type:Array,default:()=>[]},totalPrice:{type:Number,default:0},shippingCost:{type:Number,default:0}},emits:["close"],setup(b,{emit:c}){const a=b,k=c,m=O(),y=T(()=>a.cartItems.reduce((n,o)=>n+o.quantity,0)),x=T(()=>a.totalPrice-a.shippingCost),D=async()=>{try{let n="";n+=`Order Date: ${new Date().toLocaleDateString()}

`,n+=`Product ID	Quantity	Unit Price	Total
`,a.cartItems.forEach(o=>{const l=o.bag.price*o.quantity;n+=`${o.bag.id}	${o.quantity}	${o.bag.price}	${l}
`}),n+=`
`,n+=`Total Items	${y.value}
`,n+=`Total Price	${a.totalPrice}
`,await navigator.clipboard.writeText(n),typeof window<"u"&&window.$toast&&window.$toast.success("Success","Order details copied to clipboard!"),u()}catch(n){console.error("Failed to copy to clipboard:",n),typeof window<"u"&&window.$toast&&window.$toast.error("Error","Failed to copy to clipboard")}},C=()=>{const n=`
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
          ${a.cartItems.map(l=>{const g=l.bag.price*l.quantity;return`
              <tr>
                <td>${l.bag.id}</td>
                <td>${l.quantity} pieces</td>
                <td>¥${l.bag.price}</td>
                <td>¥${g.toLocaleString()}</td>
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
  `,o=window.open("","_blank");o.document.write(n),o.document.close(),o.focus(),o.print(),o.close()},u=()=>{k("close")};return(n,o)=>{const l=Q;return b.isOpen?(p(),h("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:u},[o[8]||(o[8]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:o[0]||(o[0]=j(()=>{},["stop"]))},[t("div",qt,[t("div",Ut,[o[2]||(o[2]=t("h3",{class:"text-2xl font-bold text-gray-900 dark:text-white"}," Order Summary ",-1)),t("div",At,[o[1]||(o[1]=I(" Order Date: ",-1)),t("span",Mt,d(new Date().toLocaleDateString()),1)])]),t("button",{onClick:u,class:"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"},[...o[3]||(o[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),t("div",Nt,[t("table",Bt,[o[4]||(o[4]=t("thead",null,[t("tr",{class:"border-b border-gray-200 dark:border-gray-700"},[t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Design "),t("th",{class:"px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white"}," Quantity "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Unit Price "),t("th",{class:"px-4 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white"}," Total ")])],-1)),t("tbody",null,[(p(!0),h(R,null,H(b.cartItems,g=>(p(),h("tr",{key:g.bagId,class:"border-b border-gray-100 dark:border-gray-800"},[t("td",Qt,[t("div",Ot,[t("div",Rt,[g.bag.images[0]?(p(),F(l,{key:0,src:g.bag.images[0].url,alt:g.bag.images[0].alt,class:"h-full w-full object-cover",loading:"lazy",width:64,height:64,format:"webp"},null,8,["src","alt"])):U("",!0)]),t("span",Ht,d(g.bag.id),1)])]),t("td",jt,d(g.quantity)+" pieces ",1),t("td",Ft," ¥"+d(g.bag.price),1),t("td",zt," ¥"+d((g.bag.price*g.quantity).toLocaleString()),1)]))),128))]),t("tfoot",null,[t("tr",Et,[t("td",Vt,d(b.cartItems.length)+" designs ",1),t("td",Yt,d(i(y))+" pieces ",1),t("td",Kt," ¥"+d(i(x).toLocaleString()),1),t("td",Gt,[t("div",Xt," ¥"+d(b.totalPrice.toLocaleString()),1),t("div",Jt,[i(m).isLoading?(p(),h("span",Zt,"Loading USD...")):(p(),h("span",te,d(i(m).formatUSDPrice(b.totalPrice)||"USD price unavailable"),1))])])])])])]),t("div",ee,[f(i(L),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:u},{default:w(()=>[...o[5]||(o[5]=[I(" Close ",-1)])]),_:1}),f(i(L),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:D},{default:w(()=>[...o[6]||(o[6]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),I(" Copy ",-1)])]),_:1}),f(i(L),{class:"hidden flex-1",onClick:C},{default:w(()=>[...o[7]||(o[7]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),I(" Print ",-1)])]),_:1})])])])):U("",!0)}}},se=P(oe,[["__scopeId","data-v-72957e9b"]]),ae={class:"mb-4 text-lg font-semibold text-gray-900 dark:text-white"},ne={class:"mb-6 text-gray-600 dark:text-gray-300"},re={class:"flex gap-3"},ie={__name:"ConfirmDialog",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:"Confirm Action"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},variant:{type:String,default:"default"}},emits:["close","confirm"],setup(b,{emit:c}){const a=c,k=()=>{a("confirm"),a("close")},m=()=>{a("close")};return(y,x)=>(p(),F(Y,{to:"body"},[b.isOpen?(p(),h("div",{key:0,class:"dialog-overlay fixed inset-0 z-50 flex items-center justify-center p-4",onClick:m},[x[1]||(x[1]=t("div",{class:"absolute inset-0 bg-black/20"},null,-1)),t("div",{class:"relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900",onClick:x[0]||(x[0]=j(()=>{},["stop"]))},[t("h3",ae,d(b.title),1),t("p",ne,d(b.message),1),t("div",re,[f(i(L),{variant:"outline",class:"btn-outline-enhanced flex-1 cursor-pointer",onClick:m},{default:w(()=>[I(d(b.cancelText),1)]),_:1}),f(i(L),{class:"flex-1 cursor-pointer",style:{color:"white","background-color":"#4a3429"},onClick:k},{default:w(()=>[I(d(b.confirmText),1)]),_:1})])])])):U("",!0)]))}},le=P(ie,[["__scopeId","data-v-7d35bdfb"]]),ce={class:"cart-page-container"},de={class:"mb-8 flex items-center justify-between"},ue={key:0},pe={key:0,class:"cart-loading-state"},me={key:1,class:"cart-main-container"},ge={key:2,class:"empty-cart-state"},he={__name:"cart",setup(b){const c=B(),a=M(!0),{wholesalerKey:k,navigateWithWholesaler:m,buildPath:y}=Z();K(()=>c.items,r=>{console.warn("🛒 购物车页面商品更新:",r)},{deep:!0});const{trackViewCart:x}=N(),D=M(!1),C=M(!1),u=r=>{c.removeFromCart(r)},n=r=>{c.increaseQuantity(r)},o=r=>{c.decreaseQuantity(r)},l=(r,s)=>{const v=Number.parseInt(s)||1;c.updateQuantity(r,v)},g=()=>{},A=()=>{m("/products")},S=()=>{C.value=!0},e=()=>{c.clearCart()};G(()=>{if(console.warn("🛒 购物车页面初始化，商品数量:",c.items.length),setTimeout(()=>{a.value=!1,console.warn("🛒 购物车加载完成，商品数量:",c.items.length)},100),c.items.length>0){const r=c.items.map(s=>({item_id:s.bag.id,item_name:`${s.bag.id} Handbag`,item_category:"Handbag",price:s.bag.price,quantity:s.quantity}));x(r,c.totalPrice)}});const _=T(()=>c.totalItems),$=T(()=>c.totalPrice+_.value);return V({title:"Wish List - Fashionable Handbags",meta:[{name:"description",content:"View your wish list and manage favorite items."}]}),(r,s)=>{const v=z,W=E;return p(),h("div",ce,[t("div",de,[s[3]||(s[3]=t("div",null,[t("h1",{class:"text-foreground mb-2 text-3xl font-bold"},"Wish List"),t("p",{class:"text-muted-foreground"},"Manage your favorite items")],-1)),f(v,null,{default:w(()=>[i(c).items.length>0?(p(),h("div",ue,[f(i(L),{variant:"outline",size:"sm",onClick:S,class:"text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:bg-destructive/20 dark:hover:text-destructive cursor-pointer"},{default:w(()=>[...s[2]||(s[2]=[t("svg",{class:"mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),I(" Clear Wish List ",-1)])]),_:1})])):U("",!0)]),_:1})]),f(v,null,{fallback:w(()=>[...s[10]||(s[10]=[t("div",{class:"cart-loading-state"},[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})]),t("p",{class:"cart-loading-text"},"Loading your wish list...")],-1)])]),default:w(()=>[i(a)?(p(),h("div",pe,[...s[4]||(s[4]=[t("div",{class:"cart-loading-spinner"},[t("div",{class:"loading-spinner"})],-1),t("p",{class:"cart-loading-text"},"Loading your wish list...",-1)])])):i(c).items.length>0?(p(),h("div",me,[f(yt,{items:i(c).items,onRemoveItem:u,onIncreaseQuantity:n,onDecreaseQuantity:o,onUpdateQuantity:l},null,8,["items"]),f(Wt,{"total-items":i(c).totalItems,"total-price":i(c).totalPrice,"shipping-cost":i(_),"total-with-shipping":i($),"wholesaler-key":i(k),onSendToWholesaler:g,onContinueShopping:A},null,8,["total-items","total-price","shipping-cost","total-with-shipping","wholesaler-key"])])):(p(),h("div",ge,[s[6]||(s[6]=t("div",{class:"empty-cart-icon"},[t("svg",{class:"empty-wishlist-icon text-muted-foreground h-20 w-20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})])],-1)),s[7]||(s[7]=t("h2",{class:"empty-cart-title"},"Your wish list is empty",-1)),s[8]||(s[8]=t("p",{class:"empty-cart-description"}," You haven't added any items to your wish list yet ",-1)),s[9]||(s[9]=t("p",{class:"empty-cart-message"}," 🌟 Our handbag styles are very popular worldwide! Welcome to browse and experience our premium quality products. ",-1)),f(W,{to:i(y)("/products")},{default:w(()=>[f(i(L),{size:"lg",class:"browse-button",style:{color:"white",cursor:"pointer","background-color":"#4a3429"}},{default:w(()=>[...s[5]||(s[5]=[I(" Browse More Products ",-1)])]),_:1})]),_:1},8,["to"])]))]),_:1}),f(se,{"is-open":i(D),"cart-items":i(c).items,"total-price":i($),"shipping-cost":i(_),onClose:s[0]||(s[0]=q=>D.value=!1)},null,8,["is-open","cart-items","total-price","shipping-cost"]),f(le,{"is-open":i(C),title:"Clear Wish List",message:"Are you sure you want to remove all items from your wish list? This action cannot be undone.","confirm-text":"Clear Wish List","cancel-text":"Cancel",variant:"danger",onClose:s[1]||(s[1]=q=>C.value=!1),onConfirm:e},null,8,["is-open"])])}}},Le=P(he,[["__scopeId","data-v-29e252bf"]]);export{Le as default};
