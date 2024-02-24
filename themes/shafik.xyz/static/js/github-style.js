const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthsFull=["January","February","March","April","May","June","July","August","September","October","November","December"],now=new Date;let contributions;function switchYear(t){let e,l;if(t!==now.getFullYear().toString()){let a=new Date(Number(t),0,1,0,0,0,0);e=new Date(a.getFullYear(),0,1),l=new Date(a.getFullYear(),11,31)}else l=now,e=new Date(l.getTime()-314496e5-864e5*l.getDay());e.setHours(0,0,0,0),l.setHours(23,59,59,999);let s=[],$=[];for(let n of contributions)if(n.date>=e&&n.date<=l){s.push(n);let o=n.date.getFullYear().toString()+"-"+n.date.getMonth().toString();$.includes(o)||$.push(o)}for(let r of(s.sort((t,e)=>e-t),document.querySelector("#posts-activity").innerHTML="",$)){let i=document.createElement("div"),_=r.split("-");i.innerHTML=monthly(_[0],Number(_[1]),s),document.querySelector("#posts-activity").appendChild(i)}graph(t,s,e,l);let c=document.querySelectorAll(".js-year-link");for(let d of c)d.innerText===t?d.classList.add("selected"):d.classList.remove("selected")}function monthly(t,e,l){let a=l.filter(l=>l.date.getFullYear().toString()===t&&l.date.getMonth()===e),s="";for(let $ of a)s+=`<li class="ml-0 py-1 d-flex">
    <div
      class="col-8 css-truncate css-truncate-target lh-condensed width-fit flex-auto min-width-0">
      <a href="${$.link}">${$.title}</a>
    </div>
    <time  title="This post was made on ${months[$.date.getMonth()]} ${$.date.getDate()}"
      class="col-2 text-right f6 text-gray-light pt-1">
      ${months[$.date.getMonth()]} ${$.date.getDate()}
    </time>
  </li>`;return`
  <div class="contribution-activity-listing float-left col-12 col-lg-10">
    <div class="width-full pb-4">
      <h3 class="h6 pr-2 py-1 border-bottom mb-3" style="height: 14px;">
        <span class="color-bg-canvas pl-2 pr-3">${monthsFull[e]} <span
            class="text-gray">${a.length>0?a[0].date.getFullYear():t}</span></span>
      </h3>

      <div class="TimelineItem ">
        <div class="TimelineItem-badge ">
          <svg class="octicon octicon-repo-push" viewBox="0 0 16 16" width="16" height="16">
            <path fill-rule="evenodd"
              d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z">
            </path>
          </svg>
        </div>
        <div class="TimelineItem-body ">
          <details class="Details-element details-reset" open>
            <summary role="button" class="btn-link f4 muted-link no-underline lh-condensed width-full">
              <span class="color-text-primary ws-normal text-left">
                Created ${a.length} post${a.length>1?"s":""}
              </span>
              <span class="d-inline-block float-right color-icon-secondary">
                <span class="Details-content--open float-right">
                  <svg class="octicon octicon-fold" viewBox="0 0 16 16"  width="16" height="16">
                    <path fill-rule="evenodd"
                      d="M10.896 2H8.75V.75a.75.75 0 00-1.5 0V2H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 2zM8.75 15.25a.75.75 0 01-1.5 0V14H5.104a.25.25 0 01-.177-.427l2.896-2.896a.25.25 0 01.354 0l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25zm-6.5-6.5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z">
                    </path>
                  </svg></span>
                <span class="Details-content--closed float-right"><svg class="octicon octicon-unfold"
                    viewBox="0 0 16 16"  width="16" height="16">
                    <path fill-rule="evenodd"
                      d="M8.177.677l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25a.75.75 0 01-1.5 0V4H5.104a.25.25 0 01-.177-.427L7.823.677a.25.25 0 01.354 0zM7.25 10.75a.75.75 0 011.5 0V12h2.146a.25.25 0 01.177.427l-2.896 2.896a.25.25 0 01-.354 0l-2.896-2.896A.25.25 0 015.104 12H7.25v-1.25zm-5-2a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z">
                    </path>
                  </svg>
                </span>
              </span>
            </summary>
            <div>
              <ul class="list-style-none mt-1">
                ${s}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>`}function yearList(){let t=[];for(let e of contributions){let l=e.date.getFullYear();t.includes(l)||t.push(l)}t.sort((t,e)=>e-t);for(let a=0;a<t.length;a++){let s=t[a],$=document.createElement("li");$.innerHTML=`<li><span class="js-year-link filter-item px-3 mb-2 py-2" onclick="switchYear('${s}')">${s}</span></li>`,document.querySelector("#year-list").appendChild($)}}function graph(t,e,l,a){let s=1===e.length?"post":"posts";t===now.getFullYear().toString()?document.querySelector("#posts-count").innerText=`${e.length}  ${s} in the last year`:document.querySelector("#posts-count").innerText=`${e.length}  ${s} in ${t}`;let $="",n={};for(let o of e){let r=`${o.date.getFullYear()}-${(o.date.getMonth()+1).toString().padStart(2,"0")}-${o.date.getDate().toString().padStart(2,"0")}`;void 0===n[r]?n[r]=1:n[r]++}let i=[],_=-1,c=l.getDay();for(let d=0;d<53;d++){$+=`<g transform="translate(${16*d}, 0)">`;for(let h=0;h<7;h++){let g=new Date(l.getTime()+(7*d+h-c)*864e5),u=`${g.getFullYear()}-${(g.getMonth()+1).toString().padStart(2,"0")}-${g.getDate().toString().padStart(2,"0")}`;if(g<l||g>a)continue;0===h&&d<=51&&_!==g.getMonth()&&(i.push(d),_=g.getMonth());let p;p=void 0===n[u]?0:n[u];let y;switch(p){case 0:y="var(--color-calendar-graph-day-bg)";break;case 1:y="var(--color-calendar-graph-day-L1-bg)";break;case 2:y="var(--color-calendar-graph-day-L2-bg)";break;case 3:y="var(--color-calendar-graph-day-L3-bg)";break;default:y="var(--color-calendar-graph-day-L4-bg)"}$+=`<rect class="day" width="11" height="11" x="${16-d}" y="${15*h}"
      fill="${y}" onmouseover="svgTip(this, ${p}, '${u}')" onmouseleave="hideTip()"></rect>`}$+="</g>"}i[1]-i[0]<2&&(i[0]=-1);for(let m=0;m<i.length;m++){let f=i[m];-1!==f&&($+=`<text x="${15*f+16}" y="-9"
    class="month">${months[(m+l.getMonth())%12]}</text>`)}$+=`
<text text-anchor="start" class="wday" dx="-10" dy="8"
style="display: none;">Sun</text>
<text text-anchor="start" class="wday" dx="-10" dy="25">Mon</text>
<text text-anchor="start" class="wday" dx="-10" dy="32"
style="display: none;">Tue</text>
<text text-anchor="start" class="wday" dx="-10" dy="56">Wed</text>
<text text-anchor="start" class="wday" dx="-10" dy="57"
style="display: none;">Thu</text>
<text text-anchor="start" class="wday" dx="-10" dy="85">Fri</text>
<text text-anchor="start" class="wday" dx="-10" dy="81"
style="display: none;">Sat</text>
`,document.querySelector("#graph-svg").innerHTML=$}(()=>{setRelativeTime();let t=document.querySelector("#contributions");if(!t)return;contributions=JSON.parse(t.getAttribute("data"));let e=0;for(let l of contributions)l.publishDate=decodeURI(l.publishDate).replace(" ","T"),l.date=new Date(l.publishDate),l.date.getFullYear()>e&&(e=l.date.getFullYear()),l.title=decodeURI(l.title);yearList(),switchYear(e.toString())})();let svgElem=document.createElement("div");function svgTip(t,e,l){if(window.screen.width<768)return;let a=getCoords(t),s=new Date(l),$=`${months[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()}`;e?svgElem.innerHTML=`<strong>${e} posts</strong> on ${$}`:svgElem.innerHTML=`<strong>No posts</strong> on ${$}`,svgElem.style.display="block";let n=svgElem.getBoundingClientRect();svgElem.style.top=`${a.top-50}px`,svgElem.style.left=`${a.left-n.width/2+a.width/2}px`}function getCoords(t){let e=t.getBoundingClientRect(),l=document.body,a=document.documentElement,s=window.pageYOffset||a.scrollTop||l.scrollTop,$=window.pageXOffset||a.scrollLeft||l.scrollLeft,n=a.clientTop||l.clientTop||0,o=a.clientLeft||l.clientLeft||0,r=e.top+s-n,i=e.left+$-o;return{top:r,left:i,width:e.width,height:e.height}}function relativeTime(t){let e=new Date,l=new Date(t),a=Math.floor((e.getTime()-l.getTime())/1e3),s=Math.floor(a),$=Math.floor(a/60),n=Math.floor(a/60/60),o=Math.floor(a/60/60/24);return s<60?`${s} seconds ago`:$<60?`${$} minutes ago`:n<24?`${n} hours ago`:o<30?`${o} days ago`:l.getFullYear()===e.getFullYear()?`${l.getDate()} ${months[l.getMonth()]}`:`${l.getDate()} ${months[l.getMonth()]} ${l.getFullYear()}`}function setRelativeTime(){document.querySelectorAll("relative-time").forEach(t=>{let e=t.getAttribute("datetime");t.innerHTML=relativeTime(e),t.setAttribute("title",new Date(e).toLocaleString())})}svgElem.style.cssText="pointer-events: none; display: none;",svgElem.classList.add(...["svg-tip","svg-tip-one-line"]),document.body.appendChild(svgElem);