import { FeedModel } from './../../../models/Feed';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  editorConfig = {
    apiKey: 'zznsxh4kwnf6at2cmvi47bnc4ztgo7vqypzj347u95dsj7lz', // 🔑 Замените на реальный ключ
    plugins: 'lists link image table',
    toolbar: 'undo redo | bold italic | bullist numlist | link image table',
    menubar: false,
    height: 400,
    content_css: 'https://cdn.tiny.cloud/1/ваш-api-ключ/tinymce/6.8.2/skins/content/default/content.min.css'
  };
  constructor(public dialogRef: MatDialogRef<CreateEditComponent>, @Inject(MAT_DIALOG_DATA) public data: FeedModel) { }

  ngOnInit(): void {
  }

}
