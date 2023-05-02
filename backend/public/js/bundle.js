(()=>{"use strict";var e=["second","minute","hour","day","week","month","year"],t=["秒","分钟","小时","天","周","个月","年"],n={},o=function(e,t){n[e]=t},a=[60,60,24,7,365/7/12,12];function r(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}o("en_US",(function(t,n){if(0===n)return["just now","right now"];var o=e[Math.floor(n/2)];return t>1&&(o+="s"),[t+" "+o+" ago","in "+t+" "+o]})),o("zh_CN",(function(e,n){if(0===n)return["刚刚","片刻后"];var o=t[~~(n/2)];return[e+" "+o+"前",e+" "+o+"后"]}));const c=new class{constructor(){this.URI="http://localhost:3000/api/books"}async getBooks(){return(await fetch(this.URI)).json()}async postBook(e){const t=await fetch(this.URI,{method:"POST",body:e}),n=await t.json();console.log(n)}async deleteBook(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"}),n=await t.json();console.log(n)}},s=class{async renderBooks(){const e=await c.getBooks(),t=document.getElementById("books-cards");t.innerHTML="",e.forEach((e=>{const o=document.createElement("div");var c,s,d;o.className="",o.innerHTML=`\n                <div class="card m-2">\n                    <div class="row no-gutters">\n                        <div class="col-md-5 text-center">\n                            <img src="http://localhost:3000${e.imagePath}" alt="" class="img-fluid m-2" />\n                        </div>\n                        <div class="col-md-7">\n                            <div class="card-block m-3 text-center">\n                                <h4 class="card-title">Marca: ${e.marca}</h4>\n                                <p class="card-text">Producto: ${e.product}</p>\n                                <p class="card-text">Precio: $${e.price}</p>\n                                <p class="card-text">Item: ${e.item}</p>\n                                <a href="#" class="btn btn-danger delete" _id="${e._id}">Borrar</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-footer">\n                        ${c=e.created_at,function(e,t){for(var n=e<0?1:0,o=e=Math.abs(e),r=0;e>=a[r]&&r<a.length;r++)e/=a[r];return(e=Math.floor(e))>(0==(r*=2)?9:1)&&(r+=1),t(e,r,o)[n].replace("%s",e.toString())}(function(e,t){return(+(t?r(t):new Date)-+r(e))/1e3}(c,d&&d.relativeDate),function(e){return n[e]||n.en_US}(s))}\n                    </div>\n                </div>\n            `,t.appendChild(o)}))}async addANewBook(e){await c.postBook(e),this.clearBookForm(),this.renderBooks()}clearBookForm(){document.getElementById("book-form").reset()}renderMessage(e,t,n){const o=document.createElement("div");o.className=`alert alert-${t} message`,o.appendChild(document.createTextNode(e));const a=document.querySelector(".col-md-5"),r=document.querySelector("#book-form");a.insertBefore(o,r),setTimeout((()=>{document.querySelector(".message").remove()}),n)}async deleteBook(e){await c.deleteBook(e),this.renderBooks()}};document.addEventListener("DOMContentLoaded",(()=>{(new s).renderBooks()})),document.getElementById("book-form").addEventListener("submit",(e=>{const t=document.getElementById("marca").value,n=document.getElementById("product").value,o=document.getElementById("price").value,a=document.getElementById("item").value,r=document.getElementById("image").files,c=new FormData;c.append("image",r[0]),c.append("marca",t),c.append("product",n),c.append("price",o),c.append("item",a);const d=new s;d.addANewBook(c),d.renderMessage("Producto Agregado","success",2e3),e.preventDefault()})),document.getElementById("books-cards").addEventListener("click",(e=>{if(e.target.classList.contains("delete")){const t=new s;t.deleteBook(e.target.getAttribute("_id")),t.renderMessage("Producto Removido","danger",2e3)}e.preventDefault()}))})();
//# sourceMappingURL=bundle.js.map