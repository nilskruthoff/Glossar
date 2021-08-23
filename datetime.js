window.onload = function ()
{
    renderLocalStoredDateTime('datetime', getLocalStoredDateTime('dateTime'));
}

function saveDate()
{
    let now = new Date();
    let currentDate = now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear();
    let currentTime = now.getHours() + ":" + minuteCheck(now.getMinutes());
    let dateTime = currentDate + " " + currentTime;
    document.getElementById("datetime").innerHTML = dateTime;
    setLocalStoredDateTime("dateTime", dateTime);
}

function minuteCheck(minute)
{
    if (minute < 10) {
        minute = "0" + minute;
    }
    return minute;
}

function setLocalStoredDateTime(keyName, dateTime)
{
    localStorage.setItem(keyName,dateTime);
}

function getLocalStoredDateTime(keyName)
{
    return localStorage.getItem(keyName);
}

function renderLocalStoredDateTime(id, dateTime)
{
    document.getElementById(id).innerHTML = dateTime;
}