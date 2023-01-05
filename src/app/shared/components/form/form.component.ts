import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Form } from 'src/app/core/interfaces/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnChanges {
  hide = true;
  @Input() FormJson: any = null;
  @Input() NameButton: string = '';
  @Input() titleForm: string = '';
  @Input() reset: boolean = false;
  @Output() DelegateEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  fg!: FormGroup;
  Forms: Form[] = [];
  form!: Form;



  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.FormJson == null) return;
    let DataObject = this.FormJson;
    let ObjectProps = Object.keys(DataObject).map(prop => {
      return Object.assign({}, { key: prop }, DataObject[prop]);
    });

    const FormGroup1: any = {};
    for (let prop of Object.keys(DataObject)) {
      FormGroup1[prop] = new FormControl(DataObject[prop].value || '', this.MapValidators(DataObject[prop].validation));
    }
    this.fg = new FormGroup(FormGroup1);
    this.form = {
      Id: new Date().getUTCMilliseconds().toString(),
      FormGroup: this.fg,
      MetaData: ObjectProps,
      TransactionalData: []
    };
    //console.log("🚀 ~ file: form.component.ts ~ line 38 ~ FormComponent ~ ngOnChanges ~ this.form", this.form)
    //this.fg.valueChanges.subscribe((values) => this.DelegateEvent.emit(this.fg));
    //this.Forms.push(this.form);
    if (this.reset) {
      this.ResetForm();
    }
  }

  private MapValidators(validators: any) {
    const FormValidators: any[] = [];
    if (validators) {
      for(const validation of Object.keys(validators)) {
        if (validation === 'required') {
          FormValidators.push(Validators.required);
        } else if (validation === 'minLength') {
          FormValidators.push(Validators.minLength(validators[validation]));
        } else if (validation === 'maxLength') {
          FormValidators.push(Validators.maxLength(validators[validation]));
        } else if (validation == 'email') {
          FormValidators.push(Validators.email);
        }
      }
    }
    return FormValidators;
  }

  public HasValidator(ControlName: string, Validator: string): boolean {
    let Control: AbstractControl = this.fg.controls[ControlName];
    switch (Validator) {
      case 'required':
        Control.setValue('');
        break;
      case 'pattern':
        Control.setValue('3');
        break;
    }
    if (Control.validator != null && Control.validator(Control) != null) {
      let hasValidator: boolean = !!Control.validator(Control)!.hasOwnProperty(Validator);
      return hasValidator;
    }
    return false;
  }

  OnSubmit(Form: FormGroup) {
    console.log('t')
    this.DelegateEvent.emit(Form);
  }

  ResetForm() {
    this.form.FormGroup.reset();
  }

  GetErrorMessage(key: string): string {
    let error: string = ''; 
    for (const keyForm in this.form.FormGroup.get(key)!.errors) {
      switch(keyForm) {
        case 'required':
          error = `El campo ${key} es obligatorio`
          break;
        case 'minlength':
          error = `El campo ${key} no cumple con los caracteres minimos`
          break;
        default:
          error = `El campo ${key} tiene el siguiente error ${keyForm}`
          break;
      }
    }
    return error;
  }

  hideEvent(event: Event){
    console.log(event)
    event.preventDefault();
    this.hide = !this.hide
  }
}
