/**
 * Created by LinJ on 2015/11/5.
 * 初始化页面模块js
 */

//初始化各类元素以及监听
$(function () {
    inition();
});

function inition() {
    //初始化checkbox
    initCheckBox("l_second", 59);

    //初始化单选、复选框
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

    //解析按钮绑定函数
    $('#explain').click(function () {
        btnFan();
    });

    initFirstRadio();
    initCycleRadio();
    initRadioCheckDiv();
    initSpinner();
    initCronFromTable();
    initListChange();
}

//初始化大量的复选框 根据div的id以及数量进行初始化 每个复选框占1/12宽度
function initCheckBox(divid, cnt) {
    if (cnt != null && cnt > 0) {
        for (dc = 1; dc <= cnt; dc++) {
            $("#" + divid).append(" <div class='col-xs-1 col-sm-1 col-md-1'> <label><input type='checkbox' value=" + dc + "> &nbsp;" + dc + "</label></div>");
        }
    }
}

//初始化每个页签第一排的radio，即*条件
function initFirstRadio() {
    $('.firstradio').on('ifChecked', function () {
        everyTime(this);
    });
}

//初始化每个页签周期选择的的radio，即从X到Y的条件
function initCycleRadio() {
    $('.cycleradio').on('ifChecked', function () {
        writeStartAndEnd(this, "-");
    });
    $('.loopradio').on('ifChecked', function () {
        writeStartAndEnd(this, "/");
    });
}

//初始化div内容监听绑定函数，即点击div，对应radio被选中
function initRadioCheckDiv() {
    $('.radiocheck').click(function () {
        radioCheckByClick(this);
    });
}


//绑定数字微调器
function initSpinner() {
    //绑定数字微调器
    $(".cyclespin").spinner('changing', function (e, newVal, oldVal) {
        //trigger immediately
        writeStartAndEnd(this, "-");
    });
    $(".loopspin").spinner('changing', function (e, newVal, oldVal) {
        //trigger immediately
        writeStartAndEnd(this, "/");
    });
}

//表达式结果由表格生成到cron表达式
function initCronFromTable() {
    //查找所有name以v_开头的span元素
    var vals = $("span[name^='v_']");
    var cron = $("#cron");
    vals.change(function () {
        var item = [];
        vals.each(function () {
            item.push(this.innerHTML);
        });
        cron.val(item.join(" "));
    });
}

//list change
function initListChange() {
    var secondList = $(".secondList").find(':checkbox');

    secondList.on('ifChanged', function () {
        var vals = [];
        secondList.each(function () {
            if (this.checked) {
                vals.push(this.value);
            }
        });
        var val = "?";
        if (vals.length > 0 && vals.length < 59) {
            val = vals.join(",");
        }else if(vals.length == 59){
            val = "*";
        }
        var item = $("span[name=v_second]");
        item.html(val);
        item.change();
    });
}

