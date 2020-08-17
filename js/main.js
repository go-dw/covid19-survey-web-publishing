$(document).ready(function(){

    // 라디오버튼 클릭시 이벤트 발생
    $("input:radio[name=quest_2]").click(function(){
        if($("input[name=quest_2]:checked").val() == "O"){
            $("input:text[name=quest_02_t]").attr("disabled",false);
            // radio 버튼의 value 값이 1이라면 활성화

        }else if($("input[name=quest_2]:checked").val() == "X"){
            $("input:text[name=quest_02_t]").attr("disabled",true);
            // radio 버튼의 value 값이 0이라면 비활성화
        }
    });
    $("input:radio[name=quest_3]").click(function(){
        if($("input[name=quest_3]:checked").val() == "O"){
            $("input:text[name=quest_03_t]").attr("disabled",false);
            // radio 버튼의 value 값이 1이라면 활성화

        }else if($("input[name=quest_3]:checked").val() == "X"){
            $("input:text[name=quest_03_t]").attr("disabled",true);
            // radio 버튼의 value 값이 0이라면 비활성화
        }
    });
    $("input:radio[name=quest_4]").click(function(){
        if($("input[name=quest_4]:checked").val() == "O"){
            $("input:text[name=quest_04_t]").attr("disabled",false);
        }else if($("input[name=quest_4]:checked").val() == "X"){
            $("input:text[name=quest_04_t]").attr("disabled",true);
        }
    });
    $("input:radio[name=visitWhy]").click(function(){
        if($("input[name=visitWhy]:checked").val() == "1"){
            $("input:radio[name=visitPurpose1]").attr("disabled",false);
        }else if($("input[name=visitWhy]:checked").val() !== "1"){
            $("input:radio[name=visitPurpose1]").attr("disabled",true);
        }

        if($("input[name=visitWhy]:checked").val() == "2"){
            $("input:text[name=visitPurpose2]").attr("disabled",false);
        }else if($("input[name=visitWhy]:checked").val() !== "2"){
            $("input:text[name=visitPurpose2]").attr("disabled",true);
        }

        if($("input[name=visitWhy]:checked").val() == "3"){
            $("input:text[name=visitPurpose3]").attr("disabled",false);
        }else if($("input[name=visitWhy]:checked").val() !== "3"){
            $("input:text[name=visitPurpose3]").attr("disabled",true);
        }
    });
});