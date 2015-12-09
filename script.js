document.addEventListener('DOMContentLoaded', function () {

  var QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = pair[1];
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]], pair[1] ];
        query_string[pair[0]] = arr;
      } else {
        query_string[pair[0]].push(pair[1]);
      }
    }
    return query_string;
  } ();


  if(QueryString.aff){
    var aff = QueryString.aff;
    Cookies.set('aff', aff, { expires: 45 });
  }
  if(QueryString.sub){
    var sub = QueryString.sub;
    Cookies.set('sub', sub, { expires: 45 });
  }
  if(QueryString.trans){
    var trans = QueryString.trans;
    Cookies.set('trans', trans, { expires: 45 });
  }
  if(QueryString.cid){
    var cid = QueryString.cid;
    Cookies.set('cid', cid, { expires: 45 });
  }
  if(QueryString.c1){
    var c1 = QueryString.c1;
    Cookies.set('c1', c1, { expires: 45 });
  }
  if(QueryString.c2){
    var c2 = QueryString.c2;
    Cookies.set('c2', c2, { expires: 45 });
  }
  if(QueryString.c3){
    var c3 = QueryString.c3;
    Cookies.set('c3', c3, { expires: 45 });
  }

  var els = document.getElementsByClassName('ctabuynow');

  [].forEach.call(els, function (elem) {
    var checkout_link = elem.getAttribute('href');

    if(Cookies.get('aff') || Cookies.get('sub') || Cookies.get('trans') || Cookies.get('cid') || Cookies.get('c1') || Cookies.get('c2') || Cookies.get('c3')){
      checkout_link += '?';
      if(Cookies.get('aff')){
        checkout_link += 'aff=' + Cookies.get('aff');
      } else {
        checkout_link += 'aff=';
      }
      if(Cookies.get('sub')){
        checkout_link += '&sub=' + Cookies.get('sub');
      }
      if(Cookies.get('trans')){
        checkout_link += '&trans=' + Cookies.get('trans');
      }
      if(Cookies.get('cid')){
        checkout_link += '&cid=' + Cookies.get('cid');
      }
      if(Cookies.get('c1')){
        checkout_link += '&c1=' + Cookies.get('c1');
      }
      if(Cookies.get('c2')){
        checkout_link += '&c2=' + Cookies.get('c2');
      }
      if(Cookies.get('c3')){
        checkout_link += '&c3=' + Cookies.get('c3');
      }
    }

    elem.setAttribute('href',checkout_link);
  });

});