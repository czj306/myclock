// https://freeicons.io/essential-collection/clock-icon-icon-3
    my_clock();

    function my_clock(){
        var el = document.getElementById('clock_div');
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        m=m>=10?m:('0'+m);
        s=s>=10?s:('0'+s);
        el.innerHTML = h+":"+m+":"+s;
        setTimeout(function(){my_clock(el)}, 1000);
    }

