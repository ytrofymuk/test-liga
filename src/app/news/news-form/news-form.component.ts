import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit{

  @Output()
  postCreated = new EventEmitter();

  public newsForm!: FormGroup;

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  get title() {
    return this.newsForm.get('title');
  }

  get description() {
    return this.newsForm.get('description');
  }

  submitForm(form: FormGroup) {
    if (form.valid) {
      const post = form.value;
      this.postCreated.emit(post)
      this.newsForm.reset();
    }
  }

}
