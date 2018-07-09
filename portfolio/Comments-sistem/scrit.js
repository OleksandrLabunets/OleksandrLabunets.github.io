let comments = [];
loadComment();

document.getElementById('comment-add').onclick = function() {
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000)
    }

    if (commentName.value == '' || commentBody.value == '') {
        alert('Enter name or comment');
    }
    else {
    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComents();
    }

}

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComment() {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComents();
}

function showComents() {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item) {
       out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
       out += `<p class="alert alert-primary">${item.name}</p>`;
       out += `<p class="alert alert-success">${item.body}</p>`;
    });
    commentField.innerHTML = out;
}

    function timeConverter(UNIX_timestamp){
        // var a = new Date(UNIX_timestamp * 1000);
        // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        // var year = a.getFullYear();
        // var month = months[a.getMonth()];
        // var date = a.getDate();
        // var hour = a.getHours();
        // var min = a.getMinutes();
        // var sec = a.getSeconds();
        // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        // return time;
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
        return time;
}


