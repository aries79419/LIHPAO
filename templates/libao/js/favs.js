


	//FB 分享
	function fbs_click() {u=document.location.href+'###';t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;}
	document.write('<a href="http://www.facebook.com/share.php?u=<url>" onclick="return fbs_click()" target="_blank"><img src="/images/favs/ico-facebook.gif" alt="Facebook" border="0" align=absmiddle title="推到Facebook"></a> ');

	var title=document.title;
	var tta=title.indexOf(",");
	var ttt=title.substring(0,tta);
	var tt=encodeURIComponent(ttt);
	var tta=encodeURIComponent(title);
	var tb=escape(ttt);
	var ttb=escape(title);
	var uu=encodeURIComponent(document.location.href);
	
function wopen(url,name){
	window.open(url,name,'toolbar=0,location=0,directories==0,status=0,menubar=0,scrollbars=1,status=no,resizable=yes');name.focus();}

	document.writeln("<a href=javascript:wopen('http://twitter.com/home/?status='+encodeURIComponent(document.title)+encodeURIComponent(document.location.href),'twitter') title=twitter target=_self><img src=/images/favs/ico-twitter.gif alt=twitter  border=0 align=absmiddle></a>");

	document.writeln("<a href=javascript:wopen('http://www.plurk.com/?qualifier=shares&status='+encodeURIComponent(document.location.href)+encodeURIComponent(document.title),'plurk'); title=plurk target=_self><img src=/images/favs/ico-plurk.gif alt=plurk  border=0 align=absmiddle></a>");

document.writeln("<span style=\"position:relative; top: 5px; height: 15px;\"><a href=javascript:wopen('https://plus.google.com/share?url='+encodeURIComponent(document.location.href),'google+');><img src=\"https://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/></a></span>");
	//document.writeln("<a href=javascript:wopen('http://twitter.com/home/?status='+tt+''+uu,'twitter'); title=twitter target=_self><img src=/images/favs/ico-twitter.gif alt=twitter  border=0 align=absmiddle></a> <a href=javascript:wopen('http://www.plurk.com/?qualifier=shares&status='+encodeURIComponent(document.location.href)+encodeURIComponent(document.title),'plurk'); title=plurk target=_self><img src=/images/favs/ico-plurk.gif alt=plurk  border=0 align=absmiddle></a>");




