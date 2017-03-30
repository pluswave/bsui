webpackJsonp([34],{1178:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),r=n.n(c),l=n(1243),s=n(178),u=n.n(s),p=n(391),d=n(25),m=n.n(d),h=n(19),b=n.n(h),f=n(38),g=n(37),_=n(134),y=n(260),v=n(33),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=new y.a,T=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),E(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.onRemove;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.index),r.a.createElement("td",null,t.get("id")),r.a.createElement("td",null,r.a.createElement(_.a,{account:t.get("id")})),n?r.a.createElement("td",null,r.a.createElement("button",{onClick:n.bind(this,t.get("id")),className:"button outline"},"Remove")):null)}}]),t}(r.a.Component);T.propTypes={account:f.a.ChainAccount.isRequired},T.defaultProps={tempComponent:"tr"},T=n.i(g.a)(T);var k=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),E(t,[{key:"_onRemove",value:function(e,t,n){if(t){var a=this.props.getCurrentState(t),i=w.new_transaction();i.add_type_operation("account_whitelist",{fee:{amount:0,asset_id:"1.3.0"},authorizing_account:this.props.account.get("id"),account_to_list:t,new_listing:a-u.a.account_listing[e]}),v.a.process_transaction(i,null,!0)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.removeButton,a=t.white,i=t.list,o=i.map(function(t,i){return r.a.createElement(T,{key:t,onRemove:n?e._onRemove.bind(e,a?"white_listed":"black_listed"):null,account:t,index:i+1})}).toArray(),c=!0;return o.length||(c=!1,o.push(r.a.createElement("tr",{key:"empty"},r.a.createElement("td",{style:{padding:"1rem 0"},colSpan:n?4:3},r.a.createElement(b.a,{content:this.props.emptyText,account:this.props.account.get("name")}))))),r.a.createElement("table",{className:"table compact"},c?r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,r.a.createElement(b.a,{content:"account.id"})),r.a.createElement("th",null,r.a.createElement(b.a,{content:"account.name"})),n?r.a.createElement("th",null):null)):null,r.a.createElement("tbody",null,o))}}]),t}(r.a.Component),C=function(e){function t(){a(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={accountName:"",accountToList:null},e}return o(t,e),E(t,[{key:"_getCurrentState",value:function(e){var t=this.props.account,n=t.get("whitelisted_accounts")||m.a.List(),a=t.get("blacklisted_accounts")||m.a.List(),i=u.a.account_listing.no_listing;return n.includes(e)&&(i+=u.a.account_listing.white_listed),a.includes(e)&&(i+=u.a.account_listing.black_listed),i}},{key:"_onAdd",value:function(e,t){var n=this.state.accountToList,a=this.props.account,i=this._getCurrentState(n);if(n){var o=w.new_transaction();o.add_type_operation("account_whitelist",{fee:{amount:0,asset_id:"1.3.0"},authorizing_account:a.get("id"),account_to_list:n,new_listing:i+u.a.account_listing[e]}),v.a.process_transaction(o,null,!0)}}},{key:"_onAccountFound",value:function(e){console.log("accountFound:",e),this.setState({accountName:e?e.get("name"):null,accountToList:e?e.get("id"):null})}},{key:"_onAccountChanged",value:function(e){console.log("account changed:",e),this.setState({accountName:e,accountToList:null})}},{key:"render",value:function(){var e=this.props.account,t=this.state.accountName;return r.a.createElement("div",{className:"grid-content"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement(l.a,{tabsClass:"bordered-header no-padding",setting:"whitelistTab",contentClass:"grid-content shrink small-vertical medium-horizontal no-padding"},r.a.createElement(l.b,{title:"account.whitelist.title"},r.a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},r.a.createElement("div",null,r.a.createElement(k,{emptyText:"account.whitelist.empty",account:e,getCurrentState:this._getCurrentState.bind(this),list:e.get("whitelisted_accounts")||m.a.List(),removeButton:!0,white:!0})),e.get("whitelisted_accounts")?null:r.a.createElement("p",{className:"has-error"},"Please note, whitelisting is not working yet due to unresolved backend issue."),r.a.createElement("div",{style:{padding:"2rem 0"}},r.a.createElement(p.a,{label:"account.whitelist.add",accountName:t,onAccountChanged:this._onAccountFound.bind(this),onChange:this._onAccountChanged.bind(this),account:t,tabIndex:2,onAction:this._onAdd.bind(this,"white_listed"),action_label:"account.perm.confirm_add",white:!1})))),r.a.createElement(l.b,{title:"account.whitelist.black"},r.a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},r.a.createElement("div",null,r.a.createElement(k,{emptyText:"account.whitelist.empty_black",account:e,getCurrentState:this._getCurrentState.bind(this),list:e.get("blacklisted_accounts"),removeButton:!0})),r.a.createElement("div",{style:{padding:"2rem 0"}},r.a.createElement(p.a,{label:"account.whitelist.add_black",accountName:t,onAccountChanged:this._onAccountFound.bind(this),onChange:this._onAccountChanged.bind(this),account:t,tabIndex:2,onAction:this._onAdd.bind(this,"black_listed"),action_label:"account.perm.confirm_add"})))),r.a.createElement(l.b,{title:"account.whitelist.white_by"},r.a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},r.a.createElement("div",null,r.a.createElement(k,{emptyText:"account.whitelist.empty_white_by",account:e,list:e.get("whitelisting_accounts")})))),r.a.createElement(l.b,{title:"account.whitelist.black_by"},r.a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},r.a.createElement("div",null,r.a.createElement(k,{emptyText:"account.whitelist.empty_black_by",account:e,list:e.get("blacklisting_accounts")})))))))}}]),t}(r.a.Component);t.default=C},1243:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(1),l=n.n(r),s=n(19),u=n.n(s),p=n(47),d=n.n(p),m=n(63),h=(n.n(m),n(48)),b=n(40);n.d(t,"a",function(){return _}),n.d(t,"b",function(){return g});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,i=e.title,o=d()({"is-active":t});return l.a.createElement("li",{className:o,onClick:a.bind(this,n)},l.a.createElement("a",null,i.indexOf(".")>0?l.a.createElement(u.a,{content:i}):i))}}]),t}(l.a.Component);g.propTypes={title:r.PropTypes.string.isRequired,changeTab:r.PropTypes.func,isActive:r.PropTypes.bool.isRequired,index:r.PropTypes.number.isRequired},g.defaultProps={isActive:!1,index:0};var _=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab},n}return c(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"_changeTab",value:function(e){this.props.setting&&h.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,i=t.tabsClass,o=t.style,c=null,r=[],s=l.a.Children.map(n,function(t,n){if(!t)return null;var a=n===e.state.activeTab;return a&&(c=t.props.children),l.a.cloneElement(t,{isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&r.push(e.props.index),null!==e});return c||(c=s[0].props.children),l.a.createElement("div",{className:this.props.className},l.a.createElement("div",{className:"service-selector"},l.a.createElement("ul",{style:o,className:d()("button-group segmented no-margin",i)},s)),l.a.createElement("div",{className:a},c))}}]),t}(l.a.Component);_.propTypes={setting:r.PropTypes.string,defaultActiveTab:r.PropTypes.number},_.defaultProps={active:0,defaultActiveTab:0},_=n.i(m.connect)(_,{listenTo:function(){return[b.a]},getProps:function(){return{viewSettings:b.a.getState().viewSettings}}})}});
//# sourceMappingURL=34.js.map