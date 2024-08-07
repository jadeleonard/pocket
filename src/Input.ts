type ChangeEvent = Event & {
    target: HTMLInputElement;
  };
type AutoComplete = 'on' | 'off' | 'name' | 'email' | 'username' | 'current-password' | 'new-password' | 'organization' | 'address' | 'country' | 'tel' | 'url' | 'number' | 'birthday' | 'postal-code';
  interface InputProps {
    className?: string;
    id?: string;
    name?: string;
    value?: string;
    onChange?: (event: ChangeEvent) => void;
  
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    accept?: string;
    alt?: string;
    autocapitalize?: AutoComplete
    autocomplete?: 'on' | 'off' | string;
    capture?: string;
    checked?: boolean;
    dirname?: string;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: string;
    formmethod?: 'get' | 'post';
    formnovalidate?: boolean;
    formtarget?: string;
    height?: number;
    list?: string;
    max?: number | string;
    maxlength?: number;
    min?: number | string;
    minlength?: number;
    multiple?: boolean;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    width?: number;
  }
  
  const Input = (props: InputProps): HTMLInputElement => {
    const input = document.createElement('input') as HTMLInputElement;
  
    if (props.className) input.className = props.className;
    if (props.id) input.id = props.id;
    if (props.name) input.name = props.name;
    if (props.value) input.value = props.value;
 
    if (props.onChange) {
        input.onchange = (event) => {
          props.onChange!(event as ChangeEvent);
        };
      }
    
    if (props.type) input.type = props.type;
    if (props.accept) input.accept = props.accept;
    if (props.alt) input.alt = props.alt;
    if (props.autocapitalize) input.autocapitalize = props.autocapitalize;
    
    if (props.capture) input.capture = props.capture;
    if (props.checked !== undefined) input.checked = props.checked;
    if (props.dirname) input.dirName = props.dirname;
    if (props.disabled !== undefined) input.disabled = props.disabled;
    
    if (props.formaction) input.formAction = props.formaction;
    if (props.formenctype) input.formEnctype = props.formenctype;
    if (props.formmethod) input.formMethod = props.formmethod;
    if (props.formnovalidate !== undefined) input.formNoValidate = props.formnovalidate;
    if (props.formtarget) input.formTarget = props.formtarget;
    if (props.height !== undefined) input.height = props.height;

    if (props.max !== undefined) input.max = props.max.toString();
    if (props.maxlength !== undefined) input.maxLength = props.maxlength;
    if (props.min !== undefined) input.min = props.min.toString();
    if (props.minlength !== undefined) input.minLength = props.minlength;
    if (props.multiple !== undefined) input.multiple = props.multiple;
    if (props.pattern) input.pattern = props.pattern;
    if (props.placeholder) input.placeholder = props.placeholder;
    if (props.readonly !== undefined) input.readOnly = props.readonly;
    if (props.required !== undefined) input.required = props.required;
    if (props.size !== undefined) input.size = props.size;
    if (props.src) input.src = props.src;
    if (props.step !== undefined) input.step = props.step.toString();
    if (props.width !== undefined) input.width = props.width;
  
    return input;
  };
  
  export { Input };
  