var _0x1ff316=_0x22c3;(function(_0x148261,_0x292a07){var _0x4e2ba1=_0x22c3,_0x283c78=_0x148261();while(!![]){try{var _0x77ec39=parseInt(_0x4e2ba1(0x160))/0x1*(-parseInt(_0x4e2ba1(0x170))/0x2)+-parseInt(_0x4e2ba1(0x12c))/0x3+parseInt(_0x4e2ba1(0x13b))/0x4*(-parseInt(_0x4e2ba1(0x125))/0x5)+parseInt(_0x4e2ba1(0x15c))/0x6*(parseInt(_0x4e2ba1(0x17d))/0x7)+-parseInt(_0x4e2ba1(0x10f))/0x8*(parseInt(_0x4e2ba1(0x14f))/0x9)+parseInt(_0x4e2ba1(0x156))/0xa*(parseInt(_0x4e2ba1(0x12a))/0xb)+parseInt(_0x4e2ba1(0x16d))/0xc*(parseInt(_0x4e2ba1(0x140))/0xd);if(_0x77ec39===_0x292a07)break;else _0x283c78['push'](_0x283c78['shift']());}catch(_0x556a17){_0x283c78['push'](_0x283c78['shift']());}}}(_0xc694,0x43cdb));let linkHomePage=_0x1ff316(0x175),data1=[],user1='',end_time1='',uFullName='',typeUserDetail='',classOfUser='',checkRow1=![],dataAll=[],tabPrevious=null,urlCurrent=window[_0x1ff316(0x171)][_0x1ff316(0x10c)];window['onload']=init;function init(){var _0x44d32f=_0x1ff316;checkCookieHome(),checkCookie(),renderNameUsr(),renderLuaChonCongCu(),dataAnalysis(),logOut(),urlCurrent[_0x44d32f(0x132)]('IC3GS6LEVEL1.html')!=-0x1&&(urlCurrent=urlCurrent[_0x44d32f(0x17c)](0x0,urlCurrent['search'](_0x44d32f(0x14e))-0x1));}function checkCookieHome(){var _0x471ef6=_0x1ff316;let _0x3517ba=_0x471ef6(0x142),_0x2d2039=_0x471ef6(0x131)+_0x3517ba+_0x471ef6(0x14b),_0x427eec=getCookie(_0x471ef6(0x107)),_0x5b6b8d=getCookie(_0x471ef6(0x143)),_0x55ce01=getCookie(_0x471ef6(0x164)),_0xf2769b=getCookie(_0x471ef6(0x176)),_0x5f1de1=[];var _0x45574a=_0x471ef6(0x135),_0x4368ba='';_0x4368ba=_0x471ef6(0x122)+_0x427eec+_0x471ef6(0x17b)+_0x5b6b8d+_0x471ef6(0x161)+_0x55ce01+'\x22\x20AND\x20H\x20=\x20\x22'+_0xf2769b+'\x22';var _0x250570=encodeURIComponent(_0x4368ba),_0x2b63fe=_0x2d2039+_0x471ef6(0x169)+_0x45574a+_0x471ef6(0x165)+_0x250570;fetch(_0x2b63fe)[_0x471ef6(0x13f)](_0x35a279=>_0x35a279[_0x471ef6(0x141)]())[_0x471ef6(0x13f)](_0x3576b1=>{var _0x52bff5=_0x471ef6;const _0x373e0f=JSON[_0x52bff5(0x108)](_0x3576b1['substr'](0x2f)[_0x52bff5(0x129)](0x0,-0x2)),_0x7d8ba0=[];_0x373e0f[_0x52bff5(0x117)]['cols'][_0x52bff5(0x111)](_0x48991b=>{var _0x34cec6=_0x52bff5;_0x48991b[_0x34cec6(0x124)]&&_0x7d8ba0[_0x34cec6(0x159)](_0x48991b[_0x34cec6(0x124)][_0x34cec6(0x151)]()[_0x34cec6(0x178)](/\s/g,''));}),_0x373e0f[_0x52bff5(0x117)]['rows'][_0x52bff5(0x111)](_0x2078bc=>{var _0x20a80d=_0x52bff5;const _0x5cdee4={};_0x7d8ba0[_0x20a80d(0x111)]((_0x42d609,_0x1b332)=>{_0x5cdee4[_0x42d609]=_0x2078bc['c'][_0x1b332]!=null?_0x2078bc['c'][_0x1b332]['v']:'';}),_0x5f1de1[_0x20a80d(0x159)](_0x5cdee4);}),renderNameSchool(_0x5f1de1);return;});}function renderNameSchool(_0x2f9d86){var _0xf29d8e=_0x1ff316;_0x2f9d86[_0xf29d8e(0x146)]==0x0?(alert('Bạn\x20cần\x20chọn\x20lại\x20trường\x20mình\x20đang\x20học!'),window['location'][_0xf29d8e(0x10c)]=linkHomePage):document[_0xf29d8e(0x121)](_0xf29d8e(0x113))['innerHTML']=getCookie('NameSchool');}function renderNameUsr(){var _0x30c1f0=_0x1ff316,_0x51a06d=_0x30c1f0(0x14c)+getCookie('nameUsr');getCookie(_0x30c1f0(0x152))=='K3'&&(_0x51a06d=_0x51a06d+_0x30c1f0(0x115)+_0x30c1f0(0x179)+getCookie(_0x30c1f0(0x177))),document[_0x30c1f0(0x121)](_0x30c1f0(0x174))[_0x30c1f0(0x11a)]=_0x51a06d;}function dataAnalysis(){var _0x708a66=_0x1ff316,_0x4a9d28='';_0x4a9d28=_0x708a66(0x16c),(getCookie('typeUserDetail')=='QL3'||getCookie(_0x708a66(0x152))==_0x708a66(0x110))&&(_0x4a9d28=_0x4a9d28+'<div><button\x20class=\x22btn-data-analysis\x22\x20style=\x22margin-top:5px;\x22\x20onclick=\x22actionDataAnalysisStudent()\x22><b>Kết\x20Quả\x20Học\x20Sinh</b></button></div>'),document[_0x708a66(0x121)](_0x708a66(0x127))[_0x708a66(0x11a)]=_0x4a9d28;}function actionDataAnalysisStudent(){var _0x52b6e6=_0x1ff316,_0x2b6afa=urlCurrent+'/teacher';window[_0x52b6e6(0x10b)](_0x2b6afa,_0x52b6e6(0x13c));}function dataAnalysis(){var _0x59d713=_0x1ff316,_0x28c2d1='';_0x28c2d1=_0x59d713(0x16c),document['getElementById'](_0x59d713(0x127))[_0x59d713(0x11a)]=_0x28c2d1;}function actionDataAnalysis(){var _0x1db1ac=_0x1ff316,_0x335989=urlCurrent+_0x1db1ac(0x138);window[_0x1db1ac(0x10b)](_0x335989,_0x1db1ac(0x13c));}function logOut(){var _0x23a973=_0x1ff316,_0x46ae86='';_0x46ae86='<div><button\x20class=\x22btn-log-out\x22\x20onclick=\x22actionLogOut()\x22><b>Đăng\x20Xuất</b></button></div>',document[_0x23a973(0x121)](_0x23a973(0x15e))[_0x23a973(0x11a)]=_0x46ae86;}function actionLogOut(){var _0x2f5383=_0x1ff316;document[_0x2f5383(0x14a)]='usr=;\x20Path=/;\x20Expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT;',document['cookie']=_0x2f5383(0x144),document[_0x2f5383(0x14a)]=_0x2f5383(0x158),document['cookie']=_0x2f5383(0x16f),document[_0x2f5383(0x14a)]=_0x2f5383(0x16e),document[_0x2f5383(0x14a)]=_0x2f5383(0x137),window['location'][_0x2f5383(0x10c)]=linkHomePage;}function checkCookie(){var _0x229290=_0x1ff316;let _0x3766c2=getCookie('LS2'),_0x5c7861=_0x229290(0x131)+_0x3766c2+'/gviz/tq?',_0x3ff8cc=getCookie('usr');var _0x43c23f=_0x229290(0x153),_0x2c2ab5=_0x229290(0x12b)+_0x3ff8cc+'\x22',_0x5151c5=encodeURIComponent(_0x2c2ab5),_0x5540fb=_0x5c7861+_0x229290(0x169)+_0x43c23f+_0x229290(0x165)+_0x5151c5;fetch(_0x5540fb)[_0x229290(0x13f)](_0x1d4832=>_0x1d4832[_0x229290(0x141)]())[_0x229290(0x13f)](_0xca6ec6=>{var _0x620e98=_0x229290;const _0x354443=JSON['parse'](_0xca6ec6[_0x620e98(0x130)](0x2f)[_0x620e98(0x129)](0x0,-0x2)),_0x48b148=[];_0x354443[_0x620e98(0x117)]['cols'][_0x620e98(0x111)](_0x4c89c9=>{var _0x52eaaa=_0x620e98;_0x4c89c9['label']&&_0x48b148[_0x52eaaa(0x159)](_0x4c89c9[_0x52eaaa(0x124)][_0x52eaaa(0x151)]()['replace'](/\s/g,''));}),_0x354443[_0x620e98(0x117)][_0x620e98(0x109)][_0x620e98(0x111)](_0x31ef35=>{var _0x53601d=_0x620e98;const _0x29bb57={};_0x48b148['forEach']((_0x5baf83,_0x14197d)=>{_0x29bb57[_0x5baf83]=_0x31ef35['c'][_0x14197d]!=null?_0x31ef35['c'][_0x14197d]['v']:'';}),data1=Object[_0x53601d(0x10e)](_0x29bb57)[_0x53601d(0x17a)](_0x34eded=>[_0x34eded,_0x29bb57[_0x34eded]]),user1=data1[0x0][0x1][_0x53601d(0x13e)](),end_time1=data1[0x1][0x1]['toString'](),typeUserDetail=data1[0x2][0x1][_0x53601d(0x13e)](),classOfUser=data1[0x3][0x1][_0x53601d(0x13e)](),uFullName=data1[0x4][0x1][_0x53601d(0x13e)](),checkLogIn1(_0x3ff8cc),checkRow1=!![];}),checkRow1==![]&&checkLogIn1(_0x3ff8cc);});}function checkLogIn1(_0x584415){var _0x4d2018=_0x1ff316,_0x35051b=new Date();if(user1==_0x584415){if(_0x35051b[_0x4d2018(0x133)]()>Number(end_time1[_0x4d2018(0x129)](0x5,0x9)))backToLogInPage();else{if(_0x35051b[_0x4d2018(0x133)]()==Number(end_time1[_0x4d2018(0x129)](0x5,0x9))){var _0x9193d8=end_time1[_0x4d2018(0x129)](end_time1[_0x4d2018(0x157)](',')+0x1,end_time1['length']-0x1),_0x5bf07c=_0x9193d8[_0x4d2018(0x129)](0x0,_0x9193d8[_0x4d2018(0x157)](','));if(_0x35051b[_0x4d2018(0x163)]()>Number(_0x5bf07c))backToLogInPage();else{if(_0x35051b[_0x4d2018(0x163)]()==Number(_0x5bf07c)){var _0x55262b=_0x9193d8[_0x4d2018(0x129)](_0x9193d8[_0x4d2018(0x157)](',')+0x1,_0x9193d8[_0x4d2018(0x146)]);if(_0x35051b[_0x4d2018(0x154)]()>Number(_0x55262b))backToLogInPage();else{alert('Chúc\x20bạn\x20luyện\x20thi\x20hiệu\x20quả!');return;}}else{alert(_0x4d2018(0x16a));return;}}}else{alert(_0x4d2018(0x16a));return;}}}else backToLogInPage();}function backToLogInPage(){var _0x14bd16=_0x1ff316;alert(_0x14bd16(0x17f)),window['location'][_0x14bd16(0x10c)]=linkHomePage;}function _0x22c3(_0x25b6a5,_0x4626a2){var _0xc69435=_0xc694();return _0x22c3=function(_0x22c371,_0x50ecdc){_0x22c371=_0x22c371-0x107;var _0x337e49=_0xc69435[_0x22c371];return _0x337e49;},_0x22c3(_0x25b6a5,_0x4626a2);}function setCookie(_0x393407,_0x13e9af,_0x40f7ab){var _0x5d4cd5=_0x1ff316;const _0x2c315a=new Date();_0x2c315a[_0x5d4cd5(0x166)](_0x2c315a[_0x5d4cd5(0x126)]()+_0x40f7ab*0x3c*0x3c*0x3e8);let _0x276252=_0x5d4cd5(0x119)+_0x2c315a['toUTCString']();document[_0x5d4cd5(0x14a)]=_0x393407+'='+_0x13e9af+';'+_0x276252+_0x5d4cd5(0x15d);}function getCookie(_0x5eb570){var _0x17ca7b=_0x1ff316;let _0x331c7a=_0x5eb570+'=',_0x52127f=decodeURIComponent(document[_0x17ca7b(0x14a)]),_0x3cd903=_0x52127f[_0x17ca7b(0x11e)](';');for(let _0x153a3b=0x0;_0x153a3b<_0x3cd903[_0x17ca7b(0x146)];_0x153a3b++){let _0x42f6a1=_0x3cd903[_0x153a3b];while(_0x42f6a1[_0x17ca7b(0x120)](0x0)=='\x20'){_0x42f6a1=_0x42f6a1[_0x17ca7b(0x17c)](0x1);}if(_0x42f6a1[_0x17ca7b(0x157)](_0x331c7a)==0x0)return _0x42f6a1['substring'](_0x331c7a[_0x17ca7b(0x146)],_0x42f6a1['length']);}return'';}function renderLuaChonCongCu(){var _0x17f2e=_0x1ff316,_0x51818d='';_0x51818d=_0x17f2e(0x128)+_0x17f2e(0x172)+_0x17f2e(0x112),document['getElementById']('select-tool')[_0x17f2e(0x11a)]=_0x51818d;}function _0xc694(){var _0x1b197a=['</span></td>','&sheet=','Chúc\x20bạn\x20luyện\x20thi\x20hiệu\x20quả!',')\x22>','<div><button\x20class=\x22btn-data-analysis\x22\x20onclick=\x22actionDataAnalysis()\x22><b>Thống\x20Kê</b></button></div>','24wmuDbU','ID=;\x20Path=/;\x20Expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT;','classOfUser=;\x20Path=/;\x20Expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT;','3342FEqaLQ','location','<input\x20type=\x22radio\x22\x20id=\x22s2\x22\x20name=\x22se_tool\x22\x20value=\x22s2\x22>\x20<b><i>Thi\x20Thử</i></b><br/>','<th\x20class=\x22table-header-form-real-estate-CongVu\x22>Thi\x20Thử</th>','nameUsr','https://ic3gs6.github.io','LS3','classOfUser','replace','<span\x20style=\x22color:blue;\x22>Lớp:\x20</span>','map','\x22\x20AND\x20F\x20=\x20\x22','substring','7RuMTAj','nametodo','Bạn\x20cần\x20đăng\x20nhập\x20lại\x20để\x20tiếp\x20tục\x20luyện\x20thi!','<button\x20class=\x22button-google-form1\x22\x20type=\x22button\x22>','value','CodeSchool','parse','rows','Select\x20*','open','href','usr','keys','328hFTkAc','GV3','forEach','<div><button\x20class=\x22btn-select-tool\x22\x20onclick=\x22confirmRenderCongCu()\x22><b>OK</b></button></div>','name-school','<th\x20class=\x22table-header-form-real-estate-CongVu\x22>Bộ\x20Đề</th>','<br>','currenttime','table','title','expires=','innerHTML','se_tool','</a>','<button\x20class=\x22button-google-form\x22\x20type=\x22button\x22>','split','number','charAt','getElementById','Select\x20B,C,D,F,G\x20WHERE\x20B\x20=\x20\x22','CC2_LV1','label','61135FIIKRM','getTime','data_analysis','<input\x20type=\x22radio\x22\x20id=\x22s1\x22\x20name=\x22se_tool\x22\x20value=\x22s1\x22>\x20<b><i>Luyện\x20Tập</i></b>&emsp;&ensp;','slice','11UjjOZV','Select\x20A,\x20D,\x20G,\x20H,\x20I\x20WHERE\x20A\x20=\x20\x22','1160295mdVmTP','<table\x20class=\x22table-form-real-estate-CongVu\x22>','checked','<td\x20class=\x22table-data-form-real-estate-CongVu\x22>','substr','https://docs.google.com/spreadsheets/d/','search','getUTCFullYear','cols','School_Detail','</tr>','STime=;\x20Path=/;\x20Expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT;','/analysis','<th\x20class=\x22table-header-form-real-estate-CongVu\x22>STT</th>','</table>','108PFeMWF','_blank','<tr\x20','toString','then','4128709FxICZG','text','16so5Uyf5w-UMS9NVf-4VPkiS3wC8Nu36WQwVaugzxZ8','LS1','nameUsr=;\x20Path=/;\x20Expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT;','\x22\x20onclick=\x22goToLink(','length','</button>','<th\x20class=\x22table-header-form-real-estate-CongVu\x22>Luyện\x20Tập</th>','STime','cookie','/gviz/tq?','<span\x20style=\x22color:blue;\x22>Họ\x20và\x20tên:\x20</span>','<a\x20href=\x22#info','IC3GS6LEVEL1.html','24093RtfnKV','<span\x20style=\x22color:black;font-weight:bold;\x22>','toLowerCase','typeUserDetail','LogIn1','getUTCDate','<tr\x20class=\x22table-row-form-real-estate-CongVu\x22>','759370oAmwYu','indexOf','typeUserDetail=;\x20Path=/;\x20Expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT;','push','<td\x20class=\x22table-data-form-real-estate-CongVu\x22\x20style=\x22text-align:center;\x22>','main','2991144JEnxjg',';path=/','log_out','Bạn\x20hãy\x20chọn\x20\x22Luyện\x20Tập\x22\x20hoặc\x20\x22Thi\x20Thử\x22\x20nhé!','63xivYss','\x22\x20AND\x20G\x20=\x20\x22','</td>','getUTCMonth','LS2','&tq=','setTime','CC1_LV1'];_0xc694=function(){return _0x1b197a;};return _0xc694();}function confirmRenderCongCu(){var _0x2e6d72=_0x1ff316,_0x3b6586=document['getElementsByName'](_0x2e6d72(0x11b)),_0x1345df=![];for(i=0x0;i<_0x3b6586[_0x2e6d72(0x146)];i++){if(_0x3b6586[i][_0x2e6d72(0x12e)]){if(_0x3b6586[i][_0x2e6d72(0x181)]=='s1')renderCongCu(_0x2e6d72(0x167),0x1);else _0x3b6586[i][_0x2e6d72(0x181)]=='s2'&&renderCongCu(_0x2e6d72(0x123),0x2);_0x1345df=!![];}}_0x1345df==![]&&alert(_0x2e6d72(0x15f));}function renderCongCu(_0x36bfed,_0x137259){var _0xe0d04b=_0x1ff316;let _0x5aecd1=getCookie(_0xe0d04b(0x143)),_0x414dc7='https://docs.google.com/spreadsheets/d/'+_0x5aecd1+_0xe0d04b(0x14b);var _0x4fa95a=_0x36bfed,_0x2b4940=_0xe0d04b(0x10a),_0x1f4064=encodeURIComponent(_0x2b4940),_0x22b943=_0x414dc7+_0xe0d04b(0x169)+_0x4fa95a+_0xe0d04b(0x165)+_0x1f4064;dataAll=[],fetch(_0x22b943)[_0xe0d04b(0x13f)](_0x5d85d4=>_0x5d85d4[_0xe0d04b(0x141)]())[_0xe0d04b(0x13f)](_0x1cdd58=>{var _0x114507=_0xe0d04b;const _0x2cc9d9=JSON[_0x114507(0x108)](_0x1cdd58[_0x114507(0x130)](0x2f)[_0x114507(0x129)](0x0,-0x2)),_0x5d1bab=[];_0x2cc9d9[_0x114507(0x117)][_0x114507(0x134)][_0x114507(0x111)](_0x481f69=>{var _0x316be9=_0x114507;_0x481f69[_0x316be9(0x124)]&&_0x5d1bab[_0x316be9(0x159)](_0x481f69['label']['toLowerCase']()[_0x316be9(0x178)](/\s/g,''));}),_0x2cc9d9[_0x114507(0x117)][_0x114507(0x109)][_0x114507(0x111)](_0x3c8708=>{var _0xacc3e4=_0x114507;const _0x103238={};_0x5d1bab['forEach']((_0x259f93,_0x4adfbb)=>{_0x103238[_0x259f93]=_0x3c8708['c'][_0x4adfbb]!=null?_0x3c8708['c'][_0x4adfbb]['v']:'';}),dataAll[_0xacc3e4(0x159)](_0x103238);}),_0x137259==0x1?renderToWebsite1(dataAll):renderToWebsite2(dataAll);});}function renderToWebsite1(_0x1fdbb2){var _0x529dd7=_0x1ff316;htmlListForm='',htmlListForm=htmlListForm+'<table\x20class=\x22table-form-real-estate-CongVu\x22>'+_0x529dd7(0x155)+_0x529dd7(0x139)+'<th\x20class=\x22table-header-form-real-estate-CongVu\x22>Chủ\x20Đề</th>'+_0x529dd7(0x148)+'</tr>';var _0x470904='',_0x2602b2='';for(var _0x4e5aea=0x0;_0x4e5aea<_0x1fdbb2[_0x529dd7(0x146)];_0x4e5aea++){_0x470904=_0x529dd7(0x11d)+_0x1fdbb2[_0x4e5aea][_0x529dd7(0x17e)]+_0x529dd7(0x147),_0x2602b2=_0x529dd7(0x150)+_0x1fdbb2[_0x4e5aea][_0x529dd7(0x118)],htmlListForm=htmlListForm+'<tr\x20'+'id=\x22info'+String(_0x4e5aea+0x1)+'\x22'+'\x20class=\x22table-row-form-real-estate-CongVu\x22>'+'<td\x20class=\x22table-data-form-real-estate-CongVu\x22\x20style=\x22text-align:center;\x22>'+_0x1fdbb2[_0x4e5aea][_0x529dd7(0x11f)]+'</td>'+_0x529dd7(0x12f)+_0x2602b2+_0x529dd7(0x168)+_0x529dd7(0x15a)+_0x529dd7(0x14d)+String(_0x4e5aea+0x1)+_0x529dd7(0x145)+'\x27'+String(_0x1fdbb2[_0x4e5aea]['linktodo'])+'\x27'+',\x27'+String(_0x1fdbb2[_0x4e5aea]['id'])+'\x27'+',\x27'+String(_0x1fdbb2[_0x4e5aea]['currenttime'])+'\x27'+_0x529dd7(0x16b)+_0x470904+_0x529dd7(0x11c)+_0x529dd7(0x162)+_0x529dd7(0x136);}htmlListForm=htmlListForm+_0x529dd7(0x13a),document[_0x529dd7(0x121)]('main')[_0x529dd7(0x11a)]=htmlListForm;}function renderToWebsite2(_0x56d23d){var _0xab13a5=_0x1ff316;htmlListForm='',htmlListForm=htmlListForm+_0xab13a5(0x12d)+_0xab13a5(0x155)+_0xab13a5(0x139)+_0xab13a5(0x114)+_0xab13a5(0x173)+'</tr>';var _0x134167='',_0x2eeba1='';for(var _0x117bc6=0x0;_0x117bc6<_0x56d23d['length'];_0x117bc6++){_0x134167=_0xab13a5(0x180)+_0x56d23d[_0x117bc6][_0xab13a5(0x17e)]+_0xab13a5(0x147),_0x2eeba1=_0xab13a5(0x150)+_0x56d23d[_0x117bc6][_0xab13a5(0x118)],htmlListForm=htmlListForm+_0xab13a5(0x13d)+'id=\x22info'+String(_0x117bc6+0x1)+'\x22'+'\x20class=\x22table-row-form-real-estate-CongVu\x22>'+_0xab13a5(0x15a)+_0x56d23d[_0x117bc6][_0xab13a5(0x11f)]+_0xab13a5(0x162)+_0xab13a5(0x12f)+_0x2eeba1+_0xab13a5(0x168)+_0xab13a5(0x15a)+_0xab13a5(0x14d)+String(_0x117bc6+0x1)+_0xab13a5(0x145)+'\x27'+String(_0x56d23d[_0x117bc6]['linktodo'])+'\x27'+',\x27'+String(_0x56d23d[_0x117bc6]['id'])+'\x27'+',\x27'+String(_0x56d23d[_0x117bc6][_0xab13a5(0x116)])+'\x27'+')\x22>'+_0x134167+_0xab13a5(0x11c)+_0xab13a5(0x162)+_0xab13a5(0x136);}htmlListForm=htmlListForm+_0xab13a5(0x13a),document[_0xab13a5(0x121)](_0xab13a5(0x15b))[_0xab13a5(0x11a)]=htmlListForm;}function goToLink(_0x3b29ec,_0x4c9e84,_0x4e66f1){var _0x3357bd=_0x1ff316;setCookie(_0x3357bd(0x10d),user1,0x8),setCookie(_0x3357bd(0x174),uFullName,0x8),setCookie(_0x3357bd(0x152),typeUserDetail,0x8),setCookie(_0x3357bd(0x177),classOfUser,0x8),setCookie('ID',_0x4c9e84,0x8),setCookie(_0x3357bd(0x149),_0x4e66f1,0x8),tabPrevious!=null?(tabPrevious['close'](),tabPrevious=window[_0x3357bd(0x10b)](_0x3b29ec,_0x3357bd(0x13c))):tabPrevious=window[_0x3357bd(0x10b)](_0x3b29ec,_0x3357bd(0x13c));}
