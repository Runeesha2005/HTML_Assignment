if (window.location.href == "https://runeesha2005.github.io/HTML_Assignment/WDOS%20Assignment/booknow.html") {

    const daysTag = document.querySelector(".days"),
        currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons span");

    // getting new date, current year and month
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    // storing full name of all months in array
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
        let liTag = "";

        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
            // adding active class to li if the current day, month, and year matched
            let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}" id="num${i}" onclick="getSelectedDay(${i})">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
        daysTag.innerHTML = liTag;
    }
    renderCalendar();

    prevNextIcon.forEach(icon => { // getting prev and next icons
        icon.addEventListener("click", () => { // adding click event on both icons
            // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

            if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
            } else {
                date = new Date(); // pass the current date as date value
            }
            renderCalendar(); // calling renderCalendar function
        });
    });



    ///guest selection

    let sessionStartValue = 0;

    sessionStorage.setItem("session-SL_A_Cost", sessionStartValue);
    sessionStorage.setItem("session-SL_C_Cost", sessionStartValue);
    sessionStorage.setItem("session-F_A_Cost", sessionStartValue);
    sessionStorage.setItem("session-F_C_Cost", sessionStartValue);




    //SL Adult

    let data1 = 0;
    data1 = document.getElementById("count1").innerText;




    function addition1() {

        let cost = 0;
        let normal = (sessionStorage.getItem("session-hour")) - (sessionStorage.getItem("session-peakCount"));
        let peakcount = (sessionStorage.getItem("session-peakCount"));


        data1++;
        document.getElementById("count1").innerHTML = "&nbsp;&nbsp;&nbsp;" + data1 + "&nbsp;&nbsp;&nbsp;";
        document.getElementById('default').style.display = "none";

        document.getElementById('sl_Adult').style.display = "";
        document.getElementById('sl_A_Count').innerText = `${data1} SL Adult`;

        cost = data1 * ((4 * normal) + (6 * peakcount));
        document.getElementById('sl_A_Price').innerText = `$${cost}`;

        sessionStorage.setItem("session-SL_A_Cost", cost);

        let total = (parseInt(sessionStorage.getItem("session-SL_A_Cost")) + parseInt(sessionStorage.getItem("session-SL_C_Cost")) + parseInt(sessionStorage.getItem("session-F_A_Cost")) + parseInt(sessionStorage.getItem("session-F_C_Cost")));

        document.getElementById('total').innerText = `$${total}`;
    }


    function substraction1() {
        if (data1 == 0) {
            data1 = 0;
        }

        else {
            data1--;
            document.getElementById("count1").innerHTML = "&nbsp;&nbsp;&nbsp;" + data1 + "&nbsp;&nbsp;&nbsp;";


            let cost = 0;
            let normal = (sessionStorage.getItem("session-hour")) - (sessionStorage.getItem("session-peakCount"));
            let peakcount = (sessionStorage.getItem("session-peakCount"));

            document.getElementById('sl_Adult').style.display = "";
            document.getElementById('sl_A_Count').innerText = `${data1} SL Adult`;

            cost = data1 * ((4 * normal) + (6 * peakcount));
            document.getElementById('sl_A_Price').innerText = `$${cost}`;

            sessionStorage.setItem("session-SL_A_Cost", cost);

            let total = (parseInt(sessionStorage.getItem("session-SL_A_Cost")) + parseInt(sessionStorage.getItem("session-SL_C_Cost")) + parseInt(sessionStorage.getItem("session-F_A_Cost")) + parseInt(sessionStorage.getItem("session-F_C_Cost")));

            document.getElementById('total').innerText = `$${total}`;






        }
    }



    //SL Child
    let data2 = 0;
    data2 = document.getElementById("count2").innerText;


    function addition2() {

        let cost = 0;
        let normal = (sessionStorage.getItem("session-hour")) - (sessionStorage.getItem("session-peakCount"));
        let peakcount = (sessionStorage.getItem("session-peakCount"));

        data2++;
        document.getElementById("count2").innerHTML = "&nbsp;&nbsp;&nbsp;" + data2 + "&nbsp;&nbsp;&nbsp;";
        document.getElementById('default').style.display = "none";

        document.getElementById('sl_Child').style.display = "";
        document.getElementById('sl_C_Count').innerText = `${data2} SL Child`;

        cost = data2 * ((2 * normal) + (3 * peakcount));
        document.getElementById('sl_C_Price').innerText = `$${cost}`;

        sessionStorage.setItem("session-SL_C_Cost", cost);

        let total = (parseInt(sessionStorage.getItem("session-SL_A_Cost")) + parseInt(sessionStorage.getItem("session-SL_C_Cost")) + parseInt(sessionStorage.getItem("session-F_A_Cost")) + parseInt(sessionStorage.getItem("session-F_C_Cost")));

        document.getElementById('total').innerText = `$${total}`;


    }


    function substraction2() {
        if (data2 == 0) {
            data2 = 0;
        }

        else {
            data2--;

            document.getElementById("count2").innerHTML = "&nbsp;&nbsp;&nbsp;" + data2 + "&nbsp;&nbsp;&nbsp;";


            let cost = 0;
            let normal = (sessionStorage.getItem("session-hour")) - (sessionStorage.getItem("session-peakCount"));
            let peakcount = (sessionStorage.getItem("session-peakCount"));

            document.getElementById('sl_Child').style.display = "";
            document.getElementById('sl_C_Count').innerText = `${data2} SL Child`;

            cost = data2 * ((2 * normal) + (3 * peakcount));
            document.getElementById('sl_C_Price').innerText = `$${cost}`;

            sessionStorage.setItem("session-SL_C_Cost", cost);

            let total = (parseInt(sessionStorage.getItem("session-SL_A_Cost")) + parseInt(sessionStorage.getItem("session-SL_C_Cost")) + parseInt(sessionStorage.getItem("session-F_A_Cost")) + parseInt(sessionStorage.getItem("session-F_C_Cost")));

            document.getElementById('total').innerText = `$${total}`;
        }


    }


    //Foreign Adult
    let data3 = 0;
    data3 = document.getElementById("count3").innerText;


    function addition3() {

        let cost = 0;
        let normal = (sessionStorage.getItem("session-hour")) - (sessionStorage.getItem("session-peakCount"));
        let peakcount = (sessionStorage.getItem("session-peakCount"));

        data3++;
        document.getElementById("count3").innerHTML = "&nbsp;&nbsp;&nbsp;" + data3 + "&nbsp;&nbsp;&nbsp;";
        document.getElementById('default').style.display = "none";

        document.getElementById('f_Adult').style.display = "";
        document.getElementById('f_A_Count').innerText = `${data3} Foreign Adult`;

        cost = data3 * ((10 * normal) + (13 * peakcount));
        document.getElementById('f_A_Price').innerText = `$${cost}`;

        sessionStorage.setItem("session-F_A_Cost", cost);

        let total = (parseInt(sessionStorage.getItem("session-SL_A_Cost")) + parseInt(sessionStorage.getItem("session-SL_C_Cost")) + parseInt(sessionStorage.getItem("session-F_A_Cost")) + parseInt(sessionStorage.getItem("session-F_C_Cost")));

        document.getElementById('total').innerText = `$${total}`;
    }


    function substraction3() {
        if (data3 == 0) {
            data3 = 0;
        }

        else {
            data3--;
            document.getElementById("count3").innerHTML = "&nbsp;&nbsp;&nbsp;" + data3 + "&nbsp;&nbsp;&nbsp;";


            let cost = 0;
            let normal = (sessionStorage.getItem("session-hour")) - (sessionStorage.getItem("session-peakCount"));
            let peakcount = (sessionStorage.getItem("session-peakCount"));

            document.getElementById('f_Adult').style.display = "";
            document.getElementById('f_A_Count').innerText = `${data3} Foreign Adult`;

            cost = data3 * ((10 * normal) + (13 * peakcount));
            document.getElementById('f_A_Price').innerText = `$${cost}`;

            sessionStorage.setItem("session-F_A_Cost", cost);

            let total = (parseInt(sessionStorage.getItem("session-SL_A_Cost")) + parseInt(sessionStorage.getItem("session-SL_C_Cost")) + parseInt(sessionStorage.getItem("session-F_A_Cost")) + parseInt(sessionStorage.getItem("session-F_C_Cost")));

            document.getElementById('total').innerText = `$${total}`;
        }


    }



    //Foreign Child
    let data4 = 0;
    data4 = document.getElementById("count4").innerText;


    function addition4() {
        let cost = 0;
        let normal = (sessionStorage.getItem("session-hour")) - (sessionStorage.getItem("session-peakCount"));
        let peakcount = (sessionStorage.getItem("session-peakCount"));

        data4++;
        document.getElementById("count4").innerHTML = "&nbsp;&nbsp;&nbsp;" + data4 + "&nbsp;&nbsp;&nbsp;";
        document.getElementById('default').style.display = "none";

        document.getElementById('f_Child').style.display = "";
        document.getElementById('f_C_Count').innerText = `${data4}  Foreign Child`;

        cost = data4 * ((5 * normal) + (8 * peakcount));
        document.getElementById('f_C_Price').innerText = `$${cost}`;

        sessionStorage.setItem("session-F_C_Cost", cost);

        let total = (parseInt(sessionStorage.getItem("session-SL_A_Cost")) + parseInt(sessionStorage.getItem("session-SL_C_Cost")) + parseInt(sessionStorage.getItem("session-F_A_Cost")) + parseInt(sessionStorage.getItem("session-F_C_Cost")));

        document.getElementById('total').innerText = `$${total}`;


    }


    function substraction4() {
        if (data4 == 0) {
            data4 = 0;
        }

        else {
            data4--;

            document.getElementById("count4").innerHTML = "&nbsp;&nbsp;&nbsp;" + data4 + "&nbsp;&nbsp;&nbsp;";


            let cost = 0;
            let normal = (sessionStorage.getItem("session-hour")) - (sessionStorage.getItem("session-peakCount"));
            let peakcount = (sessionStorage.getItem("session-peakCount"));

            document.getElementById('f_Child').style.display = "";
            document.getElementById('f_C_Count').innerText = `${data4} Foreign Child`;

            cost = data4 * ((5 * normal) + (8 * peakcount));
            document.getElementById('f_C_Price').innerText = `$${cost}`;

            sessionStorage.setItem("session-F_C_Cost", cost);

            let total = (parseInt(sessionStorage.getItem("session-SL_A_Cost")) + parseInt(sessionStorage.getItem("session-SL_C_Cost")) + parseInt(sessionStorage.getItem("session-F_A_Cost")) + parseInt(sessionStorage.getItem("session-F_C_Cost")));

            document.getElementById('total').innerText = `$${total}`;
        }


    }




    //Infant

    let data5 = 0;
    data5 = document.getElementById("count5").innerText;

    sessionStorage.setItem("session-Infant_Count", data5);


    function addition5() {

        data5++;
        document.getElementById("count5").innerHTML = "&nbsp;&nbsp;&nbsp;" + data5 + "&nbsp;&nbsp;&nbsp;";


        document.getElementById('infant').style.display = "";
        document.getElementById('i_Count').innerText = `${data5} Infants`;
        sessionStorage.setItem("session-Infant_Count", data5);
    }


    function substraction5() {
        if (data5 == 0) {
            data5 = 0;
        }

        else {
            data5--;
            document.getElementById("count5").innerHTML = "&nbsp;&nbsp;&nbsp;" + data5 + "&nbsp;&nbsp;&nbsp;";
            sessionStorage.setItem("session-Infant_Count", data5);


            if (data5 == 0) {
                document.getElementById('infant').style.display = "none";
            }

        }


    }






    let dataSetup = new Date();
    let day = dataSetup.getDate();

    let prev = "num" + day;

    function getSelectedDay(i) {

        let selectedDay = document.getElementById(`num${i}`);
        selectedDay.classList.add("active");

        let selectedDefaultDay = document.getElementById(prev);
        selectedDefaultDay.classList.remove("active");

        prev = "num" + i;

        dateSetup = i + '/' + (currMonth + 1) + '/' + currYear;

        document.getElementById('day').innerText = dateSetup;






    }






    let today = new Date();

    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;

    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;


    document.getElementById('day').innerText = today;





    //checking peak time

    let checkPeak1 = false;
    let checkPeak2 = false;
    let checkPeak3 = false;
    let checkPeak4 = false;
    let checkPeak5 = false;
    let checkPeak6 = false;






    //time slots

    function timeSlot() {


        let checkBox1 = document.getElementById("click1");

        let box1 = document.getElementById("box1");

        if (checkBox1.checked == true) {
            box1.style.backgroundColor = "#2976c7";
        }
        else {
            box1.style.backgroundColor = "#163c65";
        }







        let checkBox2 = document.getElementById("click2");

        let box2 = document.getElementById("box2");

        if (checkBox2.checked == true) {
            box2.style.backgroundColor = "#2976c7";
        }
        else {
            box2.style.backgroundColor = "#163c65";
        }



        let checkBox3 = document.getElementById("click3");

        let box3 = document.getElementById("box3");

        if (checkBox3.checked == true) {
            box3.style.backgroundColor = "#2976c7";
        }
        else {
            box3.style.backgroundColor = "#163c65";
        }







        let checkBox4 = document.getElementById("click4");

        let box4 = document.getElementById("box4");

        if (checkBox4.checked == true) {
            box4.style.backgroundColor = "#2976c7";
            checkPeak1 = true;
        }
        else {
            box4.style.backgroundColor = "#163c65";
            checkPeak1 = false;
        }



        let checkBox5 = document.getElementById("click5");

        let box5 = document.getElementById("box5");

        if (checkBox5.checked == true) {
            box5.style.backgroundColor = "#2976c7";
            checkPeak2 = true;
        }
        else {
            box5.style.backgroundColor = "#163c65";
            checkPeak2 = false;

        }







        let checkBox6 = document.getElementById("click6");

        let box6 = document.getElementById("box6");

        if (checkBox6.checked == true) {
            box6.style.backgroundColor = "#2976c7";
            checkPeak3 = true;
        }
        else {
            box6.style.backgroundColor = "#163c65";
            checkPeak3 = false;
        }



        let checkBox7 = document.getElementById("click7");

        let box7 = document.getElementById("box7");

        if (checkBox7.checked == true) {
            box7.style.backgroundColor = "#2976c7";
        }
        else {
            box7.style.backgroundColor = "#163c65";
        }







        let checkBox8 = document.getElementById("click8");

        let box8 = document.getElementById("box8");

        if (checkBox8.checked == true) {
            box8.style.backgroundColor = "#2976c7";
        }
        else {
            box8.style.backgroundColor = "#163c65";
        }



        let checkBox9 = document.getElementById("click9");

        let box9 = document.getElementById("box9");

        if (checkBox9.checked == true) {
            box9.style.backgroundColor = "#2976c7";
            checkPeak4 = true;
        }
        else {
            box9.style.backgroundColor = "#163c65";
            checkPeak4 = false;
        }







        let checkBox10 = document.getElementById("click10");

        let box10 = document.getElementById("box10");

        if (checkBox10.checked == true) {
            box10.style.backgroundColor = "#2976c7";
            checkPeak5 = true;
        }
        else {
            box10.style.backgroundColor = "#163c65";
            checkPeak5 = false;
        }



        let checkBox11 = document.getElementById("click11");

        let box11 = document.getElementById("box11");

        if (checkBox11.checked == true) {
            box11.style.backgroundColor = "#2976c7";
            checkPeak6 = true;
        }
        else {
            box11.style.backgroundColor = "#163c65";
            checkPeak6 = false;
        }




        let hour = 0;


        box1 = checkBox1;
        box2 = checkBox2;
        box3 = checkBox3;
        box4 = checkBox4;
        box5 = checkBox5;
        box6 = checkBox6;
        box7 = checkBox7;
        box8 = checkBox8;
        box9 = checkBox9;
        box10 = checkBox10;
        box11 = checkBox11;









        if (box1.checked == true) {
            hour = hour + 1;

            if (box2.checked == true) {
                hour = hour + 1;

                if (box3.checked == true) {
                    hour = hour + 1;

                    if (box4.checked == true) {
                        hour = hour + 1;

                        if (box5.checked == true) {
                            hour = hour + 1;

                            if (box6.checked == true) {
                                hour = hour + 1;

                                if (box7.checked == true) {
                                    hour = hour + 1;

                                    if (box8.checked == true) {
                                        hour = hour + 1;

                                        if (box9.checked == true) {
                                            hour = hour + 1;

                                            if (box10.checked == true) {
                                                hour = hour + 1;

                                                if (box11.checked == true) {
                                                    hour = hour + 1;


                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }


        else if (box2.checked == true) {
            hour = hour + 1;
            if (box3.checked == true) {
                hour = hour + 1;

                if (box4.checked == true) {
                    hour = hour + 1;

                    if (box5.checked == true) {
                        hour = hour + 1;

                        if (box6.checked == true) {
                            hour = hour + 1;

                            if (box7.checked == true) {
                                hour = hour + 1;

                                if (box8.checked == true) {
                                    hour = hour + 1;

                                    if (box9.checked == true) {
                                        hour = hour + 1;

                                        if (box10.checked == true) {
                                            hour = hour + 1;

                                            if (box11.checked == true) {
                                                hour = hour + 1;


                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        else if (box3.checked == true) {
            hour = hour + 1;

            if (box4.checked == true) {
                hour = hour + 1;

                if (box5.checked == true) {
                    hour = hour + 1;

                    if (box6.checked == true) {
                        hour = hour + 1;

                        if (box7.checked == true) {
                            hour = hour + 1;

                            if (box8.checked == true) {
                                hour = hour + 1;

                                if (box9.checked == true) {
                                    hour = hour + 1;

                                    if (box10.checked == true) {
                                        hour = hour + 1;

                                        if (box11.checked == true) {
                                            hour = hour + 1;


                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }



        else if (box4.checked == true) {
            hour = hour + 1;
            if (box5.checked == true) {
                hour = hour + 1;

                if (box6.checked == true) {
                    hour = hour + 1;

                    if (box7.checked == true) {
                        hour = hour + 1;

                        if (box8.checked == true) {
                            hour = hour + 1;

                            if (box9.checked == true) {
                                hour = hour + 1;

                                if (box10.checked == true) {
                                    hour = hour + 1;

                                    if (box11.checked == true) {
                                        hour = hour + 1;


                                    }
                                }
                            }
                        }
                    }
                }
            }
        }



        else if (box5.checked == true) {
            hour = hour + 1;

            if (box6.checked == true) {
                hour = hour + 1;

                if (box7.checked == true) {
                    hour = hour + 1;

                    if (box8.checked == true) {
                        hour = hour + 1;

                        if (box9.checked == true) {
                            hour = hour + 1;

                            if (box10.checked == true) {
                                hour = hour + 1;

                                if (box11.checked == true) {
                                    hour = hour + 1;


                                }
                            }
                        }
                    }
                }
            }
        }



        else if (box6.checked == true) {
            hour = hour + 1;

            if (box7.checked == true) {
                hour = hour + 1;

                if (box8.checked == true) {
                    hour = hour + 1;

                    if (box9.checked == true) {
                        hour = hour + 1;

                        if (box10.checked == true) {
                            hour = hour + 1;

                            if (box11.checked == true) {
                                hour = hour + 1;


                            }
                        }
                    }
                }
            }
        }



        else if (box7.checked == true) {
            hour = hour + 1;

            if (box8.checked == true) {
                hour = hour + 1;

                if (box9.checked == true) {
                    hour = hour + 1;

                    if (box10.checked == true) {
                        hour = hour + 1;

                        if (box11.checked == true) {
                            hour = hour + 1;


                        }
                    }
                }
            }
        }



        else if (box8.checked == true) {
            hour = hour + 1;

            if (box9.checked == true) {
                hour = hour + 1;

                if (box10.checked == true) {
                    hour = hour + 1;

                    if (box11.checked == true) {
                        hour = hour + 1;


                    }
                }
            }
        }



        else if (box9.checked == true) {
            hour = hour + 1;

            if (box10.checked == true) {
                hour = hour + 1;

                if (box11.checked == true) {
                    hour = hour + 1;


                }
            }
        }



        else if (box10.checked == true) {
            hour = hour + 1;


            if (box11.checked == true) {
                hour = hour + 1;


            }
        }




        else if (box11.checked == true) {
            hour = hour + 1;

        }

        else {
            hour = 0;
        }


        sessionStorage.setItem("session-hour", hour);
        document.getElementById("duration").innerText = `${hour} hrs`;




        //start and stop time

        let b1 = box1.checked;//by default true
        let b2 = box2.checked;
        let b3 = box3.checked;
        let b4 = box4.checked;
        let b5 = box5.checked;
        let b6 = box6.checked;
        let b7 = box7.checked;
        let b8 = box8.checked;
        let b9 = box9.checked;
        let b10 = box10.checked;
        let b11 = box11.checked;

        let tStart = 0;
        let tStop = 0;


        if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11) {
            tStart = 7;
            tStop = 18;


        } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10) {
            tStart = 7;
            tStop = 17;


        } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
            tStart = 7;
            tStop = 16;

        }

        else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8) {
            tStart = 7;
            tStop = 15;


        } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7) {
            tStart = 7;
            tStop = 14;


        } else if (b1 && b2 && b3 && b4 && b5 && b6) {
            tStart = 7;
            tStop = 13;


        } else if (b1 && b2 && b3 && b4 && b5) {
            tStart = 7;
            tStop = 12;


        } else if (b1 && b2 && b3 && b4) {
            tStart = 7;
            tStop = 11;


        } else if (b1 && b2 && b3) {
            tStart = 7;
            tStop = 10;


        } else if (b1 && b2) {
            tStart = 7;
            tStop = 9;


        } else if (b1) {
            tStart = 7;
            tStop = 8;


            //8 t0 18


        } else if (b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11) {
            tStart = 8;
            tStop = 18;

        } else if (b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10) {
            tStart = 8;
            tStop = 17;

        } else if (b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
            tStart = 8;
            tStop = 16;

        } else if (b2 && b3 && b4 && b5 && b6 && b7 && b8) {
            tStart = 8;
            tStop = 15;

        } else if (b2 && b3 && b4 && b5 && b6 && b7) {
            tStart = 8;
            tStop = 14;

        } else if (b2 && b3 && b4 && b5 && b6) {
            tStart = 8;
            tStop = 13;

        } else if (b2 && b3 && b4 && b5) {
            tStart = 8;
            tStop = 12;

        } else if (b2 && b3 && b4) {
            tStart = 8;
            tStop = 11;

        } else if (b2 && b3) {
            tStart = 8;
            tStop = 10;

        } else if (b2) {
            tStart = 8;
            tStop = 9;



            //9 t0 18



        } else if (b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11) {
            tStart = 9;
            tStop = 18;

        } else if (b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10) {
            tStart = 9;
            tStop = 17;

        } else if (b3 && b4 && b5 && b6 && b7 && b8 && b9) {
            tStart = 9;
            tStop = 16;

        } else if (b3 && b4 && b5 && b6 && b7 && b8) {
            tStart = 9;
            tStop = 15;

        } else if (b3 && b4 && b5 && b6 && b7) {
            tStart = 9;
            tStop = 14;

        } else if (b3 && b4 && b5 && b6) {
            tStart = 9;
            tStop = 13;

        } else if (b3 && b4 && b5) {
            tStart = 9;
            tStop = 12;

        } else if (b3 && b4) {
            tStart = 9;
            tStop = 11;

        } else if (b3) {
            tStart = 9;
            tStop = 10;



            //10 to 18



        } else if (b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11) {
            tStart = 10;
            tStop = 18;

        } else if (b4 && b5 && b6 && b7 && b8 && b9 && b10) {
            tStart = 10;
            tStop = 17;

        } else if (b4 && b5 && b6 && b7 && b8 && b9) {
            tStart = 10;
            tStop = 16;

        } else if (b4 && b5 && b6 && b7 && b8) {
            tStart = 10;
            tStop = 15;

        } else if (b4 && b5 && b6 && b7) {
            tStart = 10;
            tStop = 14;

        } else if (b4 && b5 && b6) {
            tStart = 10;
            tStop = 13;

        } else if (b4 && b5) {
            tStart = 10;
            tStop = 12;

        } else if (b4) {
            tStart = 10;
            tStop = 11;



            //11 to 18



        } else if (b5 && b6 && b7 && b8 && b9 && b10 && b11) {
            tStart = 11;
            tStop = 18;

        } else if (b5 && b6 && b7 && b8 && b9 && b10) {
            tStart = 11;
            tStop = 17;

        } else if (b5 && b6 && b7 && b8 && b9) {
            tStart = 11;
            tStop = 16;

        } else if (b5 && b6 && b7 && b8) {
            tStart = 11;
            tStop = 15;

        } else if (b5 && b6 && b7) {
            tStart = 11;
            tStop = 14;

        } else if (b5 && b6) {
            tStart = 11;
            tStop = 13;

        } else if (b5) {
            tStart = 11;
            tStop = 12;


            //12 t0 18



        } else if (b6 && b7 && b8 && b9 && b10 && b11) {
            tStart = 12;
            tStop = 18;

        } else if (b6 && b7 && b8 && b9 && b10) {
            tStart = 12;
            tStop = 17;

        } else if (b6 && b7 && b8 && b9) {
            tStart = 12;
            tStop = 16;

        } else if (b6 && b7 && b8) {
            tStart = 12;
            tStop = 15;

        } else if (b6 && b7) {
            tStart = 12;
            tStop = 14;

        } else if (b6) {
            tStart = 12;
            tStop = 13;



            //13 to 18



        } else if (b7 && b8 && b9 && b10 && b11) {
            tStart = 13;
            tStop = 18;

        } else if (b7 && b8 && b9 && b10) {
            tStart = 13;
            tStop = 17;

        } else if (b7 && b8 && b9) {
            tStart = 13;
            tStop = 16;

        } else if (b7 && b8) {
            tStart = 13;
            tStop = 15;

        } else if (b7) {
            tStart = 13;
            tStop = 14;



            //14 to 18

        } else if (b8 && b9 && b10 && b11) {
            tStart = 14;
            tStop = 18;

        } else if (b8 && b9 && b10) {
            tStart = 14;
            tStop = 17;

        } else if (b8 && b9) {
            tStart = 14;
            tStop = 16;

        } else if (b8) {
            tStart = 14;
            tStop = 15;


            //15 to 18


        } else if (b9 && b10 && b11) {
            tStart = 15;
            tStop = 18;

        } else if (b9 && b10) {
            tStart = 15;
            tStop = 17;

        } else if (b9) {
            tStart = 15;
            tStop = 16;


            //16 to 18


        } else if (b10 && b11) {
            tStart = 16;
            tStop = 18;

        } else if (b10) {
            tStart = 16;
            tStop = 17;



            //17 to 18


        } else if (b11) {
            tStart = 17;
            tStop = 18;


        }



        let tStartString = "";
        let tStopString = "";

        if (tStart == 7) {
            tStartString = "07.00am";
        }

        if (tStop == 8) {
            tStopString = "08.00am"
        }

        if (tStart == 8) {
            tStartString = "08.00am";
        }

        if (tStop == 9) {
            tStopString = "09.00am"
        }

        if (tStart == 9) {
            tStartString = "09.00am";
        }

        if (tStop == 10) {
            tStopString = "10.00am"
        }

        if (tStart == 10) {
            tStartString = "10.00am";
        }

        if (tStop == 11) {
            tStopString = "11.00am"
        }

        if (tStart == 11) {
            tStartString = "11.00am";
        }

        if (tStop == 12) {
            tStopString = "12.00pm"
        }

        if (tStart == 12) {
            tStartString = "12.00pm";
        }

        if (tStop == 13) {
            tStopString = "01.00pm"
        }

        if (tStart == 13) {
            tStartString = "01.00pm";
        }


        if (tStop == 14) {
            tStopString = "02.00pm"
        }

        if (tStart == 14) {
            tStartString = "02.00pm";
        }

        if (tStop == 15) {
            tStopString = "03.00pm"
        }

        if (tStart == 15) {
            tStartString = "03.00pm";
        }

        if (tStop == 16) {
            tStopString = "04.00pm"
        }

        if (tStart == 16) {
            tStartString = "04.00pm";
        }

        if (tStop == 17) {
            tStopString = "05.00pm"
        }

        if (tStart == 17) {
            tStartString = "05.00pm";
        }

        if (tStop == 18) {
            tStopString = "06.00pm"
        }

        let tableDurationMessage = `${tStartString} to ${tStopString}`;
        document.getElementById("time").innerText = tableDurationMessage;

    }








    function checkPeakCount() {

        let peakCount = 0;

        if (checkPeak1 == true && checkPeak2 == true && checkPeak3 == true && checkPeak4 == true && checkPeak5 == true && checkPeak6 == true) {
            peakCount = 6;
        } else if (checkPeak1 == true && checkPeak2 == true && checkPeak3 == true && checkPeak4 == true && checkPeak5 == true) {
            peakCount = 5;
        } else if (checkPeak1 == true && checkPeak2 == true && checkPeak3 == true && checkPeak4 == true) {
            peakCount = 4;
        } else if (checkPeak1 == true && checkPeak2 == true && checkPeak3 == true) {
            peakCount = 3;
        } else if (checkPeak1 == true && checkPeak2 == true) {
            peakCount = 2;
        } else if (checkPeak1 == true) {
            peakCount = 1;
        }


        else if (checkPeak2 == true && checkPeak3 == true && checkPeak4 == true && checkPeak5 == true && checkPeak6 == true) {
            peakCount = 5;
        } else if (checkPeak2 == true && checkPeak3 == true && checkPeak4 == true && checkPeak5 == true) {
            peakCount = 4;
        } else if (checkPeak2 == true && checkPeak3 == true && checkPeak4 == true) {
            peakCount = 3;
        } else if (checkPeak2 == true && checkPeak3 == true) {
            peakCount = 2;
        } else if (checkPeak2 == true) {
            peakCount = 1;
        }



        else if (checkPeak3 == true && checkPeak4 == true && checkPeak5 == true && checkPeak6 == true) {
            peakCount = 4;
        } else if (checkPeak3 == true && checkPeak4 == true && checkPeak5 == true) {
            peakCount = 3;
        } else if (checkPeak3 == true && checkPeak4 == true) {
            peakCount = 3;
        } else if (checkPeak3 == true) {
            peakCount = 1;
        }

        else if (checkPeak4 == true && checkPeak5 == true && checkPeak6 == true) {
            peakCount = 3;
        } else if (checkPeak4 == true && checkPeak5 == true) {
            peakCount = 2;
        } else if (checkPeak4 == true) {
            peakCount = 1;
        }


        else if (checkPeak5 == true && checkPeak6 == true) {
            peakCount = 2;
        } else if (checkPeak5 == true) {
            peakCount = 1;
        }


        else if (checkPeak6 == true) {
            peakCount = 1;
        }

        else { peakCount = 0 }


        sessionStorage.setItem("session-peakCount", peakCount);

    }

    function setSessionStorage() {

        sessionStorage.setItem("session-date", document.getElementById("day").innerText);
        sessionStorage.setItem("session-time", document.getElementById("time").innerText);
        sessionStorage.setItem("session-duration", document.getElementById("duration").innerText);
        sessionStorage.setItem("session-total", document.getElementById("total").innerText);

        sessionStorage.setItem("session-SL_A_Count", document.getElementById("sl_A_Count").innerText);
        sessionStorage.setItem("session-SL_C_Count", document.getElementById("sl_C_Count").innerText);
        sessionStorage.setItem("session-SL_A_Price", document.getElementById("sl_A_Price").innerText);
        sessionStorage.setItem("session-SL_C_Price", document.getElementById("sl_C_Price").innerText);


        sessionStorage.setItem("session-F_A_Count", document.getElementById("f_A_Count").innerText);
        sessionStorage.setItem("session-F_C_Count", document.getElementById("f_C_Count").innerText);
        sessionStorage.setItem("session-F_A_Price", document.getElementById("f_A_Price").innerText);
        sessionStorage.setItem("session-F_C_Price", document.getElementById("f_C_Price").innerText);

        sessionStorage.setItem("session-I_Count", document.getElementById("i_Count").innerText);

        ///////////////////////
    }

}


if (window.location.href == "https://runeesha2005.github.io/HTML_Assignment/WDOS%20Assignment/details.html") {





    document.getElementById("day").innerText = sessionStorage.getItem("session-date");
    document.getElementById("time").innerText = sessionStorage.getItem("session-time");
    document.getElementById("duration").innerText = sessionStorage.getItem("session-duration");
    document.getElementById("total").innerText = sessionStorage.getItem("session-total");



    document.getElementById("sl_A_Count").innerText = sessionStorage.getItem("session-SL_A_Count");
    document.getElementById("sl_C_Count").innerText = sessionStorage.getItem("session-SL_C_Count");
    document.getElementById("sl_A_Price").innerText = sessionStorage.getItem("session-SL_A_Price");
    document.getElementById("sl_C_Price").innerText = sessionStorage.getItem("session-SL_C_Price");


    document.getElementById("f_A_Count").innerText = sessionStorage.getItem("session-F_A_Count");
    document.getElementById("f_C_Count").innerText = sessionStorage.getItem("session-F_C_Count");
    document.getElementById("f_A_Price").innerText = sessionStorage.getItem("session-F_A_Price");
    document.getElementById("f_C_Price").innerText = sessionStorage.getItem("session-F_C_Price");

 document.getElementById("i_Count").innerText = sessionStorage.getItem("session-I_Count");


    if (sessionStorage.getItem("session-SL_A_Cost") != 0) {
        document.getElementById("sl_Adult").style.display = "";
    }

    if (sessionStorage.getItem("session-SL_C_Cost") != 0) {
        document.getElementById("sl_Child").style.display = "";
    }

    if (sessionStorage.getItem("session-F_A_Cost") != 0) {
        document.getElementById("f_Adult").style.display = "";
    }

    if (sessionStorage.getItem("session-F_C_Cost") != 0) {
        document.getElementById("f_Child").style.display = "";
    }

    if (sessionStorage.getItem("session-Infant_Count") != 0) {
        document.getElementById("infant").style.display = "";
    }










    //DETAILS PAGE

    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const fullName = document.getElementById("fullName").value;
        const mobileNumber = document.getElementById("tel").value;
        const email = document.getElementById("email").value;
        const confirmEmail = document.getElementById("confirmEmail").value;
        const gender = document.getElementById("gender").value;


        var nameConditions = /^[A-Za-z\s]+$/;
        var emailConditions = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    
    
    
        if (!fullName.match(nameConditions)) {
            alert("Name Error");
            
            return false;
        }


        if (!email.match(emailConditions)) {
            alert("Email Error");
            return false;
        }


    

    
        if (!confirmEmail.match(email)) {
            alert("Email Match Error");
            return false;
        }

    



        

        // Basic validation
        if (
            fullName == "" &&
            mobileNumber == "" &&
            email == ""
        ) {
            alert("Please fill in all the required fields.");
            return;
        }



        if (email != confirmEmail) {
            alert("Email and Confirm Email fields should match.");
            return;
        }

        // Your form processing code here...
        // For example, you can send the data to a server using fetch() or XMLHttpRequest.

        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();

        sessionStorage.setItem("session-fullName",fullName);
        sessionStorage.setItem("session-email",email);
        sessionStorage.setItem("session-mobile",mobileNumber);

        return true;
    });

    function genderPicker(pickedGender) {
        let choice = pickedGender.options[pickedGender.selectedIndex].text;
        sessionStorage.setItem("session-gender", choice);
    }

}




if (window.location.href == "https://runeesha2005.github.io/HTML_Assignment/WDOS%20Assignment/payment.html") {

//payment page



    document.getElementById("day").innerText = sessionStorage.getItem("session-date");
    document.getElementById("time").innerText = sessionStorage.getItem("session-time");
    document.getElementById("duration").innerText = sessionStorage.getItem("session-duration");
    document.getElementById("total").innerText = sessionStorage.getItem("session-total");



    document.getElementById("sl_A_Count").innerText = sessionStorage.getItem("session-SL_A_Count");
    document.getElementById("sl_C_Count").innerText = sessionStorage.getItem("session-SL_C_Count");
    document.getElementById("sl_A_Price").innerText = sessionStorage.getItem("session-SL_A_Price");
    document.getElementById("sl_C_Price").innerText = sessionStorage.getItem("session-SL_C_Price");


    document.getElementById("f_A_Count").innerText = sessionStorage.getItem("session-F_A_Count");
    document.getElementById("f_C_Count").innerText = sessionStorage.getItem("session-F_C_Count");
    document.getElementById("f_A_Price").innerText = sessionStorage.getItem("session-F_A_Price");
    document.getElementById("f_C_Price").innerText = sessionStorage.getItem("session-F_C_Price");

     document.getElementById("i_Count").innerText = sessionStorage.getItem("session-I_Count");



    if (sessionStorage.getItem("session-SL_A_Cost") != 0) {
        document.getElementById("sl_Adult").style.display = "";
    }

    if (sessionStorage.getItem("session-SL_C_Cost") != 0) {
        document.getElementById("sl_Child").style.display = "";
    }

    if (sessionStorage.getItem("session-F_A_Cost") != 0) {
        document.getElementById("f_Adult").style.display = "";
    }

    if (sessionStorage.getItem("session-F_C_Cost") != 0) {
        document.getElementById("f_Child").style.display = "";
    }

    if (sessionStorage.getItem("session-Infant_Count") != 0) {
        document.getElementById("infant").style.display = "";
    }




    let total = document.getElementById("total").innerText;
    console.log(total);
    document.getElementById("payBtn").innerText = `PAY ${total}`;



    


    function validateCardDetails() {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        const nameOnCard = document.getElementById('nameOnCard').value;

        // Add your custom validation logic here (e.g., check for valid card number, expiry date, etc.)
        // For simplicity, we will check if all fields are non-empty.
        return cardNumber.trim() !== '' &&
            expiryDate.trim() !== '' &&
            cvv.trim() !== '' &&
            nameOnCard.trim() !== '';
    }

    function enablePayButton() {
        const isValid = validateCardDetails();
        document.getElementById('payButton').disabled = !isValid;
        return isValid;
    }

    function redirectToConfirmationPage() {
        if (enablePayButton()) {
            // Redirect to confirmation page (replace 'confirmation.html' with the actual URL)
            window.location.href = 'https://runeesha2005.github.io/HTML_Assignment/WDOS%20Assignment/confirmation.html';
        }
        // Prevent form submission
        return false;
    }

}


if (window.location.href == "https://runeesha2005.github.io/HTML_Assignment/WDOS%20Assignment/confirmation.html") {

    //confirmation page

    document.getElementById("mobile").innerText = sessionStorage.getItem("session-mobile");
    document.getElementById("name").innerText = sessionStorage.getItem("session-fullName");
    document.getElementById("email").innerText = sessionStorage.getItem("session-email");
    document.getElementById("gender").innerText = sessionStorage.getItem("session-gender")


    document.getElementById("day").innerText = sessionStorage.getItem("session-date");
    document.getElementById("time").innerText = sessionStorage.getItem("session-time");
    document.getElementById("duration").innerText = sessionStorage.getItem("session-duration");
    document.getElementById("total").innerText = sessionStorage.getItem("session-total");



    document.getElementById("sl_A_Count").innerText = sessionStorage.getItem("session-SL_A_Count");
    document.getElementById("sl_C_Count").innerText = sessionStorage.getItem("session-SL_C_Count");
    document.getElementById("sl_A_Price").innerText = sessionStorage.getItem("session-SL_A_Price");
    document.getElementById("sl_C_Price").innerText = sessionStorage.getItem("session-SL_C_Price");


    document.getElementById("f_A_Count").innerText = sessionStorage.getItem("session-F_A_Count");
    document.getElementById("f_C_Count").innerText = sessionStorage.getItem("session-F_C_Count");
    document.getElementById("f_A_Price").innerText = sessionStorage.getItem("session-F_A_Price");
    document.getElementById("f_C_Price").innerText = sessionStorage.getItem("session-F_C_Price");

     document.getElementById("i_Count").innerText = sessionStorage.getItem("session-I_Count");



    if (sessionStorage.getItem("session-SL_A_Cost") != 0) {
        document.getElementById("sl_Adult").style.display = "";
    }

    if (sessionStorage.getItem("session-SL_C_Cost") != 0) {
        document.getElementById("sl_Child").style.display = "";
    }

    if (sessionStorage.getItem("session-F_A_Cost") != 0) {
        document.getElementById("f_Adult").style.display = "";
    }

    if (sessionStorage.getItem("session-F_C_Cost") != 0) {
        document.getElementById("f_Child").style.display = "";
    }

    if (sessionStorage.getItem("session-Infant_Count") != 0) {
        document.getElementById("infant").style.display = "";
    }



}
