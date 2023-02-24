var host = 'localhost'

moment.locale('zh-tw', {
    week: {
        dow: 1
    }
});

function initApp(callback) {
    let liffID = '1657127222-vlpYeZjK';

    liff.init({
        liffId: liffID
    }).then(function () {
        console.log('LIFF init');

        // 這邊開始寫使用其他功能

        // login call, only when external browser or LINE's in-app browser is used
        if (!liff.isLoggedIn()) {
            liff.login();
        } else {

            // window.location.href = 'class.html';

            // fetchUser();

        }
    }).catch(function (error) {
        console.log(error);
        liff.logout();
    });
}

function fetchUser(callbacdk) {

    const token = liff.getIDToken();
    axios.get(`${host}/ccdartstudio/me`, {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then(function (response) {
            console.log(response)
            callbacdk(response.data.obj)
        }).catch(function (error) {
            console.log(error);
            callbacdk(null)
        });
}