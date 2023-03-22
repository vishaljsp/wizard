function fm(){
    window.location="#rend"
}

function pp(){
    swal({
        title: "Form Submited",
        text: "You clicked the button!",
        icon: "success",
        button: "Continue",
    });
    
}

function sm(){
   
    let name=$("*#jssender_name").val()
    let Eid=$("*#jssender_eid").val()
    let number=$("*#jssender_nm").val()
    let coment=$("*#jssender_cument").val()

    console.log(Eid)
    if(name==""){
        
        swal({
            title: "Error",
            text: "name is requrde",
            icon: "warning",
            button: "Ok",
        });
    }
    else if(Eid == ""){
        
        swal({
            title: "Error",
            text: "Email is requrde",
            icon: "warning",
            button: "Ok",
        });

    }
    else if(number.length != 10){
        swal({
            title: "Error",
            text: "Worng Number",
            icon: "warning",
            button: "Ok",
        });

    }
    else if(number==""){
        swal({
            title: "Error",
            text: "Number is requrde",
            icon: "warning",
            button: "Ok",
        });

    }
    else if(coment==""){
        swal({
            title: "Error",
            text: "Cumment is requrde",
            icon: "warning",
            button: "Ok",
        });

    }
    else{
        $.ajax({
            type: "post",
            url: "/about-us",
            data: {
                fullname : name,
                Emailid00 : Eid,
                phone : number,
                desc : coment,
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
            }
        })
        $("*#jssender_name").val("")
        $("*#jssender_eid").val("")
        $("*#jssender_nm").val("")
        $("*#jssender_cument").val("")

       return pp()

    }

}


function call(){
   
    let name=$("*#name_call").val()
    let email=$("*#email_call").val()
    let number_call=$("*#num_call").val()
    let date1=$("*#date").val()
    let tym=$("*#time_call").val()
    console.log(email)

    
    if(name==""){
        
        swal({
            title: "Error",
            text: "Entr your name",
            icon: "warning",
            button: "Ok",
        });
    }
    else if(email==""){
        
        swal({
            title: "Error",
            text: "Email is requrde",
            icon: "warning",
            button: "Ok",
        });

    }
    else if(number_call.length != 10){
        swal({
            title: "Error",
            text: "Number is wrong",
            icon: "warning",
            button: "Ok",
        });

    }
    else if(number_call==""){
        swal({
            title: "Error",
            text: "Number is requrde",
            icon: "warning",
            button: "Ok",
        });

    }
    else if(date1==""){
        swal({
            title: "Error",
            text: "date is requrde",
            icon: "warning",
            button: "Ok",
        });

    }
    else{
        $.ajax({
            type: "post",
            url: "/discoverycall",
            data: {
                fullname : name,
                idemail : email,
                phone : number_call,
                dt : date1,
                tym : tym,
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
            }
        })
        $("*#name_call").val("")
        $("*#email_call").val("")
        $("*#num_call").val("")
        $("*#date").val("")
        $("*#time_call").val("")

       return pp()

    }

}
