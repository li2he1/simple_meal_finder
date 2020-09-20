(this.webpackJsonpsimple_meal_finder=this.webpackJsonpsimple_meal_finder||[]).push([[0],{38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(43),a(12)),i=a(1),s=a(11),m=(a(48),a(5)),u=a(6),p=a(7),h=a(8),f=(a(49),a(18)),d=a.n(f),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.searchMeal(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.fetchMeals(e.props.text)},e.onClick=function(){e.props.randomMeals()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Meal Finder"),r.a.createElement("div",{className:"flex"},r.a.createElement("form",{className:"flex",id:"submit",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",id:"search",placeholder:"Search for meals or keywords",onChange:this.onChange}),r.a.createElement("button",{className:"search-btn",type:"submit"},r.a.createElement("i",{className:"fas fa-search"},"Search"))),r.a.createElement("button",{className:"random-btn",id:"random",onClick:this.onClick},r.a.createElement("i",{className:"fas fa-random"},"Random")))))}}]),a}(n.Component),b=Object(s.b)((function(e){return{text:e.meals.text}}),{searchMeal:function(e){return function(t){t({type:"SEARCH_MEAL",payload:e})}},fetchMeals:function(e){return function(t){d.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){return t({type:"FETCH_MEALS",payload:e.data.meals})})).catch((function(e){console.log(e)}))}},randomMeals:function(){return function(e){d.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(t){return e({type:"FETCH_MEALS",payload:t.data.meals})})).catch((function(e){console.log(e)}))}}})(v),E=(a(67),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.meal;return r.a.createElement("div",{className:"meal"},r.a.createElement(o.b,{to:{pathname:"/simple_meal_finder/recipe/".concat(e.idMeal),state:{recipe:e.idMeal}}},r.a.createElement("img",{src:e.strMealThumb,alt:e.strMeal}),r.a.createElement("div",{className:"meal-info","data-mealid":e.idMeal},r.a.createElement("h3",null,e.strMeal))))}}]),a}(n.Component)),j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.meals,t="";return null===e?r.a.createElement("p",null,"There are no search results. Try again!"):(t=e.length>0?e.map((function(e,t){return r.a.createElement(E,{key:t,meal:e})})):null,r.a.createElement("div",{className:"row"},t))}}]),a}(n.Component),y=Object(s.b)((function(e){return{meals:e.meals.meals}}))(j),O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var t=localStorage.getItem("recipes"),a=JSON.parse(t);e.setState({recipes:a})},e.componentDidUpdate=function(){var t=JSON.stringify(e.state.recipes);localStorage.setItem("recipes",t)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,null),r.a.createElement(y,null))}}]),a}(n.Component),g=a(9),w=a(35),_=a(36),M=a(23),S={text:"",meals:[],meal:[]},N=Object(g.combineReducers)({meals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MEAL":return Object(M.a)({},e,{text:t.payload});case"FETCH_MEALS":return Object(M.a)({},e,{meals:t.payload});default:return e}}}),k=[w.a],C=Object(g.createStore)(N,{},Object(_.composeWithDevTools)(g.applyMiddleware.apply(void 0,k)));var x=function(){return r.a.createElement(s.a,{store:C},r.a.createElement(O,null))},A=a(22),R=a.n(A),T=a(37),H=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeRecipe:[]},e.componentDidMount=Object(T.a)(R.a.mark((function t(){var a,n,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.location.state.recipe,t.next=3,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(a));case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.setState({activeRecipe:r.meals[0]}),console.log(e.state.activeRecipe);case 9:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.activeRecipe;return r.a.createElement("div",{className:"container"},0!==this.state.activeRecipe.length&&r.a.createElement("div",{className:"active-recipe"},r.a.createElement("img",{className:"active-recipe__img",src:e.strMealThumb,alt:e.strMeal}),r.a.createElement("h3",{className:"active-recipe__title"},e.strMeal),r.a.createElement("h4",{className:"active-recipe__instructions"},"Instructions: ",r.a.createElement("span",null,e.strInstructions)),r.a.createElement("p",{className:"active-recipe__website"},"Website:",r.a.createElement("span",null,r.a.createElement("a",{href:e.strSource},e.strSource))),r.a.createElement("button",{className:"active-recipe__button"},r.a.createElement(o.b,{to:"/simple_meal_finder/"},"Go Home"))))}}]),a}(r.a.Component),D=function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/simple_meal_finder/",component:x,exact:!0}),r.a.createElement(i.a,{path:"/simple_meal_finder/recipe/:id",component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.028f7aa5.chunk.js.map