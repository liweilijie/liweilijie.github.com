/* Berlinix.com JavaScript
 */

$(".dropdown-toggle").dropdown();
/* all tables add BootStrap class */
$("table").addClass("table table-bordered table-striped");
/* all external links, open in a new window/tab */
$("a[href^='http://']").each(function(){
    this.target = "_blank";
});
/* page toc init */
$(function(){
    /* default: close toc */
    var toc_open = false;

    /* find .toc and beautify it */
    if($.find(".toc")) {
        if($.find("h1")) {
            /* create toc container: divtoc */
            divtoc = $('<div id="toc"><div class="toc-title">目录 [<a href="javascript:void(0)" id="toc_flag">显示</a>]</div></div>');
            $(".toc").prev().after(divtoc);
            $(".toc").appendTo(divtoc);
            $("#toc").addClass("well page-nav");
            $(".toc").hide();   /* default: hide/close toc */
        }
    }

    /* toc event: onCick */
    $("#toc_flag").click(function(){
        if(toc_open == false) {
            toc_open = true;
            $("#toc_flag").html("隐藏");
            $(".toc").show();
        } else {
            toc_open = false;
            $("#toc_flag").html("显示");
            $(".toc").hide();
        }
    });

});

$(function() {
    $(".footer").append('|&nbsp;&nbsp;<a href="wp/">博客');
});

//function str_endswith(s, t)
//{
//    var idx = s.lastIndexOf(t);
//    return (idx != -1) && (idx + t.length == s.length);
//}
//
//function is_exclude_files(files) 
//{
//    for(i = 0; i < files.length; ++i) {
//        if(str_endswith(window.location.pathname, files[i])) {
//            return true;
//        }
//    }
//    return false;
//}

/* handle feedback */
//$(function(){
//    if(is_exclude_files(["index.html", "about.html", "contact.html", "links.html", "/"])) {
//        return false;
//    }
//
//    fblist = $('\
//        <div class="fblist">\
//            <h2>用户留言</h2>\
//            <div id="fblist1"></div>\
//        </div>\
//        ');
//    $("#content").append(fblist);
//
//    $.post("http://www.berlinix.com/fb.php", {
//        "action": "getlist",
//        "page": window.location.pathname
//        }, function(data){
//            var json = $.parseJSON(data);
//            for(var i = 0; i < json.length; ++i) {
//                $("#fblist1").append('<div class="fb"><p>'+json[i].username + ":</p><pre>" + json[i].content + '</pre><span class="fbts">' + json[i].ts + "</span></div></div>");
//            }
//        });
//
//    afb = $('\
//        <div id="feedback">\
//            <h2>添加留言</h2>\
//            <form action="javascript:void(0)" class="well" id="add-fb" >\
//                <div class="help-block">欢迎指正错误，提出建议</div>\
//                <textarea class="span8" rows="6" name="feedback" id="fb-content"></textarea><br/>\
//                * 昵称：<input type="text" name="username" id="username" class="span2" placeholder="me" />&nbsp;&nbsp;&nbsp;&nbsp;\
//                邮箱：<input type="email" name="email" id="email" placeholder="me@website.com" /> <div class="help-inline">不会显示在页面</div><br/>\
//                &nbsp;&nbsp;&nbsp;网站：<input type="url" name="website" id="website" class="span6" placeholder="http://" /><br/>\
//                <input type="submit" class="btn btn-primary" value="&nbsp;&nbsp;&nbsp;提交&nbsp;&nbsp;&nbsp;" />\
//            </form>\
//        </div>');
//    fblist.append(afb);
//
//    $("#add-fb").submit(function(){
//        $.post("http://www.berlinix.com/fb.php", {
//            "action": "add",
//            "username": $("#username").val(),
//            "email": $("#email").val(),
//            "content": $("#fb-content").val(),
//            "page": window.location.pathname
//        }, function(data){
//            if(data == "0") {
//                $("#add-fb").before('<div class="alert alert-info">\
//                    <a class="close" data-dismiss="alert">x</a>\
//                    <p>感谢您的反馈！</p></div>');
//            } else {
//                alert("failed: " + data);
//            }
//        });
//
//        newfb = $('<div class="fblist-username"><p>' + $("#username").val() + ' 说：</div>' +
//            "</p>" + 
//            '<div class="fblist-content"><pre>' + $("#fb-content").val() + '</pre></div>');
//        $("#fblist1").append(newfb);
//
//        return false;
//    });
//
//});


