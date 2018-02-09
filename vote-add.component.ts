import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UploadFile, NzMessageService } from 'ng-zorro-antd';
import { HttpRequest, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'vote-add',
  templateUrl: './vote-add.component.html',
  styleUrls: ['./vote-add.component.css']
})

export class VoteAddComponent implements OnInit {
  img: UploadFile[] = [];
  endTime = null;
  uploading = false;
  avatarUrl: string;

  ngOnInit() {}

  constructor(
    private msg: NzMessageService,
    private http: HttpClient) {
  }

  beforeUpload = (file: UploadFile) => {
    const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif');
    if (!isJPG) {
      this.msg.error('只能上传图片文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 1;
    if (!isLt2M) {
      this.msg.error('文件大小不能超过1MB!');
    }
    const fileLimit = this.img.length < 1
    if (!fileLimit) {
      this.msg.error('此处只能上传一个文件!');
    }

    return isJPG && isLt2M && fileLimit;
  }

  remove = (file: UploadFile) => {
    this.img.splice(0, this.img.length);
  }

  handleChange(info): void {
    alert(4);  //多次出现
    // const fileList = info.fileList;
    // 2. read from response and show file link
    // if (info.file.response) {
    //   info.file.url = info.file.response.url;
    // }
    // 3. filter successfully uploaded files according to response from server
    // this.fileList = fileList.filter(item => {
    //   if (item.response) {
    //     return item.response.status === 'success';
    //   }
    //   return true;
    // });
  }
}