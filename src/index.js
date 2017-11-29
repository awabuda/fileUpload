window.onload = function () {
    var upload = {
        imgArr:[],
        tpl:'<div class="img_wrap"> <i class="close"></i> <img src="${url}" alt="${name}"> </div>',
        init: function () {
            var _this = this;
            document.getElementById('upfile').onchange = function (e) {
                for (var i = 0 ; i< this.files.length; i++ ){
                    console.log(this.files[i])
                    document.getElementsByClassName('img_upload')[0].innerHTML += _this.tpl.replace('${url}',URL.createObjectURL(this.files[i])).replace('${name}',this.files[i].name);
                    _this.imgArr.push(this.files[i]);
                    _this.deleteDom()
                }
            }
            document.getElementsByClassName('submit_btn')[0].onclick = function (){
                _this._ajax()
            }
        },
        deleteDom: function () {
            var _this = this;
            var close_btn = document.getElementsByClassName('close');
            for (var i = 0; i< close_btn.length; i++) {
                close_btn[i].index =i;
                close_btn[i].onclick = function (e) {
                    this.parentNode.parentNode.removeChild(this.parentNode);
                    _this.imgArr.splice(this.index,1);

                }
            }
        },
        _ajax: function () {
            if (!this.imgArr.length) {
                alert('请选择图片');
                return ;
            }
            var formdata = new FormData();
                formdata.append('file',this.imgArr);
                formdata.append('name','1111')
            var xhr =  new XMLHttpRequest();

            xhr.open('POST','');
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState ==4 && xhr.status == 200) {//状态

                }
            }
            xhr.upload.onprogress = function (e) {
                console.log(e)
            }
            xhr.send(formdata)
        }
    }
    upload.init()
}
