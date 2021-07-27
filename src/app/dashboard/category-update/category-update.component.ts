import {Component, OnInit} from '@angular/core';
import {CommonservicesService} from '../../../helper/commonservices/commonservices.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})


export class CategoryUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private activatedroute: ActivatedRoute, private CS: CommonservicesService) {
  }

  imgBase64Path = null;
  submitted = false;
  categoryForm: FormGroup
  loading = false
  error = false
  id = this.activatedroute.snapshot.params.id && this.activatedroute.snapshot.params.id != 'null' ? this.activatedroute.snapshot.params.id : null;
  parentCategoryId = this.activatedroute.snapshot.params.parentId && this.activatedroute.snapshot.params.parentId != 'null' ? this.activatedroute.snapshot.params.parentId : null;
  UploadedImage = null;
  category = []

  ngOnInit() {
    console.log("parentCategoryId", this.parentCategoryId)
    this.createForm();
    if (this.id) {
      this.getItem();
    }
    let _this = this
    this.CS.getitems({type: 'category', list: true}).subscribe(response => {
      if (response.success) {
        _this.category = response.data && response.data.hits.length ? response.data.hits : []
        console.log("_this.category", _this.category)
      }
    });
  }

  getItem() {
    var params = {objectID: this.id}
    let _this = this
    this.CS.getItem(params).subscribe(response => {
      if (response.success) {
        _this.setForm(response.data)
      }
    });

  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      parent: [this.parentCategoryId ? this.parentCategoryId : 'root'],
      type: 'category'
    });
  }

  setForm(data) {
    this.categoryForm.get('name').setValue(data.name);
    this.categoryForm.get('description').setValue(data.description);
    this.categoryForm.get('parent').setValue(data.parent);
    this.UploadedImage = data.Image ? data.Image : null;
  }

  get form() {
    return this.categoryForm.controls;
  }

  fileChangeEvent(fileInput: any) {
    let _this = this
    if (fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          _this.imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  submit() {
    let _this = this;
    this.submitted = true;
    if (this.categoryForm.status == 'VALID') {
      let params = this.categoryForm.value
      params['Image'] = _this.imgBase64Path
      if (_this.id) {
        params['objectID'] = _this.id;
      }
      if (_this.UploadedImage) {
        params['UploadedImage'] = _this.UploadedImage;
      }
      _this.loading = true
      _this.CS.itemUpdate(params).subscribe(response => {
        _this.loading = false
        if (response.success) {
          _this.loading = false
          if (_this.parentCategoryId) {
            _this.router.navigate(['/dashboard/category', _this.parentCategoryId]);
          } else {
            _this.router.navigate(['/dashboard']);
          }

        } else {
          _this.error = true;
        }
      });
    }
  }
}
